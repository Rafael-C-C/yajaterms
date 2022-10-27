import React from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import * as styles from '../styles/global.css'

export default function Layout ({children}) {
  return (
    <div className='layout'>
      <NavBar />
      <div className="content">
        { children }
      </div>
      <Footer/>
    </div>
  )
}