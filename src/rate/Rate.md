# Rate API

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
count | star 总数 | number | 5
num | 当前数，受控值 | number | 0
hasHover | 是否有hover特效 | boolean | `true`
size | icon大小 | number/string | 16
disabled | 只读，无法进行交互 | boolean | `false`
onRateSelect | 选择时的回调 | Function(num: number) | -
onRateOver | 鼠标hover回调 | Function(num: number) | -
onRateLeave | 鼠标移出回调 | Function | -
className | 额外类名 | string | -