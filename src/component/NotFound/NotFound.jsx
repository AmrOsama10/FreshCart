import React from 'react'
import errorImg from '../../imgs/error.svg'

export default function NotFound() {
  return (
    <>
    <div className=" flex items-center justify-center py-32">
      <img src={errorImg} alt="errorImg" />
    </div>
    </>
  )
}
