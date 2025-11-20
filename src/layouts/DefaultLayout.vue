<template>
  <el-container style="height:100vh">
    <el-header>My App</el-header>
    <el-container>
      <el-aside width="200px">菜单</el-aside>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts"></script>
