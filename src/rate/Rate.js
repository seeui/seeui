/**
 * @file Rate
 * @author wuqi03(441984145@qq.com)
 * @time 17/7/19
 */

import {h, Component} from 'preact';
import classNames from '../util/classnames';

import Icon from '../icon/Icon';

import './Rate.styl';

export default class Rate extends Component {
    static defaultProps = {
        prefixCls: 'cui',
        num: 0,
        count: 5,
        disabled: false,
        hasHover: true
    };

    constructor(props) {
        super(props);

        this.state = {
            num: +props.num
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            num: +nextProps.num
        });
    }

    /**
     * 打分点击操作
     *
     * @private
     * @param {number} num 第几个rate
     */
    rateSelectHander(num) {
        const onRateSelect = this.props.onRateSelect;

        onRateSelect && onRateSelect(num);
    }

    /**
     * hover事件
     *
     * @private
     * @param {number} num 当前被进入的子项编号
     */
    rateMouseOver(num) {
        this.setState({num});

        this.props.onRateOver && this.props.onRateOver(num);
    }

    /**
     * leave事件
     *
     * @private
     */
    rateMouseLeave() {
        this.setState({
            num: +this.props.num
        });

        this.props.onRateLeave && this.props.onRateLeave();
    }

    render() {
        const {prefixCls, className, count, size, rateContent, hasHover, disabled, ...others} = this.props;
        const num = this.state.num;

        const rateCls = classNames({
            [`${prefixCls}-rate`]: true,
            [className]: className
        });

        let starDom = [];

        for (let i = 0; i < +count; i++) {
            let cls = classNames({
                [`${prefixCls}-rate-item`]: true,
                'rate-active': i < +num
            });

            let index = i + 1;

            starDom.push(
                <span
                    className={cls}
                    onClick={() => disabled || this.rateSelectHander(index)}
                    onMouseOver={() => disabled || hasHover && this.rateMouseOver(index)}
                    onMouseLeave={() => disabled || hasHover && this.rateMouseLeave()}
                >
                    {rateContent ? rateContent : <Icon type="favor-fill" style={{fontSize: size + 'px' || '16px'}} />}
                </span>
            );
        }

        return (
            <div className={rateCls} {...others}>
                {starDom}
            </div>
        );
    }
}
