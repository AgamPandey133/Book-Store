import React from "react";
import banner from "/banner.png";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      {/* LEFT */}
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
        {/* reduce big spacing: use smaller vertical spacing */}
        <div className="space-y-12">
          <h1 className="text-4xl font-bold">
            Hello, Welcome here to learn something{" "}
            <span className="text-pink-500">new everything!!!</span>
          </h1>

          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* group input + button with small gap */}
          {/* <div className="flex flex-col gap-2 max-w-md"> */}
          <div className="flex flex-col gap-2 max-w-md">
            <label className="flex items-center">
              <svg
                className="h-5 opacity-50 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="mail@site.com"
                required
                className="border rounded px-3 py-2 w-full"
              />
            </label>

            {/* small gap between input and button */}
            <button className="btn mt-6 btn-active btn-secondary self-start">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      {/* <div className="order-1 w-full md:w-1/2">
        <img src={banner} alt="banner" className="rounded-lg w-120 h-120 mt-5" />
      </div> */}
      <div className="order-1 w-full md:w-1/2">
        <img
          src="banner.png"
          alt="banner"
          className="rounded-lg w-full h-auto mt-5 object-cover"
        />
      </div>
    </div>
  );
}

export default Banner;

// import React from "react";
// import banner from "../../public/banner.jpg"

// function Banner() {
//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
//         <div className="w-full md:w-1/2 mt-12 mt-32">
//           <div className="space-y-12">
//             <h1 className="text-4xl font-bold">
//               Hello, Welcome here to learn something{" "}
//               <span className="text-pink-500">new everything!!!</span>{" "}
//             </h1>
//             <p className="text-xl">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </p>

//           <label className="input validator">
//             <svg
//               className="h-[1em] opacity-50"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               <g
//                 strokeLinejoin="round"
//                 strokeLinecap="round"
//                 strokeWidth="2.5"
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <rect width="20" height="16" x="2" y="4" rx="2"></rect>
//                 <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//               </g>
//             </svg>
//             <input type="email" placeholder="mail@site.com" required />
//           </label>
//           <div className="validator-hint hidden">Enter valid email address</div>
//         {/* </div> */}
//         </div>
//         <button className="btn mt-6 btn-active btn-secondary">Secondary</button>
//         </div>

//         <div className="w-full md:w-1/2">
//         <img src={banner} alt=""/>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Banner;
