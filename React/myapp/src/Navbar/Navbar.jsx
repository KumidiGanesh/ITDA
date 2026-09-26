import React from 'react'
// import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='flex bg-sky-300 w-full justify-evenly'>
            <li className='p-10 hover:bg-sky-800 hover:text-white text-shadow-lg'><a href="">Home</a></li>
            <li className='p-10 hover:bg-sky-800 hover:text-white'><a href="">About</a></li>
            <li className='p-10 hover:bg-sky-800 hover:text-white'><a href="">Conatct</a></li>
                        <li className='p-10 hover:bg-sky-800 hover:text-white'><a href="">Class</a></li>
            <li className='p-10 hover:bg-sky-800 hover:text-white'><a href="">Section</a></li>
            <li className='p-10 hover:bg-sky-800 hover:text-white'><a href="">Gallery</a></li>
                        <li className='p-10 hover:bg-sky-800 hover:text-white'><a href="">Groups</a></li>
            <li className='p-10 hover:bg-sky-800 hover:text-white'><a href="">Service</a></li>
            <li className='p-10 hover:bg-sky-800 hover:text-white'><a href="">Products</a></li>
                        <li className='p-10 hover:bg-sky-800 hover:text-white'><a href="">Health</a></li>
            <li className='p-10 hover:bg-sky-800 hover:text-white'><a href="">Sports</a></li>
            <li className='p-10 hover:bg-sky-800 hover:text-white'><a href="">News</a></li>
        </ul>
      </nav>

<div className="w-full h-screen bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ms4wxw3QzXk4gAuddD5MbiFemHCAQGhR_TEkc7MGhA&s=10')] bg-cover bg-center bg-no-repeat">
</div>
    </div>
  )
}

export default Navbar
