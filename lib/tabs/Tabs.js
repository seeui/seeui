(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'preact', '../util/classnames', '../util/dom', './Tab', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('preact'), require('../util/classnames'), require('../util/dom'), require('./Tab'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.preact, global.classnames, global.dom, global.Tab, global.babelHelpers);
        global.Tabs = mod.exports;
    }
})(this, function (exports, _preact, _classnames, _dom, _Tab, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    var _Tab2 = babelHelpers.interopRequireDefault(_Tab);

    var Tabs = function (_Component) {
        babelHelpers.inherits(Tabs, _Component);

        function Tabs(props) {
            babelHelpers.classCallCheck(this, Tabs);

            var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props));

            var selectedIndex = props.selectedIndex;

            /**
             * 状态
             *
             * @private
             * @type {Object}
             */
            _this.state = {
                selectedIndex: selectedIndex,
                hasAnimate: false
            };

            _this.onTabClick = _this.onTabClick.bind(_this);
            _this.onMouseOver = _this.onMouseOver.bind(_this);
            _this.onMouseLeave = _this.onMouseLeave.bind(_this);
            return _this;
        }

        Tabs.prototype.componentDidMount = function componentDidMount() {

            // 更新底边的状态
            this.doStick(true);
        };

        Tabs.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
            var selectedIndex = _ref.selectedIndex;


            if (selectedIndex !== this.state.selectedIndex) {
                this.setState({
                    selectedIndex: selectedIndex
                });
            }
        };

        Tabs.prototype.componentDidUpdate = function componentDidUpdate() {
            var _this2 = this;

            // 更新底边的状态,
            // 因为子组件Tab的渲染顺序在父组件之后，所以需要等待他们ready后再执行位置的更新
            setTimeout(function () {
                // 全屏类型的不需要滚动
                _this2.doStick();
            }, 0);
        };

        Tabs.prototype.doStick = function doStick(isFirst) {
            var sel = '.' + this.props.prefixCls + '-tabs-tab-active';
            var el = (0, _dom.query)(sel, this.main);
            this.stickBorder(el, isFirst);
        };

        Tabs.prototype.stickBorder = function stickBorder(target, isFirst) {
            if (!target) {
                return;
            }

            var clientWidth = target.clientWidth,
                offsetLeft = target.offsetLeft;


            if (this.props.type === 'txtline') {
                var el = (0, _dom.query)('.' + this.props.prefixCls + '-tabs-tab-txt', target);
                clientWidth = el.clientWidth;
                offsetLeft += (target.clientWidth - clientWidth) / 2 || 0;
            }

            (0, _dom.setStyle)(this.line, 'display', 'block');
            (0, _dom.setStyle)(this.line, 'width', clientWidth + 'px');
            (0, _dom.setStyle)(this.line, 'left', offsetLeft + 'px');

            // 在第一次渲染后才加上底边滑动动效类，不然一开始滑到相应tab下会不好看
            if (isFirst) {
                this.setState({
                    hasAnimate: this.props.hasAnimate
                });
            }
        };

        Tabs.prototype.onTabClick = function onTabClick(e, index) {
            var _this3 = this;

            if (index === this.state.selectedIndex) {
                return;
            }

            var onChange = this.props.onChange;

            this.setState({ selectedIndex: index }, function () {
                onChange && onChange({
                    type: 'change',
                    selectedIndex: index,
                    target: _this3
                });
            });
        };

        Tabs.prototype.onMouseOver = function onMouseOver(e) {
            if (!this.props.hoverAnimate) {
                return;
            }

            var el = (0, _dom.closest)(e.target, '.' + this.props.prefixCls + '-tabs-tab', this.main);
            if (el) {
                this.stickBorder(el);
            }
        };

        Tabs.prototype.onMouseLeave = function onMouseLeave(e) {
            if (!this.props.hoverAnimate) {
                return;
            }
            var el = (0, _dom.closest)(e.target, '.' + this.props.prefixCls + '-tabs-tab', this.main);
            if (el) {
                this.doStick();
            }
        };

        Tabs.prototype.render = function render(_ref2) {
            var _this4 = this,
                _classNames,
                _classNames2;

            var prefixCls = _ref2.prefixCls,
                className = _ref2.className,
                children = _ref2.children,
                type = _ref2.type;


            var selectedIndex = this.state.selectedIndex;

            var tabs = children.map(function (tab, index) {

                var selected = selectedIndex === index;

                return (0, _preact.cloneElement)(tab, {
                    key: index,
                    selected: selected,
                    index: index,
                    onClick: _this4.onTabClick,
                    onMouseOver: _this4.onMouseOver,
                    onMouseLeave: _this4.onMouseLeave
                });
            });

            var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefixCls + '-tabs'] = true, _classNames[prefixCls + '-tabs-blockline'] = type === 'blockline', _classNames[prefixCls + '-tabs-txtline'] = type === 'txtline', _classNames[className] = className, _classNames));

            var inkBarCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefixCls + '-tabs-ink-bar'] = true, _classNames2[prefixCls + '-tabs-ink-bar-animated'] = this.state.hasAnimate, _classNames2));

            return (0, _preact.h)(
                'div',
                { className: cls, ref: function ref(node) {
                        return _this4.main = node;
                    } },
                (0, _preact.h)(
                    'div',
                    { className: prefixCls + '-tabs-bar' },
                    (0, _preact.h)(
                        'div',
                        { className: prefixCls + '-tabs-nav-container' },
                        (0, _preact.h)(
                            'div',
                            { className: prefixCls + '-tabs-nav-wrap' },
                            (0, _preact.h)(
                                'div',
                                { className: prefixCls + '-tabs-nav-scroll' },
                                (0, _preact.h)(
                                    'div',
                                    { className: prefixCls + '-tabs-nav', ref: function ref(node) {
                                            return _this4.nav = node;
                                        } },
                                    (0, _preact.h)('div', {
                                        className: inkBarCls,
                                        ref: function ref(node) {
                                            return _this4.line = node;
                                        }
                                    }),
                                    tabs
                                )
                            )
                        )
                    )
                )
            );
        };

        return Tabs;
    }(_preact.Component);

    Tabs.defaultProps = {
        prefixCls: 'cui',
        selectedIndex: 0,
        // 类型，目前的值为 blockline 和 txtline， 默认为blockLine
        type: 'blockline',
        // 切换tab时底边是否有滑动动画
        hasAnimate: true,
        // 鼠标在tab上移动时 是否有跟随效果
        hoverAnimate: false,
        onChange: function onChange() {}
    };
    Tabs.Tab = _Tab2.default;
    exports.default = Tabs;
});
//# sourceMappingURL=Tabs.js.map
