import React from 'react';


const Card = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-80 rounded-xl border-2 border-indigo-500 bg-transparent p-6 text-center shadow-xl dark:bg-gray-800">
        <figure className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">
          <img src='https://avatars.githubusercontent.com/u/195007943?v=4' className='rounded-full w-20 h-20' />
          <figcaption className="sr-only">Kaushal, Web Developer</figcaption>
        </figure>
        <h2 className="mt-6 text-2xl font-bold text-indigo-600 dark:text-indigo-400">Kaushal</h2>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">Web Developer</p>
        <div className="flex items-center justify-center">
          <a href="#" className="rounded-full bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500">Contact</a>
          <a href="#" className="ml-6 rounded-full bg-gray-300 px-6 py-3 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600">Portfolio</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
