<template>
  <div>
    <el-button type="text" @click = gotoTable()>
      <el-button type="primary" class="left">发送短信</el-button>
    </el-button>
    <div class="inputEle">
      <el-input v-model="input" placeholder="请输入手机号"></el-input>
      <el-button type="primary" @click="clickPhone()">查询</el-button>
      <el-button type="primary" @click="closePhone()">重制</el-button>
    </div>
    <div>
      <el-select v-model="value" clearable placeholder="请选择" @change="goNumber">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      >
    </el-option>
  </el-select>

    </div>
    <el-link type="primary" class="right" @click="gotoMenu()">短信发送记录</el-link>
    <el-table :data="tableData" border style="width: 100%" @select='onTableSelect' >
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
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane v-for="(item,index) in ageData" :key="index" :label="item.type_name" name="first" >
          <p>提醒：加微信类型短信每个用户最多可以发送6次超过次数将无法发送</p>
          <div v-for="(i,ind) in item" :key="ind">
            <el-radio v-if="i.id" v-model="radio" :label="i.id" class="radio1">
            <span class="fontStyle">{{i.content}}</span></el-radio>
          </div>
        </el-tab-pane>
      </el-tabs>
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
      <span style="display: block; text-align: center">是否确认发送给学员</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="info" @click="centerDialog()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible0"
      width="30%"
      center
    >
      <h2 style="text-align: center">发送结果</h2>
      <p style="text-align: center">发送成功(人)</p>
      <p style="text-align: center">发送失败(人)</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="info" @click="centerDialogVisible0 = false"
          >我知道了</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  methods: {
    goNumber(value){
      console.log(value)
      this.tableData.forEach((item)=>{
          if(item.number === value){
            let newData =[]
            newData.push(item)
            this.tableData = newData
          }
      })
    },
    clickPhone(){
      let newtableData = []
      this.tableData.forEach((item)=>{
        if(this.input == item.number){
          this.newtableData1 = this.tableData 
          newtableData.push(item)
          this.tableData = newtableData  
          console.log(newtableData, 'newTableData')                  
        }
      })
    },
    closePhone(){
      console.log(this.tableData);
      this.tableData = this.newtableData1
      this.input = ''
    },
    open() {
        this.$message('请先选择学员');
      },
    gotoTable(){
      console.log(this.selected);
      if(this.selected == true){
        this.dialogVisible = true
      }
      else{
        this.open()
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    gotoMenu() {
        this.$router.push("/administration/index");
    },
    dialogVisible1() {
      this.centerDialogVisible = true;
      // this.dialogVisible = false;
    },
    centerDialog() {
      this.centerDialogVisible = false;
      this.centerDialogVisible0 = true;
    },
    onTableSelect(rows, row) {
        this.selected = rows.length && rows.indexOf(row) !== -1
        console.log(selected)  // true就是选中，0或者false是取消选中
      },
  },

  data() {
    return {
      value:'',
      newtableData1:[],
      input:'',
      selected : false,
      activeName: "first",
      centerDialogVisible: false,
      centerDialogVisible0: false,
      radio: "1",
      dialogVisible: false,
      options: [{
          value: '111111',
          label: '111111'
        }, {
          value: '22222',
          label: '22222'
        }, {
          value: '33333',
          label: '33333'
        }, {
          value: '4444',
          label: '4444'
        }, {
          value: '5555',
          label: '5555'
        }],
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
        {
          name: "李四",
          number: "22222",
          wechat: "234567",
          baby: "lisi",
          addwechat: "2",
          state: "3",
          newstate: "",
          source: "哈哈哈",
          time: "30",
        },
        {
          name: "张三",
          number: "33333",
          wechat: "345678",
          baby: "zhangsan",
          addwechat: "3",
          state: "4",
          newstate: "",
          source: "张三666",
          time: "100",
        },
      ],
      ageData: {
          1: {
            0: {
              id: "1",
              content:
                "【小叶子】尾号{$var}家长:我是小叶子智能陪练的老师,现在由我负责您的孩子在小叶子的学习,提醒您添加下我的微信,便于带孩子学习哦.添加微信更有练琴干货,返双倍学费,朗朗亲笔签名奖状等你来拿.{$var}点击链接添加老师微信:{$var}",
              type: "1",
              create_time: "1611557612",
              update_time: "0",
              status: "1",
            },
            1: {
              id: "2",
              content:
                "【小叶子】尾号{$var}家长:您这边为孩子报名的《小叶子智能陪练体验课》即将开课,老师正在建立学习群,请您尽快添加老师微信进入学习群,便于孩子学习.群内更有练琴干货,返双倍学费,朗朗亲笔签名奖状等你来拿.{$var}点击链接添加老师微信:{$var}",
              type: "1",
              create_time: "1611557612",
              update_time: "0",
              status: "1",
            },
            2: {
              id: "3",
              content:
                "【小叶子】尾号{$var}家长:系统检测到您还没有进入学习群,请您尽快添加老师微信进入学习群,进群即可获取练琴干货,更有返双倍学费,朗朗亲笔签名奖状等你来拿.{$var}点击链接添加老师微信:{$var}",
              type: "1",
              create_time: "1611557612",
              update_time: "0",
              status: "1",
            },
            type_name: "加微信",
        },
      },
    };
  },
};
</script>

<style scoped>
.open{
  display: block;
  margin-left: 99px;
}
.left {
  margin: 5px 0 5px 5px;
}
.right {
  float: right;
  margin: 20px;
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
  /* border: 1px solid black; */
  /* word-wrap:; */
}
.fontStyle {
  color: #606266;
  background-color: #f2f2f2;
  display: inline-block;
  /* text-overflow: ellipsis; */
  white-space: normal;
  line-height: 18px;
  vertical-align: middle;
  width: 95%;
  padding: 10px;
}
.inputEle{
  display: inline-flex;
  margin-left: 20px;
}
</style>