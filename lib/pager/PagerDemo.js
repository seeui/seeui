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
        global.PagerDemo = mod.exports;
    }
})(this, function (exports, _preact, _index, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var PagerDemo = function (_Component) {
        babelHelpers.inherits(PagerDemo, _Component);

        function PagerDemo() {
            babelHelpers.classCallCheck(this, PagerDemo);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        PagerDemo.prototype.render = function render() {
            return (0, _preact.h)(
                'div',
                null,
                (0, _preact.h)(_index.Pager, {
                    total: 10,
                    page: 1
                }),
                (0, _preact.h)('br', null),
                (0, _preact.h)(_index.Pager, {
                    total: 20,
                    page: 5,
                    useLang: true
                })
            );
        };

        return PagerDemo;
    }(_preact.Component);

    exports.default = PagerDemo;
});
//# sourceMappingURL=PagerDemo.js.map
