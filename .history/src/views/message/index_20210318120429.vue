<template>
  <div>
    <el-button type="primary">主要按钮</el-button>
    <el-link type="primary" class="right">短信发送记录</el-link>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column fixed prop="name" label="学员名" width="120"></el-table-column>
      <el-table-column prop="number" label="手机号" width="120"> </el-table-column>
      <el-table-column prop="wechat" label="微信号" width="150"></el-table-column>
      <el-table-column prop="baby" label="宝宝名称" width="150"> </el-table-column>
      <el-table-column prop="addwechat" label="加助教微信" width="120"></el-table-column>
      <el-table-column prop="state" label="有限期状态" width="100"> </el-table-column>
      <el-table-column fixed="newstate" label="最新跟进状态" width="100"></el-table-column>
      <el-table-column fixed="source" label="渠道来源" width="120"></el-table-column>
      <el-table-column fixed="time" label="注册时间" width="120"></el-table-column>
      <el-table-column fixed="id" label="学员id" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {},

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
    };
  },
};
</script>

<style scoped>
.right{
  float: right;
}
</style>