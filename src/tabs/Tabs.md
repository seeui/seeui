# Tabs API

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
type | tab类型，可选值为 `blockline` `txtline` | string | blockline
selectedIndex | 当前选中的tab的索引| number | 0
onChange | `click tab` 事件的 handler | Function | -
hasAnimate | 切换tab时底边是否有滑动动画 | boolean | `true`
hoverAnimate | hover tab时是否有底部line跟随，为`true`时，建议hasAnimate也设置为`true` | boolean | `false`
className | 额外类名 | string | -

# Tab

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
label | tab标题 | string | -
disabled | tab可用状态 | boolean | `false`
