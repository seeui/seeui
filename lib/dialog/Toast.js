/**
 * @file Toast
 * @author zhaiwanli
 * @time 17/7/15
 */

import {h, Component} from 'preact';
import classNames from '../util/classnames';
import Dialog from './Dialog';

export default class Toast extends Component {

    constructor(props) {
        super(props);

        this.state = {
            remain: props.remain,
            show: false
        };
    }

    countDown() {
        let self = this;

        let counter = setInterval(function () {
            if (self.state.remain === 1) {
                clearInterval(counter);

                self.setState({show: false, remain: self.props.remain + 1});
            }

            self.setState({remain: --self.state.remain});
        }, 1000);
    }

    onToastShow() {
        this.countDown();

        this.props.onShow && this.props.onShow();
    }

    onToastHide() {
        this.props.onHide && this.props.onHide();
    }

    componentWillReceiveProps(nextProps) {
        const {remain, show} = nextProps;

        this.setState({
            remain: remain || this.state.remain,
            show: show
        });
    }

    render() {
        const {msg, children, title} = this.props;

        return (
            <Dialog
                title={title}
                hasClose={false}
                show={this.state.show}
                onShow={this.onToastShow.bind(this)}
                onHide={this.onToastHide.bind(this)}
            >
                {children}
                <div className="cui-dialog-count-down">{this.state.remain}s</div>
            </Dialog>
        );
    }
}

//# sourceMappingURL=Toast.js.map
