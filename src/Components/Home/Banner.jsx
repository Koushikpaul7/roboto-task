import React from 'react';
import '../Home/banner.css'
import {MdVerified} from 'react-icons/md'
import Playlist from './Playlist';
const Banner = () => {
    return (
        <div className='mt-8'>
           <div class="hero min-h-screen  background ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img style={{"width":"300px"}} src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl lg:ml-20 " />
    <div className='mr-20'>
      
      <p className='flex'><span className='mt-1 mr-1 text-blue-700'><MdVerified/></span> Verified artist</p>
      <h1 class="text-5xl font-bold">Taylor Swift</h1>
      <p class="py-6">45,345,3451 monthly listeners</p>
  
    </div>
  </div>
</div>
<Playlist></Playlist>
        </div>
    );
};

export default Banner;