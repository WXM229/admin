<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        ><a href="/administration">活动管理</a></el-breadcrumb-item
      >
    </el-breadcrumb>

    <el-table :data="tableData" height="500" border style="width: 100%">
      <el-table-column prop="date" label="操作人" width="100" align="center">
      </el-table-column>
      <el-table-column prop="name" label="发送时间" width="130" align="center">
      </el-table-column>
      <el-table-column
        prop="address"
        label="短信类型"
        width="80"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="短信模版"
        width="300"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="发送成功(人)"
        width="130"
        align="center"
      >
        <el-link type="primary" :underline="false" @click="win()">11</el-link>
      </el-table-column>
      <el-table-column
        prop="address"
        label="发送失败(人)"
        width="130"
        align="center"
      >
        <el-link type="primary" :underline="false">22</el-link>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000"
    >
    </el-pagination>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="handleClose"
    >
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="date" label="uuid" width="180"></el-table-column>
        <el-table-column prop="name" label="学员名" width="180"></el-table-column>
        <el-table-column prop="name" label="手机号" width="180"></el-table-column>
        <el-table-column prop="address" label="发送状态"> </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>


<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    win() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
  data() {
    return {
      dialogVisible: false,
      currentPage3: 1,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
};
</script>