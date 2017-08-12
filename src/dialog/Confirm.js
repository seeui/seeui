/**
 * @file Confirm
 * @author zhaiwanli
 * @time 17/7/15
 */

import {h, Component} from 'preact';
import classNames from '../util/classnames';
import {map} from '../util/lang';

import Dialog from './Dialog';
import Singleton from '../util/Singleton';

let defaultButtons = {
    confirm: {
        role: 'confirm',
        type: 'primary',
        value: '确定',
        size: 'large'
    },
    cancel: {
        role: 'cancel',
        type: 'default',
        value: '取消',
        size: 'large'
    }
};

export default class Confirm extends Component {

    static defaultProps = {
        prefixCls: 'cui',
        hasClose: false,
        maskClickClose: false,
        buttons: []
    };

    render() {
        const {prefixCls, className, children, buttons, onConfirm, onCancel, ...others} = this.props;

        const confirmCls = classNames({
            [`${prefixCls}-dialog-confirm`]: true,
            [className]: className
        });

        // 配置buttons，必须传role参数
        let dialogButtons = map(
            buttons.length ? buttons : [defaultButtons['confirm'], defaultButtons['cancel']],
            button => {
                let role = button.role;
                let defaultButton = defaultButtons[role];

                return {
                    ...defaultButton,
                    button,
                    onClick: () => {
                        role === 'confirm' && onConfirm && onConfirm();
                        role === 'cancel' && onCancel && onCancel();
                    }
                }
            }
        );

        return (
            <Dialog
                {...others}
                className={confirmCls}
                buttons={dialogButtons}
            >
                {children}
            </Dialog>
        );
    }
}

export const SingleConfirm = new Singleton(Confirm);
