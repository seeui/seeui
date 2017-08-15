/**
 * @file Pager
 * @author zhaiwanli
 */

import {h, Component} from 'preact';
import Icon from '../icon/Icon';
import classNames from '../util/classnames';


/**
 * Pager
 *
 * @extends {preact.Component}
 * @class
 */
export default class Pager extends Component {

    static defaultProps = {
        prefixCls: 'cui',
        // 当前页，第一页从0开始
        page: 1,

        // 起始页码
        first: 1,

        // 首尾显示的页码个数
        padding: 1,

        // 是否一直显示分页控件
        showAlways: false,

        // 当页数较多时，中间显示页码的个数
        showCount: 5,

        // 总页数
        total: 0,

        // 是否可用
        disabled: false,

        // 是否使用文字
        useLang: false,

        // 上下页显示文字
        lang: {

            // 上一页显示文字
            prev: '上一页',

            // 下一页显示文字
            next: '下一页',

            // 省略号
            ellipsis: '..'
        }
    };

    /**
     * 构造函数
     *
     * @public
     * @constructor
     * @param {*} props 属性
     */
    constructor(props) {

        super(props);

        const page = props.page;

        /**
         * 状态
         *
         * @protected
         * @type {Object}
         */
        this.state = {page};

        this.onMainClick = this.onMainClick.bind(this);

    }

    /**
     * 接受新属性时的处理
     *
     * @public
     * @override
     * @param {*} nextProps 新属性
     */
    componentWillReceiveProps(nextProps) {

        let {page, total} = nextProps;

        if (page < 0) {
            page = 0;
        }
        else if (page > total) {
            page = total - 1;
        }

        if (page !== this.state.page) {
            this.setState({page});
        }
    }

    /**
     * 生成一个页码数组, 如果需要ellipsis, 那么ellpsis用负数表示它;
     * 即ellipsis在5号位置, 那么他就是-5
     * 输入: start 0, stop 10, paddingLeft 3 paddingRight 3
     * 输出: 0, 1, 2, -3, 8, 9, 10
     *
     * @private
     * @param  {number} start        起始页码
     * @param  {number} stop         结束页面(不包含)
     * @param  {number} paddingLeft  起始页码之后, 应展开的页码个数
     * @param  {number} paddingRight 结束页面之前, 应展开的页码个数
     * @return {Array<number>}        [start, paddingLeft, .., paddingRight, stop]
     */
    range(start, stop, paddingLeft, paddingRight) {
        return start + paddingLeft < stop - paddingRight
            ? [
                ...this.rangeArray(start, start + paddingLeft),
                -start - paddingLeft,
                ...this.rangeArray(stop - paddingRight, stop)
            ]
            : this.rangeArray(start, stop);
    }

    rangeArray(start, stop, step = 1) {
        /* eslint-disable prefer-rest-params */
        if (arguments.length <= 1) {
            stop = start || 0;
            start = 0;
        }

        step = step || 1;

        const length = Math.max(Math.ceil((stop - start) / step), 0);
        const range = Array(length);

        for (let idx = 0; idx < length; idx++, start += step) {
            range[idx] = start;
        }

        return range;
    }

    /**
     * 渲染页码
     *
     * @protected
     * @param {Object} conf 页码的属性
     * @return {ReactElement}
     */
    renderItem(conf) {

        const {page, part, states} = conf;
        const {prefixCls, lang, useLang} = this.props;

        let pageText;

        if (!useLang && part && part !== 'ellipsis') {
            pageText = (part === 'prev' ? <Icon type="back" /> : <Icon type="right" />);
        }
        else {
            pageText = lang[part] || page + 1;
        }

        return (
            <li
                className={classNames({
                    [`${prefixCls}-pager-item`]: true,
                    'state-prev': states.prev,
                    'state-disabled': states.disabled,
                    'state-current': states.current,
                    'state-next': states.next,
                    'state-ellipsis': states.ellipsis
                })}
                key={part + page}
                data-role="pager-item"
                data-page={page}>
                {pageText}
            </li>
        );
    }

    /**
     * 鼠标点击时的处理
     *
     * @protected
     * @param  {Object} e 事件对象
     */
    onMainClick(e) {

        e.preventDefault();

        const target = e.target;

        const tar = target.getAttribute('data-role')
            ? target
            : target.parentNode.getAttribute('data-role')
                ? target.parentNode
                : '';

        if (!tar) {
            return;
        }

        const {first, onChange} = this.props;

        const page = +tar.getAttribute('data-page') + first;

        if (this.state.page === page) {
            return;
        }

        this.setState({page});

        // 被控制的
        if (onChange) {
            onChange({
                target: this,
                page: page
            });
            return;
        }
    }

    /**
     * 渲染
     *
     * @public
     * @return {ReactElement}
     */

    render() {
        const {prefixCls, total, first, padding, showCount, showAlways, className, ...others} = this.props;
        let page = this.state.page;
        let showCountNew = showCount > total ? total : showCount;

        page = page - first;

        if (!showAlways && total <= 1) {
            return (
                <ul className="c-pager" />
            );
        }

        const wing = Math.floor(showCountNew / 2);

        const paddingLeft = padding;
        const paddingRight = padding;
        const reduceLeftToRight = page - wing;

        let wingLeft = wing;
        let wingRight = wing;

        // 如果wingLeft小于0, 那么把小于0的部分移动到wingRight
        if (reduceLeftToRight < 0) {
            wingLeft += reduceLeftToRight;
            wingRight -= reduceLeftToRight;
        }

        const reduceRightToLeft = page + wing + 1 - total;

        // 如果wingRight大于total, 那么把超长的部分移动到wingLeft
        if (reduceRightToLeft > 0) {
            wingLeft += reduceRightToLeft;
            wingRight -= reduceRightToLeft;
        }

        // 生成左半端页码
        const left = this.range(0, page, paddingLeft, wingLeft);
        // 生成右半端页码
        const right = this.range(page + 1, total, wingRight, paddingRight);
        // 全部页码
        const full = [
            {
                page: Math.max(page - 1, 0),
                states: {
                    prev: true,
                    disabled: page === 0
                },
                part: 'prev'
            },
            ...left,
            {
                page: page,
                states: {
                    current: true
                },
                part: ''
            },
            ...right,
            {
                page: Math.min(page + 1, total - 1),
                states: {
                    next: true,
                    disabled: page >= total - 1
                },
                part: 'next'
            }
        ];

        const result = full.map(conf => {

            if (typeof conf === 'number') {
                const part = conf >= 0 ? '' : 'ellipsis';
                conf = {
                    page: Math.abs(conf),
                    states: {
                        ellipsis: !!part
                    },
                    part
                };
            }

            return this.renderItem(conf);

        });

        let cls = classNames({
            [`${prefixCls}-pager`]: true,
            [className]: className
        });

        return (
            <ul className={cls} onClick={this.onMainClick} {...others}>
                {result}
            </ul>
        );
    }
}

//# sourceMappingURL=Pager.js.map
