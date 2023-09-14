// import React from 'react'
// import Image from "next/image";

// export default function about() {
//   return (
//     <div className='about'>
//    <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/shandea-hardin-1.jpeg"
//           alt="Image of Author"
//           width={350}
//           height={350}
//           priority
//         />
//     <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, nulla expedita. Eveniet explicabo sit saepe ad sunt harum, atque odit quam enim tempore laboriosam earum odio deleniti voluptatum perspiciatis repellat adipisci impedit quo tenetur cupiditate id in quisquam quod possimus! Natus hic obcaecati nihil quam adipisci perferendis vero, ab ad odio, impedit magnam eveniet corrupti harum vel modi dolorem quo consectetur dolorum et magni architecto. Assumenda nostrum qui asperiores. Sequi vero esse officiis facere consequuntur. Minus adipisci magnam vero aut dolore similique doloribus, consequatur placeat quisquam vitae repudiandae officiis quam ducimus, alias commodi! Eum, quaerat aperiam? Amet reiciendis eveniet expedita.</div>
//     <div>
//         <a href="https://newyorkcity.girlsintech.org/banyan-labs-an-agency-on-a-mission-to-enable-career-outcomes-for-formerly-incarcerated-people/"
//          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//          target="_blank"
//          rel="noopener noreferrer"
//         >
//             To read more about my work with Banyan Labs, click here
//         </a>
//     </div>

//     </div>
//   )
// }
import React from "react";
import Image from "next/image";

export default function about() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-8">
        <div className="mb-8 md:mb-0 w-250">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/shandea-hardin-1.jpeg"
            alt="Image of Author"
            width={500} // Adjust the width as per your preference
            height={500} // Adjust the height as per your preference
            priority
          />
        </div>
        <div className="w-100">
          <div className="mb-4">
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
              nulla expedita. Eveniet explicabo sit saepe ad sunt harum, atque
              odit quam enim tempore laboriosam earum odio deleniti voluptatum
              perspiciatis repellat adipisci impedit quo tenetur cupiditate id
              in quisquam quod possimus! Natus hic obcaecati nihil quam adipisci
              perferendis vero, ab ad odio, impedit magnam eveniet corrupti
              harum vel modi dolorem quo consectetur dolorum et magni
              architecto. Assumenda nostrum qui asperiores. Sequi vero esse
              officiis facere consequuntur. Minus adipisci magnam vero aut
              dolore similique doloribus, consequatur placeat quisquam vitae
              repudiandae officiis quam ducimus, alias commodi! Eum, quaerat
              aperiam? Amet reiciendis eveniet expedita.
            </div>
          </div>
          <div>
            <a
              href="https://newyorkcity.girlsintech.org/banyan-labs-an-agency-on-a-mission-to-enable-career-outcomes-for-formerly-incarcerated-people/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              To read more about my work with Banyan Labs, click here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
