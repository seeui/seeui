/**
 * @file preactCompat   摘抄自preact-compat
 * https://github.com/developit/preact-compat
 * @author wuqi03(wuqi03@baidu.com)
 * @time 2017-08-08
 */

import {h, render as preactRender} from 'preact';

/**
 * 空组件
 *
 * @class
 * @return {Object} 返回空
 */
function EmptyComponent() {
    return null;
}

// proxy render() since React returns a Component reference.
export function render(vnode, parent, callback) {
    let prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

    // ignore impossible previous renders
    if (prev && prev.parentNode !== parent) {
        prev = null;
    }

    // default to first Element child
    if (!prev) {
        prev = parent.children[0];
    }

    // remove unaffected siblings
    for (let i = parent.childNodes.length; i--;) {
        if (parent.childNodes[i] !== prev) {
            parent.removeChild(parent.childNodes[i]);
        }
    }

    let out = preactRender(vnode, parent, prev);

    if (parent) {
        parent._preactCompatRendered = out && (out._component || {base: out});
    }

    if (typeof callback === 'function') {
        callback();
    }

    return out && out._component || out;
}

export function unmountComponentAtNode(container) {
    let existing = container._preactCompatRendered && container._preactCompatRendered.base;
    if (existing && existing.parentNode === container) {
        preactRender(h(EmptyComponent), container, existing);
        return true;
    }
    return false;
}


