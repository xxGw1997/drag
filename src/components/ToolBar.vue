<template>
  <div>
    <div class="toolbar">
      <el-button @click="undo">撤消</el-button>
      <el-button @click="redo">重做</el-button>
      <label for="input"
             class="insert">插入图片</label>
      <input type="file"
             @change="handleFileChange"
             id="input"
             hidden />
      <el-button @click="preview"
                 style="margin-left: 10px;">预览</el-button>
      <el-button @click="save">保存</el-button>
      <el-button @click="clearCanvas">清空画布</el-button>
      <el-button @click="compose"
                 :disabled="true">组合</el-button>
      <el-button @click="decompose"
                 :disabled="true">拆分</el-button>

      <el-button @click="lock"
                 :disabled="false">锁定</el-button>
      <el-button @click="unlock"
                 :disabled="false">解锁</el-button>
      <div class="canvas-config">
        <span>画布大小</span>
        <input>
        <span>*</span>
        <input>
      </div>
      <div class="canvas-config">
        <span>画布比例</span>
        <input v-model="scale"
               @input="handleScaleChange"> %
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      scale:'100'
    }
  },
  methods:{
    //撤销操作
    undo(){

    },
    //重新做
    redo(){

    },
    //上传图片
    handleFileChange(){

    },
    //预览
    preview(){

    },
    //保存
    save(){

    },
    //清空画布
    clearCanvas(){

    },
    //组合
    compose(){

    },
    //拆分
    decompose(){

    },
    //锁定
    lock(){

    },
    //解锁
    unlock(){

    },
    //调整画布比例
    handleScaleChange(){

    }
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
    height: 64px;
    line-height: 64px;
    background: #fff;
    border-bottom: 1px solid #ddd;

    .canvas-config {
        display: inline-block;
        margin-left: 10px;
        font-size: 14px;
        color: #606266;

        input {
            width: 50px;
            margin-left: 10px;
            outline: none;
            padding: 0 5px;
            border: 1px solid #ddd;
            color: #606266;
        }

        span {
            margin-left: 10px;
        }
    }

    .insert {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #FFF;
        border: 1px solid #DCDFE6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
        margin-left: 10px;

        &:active {
            color: #3a8ee6;
            border-color: #3a8ee6;
            outline: 0;
        }

        &:hover {
            background-color: #ecf5ff;
            color: #3a8ee6;
        }
    }
}
</style>