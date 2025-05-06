// import React from 'react'

import { useState } from "react"
// import { Link } from "react-router"

export default function Favorites() {
  const [data] = useState([])

  return (
    <div>
      <h1 className="text-2xl text-gray-500 text-center mt-10 dark:text-[white]">تفضيلاتى</h1>
      {data.length > 0 ?
        <div>

        </div> :
        <div className="flex flex-col items-center justify-start min-h-screen mt-20">
          <p className="text-lg my-10 text-gray-700 dark:text-[white]">لا توجد شقق مفضله حتى الان</p>
          {/* <Link to="/" className="btn MainColorBG text-white">Go to Home</Link> */}
        </div>
      }
    </div>
  )
}
