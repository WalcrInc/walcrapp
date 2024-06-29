import AuthLayout from '@/App/AuthLayout/AuthLayout'
import { Login } from '@/App/Login'
import React from 'react'

const login = () => {
  return (
    <AuthLayout>
      <Login/>
    </AuthLayout>
  )
}

export default login