webpackJsonp([10],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_article_article__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_article__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleCreatePage = /** @class */ (function () {
    function ArticleCreatePage(navCtrl, navParams, articleProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.articleProvider = articleProvider;
        this.formBuilder = formBuilder;
        this.errors = [];
        this.article = this.formBuilder.group({
            title: [],
        });
    }
    ArticleCreatePage.prototype.response = function (response) {
        if (response.success === false) {
            this.errors = response.error.errors;
            this.errorMessage = response.error._message;
        }
        if (response.success === true) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__article_article__["a" /* ArticlePage */], { slug: response.article.slug });
        }
    };
    ArticleCreatePage.prototype.createArticle = function () {
        var _this = this;
        this.articleProvider.createArticle(this.article.value).subscribe(function (response) {
            _this.response(response);
        });
    };
    ArticleCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article-create',template:/*ion-inline-start:"/home/jackson/ionic-cms-final/src/pages/article-create/article-create.html"*/'<!--\n  Generated template for the ArticleCreatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>article-create</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="article" (ngSubmit)="createArticle()">\n\n    <ion-list>\n\n      <ion-item no-lines class="alert alert-error no-lines" *ngIf="errorMessage">{{ errorMessage }}</ion-item>\n\n      <ion-item no-lines [ngClass]="{\'has-error\':errors.title}" >\n        <ion-label floating>Title</ion-label>\n        <ion-input type="text" formControlName="title"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines class="no-lines has-error" *ngIf="errors.title">{{ errors.title.message }}</ion-item>\n\n    </ion-list>\n\n    <button ion-button full type="submit">Submit</button>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/jackson/ionic-cms-final/src/pages/article-create/article-create.html"*/,
            styles: ['user-create']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_article_article__["a" /* ArticleProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ArticleCreatePage);
    return ArticleCreatePage;
}());

//# sourceMappingURL=article-create.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_article_article__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_article__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleEditPage = /** @class */ (function () {
    function ArticleEditPage(navCtrl, navParams, articleProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.articleProvider = articleProvider;
        this.formBuilder = formBuilder;
        this.errors = [];
        this.article = this.formBuilder.group({
            _id: [],
            title: [],
            body: []
        });
        this.getArticle(this.navParams.data.slug);
    }
    ArticleEditPage.prototype.getArticle = function (slug) {
        var _this = this;
        this.articleProvider.getArticle(slug).subscribe(function (response) {
            _this.myArticle = response.article;
        });
    };
    ArticleEditPage.prototype.response = function (response) {
        if (response.success === false) {
            this.errors = response.error.errors;
            this.errorMessage = response.error._message;
        }
        if (response.success === true) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__article_article__["a" /* ArticlePage */], { slug: response.article.slug });
        }
    };
    ArticleEditPage.prototype.editArticle = function () {
        var _this = this;
        this.articleProvider.updateArticle(this.article.value).subscribe(function (response) {
            _this.response(response);
        });
    };
    ArticleEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article-edit',template:/*ion-inline-start:"/home/jackson/ionic-cms-final/src/pages/article-edit/article-edit.html"*/'<!--\n  Generated template for the ArticleEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>article-edit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form *ngIf="myArticle" [formGroup]="article" (ngSubmit)="editArticle()">\n    <ion-input\n    type="hidden"\n    formControlName="_id"\n    value="{{ myArticle._id }}">\n    </ion-input>\n\n  <ion-list>\n    <ion-item no-lines class="alert alert-message no-lines" *ngIf="errorMessage">{{ errorMessage }}</ion-item>\n\n    <ion-item no-lines [ngClass]="{\'has-error\': errors.title}">\n      <ion-label floating>Title</ion-label>\n      <ion-input\n        type="text"\n        formControlName="title"\n        value="{{ myArticle.title }}">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-lines class="no-lines has-error"\n    *ngIf="errors.title"> {{ errors.title.message }} </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>Body</ion-label>\n      <ion-textarea\n        formControlName="body"\n        value="{{ myArticle.body }}">\n      </ion-textarea>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full type="submit">Submit</button>\n\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/jackson/ionic-cms-final/src/pages/article-edit/article-edit.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_article_article__["a" /* ArticleProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_article_article__["a" /* ArticleProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
    ], ArticleEditPage);
    return ArticleEditPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=article-edit.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleDeletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articles_articles__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_article_article__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticleDeletePage = /** @class */ (function () {
    function ArticleDeletePage(navCtrl, navParams, articleProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.articleProvider = articleProvider;
        this.getArticle(this.navParams.data.slug);
    }
    ArticleDeletePage.prototype.getArticle = function (slug) {
        var _this = this;
        this.articleProvider.getArticle(slug).subscribe(function (response) {
            _this.article = response.article;
        });
    };
    ArticleDeletePage.prototype.deleteArticle = function () {
        var _this = this;
        this.articleProvider.deleteArticle(this.article._id).subscribe(function (response) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__articles_articles__["a" /* ArticlesPage */]);
        });
    };
    ArticleDeletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article-delete',template:/*ion-inline-start:"/home/jackson/ionic-cms-final/src/pages/article-delete/article-delete.html"*/'<!--\n  Generated template for the ArticleDeletePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>article-delete</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="article">\n      <h1>Are you sure you want to delete {{ article.title }}?</h1>\n      <br><br>\n      <div text-center>\n          <button ion-button color="danger" round (click)="deleteArticle()">Delete</button>\n      </div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/jackson/ionic-cms-final/src/pages/article-delete/article-delete.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_article_article__["a" /* ArticleProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_article_article__["a" /* ArticleProvider */]) === "function" && _c || Object])
    ], ArticleDeletePage);
    return ArticleDeletePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=article-delete.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_article_article__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article_article__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_create_article_create__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticlesPage = /** @class */ (function () {
    function ArticlesPage(navCtrl, navParams, articleProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.articleProvider = articleProvider;
        this.loadingCtrl = loadingCtrl;
    }
    ArticlesPage.prototype.ionViewDidLoad = function () {
        this.getArticles();
    };
    ArticlesPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.articleProvider.getArticles().subscribe(function (response) {
            _this.articles = response.articles;
            refresher.complete();
        });
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    ArticlesPage.prototype.getArticles = function () {
        var _this = this;
        this.presentLoader();
        this.articleProvider.getArticles().subscribe(function (response) {
            _this.articles = response.articles;
            _this.loader.dismiss();
        });
    };
    ArticlesPage.prototype.presentLoader = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loader.present();
    };
    ArticlesPage.prototype.toArticle = function (slug) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__article_article__["a" /* ArticlePage */], { slug: slug });
    };
    ArticlesPage.prototype.toCreateArticle = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__article_create_article_create__["a" /* ArticleCreatePage */]);
    };
    ArticlesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-articles',template:/*ion-inline-start:"/home/jackson/ionic-cms-final/src/pages/articles/articles.html"*/'<!--\n  Generated template for the ArticlesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>articles</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list *ngIf="articles">\n    <ion-item\n      *ngFor="let article of articles"\n      (click)="toArticle(article.slug)"\n    >\n      {{ article.title }}\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="toCreateArticle()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/jackson/ionic-cms-final/src/pages/articles/articles.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_article_article__["a" /* ArticleProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_article_article__["a" /* ArticleProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object])
    ], ArticlesPage);
    return ArticlesPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=articles.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserCreatePage = /** @class */ (function () {
    function UserCreatePage(navCtrl, navParams, userProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.formBuilder = formBuilder;
        this.errors = [];
        this.user = this.formBuilder.group({
            username: [],
            email: [],
            first_name: [],
            last_name: []
        });
    }
    UserCreatePage.prototype.response = function (response) {
        if (response.success === false) {
            this.errors = response.error.errors;
            this.errorMessage = response.error._message;
        }
        if (response.success === true) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */], { id: response.user._id });
        }
    };
    UserCreatePage.prototype.createUser = function () {
        var _this = this;
        this.userProvider.createUser(this.user.value).subscribe(function (response) {
            console.log(response);
            _this.response(response);
        });
    };
    UserCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-create',template:/*ion-inline-start:"/home/jackson/ionic-cms-final/src/pages/user-create/user-create.html"*/'<!--\n  Generated template for the UserCreatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>user-create</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="user" (ngSubmit)="createUser()">\n\n    <ion-list>\n\n      <ion-item no-lines class="alert alert-error no-lines" *ngIf="errorMessage">{{ errorMessage }}</ion-item>\n\n      <ion-item no-lines [ngClass]="{\'has-error\':errors.username}" >\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" formControlName="username"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines class="no-lines has-error" *ngIf="errors.username">{{ errors.username.message }}</ion-item>\n\n      <ion-item no-lines [ngClass]="{\'has-error\':errors.email}">\n        <ion-label floating>Email</ion-label>\n        <ion-input type="text" formControlName="email"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines class="no-lines has-error" *ngIf="errors.email">{{ errors.email.message }}</ion-item>\n\n      <ion-item no-lines >\n          <ion-label floating>First Name</ion-label>\n          <ion-input type="text" formControlName="first_name"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines >\n          <ion-label floating>Last Name</ion-label>\n          <ion-input type="text" formControlName="last_name"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button full type="submit">Submit</button>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/jackson/ionic-cms-final/src/pages/user-create/user-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], UserCreatePage);
    return UserCreatePage;
}());

//# sourceMappingURL=user-create.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEditPage = /** @class */ (function () {
    function UserEditPage(navCtrl, navParams, userProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.formBuilder = formBuilder;
        this.errors = [];
        this.user = this.formBuilder.group({
            _id: [],
            username: [],
            email: [],
            first_name: [],
            last_name: []
        });
    }
    UserEditPage.prototype.ionViewDidLoad = function () {
        this.getUser(this.navParams.data.id);
    };
    UserEditPage.prototype.getUser = function (id) {
        var _this = this;
        this.userProvider.getUser(id).subscribe(function (response) {
            _this.myUser = response.user;
        });
    };
    UserEditPage.prototype.response = function (response) {
        if (response.success === false) {
            this.errors = response.error.errors;
            this.errorMessage = response.error._message;
        }
        if (response.success === true) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserPage */], { id: response.user._id });
        }
    };
    UserEditPage.prototype.editUser = function () {
        var _this = this;
        this.userProvider.updateUser(this.user.value).subscribe(function (response) {
            _this.response(response);
        });
    };
    UserEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-edit',template:/*ion-inline-start:"/home/jackson/ionic-cms-final/src/pages/user-edit/user-edit.html"*/'<!--\n  Generated template for the UserEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>user-edit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form *ngIf="myUser" [formGroup]="user" (ngSubmit)="editUser()">\n\n   <ion-input type="hidden" formControlName="_id" value="{{ myUser._id }}"></ion-input>\n\n    <ion-list>\n\n      <ion-item no-lines class="alert alert-error no-lines" *ngIf="errorMessage">{{ errorMessage }}</ion-item>\n\n      <ion-item no-lines [ngClass]="{\'has-error\':errors.username}" >\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" formControlName="username" value="{{ myUser.username }}"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines class="no-lines has-error" *ngIf="errors.username">{{ errors.username.message }}</ion-item>\n\n      <ion-item no-lines [ngClass]="{\'has-error\':errors.email}">\n        <ion-label floating>Email</ion-label>\n        <ion-input type="text" formControlName="email" value="{{ myUser.email }}"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines class="no-lines has-error" *ngIf="errors.email">{{ errors.email.message }}</ion-item>\n\n      <ion-item no-lines >\n          <ion-label floating>First Name</ion-label>\n          <ion-input type="text" formControlName="first_name" value="{{ myUser.first_name }}"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines >\n          <ion-label floating>Last Name</ion-label>\n          <ion-input type="text" formControlName="last_name" value="{{ myUser.last_name }}"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button full type="submit">Submit</button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/jackson/ionic-cms-final/src/pages/user-edit/user-edit.html"*/,
            styles: ['user-create.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], UserEditPage);
    return UserEditPage;
}());

//# sourceMappingURL=user-edit.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDeletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_users__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDeletePage = /** @class */ (function () {
    function UserDeletePage(navCtrl, navParams, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.getUser(this.navParams.data.id);
    }
    UserDeletePage.prototype.getUser = function (id) {
        var _this = this;
        this.userProvider.getUser(id).subscribe(function (response) {
            _this.user = response.user;
        });
    };
    UserDeletePage.prototype.deleteUser = function () {
        var _this = this;
        this.userProvider.deleteUser(this.user._id).subscribe(function (response) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__users_users__["a" /* UsersPage */]);
        });
    };
    UserDeletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-delete',template:/*ion-inline-start:"/home/jackson/ionic-cms-final/src/pages/user-delete/user-delete.html"*/'<!--\n  Generated template for the UserDeletePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>user-delete</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="user">\n      <h1>Are you sure you want to delete {{ user.username }}?</h1>\n      <br><br>\n      <div text-center>\n          <button ion-button color="danger" round (click)="deleteUser()">Delete</button>\n      </div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/jackson/ionic-cms-final/src/pages/user-delete/user-delete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], UserDeletePage);
    return UserDeletePage;
}());

//# sourceMappingURL=user-delete.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/article-create/article-create.module": [
		288,
		9
	],
	"../pages/article-delete/article-delete.module": [
		289,
		8
	],
	"../pages/article-edit/article-edit.module": [
		290,
		7
	],
	"../pages/article/article.module": [
		291,
		6
	],
	"../pages/articles/articles.module": [
		292,
		5
	],
	"../pages/user-create/user-create.module": [
		293,
		4
	],
	"../pages/user-delete/user-delete.module": [
		294,
		3
	],
	"../pages/user-edit/user-edit.module": [
		295,
		2
	],
	"../pages/user/user.module": [
		296,
		1
	],
	"../pages/users/users.module": [
		297,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/jackson/ionic-cms-final/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/jackson/ionic-cms-final/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_users_users__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_user__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_create_user_create__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_user_edit_user_edit__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_user_delete_user_delete__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_articles_articles__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_article_article__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_article_create_article_create__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_article_edit_article_edit__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_article_delete_article_delete__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_user_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_article_article__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_users_users__["a" /* UsersPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_create_user_create__["a" /* UserCreatePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_user_edit_user_edit__["a" /* UserEditPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_user_delete_user_delete__["a" /* UserDeletePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_articles_articles__["a" /* ArticlesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_article_article__["a" /* ArticlePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_article_create_article_create__["a" /* ArticleCreatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_article_edit_article_edit__["a" /* ArticleEditPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_article_delete_article_delete__["a" /* ArticleDeletePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/article-create/article-create.module#ArticleCreatePageModule', name: 'ArticleCreatePage', segment: 'article-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/article-delete/article-delete.module#ArticleDeletePageModule', name: 'ArticleDeletePage', segment: 'article-delete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/article-edit/article-edit.module#ArticleEditPageModule', name: 'ArticleEditPage', segment: 'article-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/article/article.module#ArticlePageModule', name: 'ArticlePage', segment: 'article', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/articles/articles.module#ArticlesPageModule', name: 'ArticlesPage', segment: 'articles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-create/user-create.module#UserCreatePageModule', name: 'UserCreatePage', segment: 'user-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-delete/user-delete.module#UserDeletePageModule', name: 'UserDeletePage', segment: 'user-delete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-edit/user-edit.module#UserEditPageModule', name: 'UserEditPage', segment: 'user-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_users_users__["a" /* UsersPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_create_user_create__["a" /* UserCreatePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_user_edit_user_edit__["a" /* UserEditPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_user_delete_user_delete__["a" /* UserDeletePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_articles_articles__["a" /* ArticlesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_article_article__["a" /* ArticlePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_article_create_article_create__["a" /* ArticleCreatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_article_edit_article_edit__["a" /* ArticleEditPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_article_delete_article_delete__["a" /* ArticleDeletePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_article_article__["a" /* ArticleProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_users_users__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_articles_articles__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Users', component: __WEBPACK_IMPORTED_MODULE_5__pages_users_users__["a" /* UsersPage */] },
            { title: 'Articles', component: __WEBPACK_IMPORTED_MODULE_6__pages_articles_articles__["a" /* ArticlesPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/jackson/ionic-cms-final/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/jackson/ionic-cms-final/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var UserProvider = /** @class */ (function () {
    function UserProvider(http) {
        this.http = http;
        this.url = 'https://jacksonr.com/api/users';
    }
    UserProvider.prototype.getUser = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    UserProvider.prototype.getUsers = function () {
        return this.http.get(this.url);
    };
    UserProvider.prototype.createUser = function (user) {
        return this.http.post(this.url, user, httpOptions);
    };
    UserProvider.prototype.updateUser = function (user) {
        return this.http.put(this.url, user, httpOptions);
    };
    UserProvider.prototype.deleteUser = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ArticleProvider = /** @class */ (function () {
    function ArticleProvider(http) {
        this.http = http;
        this.url = 'https://jacksonr.com/api/Articles';
    }
    ArticleProvider.prototype.getArticle = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    ArticleProvider.prototype.getArticles = function () {
        return this.http.get(this.url);
    };
    ArticleProvider.prototype.createArticle = function (article) {
        return this.http.post(this.url, article, httpOptions);
    };
    ArticleProvider.prototype.updateArticle = function (article) {
        return this.http.put(this.url, article, httpOptions);
    };
    ArticleProvider.prototype.deleteArticle = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    ArticleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ArticleProvider);
    return ArticleProvider;
    var _a;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_article_article__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article_edit_article_edit__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_delete_article_delete__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticlePage = /** @class */ (function () {
    function ArticlePage(navCtrl, navParams, articleProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.articleProvider = articleProvider;
        this.getArticle(this.navParams.data.slug);
    }
    ArticlePage.prototype.getArticle = function (slug) {
        var _this = this;
        this.articleProvider.getArticle(slug).subscribe(function (response) {
            console.log(response);
            _this.article = response.article;
        });
    };
    ArticlePage.prototype.toArticleEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__article_edit_article_edit__["a" /* ArticleEditPage */], { slug: this.article.slug });
    };
    ArticlePage.prototype.toArticleDelete = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__article_delete_article_delete__["a" /* ArticleDeletePage */], { slug: this.article.slug });
    };
    ArticlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article',template:/*ion-inline-start:"/home/jackson/ionic-cms-final/src/pages/article/article.html"*/'<!--\n  Generated template for the ArticlePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="article">{{ article.title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div *ngIf="article">\n      {{ article.body }}\n  </div>\n\n  <ion-fab right bottom>\n    <button ion-fab color="light">\n      <ion-icon name="arrow-dropleft"></ion-icon>\n    </button>\n\n    <ion-fab-list side="left">\n\n      <button ion-fab color="primary" (click)="toArticleEdit()">\n        <ion-icon name="md-create"></ion-icon>\n      </button>\n\n      <button ion-fab color="danger" (click)="toArticleDelete()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/jackson/ionic-cms-final/src/pages/article/article.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_article_article__["a" /* ArticleProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_article_article__["a" /* ArticleProvider */]) === "function" && _c || Object])
    ], ArticlePage);
    return ArticlePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_edit_user_edit__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_delete_user_delete__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.getUser(this.navParams.data.id);
    }
    UserPage.prototype.getUser = function (id) {
        var _this = this;
        this.userProvider.getUser(id).subscribe(function (response) {
            _this.user = response.user;
            _this.user.gravatarUrl = 'https://www.gravatar.com/avatar/'
                + __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"].hashStr(_this.user.email)
                + '?d=mm&s=512';
        });
    };
    UserPage.prototype.toUserEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_edit_user_edit__["a" /* UserEditPage */], { id: this.user._id });
    };
    UserPage.prototype.toUserDelete = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__user_delete_user_delete__["a" /* UserDeletePage */], { id: this.user._id });
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/jackson/ionic-cms-final/src/pages/user/user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>user</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngIf="user">\n      <ion-avatar item-start>\n        <img src="{{ user.gravatarUrl }}">\n      </ion-avatar>\n      <h2>\n        <span *ngIf="user.first_name">\n          {{ user.first_name }}\n        </span>\n        <span *ngIf="user.last_name">\n          {{ user.last_name }}\n        </span>\n      </h2>\n      <p>{{ user.email }}</p>\n      <p>{{ user.username }}</p>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="light">\n      <ion-icon name="arrow-dropleft"></ion-icon>\n    </button>\n\n    <ion-fab-list side="left">\n\n      <button ion-fab color="primary" (click)="toUserEdit()">\n        <ion-icon name="md-create"></ion-icon>\n      </button>\n\n      <button ion-fab color="danger" (click)="toUserDelete()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/jackson/ionic-cms-final/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_create_user_create__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersPage = /** @class */ (function () {
    function UsersPage(navCtrl, navParams, userProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.loadingCtrl = loadingCtrl;
    }
    UsersPage.prototype.ionViewDidLoad = function () {
        this.getUsers();
    };
    UsersPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.userProvider.getUsers().subscribe(function (response) {
            _this.users = response.users;
            refresher.complete();
        });
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    UsersPage.prototype.getUsers = function () {
        var _this = this;
        this.presentLoader();
        this.userProvider.getUsers().subscribe(function (response) {
            _this.users = response.users;
            _this.loader.dismiss();
        });
    };
    UsersPage.prototype.presentLoader = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loader.present();
    };
    UsersPage.prototype.toUser = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserPage */], { id: id });
    };
    UsersPage.prototype.toCreateUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_create_user_create__["a" /* UserCreatePage */]);
    };
    UsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-users',template:/*ion-inline-start:"/home/jackson/ionic-cms-final/src/pages/users/users.html"*/'<!--\n  Generated template for the UsersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>users</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list *ngIf="users">\n    <ion-item\n      *ngFor="let user of users"\n      (click)="toUser(user._id)"\n    >\n      {{ user.username }}\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="toCreateUser()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/jackson/ionic-cms-final/src/pages/users/users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], UsersPage);
    return UsersPage;
}());

//# sourceMappingURL=users.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map