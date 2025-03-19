// import React from 'react'

import { useState } from "react"

// import { HiH1 } from "react-icons/hi2";

export default function SignOutCard() {
  const [open,setisopen]=useState(false)
  return (
    <div className="bg-red-200 h-lvh BODY">
      IoIosHelpCircleOutline
      <button className="bg-blue-400 " onClick={()=>setisopen(!open)}>Click</button>
      {open&&<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quam eveniet eum veritatis qui nulla nostrum deleniti! Nemo accusamus praesentium, quisquam beatae, doloremque voluptate enim consequatur, maxime adipisci impedit dolor explicabo! Vel, aliquam nobis? Facilis consectetur asperiores cum adipisci natus laudantium id incidunt magni, exercitationem ratione, numquam sint modi facere consequuntur dolorem porro delectus iusto odit laboriosam quos, voluptatibus veritatis accusamus. Voluptatum adipisci dicta enim at incidunt minima veniam neque, atque reprehenderit culpa temporibus? Ipsum, ducimus quae iusto voluptas perferendis consequatur, sunt sapiente voluptates, neque obcaecati at fuga nostrum distinctio tenetur voluptatibus quisquam eligendi cumque. Deserunt quos similique aliquam libero voluptatum quod inventore, architecto aliquid cumque consequuntur eveniet eaque facere, error doloremque nam aut dolores sed ipsum cum magnam facilis. Commodi est, deserunt natus, consequatur assumenda a autem veritatis nam consectetur ut iste sit quos quod laborum reiciendis, soluta numquam voluptates nihil! Nesciunt esse veniam, fuga quae similique deleniti nemo eaque voluptatum. Nesciunt, optio nobis architecto tempore eligendi id libero, dignissimos a praesentium nostrum consectetur voluptatum odit perferendis animi blanditiis quas saepe? Corporis soluta, nesciunt accusamus voluptatum est nobis odit sed reiciendis at culpa! Possimus nisi totam, mollitia ducimus quod fugit. Eos totam perspiciatis sit velit magnam dicta explicabo veritatis.</p>}
    </div>
  )
}
