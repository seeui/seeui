(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'preact', '../util/classnames', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('preact'), require('../util/classnames'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.preact, global.classnames, global.babelHelpers);
        global.Tag = mod.exports;
    }
})(this, function (exports, _preact, _classnames, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    var Tag = function (_Component) {
        babelHelpers.inherits(Tag, _Component);

        function Tag() {
            var _temp, _this, _ret;

            babelHelpers.classCallCheck(this, Tag);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
                show: true
            }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
        }

        Tag.prototype.handleClick = function handleClick(e) {
            if (this.props.closable) {
                this.setState({
                    show: false
                });
            }
            if (this.props.onClose) {
                this.props.onClose(e);
            }
        };

        Tag.prototype.render = function render() {
            var _classNames,
                _classNames2,
                _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                closable = _props.closable,
                color = _props.color,
                onClose = _props.onClose;


            var tagCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefixCls + '-tag'] = true, _classNames['show'] = this.state.show, _classNames));

            var tagStyle = color ? 'background:' + color + ';color:#fff;border-color:' + color : '';

            var closeCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefixCls + '-tag-close'] = true, _classNames2['cui-icon'] = true, _classNames2['cui-i-close'] = true, _classNames2));

            return (0, _preact.h)(
                'div',
                { className: tagCls, style: tagStyle },
                this.props.children,
                closable ? (0, _preact.h)('span', { className: closeCls, onClick: function onClick(e) {
                        return _this2.handleClick(e);
                    } }) : ''
            );
        };

        return Tag;
    }(_preact.Component);

    Tag.defaultProps = {
        prefixCls: 'cui',
        closable: false
    };
    exports.default = Tag;
});
//# sourceMappingURL=Tag.js.map
