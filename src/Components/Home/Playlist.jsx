import React from 'react';

const Playlist = () => {
  return (
    <div>
      <div className='flex justify-between mx-8 mb-4 mt-10'>
        <h1 className='text-xl font-bold'>Popular</h1>
        <p>See all</p>
      </div>
      <div class="overflow-x-auto">
        <table class="table w-full">

          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Playing</th>
              <th>Time</th>
              <th>Album</th>
            </tr>
          </thead>
          <tbody>

            <tr class="hover hover:border-l-2 border-red-600 hover:font-bold">
              <th>1</th>
              <td>Wildest Dream (Taylor version)</td>
              <td>63,63,7378</td>
              <td>3:40</td>
              <td>1998</td>
            </tr>

            <tr class="hover hover:border-l-2 border-red-600 hover:font-bold">
              <th>2</th>
              <td>Black space</td>
              <td>63,698,978</td>
              <td>3:40</td>
              <td>1998</td>
            </tr>

            <tr class="hover hover:border-l-2 border-red-600 hover:font-bold">
              <th>3</th>
              <td>Cardigan </td>
              <td>38,36,932</td>
              <td>4:87</td>
              <td>folklor</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Playlist;