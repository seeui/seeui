(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'preact', 'preact-compat', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('preact'), require('preact-compat'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.preact, global.preactCompat, global.babelHelpers);
        global.Singleton = mod.exports;
    }
})(this, function (exports, _preact, _preactCompat, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var Singleton = function () {
        function Singleton(component) {
            babelHelpers.classCallCheck(this, Singleton);

            this.dom = null;
            this.component = component;
            this.instance = null;
        }

        Singleton.prototype.show = function show(option) {
            if (!this.dom) {
                this.dom = document.createElement('div');
                document.body.appendChild(this.dom);
            }

            var Component = this.component;

            this.instance = (0, _preactCompat.render)((0, _preact.h)(Component, option), this.dom);
            // this.instance.setState({
            //     show: true
            // });
        };

        Singleton.prototype.hide = function hide() {
            if (this.instance) {
                (0, _preactCompat.unmountComponentAtNode)(this.dom);
                // this.instance.props.show = false;
                // this.instance.setState({
                //     show: false
                // }, () => {
                //     setTimeout(() => {
                //         unmountComponentAtNode(this.dom);
                //     }, 100);
                // });
            }
        };

        return Singleton;
    }();

    exports.default = Singleton;
});
//# sourceMappingURL=Singleton.js.map
