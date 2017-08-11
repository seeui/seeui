/**
 * @file Pager demo
 * @author zhaiwanli
 * @data 2017-07-12
 */

import {h, Component, render} from 'preact';
import {Pager} from '../index';

export default class PagerDemo extends Component {
    render() {
        return (
            <div>
                <Pager
                    total={10}
                    page={1}
                />
                <br />
                <Pager
                    total={20}
                    page={5}
                    useLang={true}
                />
            </div>
        );
    }
}

//# sourceMappingURL=PagerDemo.js.map
