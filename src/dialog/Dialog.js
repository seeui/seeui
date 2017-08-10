/**
 * @file Dialog
 * @author zhaiwanli
 * @time 17/7/5
 */

import {h, Component} from 'preact';
import classNames from '../util/classnames';
import {hasClass} from '../util/dom';
import Button from '../button/Button';

import './Dialog.styl';

export default class Dialog extends Component {

    static defaultProps = {
        prefixCls: 'cui',
        show: false,
        hasClose: true,
        maskClickClose: false,
        buttons: []
    };

    constructor(props) {
        super(props);

        // 是否是父组件通过props控制组件显示隐藏
        // 触发onShow onHide回调时是否通知父组件更新props中的显示隐藏状态
        // true: 是父组件设置状态，不再触发状态更新   false: 组件内部设置状态，需要触发状态更新
        // 应用场景：父组件设置显示隐藏，回调时不再要求重置父组件状态
        this.propsUpdateShow = false;
    }

    /**
     * 父级修改属性
     *
     * @private
     * @param {Object} nextProps 更改后的属性值
     */
    componentWillReceiveProps(nextProps) {
        let show = nextProps.show;

        if (show === this.props.show) {
            this.propsUpdateShow = true;
        }
    }

    toggleLockWindow(lock) {
        // lock ? lockWindow() : unLockWindow();
    }

    onMaskClick(e) {
        const {prefixCls, maskClickClose, onHide} = this.props;
        if (maskClickClose && hasClass(e.target, `${prefixCls}-dialog`)) {
            onHide && onHide({type: 'maskClick'});
        }
        else {
            e.stopPropagation();
        }
    }

    // 初始化完成，如果show，则触发onShow事件，初始化hide，不用触发onHide事件
    componentDidMount() {
        let {show, onShow} = this.props;

        // show && this.toggleLockWindow(true) && onShow && onShow();
        show && onShow && onShow();
    }

    // 状态更新后，可能是props改变，也可能是state改变触发的
    componentDidUpdate() {
        const {show, onShow, onHide} = this.props;

        if (this.propsUpdateShow) {
            this.propsUpdateShow = false;
            return;
        }

        this.propsUpdateShow = false;

        if (show) {
            // this.toggleLockWindow(true);
            onShow && onShow();
        }
        else {
            // this.toggleLockWindow(false);
            onHide && onHide();
        }
    }

    // 销毁前如果状态是显示，则需要考虑解锁屏幕
    componentWillUnmount() {
        // this.props.show && this.toggleLockWindow(false);
    }

    /**
     * 渲染浮层头部
     *
     * @private
     * @return {XML}
     */
    renderTitle() {
        const {prefixCls, title} = this.props;

        return (
            <h3 className={`${prefixCls}-dialog-header`}>{title}</h3>
        );
    }

    /**
     * 渲染关闭按钮
     *
     * @private
     * @return {XML}
     */
    renderClose() {
        const {prefixCls, closeContent, onHide} = this.props;

        return (
            <span
                onClick={e => onHide({type: 'closeClick'})}
                className={`${prefixCls}-dialog-close`}
            >
                {closeContent ? closeContent : '×'}
            </span>
        );
    }

    /**
     * 渲染底部button
     *
     * @private
     * @return {XML}
     */
    renderFooter() {
        const {prefixCls, buttons} = this.props;

        let btnsDom = buttons.map(button => {
            const {type = 'default', value, size = 'large', ...others} = button;

            return (
                <div className={`${prefixCls}-dialog-footer-item`}>
                    <Button type={type} size={size} {...others}>
                        {value}
                    </Button>
                </div>
            );
        });

        return (
            <div className={`${prefixCls}-dialog-footer`}>
                {btnsDom}
            </div>
        );
    }

    render() {
        const {
            prefixCls,
            className,
            show,
            width,
            top,
            children,
            hasClose,
            title,
            buttons,
            maskClickClose,
            ...others
        } = this.props;

        const dialogCls = classNames({
            [`${prefixCls}-dialog`]: true,
            'show': show,
            [className]: className
        });

        const dialogWrapCls = classNames({
            [`${prefixCls}-dialog-wrap`]: true,
            'vertical-middle': (top == null)
        });

        const dialogStyle = ''
            + (width ? `width:${width};` : '')
            + (top != null ? `top:${top}` : '');

        return (
            <div className={dialogCls} {...others} onClick={e => maskClickClose && this.onMaskClick(e)}>
                <div className={dialogWrapCls} style={dialogStyle}>
                    {title ? this.renderTitle() : null}
                    {hasClose ? this.renderClose() : null}
                    <div className={`${prefixCls}-dialog-body`}>
                        {children}
                    </div>
                    {buttons && buttons.length ? this.renderFooter() : null}
                </div>
            </div>
        );
    }
}
