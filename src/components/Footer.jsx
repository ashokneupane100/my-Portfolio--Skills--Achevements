import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-2 bg-blue-950 text-white">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
          <h1 className="text-3xl mb-8">Available on:</h1>
            <div className="flex space-x-10">
                 <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebook className="text-3xl cursor-pointer hover:text-blue-600" />
                    </a>
                    <a href="https://www.x.com/" target="_blank">
                      <FaTwitter className="text-3xl cursor-pointer hover:text-blue-600" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaInstagram className="text-3xl cursor-pointer hover:text-blue-600" />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedinIn className="text-3xl cursor-pointer hover:text-blue-600" />
                    </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
             
              <p className="text-sm">
                &copy; 2024 Ashok Neupane. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;