(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\carlo\Documents\Proyectos - Front\angular\angular-sample\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1+r1":
    /*!********************************************!*\
      !*** ./src/app/modules/material.module.ts ***!
      \********************************************/

    /*! exports provided: MaterialModule */

    /***/
    function r1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "aCXV");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material */
      "vdoh"); // Drag & Drop
      // Hammer.js - soporte para (mat-slide-toggle, mat-slider, matTooltip)
      //Animaciones
      // Angular Material


      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MaterialModule_Factory(t) {
          return new (t || MaterialModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"]], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"]],
          exports: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "3F0J":
    /*!**************************************************************!*\
      !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
      \**************************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function F0J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../package.json */
      "kiQV");

      var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../../package.json */
      "kiQV", 1);
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material */
      "vdoh"); // Version de la aplicacion


      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent() {
          _classCallCheck(this, NavbarComponent);

          this.title = 'Check List';
          this.appVersion = _package_json__WEBPACK_IMPORTED_MODULE_1__["version"];
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)();
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 21,
        vars: 3,
        consts: [["color", "primary"], ["width", "100", "src", "../../assets/img/angular_logo.png", "alt", "Angular", "title", "Angular"], [1, "titulo"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "disabled", ""]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "trending_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Copyright \xA9 - Carlos Mur");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Version: ", ctx.appVersion, "");
          }
        },
        directives: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenu"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"]],
        styles: [".titulo[_ngcontent-%COMP%]{\n    color:#fff; \n    display:inline-block;\n}\n.mat-toolbar[_ngcontent-%COMP%]{\n    padding: 100px !important;\n    padding-left: 0 !important;\n}\n.mat-icon-button[_ngcontent-%COMP%] {\n    padding: 0;\n    min-width: 0;\n    width: 40px;\n    height: 40px;\n    flex-shrink: 0;\n    line-height: 40px;\n    border-radius: 50%;\n    top: 1%;\n    position: absolute;\n    right: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEVzdGlsb3MgZGVsIGNvbXBvbmVudGUgKi9cbi50aXR1bG97XG4gICAgY29sb3I6I2ZmZjsgXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG5cbi5tYXQtdG9vbGJhcntcbiAgICBwYWRkaW5nOiAxMDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWljb24tYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRvcDogMSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxJTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: '../../../views/shared/navbar.component.html',
            styleUrls: ['./navbar.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: true
      };
      /***/
    },

    /***/
    "BuFo":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function BuFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "aCXV");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "IRfi");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HomeComponent_button_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A\xF1adir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.newTask === "");
        }
      }

      function HomeComponent_button_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.newTask === "");
        }
      }

      function HomeComponent_button_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.newTask === "");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "checked": a0
        };
      };

      function HomeComponent_li_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-checkbox", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_li_21_Template_mat_checkbox_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var task_r4 = ctx.$implicit;
            return task_r4.completed = $event;
          })("change", function HomeComponent_li_21_Template_mat_checkbox_change_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.comprobarSiAllSelected();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_li_21_Template_i_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var task_r4 = ctx.$implicit;
            var i_r5 = ctx.index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.editTask(task_r4, i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_li_21_Template_i_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var i_r5 = ctx.index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.deleteTask(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var task_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", task_r4.completed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, task_r4.completed));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r4.newTask);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);

          // Variables
          this.newTask = '';
          this.tasks = [];
          this.storage = JSON.parse(localStorage.getItem('tarea'));
          console.log(this.storage);
          this.tasks = JSON.parse(localStorage.getItem('tarea'));

          if (this.tasks === 0) {
            this.tasks = [];
          }

          this.deshabilitado = true;
          this.editarTask = false;
        }

        _createClass(HomeComponent, [{
          key: "strikeTask",
          value: function strikeTask(item) {
            console.log(item.newTask);
            var cadenaTexto = item.newTask;
            item.newTask = cadenaTexto.strike();
          } //----------------------------------------------------------------------//
          // Metodo dataTask: Anadir tareas nuevas a la lista                      //
          //----------------------------------------------------------------------//

        }, {
          key: "dataTask",
          value: function dataTask(event) {
            // Log de seguimiento
            console.log('HomeComponent - Metodo dataTask'); // Editar Tarea

            if (this.editarTask) {
              // Guardamos la tarea modificada
              this.taskObjAdd = {
                newTask: this.newTask
              }; // console.log(this.taskObjEdit.newTask)
              // console.log(this.taskObjAdd.newTask);
              // Obtenemos los datos de la tarea a modificar

              var localTasks = JSON.parse(localStorage.getItem('tarea'));

              for (var index = 0; index < localTasks.length; index++) {
                if (localTasks[index].newTask === this.taskObjEdit.newTask) {
                  localTasks[index].newTask = this.taskObjAdd.newTask, // console.log(localTasks);
                  // Guardamos la tarea en localStorage
                  localStorage.setItem('tarea', JSON.stringify(localTasks)); // Deshabilitamos la edicion

                  this.editarTask = false; // recuperamos los datos modificados y los mostramos

                  this.tasks = JSON.parse(localStorage.getItem('tarea'));
                }
              }
            } else {
              // Añadir Tarea
              this.taskObjAdd = {
                newTask: this.newTask,
                completed: false
              }; // Insertamos la nueva tarea

              this.tasks.push(this.taskObjAdd); // Guardamos la tarea en localStorage

              localStorage.setItem('tarea', JSON.stringify(this.tasks));
              this.storage = this.tasks;
            }

            this.newTask = '';
            event.preventDefault();
          } //----------------------------------------------------------------------//
          // Metodo editTask: Edita una tarea seleccionada                        //
          //----------------------------------------------------------------------//

        }, {
          key: "editTask",
          value: function editTask(tarea, index) {
            // Log de seguimiento
            console.log('HomeComponent - Metodo editTask');
            this.editarTask = true;
            this.taskObjEdit = {
              newTask: tarea.newTask
            };
            this.newTask = tarea.newTask;
          } //----------------------------------------------------------------------//
          // Metodo deleteTask: Eliminar tarea seleccionada                       //
          //----------------------------------------------------------------------//

        }, {
          key: "deleteTask",
          value: function deleteTask(index) {
            // Log de seguimiento
            console.log('HomeComponent - Metodo deleteTask');
            this.tasks.splice(index, 1);
            localStorage.setItem('tarea', JSON.stringify(this.tasks));
            this.storage = this.tasks;
          } //----------------------------------------------------------------------//
          // Metodo deleteSelectedTasks: Eliminar todas las tareas seleccionadas  //
          //----------------------------------------------------------------------//

        }, {
          key: "deleteSelectedTasks",
          value: function deleteSelectedTasks() {
            // Log de seguimiento
            console.log('HomeComponent - Metodo deleteSelectedTasks');

            for (var i = this.tasks.length - 1; i > -1; i--) {
              if (this.tasks[i].completed) {
                this.tasks.splice(i, 1);
                localStorage.setItem('tarea', JSON.stringify(this.tasks));
              }
            }

            this.storage = this.tasks; // Deshabilitamos el boton y check

            this.selectedAll = false;
            this.deshabilitado = true;
          } //----------------------------------------------------------------------//
          // Metodo drop: Cambiar el orden de las tareas mediante Drag/Drop       //
          //----------------------------------------------------------------------//

        }, {
          key: "drop",
          value: function drop(event) {
            // Log de seguimiento
            console.log('HomeComponent - Metodo drop');
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.tasks, event.previousIndex, event.currentIndex); // Guardamos el nuevo orden

            localStorage.setItem('tarea', JSON.stringify(this.tasks));
          } //----------------------------------------------------------------------//
          // Metodo selectAll: Seleccionar todas las tareas a la vez              //
          //----------------------------------------------------------------------//

        }, {
          key: "selectAll",
          value: function selectAll() {
            // Log de seguimiento
            console.log('HomeComponent - Metodo selectAll');
            this.selectedAll = !this.selectedAll;

            for (var i = 0; i < this.tasks.length; i++) {
              this.tasks[i].selected = this.selectedAll;
              this.tasks[i].completed = this.selectedAll;
            } // Guardamos los atributos


            localStorage.setItem('tarea', JSON.stringify(this.tasks)); // Validamos para activar o desactivar el boton

            if (this.selectedAll) {
              this.deshabilitado = false;
            } else {
              this.deshabilitado = true;
            }
          } //----------------------------------------------------------------------//
          // Metodo comprobarSiAllSelected: Seleccionar todas las tareas a la vez //
          //----------------------------------------------------------------------//  

        }, {
          key: "comprobarSiAllSelected",
          value: function comprobarSiAllSelected() {
            // Log de seguimiento
            console.log('HomeComponent - Metodo selectAll');
            var totalSelected = 0;
            var contador = 0;

            for (var i = 0; i < this.tasks.length; i++) {
              if (this.tasks[i].selected) totalSelected++;

              if (this.tasks[i].completed) {
                contador = contador + 1;
              }
            }

            this.selectedAll = totalSelected === this.tasks.length; // Guardamos los atributos

            localStorage.setItem('tarea', JSON.stringify(this.tasks));

            if (contador > 1) {
              this.deshabilitado = false;
            } else {
              this.deshabilitado = true;
            }

            return true;
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 22,
        vars: 7,
        consts: [[1, "container"], [1, "todos", "form-wrap"], [1, "form-field-wrap"], ["mat-raised-button", "", 1, "app-button", "m-2", 3, "disabled", "click"], ["mat-raised-button", "", 1, "delete-selected", 3, "disabled", "click"], [3, "submit"], [1, "row"], [1, "col-8"], [1, "full-width"], ["name", "newTask", "matInput", "", "placeholder", "A\xF1adir nueva tarea", 1, "textfield", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "col-4"], ["mat-raised-button", "", "type", "submit", "class", "add-button mt-2 btn-block", 3, "disabled", 4, "ngIf"], ["mat-raised-button", "", "type", "submit", "class", "edit-button mt-2 btn-block", 3, "disabled", 4, "ngIf"], ["mat-raised-button", "", "class", "cancel-button mt-2 btn-block", 3, "disabled", 4, "ngIf"], ["cdkDropList", "", 1, "task-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "submit", 1, "add-button", "mt-2", "btn-block", 3, "disabled"], ["mat-raised-button", "", "type", "submit", 1, "edit-button", "mt-2", "btn-block", 3, "disabled"], ["mat-raised-button", "", 1, "cancel-button", "mt-2", "btn-block", 3, "disabled"], ["cdkDrag", "", 1, "example-box"], [1, "row", "w-100"], [1, "col-10"], [1, "checkbox", 3, "ngModel", "ngModelChange", "change"], [1, "task-added", 3, "ngClass"], [1, "col-2", "material-icons"], [1, "edit-icon", 3, "click"], [1, "delete-icon", 3, "click"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lista de tareas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() {
              return ctx.selectAll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Seleccionar todas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_8_listener() {
              return ctx.deleteSelectedTasks();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Eliminar seleccionadas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function HomeComponent_Template_form_submit_11_listener($event) {
              return ctx.dataTask($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.newTask = $event;
            })("keyup.enter", function HomeComponent_Template_input_keyup_enter_15_listener() {
              return ctx.newTask = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_button_17_Template, 2, 1, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_button_18_Template, 2, 1, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_button_19_Template, 2, 1, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function HomeComponent_Template_ul_cdkDropListDropped_20_listener($event) {
              return ctx.drop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_li_21_Template, 11, 5, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.storage.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.deshabilitado);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newTask);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editarTask);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editarTask);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editarTask);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
          }
        },
        directives: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
        styles: [".form-wrap[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    top: -30px;\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); \r\n}\r\n.form-field-wrap[_ngcontent-%COMP%]{\r\n    padding: 50px;\r\n}\r\n.full-width[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n.form-wrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    background: #D32F2F;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 28px;\r\n}\r\n.task-list[_ngcontent-%COMP%]{\r\n    list-style-type: none;\r\n    padding-left: 0;\r\n    display: block;\r\n    background: white;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n}\r\n.mat-checkbox-checked[_ngcontent-%COMP%]{\r\n    text-decoration:line-through\r\n}\r\n.app-button[_ngcontent-%COMP%]{\r\n    background:blue;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n.add-button[_ngcontent-%COMP%]{\r\n    background:#28a745;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n.edit-button[_ngcontent-%COMP%]{\r\n    background:#dceb0b;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n.cancel-button[_ngcontent-%COMP%]{\r\n    background:#D32F2F;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n.edit-icon[_ngcontent-%COMP%]{\r\n    color: #dceb0b;\r\n    cursor: pointer;\r\n}\r\n.delete-icon[_ngcontent-%COMP%]{\r\n    color: #D32F2F;\r\n    cursor: pointer;\r\n}\r\n.delete-selected[_ngcontent-%COMP%]{\r\n    color: white;\r\n    background: #D32F2F;\r\n    cursor: pointer;\r\n}\r\n.task-added[_ngcontent-%COMP%]{\r\n    margin-left: 15px;\r\n}\r\n.task-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    margin-bottom: 5px;\r\n}\r\n.example-box[_ngcontent-%COMP%] {\r\n    padding: 8px 10px;\r\n    padding-bottom: 0;\r\n    border-bottom: solid 1px #ccc;\r\n    color: rgba(0, 0, 0, 0.87);\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    box-sizing: border-box;\r\n    cursor: move;\r\n    background: white;\r\n    font-size: 14px;\r\n    }\r\n.cdk-drag-preview[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n}\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n.example-box[_ngcontent-%COMP%]:last-child {\r\n    border: none;\r\n}\r\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\nw-100[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmO0FBRUo7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCOztrREFFOEM7QUFDbEQ7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksc0RBQXNEO0FBQzFEO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFc3RpbG9zIGRlbCBjb21wb25lbnRlICovXHJcbi5mb3JtLXdyYXB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpOyBcclxufVxyXG4uZm9ybS1maWVsZC13cmFwe1xyXG4gICAgcGFkZGluZzogNTBweDtcclxufVxyXG4uZnVsbC13aWR0aHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mb3JtLXdyYXAgaDR7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0QzMkYyRjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcbi50YXNrLWxpc3R7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubWF0LWNoZWNrYm94LWNoZWNrZWR7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoXHJcbn1cclxuLmFwcC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOmJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFkZC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiMyOGE3NDU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmVkaXQtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDojZGNlYjBiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYW5jZWwtYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDojRDMyRjJGO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5lZGl0LWljb257XHJcbiAgICBjb2xvcjogI2RjZWIwYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZGVsZXRlLWljb257XHJcbiAgICBjb2xvcjogI0QzMkYyRjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZGVsZXRlLXNlbGVjdGVke1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogI0QzMkYyRjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGFzay1hZGRlZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi50YXNrLWxpc3QgbGl7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuICBcclxuLmV4YW1wbGUtYm94IHtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxudy0xMDB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: '../../views/home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "LdjU":
    /*!**********************************************!*\
      !*** ./src/app/routes/app-routing.module.ts ***!
      \**********************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function LdjU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../components/home/home.component */
      "BuFo"); // Componentes


      var routes = [{
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              useHash: true
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "RLs1":
    /*!**********************************************!*\
      !*** ./src/app/modules/components.module.ts ***!
      \**********************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function RLs1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../routes/app-routing.module */
      "LdjU");
      /* harmony import */


      var _modules_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../modules/material.module */
      "1+r1");
      /* harmony import */


      var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/shared/navbar/navbar.component */
      "3F0J"); // Rutas
      // Componentes


      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ComponentsModule
      });
      ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ComponentsModule_Factory(t) {
          return new (t || ComponentsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, {
          declarations: [_components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]],
          exports: [_components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
            exports: [_components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/shared/navbar/navbar.component */
      "3F0J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Todo list module';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./routes/app-routing.module */
      "LdjU");
      /* harmony import */


      var _modules_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modules/material.module */
      "1+r1");
      /* harmony import */


      var _modules_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modules/components.module */
      "RLs1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo"); // Formularios
      // Rutas
      // Modulos componentes reutilizables/comunes
      // Componentes


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _modules_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _modules_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _modules_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "kiQV":
    /*!**********************!*\
      !*** ./package.json ***!
      \**********************/

    /*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */

    /***/
    function kiQV(module) {
      module.exports = JSON.parse("{\"name\":\"checklist\",\"version\":\"0.1.1\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~10.2.3\",\"@angular/cdk\":\"~7.3.7\",\"@angular/common\":\"~10.2.3\",\"@angular/compiler\":\"~10.2.3\",\"@angular/core\":\"~10.2.3\",\"@angular/forms\":\"~10.2.3\",\"@angular/material\":\"^7.3.7\",\"@angular/platform-browser\":\"~10.2.3\",\"@angular/platform-browser-dynamic\":\"~10.2.3\",\"@angular/router\":\"~10.2.3\",\"core-js\":\"^2.5.4\",\"hammerjs\":\"^2.0.8\",\"rxjs\":\"~6.6.3\",\"tslib\":\"^2.0.0\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.1002.0\",\"@angular/cli\":\"~10.2.0\",\"@angular/compiler-cli\":\"~10.2.3\",\"@angular/language-service\":\"~10.2.3\",\"@types/node\":\"^12.11.1\",\"@types/jasmine\":\"~2.8.8\",\"@types/jasminewd2\":\"~2.0.3\",\"codelyzer\":\"^5.1.2\",\"jasmine-core\":\"~3.5.0\",\"jasmine-spec-reporter\":\"~5.0.0\",\"karma\":\"~5.0.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.2\",\"karma-jasmine\":\"~4.0.0\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~7.0.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"~4.0.5\"}}");
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map