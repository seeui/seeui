/**
 * @file Button demo
 * @author zhaiwanli
 * @data 2017-07-15
 */

import {h, Component} from 'preact';
import {Button, Toast, Alert, Confirm} from '../index';

export default class DialogDemo extends Component {
    state = {
        showToast: false,
        showAlert: false,
        showConfirm: false
    };

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

    onShowToast() {
        console.log('show toast')
    }

    onShowAlert() {
        console.log('show alert')
    }

    onShowConfirm() {
        console.log('show confirm')
    }

    onHideToast() {
        this.setState({
            showToast: false
        });
        console.log('hide toast')
    }

    onHideAlert() {
        this.setState({
            showAlert: false
        });
        console.log('hide alert')
    }

    onHideConfirm() {
        this.setState({
            showConfirm: false
        });
        console.log('hide confirm')
    }

    onAlertConfirm() {
        console.log('alert确定');
    }

    onConfirmConfirm() {
        console.log('confirm确定')
    }

    onConfirmCancel() {
        console.log('confirm取消')
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
                    onConfirm={this.onAlertConfirm}
                >
                    {this.state.alertMsg}
                </Alert>
                <Confirm
                    show={this.state.showConfirm}
                    title="Alert"
                    onShow={this.onShowConfirm}
                    onHide={this.onHideConfirm.bind(this)}
                    onConfirm={this.onConfirmConfirm}
                    onCancel={this.onConfirmCancel}
                >
                    {this.state.confirmMsg}
                </Confirm>
            </div>
        );
    }
}
