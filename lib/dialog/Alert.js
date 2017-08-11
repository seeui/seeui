/**
 * @file Alert
 * @author zhaiwanli
 * @time 17/7/15
 */

import {h, Component} from 'preact';
import classNames from '../util/classnames';

import Dialog from './Dialog';

export default class Alert extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    onAlertShow() {
        this.props.onShow && this.props.onShow();
    }

    onAlertHide(data) {
        if (data && (data.type === 'closeClick' || data.type === 'maskClick')) {
            this.props.onHide && this.props.onHide();
        }
    }

    componentWillReceiveProps(nextProps) {
        const {remain, show} = nextProps;

        this.setState({
            show: show
        });
    }

    render() {
        const {msg, children, title, onHide, onConfirm} = this.props;

        let dialogButtons = [{
            type: 'primary',
            value: '确定',
            size: 'large',
            onClick: () => {
                this.props.onHide && this.props.onHide();
                this.props.onConfirm && this.props.onConfirm();
            }
        }];

        return (
            <Dialog
                title={title}
                hasClose={true}
                show={this.state.show}
                buttons={dialogButtons}
                onShow={this.onAlertShow.bind(this)}
                onHide={this.onAlertHide.bind(this)}
                maskClickClose={true}
            >
                {children}
            </Dialog>
        );
    }
}

//# sourceMappingURL=Alert.js.map
