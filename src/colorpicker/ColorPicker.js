/**
 * @file ColorPicker
 * @author wuqi03(wuqi03@baidu.com)
 * @time 17/8/15
 */

import {h, Component} from 'preact';
import classNames from 'classnames';
import kolor from 'kolor';
import DragPanel from './DragPanel';

import {closest} from '../util/dom';

import './ColorPicker.styl';

const DEFAULT_COLOR = '#ff0000';

export default class ColorPicker extends Component {
    static defaultProps = {
        prefixCls: 'cui',
        value: ''
    };

    constructor(props) {
        super(props);

        const {value, prefixCls} = props;

        let k = kolor(value);

        if (!k) {
            k = kolor(DEFAULT_COLOR);
        }

        let [h, s, v, a] = k.hsva().toArray();
        let [r, g, b] = k.rgb().toArray();

        this.state = {
            // hua
            h,
            // saturation
            s,
            // value
            v,
            // alpha
            a,
            // 这四个值只是用来缓存输入
            r,
            g,
            b,
            hex: k.hex(),
            // 是否显示color-picker浮层
            show: false
        };

        this.hideLayer = this.hideLayer.bind(this);
        this.layerCls = `${prefixCls}-color-picker-layer`;
    }

    /**
     * 渲染浮层
     *
     * @private
     * @return {ReactDom}
     */
    renderLayer() {

        let layerCls = classNames({
            [this.layerCls]: true,
            show: this.state.show
        });

        return (
            <div className={layerCls}>
                lalala
            </div>
        );
    }

    /**
     * 标签点击事件
     *
     * @private
     */
    labelClickHandler() {
        this.setState({show: true});

        window.addEventListener('click', this.hideLayer);
    }

    /**
     * 关闭浮层
     *
     * @private
     * @param {Event} e 事件对象
     */
    hideLayer(e) {
        if (!closest(e.target, '.' + this.layerCls)) {
            window.removeEventListener('click', this.hideLayer);
            this.setState({show: false});
        }
    }

    render() {
        const {prefixCls, className} = this.props;
        const show = this.state.show;

        let cls = classNames({
            [`${prefixCls}-color-picker`]: true,
            [className]: className
        });

        return (
            <div className={cls}>
                <div
                    onClick={this.labelClickHandler.bind(this)}
                    className={`${prefixCls}-color-picker-label`}
                >
                    {value}
                </div>
                {show && this.renderLayer()}
            </div>
        );
    }
}
