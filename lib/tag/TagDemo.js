/**
 * @file Tag demo
 * @author zhaiwanli
 * @data 2017-07-27
 */

import {h, Component, render} from 'preact';
import {Tag} from '../index';
import {Alert} from '../index';

export default class TagDemo extends Component {
    state = {
        showAlert: false,
        alertMsg: ''
    }

    closeHandler() {
        this.setState({
            showAlert: true,
            alertMsg: '关掉了标签'
        });
    }

    onHideAlert() {
        this.setState({
            showAlert: false
        });
    }

    render() {
        return (
            <div>
                <Tag>Tag1</Tag>
                <Tag closable>Tag2</Tag>
                <Tag color="#38f">自定义背景色</Tag>
                <Tag closable onClose={this.closeHandler.bind(this)}>带有关闭标签handler</Tag>
                <Alert
                    show={this.state.showAlert}
                    onHide={this.onHideAlert.bind(this)}
                >
                    {this.state.alertMsg}
                </Alert>
            </div>
        );
    }
}

//# sourceMappingURL=TagDemo.js.map
