/**
 * @file Alert
 * @author zhaiwanli
 *         wuqi03(wuqi03@baidu.com)
 * @time 17/7/15
 */

import {h, Component} from 'preact';
import classNames from '../util/classnames';

import Dialog from './Dialog';

let defaultButton = {
    type: 'primary',
    value: '确定',
    size: 'large'
};

export default class Alert extends Component {
    static defaultProps = {
        prefixCls: 'cui',
        hasClose: false,
        maskClickClose: false
    };

    render() {
        const {prefixCls, className, children, button, onConfirm, ...others} = this.props;

        const alertCls = classNames({
            [`${prefixCls}-dialog-alert`]: true,
            [className]: className
        });

        let dialogButtons = [{
            ...defaultButton,
            ...button,
            onClick() {
                onConfirm && onConfirm();
            }
        }];

        return (
            <Dialog
                {...others}
                className={alertCls}
                buttons={dialogButtons}
            >
                {children}
            </Dialog>
        );
    }
}
