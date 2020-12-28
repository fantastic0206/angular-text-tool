import { GapiSession } from './../../../../infrastructure/sessions/gapi.session';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class ReviewScreen{
  public wordMaxLimit: 500;

  public form: FormGroup;
  public wordCount: string;
  public reviewTextFocused: boolean;
  constructor( private fb: FormBuilder ,
    private gapiSession: GapiSession,
    private book:Books){
      this.initForm(book);

    }

  public initForm(book:Books){
    let user = this.gapiSession.googleAuth.currentUser.get().getBasicProfile();
    this.form = this.fb.group({
      book_id: [{value: book.post_id, disabled: true}, [Validators.required]],
      user_id: [{value: user.getId(), disabled: true}, [Validators.required]],
      user_name:[{value: user.getName(), disabled: true}, [Validators.required]],
      user_email:[{value: user.getEmail(), disabled: true}, [Validators.required]],
      optionalLink: [{value: '', disabled: true}, [Validators.required]],
      similarBooks: [{value: '', disabled: true}, [Validators.required]],
      selectedTagIds: [{value: '', disabled: true}, [Validators.required]],
      reviewComment: [{value: '', disabled: true}, [Validators.required]],
      recommendation: [{value: '', disabled: true}, [Validators.required]],
  });
  }

  public setTopMargin(){
    let margin = 0;
    if(!this.form.value.recommendataion){
      margin = 50;
    }
    margin += (this.reviewTextFocused|| this.form.controls['reviewComment'].value.length) ?  16: 28;
    return `${margin}px`;
  }

  public setRecommendation(recommendation){
    this.form.controls['recommendataion'].setValue(recommendation);
  }
  public updateWordCount(event){
    let recommendataion = this.form.controls['recommendataion'].value;
    let count = recommendataion?recommendataion.split('\n').join(' ').replace(/ +(?= )/g,'').trim().split(' ').length:0;
    this.wordCount = `${count} / ${this.wordMaxLimit}`;
  }

  public reviewTextareaFocusedIn(event){
    this.reviewTextFocused = true;
  }
  public reviewTextareaFocusedOut(event){
    this.reviewTextFocused = false;
  }

}
