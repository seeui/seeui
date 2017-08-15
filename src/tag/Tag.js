/**
 * @file Tag
 * @author zhaiwanli
 * @author cgzero(cgzero@cgzero.com)
 * @data 2017-07-25
 */

import {h, Component} from 'preact';
import classNames from '../util/classnames';

import './Tag.styl';

/**
 * 标签
 *
 * @class
 */
export default class Tag extends Component {

    static defaultProps = {
        prefixCls: 'cui',
        closable: false
    };

    handleCloseClick(e) {
        if (this.props.onClose) {
            this.props.onClose(e);
        }
    }

    handleClick(e) {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        const {prefixCls, hasClose, isChecked, onClick} = this.props;

        const tagCls = classNames({
            [`${prefixCls}-tag`]: true,
            show: this.state.show,
            checked: isChecked,
            clickable: onClick
        });

        const closeCls = classNames({
            [`${prefixCls}-tag-close`]: true,
            'cui-icon': true,
            'cui-i-close': true
        });

        // TODO 根据是否传 href 属性判断是否变为 a 标签

        return (
            <div className={tagCls}>
                <span
                    className={`${prefixCls}-tag-body`}
                    onClick={e => this.handleClick(e)}
                >
                    {this.props.children}
                </span>
                {
                    hasClose
                        ? <span className={closeCls} onClick={e => this.handleCloseClick(e)}></span>
                        : ''
                }
            </div>
        );
    }
}
