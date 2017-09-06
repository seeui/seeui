# Pager API

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
page | 当前页码 | number | 1
first | 起始页码 | number | 1
padding | 首尾显示的页码个数 | number | 1
showAlways | 是否一直显示分页控件 | boolean | `false`
showCount | 当页数较多时，中间显示页码的个数 | number | 5
total | 总页数 | number | -
disabled | 是否可用 | boolean | `false`
useLang | 是否使用文字（上一页、下一页） | boolean | `false`
lang | 文字配置 | Object | -
lang.prev | 上一页 | string | 上一页
lang.next | 下一页 | string | 下一页
lang.ellipsis | 省略 | string | ..
onChange | 点击事件 | Function | -
className | 额外类名 | string | -
