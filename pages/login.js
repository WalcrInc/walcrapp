import AuthLayout from '@/Components/AuthLayout/AuthLayout'
import { Login } from '@/Components/Login'
import React from 'react'

const login = () => {
  return (
    <AuthLayout>
      <Login/>
    </AuthLayout>
  )
}

export default login