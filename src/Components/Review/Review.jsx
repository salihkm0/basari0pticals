// import { Rating } from "@mui/material";
// import React from "react";

// export const Review = () => {
//   return (
//     <div>
//       <section className="">
//         <div className="w-full max-w-7xl lg-6 mx-auto">
//           <div className="w-full">
//             <h1 className="text-[22px] text-gray-800 font-[500]">Reviews</h1>
//             <div className="flex gap-1 pb-11 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto mt-3">
//                 <div className="border w-auto px-5">
//                     4.5
//                 </div>
//               <div className="box flex flex-col gap-y-1">
//                 <div className="flex items-center w-full">
//                   <p className="font-medium text-md text-black mr-0.5">5</p>
//                   <svg
//                     width={10}
//                     height={10}
//                     viewBox="0 0 10 10"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clipPath="url(#clip0_12042_8589)">
//                       <path
//                         d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
//                         fill="#FBBF24"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_12042_8589">
//                         <rect width={10} height={10} fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                   <p className="h-1.5 w-full sm:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
//                     <span className="h-full w-[30%] rounded-3xl bg-amber-400 flex" />
//                   </p>
//                   <p className="font-medium text-md  text-black mr-0.5">989</p>
//                 </div>
//                 <div className="flex items-center w-full">
//                   <p className="font-medium text-md text-black mr-0.5">4</p>
//                   <svg
//                     width={10}
//                     height={10}
//                     viewBox="0 0 10 10"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clipPath="url(#clip0_12042_8589)">
//                       <path
//                         d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
//                         fill="#FBBF24"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_12042_8589">
//                         <rect width={10} height={10} fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                   <p className="h-1.5 w-full sm:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
//                     <span className="h-full w-[30%] rounded-3xl bg-amber-400 flex" />
//                   </p>
//                   <p className="font-medium text-md  text-black mr-0.5">989</p>
//                 </div>
//                 <div className="flex items-center w-full">
//                   <p className="font-medium text-md text-black mr-0.5">3</p>
//                   <svg
//                     width={10}
//                     height={10}
//                     viewBox="0 0 10 10"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clipPath="url(#clip0_12042_8589)">
//                       <path
//                         d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
//                         fill="#FBBF24"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_12042_8589">
//                         <rect width={10} height={10} fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                   <p className="h-1.5 w-full sm:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
//                     <span className="h-full w-[30%] rounded-3xl bg-amber-400 flex" />
//                   </p>
//                   <p className="font-medium text-md  text-black mr-0.5">989</p>
//                 </div>
//                 <div className="flex items-center w-full">
//                   <p className="font-medium text-md text-black mr-0.5">2</p>
//                   <svg
//                     width={10}
//                     height={10}
//                     viewBox="0 0 10 10"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clipPath="url(#clip0_12042_8589)">
//                       <path
//                         d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
//                         fill="#FBBF24"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_12042_8589">
//                         <rect width={10} height={10} fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                   <p className="h-1.5 w-full sm:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
//                     <span className="h-full w-[30%] rounded-3xl bg-amber-400 flex" />
//                   </p>
//                   <p className="font-medium text-md  text-black mr-0.5">989</p>
//                 </div>
//                 <div className="flex items-center w-full">
//                   <p className="font-medium text-md text-black mr-0.5">1</p>
//                   <svg
//                     width={10}
//                     height={10}
//                     viewBox="0 0 10 10"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g clipPath="url(#clip0_12042_8589)">
//                       <path
//                         d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
//                         fill="#FBBF24"
//                       />
//                     </g>
//                     <defs>
//                       <clipPath id="clip0_12042_8589">
//                         <rect width={10} height={10} fill="white" />
//                       </clipPath>
//                     </defs>
//                   </svg>
//                   <p className="h-1.5 w-full sm:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
//                     <span className="h-full w-[30%] rounded-3xl bg-amber-400 flex" />
//                   </p>
//                   <p className="font-medium text-md  text-black mr-0.5">989</p>
//                 </div>
//               </div>
//             </div>
//             <div className="pt-11 pb-8 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
//               <div className="flex items-center gap-3 mb-4">
//                 <Rating
//                   name="half-rating-read"
//                   defaultValue={4.5}
//                   precision={0.5}
//                   readOnly
//                 />
//               </div>
//               <h3 className="font-manrope font-semibold text-xl leading-9 text-black mb-6">
//                 Outstanding Experience!!!
//               </h3>
//               <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
//                 <div className="flex items-center gap-3">
//                   <img
//                     src="https://pagedone.io/asset/uploads/1704349572.png"
//                     alt="John image"
//                     className="w-8 h-8 rounded-full object-cover"
//                   />
//                   <h6 className="font-semibold text-md leading-8 text-indigo-600 ">
//                     John Watson
//                   </h6>
//                 </div>
//                 <p className="font-normal text-md leading-8 text-gray-400">
//                   Nov 01, 2023
//                 </p>
//               </div>
//               <p className="font-normal text-md leading-8 text-gray-400 max-xl:text-justify">
//                 One of the standout features of Pagedone is its intuitive and
//                 user-friendly interface. Navigating through the system feels
//                 natural
//               </p>
//             </div>
//             <div className="pt-8 max-xl:max-w-2xl max-xl:mx-auto">
//               {/* <div className="flex items-center gap-3 mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={30}
//                   height={30}
//                   viewBox="0 0 30 30"
//                   fill="none"
//                 >
//                   <g clipPath="url(#clip0_13624_2892)">
//                     <path
//                       d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
//                       fill="#FBBF24"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_13624_2892">
//                       <rect width={30} height={30} fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={30}
//                   height={30}
//                   viewBox="0 0 30 30"
//                   fill="none"
//                 >
//                   <g clipPath="url(#clip0_13624_2892)">
//                     <path
//                       d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
//                       fill="#FBBF24"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_13624_2892">
//                       <rect width={30} height={30} fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={30}
//                   height={30}
//                   viewBox="0 0 30 30"
//                   fill="none"
//                 >
//                   <g clipPath="url(#clip0_13624_2892)">
//                     <path
//                       d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
//                       fill="#FBBF24"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_13624_2892">
//                       <rect width={30} height={30} fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={30}
//                   height={30}
//                   viewBox="0 0 30 30"
//                   fill="none"
//                 >
//                   <g clipPath="url(#clip0_13624_2892)">
//                     <path
//                       d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
//                       fill="#FBBF24"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_13624_2892">
//                       <rect width={30} height={30} fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={30}
//                   height={30}
//                   viewBox="0 0 30 30"
//                   fill="none"
//                 >
//                   <g clipPath="url(#clip0_13624_2892)">
//                     <path
//                       d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
//                       fill="#FBBF24"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_13624_2892">
//                       <rect width={30} height={30} fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//               </div> */}
//               <div className="flex items-center gap-3 mb-4">
//                 <Rating
//                   name="half-rating-read"
//                   defaultValue={4.5}
//                   precision={0.5}
//                   readOnly
//                 />
//               </div>

//               <h3 className="font-manrope font-semibold text-xl leading-9 text-black mb-6">
//                 Pagedone's design system seamlessly bridges the gap between
//                 designers and developers!
//               </h3>
//               <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
//                 <div className="flex items-center gap-3">
//                   <img
//                     src="https://pagedone.io/asset/uploads/1704351103.png"
//                     alt="Robert image"
//                     className="w-8 h-8 rounded-full object-cover"
//                   />
//                   <h6 className="font-semibold text-md leading-8 text-indigo-600">
//                     Robert Karmazov
//                   </h6>
//                 </div>
//                 <p className="font-normal text-md leading-8 text-gray-400">
//                   Nov 01, 2023
//                 </p>
//               </div>
//               <p className="font-normal text-md leading-8 text-gray-400 max-xl:text-justify">
//                 Pagedone doesn't disappoint when it comes to the variety and
//                 richness of its design components. From pre-built templates to
//                 customizable elements.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

import { Rating } from "@mui/material";
import React from "react";

export const Review = () => {
  const overallRating = 4.5;
  const totalReviews = 1200;

  return (
    <div className="w-full">
      <section className="">
        <div className="w-full max-w-7xl lg-6 mx-auto">
          <div className="w-full">
            <h1 className="text-[22px] text-gray-800 font-[500]">Reviews</h1>
            {/* Overall rating section */}
            <div className="flex items-center gap-3 mt-4 ">
              <Rating value={overallRating} precision={0.5} readOnly />
              <p className="text-xl text-gray-800 font-semibold">
                {overallRating}
              </p>
              <p className="text-sm text-gray-500">({totalReviews} reviews)</p>
            </div>

            {/* Rating breakdown section */}
            <div className="flex gap-1 pb-11 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto mt-3">
              <div className="box flex flex-col gap-y-1">
                <div className="flex items-center w-full">
                  <p className="font-medium text-lg text-black mr-0.5 ">5</p>
                  <svg
                    width={30}
                    height={30}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="px-1"
                  >
                    <g clipPath="url(#clip0_12042_8589)">
                      <path
                        d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                        fill="#FBBF24"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_12042_8589">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="h-1.5 w-full min-w-[170px] sm:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                    <span className="h-full w-[70%] rounded-3xl bg-amber-400 flex" />
                  </p>
                  <p className="font-medium text-lg text-black mr-0.5">102</p>
                </div>
                <div className="flex items-center w-full">
                  <p className="font-medium text-lg text-black mr-0.5 ">4</p>
                  <svg
                    width={30}
                    height={30}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="px-1"
                  >
                    <g clipPath="url(#clip0_12042_8589)">
                      <path
                        d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                        fill="#FBBF24"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_12042_8589">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="h-1.5 w-full min-w-[170px] sm:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                    <span className="h-full w-[30%] rounded-3xl bg-amber-400 flex" />
                  </p>
                  <p className="font-medium text-lg text-black mr-0.5">28</p>
                </div>
                <div className="flex items-center w-full">
                  <p className="font-medium text-lg text-black mr-0.5 ">3</p>
                  <svg
                    width={30}
                    height={30}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="px-1"
                  >
                    <g clipPath="url(#clip0_12042_8589)">
                      <path
                        d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                        fill="#FBBF24"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_12042_8589">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="h-1.5 w-full min-w-[170px] sm:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                    <span className="h-full w-[50%] rounded-3xl bg-amber-400 flex" />
                  </p>
                  <p className="font-medium text-lg text-black mr-0.5">40</p>
                </div>
                <div className="flex items-center w-full">
                  <p className="font-medium text-lg text-black mr-0.5 ">2</p>
                  <svg
                    width={30}
                    height={30}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="px-1"
                  >
                    <g clipPath="url(#clip0_12042_8589)">
                      <path
                        d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                        fill="#FBBF24"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_12042_8589">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="h-1.5 w-full min-w-[170px] sm:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                    <span className="h-full w-[26%] rounded-3xl bg-amber-400 flex" />
                  </p>
                  <p className="font-medium text-lg text-black mr-0.5">22</p>
                </div>
                <div className="flex items-center w-full">
                  <p className="font-medium text-lg text-black mr-0.5 ">1</p>
                  <svg
                    width={30}
                    height={30}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="px-1"
                  >
                    <g clipPath="url(#clip0_12042_8589)">
                      <path
                        d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                        fill="#FBBF24"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_12042_8589">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="h-1.5 w-full min-w-[170px] sm:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                    <span className="h-full w-[20%] rounded-3xl bg-amber-400 flex" />
                  </p>
                  <p className="font-medium text-lg text-black mr-0.5">15</p>
                </div>
              </div>
            </div>
            <hr />

            {/* All Reviews */}

            <div className="py-2 mt-4">
              <div className="flex items-center justify-between">
                <p className="font-bold ">All Reviews (1)</p>
                <p className="font-bold text-blue-500 cursor-pointer">
                  + Add Review
                </p>
              </div>
              <div className="w-full mt-5">
                <div className="px-4 p-2">
                  <h3 className="font-[700] uppercase">Syam Raju</h3>
                  <div className="flex items-center gap-2 py-1">
                    <Rating value={4} precision={0.5} readOnly />
                    <p className="text-gray-500 text-sm">2022-01-01</p>
                    <p className="text-gray-500 text-sm">12:00 PM</p>
                  </div>
                  <p className="text-gray-700 text-sm font-[600] mt-2">
                    This is a sample review. This is a sample review. This is a
                  </p>
                </div>
                <div className="px-4 p-2">
                  <h3 className="font-[700] uppercase">Salih Km</h3>
                  <div className="flex items-center gap-2 py-1">
                    <Rating value={5} precision={0.5} readOnly />
                    <p className="text-gray-500 text-sm">2022-01-01</p>
                    <p className="text-gray-500 text-sm">12:00 PM</p>
                  </div>
                  <p className="text-gray-700 text-sm font-[600] mt-2">
                    Good product
                  </p>
                </div>
                <div className="flex items-center justify-center mt-6">
                  <button className="rounded px-3 py-1 font-[500] bg-orange-500 text-white">
                    Load more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
