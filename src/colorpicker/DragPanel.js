/**
 * @file DragPanel
 * @author wuqi03(wuqi03@baidu.com)
 * @time 17/8/14
 */

import {h, Component} from 'preact';
import classNames from 'classnames';

import './DragPanel.styl';

export default class DragPanel extends Component {
    static defaultProps = {
        prefixCls: 'cui'
    };

    mouseDownHandler() {
        document.body.style.userSelect = 'none';
        this.position = this.main.getBoundingClientRect();
        window.addEventListener('mouseup', this.mouseUpHandler.bind(this));
        window.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
    }

    mouseMoveHandler(e) {
        this.positionChange(e);
    }

    mouseUpHandler(e) {
        document.body.style.userSelect = '';
        this.positionChange(e);
        window.removeEventListener('mouseup', this.mouseUpHandler.bind(this));
        window.removeEventListener('mousemove', this.mouseMoveHandler.bind(this));
    }

    positionChange(e) {
        let {pageX, pageY} = e;
        let {left, top, width, height} = this.position;

        let x = pageX - left;
        let y = pageY - top;

        if (x < 0) {
            x = 0;
        }
        else if (x > width) {
            x = width;
        }

        if (y < 0) {
            y = 0;
        }
        else if (y > height) {
            y = height;
        }

        this.props.onPositionChange
            && this.props.onPositionChange({
                x: x / width,
                y: y / height
            });
    }

    clickHandler(e) {
        this.position = this.main.getBoundingClientRect();
        this.positionChange(e);
    }

    render() {
        const {prefixCls, className, children, ...others} = this.props;

        let cls = classNames({
            [`${prefixCls}-drag-panel`]: true,
            [className]: className
        });

        return (
            <div
                {...others}
                className={cls}
                ref={dom => this.main = dom}
                onMouseDown={this.mouseDownHandler.bind(this)}
                onClick={this.clickHandler.bind(this)}
            >
                {children}
            </div>
        )
    }
}
