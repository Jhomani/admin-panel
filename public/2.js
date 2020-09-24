(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin-pages/Roles.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin-pages/Roles.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      roles: [],
      newRole: {
        name: ''
      },
      editRole: {
        name: ''
      },
      addModal: false,
      editModal: false,
      index: -1,
      isLoading: false,
      token: ''
    };
  },
  created: function created() {
    this.getData();
  },
  methods: {
    handleSubmit: function handleSubmit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var name, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _this.newRole.name;

                if (name) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", _this.$Notice.error({
                  title: 'Role name is required'
                }));

              case 3:
                _this.isLoading = true;
                _context.next = 6;
                return _this.callApi('post', '/app/add_role', _this.newRole);

              case 6:
                res = _context.sent;
                _this.isLoading = false;

                if (res.status === 201) {
                  _this.$Notice.success({
                    title: 'add User successfully',
                    desc: ''
                  });

                  _this.roles.push(res.data);

                  _this.addModal = false;
                } else if (res.status === 422) {
                  _this.$Notice.error({
                    title: 'Validation error',
                    desc: ''
                  });

                  console.log(res);
                } else {
                  _this.$Notice.error({
                    title: 'Can not add Role',
                    desc: ''
                  });
                }

                _this.newRole = {
                  name: ''
                };

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getData: function getData() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.callApi('get', '/app/get_roles');

              case 2:
                res = _context2.sent;

                if (res.status == 200) {
                  _this2.roles = res.data;
                } else {
                  _this2.$Notice.error({
                    title: 'Can not get users',
                    desc: ''
                  });
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    handleOpenModalEdit: function handleOpenModalEdit(role, index) {
      this.editModal = true;
      this.editRole = _objectSpread({}, role);
      this.index = index;
    },
    handleSaveEditRole: function handleSaveEditRole() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var name, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                name = _this3.editRole.name;

                if (name) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", _this3.$Notice.error({
                  title: 'Role name is required'
                }));

              case 3:
                _this3.isLoading = true;
                _context3.next = 6;
                return _this3.callApi('post', '/app/edit_role', _this3.editRole);

              case 6:
                res = _context3.sent;
                _this3.isLoading = false;

                if (res.status === 200) {
                  _this3.$Notice.success({
                    title: 'add User successfully',
                    desc: ''
                  });

                  _this3.roles[_this3.index] = _this3.editRole;
                  _this3.editModal = false;
                } else if (res.status === 422) {
                  _this3.$Notice.error({
                    title: 'Validation error',
                    desc: ''
                  });
                } else {
                  _this3.$Notice.error({
                    title: 'Can not add Role',
                    desc: ''
                  });
                }

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    handleDelete: function handleDelete(role, index) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (confirm('Are you sure delete this provider')) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                //provider.isDeleting = true;
                _this4.$set(role, 'isDeleting', true);

                _context4.next = 5;
                return _this4.callApi('post', '/app/delete_role', {
                  id: role.id
                });

              case 5:
                res = _context4.sent;

                _this4.$set(role, 'isDeleting', false);

                if (res.status === 200) {
                  _this4.roles.splice(index, 1);

                  _this4.$Notice.success({
                    title: 'Delete provider successfully',
                    desc: ''
                  });
                } else {
                  _this4.$Notice.error({
                    title: 'Can not delete provider',
                    desc: ''
                  });
                }

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin-pages/Roles.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin-pages/Roles.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ivu-modal{\n  top: 50px;\n}\n.input-number{\n  display: flex;\n}\n.input-number .ivu-form-item{\n  margin-left:10px;\n}\n.input-number .ivu-form-item:first-child{\n  margin-left:0px;\n}\n.container-provider{\n  position: fixed;\n  top:80px;\n  right:0;\n  left:248px;\n  z-index:-2;\n}\n.vertical-center-modal{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vertical-center-modal .ivu-modal{\n    top: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin-pages/Roles.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin-pages/Roles.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin-pages/Roles.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin-pages/Roles.vue?vue&type=template&id=a240720a&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin-pages/Roles.vue?vue&type=template&id=a240720a& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-provider" }, [
    _c(
      "div",
      { staticClass: "container-fluid" },
      [
        _c(
          "div",
          {
            staticClass:
              "_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20"
          },
          [
            _c(
              "p",
              { staticClass: "_title0" },
              [
                _vm._v("\n          Roles Management\n          "),
                _c(
                  "Button",
                  {
                    staticStyle: { "margin-left": "10px" },
                    attrs: {
                      title: "add provider",
                      shape: "circle",
                      icon: "md-add"
                    },
                    on: {
                      click: function($event) {
                        _vm.addModal = true
                      }
                    }
                  },
                  [_vm._v("\n            Add role\n          ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "_overflow _table_div" }, [
              _c(
                "table",
                { staticClass: "_table" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._l(_vm.roles, function(role, index) {
                    return _c("tr", { key: role.id }, [
                      _c("td", [_vm._v(_vm._s(role.id))]),
                      _vm._v(" "),
                      _c("td", { staticClass: "_table_name" }, [
                        _vm._v(_vm._s(role.role_name))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(role.created_at.slice(0, 10)))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "Button",
                            {
                              attrs: { type: "success" },
                              on: {
                                click: function($event) {
                                  return _vm.handleOpenModalEdit(role, index)
                                }
                              }
                            },
                            [_vm._v("Edit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "Button",
                            {
                              attrs: {
                                loading: role.isDeleting,
                                type: "error"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.handleDelete(role, index)
                                }
                              }
                            },
                            [_vm._v("Delete")]
                          )
                        ],
                        1
                      )
                    ])
                  })
                ],
                2
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c("Page", { attrs: { total: 100 } }),
        _vm._v(" "),
        _c(
          "Modal",
          {
            attrs: { title: "Add Role" },
            model: {
              value: _vm.addModal,
              callback: function($$v) {
                _vm.addModal = $$v
              },
              expression: "addModal"
            }
          },
          [
            _c(
              "Form",
              { attrs: { "label-position": "top" } },
              [
                _c(
                  "FormItem",
                  { attrs: { label: "Role name:" } },
                  [
                    _c("Input", {
                      attrs: { placeholder: "Enter name of role" },
                      model: {
                        value: _vm.newRole.name,
                        callback: function($$v) {
                          _vm.$set(_vm.newRole, "name", $$v)
                        },
                        expression: "newRole.name"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { attrs: { slot: "footer" }, slot: "footer" },
              [
                _c(
                  "Button",
                  {
                    staticStyle: { "margin-top": "15px" },
                    attrs: {
                      type: "success",
                      disable: _vm.isLoading,
                      loading: _vm.isLoading,
                      long: ""
                    },
                    on: { click: _vm.handleSubmit }
                  },
                  [
                    _vm._v(
                      " \n          " +
                        _vm._s(_vm.isLoading ? "Adding..." : "Add Role") +
                        "\n        "
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "Modal",
          {
            attrs: { title: "Edit Role" },
            model: {
              value: _vm.editModal,
              callback: function($$v) {
                _vm.editModal = $$v
              },
              expression: "editModal"
            }
          },
          [
            _c(
              "Form",
              { attrs: { "label-position": "top" } },
              [
                _c(
                  "FormItem",
                  { attrs: { label: "Role name:" } },
                  [
                    _c("Input", {
                      attrs: { placeholder: "Enter name of role" },
                      model: {
                        value: _vm.editRole.name,
                        callback: function($$v) {
                          _vm.$set(_vm.editRole, "name", $$v)
                        },
                        expression: "editRole.name"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { attrs: { slot: "footer" }, slot: "footer" },
              [
                _c(
                  "Button",
                  {
                    staticStyle: { "margin-top": "15px" },
                    attrs: {
                      type: "success",
                      disable: _vm.isLoading,
                      loading: _vm.isLoading,
                      long: ""
                    },
                    on: { click: _vm.handleSaveEditRole }
                  },
                  [
                    _vm._v(
                      " \n          " +
                        _vm._s(_vm.isLoading ? "Editing..." : "Edit Role") +
                        "\n        "
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("ID")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Created At")]),
      _vm._v(" "),
      _c("th", [_vm._v("Action")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/admin-pages/Roles.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/admin-pages/Roles.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Roles_vue_vue_type_template_id_a240720a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Roles.vue?vue&type=template&id=a240720a& */ "./resources/js/pages/admin-pages/Roles.vue?vue&type=template&id=a240720a&");
/* harmony import */ var _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Roles.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin-pages/Roles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Roles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Roles.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/admin-pages/Roles.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Roles_vue_vue_type_template_id_a240720a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Roles_vue_vue_type_template_id_a240720a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin-pages/Roles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin-pages/Roles.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/admin-pages/Roles.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin-pages/Roles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin-pages/Roles.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/admin-pages/Roles.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin-pages/Roles.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/admin-pages/Roles.vue?vue&type=template&id=a240720a&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/admin-pages/Roles.vue?vue&type=template&id=a240720a& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_a240720a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=template&id=a240720a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin-pages/Roles.vue?vue&type=template&id=a240720a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_a240720a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_a240720a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);