(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.babelHelpers);
        global.classnames = mod.exports;
    }
})(this, function (exports, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.default = classnames;
    /**
     * @file classnames
     * https://github.com/JedWatson/classnames
     * @author cgzero(cgzero@cgzero.com)
     * @time 2017-08-09
     */

    var hasOwn = {}.hasOwnProperty;

    function classnames() {
        var classes = [];

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        for (var i = 0; i < args.length; i++) {
            var arg = args[i];
            if (!arg) {
                continue;
            }

            var argType = typeof arg === 'undefined' ? 'undefined' : babelHelpers.typeof(arg);

            if (argType === 'string' || argType === 'number') {
                classes.push(arg);
            } else if (arg instanceof Array && arg.length) {
                var inner = classnames.apply(null, arg);
                if (inner) {
                    classes.push(inner);
                }
            } else if (argType === 'object') {
                for (var key in arg) {
                    if (hasOwn.call(arg, key) && arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }

        return classes.join(' ');
    }
});
//# sourceMappingURL=classnames.js.map
