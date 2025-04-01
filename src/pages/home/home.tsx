// import React from 'react'
// import "./home.css"
// import ApartmentCard from "../../components/ApartmentCard/ApartmentCard"
import Filter_bar from '../../components/Filter_Bar/filter_bar'
import Search_bar from '../../components/search_bar/search_bar'
import { FaRegStar } from "react-icons/fa";
import ApartmentCard from '../../components/ApartmentCard/ApartmentCard';
import { Col, Row } from 'react-bootstrap';
export default function Home() {
  // const cards=
  return (
    <div className='min-h-lvh  BODY '>
      <div className='lg:hidden flex justify-center items-center'>
        <Search_bar />
      </div>

      {/* first div */}
      <section className='CenterCol gap-10 mt-10 '>
        <div className="px-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            وفر وقتك ومجهودك.. سكنك الجامعي أصبح على بُعد نقرة واحدة
          </h1>
        </div>
        <div className="px-4 text-center">
          <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-500">استكشف مئات الشقق المتاحة و اختر ما يناسبك بكل سهولة
          </h2>
        </div>
       
        <button className='text-center MainColorBG rounded-full w-[10rem] h-[3rem] text-white'>تصفح الان</button>
      </section>
      {/* filter_bar section */}
      <section className='mt-[5rem] CenterCol gap-10'>

        <h1 className='text-xl font-medium MainColorText'>استخدم الفلتره الذكيه لتحديد ما يناسبك</h1>
        <div className='CenterCol px-20  h-[10rem]'>
          <Filter_bar />
        </div>
      </section>
      {/* الاعلى تقييما */}
      <div className='p-3'>
        <h1 className='flex justify-end text-2xl items-center my-5'>الاعلى تقييما<FaRegStar />
        </h1>
        {/* rooms */}
        <div className="flex justify-center items-center w-full min-h-screen">
          <Row className="  ">
            {[...Array(10)].map((_, i) => (
              <Col xs={12} sm={6} md={6} lg={4} key={i} className="my-10  flex items-center justify-center">
                <ApartmentCard />
              </Col>
            ))}
          </Row>
        </div>


        {/* button show more */}
        <div className='flex items-center justify-center mt-10'>
          <button className='text-center MainColorBG rounded-full w-[10rem] h-[3rem] text-white'>عرض المزيد </button>
        </div>
      </div>
      {/* اضيف حديثا */}
      <div className='p-3'>
        <h1 className='flex justify-end text-2xl items-center my-5'>اضيف حديثا<FaRegStar />
        </h1>
        {/* rooms */}
        <div className="flex justify-center items-center w-full min-h-screen">
          <Row className="  ">
            {[...Array(10)].map((_, i) => (
              <Col xs={12} sm={6} md={6} lg={4} key={i} className="my-10  flex items-center justify-center">
                <ApartmentCard />
              </Col>
            ))}
          </Row>
        </div>


        {/* button show more */}
        <div className='flex items-center justify-center mt-10'>
          <button className='text-center MainColorBG rounded-full w-[10rem] h-[3rem] text-white'>عرض المزيد </button>
        </div>
      </div>
    </div>
  )
}
