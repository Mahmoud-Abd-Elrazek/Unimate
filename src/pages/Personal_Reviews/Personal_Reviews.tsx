// import React from 'react'
import RatingComponent from "../../components/RatingComponent/ratingComponent"
export default function Personal_Reviews() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-extrabold text-gray-500 dark:text-[white]">تقييماتى</h1>
      <div className="p-5 w-full">
        <div className="overflow-x-auto rounded-xl shadow-md w-full min-h-[30rem] ">
          <table className="w-full text-right border-collapse ">
            <thead className="h-[4rem] ">
              <tr className="bg-gray-300 text-gray-700 dark:bg-[#1D1D1D]">
                <th className="px-4 py-2 border-b dark:text-[white]">التقيمات واالتعليقات</th>
              </tr>
            </thead>
            <tbody className="flex flex-col gap-4 mt-1 max-h-[400px] overflow-y-auto scrollbar-hide pl-[30px] pr-[30px]">
              <RatingComponent rating={5} timeAgo="يومين" />
              <hr className="w-full border-t border-gray-300"/>
              <RatingComponent rating={4} timeAgo="3 أيام" />
              <hr className="w-full border-t border-gray-300"/>
              <RatingComponent rating={3} timeAgo="5 أيام" />
              <hr className="w-full border-t border-gray-300"/>
              <RatingComponent rating={2} timeAgo="7 أيام" />
              <hr className="w-full border-t border-gray-300"/>
              <RatingComponent rating={2} timeAgo="7 أيام" />
              <hr className="w-full border-t border-gray-300"/>
              <RatingComponent rating={2} timeAgo="7 أيام" />
              <hr className="w-full border-t border-gray-300"/>
              <RatingComponent rating={2} timeAgo="7 أيام" />
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
