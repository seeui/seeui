/**
 * @file classnames
 * https://github.com/JedWatson/classnames
 * @author cgzero(cgzero@cgzero.com)
 * @time 2017-08-09
 */

let hasOwn = {}.hasOwnProperty;

export default function classnames(...args) {
    let classes = [];

    for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        if (!arg) {
            continue;
        }

        let argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        }
        else if (arg instanceof Array && arg.length) {
            let inner = classnames.apply(null, arg);
            if (inner) {
                classes.push(inner);
            }
        }
        else if (argType === 'object') {
            for (let key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }

    return classes.join(' ');
}

//# sourceMappingURL=classnames.js.map
