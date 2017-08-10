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
        global.ButtonDemo = mod.exports;
    }
})(this, function (exports, _preact, _index, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var ButtonDemo = function (_Component) {
        babelHelpers.inherits(ButtonDemo, _Component);

        function ButtonDemo() {
            babelHelpers.classCallCheck(this, ButtonDemo);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        ButtonDemo.prototype.render = function render() {
            return (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)(
                    'p',
                    null,
                    (0, _preact.h)(
                        _index.Button,
                        null,
                        '\u4E3B\u8981\u6309\u94AE'
                    ),
                    '\xA0\xA0',
                    (0, _preact.h)(
                        _index.Button,
                        { type: 'default' },
                        '\u9ED8\u8BA4\u6309\u94AE'
                    ),
                    '\xA0\xA0',
                    (0, _preact.h)(
                        _index.Button,
                        { disabled: true },
                        '\u4E3B\u8981\u6309\u94AE\uFF08\u7981\u7528\uFF09'
                    ),
                    '\xA0\xA0',
                    (0, _preact.h)(
                        _index.Button,
                        { type: 'default', disabled: true },
                        '\u9ED8\u8BA4\u6309\u94AE\uFF08\u7981\u7528\uFF09'
                    )
                ),
                (0, _preact.h)(
                    'p',
                    null,
                    (0, _preact.h)(
                        _index.Button,
                        { size: 'small' },
                        '\u4E3B\u8981\u6309\u94AE\uFF08\u5C0F\uFF09'
                    ),
                    '\xA0\xA0',
                    (0, _preact.h)(
                        _index.Button,
                        { size: 'small', type: 'default' },
                        '\u9ED8\u8BA4\u6309\u94AE\uFF08\u5C0F\uFF09'
                    )
                )
            );
        };

        return ButtonDemo;
    }(_preact.Component);

    exports.default = ButtonDemo;
});
//# sourceMappingURL=ButtonDemo.js.map
