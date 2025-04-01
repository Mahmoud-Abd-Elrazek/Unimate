// import React from 'react'
import { IoIosSearch } from "react-icons/io";

import Dropdown from 'react-bootstrap/Dropdown';

export default function Filter_bar() {
  return (
    <div className=" w-full  h-[4rem] px-10 py-2 rounded-full border border-gray-600 shadow-md flex  justify-between  items-center gap-10 bg-white">
      {/* search_icon */}
      <div className="rounded-full w-[2.5rem] h-[2.5rem] MainColorBG flex justify-center items-center"><IoIosSearch  className="IconSize text-white" />
      </div>
      {/* drop down items */}
      <div className="flex justify-around">
        {/* the price */}
        <div></div>
        {/* number of members */}
        <div>
        <Dropdown>
            <Dropdown.Toggle className="bg-white text-black border-none" id="dropdown-basic">
              عدد الافراد
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* number of rooms */}
        <div>
        <Dropdown>
            <Dropdown.Toggle className="bg-white text-black border-none" id="dropdown-basic">
              عدد الغرف
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* the type */}
        <div>
        <Dropdown>
            <Dropdown.Toggle className="bg-white text-black border-none" id="dropdown-basic">
              النوع
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* the location */}
        <div>
          <Dropdown>
            <Dropdown.Toggle className="bg-white text-black border-none" id="dropdown-basic">
              المنظقه
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
