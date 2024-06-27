import style from './Page.module.css'

import React from 'react'

const PageContainer = ({children}) => {
  return (
    <div className={style.div}>
      {children}
    </div>
  )
}

export default PageContainer

