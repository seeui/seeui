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
        global.Button = mod.exports;
    }
})(this, function (exports, _preact, _classnames, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    var Button = function (_Component) {
        babelHelpers.inherits(Button, _Component);

        function Button() {
            babelHelpers.classCallCheck(this, Button);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        Button.prototype.handleClick = function handleClick(e) {
            if (this.props.onClick) {
                this.props.onClick(e);
            }
        };

        Button.prototype.render = function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                type = _props.type,
                size = _props.size,
                disabled = _props.disabled,
                children = _props.children,
                className = _props.className,
                others = babelHelpers.objectWithoutProperties(_props, ['prefixCls', 'type', 'size', 'disabled', 'children', 'className']);


            var showType = type === 'primary' || type === 'default' ? type : 'primary';

            var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefixCls + '-button'] = true, _classNames[showType] = showType, _classNames[size] = size, _classNames['disabled'] = disabled, _classNames[className] = className, _classNames));

            return (0, _preact.h)('input', babelHelpers.extends({
                className: cls,
                type: 'button',
                value: children,
                onClick: function onClick(e) {
                    return _this2.handleClick(e);
                },
                disabled: disabled
            }, others));
        };

        return Button;
    }(_preact.Component);

    Button.defaultProps = {
        prefixCls: 'cui',
        disabled: false,
        type: 'primary',
        size: 'large'
    };
    exports.default = Button;
});
//# sourceMappingURL=Button.js.map
