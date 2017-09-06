/**
 * @file Toast
 * @author zhaiwanli
 * @time 17/7/15
 */

import {h, Component} from 'preact';
import Dialog from './Dialog';
import classNames from '../util/classnames';

export default class Toast extends Component {

    static defaultProps = {
        prefixCls: 'cui',
        delayTime: 3000,
        hasClose: false
    };

    componentDidMount() {
        const {onHide, delayTime} = this.props;

        setTimeout(() => {
            onHide && onHide();
        }, delayTime);
    }

    render() {
        const {prefixCls, className, children, ...others} = this.props;

        const toastCls = classNames({
            [`${prefixCls}-toast`]: true,
            [className]: className
        });

        return (
            <Dialog
                className={toastCls}
                show={true}
                {...others}
            >
                {children}
            </Dialog>
        );
    }
}

//# sourceMappingURL=Toast.js.map
