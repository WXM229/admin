<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        ><a href="/administration">活动管理</a></el-breadcrumb-item
      >
    </el-breadcrumb>

    <el-table :data="tableData" height="250">
      <el-table-column prop="date" label="操作人" width="100"> </el-table-column>
      <el-table-column prop="name" label="发送时间" width="130"> </el-table-column>
      <el-table-column prop="address" label="短信类型" width="80"> </el-table-column>
      <el-table-column prop="address" label="短信模版" width="300"> </el-table-column>
      <el-table-column prop="address" label="发送成功(人)" width="130"> </el-table-column>
      <el-table-column prop="address" label="发送失败(人)" width="130"> </el-table-column>
    </el-table>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>