import React from 'react'

export default function Header() {
  return (
    <header className="bg-gray-200 p-4 flex items-center">
      <div className="mr-4 font-semibold">Products</div>
      <div className="flex-1 flex justify-center">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 border border-gray-400 rounded-l"
          />
          <button className="px-3 py-2 border border-gray-400 border-l-0 rounded-r bg-white">
            🔍
          </button>
        </div>
      </div>
      <div className="ml-4 text-2xl">🛒</div>
    </header>
  );
}
