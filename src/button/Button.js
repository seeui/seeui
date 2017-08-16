/**
 * @file Button
 * @author cgzero(cgzero@cgzero.com)
 * @data 2017-07-05
 */

import {h, Component} from 'preact';
import classNames from '../util/classnames';

import './Button.styl';

/**
 * 按钮
 *
 * @class
 */
export default class Button extends Component {

    static defaultProps = {
        prefixCls: 'cui',
        disabled: false,
        type: 'primary',
        size: 'large'
    };

    handleClick(e) {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        const {prefixCls, type, size, disabled, children, className, ...others} = this.props;

        // const showType = (type === 'primary' || type === 'default') ? type : 'primary';

        const cls = classNames({
            [`${prefixCls}-button`]: true,
            [type]: type,
            [size]: size,
            disabled: disabled,
            [className]: className
        });

        return (
            <input
                className={cls}
                type="button"
                value={children}
                onClick={e => this.handleClick(e)}
                disabled={disabled}
                {...others}
            />
        );
    }
}
