<template>
  <div>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-button type="primary">查询</el-button>
    <el-button type="primary">重制</el-button>

    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="date" label="id"> </el-table-column>
      <el-table-column prop="name" label="激活方式名称"> </el-table-column>
      <el-table-column prop="address" label="激活类别"> </el-table-column>
      <el-table-column prop="address" label="分配类型"> </el-table-column>
      <el-table-column prop="address" label="分配角色"> </el-table-column>
      <el-table-column prop="address" label="自约课是否直分cc"> </el-table-column>
      <el-table-column prop="address" label="状态"> </el-table-column>
      <el-table-column prop="address" label="话术"> </el-table-column>
      <el-table-column prop="address" label="操作"> 
          <el-button type="danger">危险按钮</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      value: "",
    };
  },
};
</script>