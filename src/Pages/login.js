import AuthLayout from 'Src/Components/AuthLayout/AuthLayout'
import { Login } from 'Src/Components/Login'
import React from 'react'

const login = () => {
  return (
    <AuthLayout>
      <Login/>
    </AuthLayout>
  )
}

export default login