<template>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
  <p>级联选择组件可以搭配 Field 和 Popup 组件使用，示例如下：</p>
  <van-field
    v-model="state.fieldValue"
    is-link
    readonly
    label="地区"
    placeholder="请选择所在地区"
    @click="state.show = true"
  />
  <van-popup v-model:show="state.show" round position="bottom">
    <van-cascader
      v-model="state.cascaderValue"
      title="请选择所在地区"
      :options="options"
      @close="state.show = false"
      @finish="onFinish"
    />
  </van-popup>
  <hr>
  <p>开关switch</p>  
  <van-switch v-model="checked" @change="onChange"/>
  
</template>

<script>
import { reactive, defineComponent, ref } from 'vue'
// import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const checked = ref(true)
    const state = reactive({
      show: false,
      fieldValue: '',
      cascaderValue: '',
    })
    // 选项列表， children代表子选项， 支持多级嵌套
    const options = [
      {
        text: '浙江省',
        value: '330000',
        children: [{text: '杭州市', value: '330100'}],
      },
      {
        text: '江苏省',
        value: '320000',
        children: [{text: '南京市', value: '320100'}],
      },
    ]
    // 全部选项选择完毕后， 会触发finish事件
    const onFinish = ([selectedOptions]) => {
      state.show = false;
      state.fieldValue = selectedOptions.map((options) => options.text).join("/");
    }
    const onChange = val => {
      console.log(val)
    }
    return {
      checked,
      state,
      options,
      onFinish,
      onChange
    }
  },
})
</script>
