<template>
  <div class="login-page">
    <el-card class="login-card">
      <el-form :model="form" @submit.prevent="onSubmit">
        <el-form-item label="用户名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { login } from '@/api/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({ username: '', password: '' })

const onSubmit = async () => {
  const res = await login(form)
  if (res?.data?.token) {
    localStorage.setItem('token', res.data.token)
    router.push('/')
  }
}
</script>

<style scoped>
.login-page { display:flex; height:100vh; align-items:center; justify-content:center }
.login-card { width:360px }
</style>
