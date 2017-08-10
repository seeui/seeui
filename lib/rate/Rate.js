(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'preact', '../util/classnames', '../icon/Icon', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('preact'), require('../util/classnames'), require('../icon/Icon'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.preact, global.classnames, global.Icon, global.babelHelpers);
        global.Rate = mod.exports;
    }
})(this, function (exports, _preact, _classnames, _Icon, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    var _Icon2 = babelHelpers.interopRequireDefault(_Icon);

    var Rate = function (_Component) {
        babelHelpers.inherits(Rate, _Component);

        function Rate(props) {
            babelHelpers.classCallCheck(this, Rate);

            var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props));

            _this.state = {
                num: +props.num
            };
            return _this;
        }

        Rate.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
            this.setState({
                num: +nextProps.num
            });
        };

        Rate.prototype.rateSelectHander = function rateSelectHander(num) {
            var onRateSelect = this.props.onRateSelect;

            onRateSelect && onRateSelect(num);
        };

        Rate.prototype.rateMouseOver = function rateMouseOver(num) {
            this.setState({
                num: num
            });

            this.props.onRateOver && this.props.onRateOver(num);
        };

        Rate.prototype.rateMouseLeave = function rateMouseLeave() {
            this.setState({
                num: +this.props.num
            });

            this.props.onRateLeave && this.props.onRateLeave();
        };

        Rate.prototype.render = function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                count = _props.count,
                size = _props.size,
                rateContent = _props.rateContent,
                hasHover = _props.hasHover,
                disabled = _props.disabled,
                others = babelHelpers.objectWithoutProperties(_props, ['prefixCls', 'className', 'count', 'size', 'rateContent', 'hasHover', 'disabled']);

            var num = this.state.num;

            var rateCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefixCls + '-rate'] = true, _classNames[className] = className, _classNames));

            var starDom = [];

            var _loop = function _loop(i) {
                var _classNames2;

                var cls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefixCls + '-rate-item'] = true, _classNames2['rate-active'] = i < +num, _classNames2));

                var index = i + 1;

                starDom.push((0, _preact.h)(
                    'span',
                    {
                        className: cls,
                        onClick: function onClick() {
                            return disabled || _this2.rateSelectHander(index);
                        },
                        onMouseOver: function onMouseOver() {
                            return disabled || hasHover && _this2.rateMouseOver(index);
                        },
                        onMouseLeave: function onMouseLeave() {
                            return disabled || hasHover && _this2.rateMouseLeave();
                        }
                    },
                    rateContent ? rateContent : (0, _preact.h)(_Icon2.default, { type: 'favor-fill', size: size || '16' })
                ));
            };

            for (var i = 0; i < +count; i++) {
                _loop(i);
            }

            return (0, _preact.h)(
                'div',
                babelHelpers.extends({ className: rateCls }, others),
                starDom
            );
        };

        return Rate;
    }(_preact.Component);

    Rate.defaultProps = {
        prefixCls: 'cui',
        num: 0,
        count: 5,
        disabled: false,
        hasHover: true
    };
    exports.default = Rate;
});
//# sourceMappingURL=Rate.js.map
