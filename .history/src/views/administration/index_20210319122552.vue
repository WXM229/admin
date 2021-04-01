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
      <el-table-column prop="address" label="短信类型" width="80" align="center" v-for="item in radioItem">
      </el-table-column>
      <el-table-column prop="address" label="短信模版" width="300" align="center">
      </el-table-column>
      <el-table-column prop="address" label="发送成功(人)" width="130" align="center">
      </el-table-column>
      <el-table-column prop="address" label="发送失败(人)" width="130" align="center">
      </el-table-column>
    </el-table>
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
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
      }
    },
    data() {
      return {
        currentPage3: 1,
      };
    },

  data() {
    return {
       radioItem:{
    "code":0,
    "data":{
        "1":{
            "0":{
                "id":"1",
                "content":"【小叶子】尾号{$var}家长:我是小叶子智能陪练的老师,现在由我负责您的孩子在小叶子的学习,提醒您添加下我的微信,便于带孩子学习哦.添加微信更有练琴干货,返双倍学费,朗朗亲笔签名奖状等你来拿.{$var}点击链接添加老师微信:{$var}",
                "type":"1",
                "create_time":"1611557612",
                "update_time":"0",
                "status":"1"
            },
            "1":{
                "id":"2",
                "content":"【小叶子】尾号{$var}家长:您这边为孩子报名的《小叶子智能陪练体验课》即将开课,老师正在建立学习群,请您尽快添加老师微信进入学习群,便于孩子学习.群内更有练琴干货,返双倍学费,朗朗亲笔签名奖状等你来拿.{$var}点击链接添加老师微信:{$var}",
                "type":"1",
                "create_time":"1611557612",
                "update_time":"0",
                "status":"1"
            },
            "2":{
                "id":"3",
                "content":"【小叶子】尾号{$var}家长:系统检测到您还没有进入学习群,请您尽快添加老师微信进入学习群,进群即可获取练琴干货,更有返双倍学费,朗朗亲笔签名奖状等你来拿.{$var}点击链接添加老师微信:{$var}",
                "type":"1",
                "create_time":"1611557612",
                "update_time":"0",
                "status":"1"
            },
            "type_name":"加微信"
        }
    }
},
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