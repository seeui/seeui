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
        global.Confirm = mod.exports;
    }
})(this, function (exports, _preact, _classnames, _Dialog, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    var _Dialog2 = babelHelpers.interopRequireDefault(_Dialog);

    var Confirm = function (_Component) {
        babelHelpers.inherits(Confirm, _Component);

        function Confirm(props) {
            babelHelpers.classCallCheck(this, Confirm);

            var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props));

            _this.state = {
                show: false
            };
            return _this;
        }

        Confirm.prototype.onConfirmShow = function onConfirmShow() {
            this.props.onShow && this.props.onShow();
        };

        Confirm.prototype.onConfirmHide = function onConfirmHide(data) {
            if (data && (data.type === 'closeClick' || data.type === 'maskClick')) {
                this.props.onHide && this.props.onHide();
            }
        };

        Confirm.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
            var remain = nextProps.remain,
                show = nextProps.show;


            this.setState({
                show: show
            });
        };

        Confirm.prototype.render = function render() {
            var _this2 = this;

            var _props = this.props,
                msg = _props.msg,
                children = _props.children,
                title = _props.title,
                onHide = _props.onHide,
                onConfirm = _props.onConfirm;


            var dialogButtons = [{
                type: 'primary',
                value: '确定',
                size: 'large',
                onClick: function onClick() {
                    _this2.props.onHide && _this2.props.onHide();
                    _this2.props.onConfirm && _this2.props.onConfirm();
                }
            }, {
                type: 'default',
                value: '取消',
                size: 'large',
                onClick: function onClick() {
                    _this2.props.onHide && _this2.props.onHide();
                    _this2.props.onCancel && _this2.props.onCancel();
                }
            }];

            return (0, _preact.h)(
                _Dialog2.default,
                {
                    title: title,
                    hasClose: true,
                    show: this.state.show,
                    buttons: dialogButtons,
                    onShow: this.onConfirmShow.bind(this),
                    onHide: this.onConfirmHide.bind(this),
                    maskClickClose: true
                },
                children
            );
        };

        return Confirm;
    }(_preact.Component);

    exports.default = Confirm;
});
//# sourceMappingURL=Confirm.js.map
