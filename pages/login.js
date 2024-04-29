import AuthLayout from '@/container/AuthLayout/AuthLayout'
import { Login } from '@/container/Login'
import React from 'react'

const login = () => {
  return (
    <AuthLayout>
      <Login/>
    </AuthLayout>
  )
}

export default login