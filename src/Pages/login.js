import React from 'react'
import AuthLayout from '@/App/AuthLayout/AuthLayout'
import { Login } from '@/App/Login'

const login = () => {
  return (
    <AuthLayout>
      <Login/>
    </AuthLayout>
  )
}

export default login