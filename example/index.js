/**
 * @file index page
 * @author liulangyu(liulangyu@baidu.com)
 * @date 2017-05-23
 */

// import 'babel-polyfill';

import {h, Component, render} from 'preact';

import ButtonDemo from '../src/button/ButtonDemo';
import ButtonMd from '../src/button/Button.md';

import PagerDemo from '../src/Pager/PagerDemo';
import PagerMd from '../src/Pager/Pager.md';

import TabsDemo from '../src/Tabs/TabsDemo';
import TabsMd from '../src/Tabs/Tabs.md';

import IconDemo from '../src/icon/IconDemo';
import IconMd from '../src/icon/Icon.md';

import InputDemo from '../src/input/InputDemo';
import InputMd from '../src/input/Input.md';

import RateDemo from '../src/rate/RateDemo';
import RateMd from '../src/rate/Rate.md';

import DialogDemo from '../src/dialog/DialogDemo';
import DialogMd from '../src/dialog/Dialog.md';

import TagDemo from '../src/tag/TagDemo';
import TagMd from '../src/tag/Tag.md';

import './index.styl';
import logo from './logo.png';
import {hasClass, addClass, removeClass} from '../src/util/dom';

class Panel extends Component {
    render() {
        return (
            <div className="panel">{this.props.children}</div>
        );
    }
}

class MdContainer extends Component {
    render() {
        return (
            <div className="md-container" dangerouslySetInnerHTML={{__html: this.props.children}}></div>
        );
    }
}

export default class Index extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler.bind(this));
    }

    scrollHandler() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let target = document.getElementById('nav');

        if (scrollTop > 70 && !hasClass(target, 'fixed')) {
            addClass(target, 'fixed');
        }
        if (scrollTop <= 70 && hasClass(target, 'fixed')) {
            removeClass(target, 'fixed');
        }
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1><img src={logo} className="logo" />SeeUI</h1>
                </header>
                <section className="content">
                    <nav id="nav" className="nav">
                        <ul>
                            <li><a href="#button">Button 按钮</a></li>
                            <li><a href="#dialog">Dialog 浮层</a></li>
                            <li><a href="#pager">Pager 翻页</a></li>
                            <li><a href="#tabs">Tabs 标签</a></li>
                            <li><a href="#icon">Icon 图标</a></li>
                            <li><a href="#input">Input 输入框</a></li>
                            <li><a href="#rate">Rate 打分</a></li>
                            <li><a href="#tag">Tag 标签</a></li>
                        </ul>
                    </nav>
                    <div className="panel-wrap">
                        <Panel>
                            <h2 className="panel-header" id="button">Button 按钮</h2>
                            <ButtonDemo />
                            <MdContainer>{ButtonMd}</MdContainer>
                        </Panel>
                        <Panel>
                            <h2 className="panel-header" id="dialog">Dialog 浮层</h2>
                            <DialogDemo />
                            <MdContainer>{DialogMd}</MdContainer>
                        </Panel>
                        <Panel>
                            <h2 className="panel-header" id="pager">Pager 翻页</h2>
                            <PagerDemo />
                            <MdContainer>{PagerMd}</MdContainer>
                        </Panel>
                        <Panel>
                            <h2 className="panel-header" id="tabs">Tabs 标签</h2>
                            <TabsDemo />
                            <MdContainer>{TabsMd}</MdContainer>
                        </Panel>
                        <Panel>
                            <h2 className="panel-header" id="icon">Icon 图标</h2>
                            <IconDemo />
                            <MdContainer>{IconMd}</MdContainer>
                        </Panel>
                        <Panel>
                            <h2 className="panel-header" id="input">Input 输入框</h2>
                            <InputDemo />
                            <MdContainer>{InputMd}</MdContainer>
                        </Panel>
                        <Panel>
                            <h2 className="panel-header" id="rate">Rate 打分</h2>
                            <RateDemo />
                            <MdContainer>{RateMd}</MdContainer>
                        </Panel>
                        <Panel>
                            <h2 className="panel-header" id="tag">Tag 标签</h2>
                            <TagDemo />
                            <MdContainer>{TagMd}</MdContainer>
                        </Panel>
                    </div>
                </section>
            </div>
        );
    }
}

render(
    <Index />,
    document.getElementById('app')
);
