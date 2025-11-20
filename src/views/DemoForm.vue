<template>
  <div>
    <el-card>
      <h3>表单示例</h3>
      <el-form :model="form">
        <el-form-item label="名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card style="margin-top:16px">
      <h3>表格示例</h3>
      <TableBasic :data="tableData" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import TableBasic from '@/components/common/TableBasic.vue'

const form = reactive({ name: '' })
const tableData = [
  { id: 1, name: '示例1' },
  { id: 2, name: '示例2' }
]

const submitForm = () => {
  console.log('submit', form)
}
</script>
