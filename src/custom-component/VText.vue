<template>
  <div>
    <div v-if="editMode == 'edit'"
         class="v-text"
         @keydown="handleKeydown"
         @keyup="handleKeyup">
      <div :contenteditable="canEdit"
           :class="{canEdit}"
           @dblclick="setEdit"
           :tabindex="element.id"
           @paste="clearStyle"
           @mousedown="handleMousedown"
           @blur="handleBlue"
           ref="text"
           v-html="element.propValue"
           @input="handleInput"
           :style="{verticalAlign:element.style.verticalAlign}"></div>
    </div>
    <div v-else
         class="v-text">
      <div v-html="element.propValue"
           :style="{verticalAlign:element.style.verticalAlign}"></div>
    </div>
  </div>
</template>

<script>
import { keycodes } from '@/utils/shortcutKey.js'
import { mapState } from 'vuex'
export default {
  props: {
    propValue: {
      type: String,
      require: true
    },
    element: {
      type: Object
    }
  },
  data () {
    return {
      canEdit: false,
      ctrlKey: 17,
      isCtrlDown: false
    }
  },
  computed: {
    ...mapState([
      'editMode'
    ])
  },
  methods: {
    handleInput (e) {
      //监听修改input的内容
      this.$emit('input', this.element, e.target.innerHTML)
    },
    handleKeydown (e) {
      if (e.keyCode == this.ctrlKey) {
        this.isCtrlDown = true
      } else if (this.isCtrlDown && this.canEdit && keycodes.includes(e.keyCode)) {
        e.stopPropagation()
      } else if (e.keyCode == 46) {
        e.stopPropagation()
      }
    },
    handleKeyup (e) {
      if (e.keyCode == this.ctrlKey) {
        this.isCtrlDown = false
      }
    },
    handleMousedown (e) {
      if (this.canEdit) {
        e.stopPropagation()
      }
    },
    //将剪切板上的数据提取出来并且赋值到
    clearStyle (e) {
      e.preventDefault()
      const clp = e.clipboardData
      const text = clp.getData('text/plain') || ''
      if (text !== '') {
        document.execCommand('insertText', false, text)
      }
      this.$emit('input', this.element, e.target.innerHTML)
    },
    handleBlur (e) {
      this.element.propValue = e.target.innerHTML || '&nbsp;'
      this.canEdit = false
    },
    setEdit () {
      this.canEdit = true
      // 双击时强行全选文字
      this.selectText(this.$refs.text)
    },
    selectText (element) {
      const selection = window.getSelection()
      const range = document.createRange()
      range.selectNodeContents(element)
      selection.removeAllRanges()
      selection.addRange(range)
    },
  }
}
</script>

<style lang="scss" scoped>
.v-text {
  width: 100%;
  height: 100%;
  display: table;
  div {
    display: table-cell;
    width: 100%;
    height: 100%;
    outline: none;
  }
  .canEdit {
    cursor: text;
    height: 100%;
  }
}
</style>