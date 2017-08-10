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
        global.Alert = mod.exports;
    }
})(this, function (exports, _preact, _classnames, _Dialog, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    var _Dialog2 = babelHelpers.interopRequireDefault(_Dialog);

    var Alert = function (_Component) {
        babelHelpers.inherits(Alert, _Component);

        function Alert(props) {
            babelHelpers.classCallCheck(this, Alert);

            var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props));

            _this.state = {
                show: false
            };
            return _this;
        }

        Alert.prototype.onAlertShow = function onAlertShow() {
            this.props.onShow && this.props.onShow();
        };

        Alert.prototype.onAlertHide = function onAlertHide(data) {
            if (data && (data.type === 'closeClick' || data.type === 'maskClick')) {
                this.props.onHide && this.props.onHide();
            }
        };

        Alert.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
            var remain = nextProps.remain,
                show = nextProps.show;


            this.setState({
                show: show
            });
        };

        Alert.prototype.render = function render() {
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
            }];

            return (0, _preact.h)(
                _Dialog2.default,
                {
                    title: title,
                    hasClose: true,
                    show: this.state.show,
                    buttons: dialogButtons,
                    onShow: this.onAlertShow.bind(this),
                    onHide: this.onAlertHide.bind(this),
                    maskClickClose: true
                },
                children
            );
        };

        return Alert;
    }(_preact.Component);

    exports.default = Alert;
});
//# sourceMappingURL=Alert.js.map
