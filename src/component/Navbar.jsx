import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Nanosoft chat</span>  
      <div className="user">
        <img src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=''/>
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar