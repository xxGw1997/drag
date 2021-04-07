<template>
  <div class="component-list" @dragstart="handleDragStart">
    <div 
      class="list"
      v-for="(item,index) in componentList" 
      :key="index" 
      draggable
      :data-index="index"  
    >
      <span class="iconfont" :class="`icon-${item.icon}`"></span>
      <span>{{item.label}}</span>
    </div>
  </div>
</template>

<script>
import componentList from '@/custom-component/component-list'
export default {
  data(){
    return {
      componentList,
    }
  },
  methods:{
    handleDragStart(e){
      e.dataTransfer.setData('index', e.target.dataset.index)
    }
  }
}
</script>

<style>

</style>