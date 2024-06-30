import React from 'react'
import { Login } from '@/App/Login/Login'
import AuthLayout from '@/App/AuthLayout/AuthLayout'

const login = () => {
  return (
    <AuthLayout>
      <Login/>
    </AuthLayout>
  )
}

export default login