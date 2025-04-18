import React from 'react'

const SearchBar:React.FC=()=>{
  return (
    <main className=" text-center flex flex-col bg-gray-900 items-center pt-32 px-4">
       
        <div className="flex flex-col items-center text-center px-4 w-full max-w-3xl">
            <p className="mb-6 text-gray-300 font-medium text-center max-w-3xl ">
                7 days free trial - no card required. Just $4.99 a month after. Cancel anytime.
            </p>
            <p className="mb-6 text-4xl text-gray-100 font-medium text-center max-w-4xl ">
                You are one search away from the perfect movie.
            </p>
          
            <input
                type="text"
                placeholder="What are you watching today?"
                className="w-full max-w-3xl p-4 
                text-xl rounded-3xl shadow-lg
                focus:outline-none focus:ring-4
                focus:ring-blue-300  bg-neutral-500" />
                
        </div>
    </main>
  )
}

export default SearchBar;