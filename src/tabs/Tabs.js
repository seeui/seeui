/**
 * @file Tabs
 * @author huangjing
 * @date 2017-07-13
 */

import {h, Component, cloneElement} from 'preact';
import classNames from '../util/classnames';
import {setStyle, query, closest} from '../util/dom';

import Tab from './Tab';

import './Tabs.styl';

export default class Tabs extends Component {

    constructor(props) {

        super(props);

        const selectedIndex = props.selectedIndex;

        /**
         * 状态
         *
         * @private
         * @type {Object}
         */
        this.state = {
            selectedIndex,
            hasAnimate: false
        };

        this.onTabClick = this.onTabClick.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    static defaultProps = {
        prefixCls: 'cui',
        selectedIndex: 0,
        // 类型，目前的值为 blockline 和 txtline， 默认为blockLine
        type: 'blockline',
        // 切换tab时底边是否有滑动动画
        hasAnimate: true,
        // 鼠标在tab上移动时 是否有跟随效果
        hoverAnimate: false,
        onChange() {}
    };

    static Tab = Tab;

    componentDidMount() {

        // 更新底边的状态
        this.doStick(true);
    }

    componentWillReceiveProps({selectedIndex}) {

        if (selectedIndex !== this.state.selectedIndex) {
            this.setState({
                selectedIndex
            });
        }
    }

    componentDidUpdate() {
        // 更新底边的状态,
        // 因为子组件Tab的渲染顺序在父组件之后，所以需要等待他们ready后再执行位置的更新
        setTimeout(() => {
            // 全屏类型的不需要滚动
            this.doStick();
        }, 0);
    }

    doStick(isFirst) {
        const sel = `.${this.props.prefixCls}-tabs-tab-active`;
        let el = query(sel, this.main);
        this.stickBorder(el, isFirst);
    }

    stickBorder(target, isFirst) {
        if (!target) {
            return;
        }

        let {clientWidth, offsetLeft} = target;

        if (this.props.type === 'txtline') {
            let el = query(`.${this.props.prefixCls}-tabs-tab-txt`, target);
            clientWidth = el.clientWidth;
            offsetLeft += (target.clientWidth - clientWidth) / 2 || 0;
        }

        setStyle(this.line, 'display', 'block');
        setStyle(this.line, 'width', clientWidth + 'px');
        setStyle(this.line, 'left', `${offsetLeft}px`);

        // 在第一次渲染后才加上底边滑动动效类，不然一开始滑到相应tab下会不好看
        if (isFirst) {
            this.setState({
                hasAnimate: this.props.hasAnimate
            });
        }
    }

    onTabClick(e, index) {

        if (index === this.state.selectedIndex) {
            return;
        }

        let onChange = this.props.onChange;

        this.setState({selectedIndex: index}, () => {
            onChange && onChange({
                type: 'change',
                selectedIndex: index,
                target: this
            });
        });
    }

    onMouseOver(e) {
        if (!this.props.hoverAnimate) {
            return;
        }

        let el = closest(e.target, `.${this.props.prefixCls}-tabs-tab`, this.main);
        if (el) {
            this.stickBorder(el);
        }

    }

    onMouseLeave(e) {
        if (!this.props.hoverAnimate) {
            return;
        }
        let el = closest(e.target, `.${this.props.prefixCls}-tabs-tab`, this.main);
        if (el) {
            this.doStick();
        }
    }

    render({prefixCls, className, children, type}) {

        let selectedIndex = this.state.selectedIndex;

        let tabs = children.map((tab, index) => {

            let selected = selectedIndex === index;

            return cloneElement(
                tab,
                {
                    key: index,
                    selected: selected,
                    index: index,
                    onClick: this.onTabClick,
                    onMouseOver: this.onMouseOver,
                    onMouseLeave: this.onMouseLeave
                }
            );
        });

        const cls = classNames({
            [`${prefixCls}-tabs`]: true,
            [`${prefixCls}-tabs-blockline`]: type === 'blockline',
            [`${prefixCls}-tabs-txtline`]: type === 'txtline',
            [className]: className
        });

        const inkBarCls = classNames({
            [`${prefixCls}-tabs-ink-bar`]: true,
            [`${prefixCls}-tabs-ink-bar-animated`]: this.state.hasAnimate
        });

        return (
            <div className={cls} ref={node => this.main = node}>
                <div className={`${prefixCls}-tabs-bar`}>
                    <div className={`${prefixCls}-tabs-nav-container`}>
                        <div className={`${prefixCls}-tabs-nav-wrap`}>
                            <div className={`${prefixCls}-tabs-nav-scroll`}>
                                <div className={`${prefixCls}-tabs-nav`} ref={node => this.nav = node}>
                                    <div
                                        className={inkBarCls}
                                        ref={node => this.line = node}
                                    ></div>
                                    {tabs}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
