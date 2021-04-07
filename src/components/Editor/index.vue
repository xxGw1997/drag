<template>
  <div class="editor"
       id="editor"
       :class="{edit:isEdit}"
       :style="{
         width:changeStyleWithScale(canvasStyleData.width) + 'px',
         height:changeStyleWithScale(canvasStyleData.height) + 'px'
       }"
       @contextmenu="handleContextMenu"
       @mousedown="handleMouseDown">
    <div v-for="(item,index) in componentData"
         :key="item.id"
         :index="index">
      <component class="component"
                :is="item.component"
                :style="getComponentStyle(item.style)" 
                :propValue="item.propValue"
                @input="handleInput"
                :element="item"
                :id="'component' + item.id"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getStyle } from '@/utils/style'
import { changeStyleWithScale } from '@/utils/translate'
export default {
  props: {
    isEdit: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapState([
      'componentData',
      'canvasStyleData'
    ])
  },
  methods: {
    changeStyleWithScale,
    handleContextMenu () {

    },
    handleMouseDown () {

    },
    getComponentStyle(style){
      return getStyle(style,['top','left','width','height','rotate'])
    },
    handleInput (element, value) {
      // 根据文本组件高度调整 shape 高度
      // this.$store.commit('setShapeStyle', { height: this.getTextareaHeight(element, value) })
    },
  }
}
</script>

<style>
</style>