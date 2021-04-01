<template>
  <div>
    <el-button type="primary">主要按钮</el-button>
    <template slot-scope="scope">
      <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      <el-button type="text" size="small">编辑</el-button>
    </template>
  </div>
</template>