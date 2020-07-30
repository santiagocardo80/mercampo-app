import React from 'react'

const Banner = ({ title }) => {
  return (
    // <nav id="store" className="w-full z-30 top-0 px-6 py-1">
    //   <div className="w-full container mx-auto flex flex-wrap items-center justify-center md:justify-between mt-0 py-3">

    //     <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl" href="/">
    //       <span role="img" aria-label="frutas">{title}</span>
    //     </a>

    //     <div className="flex items-center py-5 md:py-0" id="store-nav-content">

    //       <a className="pl-3 inline-block no-underline hover:text-black" href="/">
    //         <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24"
    //           height="24" viewBox="0 0 24 24">
    //           <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
    //         </svg>
    //       </a>

    //       <a className="pl-3 inline-block no-underline hover:text-black" href="/">
    //         <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24"
    //           height="24" viewBox="0 0 24 24">
    //           <path
    //             d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
    //         </svg>
    //       </a>

    //     </div>
    //   </div>
    //   <p className="text-sm text-gray-700 text-center md:text-left">Apoya tu economía local descubriendo cientos de productos frescos y asequibles</p>
    // </nav>
    <div className="bg-gray-200 rounded-md">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center lg:text-left">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          {title}
          <br />
        </h2>
        <p className="font-extrabold tracking-tight text-green-500 md:text-4xl md:leading-10">Apoya tu economía local descubriendo cientos de productos frescos y asequibles.</p>
        {/* <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div className="inline-flex rounded-md shadow">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Learn more
            </a>
          </div>
        </div> */}
      </div>
    </div>

  )
}

export default React.memo(Banner)
