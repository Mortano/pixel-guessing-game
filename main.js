(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.bg {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: white;\r\n}\r\n\r\n.header {\r\n    width: 100%;\r\n    height: 24pt;\r\n    background: #9c8fb8;\r\n    text-align: center;\r\n}\r\n\r\n.flex {\r\n    display: flex;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bg\">\r\n  <div class=\"header text\">\r\n    Image guessing game\r\n  </div>\r\n  <div>\r\n    <app-load-images id=\"load-images\" *ngIf=\"!imageStorageService.hasImagesLoaded\"></app-load-images>\r\n    <app-pixelization id=\"pixelization\" #pixelization *ngIf=\"imageStorageService.hasImagesLoaded\" class=\"flex\"></app-pixelization>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pixelization_pixelization_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pixelization/pixelization.component */ "./src/app/pixelization/pixelization.component.ts");
/* harmony import */ var _image_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-storage.service */ "./src/app/image-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(imageStorageService) {
        var _this = this;
        this.imageStorageService = imageStorageService;
        this.title = 'app';
        this._currentImageIndex = 0;
        imageStorageService.onImagesLoaded.subscribe(function (loadedImages) {
            _this._currentImageIndex = -1;
            // this._pixelization.setImage(loadedImages[0].image);
            // this._pixelization.startPixelization();
        });
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        document.onkeyup = function (evt) {
            if (evt.key !== ' ')
                return;
            if (!_this.imageStorageService.hasImagesLoaded)
                return;
            if (_this._pixelization.isRunning()) {
                _this._pixelization.showSolution();
            }
            else {
                //Show next image or done screen
                if (_this._currentImageIndex < (_this.imageStorageService.images.length - 1)) {
                    _this.showNextImage();
                }
                else {
                    console.log('Done');
                }
            }
        };
    };
    AppComponent.prototype.showNextImage = function () {
        this._currentImageIndex += 1;
        this._pixelization.setImage(this.imageStorageService.images[this._currentImageIndex].image);
        this._pixelization.startPixelization();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("pixelization"),
        __metadata("design:type", _pixelization_pixelization_component__WEBPACK_IMPORTED_MODULE_1__["PixelizationComponent"])
    ], AppComponent.prototype, "_pixelization", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_image_storage_service__WEBPACK_IMPORTED_MODULE_2__["ImageStorageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pixelization_pixelization_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pixelization/pixelization.component */ "./src/app/pixelization/pixelization.component.ts");
/* harmony import */ var _load_images_load_images_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load-images/load-images.component */ "./src/app/load-images/load-images.component.ts");
/* harmony import */ var _drag_drop_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drag-drop.directive */ "./src/app/drag-drop.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pixelization_pixelization_component__WEBPACK_IMPORTED_MODULE_3__["PixelizationComponent"],
                _load_images_load_images_component__WEBPACK_IMPORTED_MODULE_4__["LoadImagesComponent"],
                _drag_drop_directive__WEBPACK_IMPORTED_MODULE_5__["DragDropDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/drag-drop.directive.ts":
/*!****************************************!*\
  !*** ./src/app/drag-drop.directive.ts ***!
  \****************************************/
/*! exports provided: DragDropDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropDirective", function() { return DragDropDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DragDropDirective = /** @class */ (function () {
    function DragDropDirective() {
        this.onFileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.background = '#f5fcff';
        this.opacity = '1';
    }
    //Dragover listener
    DragDropDirective.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#9ecbec';
        this.opacity = '0.8';
    };
    //Dragleave listener
    DragDropDirective.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
    };
    //Drop listener
    DragDropDirective.prototype.ondrop = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DragDropDirective.prototype, "onFileDropped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.background-color'),
        __metadata("design:type", Object)
    ], DragDropDirective.prototype, "background", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.opacity'),
        __metadata("design:type", Object)
    ], DragDropDirective.prototype, "opacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DragDropDirective.prototype, "onDragOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DragDropDirective.prototype, "onDragLeave", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DragDropDirective.prototype, "ondrop", null);
    DragDropDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDragDrop]'
        })
    ], DragDropDirective);
    return DragDropDirective;
}());



/***/ }),

/***/ "./src/app/image-storage.service.ts":
/*!******************************************!*\
  !*** ./src/app/image-storage.service.ts ***!
  \******************************************/
/*! exports provided: ImageStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStorageService", function() { return ImageStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageStorageService = /** @class */ (function () {
    function ImageStorageService() {
        this.ALLOWED_FILE_TYPES = [".jpg", ".jpeg", ".png"];
        this._images = [];
        this.onImagesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ImageStorageService.prototype, "images", {
        get: function () {
            return this._images;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageStorageService.prototype, "hasImagesLoaded", {
        get: function () {
            return this._images.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    ImageStorageService.prototype.loadImages = function (images) {
        var _this = this;
        this._images = [];
        return Promise.all(images.map(function (val, idx) {
            if (!_this.isValidFileType(val.url)) {
                return Promise.reject("Unsupported image file type, must be one of [" + _this.ALLOWED_FILE_TYPES.reduce(function (accum, cur) { return accum + " " + cur; }) + "]");
            }
            _this._images.push({
                name: val.name,
                image: undefined
            });
            return _this.tryLoadImage(val, idx);
        })).then(function (images) {
            _this.onImagesLoaded.emit(images);
            return images;
        });
    };
    ImageStorageService.prototype.tryLoadImage = function (image, index) {
        var _this = this;
        console.log("Trying to load image " + image.url);
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            //TODO Handle failure
            reader.addEventListener('load', function (event) {
                var texture = new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]().load('assets/dummy.jpg', function (tex) {
                    tex.image.src = event.target.result;
                    tex.needsUpdate = true;
                    _this._images[index].image = tex;
                    resolve(_this._images[index]);
                }, function () { }, function (err) {
                    console.log(err);
                });
                texture.minFilter = three__WEBPACK_IMPORTED_MODULE_1__["NearestFilter"];
                texture.magFilter = three__WEBPACK_IMPORTED_MODULE_1__["NearestFilter"];
            }, false);
            reader.addEventListener('error', function (err) {
                console.error(err);
            });
            reader.readAsDataURL(image.data);
        });
    };
    ImageStorageService.prototype.isValidFileType = function (url) {
        return this.ALLOWED_FILE_TYPES.some(function (extension) {
            return url.toLowerCase().endsWith(extension);
        });
    };
    ImageStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ImageStorageService);
    return ImageStorageService;
}());



/***/ }),

/***/ "./src/app/load-images/load-images.component.css":
/*!*******************************************************!*\
  !*** ./src/app/load-images/load-images.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-file {\r\n    background-repeat: no-repeat;\r\n    background-size: 100px;\r\n    background-position: center;\r\n    height: 200px;\r\n    width: 80%;\r\n    margin: 20px auto;\r\n    border: 2px dashed #4f3b79;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    flex-flow: column;\r\n}\r\n\r\n.centered {\r\n    margin: auto\r\n}\r\n\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 92pt;  /* Preferred icon size */\r\n  display: inline-block;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  letter-spacing: normal;\r\n  word-wrap: normal;\r\n  white-space: nowrap;\r\n  direction: ltr;\r\n\r\n  /* Support for all WebKit browsers. */\r\n  -webkit-font-smoothing: antialiased;\r\n  /* Support for Safari and Chrome. */\r\n  text-rendering: optimizeLegibility;\r\n\r\n  /* Support for Firefox. */\r\n  -moz-osx-font-smoothing: grayscale;\r\n\r\n  /* Support for IE. */\r\n  -webkit-font-feature-settings: 'liga';\r\n          font-feature-settings: 'liga';\r\n\r\n  color: #4f3b79;\r\n}\r\n\r\n#header-text {\r\n    text-align: center;\r\n    margin: 12pt;\r\n    color: #4f3b79;\r\n}"

/***/ }),

/***/ "./src/app/load-images/load-images.component.html":
/*!********************************************************!*\
  !*** ./src/app/load-images/load-images.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"upload-file\" (click)=\"fileInput.click()\" appDragDrop (onFileDropped)=\"uploadFile($event)\">\n  <b id=\"header-text\" class=\"text\">Upload images</b>\n  <i class=\"material-icons centered\">cloud_upload</i>\n  <input hidden type=\"file\" #fileInput (change)=\"uploadFile($event.target.files)\">\n</div>"

/***/ }),

/***/ "./src/app/load-images/load-images.component.ts":
/*!******************************************************!*\
  !*** ./src/app/load-images/load-images.component.ts ***!
  \******************************************************/
/*! exports provided: LoadImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadImagesComponent", function() { return LoadImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image-storage.service */ "./src/app/image-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadImagesComponent = /** @class */ (function () {
    function LoadImagesComponent(imageStorageService) {
        this.imageStorageService = imageStorageService;
    }
    LoadImagesComponent.prototype.ngOnInit = function () {
    };
    LoadImagesComponent.prototype.uploadFile = function (event) {
        var images = Array.from(event).map(function (e) {
            var url = e.name;
            //Absurd regex pulled from stackoverflow that should trim the file extension...
            var imageName = url.replace(/\.[^/.]+$/, "");
            return {
                name: imageName,
                url: url,
                data: e
            };
        });
        this.imageStorageService.loadImages(images);
    };
    LoadImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-load-images',
            template: __webpack_require__(/*! ./load-images.component.html */ "./src/app/load-images/load-images.component.html"),
            styles: [__webpack_require__(/*! ./load-images.component.css */ "./src/app/load-images/load-images.component.css")]
        }),
        __metadata("design:paramtypes", [_image_storage_service__WEBPACK_IMPORTED_MODULE_1__["ImageStorageService"]])
    ], LoadImagesComponent);
    return LoadImagesComponent;
}());



/***/ }),

/***/ "./src/app/pixelization/pixelization.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pixelization/pixelization.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered {\r\n    margin: auto;\r\n}\r\n\r\n#main-canvas{\r\n    margin: 12px;\r\n}"

/***/ }),

/***/ "./src/app/pixelization/pixelization.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pixelization/pixelization.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered\">\r\n    <canvas id=\"main-canvas\" #mainCanvas></canvas>\r\n</div>"

/***/ }),

/***/ "./src/app/pixelization/pixelization.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pixelization/pixelization.component.ts ***!
  \********************************************************/
/*! exports provided: PixelizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelizationComponent", function() { return PixelizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var src_util_recursive_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/util/recursive_grid */ "./src/util/recursive_grid.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var State;
(function (State) {
    State[State["ShowPixelized"] = 0] = "ShowPixelized";
    State[State["ShowSolution"] = 1] = "ShowSolution";
})(State || (State = {}));
var PixelizationComponent = /** @class */ (function () {
    function PixelizationComponent() {
        this._state = undefined;
        this.SAMPLE_IMAGE_RESOLUTION = 256;
        this.UPDATE_INTERVAL = 20; //ms
    }
    PixelizationComponent.prototype.ngAfterViewInit = function () {
        var context = this._mainCanvas.nativeElement.getContext('webgl2', { alpha: false });
        this._renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({
            canvas: this._mainCanvas.nativeElement,
            context: context
        });
        this._renderer.setSize(512, 512);
        this._camera = new three__WEBPACK_IMPORTED_MODULE_1__["OrthographicCamera"](-1, 1, 1, -1, -1, 1);
        this._scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        var positions = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]);
        var uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
        var indices = [0, 1, 2, 0, 2, 3];
        var geo = new three__WEBPACK_IMPORTED_MODULE_1__["BufferGeometry"]();
        geo.addAttribute('position', new three__WEBPACK_IMPORTED_MODULE_1__["BufferAttribute"](positions, 3));
        geo.addAttribute('uv', new three__WEBPACK_IMPORTED_MODULE_1__["BufferAttribute"](uvs, 2));
        geo.setIndex(indices);
        this._imageMesh = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geo);
        this._scene.add(this._imageMesh);
        this._samplingGrid = new src_util_recursive_grid__WEBPACK_IMPORTED_MODULE_2__["RecursiveGrid"](this.SAMPLE_IMAGE_RESOLUTION);
        this._samplingMap = new three__WEBPACK_IMPORTED_MODULE_1__["DataTexture"](this._samplingGrid.data, this.SAMPLE_IMAGE_RESOLUTION, this.SAMPLE_IMAGE_RESOLUTION, three__WEBPACK_IMPORTED_MODULE_1__["AlphaFormat"], three__WEBPACK_IMPORTED_MODULE_1__["UnsignedByteType"]);
        this._samplingMap.minFilter = three__WEBPACK_IMPORTED_MODULE_1__["LinearFilter"];
        this._samplingMap.magFilter = three__WEBPACK_IMPORTED_MODULE_1__["LinearFilter"];
        this.resetSamplingMap();
        this._createPixelizeMaterial();
        this._createRegularMaterial();
        this.render();
    };
    PixelizationComponent.prototype.setImage = function (image) {
        this._renderer.setSize(image.image.width, image.image.height);
        this._pixelizeMaterial.uniforms["tex"].value = image;
        this._regularMaterial.uniforms["tex"].value = image;
    };
    PixelizationComponent.prototype.startPixelization = function () {
        console.log('Starting pixelization!');
        this.resetSamplingMap();
        this.setState(State.ShowPixelized);
        this.updateLoop();
    };
    PixelizationComponent.prototype.showSolution = function () {
        this.setState(State.ShowSolution);
    };
    PixelizationComponent.prototype.isRunning = function () {
        return this._state == State.ShowPixelized;
    };
    PixelizationComponent.prototype.setState = function (state) {
        if (state == this._state)
            return;
        this._state = state;
        switch (state) {
            case State.ShowPixelized:
                this._imageMesh.material = this._pixelizeMaterial;
                break;
            case State.ShowSolution:
                this._imageMesh.material = this._regularMaterial;
                break;
        }
    };
    PixelizationComponent.prototype.render = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.render(); });
        this._renderer.render(this._scene, this._camera);
    };
    PixelizationComponent.prototype.updateLoop = function () {
        var _this = this;
        if (this._state == State.ShowSolution)
            return;
        this._samplingGrid.refineOne();
        this._samplingMap.needsUpdate = true;
        setTimeout(function () {
            _this.updateLoop();
        }, this.UPDATE_INTERVAL);
    };
    PixelizationComponent.prototype.resetSamplingMap = function () {
        this._samplingGrid.reset();
        this._samplingMap.needsUpdate = true;
    };
    PixelizationComponent.prototype._createPixelizeMaterial = function () {
        var vertSource = "\n\n    varying vec2 vUv;\n\n    void main() {\n      vUv = uv;\n      gl_Position = vec4(position, 1.0);\n    }\n  ";
        //It would be nice to use the mipmaps for pixelization, however automatic mipmap
        //creation only works on power-of-two textures :( Leaving this code in as a comment
        //if I ever get around to implementing manual mipmap creation
        //   const fragSourceWithMipmaps = `
        //   uniform sampler2D tex;
        //   uniform sampler2D samplingMap;
        //   varying vec2 vUv;
        //   void main() {
        //     float mipmapLevel = texture2D(samplingMap, vUv).a * 256.0;        
        //     float samplingFactor = pow(2.0, mipmapLevel);
        //     int uvX = int(floor(vUv.x * 512.0 / samplingFactor));
        //     int uvY = int(floor(vUv.y * 512.0 / samplingFactor));
        //     gl_FragColor = texelFetch(tex, ivec2(uvX, uvY), int(mipmapLevel));
        //   }
        // `;
        var fragSource = "\n    uniform sampler2D tex;\n    uniform sampler2D samplingMap;\n\n    varying vec2 vUv;\n\n    void main() {\n      float mipmapLevel = texture2D(samplingMap, vUv).a * 256.0;        \n      float samplingFactor = pow(2.0, mipmapLevel);\n      float scaledU = floor(vUv.x * 512.0 / samplingFactor) * (samplingFactor / 512.0);\n      float scaledV = floor(vUv.y * 512.0 / samplingFactor) * (samplingFactor / 512.0);\n      gl_FragColor = texture2D(tex, vec2(scaledU, scaledV));\n    }\n  ";
        this._pixelizeMaterial = new three__WEBPACK_IMPORTED_MODULE_1__["ShaderMaterial"]({
            vertexShader: vertSource,
            fragmentShader: fragSource,
            uniforms: {
                'tex': { value: null },
                'samplingMap': { value: null }
            },
            name: "PixelizeMaterial"
        });
        this._pixelizeMaterial.uniforms['samplingMap'].value = this._samplingMap;
    };
    PixelizationComponent.prototype._createRegularMaterial = function () {
        var vertSource = "\n\n    varying vec2 vUv;\n\n    void main() {\n      vUv = uv;\n      gl_Position = vec4(position, 1.0);\n    }\n  ";
        var fragSource = "\n    uniform sampler2D tex;\n\n    varying vec2 vUv;\n\n    void main() {\n      gl_FragColor = texture2D(tex, vUv);\n    }\n  ";
        this._regularMaterial = new three__WEBPACK_IMPORTED_MODULE_1__["ShaderMaterial"]({
            vertexShader: vertSource,
            fragmentShader: fragSource,
            uniforms: {
                'tex': { value: null }
            },
            name: "RegularMaterial"
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mainCanvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PixelizationComponent.prototype, "_mainCanvas", void 0);
    PixelizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pixelization',
            template: __webpack_require__(/*! ./pixelization.component.html */ "./src/app/pixelization/pixelization.component.html"),
            styles: [__webpack_require__(/*! ./pixelization.component.css */ "./src/app/pixelization/pixelization.component.css")]
        })
    ], PixelizationComponent);
    return PixelizationComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/util/recursive_grid.ts":
/*!************************************!*\
  !*** ./src/util/recursive_grid.ts ***!
  \************************************/
/*! exports provided: RecursiveGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursiveGrid", function() { return RecursiveGrid; });
/* harmony import */ var is_power_of_two__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-power-of-two */ "./node_modules/is-power-of-two/index.js");
/* harmony import */ var is_power_of_two__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_power_of_two__WEBPACK_IMPORTED_MODULE_0__);

var QuadtreeNode = /** @class */ (function () {
    function QuadtreeNode(_level, _extent) {
        this._level = _level;
        this._extent = _extent;
        this.children = undefined;
    }
    Object.defineProperty(QuadtreeNode.prototype, "level", {
        get: function () {
            return this._level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuadtreeNode.prototype, "extent", {
        get: function () {
            return this._extent;
        },
        enumerable: true,
        configurable: true
    });
    QuadtreeNode.prototype.isLeaf = function () {
        return this.children == undefined;
    };
    QuadtreeNode.prototype.isInterior = function () {
        return !this.isLeaf();
    };
    QuadtreeNode.prototype.isFullyRefined = function () {
        return this._extent.sidelength == 1;
    };
    QuadtreeNode.prototype.convertToInterior = function () {
        if (!this.isLeaf())
            throw new Error("Can't call makeInterior on a node that is already an interior node!");
        var childSidelength = this._extent.sidelength / 2;
        this.children = [
            new QuadtreeNode(this._level + 1, {
                x: this._extent.x,
                y: this._extent.y,
                sidelength: childSidelength
            }),
            new QuadtreeNode(this._level + 1, {
                x: this._extent.x + childSidelength,
                y: this._extent.y,
                sidelength: childSidelength
            }),
            new QuadtreeNode(this._level + 1, {
                x: this._extent.x,
                y: this._extent.y + childSidelength,
                sidelength: childSidelength
            }),
            new QuadtreeNode(this._level + 1, {
                x: this._extent.x + childSidelength,
                y: this._extent.y + childSidelength,
                sidelength: childSidelength
            })
        ];
    };
    return QuadtreeNode;
}());
/**
 * This is a 2D grid of pixels that represents the 'pixelization' of an image. This
 * is done by assigning each pixe a value that corresponds to the mipmap level of the
 * image to sample from. It starts out with the smallest mipmap level for each pixel
 * and can be refined dynamically
 */
var RecursiveGrid = /** @class */ (function () {
    function RecursiveGrid(sidelength) {
        this.sidelength = sidelength;
        this._leafNodes = new Set();
        if (!is_power_of_two__WEBPACK_IMPORTED_MODULE_0__(sidelength))
            throw new Error("Sidelength must be a power of two!");
        this._maxMipmapLevel = Math.log2(this.sidelength);
        this._data = new Uint8Array(sidelength * sidelength);
        this._data.fill(this._maxMipmapLevel);
        console.log("Maximum mipmap level: " + this._maxMipmapLevel);
        this._quadtree = new QuadtreeNode(0, {
            x: 0,
            y: 0,
            sidelength: sidelength
        });
        this._leafNodes.add(this._quadtree);
    }
    Object.defineProperty(RecursiveGrid.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    RecursiveGrid.prototype.refineOne = function () {
        var _this = this;
        var node = this._getRandomLeafNode();
        if (node == undefined)
            return undefined;
        if (node.isInterior())
            throw new Error("Node should not be interior node!");
        var expectedVal = this._maxMipmapLevel - node.level;
        for (var y = node.extent.y; y < node.extent.y + node.extent.sidelength; ++y) {
            for (var x = node.extent.x; x < node.extent.x + node.extent.sidelength; ++x) {
                var idx1D = (y * this.sidelength) + x;
                this.data[idx1D] -= 1;
            }
        }
        node.convertToInterior();
        this._leafNodes.delete(node);
        if (!node.isFullyRefined()) {
            node.children.forEach(function (childNode) { return _this._leafNodes.add(childNode); });
        }
        return {
            refinedLevel: node.level,
            pixelsRefined: node.extent.sidelength * node.extent.sidelength
        };
    };
    RecursiveGrid.prototype.reset = function () {
        this._data.fill(this._maxMipmapLevel);
        this._quadtree = new QuadtreeNode(0, {
            x: 0,
            y: 0,
            sidelength: this.sidelength
        });
        this._leafNodes.clear();
        this._leafNodes.add(this._quadtree);
    };
    RecursiveGrid.prototype._getRandomLeafNode = function () {
        if (this._leafNodes.size == 0)
            return undefined;
        // Weight nodes by their area so that larger nodes have a higher chance
        // of being selected. We can do this by using the roulette wheel selection
        // algorithm
        var nodeWeight = function (node) {
            return node.extent.sidelength * node.extent.sidelength;
        };
        var leafNodesAsArray = Array.from(this._leafNodes);
        var leafNodeWeights = leafNodesAsArray.map(nodeWeight);
        var totalWeight = leafNodeWeights.reduce(function (accum, weight) { return accum + weight; });
        var rndWeight = Math.random() * totalWeight;
        var partialSum = 0;
        for (var idx = 0; idx < leafNodeWeights.length; ++idx) {
            var weightEnd = partialSum + leafNodeWeights[idx];
            partialSum = weightEnd;
            if (rndWeight < weightEnd)
                return leafNodesAsArray[idx];
        }
        return leafNodesAsArray[leafNodesAsArray.length - 1];
    };
    return RecursiveGrid;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\data\dev\pixel-game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map