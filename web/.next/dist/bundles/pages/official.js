module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = '/opt/web/components/Header.js';



var linkStyle = {
  marginRight: '3em'
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        'Home'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: '/gothem', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        'City Hall'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: '/citizen', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        'Citizen'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: '/official?address=3PQUkwYARzugf7YDrYpDq93mmqmmEgZJMyw', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        'Official'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = '/opt/web/components/MyLayout.js';




var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '0px solid #DDD'
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: layoutStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        'Citizen Y'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', integrity: 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u', crossorigin: 'anonymous', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/official.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__);

var _jsxFileName = '/opt/web/pages/official.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// pages/about.js







var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.toggleModal = _this.toggleModal.bind(_this);
    _this.handleOk = _this.handleOk.bind(_this);

    _this.state = {
      visible: false,
      issueId: null,
      recipient: null,
      title: null,
      message: null,
      response: null,
      address: props.url.query.address,
      issues: {
        list: false
      },
      txPending: false
    };
    return _this;
  }

  _createClass(_class, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5_axios___default.a.get('http://127.0.0.1:7200/api/v1.0/issues');

              case 2:
                res = _context.sent;

                console.log(res);
                this.setState({
                  issues: {
                    list: res.data
                  }
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'toggleModal',
    value: function toggleModal(e) {

      var title = null;
      var message = null;
      var issueId = e.target.dataset.issueid;
      var recipient = e.target.dataset.recipient;

      this.state.issues.list.map(function (item, index) {
        if (item.issue.id === issueId) {
          title = item.issue.title;
          message = item.issue.message;
        }
      });

      this.setState({
        visible: !this.state.visible,
        title: title,
        message: message,
        issueId: issueId
      });
    }
  }, {
    key: 'handleOk',
    value: function handleOk(e) {
      var _this2 = this;

      this.setState({
        txPending: true
      });
      var issueId = e.target.dataset.issueid;
      var recipient = e.target.dataset.recipient;
      console.log('ZXCZX', issueId);

      var req = __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('http://127.0.0.1:7200/api/v1.0/issue', {
        recipient: this.state.recipient,
        title: this.state.title,
        message: this.state.message,
        responseTo: e.target.dataset.issueid,
        response: this.state.response
      }).then(function (response) {
        console.log(response);
        if (response.status === 201) {

          // const arr = this.state.issues.list === false && this.state.issues.list.length === 0 ? 
          //   [response.data] : [response.data].concat(this.state.issues.list);
          // console.log('Arr', arr);

          _this2.setState({
            // issues: {
            //   list: arr
            // },
            visible: false,
            issueId: null,
            response: '',
            responseTo: null,
            txPending: false
          });
        }
      }).catch(function (e) {
        console.error(e);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'h1',
          {
            className: 'jsx-1746305194',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            }
          },
          'Official\'s dashboard'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'h2',
          {
            className: 'jsx-1746305194',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            }
          },
          'Issues'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Modal"],
          { show: this.state.visible, onHide: this.toggleModal, __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Modal"].Header,
            { closeButton: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Modal"].Title,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                }
              },
              'Citizen\'s request'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Modal"].Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h3',
              {
                className: 'jsx-1746305194',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 115
                }
              },
              this.state.title
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'p',
              {
                className: 'jsx-1746305194',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 116
                }
              },
              this.state.message
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["FormGroup"],
              { controlId: 'formInlineName', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 117
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["ControlLabel"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                  }
                },
                'Reply message'
              ),
              ' ',
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["FormControl"], {
                componentClass: 'textarea',
                value: this.state.reply,
                placeholder: 'Enter message',
                onChange: function onChange(e) {
                  return _this3.setState({ response: e.target.value });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 119
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Modal"].Footer,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Button"],
              { onClick: this.toggleModal, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 129
                }
              },
              'Close'
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Button"],
              {
                bsStyle: 'primary',
                onClick: this.handleOk,
                disabled: this.state.txPending,
                'data-issueid': this.state.issueId,
                'data-recipient': this.state.recipient,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 130
                }
              },
              'Reply'
            )
          )
        ),
        this.state.issues.list === false ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Alert"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            }
          },
          'Loading...'
        ) : this.state.issues.list.length === 0 ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Alert"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            }
          },
          'No issues'
        ) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Table"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'thead',
            {
              className: 'jsx-1746305194',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 146
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'tr',
              {
                className: 'jsx-1746305194',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 147
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'th',
                {
                  className: 'jsx-1746305194',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                  }
                },
                'Titile'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'th',
                {
                  className: 'jsx-1746305194',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                  }
                },
                'IPFS Hash'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'th',
                {
                  className: 'jsx-1746305194',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                  }
                },
                'TxId'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('th', {
                className: 'jsx-1746305194',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 151
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'tbody',
            {
              className: 'jsx-1746305194',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              }
            },
            this.state.issues.list.filter(function (item) {
              return item.request.recipient === _this3.state.address;
            }).filter(function (item) {
              return item.issue.responseTo === '';
            }).map(function (item, index) {
              return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'tr',
                { key: 'issue_' + index, className: 'jsx-1746305194',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'td',
                  {
                    className: 'jsx-1746305194',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 160
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_next_link___default.a,
                    { href: '/issue?id=' + item.issue.id, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 161
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      'a',
                      {
                        className: 'jsx-1746305194',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 162
                        }
                      },
                      item.issue.title
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'td',
                  {
                    className: 'jsx-1746305194',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 165
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'a',
                    { href: 'http://127.0.0.1:8080/ipfs/' + item.issue.ipfsHash, target: '_blank', className: 'jsx-1746305194',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 165
                      }
                    },
                    item.issue.ipfsHash
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'td',
                  {
                    className: 'jsx-1746305194',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 166
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'a',
                    { href: 'https://wavesexplorer.com/tx/' + item.request.txid, target: '_blank', className: 'jsx-1746305194',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 166
                      }
                    },
                    item.request.txid
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'td',
                  {
                    className: 'jsx-1746305194',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 167
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Button"],
                    {
                      bsStyle: 'primary',
                      onClick: _this3.toggleModal,
                      'data-issueid': item.issue.id,
                      'data-recipient': item.issue.address,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 168
                      }
                    },
                    'Reply'
                  )
                )
              );
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '1746305194',
          css: '@import url(\'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,700\');.jsx-1746305194{font-family:\'IBM Plex Sans\',sans-serif;}h1.jsx-1746305194{font-size:4em;font-weight:300;margin:1.4em 0;display:block;border-radius:4px;}h2.jsx-1746305194{font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL29mZmljaWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdMd0IsQUFFK0YsQUFDeEMsQUFHeEIsQUFRRSxjQVBBLEVBUWxCLGNBUGlCLFNBUW5CLE1BUGtCLGNBQ0ksa0JBQ3BCIiwiZmlsZSI6InBhZ2VzL29mZmljaWFsLmpzIiwic291cmNlUm9vdCI6Ii9vcHQvd2ViIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYWJvdXQuanNcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiwgQWxlcnQsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIENvbnRyb2xMYWJlbCwgVGFibGUgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpOyAgICAgXG4gICAgICB0aGlzLnRvZ2dsZU1vZGFsID0gdGhpcy50b2dnbGVNb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVPayA9IHRoaXMuaGFuZGxlT2suYmluZCh0aGlzKTtcbiAgICAgIFxuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIGlzc3VlSWQ6IG51bGwsXG4gICAgICAgIHJlY2lwaWVudDogbnVsbCxcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICAgIHJlc3BvbnNlOiBudWxsLFxuICAgICAgICBhZGRyZXNzOiBwcm9wcy51cmwucXVlcnkuYWRkcmVzcyxcbiAgICAgICAgaXNzdWVzOiB7XG4gICAgICAgICAgbGlzdDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgdHhQZW5kaW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6NzIwMC9hcGkvdjEuMC9pc3N1ZXMnKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICAgIGlzc3Vlczoge1xuICAgICAgICAgIGxpc3Q6IHJlcy5kYXRhXG4gICAgICAgIH0gXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVNb2RhbChlKSB7XG5cbiAgICAgIGxldCB0aXRsZSA9IG51bGw7XG4gICAgICBsZXQgbWVzc2FnZSA9IG51bGw7XG4gICAgICBjb25zdCBpc3N1ZUlkID0gZS50YXJnZXQuZGF0YXNldC5pc3N1ZWlkO1xuICAgICAgY29uc3QgcmVjaXBpZW50ID0gZS50YXJnZXQuZGF0YXNldC5yZWNpcGllbnQ7XG4gICAgICBcbiAgICAgIHRoaXMuc3RhdGUuaXNzdWVzLmxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5pc3N1ZS5pZCA9PT0gaXNzdWVJZCkge1xuICAgICAgICAgIHRpdGxlID0gaXRlbS5pc3N1ZS50aXRsZTtcbiAgICAgICAgICBtZXNzYWdlID0gaXRlbS5pc3N1ZS5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlzaWJsZTogIXRoaXMuc3RhdGUudmlzaWJsZSxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICBpc3N1ZUlkOiBpc3N1ZUlkLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVPayhlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdHhQZW5kaW5nOiB0cnVlLFxuICAgICAgfSlcbiAgICAgIGNvbnN0IGlzc3VlSWQgPSBlLnRhcmdldC5kYXRhc2V0Lmlzc3VlaWQ7XG4gICAgICBjb25zdCByZWNpcGllbnQgPSBlLnRhcmdldC5kYXRhc2V0LnJlY2lwaWVudDtcbiAgICAgIGNvbnNvbGUubG9nKCdaWENaWCcsaXNzdWVJZCk7XG4gICAgICBcbiAgICAgIGNvbnN0IHJlcSA9IGF4aW9zLnBvc3QoJ2h0dHA6Ly8xMjcuMC4wLjE6NzIwMC9hcGkvdjEuMC9pc3N1ZScsIHtcbiAgICAgICAgcmVjaXBpZW50OiB0aGlzLnN0YXRlLnJlY2lwaWVudCxcbiAgICAgICAgdGl0bGU6IHRoaXMuc3RhdGUudGl0bGUsXG4gICAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUubWVzc2FnZSxcbiAgICAgICAgcmVzcG9uc2VUbzogZS50YXJnZXQuZGF0YXNldC5pc3N1ZWlkLFxuICAgICAgICByZXNwb25zZTogdGhpcy5zdGF0ZS5yZXNwb25zZVxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIGNvbnN0IGFyciA9IHRoaXMuc3RhdGUuaXNzdWVzLmxpc3QgPT09IGZhbHNlICYmIHRoaXMuc3RhdGUuaXNzdWVzLmxpc3QubGVuZ3RoID09PSAwID8gXG4gICAgICAgICAgLy8gICBbcmVzcG9uc2UuZGF0YV0gOiBbcmVzcG9uc2UuZGF0YV0uY29uY2F0KHRoaXMuc3RhdGUuaXNzdWVzLmxpc3QpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdBcnInLCBhcnIpO1xuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgLy8gaXNzdWVzOiB7XG4gICAgICAgICAgICAvLyAgIGxpc3Q6IGFyclxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgaXNzdWVJZDogbnVsbCxcbiAgICAgICAgICAgIHJlc3BvbnNlOiAnJyxcbiAgICAgICAgICAgIHJlc3BvbnNlVG86IG51bGwsXG4gICAgICAgICAgICB0eFBlbmRpbmc6IGZhbHNlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPGgxPk9mZmljaWFsJ3MgZGFzaGJvYXJkPC9oMT5cbiAgICAgICAgICA8aDI+SXNzdWVzPC9oMj5cblxuICAgICAgICAgIDxNb2RhbCBzaG93PXt0aGlzLnN0YXRlLnZpc2libGV9IG9uSGlkZT17dGhpcy50b2dnbGVNb2RhbH0+XG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+Q2l0aXplbidzIHJlcXVlc3Q8L01vZGFsLlRpdGxlPlxuICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG5cbiAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICA8aDM+e3RoaXMuc3RhdGUudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUubWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUlubGluZU5hbWVcIj5cbiAgICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPlJlcGx5IG1lc3NhZ2U8L0NvbnRyb2xMYWJlbD57JyAnfVxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIiBcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlcGx5fSBcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoe3Jlc3BvbnNlOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuXG4gICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9PkNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgYnNTdHlsZT1cInByaW1hcnlcIiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU9rfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnR4UGVuZGluZ31cbiAgICAgICAgICAgICAgICBkYXRhLWlzc3VlaWQ9e3RoaXMuc3RhdGUuaXNzdWVJZH1cbiAgICAgICAgICAgICAgICBkYXRhLXJlY2lwaWVudD17dGhpcy5zdGF0ZS5yZWNpcGllbnR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSZXBseVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc3N1ZXMubGlzdCA9PT0gZmFsc2UgPyAoPEFsZXJ0PkxvYWRpbmcuLi48L0FsZXJ0PikgOlxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzc3Vlcy5saXN0Lmxlbmd0aCA9PT0gMCA/ICg8QWxlcnQ+Tm8gaXNzdWVzPC9BbGVydD4pIDpcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGl0aWxlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JUEZTIEhhc2g8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlR4SWQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNzdWVzLmxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0ucmVxdWVzdC5yZWNpcGllbnQgPT09IHRoaXMuc3RhdGUuYWRkcmVzcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uaXNzdWUucmVzcG9uc2VUbyA9PT0gJycpLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YGlzc3VlXyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9pc3N1ZT9pZD0ke2l0ZW0uaXNzdWUuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtLmlzc3VlLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPXtgaHR0cDovLzEyNy4wLjAuMTo4MDgwL2lwZnMvJHtpdGVtLmlzc3VlLmlwZnNIYXNofWB9IHRhcmdldD1cIl9ibGFua1wiPntpdGVtLmlzc3VlLmlwZnNIYXNofTwvYT48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPXtgaHR0cHM6Ly93YXZlc2V4cGxvcmVyLmNvbS90eC8ke2l0ZW0ucmVxdWVzdC50eGlkfWB9IHRhcmdldD1cIl9ibGFua1wiPntpdGVtLnJlcXVlc3QudHhpZH08L2E+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic1N0eWxlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaXNzdWVpZD17aXRlbS5pc3N1ZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1yZWNpcGllbnQ9e2l0ZW0uaXNzdWUuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVwbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1JQk0rUGxleCtTYW5zOjMwMCw0MDAsNzAwJyk7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggU2FucycsIHNhbnMtc2VyaWY7XG5cbiAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxLjRlbSAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgKVxuICAgIH1cbn1cblxuIl19 */\n/*@ sourceURL=pages/official.js */'
        })
      );
    }
  }]);

  return _class;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (_class);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/official.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=official.js.map