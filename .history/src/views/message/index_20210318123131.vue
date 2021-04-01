<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">
      <el-button type="primary" class="left">主要按钮</el-button>
    </el-button>

    <el-link type="primary" class="right">短信发送记录</el-link>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column
        fixed
        prop="name"
        label="学员名"
        width="120"
      ></el-table-column>
      <el-table-column prop="number" label="手机号" width="120">
      </el-table-column>
      <el-table-column
        prop="wechat"
        label="微信号"
        width="120"
      ></el-table-column>
      <el-table-column prop="baby" label="宝宝名称" width="150">
      </el-table-column>
      <el-table-column
        prop="addwechat"
        label="加助教微信"
        width="100"
      ></el-table-column>
      <el-table-column prop="state" label="有限期状态" width="100">
      </el-table-column>
      <el-table-column
        prop="newstate"
        label="最新跟进状态"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="source"
        label="渠道来源"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="time"
        label="注册时间"
        width="100"
      ></el-table-column>
      <el-table-column prop="id" label="学员id" width="100"></el-table-column>
      <el-table-column prop="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
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
          name: "王小虎",
          number:'111111',
          wechat: "123456",
          baby:'xiaoming',
          addwechat: "1",
          state: "2",
          newstate:'',
          source:'渠道来源',
          time:'10'
        },
      ],
    };
  },
};
</script>

<style scoped>
.left {
  margin: 5px 0 5px 5px;
}
.right {
  float: right;
  margin-top: 10px;
}
</style>