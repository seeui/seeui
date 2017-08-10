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
        global.TagDemo = mod.exports;
    }
})(this, function (exports, _preact, _index, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var TagDemo = function (_Component) {
        babelHelpers.inherits(TagDemo, _Component);

        function TagDemo() {
            var _temp, _this, _ret;

            babelHelpers.classCallCheck(this, TagDemo);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
                showAlert: false,
                alertMsg: ''
            }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
        }

        TagDemo.prototype.closeHandler = function closeHandler() {
            this.setState({
                showAlert: true,
                alertMsg: '关掉了标签'
            });
        };

        TagDemo.prototype.onHideAlert = function onHideAlert() {
            this.setState({
                showAlert: false
            });
        };

        TagDemo.prototype.render = function render() {
            return (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)(
                    _index.Tag,
                    null,
                    'Tag1'
                ),
                (0, _preact.h)(
                    _index.Tag,
                    { closable: true },
                    'Tag2'
                ),
                (0, _preact.h)(
                    _index.Tag,
                    { color: '#38f' },
                    '\u81EA\u5B9A\u4E49\u80CC\u666F\u8272'
                ),
                (0, _preact.h)(
                    _index.Tag,
                    { closable: true, onClose: this.closeHandler.bind(this) },
                    '\u5E26\u6709\u5173\u95ED\u6807\u7B7Ehandler'
                ),
                (0, _preact.h)(
                    _index.Alert,
                    {
                        show: this.state.showAlert,
                        onHide: this.onHideAlert.bind(this)
                    },
                    this.state.alertMsg
                )
            );
        };

        return TagDemo;
    }(_preact.Component);

    exports.default = TagDemo;
});
//# sourceMappingURL=TagDemo.js.map
