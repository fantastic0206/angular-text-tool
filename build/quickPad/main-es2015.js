(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title [innerHTML]=\"data.title\"></h2>\n<!-- <mat-dialog-content [innerHTML]=\"data.message\"></mat-dialog-content> -->\n<mat-dialog-actions class=\"flexbox-parent\">\n  <div class=\"row justify-content-center\">\n  \t  <mat-form-field appearance=\"outline\">\n    <mat-label>URL</mat-label>\n    <input matInput placeholder=\"Placeholder\" value=\"{{data.link}}\">\n    \n  </mat-form-field>\n    <div class=\"col\">\n      <button mat-button mat-raised-button color=\"primary\" *ngIf=\"data.showOKBtn\" (click)=\"close()\">OK</button>\n      <button mat-button mat-raised-button mat-dialog-close *ngIf=\"data.showCancelBtn\">Cancel</button>\n    </div>\n  </div>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/books-modal/books-modal.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/books-modal/books-modal.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"main-modal-content\">\n<button class=\"close\" mat-button mat-dialog-close>x</button>\n<h1 class=\"m-main-heading\">{{title}}</h1>\n<mat-tab-group (selectedTabChange)=\"tabChanged($event)\">\n\n  <!--*********************************************************************\n  ******************************Project Gutenberg *************************\n  *************************************************************************-->\n  <mat-tab style=\"  position: absolute;\">\n    <!-- Tab title -->\n    <ng-template mat-tab-label>\n      <div class=\"m-tab-title\">Project Gutenberg</div>\n      <div style=\"background-color: cadetblue;\"></div>\n    </ng-template>\n\n    <ng-container *ngIf=\"currentScreen == SCREENS.LISTING\">\n        <!-- Tab title -->\n        <div class=\"search-bar\">\n          <div class=\"search-box\">\n            <input type=\"search\" class=\"m-search-input form-control\" [(ngModel)]=\"filters.search_key\" placeholder=\"Search\" (search)=\"search($event)\" />\n            <span class=\"material-icons search\"> search</span>\n            <!-- <span class=\"material-icons dropdown\"> arrow_drop_down </span> -->\n          </div>\n          <div class=\"search-tools\">\n            <div class=\"search-btn\" (click)=\"fetchData()\">\n              <button class=\"my-btn btn-filled\">SEARCH</button>\n            </div>\n            <div class=\"order-tool\">\n              <div class=\"order-btn\" (click)=\"changeOrder()\">\n                  <span class=\"material-icons\">arrow_drop_up</span>\n                  <div class=\"order-btn-text\">\n                    <span *ngIf='filters.order_by==\"asc\"'>AZ</span>\n                    <span *ngIf='filters.order_by==\"desc\"'>ZA</span>\n\n                  </div>\n                  <span class=\"material-icons\">arrow_drop_down</span>\n                </div>\n            </div>\n            <!-- <div class=\"grid-btn\" (click)=\"fetchData()\">\n              <img src=\"../../../assets/img/button1.png\" />\n            </div> -->\n\n\n          </div>\n\n\n        </div>\n        <div class=\"main-body\">\n\n          <mat-dialog-content>\n            <!-- class not found mat-elevation-z8-->\n          <div class=\"mat-elevation-z8\">\n            <table mat-table [dataSource]=\"dataSource\">\n              <ng-container matColumnDef=\"icon\">\n                <th mat-header-cell *matHeaderCellDef></th>\n                <td mat-cell *matCellDef=\"let element\">\n                  <img class=\"m-book-icon\" src=\"../../../assets/icons/book.png\" />\n                </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"title\">\n                <th mat-header-cell *matHeaderCellDef class=\"table-heading\">Title</th>\n                <td mat-cell *matCellDef=\"let element\">{{ element.title }}</td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"author\">\n                <th mat-header-cell *matHeaderCellDef class=\"table-heading\">\n                  Author\n                </th>\n                <td mat-cell *matCellDef=\"let element\">{{ element.author }}</td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"reviews\" sticky>\n                <th mat-header-cell *matHeaderCellDef class=\"table-heading reviews-col\">\n                  <img class=\"m-comments-icon\" src=\"../../../assets/img/comments.png\" />\n                  Reviews\n                </th>\n                <td mat-cell *matCellDef=\"let element\">\n                  <ng-container *ngIf=\"element.reviews.reviews\">\n                    {{ element.reviews.reviews }} @ {{ floor(element.reviews.likes>0?(element.reviews.likes/element.reviews.reviews)*100:0) }}%\n                  </ng-container>\n                </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"view\" sticky>\n                <th mat-header-cell *matHeaderCellDef class=\"m-table-title\"></th>\n                <td mat-cell *matCellDef=\"let element\">\n                  <div class=\"tools-btn\" (click)=\"goTo('top-review', element)\">\n                    <img src=\"../../../assets/svg/show.svg\" *ngIf=\"element.reviews.reviews\">\n                    <img src=\"../../../assets/svg/show-disabled.svg\" *ngIf=\"!element.reviews.reviews\">\n                  </div>\n                    <div class=\"open-dropdown\">\n                   <img src=\"../../../assets/svg/Vector.svg\" *ngIf=\"element.reviews.reviews\" class=\"dote\">\n                 </div>\n                  <div class=\"dropdown\">\n                    <div class=\"tools-btn\" (click)=\"goTo('top-review', element)\">\n                    <img src=\"../../../assets/svg/show.svg\" *ngIf=\"element.reviews.reviews\">\n                  </div>\n                  <div class=\"tools-btn\" (click)=\"goTo('write-review', element)\">\n                    <img src=\"../../../assets/svg/pen.svg\">\n                  </div>\n\n                  </div>\n\n                </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"edit\" sticky>\n                <th mat-header-cell *matHeaderCellDef class=\"m-table-title\"></th>\n                <td mat-cell *matCellDef=\"let element\">\n                  <div class=\"tools-btn\" (click)=\"goTo('write-review', element)\">\n                    <img src=\"../../../assets/svg/pen.svg\">\n                  </div>\n                </td>\n              </ng-container>\n\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n            </table>\n\n            <div class=\"error-message\" *ngIf=\"dataSource?.data.length === 0\">No records found</div>\n              <div style=\"min-height: 44vh; display: block; min-width: 100%;\"  *ngIf='loading'>\n                <mat-spinner style=\"\n                display: block;\n                margin:0 auto;\n                position: absolute;\n                top: 50%;\n                left: 44%;\n                -ms-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%)\"\n                mode=\"indeterminate\"></mat-spinner>\n              </div>\n              <mat-paginator\n              itemsPerPageLabel='Rows per page'\n              [pageSizeOptions]=\"[10, 20, 50]\"\n              [pageSize]=\"page.pageSize\"\n              [length]=\"page.length\"\n              (page)=\"pageChanged($event)\">\n            </mat-paginator>\n          </div>\n          </mat-dialog-content>\n\n        </div>\n            <!-- </mat-dialog-content> -->\n      <mat-dialog-actions class=\"footer-box\" >\n        <!-- <button class=\"my-btn btn-filled\">LOAD</button> -->\n        <button class=\"my-btn btn-txt\" mat-button mat-dialog-close>CANCEL</button>\n      </mat-dialog-actions>\n    </ng-container>\n    <ng-container *ngIf=\"currentScreen == SCREENS.BOOK_DETAILS\">\n      <div class=\"search-bar\">\n        <div class=\"m-book-title\">\n          <h4>{{selectedBook?.title}}</h4>\n          <h5>{{selectedBook?.author}}</h5>\n        </div>\n        <div class=\"input-wrappers\">\n          <!-- <mat-form-field appearance=\"fill\" style=\"width: 100px;\">\n            <mat-select disableRipple panelClass='mat-select'>\n              <mat-option value=\"top\" selected>TOP</mat-option>\n              <mat-option value=\"bottom\">BOTTOM</mat-option>\n            </mat-select>\n          </mat-form-field> -->\n        </div>\n      </div>\n      <div class=\"main-body\" style=\"overflow:scroll;\">\n      <div class= \"review-container\">\n       <div class=\"m-review-content\">\n        <p class=\"h-book-details\">Synopsis</p>\n        <p class=\"book-details\">\n        {{global?.bookReview?.synopsis}}\n        </p>\n        <ng-container *ngIf='detailsScreen?.topReview'>\n        <h4 class=\"h-book-details\">Top review</h4>\n        <p class=\"book-details\">\n          {{detailsScreen?.topReview?.reviewComment | slice:0:265}}{{detailsScreen?.topReview?.reviewComment.length>265?'...':''}}\n          <br>\n         <em>Top Review by <strong> {{detailsScreen?.topReview?.reviewer_name}} </strong></em>\n        </p>\n      </ng-container>\n        <div class=\"m-pt-19\">\n          <button class=\"my-btn btn-txt book-detail-btn\" (click)=\"goTo('review-details')\">SHOW</button>\n          <button class=\"my-btn btn-txt\" [disabled]='global?.isReviewer' (click)=\"goTo('write-review')\">WRITE</button>\n        </div>\n\n        <div class=\"m-pt-55\">\n          <div class=\"tag-label\">Top Tags:</div>\n          <div>\n            <mat-chip-list aria-label=\"Fish selection\">\n              <mat-chip class=\"mat-chip-custom\" *ngFor=\"let tag of global?.bookReview.top_tags\">{{tag}}</mat-chip>\n            </mat-chip-list>\n          </div>\n        </div>\n        <div class=\"m-mt-16 m-flex \">\n          <span class=\"m-tag-label\">Similar To:</span>\n          <span class=\"m-books-links\">\n            <ng-container *ngFor=\"let book of global?.bookReview.similar_books; let i = index\">\n              <ng-container *ngIf='i!=0'>\n                ,\n              </ng-container>\n              <a class=\"hover-onqa\" href=\"{{book?.book_link || 'javascript:void(0)'}}\" target=\"_blank\">{{book.title}}\n                <div class=\"hover-toolpikar\">{{book.title}}</div></a>\n            </ng-container>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"m-review-details\">\n        <div class=\"m-tag-label m-w-50 m-left m-pt-18\">Read/Skip:</div>\n        <div class=\" m-data m-w-50  m-left m-pt-18\">\n          <div class=\"m-w-50  m-left\">\n            <span class=\"material-icons mat-icons color-brown\">\n              thumb_up\n            </span>\n            <span class=\"m-rating-count\">{{global?.bookReview?.likes}}</span>\n          </div>\n          <div class=\"m-w-50 m-right\">\n            <span class=\"material-icons m-mat-icons\">\n              pan_tool\n            </span>\n            <span class=\"m-rating-count m-t-9\">{{global?.bookReview?.dislikes}}</span>\n          </div>\n        </div>\n\n        <hr class=\"m-line\">\n        <div class=\"m-tag-label m-w-50 m-left\">Genre:</div>\n        <div class=\" m-data m-w-50  m-left jagqa\">\n          <img class=\"m-comments-icon\" src=\"../../../assets/img/icon-left.PNG\" />\n          {{global?.bookReview?.genre}}\n        </div>\n        <div class=\"m-tag-label m-w-50 m-left\">Published:</div>\n        <div class=\" m-data m-w-50  m-left\">\n          {{global?.bookReview?.published}}\n        </div>\n        <div class=\"m-tag-label m-w-50 m-left\">Pages:</div>\n        <div class=\" m-data m-w-50  m-left\">\n          {{global?.bookReview?.pages}}\n        </div>\n        <div class=\"m-tag-label m-w-50 m-left\">Subjects:</div>\n        <div class=\" m-data m-w-50  m-left\">\n          {{global?.bookReview?.subjects.join('; ')}}\n        </div>\n        <div class=\"m-tag-label m-w-50 m-left\">Key link:</div>\n        <div class=\" m-data m-w-50  m-left \">\n          <a class=\"m-books-links hover-onqa aa\" href=\"global?.bookReview?.optionalLink\" target=\"_blank\">\n            {{global?.bookReview?.optionalLink}}\n            <div class=\"hover-toolpikar pp\">{{global?.bookReview?.optionalLink}}</div>\n          </a>\n        </div>\n\n      </div>\n      </div>\n      </div>\n      <mat-dialog-actions class=\"footer-box\" >\n        <button class=\"my-btn btn-filled\">LOAD</button>\n        <button class=\"my-btn btn-txt\" (click)=\"goBack()\">BACK</button>\n      </mat-dialog-actions>\n    </ng-container>\n    <ng-container *ngIf=\"currentScreen == SCREENS.REVIEWS_SHOW\">\n      <ng-container *ngFor='let review of global?.bookReview?.reviews; let i = index'>\n\n      <div class=\"search-bar\">\n        <div class=\"m-book-title\">\n          <h4>{{selectedBook?.title}}</h4>\n          <h5>{{selectedBook?.author}}</h5>\n        </div>\n        <div class=\"input-wrappers\">\n          <mat-form-field appearance=\"fill\" style=\"width: 100px;\">\n            <!-- <mat-label>TOP</mat-label> -->\n            <mat-select [(ngModel)]=\"selectedOption\" panelClass='mat-select' placeholder=\"TOP\" >\n              <mat-option value=\"top\" selected>TOP</mat-option>\n              <mat-option value=\"bottom\">BOTTOM</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"main-body\">\n\n        <mat-dialog-content>\n          <!-- class not found mat-elevation-z8-->\n        <div class=\"review-container\">\n\n\n            <div class=\"review-heading\">\n            <div class=\"circle-logo\">\n              <div class=\"parent\">\n                <div class=\"center\">{{review?.reviewer_name[0] | uppercase}}</div>\n              </div>\n            </div>\n\n            <div class=\"submited-heading\">\n              <h4>{{review?.reviewer_name}}</h4>\n              <h5>Submitted {{review?.review_date |date:'dd-LLL-yy'}}</h5>\n            </div>\n\n\n\n            <div class=\"rating-section\" *ngIf=\"i==0\">\n            <button class=\"my-btn btn-tag btn-avatar\">\n              <span class=\"material-icons m-mat-icons\">\n              star_rate\n              </span> FIRST </button>\n            </div>\n          </div>\n            <div>\n              <p class=\"review-text\">\n                {{review?.reviewComment}}\n              </p>\n            </div>\n            <div class=\"review-section\">\n              <div class=\"tag-label\">Tags:</div>\n              <div>\n                <button *ngIf=\"review?.recommendation\" class=\"btn-tag btn-avatar\"><span class=\"material-icons m-mat-icons\">\n                 {{review?.recommendation =='READ'?'thumb_up':'thumb_down'}}\n                </span> {{review?.recommendation}} </button>\n                <button class=\"btn-tag btn-text-only\" *ngFor=\"let tag of review?.tags\"> {{tag}} </button>\n              </div>\n            </div>\n\n\n\n            <div class=\"review-section m-w60-inline-block\">\n              <div class=\"tag-label\">Read this book if you like :</div>\n              <div class=\"mt-28 ml-40 flex\">\n                <div class=\"m-w60-inline-block left\">\n                  <span class=\"m-books-links\" *ngFor=\"let book of global?.bookReview?.similar_books\">\n                    <div class=\"hover-onqa\" (click)=\"openURL(book?.book_link)\">{{book.title}}\n                    <div class=\"hover-toolpikar\">{{book.title}}</div></div>\n\n                  </span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"review-section m-w40-inline-block\" style=\"text-align: right;\">\n              <div (click)=\"openURL(review?.optionalLink )\">\n                <mat-icon svgIcon=\"link\" ></mat-icon>\n                <h6 class=\"m-books-links\">Annotated Version</h6>\n              </div>\n              <div (click)=\"openURL('http://www.reddit.com')\">\n                <mat-icon svgIcon=\"link\" ></mat-icon>\n                <h6 class=\"m-books-links\">Discuss On Reddit</h6>\n              </div>\n            </div>\n        </div>\n        </mat-dialog-content>\n\n      </div>\n      <mat-dialog-actions *ngIf=\"!review?.hideHelpful\" class=\"footer-box mat-dialog-actions ng-star-inserted yesnoqa\" style=\"\">\n\n        <h4>I FOUND THIS REVIEW HELPFUL</h4>\n        <span class=\"button-box\">\n          <button (click)=\"reviewHelpful(review, true)\">YES</button>\n          <button (click)=\"reviewHelpful(review, false)\">NO</button>\n        </span>\n      </mat-dialog-actions>\n    </ng-container>\n\n          <!-- </mat-dialog-content> -->\n\n\n\n\n\n\n\n\n\n\n      <mat-dialog-actions class=\"footer-box\" >\n        <button class=\"my-btn btn-filled\">LOAD</button>\n        <button class=\"my-btn btn-txt\" (click)=\"goBack()\">BACK</button>\n      </mat-dialog-actions>\n\n    </ng-container>\n    <ng-container *ngIf=\"currentScreen == SCREENS.WRITE_REVIEW\">\n      <div class=\"search-bar\">\n        <div class=\"m-book-title\">\n          <h4>{{selectedBook?.title}}</h4>\n          <h5>{{selectedBook?.author}}</h5>\n        </div>\n        <div class=\"recommendation-selection\">\n          <button *ngIf=\"reviewScreen.recommendation == 'SKIP'\" class=\"btn-tag btn-avatar\">\n            <span class=\"material-icons m-mat-icons\">\n              pan_tool\n            </span> SKIP <span class=\"material-icons clear\" (click)=\"reviewScreen.setRecommendation('')\"> clear </span>\n          </button>\n          <button *ngIf=\"reviewScreen.recommendation == 'READ'\"  class=\"btn-tag btn-avatar\">\n            <span class=\"material-icons m-mat-icons\">\n              thumb_up\n            </span> READ <span class=\"material-icons clear\" (click)=\"reviewScreen.setRecommendation('')\"> clear </span>\n\n          </button>\n        </div>\n      </div>\n      <div class=\"main-body\">\n        <mat-dialog-content>\n          <!-- class not found mat-elevation-z8-->\n          <div class=\"recommendation\" *ngIf=\"!reviewScreen.recommendation\">\n            <div class=\"recommendation-label\">YOUR RECOMENDATION</div>\n            <div class=\"recommendation-actions\">\n              <button class=\"my-btn btn-txt\" (click)=\"reviewScreen.setRecommendation('READ')\">READ</button>\n              <button class=\"my-btn btn-txt\" (click)=\"reviewScreen.setRecommendation('SKIP')\">SKIP</button>\n            </div>\n\n          </div>\n        <div class=\"review-container\" [formGroup]=\"reviewScreen.form\">\n\n          <fieldset class=\"review-input-field recommendation-spacing\" [ngStyle]=\"{'border': (reviewScreen.reviewCommentFocused) ? '1px solid #F79624' : '1px solid rgba(25, 25, 25, 0.32)', 'margin-top': reviewScreen.setTopMargin() ,'padding-top': (reviewScreen.reviewCommentFocused|| reviewScreen.form.controls.reviewComment.value.length) ? '1px' : '12px'}\">\n            <legend *ngIf=\"reviewScreen.checkIf('reviewComment')\" [ngStyle]=\"{'color': (reviewScreen.reviewCommentFocused) ? '#F79624' : 'rgba(25, 25, 25, 0.32)'}\">Review</legend>\n            <textarea (focus)=\"reviewScreen.focus('reviewComment', true)\" formControlName=\"reviewComment\" (focusout)=\"reviewScreen.focus('reviewComment', false)\"     rows=\"7\" placeholder=\"Please write your review here. Minimum words is 100, maximum words is 500. Reviews are moderated\"></textarea>\n          </fieldset>\n          <div style=\"color:firebrick; float: left;\">\n            {{reviewScreen?.wordCountErrorMessage}}\n          </div>\n          <div class=\"word-count\">{{reviewScreen?.wordCount}}</div>\n          <!-- Tags Start-->\n          <fieldset class=\"review-input-field field_tags\" [ngStyle]=\"{'border': (reviewScreen.tagsFocused) ? '1px solid #F79624' : '1px solid rgba(25, 25, 25, 0.32)', 'height': (reviewScreen.tagsFocused) ? '62px' : '48px'}\">\n            <legend *ngIf=\"reviewScreen.tagsFocused\">Search and Add Tags </legend>\n          <mat-form-field class=\"tag-chip-list\">\n            <mat-chip-list #chipList aria-label=\"Tags\">\n\n              <input class=\"tags-input-custom\"\n                placeholder=\" {{(reviewScreen.tagsFocused)?'': reviewScreen.tagPlaceholder}} \"\n                (focus)=\"reviewScreen.focus('tags', true)\"\n                (focusout)=\"reviewScreen.focus('tags', false)\"\n                #tagsInput\n                formControlName=\"tags\"\n                [matAutocomplete]=\"auto\"\n                [matChipInputFor]=\"chipList\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                (matChipInputTokenEnd)=\"reviewScreen.add($event, 'tags')\">\n            </mat-chip-list>\n            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"reviewScreen.selected($event, 'tags')\">\n              <mat-option *ngFor=\"let tag of reviewScreen.getFilteredTags()\" [value]=\"tag\">\n                {{tag.tags_desc}}\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n          </fieldset>\n          <div class=\"selected-chips\" *ngIf=\"reviewScreen.tags\">\n\n            <mat-chip class=\"mat-chip-custom\"\n            *ngFor=\"let tag of reviewScreen.tags\"\n            [selectable]=\"false\"\n            [removable]=\"reviewScreen.removable\"\n            (removed)=\"reviewScreen.remove(tag, 'tags')\">\n            {{tag.tags_desc}}\n            <mat-icon matChipRemove *ngIf=\"reviewScreen.removable\">cancel</mat-icon>\n          </mat-chip>\n          </div>\n          <!-- Tags End-->\n          <!-- Similar Books Start-->\n          <fieldset class=\"review-input-field field_tags\" [ngStyle]=\"{'border': (reviewScreen.similarBooksFocused) ? '1px solid #F79624' : '1px solid rgba(25, 25, 25, 0.32)', 'height': (reviewScreen.similarBooksFocused) ? '62px' : '48px'}\">\n            <legend *ngIf=\"reviewScreen.similarBooksFocused\">Search and Add Similar Books</legend>\n          <mat-form-field class=\"tag-chip-list\">\n            <mat-chip-list #chipListSimilarBook aria-label=\"Similar Book\">\n\n              <input class=\"tags-input-custom\"\n                (focus)=\"reviewScreen.focus('similarBook', true)\"\n                (focusout)=\"reviewScreen.focus('similarBook', false)\"\n                placeholder=\" {{(reviewScreen.similarBooksFocused)?'': reviewScreen.similarBookPlaceholder}} \"\n                #similarBookInput\n                formControlName=\"similarBooks\"\n                [matAutocomplete]=\"similarBookAuto\"\n                [matChipInputFor]=\"chipListSimilarBook\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                (matChipInputTokenEnd)=\"reviewScreen.add($event, 'similarBooks')\">\n            </mat-chip-list>\n            <mat-autocomplete #similarBookAuto=\"matAutocomplete\" (optionSelected)=\"reviewScreen.selected($event, 'similarBooks')\">\n              <mat-option *ngIf=\"reviewScreen.isLoading\" class=\"is-loading\" [value]=\"null\">Loading...</mat-option>\n              <ng-container *ngIf=\"!reviewScreen.isLoading\" >\n                <mat-option *ngFor=\"let similarBook of reviewScreen.filteredBooks\" [value]=\"similarBook\">\n                  {{similarBook.title}}\n                </mat-option>\n              </ng-container>\n            </mat-autocomplete>\n          </mat-form-field>\n          </fieldset>\n          <div class=\"selected-chips\" *ngIf=\"reviewScreen.similarBooks\">\n\n            <mat-chip class=\"mat-chip-custom\"\n            *ngFor=\"let similarBook of reviewScreen.similarBooks\"\n            [selectable]=\"false\"\n            [removable]=\"reviewScreen.removable\"\n            (removed)=\"reviewScreen.remove(similarBook, 'similarBooks')\">\n            <div style=\"\n            /* width: 194px;     */\n            max-width: 194px;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n        \">{{similarBook.title}}</div>\n            <mat-icon matChipRemove *ngIf=\"reviewScreen.removable\">cancel</mat-icon>\n          </mat-chip>\n          </div>\n          <!-- Similar Books End-->\n\n          <!-- Similar Books Start-->\n          <fieldset class=\"review-input-field field_tags last-input\" [ngStyle]=\"{'border': (reviewScreen?.optionalLinksFocused) ? '1px solid #F79624' : '1px solid rgba(25, 25, 25, 0.32)', 'height': (reviewScreen.optionalLinksFocused) ? '62px' : '48px', 'padding-top': (reviewScreen.optionalLinksFocused|| reviewScreen.form.controls.optionalLink.value.length) ? '1px' : '12px', 'margin-top': (reviewScreen.optionalLinksFocused|| reviewScreen.form.controls.optionalLink.value.length) ? '1px' : '12px'}\">\n            <legend *ngIf=\"reviewScreen.optionalLinksFocused || reviewScreen.form.controls.optionalLink.value.length\">(Optional) Link an Annotated Version</legend>\n            <input class=\"input-custom\"\n            (focus)=\"reviewScreen.focus('optionalLink', true)\"\n            (focusout)=\"reviewScreen.focus('optionalLink', false)\"\n            placeholder=\" {{(reviewScreen.optionalLinksFocused)?'': '(Optional) Link an Annotated Version'}} \"\n            formControlName=\"optionalLink\">\n            <img class=\"m-comments-icon\" src=\"../../../assets/img/goti.PNG\" />\n          </fieldset>\n          <!-- Similar Books End-->\n\n        </div>\n        </mat-dialog-content>\n\n      </div>\n          <!-- </mat-dialog-content> -->\n      <mat-dialog-actions class=\"footer-box\" >\n        <!-- <button class=\"my-btn btn-filled\">LOAD</button> -->\n\n        <button class=\"my-btn btn-filled\" [disabled]=\"!reviewScreen.form.valid || !this.reviewScreen.recommendation\"  (click)=\"reviewScreen.post()\">POST</button>\n        <button class=\"my-btn btn-txt\" (click)=\"goBack()\">BACK</button>\n      </mat-dialog-actions>\n\n    </ng-container>\n\n  </mat-tab>\n\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n    <div class=\"tab-title\">About</div>\n    </ng-template>\n    <form class=\"m-form\">\n    <div class=\"m-header-container\">\n    <h1 class=\"book-title heading-1\">About Gutenberg on QuickPad</h1>\n    </div>\n    <div>\n    <p class=\"paragraph\">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt pulvinar felis. Vestibulum iaculis, neque sit amet interdum suscipit, ex ligula mattis risus, sit amet varius nisl urna sit amet dui. Praesent euismod porta massa vitae mollis. Morbi molestie nisl id velit facilisis facilisis. Sed bibendum at tellus sed faucibus. Etiam a ornare mi. In hac habitasse platea dictumst. Curabitur eget dignissim diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse convallis fermentum felis et luctus. Morbi dapibus ligula ac nisi interdum, non laoreet nunc ultricies. Donec fringilla congue mollis. Nulla facilisi. Donec a vehicula dui. Curabitur libero ante, euismod in efficitur vitae, ornare eu ligula. Nunc sem enim, placerat ut arcu in, fringilla faucibus ante.\n    <br>\n    <br>\n    <br>\n    Nunc accumsan porta quam, ut ornare nibh hendrerit sit amet. Nullam vitae venenatis purus. Nullam vel mi sit amet diam consectetur efficitur. Morbi molestie mi tempus, aliquet leo a, accumsan felis. Suspendisse potenti. Phasellus placerat lorem eget lectus ultricies, sed venenatis nibh venenatis. In hac habitasse platea dictumst. Nunc dapibus lectus id lacus facilisis, eget pharetra ligula tincidunt. Fusce et lobortis massa, non pulvinar urna.\n    </p>\n    </div>\n    </form>\n    </mat-tab>\n\n\n</mat-tab-group>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loading\" class=\"loading\">\n  <div class=\"loaderContent\">\n  <img alt=\"loading\" src=\"/assets/img/icon-192x192.png\" />\n  <img alt=\"loading\" class=\"newloadering\" src=\"/assets/img/loading.gif\" />\n</div>\n</div>\n<app-header></app-header>\n<div id=\"container\" style=\"height:100%;\"></div>\n<div class=\"fileEditor\" [class.proper]=\"evalution == false && !thememode\">\n  <ng-keyboard-shortcuts [shortcuts]=\"shortcuts\"></ng-keyboard-shortcuts>\n  <div class=\"ribbon-menu\">\n    <ul>\n      <li>\n        <span [ngClass]=\"{'selected-span': this.homeSelected}\" (click)=\"home()\">HOME</span>\n      </li>\n      <li>\n        <span [ngClass]=\"{'selected-span': this.extraSelected}\" (click)=\"extra()\">EXTRA</span>\n      </li>\n      <li>\n        <span (click)=\"openModal()\" *ngIf='gapiSession.isSignedIn'>OPEN BOOKS</span>\n      </li>\n<!--       <li>\n        <span [ngClass]=\"{'selected-span': this.listenSelected}\" (click)=\"listen()\">LISTEN</span>\n      </li> -->\n    </ul>\n  </div>\n  <div class=\"tools\">\n    <ul [class.dayMode]=\"thememode\">\n      <li *ngIf=\"homeSelected\">\n        <span id=\"saveFile\" (click)=\"save()\" matTooltip=\"Save file\">\n          <mat-icon svgIcon=\"save\"></mat-icon>\n        </span>\n      </li>\n<!--       <li *ngIf=\"homeSelected\">\n        <span id=\"openFile\" matTooltip=\"Open file\">\n          <mat-icon svgIcon=\"open-file\"></mat-icon>\n        </span>\n      </li> -->\n      <li *ngIf=\"homeSelected\">\n        <span href=\"javascript:void(0)\" (click)=\"undo()\" matTooltip=\"Undo\">\n          <mat-icon svgIcon=\"undo\"></mat-icon>\n        </span>\n      </li>\n      <li *ngIf=\"homeSelected\">\n        <span href=\"javascript:void(0)\" matTooltip=\"Redo\" (click)=\"redo()\">\n          <mat-icon svgIcon=\"redo\"></mat-icon>\n        </span>\n      </li>\n      <li *ngIf=\"homeSelected\">\n        <span matTooltip=\"Word wrap\"\n              [class.active]=\"wrapdata\"\n              href=\"javascript:void(0)\"\n              (click)=\"wrapData()\"\n        >\n          <mat-icon svgIcon=\"wrap\" ></mat-icon>\n        </span>\n      </li>\n<!--       <li *ngIf=\"homeSelected\">\n        <span matTooltip=\"Readonly\"\n              [class.active]=\"readonly\"\n              href=\"javascript:void(0)\"\n              (click)=\"readOnly()\"\n        >\n          <mat-icon svgIcon=\"readonly\" ></mat-icon>\n        </span>\n      </li> -->\n<!--       <li *ngIf=\"homeSelected\">\n        <span id=\"link\"  matTooltip=\"Link\">\n          <mat-icon svgIcon=\"link\"></mat-icon>\n        </span>\n      </li> -->\n      <li *ngIf=\"homeSelected\">\n        <span href=\"javascript:void(0)\" matTooltip=\"Search\" (click)=\"find()\">\n          <mat-icon svgIcon=\"search\"></mat-icon>\n        </span>\n      </li>\n      <li *ngIf=\"homeSelected\">\n        <span href=\"javascript:void(0)\" (click)=\"sizeUp()\" matTooltip=\"Text Size Up\">\n          <mat-icon svgIcon=\"increase\"></mat-icon>\n        </span>\n      </li>\n      <li *ngIf=\"homeSelected\">\n        <span href=\"javascript:void(0)\" matTooltip=\"Text Size Down\" (click)=\"sizeDown()\">\n          <mat-icon svgIcon=\"decrease\" ></mat-icon>\n        </span>\n      </li>\n      <li *ngIf=\"homeSelected\">\n        <span href=\"javascript:void(0)\" matTooltip=\"Link Share\" (click)=\"openDialog()\">\n          <mat-icon svgIcon=\"link\" ></mat-icon>\n        </span>\n      </li>\n      <li *ngIf=\"homeSelected\">\n        <span href=\"javascript:void(0)\" [matTooltip]=\"epubMode ? 'Txt' : 'Epub'\" (click)=\"switchMode()\">\n          <mat-icon *ngIf=\"epubMode\" svgIcon=\"txt\"></mat-icon>\n          <mat-icon *ngIf=\"!epubMode\" svgIcon=\"epub\"></mat-icon>\n        </span>\n      </li>\n<!--       <li *ngIf=\"evalution == false\">\n        <span matTooltip=\"Minisidebar\"\n          [class.active]=\"minisidebar\"\n          href=\"javascript:void(0)\"\n          (click)=\"removeMinibar()\"\n        >\n          <mat-icon svgIcon=\"close\" ></mat-icon>\n        </span>\n      </li> -->\n<!--       <li *ngIf=\"evalution == false\">\n        <span matTooltip=\"Editor info\"\n          [class.active]=\"infoBar\"\n          href=\"javascript:void(0)\"\n          (click)=\"statusInfo()\"\n        >\n          <mat-icon svgIcon=\"info\" ></mat-icon>\n        </span>\n      </li> -->\n      <!-- [class.active]=\"thememode\" -->\n      <!-- <li *ngIf=\"evalution == false\"> -->\n      <li *ngIf=\"extraSelected\">\n        <span [ngClass]=\"{'active': thememode}\" href=\"javascript:void(0)\" (click)=\"changeThemeMode()\" matTooltip=\"Theme mode\">\n          <mat-icon *ngIf=\"!thememode\" svgIcon=\"nightmode\" ></mat-icon>\n          <mat-icon *ngIf=\"thememode\" svgIcon=\"daymode\"></mat-icon>\n        </span>\n        <span href=\"javascript:void(0)\" (click)=\"changeBookmark()\" matTooltip=\"Place bookmark\">\n          <mat-icon svgIcon=\"bookmark\" ></mat-icon>\n        </span>\n      </li>\n\n      <li *ngIf=\"evalution\">\n        <span class=\"eva\">Free Version</span>\n      </li>\n    </ul>\n    <mat-progress-bar *ngIf=\"loading2\" class=\"editorLoader\" mode=\"indeterminate\" value=\"40\"></mat-progress-bar>\n  </div>\n  <div class=\"infoBar\" *ngIf=\"infoBar\">\n    <p>\n      Len: {{ totalChar }}, lines: {{ totalLine }}, Wor: {{ wordCount }} | lin:\n      {{ infoData.lineNumber }}, col: {{ infoData.column }}, Tab:\n      {{ tabCount }}\n      <span *ngIf=\"selection\">, sel: {{ selection }}|{{ selectedLine }}</span>\n    </p>\n  </div>\n  <!-- 93 -->\n  <div style=\"height: calc( 100vh - 93px );\" [ngClass]=\"{'a-overflow' : this.isMobile}\">\n    <a mat-mini-fab class=\"addBtn\" (click)=\"openNewEditor()\">\n      <img alt=\"New editor\" src=\"/assets/img/add.png\" />\n    </a>\n    <ng-container *ngIf=\"epubMode\">\n      <epub-viewer [padding]=\"'50px 150px'\"\n                   (onDocumentReady)=\"onEpubReady()\" (onDocumentClose)=\"onEpubClose($event)\" #epubViewer>\n      </epub-viewer>\n    </ng-container>\n    <ng-container *ngIf=\"!epubMode\">\n      <ngx-monaco-editor\n        id=\"notePad\"\n        (onInit)=\"onInitEditor($event)\"\n        (mouseover)=\"onMouseHover($event)\"\n        (ngModelChange)=\"onKeydown($event)\"\n        style=\"height: 100%;\"\n        [options]=\"editorOptions\"\n        [(ngModel)]=\"data\"\n      ></ngx-monaco-editor>\n    </ng-container>\n  </div>\n  <span [style.color]=\"color\" [ngClass]=\"usersaveTime\" id=\"fileSaveTime\" *ngIf=\"fileSaveTime\">{{\n    fileSaveTime\n  }}</span>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private-policy/private-policy.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private-policy/private-policy.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"post-content\">\n\n    <h2>Who we are</h2>\n    <p>Our website address is: https://QuickPad.io</p>\n    <h2>What personal data we collect and why we collect it</h2>\n    <h3>Comments</h3>\n    <p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s\n        IP address and browser user agent string to help spam detection.</p>\n    <p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service\n        to see if you are using it. The Gravatar service privacy policy is available here:\n        https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public\n        in the context of your comment.</p>\n    <h3>Media</h3>\n    <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS)\n        included. Visitors to the website can download and extract any location data from images on the website.</p>\n    <h3>Contact forms</h3>\n    <h3>Cookies</h3>\n    <p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies.\n        These are for your convenience so that you do not have to fill in your details again when you leave another\n        comment. These cookies will last for one year.</p>\n    <p>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This\n        cookie contains no personal data and is discarded when you close your browser.</p>\n    <p>When you log in, we will also set up several cookies to save your login information and your screen display\n        choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember\n        Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.\n    </p>\n    <p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no\n        personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>\n    <h3>Embedded content from other websites</h3>\n    <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from\n        other websites behaves in the exact same way as if the visitor has visited the other website.</p>\n    <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your\n        interaction with that embedded content, including tracking your interaction with the embedded content if you\n        have an account and are logged in to that website.</p>\n    <h3>Analytics</h3>\n    <h2>Who we share your data with</h2>\n    <h2>How long we retain your data</h2>\n    <p>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and\n        approve any follow-up comments automatically instead of holding them in a moderation queue.</p>\n    <p>For users that register on our website (if any), we also store the personal information they provide in their\n        user profile. All users can see, edit, or delete their personal information at any time (except they cannot\n        change their username). Website administrators can also see and edit that information.</p>\n    <h2>What rights you have over your data</h2>\n    <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the\n        personal data we hold about you, including any data you have provided to us. You can also request that we erase\n        any personal data we hold about you. This does not include any data we are obliged to keep for administrative,\n        legal, or security purposes.</p>\n    <h2>Where we send your data</h2>\n    <p>Visitor comments may be checked through an automated spam detection service.</p>\n    <h2>Your contact information</h2>\n    <h2>Additional information</h2>\n    <h3>How we protect your data</h3>\n    <h3>What data breach procedures we have in place</h3>\n    <h3>What third parties we receive data from</h3>\n    <h3>What automated decision making and/or profiling we do with user data</h3>\n    <h3>Industry regulatory disclosure requirements</h3>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/proper/proper.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/proper/proper.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<p>proper works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms/terms.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms/terms.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"post-content\">\n    <p>Please read these Terms of Use (“Terms”, “Terms of Use”) carefully before using the Quickpad website.</p>\n    <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These\n        Terms apply to all visitors, users and others who access or use the Service.</p>\n    <p><span style=\"text-decoration: underline;\">By accessing or using the Service you agree to be bound by these Terms.\n            If you disagree with any part of the terms then you may not access the Service.</span></p>\n    <p><strong>Purchases</strong></p>\n    <p>If you wish to purchase any product or service made available through the Service (“Purchase”), you may be asked\n        to supply certain information relevant to your Purchase including, without limitation, your Google profile\n        details.&nbsp; This is so we can connect your Google profile to the notepad application and provide you with\n        improved features.&nbsp; You may at any time disconnect the subscription via the website or by request, but no\n        refunds are granted for any subscription payments made under any circumstances.</p>\n    <p><strong>&nbsp;</strong><strong>Termination</strong></p>\n    <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason\n        whatsoever, including without limitation if you breach the Terms.</p>\n    <p>All provisions of the Terms which by their nature should survive termination shall survive termination,\n        including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of\n        liability.</p>\n    <p><strong>&nbsp;</strong><strong>Content</strong></p>\n    <p>Our Service allows you to create content with the Quickpad application.&nbsp; You are responsible for any content\n        created in whole, and this website takes no responsibility for the same.</p>\n    <p><strong>Changes</strong></p>\n    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is\n        material we will try to provide at least 30 days’ notice prior to any new terms taking effect. What constitutes\n        a material change will be determined at our sole discretion.</p>\n    <p><strong>Contact Us</strong></p>\n    <p>If you have any questions about these Terms, please contact us.</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<p>proper works!</p>\n<p>FileId</p>\n<input id=\"txt\" (ngModelChange)=\"changeFildId($event)\" class=\"titleInput\"\n        type=\"text\" [(ngModel)]=\"FileId\"/>\n<p>UserId</p>\n<input id=\"txt\" (ngModelChange)=\"changeUserId($event)\" class=\"titleInput\"\n        type=\"text\" [(ngModel)]=\"UserId\"/>\n<p>LineNo</p>\n<input id=\"txt\" (ngModelChange)=\"changeLineNo($event)\" class=\"titleInput\"\n        type=\"text\" [(ngModel)]=\"LineNo\"/>\n<br/>\n<button (click) = \"PostCurrentLineTable($event)\">\n    postCurrentLineTable\n</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-keyboard-shortcuts [shortcuts]=\"shortcuts\"></ng-keyboard-shortcuts>\n<div class=\"authPopup\" *ngIf=\"authorise\">\n  <div class=\"contentBtn\">\n    <div class=\"title\">\n      <img alt=\"img\" src=\"/assets/img/driveIcon.png\"/>\n      <span>Authorise this App</span>\n    </div>\n    <div class=\"content\">\n      <span>QuickPad integrates with Google Drive</span>\n      <span>which makes it easy to save and work on</span>\n      <span>your text files.</span>\n      <span>If you'd like to use it, you will need to</span>\n      <span>authorize it through your Google login. It's</span>\n      <span>as easy as clicking the button below.</span>\n    </div>\n    <div class=\"buttons\">\n      <button type=\"button\" (click)=\"closeModel()\">NOPE</button>\n      <button type=\"button\" (click)=\"login()\">ACCEPT</button>\n    </div>\n  </div>\n</div>\n<mat-toolbar>\n  <img\n    (click)=\"homePage()\"\n    alt=\"logo\"\n    height=\"40\"\n    src=\"./assets/img/logo.png\"\n  />\n  <div class=\"appTitle\">\n    <p class=\"appName\" (click)=\"homePage()\">QuickPad.io</p>\n    <div *ngIf=\"isLoggedIn && pagehome != true\" class=\"title\">\n      <br />\n      <!-- <img alt=\"loading\" *ngIf=\"loaderNew\" class=\"newloader\" src=\"/assets/img/loading.gif\" /> -->\n      <span id=\"hide\"></span>\n      <input id=\"txt\" (ngModelChange)=\"changeWidthTitle($event)\" [class.withSpace]=\"inputClass\" class=\"titleInput\" *ngIf=\"modelFIleName\"\n        type=\"text\" [(ngModel)]=\"title1\" #menu/>\n      <span\n        id = \"drivefileTitleId\"\n        class=\"drivefileTitle\"\n        #filetitle\n        *ngIf=\"!modelFIleName\"\n        (click)=\"changeFile($event)\"\n        >{{ title }}</span\n      >\n      <input\n        class=\"titleExt\"\n        *ngIf=\"modelFIleExt\"\n        type=\"text\"\n        [(ngModel)]=\"fileType1\"\n        (ngModelChange)=\"changeWidthEtx($event)\"\n        #ext\n      />\n      <span\n        class=\"ext\"\n        #fileExt\n        *ngIf=\"!modelFIleExt\"\n        (click)=\"changeFileExt()\"\n      >\n        {{ fileType }}\n      </span>\n    </div>\n\n    <div class=\"itemsList\" *ngIf=\"listfiles != null && pagehome != true\">\n      <span id=\"folderList\" (click)=\"showMenuList()\"\n        ><span class=\"in\">in</span> <mat-icon svgIcon=\"folder1\"></mat-icon>\n        {{ projectTitle.name }}</span\n      >\n      <ul *ngIf=\"menuToggele\" class=\"dropdownMenu\">\n        <mat-progress-bar *ngIf=\"loaderFile\" class=\"newloaders\" mode=\"indeterminate\" value=\"40\"></mat-progress-bar>\n        <h3>\n          <i\n            *ngIf=\"projectTitle.name != 'My Drive'\"\n            (click)=\"backToParent(projectTitle.parents[0])\"\n            class=\"arrow-left\"\n            aria-hidden=\"true\"\n          >\n            <img\n              *ngIf=\"!themeMode && evalution\"\n              alt=\"arrow-left\"\n              src=\"/assets/img/left-arrow1.png\"\n            />\n            <img\n              *ngIf=\"!themeMode && !evalution\"\n              alt=\"arrow-left\"\n              src=\"/assets/img/left-arrow.png\"\n            />\n            <img\n              *ngIf=\"!evalution && themeMode\"\n              alt=\"arrow-left\"\n              src=\"/assets/img/left-arrow1.png\"\n            /> </i\n          >{{ projectTitle.name }}\n          <span (click)=\"hideMenu()\">&times;</span>\n        </h3>\n        <li *ngFor=\"let item of listfiles\">\n          <div\n            *ngIf=\"item.MimeType == 'application/vnd.google-apps.folder'\"\n            class=\"\"\n          >\n            <a href=\"javascript:void(0)\" (click)=\"backToParent(item.Id)\">\n              <mat-icon svgIcon=\"folder1\"></mat-icon> {{ item.Name }}</a\n            >\n          </div>\n          <div\n            *ngIf=\"item.MimeType != 'application/vnd.google-apps.folder'\"\n            class=\"\"\n          >\n            <i class=\"fa fa-file-code-o\"></i>\n            {{ item.Name }}\n          </div>\n        </li>\n        <h4 class=\"moveFolder\">\n          <mat-icon svgIcon=\"folder\" (click)=\"moveFile(projectTitle.id)\"></mat-icon>\n          <span (click)=\"moveFile(projectTitle.id)\">MOVE HERE</span>\n        </h4>\n      </ul>\n    </div>\n  </div>\n\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"fill-remaining-space\"></span>\n  <ng-container *ngIf=\"!isLoggedIn\">\n    <button id=\"userlogin\" class=\"login\" mat-button (click)=\"login()\">\n      Login\n    </button>\n  </ng-container>\n  <ng-container *ngIf=\"isLoggedIn\">\n    <button class=\"driveLink\" (click)=\"drivefileUrl()\">\n      <img alt=\"Drive icon\" src=\"./assets/img/driveIcon.png\" />\n    </button>\n    <div class=\"test\"></div>\n    <button class=\"userName\" [matMenuTriggerFor]=\"userMenu\">\n      {{ user.getGivenName()[0] }}\n    </button>\n    <mat-menu #userMenu=\"matMenu\" class=\"detailPopup\">\n      <div class=\"border-wrap\">\n        <button class=\"userName\">\n          {{ user.getGivenName()[0] }}\n        </button>\n      </div>\n      <h5>{{ user.getGivenName() }}</h5>\n      <p>{{ user.getEmail() }}</p>\n      <button id=\"userlogin\" mat-button (click)=\"switchAccount()\">\n        Switch Account\n      </button>\n      <hr />\n      <button class=\"logoutBtn\" mat-button (click)=\"logout()\">Logout</button>\n    </mat-menu>\n  </ng-container>\n</mat-toolbar>\n<div class=\"bg\" *ngIf=\"menuToggele\"></div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/terms/terms.component */ "./src/app/pages/terms/terms.component.ts");
/* harmony import */ var _pages_private_policy_private_policy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/private-policy/private-policy.component */ "./src/app/pages/private-policy/private-policy.component.ts");
/* harmony import */ var _pages_proper_proper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/proper/proper.component */ "./src/app/pages/proper/proper.component.ts");
/* harmony import */ var _pages_test_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/test/test.component */ "./src/app/pages/test/test.component.ts");








const routes = [
    { path: 'editor', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: '', redirectTo: 'editor', pathMatch: 'full' },
    { path: 'private-policy', component: _pages_private_policy_private_policy_component__WEBPACK_IMPORTED_MODULE_5__["PrivatePolicyComponent"] },
    { path: 'terms', component: _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_4__["TermsComponent"] },
    { path: 'proper', component: _pages_proper_proper_component__WEBPACK_IMPORTED_MODULE_6__["ProperComponent"] },
    { path: 'test-node-server', component: _pages_test_test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let AppComponent = class AppComponent {
    constructor(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.title = 'quickPad';
        this.matIconRegistry.addSvgIcon("save", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/save.svg"));
        this.matIconRegistry.addSvgIcon("search", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/search.svg"));
        this.matIconRegistry.addSvgIcon("undo", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/undo.svg"));
        this.matIconRegistry.addSvgIcon("redo", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/redo.svg"));
        this.matIconRegistry.addSvgIcon("wrap", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/wrap.svg"));
        this.matIconRegistry.addSvgIcon("close", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/close.svg"));
        this.matIconRegistry.addSvgIcon("info", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/ellipsis.svg"));
        this.matIconRegistry.addSvgIcon("nightmode", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/moon.svg"));
        this.matIconRegistry.addSvgIcon("daymode", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/sun.svg"));
        this.matIconRegistry.addSvgIcon("folder", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/folder.svg"));
        this.matIconRegistry.addSvgIcon("folder1", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/folder1.svg"));
        this.matIconRegistry.addSvgIcon("decrease", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/decrease.svg"));
        this.matIconRegistry.addSvgIcon("increase", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/increase.svg"));
        this.matIconRegistry.addSvgIcon("link", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/link.svg"));
        this.matIconRegistry.addSvgIcon("txt", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/txt.svg"));
        this.matIconRegistry.addSvgIcon("epub", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/epub.svg"));
        this.matIconRegistry.addSvgIcon("bookmark", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/bookmark.svg"));
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initGapi, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGapi", function() { return initGapi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _infrastructure_sessions_loggedInGuard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../infrastructure/sessions/loggedInGuard */ "./src/infrastructure/sessions/loggedInGuard.ts");
/* harmony import */ var _infrastructure_repositories_user_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../infrastructure/repositories/user.repository */ "./src/infrastructure/repositories/user.repository.ts");
/* harmony import */ var _infrastructure_repositories_file_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../infrastructure/repositories/file.repository */ "./src/infrastructure/repositories/file.repository.ts");
/* harmony import */ var _infrastructure_sessions_breadcrumb_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../infrastructure/sessions/breadcrumb.session */ "./src/infrastructure/sessions/breadcrumb.session.ts");
/* harmony import */ var _infrastructure_repositories_app_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../infrastructure/repositories/app.repository */ "./src/infrastructure/repositories/app.repository.ts");
/* harmony import */ var _infrastructure_sessions_user_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../infrastructure/sessions/user.session */ "./src/infrastructure/sessions/user.session.ts");
/* harmony import */ var _infrastructure_sessions_file_session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../infrastructure/sessions/file.session */ "./src/infrastructure/sessions/file.session.ts");
/* harmony import */ var _infrastructure_sessions_app_session__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../infrastructure/sessions/app.session */ "./src/infrastructure/sessions/app.session.ts");
/* harmony import */ var _infrastructure_app_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../infrastructure/app.context */ "./src/infrastructure/app.context.ts");
/* harmony import */ var _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-keyboard-shortcuts */ "./node_modules/ng-keyboard-shortcuts/fesm2015/ng-keyboard-shortcuts.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/fesm2015/ngx-monaco-editor.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _pages_private_policy_private_policy_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./pages/private-policy/private-policy.component */ "./src/app/pages/private-policy/private-policy.component.ts");
/* harmony import */ var _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./pages/terms/terms.component */ "./src/app/pages/terms/terms.component.ts");
/* harmony import */ var _pages_proper_proper_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./pages/proper/proper.component */ "./src/app/pages/proper/proper.component.ts");
/* harmony import */ var _pages_test_test_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./pages/test/test.component */ "./src/app/pages/test/test.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pages_books_modal_books_modal_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./pages/books-modal/books-modal.component */ "./src/app/pages/books-modal/books-modal.component.ts");
/* harmony import */ var _pages_books_modal_CustomPaginatorConfiguration__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./pages/books-modal/CustomPaginatorConfiguration */ "./src/app/pages/books-modal/CustomPaginatorConfiguration.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _shared_services_epub_service__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./shared/services/epub.service */ "./src/app/shared/services/epub.service.ts");







































































function initGapi(gapiSession) {
    return () => gapiSession.initClient();
}
const monacoConfig = {
    defaultOptions: { scrollBeyondLastLine: false },
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
            _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
            _pages_private_policy_private_policy_component__WEBPACK_IMPORTED_MODULE_59__["PrivatePolicyComponent"],
            _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_60__["TermsComponent"],
            _pages_proper_proper_component__WEBPACK_IMPORTED_MODULE_61__["ProperComponent"],
            _pages_test_test_component__WEBPACK_IMPORTED_MODULE_62__["TestComponent"],
            _pages_books_modal_books_modal_component__WEBPACK_IMPORTED_MODULE_65__["BooksModalComponent"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_67__["DialogComponent"]
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
            ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_20__["KeyboardShortcutsModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_14__["QuillModule"].forRoot(),
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_21__["AngularEditorModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_42__["HttpModule"],
            ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_23__["MonacoEditorModule"].forRoot(monacoConfig),
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_26__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_31__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_35__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_36__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_37__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_39__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_40__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_41__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_43__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_44__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_45__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_46__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_47__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_43__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_48__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_49__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_50__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_51__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_52__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_53__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_54__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_55__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_56__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_57__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_58__["MatTreeModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_38__["MatIconModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_69__["MatFormFieldModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_63__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_64__["environment"].production })
        ],
        entryComponents: [
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_67__["DialogComponent"],
            _pages_books_modal_books_modal_component__WEBPACK_IMPORTED_MODULE_65__["BooksModalComponent"]
        ],
        providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_13__["APP_INITIALIZER"], useFactory: initGapi, deps: [_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_10__["GapiSession"]], multi: true },
            { provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_44__["MatPaginatorIntl"], useValue: Object(_pages_books_modal_CustomPaginatorConfiguration__WEBPACK_IMPORTED_MODULE_66__["CustomPaginator"])() },
            _infrastructure_app_context__WEBPACK_IMPORTED_MODULE_9__["AppContext"],
            _infrastructure_sessions_app_session__WEBPACK_IMPORTED_MODULE_8__["AppSession"],
            _infrastructure_sessions_file_session__WEBPACK_IMPORTED_MODULE_7__["FileSession"],
            _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_10__["GapiSession"],
            _infrastructure_sessions_user_session__WEBPACK_IMPORTED_MODULE_6__["UserSession"],
            _infrastructure_repositories_app_repository__WEBPACK_IMPORTED_MODULE_5__["AppRepository"],
            _infrastructure_sessions_breadcrumb_session__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbSession"],
            _infrastructure_repositories_file_repository__WEBPACK_IMPORTED_MODULE_3__["FileRepository"],
            _infrastructure_repositories_user_repository__WEBPACK_IMPORTED_MODULE_2__["UserRepository"],
            _infrastructure_sessions_loggedInGuard__WEBPACK_IMPORTED_MODULE_1__["LoggedInGuard"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_68__["DialogService"],
            _shared_services_epub_service__WEBPACK_IMPORTED_MODULE_70__["EpubService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



let Config = class Config {
    constructor() {
        this.config = null;
        this.config = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    getConfig(key) {
        return this.config[key];
    }
};
Config = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Config);



/***/ }),

/***/ "./src/app/dialog/dialog.component.scss":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_dialog_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dialog-data */ "./src/app/shared/dialog-data.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let DialogComponent = class DialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    close() {
        this.dialogRef.close(true);
    }
};
DialogComponent.ctorParameters = () => [
    { type: _shared_dialog_data__WEBPACK_IMPORTED_MODULE_2__["DialogData"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog.component.scss */ "./src/app/dialog/dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DialogComponent);



/***/ }),

/***/ "./src/app/pages/books-modal/CustomPaginatorConfiguration.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/books-modal/CustomPaginatorConfiguration.ts ***!
  \*******************************************************************/
/*! exports provided: CustomPaginator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPaginator", function() { return CustomPaginator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");


function CustomPaginator() {
    const customPaginatorIntl = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorIntl"]();
    customPaginatorIntl.itemsPerPageLabel = 'Rows per page:';
    customPaginatorIntl.getRangeLabel = (page, pageSize, length) => { if (length == 0 || pageSize == 0) {
        return `0 in ${length}`;
    } length = Math.max(length, 0); const startIndex = page * pageSize; const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; return `${startIndex + 1} – ${endIndex} in ${length}`; };
    return customPaginatorIntl;
}


/***/ }),

/***/ "./src/app/pages/books-modal/books-modal.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/books-modal/books-modal.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".m-main-heading {\n  padding-left: 29px;\n  height: 44px;\n  font-size: 20px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2.2;\n  letter-spacing: normal;\n  color: #29272d;\n}\n\n.mat-tab-label-active .m-tab-title {\n  font-weight: bold !important;\n  color: black !important;\n}\n\n.m-form {\n  overflow: hidden;\n}\n\n.m-header-container {\n  height: 55px;\n  box-shadow: inset 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n  background-color: #eeeeee;\n  padding: 10px 0px 3px 21px;\n  width: 100%;\n  overflow-x: hidden;\n}\n\n.m-input-wrapper {\n  width: 60%;\n  float: left;\n  scroll-padding-bottom: 50px;\n  padding-bottom: 7px;\n}\n\n.m-input-main {\n  background-color: white;\n  border: 2px solid #e0e0e0;\n  border-radius: 5px;\n}\n\n.m-search {\n  margin-top: 2px;\n}\n\n.m-search-inputs {\n  border: 1px solid #bdbaba;\n  background: white;\n  display: inline-block;\n  position: relative;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  border: 0px !important;\n}\n\n.m-modal-tools {\n  width: 40%;\n  float: right;\n}\n\n.m-grey {\n  color: #747474 !important;\n}\n\n.m-book-icon {\n  width: 26px;\n  margin: 20px;\n  margin-left: 0px;\n}\n\n.m-table-title {\n  font-size: 14px;\n  font-weight: bold;\n  color: #29272d;\n}\n\n.m-comments-icon {\n  width: 20px;\n  height: 20px;\n  float: left;\n  margin-right: 11px;\n}\n\n.m-load-btn {\n  border-radius: 4px;\n  border: 1px solid;\n  border-color: #a41f5e;\n  width: 59px;\n  background-color: #a41f5e;\n  color: white;\n  margin-left: 23px;\n  margin-bottom: 25px;\n  height: 30px;\n}\n\n.m-ml-5 {\n  margin-left: 5px;\n}\n\n.m-cancel-btn {\n  border-radius: 4px;\n  border: 1px solid;\n  border-color: white;\n  width: 84px;\n  margin-bottom: 25px;\n  background-color: white;\n  color: #a41f5e;\n  height: 30px;\n}\n\n.m-review-content {\n  float: left;\n  width: 70%;\n}\n\n.m-ml-40 {\n  margin-left: 40px;\n}\n\n.m-italic {\n  font-style: italic;\n}\n\n.m-bold {\n  font-weight: bold;\n}\n\n.m-w-10 {\n  width: 10%;\n  display: inline-block;\n}\n\n.m-tag-label {\n  font-family: \"OpenSans-Regular\";\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  color: #9a9c9f;\n  min-width: 60px;\n}\n\n.m-ml-5 {\n  margin-left: 5px;\n}\n\n.m-pl-24 {\n  padding-left: 24px !important;\n}\n\n.m-mt-28 {\n  margin-top: 28px;\n}\n\n.m-books-links {\n  min-width: 100px;\n  display: inline-block;\n  margin-left: 30px;\n  font-size: 12px;\n  color: #0091ea;\n  text-decoration: underline;\n  margin-bottom: 6px;\n  cursor: pointer;\n}\n\n.m-review-details > div > .m-books-links {\n  margin-left: 0px !important;\n}\n\n.m-books-links {\n  min-width: 100px;\n  display: inline-block;\n  margin-left: 30px;\n  font-size: 12px;\n  color: #0091ea;\n  text-decoration: underline;\n  margin-bottom: 6px;\n  cursor: pointer;\n}\n\n.m-heading-1 {\n  font-size: 16px;\n  margin-top: 11px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: 0.16px;\n  color: #29272d;\n}\n\ntable {\n  width: 100%;\n}\n\n.mat-paginator-container {\n  display: flex;\n  justify-content: flex-start !important;\n}\n\n.mat-tab-group.mat-primary .mat-ink-bar,\n.mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #ffa92c !important;\n}\n\n.modal-tools img {\n  width: 1.25rem;\n  height: 1.25rem;\n  float: right;\n  margin-top: 0.8rem;\n  margin-right: 2rem;\n}\n\n.input-wrappers {\n  float: right;\n  margin-right: auto;\n  scroll-padding-top: 30px;\n  margin-bottom: -30px;\n  margin-top: -5px;\n  padding-right: 24px;\n}\n\n.mat-dialog-container {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.win {\n  background-image: url('win.svg');\n  background-size: 38px;\n  background-repeat: no-repeat;\n}\n\n.mat-tab-label-container {\n  padding-left: 20px;\n}\n\n.center {\n  margin: 0;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: white;\n  font-size: 25px;\n  display: block;\n}\n\n.readcenter {\n  margin: 0;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  display: block;\n  width: 44px;\n  height: 24px;\n  font-family: OpenSans;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2;\n  letter-spacing: 1px;\n  color: rgba(26, 15, 3, 0.8);\n}\n\n.last {\n  width: 97px;\n  height: 28px;\n  cursor: pointer;\n  border-radius: 200px;\n  background-color: #fcdfbd;\n}\n\n.read {\n  cursor: pointer;\n  width: 70px;\n  height: 25px;\n  border-radius: 200px;\n  background-color: #fcdfbd;\n}\n\n.READ {\n  width: 75px;\n  height: 28px;\n  border-radius: 16px;\n  border: solid 1px #fcd09c;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n.label {\n  margin: 0;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  display: block;\n  width: 44px;\n  height: 24px;\n  font-family: OpenSans;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2;\n  letter-spacing: 1px;\n  color: rgba(26, 15, 3, 0.8);\n}\n\n.labela {\n  margin: 0;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  display: block;\n  width: 73px;\n  height: 16px;\n  font-family: OpenSans;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  color: rgba(26, 15, 3, 0.8);\n}\n\n.labelb {\n  margin: 0;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  display: block;\n  width: 69px;\n  height: 16px;\n  font-family: OpenSans;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  color: rgba(26, 15, 3, 0.8);\n}\n\n.labelc {\n  margin: 0;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  display: block;\n  width: 45px;\n  height: 16px;\n  font-family: OpenSans;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  color: rgba(26, 15, 3, 0.8);\n}\n\n.Chips-Input-Text-only-Enabled {\n  width: 97px;\n  height: 28px;\n  border-radius: 16px;\n  background-color: #fcdfbd;\n}\n\n.property {\n  width: 159px;\n  height: 16px;\n  font-family: OpenSans;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: normal;\n  color: #0091ea;\n  margin-left: 20px;\n}\n\n.one {\n  width: 149px;\n  height: 12px;\n  font-family: OpenSans;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2.33;\n  letter-spacing: normal;\n  color: #9a9c9f;\n  margin-left: 20px;\n}\n\n.rtab {\n  min-height: 55px;\n  box-shadow: inset 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n  background-color: #ffffff;\n  padding: 10px 0px 3px 21px;\n  overflow-x: hidden;\n  margin-right: 20px;\n}\n\n.tabtext {\n  width: 579px;\n  height: 24px;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: 0.9px;\n  color: #29272d;\n}\n\n.yes {\n  width: 27px;\n  height: 24px;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: 0.9px;\n  color: #a41f5e;\n}\n\n.no {\n  width: 24px;\n  height: 24px;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: 0.9px;\n  color: #a41f5e;\n}\n\n.link {\n  margin-right: 20px;\n}\n\n.submited-heading {\n  width: 60%;\n  display: inline-block;\n  margin-left: 20px;\n}\n\n.read-btn {\n  width: 75px;\n  height: 28px;\n  border-radius: 16px;\n  border: solid 1px #fcd09c;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n.textCenter {\n  margin: 0;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  display: block;\n  width: 44px;\n  height: 24px;\n  font-family: OpenSans;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2;\n  letter-spacing: 1px;\n  color: rgba(26, 15, 3, 0.8);\n}\n\n.tabRead {\n  width: 9%;\n  display: inline-block;\n  margin-left: 0px;\n}\n\n.tabEasyToRead {\n  width: 14%;\n  display: inline-block;\n  margin-left: px;\n}\n\n.read-btn {\n  width: 75px;\n  height: 28px;\n  border-radius: 16px;\n  border: solid 1px #fcd09c;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n.tabPageTurner {\n  width: 14%;\n  display: inline-block;\n  margin-left: px;\n}\n\n.tabExciting {\n  width: 15%;\n  display: inline-block;\n  margin-left: 0px;\n}\n\n.exciting-btn {\n  cursor: pointer;\n  width: 85px;\n  height: 28px;\n  border-radius: 200px;\n  background-color: #fcdfbd;\n}\n\n.w-75 {\n  width: 75%;\n}\n\n.circle-logo {\n  width: 8%;\n  display: inline-block;\n  float: left;\n}\n\n.rating-section {\n  width: 10%;\n  display: inline-block;\n  margin-right: 25px;\n  float: right;\n}\n\n.w-5 {\n  width: 5%;\n  display: inline-block;\n}\n\n.more-books {\n  width: 20%;\n  display: inline-block;\n  float: left;\n  font-size: 12px;\n}\n\n.w-15 {\n  display: inline-block;\n  width: 15%;\n  color: #0091ea;\n}\n\n.w-20 {\n  display: inline-block;\n  width: 20%;\n  color: #0091ea;\n}\n\n.input-wrappers .mat-select {\n  background-color: white;\n}\n\n.input-wrappers .mat-form-field-infix {\n  padding-top: 0px !important;\n  padding-bottom: 20px;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: #EEEEEE;\n}\n\n.mat-tab-body-content {\n  overflow: hidden !important;\n}\n\n.mat-dialog-content {\n  padding-right: 0px;\n}\n\n.at-dialog-actions {\n  border-top: 1px solid;\n}\n\n.cdk-overlay-pane {\n  max-height: 90vh;\n}\n\nmat-tab-group.mat-primary {\n  height: 80vh;\n}\n\n.m-main-heading {\n  height: 6vh;\n}\n\n.main-modal-content {\n  display: block;\n  overflow: hidden;\n  max-height: 86vh;\n  min-width: 80vw;\n}\n\n.m-w60-inline-block {\n  width: 60%;\n  display: inline-block;\n  font-size: 12px;\n  margin-top: 11px;\n}\n\n.m-w40-inline-block {\n  width: 40%;\n  display: inline-block;\n  font-size: 12px;\n}\n\n.main-body.ng-star-inserted {\n  min-height: 53vh;\n  height: 74%;\n}\n\n.mat-paginator-container {\n  min-height: 42vh;\n}\n\n.search-btn {\n  padding-top: 5px;\n  float: left;\n}\n\n.m-header-container {\n  height: 64px;\n}\n\n.footer-box {\n  z-index: 10000;\n  background: #fafafa;\n  padding: 0px;\n  /* min-height: 54px; */\n  position: fixed;\n  bottom: 50px;\n  left: 0px;\n  margin: 0px;\n  width: 100%;\n  border-top: 1px solid #b5b5b5;\n  padding-left: 18px;\n  max-width: 78.5vw;\n  margin: 0 auto;\n  right: 0;\n}\n\n.search-bar {\n  height: 64px;\n  background-color: #EEEEEE;\n  box-shadow: inset 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n  padding-left: 24px;\n}\n\n.search-box {\n  overflow: hidden;\n  box-sizing: border-box;\n  height: 54px;\n  background-color: #FFFFFF;\n  margin-top: 5px;\n  width: 60%;\n  border: 1px solid rgba(25, 25, 25, 0.32);\n  border-radius: 4px;\n  float: left;\n}\n\n.search-box > input {\n  width: 90%;\n  height: 100%;\n  border: 0px;\n  border-radius: 4px;\n  padding-left: 44px;\n  font-size: 14px;\n  font-family: sans-serif;\n  color: #9A9C9F;\n}\n\n.search-box > .material-icons.search {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  color: #757575;\n}\n\n.search-box > .material-icons.dropdown {\n  position: absolute;\n  top: 21px;\n  left: 55%;\n  color: #757575;\n}\n\n.search-tools {\n  height: 54px;\n  display: block;\n  margin-top: 5px;\n  width: 39%;\n  float: right;\n}\n\n.order-tool {\n  display: block;\n  height: 100%;\n  width: 20%;\n  float: right;\n  margin-right: 26px;\n}\n\n.grid-btn {\n  cursor: pointer;\n  height: 100%;\n  width: 20%;\n  float: right;\n  margin-right: 10px;\n}\n\n.grid-btn > img {\n  height: 26px;\n  margin-top: 13px;\n  float: right;\n}\n\n.order-btn-text {\n  margin-top: -17px;\n  margin-left: 5px;\n  margin-bottom: -12px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.order-btn {\n  cursor: pointer;\n  margin-top: -2px;\n  float: right;\n  color: #747474;\n}\n\n.order-btn > .material-icons {\n  font-size: 32px;\n}\n\n.mat-table > thead {\n  background: #FAFAFA;\n}\n\n.mat-column-icon {\n  width: 5%;\n}\n\n.mat-column-title {\n  width: 30%;\n}\n\n.mat-column-author {\n  width: 30%;\n  border-right: 1px solid #E1E1E1;\n}\n\n.mat-column-reviews {\n  width: 15%;\n}\n\n.mat-column-view {\n  width: 10%;\n}\n\n.mat-column-stickey {\n  width: 10%;\n}\n\n.mat-dialog-content {\n  width: 100%;\n  height: 100%;\n}\n\n.table-heading {\n  font-weight: bold;\n  font-size: 14px;\n  color: #29272D;\n}\n\n.mat-column-reviews {\n  padding-left: 20px !important;\n}\n\n.error-message {\n  text-align: center;\n  padding: 13px;\n  font-family: \"OpenSans-Regular\";\n}\n\n.btn-margin {\n  margin-left: 25px;\n}\n\n.tools-btn {\n  cursor: pointer;\n  width: 50%;\n  float: left;\n}\n\n.m-book-title {\n  max-width: 94vh;\n  display: inline-block;\n  margin-top: 9px;\n}\n\n.m-book-title > h5 {\n  font-weight: lighter;\n  margin-top: 6px;\n  font-family: \"OpenSans-Regular\";\n}\n\n.m-book-title > h4 {\n  font-family: \"OpenSans-SemiBold\";\n}\n\n.submited-heading {\n  width: 60%;\n  display: inline-block;\n  margin-left: 20px;\n}\n\n.submited-heading > h4 {\n  margin-bottom: 4px;\n  color: #000000;\n  font-family: \"OpenSans-SemiBold\";\n}\n\n.submited-heading > h5 {\n  margin-bottom: 8px;\n  color: #9A9C9F;\n  font-family: \"OpenSans-Regular\";\n}\n\n.rating-section {\n  width: 10%;\n  display: inline-block;\n  margin-right: 25px;\n  float: right;\n}\n\n.circle-logo {\n  width: 6%;\n  display: inline-block;\n  float: left;\n}\n\n.parent {\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  background-color: #fbb376;\n}\n\n.review-heading {\n  padding-top: 12px;\n}\n\n.review-text {\n  width: 80%;\n  font-family: \"OpenSans-Regular\";\n  font-size: 14px;\n  font-weight: normal;\n  color: #4d4d4d;\n  padding-top: 20px;\n  text-align: justify;\n  margin-bottom: 48px;\n}\n\n.mat-form-field-underline {\n  opacity: 0;\n}\n\n.input-wrappers .mat-form-field-flex {\n  background: white !important;\n  border: 1px solid;\n  border-radius: 4px !important;\n  height: 48px !important;\n  margin-top: 12px;\n}\n\n.mat-form-field-appearance-fill .mat-form-field-flex {\n  padding: 2px 9px 0 10px !important;\n  border: 1px solid rgba(25, 25, 25, 0.32) !important;\n}\n\n.mat-select-trigger > .mat-select-arrow-wrapper {\n  padding-bottom: 10px;\n}\n\n.mat-form-field-appearance-fill .mat-select-arrow-wrapper {\n  transform: translateY(0%) !important;\n}\n\n.field_tags {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  width: 33% !important;\n  height: 48px;\n}\n\n.selected-chips {\n  margin-bottom: 10px;\n}\n\n.review-input-field {\n  width: 99%;\n  border: 1px solid rgba(25, 25, 25, 0.32);\n  border-radius: 4px;\n  padding-right: 14px;\n  padding-left: 10px;\n}\n\n.review-input-field > legend {\n  padding: 5px 10px;\n  margin-left: 15px;\n  color: #F79624;\n  font-size: 12px;\n}\n\n.review-input-field > textarea {\n  width: 100%;\n  border: none;\n  resize: none;\n  font-family: \"OpenSans-Regular\" !important;\n  padding-top: 10px;\n  font-size: 16px;\n}\n\n.word-count {\n  float: right;\n  color: rgba(154, 156, 159, 0.8);\n  font-size: 12px;\n  font-family: \"OpenSans-Regular\";\n}\n\n.review-input-field > textarea::-webkit-input-placeholder {\n  color: #9A9C9F;\n  font-size: 14px;\n  font-family: \"OpenSans-Regular\" !important;\n}\n\n.book-details {\n  font-family: \"OpenSans-Regular\";\n  font-size: 14px;\n  font-weight: normal;\n  color: #4d4d4d;\n  text-align: justify;\n  padding-top: 10px;\n  line-height: 1.71;\n  padding-right: 48px;\n}\n\n.h-book-details {\n  font-family: \"OpenSans-SemiBold\";\n  font-size: 16px;\n  color: #29272d;\n  padding-top: 16px;\n}\n\n.m-pt-19 {\n  padding-top: 19px;\n}\n\n.book-detail-btn {\n  margin-left: 0px !important;\n}\n\n.m-pt-55 {\n  padding-top: 55px;\n}\n\n.m-flex {\n  display: flex;\n}\n\n.m-mt-16 {\n  margin-top: 16px;\n}\n\n.m-review-details {\n  float: right;\n  width: 30%;\n}\n\n.m-w-50 {\n  width: 50%;\n  display: inline-block;\n}\n\n.m-left {\n  float: left;\n}\n\n.m-pt-18 {\n  padding-top: 18px;\n}\n\n.color-brown {\n  color: #f0c694;\n}\n\n.m-rating-count {\n  font-size: 12px;\n  font-weight: 600;\n  position: relative;\n  bottom: 4px;\n  left: 8px;\n  color: #4d4d4d;\n}\n\n.m-right {\n  float: right;\n}\n\n.m-t-9 {\n  top: 9px;\n}\n\n.m-line {\n  margin-bottom: 23px;\n  margin-top: 33px;\n  width: 90%;\n  color: #f5f5f5;\n  border-color: #d8d9da;\n  background: #e1e1e1;\n}\n\n.m-data {\n  font-size: 12px;\n  margin-bottom: 23px;\n}\n\n.review-input-field > textarea::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #9A9C9F;\n  font-size: 14px;\n  font-family: \"OpenSans-Regular\" !important;\n}\n\n.review-input-field > textarea::-webkit-input-placeholder {\n  color: #9A9C9F;\n  font-size: 14px;\n  font-family: \"OpenSans-Regular\" !important;\n}\n\n.review-input-field > textarea::-ms-input-placeholder {\n  color: #9A9C9F;\n  font-size: 14px;\n  font-family: \"OpenSans-Regular\" !important;\n}\n\n.review-input-field > textarea::placeholder {\n  color: #9A9C9F;\n  font-size: 14px;\n  font-family: \"OpenSans-Regular\" !important;\n}\n\n.recommendation {\n  z-index: 30000;\n  height: 56px;\n  background: #FAFAFA;\n  position: absolute;\n  width: 100%;\n}\n\n.recommendation-label {\n  float: left;\n  margin-top: 16px;\n  margin-left: 24px;\n  font-family: \"OpenSans-SemiBold\";\n}\n\n.recommendation-actions {\n  float: right;\n  display: flex;\n  margin-top: 9px;\n  margin-right: 24px;\n}\n\n.recommendation-spacing {\n  margin-top: 78px;\n}\n\n.recommendation-selection {\n  float: right;\n  margin-top: 18px;\n  margin-right: 34px;\n}\n\n.review-container {\n  margin-left: 24px;\n  margin-right: 24px;\n}\n\n.clear {\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 100%;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.8);\n  margin-left: 5px;\n  position: absolute;\n  right: 8px;\n  top: 7px;\n}\n\n.hide {\n  display: none;\n}\n\n.tag-chip-list {\n  height: 46px !important;\n  display: block !important;\n  overflow: hidden !important;\n}\n\n.vertical-center {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.tag-chip-list > .mat-form-field-wrapper {\n  display: block !important;\n  overflow: hidden !important;\n}\n\n.tag-chip-list > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0px;\n  margin: 8px;\n  border: 0px;\n  font-size: 14px;\n  font-family: \"OpenSans-SemiBold\";\n  color: #9A9C9F;\n}\n\n.tags-input-custom {\n  margin-top: 10px;\n  height: 34px;\n  font-size: 14px !important;\n  font-family: \"OpenSans-SemiBold\" !important;\n}\n\n.input-custom {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  border: 0px;\n  font-size: 14px !important;\n  font-family: \"OpenSans-SemiBold\" !important;\n  color: #9A9C9F;\n}\n\n.my-btn {\n  cursor: pointer;\n  margin: 5px;\n  border: 0px;\n  font-weight: bold;\n  padding: 5px;\n  border-radius: 4px !important;\n}\n\n.btn-filled {\n  background-color: #A41F5E !important;\n  color: #FFFFFF !important;\n  font-size: 14px;\n}\n\n.btn-filled:hover {\n  background-color: #CC2775 !important;\n}\n\n.btn-filled:focus {\n  background-color: #CC2775 !important;\n}\n\n.btn-filled:disabled {\n  background-color: #A41F5E !important;\n  color: #701540 !important;\n}\n\n.btn-txt {\n  background-color: inherit !important;\n  color: #A41F5E !important;\n  font-size: 14px;\n  min-width: 59px;\n  line-height: 25px;\n}\n\n.btn-filled {\n  background-color: #A41F5E !important;\n  min-width: 59px;\n  line-height: 25px;\n  font-weight: 600;\n}\n\n.btn-txt:disabled {\n  background-color: #DCDCDC !important;\n  color: #888888 !important;\n}\n\n.btn-txt:hover {\n  background-color: #F3EAFE !important;\n  color: #A41F5E !important;\n}\n\n.btn-txt:focus {\n  background-color: #EADAFE !important;\n  color: #A41F5E !important;\n}\n\n.btn-tag {\n  border: 1px solid #FCD09C !important;\n  color: #1A0F03 !important;\n  border-radius: 23px;\n  padding-left: 14px;\n  padding-right: 16px;\n  border-radius: 60px !important;\n  background: white !important;\n  background-color: white !important;\n  font-family: \"OpenSans-SemiBold\";\n  font-size: 16px;\n  padding-top: 4px;\n  margin-left: 5px;\n  height: 28px;\n}\n\n.btn-avatar {\n  padding-left: 28px !important;\n  line-height: 23px;\n  padding-right: 23px;\n}\n\n.btn-text-only {\n  background-color: #FCDFBD;\n  font-size: 12px;\n  font-family: \"OpenSans-SemiBold\";\n}\n\n.m-mat-icons {\n  font-size: 20px;\n  float: left;\n  color: #f0c694;\n  margin-top: 2px;\n  margin-right: 2px;\n}\n\n.cdk-overlay-pane.my-dialog {\n  position: relative !important;\n}\n\n.close.mat-button {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  padding: 5px;\n  line-height: 14px;\n  min-width: auto;\n  font-size: 20px;\n}\n\n.tag-label {\n  float: left;\n  font-size: 12px;\n  color: #9A9C9F;\n  margin-right: 10px;\n  padding: 5px;\n  margin-top: 4px;\n  padding-left: 0;\n  min-width: 68px;\n  font-weight: 600;\n}\n\n.btn-tag > .m-mat-icons {\n  font-size: 16px;\n  float: left;\n  color: #FCD09C;\n  margin-left: -18px;\n  margin-top: 2px;\n  margin-right: 2px;\n}\n\n.review-section {\n  margin-bottom: 18px;\n}\n\n.mat-chip-custom {\n  background: #FCDFBD !important;\n  background-color: #FCDFBD !important;\n  color: #1A0F03 !important;\n  font-family: \"OpenSans-SemiBold\";\n  font-size: 12px;\n}\n\n.mat-chip-custom:hover {\n  background: #FFD6A6 !important;\n  background-color: #FFD6A6 !important;\n  color: #1A0F03 !important;\n  font-family: \"OpenSans-SemiBold\";\n  font-size: 12px;\n}\n\n.mat-chip-custom:hover::after {\n  background: #FFD6A6 !important;\n  background-color: #FFD6A6 !important;\n  color: #1A0F03 !important;\n  font-family: \"OpenSans-SemiBold\";\n  font-size: 16px;\n}\n\n@media only screen and (max-width: 360px) {\n  .m-main-heading {\n    color: red;\n  }\n\n  .search-tools > .grid-btn > img {\n    height: 20px;\n    margin-top: 16px;\n    float: right;\n  }\n}\n\n.m-header-container {\n  padding: 28px 0 0px 24px;\n}\n\np.paragraph {\n  padding: 30px 15px 0 24px;\n  max-width: 700px;\n}\n\n.mat-paginator-range-label {\n  color: #000;\n}\n\n.mat-paginator-page-size-label {\n  color: #000;\n}\n\n.main-body.ng-star-inserted {\n  padding-bottom: 60px;\n}\n\n.tab-title.ng-star-inserted {\n  color: #000;\n}\n\n.search-box:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 7px 7px 0 7px;\n  border-color: #747474 transparent transparent transparent;\n  position: absolute;\n  right: 7px;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  display: none;\n}\n\n.search-box {\n  position: relative;\n}\n\n.mat-dialog-content {\n  max-height: inherit !important;\n}\n\na.ng-star-inserted {\n  color: #0091EA;\n}\n\n.m-books-links {\n  font-weight: normal;\n}\n\n.btn-tag {\n  padding-top: 0;\n}\n\n.btn-avatar {\n  padding-bottom: 0;\n}\n\nfieldset.review-input-field.field_tags {\n  padding-top: 0 !important;\n}\n\n.review-input-field.field_tags {\n  position: relative;\n}\n\n.review-input-field.field_tags:after {\n  content: \"\";\n  width: 14px;\n  height: 2px;\n  background: #747474;\n  position: absolute;\n  right: 7px;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n}\n\n.review-input-field.field_tags:before {\n  content: \"\";\n  width: 14px;\n  height: 2px;\n  background: #747474;\n  position: absolute;\n  right: 14px;\n  top: 48%;\n  transform: rotate(90deg);\n  pointer-events: none;\n  pointer-events: none;\n}\n\nfieldset.review-input-field.field_tags.last-input:before {\n  content: \"\";\n  display: none;\n}\n\nfieldset.review-input-field.field_tags.last-input:after {\n  content: \"\";\n  display: none;\n}\n\nfieldset.review-input-field.field_tags.last-input img {\n  position: absolute;\n  right: 2px;\n  top: 15px;\n  pointer-events: none;\n}\n\n.review-input-field.field_tags:nth-child(7):before {\n  content: \"\";\n  display: none;\n}\n\n.review-input-field.field_tags:nth-child(7):after {\n  content: \"\";\n  display: none;\n}\n\n.my-btn.btn-filled {\n  position: relative;\n  overflow: hidden;\n}\n\n.btn-filled:before {\n  content: \"\";\n  width: 61px;\n  height: 75px;\n  position: absolute;\n  right: 9px;\n  top: -21px;\n  border-radius: 100%;\n  background: rgba(255, 255, 255, 0.32);\n  transition: all 0.5s;\n  pointer-events: none;\n  opacity: 0;\n}\n\n.btn-filled:disabled {\n  background: #A41F5E;\n  color: #701540;\n}\n\n.btn-txt:disabled {\n  background: #DCDCDC;\n  color: #888888;\n}\n\n.btn-txt:focus {\n  border-radius: 14px !important;\n}\n\n.btn-filled:focus.btn-filled:before {\n  content: \"\";\n  opacity: 1;\n}\n\n.tools-btn img.dote {\n  display: none;\n}\n\n.btn-avatar {\n  font-size: 12px;\n  position: relative;\n}\n\n.dropdown .tools-btn img {\n  display: block;\n}\n\n.dropdown {\n  display: none;\n}\n\n.open-dropdown {\n  display: none;\n}\n\n.dropdown {\n  position: absolute;\n  width: 60px;\n  right: 48px;\n  z-index: 999999;\n  background: #EEEEEE;\n  top: 0px;\n  padding: 12px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  display: none;\n}\n\n.dropdown .tools-btn {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-button:hover .mat-button-focus-overlay, .mat-stroked-button:hover .mat-button-focus-overlay {\n  opacity: 0;\n}\n\n.mat-standard-chip {\n  padding: 0px 12px 0;\n}\n\n.m-review-details .m-tag-label.m-w-50.m-left.m-pt-18 {\n  margin-top: 6px;\n}\n\n.mat-standard-chip.mat-chip-with-trailing-icon {\n  padding-right: 28px !important;\n  margin-right: 10px;\n}\n\n.mat-standard-chip .mat-chip-remove.mat-icon {\n  position: absolute;\n  top: -2px;\n  right: 27px;\n}\n\n.mat-tab-body-content {\n  height: auto !important;\n}\n\n.hover-onqa {\n  width: 183px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.hover-onqa.aa {\n  overflow: visible;\n}\n\n.hover-toolpikar {\n  visibility: hidden;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  right: -240px;\n  width: 240px;\n}\n\n.m-books-links {\n  position: relative;\n}\n\n.hover-onqa:hover .hover-toolpikar {\n  visibility: visible;\n}\n\nmat-dialog-actions.footer-box.mat-dialog-actions.ng-star-inserted.yesnoqa {\n  position: static;\n  bottom: 23px;\n  border-bottom: 1px solid #E1E1E1;\n  border-top: 1px solid #E1E1E1;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 26px;\n  box-sizing: border-box;\n  max-width: 80vw;\n}\n\nmat-dialog-actions.footer-box.mat-dialog-actions.ng-star-inserted.yesnoqa button {\n  background-color: inherit !important;\n  color: #A41F5E !important;\n  font-size: 14px;\n  min-width: 59px;\n  line-height: 25px;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n  margin-left: 24px;\n}\n\nmat-dialog-actions.footer-box.mat-dialog-actions.ng-star-inserted.yesnoqa h4 {\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n\n.jagqa img {\n  transform: translate(-2px, -2px);\n}\n\n.mat-tab-label {\n  padding: 0 !important;\n}\n\n.mat-tab-label {\n  justify-content: end !important;\n  margin-left: 8px;\n}\n\nmat-ink-bar.mat-ink-bar {\n  left: 6px;\n  width: 123px !important;\n}\n\n.hover-toolpikar.pp {\n  right: 0;\n  width: 240px;\n  bottom: -32px;\n}\n\na.ng-star-inserted {\n  display: block;\n}\n\nspan.in {\n  position: relative;\n  margin-right: 21px;\n}\n\nspan#folderList mat-icon.mat-icon.notranslate.mat-icon-no-color {\n  position: absolute;\n  left: 21px;\n  top: 8px;\n}\n\nspan.in {\n  position: relative;\n  margin-right: 21px;\n}\n\n@media only screen and (max-width: 992px) {\n  p.paragraph {\n    height: 316px;\n    overflow-y: scroll;\n  }\n\n  .footer-box {\n    bottom: 45px;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .mat-standard-chip .mat-chip-remove.mat-icon {\n    top: 3px;\n    right: 7px;\n  }\n\n  .m-review-content {\n    width: 100%;\n  }\n\n  .m-review-details {\n    width: 100%;\n    order: -1;\n  }\n\n  .book-details {\n    padding-right: 0;\n  }\n\n  .main-body.ng-star-inserted {\n    width: 100%;\n  }\n\n  .search-bar {\n    height: auto;\n    padding-bottom: 12px;\n    overflow: hidden;\n  }\n\n  .review-container.ng-untouched.ng-pristine.ng-invalid {\n    padding-bottom: 40px;\n  }\n\n  .search-bar {\n    padding-left: 24px;\n  }\n\n  .search-box > input {\n    padding-left: 25px;\n  }\n\n  .search-box > .material-icons.search {\n    top: 15px;\n    left: 3px;\n  }\n\n  .search-box {\n    width: 46%;\n  }\n\n  .order-tool {\n    margin-right: 11px;\n  }\n\n  .main-body.ng-star-inserted .review-container {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .mat-chip-list-wrapper {\n    width: 100%;\n  }\n\n  .mat-standard-chip {\n    font-size: 12px;\n  }\n\n  .m-pt-55 {\n    padding-top: 15px;\n  }\n\n  .mt-28.ml-40.flex {\n    display: flex;\n    width: 100%;\n  }\n\n  .mt-28.ml-40.flex .m-w60-inline-block.left {\n    display: flex;\n  }\n\n  .mt-28.ml-40.flex .m-w60-inline-block.left span {\n    margin: 10px 15px 0 5px;\n  }\n\n  .review-section {\n    text-align: left !important;\n  }\n\n  .m-books-links {\n    margin-left: 13px;\n  }\n\n  .mat-icon {\n    height: 18px;\n    transform: translate(0, 5px);\n  }\n\n  .m-books-links {\n    font-weight: normal;\n  }\n\n  .btn-tag {\n    font-size: 12px;\n  }\n\n  .m-w40-inline-block {\n    width: 69%;\n  }\n\n  .submited-heading {\n    margin-left: 30px;\n  }\n\n  .btn-avatar {\n    line-height: 20px;\n    transform: translate(-19px, 0);\n  }\n\n  .submited-heading > h5 {\n    font-size: 12px;\n  }\n\n  .review-text {\n    width: 100%;\n  }\n\n  .btn-tag {\n    padding-top: 0px;\n    padding-left: 10px;\n    padding-right: 25px;\n    padding-bottom: 0;\n  }\n\n  .main-body.ng-star-inserted .review-container {\n    padding-bottom: 50px;\n  }\n\n  .mat-form-field-flex {\n    width: 80%;\n  }\n\n  .mat-select-trigger > .mat-select-arrow-wrapper {\n    padding-bottom: 0px;\n  }\n\n  .recommendation-spacing {\n    box-sizing: border-box;\n  }\n\n  .field_tags {\n    width: 100% !important;\n    min-width: inherit;\n    box-sizing: border-box;\n    margin: 0 0 5px;\n  }\n\n  span#folderList mat-icon.mat-icon.notranslate.mat-icon-no-color {\n    left: 22px;\n    top: 3px;\n  }\n}\n\n@media only screen and (max-width: 639px) {\n  .mat-cell, .mat-footer-cell {\n    font-size: 12px;\n  }\n\n  .recommendation-label {\n    font-size: 13px;\n  }\n\n  .mat-table > thead tr th:nth-child(3) {\n    display: none;\n  }\n\n  table.mat-table tr td:nth-child(3) {\n    display: none;\n  }\n\n  .mat-table > thead tr th:nth-child(1) {\n    display: none;\n  }\n\n  .mat-table > thead tr th:nth-child(6) {\n    display: none;\n  }\n\n  table.mat-table tr td:nth-child(1) {\n    display: none;\n  }\n\n  table.mat-table tr td:nth-child(6) {\n    display: none;\n  }\n\n  .mat-table > thead tr th:nth-child(2) {\n    padding-left: 16px;\n    border-right: 1px solid #E1E1E1;\n  }\n\n  table.mat-table tr td:nth-child(2) {\n    padding-left: 16px;\n    border-right: 1px solid #E1E1E1;\n    padding-right: 16px;\n  }\n\n  .mat-column-title {\n    width: 75%;\n  }\n\n  .search-tools {\n    width: 130px;\n  }\n\n  .tools-btn img {\n    display: none;\n  }\n\n  .tools-btn img.dote {\n    display: block;\n    transform: translate(7px, 0);\n  }\n\n  .dropdown {\n    display: block;\n  }\n\n  .open-dropdown {\n    display: flex;\n    justify-content: center;\n  }\n}\n\n@media only screen and (max-width: 520px) {\n  span#folderList mat-icon.mat-icon.notranslate.mat-icon-no-color {\n    position: static;\n    transform: translate(0px, 1px);\n  }\n}\n\n@media only screen and (max-width: 479px) {\n  td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n    padding: 0 5px;\n  }\n\n  h1.book-title.heading-1 {\n    font-size: 23px;\n  }\n\n  .m-header-container {\n    padding: 12px 0 0px 15px;\n  }\n\n  .recommendation-actions {\n    float: left;\n    margin-left: 20px;\n  }\n\n  .recommendation {\n    height: auto;\n  }\n\n  .recommendation-spacing {\n    margin-top: 108px !important;\n  }\n\n  .mat-paginator {\n    padding-bottom: 57px;\n  }\n\n  .m-book-title > h4 {\n    white-space: nowrap;\n    width: 150px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .tag-label {\n    margin-right: 20px;\n  }\n\n  .review-input-field {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2N1b25nL3dvcmtzcGFjZS91cHdvcmsvcXVpY2twYWQvc3JjL2FwcC9wYWdlcy9ib29rcy1tb2RhbC9ib29rcy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYm9va3MtbW9kYWwvYm9va3MtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNGRjs7QURLQTtFQUNFLDRCQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUVBLDJCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURPQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE1BO0VBQ0UsZUFBQTtBQ0hGOztBRE1BO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDSEY7O0FEUUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0xGOztBRFFBO0VBQ0UseUJBQUE7QUNMRjs7QURnQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ2JGOztBRGVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNaRjs7QURlQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1pGOztBRGVBO0VBQ0UsZ0JBQUE7QUNaRjs7QURlQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNaRjs7QURrQkE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ2ZGOztBRGtCQTtFQUNFLGlCQUFBO0FDZkY7O0FEb0JBO0VBQ0Usa0JBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsaUJBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FDakJGOztBRG9CQTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNqQkY7O0FEcUJBO0VBQ0UsZ0JBQUE7QUNsQkY7O0FEb0JBO0VBQ0UsNkJBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsZ0JBQUE7QUNqQkY7O0FEd0JBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3JCRjs7QUR1QkE7RUFDRSwyQkFBQTtBQ3BCRjs7QURnQ0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDN0JGOztBRCtCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDNUJGOztBRDJEQTtFQUNFLFdBQUE7QUN4REY7O0FEMERBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0FDdkRGOztBRHdFQTs7RUFFRSxvQ0FBQTtBQ3JFRjs7QUQwRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDdkVGOztBRDJFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDeEVGOztBRDRFQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDekVGOztBRDZFQTtFQUNFLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQzFFRjs7QURpR0E7RUFDRSxrQkFBQTtBQzlGRjs7QURvR0E7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNqR0Y7O0FEb0dBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNsR0Y7O0FEc0dBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ25HRjs7QURzR0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDbkdGOztBRHFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0FDbEdGOztBRG9HQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FDakdGOztBRG1HQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ2hHRjs7QURrR0E7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUMvRkY7O0FEaUdBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDOUZGOztBRGlHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQzlGRjs7QURnR0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUM3RkY7O0FEK0ZBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDNUZGOztBRDhGQTtFQUNFLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQzVGRjs7QUQ4RkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDM0ZGOztBRDhGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUMzRkY7O0FENkZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQzFGRjs7QUQ0RkE7RUFDRSxrQkFBQTtBQ3pGRjs7QUQ2RkE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQzFGRjs7QUQ0RkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtBQ3pGRjs7QUQyRkE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ3hGRjs7QUQyRkE7RUFDRSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ3hGRjs7QUQyRkE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDeEZGOztBRDBGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0FDdkZGOztBRHlGQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUN0RkY7O0FEd0ZBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNyRkY7O0FEdUZBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ3BGRjs7QURpSEE7RUFDRSxVQUFBO0FDOUdGOztBRHVIQTtFQUNFLFNBQUE7RUFDQSxxQkFBQTtFQUVBLFdBQUE7QUNySEY7O0FEd0hBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDckhGOztBRHlIQTtFQUNFLFNBQUE7RUFDQSxxQkFBQTtBQ3RIRjs7QUQ2SEE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQzFIRjs7QURnSUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDN0hGOztBRGdJQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUM3SEY7O0FEb0lBO0VBQ0UsdUJBQUE7QUNqSUY7O0FEbUlBO0VBQ0UsMkJBQUE7RUFDQSxvQkFBQTtBQ2hJRjs7QUQrSUE7RUFDRSxVQUFBO0FDNUlGOztBRCtJQTtFQUVFLG1CQUFBO0FDN0lGOztBRGdKQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUM3SUY7O0FEZ0pBO0VBQ0UsMkJBQUE7QUM3SUY7O0FEa0pBO0VBQ0Usa0JBQUE7QUMvSUY7O0FEa0pBO0VBQ0UscUJBQUE7QUMvSUY7O0FEK0pBO0VBQ0UsZ0JBQUE7QUM1SkY7O0FEbUtBO0VBQ0UsWUFBQTtBQ2hLRjs7QURvS0E7RUFDRSxXQUFBO0FDaktGOztBRG9LQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtBQ2xLRjs7QURvS0E7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNqS0Y7O0FEbUtBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ2hLRjs7QURvS0E7RUFFRSxnQkFBQTtFQUNBLFdBQUE7QUNsS0Y7O0FEcUtBO0VBQ0UsZ0JBQUE7QUNsS0Y7O0FEcUtBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDbEtGOztBRHFLQTtFQUNFLFlBQUE7QUNsS0Y7O0FEc0tBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtBQ25LSjs7QURxS0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0FDbEtGOztBRHFLQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDbEtGOztBRG9LQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDaktGOztBRG9LQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDaktKOztBRG1LQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDaEtGOztBRG1LQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBRUEsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDaktGOztBRG9LQTtFQUNFLGNBQUE7RUFFQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2xLRjs7QURxS0E7RUFDRSxlQUFBO0VBRUEsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNuS0Y7O0FEdUtBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ3BLRjs7QUR1S0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNwS0Y7O0FEc0tBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNuS0Y7O0FEc0tBO0VBQ0UsZUFBQTtBQ25LRjs7QURzS0E7RUFDRSxtQkFBQTtBQ25LRjs7QUR1S0E7RUFDRSxTQUFBO0FDcEtGOztBRHNLQTtFQUNFLFVBQUE7QUNuS0Y7O0FEcUtBO0VBQ0UsVUFBQTtFQUNBLCtCQUFBO0FDbEtGOztBRG9LQTtFQUNFLFVBQUE7QUNqS0Y7O0FEbUtBO0VBQ0UsVUFBQTtBQ2hLRjs7QURrS0E7RUFDRSxVQUFBO0FDL0pGOztBRGtLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDL0pGOztBRGtLQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUMvSkY7O0FEaUtBO0VBRUUsNkJBQUE7QUMvSkY7O0FEbUtBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7QUNoS0Y7O0FEbUtBO0VBQ0UsaUJBQUE7QUNoS0Y7O0FEbUtBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDaEtGOztBRG1LQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNoS0Y7O0FEbUtBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNoS0Y7O0FEa0tBO0VBQ0UsZ0NBQUE7QUMvSkY7O0FEa0tBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUMvSkY7O0FEaUtBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUM5SkY7O0FEaUtBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7QUM5SkY7O0FEa0tBO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDL0pGOztBRG1LQTtFQUNFLFNBQUE7RUFDQSxxQkFBQTtFQUVBLFdBQUE7QUNqS0Y7O0FEb0tBO0VBRUUsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ2xLRjs7QURzS0E7RUFDRSxpQkFBQTtBQ25LRjs7QUR3S0E7RUFDRSxVQUFBO0VBR0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDdktGOztBRDJLQTtFQUVFLFVBQUE7QUN6S0Y7O0FENktBO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQzFLRjs7QUQ4S0E7RUFDSSxrQ0FBQTtFQUNBLG1EQUFBO0FDM0tKOztBRDhLQTtFQUNFLG9CQUFBO0FDM0tGOztBRCtLQTtFQUNFLG9DQUFBO0FDNUtGOztBRG1MQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNoTEY7O0FEa0xBO0VBQ0UsbUJBQUE7QUMvS0Y7O0FEaUxBO0VBQ0UsVUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDOUtGOztBRGdMQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQzdLRjs7QUQrS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQzVLRjs7QUQ4S0E7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUMzS0Y7O0FEOEtBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtBQzNLRjs7QUQrS0E7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQzVLRjs7QURnTEE7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUM3S0Y7O0FEZ0xBO0VBQ0EsaUJBQUE7QUM3S0E7O0FEK0tBO0VBQ0UsMkJBQUE7QUM1S0Y7O0FEK0tBO0VBQ0EsaUJBQUE7QUM1S0E7O0FEK0tBO0VBQ0UsYUFBQTtBQzVLRjs7QUQrS0E7RUFDRSxnQkFBQTtBQzVLRjs7QUQrS0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQzVLRjs7QUQrS0E7RUFDRSxVQUFBO0VBQ0EscUJBQUE7QUM1S0Y7O0FEK0tBO0VBQ0UsV0FBQTtBQzVLRjs7QUQrS0E7RUFDRSxpQkFBQTtBQzVLRjs7QUQrS0E7RUFDRSxjQUFBO0FDNUtGOztBRCtLQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDNUtGOztBRCtLQTtFQUNFLFlBQUE7QUM1S0Y7O0FEK0tBO0VBQ0UsUUFBQTtBQzVLRjs7QUQrS0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDNUtGOztBRCtLQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQzVLRjs7QURxTEE7RUFBa0QsZ0JBQUE7RUFDaEQsY0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtBQzFLRjs7QURxTEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0FDNUtGOztBRHlLQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7QUM1S0Y7O0FEeUtBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtBQzVLRjs7QUQ4S0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDM0tGOztBRDZLQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUMxS0Y7O0FENEtBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUN6S0Y7O0FEMktBO0VBQ0UsZ0JBQUE7QUN4S0Y7O0FEMEtBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUN2S0Y7O0FEMktBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ3hLRjs7QURtTEE7RUFDQSxvQ0FBQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDaExKOztBRDhMQTtFQUNFLGFBQUE7QUMzTEY7O0FEOExBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDM0xGOztBRDZMQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFFQSwyQkFBQTtBQzFMRjs7QUQ2TEE7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0FDMUxGOztBRDRMQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7QUN6TEY7O0FEMkxBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQ0FBQTtBQ3hMRjs7QUQwTEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7QUN2TEY7O0FEK01BO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUM1TUY7O0FEOE1BO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUMzTUY7O0FENk1BO0VBQ0Usb0NBQUE7QUMxTUY7O0FENk1BO0VBQ0Usb0NBQUE7QUMxTUY7O0FENk1BO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBQzFNRjs7QURpTkE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNJLGVBQUE7RUFDRixpQkFBQTtBQzlNSjs7QURpTkE7RUFDQSxvQ0FBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDOU1KOztBRGlOQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QUM5TUY7O0FEZ05BO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBQzdNRjs7QURnTkE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0FDN01GOztBRG9OQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ2pORjs7QURxTkE7RUFDRSw2QkFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNsTko7O0FEcU5BO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNsTkY7O0FEcU5BO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBRUEsZUFBQTtFQUNBLGlCQUFBO0FDbk5GOztBRHNOQTtFQUNFLDZCQUFBO0FDbk5GOztBRHFOQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ2xOSjs7QURzTkE7RUFDQSxXQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ25OSjs7QURzTkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ25ORjs7QUR1TkE7RUFDRSxtQkFBQTtBQ3BORjs7QUR1TkE7RUFDRSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNwTkY7O0FEc05BO0VBQ0UsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FDbk5GOztBRHFOQTtFQUNFLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQ2xORjs7QURpT0E7RUFRRTtJQUNFLFVBQUE7RUNyT0Y7O0VEdU9BO0lBQ0UsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtFQ3BPRjtBQUNGOztBRDJPQTtFQUNJLHdCQUFBO0FDek9KOztBRDRPSTtFQUNJLHlCQUFBO0VBQ0osZ0JBQUE7QUN6T0o7O0FENE9BO0VBQ0ksV0FBQTtBQ3pPSjs7QUQyT0E7RUFDSSxXQUFBO0FDeE9KOztBRDBPQTtFQUNJLG9CQUFBO0FDdk9KOztBRHlPQTtFQUNJLFdBQUE7QUN0T0o7O0FEd09BO0VBQ0ksV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FDck9KOztBRHVPQTtFQUNJLGtCQUFBO0FDcE9KOztBRHVPQTtFQUNJLDhCQUFBO0FDcE9KOztBRHNPQTtFQUNJLGNBQUE7QUNuT0o7O0FEcU9BO0VBQ0ksbUJBQUE7QUNsT0o7O0FEcU9BO0VBQ0ksY0FBQTtBQ2xPSjs7QURvT0E7RUFDSSxpQkFBQTtBQ2pPSjs7QURtT0E7RUFDSSx5QkFBQTtBQ2hPSjs7QURrT0E7RUFDSSxrQkFBQTtBQy9OSjs7QURpT0E7RUFDQSxXQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDOU5KOztBRGlPQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHdCQUFBO0VBQ0ksb0JBQUE7RUFDQSxvQkFBQTtBQzlOUjs7QURpT0E7RUFDSSxXQUFBO0VBQ0osYUFBQTtBQzlOQTs7QURnT0E7RUFDSSxXQUFBO0VBQ0osYUFBQTtBQzdOQTs7QUQrTkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUM1Tko7O0FEOE5BO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUMzTko7O0FENk5BO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUMxTko7O0FENE5BO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ3pOSjs7QUQ0TkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDSSxVQUFBO0FDek5SOztBRDJOQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ3hORjs7QUQwTkE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUN2TkY7O0FEeU5BO0VBQ0EsOEJBQUE7QUN0TkE7O0FEME5BO0VBQ0ksV0FBQTtFQUNJLFVBQUE7QUN2TlI7O0FEeU5BO0VBQ0ksYUFBQTtBQ3ROSjs7QUR3TkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNyTko7O0FEd05BO0VBQ0ksY0FBQTtBQ3JOSjs7QUR3TkE7RUFDSSxhQUFBO0FDck5KOztBRHVOQTtFQUNJLGFBQUE7QUNwTko7O0FEc05BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ25OSjs7QURzTkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNuTko7O0FEcU5BO0VBQ0ksVUFBQTtBQ2xOSjs7QURvTkE7RUFDSSxtQkFBQTtBQ2pOSjs7QURtTkE7RUFDSSxlQUFBO0FDaE5KOztBRGtOQTtFQUNJLDhCQUFBO0VBQ0ksa0JBQUE7QUMvTVI7O0FEaU5BO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQzlNSjs7QURnTkE7RUFDTyx1QkFBQTtBQzdNUDs7QUQrTUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDNU1KOztBRDhNQTtFQUNNLGlCQUFBO0FDM01OOztBRDZNQTtFQUNBLGtCQUFBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQzFNSjs7QUQ0TUE7RUFDSSxrQkFBQTtBQ3pNSjs7QUQ0TUE7RUFDRyxtQkFBQTtBQ3pNSDs7QUQyTUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ3hNSjs7QUQwTUE7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3ZNSjs7QUQwTUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUN2TUo7O0FEeU1BO0VBQ0ksZ0NBQUE7QUN0TUo7O0FEeU1BO0VBQ0kscUJBQUE7QUN0TUo7O0FEd01BO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtBQ3JNSjs7QUR1TUE7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7QUNwTUo7O0FEc01BO0VBQ0ksUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDbk1KOztBRHFNQTtFQUNJLGNBQUE7QUNsTUo7O0FEcU1BO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ2xNSjs7QURvTUE7RUFDQyxrQkFBQTtFQUNHLFVBQUE7RUFDQSxRQUFBO0FDak1KOztBRG1NQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNoTUo7O0FEME1BO0VBQ0E7SUFDSSxhQUFBO0lBQ0Esa0JBQUE7RUN2TUY7O0VEeU1GO0lBQ0ksWUFBQTtFQ3RNRjtBQUNGOztBRDBNQTtFQUNBO0lBQ0ksUUFBQTtJQUNBLFVBQUE7RUN4TUY7O0VEME1GO0lBQ0ksV0FBQTtFQ3ZNRjs7RUR5TUY7SUFDSSxXQUFBO0lBQ0EsU0FBQTtFQ3RNRjs7RUR3TUY7SUFDSSxnQkFBQTtFQ3JNRjs7RUR1TUY7SUFDSSxXQUFBO0VDcE1GOztFRHNNRjtJQUNJLFlBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0VDbk1GOztFRHFNRjtJQUNJLG9CQUFBO0VDbE1GOztFRG9NRjtJQUNRLGtCQUFBO0VDak1OOztFRG1NRjtJQUNJLGtCQUFBO0VDaE1GOztFRGtNRjtJQUNPLFNBQUE7SUFDSCxTQUFBO0VDL0xGOztFRGlNRjtJQUNJLFVBQUE7RUM5TEY7O0VEZ01GO0lBQ0ksa0JBQUE7RUM3TEY7O0VEK0xGO0lBQ0UsYUFBQTtJQUNFLHNCQUFBO0VDNUxGOztFRDhMRjtJQUNJLFdBQUE7RUMzTEY7O0VENkxGO0lBQ0ksZUFBQTtFQzFMRjs7RUQ0TEY7SUFDSSxpQkFBQTtFQ3pMRjs7RUQyTEY7SUFDSSxhQUFBO0lBQ0EsV0FBQTtFQ3hMRjs7RUQwTEY7SUFDSSxhQUFBO0VDdkxGOztFRHlMRjtJQUNJLHVCQUFBO0VDdExGOztFRHdMRjtJQUNJLDJCQUFBO0VDckxGOztFRHVMRjtJQUNJLGlCQUFBO0VDcExGOztFRHNMRjtJQUNJLFlBQUE7SUFDQSw0QkFBQTtFQ25MRjs7RURxTEY7SUFDSSxtQkFBQTtFQ2xMRjs7RURvTEY7SUFDSSxlQUFBO0VDakxGOztFRG1MRjtJQUNJLFVBQUE7RUNoTEY7O0VEa0xGO0lBQ0ksaUJBQUE7RUMvS0Y7O0VEaUxGO0lBQ0ksaUJBQUE7SUFDQSw4QkFBQTtFQzlLRjs7RURnTEY7SUFDSSxlQUFBO0VDN0tGOztFRCtLRjtJQUNJLFdBQUE7RUM1S0Y7O0VEOEtGO0lBQ0ksZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUMzS0Y7O0VENktGO0lBQ0ksb0JBQUE7RUMxS0Y7O0VENEtGO0lBQ0ksVUFBQTtFQ3pLRjs7RUQyS0Y7SUFDSSxtQkFBQTtFQ3hLRjs7RUQwS0Y7SUFDSSxzQkFBQTtFQ3ZLRjs7RUR5S0Y7SUFDSSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0ksc0JBQUE7SUFDSixlQUFBO0VDdEtGOztFRHdLRjtJQUNJLFVBQUE7SUFDQSxRQUFBO0VDcktGO0FBQ0Y7O0FEZ0xBO0VBRUE7SUFDSSxlQUFBO0VDL0tGOztFRGlMRjtJQUNJLGVBQUE7RUM5S0Y7O0VEZ0xGO0lBQ0ksYUFBQTtFQzdLRjs7RUQrS0Y7SUFDSSxhQUFBO0VDNUtGOztFRGlMRjtJQUNJLGFBQUE7RUM5S0Y7O0VEaUxGO0lBQ0ksYUFBQTtFQzlLRjs7RURnTEY7SUFDSSxhQUFBO0VDN0tGOztFRCtLRjtJQUNJLGFBQUE7RUM1S0Y7O0VEZ0xGO0lBQ0ksa0JBQUE7SUFDSSwrQkFBQTtFQzdLTjs7RUQrS0Y7SUFDSSxrQkFBQTtJQUNJLCtCQUFBO0lBQ0ksbUJBQUE7RUM1S1Y7O0VEOEtGO0lBQ0ksVUFBQTtFQzNLRjs7RUQ2S0Y7SUFDSSxZQUFBO0VDMUtGOztFRDRLRjtJQUNJLGFBQUE7RUN6S0Y7O0VEMktGO0lBQ0ksY0FBQTtJQUNBLDRCQUFBO0VDeEtGOztFRDJLRjtJQUNJLGNBQUE7RUN4S0Y7O0VEMEtGO0lBQ1EsYUFBQTtJQUNKLHVCQUFBO0VDdktGO0FBQ0Y7O0FENktBO0VBQ0E7SUFDSSxnQkFBQTtJQUNBLDhCQUFBO0VDM0tGO0FBQ0Y7O0FEb0xBO0VBQ0E7SUFDSSxjQUFBO0VDbExGOztFRG9MRjtJQUNJLGVBQUE7RUNqTEY7O0VEbUxGO0lBQ0ksd0JBQUE7RUNoTEY7O0VEa0xGO0lBQ0ksV0FBQTtJQUNBLGlCQUFBO0VDL0tGOztFRGlMRjtJQUNJLFlBQUE7RUM5S0Y7O0VEZ0xGO0lBQ0ksNEJBQUE7RUM3S0Y7O0VEK0tGO0lBQ0ksb0JBQUE7RUM1S0Y7O0VEOEtGO0lBQ0ksbUJBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtFQzNLRjs7RUQ2S0Y7SUFDSSxrQkFBQTtFQzFLRjs7RUQ2S0Y7SUFDSSxXQUFBO0VDMUtGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ib29rcy1tb2RhbC9ib29rcy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICoqKioqTUlBTiBIRUFESU5HKioqKipcblxuLm0tbWFpbi1oZWFkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAyOXB4O1xuICAvLyB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogNDRweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMi4yO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzI5MjcyZDtcbn1cblxuLm1hdC10YWItbGFiZWwtYWN0aXZlIC5tLXRhYi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4ubS1mb3JtIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm0taGVhZGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTVweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICBwYWRkaW5nOiAxMHB4IDBweCAzcHggMjFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLm0taW5wdXQtd3JhcHBlciB7XG4gIHdpZHRoOiA2MCU7XG4gIGZsb2F0OiBsZWZ0O1xuXG4gIHNjcm9sbC1wYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cblxuXG4ubS1pbnB1dC1tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tLXNlYXJjaCB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLm0tc2VhcmNoLWlucHV0cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZGJhYmE7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuXG4ubS1tb2RhbC10b29scyB7XG4gIHdpZHRoOiA0MCU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm0tZ3JleSB7XG4gIGNvbG9yOiAjNzQ3NDc0ICFpbXBvcnRhbnQ7XG59XG5cbi8vIC5tLW9yZGVyLWJ0bi10ZXh0IHtcbi8vICAgbWFyZ2luLXRvcDogLTEycHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuLy8gICBmb250LXNpemU6IDEycHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuXG4ubS1ib29rLWljb24ge1xuICB3aWR0aDogMjZweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4ubS10YWJsZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2IoNDEsIDM5LCA0NSk7XG59XG4ubS1jb21tZW50cy1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbn1cblxuLm0tbG9hZC1idG4ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMTY0LCAzMSwgOTQsIDEpO1xuICB3aWR0aDogNTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjQsIDMxLCA5NCwgMSk7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBtYXJnaW4tbGVmdDogMjNweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ubS1tbC01IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLm0tY2FuY2VsLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA4NHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBjb2xvcjogcmdiYSgxNjQsIDMxLCA5NCwgMSk7XG4gIGhlaWdodDogMzBweDtcbn1cblxuXG5cblxuLm0tcmV2aWV3LWNvbnRlbnQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLm0tbWwtNDAge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuXG5cbi5tLWl0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm0tYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubS13LTEwIHtcbiAgd2lkdGg6IDEwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubS10YWctbGFiZWwge1xuICBmb250LWZhbWlseTogXCJPcGVuU2Fucy1SZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICM5YTljOWY7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cblxuXG4ubS1tbC01IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5tLXBsLTI0IHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tLW10LTI4IHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cblxuXG5cblxuXG4ubS1ib29rcy1saW5rcyB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJnYmEoMCwgMTQ1LCAyMzQsIDEpO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubS1yZXZpZXctZGV0YWlscyA+IGRpdiA+IC5tLWJvb2tzLWxpbmtze1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuXG5cblxuXG5cblxuXG5cbi5tLWJvb2tzLWxpbmtzIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgwLCAxNDUsIDIzNCwgMSk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tLWhlYWRpbmctMSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTZweDtcbiAgY29sb3I6ICMyOTI3MmQ7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuLy8gLm1haW4taGVhZGluZyB7XG5cbi8vIHBhZGRpbmctbGVmdDogMjNweDtcbi8vIC8vIHdpZHRoOiAxMjhweDtcbi8vIGhlaWdodDogNDRweDtcbi8vIGZvbnQtc2l6ZTogMjBweDtcbi8vIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbi8vIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vIGxpbmUtaGVpZ2h0OiAyLjI7XG4vLyBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuLy8gY29sb3I6ICMyOTI3MmQ7XG4vLyB9XG5cblxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyLFxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhOTJjICFpbXBvcnRhbnQ7XG59XG5cblxuXG4ubW9kYWwtdG9vbHMgaW1nIHtcbiAgd2lkdGg6IDEuMjVyZW07XG4gIGhlaWdodDogMS4yNXJlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAwLjhyZW07XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cblxuXG4uaW5wdXQtd3JhcHBlcnMge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgc2Nyb2xsLXBhZGRpbmctdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMzBweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcblxufVxuXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIC8vIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53aW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3N2Zy93aW4uc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAzOHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5cbi8vIC50YWItdGl0bGUge1xuLy8gd2lkdGg6IDEyNnB4O1xuLy8gaGVpZ2h0OiAyOHB4O1xuLy8gZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuLy8gZm9udC1zaXplOiAxNHB4O1xuLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbi8vIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vIGxpbmUtaGVpZ2h0OiAyO1xuLy8gbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbi8vIGNvbG9yOiAjMjkyNzJkO1xuLy8gfVxuXG5cblxuXG5cblxuXG4ubWF0LXRhYi1sYWJlbC1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cblxuXG5cbi5jZW50ZXIge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucmVhZGNlbnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcblxuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiByZ2JhKDI2LCAxNSwgMywgMC44KTtcbn1cblxuXG4ubGFzdCB7XG4gIHdpZHRoOiA5N3B4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2RmYmQ7XG59XG5cbi5yZWFkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZGZiZDtcbn1cbi5SRUFEIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZjZDA5YztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuLmxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiByZ2JhKDI2LCAxNSwgMywgMC44KTtcbn1cbi5sYWJlbGEge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA3M3B4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6IHJnYmEoMjYsIDE1LCAzLCAwLjgpO1xufVxuLmxhYmVsYiB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDY5cHg7XG4gIGhlaWdodDogMTZweDtcbiAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogcmdiYSgyNiwgMTUsIDMsIDAuOCk7XG59XG4ubGFiZWxjIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiByZ2JhKDI2LCAxNSwgMywgMC44KTtcbn1cblxuLkNoaXBzLUlucHV0LVRleHQtb25seS1FbmFibGVkIHtcbiAgd2lkdGg6IDk3cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZGZiZDtcbn1cbi5wcm9wZXJ0eSB7XG4gIHdpZHRoOiAxNTlweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMDA5MWVhO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5vbmUge1xuICB3aWR0aDogMTQ5cHg7XG4gIGhlaWdodDogMTJweDtcbiAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyLjMzO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzlhOWM5ZjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ucnRhYiB7XG4gIG1pbi1oZWlnaHQ6IDU1cHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAwcHggM3B4IDIxcHg7XG4gIC8vIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi50YWJ0ZXh0IHtcbiAgd2lkdGg6IDU3OXB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS43MTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOXB4O1xuICBjb2xvcjogIzI5MjcyZDtcbiAgLy8gbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ueWVzIHtcbiAgd2lkdGg6IDI3cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS43MTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOXB4O1xuICBjb2xvcjogI2E0MWY1ZTtcbn1cbi5ubyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gIGxldHRlci1zcGFjaW5nOiAwLjlweDtcbiAgY29sb3I6ICNhNDFmNWU7XG59XG4ubGluayB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuXG4uc3VibWl0ZWQtaGVhZGluZyB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ucmVhZC1idG4ge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmNkMDljO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG4udGV4dENlbnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogcmdiYSgyNiwgMTUsIDMsIDAuOCk7XG59XG5cbi50YWJSZWFkIHtcbiAgd2lkdGg6IDklO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi50YWJFYXN5VG9SZWFkIHtcbiAgd2lkdGg6IDE0JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogcHg7XG59XG4ucmVhZC1idG4ge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmNkMDljO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG4udGFiUGFnZVR1cm5lciB7XG4gIHdpZHRoOiAxNCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IHB4O1xufVxuLnRhYkV4Y2l0aW5nIHtcbiAgd2lkdGg6IDE1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLmV4Y2l0aW5nLWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDg1cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyLXJhZGl1czogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2RmYmQ7XG59XG5cblxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLnJldmlldy1idG4ge1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgdG9wOiA1MCU7XG4vLyAgIGxlZnQ6IDUwJTtcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fucztcbi8vICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICBmb250LXdlaWdodDogNjAwO1xuLy8gICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbi8vICAgZm9udC1zdHlsZTogbm9ybWFsO1xuLy8gICBsaW5lLWhlaWdodDogMjtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbi8vICAgY29sb3I6IHJnYmEoMjYsIDE1LCAzLCAwLjgpO1xuLy8gfVxuXG5cblxuXG5cblxuLnctNzUge1xuICB3aWR0aDogNzUlO1xufVxuXG5cblxuXG5cblxuXG4uY2lyY2xlLWxvZ28ge1xuICB3aWR0aDogOCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy8gbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucmF0aW5nLXNlY3Rpb24ge1xuICB3aWR0aDogMTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5cbi53LTUge1xuICB3aWR0aDogNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuXG5cblxuXG4ubW9yZS1ib29rcyB7XG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuXG5cblxuLnctMTUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNSU7XG4gIGNvbG9yOiByZ2JhKDAsIDE0NSwgMjM0LCAxKTtcbn1cblxuLnctMjAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMCU7XG4gIGNvbG9yOiByZ2JhKDAsIDE0NSwgMjM0LCAxKTtcbn1cblxuXG5cblxuXG4uaW5wdXQtd3JhcHBlcnMgLm1hdC1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5pbnB1dC13cmFwcGVycyAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5cblxuXG5cblxuXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC8vIGJhY2tncm91bmQ6ICNFRUVFRUU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xufVxuXG4ubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cblxuXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4uYXQtZGlhbG9nLWFjdGlvbnMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQ7XG59XG5cblxuXG5cbi8vIEZhcmhhbiBDb2RlXG4ubmctc3Rhci1pbnNlcnRlZHtcbiAgLy8gcGFkZGluZy1sZWZ0OiA3cHg7XG4gIC8vIG92ZXJmbG93LXk6IGF1dG87XG4gIC8vIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgLy8gaGVpZ2h0OiA4MCU7XG4gIC8vIGhlaWdodDogNDh2aDtcbn1cblxuXG4uY2RrLW92ZXJsYXktcGFuZXtcbiAgbWF4LWhlaWdodDogOTB2aDtcbn1cblxuLy8gLm1haW4tYm9keXtcbi8vICAgaGVpZ2h0OiA2MiU7XG4vLyB9XG5cbm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnl7XG4gIGhlaWdodDogODB2aDtcbn1cblxuXG4ubS1tYWluLWhlYWRpbmd7XG4gIGhlaWdodDogNnZoO1xufVxuXG4ubWFpbi1tb2RhbC1jb250ZW50e1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy8gaGVpZ2h0OiA4NnZoO1xuICBtYXgtaGVpZ2h0OiA4NnZoO1xuICBtaW4td2lkdGg6IDgwdnc7XG59XG4ubS13NjAtaW5saW5lLWJsb2NrIHtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDExcHg7XG59XG4ubS13NDAtaW5saW5lLWJsb2NrIHtcbiAgd2lkdGg6IDQwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cblxuLm1haW4tYm9keS5uZy1zdGFyLWluc2VydGVke1xuICAvLyBtaW4taGVpZ2h0OiA2MDBweDtcbiAgbWluLWhlaWdodDogNTN2aDtcbiAgaGVpZ2h0OiA3NCU7XG4gIC8vIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cbi5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lcntcbiAgbWluLWhlaWdodDogNDJ2aDtcbn1cblxuLnNlYXJjaC1idG57XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubS1oZWFkZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG5cbi5mb290ZXItYm94IHtcbiAgICB6LWluZGV4OiAxMDAwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAvKiBtaW4taGVpZ2h0OiA1NHB4OyAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDUwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjViNWI1O1xuICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICBtYXgtd2lkdGg6IDc4LjV2dztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICByaWdodDogMDtcbn1cbi5zZWFyY2gtYmFye1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuXG4uc2VhcmNoLWJveHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiA1NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNSAyNSAyNSAvIDAuMzIpO1xuICBib3JkZXItcmFkaXVzOiA0cHggIDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uc2VhcmNoLWJveD5pbnB1dHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjOUE5QzlGO1xuICAvLyBiYWNrZ3JvdW5kOiByZWQ7XG59XG4uc2VhcmNoLWJveD4ubWF0ZXJpYWwtaWNvbnMuc2VhcmNoe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgbGVmdDogMTZweDtcbiAgICBjb2xvcjogIzc1NzU3NTtcbn1cbi5zZWFyY2gtYm94Pi5tYXRlcmlhbC1pY29ucy5kcm9wZG93bntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIxcHg7XG4gIGxlZnQ6IDU1JTtcbiAgY29sb3I6ICM3NTc1NzU7XG59XG5cbi5zZWFyY2gtdG9vbHN7XG4gIGhlaWdodDogNTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgd2lkdGg6IDM5JTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ub3JkZXItdG9vbHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDIwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDI2cHg7XG59XG5cbi5ncmlkLWJ0bntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMCU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG59XG5cbi5ncmlkLWJ0bj5pbWd7XG4gIGhlaWdodDogMjZweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ub3JkZXItYnRuLXRleHQge1xuICBtYXJnaW4tdG9wOiAtMTdweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTEycHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ub3JkZXItYnRue1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICM3NDc0NzQ7XG59XG5cbi5vcmRlci1idG4+Lm1hdGVyaWFsLWljb25ze1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5tYXQtdGFibGU+dGhlYWR7XG4gIGJhY2tncm91bmQ6I0ZBRkFGQTtcbn1cblxuXG4ubWF0LWNvbHVtbi1pY29ue1xuICB3aWR0aDogNSU7XG59XG4ubWF0LWNvbHVtbi10aXRsZXtcbiAgd2lkdGg6IDMwJTtcbn1cbi5tYXQtY29sdW1uLWF1dGhvcntcbiAgd2lkdGg6IDMwJTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UxRTFFMTtcbn1cbi5tYXQtY29sdW1uLXJldmlld3N7XG4gIHdpZHRoOiAxNSU7XG59XG4ubWF0LWNvbHVtbi12aWV3e1xuICB3aWR0aDogMTAlO1xufVxuLm1hdC1jb2x1bW4tc3RpY2tleXtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLm1hdC1kaWFsb2ctY29udGVudHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRhYmxlLWhlYWRpbmd7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjkyNzJEO1xufVxuLm1hdC1jb2x1bW4tcmV2aWV3c3tcblxuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuXG4uZXJyb3ItbWVzc2FnZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxM3B4O1xuICBmb250LWZhbWlseTogJ09wZW5TYW5zLVJlZ3VsYXInO1xufVxuXG4uYnRuLW1hcmdpbntcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi50b29scy1idG57XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5tLWJvb2stdGl0bGUge1xuICBtYXgtd2lkdGg6IDk0dmg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogOXB4O1xufVxuXG4ubS1ib29rLXRpdGxlID4gaDV7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMtUmVndWxhcic7XG59XG4ubS1ib29rLXRpdGxlID4gaDR7XG4gIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMtU2VtaUJvbGQnO1xufVxuXG4uc3VibWl0ZWQtaGVhZGluZyB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uc3VibWl0ZWQtaGVhZGluZz5oNHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucy1TZW1pQm9sZCc7XG4gIC8vIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMtUmVndWxhcic7XG59XG4uc3VibWl0ZWQtaGVhZGluZz5oNXtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBjb2xvcjogIzlBOUM5RjtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucy1SZWd1bGFyJztcbn1cblxuXG4ucmF0aW5nLXNlY3Rpb257XG4gIHdpZHRoOiAxMCU7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGZsb2F0OnJpZ2h0O1xufVxuXG5cbi5jaXJjbGUtbG9nbyB7XG4gIHdpZHRoOiA2JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvLyBtYXJnaW4tbGVmdDogMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5wYXJlbnQge1xuICAvLyBtYXJnaW4tbGVmdDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJiMzc2O1xufVxuXG5cbi5yZXZpZXctaGVhZGluZ3tcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG5cblxuXG4ucmV2aWV3LXRleHQge1xuICB3aWR0aDogODAlO1xuICAvLyBtYXJnaW4tbGVmdDogMjRweDtcbiAgLy8gbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBmb250LWZhbWlseTogJ09wZW5TYW5zLVJlZ3VsYXInO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcblxufVxuXG4ubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcblxuICBvcGFjaXR5OiAwO1xufVxuXG5cbi5pbnB1dC13cmFwcGVycyAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEycHg7XG5cbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgcGFkZGluZzogMnB4IDlweCAwIDEwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjUgMjUgMjUgLyAwLjMyKSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXNlbGVjdC10cmlnZ2VyPi5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpICFpbXBvcnRhbnQ7XG59XG5cbi8vIC5pbnB1dC13cmFwcGVycyAubWF0LXNlbGVjdC1hcnJvdyB7XG4vLyAgIG1hcmdpbi10b3A6IDE2cHggIWltcG9ydGFudDtcbi8vIH1cblxuLmZpZWxkX3RhZ3N7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAzMyUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLnNlbGVjdGVkLWNoaXBze1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnJldmlldy1pbnB1dC1maWVsZHtcbiAgd2lkdGg6IDk5JTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1IDI1IDI1IC8gMC4zMik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZy1yaWdodDogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnJldmlldy1pbnB1dC1maWVsZD5sZWdlbmR7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6ICNGNzk2MjQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5yZXZpZXctaW5wdXQtZmllbGQ+dGV4dGFyZWF7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6ICAnT3BlblNhbnMtUmVndWxhcicgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi53b3JkLWNvdW50e1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiByZ2IoMTU0IDE1NiAxNTkgLyAwLjgpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMtUmVndWxhcic7XG59XG5cbi5yZXZpZXctaW5wdXQtZmllbGQ+dGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzlBOUM5RjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogICdPcGVuU2Fucy1SZWd1bGFyJyAhaW1wb3J0YW50O1xuXG59XG5cbi5ib29rLWRldGFpbHN7XG4gIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMtUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmctdG9wOjEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICBwYWRkaW5nLXJpZ2h0OjQ4cHg7XG5cbn1cblxuLmgtYm9vay1kZXRhaWxze1xuICBmb250LWZhbWlseTogJ09wZW5TYW5zLVNlbWlCb2xkJztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzI5MjcyZDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi5tLXB0LTE5e1xucGFkZGluZy10b3A6IDE5cHg7XG59XG4uYm9vay1kZXRhaWwtYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubS1wdC01NXtcbnBhZGRpbmctdG9wOiA1NXB4O1xufVxuXG4ubS1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm0tbXQtMTZ7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5tLXJldmlldy1kZXRhaWxzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMzAlO1xufVxuXG4ubS13LTUwIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubS1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5tLXB0LTE4e1xuICBwYWRkaW5nLXRvcDogMThweDtcbn1cblxuLmNvbG9yLWJyb3due1xuICBjb2xvcjojZjBjNjk0O1xufVxuXG4ubS1yYXRpbmctY291bnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA0cHg7XG4gIGxlZnQ6IDhweDtcbiAgY29sb3I6ICM0ZDRkNGQ7XG59XG5cbi5tLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubS10LTl7XG4gIHRvcDogOXB4O1xufVxuXG4ubS1saW5lIHtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgbWFyZ2luLXRvcDogMzNweDtcbiAgd2lkdGg6IDkwJTtcbiAgY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1jb2xvcjogI2Q4ZDlkYTtcbiAgYmFja2dyb3VuZDogI2UxZTFlMTtcbn1cblxuLm0tZGF0YSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbn1cbi5yZXZpZXctaW5wdXQtZmllbGQ+dGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOiAjOUE5QzlGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiAgJ09wZW5TYW5zLVJlZ3VsYXInICFpbXBvcnRhbnQ7XG5cbn1cblxuLnJldmlldy1pbnB1dC1maWVsZD50ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7ICAvKiBGaXJlZm94IDE5KyAqL1xuICBjb2xvcjogIzlBOUM5RjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogICdPcGVuU2Fucy1SZWd1bGFyJyAhaW1wb3J0YW50O1xuXG59XG5cbi5yZXZpZXctaW5wdXQtZmllbGQ+dGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5QTlDOUY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6ICAnT3BlblNhbnMtUmVndWxhcicgIWltcG9ydGFudDtcblxufVxuXG4ucmV2aWV3LWlucHV0LWZpZWxkPnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOUE5QzlGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiAgJ09wZW5TYW5zLVJlZ3VsYXInICFpbXBvcnRhbnQ7XG59XG4ucmVjb21tZW5kYXRpb257XG4gIHotaW5kZXg6IDMwMDAwO1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucmVjb21tZW5kYXRpb24tbGFiZWx7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucy1TZW1pQm9sZCc7XG59XG4ucmVjb21tZW5kYXRpb24tYWN0aW9uc3tcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cbi5yZWNvbW1lbmRhdGlvbi1zcGFjaW5ne1xuICBtYXJnaW4tdG9wOiA3OHB4O1xufVxuLnJlY29tbWVuZGF0aW9uLXNlbGVjdGlvbntcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDM0cHg7XG5cbn1cblxuLnJldmlldy1jb250YWluZXJ7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG5cblxuXG5cblxuXG5cbi8vIFNBREFGIENPREVcblxuLmNsZWFye1xuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDhweDtcbiAgICB0b3A6IDdweDtcbn1cbi8vIC5oZWFkZXItY29udGFpbmVyIHtcbi8vICAgbWluLWhlaWdodDogNTVweDtcbi8vICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuLy8gICBwYWRkaW5nOiAxMHB4IDBweCAzcHggMjFweDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbi8vIH1cblxuLy8gQmVsb3cgY29kZSBpcyBpbXBvcnRhbnRcblxuLy8gQnV0dG9ucyBDU1MgQWNjb3JkaW5nIHRvIHRoZSBDbGllbnQncyBEZXNpZ25cbi5oaWRle1xuICBkaXNwbGF5OiBub25lIDtcbn1cblxuLnRhZy1jaGlwLWxpc3R7XG4gIGhlaWdodDogNDZweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG4udmVydGljYWwtY2VudGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi50YWctY2hpcC1saXN0ID4gLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cbi50YWctY2hpcC1saXN0ID4gLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgPiAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiA4cHg7XG4gIGJvcmRlcjogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW5TYW5zLVNlbWlCb2xkXCI7XG4gIGNvbG9yOiAjOUE5QzlGO1xufVxuLnRhZ3MtaW5wdXQtY3VzdG9te1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogJ09wZW5TYW5zLVNlbWlCb2xkJyAhaW1wb3J0YW50O1xufVxuLmlucHV0LWN1c3RvbXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucy1TZW1pQm9sZCcgIWltcG9ydGFudDtcbiAgY29sb3I6ICM5QTlDOUY7XG59XG5cblxuXG5cblxuXG5cbi8vIC5tLXRhZy1idG4ge1xuLy8gICBiYWNrZ3JvdW5kOiAjZmNkZmJkO1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjZmNkZmJkO1xuLy8gICBib3JkZXItcmFkaXVzOiAyM3B4O1xuLy8gICBwYWRkaW5nOiA2cHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMTRweDtcbi8vICAgY29sb3I6IHJnYmEoMjYsIDE1LCAzLCAwLjgpO1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG5cbi8vIC5tLXRhZy1idG4tc2VsZWN0ZWQge1xuLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vIH1cbi8vIENvbnRhaW5lZCBCdXR0b25zXG4ubXktYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xufVxuLmJ0bi1maWxsZWR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBNDFGNUUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmJ0bi1maWxsZWQ6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDQzI3NzUgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1maWxsZWQ6Zm9jdXN7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDQzI3NzUgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1maWxsZWQ6ZGlzYWJsZWR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBNDFGNUUgIWltcG9ydGFudDtcbiAgY29sb3I6IzcwMTU0MCAhaW1wb3J0YW50O1xufVxuXG5cblxuLy8gVGV4dCBidXR0b25zXG5cbi5idG4tdHh0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjQTQxRjVFICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1pbi13aWR0aDogNTlweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcblxufVxuLmJ0bi1maWxsZWQge1xuYmFja2dyb3VuZC1jb2xvcjogI0E0MUY1RSAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogNTlweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYnRuLXR4dDpkaXNhYmxlZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RDRENEQyAhaW1wb3J0YW50O1xuICBjb2xvcjojODg4ODg4ICFpbXBvcnRhbnQ7XG59XG4uYnRuLXR4dDpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRUFGRSAhaW1wb3J0YW50O1xuICBjb2xvcjogI0E0MUY1RSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXR4dDpmb2N1c3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBREFGRSAhaW1wb3J0YW50O1xuICBjb2xvcjogI0E0MUY1RSAhaW1wb3J0YW50O1xufVxuXG5cblxuXG4vLyBUYWcgYnV0dG9uXG4uYnRuLXRhZ3tcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZDRDA5QyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzFBMEYwMyAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtU2VtaUJvbGRcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBoZWlnaHQ6IDI4cHg7XG59XG5cblxuLmJ0bi1hdmF0YXJ7XG4gIHBhZGRpbmctbGVmdDogMjhweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIzcHg7XG59XG5cbi5idG4tdGV4dC1vbmx5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNERkJEO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMtU2VtaUJvbGQnO1xufVxuXG4ubS1tYXQtaWNvbnMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogI2YwYzY5NDtcbiAgLy8gbWFyZ2luLWxlZnQ6IC0yMnB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuXG4uY2RrLW92ZXJsYXktcGFuZS5teS1kaWFsb2cge1xuICBwb3NpdGlvbjogcmVsYXRpdmUhaW1wb3J0YW50O1xufVxuLmNsb3NlLm1hdC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cblxuLnRhZy1sYWJlbHtcbmZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzlBOUM5RjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbWluLXdpZHRoOiA2OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idG4tdGFnID4gLm0tbWF0LWljb25ze1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogI0ZDRDA5QztcbiAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuXG59XG5cbi5yZXZpZXctc2VjdGlvbntcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLm1hdC1jaGlwLWN1c3RvbXtcbiAgYmFja2dyb3VuZDogI0ZDREZCRCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNGQ0RGQkQgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxQTBGMDMgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucy1TZW1pQm9sZCc7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYXQtY2hpcC1jdXN0b206aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICNGRkQ2QTYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjojRkZENkE2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMUEwRjAzICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMtU2VtaUJvbGQnO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWF0LWNoaXAtY3VzdG9tOmhvdmVyOjphZnRlcntcbiAgYmFja2dyb3VuZDogI0ZGRDZBNiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkQ2QTYgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxQTBGMDMgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucy1TZW1pQm9sZCc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuXG5cblxuXG5cblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAvLyAuY2RrLW92ZXJsYXktcGFuZSB7XG4gIC8vICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgLy8gICB3aWR0aDogMTAwdnc7XG4gIC8vICAgaGVpZ2h0OiAxMDB2aDtcbiAgLy8gfVxuXG4gIC5tLW1haW4taGVhZGluZ3tcbiAgICBjb2xvcjogcmVkO1xuICB9XG4gIC5zZWFyY2gtdG9vbHM+LmdyaWQtYnRuPmltZ3tcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBmbG9hdDogcmlnaHQ7XG5cbiAgfVxufVxuXG5cblxuXG4ubS1oZWFkZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyOHB4IDAgMHB4IDI0cHg7XG59XG5cbiAgICBwLnBhcmFncmFwaCB7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMTVweCAwIDI0cHg7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbn1cblxuLm1hdC1wYWdpbmF0b3ItcmFuZ2UtbGFiZWwge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplLWxhYmVsIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cbi5tYWluLWJvZHkubmctc3Rhci1pbnNlcnRlZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG4udGFiLXRpdGxlLm5nLXN0YXItaW5zZXJ0ZWQge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuLnNlYXJjaC1ib3g6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA3cHggN3B4IDAgN3B4O1xuICAgIGJvcmRlci1jb2xvcjogIzc0NzQ3NCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDdweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBkaXNwbGF5Om5vbmU7XG59XG4uc2VhcmNoLWJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5hLm5nLXN0YXItaW5zZXJ0ZWQge1xuICAgIGNvbG9yOiAjMDA5MUVBO1xufVxuLm0tYm9va3MtbGlua3Mge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5idG4tdGFnIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbn1cbi5idG4tYXZhdGFyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbmZpZWxkc2V0LnJldmlldy1pbnB1dC1maWVsZC5maWVsZF90YWdzIHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuLnJldmlldy1pbnB1dC1maWVsZC5maWVsZF90YWdzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmV2aWV3LWlucHV0LWZpZWxkLmZpZWxkX3RhZ3M6YWZ0ZXIge1xuY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTRweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjNzQ3NDc0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogN3B4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG59XG4ucmV2aWV3LWlucHV0LWZpZWxkLmZpZWxkX3RhZ3M6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICM3NDc0NzQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNHB4O1xuICAgIHRvcDogNDglO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG59XG5maWVsZHNldC5yZXZpZXctaW5wdXQtZmllbGQuZmllbGRfdGFncy5sYXN0LWlucHV0OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbmRpc3BsYXk6bm9uZTtcbn1cbmZpZWxkc2V0LnJldmlldy1pbnB1dC1maWVsZC5maWVsZF90YWdzLmxhc3QtaW5wdXQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG5kaXNwbGF5Om5vbmU7XG59XG5maWVsZHNldC5yZXZpZXctaW5wdXQtZmllbGQuZmllbGRfdGFncy5sYXN0LWlucHV0IGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAycHg7XG4gICAgdG9wOiAxNXB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnJldmlldy1pbnB1dC1maWVsZC5maWVsZF90YWdzOm50aC1jaGlsZCg3KTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTpub25lO1xufVxuLnJldmlldy1pbnB1dC1maWVsZC5maWVsZF90YWdzOm50aC1jaGlsZCg3KTphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5Om5vbmU7XG59XG4ubXktYnRuLmJ0bi1maWxsZWQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYnRuLWZpbGxlZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDYxcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogOXB4O1xuICAgIHRvcDogLTIxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBvcGFjaXR5OiAwO1xufVxuLmJ0bi1maWxsZWQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjQTQxRjVFO1xuICBjb2xvcjogIzcwMTU0MDtcbn1cbi5idG4tdHh0OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI0RDRENEQztcbiAgY29sb3I6ICM4ODg4ODg7XG59XG4uYnRuLXR4dDpmb2N1c3tcbmJvcmRlci1yYWRpdXM6IDE0cHggIUlNUE9SVEFOVDtcbiAgXG59XG5cbi5idG4tZmlsbGVkOmZvY3VzLmJ0bi1maWxsZWQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBvcGFjaXR5OiAxO1xufVxuLnRvb2xzLWJ0biBpbWcuZG90ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5idG4tYXZhdGFyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJvcGRvd24gLnRvb2xzLWJ0biBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4ub3Blbi1kcm9wZG93biB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHJpZ2h0OiA0OHB4O1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xuICAgIHRvcDogMHB4O1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRyb3Bkb3duIC50b29scy1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWF0LWJ1dHRvbjpob3ZlciAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LXN0cm9rZWQtYnV0dG9uOmhvdmVyIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIG9wYWNpdHk6IDA7XG59XG4ubWF0LXN0YW5kYXJkLWNoaXAge1xuICAgIHBhZGRpbmc6IDBweCAxMnB4IDA7XG59XG4ubS1yZXZpZXctZGV0YWlscyAubS10YWctbGFiZWwubS13LTUwLm0tbGVmdC5tLXB0LTE4IHtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtd2l0aC10cmFpbGluZy1pY29uIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5tYXQtc3RhbmRhcmQtY2hpcCAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMnB4O1xuICAgIHJpZ2h0OiAyN3B4O1xufVxuLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgICAgICBoZWlnaHQ6IGF1dG8gIUlNUE9SVEFOVDtcbn1cbi5ob3Zlci1vbnFhIHtcbiAgICB3aWR0aDogMTgzcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmhvdmVyLW9ucWEuYWF7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi5ob3Zlci10b29scGlrYXIge1xudmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcmlnaHQ6IC0yNDBweDtcbiAgICB3aWR0aDogMjQwcHg7XG59XG4ubS1ib29rcy1saW5rcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG4uaG92ZXItb25xYTpob3ZlciAuaG92ZXItdG9vbHBpa2Fye1xuICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbm1hdC1kaWFsb2ctYWN0aW9ucy5mb290ZXItYm94Lm1hdC1kaWFsb2ctYWN0aW9ucy5uZy1zdGFyLWluc2VydGVkLnllc25vcWEge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgYm90dG9tOiAyM3B4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFMUUxO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTFFMUUxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAgMjZweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1heC13aWR0aDogODB2dztcbn1cbm1hdC1kaWFsb2ctYWN0aW9ucy5mb290ZXItYm94Lm1hdC1kaWFsb2ctYWN0aW9ucy5uZy1zdGFyLWluc2VydGVkLnllc25vcWEgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNBNDFGNUUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWluLXdpZHRoOiA1OXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbn1cblxubWF0LWRpYWxvZy1hY3Rpb25zLmZvb3Rlci1ib3gubWF0LWRpYWxvZy1hY3Rpb25zLm5nLXN0YXItaW5zZXJ0ZWQueWVzbm9xYSBoNCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uamFncWEgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcbn1cblxuLm1hdC10YWItbGFiZWwge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi5tYXQtdGFiLWxhYmVsIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5tYXQtaW5rLWJhci5tYXQtaW5rLWJhciB7XG4gICAgbGVmdDogNnB4O1xuICAgIHdpZHRoOiAxMjNweCAhaW1wb3J0YW50O1xufVxuLmhvdmVyLXRvb2xwaWthci5wcCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGJvdHRvbTogLTMycHg7XG59XG5hLm5nLXN0YXItaW5zZXJ0ZWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5zcGFuLmluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xufVxuc3BhbiNmb2xkZXJMaXN0IG1hdC1pY29uLm1hdC1pY29uLm5vdHJhbnNsYXRlLm1hdC1pY29uLW5vLWNvbG9yIHtcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjFweDtcbiAgICB0b3A6IDhweDtcbn1cbnNwYW4uaW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIxcHg7XG59XG5cblxuXG5cblxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xucC5wYXJhZ3JhcGgge1xuICAgIGhlaWdodDogMzE2cHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufSBcbi5mb290ZXItYm94IHtcbiAgICBib3R0b206IDQ1cHg7XG59XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xuICAgIHRvcDogM3B4O1xuICAgIHJpZ2h0OiA3cHg7XG59XG4ubS1yZXZpZXctY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubS1yZXZpZXctZGV0YWlscyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3JkZXI6IC0xO1xufVxuLmJvb2stZGV0YWlscyB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5tYWluLWJvZHkubmctc3Rhci1pbnNlcnRlZCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc2VhcmNoLWJhciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucmV2aWV3LWNvbnRhaW5lci5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctaW52YWxpZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG4uc2VhcmNoLWJhciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbn1cbi5zZWFyY2gtYm94ID4gaW5wdXQge1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbn1cbi5zZWFyY2gtYm94ID4gLm1hdGVyaWFsLWljb25zLnNlYXJjaCB7XG4gICAgICAgdG9wOiAxNXB4O1xuICAgIGxlZnQ6IDNweDtcbn1cbi5zZWFyY2gtYm94IHtcbiAgICB3aWR0aDogNDYlO1xufVxuLm9yZGVyLXRvb2wge1xuICAgIG1hcmdpbi1yaWdodDogMTFweDtcbn1cbi5tYWluLWJvZHkubmctc3Rhci1pbnNlcnRlZCAucmV2aWV3LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm1hdC1zdGFuZGFyZC1jaGlwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ubS1wdC01NSB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4ubXQtMjgubWwtNDAuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5tdC0yOC5tbC00MC5mbGV4IC5tLXc2MC1pbmxpbmUtYmxvY2subGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5tdC0yOC5tbC00MC5mbGV4IC5tLXc2MC1pbmxpbmUtYmxvY2subGVmdCBzcGFuIHtcbiAgICBtYXJnaW46IDEwcHggMTVweCAwIDVweDtcbn1cbi5yZXZpZXctc2VjdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuLm0tYm9va3MtbGlua3Mge1xuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xufVxuLm1hdC1pY29uIHtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNXB4KTtcbn1cbi5tLWJvb2tzLWxpbmtzIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmJ0bi10YWcge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tLXc0MC1pbmxpbmUtYmxvY2sge1xuICAgIHdpZHRoOiA2OSU7XG59XG4uc3VibWl0ZWQtaGVhZGluZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG4uYnRuLWF2YXRhciB7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE5cHgsIDApO1xufVxuLnN1Ym1pdGVkLWhlYWRpbmcgPiBoNSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnJldmlldy10ZXh0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5idG4tdGFnIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLm1haW4tYm9keS5uZy1zdGFyLWluc2VydGVkIC5yZXZpZXctY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICB3aWR0aDogODAlO1xufVxuLm1hdC1zZWxlY3QtdHJpZ2dlciA+IC5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4ucmVjb21tZW5kYXRpb24tc3BhY2luZyB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5maWVsZF90YWdzIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogaW5oZXJpdDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDAgMCA1cHg7XG59XG5zcGFuI2ZvbGRlckxpc3QgbWF0LWljb24ubWF0LWljb24ubm90cmFuc2xhdGUubWF0LWljb24tbm8tY29sb3Ige1xuICAgIGxlZnQ6IDIycHg7XG4gICAgdG9wOiAzcHg7XG59XG5cblxuXG5cblxuXG59XG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG5cbi5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnJlY29tbWVuZGF0aW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4ubWF0LXRhYmxlID4gdGhlYWQgdHIgdGg6bnRoLWNoaWxkKDMpIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxudGFibGUubWF0LXRhYmxlIHRyIHRkOm50aC1jaGlsZCgzKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbnRhYmxlLm1hdC10YWJsZSB0ciB0aDpudGgtY2hpbGQoNCkge1xuICAgIFxufVxuLm1hdC10YWJsZSA+IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgxKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hdC10YWJsZSA+IHRoZWFkIHRyIHRoOm50aC1jaGlsZCg2KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbnRhYmxlLm1hdC10YWJsZSB0ciB0ZDpudGgtY2hpbGQoMSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG50YWJsZS5tYXQtdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDYpIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5tYXQtdGFibGUgPiB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMikge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UxRTFFMTtcbn1cbnRhYmxlLm1hdC10YWJsZSB0ciB0ZDpudGgtY2hpbGQoMikge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UxRTFFMTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4ubWF0LWNvbHVtbi10aXRsZSB7XG4gICAgd2lkdGg6IDc1JTtcbn1cbi5zZWFyY2gtdG9vbHMge1xuICAgIHdpZHRoOiAxMzBweDtcbn1cbi50b29scy1idG4gaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnRvb2xzLWJ0biBpbWcuZG90ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoN3B4LCAwKTtcbn1cblxuLmRyb3Bkb3duIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5vcGVuLWRyb3Bkb3duIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xuc3BhbiNmb2xkZXJMaXN0IG1hdC1pY29uLm1hdC1pY29uLm5vdHJhbnNsYXRlLm1hdC1pY29uLW5vLWNvbG9yIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMXB4KTtcbn1cblxuXG5cblxufVxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xudGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCwgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgICBwYWRkaW5nOiAwIDVweDtcbn1cbmgxLmJvb2stdGl0bGUuaGVhZGluZy0xIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG59XG4ubS1oZWFkZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMnB4IDAgMHB4IDE1cHg7XG59XG4ucmVjb21tZW5kYXRpb24tYWN0aW9ucyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ucmVjb21tZW5kYXRpb24ge1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5yZWNvbW1lbmRhdGlvbi1zcGFjaW5nIHtcbiAgICBtYXJnaW4tdG9wOiAxMDhweCAhaW1wb3J0YW50O1xufVxuLm1hdC1wYWdpbmF0b3Ige1xuICAgIHBhZGRpbmctYm90dG9tOiA1N3B4O1xufVxuLm0tYm9vay10aXRsZSA+IGg0IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnRhZy1sYWJlbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucmV2aWV3LWlucHV0LWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG5cblxuXG5cblxuXG59XG4iLCIubS1tYWluLWhlYWRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDI5cHg7XG4gIGhlaWdodDogNDRweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMi4yO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzI5MjcyZDtcbn1cblxuLm1hdC10YWItbGFiZWwtYWN0aXZlIC5tLXRhYi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4ubS1mb3JtIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm0taGVhZGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTVweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICBwYWRkaW5nOiAxMHB4IDBweCAzcHggMjFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLm0taW5wdXQtd3JhcHBlciB7XG4gIHdpZHRoOiA2MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBzY3JvbGwtcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG59XG5cbi5tLWlucHV0LW1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubS1zZWFyY2gge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5tLXNlYXJjaC1pbnB1dHMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmRiYWJhO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubS1tb2RhbC10b29scyB7XG4gIHdpZHRoOiA0MCU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm0tZ3JleSB7XG4gIGNvbG9yOiAjNzQ3NDc0ICFpbXBvcnRhbnQ7XG59XG5cbi5tLWJvb2staWNvbiB7XG4gIHdpZHRoOiAyNnB4O1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5tLXRhYmxlLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyOTI3MmQ7XG59XG5cbi5tLWNvbW1lbnRzLWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG4ubS1sb2FkLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2E0MWY1ZTtcbiAgd2lkdGg6IDU5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNDFmNWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLm0tbWwtNSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5tLWNhbmNlbC1idG4ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICB3aWR0aDogODRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjYTQxZjVlO1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5tLXJldmlldy1jb250ZW50IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5tLW1sLTQwIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbi5tLWl0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm0tYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubS13LTEwIHtcbiAgd2lkdGg6IDEwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubS10YWctbGFiZWwge1xuICBmb250LWZhbWlseTogXCJPcGVuU2Fucy1SZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICM5YTljOWY7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cblxuLm0tbWwtNSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5tLXBsLTI0IHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tLW10LTI4IHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cblxuLm0tYm9va3MtbGlua3Mge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDA5MWVhO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tLXJldmlldy1kZXRhaWxzID4gZGl2ID4gLm0tYm9va3MtbGlua3Mge1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tLWJvb2tzLWxpbmtzIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAwOTFlYTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubS1oZWFkaW5nLTEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE2cHg7XG4gIGNvbG9yOiAjMjkyNzJkO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyLFxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhOTJjICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC10b29scyBpbWcge1xuICB3aWR0aDogMS4yNXJlbTtcbiAgaGVpZ2h0OiAxLjI1cmVtO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDAuOHJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuXG4uaW5wdXQtd3JhcHBlcnMge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgc2Nyb2xsLXBhZGRpbmctdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMzBweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4ud2luIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9zdmcvd2luLnN2Zyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMzhweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLm1hdC10YWItbGFiZWwtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnJlYWRjZW50ZXIge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHJnYmEoMjYsIDE1LCAzLCAwLjgpO1xufVxuXG4ubGFzdCB7XG4gIHdpZHRoOiA5N3B4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2RmYmQ7XG59XG5cbi5yZWFkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZGZiZDtcbn1cblxuLlJFQUQge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmNkMDljO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG5cbi5sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogcmdiYSgyNiwgMTUsIDMsIDAuOCk7XG59XG5cbi5sYWJlbGEge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA3M3B4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuU2FucztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4zMztcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6IHJnYmEoMjYsIDE1LCAzLCAwLjgpO1xufVxuXG4ubGFiZWxiIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNjlweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiByZ2JhKDI2LCAxNSwgMywgMC44KTtcbn1cblxuLmxhYmVsYyB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogMTZweDtcbiAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogcmdiYSgyNiwgMTUsIDMsIDAuOCk7XG59XG5cbi5DaGlwcy1JbnB1dC1UZXh0LW9ubHktRW5hYmxlZCB7XG4gIHdpZHRoOiA5N3B4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2RmYmQ7XG59XG5cbi5wcm9wZXJ0eSB7XG4gIHdpZHRoOiAxNTlweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMDA5MWVhO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLm9uZSB7XG4gIHdpZHRoOiAxNDlweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBmb250LWZhbWlseTogT3BlblNhbnM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIuMzM7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjOWE5YzlmO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnJ0YWIge1xuICBtaW4taGVpZ2h0OiA1NXB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDNweCAyMXB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnRhYnRleHQge1xuICB3aWR0aDogNTc5cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICBsZXR0ZXItc3BhY2luZzogMC45cHg7XG4gIGNvbG9yOiAjMjkyNzJkO1xufVxuXG4ueWVzIHtcbiAgd2lkdGg6IDI3cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS43MTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOXB4O1xuICBjb2xvcjogI2E0MWY1ZTtcbn1cblxuLm5vIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS43MTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOXB4O1xuICBjb2xvcjogI2E0MWY1ZTtcbn1cblxuLmxpbmsge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5zdWJtaXRlZC1oZWFkaW5nIHtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnJlYWQtYnRuIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZjZDA5YztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuXG4udGV4dENlbnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1mYW1pbHk6IE9wZW5TYW5zO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogcmdiYSgyNiwgMTUsIDMsIDAuOCk7XG59XG5cbi50YWJSZWFkIHtcbiAgd2lkdGg6IDklO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi50YWJFYXN5VG9SZWFkIHtcbiAgd2lkdGg6IDE0JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogcHg7XG59XG5cbi5yZWFkLWJ0biB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmY2QwOWM7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cblxuLnRhYlBhZ2VUdXJuZXIge1xuICB3aWR0aDogMTQlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBweDtcbn1cblxuLnRhYkV4Y2l0aW5nIHtcbiAgd2lkdGg6IDE1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uZXhjaXRpbmctYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogODVweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZGZiZDtcbn1cblxuLnctNzUge1xuICB3aWR0aDogNzUlO1xufVxuXG4uY2lyY2xlLWxvZ28ge1xuICB3aWR0aDogOCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5yYXRpbmctc2VjdGlvbiB7XG4gIHdpZHRoOiAxMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi53LTUge1xuICB3aWR0aDogNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1vcmUtYm9va3Mge1xuICB3aWR0aDogMjAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi53LTE1IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTUlO1xuICBjb2xvcjogIzAwOTFlYTtcbn1cblxuLnctMjAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMCU7XG4gIGNvbG9yOiAjMDA5MWVhO1xufVxuXG4uaW5wdXQtd3JhcHBlcnMgLm1hdC1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmlucHV0LXdyYXBwZXJzIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNFRUVFRUU7XG59XG5cbi5tYXQtdGFiLWJvZHktY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xufVxuXG4uY2RrLW92ZXJsYXktcGFuZSB7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG59XG5cbm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkge1xuICBoZWlnaHQ6IDgwdmg7XG59XG5cbi5tLW1haW4taGVhZGluZyB7XG4gIGhlaWdodDogNnZoO1xufVxuXG4ubWFpbi1tb2RhbC1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDg2dmg7XG4gIG1pbi13aWR0aDogODB2dztcbn1cblxuLm0tdzYwLWlubGluZS1ibG9jayB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMXB4O1xufVxuXG4ubS13NDAtaW5saW5lLWJsb2NrIHtcbiAgd2lkdGg6IDQwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYWluLWJvZHkubmctc3Rhci1pbnNlcnRlZCB7XG4gIG1pbi1oZWlnaHQ6IDUzdmg7XG4gIGhlaWdodDogNzQlO1xufVxuXG4ubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA0MnZoO1xufVxuXG4uc2VhcmNoLWJ0biB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubS1oZWFkZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG4uZm9vdGVyLWJveCB7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBwYWRkaW5nOiAwcHg7XG4gIC8qIG1pbi1oZWlnaHQ6IDU0cHg7ICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1MHB4O1xuICBsZWZ0OiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiNWI1YjU7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgbWF4LXdpZHRoOiA3OC41dnc7XG4gIG1hcmdpbjogMCBhdXRvO1xuICByaWdodDogMDtcbn1cblxuLnNlYXJjaC1iYXIge1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuXG4uc2VhcmNoLWJveCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogNTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB3aWR0aDogNjAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1LCAyNSwgMjUsIDAuMzIpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uc2VhcmNoLWJveCA+IGlucHV0IHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjOUE5QzlGO1xufVxuXG4uc2VhcmNoLWJveCA+IC5tYXRlcmlhbC1pY29ucy5zZWFyY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgbGVmdDogMTZweDtcbiAgY29sb3I6ICM3NTc1NzU7XG59XG5cbi5zZWFyY2gtYm94ID4gLm1hdGVyaWFsLWljb25zLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIxcHg7XG4gIGxlZnQ6IDU1JTtcbiAgY29sb3I6ICM3NTc1NzU7XG59XG5cbi5zZWFyY2gtdG9vbHMge1xuICBoZWlnaHQ6IDU0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHdpZHRoOiAzOSU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm9yZGVyLXRvb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMjZweDtcbn1cblxuLmdyaWQtYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMCU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZ3JpZC1idG4gPiBpbWcge1xuICBoZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm9yZGVyLWJ0bi10ZXh0IHtcbiAgbWFyZ2luLXRvcDogLTE3cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IC0xMnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ub3JkZXItYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjNzQ3NDc0O1xufVxuXG4ub3JkZXItYnRuID4gLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4ubWF0LXRhYmxlID4gdGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xufVxuXG4ubWF0LWNvbHVtbi1pY29uIHtcbiAgd2lkdGg6IDUlO1xufVxuXG4ubWF0LWNvbHVtbi10aXRsZSB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5tYXQtY29sdW1uLWF1dGhvciB7XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFMUUxRTE7XG59XG5cbi5tYXQtY29sdW1uLXJldmlld3Mge1xuICB3aWR0aDogMTUlO1xufVxuXG4ubWF0LWNvbHVtbi12aWV3IHtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLm1hdC1jb2x1bW4tc3RpY2tleSB7XG4gIHdpZHRoOiAxMCU7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGFibGUtaGVhZGluZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjkyNzJEO1xufVxuXG4ubWF0LWNvbHVtbi1yZXZpZXdzIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJPcGVuU2Fucy1SZWd1bGFyXCI7XG59XG5cbi5idG4tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi50b29scy1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubS1ib29rLXRpdGxlIHtcbiAgbWF4LXdpZHRoOiA5NHZoO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDlweDtcbn1cblxuLm0tYm9vay10aXRsZSA+IGg1IHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtUmVndWxhclwiO1xufVxuXG4ubS1ib29rLXRpdGxlID4gaDQge1xuICBmb250LWZhbWlseTogXCJPcGVuU2Fucy1TZW1pQm9sZFwiO1xufVxuXG4uc3VibWl0ZWQtaGVhZGluZyB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5zdWJtaXRlZC1oZWFkaW5nID4gaDQge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LWZhbWlseTogXCJPcGVuU2Fucy1TZW1pQm9sZFwiO1xufVxuXG4uc3VibWl0ZWQtaGVhZGluZyA+IGg1IHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBjb2xvcjogIzlBOUM5RjtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtUmVndWxhclwiO1xufVxuXG4ucmF0aW5nLXNlY3Rpb24ge1xuICB3aWR0aDogMTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY2lyY2xlLWxvZ28ge1xuICB3aWR0aDogNiU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5wYXJlbnQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmIzNzY7XG59XG5cbi5yZXZpZXctaGVhZGluZyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG4ucmV2aWV3LXRleHQge1xuICB3aWR0aDogODAlO1xuICBmb250LWZhbWlseTogXCJPcGVuU2Fucy1SZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmlucHV0LXdyYXBwZXJzIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIHBhZGRpbmc6IDJweCA5cHggMCAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjUsIDI1LCAyNSwgMC4zMikgIWltcG9ydGFudDtcbn1cblxuLm1hdC1zZWxlY3QtdHJpZ2dlciA+IC5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSAhaW1wb3J0YW50O1xufVxuXG4uZmllbGRfdGFncyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAzMyUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uc2VsZWN0ZWQtY2hpcHMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucmV2aWV3LWlucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDk5JTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNSwgMjUsIDI1LCAwLjMyKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5yZXZpZXctaW5wdXQtZmllbGQgPiBsZWdlbmQge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiAjRjc5NjI0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yZXZpZXctaW5wdXQtZmllbGQgPiB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtUmVndWxhclwiICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi53b3JkLWNvdW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogcmdiYSgxNTQsIDE1NiwgMTU5LCAwLjgpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW5TYW5zLVJlZ3VsYXJcIjtcbn1cblxuLnJldmlldy1pbnB1dC1maWVsZCA+IHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5QTlDOUY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtUmVndWxhclwiICFpbXBvcnRhbnQ7XG59XG5cbi5ib29rLWRldGFpbHMge1xuICBmb250LWZhbWlseTogXCJPcGVuU2Fucy1SZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMS43MTtcbiAgcGFkZGluZy1yaWdodDogNDhweDtcbn1cblxuLmgtYm9vay1kZXRhaWxzIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtU2VtaUJvbGRcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzI5MjcyZDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi5tLXB0LTE5IHtcbiAgcGFkZGluZy10b3A6IDE5cHg7XG59XG5cbi5ib29rLWRldGFpbC1idG4ge1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tLXB0LTU1IHtcbiAgcGFkZGluZy10b3A6IDU1cHg7XG59XG5cbi5tLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubS1tdC0xNiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5tLXJldmlldy1kZXRhaWxzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMzAlO1xufVxuXG4ubS13LTUwIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubS1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5tLXB0LTE4IHtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG59XG5cbi5jb2xvci1icm93biB7XG4gIGNvbG9yOiAjZjBjNjk0O1xufVxuXG4ubS1yYXRpbmctY291bnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA0cHg7XG4gIGxlZnQ6IDhweDtcbiAgY29sb3I6ICM0ZDRkNGQ7XG59XG5cbi5tLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubS10LTkge1xuICB0b3A6IDlweDtcbn1cblxuLm0tbGluZSB7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG4gIG1hcmdpbi10b3A6IDMzcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItY29sb3I6ICNkOGQ5ZGE7XG4gIGJhY2tncm91bmQ6ICNlMWUxZTE7XG59XG5cbi5tLWRhdGEge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG59XG5cbi5yZXZpZXctaW5wdXQtZmllbGQgPiB0ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6ICM5QTlDOUY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtUmVndWxhclwiICFpbXBvcnRhbnQ7XG59XG5cbi5yZXZpZXctaW5wdXQtZmllbGQgPiB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiAjOUE5QzlGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW5TYW5zLVJlZ3VsYXJcIiAhaW1wb3J0YW50O1xufVxuXG4ucmV2aWV3LWlucHV0LWZpZWxkID4gdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5QTlDOUY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtUmVndWxhclwiICFpbXBvcnRhbnQ7XG59XG5cbi5yZXZpZXctaW5wdXQtZmllbGQgPiB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzlBOUM5RjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuU2Fucy1SZWd1bGFyXCIgIWltcG9ydGFudDtcbn1cblxuLnJlY29tbWVuZGF0aW9uIHtcbiAgei1pbmRleDogMzAwMDA7XG4gIGhlaWdodDogNTZweDtcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJlY29tbWVuZGF0aW9uLWxhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuU2Fucy1TZW1pQm9sZFwiO1xufVxuXG4ucmVjb21tZW5kYXRpb24tYWN0aW9ucyB7XG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG5cbi5yZWNvbW1lbmRhdGlvbi1zcGFjaW5nIHtcbiAgbWFyZ2luLXRvcDogNzhweDtcbn1cblxuLnJlY29tbWVuZGF0aW9uLXNlbGVjdGlvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAzNHB4O1xufVxuXG4ucmV2aWV3LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG5cbi5jbGVhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4cHg7XG4gIHRvcDogN3B4O1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWctY2hpcC1saXN0IHtcbiAgaGVpZ2h0OiA0NnB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLnZlcnRpY2FsLWNlbnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4udGFnLWNoaXAtbGlzdCA+IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4udGFnLWNoaXAtbGlzdCA+IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyID4gLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogOHB4O1xuICBib3JkZXI6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuU2Fucy1TZW1pQm9sZFwiO1xuICBjb2xvcjogIzlBOUM5Rjtcbn1cblxuLnRhZ3MtaW5wdXQtY3VzdG9tIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtU2VtaUJvbGRcIiAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtY3VzdG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtU2VtaUJvbGRcIiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzlBOUM5Rjtcbn1cblxuLm15LWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbn1cblxuLmJ0bi1maWxsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTQxRjVFICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJ0bi1maWxsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0MyNzc1ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZmlsbGVkOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDMjc3NSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWZpbGxlZDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBNDFGNUUgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3MDE1NDAgIWltcG9ydGFudDtcbn1cblxuLmJ0bi10eHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjQTQxRjVFICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWluLXdpZHRoOiA1OXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLmJ0bi1maWxsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTQxRjVFICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTlweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idG4tdHh0OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RDRENEQyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzg4ODg4OCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXR4dDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0VBRkUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNBNDFGNUUgIWltcG9ydGFudDtcbn1cblxuLmJ0bi10eHQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFEQUZFICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjQTQxRjVFICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tdGFnIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZDRDA5QyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzFBMEYwMyAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtU2VtaUJvbGRcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBoZWlnaHQ6IDI4cHg7XG59XG5cbi5idG4tYXZhdGFyIHtcbiAgcGFkZGluZy1sZWZ0OiAyOHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAyM3B4O1xufVxuXG4uYnRuLXRleHQtb25seSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0RGQkQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtU2VtaUJvbGRcIjtcbn1cblxuLm0tbWF0LWljb25zIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICNmMGM2OTQ7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG5cbi5jZGstb3ZlcmxheS1wYW5lLm15LWRpYWxvZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xufVxuXG4uY2xvc2UubWF0LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgcGFkZGluZzogNXB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi50YWctbGFiZWwge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzlBOUM5RjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtaW4td2lkdGg6IDY4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idG4tdGFnID4gLm0tbWF0LWljb25zIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICNGQ0QwOUM7XG4gIG1hcmdpbi1sZWZ0OiAtMThweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuLnJldmlldy1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLm1hdC1jaGlwLWN1c3RvbSB7XG4gIGJhY2tncm91bmQ6ICNGQ0RGQkQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDREZCRCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzFBMEYwMyAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJPcGVuU2Fucy1TZW1pQm9sZFwiO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYXQtY2hpcC1jdXN0b206aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRkZENkE2ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkQ2QTYgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxQTBGMDMgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtU2VtaUJvbGRcIjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubWF0LWNoaXAtY3VzdG9tOmhvdmVyOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNGRkQ2QTYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDZBNiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzFBMEYwMyAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJPcGVuU2Fucy1TZW1pQm9sZFwiO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLm0tbWFpbi1oZWFkaW5nIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5cbiAgLnNlYXJjaC10b29scyA+IC5ncmlkLWJ0biA+IGltZyB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG59XG4ubS1oZWFkZXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjhweCAwIDBweCAyNHB4O1xufVxuXG5wLnBhcmFncmFwaCB7XG4gIHBhZGRpbmc6IDMwcHggMTVweCAwIDI0cHg7XG4gIG1heC13aWR0aDogNzAwcHg7XG59XG5cbi5tYXQtcGFnaW5hdG9yLXJhbmdlLWxhYmVsIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZS1sYWJlbCB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ubWFpbi1ib2R5Lm5nLXN0YXItaW5zZXJ0ZWQge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuLnRhYi10aXRsZS5uZy1zdGFyLWluc2VydGVkIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5zZWFyY2gtYm94OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiA3cHggN3B4IDAgN3B4O1xuICBib3JkZXItY29sb3I6ICM3NDc0NzQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDdweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlYXJjaC1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbmEubmctc3Rhci1pbnNlcnRlZCB7XG4gIGNvbG9yOiAjMDA5MUVBO1xufVxuXG4ubS1ib29rcy1saW5rcyB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5idG4tdGFnIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5idG4tYXZhdGFyIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbmZpZWxkc2V0LnJldmlldy1pbnB1dC1maWVsZC5maWVsZF90YWdzIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLnJldmlldy1pbnB1dC1maWVsZC5maWVsZF90YWdzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmV2aWV3LWlucHV0LWZpZWxkLmZpZWxkX3RhZ3M6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICM3NDc0NzQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDdweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnJldmlldy1pbnB1dC1maWVsZC5maWVsZF90YWdzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzc0NzQ3NDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTRweDtcbiAgdG9wOiA0OCU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5maWVsZHNldC5yZXZpZXctaW5wdXQtZmllbGQuZmllbGRfdGFncy5sYXN0LWlucHV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmZpZWxkc2V0LnJldmlldy1pbnB1dC1maWVsZC5maWVsZF90YWdzLmxhc3QtaW5wdXQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5maWVsZHNldC5yZXZpZXctaW5wdXQtZmllbGQuZmllbGRfdGFncy5sYXN0LWlucHV0IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDJweDtcbiAgdG9wOiAxNXB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnJldmlldy1pbnB1dC1maWVsZC5maWVsZF90YWdzOm50aC1jaGlsZCg3KTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmV2aWV3LWlucHV0LWZpZWxkLmZpZWxkX3RhZ3M6bnRoLWNoaWxkKDcpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm15LWJ0bi5idG4tZmlsbGVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYnRuLWZpbGxlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNjFweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5cHg7XG4gIHRvcDogLTIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmJ0bi1maWxsZWQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjQTQxRjVFO1xuICBjb2xvcjogIzcwMTU0MDtcbn1cblxuLmJ0bi10eHQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjRENEQ0RDO1xuICBjb2xvcjogIzg4ODg4ODtcbn1cblxuLmJ0bi10eHQ6Zm9jdXMge1xuICBib3JkZXItcmFkaXVzOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZmlsbGVkOmZvY3VzLmJ0bi1maWxsZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnRvb2xzLWJ0biBpbWcuZG90ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5idG4tYXZhdGFyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kcm9wZG93biAudG9vbHMtYnRuIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ub3Blbi1kcm9wZG93biB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwcHg7XG4gIHJpZ2h0OiA0OHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIGJhY2tncm91bmQ6ICNFRUVFRUU7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZHJvcGRvd24gLnRvb2xzLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWF0LWJ1dHRvbjpob3ZlciAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LXN0cm9rZWQtYnV0dG9uOmhvdmVyIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWF0LXN0YW5kYXJkLWNoaXAge1xuICBwYWRkaW5nOiAwcHggMTJweCAwO1xufVxuXG4ubS1yZXZpZXctZGV0YWlscyAubS10YWctbGFiZWwubS13LTUwLm0tbGVmdC5tLXB0LTE4IHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtd2l0aC10cmFpbGluZy1pY29uIHtcbiAgcGFkZGluZy1yaWdodDogMjhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5tYXQtc3RhbmRhcmQtY2hpcCAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0ycHg7XG4gIHJpZ2h0OiAyN3B4O1xufVxuXG4ubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmhvdmVyLW9ucWEge1xuICB3aWR0aDogMTgzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaG92ZXItb25xYS5hYSB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uaG92ZXItdG9vbHBpa2FyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICByaWdodDogLTI0MHB4O1xuICB3aWR0aDogMjQwcHg7XG59XG5cbi5tLWJvb2tzLWxpbmtzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaG92ZXItb25xYTpob3ZlciAuaG92ZXItdG9vbHBpa2FyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxubWF0LWRpYWxvZy1hY3Rpb25zLmZvb3Rlci1ib3gubWF0LWRpYWxvZy1hY3Rpb25zLm5nLXN0YXItaW5zZXJ0ZWQueWVzbm9xYSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGJvdHRvbTogMjNweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUUxRTE7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTFFMUUxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMjZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LXdpZHRoOiA4MHZ3O1xufVxuXG5tYXQtZGlhbG9nLWFjdGlvbnMuZm9vdGVyLWJveC5tYXQtZGlhbG9nLWFjdGlvbnMubmctc3Rhci1pbnNlcnRlZC55ZXNub3FhIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNBNDFGNUUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtaW4td2lkdGg6IDU5cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG5cbm1hdC1kaWFsb2ctYWN0aW9ucy5mb290ZXItYm94Lm1hdC1kaWFsb2ctYWN0aW9ucy5uZy1zdGFyLWluc2VydGVkLnllc25vcWEgaDQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5qYWdxYSBpbWcge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcbn1cblxuLm1hdC10YWItbGFiZWwge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtdGFiLWxhYmVsIHtcbiAganVzdGlmeS1jb250ZW50OiBlbmQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxubWF0LWluay1iYXIubWF0LWluay1iYXIge1xuICBsZWZ0OiA2cHg7XG4gIHdpZHRoOiAxMjNweCAhaW1wb3J0YW50O1xufVxuXG4uaG92ZXItdG9vbHBpa2FyLnBwIHtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAyNDBweDtcbiAgYm90dG9tOiAtMzJweDtcbn1cblxuYS5uZy1zdGFyLWluc2VydGVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnNwYW4uaW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogMjFweDtcbn1cblxuc3BhbiNmb2xkZXJMaXN0IG1hdC1pY29uLm1hdC1pY29uLm5vdHJhbnNsYXRlLm1hdC1pY29uLW5vLWNvbG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMXB4O1xuICB0b3A6IDhweDtcbn1cblxuc3Bhbi5pbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIHAucGFyYWdyYXBoIHtcbiAgICBoZWlnaHQ6IDMxNnB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuXG4gIC5mb290ZXItYm94IHtcbiAgICBib3R0b206IDQ1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xuICAgIHRvcDogM3B4O1xuICAgIHJpZ2h0OiA3cHg7XG4gIH1cblxuICAubS1yZXZpZXctY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubS1yZXZpZXctZGV0YWlscyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3JkZXI6IC0xO1xuICB9XG5cbiAgLmJvb2stZGV0YWlscyB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIC5tYWluLWJvZHkubmctc3Rhci1pbnNlcnRlZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc2VhcmNoLWJhciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAucmV2aWV3LWNvbnRhaW5lci5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctaW52YWxpZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIH1cblxuICAuc2VhcmNoLWJhciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICB9XG5cbiAgLnNlYXJjaC1ib3ggPiBpbnB1dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICB9XG5cbiAgLnNlYXJjaC1ib3ggPiAubWF0ZXJpYWwtaWNvbnMuc2VhcmNoIHtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogM3B4O1xuICB9XG5cbiAgLnNlYXJjaC1ib3gge1xuICAgIHdpZHRoOiA0NiU7XG4gIH1cblxuICAub3JkZXItdG9vbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuICB9XG5cbiAgLm1haW4tYm9keS5uZy1zdGFyLWluc2VydGVkIC5yZXZpZXctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAubWF0LWNoaXAtbGlzdC13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLm0tcHQtNTUge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG5cbiAgLm10LTI4Lm1sLTQwLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubXQtMjgubWwtNDAuZmxleCAubS13NjAtaW5saW5lLWJsb2NrLmxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAubXQtMjgubWwtNDAuZmxleCAubS13NjAtaW5saW5lLWJsb2NrLmxlZnQgc3BhbiB7XG4gICAgbWFyZ2luOiAxMHB4IDE1cHggMCA1cHg7XG4gIH1cblxuICAucmV2aWV3LXNlY3Rpb24ge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tLWJvb2tzLWxpbmtzIHtcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcbiAgfVxuXG4gIC5tYXQtaWNvbiB7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDVweCk7XG4gIH1cblxuICAubS1ib29rcy1saW5rcyB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuXG4gIC5idG4tdGFnIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAubS13NDAtaW5saW5lLWJsb2NrIHtcbiAgICB3aWR0aDogNjklO1xuICB9XG5cbiAgLnN1Ym1pdGVkLWhlYWRpbmcge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB9XG5cbiAgLmJ0bi1hdmF0YXIge1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xOXB4LCAwKTtcbiAgfVxuXG4gIC5zdWJtaXRlZC1oZWFkaW5nID4gaDUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5yZXZpZXctdGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuYnRuLXRhZyB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5tYWluLWJvZHkubmctc3Rhci1pbnNlcnRlZCAucmV2aWV3LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXRyaWdnZXIgPiAubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgLnJlY29tbWVuZGF0aW9uLXNwYWNpbmcge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAuZmllbGRfdGFncyB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IGluaGVyaXQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDAgMCA1cHg7XG4gIH1cblxuICBzcGFuI2ZvbGRlckxpc3QgbWF0LWljb24ubWF0LWljb24ubm90cmFuc2xhdGUubWF0LWljb24tbm8tY29sb3Ige1xuICAgIGxlZnQ6IDIycHg7XG4gICAgdG9wOiAzcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAucmVjb21tZW5kYXRpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5tYXQtdGFibGUgPiB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMykge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICB0YWJsZS5tYXQtdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1hdC10YWJsZSA+IHRoZWFkIHRyIHRoOm50aC1jaGlsZCgxKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tYXQtdGFibGUgPiB0aGVhZCB0ciB0aDpudGgtY2hpbGQoNikge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICB0YWJsZS5tYXQtdGFibGUgdHIgdGQ6bnRoLWNoaWxkKDEpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgdGFibGUubWF0LXRhYmxlIHRyIHRkOm50aC1jaGlsZCg2KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tYXQtdGFibGUgPiB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMikge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRTFFMUUxO1xuICB9XG5cbiAgdGFibGUubWF0LXRhYmxlIHRyIHRkOm50aC1jaGlsZCgyKSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFMUUxRTE7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuXG4gIC5tYXQtY29sdW1uLXRpdGxlIHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG5cbiAgLnNlYXJjaC10b29scyB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICB9XG5cbiAgLnRvb2xzLWJ0biBpbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAudG9vbHMtYnRuIGltZy5kb3RlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3cHgsIDApO1xuICB9XG5cbiAgLmRyb3Bkb3duIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5vcGVuLWRyb3Bkb3duIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gIHNwYW4jZm9sZGVyTGlzdCBtYXQtaWNvbi5tYXQtaWNvbi5ub3RyYW5zbGF0ZS5tYXQtaWNvbi1uby1jb2xvciB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDFweCk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCwgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgfVxuXG4gIGgxLmJvb2stdGl0bGUuaGVhZGluZy0xIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gIH1cblxuICAubS1oZWFkZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMnB4IDAgMHB4IDE1cHg7XG4gIH1cblxuICAucmVjb21tZW5kYXRpb24tYWN0aW9ucyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cblxuICAucmVjb21tZW5kYXRpb24ge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5yZWNvbW1lbmRhdGlvbi1zcGFjaW5nIHtcbiAgICBtYXJnaW4tdG9wOiAxMDhweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3Ige1xuICAgIHBhZGRpbmctYm90dG9tOiA1N3B4O1xuICB9XG5cbiAgLm0tYm9vay10aXRsZSA+IGg0IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgLnRhZy1sYWJlbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLnJldmlldy1pbnB1dC1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/books-modal/books-modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/books-modal/books-modal.component.ts ***!
  \************************************************************/
/*! exports provided: BooksModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModalComponent", function() { return BooksModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_request_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/request/request.service */ "./src/app/shared/services/request/request.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");










class Page {
    constructor(page) {
        this.setData(page);
    }
    setData(page) {
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
    LISTING: 1,
    BOOK_DETAILS: 2,
    REVIEWS_SHOW: 3,
    WRITE_REVIEW: 4
};
let BooksModalComponent = class BooksModalComponent {
    constructor(fb, requestService, gapiSession, _snackBar
    // private http: HttpClient
    ) {
        this.fb = fb;
        this.requestService = requestService;
        this.gapiSession = gapiSession;
        this._snackBar = _snackBar;
        this.actionStack = ['list'];
        this.loading = false;
        this.allTags = []; // [{"tags_id":1,"tags_desc":"Wow"},{"tags_id":2,"tags_desc":"Exciting"},{"tags_id":3,"tags_desc":"Easy to read"},{"tags_id":4,"tags_desc":"Page turner"}];
        this.SCREENS = SCREEN;
        this.currentScreen = this.SCREENS.LISTING;
        this.selectedOption = '1';
        this.selectedBook = null;
        this.title = 'Select a book';
        this.page = new Page({ length: 100, pageSize: 10, pageIndex: 0 });
        this.filters = {
            search_key: '',
            paged: this.page.pageIndex + 1,
            order_by: 'desc',
            posts_per_page: this.page.pageSize
        };
        this.displayedColumns = ['icon', 'title', 'author', 'reviews', 'view', 'edit'];
        this.tabIndex = 0;
        ///////////////////////////////////////////////////////
        this.global = {
            isReviewer: false,
            bookReview: {
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
        };
        this.detailsScreen = {
            isReviewer: this.global.isReviewer,
            topReview: {
                id: null,
                reviewComment: "",
                reviewer_name: "",
                google_id: null,
                helpful_count: null,
                review_date: null,
            }
        };
        this.separatorKeysCodes = [];
        this.reviewScreen = {
            similarBookPlaceholder: 'Search and Add Similar Books',
            tagPlaceholder: 'Search and Add Tags',
            isLoading: false,
            recommendation: null,
            filteredTags: null,
            wordCountErrorMessage: "",
            form: this.fb.group({
                reviewComment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                tags: [''],
                similarBooks: [''],
                optionalLink: [''],
                bookId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                google_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            }),
            // tagsCtrl : new FormControl(),
            tags: [],
            filteredBooks: [],
            similarBooks: [],
            reviewCommentFocused: false,
            tagsFocused: false,
            similarBooksFocused: false,
            optionalLinksFocused: false,
            removable: true,
            wordMaxLimit: 500,
            wordCount: `0 / 500`,
            post: () => {
                let data = this.reviewScreen.form.value;
                let form = new FormData();
                form.append('post_id', data.bookId);
                form.append('google_id', data.google_id);
                form.append('optionalLink', data.optionalLink);
                form.append('recommendation', this.reviewScreen.recommendation);
                form.append('reviewComment', data.reviewComment);
                form.append('similarBooks', this.reviewScreen.similarBooks.map((book) => { return book.post_id; }).join(','));
                form.append('selectedTagIds', this.reviewScreen.tags.map((tag) => { return tag.tags_id; }).join(','));
                console.log(form);
                this.requestService.sendRequest('book_review.php', 'POST', form).subscribe((response) => {
                    if (response.success) {
                        this.actionStack = ['list'];
                        this.showList(true);
                    }
                    this._snackBar.open(response.message, null, {
                        duration: 2000,
                    });
                }, (error) => {
                    console.table(error);
                });
            },
            checkIf: (field) => {
                return this.reviewScreen[field + 'Focused'] || this.reviewScreen.form.controls[field].value.length;
            },
            setTopMargin: () => {
                let margin = 0;
                if (!this.reviewScreen.recommendation) {
                    margin = 50;
                }
                margin += (this.reviewScreen.reviewCommentFocused || this.reviewScreen.form.controls.reviewComment.value.length) ? 16 : 28;
                return `${margin}px`;
            },
            setRecommendation(recommendation) {
                this.recommendation = recommendation;
            },
            updateWordCount(comment) {
                let count = comment ? comment.split('\n').join(' ').replace(/ +(?= )/g, '').trim().split(' ').length : 0;
                this.wordCount = `${count} / ${this.wordMaxLimit}`;
                if (count > this.wordMaxLimit) {
                    this.wordCountErrorMessage = "Comment exceeds maximum limit word limit.";
                }
                else {
                    this.wordCountErrorMessage = "";
                }
            },
            focus(key, focusIn) {
                switch (key) {
                    case 'reviewComment':
                        this.reviewCommentFocused = focusIn ? true : false;
                        break;
                    case 'tags':
                        this.tagsFocused = focusIn ? true : false;
                        break;
                    case 'similarBook':
                        this.similarBooksFocused = focusIn ? true : false;
                        break;
                    case 'optionalLink':
                        this.optionalLinksFocused = focusIn ? true : false;
                        break;
                }
            },
            add(event, type) {
                switch (type) {
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
            _filter: (value) => {
                console.log(value);
                let filterValue = '';
                if (typeof (value) == 'string') {
                    filterValue = value.toLowerCase();
                }
                else {
                    filterValue = value.tags_desc.toLowerCase();
                }
                return this.allTags.filter(tag => tag.tags_desc.toLowerCase().indexOf(filterValue) === 0);
            },
            getFilteredTags: () => {
                let filteredTags = this.allTags.filter((value) => {
                    return !this.reviewScreen.tags.find((tag) => {
                        return tag.tags_id == value.tags_id;
                    });
                });
                return filteredTags;
            },
            selected: (event, type) => {
                switch (type) {
                    case 'tags':
                        {
                            let found = this.reviewScreen.tags.find((tag) => {
                                return tag.tags_id == event.option.value.tags_id;
                            });
                            if (!found) {
                                this.reviewScreen.tags.push(event.option.value);
                            }
                            this.tagsInput.nativeElement.value = '';
                            this.reviewScreen.form.controls.tags.setValue(null);
                            break;
                        }
                    case 'similarBooks':
                        {
                            if (event.option.value) {
                                let found = this.reviewScreen.similarBooks.find((book) => {
                                    return book.post_id == event.option.value.post_id;
                                });
                                if (!found) {
                                    this.reviewScreen.similarBooks.push(event.option.value);
                                }
                                this.similarBookInput.nativeElement.value = '';
                                this.reviewScreen.form.controls.similarBooks.setValue(null);
                            }
                            break;
                        }
                }
            },
            remove(data, type) {
                switch (type) {
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
        };
        this.user = this.gapiSession.googleAuth.currentUser.get().getBasicProfile();
        this.saveUser(this.user);
    }
    saveUser(user) {
        let form = new FormData();
        form.append('email', user.getEmail());
        form.append('user_name', user.getName());
        form.append('google_id', user.getId());
        this.requestService.sendRequest('user_google.php', 'POST', form).subscribe((response) => {
            console.table(response.data);
        }, (error) => {
            console.table(error);
        });
    }
    ngOnInit() {
        this.fetchData();
    }
    changeOrder() {
        this.filters.order_by = (this.filters.order_by == 'asc') ? 'desc' : 'asc';
        this.fetchData();
    }
    checkAndPush(page) {
        let found = this.actionStack.find((data) => {
            return data == page;
        });
        if (!found) {
            this.actionStack.push(page);
        }
    }
    goTo(page, book) {
        switch (page) {
            case 'list':
                this.actionStack = [];
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
    goBack() {
        let backScreen = 'list';
        if (this.actionStack.length > 1) {
            backScreen = this.actionStack[this.actionStack.length - 2];
        }
        console.log(backScreen);
        this.actionStack.pop();
        switch (backScreen) {
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
    pageChanged(event) {
        this.page.setData(event);
        this.fetchData();
        console.log(this.filters);
    }
    setFilters() {
        console.log(this.filters);
        this.filters.paged = this.page.pageIndex + 1;
        this.filters.posts_per_page = this.page.pageSize;
    }
    fetchData() {
        this.loading = true;
        this.setFilters();
        console.log(this.filters);
        this.requestService.sendRequest('books.php', 'GET', this.filters).subscribe((response) => {
            console.table(response.data);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](response.data);
            console.log(this.dataSource);
            this.page.length = response.totalRecords;
            ////////////////////////////////////////////////////////
            // this.goTo('review-details', response.data[0]);
            //////////////////////////////////////////////////////////
            this.loading = false;
        }, (error) => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"]([]);
            this.loading = false;
        });
        this.requestService.sendRequest('tags.php', 'GET').subscribe((response) => {
            this.allTags = response;
        }, (error) => {
        });
    }
    ngAfterViewInit() {
        // this.dataSource.paginator = this.paginator;
    }
    tabChanged(event) {
        this.tabIndex = event.index;
        switch (event.index) {
            case 0:
                this.title = 'Select a book';
                break;
            case 1:
                this.title = "Write a review";
                break;
            case 2:
                this.title = "Review Details";
                break;
            case 3:
                this.title = "About Author";
                break;
        }
    }
    openURL(url) {
        if (url)
            window.open(url, '_blank');
    }
    search(event) {
        this.filters.search_key = '';
        this.fetchData();
    }
    floor(number) {
        return Math.floor(number);
    }
    showReview(book) {
        this.selectedBook = book;
        this.currentScreen = this.SCREENS.REVIEWS_SHOW;
    }
    //////////////////////////////////////////////////////////
    writeReview(book) {
        this.reviewScreen.form = this.fb.group({
            reviewComment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tags: [''],
            similarBooks: [''],
            optionalLink: [''],
            bookId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            google_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            this.reviewScreen.filteredBooks = [];
            this.reviewScreen.isLoading = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(value => this.requestService.sendRequest('books.php', 'GET', {
            search_key: value,
            paged: 1,
            order_by: 'desc',
            posts_per_page: 5
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            this.reviewScreen.isLoading = false;
        }))))
            .subscribe(response => {
            if (response['data'] == undefined) {
                this.reviewScreen.filteredBooks = [];
            }
            else {
                this.reviewScreen.filteredBooks = response['data'];
            }
        });
        this.filteredTags = this.reviewScreen.form.controls.tags.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((tag) => {
            console.log(tag);
            return tag ? this.reviewScreen._filter(tag) : this.allTags.slice();
        }));
        this.reviewScreen.filteredTags = this.filteredTags;
        this.selectedBook = book;
        this.currentScreen = this.SCREENS.WRITE_REVIEW;
    }
    isReviewer(array) {
        let google_id = this.user.getId();
        console.log(google_id, array);
        let found = array.find((value) => {
            return value.google_id == google_id;
        });
        return found ? true : false;
    }
    showDetails(book) {
        this.selectedBook = book;
        this.currentScreen = this.SCREENS.BOOK_DETAILS;
        this.fetchDetailsInformation(book);
        // Temp code
        // let reviews=JSON.parse(JSON.stringify(this.detailsScreen.bookReview.reviews)) ;
        // this.detailsScreen.isReviewer = this.isReviewer(reviews);
        // this.detailsScreen.topReview = this.findMax(reviews);
    }
    showList(fetchData = false) {
        this.selectedBook = null;
        this.currentScreen = this.SCREENS.LISTING;
        if (fetchData)
            this.fetchData();
    }
    findMax(array, currentMax = null) {
        if (array.length > 0) {
            let val = array.pop();
            if (currentMax) {
                currentMax = val.helpful_count > currentMax.helpful_count ? val : currentMax;
            }
            else {
                currentMax = val;
            }
            currentMax = val.helpful_count > currentMax ? val.helpful_count : currentMax;
            return this.findMax(array, currentMax);
        }
        else {
            return currentMax;
        }
    }
    fetchDetailsInformation(book) {
        let form = {
            book_id: book.post_id
        };
        this.requestService.sendRequest('get_book_reviews.php', 'GET', form).subscribe((response) => {
            if (response.success) {
                // Assigning to global book review which will automatically appear in book review and details screen.
                this.global.bookReview = response.data;
                let reviews = JSON.parse(JSON.stringify(this.global.bookReview.reviews));
                this.detailsScreen.topReview = this.findMax(reviews);
                this.global.isReviewer = this.isReviewer(reviews);
                let subjects = this.global.bookReview.subjects;
                this.global.bookReview.subjects = subjects ? subjects : [];
            }
        }, (error) => {
            console.log(error);
        });
    }
    reviewHelpful(review, helpful) {
        let form = new FormData();
        form.append('review_id', review.id);
        form.append('google_id', this.user.getId());
        form.append('helpful', helpful);
        this.requestService.sendRequest('helpful_add.php', 'POST', form).subscribe((response) => {
            if (response.success) {
                review['hideHelpful'] = true;
            }
            this._snackBar.open(response.message, null, {
                duration: 2000,
            });
        }, (error) => {
            console.table(error);
        });
    }
};
BooksModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _shared_services_request_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
    { type: _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_7__["GapiSession"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: false })
], BooksModalComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tagsInput', { static: false })
], BooksModalComponent.prototype, "tagsInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('similarBookInput', { static: false })
], BooksModalComponent.prototype, "similarBookInput", void 0);
BooksModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-books-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./books-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/books-modal/books-modal.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./books-modal.component.scss */ "./src/app/pages/books-modal/books-modal.component.scss")).default]
    })
], BooksModalComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fileEditor.proper {\n  background-color: #1e1e1e;\n}\n\n.fileEditor {\n  position: relative;\n}\n\n#fileSaveTime {\n  color: #6c6989;\n  position: absolute;\n  top: 40px;\n  right: 30px;\n  font-size: 14px;\n  z-index: 99;\n}\n\n#fileSaveTime.saveTime {\n  -webkit-animation: colorchange 7s;\n}\n\n@-webkit-keyframes colorchange {\n  0% {\n    color: #000;\n  }\n  20% {\n    color: #1f1f1f;\n  }\n  40% {\n    color: #232323;\n  }\n  60% {\n    color: #474544;\n  }\n  80% {\n    color: #6d6a69;\n  }\n  100% {\n    color: #808080;\n  }\n}\n\n.loading {\n  position: fixed;\n  background: #fff;\n  z-index: 9;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  top: 0;\n  z-index: 9999;\n}\n\n.loading .loaderContent {\n  position: absolute;\n  top: 30%;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.infoBar {\n  background-color: #fff;\n  box-shadow: 0px 6px 2px -7px #111;\n}\n\n.infoBar p {\n  text-indent: 30px;\n  font-size: 15px;\n  padding: 5px 0;\n  color: #2d2d2d;\n}\n\n.proper .infoBar {\n  background-color: #ffa92c;\n  box-shadow: none;\n}\n\n.proper .ribbon-menu {\n  background-color: #353068 !important;\n}\n\n.proper .tools {\n  background-color: #353068 !important;\n  border-top: 1px solid #58547a;\n  border-bottom: 1px solid #58547a;\n}\n\n.proper .tools ul li span {\n  background-image: linear-gradient(to left, transparent, transparent 50%, #484376 50%, #484376);\n}\n\n.proper .tools ul li span.active {\n  background: #484376;\n}\n\n.proper .tools ul li span img {\n  fill: red;\n}\n\n.ribbon-menu {\n  background-color: #f2f2f2;\n}\n\n.ribbon-menu ul {\n  padding-left: 10px;\n}\n\n.ribbon-menu ul li {\n  color: #88868D;\n  display: inline-block;\n  margin-right: 25px;\n  font-size: 14px;\n}\n\n.ribbon-menu ul li span {\n  color: #88868D;\n  text-decoration: none;\n  background-image: linear-gradient(to left, transparent, transparent 50%, #d9d9d9 50%, #d9d9d9);\n  background-position: 100% 0;\n  background-size: 200% 100%;\n  transition: all 0.25s ease-in;\n  padding: 5px 8px 3px;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.ribbon-menu ul li span:hover {\n  background-position: 0 0;\n}\n\n.ribbon-menu ul li span.selected-span {\n  color: #CC7337;\n  border-bottom: 3px solid #CC7337;\n}\n\n.ribbon-menu ul li:hover {\n  cursor: pointer;\n}\n\n.tools {\n  background-color: #fff !important;\n  padding: 5px 20px;\n  border-top: 1px solid #ccc;\n  border-bottom: 2px solid #ccc;\n  position: relative;\n  z-index: 2;\n}\n\n.tools ul li span:hover {\n  background-position: 0 0;\n}\n\n.tools ul li {\n  display: inline-block;\n  margin-right: 25px;\n  font-size: 14px;\n}\n\n.tools ul li span {\n  color: #fff;\n  text-decoration: none;\n  background-image: linear-gradient(to left, transparent, transparent 50%, #d9d9d9 50%, #d9d9d9);\n  background-position: 100% 0;\n  background-size: 200% 100%;\n  transition: all 0.25s ease-in;\n  padding: 5px 8px 3px;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.tools ul li span i {\n  font-size: 18px;\n}\n\n.tools ul li span img {\n  height: 16px;\n  position: relative;\n  top: 2px;\n}\n\n.tools ul li span.active {\n  background: #d9d9d9;\n}\n\n.tools ul li span.eva {\n  background-image: none !important;\n  position: relative;\n  top: -2px;\n  color: #2f2f2f;\n  cursor: pointer;\n}\n\n.addBtn {\n  position: fixed;\n  right: 50px;\n  bottom: 50px;\n  z-index: 99;\n  background-image: linear-gradient(to left, transparent, transparent 50%, #1a73e8 50%, #1a73e8);\n  background-position: 100% 0;\n  background-size: 200% 100%;\n  transition: all 0.25s ease-in;\n  background-color: #ffa92c !important;\n}\n\n.addBtn img {\n  width: 16px;\n}\n\n.addBtn:hover {\n  background-position: 0 0;\n}\n\n.infoBar {\n  position: relative;\n  z-index: 1;\n  -webkit-animation: slide-down 0.3s ease-out;\n  -moz-animation: slide-down 0.3s ease-out;\n}\n\n@-webkit-keyframes slide-down {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n\n#curtain {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: white;\n  opacity: 0.8;\n}\n\n.a-overflow {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2N1b25nL3dvcmtzcGFjZS91cHdvcmsvcXVpY2twYWQvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEREE7RUFDRSxpQ0FBQTtBQ0lGOztBRERBO0VBQ0U7SUFFRSxXQUFBO0VDR0Y7RUREQTtJQUVFLGNBQUE7RUNFRjtFREFBO0lBRUUsY0FBQTtFQ0NGO0VEQ0E7SUFFRSxjQUFBO0VDQUY7RURFQTtJQUVFLGNBQUE7RUNERjtFREdBO0lBQ0UsY0FBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0FDRkY7O0FER0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNFLHNCQUFBO0VBQ0EsaUNBQUE7QUNERjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQUo7O0FESUU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FDREo7O0FES0U7RUFDRSxvQ0FBQTtBQ0ZKOztBRElFO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDRko7O0FES1E7RUFDRSw4RkFBQTtBQ0hWOztBREtRO0VBQ0UsbUJBQUE7QUNIVjs7QURLUTtFQUNFLFNBQUE7QUNIVjs7QURVQTtFQUNFLHlCQUFBO0FDUEY7O0FEUUU7RUFDRSxrQkFBQTtBQ05KOztBRE9JO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTE47O0FETU07RUFJRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw4RkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDUFI7O0FESlE7RUFDRSx3QkFBQTtBQ01WOztBREtRO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0FDSFY7O0FETU07RUFDRSxlQUFBO0FDSlI7O0FEVUE7RUFDRSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ1BGOztBRFNJO0VBQ0Usd0JBQUE7QUNQTjs7QURTSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDUE47O0FEUU07RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw4RkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDTlI7O0FET1E7RUFDRSxlQUFBO0FDTFY7O0FET1E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDTFY7O0FEUU07RUFDRSxtQkFBQTtBQ05SOztBRFFNO0VBQ0UsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ05SOztBRFlBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhGQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUNURjs7QURVRTtFQUNFLFdBQUE7QUNSSjs7QURXQTtFQUNFLHdCQUFBO0FDUkY7O0FEWUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQ0FBQTtFQUNBLHdDQUFBO0FDVEY7O0FEWUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtFQ1RGO0VEV0E7SUFDRSxVQUFBO0lBQ0EsZ0NBQUE7RUNURjtBQUNGOztBRHNCQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1ZGOztBRGFBO0VBQ0UsZ0JBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZUVkaXRvci5wcm9wZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xufVxuLmZpbGVFZGl0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jZmlsZVNhdmVUaW1lIHtcbiAgY29sb3I6ICM2YzY5ODk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MHB4O1xuICByaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB6LWluZGV4OiA5OTtcbn1cbiNmaWxlU2F2ZVRpbWUuc2F2ZVRpbWV7XG4gIC13ZWJraXQtYW5pbWF0aW9uOmNvbG9yY2hhbmdlIDdzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JjaGFuZ2Uge1xuICAwJSB7XG5cbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuICAyMCUge1xuXG4gICAgY29sb3I6ICMxZjFmMWY7XG4gIH1cbiAgNDAlIHtcblxuICAgIGNvbG9yOiAjMjMyMzIzO1xuICB9XG4gIDYwJSB7XG5cbiAgICBjb2xvcjogIzQ3NDU0NDtcbiAgfVxuICA4MCUge1xuXG4gICAgY29sb3I6ICM2ZDZhNjk7XG4gIH1cbiAgMTAwJSB7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gIH1cbn1cblxuLmxvYWRpbmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOjA7XG4gIHotaW5kZXg6IDk5OTk7XG4gIC5sb2FkZXJDb250ZW50e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwJTtcbiAgICBsZWZ0OjA7XG4gICAgcmlnaHQ6MDtcbiAgICBtYXJnaW46YXV0bztcbiAgfVxufVxuLmluZm9CYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggNnB4IDJweCAtN3B4ICMxMTE7XG4gIHAge1xuICAgIHRleHQtaW5kZW50OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBjb2xvcjogIzJkMmQyZDtcbiAgfVxufVxuLnByb3BlciB7XG4gIC5pbmZvQmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhOTJjO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbn1cbi5wcm9wZXIge1xuICAucmliYm9uLW1lbnV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzA2OCAhaW1wb3J0YW50O1xuICB9XG4gIC50b29scyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzA2OCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNTg1NDdhO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTg1NDdhO1xuICAgIHVsIHtcbiAgICAgIGxpIHtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCA1MCUsICM0ODQzNzYgNTAlLCAjNDg0Mzc2KTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuLmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzQ4NDM3NjtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIGltZyB7XG4gICAgICAgICAgZmlsbDogcmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5yaWJib24tbWVudXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgdWx7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGxpe1xuICAgICAgY29sb3I6ICM4ODg2OEQ7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBzcGFue1xuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgICAgICAgfVxuICAgICAgICBjb2xvcjogIzg4ODY4RDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50IDUwJSwgI2Q5ZDlkOSA1MCUsICNkOWQ5ZDkpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbjtcbiAgICAgICAgcGFkZGluZzogNXB4IDhweCAzcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmLnNlbGVjdGVkLXNwYW57XG4gICAgICAgICAgY29sb3I6ICNDQzczMzc7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNDQzczMzc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICY6aG92ZXJ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRvb2xzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHVsIHtcbiAgICBsaSBzcGFuOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgICB9XG4gICAgbGkge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQgNTAlLCAjZDlkOWQ5IDUwJSwgI2Q5ZDlkOSk7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluO1xuICAgICAgICBwYWRkaW5nOiA1cHggOHB4IDNweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNwYW4uYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcbiAgICAgIH1cbiAgICAgIHNwYW4uZXZhIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgY29sb3I6ICMyZjJmMmY7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmFkZEJ0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDUwcHg7XG4gIGJvdHRvbTogNTBweDtcbiAgei1pbmRleDogOTk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQgNTAlLCAjMWE3M2U4IDUwJSwgIzFhNzNlOCk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhOTJjICFpbXBvcnRhbnQ7XG4gIGltZyB7XG4gICAgd2lkdGg6IDE2cHg7XG4gIH1cbn1cbi5hZGRCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG59XG5cblxuLmluZm9CYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1kb3duIDAuM3MgZWFzZS1vdXQ7XG4gIC1tb3otYW5pbWF0aW9uOiBzbGlkZS1kb3duIDAuM3MgZWFzZS1vdXQ7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1kb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBzbGlkZS1kb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuI2N1cnRhaW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmEtb3ZlcmZsb3cge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuIiwiLmZpbGVFZGl0b3IucHJvcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcbn1cblxuLmZpbGVFZGl0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNmaWxlU2F2ZVRpbWUge1xuICBjb2xvcjogIzZjNjk4OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4jZmlsZVNhdmVUaW1lLnNhdmVUaW1lIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGNvbG9yY2hhbmdlIDdzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JjaGFuZ2Uge1xuICAwJSB7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgMjAlIHtcbiAgICBjb2xvcjogIzFmMWYxZjtcbiAgfVxuICA0MCUge1xuICAgIGNvbG9yOiAjMjMyMzIzO1xuICB9XG4gIDYwJSB7XG4gICAgY29sb3I6ICM0NzQ1NDQ7XG4gIH1cbiAgODAlIHtcbiAgICBjb2xvcjogIzZkNmE2OTtcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgfVxufVxuLmxvYWRpbmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk5O1xufVxuLmxvYWRpbmcgLmxvYWRlckNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaW5mb0JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMnB4IC03cHggIzExMTtcbn1cbi5pbmZvQmFyIHAge1xuICB0ZXh0LWluZGVudDogMzBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgY29sb3I6ICMyZDJkMmQ7XG59XG5cbi5wcm9wZXIgLmluZm9CYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhOTJjO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ucHJvcGVyIC5yaWJib24tbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTMwNjggIWltcG9ydGFudDtcbn1cbi5wcm9wZXIgLnRvb2xzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzA2OCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzU4NTQ3YTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1ODU0N2E7XG59XG4ucHJvcGVyIC50b29scyB1bCBsaSBzcGFuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCA1MCUsICM0ODQzNzYgNTAlLCAjNDg0Mzc2KTtcbn1cbi5wcm9wZXIgLnRvb2xzIHVsIGxpIHNwYW4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzQ4NDM3Njtcbn1cbi5wcm9wZXIgLnRvb2xzIHVsIGxpIHNwYW4gaW1nIHtcbiAgZmlsbDogcmVkO1xufVxuXG4ucmliYm9uLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuLnJpYmJvbi1tZW51IHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnJpYmJvbi1tZW51IHVsIGxpIHtcbiAgY29sb3I6ICM4ODg2OEQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucmliYm9uLW1lbnUgdWwgbGkgc3BhbiB7XG4gIGNvbG9yOiAjODg4NjhEO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQgNTAlLCAjZDlkOWQ5IDUwJSwgI2Q5ZDlkOSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluO1xuICBwYWRkaW5nOiA1cHggOHB4IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmliYm9uLW1lbnUgdWwgbGkgc3Bhbjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbn1cbi5yaWJib24tbWVudSB1bCBsaSBzcGFuLnNlbGVjdGVkLXNwYW4ge1xuICBjb2xvcjogI0NDNzMzNztcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNDQzczMzc7XG59XG4ucmliYm9uLW1lbnUgdWwgbGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b29scyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuLnRvb2xzIHVsIGxpIHNwYW46aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG59XG4udG9vbHMgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRvb2xzIHVsIGxpIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50IDUwJSwgI2Q5ZDlkOSA1MCUsICNkOWQ5ZDkpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbjtcbiAgcGFkZGluZzogNXB4IDhweCAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRvb2xzIHVsIGxpIHNwYW4gaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi50b29scyB1bCBsaSBzcGFuIGltZyB7XG4gIGhlaWdodDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn1cbi50b29scyB1bCBsaSBzcGFuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XG59XG4udG9vbHMgdWwgbGkgc3Bhbi5ldmEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xuICBjb2xvcjogIzJmMmYyZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkQnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogNTBweDtcbiAgYm90dG9tOiA1MHB4O1xuICB6LWluZGV4OiA5OTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCA1MCUsICMxYTczZTggNTAlLCAjMWE3M2U4KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE5MmMgIWltcG9ydGFudDtcbn1cbi5hZGRCdG4gaW1nIHtcbiAgd2lkdGg6IDE2cHg7XG59XG5cbi5hZGRCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG59XG5cbi5pbmZvQmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtZG93biAwLjNzIGVhc2Utb3V0O1xuICAtbW96LWFuaW1hdGlvbjogc2xpZGUtZG93biAwLjNzIGVhc2Utb3V0O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtZG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgc2xpZGUtZG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4jY3VydGFpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uYS1vdmVyZmxvdyB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _books_modal_books_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../books-modal/books-modal.component */ "./src/app/pages/books-modal/books-modal.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _infrastructure_repositories_file_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../infrastructure/repositories/file.repository */ "./src/infrastructure/repositories/file.repository.ts");
/* harmony import */ var ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-keyboard-shortcuts */ "./node_modules/ng-keyboard-shortcuts/fesm2015/ng-keyboard-shortcuts.js");
/* harmony import */ var src_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _shared_services_epub_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/services/epub.service */ "./src/app/shared/services/epub.service.ts");
/* harmony import */ var _shared_utils_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/utils/helper */ "./src/app/shared/utils/helper.ts");















const Token = 16908545;
class RedoUndo {
    constructor() {
        this.past = [];
        this.future = [];
    }
}
const redoUndo = new RedoUndo();
let DashboardComponent = class DashboardComponent {
    constructor(aroute, titleService, epubService, fileRepository, gapiSession, router, snackBar, 
    // private http: HttpClient,
    dialog, http, dialogService) {
        this.aroute = aroute;
        this.titleService = titleService;
        this.epubService = epubService;
        this.fileRepository = fileRepository;
        this.gapiSession = gapiSession;
        this.router = router;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.http = http;
        this.dialogService = dialogService;
        this.isMobile = Object(_shared_utils_helper__WEBPACK_IMPORTED_MODULE_14__["isMobile"])();
        this.epub = null;
        this.isSave = false;
        this.data = '';
        this.isHtml = 'null';
        this.evalution = false;
        this.minisidebar = false;
        this.loading = false;
        this.loading2 = false;
        this.title = 'untitled';
        this.thememode = true;
        this.color = '#808080';
        this.infoBar = false;
        this.wrapdata = false;
        this.readonly = false;
        this.usersaveTime = '';
        this.index = 0;
        this.fontSizeArray = [8, 10, 12, 14, 16, 20, 30, 45];
        this.homeSelected = true;
        this.epubMode = false;
        this.shortcuts = [];
        this.infoData = {
            lineNumber: 0,
            column: 0
        };
        this.editorLineInfo = {
            fileId: '',
            userId: '',
            lineNumber: 1,
            column: 1
        };
        this.bookmarksLIne = [];
        this.selection = 0;
        this.totalChar = 0;
        this.selectedLine = 0;
        this.tabCount = 0;
        this.wordCount = 0;
        if (this.router.url == '/editor') {
            let data = localStorage.getItem('editor');
            if (data) {
                sessionStorage.clear();
                localStorage.removeItem('editor');
            }
        }
        this.isLoggedIn = this.gapiSession.isSignedIn;
        if (this.isLoggedIn) {
            let data = JSON.parse(localStorage.getItem('users'));
            if (data) {
                let data2 = data.slice(-1);
                this.editorLineInfo.userId = data2[0].Id;
            }
        }
        if (!this.evalution) {
            this.editorOptions = {
                theme: 'vs-light',
                fontSize: 16,
                wordBasedSuggestions: false,
                minimap: {
                    enabled: false
                },
            };
        }
        else {
            this.editorOptions = {
                theme: 'vs-dark',
                fontSize: 16,
                wordBasedSuggestions: false,
                minimap: {
                    enabled: false
                },
            };
        }
    }
    handleKeyboardEvent(event) {
        if (event.ctrlKey && event.keyCode == 188) {
            event.preventDefault();
            this.bookMarkLineBWD();
        }
        if (event.ctrlKey && event.keyCode == 190) {
            event.preventDefault();
            this.bookMarkLineFWD();
        }
    }
    /**
     * Read Only Mode
     */
    readOnly() {
        if (!this.readonly) {
            this.readonly = true;
            let newEditorOptions = {
                readOnly: true
            };
            this.editorOptions = Object.assign({}, this.editorOptions, newEditorOptions);
            this.fileSaveTime = 'Read Only';
        }
        else {
            this.readonly = false;
            let newEditorOptions = {
                readOnly: false
            };
            this.editorOptions = Object.assign({}, this.editorOptions, newEditorOptions);
            this.fileSaveTime = '';
        }
    }
    /**
     * Word Wrapping
     */
    wrapData() {
        const { lineNumber } = this.editor.getPosition();
        if (!this.wrapdata) {
            this.wrapdata = true;
            let newEditorOptions = {
                wordWrap: 'on',
                wrappingIndent: 'same',
            };
            this.editorOptions = Object.assign({}, this.editorOptions, newEditorOptions);
        }
        else {
            this.wrapdata = false;
            let newEditorOptions = {
                wordWrap: 'off',
                wrappingIndent: 'none',
            };
            this.editorOptions = Object.assign({}, this.editorOptions, newEditorOptions);
        }
        setTimeout(() => {
            this.editor.setPosition({ column: 1, lineNumber });
            this.editor.revealLine(lineNumber);
        });
    }
    /**
      * Save Font Size
      */
    saveFont(size) {
        if (this.isLoggedIn) {
            let data = JSON.parse(localStorage.getItem('users'));
            if (data) {
                let data2 = data.slice(-1);
                let userId = data2[0].Id;
                this.fileRepository.insertFontSize(userId, size).toPromise();
            }
        }
    }
    /**
    * Save Template
    */
    saveTemplate(theme) {
        if (this.isLoggedIn) {
            let data = JSON.parse(localStorage.getItem('users'));
            if (data) {
                let data2 = data.slice(-1);
                let userId = data2[0].Id;
                this.fileRepository.insertTheme(userId, theme).toPromise();
            }
        }
    }
    /**
     * toggle editor side bar
     */
    removeMinibar() {
        if (this.minisidebar == false) {
            this.minisidebar = true;
            let newEditorOptions = {
                minimap: {
                    enabled: true
                }
            };
            this.editorOptions = Object.assign({}, this.editorOptions, newEditorOptions);
        }
        else {
            this.minisidebar = false;
            let newEditorOptions = {
                minimap: {
                    enabled: false
                }
            };
            this.editorOptions = Object.assign({}, this.editorOptions, newEditorOptions);
        }
    }
    /**
     * Change theme
     * @param editor
     */
    changeThemeMode() {
        this.thememode = !this.thememode;
        this.fileRepository.checkThemeMode();
        var toolbar = document.getElementsByClassName('mat-toolbar')[0];
        if (this.thememode) {
            toolbar.classList.remove("proper");
            let newEditorOptions = {
                theme: 'vs-light',
            };
            this.editorOptions = Object.assign({}, this.editorOptions, newEditorOptions);
            this.saveTemplate('vs-light');
        }
        else {
            toolbar.classList.add("proper");
            let newEditorOptions = {
                theme: 'vs-dark',
            };
            this.editorOptions = Object.assign({}, this.editorOptions, newEditorOptions);
            this.saveTemplate('vs-dark');
        }
        this.gettingFileBookmark();
        this.addClassCurrentLine();
    }
    changeBookmark() {
        this.epubService.placeBookmark();
    }
    onInitEditor(editor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            localStorage.setItem('bookmarks', '');
            // localStorage.setItem('currentLine', '')
            this.editor = editor;
            this.slashLine();
            //adding menu item for link context menu
            this.followLink(editor);
            if (this.isHtml == 'txt') {
                this.addDash(this.editor);
            }
            this.editor.onDidChangeCursorPosition(e => {
                this.manageInfo();
                this.addClassCurrentLine();
            });
        });
    }
    onMouseHover(event) {
    }
    /***
     * Auto add dash on new line
     */
    addDash(editor) {
        editor.onDidType(text => {
            const bulletText = '-';
            const insertBullet = (pos) => {
                const range = new monaco.Range(pos.lineNumber, pos.column, pos.lineNumber, pos.column);
                editor.executeEdits('new-bullets', [{ identifier: 'new-bullet', range, text: bulletText, forceMoveMarkers: true }]);
            };
            if (text === '\n') {
                const model = editor.getModel();
                const position = editor.getPosition();
                const prevLine = model.getLineContent(position.lineNumber - 1);
                prevLine.trim().indexOf(bulletText) === 0 && insertBullet(position);
            }
        });
    }
    /***
     * Slash - make line color green for plaintext
     */
    slashLine() {
        monaco.languages.setMonarchTokensProvider('plaintext', {
            tokenizer: {
                whitespace: [
                    [/[ \t\r\n]+/, ''],
                    [/^\/.*$/, 'comment'],
                ],
            },
        });
    }
    /***
    * Adding menu attribute to link context menu
    */
    followLink(editor) {
        monaco.languages.setLanguageConfiguration('plaintext', {
            // Allow http:// to be part of a word.
            wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\=\+\{\}\\\|\;\'\"\,\<\>\?\s]+)/g,
        });
        var linkCondition = editor.createContextKey('linkCondition', false);
        editor.addAction({
            // An unique identifier of the contributed action.
            id: 'link-context-id',
            // A label of the action that will be presented to the user.
            label: 'Follow the link',
            // A precondition for this action.
            precondition: 'linkCondition',
            // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
            keybindingContext: null,
            contextMenuGroupId: 'navigation',
            contextMenuOrder: 1.5,
            // Method that will be executed when the action is triggered.
            // @param editor The editor instance is passed in as a convinience
            run: function (ed) {
                window.open(editor.getModel().getWordAtPosition(ed.getPosition()).word, '_blank');
                return null;
            }
        });
        const contextmenu = editor.getContribution('editor.contrib.contextmenu');
        const realMethod = contextmenu._onContextMenu;
        contextmenu._onContextMenu = function (e) {
            // console.log(e.target.element.className);
            var a = e.target.element.className;
            if (a.includes('detected-link')) {
                linkCondition.set(true);
            }
            else {
                linkCondition.set(false);
            }
            realMethod.apply(contextmenu, arguments);
        };
    }
    /**
     * Redirect to proper editor
     */
    propereditor() {
        let url = this.router.createUrlTree(['/proper']);
        window.open(url.toString(), '_blank');
    }
    /**
     * Manage the redo and undo history
     * @param event
     */
    onKeydown(event) {
        redoUndo.past = [...redoUndo.past, this.data];
    }
    /** Manage editor info */
    manageInfo() {
        if (this.editor) {
            this.fileRepository.onMoveCursorOnNotepage();
            this.cusurPointer = this.editor.getPosition();
            this.infoData = Object.assign({}, this.editor.getPosition(), this.editor.getSelection());
            let selectedText = this.editor.getModel().getValueInRange(this.editor.getSelection());
            let data1 = this.editor.getModel().getLineContent(this.editor.getPosition().lineNumber);
            let arr_str2 = data1.match(/^[\s]*/g);
            let count3 = arr_str2[0].length;
            if (count3 >= 4) {
                let tabs = count3 / 4;
                this.tabCount = parseInt(tabs);
            }
            else {
                this.tabCount = 0;
            }
            this.selection = selectedText.length;
            let dataline = selectedText.split(/\r\n|\r|\n/);
            if (this.selection > 0) {
                this.selectedLine = dataline.length;
            }
            this.totalLine = this.editor.getModel().getLineCount();
            this.wordCount = this.countWords(this.data);
            let withoutSpace = this.data.replace(/ /g, "");
            this.totalChar = withoutSpace.length;
        }
    }
    /**
     * Get word count
     * @param str
     */
    countWords(str) {
        str = str.replace(/(^\s*)|(\s*$)/gi, "");
        str = str.replace(/[ ]{2,}/gi, " ");
        str = str.replace(/\n /, "\n");
        return str.split(' ').length;
    }
    /**
     * Toogle status bar
     */
    statusInfo() {
        this.infoBar = !this.infoBar;
    }
    /**
     * Undo content
     */
    undo() {
        if (redoUndo.past.length === 0)
            return;
        const lastState = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["last"])(redoUndo.past);
        redoUndo.past = redoUndo.past.slice(0, -1);
        redoUndo.future = [...redoUndo.future, this.data];
        this.data = lastState;
    }
    /**
     * Redo content
     */
    redo() {
        const lastState = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["last"])(redoUndo.future);
        if (!lastState)
            return;
        redoUndo.future = redoUndo.future.slice(0, -1);
        redoUndo.past = [...redoUndo.past, this.data];
        this.data = lastState;
    }
    /**
     * Editor find widget
     */
    find() {
        if (this.editor) {
            this.editor.trigger('', 'actions.find');
        }
    }
    /**
     * save file content
     * Short code Ctrl + s
     */
    ngAfterViewInit() {
        this.shortcuts.push({
            key: "ctrl + s",
            preventDefault: true,
            allowIn: [ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__["AllowIn"].Textarea, ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__["AllowIn"].Input],
            command: e => this.save()
        }, {
            key: "ctrl + b",
            preventDefault: true,
            allowIn: [ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__["AllowIn"].Textarea, ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__["AllowIn"].Input],
            command: e => this.bookMarkLine()
        });
    }
    nextItem() {
        this.index = this.index + 1; // increase i by one
        this.index = this.index % this.bookmarksLIne.length; // if we've gone too high, start from `0` again
        return this.bookmarksLIne[this.index]; // give us back the item of where we are now
    }
    prevItem() {
        if (this.index === 0) { // i would become 0
            this.index = this.bookmarksLIne.length; // so put it at the other end of the array
        }
        this.index = this.index - 1; // decrease by
        return this.bookmarksLIne[this.index];
    }
    /**
     * Increase font size of the editor
     */
    sizeUp() {
        let defaultSize = this.editorOptions.fontSize;
        if (defaultSize && defaultSize < 45) {
            let currentArrayId = this.fontSizeArray.indexOf(defaultSize);
            let newFontSize = this.fontSizeArray[currentArrayId + 1];
            let newEditorOptions = { fontSize: newFontSize };
            this.editorOptions = Object.assign({}, this.editorOptions, newEditorOptions);
            this.saveFont(newFontSize);
        }
        if (this.epubViewer) {
            this.epubViewer.setFont(`${this.editorOptions.fontSize}px`);
        }
    }
    /**
     * Descrease font size of the editor
     */
    sizeDown() {
        let defaultSize = this.editorOptions.fontSize;
        if (defaultSize && defaultSize > 8) {
            let currentArrayId = this.fontSizeArray.indexOf(defaultSize);
            let newFontSize = this.fontSizeArray[currentArrayId - 1];
            let newEditorOptions = { fontSize: newFontSize };
            this.editorOptions = Object.assign({}, this.editorOptions, newEditorOptions);
            this.saveFont(newFontSize);
        }
        if (this.epubViewer) {
            this.epubViewer.setFont(`${this.editorOptions.fontSize}px`);
        }
    }
    // bookmark next
    bookMarkLineFWD() {
        this.editor.setPosition({ column: 1, lineNumber: this.nextItem() });
        this.editor.focus();
    }
    /**
     * Bookmark prev
     */
    bookMarkLineBWD() {
        this.editor.setPosition({ column: 1, lineNumber: this.prevItem() });
        this.editor.focus();
    }
    /**
     * Save line bookmark
     */
    bookMarkLine() {
        let position = this.editor.getPosition();
        if (!this.bookmarksLIne.includes(position.lineNumber)) {
            this.bookmarksLIne.push(position.lineNumber);
            this.bookmarksLIne.sort(function (a, b) { return a - b; });
            this.fileRepository.postBookmark(position.lineNumber, this.fileId).toPromise();
            var decor = this.editor.deltaDecorations([], [
                { range: new monaco.Range(position.lineNumber, 1, position.lineNumber, 1), options: { isWholeLine: true, linesDecorationsClassName: 'bookmarkDecoration' } },
            ]);
            var bookmarks = localStorage.getItem('bookmarks');
            if (bookmarks == null || bookmarks == '') {
                decorations = {};
            }
            else {
                var decorations = JSON.parse(bookmarks);
            }
            var name = 'decor-' + position.lineNumber;
            decorations[name] = decor;
            localStorage.setItem('bookmarks', JSON.stringify(decorations));
        }
        else {
            var decorations = JSON.parse(localStorage.getItem('bookmarks'));
            var dec_id = decorations['decor-' + position.lineNumber];
            this.editor.deltaDecorations(dec_id, [{ range: new monaco.Range(position.lineNumber, 1, position.lineNumber, 1), options: {} }]);
            this.bookmarksLIne.splice(this.bookmarksLIne.indexOf(position.lineNumber), 1);
            this.fileRepository.deleteBookmark(this.fileId, position.lineNumber).toPromise();
        }
    }
    /**
     * Auto save Doc
     */
    callOnInterval() {
        if (this.evalution == false) {
            let element = document.getElementById('saveFile');
            if (element) {
                element.click();
            }
            let d = new Date();
            let n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
            this.fileSaveTime = 'Auto-saved ' + n;
        }
    }
    /**
     * Open fresh editor
     * for create file
     */
    openNewEditor() {
        if (!this.isLoggedIn) {
            this.snackBar.open('User signin required', '', { duration: 3000, verticalPosition: 'bottom' });
            return;
        }
        localStorage.setItem('editor', 'new');
        window.open('/editor', '_blank');
    }
    /**
     * Save the current line
     * @param position
     */
    saveCurrentLine(position) {
        this.editorLineInfo.lineNumber = position.lineNumber;
        this.editorLineInfo.column = position.column;
        this.editorLineInfo.fileId = this.fileId;
        let line = localStorage.getItem('currentLine');
        if (line != null && line != '') {
            let linenumbers = document.getElementsByClassName('line-numbers');
            let currentLineDiv = linenumbers[Number(line) - 1];
            if (currentLineDiv) {
                currentLineDiv.parentElement.classList.remove("currentLineDecoration");
            }
        }
        localStorage.setItem('currentLine', position.lineNumber);
        let linenumbers = document.getElementsByClassName('line-numbers');
        let currentLineDiv = linenumbers[position.lineNumber - 1];
        if (currentLineDiv) {
            currentLineDiv.parentElement.classList.add("currentLineDecoration");
        }
        this.fileRepository.postCurrentLIne(this.editorLineInfo).subscribe((res) => {
            if (res.data.error) {
                this.fileRepository.updateCurrentLIne(this.editorLineInfo).toPromise();
            }
        });
    }
    addClassCurrentLine() {
        let line = localStorage.getItem('currentLine');
        setTimeout(() => {
            if (line != null && line != '') {
                let linenumbers = document.getElementsByClassName('line-numbers');
                let currentLineDiv = linenumbers[Number(line) - 1];
                if (currentLineDiv) {
                    currentLineDiv.parentElement.classList.add("currentLineDecoration");
                }
            }
        }, 10);
    }
    generateShortlink() {
        let fileData = sessionStorage.getItem('fileData');
        let fileId = sessionStorage.getItem('id');
        if (fileData == null && fileId != null) {
            let obj = { "ids": [fileId] };
            let urlparams = JSON.stringify(obj);
            var somet = this.router.createUrlTree(['/editor'], { queryParams: { state: urlparams } });
            var link = 'https://urls.quickpad.io/yourls-api.php?action=shorturl&format=json&url=https://quickpad.io' + somet;
            this.http.get(link).subscribe(data => { this.shortlink = data; });
        }
        else if (fileData != null) {
            var somet = this.router.createUrlTree(['/editor'], { queryParams: { state: fileData } });
            var link = 'https://urls.quickpad.io/yourls-api.php?action=shorturl&format=json&url=https://quickpad.io' + somet;
            this.http.get(link).subscribe(data => { this.shortlink = data; });
        }
    }
    /**
     * Create new drive file
     */
    createNewTextFile(position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.fileRepository.getfileNewtitle('new');
            let decodeHtml = this.decodeEntities(this.data);
            this.fileRepository.createDriveFIle(decodeHtml).subscribe((res) => {
                if (res) {
                    this.getCreatedfile(res.id, position);
                    sessionStorage.removeItem('parentid');
                    sessionStorage.removeItem('newfiletitle');
                    sessionStorage.removeItem('newfileExt');
                }
            });
            setTimeout(() => {
                this.loading2 = false;
            }, 10000);
        });
    }
    /**
     * New file data
     * @param id
     */
    getCreatedfile(id, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const res = yield this.fileRepository.getFileById(id);
            const res2 = yield this.fileRepository.getFileDetails(id);
            if (res) {
                // this.data = res.body;
                setTimeout(() => {
                    this.loading2 = false;
                }, 100);
                sessionStorage.setItem('id', id);
                this.fileId = id;
                this.saveCurrentLine(position);
                this.fileRepository.getfileMetadata();
            }
            if (res2) {
                this.isHtml = res2.result.fileExtension;
                this.languageType(this.isHtml, position);
            }
        });
    }
    /**
     * save google drive file data
     */
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            setTimeout(() => {
                this.generateShortlink();
            }, 3000);
            yield this.fileRepository.getfileNewtitle('checkTitle');
            if (!this.isSave) {
                return;
            }
            let position = this.editor.getPosition();
            if (position) {
                setTimeout(() => {
                    this.loading2 = true;
                }, 200);
                if (!this.isLoggedIn) {
                    this.snackBar.open('User signin required', '', { duration: 3000, verticalPosition: 'bottom' });
                    return;
                }
                if (!this.fileId) { // If creating new file
                    this.createNewTextFile(position);
                    this.getfilesaveTime();
                    return;
                }
                else {
                    this.editor.setPosition({ column: position.column, lineNumber: position.lineNumber });
                    this.editor.focus();
                    yield this.fileRepository.getfileNewtitle('update');
                }
                const TYPES = ['html', 'css', 'php', 'md', 'txt', 'java', 'class', 'c', 'py', 'cpp', 'cs', 'vb', 'js', 'sql', 'r'];
                if (TYPES.includes(this.isHtml)) {
                    let decodeHtml = this.decodeEntities(this.data);
                    const data = yield this.fileRepository.saveGoogleFile(this.fileId, decodeHtml);
                    setTimeout(() => {
                        this.loading2 = false;
                    }, 1000);
                }
                else {
                    const data = yield this.fileRepository.saveGoogleExportFile(this.fileId, this.data);
                    setTimeout(() => {
                        this.loading2 = false;
                    }, 1000);
                }
                this.saveCurrentLine(position);
                this.getfilesaveTime();
            }
        });
    }
    /** get file save time */
    getfilesaveTime() {
        this.usersaveTime = '';
        let d = new Date();
        let n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
        this.fileSaveTime = 'Saved ' + n;
        this.color = '#808080';
        setTimeout(() => {
            this.usersaveTime = 'saveTime';
        }, 100);
    }
    getfileLineNumber(data) {
        this.usersaveTime = '';
        this.fileSaveTime = 'Loaded (#' + data + ')';
        this.color = '#808080';
        setTimeout(() => {
            this.usersaveTime = 'saveTime';
        }, 100);
    }
    gettingFileBookmark() {
        this.fileRepository.getBookmark(this.fileId).subscribe((res) => {
            if (res.data.Items && res.data.Items.length > 0) {
                setTimeout(() => {
                    let decorations = {};
                    res.data.Items.forEach(item => {
                        let line = parseInt(item.LineNo);
                        this.bookmarksLIne.push(line);
                        var decor = this.editor.deltaDecorations([], [{ range: new monaco.Range(line, 1, line, 1), options: { isWholeLine: true, linesDecorationsClassName: 'bookmarkDecoration' } },]);
                        var name = 'decor-' + line;
                        decorations[name] = decor;
                    });
                    localStorage.setItem('bookmarks', JSON.stringify(decorations));
                    this.bookmarksLIne.sort(function (a, b) { return a - b; });
                }, 100);
            }
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.openModal();
            /**
            * Auto save drive file
            */
            this.loading = true;
            setInterval(() => {
                this.callOnInterval();
            }, 300000);
            this.generateShortlink();
            if (this.aroute.snapshot.queryParams.state) {
                const param = this.aroute.snapshot.queryParams.state;
                let paramdata = JSON.parse(param);
                let fileid = sessionStorage.getItem('id');
                if (!paramdata.folderId && !fileid) {
                    sessionStorage.setItem('fileData', param);
                    sessionStorage.removeItem('id');
                }
                else {
                    sessionStorage.setItem('fileData', param);
                    sessionStorage.removeItem('id');
                }
            }
            if (!this.isLoggedIn) {
                setTimeout(() => {
                    this.loading = false;
                }, 1000);
                return;
            }
            let strorage = sessionStorage.getItem('fileData');
            let strorageid = sessionStorage.getItem('id');
            if (strorageid) {
                const res = yield this.fileRepository.getFileById(strorageid);
                const res2 = yield this.fileRepository.getFileDetails(strorageid);
                if (res) {
                    this.fileId = strorageid;
                    this.editorLineInfo.fileId = this.fileId;
                    this.data = res.body;
                    setTimeout(() => {
                        this.loading = false;
                    }, 1000);
                }
                if (res2) {
                    this.isHtml = res2.result.fileExtension;
                    this.languageType(this.isHtml, null);
                }
            }
            if (strorage) {
                const param = JSON.parse(strorage);
                /**
                 * Api for get text document
                 * Content
                 */
                if (param.exportIds) {
                    this.isHtml = 'null';
                    this.fileId = param.exportIds[0];
                    this.editorLineInfo.fileId = this.fileId;
                    const res = yield this.fileRepository.getFileByExportId(param.exportIds[0]);
                    if (res) {
                        this.data = res.body;
                    }
                }
                /**
                 * Api for get Other docs
                 * Content
                 */
                if (param.ids) {
                    this.fileId = param.ids[0];
                    this.editorLineInfo.fileId = this.fileId;
                    const res = yield this.fileRepository.getFileById(param.ids[0]);
                    if (res) {
                        this.data = res.body;
                        setTimeout(() => {
                            this.loading = false;
                        }, 1000);
                    }
                    /**
                     * Api for check Document type
                     */
                    const details = yield this.fileRepository.getFileDetails(param.ids[0]);
                    if (details.result) {
                        if (details.result.name) {
                            let hascheckType = details.result.name.split(".");
                            let hasMatch = hascheckType[hascheckType.length - 1];
                            if (hasMatch) {
                                this.isHtml = hasMatch;
                                this.languageType(this.isHtml, null);
                            }
                        }
                    }
                }
                if (param.folderId) {
                    if (strorageid) {
                        const res = yield this.fileRepository.getFileById(strorageid);
                        const res2 = yield this.fileRepository.getFileDetails(strorageid);
                        if (res) {
                            this.fileId = strorageid;
                            this.editorLineInfo.fileId = this.fileId;
                            this.data = res.body;
                        }
                        if (res2) {
                            this.isHtml = res2.result.fileExtension;
                            this.languageType(this.isHtml, null);
                        }
                    }
                    else {
                        sessionStorage.setItem('parentid', param.folderId);
                    }
                }
            }
            /** Check current line of editor */
            this.fileRepository.getCurrentLIne(this.editorLineInfo).subscribe((res) => {
                if (res.data.error) {
                    this.editorLineInfo.lineNumber = 1;
                }
                else {
                    this.editorLineInfo.lineNumber = parseInt(res.data.LineNo);
                    this.getfileLineNumber(res.data.LineNo);
                }
                if (res.data.LineNo != null && res.data.LineNo != '') {
                    setTimeout(() => {
                        let linenumbers = document.getElementsByClassName('line-numbers');
                        let currentLineDiv = linenumbers[parseInt(res.data.LineNo) - 1];
                        if (currentLineDiv) {
                            currentLineDiv.parentElement.classList.add("currentLineDecoration");
                        }
                        localStorage.setItem('currentLine', res.data.LineNo);
                        this.editor.setPosition({ column: this.editorLineInfo.column, lineNumber: this.editorLineInfo.lineNumber });
                        this.editor.focus();
                    }, 1000);
                }
            });
            this.gettingFileBookmark();
            /** Get font size for current user */
            this.fileRepository.getFontSize(this.editorLineInfo.userId).subscribe((res) => {
                if (!res.data.error) {
                    const newEditorOptions = {
                        fontSize: parseInt(res.data.FontSize),
                    };
                    this.editorOptions = Object.assign({}, this.editorOptions, newEditorOptions);
                }
            });
            /** Get theme for current user */
            this.fileRepository.getTheme(this.editorLineInfo.userId).subscribe((res) => {
                if (!res.data.error) {
                    const toolbar = document.getElementsByClassName('mat-toolbar')[0];
                    if (res.data.Theme === 'vs-dark') {
                        this.thememode = false;
                        toolbar.classList.add("proper");
                    }
                    else {
                        this.thememode = true;
                        toolbar.classList.remove("proper");
                    }
                    const newEditorOptions = {
                        theme: res.data.Theme,
                    };
                    this.editorOptions = Object.assign({}, this.editorOptions, newEditorOptions);
                }
            });
            setTimeout(() => {
                this.loading = false;
            }, 3000);
            /**
             * Focus on Editor *********************************
             */
            this.fileRepository.movetoNotepad.subscribe((res) => {
                this.save();
            });
            this.fileRepository.getFileTitle.subscribe((res) => {
                if (res === 'Focus') {
                    let position = this.editor.getPosition();
                    setTimeout(() => {
                        this.editor.setPosition({ column: position.column, lineNumber: position.lineNumber });
                        this.editor.focus();
                    }, 200);
                }
            });
            this.fileRepository.checkFileTitle.subscribe((res) => {
                this.isSave = true;
            });
            this.fileRepository.getfileExt.subscribe((res) => {
                let isHtmlExt = res.replace(".", "");
                if (this.isHtml !== isHtmlExt) {
                    this.isHtml = isHtmlExt;
                    this.languageType(this.isHtml, null);
                }
            });
        });
    }
    /**
     * Set language type for editor
     * @param ext
     */
    languageType(ext, position) {
        let editorOption = { language: 'text/html' };
        if (ext === 'css') {
            editorOption = { language: 'text/css' };
        }
        else if (ext === 'js') {
            editorOption = { language: 'text/javascript' };
        }
        else if (ext === 'php') {
            editorOption = { language: 'php' };
        }
        else if (ext === 'java') {
            editorOption = { language: 'java' };
        }
        else if (ext === 'md') {
            editorOption = { language: 'markdown' };
        }
        else if (ext === 'sql') {
            editorOption = { language: 'sql' };
        }
        else if (ext === 'r') {
            editorOption = { language: 'r' };
        }
        else if (ext === 'vb') {
            editorOption = { language: 'vb' };
        }
        else if (ext === 'cs') {
            editorOption = { language: 'text/x-c' };
        }
        else if (ext === 'c') {
            editorOption = { language: 'c' };
        }
        else if (ext === 'cpp') {
            editorOption = { language: 'cpp' };
        }
        else if (ext === 'py') {
            editorOption = { language: 'python' };
        }
        else if (ext === 'class') {
            editorOption = { language: 'class' };
        }
        else if (ext === 'txt') {
            editorOption = { language: 'text/plain' };
        }
        this.editorOptions = Object.assign({}, this.editorOptions, editorOption);
        if (position) {
            setTimeout(() => {
                this.editor.setPosition({ column: position.column, lineNumber: position.lineNumber });
                this.editor.focus();
            }, 200);
        }
    }
    /***
   * Decode html entities
   */
    decodeEntities(str) {
        const element = document.createElement('div');
        if (str && typeof str === 'string') {
            str = str.replace(/<\s*\/?br\s*[\/]?>/gi, '\n');
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
            element.innerHTML = str;
            str = element.textContent;
            element.textContent = '';
        }
        return str;
    }
    home() {
        this.homeSelected = true;
        this.extraSelected = false;
        this.listenSelected = false;
    }
    extra() {
        this.homeSelected = false;
        this.extraSelected = true;
        this.listenSelected = false;
    }
    listen() {
        this.homeSelected = false;
        this.extraSelected = false;
        this.listenSelected = true;
    }
    openModal() {
        const dialogRef = this.dialog.open(_books_modal_books_modal_component__WEBPACK_IMPORTED_MODULE_1__["BooksModalComponent"], {
            // height: '90%',
            // width: '70%',
            panelClass: 'my-dialog',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    openDialog() {
        if (!this.shortlink || this.shortlink == '') {
            alert('Please save the document before generating URL');
            return false;
        }
        const dialogData = {
            title: 'Here is your link',
            link: this.shortlink.shorturl,
            showOKBtn: true,
            showCancelBtn: true
        };
        const dialogRef = this.dialogService.openDialog(dialogData, { disableClose: true });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log('User clicked OK');
            }
            else {
                console.log('User clicked Cancel');
            }
        });
    }
    mapLineToPageNumber(lineNumber) {
        let lengthTillPosition = 0;
        const lines = this.editor.getModel().getLinesContent();
        for (let idx = 0; idx < lines.length; idx++) {
            if (idx <= lineNumber) {
                lengthTillPosition += lines[idx].length;
            }
            else {
                break;
            }
        }
        return Math.ceil(lengthTillPosition / 1024);
    }
    onEpubReady() {
        this.epubViewer.setFont(`${this.editorOptions.fontSize}px`);
    }
    onEpubClose({ page, searchText, bookmarks }) {
        setTimeout(() => {
            let lengthTillPosition = 0, lineNumber = 1;
            const lines = this.editor.getModel().getLinesContent();
            for (let idx = 0; idx < lines.length; idx++) {
                if (lengthTillPosition < (page - 1) * 1024) {
                    lengthTillPosition += lines[idx].length;
                }
                else {
                    lineNumber = idx + 1;
                    break;
                }
            }
            if (searchText) {
                const matches = this.editor.getModel().findMatches(searchText);
                if (matches.length > 0) {
                    lineNumber = matches.map(m => m.range.startLineNumber).reduce((prev, curr) => {
                        return (Math.abs(curr - lineNumber) < Math.abs(prev - lineNumber) ? curr : prev);
                    });
                }
            }
            bookmarks.map(bm => {
                const matches = this.editor.getModel().findMatches(bm);
                if (matches.length > 0) {
                    lineNumber = matches.map(m => m.range.startLineNumber).reduce((prev, curr) => {
                        return (Math.abs(curr - lineNumber) < Math.abs(prev - lineNumber) ? curr : prev);
                    });
                    this.fileRepository.postBookmark(lineNumber, this.fileId).subscribe(() => {
                        this.gettingFileBookmark();
                    });
                }
            });
            this.editor.focus();
            this.editor.setPosition({ column: 1, lineNumber });
            this.gettingFileBookmark();
            this.editor.revealRangeAtTop({ startColumn: 1, startLineNumber: lineNumber, endColumn: 1, endLineNumber: lineNumber });
        }, 200);
    }
    switchMode() {
        this.epubMode = !this.epubMode;
        if (this.epubMode) {
            const { lineNumber } = this.editor.getPosition();
            const decorators = [];
            let lengthTillPosition = 0;
            const lines = this.editor.getModel().getLinesContent();
            lines.map((line, idx) => {
                const tokens = this.editor.getModel().getLineTokens(idx + 1);
                if (tokens._tokens[1] === Token) {
                    decorators.push(idx);
                }
                if (idx <= lineNumber) {
                    lengthTillPosition += line.length;
                }
            });
            this.fileRepository.getBookmark(this.fileId).subscribe((res) => {
                const bookmarks = [];
                if (res.data.Items && res.data.Items.length > 0) {
                    res.data.Items.map(item => {
                        let line = parseInt(item.LineNo);
                        if (!bookmarks.find(bm => bm.lineNumber === line - 1)) {
                            bookmarks.push({
                                lineNumber: line,
                                lineContent: lines[line - 1]
                            });
                        }
                    });
                }
                this.epubService.generate(this.titleService.getTitle(), this.data, decorators, bookmarks, Math.ceil(lengthTillPosition / 1024), lines[lineNumber]);
            });
        }
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["Title"] },
    { type: _shared_services_epub_service__WEBPACK_IMPORTED_MODULE_13__["EpubService"] },
    { type: _infrastructure_repositories_file_repository__WEBPACK_IMPORTED_MODULE_4__["FileRepository"] },
    { type: src_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_6__["GapiSession"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] },
    { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('epubViewer', { static: false })
], DashboardComponent.prototype, "epubViewer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('document:keydown', ['$event'])
], DashboardComponent.prototype, "handleKeyboardEvent", null);
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/private-policy/private-policy.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/private-policy/private-policy.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUtcG9saWN5L3ByaXZhdGUtcG9saWN5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/private-policy/private-policy.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/private-policy/private-policy.component.ts ***!
  \******************************************************************/
/*! exports provided: PrivatePolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivatePolicyComponent", function() { return PrivatePolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrivatePolicyComponent = class PrivatePolicyComponent {
    constructor() { }
    ngOnInit() {
    }
};
PrivatePolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-private-policy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./private-policy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private-policy/private-policy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./private-policy.component.scss */ "./src/app/pages/private-policy/private-policy.component.scss")).default]
    })
], PrivatePolicyComponent);



/***/ }),

/***/ "./src/app/pages/proper/proper.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/proper/proper.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3Blci9wcm9wZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/proper/proper.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/proper/proper.component.ts ***!
  \**************************************************/
/*! exports provided: ProperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProperComponent", function() { return ProperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProperComponent = class ProperComponent {
    constructor() { }
    // TODO: Implementation of PROPER version
    ngOnInit() {
    }
};
ProperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-proper',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./proper.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/proper/proper.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./proper.component.scss */ "./src/app/pages/proper/proper.component.scss")).default]
    })
], ProperComponent);



/***/ }),

/***/ "./src/app/pages/terms/terms.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/terms/terms.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/terms/terms.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/terms/terms.component.ts ***!
  \************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TermsComponent = class TermsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./terms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms/terms.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./terms.component.scss */ "./src/app/pages/terms/terms.component.scss")).default]
    })
], TermsComponent);



/***/ }),

/***/ "./src/app/pages/test/test.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/test/test.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/test/test.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/test/test.component.ts ***!
  \**********************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let TestComponent = class TestComponent {
    constructor(http) {
        this.http = http;
        this.FileId = '';
        this.UserId = '';
        this.LineNo = '';
    }
    ngOnInit() {
    }
    PostCurrentLineTable(event) {
        this.http.post('http://quickpad.io:3000/postCurrentLineTable', {
            "FileId": this.FileId,
            "UserId": this.UserId,
            "LineNo": this.LineNo
        }).subscribe(data => {
            console.log(data.json());
        }, error => {
            console.log("Oooops!");
        });
    }
    changeFildId(event) {
        this.FileId = event;
    }
    changeUserId(event) {
        this.UserId = event;
    }
    changeLineNo(event) {
        this.LineNo = event;
    }
};
TestComponent.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test.component.scss */ "./src/app/pages/test/test.component.scss")).default]
    })
], TestComponent);



/***/ }),

/***/ "./src/app/services/dialog.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");




let DialogService = class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(data, additionalDialogConfigData) {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
        this.dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], Object.assign({ width: '500px', data }, additionalDialogConfigData));
        this.dialogRef.afterClosed().subscribe(result => {
        });
        return this.dialogRef;
    }
};
DialogService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DialogService);



/***/ }),

/***/ "./src/app/shared/dialog-data.ts":
/*!***************************************!*\
  !*** ./src/app/shared/dialog-data.ts ***!
  \***************************************/
/*! exports provided: DialogData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogData", function() { return DialogData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DialogData {
    constructor() {
        this.showOKBtn = false;
        this.showCancelBtn = false;
    }
}


/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fill-remaining-space {\n  flex: 1 1 auto;\n}\n\nmat-toolbar {\n  background: #fff;\n  color: #29272d;\n}\n\nmat-toolbar img {\n  cursor: pointer;\n}\n\nmat-toolbar .userName {\n  background-color: #77909b;\n  position: absolute;\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  border: none;\n  color: #fff;\n  font-size: 16px;\n  line-height: 35px;\n  cursor: pointer;\n  right: 20px;\n  top: 14px;\n}\n\nmat-toolbar .driveLink {\n  background-color: transparent;\n  border: none;\n  margin-right: 15px;\n}\n\nmat-toolbar .driveLink img {\n  max-width: 35px;\n  position: relative;\n  top: 4px;\n  cursor: pointer;\n}\n\nmat-toolbar.proper {\n  background: #2e2a58;\n  color: #fff;\n}\n\nimg.avatar {\n  height: 24px;\n  border-radius: 50%;\n  background: #fff;\n}\n\n.proper .appTitle span {\n  color: #ccc;\n}\n\n.appTitle {\n  line-height: 20px;\n}\n\n.appTitle p.appName {\n  font-family: OpenSans-SemiBold !important;\n  font-size: 20px;\n  cursor: pointer;\n  display: inline;\n}\n\n.appTitle .title {\n  font-size: 14px;\n  color: #404040;\n  display: inline;\n}\n\n.appTitle .title .ext {\n  background-color: #1a73e8;\n  text-transform: uppercase;\n  color: #fff;\n  padding: 2px 5px;\n  margin-left: 6px;\n  border-radius: 4px;\n  font-size: 13px;\n  position: relative;\n  top: -1px;\n}\n\n.withSpace {\n  padding-right: 8px;\n}\n\n#hide {\n  position: absolute;\n  height: 0;\n  overflow: hidden;\n  white-space: pre;\n}\n\n.authPopup {\n  position: fixed;\n  background: rgba(232, 232, 232, 0.7);\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 999;\n}\n\n.authPopup .contentBtn {\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  background-color: #FFFFFF;\n  width: 285px;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 40%;\n  padding: 20px;\n}\n\n.authPopup .contentBtn .title {\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n}\n\n.authPopup .contentBtn .title img {\n  width: 18px;\n  margin-right: 10px;\n}\n\n.authPopup .contentBtn .title span {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.authPopup .contentBtn .content {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 40px;\n}\n\n.authPopup .contentBtn .content span {\n  font-size: 14px;\n}\n\n.authPopup .contentBtn .content span:nth-child(3) {\n  margin-bottom: 20px;\n}\n\n.authPopup .contentBtn .buttons {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.authPopup .contentBtn .buttons button {\n  background: #ffffff;\n  border: none;\n  outline: none;\n}\n\n.authPopup .contentBtn .buttons button:hover {\n  cursor: pointer;\n  color: #9a3264;\n}\n\n.authPopup .contentBtn .buttons button:first-child {\n  margin-right: 30px;\n}\n\n.test {\n  margin: 25px 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  background-size: 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(white, white), linear-gradient(30deg, #ec3e2a 100%, lightgrey 30%), linear-gradient(120deg, #4280ef 100%, lightgrey 30%), linear-gradient(300deg, #f7ba37 100%, lightgrey 30%), linear-gradient(210deg, #31a253 100%, lightgrey 30%);\n  background-position: center center, left top, right top, left bottom, right bottom;\n  background-origin: content-box, border-box, border-box, border-box, border-box;\n  background-clip: content-box, border-box, border-box, border-box, border-box;\n  transform: rotate(10deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2N1b25nL3dvcmtzcGFjZS91cHdvcmsvcXVpY2twYWQvc3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FEQ0E7RUFJRSxnQkFBQTtFQUNBLGNBQUE7QUNERjs7QURIRTtFQUNFLGVBQUE7QUNLSjs7QURERTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNHSjs7QURERTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDR0o7O0FERkk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0lOOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREVJO0VBQ0UsV0FBQTtBQ0NOOztBREdBO0VBQ0UsaUJBQUE7QUNBRjs7QURDRTtFQUNFLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURBSTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0VOOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0FDQUY7O0FEQ0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QUNBSjs7QURDSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ047O0FEQU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNFUjs7QURBTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0VSOztBRENJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDTjs7QURBTTtFQUNFLGVBQUE7QUNFUjs7QUREUTtFQUNFLG1CQUFBO0FDR1Y7O0FESUk7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNGTjs7QURHTTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNEUjs7QURFUTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQVY7O0FERVE7RUFDRSxrQkFBQTtBQ0FWOztBRFNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhEQUFBO0VBQ0EsNEJBQUE7RUFDQSxzUUFBQTtFQUNBLGtGQUFBO0VBQ0EsOEVBQUE7RUFDQSw0RUFBQTtFQUNBLHdCQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxubWF0LXRvb2xiYXIge1xuICBpbWd7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMjkyNzJkO1xuICAudXNlck5hbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NzkwOWI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiAxNHB4O1xuICB9XG4gIC5kcml2ZUxpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMzVweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG5tYXQtdG9vbGJhci5wcm9wZXIge1xuICBiYWNrZ3JvdW5kOiAjMmUyYTU4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW1nLmF2YXRhciB7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnByb3BlciB7XG4gIC5hcHBUaXRsZSB7XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogI2NjYztcbiAgICB9XG4gIH1cbn1cbi5hcHBUaXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBwLmFwcE5hbWV7XG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zLVNlbWlCb2xkICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM0MDQwNDA7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIC5leHQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNzNlODtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAtMXB4O1xuICAgIH1cbiAgfVxufVxuXG4ud2l0aFNwYWNlIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4jaGlkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xufVxuXG4uYXV0aFBvcHVwe1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6cmdiYSgyMzIsIDIzMiwgMjMyLCAwLjcpO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgLmNvbnRlbnRCdG57XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGO1xuICAgIC8vYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgICB3aWR0aDogMjg1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLnRpdGxle1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaW1ne1xuICAgICAgICB3aWR0aDoxOHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgICBzcGFue1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgICAuY29udGVudHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgJjpudGgtY2hpbGQoMyl7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGR7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYnV0dG9uc3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgYnV0dG9ue1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGNvbG9yOiAjOWEzMjY0XG4gICAgICAgIH1cbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxke1xuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi50ZXN0IHtcbiAgbWFyZ2luOiAyNXB4IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlLCA1MCUgNTAlLCA1MCUgNTAlLCA1MCUgNTAlLCA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKSwgbGluZWFyLWdyYWRpZW50KDMwZGVnLCAjZWMzZTJhIDEwMCUsIGxpZ2h0Z3JleSAzMCUpLCBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjNDI4MGVmIDEwMCUsIGxpZ2h0Z3JleSAzMCUpLCBsaW5lYXItZ3JhZGllbnQoMzAwZGVnLCAjZjdiYTM3IDEwMCUsIGxpZ2h0Z3JleSAzMCUpLCBsaW5lYXItZ3JhZGllbnQoMjEwZGVnLCAjMzFhMjUzIDEwMCUsIGxpZ2h0Z3JleSAzMCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBsZWZ0IGJvdHRvbSwgcmlnaHQgYm90dG9tO1xuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3gsIGJvcmRlci1ib3gsIGJvcmRlci1ib3gsIGJvcmRlci1ib3gsIGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3gsIGJvcmRlci1ib3gsIGJvcmRlci1ib3gsIGJvcmRlci1ib3gsIGJvcmRlci1ib3g7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbn1cbiIsIi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMjkyNzJkO1xufVxubWF0LXRvb2xiYXIgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWF0LXRvb2xiYXIgLnVzZXJOYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3OTA5YjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTRweDtcbn1cbm1hdC10b29sYmFyIC5kcml2ZUxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5tYXQtdG9vbGJhciAuZHJpdmVMaW5rIGltZyB7XG4gIG1heC13aWR0aDogMzVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYXQtdG9vbGJhci5wcm9wZXIge1xuICBiYWNrZ3JvdW5kOiAjMmUyYTU4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW1nLmF2YXRhciB7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ucHJvcGVyIC5hcHBUaXRsZSBzcGFuIHtcbiAgY29sb3I6ICNjY2M7XG59XG5cbi5hcHBUaXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLmFwcFRpdGxlIHAuYXBwTmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBPcGVuU2Fucy1TZW1pQm9sZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmFwcFRpdGxlIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0MDQwNDA7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5hcHBUaXRsZSAudGl0bGUgLmV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTczZTg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xcHg7XG59XG5cbi53aXRoU3BhY2Uge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbiNoaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG59XG5cbi5hdXRoUG9wdXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMyLCAyMzIsIDIzMiwgMC43KTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk7XG59XG4uYXV0aFBvcHVwIC5jb250ZW50QnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgd2lkdGg6IDI4NXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNDAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmF1dGhQb3B1cCAuY29udGVudEJ0biAudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmF1dGhQb3B1cCAuY29udGVudEJ0biAudGl0bGUgaW1nIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5hdXRoUG9wdXAgLmNvbnRlbnRCdG4gLnRpdGxlIHNwYW4ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmF1dGhQb3B1cCAuY29udGVudEJ0biAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uYXV0aFBvcHVwIC5jb250ZW50QnRuIC5jb250ZW50IHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYXV0aFBvcHVwIC5jb250ZW50QnRuIC5jb250ZW50IHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5hdXRoUG9wdXAgLmNvbnRlbnRCdG4gLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmF1dGhQb3B1cCAuY29udGVudEJ0biAuYnV0dG9ucyBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYXV0aFBvcHVwIC5jb250ZW50QnRuIC5idXR0b25zIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM5YTMyNjQ7XG59XG4uYXV0aFBvcHVwIC5jb250ZW50QnRuIC5idXR0b25zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbi50ZXN0IHtcbiAgbWFyZ2luOiAyNXB4IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlLCA1MCUgNTAlLCA1MCUgNTAlLCA1MCUgNTAlLCA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKSwgbGluZWFyLWdyYWRpZW50KDMwZGVnLCAjZWMzZTJhIDEwMCUsIGxpZ2h0Z3JleSAzMCUpLCBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjNDI4MGVmIDEwMCUsIGxpZ2h0Z3JleSAzMCUpLCBsaW5lYXItZ3JhZGllbnQoMzAwZGVnLCAjZjdiYTM3IDEwMCUsIGxpZ2h0Z3JleSAzMCUpLCBsaW5lYXItZ3JhZGllbnQoMjEwZGVnLCAjMzFhMjUzIDEwMCUsIGxpZ2h0Z3JleSAzMCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBsZWZ0IGJvdHRvbSwgcmlnaHQgYm90dG9tO1xuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3gsIGJvcmRlci1ib3gsIGJvcmRlci1ib3gsIGJvcmRlci1ib3gsIGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3gsIGJvcmRlci1ib3gsIGJvcmRlci1ib3gsIGJvcmRlci1ib3gsIGJvcmRlci1ib3g7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var src_infrastructure_repositories_file_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/infrastructure/repositories/file.repository */ "./src/infrastructure/repositories/file.repository.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_infrastructure_sessions_breadcrumb_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/infrastructure/sessions/breadcrumb.session */ "./src/infrastructure/sessions/breadcrumb.session.ts");
/* harmony import */ var ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-keyboard-shortcuts */ "./node_modules/ng-keyboard-shortcuts/fesm2015/ng-keyboard-shortcuts.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");









let HeaderComponent = class HeaderComponent {
    constructor(titleService, gapiSession, fileRepository, aroute, BreadCrumbSession, router, renderer, _snackBar, cdRef) {
        this.titleService = titleService;
        this.gapiSession = gapiSession;
        this.fileRepository = fileRepository;
        this.aroute = aroute;
        this.BreadCrumbSession = BreadCrumbSession;
        this.router = router;
        this.renderer = renderer;
        this._snackBar = _snackBar;
        this.cdRef = cdRef;
        this.title = 'Untitled';
        this.title1 = 'Untitled';
        this.fileType = '.txt';
        this.fileType1 = '.txt';
        this.listfiles = null;
        this.menuToggele = false;
        this.projectTitle = '';
        this.loaderNew = false;
        this.loaderFile = false;
        this.modelFIleName = false;
        this.modelFIleExt = false;
        this.newfileTitle = '';
        this.pagehome = false;
        this.shortcuts = [];
        this.evalution = false;
        this.themeMode = false;
        this.authorise = false;
        this.attribute = 6;
        this.inputClass = false;
        if (this.router.url.includes('/editor')) {
            let data = localStorage.getItem('editor');
            if (data) {
                sessionStorage.clear();
                localStorage.removeItem('editor');
            }
        }
        else {
            this.title = '';
            this.fileType = '';
            this.pagehome = true;
            this.evalution = false;
        }
    }
    /**
     * Tab shortcode
     * for open folder list
     */
    tabshortCode() {
        if (this.modelFIleName) {
            this.modelFIleName = !this.modelFIleName;
            this.fileExt.nativeElement.dispatchEvent(new MouseEvent('click'));
        }
        else if (this.modelFIleExt) {
            this.modelFIleExt = !this.modelFIleExt;
            let element = document.getElementById('folderList');
            element.click();
        }
    }
    /**
     * Initialize the app once the view is loaded and configure editor
     * shortcuts commands and create metadata of file
     */
    ngAfterViewInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Set tab title on init
            setTimeout(() => {
                this.titleService.setTitle((document.getElementById("drivefileTitleId").innerText));
            }, 2000);
            let data = sessionStorage.getItem('fileData');
            this.shortcuts.push({
                key: "tab",
                preventDefault: true,
                allowIn: [ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__["AllowIn"].Textarea, ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__["AllowIn"].Input],
                command: e => this.tabshortCode()
            }, {
                key: "enter",
                preventDefault: false,
                allowIn: [ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__["AllowIn"].Textarea, ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__["AllowIn"].Input],
                command: e => this.moveToNotepad()
            }, {
                key: "ctrl + o",
                preventDefault: true,
                allowIn: [ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__["AllowIn"].Textarea, ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__["AllowIn"].Input],
                command: e => this.fileRepository.getFile()
            });
            if (!this.isLoggedIn) {
                this.authorise = true;
                this.cdRef.detectChanges();
            }
            this.fileRepository.createFileMeta.subscribe((res) => {
                this.getrootfiles();
                this.modelFIleName = false;
                this.modelFIleExt = false;
                this.menuToggele = false;
                this.listfiles = null;
                this.title = 'Untitled';
                this.fileType = 'txt';
                this.title1 = 'Untitled';
                this.fileType1 = 'txt';
                this.currentFile = '';
                this.filePath = '';
            });
            /**
             * Newly file details
             */
            let strorageid = sessionStorage.getItem('id');
            if (strorageid) {
                this.getDriveFiledetail(strorageid);
            }
        });
    }
    /**
     * Close Model
     */
    closeModel() {
        sessionStorage.removeItem('fileData');
        window.open('http://hi.quickpad.io', "_self");
    }
    /**
     * Get root folder and files of user google drive
     */
    getrootfiles() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.listfiles = yield this.fileRepository.getFiles('root');
            this.fileRepository.getFolderTitle('root').then((res) => {
                this.projectTitle = res;
            });
            this.parentId = 'root';
        });
    }
    /**
     * Show menu and list of files/folders in dropdown
     */
    showMenuList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.fileType1) {
                this.fileType = this.fileType1;
            }
            else {
                this.fileType1 = this.fileType;
            }
            if (this.title1) {
                this.title = this.title1;
            }
            else {
                this.title1 = this.title;
            }
            this.modelFIleName = false;
            this.modelFIleExt = false;
            this.loaderFile = true;
            this.menuToggele = true;
            this.fileRepository.getFolderTitle(this.parentId).then((res) => {
                this.projectTitle = res;
            });
            this.listfiles = yield this.fileRepository.getFiles(this.parentId);
            setTimeout(() => {
                this.loaderFile = false;
            }, 500);
        });
    }
    /**
     * Hide menu list and files
     */
    hideMenu() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.menuToggele = false;
            this.fileRepository.getFolderTitle(this.parentId).then((res) => {
                this.projectTitle = res;
            });
            this.listfiles = yield this.fileRepository.getFiles(this.parentId);
        });
    }
    /**
     * Setup google file link, which can be used to lookup in googledrive
     */
    drivefileUrl() {
        if (this.parentId) {
            window.open('https://drive.google.com/drive/folders/' + this.parentId, "_blank");
        }
        else {
            window.open('https://drive.google.com/drive/my-drive', "_blank");
        }
    }
    /**
     * Navigate to home page
     */
    homePage() {
        window.open('http://hi.quickpad.io', "_blank");
    }
    /*** Emit to notepad */
    moveToNotepad() {
        if (this.modelFIleName) {
            if (this.title1) {
                this.title = this.title1;
            }
            else {
                this.title1 = this.title;
            }
            this.modelFIleName = false;
            if (this.title == 'Untitled') {
                this.fileRepository.getfileNewtitle('Focus');
            }
            else {
                this.fileRepository.movecursorToNoTepad();
            }
        }
        if (this.modelFIleExt) {
            if (this.fileType1) {
                this.fileType = this.fileType1;
            }
            else {
                this.fileType1 = this.fileType;
            }
            this.modelFIleExt = false;
            if (this.title == 'Untitled') {
                this.fileRepository.getfileNewtitle('Focus');
            }
            else {
                this.fileRepository.movecursorToNoTepad();
            }
        }
    }
    /**
     * Change file title model show hide
     */
    changeFile(data) {
        this.menuToggele = false;
        this.modelFIleExt = false;
        this.inputClass = false;
        this.modelFIleName = !this.modelFIleName;
        setTimeout(() => {
            const inputElem = this.menu.nativeElement;
            inputElem.focus();
            inputElem.setSelectionRange(0, 99999);
            let hide = document.getElementById("hide");
            let txt = document.getElementById("txt");
            this.resize(hide, txt);
        }, 10);
    }
    /**
     * Set title of application
     * @param event
     */
    changeWidthTitle(event) {
        this.inputClass = true;
        let hide = document.getElementById("hide");
        let txt = document.getElementById("txt");
        this.resize(hide, txt);
        // Set tab title on change
        this.titleService.setTitle(document.getElementById("hide").innerText);
    }
    /**
     * Resize the file name textbox width
     * @param hide
     * @param txt
     */
    resize(hide, txt) {
        hide.textContent = txt.value;
        txt.style.width = hide.offsetWidth + "px";
    }
    /**
     * Change drive file extention
     */
    changeFileExt() {
        let width = this.fileExt.nativeElement.offsetWidth;
        if (this.title1) {
            this.title = this.title1;
        }
        else {
            this.title1 = this.title;
        }
        this.menuToggele = false;
        this.modelFIleName = false;
        this.modelFIleExt = !this.modelFIleExt;
        setTimeout(() => {
            const inputElem = this.ext.nativeElement;
            inputElem.select();
            this.renderer.setStyle(this.ext.nativeElement, 'width', `${width}px`);
        }, 100);
    }
    /**
     * Manage the file extension box width dynamically
     * @param event
     */
    changeWidthEtx(event) {
        if (event.length == 1 && event != '.') {
            this.fileType1 = '.' + event;
        }
        let data = this.fileType1.length;
        let width = data * 9;
        this.renderer.setStyle(this.ext.nativeElement, 'width', `${width}px`);
    }
    /**
     * Update file title
     * @param title
     * @param txt
     */
    changeFileTile(title, txt) {
        this.modelFIleName = !this.modelFIleName;
        let name = title + '.' + txt;
        if (this.currentFile) {
            this.fileRepository.updatefiletitle(name, this.currentFile).then((res) => {
                if (res) {
                    let hascheckType = res.name.split(".");
                    this.title = hascheckType[0];
                }
            });
        }
        else {
            sessionStorage.setItem('newfiletitle', name);
        }
    }
    /**
     * Get parent Folders
     * @param id
     */
    backToParent(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loaderFile = true;
            if (id) {
                this.listfiles = yield this.fileRepository.getFiles(id);
                this.fileRepository.getFolderTitle(id).then((res) => {
                    this.projectTitle = res;
                });
            }
            setTimeout(() => {
                this.loaderFile = false;
            }, 500);
        });
    }
    /**
     * Move google drive file to other folder
     * @param parentId
     */
    moveFile(parentId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.currentFile) {
                this.menuToggele = !this.menuToggele;
                this.loaderFile = true;
                this.parentId = parentId;
                this.fileRepository.moveDriveFile(parentId, this.currentFile).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.listfiles = yield this.fileRepository.getFiles(parentId);
                }));
                setTimeout(() => {
                    this.loaderFile = false;
                }, 500);
            }
            else {
                this.parentId = parentId;
                sessionStorage.setItem('parentid', parentId);
                this.menuToggele = !this.menuToggele;
            }
        });
    }
    /**
     * ngOnInit *******************************************************
     */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const MIMETYPES = ['html', 'css', 'php', 'md', 'txt', 'java', 'class', 'c', 'py', 'cpp', 'cs', 'vb', 'js', 'sql', 'r'];
            this.fileRepository.openFileFromDrive.subscribe((res) => {
                if (res.docs) {
                    let hascheckType = res.docs[0].name.split(".");
                    if (hascheckType[1] && MIMETYPES.includes(hascheckType[1])) {
                        let obj = { "ids": [res.docs[0].id] };
                        let params = JSON.stringify(obj);
                        this.router.navigate(['/editor'], { queryParams: { state: params } });
                        setTimeout(() => {
                            window.location.reload();
                        }, 500);
                    }
                    else {
                        this._snackBar.open('File format is not supported', '', { duration: 1500, verticalPosition: 'top', horizontalPosition: 'center' });
                    }
                }
            });
            this.fileRepository.onNotepad.subscribe((res) => {
                if (this.modelFIleName) {
                    if (this.title1) {
                        this.title = this.title1;
                    }
                    else {
                        this.title1 = this.title;
                    }
                }
                if (this.modelFIleExt) {
                    if (this.fileType1) {
                        this.fileType = this.fileType1;
                    }
                    else {
                        this.fileType1 = this.fileType;
                    }
                }
                this.modelFIleExt = false;
                this.modelFIleName = false;
                this.menuToggele = false;
            });
            this.isLoggedIn = this.gapiSession.isSignedIn;
            if (this.isLoggedIn) { // if user logged in
                this.user = this.gapiSession.googleAuth.currentUser.get().getBasicProfile();
                let strorage = sessionStorage.getItem('fileData');
                let strorageid = sessionStorage.getItem('id');
                if (strorage) {
                    const param = JSON.parse(strorage);
                    if (param.exportIds) {
                        const details = yield this.fileRepository.getFileDetails(param.exportIds[0]);
                        if (details.result) {
                            this.title = details.result.name;
                        }
                    }
                    if (param.ids) {
                        this.currentFile = param.ids;
                        const details = yield this.fileRepository.getFileDetails(param.ids[0]);
                        if (details.result) {
                            if (details.result.parents) {
                                this.parentId = details.result.parents[0];
                                this.filePath = details.result.parents[0];
                                this.fileRepository.getFolderTitle(details.result.parents[0]).then((res) => {
                                    this.projectTitle = res;
                                });
                                this.listfiles = yield this.fileRepository.getFiles(details.result.parents[0]);
                            }
                            let hascheckType = details.result.name.split(".");
                            this.title = hascheckType[0];
                            this.title1 = hascheckType[0];
                            let hasMatch = hascheckType[hascheckType.length - 1];
                            if (hasMatch) {
                                this.fileType = '.' + hasMatch;
                                this.fileType1 = '.' + hasMatch;
                            }
                        }
                    }
                    if (param.folderId) {
                        this.parentId = param.folderId;
                        this.filePath = param.folderId;
                        this.fileRepository.getFolderTitle(param.folderId).then((res) => {
                            this.projectTitle = res;
                        });
                        this.listfiles = yield this.fileRepository.getFiles(param.folderId);
                    }
                }
                if (strorageid) {
                    this.currentFile = strorageid;
                }
                if (!strorageid && !strorage) {
                    this.getrootfiles();
                    sessionStorage.removeItem('parentid');
                }
                this.fileRepository.getFileTitle.subscribe((res) => {
                    if (res == 'update') {
                        if (this.fileType1.length >= 2) {
                            this.fileType = this.fileType1;
                            this.modelFIleExt = false;
                        }
                        if (this.title1.length >= 1) {
                            this.title = this.title1;
                            this.modelFIleName = false;
                        }
                        this.fileRepository.currentExt(this.fileType);
                        this.fileRepository.updatefiletitle(this.title + this.fileType, this.currentFile).then((res) => {
                            if (res) {
                                this.modelFIleName = false;
                                let hascheckType = res.name.split(".");
                                this.title = hascheckType[0];
                                this.title1 = hascheckType[0];
                            }
                        });
                    }
                    if (res == 'new') {
                        this.loaderNew = true;
                        if (this.fileType1.length >= 2) {
                            this.fileType = this.fileType1;
                            this.modelFIleExt = false;
                        }
                        if (this.title1.length >= 1) {
                            this.title = this.title1;
                            this.modelFIleName = false;
                        }
                        this.modelFIleName = false;
                        sessionStorage.setItem('newfiletitle', this.title);
                        sessionStorage.setItem('newfileExt', this.fileType);
                    }
                    if (res == 'checkTitle') {
                        if (this.fileType1.length >= 2) {
                            this.fileType = this.fileType1;
                            this.modelFIleExt = false;
                        }
                        if (this.title1.length >= 1) {
                            this.title = this.title1;
                            this.modelFIleName = false;
                        }
                        this.modelFIleName = false;
                        if (this.title != 'Untitled') {
                            this.fileRepository.fileTitleStaus();
                        }
                        else {
                            setTimeout(() => {
                                this.filetitle.nativeElement.dispatchEvent(new MouseEvent('click'));
                            }, 100);
                        }
                    }
                });
                /*****************************************************    */
                this.fileRepository.getFileMeta.subscribe((res) => {
                    let strorageid = sessionStorage.getItem('id');
                    this.getDriveFiledetail(strorageid);
                    this.currentFile = strorageid;
                });
                this.fileRepository.changeThemeMode.subscribe((res) => {
                    this.themeMode = !this.themeMode;
                });
            }
            else {
                return;
            }
            if (this.aroute.snapshot.routeConfig.path == '') {
                this.title = '';
                this.fileType = '';
                this.title1 = '';
                this.fileType1 = '';
            }
        });
    }
    /**
     * New drive file details
     * @param data
     */
    getDriveFiledetail(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const details = yield this.fileRepository.getFileDetails(data);
            if (details.result) {
                this.parentId = details.result.parents[0];
                this.filePath = details.result.parents[0];
                this.fileRepository.getFolderTitle(details.result.parents[0]).then((res) => {
                    this.projectTitle = res;
                    this.loaderNew = false;
                });
                this.listfiles = yield this.fileRepository.getFiles(details.result.parents[0]);
                let hascheckType = details.result.name.split(".");
                this.title = hascheckType[0];
                this.title1 = hascheckType[0];
                // if (this.filetitle && this.title == 'Untitled') {
                //   setTimeout(() => {
                //     this.filetitle.nativeElement.dispatchEvent(new MouseEvent('click'));
                //   }, 100);
                // }
                let hasMatch = hascheckType[hascheckType.length - 1];
                if (hasMatch) {
                    this.fileType = '.' + hasMatch;
                    this.fileType1 = '.' + hasMatch;
                }
                this.loaderNew = false;
            }
        });
    }
    /**
     * Sign in with google api
     */
    login() {
        this.gapiSession.signIn().then(res => {
            location.assign('/editor');
        });
    }
    /**
     * Swicth account from one google account to another
     */
    switchAccount() {
        this.gapiSession.signIn().then(res => {
            localStorage.setItem('editor', 'new');
            sessionStorage.removeItem('parentid');
            sessionStorage.removeItem('newfiletitle');
            sessionStorage.removeItem('newfileExt');
            location.assign('/editor');
        });
    }
    /**
     * User logout
     */
    logout() {
        this.gapiSession.signOut();
        location.assign('/');
        sessionStorage.clear();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] },
    { type: _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_1__["GapiSession"] },
    { type: src_infrastructure_repositories_file_repository__WEBPACK_IMPORTED_MODULE_2__["FileRepository"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_infrastructure_sessions_breadcrumb_session__WEBPACK_IMPORTED_MODULE_5__["BreadCrumbSession"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('menu', { static: false })
], HeaderComponent.prototype, "menu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('filetitle', { static: false })
], HeaderComponent.prototype, "filetitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('ext', { static: false })
], HeaderComponent.prototype, "ext", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('fileExt', { static: false })
], HeaderComponent.prototype, "fileExt", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/services/epub.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/epub.service.ts ***!
  \*************************************************/
/*! exports provided: EpubStatus, EpubBookmark, EpubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpubStatus", function() { return EpubStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpubBookmark", function() { return EpubBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpubService", function() { return EpubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");




class EpubStatus {
}
class EpubBookmark {
}
let EpubService = class EpubService {
    constructor(http, socket) {
        this.http = http;
        this.socket = socket;
        this.epub = this.socket.fromEvent('epub');
        this.placeBookmarkEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    generate(title, content, decorators, bookmarkLines, page, lineContent) {
        this.socket.emit('generateEpub', { title, content, decorators, bookmarkLines, page, lineContent });
    }
    placeBookmark() {
        this.placeBookmarkEvent.emit();
    }
};
EpubService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] }
];
EpubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EpubService);



/***/ }),

/***/ "./src/app/shared/services/request/request.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/request/request.service.ts ***!
  \************************************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/config */ "./src/app/config/config.ts");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/helper */ "./src/app/shared/utils/helper.ts");





let RequestService = class RequestService {
    constructor(httpClient, config) {
        this.httpClient = httpClient;
        this.config = config;
    }
    makeUrl(url) {
        return this.config.getConfig('server') + url;
    }
    sendRequest(url, type, formData = {}) {
        const apiUrl = this.makeUrl(url);
        console.log(apiUrl);
        const params = Object(_utils_helper__WEBPACK_IMPORTED_MODULE_4__["makeParamsFromFormData"])(formData || {});
        switch (type.toLowerCase()) {
            case 'get':
                return this.httpClient.get(apiUrl, { params: params });
            case 'post':
                return this.httpClient.post(apiUrl, formData);
            case 'put':
                return this.httpClient.put(apiUrl, formData);
            case 'patch':
                return this.httpClient.patch(apiUrl, formData);
            case 'delete':
                return this.httpClient.delete(apiUrl, { params: params });
            case 'delete_with_body':
                const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                const httpOptions = {
                    headers: header,
                    body: formData
                };
                return this.httpClient.delete(apiUrl, httpOptions);
        }
    }
};
RequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_config_config__WEBPACK_IMPORTED_MODULE_3__["Config"] }
];
RequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RequestService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-keyboard-shortcuts */ "./node_modules/ng-keyboard-shortcuts/fesm2015/ng-keyboard-shortcuts.js");
/* harmony import */ var _viewer_epubViewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewer/epubViewer.component */ "./src/app/shared/viewer/epubViewer.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _viewer_progressBar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./viewer/progressBar.component */ "./src/app/shared/viewer/progressBar.component.ts");











let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _viewer_progressBar_component__WEBPACK_IMPORTED_MODULE_10__["ProgressBarComponent"],
            _viewer_epubViewer_component__WEBPACK_IMPORTED_MODULE_7__["EpubViewerComponent"]
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _viewer_progressBar_component__WEBPACK_IMPORTED_MODULE_10__["ProgressBarComponent"],
            _viewer_epubViewer_component__WEBPACK_IMPORTED_MODULE_7__["EpubViewerComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_6__["KeyboardShortcutsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["SocketIoModule"].forRoot({ url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].socketUrl}`, options: {} })
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/utils/helper.ts":
/*!****************************************!*\
  !*** ./src/app/shared/utils/helper.ts ***!
  \****************************************/
/*! exports provided: makeParamsFromFormData, unSubAllPrevious, isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeParamsFromFormData", function() { return makeParamsFromFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unSubAllPrevious", function() { return unSubAllPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


/**
 * Makes params from form data
 * @param formData
 * @returns
 */
function makeParamsFromFormData(formData) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
    if (Object.keys(formData).length) {
        Object.keys(formData).forEach((key) => {
            if (Array.isArray(formData[key])) {
                formData[key].forEach((k) => {
                    params = params.append(key + '[]', k);
                });
            }
            else {
                params = params.append(key, formData[key]);
            }
        });
    }
    return params;
}
function unSubAllPrevious(subscription) {
    if (subscription.length) {
        subscription.forEach((sub) => {
            sub.unsubscribe();
        });
    }
}
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        || ((window.innerWidth <= 800) && (window.innerHeight <= 900));
}


/***/ }),

/***/ "./src/app/shared/viewer/epubViewer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/viewer/epubViewer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#epubViewerComponent {\n  height: 100%;\n  margin: 0;\n}\n\n.arrow {\n  position: fixed;\n  top: 50%;\n  margin-top: -32px;\n  font-size: 64px;\n  color: #E2E2E2;\n  font-family: arial, sans-serif;\n  font-weight: bold;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  text-decoration: none;\n}\n\n.arrow:hover {\n  color: #777;\n}\n\n.arrow.prev {\n  left: 40px;\n}\n\n.arrow.next {\n  right: 40px;\n}\n\n.page {\n  position: fixed;\n  color: #777;\n  left: 50%;\n  bottom: 30px;\n}\n\n[ref=epubjs-mk]:before {\n  content: \"\";\n  background: url('bookmark.svg') no-repeat;\n  display: block;\n  right: 0;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  cursor: pointer;\n}\n\n.epub-container {\n  min-width: 320px;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden !important;\n}\n\n.epub-container .epub-view > iframe {\n  background: white;\n  box-shadow: 0 0 4px #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2N1b25nL3dvcmtzcGFjZS91cHdvcmsvcXVpY2twYWQvc3JjL2FwcC9zaGFyZWQvdmlld2VyL2VwdWJWaWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC92aWV3ZXIvZXB1YlZpZXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtNQUFBLGlCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURBRTtFQUNFLFdBQUE7QUNFSjs7QURBRTtFQUNFLFVBQUE7QUNFSjs7QURBRTtFQUNFLFdBQUE7QUNFSjs7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNDRjs7QURHRTtFQUNFLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQUo7O0FESUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdmlld2VyL2VwdWJWaWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZXB1YlZpZXdlckNvbXBvbmVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYXJyb3cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMzJweDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogI0UyRTJFMjtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxuICAmLnByZXYge1xuICAgIGxlZnQ6IDQwcHg7XG4gIH1cbiAgJi5uZXh0IHtcbiAgICByaWdodDogNDBweDtcbiAgfVxufVxuXG4ucGFnZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY29sb3I6ICM3Nzc7XG4gIGxlZnQ6IDUwJTtcbiAgYm90dG9tOiAzMHB4O1xufVxuXG5bcmVmPVwiZXB1YmpzLW1rXCJdIHtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9ib29rbWFyay5zdmdcIikgbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHJpZ2h0IDogMDtcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5lcHViLWNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW4haW1wb3J0YW50O1xufVxuXG4uZXB1Yi1jb250YWluZXIgLmVwdWItdmlldyA+IGlmcmFtZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDAgNHB4ICNjY2M7XG59XG4iLCIjZXB1YlZpZXdlckNvbXBvbmVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYXJyb3cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMzJweDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogI0UyRTJFMjtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmFycm93OmhvdmVyIHtcbiAgY29sb3I6ICM3Nzc7XG59XG4uYXJyb3cucHJldiB7XG4gIGxlZnQ6IDQwcHg7XG59XG4uYXJyb3cubmV4dCB7XG4gIHJpZ2h0OiA0MHB4O1xufVxuXG4ucGFnZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY29sb3I6ICM3Nzc7XG4gIGxlZnQ6IDUwJTtcbiAgYm90dG9tOiAzMHB4O1xufVxuXG5bcmVmPWVwdWJqcy1ta106YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9ib29rbWFyay5zdmdcIikgbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lcHViLWNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLmVwdWItY29udGFpbmVyIC5lcHViLXZpZXcgPiBpZnJhbWUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAjY2NjO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/viewer/epubViewer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/viewer/epubViewer.component.ts ***!
  \*******************************************************/
/*! exports provided: EpubViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpubViewerComponent", function() { return EpubViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_epub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/epub.service */ "./src/app/shared/services/epub.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/helper */ "./src/app/shared/utils/helper.ts");





let EpubViewerComponent = class EpubViewerComponent {
    constructor(zone, epubService) {
        this.zone = zone;
        this.epubService = epubService;
        this.epub = null;
        this.rendition = null;
        this.location = null;
        this.padding = null;
        this.onDocumentReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDocumentClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newBookmarks = [];
        this.isMobile = Object(_utils_helper__WEBPACK_IMPORTED_MODULE_4__["isMobile"])();
    }
    ngOnInit() {
        this.epubSub = this.epubService.epub.subscribe(eb => {
            this.zone.run(() => {
                if (eb.status === 'processing') {
                    this.status = eb.data.msg;
                    this.percentage = eb.data.percentage;
                }
                if (eb.status === 'success') {
                    this.initEpub(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fileInfoUrl}${eb.data.url}`, eb.data.page, eb.data.lineContent, eb.data.bookmarkLines);
                }
            });
        });
        this.placeBookmarkSub = this.epubService.placeBookmarkEvent.subscribe(() => {
            if (this.location) {
                const locationCfi = this.location.start.cfi;
                const text = this.rendition.getRange(locationCfi).startContainer.data;
                const spineItem = this.rendition.book.spine.get(locationCfi);
                spineItem.find(text).map(s => {
                    if (s.excerpt === text) {
                        this.rendition.annotations.mark(s.cfi);
                        if (!this.newBookmarks.includes(text)) {
                            this.newBookmarks.push(text);
                        }
                    }
                });
            }
        });
    }
    initEpub(link, page, lineContent, bookmarks) {
        this.epub = ePub(link);
        this.bookmarks = bookmarks;
        let options = {};
        if (!this.isMobile) {
            options = {
                width: "100%",
                height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 230,
                spread: "always"
            };
        }
        else {
            options = {
                width: "100%",
                manager: "continuous",
                flow: "scrolled"
            };
        }
        this.rendition = this.epub.renderTo('viewer', options);
        this.epub.ready.then(() => {
            this.status = "Pages computing....";
            return this.epub.locations.generate(1024);
        }).then(locations => {
            this.onDocumentReady.next();
            this.searchDone = false;
            this.nextSearch = false;
            this.totalPages = locations.length;
            this.status = "Rendering...";
            this.percentage = 75;
            if (this.totalPages > 1) {
                const cfi = this.epub.locations.cfiFromPercentage(page / this.totalPages);
                this.rendition.display(cfi);
            }
            else {
                this.rendition.display(1);
            }
        });
        this.rendition.on("layout", (layout) => {
            let viewer = document.getElementById("viewer");
            if (layout.spread) {
                viewer.classList.remove('single');
            }
            else {
                viewer.classList.add('single');
            }
        });
        this.rendition.on("rendered", () => {
        });
        this.rendition.on("selected", (cfiRange) => {
        });
        this.rendition.on("relocated", (location) => {
            this.location = location;
            const range = this.rendition.getRange(location.start.cfi);
            if (range) {
                this.searchText = this.rendition.getRange(location.start.cfi).startContainer.data;
            }
            if (!this.searchDone) {
                this.status = "Navigating...";
                this.percentage = 90;
                this.gotoPageByLineContent(lineContent);
            }
            this.placeBookmarks();
        });
    }
    makeRangeCfi(a, b) {
        const CFI = new ePub.CFI();
        const start = CFI.parse(a), end = CFI.parse(b);
        const cfi = {
            range: true,
            base: start.base,
            path: {
                steps: [],
                terminal: null
            },
            start: start.path,
            end: end.path
        };
        const len = cfi.start.steps.length;
        for (let i = 0; i < len; i++) {
            if (CFI.equalStep(cfi.start.steps[i], cfi.end.steps[i])) {
                if (i === len - 1) {
                    if (cfi.start.terminal === cfi.end.terminal) {
                        cfi.path.steps.push(cfi.start.steps[i]);
                        cfi.range = false;
                    }
                }
                else {
                    cfi.path.steps.push(cfi.start.steps[i]);
                }
            }
            else {
                break;
            }
        }
        cfi.start.steps = cfi.start.steps.slice(cfi.path.steps.length);
        cfi.end.steps = cfi.end.steps.slice(cfi.path.steps.length);
        return 'epubcfi(' + CFI.segmentString(cfi.base)
            + '!' + CFI.segmentString(cfi.path)
            + ',' + CFI.segmentString(cfi.start)
            + ',' + CFI.segmentString(cfi.end)
            + ')';
    }
    gotoPageByLineContent(searchContent) {
        const [a, b] = [this.location.start.cfi, this.location.end.cfi];
        const range = this.rendition.getRange(this.makeRangeCfi(a, b));
        if (range && range.toString().includes(searchContent)) {
            this.percentage = 100;
            this.searchDone = true;
        }
        else if (range && !this.nextSearch) {
            this.nextPage();
            this.nextSearch = true;
        }
        else {
            this.percentage = 100;
            this.searchDone = true;
        }
    }
    placeBookmarks() {
        if (this.location) {
            const locationCfi = this.location.start.cfi;
            const spineItem = this.rendition.book.spine.get(locationCfi);
            this.bookmarks.forEach(bm => {
                if (bm.lineContent) {
                    spineItem.find(bm.lineContent).map(s => {
                        let excerpt = s.excerpt;
                        if (excerpt.indexOf('...') === 0) {
                            excerpt = excerpt.substring(3);
                        }
                        if (excerpt.indexOf('...') === (excerpt.length - 3)) {
                            excerpt = excerpt.substring(0, excerpt.length - 3);
                        }
                        if (bm.lineContent.includes(excerpt)) {
                            this.rendition.annotations.mark(s.cfi);
                        }
                        else {
                            this.rendition.annotations.remove(s.cfi, 'mark');
                        }
                    });
                }
            });
        }
    }
    nextPage() {
        this.epub.package.metadata.direction === "rtl" ? this.rendition.prev() : this.rendition.next();
    }
    previousPage() {
        if (this.location.start.percentage > 0) {
            this.epub.package.metadata.direction === "rtl" ? this.rendition.next() : this.rendition.prev();
        }
    }
    setFont(font) {
        this.rendition.themes.fontSize(font);
    }
    ngOnDestroy() {
        this.epubSub.unsubscribe();
        this.placeBookmarkSub.unsubscribe();
        if (this.location) {
            this.onDocumentClose.next({ page: this.location.start.location, searchText: this.searchText, bookmarks: this.newBookmarks });
        }
        if (this.epub) {
            this.epub.destroy();
        }
    }
};
EpubViewerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _services_epub_service__WEBPACK_IMPORTED_MODULE_2__["EpubService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EpubViewerComponent.prototype, "padding", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onDocumentReady')
], EpubViewerComponent.prototype, "onDocumentReady", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onDocumentClose')
], EpubViewerComponent.prototype, "onDocumentClose", void 0);
EpubViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'epub-viewer',
        template: `<ng-container>
    <div id="viewer" [style.padding]="!isMobile ? padding : 0" #viewer></div>
    <a *ngIf="!isMobile" href="javascript:void(0)" class="arrow prev" (click)="previousPage()">‹</a>
    <a *ngIf="!isMobile" href="javascript:void(0)" class="arrow next" (click)="nextPage()">›</a>
    <span *ngIf="!isMobile" class="page">Page {{location?.start?.displayed?.page}}</span>
    <progress-bar *ngIf="percentage !== 100" [value]="percentage" [label]="status">
    </progress-bar>
  </ng-container>`,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./epubViewer.component.scss */ "./src/app/shared/viewer/epubViewer.component.scss")).default]
    })
], EpubViewerComponent);



/***/ }),

/***/ "./src/app/shared/viewer/progressBar.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/shared/viewer/progressBar.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2;\n  cursor: pointer;\n}\n\n.progress-bar-container {\n  position: fixed !important;\n  width: 400px;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.progress-bar-container .label {\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.progress-bar-container .section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.progress-bar-container .section .mat-progress-bar {\n  height: 30px;\n}\n\n.progress-bar-container .section .value {\n  position: absolute;\n  padding: 10px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2N1b25nL3dvcmtzcGFjZS91cHdvcmsvcXVpY2twYWQvc3JjL2FwcC9zaGFyZWQvdmlld2VyL3Byb2dyZXNzQmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvdmlld2VyL3Byb2dyZXNzQmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURESTtFQUNFLFlBQUE7QUNHTjs7QURESTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNHTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC92aWV3ZXIvcHJvZ3Jlc3NCYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG4gIHotaW5kZXg6IDI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2dyZXNzLWJhci1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQhaW1wb3J0YW50O1xuICB3aWR0aDogNDAwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAubGFiZWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgLm1hdC1wcm9ncmVzcy1iYXIge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAudmFsdWUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cbiIsIi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB3aWR0aDogNDAwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnByb2dyZXNzLWJhci1jb250YWluZXIgLmxhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciAuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLnByb2dyZXNzLWJhci1jb250YWluZXIgLnNlY3Rpb24gLm1hdC1wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDMwcHg7XG59XG4ucHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciAuc2VjdGlvbiAudmFsdWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/viewer/progressBar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/viewer/progressBar.component.ts ***!
  \********************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProgressBarComponent = class ProgressBarComponent {
    ngOnDestroy() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressBarComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProgressBarComponent.prototype, "value", void 0);
ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'progress-bar',
        template: `<div class="overlay">
              <mat-card class="progress-bar-container">
                <mat-card-content>
                  <p class="label">{{label}}</p>
                  <section class="section">
                    <mat-progress-bar
                      [color]="'primary'"
                      [mode]="'determinate'"
                      [value]="value">
                    </mat-progress-bar>
                    <div class="value"> {{value}}% </div>
                  </section>
                </mat-card-content>
               </mat-card>
            </div>`,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progressBar.component.scss */ "./src/app/shared/viewer/progressBar.component.scss")).default]
    })
], ProgressBarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    DRIVEUPLOAD: 'https://www.googleapis.com/upload/drive/v3/files',
    socketUrl: 'http://quickpad.io/',
    fileInfoUrl: 'http://quickpad.io/api/',
    server: 'http://hi.quickpad.io/notepad_api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/infrastructure/app.context.ts":
/*!*******************************************!*\
  !*** ./src/infrastructure/app.context.ts ***!
  \*******************************************/
/*! exports provided: AppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sessions_app_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessions/app.session */ "./src/infrastructure/sessions/app.session.ts");
/* harmony import */ var _repositories_app_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repositories/app.repository */ "./src/infrastructure/repositories/app.repository.ts");




let AppContext = class AppContext {
    constructor(appRepository, appSession) {
        this.appRepository = appRepository;
        this.appSession = appSession;
    }
    get Repository() {
        return this.appRepository;
    }
    get Session() {
        return this.appSession;
    }
};
AppContext.ctorParameters = () => [
    { type: _repositories_app_repository__WEBPACK_IMPORTED_MODULE_3__["AppRepository"] },
    { type: _sessions_app_session__WEBPACK_IMPORTED_MODULE_2__["AppSession"] }
];
AppContext = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppContext);



/***/ }),

/***/ "./src/infrastructure/repositories/app.repository.ts":
/*!***********************************************************!*\
  !*** ./src/infrastructure/repositories/app.repository.ts ***!
  \***********************************************************/
/*! exports provided: AppRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRepository", function() { return AppRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.repository */ "./src/infrastructure/repositories/user.repository.ts");
/* harmony import */ var _file_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file.repository */ "./src/infrastructure/repositories/file.repository.ts");




let AppRepository = class AppRepository {
    constructor(fileRepository, userRepository) {
        this.fileRepository = fileRepository;
        this.userRepository = userRepository;
    }
    /**
     * Get instance of file repository
     */
    get File() {
        return this.fileRepository;
    }
    /**
     * Get instance of user repository
     */
    get User() {
        return this.userRepository;
    }
};
AppRepository.ctorParameters = () => [
    { type: _file_repository__WEBPACK_IMPORTED_MODULE_3__["FileRepository"] },
    { type: _user_repository__WEBPACK_IMPORTED_MODULE_2__["UserRepository"] }
];
AppRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppRepository);



/***/ }),

/***/ "./src/infrastructure/repositories/file.repository.ts":
/*!************************************************************!*\
  !*** ./src/infrastructure/repositories/file.repository.ts ***!
  \************************************************************/
/*! exports provided: FileRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileRepository", function() { return FileRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_fileInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/fileInfo */ "./src/models/fileInfo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let FileRepository = class FileRepository {
    constructor(http) {
        this.http = http;
        this.driveupload = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].DRIVEUPLOAD;
        this.fileInfo = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].fileInfoUrl;
        this.createFileMeta = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkFileTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getFileMeta = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getFileTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.movetoNotepad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.movetoFileName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeThemeMode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getfileExt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openFileFromDrive = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNotepad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.appId = '248281649517';
        this.API_KEY = "AIzaSyBBtPpfWoLZGZ8s_vTQQ31zmS1dfZ94Afs";
        this.fileId = '';
        /**
         * Home check event emitter
         */
        this.isHomeComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*"'
        });
        this.option = { headers: headers };
    }
    /**
     * POST CURRENT LINE
     * @param field
     */
    postCurrentLIne(field) {
        let line = field.lineNumber.toString();
        let data = {
            FileId: field.fileId,
            UserId: field.userId,
            LineNo: line
        };
        return this.http.post(this.fileInfo + 'postCurrentLineTable', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            return user;
        }));
    }
    /**
     * GET CURRENT LINE
     * @param data
     */
    getCurrentLIne(field) {
        let data = {
            FileId: field.fileId,
            UserId: field.userId
        };
        return this.http.post(this.fileInfo + 'getCurrentLineTable', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            return user;
        }));
    }
    /**
     * Update the file current line
     * @param field
     */
    updateCurrentLIne(field) {
        let line = field.lineNumber.toString();
        let data = {
            FileId: field.fileId,
            UserId: field.userId,
            LineNo: line
        };
        return this.http.post(this.fileInfo + 'updateCurrentLineTable', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            return user;
        }));
    }
    /**
     * Make api call to Bookmark
     * @param lines
     * @param id
     */
    postBookmark(lines, id) {
        let line = lines.toString();
        let data = {
            FileId: id,
            LineNo: line
        };
        return this.http.post(this.fileInfo + 'postBookMarkTable', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            return user;
        }));
    }
    /**
     * Get the bookmarks
     * @param data
     */
    getBookmark(data) {
        let file = {
            FileId: data
        };
        return this.http.post(this.fileInfo + 'getBookMarkTable', file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            return user;
        }));
    }
    /**
     * Delete bookmark
     * @param fileId
     * @param lineNo
     */
    deleteBookmark(fileId, lineNo) {
        let line = lineNo.toString();
        let files = {
            FileId: fileId,
            LineNo: line
        };
        return this.http.post(this.fileInfo + 'deleteBookMarkTable', files).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            return user;
        }));
    }
    /*
     Insert Font Size to DB
    */
    insertFontSize(userId, fontSize) {
        let data = {
            UserId: userId,
            FontSize: fontSize
        };
        return this.http.post(this.fileInfo + 'sls-dev-updateFontSizeTable', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            return user;
        }));
    }
    /*
     Get Font Size from DB
    */
    getFontSize(userId) {
        let data = {
            UserId: userId
        };
        return this.http.post(this.fileInfo + 'sls-dev-getFontSizeTable', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            return user;
        }));
    }
    /*
     Insert to DB
     */
    insertTheme(userId, theme) {
        let data = {
            UserId: userId,
            Theme: theme
        };
        return this.http.post(this.fileInfo + 'sls-dev-updateThemeTable', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            return user;
        }));
    }
    /*
   Get Theme from DB
  */
    getTheme(userId) {
        let data = {
            UserId: userId
        };
        return this.http.post(this.fileInfo + 'sls-dev-getThemeTable', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            return user;
        }));
    }
    /**
     * Get the current extension
     * @param data
     */
    currentExt(data) {
        this.getfileExt.emit(data);
    }
    /**
     * Emit event create file meta subject
     */
    createMetadata() {
        this.createFileMeta.emit();
    }
    /**
     * Emit event on get file metadata
     */
    getfileMetadata() {
        this.getFileMeta.emit();
    }
    /**
     * Emit event to get file title
     * @param data
     */
    getfileNewtitle(data) {
        this.getFileTitle.emit(data);
    }
    /**
     * Emit event to check theme mode
     */
    checkThemeMode() {
        this.changeThemeMode.emit();
    }
    /** Move to nodepad on enter */
    movecursorToNoTepad() {
        this.movetoNotepad.emit();
    }
    /** Move to nodepad on enter */
    movecursorFileName() {
        this.movetoFileName.emit();
    }
    /** on Move to nodepad on enter */
    onMoveCursorOnNotepage() {
        this.onNotepad.emit();
    }
    /**
     * Emit event on check home component
     */
    checkHomeComponent() {
        this.isHomeComponent.emit();
    }
    /**
     * Emit event on file tile status
     */
    fileTitleStaus() {
        this.checkFileTitle.emit();
    }
    /**
     * Create a file to specific folder of drive
     * @param parentId
     * @param folderName
     */
    create(parentId, folderName) {
        var folder = {
            name: folderName,
            mimeType: _models_fileInfo__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE_FOLDER"],
            parents: [parentId]
        };
        return gapi.client.drive.files.create({
            resource: folder,
            fields: "id, name, mimeType, modifiedTime, size"
        }).then((res) => {
            return _models_fileInfo__WEBPACK_IMPORTED_MODULE_2__["FileInfo"].fromGoogleFile(res.result);
        });
    }
    /**
     * Delete the file
     * @param fileId
     */
    delete(fileId) {
        return gapi.client.drive.files.delete({
            fileId: fileId
        });
    }
    /**
     * Get files with in a folder
     * @param folderId
     */
    getFiles(folderId) {
        return gapi.client.drive.files.list({
            pageSize: 500,
            fields: "*",
            q: `'${folderId}' in parents and trashed = false`,
            orderBy: "folder",
        }).then((res) => {
            let files = [];
            res.result.files.forEach((file) => {
                if (file.mimeType == 'application/vnd.google-apps.folder') {
                    files.push(_models_fileInfo__WEBPACK_IMPORTED_MODULE_2__["FileInfo"].fromGoogleFile(file));
                }
            });
            return files;
        });
    }
    /**
     * Move file between the folders
     */
    moveDriveFile(folderid, fileid) {
        return new Promise((resolve, reject) => {
            gapi.client.drive.files.get({
                fileId: fileid,
                fields: 'parents'
            }).then((res) => {
                var previous_parents = res.result.parents.join(',');
                gapi.client.drive.files.update({
                    fileId: fileid,
                    addParents: folderid,
                    removeParents: previous_parents,
                    fields: 'id, parents'
                }).then((response) => {
                    resolve(true);
                });
            }, (err) => {
                reject(err);
            });
        });
    }
    /**
     * Update drive file title
     * @param title
     * @param id
     */
    updatefiletitle(title, id) {
        let body = {
            "name": title
        };
        let accessToken = gapi.auth.getToken().access_token;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        });
        let options = { headers: headers };
        return this.http.patch(`https://www.googleapis.com/drive/v3/files/${id}?fields=*`, body, options).toPromise();
    }
    /**
     * Get parent Folder name
     * @param folderId
     */
    getFolderTitle(folderId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let accessToken = gapi.auth.getToken().access_token;
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            });
            let options = { headers: headers };
            return this.http.get(`https://www.googleapis.com/drive/v3/files/${folderId}?fields=*`, options).toPromise();
        });
    }
    /**
     * Get file from google drive
     */
    getFile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const view = new google.picker.View(google.picker.ViewId.DOCS);
            const picker = new google.picker.PickerBuilder()
                .enableFeature(google.picker.Feature.NAV_HIDDEN)
                .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
                .setAppId(this.appId)
                .setOAuthToken(gapi.auth.getToken().access_token)
                .addView(view)
                .addView(new google.picker.DocsUploadView())
                .setDeveloperKey(this.API_KEY)
                .setCallback((data) => { this.pickerCallback(data); })
                .build();
            picker.setVisible(true);
        });
    }
    pickerCallback(data) {
        if (data.action == google.picker.Action.PICKED) {
            // sessionStorage.setItem('driveFiele', data);
            this.openFileFromDrive.emit(data);
            this.fileId = data.docs[0].id;
        }
    }
    /**
     * List all folder name
     */
    getparent() {
        return new Promise((resolve, reject) => {
            let data;
            let accessToken = gapi.auth.getToken().access_token;
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            });
            let options = { headers: headers };
            this.http.get("https://www.googleapis.com/drive/v2/files/root/children?q=mimeType%3D'application%2Fvnd.google-apps.folder'", options)
                .subscribe((res) => {
                if (res.items) {
                    res.items.forEach(obj => {
                        this.http.get(`https://www.googleapis.com/drive/v3/files/${obj.id}`, options).subscribe((res) => {
                            data[data] = res;
                        });
                    });
                }
            });
            resolve(data);
        });
    }
    /**
     * get parent id
     * @param id
     */
    getparentId(id) {
        let accessToken = gapi.auth.getToken().access_token;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        });
        let options = { headers: headers };
        let data = this.http.get(`https://www.googleapis.com/drive/v3/files/${id}?fields=*`, options).toPromise();
    }
    /**
     * create new drive file
     * @param data
     */
    createDriveFIle(data) {
        let title = 'Untitled';
        let fileext = '.txt';
        let parentid = 'root';
        let id = sessionStorage.getItem('parentid');
        let filename = sessionStorage.getItem('newfiletitle');
        let ext = sessionStorage.getItem('newfileExt');
        if (filename) {
            title = filename;
        }
        if (ext) {
            fileext = ext;
        }
        if (id) {
            parentid = id;
        }
        let file = new Blob([data], { type: 'text/plain' });
        let metadata = {
            'name': title + fileext,
            'mimeType': 'text/plain',
            'parents': [parentid]
        };
        let form = new FormData();
        form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
        form.append('file', file);
        let accessToken = gapi.auth.getToken().access_token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Authorization', `Bearer ${accessToken}`);
        return this.http.post(`${this.driveupload}?uploadType=multipart&fields=id`, form, { headers });
    }
    /**
     * Get google drive file metadata
     * @param fileId
     */
    getFileDetails(fileId) {
        return gapi.client.request({
            'path': 'https://www.googleapis.com/drive/v3/files/' + fileId,
            'params': { 'fields': "*" },
            'method': 'GET',
        });
    }
    /**
     * get google drive file content by id
     * @param fileId
     */
    getFileById(fileId) {
        return gapi.client.drive.files.get({
            'fileId': fileId,
            'mimeType': 'text/plain',
            'alt': 'media'
        });
    }
    /**
     * get google drive file content by export id
     * @param fileId
     */
    getFileByExportId(fileId) {
        return gapi.client.drive.files.export({
            'fileId': fileId,
            'mimeType': 'text/html'
        });
    }
    /**
     * plain text
     * Save export Content
     * @param fileId
     * @param data
     */
    saveGoogleExportFile(fileId, data) {
        var contentBlob = new Blob([data], {
            'type': 'text/html'
        });
        this.updateFileContent(fileId, contentBlob);
    }
    /**
     * Save google css File
     * @param fileId
     * @param data
     */
    saveGooglecssFile(fileId, data) {
        var contentBlob = new Blob([data], {
            'type': 'text/css'
        });
        this.updateFileContent(fileId, contentBlob);
    }
    /**
     * Save google doc other file
     * @param fileId
     * @param data
     */
    saveGoogleFile(fileId, data) {
        var contentBlob = new Blob([data], {
            'type': 'text/html'
        });
        this.updateFileContent(fileId, contentBlob);
    }
    /**
     * Update file content
     * @param fileId
     * @param contentBlob
     */
    updateFileContent(fileId, contentBlob) {
        let accessToken = gapi.auth.getToken().access_token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('Authorization', `Bearer ${accessToken}`);
        return this.http.patch(`${this.driveupload}/${fileId}?uploadType=media`, contentBlob, { headers })
            .subscribe((res) => {
            return res;
        });
    }
    /**
     * Get files shareable links
     * @param files
     */
    getAllShareableLinks(files) {
        var permission = {
            type: 'anyone',
            role: 'reader',
            allowFileDiscovery: false
        };
        let promises = [];
        files.forEach((file) => {
            if (!file.Shared) {
                promises.push(gapi.client.drive.permissions.create({
                    resource: permission,
                    fileId: file.Id
                }));
            }
        });
        return Promise.all(promises);
    }
    /**
     * Import file
     * @param parentId
     * @param file
     * @param onError
     * @param onComplete
     * @param onProgress
     */
    importFile(parentId, file, onError, onComplete, onProgress) {
        var contentType = file.Blob.type || 'application/octet-stream';
        var metadata = {
            name: file.Blob.name,
            mimeType: contentType,
            parents: [parentId]
        };
        var uploader = new UploaderForGoogleDrive({
            file: file.Blob,
            token: gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token,
            metadata: metadata,
            onError: onError,
            onComplete: onComplete,
            onProgress: onProgress,
            params: {
                convert: false,
                ocr: false
            }
        });
        uploader.upload();
    }
};
FileRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
FileRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FileRepository);



/***/ }),

/***/ "./src/infrastructure/repositories/user.repository.ts":
/*!************************************************************!*\
  !*** ./src/infrastructure/repositories/user.repository.ts ***!
  \************************************************************/
/*! exports provided: UserRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRepository", function() { return UserRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user */ "./src/models/user.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const TABLE_USER = "users";
let UserRepository = class UserRepository {
    constructor(http) {
        this.http = http;
    }
    add(profile) {
        let users = this.getAll();
        const foundIndex = users.findIndex(user => user.Id === profile.getId());
        if (foundIndex >= 0)
            users.splice(foundIndex, 1);
        users.push(_models_user__WEBPACK_IMPORTED_MODULE_2__["User"].fromBasicProfile(profile));
        this.save(users);
    }
    getAll() {
        var data = localStorage.getItem(TABLE_USER);
        if (data) {
            return (JSON.parse(data));
        }
        else
            return [];
    }
    /**
     * Save the localstorage
     * @param users
     */
    save(users) {
        localStorage.setItem(TABLE_USER, JSON.stringify(users));
    }
    /**
     * Hubspot Auth
     * Login
     */
    userAcessToken(data) {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = {
            headers: httpHeaders
        };
        return this.http.post("https://oauth2.googleapis.com/token", data, options);
    }
};
UserRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UserRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserRepository);



/***/ }),

/***/ "./src/infrastructure/sessions/app.session.ts":
/*!****************************************************!*\
  !*** ./src/infrastructure/sessions/app.session.ts ***!
  \****************************************************/
/*! exports provided: AppSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSession", function() { return AppSession; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.session */ "./src/infrastructure/sessions/user.session.ts");
/* harmony import */ var _gapi_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _breadcrumb_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb.session */ "./src/infrastructure/sessions/breadcrumb.session.ts");
/* harmony import */ var _file_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file.session */ "./src/infrastructure/sessions/file.session.ts");






let AppSession = class AppSession {
    constructor(authSession, breadCrumbSession, fileSession, userSession) {
        this.authSession = authSession;
        this.breadCrumbSession = breadCrumbSession;
        this.fileSession = fileSession;
        this.userSession = userSession;
    }
    get File() {
        return this.fileSession;
    }
    get Gapi() {
        return this.authSession;
    }
    get BreadCrumb() {
        return this.breadCrumbSession;
    }
    get User() {
        return this.userSession;
    }
};
AppSession.ctorParameters = () => [
    { type: _gapi_session__WEBPACK_IMPORTED_MODULE_3__["GapiSession"] },
    { type: _breadcrumb_session__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbSession"] },
    { type: _file_session__WEBPACK_IMPORTED_MODULE_5__["FileSession"] },
    { type: _user_session__WEBPACK_IMPORTED_MODULE_2__["UserSession"] }
];
AppSession = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppSession);



/***/ }),

/***/ "./src/infrastructure/sessions/breadcrumb.session.ts":
/*!***********************************************************!*\
  !*** ./src/infrastructure/sessions/breadcrumb.session.ts ***!
  \***********************************************************/
/*! exports provided: BreadCrumbSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumbSession", function() { return BreadCrumbSession; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_breadCrumbItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/breadCrumbItem */ "./src/models/breadCrumbItem.ts");



let BreadCrumbSession = class BreadCrumbSession {
    constructor() {
        this.items = [];
    }
    setShowOptionOnLastItem() {
        let lastItem = this.items[this.items.length - 1];
        lastItem.ShowOption = true;
    }
    init() {
        this.items = [];
        this.push("root", "My Drive");
    }
    push(id, name) {
        this.items.forEach((item) => item.ShowOption = false);
        let item = new _models_breadCrumbItem__WEBPACK_IMPORTED_MODULE_2__["BreadCrumbItem"]();
        item.Id = id;
        item.Name = name;
        this.items.push(item);
        this.setShowOptionOnLastItem();
    }
    navigateTo(id, name) {
        let foundIndex = -1;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].Id === id) {
                foundIndex = i;
                break;
            }
        }
        if (foundIndex >= 0) {
            this.items = this.items.slice(0, foundIndex + 1);
            this.setShowOptionOnLastItem();
        }
        else
            this.push(id, name);
    }
    get currentItem() {
        return this.items[this.items.length - 1];
    }
};
BreadCrumbSession = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BreadCrumbSession);



/***/ }),

/***/ "./src/infrastructure/sessions/file.session.ts":
/*!*****************************************************!*\
  !*** ./src/infrastructure/sessions/file.session.ts ***!
  \*****************************************************/
/*! exports provided: FileSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSession", function() { return FileSession; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FileSession = class FileSession {
    constructor() {
        this.uploadFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
FileSession = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FileSession);



/***/ }),

/***/ "./src/infrastructure/sessions/gapi.session.ts":
/*!*****************************************************!*\
  !*** ./src/infrastructure/sessions/gapi.session.ts ***!
  \*****************************************************/
/*! exports provided: GapiSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GapiSession", function() { return GapiSession; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repositories_app_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repositories/app.repository */ "./src/infrastructure/repositories/app.repository.ts");



const CLIENT_ID = "248281649517-s7k5n7e0p5mjd7649prqhvia92m6rv39.apps.googleusercontent.com";
const API_KEY = "AIzaSyBBtPpfWoLZGZ8s_vTQQ31zmS1dfZ94Afs";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = [
    'https://www.googleapis.com/auth/drive.install',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive.metadata.readonly'
].join(' ');
// var SCOPES: any = 'https://www.googleapis.com/auth/drive.apps.readonly https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.readonly';
// https://www.googleapis.com/auth/drive.appfolder Permission
// https://www.googleapis.com/auth/drive.apps.readonly 
// https://www.googleapis.com/auth/drive.metadata 
// https://www.googleapis.com/auth/drive   
// https://www.googleapis.com/auth/drive.metadata.readonly  
// https://www.googleapis.com/auth/drive.readonly
// https://www.googleapis.com/auth/drive.file
// https://www.googleapis.com/auth/drive.appdata
let GapiSession = class GapiSession {
    constructor(appRepository) {
        this.appRepository = appRepository;
    }
    initClient() {
        return new Promise((resolve, reject) => {
            gapi.load('client:auth2', () => {
                return gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES,
                }).then(() => {
                    this.googleAuth = gapi.auth2.getAuthInstance();
                    gapi.load('picker', { callback: resolve });
                });
            });
        });
    }
    get isSignedIn() {
        return this.googleAuth.isSignedIn.get();
    }
    signInWithToken(data) {
        gapi.auth.setToken(data);
    }
    signIn() {
        return this.googleAuth.signIn({
            prompt: 'select_account'
        }).then((googleUser) => {
            this.appRepository.User.add(googleUser.getBasicProfile());
        });
    }
    signOut() {
        this.googleAuth.signOut();
        localStorage.removeItem('fileData');
        localStorage.clear();
    }
};
GapiSession.ctorParameters = () => [
    { type: _repositories_app_repository__WEBPACK_IMPORTED_MODULE_2__["AppRepository"] }
];
GapiSession = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GapiSession);



/***/ }),

/***/ "./src/infrastructure/sessions/loggedInGuard.ts":
/*!******************************************************!*\
  !*** ./src/infrastructure/sessions/loggedInGuard.ts ***!
  \******************************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _gapi_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");




let LoggedInGuard = class LoggedInGuard {
    constructor(router, gapiSession) {
        this.router = router;
        this.gapiSession = gapiSession;
    }
    canActivate() {
        var isLoggedIn = this.gapiSession.isSignedIn;
        if (!isLoggedIn)
            this.router.navigate(['/']);
        return isLoggedIn;
    }
};
LoggedInGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _gapi_session__WEBPACK_IMPORTED_MODULE_3__["GapiSession"] }
];
LoggedInGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], LoggedInGuard);



/***/ }),

/***/ "./src/infrastructure/sessions/user.session.ts":
/*!*****************************************************!*\
  !*** ./src/infrastructure/sessions/user.session.ts ***!
  \*****************************************************/
/*! exports provided: UserSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSession", function() { return UserSession; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repositories_app_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repositories/app.repository */ "./src/infrastructure/repositories/app.repository.ts");



let UserSession = class UserSession {
    constructor(appRepository) {
        this.appRepository = appRepository;
    }
};
UserSession.ctorParameters = () => [
    { type: _repositories_app_repository__WEBPACK_IMPORTED_MODULE_2__["AppRepository"] }
];
UserSession = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserSession);



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/models/breadCrumbItem.ts":
/*!**************************************!*\
  !*** ./src/models/breadCrumbItem.ts ***!
  \**************************************/
/*! exports provided: BreadCrumbItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumbItem", function() { return BreadCrumbItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BreadCrumbItem {
}


/***/ }),

/***/ "./src/models/fileInfo.ts":
/*!********************************!*\
  !*** ./src/models/fileInfo.ts ***!
  \********************************/
/*! exports provided: MIME_TYPE_FOLDER, FileInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIME_TYPE_FOLDER", function() { return MIME_TYPE_FOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInfo", function() { return FileInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const MIME_TYPE_FOLDER = "application/vnd.google-apps.folder";
class FileInfo {
    static fromGoogleFile(file) {
        let fileInfo = new FileInfo();
        fileInfo.GoogleFile = file;
        fileInfo.Id = file.id;
        fileInfo.MimeType = file.mimeType;
        fileInfo.ModifiedTime = new Date(file.modifiedTime);
        fileInfo.Name = file.name;
        fileInfo.Shared = file.shared;
        fileInfo.Size = file.size;
        return fileInfo;
    }
    get Icon() {
        if (this.IsFolder) {
            return "folder";
        }
        else {
            return "file";
        }
    }
    get IsFolder() {
        return this.MimeType === MIME_TYPE_FOLDER;
    }
    get ModifiedTimeText() {
        return this.ModifiedTime.getDate() + "." + (this.ModifiedTime.getMonth() + 1) + "." + this.ModifiedTime.getFullYear();
    }
    get SizeText() {
        if (!this.Size)
            return "-";
        let size = parseInt(this.Size);
        if (size < Math.pow(1024, 1))
            return size.toString();
        else if (size < Math.pow(1024, 2))
            return Math.floor(size / Math.pow(1024, 1)) + " KB";
        else if (size < Math.pow(1024, 3))
            return Math.floor(size / Math.pow(1024, 2)) + " MB";
        else if (size < Math.pow(1024, 3))
            return Math.floor(size / Math.pow(1024, 3)) + " GB";
        else
            return Math.floor(size / Math.pow(1024, 4)) + " GB";
    }
}


/***/ }),

/***/ "./src/models/user.ts":
/*!****************************!*\
  !*** ./src/models/user.ts ***!
  \****************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    static fromBasicProfile(profile) {
        let user = new User();
        user.Id = profile.getId();
        user.Email = profile.getEmail();
        return user;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cuong/workspace/upwork/quickpad/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map