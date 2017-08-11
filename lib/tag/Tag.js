/**
 * @file Tag
 * @author zhaiwanli
 * @data 2017-07-25
 */

import {h, Component} from 'preact';
import classNames from '../util/classnames';


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

    state = {
        show: true
    };

    handleClick(e) {
        if (this.props.closable) {
            this.setState({
                show: false
            });
        }
        if (this.props.onClose) {
            this.props.onClose(e);
        }
    }

    render() {
        const {prefixCls, closable, color, onClose} = this.props;

        const tagCls = classNames({
            [`${prefixCls}-tag`]: true,
            'show': this.state.show
        });

        const tagStyle = color ? `background:${color};color:#fff;border-color:${color}` : '';

        const closeCls = classNames({
            [`${prefixCls}-tag-close`]: true,
            'cui-icon': true,
            'cui-i-close': true
        });

        return (
            <div className={tagCls} style={tagStyle}>
                {this.props.children}
                {
                    closable
                    ? <span className={closeCls} onClick={e => this.handleClick(e)}></span>
                    : ''
                }
            </div>
        );
    }
}

//# sourceMappingURL=Tag.js.map
