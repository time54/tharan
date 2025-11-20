<template>
  <el-table :data="data">
    <el-table-column prop="id" label="#" width="80" />
    <el-table-column prop="name" label="名称" />
  </el-table>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{ data: any[] }>()
const data = props.data || []
</script>
