import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    componentData: [], //用于存放画布中的组件
    canvasStyleData: {
      // 画布页面数据
      width: 1200,
      height: 740,
      scale: 100,
    },
  },
  mutations: {
    setComponentData(state, componentData = []) {
      Vue.set(state, 'componentData', componentData)
    },
    addComponent(state, { component, index }) {
      if (index !== undefined) {
        state.componentData.splice(index, 0, component)
      } else {
        state.componentData.push(component)
      }
    },
  },
  actions: {},
  modules: {},
})
