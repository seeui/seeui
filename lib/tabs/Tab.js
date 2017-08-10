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
        global.Tab = mod.exports;
    }
})(this, function (exports, _preact, _classnames, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    var Tab = function (_Component) {
        babelHelpers.inherits(Tab, _Component);

        function Tab() {
            babelHelpers.classCallCheck(this, Tab);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        Tab.prototype.render = function render(_ref) {
            var _classNames;

            var prefixCls = _ref.prefixCls,
                className = _ref.className,
                selected = _ref.selected,
                disabled = _ref.disabled,
                label = _ref.label,
                index = _ref.index,
                href = _ref.href,
                _onClick = _ref.onClick,
                _onMouseOver = _ref.onMouseOver,
                _onMouseLeave = _ref.onMouseLeave,
                others = babelHelpers.objectWithoutProperties(_ref, ['prefixCls', 'className', 'selected', 'disabled', 'label', 'index', 'href', 'onClick', 'onMouseOver', 'onMouseLeave']);

            /* eslint-enable max-len */

            var CellComponent = href ? 'a' : 'div';

            var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefixCls + '-tabs-tab'] = true, _classNames[prefixCls + '-tabs-tab-active'] = selected, _classNames[prefixCls + '-tabs-tab-disabled'] = disabled, _classNames[className] = className, _classNames));

            return (0, _preact.h)(
                CellComponent,
                babelHelpers.extends({
                    className: cls,
                    href: href,
                    onClick: function onClick(e) {
                        return disabled || _onClick(e, index);
                    },
                    onMouseOver: function onMouseOver(e) {
                        return disabled || _onMouseOver(e);
                    },
                    onMouseLeave: function onMouseLeave(e) {
                        return disabled || _onMouseLeave(e);
                    }
                }, others),
                (0, _preact.h)(
                    'span',
                    { className: prefixCls + '-tabs-tab-txt' },
                    label
                )
            );
        };

        return Tab;
    }(_preact.Component);

    Tab.defaultProps = {
        prefixCls: 'cui',
        // 是否选中
        selected: false,
        // 是否禁用
        disabled: false,
        // tab的title
        label: '',
        // 序号
        index: 0,
        onClick: function onClick() {},
        onMouseOver: function onMouseOver() {},
        onMouseLeave: function onMouseLeave() {}
    };
    exports.default = Tab;
});
//# sourceMappingURL=Tab.js.map
