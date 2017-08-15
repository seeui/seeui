/**
 * @file Button demo
 * @author zhaiwanli
 * @data 2017-07-15
 */

/* eslint-disable no-console */
import {h, Component} from 'preact';
import Button from '../button/Button';
import Toast from './Toast';
import Alert from './Alert';
import Confirm from './Confirm';
import SingleToast from './SingleToast';
import SingleDialog from './SingleDialog';
import SingleConfirm from './SingleConfirm';
import SingleAlert from './SingleAlert';

export default class DialogDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showToast: false,
            showAlert: false,
            showConfirm: false
        };
    }

    showToast(remain, msg) {
        this.setState({
            toastMsg: msg,
            showToast: true,
            remain: remain
        });
    }

    showAlert(msg) {
        this.setState({
            alertMsg: msg,
            showAlert: true
        });
    }

    showConfirm(msg) {
        this.setState({
            confirmMsg: msg,
            showConfirm: true
        });
    }

    showSingleToast(content) {
        SingleToast.show({
            show: true,
            title: content,
            children: content,
            onHide() {
                console.log('SingleToast 关闭');
                SingleToast.hide();
            }
        });
    }

    showSingleDialog(content) {
        SingleDialog.show({
            show: true,
            title: '我是SingleDialog',
            children: content,
            onHide() {
                SingleDialog.hide();
            }
        });
    }

    showSingleAlert(content) {
        SingleAlert.show({
            show: true,
            title: content,
            children: content,
            button: {
                value: 'singleAlert 确定'
            },
            onConfirm() {
                console.log('singleAlert 确定');
                SingleAlert.hide();
            }
        });
    }

    showSingleConfirm(content) {
        SingleConfirm.show({
            show: true,
            title: content,
            content: content,
            buttons: [{
                role: 'cancel',
                value: 'singleConfirm 取消'
            }, {
                role: 'confirm',
                value: 'singleConfirm 确定'
            }],
            onConfirm() {
                console.log('singleConfirm 确定');
                SingleConfirm.hide();
            },
            onCancel() {
                console.log('singleConfirm 取消');
                SingleConfirm.hide();
            }
        });
    }

    onShowToast() {
        console.log('show toast');
    }

    onShowAlert() {
        console.log('show alert');
    }

    onShowConfirm() {
        console.log('show confirm');
    }

    onHideToast() {
        this.setState({
            showToast: false
        });
        console.log('hide toast');
    }

    onHideAlert() {
        this.setState({
            showAlert: false
        });
        console.log('hide alert');
    }

    onHideConfirm() {
        this.setState({
            showConfirm: false
        });
        console.log('hide confirm');
    }

    onAlertConfirm() {
        this.setState({
            showAlert: false
        });
        console.log('alert确定');
    }

    onConfirmSubmit() {
        this.setState({
            showConfirm: false
        });
        console.log('confirm确定');
    }

    onConfirmCancel() {
        this.setState({
            showConfirm: false
        });
        console.log('confirm取消');
    }

    render() {
        return (
            <div className="dialog-demo">
                <Button
                    onClick={() => this.showToast(3, '3s后消失')}
                >
                    显示3秒Toast
                </Button>
                &nbsp;&nbsp;
                <Button
                    onClick={() => this.showAlert('显示Alert')}
                >
                    显示Alert
                </Button>
                &nbsp;&nbsp;
                <Button
                    onClick={() => this.showConfirm('显示Confirm')}
                >
                    显示Confirm
                </Button>
                &nbsp;&nbsp;
                <Button
                    onClick={() => this.showSingleToast('显示SingleToast')}
                >
                    SingleToast
                </Button>
                &nbsp;&nbsp;
                <Button
                    onClick={() => this.showSingleDialog('我是SingleDialog')}
                >
                    SingleDialog
                </Button>
                &nbsp;&nbsp;
                <Button
                    onClick={() => this.showSingleAlert('我是SingleAlert')}
                >
                    SingleAlert
                </Button>
                &nbsp;&nbsp;
                <Button
                    onClick={() => this.showSingleConfirm('我是SingleConfirm')}
                >
                    SingleConfirm
                </Button>
                <Toast
                    show={this.state.showToast}
                    remain={this.state.remain}
                    title="Toast"
                    onShow={this.onShowToast}
                    onHide={this.onHideToast.bind(this)}
                >
                    {this.state.toastMsg}
                </Toast>
                <Alert
                    show={this.state.showAlert}
                    title="Alert"
                    onShow={this.onShowAlert}
                    onHide={this.onHideAlert.bind(this)}
                    onConfirm={this.onAlertConfirm.bind(this)}
                >
                    {this.state.alertMsg}
                </Alert>
                <Confirm
                    show={this.state.showConfirm}
                    title="Confirm"
                    onShow={this.onShowConfirm}
                    onHide={this.onHideConfirm.bind(this)}
                    onConfirm={this.onConfirmSubmit.bind(this)}
                    onCancel={this.onConfirmCancel.bind(this)}
                >
                    {this.state.confirmMsg}
                </Confirm>
            </div>
        );
    }
}

//# sourceMappingURL=DialogDemo.js.map
