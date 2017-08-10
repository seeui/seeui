(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'preact', '../icon/Icon', '../util/classnames', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('preact'), require('../icon/Icon'), require('../util/classnames'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.preact, global.Icon, global.classnames, global.babelHelpers);
        global.Pager = mod.exports;
    }
})(this, function (exports, _preact, _Icon, _classnames, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _Icon2 = babelHelpers.interopRequireDefault(_Icon);

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    var Pager = function (_Component) {
        babelHelpers.inherits(Pager, _Component);

        /**
         * 构造函数
         *
         * @public
         * @constructor
         * @param {*} props 属性
         */
        function Pager(props) {
            babelHelpers.classCallCheck(this, Pager);

            var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props));

            var page = props.page;

            /**
             * 状态
             *
             * @protected
             * @type {Object}
             */
            _this.state = { page: page };

            _this.onMainClick = _this.onMainClick.bind(_this);

            return _this;
        }

        /**
         * 接受新属性时的处理
         *
         * @public
         * @override
         * @param {*} nextProps 新属性
         */


        Pager.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
            var page = nextProps.page,
                total = nextProps.total;


            if (page < 0) {
                page = 0;
            } else if (page > total) {
                page = total - 1;
            }

            if (page !== this.state.page) {
                this.setState({ page: page });
            }
        };

        Pager.prototype.range = function range(start, stop, paddingLeft, paddingRight) {
            return start + paddingLeft < stop - paddingRight ? [].concat(this.rangeArray(start, start + paddingLeft), [-start - paddingLeft], this.rangeArray(stop - paddingRight, stop)) : this.rangeArray(start, stop);
        };

        Pager.prototype.rangeArray = function rangeArray(start, stop) {
            var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            /* eslint-disable prefer-rest-params */
            if (arguments.length <= 1) {
                stop = start || 0;
                start = 0;
            }

            step = step || 1;

            var length = Math.max(Math.ceil((stop - start) / step), 0);
            var range = Array(length);

            for (var idx = 0; idx < length; idx++, start += step) {
                range[idx] = start;
            }

            return range;
        };

        Pager.prototype.renderItem = function renderItem(conf) {
            var _classNames;

            var page = conf.page,
                part = conf.part,
                states = conf.states;
            var _props = this.props,
                prefixCls = _props.prefixCls,
                lang = _props.lang,
                useLang = _props.useLang;


            var pageText = void 0;

            if (!useLang && part && part !== 'ellipsis') {
                pageText = part === 'prev' ? (0, _preact.h)(_Icon2.default, { type: 'back' }) : (0, _preact.h)(_Icon2.default, { type: 'right' });
            } else {
                pageText = lang[part] || page + 1;
            }

            return (0, _preact.h)(
                'li',
                {
                    className: (0, _classnames2.default)((_classNames = {}, _classNames[prefixCls + '-pager-item'] = true, _classNames['state-prev'] = states.prev, _classNames['state-disabled'] = states.disabled, _classNames['state-current'] = states.current, _classNames['state-next'] = states.next, _classNames['state-ellipsis'] = states.ellipsis, _classNames)),
                    key: part + page,
                    'data-role': 'pager-item',
                    'data-page': page },
                pageText
            );
        };

        Pager.prototype.onMainClick = function onMainClick(e) {

            e.preventDefault();

            var target = e.target;

            var tar = target.getAttribute('data-role') ? target : target.parentNode.getAttribute('data-role') ? target.parentNode : '';

            if (!tar) {
                return;
            }

            var _props2 = this.props,
                first = _props2.first,
                onChange = _props2.onChange;


            var page = +tar.getAttribute('data-page') + first;

            if (this.state.page === page) {
                return;
            }

            this.setState({ page: page });

            // 被控制的
            if (onChange) {
                onChange({
                    target: this,
                    page: page
                });
                return;
            }
        };

        Pager.prototype.render = function render() {
            var _this2 = this,
                _classNames2;

            var _props3 = this.props,
                prefixCls = _props3.prefixCls,
                total = _props3.total,
                first = _props3.first,
                padding = _props3.padding,
                showCount = _props3.showCount,
                useLang = _props3.useLang,
                showAlways = _props3.showAlways,
                className = _props3.className,
                others = babelHelpers.objectWithoutProperties(_props3, ['prefixCls', 'total', 'first', 'padding', 'showCount', 'useLang', 'showAlways', 'className']);

            var page = this.state.page;
            var showCountNew = showCount > total ? total : showCount;

            page = page - first;

            if (!showAlways && total <= 1) {
                return (0, _preact.h)('ul', { className: 'c-pager' });
            }

            var wing = Math.floor(showCountNew / 2);

            var paddingLeft = padding;
            var paddingRight = padding;
            var reduceLeftToRight = page - wing;

            var wingLeft = wing;
            var wingRight = wing;

            // 如果wingLeft小于0, 那么把小于0的部分移动到wingRight
            if (reduceLeftToRight < 0) {
                wingLeft += reduceLeftToRight;
                wingRight -= reduceLeftToRight;
            }

            var reduceRightToLeft = page + wing + 1 - total;

            // 如果wingRight大于total, 那么把超长的部分移动到wingLeft
            if (reduceRightToLeft > 0) {
                wingLeft += reduceRightToLeft;
                wingRight -= reduceRightToLeft;
            }

            // 生成左半端页码
            var left = this.range(0, page, paddingLeft, wingLeft);
            // 生成右半端页码
            var right = this.range(page + 1, total, wingRight, paddingRight);
            // 全部页码
            var full = [{
                page: Math.max(page - 1, 0),
                states: {
                    prev: true,
                    disabled: page === 0
                },
                part: 'prev'
            }].concat(left, [{
                page: page,
                states: {
                    current: true
                },
                part: ''
            }], right, [{
                page: Math.min(page + 1, total - 1),
                states: {
                    next: true,
                    disabled: page >= total - 1
                },
                part: 'next'
            }]);

            var result = full.map(function (conf) {

                if (typeof conf === 'number') {
                    var part = conf >= 0 ? '' : 'ellipsis';
                    conf = {
                        page: Math.abs(conf),
                        states: {
                            ellipsis: !!part
                        },
                        part: part
                    };
                }

                return _this2.renderItem(conf);
            });

            var cls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefixCls + '-pager'] = true, _classNames2[className] = className, _classNames2));

            return (0, _preact.h)(
                'ul',
                babelHelpers.extends({ className: cls, onClick: this.onMainClick }, others),
                result
            );
        };

        return Pager;
    }(_preact.Component);

    Pager.defaultProps = {
        prefixCls: 'cui',
        // 当前页，第一页从0开始
        page: 1,

        // 起始页码
        first: 1,

        // 首尾显示的页码个数
        padding: 1,

        // 是否一直显示分页控件
        showAlways: false,

        // 当页数较多时，中间显示页码的个数
        showCount: 5,

        // 总页数
        total: 0,

        // 是否可用
        disabled: false,

        // 是否使用文字
        useLang: false,

        // 上下页显示文字
        lang: {

            // 上一页显示文字
            prev: '上一页',

            // 下一页显示文字
            next: '下一页',

            // 省略号
            ellipsis: '..'
        }
    };
    exports.default = Pager;
});
//# sourceMappingURL=Pager.js.map
