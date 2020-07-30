import React from 'react'

const SearchBar = () => {
  return (
    <nav id="header" class="fixed w-full">

      <div class="relative w-full z-10 top-0 bg-gray-200 border-b border-grey-light">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
          <div class="pl-4 flex items-center">

            <div id="search-toggle" class="search-icon cursor-pointer pl-6">
              <svg class="fill-current pointer-events-none text-grey-darkest w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </div>

          </div>

        </div>
      </div>

      <div class="block relative w-full bg-white shadow-xl" id="search-content">
        <div class="container mx-auto py-4 text-black">
          <input id="searchfield" type="search" placeholder="Search..." autofocus="autofocus" class="w-full text-grey-800 transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-xl lg:text-2xl" />
        </div>
      </div>

    </nav>
  )
}

export default SearchBar
