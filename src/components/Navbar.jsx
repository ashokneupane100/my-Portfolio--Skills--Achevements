import pic from '../../public/photo.avif'

function Navbar() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div>
          <div className="flex space-x-2">
            <img src={pic} className='h-12 w-12 rounded-full' alt="" />
            <h1 className='font-semibold text-xl cursor-pointer'>
              Ashok <span className='text-green-800 text-2xl'>Neupane</span>
              <p className='text-sm'>Web/App Developer</p>
            </h1>
          </div>

          <div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Experience</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>


        <div></div>
      </div>
    </>
  );
}

export default Navbar;
