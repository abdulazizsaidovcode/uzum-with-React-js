import React from "react";

function NavbarInput() {

   return (<div>
        <div class="max-w-lg mx-auto">
            <div class="flex">
                <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                <div class="relative w-ful">
                    <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg rounded-l-lg border-s-gray-50 border-l-t-2 border border-gray-200   dark:border-s-gray-200   dark:placeholder-gray-400 dark:text-white" placeholder="Search " />
                    <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-gray-700 bg-gray-100 rounded-e-lg border focus:outline-none">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </div>

    </div>)

}
export default NavbarInput;