import { ElementRef, ViewChild } from '@angular/core';
import { HttpSuccessResponse } from './../../shared/interfaces/http-success-response';
import { RequestService } from './../../shared/services/request/request.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, finalize, map, startWith, switchMap, tap } from 'rxjs/operators';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { GapiSession } from './../../../infrastructure/sessions/gapi.session';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';
import { format } from 'url';
// import { write } from 'fs';

interface Books {
  post_id?:number;
  icon?: string;
  title: string;
  author: string;
  reviews: string;
  rating?:number;
}
interface Tags {
  tags_id?:number;
  tags_desc?: string;
}

class Page {
  length:number; //Total Records
  pageSize:number; //Rows Per page
  pageIndex:number; //Current page (Starting from 0)
  constructor(page){
    this.setData(page);
  }
  public setData(page){
    this.length = page.length;
    this.pageSize = page.pageSize;
    this.pageIndex = page.pageIndex;
  }
}

// interface screen {
//  title:string;
//  screen:number;
// }

const SCREEN = {
  LISTING :1,
  BOOK_DETAILS:2,
  REVIEWS_SHOW :3,
  WRITE_REVIEW :4
}

@Component({
  selector: 'app-books-modal',
  templateUrl: './books-modal.component.html',
  styleUrls: ['./books-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BooksModalComponent implements OnInit, AfterViewInit {
  // selectedId:number =null;
  user;
  actionStack = ['list'];
  loading = false;
  filteredTags: Observable<Tags[]>;
  allTags:Tags[] = [];// [{"tags_id":1,"tags_desc":"Wow"},{"tags_id":2,"tags_desc":"Exciting"},{"tags_id":3,"tags_desc":"Easy to read"},{"tags_id":4,"tags_desc":"Page turner"}];
  SCREENS = SCREEN;
  currentScreen = this.SCREENS.LISTING;
  selectedOption = '1'
  selectedBook:Books = null;
  title:string = 'Select a book';
  page:Page = new Page({length:100, pageSize:10, pageIndex:0});
  filters = {
    search_key:'',
    paged:this.page.pageIndex+1,
    order_by:'desc',
    posts_per_page:this.page.pageSize
  }

  displayedColumns: string[] = ['icon','title', 'author', 'reviews', 'view', 'edit'];
  tabIndex = 0;
  dataSource:MatTableDataSource<Books>;
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;

  constructor(
    private fb: FormBuilder,
    protected requestService: RequestService,
    private gapiSession: GapiSession,
    private _snackBar: MatSnackBar
    // private http: HttpClient
    ) {
      this.user = this.gapiSession.googleAuth.currentUser.get().getBasicProfile();
      this.saveUser(this.user);

    }
    saveUser(user){
      let form = new FormData();
      form.append('email', user.getEmail());
      form.append('user_name', user.getName());
      form.append('google_id', user.getId());
    this.requestService.sendRequest('user_google.php', 'POST', form).subscribe((response:any)=>{
      console.table(response.data);
    }, (error)=>{
      console.table(error);
    })

    }
  ngOnInit() {

    this.fetchData();

  }
  changeOrder(){
    this.filters.order_by = (this.filters.order_by =='asc')?'desc':'asc';
    this.fetchData();
  }
  checkAndPush(page){
    let found = this.actionStack.find((data)=>{
      return data == page;
    })
    if(!found){
      this.actionStack.push(page);
    }
  }
  goTo(page, book?){
    switch(page){
      case 'list':
        this.actionStack=[];
        this.actionStack.push('list');
        this.showList();
        break;

      case 'review-details':
        this.checkAndPush('review-details');
        this.showReview(book || this.selectedBook);
        break;

      case 'write-review':
        this.checkAndPush('write-review');
        this.writeReview(book || this.selectedBook);
        break;

      case 'top-review':
        this.checkAndPush('top-review');
        this.showDetails(book || this.selectedBook);
        break;
    }
        console.log(this.actionStack);
  }
  goBack(){
    let backScreen = 'list';
    if(this.actionStack.length>1){
      backScreen = this.actionStack[this.actionStack.length-2];
    }
    console.log(backScreen);
    this.actionStack.pop();
    switch(backScreen){
      case 'list':
        this.showList();
        break;

      case 'review-details':
        this.showReview(this.selectedBook);
        break;

      case 'write-review':
        this.writeReview(this.selectedBook);
        break;

      case 'top-review':
        this.showDetails(this.selectedBook);
        break;
    }
  }
  pageChanged(event){
    this.page.setData(event);
    this.fetchData();
    console.log(this.filters);
  }
  setFilters(){
    console.log(this.filters);
    this.filters.paged = this.page.pageIndex+1;
    this.filters.posts_per_page = this.page.pageSize;
  }
  fetchData(){
    this.loading= true;
    this.setFilters();
    console.log(this.filters);
    this.requestService.sendRequest('books.php', 'GET', this.filters).subscribe((response:any)=>{
      console.table(response.data);
        this.dataSource= new MatTableDataSource<Books>(response.data);
        console.log(this.dataSource);
        this.page.length = response.totalRecords;
        ////////////////////////////////////////////////////////
        // this.goTo('review-details', response.data[0]);
        //////////////////////////////////////////////////////////
        this.loading= false;
    }, (error)=>{
        this.dataSource= new MatTableDataSource<Books>([]);
        this.loading= false;
    });
    this.requestService.sendRequest('tags.php', 'GET').subscribe((response:any)=>{
        this.allTags= response;
    }, (error)=>{
    });
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  tabChanged(event){
    this.tabIndex = event.index;
    switch(event.index){
      case 0:
      this.title = 'Select a book';
      break;
      case 1:
      this.title ="Write a review";
      break;
      case 2:
      this.title ="Review Details";
      break;
      case 3:
      this.title ="About Author";
      break;
    }
  }
  openURL(url){
    if(url)
    window.open(url, '_blank');
  }
  search(event){
    this.filters.search_key='';
    this.fetchData();
  }

  floor(number){
    return Math.floor(number);
  }

  showReview(book:Books){
    this.selectedBook = book;
    this.currentScreen =  this.SCREENS.REVIEWS_SHOW;
  }

  ///////////////////////////////////////////////////////
  global = {
    isReviewer:false,
    bookReview : {
      book_id: null,
      synopsis: "",
      genre: 'Historical',
      published: 0,
      pages: 0,
      subjects: [],
      likes: 0,
      dislikes: 0,
      optionalLink: "",
      top_tags: [],
      similar_books: [],
      reviews: []

    }
  }
  //////////////////////////////////////////////////////////
  writeReview(book:Books){

    this.reviewScreen.form = this.fb.group({
      reviewComment:['', Validators.required],
      tags: [''],
      similarBooks: [''],
      optionalLink:[''],
      bookId:['',  Validators.required],
      google_id:['',  Validators.required],
    });

    this.reviewScreen.recommendation = null;
    this.reviewScreen.similarBooks = [];
    this.reviewScreen.tags = [];
    this.reviewScreen.form.controls.bookId.setValue(book.post_id);
    this.reviewScreen.form.controls.google_id.setValue(this.user.getId());
    this.reviewScreen.form.controls.reviewComment.valueChanges.subscribe(val => {
      this.reviewScreen.updateWordCount(val);
    });

    this.reviewScreen.form.controls.similarBooks.valueChanges
    .pipe(
      debounceTime(500),
      tap(() => {
        this.reviewScreen.filteredBooks = [];
        this.reviewScreen.isLoading = true;
      }),
      switchMap(value => this.requestService.sendRequest('books.php', 'GET', {
          search_key:value,
          paged:1,
          order_by:'desc',
          posts_per_page:5
        })
        .pipe(
          finalize(() => {
            this.reviewScreen.isLoading = false
          }),
        )
      )
    )
    .subscribe(response => {
      if (response['data'] == undefined) {
        this.reviewScreen.filteredBooks = [];
      } else {
        this.reviewScreen.filteredBooks = response['data'];
      }
    });
    this.filteredTags = this.reviewScreen.form.controls.tags.valueChanges.pipe(
      startWith(null),
      map((tag: string | null)=>{
        console.log(tag);
        return tag ? this.reviewScreen._filter(tag) : this.allTags.slice();
      }));
      this.reviewScreen.filteredTags = this.filteredTags;
    this.selectedBook = book;
    this.currentScreen =  this.SCREENS.WRITE_REVIEW;
  }
  isReviewer(array){
    let google_id = this.user.getId();
    console.log(google_id, array);
    let found = array.find((value)=>{
      return value.google_id==google_id;
    });
    return found?true:false;
  }
  showDetails(book:Books){
    this.selectedBook = book;
    this.currentScreen =  this.SCREENS.BOOK_DETAILS;
    this.fetchDetailsInformation(book);
    // Temp code
    // let reviews=JSON.parse(JSON.stringify(this.detailsScreen.bookReview.reviews)) ;
    // this.detailsScreen.isReviewer = this.isReviewer(reviews);
    // this.detailsScreen.topReview = this.findMax(reviews);


  }
  showList(fetchData = false){
    this.selectedBook = null;
    this.currentScreen =  this.SCREENS.LISTING;
    if(fetchData)
    this.fetchData();
  }

  findMax(array, currentMax = null){
    if(array.length>0){
        let val = array.pop();
        if(currentMax){
            currentMax = val.helpful_count>currentMax.helpful_count?val:currentMax;
        }else{
            currentMax = val;
        }
        currentMax = val.helpful_count>currentMax?val.helpful_count:currentMax;
        return this.findMax(array, currentMax);

    }else{
        return currentMax;
    }
  }

  fetchDetailsInformation( book:Books ){
    let form = {
      book_id :book.post_id
    }
    this.requestService.sendRequest('get_book_reviews.php', 'GET', form).subscribe((response:any)=>{
      if(response.success){
        // Assigning to global book review which will automatically appear in book review and details screen.
        this.global.bookReview = response.data;
        let reviews = JSON.parse(JSON.stringify(this.global.bookReview.reviews));
        this.detailsScreen.topReview = this.findMax(reviews);
        this.global.isReviewer = this.isReviewer(reviews);
        let subjects = this.global.bookReview.subjects;
        this.global.bookReview.subjects = subjects?subjects:[];

      }
    }, (error)=>{
      console.log(error);
    })
  }
  detailsScreen = {
    isReviewer:this.global.isReviewer,
    topReview :{
      id: null,
      reviewComment: "",
      reviewer_name: "",
      google_id: null,
      helpful_count: null,
      review_date: null,
    }
  }
  reviewHelpful(review, helpful){
    let form = new FormData();
    form.append('review_id', review.id);
    form.append('google_id', this.user.getId());
    form.append('helpful', helpful);
    this.requestService.sendRequest('helpful_add.php', 'POST', form).subscribe((response:any)=>{
        if(response.success){
          review['hideHelpful']= true;
        }
        this._snackBar.open(response.message, null, {
          duration: 2000,
        });
    }, (error)=>{
      console.table(error);
    })
  }
  separatorKeysCodes: number[] = [];
  @ViewChild('tagsInput',{static:false}) tagsInput: ElementRef<HTMLInputElement>;
  @ViewChild('similarBookInput',{static:false}) similarBookInput: ElementRef<HTMLInputElement>;
  reviewScreen = {
    similarBookPlaceholder:'Search and Add Similar Books',
    tagPlaceholder:'Search and Add Tags',
    isLoading:false,
    recommendation:null,
    filteredTags:null,
    wordCountErrorMessage:"",
    form:this.fb.group({
      reviewComment:['', Validators.required],
      tags: [''],
      similarBooks: [''],
      optionalLink:[''],
      bookId:['',  Validators.required],
      google_id:['',  Validators.required],
    }),
    // tagsCtrl : new FormControl(),
    tags:[],
    filteredBooks:[],
    similarBooks:[],
    reviewCommentFocused: false,
    tagsFocused:false,
    similarBooksFocused:false,
    optionalLinksFocused:false,
    removable:true,
    wordMaxLimit: 500,
    wordCount:`0 / 500`,
    post:()=>{
      let data = this.reviewScreen.form.value;
      let form = new FormData();
      form.append('post_id', data.bookId);
      form.append('google_id', data.google_id);
      form.append('optionalLink', data.optionalLink);
      form.append('recommendation', this.reviewScreen.recommendation);
      form.append('reviewComment', data.reviewComment);
      form.append('similarBooks', this.reviewScreen.similarBooks.map((book)=>{return book.post_id}).join(','));
      form.append('selectedTagIds',  this.reviewScreen.tags.map((tag)=>{return tag.tags_id}).join(','));
      console.log(form);
      this.requestService.sendRequest('book_review.php', 'POST', form).subscribe((response:any)=>{
        if(response.success){

          this.actionStack = ['list'];
          this.showList(true);
        }
        this._snackBar.open(response.message, null, {
          duration: 2000,
        });
      }, (error)=>{
        console.table(error);
      })
    },
    checkIf:(field)=>{
      return this.reviewScreen[field+'Focused']  || this.reviewScreen.form.controls[field].value.length
    },
    setTopMargin:()=>{
      let margin = 0;
      if(!this.reviewScreen.recommendation){
        margin = 50;
      }
      margin += (this.reviewScreen.reviewCommentFocused|| this.reviewScreen.form.controls.reviewComment.value.length) ?  16: 28;
      return `${margin}px`;
    },
    setRecommendation(recommendation){
      this.recommendation = recommendation;
    },
    updateWordCount(comment){
      let count = comment?comment.split('\n').join(' ').replace(/ +(?= )/g,'').trim().split(' ').length:0;
      this.wordCount = `${count} / ${this.wordMaxLimit}`;
      if(count>this.wordMaxLimit){
        this.wordCountErrorMessage ="Comment exceeds maximum limit word limit.";
      }else{
        this.wordCountErrorMessage ="";
      }
    },
    focus(key, focusIn){
      switch(key){
        case 'reviewComment':
            this.reviewCommentFocused = focusIn?true:false;
            break;
        case 'tags':
          this.tagsFocused = focusIn?true:false;
          break;
        case 'similarBook':
          this.similarBooksFocused = focusIn?true:false;
          break;
        case 'optionalLink':
          this.optionalLinksFocused = focusIn?true:false;
          break;

      }
    },
    add(event: MatChipInputEvent , type): void {
      switch(type){
        case 'tags':
          {
            const input = event.input;
            const value = event.value;
            if ((value || '').trim()) {
              this.tags.push(value.trim());
            }

            // Reset the input value
            if (input) {
              input.value = '';
            }

            this.form.controls.tags.setValue(null);
            break;
          }
          case 'similarBooks':
          {
            const input = event.input;
            const value = event.value;
            if ((value || '').trim()) {
              this.similarBooks.push(value.trim());
            }

            // Reset the input value
            if (input) {
              input.value = '';
            }

            this.form.controls.similarBooks.setValue(null);
            break;
          }

        }
    },
    _filter:(value: string|Tags): Tags[]=> {
      console.log(value);
      let filterValue ='';
      if(typeof(value)=='string'){
        filterValue = value.toLowerCase();
      }else{
        filterValue = value.tags_desc.toLowerCase();
      }
      return this.allTags.filter(tag => tag.tags_desc.toLowerCase().indexOf(filterValue) === 0);
    },
    getFilteredTags:()=>{
      let filteredTags = this.allTags.filter((value)=>{
              return !this.reviewScreen.tags.find((tag)=>{
                return tag.tags_id == value.tags_id;
              });
        });
        return filteredTags;
    },

    selected:(event: MatAutocompleteSelectedEvent , type): void=>{
      switch(type){
        case 'tags':
          {
            let found = this.reviewScreen.tags.find((tag)=>{
              return tag.tags_id == event.option.value.tags_id
            });
            if(!found){
              this.reviewScreen.tags.push(event.option.value);
            }
            this.tagsInput.nativeElement.value = '';
            this.reviewScreen.form.controls.tags.setValue(null);
            break;
          }
        case 'similarBooks':
          {
            if(event.option.value){
                let found = this.reviewScreen.similarBooks.find((book)=>{
                  return book.post_id == event.option.value.post_id
                });
                if(!found){
                  this.reviewScreen.similarBooks.push(event.option.value);
                }
                this.similarBookInput.nativeElement.value = '';
                this.reviewScreen.form.controls.similarBooks.setValue(null);
            }
            break;
          }

      }

    },
    remove(data, type){
      switch(type){
        case 'tags':
          {
            const index = this.tags.indexOf(data);

            if (index >= 0) {
              this.tags.splice(index, 1);
            }
            break;
          }
      case 'similarBooks':
        {
          console.log(this.similarBooks);
          const index = this.similarBooks.indexOf(data);

          if (index >= 0) {
            this.similarBooks.splice(index, 1);
          }
          break;
        }
        }

    }
  }


}

