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
        global.RateDemo = mod.exports;
    }
})(this, function (exports, _preact, _index, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var RateDemo = function (_Component) {
        babelHelpers.inherits(RateDemo, _Component);

        function RateDemo(props) {
            babelHelpers.classCallCheck(this, RateDemo);

            var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props));

            _this.state = {
                rate1: 0,
                rate2: 5,
                rate3: 2
            };
            return _this;
        }

        RateDemo.prototype.render = function render() {
            var _this2 = this;

            var _state = this.state,
                rate1 = _state.rate1,
                rate2 = _state.rate2,
                rate3 = _state.rate3,
                rate4 = _state.rate4;


            var rateContent = (0, _preact.h)(_index.Icon, { type: 'round-check-fill' });

            return (0, _preact.h)(
                'div',
                { className: 'rate-demo' },
                (0, _preact.h)(
                    'p',
                    null,
                    '\u9ED8\u8BA4\u8BC4\u5206\uFF1A',
                    (0, _preact.h)(_index.Rate, {
                        num: rate1,
                        onRateSelect: function onRateSelect(num) {
                            return _this2.setState({ rate1: num });
                        }
                    })
                ),
                (0, _preact.h)(
                    'p',
                    null,
                    '\u53EF\u63A7\u8BC4\u5206\u4E2A\u6570\uFF1A',
                    (0, _preact.h)(_index.Rate, {
                        num: rate2,
                        count: '8',
                        onRateSelect: function onRateSelect(num) {
                            return _this2.setState({ rate2: num });
                        }
                    })
                ),
                (0, _preact.h)(
                    'p',
                    null,
                    '\u53EF\u63A7\u8BC4\u5206\u6837\u5F0F\uFF1A',
                    (0, _preact.h)(_index.Rate, {
                        className: 'rate-demo',
                        num: rate3,
                        rateContent: rateContent,
                        onRateSelect: function onRateSelect(num) {
                            return _this2.setState({ rate3: num });
                        }
                    })
                ),
                (0, _preact.h)(
                    'p',
                    null,
                    '\u7981\u7528\u8BC4\u5206\uFF1A',
                    (0, _preact.h)(_index.Rate, {
                        className: 'rate-demo',
                        num: '2',
                        disabled: true,
                        onRateSelect: function onRateSelect(num) {
                            return _this2.setState({ rate1: num });
                        }
                    })
                )
            );
        };

        return RateDemo;
    }(_preact.Component);

    exports.default = RateDemo;
});
//# sourceMappingURL=RateDemo.js.map
