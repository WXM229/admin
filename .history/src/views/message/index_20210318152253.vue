<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">
      <el-button type="primary" class="left">发送短信</el-button>
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

    <el-dialog title="选择短信模版" :visible.sync="dialogVisible" width="50%">
      <p class="addwechattop">加微信</p>
      <div class="addwechat">
        <p>提醒：加微信类型短信每个用户最多可以发送6次超过次数将无法发送</p>
        <el-radio v-model="radio" label="1" class="radio1"
          >当你一个路由下面的 children
          声明的路由大于1个时，自动会变成嵌套的模式--如组件页面 //
          只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面 //
          若你想不管路由下面的 children 声明的个数都显示你的根路由 // 你可以设置
          alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
          alwaysShow: true</el-radio
        >
        <el-radio v-model="radio" label="2"
          >当你一个路由下面的 children
          声明的路由大于1个时，自动会变成嵌套的模式--如组件页面 //
          只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面 //
          若你想不管路由下面的 children 声明的个数都显示你的根路由 // 你可以设置
          alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
          alwaysShow: true</el-radio
        >
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible1()">发送</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <span>是否确认发送给学员</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialog()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible0"
      width="30%"
      center
    >
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible0 = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible0 = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  methods: {
    dialogVisible1() {
      this.centerDialogVisible = true;
      // this.dialogVisible = false;
    },
    centerDialog() {
      this.centerDialogVisible = false;
      this.centerDialogVisible0 = true;
    },
  },

  data() {
    return {
      centerDialogVisible: false,
      centerDialogVisible0: false,
      radio: "1",
      dialogVisible: false,
      tableData: [
        {
          name: "王小虎",
          number: "111111",
          wechat: "123456",
          baby: "xiaoming",
          addwechat: "1",
          state: "2",
          newstate: "",
          source: "渠道来源",
          time: "10",
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
  margin-top: 20px;
}
.addwechattop {
  height: 40px;
  width: 80px;
  line-height: 40px;
  text-align: center;
  border: 1px solid silver;
  margin-top: -10px;
}
.addwechat {
  height: 200px;
  border: 1px solid silver;
  margin-top: -15px;
}
.radio1 {
  height: 100px;
  width: 200px;
  border: 1px solid black;
  word-wrap: break-word;
}
</style>