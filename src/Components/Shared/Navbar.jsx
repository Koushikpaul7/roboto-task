import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
const Navbar = () => {
    return (
        <div className='mt-5 flex'>
            <div className='navbar-start'>
            <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            
           <div className='navbar-end'>
             <label htmlFor="email" className="relative text-gray-400 focus-within:text-gray-600 block">

     <AiOutlineSearch className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" />

      <input type="email" name="email" id="email" placeholder="Tailor Swift" className="form-input w-9/12 pl-16 py-3 rounded-full bg-base-200"/>
</label>
           </div>
        </div>
    );
};

export default Navbar;