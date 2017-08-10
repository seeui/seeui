(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'preact', '../index', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('preact'), require('../index'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.preact, global.index, global.babelHelpers);
        global.DialogDemo = mod.exports;
    }
})(this, function (exports, _preact, _index, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var DialogDemo = function (_Component) {
        babelHelpers.inherits(DialogDemo, _Component);

        function DialogDemo() {
            var _temp, _this, _ret;

            babelHelpers.classCallCheck(this, DialogDemo);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
                showToast: false,
                showAlert: false,
                showConfirm: false
            }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
        }

        DialogDemo.prototype.showToast = function showToast(remain, msg) {
            this.setState({
                toastMsg: msg,
                showToast: true,
                remain: remain
            });
        };

        DialogDemo.prototype.showAlert = function showAlert(msg) {
            this.setState({
                alertMsg: msg,
                showAlert: true
            });
        };

        DialogDemo.prototype.showConfirm = function showConfirm(msg) {
            this.setState({
                confirmMsg: msg,
                showConfirm: true
            });
        };

        DialogDemo.prototype.onShowToast = function onShowToast() {
            console.log('show toast');
        };

        DialogDemo.prototype.onShowAlert = function onShowAlert() {
            console.log('show alert');
        };

        DialogDemo.prototype.onShowConfirm = function onShowConfirm() {
            console.log('show confirm');
        };

        DialogDemo.prototype.onHideToast = function onHideToast() {
            this.setState({
                showToast: false
            });
            console.log('hide toast');
        };

        DialogDemo.prototype.onHideAlert = function onHideAlert() {
            this.setState({
                showAlert: false
            });
            console.log('hide alert');
        };

        DialogDemo.prototype.onHideConfirm = function onHideConfirm() {
            this.setState({
                showConfirm: false
            });
            console.log('hide confirm');
        };

        DialogDemo.prototype.onAlertConfirm = function onAlertConfirm() {
            console.log('alert确定');
        };

        DialogDemo.prototype.onConfirmConfirm = function onConfirmConfirm() {
            console.log('confirm确定');
        };

        DialogDemo.prototype.onConfirmCancel = function onConfirmCancel() {
            console.log('confirm取消');
        };

        DialogDemo.prototype.render = function render() {
            var _this2 = this;

            return (0, _preact.h)(
                'div',
                { className: 'dialog-demo' },
                (0, _preact.h)(
                    _index.Button,
                    {
                        onClick: function onClick() {
                            return _this2.showToast(3, '3s后消失');
                        }
                    },
                    '\u663E\u793A3\u79D2Toast'
                ),
                '\xA0\xA0',
                (0, _preact.h)(
                    _index.Button,
                    {
                        onClick: function onClick() {
                            return _this2.showAlert('显示Alert');
                        }
                    },
                    '\u663E\u793AAlert'
                ),
                '\xA0\xA0',
                (0, _preact.h)(
                    _index.Button,
                    {
                        onClick: function onClick() {
                            return _this2.showConfirm('显示Confirm');
                        }
                    },
                    '\u663E\u793AConfirm'
                ),
                (0, _preact.h)(
                    _index.Toast,
                    {
                        show: this.state.showToast,
                        remain: this.state.remain,
                        title: 'Toast',
                        onShow: this.onShowToast,
                        onHide: this.onHideToast.bind(this)
                    },
                    this.state.toastMsg
                ),
                (0, _preact.h)(
                    _index.Alert,
                    {
                        show: this.state.showAlert,
                        title: 'Alert',
                        onShow: this.onShowAlert,
                        onHide: this.onHideAlert.bind(this),
                        onConfirm: this.onAlertConfirm
                    },
                    this.state.alertMsg
                ),
                (0, _preact.h)(
                    _index.Confirm,
                    {
                        show: this.state.showConfirm,
                        title: 'Alert',
                        onShow: this.onShowConfirm,
                        onHide: this.onHideConfirm.bind(this),
                        onConfirm: this.onConfirmConfirm,
                        onCancel: this.onConfirmCancel
                    },
                    this.state.confirmMsg
                )
            );
        };

        return DialogDemo;
    }(_preact.Component);

    exports.default = DialogDemo;
});
//# sourceMappingURL=DialogDemo.js.map
