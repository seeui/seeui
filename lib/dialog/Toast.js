(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'preact', '../util/classnames', './Dialog', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('preact'), require('../util/classnames'), require('./Dialog'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.preact, global.classnames, global.Dialog, global.babelHelpers);
        global.Toast = mod.exports;
    }
})(this, function (exports, _preact, _classnames, _Dialog, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    var _Dialog2 = babelHelpers.interopRequireDefault(_Dialog);

    var Toast = function (_Component) {
        babelHelpers.inherits(Toast, _Component);

        function Toast(props) {
            babelHelpers.classCallCheck(this, Toast);

            var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props));

            _this.state = {
                remain: props.remain,
                show: false
            };
            return _this;
        }

        Toast.prototype.countDown = function countDown() {
            var self = this;

            var counter = setInterval(function () {
                if (self.state.remain === 1) {
                    clearInterval(counter);

                    self.setState({ show: false, remain: self.props.remain + 1 });
                }

                self.setState({ remain: --self.state.remain });
            }, 1000);
        };

        Toast.prototype.onToastShow = function onToastShow() {
            this.countDown();

            this.props.onShow && this.props.onShow();
        };

        Toast.prototype.onToastHide = function onToastHide() {
            this.props.onHide && this.props.onHide();
        };

        Toast.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
            var remain = nextProps.remain,
                show = nextProps.show;


            this.setState({
                remain: remain || this.state.remain,
                show: show
            });
        };

        Toast.prototype.render = function render() {
            var _props = this.props,
                msg = _props.msg,
                children = _props.children,
                title = _props.title;


            return (0, _preact.h)(
                _Dialog2.default,
                {
                    title: title,
                    hasClose: false,
                    show: this.state.show,
                    onShow: this.onToastShow.bind(this),
                    onHide: this.onToastHide.bind(this)
                },
                children,
                (0, _preact.h)(
                    'div',
                    { className: 'cui-dialog-count-down' },
                    this.state.remain,
                    's'
                )
            );
        };

        return Toast;
    }(_preact.Component);

    exports.default = Toast;
});
//# sourceMappingURL=Toast.js.map
