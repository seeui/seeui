/**
 * @file Toast
 * @author zhaiwanli
 * @time 17/7/15
 */

import {h, Component} from 'preact';
import classNames from '../util/classnames';
import Dialog from './Dialog';

import Singleton from '../util/Singleton';

export default class Toast extends Component {

    static defaultProps = {
        remain: 3,
        hasClose: false
    };

    constructor(props) {
        super(props);

        this.state = {
            remain: props.remain
        };
    }

    countDown() {
        let self = this;

        this.counter = setInterval(function () {
            if (self.state.remain === 1) {
                this.counter && clearInterval(this.counter);
                this.counter = null;

                self.setState({remain: self.props.remain + 1});
                self.props.onHide && self.props.onHide();
            }

            self.setState({remain: --self.state.remain});
        }, 1000);
    }

    onToastShow() {
        this.countDown();

        this.props.onShow && this.props.onShow();
    }

    onToastHide(data) {
        this.counter && clearInterval(this.counter);
        this.counter = null;

        this.props.onHide && this.props.onHide(data);
    }


    componentWillReceiveProps(nextProps) {
        const {remain} = nextProps;

        this.setState({
            remain: remain || this.state.remain
        });
    }

    render() {
        const {children, title, ...others} = this.props;

        return (
            <Dialog
                {...others}
                title={title}
                onShow={this.onToastShow.bind(this)}
                onHide={this.onToastHide.bind(this)}
            >
                {children}
                <div className="cui-dialog-count-down">{this.state.remain}s</div>
            </Dialog>
        );
    }
}

export const SingleToast = new Singleton(Toast);

//# sourceMappingURL=Toast.js.map
