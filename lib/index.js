(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './button/Button', './pager/Pager', './tabs/Tab', './tabs/Tabs', './icon/Icon', './rate/Rate', './input/Input', './dialog/Dialog', './Dialog/Toast', './Dialog/Alert', './Dialog/Confirm', './tag/Tag', './babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./button/Button'), require('./pager/Pager'), require('./tabs/Tab'), require('./tabs/Tabs'), require('./icon/Icon'), require('./rate/Rate'), require('./input/Input'), require('./dialog/Dialog'), require('./Dialog/Toast'), require('./Dialog/Alert'), require('./Dialog/Confirm'), require('./tag/Tag'), require('./babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Button, global.Pager, global.Tab, global.Tabs, global.Icon, global.Rate, global.Input, global.Dialog, global.Toast, global.Alert, global.Confirm, global.Tag, global.babelHelpers);
        global.index = mod.exports;
    }
})(this, function (exports, _Button, _Pager, _Tab, _Tabs, _Icon, _Rate, _Input, _Dialog, _Toast, _Alert, _Confirm, _Tag, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.Tag = exports.Confirm = exports.Alert = exports.Toast = exports.Dialog = exports.Input = exports.Rate = exports.Icon = exports.Tabs = exports.Tab = exports.Pager = exports.Button = undefined;

    var _Button2 = babelHelpers.interopRequireDefault(_Button);

    var _Pager2 = babelHelpers.interopRequireDefault(_Pager);

    var _Tab2 = babelHelpers.interopRequireDefault(_Tab);

    var _Tabs2 = babelHelpers.interopRequireDefault(_Tabs);

    var _Icon2 = babelHelpers.interopRequireDefault(_Icon);

    var _Rate2 = babelHelpers.interopRequireDefault(_Rate);

    var _Input2 = babelHelpers.interopRequireDefault(_Input);

    var _Dialog2 = babelHelpers.interopRequireDefault(_Dialog);

    var _Toast2 = babelHelpers.interopRequireDefault(_Toast);

    var _Alert2 = babelHelpers.interopRequireDefault(_Alert);

    var _Confirm2 = babelHelpers.interopRequireDefault(_Confirm);

    var _Tag2 = babelHelpers.interopRequireDefault(_Tag);

    exports.Button = _Button2.default;
    exports.Pager = _Pager2.default;
    exports.Tab = _Tab2.default;
    exports.Tabs = _Tabs2.default;
    exports.Icon = _Icon2.default;
    exports.Rate = _Rate2.default;
    exports.Input = _Input2.default;
    exports.Dialog = _Dialog2.default;
    exports.Toast = _Toast2.default;
    exports.Alert = _Alert2.default;
    exports.Confirm = _Confirm2.default;
    exports.Tag = _Tag2.default;
});
//# sourceMappingURL=index.js.map
