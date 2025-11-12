import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-full bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 transition-colors">
          <figure>
            <img
              src={item.image}
              alt={item.name}
              className="rounded-t-lg object-cover"
            />
          </figure>

          <div className="card-body text-gray-900 dark:text-gray-100">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>

            <p className="dark:text-gray-300">{item.title}</p>

            <div className="card-actions flex justify-between items-center mt-2">
              <div className="badge badge-outline dark:border-gray-400 dark:text-gray-300">
                ${item.price}
              </div>
              <div className="cursor-pointer px-2 py-1 rounded-full border hover:bg-pink-500 hover:text-white p-2 duration-200 border-gray-300 dark:border-gray-500 transition-all">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;




// import React from "react";

// function Cards({ item }) {
//   return (
//     <>
//       <div className="mt-4 my-3 p-3">
//         <div className="card w-full bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
//           <figure>
//             <img src={item.image} alt={item.name} />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">
//               {item.name}
//               <div className="badge badge-secondary">{item.category}</div>
//             </h2>
//             <p>{item.title}</p>
//             <div className="card-actions flex justify-between">
//               <div className="badge badge-outline">${item.price}</div>
//               <div className="cursor-pointer px-2 py-1 rounded-full border-{2px} hover:bg-pink-500 hover:text-white p-2 duration-200">
//                 Buy Now
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;
