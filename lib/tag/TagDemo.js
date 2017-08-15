/**
 * @file Tag demo
 * @author zhaiwanli
 * @data 2017-07-27
 */

import {h, Component} from 'preact';
import {Tag} from '../index';
import {map} from '../util/lang';
import SingleAlert from '../dialog/SingleAlert';

export default class TagDemo extends Component {
    state = {
        showAlert: false,
        alertMsg: '',
        tags: [
            {
                name: 'PS4',
                hasClose: true
            },
            {
                name: '3DS'
            },
            {
                name: 'Switch',
                isChecked: true
            },
            {
                name: 'XBOX360'
            }
        ]
    }

    handleClose(index) {
        let newTags = this.state.tags;

        SingleAlert.show({
            show: true,
            children: '确定删除么？',
            onConfirm: () => {
                newTags.splice(index, 1);
                this.setState({
                    tags: newTags
                });
                SingleAlert.hide();
            }
        });
    }

    handleClick(index) {
        let newTags = this.state.tags;
        newTags[index].isChecked = !newTags[index].isChecked;

        this.setState({
            tags: newTags
        });

        SingleAlert.show({
            show: true,
            children: `你点击了第${index + 1}个标签`,
            onConfirm() {
                SingleAlert.hide();
            }
        });
    }

    render() {
        return (
            <div>
                {
                    map(this.state.tags, ({name, hasClose, isChecked}, index) => (
                        <Tag
                            hasClose={hasClose}
                            onClose={() => this.handleClose(index)}
                            isChecked={isChecked}
                            onClick={() => this.handleClick(index)}
                        >
                            {name}
                        </Tag>
                    ))
                }
            </div>
        );
    }
}

//# sourceMappingURL=TagDemo.js.map
