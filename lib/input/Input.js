(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'preact', '../util/classnames', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('preact'), require('../util/classnames'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.preact, global.classnames, global.babelHelpers);
        global.Input = mod.exports;
    }
})(this, function (exports, _preact, _classnames, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    var Input = function (_Component) {
        babelHelpers.inherits(Input, _Component);

        function Input() {
            babelHelpers.classCallCheck(this, Input);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        Input.prototype.handleChange = function handleChange(e) {
            if (this.props.onChange) {
                this.props.onChange(e);
            }
        };

        Input.prototype.handleKeyDown = function handleKeyDown(e) {
            if (this.props.onKeyDown) {
                this.props.onKeyDown(e);
            }
        };

        Input.prototype.render = function render() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                type = _props.type,
                className = _props.className,
                others = babelHelpers.objectWithoutProperties(_props, ['prefixCls', 'type', 'className']);


            var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefixCls + '-input'] = true, _classNames[className] = className, _classNames));

            switch (type) {
                case 'textarea':
                    return (0, _preact.h)('textarea', babelHelpers.extends({
                        className: cls
                    }, others));
                default:
                    return (0, _preact.h)('input', babelHelpers.extends({
                        className: cls
                    }, others));
            }
        };

        return Input;
    }(_preact.Component);

    Input.defaultProps = {
        prefixCls: 'cui',
        type: 'text'
    };
    exports.default = Input;
});
//# sourceMappingURL=Input.js.map
