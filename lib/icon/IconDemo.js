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
        global.IconDemo = mod.exports;
    }
})(this, function (exports, _preact, _index, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var IconWrap = function (_Component) {
        babelHelpers.inherits(IconWrap, _Component);

        function IconWrap() {
            babelHelpers.classCallCheck(this, IconWrap);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        IconWrap.prototype.render = function render() {
            return (0, _preact.h)(
                'div',
                { className: 'icon-wrap' },
                this.props.children
            );
        };

        return IconWrap;
    }(_preact.Component);

    var ButtonDemo = function (_Component2) {
        babelHelpers.inherits(ButtonDemo, _Component2);

        function ButtonDemo() {
            babelHelpers.classCallCheck(this, ButtonDemo);
            return babelHelpers.possibleConstructorReturn(this, _Component2.apply(this, arguments));
        }

        ButtonDemo.prototype.render = function render() {
            return (0, _preact.h)(
                'div',
                { className: 'icons-wrap' },
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'check' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'close' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'favor-fill' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'favor' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'loading' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'round-check-fill' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'round-check' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'round-close-fill' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'round-close' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'search' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'unfold' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'back' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'more' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'question-fill' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'top' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'right' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'refresh' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'delete-fill' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'delete' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'home' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'home-fill' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'square-check-fill' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'square' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'square-check' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'round' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'fold' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'info-fill' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'info' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'share' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'people-fill' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'people' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'radio-box' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'radio-box-fill' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'add' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'move' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'warn-fill' })
                ),
                (0, _preact.h)(
                    IconWrap,
                    null,
                    (0, _preact.h)(_index.Icon, { type: 'warn' })
                )
            );
        };

        return ButtonDemo;
    }(_preact.Component);

    exports.default = ButtonDemo;
});
//# sourceMappingURL=IconDemo.js.map
