(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin-pages/Products.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin-pages/Products.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
      products: [],
      newProduct: {
        name: '',
        description: '',
        image: '',
        price: '',
        country_origin: '',
        quantity: '',
        provider_id: ''
      },
      editProduct: {
        name: '',
        description: '',
        image: '',
        price: '',
        country_origin: '',
        quantity: '',
        provider_id: ''
      },
      addModal: false,
      editModal: false,
      index: -1,
      isLoading: false
    };
  },
  created: function created() {
    this.getData();
  },
  methods: {
    handleSubmit: function handleSubmit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this$newProduct, name, description, price, quantity, provider_id, image, res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$newProduct = _this.newProduct, name = _this$newProduct.name, description = _this$newProduct.description, price = _this$newProduct.price, quantity = _this$newProduct.quantity, provider_id = _this$newProduct.provider_id, image = _this$newProduct.image;

                if (!(!name || !description || !price || !quantity || !provider_id || !image)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", _this.$Notice.error({
                  title: 'Fill all the fields, please.',
                  desc: ''
                }));

              case 3:
                _this.isLoading = true;
                _context.next = 6;
                return _this.callApi('post', '/app/add-product', _this.newProduct);

              case 6:
                res = _context.sent;
                console.log(res);
                _this.isLoading = false;

                if (("" + res.status).match(/^2/) !== null) {
                  _this.$Notice.success({
                    title: 'add data successfully',
                    desc: ''
                  });

                  _this.products.push(res.data);
                } else {
                  _this.$Notice.error({
                    title: 'Can not add data',
                    desc: ''
                  });
                }

                _this.addModal = false;
                _this.newProduct = {
                  name: '',
                  description: '',
                  image: '',
                  price: '',
                  country_origin: '',
                  quantity: '',
                  provider_id: ''
                };

              case 12:
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
                return _this2.callApi('get', '/app/get-products');

              case 2:
                res = _context2.sent;

                if (("" + res.status).match(/^2/) !== null) {
                  _this2.products = res.data;
                } else {
                  _this2.$Notice.error({
                    title: 'Can not get product',
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
    handleOpenModalEdit: function handleOpenModalEdit(product, index) {
      this.editModal = true;
      this.editProduct = _objectSpread({}, product);
      this.index = index;
    },
    handleSaveEditProduct: function handleSaveEditProduct() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this3$editProduct, name, description, price, quantity, provider_id, image, res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3$editProduct = _this3.editProduct, name = _this3$editProduct.name, description = _this3$editProduct.description, price = _this3$editProduct.price, quantity = _this3$editProduct.quantity, provider_id = _this3$editProduct.provider_id, image = _this3$editProduct.image;

                if (!(!name || !description || !price || !quantity || !provider_id || !image)) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", _this3.$Notice.error({
                  title: 'Fill all fields, please.',
                  desc: ''
                }));

              case 3:
                _this3.isLoading = true;
                _context3.next = 6;
                return _this3.callApi('post', '/app/edit-product', _this3.editProduct);

              case 6:
                res = _context3.sent;
                _this3.isLoading = false;

                if (("" + res.status).match(/^2/) !== null) {
                  _this3.products[_this3.index] = _objectSpread({}, _this3.editProduct);

                  _this3.$Notice.success({
                    title: 'Edit product successfully',
                    desc: ''
                  });

                  _this3.editModal = false;
                } else {
                  _this3.$Notice.error({
                    title: 'Can not Edit product',
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
    handleDelete: function handleDelete(product, index) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (confirm('Are you sure delete this product')) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                //product.isDeleting = true;
                _this4.$set(product, 'isDeleting', true);

                _context4.next = 5;
                return _this4.callApi('post', '/app/delete-product', {
                  id: product.id
                });

              case 5:
                res = _context4.sent;

                _this4.$set(product, 'isDeleting', false);

                if (("" + res.status).match(/^2/) !== null) {
                  _this4.products.splice(index, 1);

                  _this4.$Notice.success({
                    title: 'Delete product successfully',
                    desc: ''
                  });
                } else {
                  _this4.$Notice.error({
                    title: 'Can not delete product',
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin-pages/Products.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin-pages/Products.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ivu-modal{\n  top: 50px;\n}\n.input-number{\n  display: flex;\n}\n.input-number .ivu-form-item{\n  margin-left:10px;\n}\n.input-number .ivu-form-item:first-child{\n  margin-left:0px;\n}\n.container-product{\n  position: fixed;\n  top:80px;\n  right:0;\n  left:248px;\n  z-index:-2;\n}\n.vertical-center-modal{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vertical-center-modal .ivu-modal{\n    top: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin-pages/Products.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin-pages/Products.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin-pages/Products.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin-pages/Products.vue?vue&type=template&id=02e6cc16&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin-pages/Products.vue?vue&type=template&id=02e6cc16& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-product" }, [
    _c(
      "div",
      { staticClass: "container-fluid" },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 col-md-3" }, [
            _c(
              "div",
              {
                staticClass:
                  "_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_one"
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "_1adminOverveiw_card_right" },
                  [_c("Icon", { attrs: { type: "ios-paper" } })],
                  1
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-md-3" }, [
            _c(
              "div",
              {
                staticClass:
                  "_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_two"
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "_1adminOverveiw_card_right" },
                  [_c("Icon", { attrs: { type: "ios-paper-outline" } })],
                  1
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-md-3" }, [
            _c(
              "div",
              {
                staticClass:
                  "_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_two"
              },
              [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "_1adminOverveiw_card_right" },
                  [_c("Icon", { attrs: { type: "md-copy" } })],
                  1
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-md-3" }, [
            _c(
              "div",
              {
                staticClass:
                  "_1adminOverveiw_card _box_shadow _border_radious _mar_b30 _1adminOverveiw_bg_two"
              },
              [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "_1adminOverveiw_card_right" },
                  [_c("Icon", { attrs: { type: "md-list-box" } })],
                  1
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
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
                _vm._v("\n          Products \n          "),
                _c("Button", {
                  staticStyle: { "margin-left": "10px" },
                  attrs: {
                    title: "add product",
                    type: "success",
                    shape: "circle",
                    icon: "md-add"
                  },
                  on: {
                    click: function($event) {
                      _vm.addModal = true
                    }
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "_overflow _table_div" }, [
              _c(
                "table",
                { staticClass: "_table" },
                [
                  _vm._m(4),
                  _vm._v(" "),
                  _vm._l(_vm.products, function(product, index) {
                    return _c("tr", { key: product.id }, [
                      _c("td", [_vm._v(_vm._s(product.id))]),
                      _vm._v(" "),
                      _c("td", { staticClass: "_table_name" }, [
                        _vm._v(_vm._s(product.name))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Bs." + _vm._s(product.price))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(product.created_at.slice(0, 10)))
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("Button", { attrs: { type: "info" } }, [
                            _vm._v("View")
                          ]),
                          _vm._v(" "),
                          _c(
                            "Button",
                            {
                              attrs: { type: "success" },
                              on: {
                                click: function($event) {
                                  return _vm.handleOpenModalEdit(product, index)
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
                                loading: product.isDeleting,
                                type: "error"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.handleDelete(product, index)
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
            attrs: { title: "Add Product" },
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
                  { attrs: { label: "Name" } },
                  [
                    _c("Input", {
                      attrs: { placeholder: "Enter name of product" },
                      model: {
                        value: _vm.newProduct.name,
                        callback: function($$v) {
                          _vm.$set(_vm.newProduct, "name", $$v)
                        },
                        expression: "newProduct.name"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "FormItem",
                  { attrs: { label: "Description" } },
                  [
                    _c("Input", {
                      attrs: {
                        maxlength: "100",
                        "show-word-limit": "",
                        type: "textarea",
                        placeholder: "Enter the description"
                      },
                      model: {
                        value: _vm.newProduct.description,
                        callback: function($$v) {
                          _vm.$set(_vm.newProduct, "description", $$v)
                        },
                        expression: "newProduct.description"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "FormItem",
                  { attrs: { label: "Image Url" } },
                  [
                    _c("Input", {
                      attrs: { placeholder: "Eg. https://i.im.com/WrN.jpg?4" },
                      model: {
                        value: _vm.newProduct.image,
                        callback: function($$v) {
                          _vm.$set(_vm.newProduct, "image", $$v)
                        },
                        expression: "newProduct.image"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "FormItem",
                  { attrs: { label: "Country Origin" } },
                  [
                    _c("Input", {
                      attrs: {
                        placeholder: "Enter the country origin of product"
                      },
                      model: {
                        value: _vm.newProduct.country_origin,
                        callback: function($$v) {
                          _vm.$set(_vm.newProduct, "country_origin", $$v)
                        },
                        expression: "newProduct.country_origin"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "input-number" },
                  [
                    _c(
                      "FormItem",
                      { attrs: { label: "Price:" } },
                      [
                        _c("Input", {
                          attrs: { min: "0", type: "number" },
                          model: {
                            value: _vm.newProduct.price,
                            callback: function($$v) {
                              _vm.$set(_vm.newProduct, "price", $$v)
                            },
                            expression: "newProduct.price"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "FormItem",
                      { attrs: { label: "Quantity:" } },
                      [
                        _c("Input", {
                          attrs: { min: "1", type: "number" },
                          model: {
                            value: _vm.newProduct.quantity,
                            callback: function($$v) {
                              _vm.$set(_vm.newProduct, "quantity", $$v)
                            },
                            expression: "newProduct.quantity"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "FormItem",
                      { attrs: { label: "Provider ID:" } },
                      [
                        _c("Input", {
                          attrs: { type: "number" },
                          model: {
                            value: _vm.newProduct.provider_id,
                            callback: function($$v) {
                              _vm.$set(_vm.newProduct, "provider_id", $$v)
                            },
                            expression: "newProduct.provider_id"
                          }
                        })
                      ],
                      1
                    )
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
                        _vm._s(_vm.isLoading ? "Adding..." : "Add Product") +
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
            attrs: { title: "Edit Product" },
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
                  { attrs: { label: "Name" } },
                  [
                    _c("Input", {
                      attrs: { placeholder: "Enter name of product" },
                      model: {
                        value: _vm.editProduct.name,
                        callback: function($$v) {
                          _vm.$set(_vm.editProduct, "name", $$v)
                        },
                        expression: "editProduct.name"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "FormItem",
                  { attrs: { label: "Description" } },
                  [
                    _c("Input", {
                      attrs: {
                        maxlength: "100",
                        "show-word-limit": "",
                        type: "textarea",
                        placeholder: "Enter the description"
                      },
                      model: {
                        value: _vm.editProduct.description,
                        callback: function($$v) {
                          _vm.$set(_vm.editProduct, "description", $$v)
                        },
                        expression: "editProduct.description"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "FormItem",
                  { attrs: { label: "Image Url" } },
                  [
                    _c("Input", {
                      attrs: { placeholder: "Eg. https://i.im.com/WrN.jpg?4" },
                      model: {
                        value: _vm.editProduct.image,
                        callback: function($$v) {
                          _vm.$set(_vm.editProduct, "image", $$v)
                        },
                        expression: "editProduct.image"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "FormItem",
                  { attrs: { label: "Country Origin" } },
                  [
                    _c("Input", {
                      attrs: {
                        placeholder: "Enter the country origin of product"
                      },
                      model: {
                        value: _vm.editProduct.country_origin,
                        callback: function($$v) {
                          _vm.$set(_vm.editProduct, "country_origin", $$v)
                        },
                        expression: "editProduct.country_origin"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "input-number" },
                  [
                    _c(
                      "FormItem",
                      { attrs: { label: "Price:" } },
                      [
                        _c("Input", {
                          attrs: { min: "0", type: "number" },
                          model: {
                            value: _vm.editProduct.price,
                            callback: function($$v) {
                              _vm.$set(_vm.editProduct, "price", $$v)
                            },
                            expression: "editProduct.price"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "FormItem",
                      { attrs: { label: "Quantity:" } },
                      [
                        _c("Input", {
                          attrs: { min: "1", type: "number" },
                          model: {
                            value: _vm.editProduct.quantity,
                            callback: function($$v) {
                              _vm.$set(_vm.editProduct, "quantity", $$v)
                            },
                            expression: "editProduct.quantity"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "FormItem",
                      { attrs: { label: "Provider ID:" } },
                      [
                        _c("Input", {
                          attrs: { type: "number" },
                          model: {
                            value: _vm.editProduct.provider_id,
                            callback: function($$v) {
                              _vm.$set(_vm.editProduct, "provider_id", $$v)
                            },
                            expression: "editProduct.provider_id"
                          }
                        })
                      ],
                      1
                    )
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
                    on: {
                      click: function($event) {
                        _vm.editModal = false
                      }
                    }
                  },
                  [_vm._v(" \n          Cancel\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "Button",
                  {
                    attrs: {
                      type: "success",
                      disable: _vm.isLoading,
                      loading: _vm.isLoading
                    },
                    on: { click: _vm.handleSaveEditProduct }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.isLoading ? "Editing..." : "Edit Product") +
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
    return _c("div", { staticClass: "_1adminOverveiw_card_left" }, [
      _c("p", { staticClass: "_1adminOverveiw_card_left_num" }, [_vm._v("3")]),
      _vm._v(" "),
      _c("p", { staticClass: "_1adminOverveiw_card_left_title" }, [
        _vm._v("Today's News")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "_1adminOverveiw_card_left" }, [
      _c("p", { staticClass: "_1adminOverveiw_card_left_num" }, [_vm._v("29")]),
      _vm._v(" "),
      _c("p", { staticClass: "_1adminOverveiw_card_left_title" }, [
        _vm._v("Total News")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "_1adminOverveiw_card_left" }, [
      _c("p", { staticClass: "_1adminOverveiw_card_left_num" }, [_vm._v("29")]),
      _vm._v(" "),
      _c("p", { staticClass: "_1adminOverveiw_card_left_title" }, [
        _vm._v("Features News")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "_1adminOverveiw_card_left" }, [
      _c("p", { staticClass: "_1adminOverveiw_card_left_num" }, [_vm._v("29")]),
      _vm._v(" "),
      _c("p", { staticClass: "_1adminOverveiw_card_left_title" }, [
        _vm._v("Card News")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Id")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Price")]),
      _vm._v(" "),
      _c("th", [_vm._v("Created At")]),
      _vm._v(" "),
      _c("th", [_vm._v("Action")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/admin-pages/Products.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/admin-pages/Products.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_02e6cc16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=02e6cc16& */ "./resources/js/pages/admin-pages/Products.vue?vue&type=template&id=02e6cc16&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin-pages/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products.vue?vue&type=style&index=0&lang=css& */ "./resources/js/pages/admin-pages/Products.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_02e6cc16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_02e6cc16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin-pages/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin-pages/Products.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/admin-pages/Products.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin-pages/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin-pages/Products.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/admin-pages/Products.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin-pages/Products.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/admin-pages/Products.vue?vue&type=template&id=02e6cc16&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/admin-pages/Products.vue?vue&type=template&id=02e6cc16& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_02e6cc16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=02e6cc16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin-pages/Products.vue?vue&type=template&id=02e6cc16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_02e6cc16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_02e6cc16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);