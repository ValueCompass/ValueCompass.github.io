<template>
  <div>
    <el-table :data="Schwartz_table_data" border style="width: 100%">
      <el-table-column prop="model_name" label="Model" />
      <template
        v-for="(item, index) in Schwartz_table_columns_checked"
        :key="index"
      >
        <el-table-column
          v-if="item != 'model_name'"
          :prop="item"
          :label="item"
          :formatter="formatter"
        />
      </template>
    </el-table>
    <h4>Schwartz Theory of Basic Values</h4>

    <el-table :data="MFT_table_data" border style="width: 100%">
      <el-table-column prop="model_name" label="Model" />
      <template v-for="(item, index) in MFT_table_columns_checked" :key="index">
        <el-table-column
          v-if="item != 'model_name'"
          :prop="item"
          :label="item"
          :formatter="formatter"
        />
      </template>
    </el-table>
    <h4>Moral Foundations Theory</h4>

    <el-table :data="Risk_table_data" border style="width: 100%">
      <el-table-column prop="model_name" label="Model" />
      <template
        v-for="(item, index) in Risk_table_columns_checked"
        :key="index"
      >
        <el-table-column
          v-if="item != 'model_name'"
          :prop="item"
          :label="item"
          :formatter="formatter"
        />
      </template>
    </el-table>
    <h4>Diverse Safety Risks</h4>
    <!-- <h4>LLM Value System</h4> -->
  </div>
</template>
<script setup>
import {
  ref,
  watch,
  onMounted,
  onUnmounted,
  nextTick,
  defineExpose,
  defineProps,
} from "vue";

const Schwartz_table_columns_checked = ref([]);
const MFT_table_columns_checked = ref([]);
const Risk_table_columns_checked = ref([]);

const Schwartz_table_data = ref([]);
const MFT_table_data = ref([]);
const Risk_table_data = ref([]);

const setTableData = (Schwartz_table_data,Risk_table_data,MFT_table_data,Schwartz_table_columns_checked,Risk_table_columns_checked,MFT_table_columns_checked)=>{
    console.log(Schwartz_table_data,Risk_table_data,MFT_table_data,Schwartz_table_columns_checked,Risk_table_columns_checked,MFT_table_columns_checked)
    Schwartz_table_data.value = Schwartz_table_data
    Risk_table_data.value = Risk_table_data
    MFT_table_data.value = MFT_table_data
    Schwartz_table_columns_checked.value = Schwartz_table_columns_checked
    Risk_table_columns_checked.value =Risk_table_columns_checked
    MFT_table_columns_checked.value  = MFT_table_columns_checked


    
}



defineExpose({
  setTableData,
});



const formatter = (row, column) => {
  if (column.label == "model_name") {
    return row[column.label];
  } else {
    return (row[column.label]*100).toFixed(3);
  }
  // if(column.label == 'model_name'){
  //   return row[column.label]
  // }else{
  //   console.log(row[column.label])
  //   return row[column.label].toFixed(5)
  // }
};
// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
</script>
<style>
</style>
