/**
 * @file Button demo
 * @author cgzero(cgzero@cgzero.com)
 * @data 2017-07-05
 */

import {h, Component} from 'preact';
import {Tabs, Tab} from '../index';


export default class TabsDemo extends Component {

    render() {
        return (
            <div className="tabs-demo">
                <h3>默认</h3>
                <Tabs
                    selectedIndex={this.state.index1}
                    onChange={tab => {
                        this.setState({
                            index1: tab.selectedIndex
                        });
                    }}
                >
                    <Tab label="评价"/>
                    <Tab label="投诉"/>
                    <Tab label="新闻"/>
                </Tabs>
                <Tabs
                    type="txtline"
                    selectedIndex={this.state.index2}
                    onChange={tab => {
                        this.setState({
                            index2: tab.selectedIndex
                        });
                    }}
                >
                    <Tab label="评价"/>
                    <Tab label="投诉"/>
                    <Tab label="新闻"/>
                </Tabs>
                <br />
                <h3>选中指定tab & 禁用选中动画</h3>
                <Tabs
                    selectedIndex={this.state.index3 !== undefined ? this.state.index3 : 1}
                    onChange={tab => {
                        this.setState({
                            index3: tab.selectedIndex
                        });
                    }}
                    hasAnimate={false}
                >
                    <Tab label="评价"/>
                    <Tab label="投诉"/>
                    <Tab label="新闻"/>
                </Tabs>
                <br />
                <h3>hover动画</h3>
                <Tabs
                    selectedIndex={this.state.index4}
                    onChange={tab => {
                        this.setState({
                            index4: tab.selectedIndex
                        });
                    }}
                    hoverAnimate={true}
                >
                    <Tab label="评价"/>
                    <Tab label="投诉"/>
                    <Tab label="新闻"/>
                </Tabs>
            </div>
        );
    }
}

//# sourceMappingURL=TabsDemo.js.map
