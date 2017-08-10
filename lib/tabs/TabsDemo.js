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
        global.TabsDemo = mod.exports;
    }
})(this, function (exports, _preact, _index, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var TabsDemo = function (_Component) {
        babelHelpers.inherits(TabsDemo, _Component);

        function TabsDemo() {
            babelHelpers.classCallCheck(this, TabsDemo);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        TabsDemo.prototype.render = function render() {
            var _this2 = this;

            return (0, _preact.h)(
                'div',
                { className: 'tabs-demo' },
                (0, _preact.h)(
                    'h3',
                    null,
                    '\u9ED8\u8BA4'
                ),
                (0, _preact.h)(
                    _index.Tabs,
                    {
                        selectedIndex: this.state.index1,
                        onChange: function onChange(tab) {
                            _this2.setState({
                                index1: tab.selectedIndex
                            });
                        }
                    },
                    (0, _preact.h)(_index.Tab, { label: '\u8BC4\u4EF7' }),
                    (0, _preact.h)(_index.Tab, { label: '\u6295\u8BC9' }),
                    (0, _preact.h)(_index.Tab, { label: '\u65B0\u95FB' })
                ),
                (0, _preact.h)(
                    _index.Tabs,
                    {
                        type: 'txtline',
                        selectedIndex: this.state.index2,
                        onChange: function onChange(tab) {
                            _this2.setState({
                                index2: tab.selectedIndex
                            });
                        }
                    },
                    (0, _preact.h)(_index.Tab, { label: '\u8BC4\u4EF7' }),
                    (0, _preact.h)(_index.Tab, { label: '\u6295\u8BC9' }),
                    (0, _preact.h)(_index.Tab, { label: '\u65B0\u95FB' })
                ),
                (0, _preact.h)('br', null),
                (0, _preact.h)(
                    'h3',
                    null,
                    '\u9009\u4E2D\u6307\u5B9Atab & \u7981\u7528\u9009\u4E2D\u52A8\u753B'
                ),
                (0, _preact.h)(
                    _index.Tabs,
                    {
                        selectedIndex: this.state.index3 !== undefined ? this.state.index3 : 1,
                        onChange: function onChange(tab) {
                            _this2.setState({
                                index3: tab.selectedIndex
                            });
                        },
                        hasAnimate: false
                    },
                    (0, _preact.h)(_index.Tab, { label: '\u8BC4\u4EF7' }),
                    (0, _preact.h)(_index.Tab, { label: '\u6295\u8BC9' }),
                    (0, _preact.h)(_index.Tab, { label: '\u65B0\u95FB' })
                ),
                (0, _preact.h)('br', null),
                (0, _preact.h)(
                    'h3',
                    null,
                    'hover\u52A8\u753B'
                ),
                (0, _preact.h)(
                    _index.Tabs,
                    {
                        selectedIndex: this.state.index4,
                        onChange: function onChange(tab) {
                            _this2.setState({
                                index4: tab.selectedIndex
                            });
                        },
                        hoverAnimate: true
                    },
                    (0, _preact.h)(_index.Tab, { label: '\u8BC4\u4EF7' }),
                    (0, _preact.h)(_index.Tab, { label: '\u6295\u8BC9' }),
                    (0, _preact.h)(_index.Tab, { label: '\u65B0\u95FB' })
                )
            );
        };

        return TabsDemo;
    }(_preact.Component);

    exports.default = TabsDemo;
});
//# sourceMappingURL=TabsDemo.js.map
