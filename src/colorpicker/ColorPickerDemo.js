/**
 * @file ColorPickerDemo
 * @author wuqi03(wuqi03@baidu.com)
 * @time 17/8/15
 */

import {h, Component} from 'preact';
import classNames from 'classnames';

import ColorPicker from './ColorPicker';

import './ColorPickerDemo.styl';

export default class ColorPickerDemo extends Component {
    render() {
        return (
            <ColorPicker value="#606060" />
        );
    }
}
