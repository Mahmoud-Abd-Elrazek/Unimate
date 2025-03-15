import React from 'react'
import "./home.css"
import Search_bar from '../../components/search_bar/search_bar'
export default function Home() {
  return (
    <div className='h-lvh '>
      <div className='lg:hidden'>
        <Search_bar />
      </div>
    </div>
  )
}
