<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
      </div>
      <el-form ref="form" :model="form">
        <el-row>
          <el-col :span="6" :offset="2">
            <el-form-item label="ID">
              <el-input v-model="form.id" style="width: 195px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="激活方式名称">
              <el-input v-model="form.name" style="width: 195px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="激活级别">
              <el-select
                v-model="value"
                placeholder="请选择"
                @change="selectChange($event)"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :offset="2">
            <el-form-item label="分配类型">
              <el-select v-model="valueTypeAll" placeholder="请选择">
                <el-option
                  v-for="item in typeAll"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="分配角色">
              <el-select v-model="valueRoles" placeholder="请选择">
                <el-option
                  v-for="item in roles"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="自约课是否直分cc">
              <el-select v-model="valueOptionsCC" placeholder="请选择">
                <el-option
                  v-for="item in optionsCC"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :offset="2">
            <el-form-item label="状态">
              <el-select v-model="valueState" placeholder="请选择">
                <el-option
                  v-for="item in state"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="探索颜色">
              <el-select v-model="valuecolor" placeholder="请选择">
                <el-option
                  v-for="item in color"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span class="elBut">
        <el-button type="primary" @click="handleChang">查询</el-button>
        <el-button type="primary">重制</el-button>
      </span>
    </el-card>

    <div>
      <el-card class="box-card" style="margin-top: 20px" shadow="always">
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column prop="id" label="ID"> </el-table-column>
          <el-table-column prop="name" label="激活方式名称"> </el-table-column>
          <el-table-column prop="level" label="激活级别"> </el-table-column>
          <el-table-column prop="is_delay_allocate_str" label="分配类型">
          </el-table-column>
          <el-table-column prop="allocate_role_str" label="分配角色">
          </el-table-column>
          <el-table-column prop="auto_allocate_str" label="自约课是否直分cc">
          </el-table-column>
          <el-table-column prop="status_str" label="状态"> </el-table-column>
          <el-table-column prop="sales_talk" label="话术"> </el-table-column>
          <el-table-column prop="address" label="操作">
            <el-button type="danger" @click="dialogVisible = true"
              >停用</el-button
            >
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <el-dialog
      title="确认停用"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>停用后将不能在继续使用，确认停用？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="danger" @click="dialogVisible = false">停用</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    selectChange(event){
    console.log(event);
    },
    handleChang() {
      console.log(this.form.id);
      console.log(this.form.name);
      console.log(this.options);
    },
  },
  data() {
    return {
      dialogVisible: false,
      options: [
        {
          code: "A",
          value: "A",
        },
        {
          code: "B",
          value: "B",
        },
        {
          code: "C",
          value: "C",
        },
        {
          code: "S",
          value: "S",
        },
      ],
      //分配类型数据
      typeAll: [
        {
          code: "0",
          value: "立即分配",
        },
        {
          code: "1",
          value: "延迟分配",
        },
        {
          code: "2",
          value: "不分配",
        },
      ],
      // 分配角色数据
      roles: [
        {
          code: "1",
          value: "分配TMK",
          desc: null,
        },
        {
          code: "2",
          value: "分配CC",
          desc: null,
        },
      ],
      //cc
      optionsCC: [
        {
          code: "0",
          value: "否",
        },
        {
          code: "1",
          value: "是",
        },
      ],
      //状态
      state: [
        {
          code: "0",
          value: "待启用",
        },
        {
          code: "1",
          value: "已启用",
        },
        {
          code: "2",
          value: "已禁用",
        },
      ],
      color: [],
      value: "",
      form: {
        name: "",
        id: "",
      },
      value: "",
      valueTypeAll: "",
      valueRoles: "",
      valueOptionsCC: "",
      valueState: "",
      valuecolor: "",

      tableData: [
        {
          allocate_role: "2",
          allocate_role_str: "分配CC", // 分配角色
          auto_allocate: "1",
          auto_allocate_str: "是", // 自约课是否直分CC
          color_index: "1",
          color_index_str: "rgba(135,206,235,0.4)",
          create_time: "1615974624",
          id: "26", // ID
          is_delay_allocate: "0",
          is_delay_allocate_str: "立即分配", // 分配类型
          level: "S", // 激活级别
          name: "智能待分配手动分配测试激活方式", // 激活方式名称
          operator_id: "11089",
          sales_talk: "激活花束", // 话术
          status: "1",
          status_str: "已启用", // 状态
          update_time: "0",
        },
        {
          allocate_role: "1",
          allocate_role_str: "分配TMK",
          auto_allocate: "1",
          auto_allocate_str: "是",
          color_index: "1",
          color_index_str: "rgba(135,206,235,0.4)",
          create_time: "1615201819",
          id: "25",
          is_delay_allocate: "0",
          is_delay_allocate_str: "立即分配",
          level: "A",
          name: "测试用-勿动01",
          operator_id: "11068",
          sales_talk: "测试用-勿动01",
          status: "1",
          status_str: "已启用",
          update_time: "0",
        },
        {
          allocate_role: "2",
          allocate_role_str: "分配CC",
          auto_allocate: "1",
          auto_allocate_str: "是",
          color_index: "4",
          color_index_str: "rgba(152,251,152,0.4)",
          create_time: "1614846757",
          id: "23",
          is_delay_allocate: "0",
          is_delay_allocate_str: "立即分配",
          level: "S",
          name: "验收激活01",
          operator_id: "10989",
          sales_talk: "测试验收",
          status: "1",
          status_str: "已启用",
          update_time: "0",
        },
        {
          allocate_role: "2",
          allocate_role_str: "分配CC",
          auto_allocate: "1",
          auto_allocate_str: "是",
          color_index: "4",
          color_index_str: "rgba(152,251,152,0.4)",
          create_time: "1614236426",
          id: "22",
          is_delay_allocate: "0",
          is_delay_allocate_str: "立即分配",
          level: "A",
          name: "B级别的激活方式激活历史",
          operator_id: "11069",
          sales_talk: "b级别+激活历史+tmk+立即分配",
          status: "1",
          status_str: "已启用",
          update_time: "0",
        },
        {
          allocate_role: "2",
          allocate_role_str: "分配CC",
          auto_allocate: "1",
          auto_allocate_str: "是",
          color_index: "3",
          color_index_str: "rgba(240,128,128,0.4)",
          create_time: "1614221265",
          id: "21",
          is_delay_allocate: "0",
          is_delay_allocate_str: "立即分配",
          level: "S",
          name: "多次激活学员激活历史测试",
          operator_id: "11069",
          sales_talk: "这是测试激活历史的数据",
          status: "1",
          status_str: "已启用",
          update_time: "0",
        },
      ],
    };
  },
};
</script>
<style scoped>
.elBut {
  float: right;
  margin: 0 20px 10px;
}
</style>