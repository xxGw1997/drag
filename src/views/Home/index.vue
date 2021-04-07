<template>
  <div class="home">
    <ToolBar />
    <main>
      <section class="left">
        <ComponentList />
      </section>
      <section class="center">
        <div class="content"
             @drop="handleDrop"
             @dragover="handleDragOver"
             @mousedown="handleMouseDown"
             @mouseup="deselectCurComponent">
          <Editor />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ToolBar from '@/components/ToolBar'
import ComponentList from '@/components/ComponentList'
import componentList from '@/custom-component/component-list' //组件数据列表
import Editor from '@/components/Editor'
import {deepClone} from '@/utils/utils'
import generateID from '@/utils/generateID'
export default {
  computed:{
    ...mapState([
      'curComponent',
      'isClickComponent'
    ])
  },
  methods: {
    handleDrop (e) {
      e.preventDefault()
      e.stopPropagation()
      const component = deepClone(componentList[e.dataTransfer.getData('index')])
      component.style.top = e.offsetY
      component.style.left = e.offsetX
      component.id = generateID()
      this.$store.commit('addComponent',{component})
      // this.$store.commit('recordSnapshot')
    },
    handleDragOver (e) {
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },
    handleMouseDown () {

    },
    deselectCurComponent () {

    }
  },
  components: {
    ToolBar, ComponentList, Editor
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background: #fff;
  main {
    height: calc(100% - 64px);
    position: relative;
    .left {
      position: absolute;
      height: 100%;
      width: 200px;
      left: 0;
      top: 0;
      padding-top: 10px;
    }
    .right {
      position: absolute;
      height: 100%;
      width: 262px;
      right: 0;
      top: 0;
    }

    .center {
      margin-left: 200px;
      margin-right: 262px;
      background: #f5f5f5;
      height: 100%;
      overflow: auto;
      padding: 20px;

      .content {
        width: 100%;
        height: 100%;
        overflow: auto;
      }
    }
  }

  .placeholder {
    text-align: center;
    color: #333;
  }
}
</style>