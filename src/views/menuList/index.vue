<template>
  <div class="content">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-lx-copy"></i> 权限/菜单列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="handle-box">
        <el-input placeholder="菜单名"
                  class="handle-input mr10"></el-input>
        <el-button type="primary"
                   icon="el-icon-search"
                   @click="handleSearch">搜索</el-button>
      </div>
      <el-table :data="tableData.list"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header">
        <el-table-column prop="id"
                         label="ID"
                         width="55"
                         align="center">
        </el-table-column>
        <el-table-column prop="title"
                         label="菜单标题"
                         align="center"></el-table-column>
        <el-table-column prop="sort"
                         label="排序"
                         align="center">
        </el-table-column>
        <el-table-column prop="identification"
                         label="权限标识"
                         align="center"></el-table-column>
        <el-table-column prop="createdate"
                         label="创建日期"
                         align="center"></el-table-column>
        <el-table-column label="操作"
                         width="180"
                         align="center">
          <template #default="scope">
            <el-button type="text"
                       icon="el-icon-edit"
                       @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button type="text"
                       icon="el-icon-delete"
                       class="red"
                       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background
                       layout="total, prev, pager, next"
                       :current-page="1"
                       :page-size="10"
                       :total="100"
                       @current-change="handlePageChange"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineComponent } from "vue";
import tableData from "public/mockdata.json";
</script>
<script lang="ts">
export default {
  name: "menuList"
};
</script>
<style lang="scss" scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
</style>
