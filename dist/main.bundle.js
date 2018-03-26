webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".allb {\n  background-image: url('git5s.87cc25f5bfc417ff9887.jpg');\n  background-repeat: no-repeat;\n  background-position: top;\n  background-size: 1020px 200px;\n}\n\nh1 {\n  color: green;\n  background-color: #3ae4ff;\n}\n\n.boody {\n  height: 100vh;\n  background-image: url('git6s.6c78a4e3a7e59fc5f957.jpg');\n  color: white;\n}\n\n.navbar-default {\n  width: 100.2%;\n}\n\n.img1 {\n  position: absolute;\n  top: 80px;\n  right: 1px;\n  width: 131px;\n}\n\n.img2 {\n  position: left;\n  top: 1px;\n  left: 1px;\n  width: 131px;\n}\n\n#git {\n  font-family: 'Russo One', sans-serif;\n  text-align: center;\n  font-size: 73px;\n}\n\n.name {\n  width: 50%;\n  margin: 10% auto 0;\n  background-color: #3ae4ff;\n  color: #fff;\n  font-size: 1em;\n  padding: 3px 0;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"allb\">\n\n  <div style=\"text-align:center \">\n    <h1>\n    Github Username & details Search Engine {{ title }}!\n  </h1>\n\n  </div>\n\n  <div class=\"img1 \">\n    <img _ngcontent-c0=\" \" src=\"assets/img/git1.gif \" style=\" width: 134px; \">\n  </div>\n\n  <div class=\"img2 \">\n    <img _ngcontent-c0=\" \" src=\"assets/img/git2.gif \" style=\" width: 134px; \">\n  </div>\n\n  <div class=\"boody \">\n\n    <nav class=\"navbar navbar-default \">\n      <div class=\"container \" id=\"background \">\n\n        <div class=\"navbar-header head \">\n\n          <app-profile></app-profile>\n          <a class=\"navbar-brand \" href=\"# \">Use the space provided above to search for a user</a>\n        </div>\n        <div id=\"navbar \" class=\"collapse navbar-collapse \">\n          <ul class=\"nav navbar-nav \">\n\n          </ul>\n        </div>\n        <div class=\"row \">\n          <div class=\"col-md-8 \">\n\n          </div>\n\n        </div>\n\n      </div>\n    </nav>\n\n    <div class=\"container \">\n      <i id=\"loader \"></i>\n\n      <div class=\"row \">\n        <div class=\" \">\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__("./src/app/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.userName = "GabrielSpear";
        this.access_token = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    ProfileService.prototype.getProfileInfo = function () {
        return this.http.get("https://api.github.com/users/" + this.userName + "?access_token=" + this.access_token).map(function (res) { return res; });
    };
    ProfileService.prototype.getProfileRepo = function () {
        return this.http.get("https://api.github.com/users/" + this.userName + "/repos" + "?access_token=" + this.access_token).map(function (res) { return res; });
    };
    ProfileService.prototype.updateProfile = function (username) {
        this.userName = username;
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".search-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\nhtml, body {\n  font-family: 'Arial', sans-serif;\n  font-size: 16px;\n}\n\n/* search bar container */\n\n.search-container {\n  display: table;\n  position: relative;\n  width: 100%;\n}\n\n/* search icon button */\n\n.search-icon-btn {\n  border: 1px solid aquamarine;\n  display: table-cell;\n  height: 50px;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 50px;\n  z-index: 2;\n}\n\n/* search bar input container */\n\n.search-input {\n  position: absolute;\n  left: 0;\n  z-index: 1;\n}\n\n/* search bar input */\n\n.search-input input.search-bar {\n  border: 1px solid #cccccc;\n  height: 50px;\n  padding: 0px;\n  width: 50px;\n}\n\n.search-input input.search-bar:focus {\n  padding-left: 60px;\n  padding-right: 10px;\n  width: 200px;\n}\n\n/* transition effect */\n\n.search-input input.search-bar, .search-icon-btn {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n/* hover on search bar container */\n\n.search-container:hover>.search-input input.search-bar {\n  padding-left: 60px;\n  padding-right: 10px;\n  width: 200px;\n}\n\n.bbackground {\n  background-image: url('git5s.87cc25f5bfc417ff9887.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Search For Github User Here</h3>\n\n<div class=\"search-container ins\">\n  <div class=\"search-icon-btn icon\">\n    <i class=\"fa fa-search\"></i>\n  </div>\n  <div class=\"search-input\">\n    <input type=\"search \" class=\"search-bar form-control\" placeholder=\"\" id=\"username\" [(ngModel)]=\"username\" (keyup)=\"search() \" name=\"name\">\n  </div>\n</div>\n\n<div class=\"bbackground\">\n\n  <div *ngIf=\"user\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">{{user.login}}</h3>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <img class=\"img-thumbnail github-avatar\" src=\"{{user.avatar_url}}\" alt=\"\">\n          </div>\n\n          <div class=\"col-md-8\">\n            <div class=\"stats\">\n              <span class=\"label label-default\">{{user.public_repos}}  public repos</span>\n              <span class=\"label label-primary\">{{user.public_gist}} public gist</span>\n              <span class=\"label label-success\">{{user.followers}} followers</span>\n              <span class=\"label label-info\">{{user.following}} following</span>\n\n            </div><br>\n\n            <ul class=\"list-group\">\n              <li class=\"list-group-items\"> <strong>username :</strong> {{user.login}} </li>\n              <li class=\"list-group-items\"> <strong>location :</strong> {{user.location}} </li>\n              <li class=\"list-group-items\"> <strong>Email :</strong> {{user.email}} </li>\n              <li class=\"list-group-items\"> <strong>blog :</strong> {{user.blog}} </li>\n              <li class=\"list-group-items\"> <strong>member since :</strong> {{user.created_at}} </li>\n\n            </ul>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">repos</h3>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div *ngFor=\"let repo of repos\">\n              <div class=\"row\">\n                <div class=\"col-md-9\">\n                  <h4> <a href=\"{{repo.html_url}}\" target=\"_blank\">{{repo.name}}</a> </h4>\n                  <p>{{repo.description}}</p>\n                </div>\n                <div class=\"col-md-3\">\n                  <span class=\"label label-default\">{{repo.watchers}}  watcher</span>\n                  <span class=\"label label-primary\">{{repo.forks}} forks</span>\n\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__("./src/app/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService) {
        this.profileService = profileService;
        // profiles:any=[];
        this.repos = [];
        console.log("jjjjf");
    }
    ProfileComponent.prototype.search = function () {
        var _this = this;
        this.profileService.updateProfile(this.username);
        this.profileService.getProfileInfo().subscribe(function (user) {
            // console.log(user);
            _this.user = user;
        });
        this.profileService.getProfileRepo().subscribe(function (repos) {
            // console.log(user);
            _this.repos = repos;
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: "e883ad186f34d0748fcf991a30a6db61cde5dba0"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map