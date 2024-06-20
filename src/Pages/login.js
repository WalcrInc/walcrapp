import React from 'react'
import AuthLayout from '@/Components/container/AuthLayout/AuthLayout'
import { Login } from '@/Components/container/Login'

const login = () => {
  return (
    <AuthLayout>
      <Login/>
    </AuthLayout>
  )
}

export default login