// import React from 'react'

import { Link } from "react-router-dom";

export default function ForgetPassword() {
  return (
    <div>
      this is the forget password page
      <Link to='/resetpassword' className="btn btn-dark">
      send the confirem
      </Link>
    </div>
  )
}
