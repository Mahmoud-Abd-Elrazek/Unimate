import { TfiSearch } from "react-icons/tfi";

export default function Search_bar() {
    return (
        <div className='flex items-center justify-between border border-[#CED4DA] w-[350px] h-[56px] rounded-full overflow-hidden px-[10px] py-[10px] gap-[23px] transition-colors duration-200 ease-in-out focus-within:border-[#DC3545]'>
            <input
                className='px-3 py-1 focus:outline-none flex-1 text-start text-[#1E1E1E] 
        placeholder:text-[#A0A0A0] placeholder:text-[14px] focus:text-[#1E1E1E] transition-colors duration-100 ease'
                placeholder='ابحث عن سكن مناسب لك'
                type='text'
                dir="rtl"
            />
            <div className='rounded-full bg-[#F1F3F4] w-[36px] h-[36px] flex justify-center items-center border border-[#CED4DA] transition-colors duration-150 ease hover:bg-[#E4E6E7]'>
                <TfiSearch className='w-[21px] h-[21px] cursor-pointer text-[#1E1E1E]' />
            </div>

        </div>
    )
}

// import { TfiSearch } from "react-icons/tfi";
// import { useState } from "react";

// export default function Search_bar() {
//     const [isFocused, setIsFocused] = useState(false);

//     return (
//         <div
//             className={`flex items-center justify-between border-2 border-[#CED4DA] h-[56px] rounded-full overflow-hidden px-[10px] py-[10px] gap-[23px] transition-all duration-300 ease-in-out ${
//                 isFocused ? "w-[381px] border-[#DC3545]" : "w-[280px]"
//             }`}
//         >
//             <input
//                 className='px-3 py-1 focus:outline-none flex-1 text-start text-[#1E1E1E] 
//                 placeholder:text-[#A0A0A0] placeholder:text-[14px] focus:text-[#1E1E1E] transition-colors duration-100 ease'
//                 placeholder='ابحث عن سكن مناسب لك'
//                 type='text'
//                 dir="rtl"
//                 onFocus={() => setIsFocused(true)}
//                 onBlur={() => setIsFocused(false)}
//             />
//             <div className='rounded-full bg-[#F1F3F4] w-[36px] h-[36px] flex justify-center items-center border border-[#CED4DA] transition-colors duration-150 ease hover:bg-[#E4E6E7]'>
//                 <TfiSearch className='w-[21px] h-[21px] cursor-pointer text-[#1E1E1E]' />
//             </div>
//         </div>
//     );
// }
