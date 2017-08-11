/**
 * @file RateDemo
 * @author wuqi03(441984145@qq.com)
 * @time 17/7/13
 */

import {h, Component} from 'preact';
import {Rate, Icon} from '../index';


export default class RateDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rate1: 0,
            rate2: 5,
            rate3: 2
        };
    }

    render() {
        const {rate1, rate2, rate3, rate4} = this.state;

        let rateContent = <Icon type="round-check-fill" />;

        return (
            <div className="rate-demo">
                <p>
                    默认评分：
                    <Rate
                        num={rate1}
                        onRateSelect={(num) => this.setState({rate1: num})}
                    />
                </p>
                <p>
                    可控评分个数：
                    <Rate
                        num={rate2}
                        count="8"
                        onRateSelect={(num) => this.setState({rate2: num})}
                    />
                </p>
                <p>
                    可控评分样式：
                    <Rate
                        className="rate-demo"
                        num={rate3}
                        rateContent={rateContent}
                        onRateSelect={(num) => this.setState({rate3: num})}
                    />
                </p>
                <p>
                    禁用评分：
                    <Rate
                        className="rate-demo"
                        num="2"
                        disabled={true}
                        onRateSelect={(num) => this.setState({rate1: num})}
                    />
                </p>
            </div>
        );
    }
}

//# sourceMappingURL=RateDemo.js.map
