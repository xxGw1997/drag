//公共样式
export const commonStyle = {
  rotate: 0,
  opacity: 1,
}

//公共属性
export const commonAttr = {
  animation: [],
  events: {},
  groupStyle: {}, //Group子组件
  isLock: false, //是否锁定状态
}

//左侧编辑器可选组件列表
const list = [
  {
    component: 'v-text',
    label: '文字',
    propValue: '双击编辑文字',
    icon: 'wenben',
    style: {
      width: 200,
      height: 22,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
    },
  },
  {
    component: 'v-button',
    label: '按钮',
    propValue: '按钮',
    icon: 'button',
    style: {
      width: 100,
      height: 34,
      borderWidth: '',
      borderColor: '',
      borderRadius: '',
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
      backgroundColor: '',
    },
  },
  {
    component: 'Picture',
    label: '图片',
    icon: 'tupian',
    // propValue: require('@/assets/title.jpg'),
    style: {
      width: 300,
      height: 200,
      borderRadius: '',
    },
  },
  {
    component: 'rect-shape',
    label: '矩形',
    propValue: '&nbsp;',
    icon: 'juxing',
    style: {
      width: 200,
      height: 200,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: 'center',
      color: '',
      borderColor: '#000',
      borderWidth: 1,
      backgroundColor: '',
      borderStyle: 'solid',
      verticalAlign: 'middle',
    },
  },
]

for(let i = 0;i<list.length;i++){
  const item = list[i]
  item.style = {...commonStyle,...item.style}
  list[i] = {...commonAttr,...item}
}
console.log(list)

export default list
