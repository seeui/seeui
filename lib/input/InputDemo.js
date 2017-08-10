(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'preact', './Input', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('preact'), require('./Input'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.preact, global.Input, global.babelHelpers);
        global.InputDemo = mod.exports;
    }
})(this, function (exports, _preact, _Input, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _Input2 = babelHelpers.interopRequireDefault(_Input);

    var InputDemo = function (_Component) {
        babelHelpers.inherits(InputDemo, _Component);

        function InputDemo() {
            babelHelpers.classCallCheck(this, InputDemo);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        InputDemo.prototype.handleKeyUp = function handleKeyUp(e) {
            this.setState({
                value: e.target.value,
                afterValue: e.target.value + '@baidu.com'
            });
        };

        InputDemo.prototype.render = function render() {
            var _this2 = this;

            return (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)(
                    'p',
                    null,
                    (0, _preact.h)(_Input2.default, { value: this.state.value, onKeyUp: function onKeyUp(e) {
                            return _this2.handleKeyUp(e);
                        }, placeholder: '\u8BF7\u8F93\u5165\u90AE\u7BB1\u524D\u7F00' })
                ),
                (0, _preact.h)(
                    'p',
                    null,
                    (0, _preact.h)(_Input2.default, { type: 'textarea', value: this.state.afterValue, disabled: true })
                )
            );
        };

        return InputDemo;
    }(_preact.Component);

    exports.default = InputDemo;
});
//# sourceMappingURL=InputDemo.js.map
