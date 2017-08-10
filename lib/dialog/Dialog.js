(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'preact', '../util/classnames', '../util/dom', '../button/Button', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('preact'), require('../util/classnames'), require('../util/dom'), require('../button/Button'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.preact, global.classnames, global.dom, global.Button, global.babelHelpers);
        global.Dialog = mod.exports;
    }
})(this, function (exports, _preact, _classnames, _dom, _Button, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    var _Button2 = babelHelpers.interopRequireDefault(_Button);

    var Dialog = function (_Component) {
        babelHelpers.inherits(Dialog, _Component);

        function Dialog(props) {
            babelHelpers.classCallCheck(this, Dialog);

            var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props));

            // 是否是父组件通过props控制组件显示隐藏
            // 触发onShow onHide回调时是否通知父组件更新props中的显示隐藏状态
            // true: 是父组件设置状态，不再触发状态更新   false: 组件内部设置状态，需要触发状态更新
            // 应用场景：父组件设置显示隐藏，回调时不再要求重置父组件状态
            _this.propsUpdateShow = false;
            return _this;
        }

        /**
         * 父级修改属性
         *
         * @private
         * @param {Object} nextProps 更改后的属性值
         */


        Dialog.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
            var show = nextProps.show;

            if (show === this.props.show) {
                this.propsUpdateShow = true;
            }
        };

        Dialog.prototype.toggleLockWindow = function toggleLockWindow(lock) {
            // lock ? lockWindow() : unLockWindow();
        };

        Dialog.prototype.onMaskClick = function onMaskClick(e) {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                maskClickClose = _props.maskClickClose,
                onHide = _props.onHide;

            if (maskClickClose && (0, _dom.hasClass)(e.target, prefixCls + '-dialog')) {
                onHide && onHide({ type: 'maskClick' });
            } else {
                e.stopPropagation();
            }
        };

        Dialog.prototype.componentDidMount = function componentDidMount() {
            var _props2 = this.props,
                show = _props2.show,
                onShow = _props2.onShow;


            // show && this.toggleLockWindow(true) && onShow && onShow();
            show && onShow && onShow();
        };

        Dialog.prototype.componentDidUpdate = function componentDidUpdate() {
            var _props3 = this.props,
                show = _props3.show,
                onShow = _props3.onShow,
                onHide = _props3.onHide;


            if (this.propsUpdateShow) {
                this.propsUpdateShow = false;
                return;
            }

            this.propsUpdateShow = false;

            if (show) {
                // this.toggleLockWindow(true);
                onShow && onShow();
            } else {
                // this.toggleLockWindow(false);
                onHide && onHide();
            }
        };

        Dialog.prototype.componentWillUnmount = function componentWillUnmount() {}
        // this.props.show && this.toggleLockWindow(false);


        /**
         * 渲染浮层头部
         *
         * @private
         * @return {XML}
         */
        ;

        Dialog.prototype.renderTitle = function renderTitle() {
            var _props4 = this.props,
                prefixCls = _props4.prefixCls,
                title = _props4.title;


            return (0, _preact.h)(
                'h3',
                { className: prefixCls + '-dialog-header' },
                title
            );
        };

        Dialog.prototype.renderClose = function renderClose() {
            var _props5 = this.props,
                prefixCls = _props5.prefixCls,
                closeContent = _props5.closeContent,
                onHide = _props5.onHide;


            return (0, _preact.h)(
                'span',
                {
                    onClick: function onClick(e) {
                        return onHide({ type: 'closeClick' });
                    },
                    className: prefixCls + '-dialog-close'
                },
                closeContent ? closeContent : '×'
            );
        };

        Dialog.prototype.renderFooter = function renderFooter() {
            var _props6 = this.props,
                prefixCls = _props6.prefixCls,
                buttons = _props6.buttons;


            var btnsDom = buttons.map(function (button) {
                var _button$type = button.type,
                    type = _button$type === undefined ? 'default' : _button$type,
                    value = button.value,
                    _button$size = button.size,
                    size = _button$size === undefined ? 'large' : _button$size,
                    others = babelHelpers.objectWithoutProperties(button, ['type', 'value', 'size']);


                return (0, _preact.h)(
                    'div',
                    { className: prefixCls + '-dialog-footer-item' },
                    (0, _preact.h)(
                        _Button2.default,
                        babelHelpers.extends({ type: type, size: size }, others),
                        value
                    )
                );
            });

            return (0, _preact.h)(
                'div',
                { className: prefixCls + '-dialog-footer' },
                btnsDom
            );
        };

        Dialog.prototype.render = function render() {
            var _classNames,
                _classNames2,
                _this2 = this;

            var _props7 = this.props,
                prefixCls = _props7.prefixCls,
                className = _props7.className,
                show = _props7.show,
                width = _props7.width,
                top = _props7.top,
                children = _props7.children,
                hasClose = _props7.hasClose,
                title = _props7.title,
                buttons = _props7.buttons,
                maskClickClose = _props7.maskClickClose,
                others = babelHelpers.objectWithoutProperties(_props7, ['prefixCls', 'className', 'show', 'width', 'top', 'children', 'hasClose', 'title', 'buttons', 'maskClickClose']);


            var dialogCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefixCls + '-dialog'] = true, _classNames['show'] = show, _classNames[className] = className, _classNames));

            var dialogWrapCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefixCls + '-dialog-wrap'] = true, _classNames2['vertical-middle'] = top == null, _classNames2));

            var dialogStyle = '' + (width ? 'width:' + width + ';' : '') + (top != null ? 'top:' + top : '');

            return (0, _preact.h)(
                'div',
                babelHelpers.extends({ className: dialogCls }, others, { onClick: function onClick(e) {
                        return maskClickClose && _this2.onMaskClick(e);
                    } }),
                (0, _preact.h)(
                    'div',
                    { className: dialogWrapCls, style: dialogStyle },
                    title ? this.renderTitle() : null,
                    hasClose ? this.renderClose() : null,
                    (0, _preact.h)(
                        'div',
                        { className: prefixCls + '-dialog-body' },
                        children
                    ),
                    buttons && buttons.length ? this.renderFooter() : null
                )
            );
        };

        return Dialog;
    }(_preact.Component);

    Dialog.defaultProps = {
        prefixCls: 'cui',
        show: false,
        hasClose: true,
        maskClickClose: false,
        buttons: []
    };
    exports.default = Dialog;
});
//# sourceMappingURL=Dialog.js.map
