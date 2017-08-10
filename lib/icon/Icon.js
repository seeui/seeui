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
        global.Icon = mod.exports;
    }
})(this, function (exports, _preact, _classnames, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    var Icon = function (_Component) {
        babelHelpers.inherits(Icon, _Component);

        function Icon() {
            babelHelpers.classCallCheck(this, Icon);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        Icon.prototype.render = function render() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                type = _props.type,
                style = _props.style,
                className = _props.className,
                others = babelHelpers.objectWithoutProperties(_props, ['prefixCls', 'type', 'style', 'className']);


            var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefixCls + '-icon'] = true, _classNames[prefixCls + '-i-' + type] = true, _classNames[className] = className, _classNames));

            return (0, _preact.h)('i', babelHelpers.extends({ style: style,
                className: cls
            }, others));
        };

        return Icon;
    }(_preact.Component);

    Icon.defaultProps = {
        prefixCls: 'cui'
    };
    exports.default = Icon;
});
//# sourceMappingURL=Icon.js.map
