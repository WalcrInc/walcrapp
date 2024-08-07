import React from 'react'
import { Login } from '@/app/Login/Login'
import AuthLayout from '@/app/AuthLayout/AuthLayout'

const login = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  )
}

export default login