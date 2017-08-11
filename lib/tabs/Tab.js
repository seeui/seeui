/**
 * @file Tab项
 * @author huangjing
 * @date 2017-07-13
 */

import {h, Component} from 'preact';
import classNames from '../util/classnames';


export default class Tab extends Component {

    static defaultProps = {
        prefixCls: 'cui',
        // 是否选中
        selected: false,
        // 是否禁用
        disabled: false,
        // tab的title
        label: '',
        // 序号
        index: 0,
        // 点击
        onClick() {},
        // 移入
        onMouseOver() {},
        // 移出
        onMouseLeave() {}
    };

    /* eslint-disable max-len */
    render({prefixCls, className, selected, disabled, label, index, href, onClick, onMouseOver, onMouseLeave, ...others}) {
    /* eslint-enable max-len */

        const CellComponent = href ? 'a' : 'div';

        const cls = classNames({
            [`${prefixCls}-tabs-tab`]: true,
            [`${prefixCls}-tabs-tab-active`]: selected,
            [`${prefixCls}-tabs-tab-disabled`]: disabled,
            [className]: className
        });

        return (
            <CellComponent
                className={cls}
                href={href}
                onClick={e => disabled || onClick(e, index)}
                onMouseOver={e => disabled || onMouseOver(e)}
                onMouseLeave={e => disabled || onMouseLeave(e)}
                {...others}
            >
                <span className={`${prefixCls}-tabs-tab-txt`}>
                    {label}
                </span>
            </CellComponent>
        );
    }
}

//# sourceMappingURL=Tab.js.map
