import youtube_icon from "../assets/icons/youtube.svg";
import facebook_icon from "../assets/icons/facebook.svg";
import instagram_icon from "../assets/icons/instagram.svg";
import logo from "../assets/video-downloader-logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function Footer() {
  return (
    <footer className="flex justify-center flex-col    text-center items-center ">
      <div className="w-11/12 bg-gradient-to-br to-blue-300 to bg-purple-300 rounded-2xl">
        <div className="flex  flex-col lg:flex-row  border-b-2  w-full ">
          <div className=" p-4 flex flex-col items-center lg:items-start lg:w-1/4">
            {/* About Company Section  */}
            <div className="mb-4 flex flex-col items-center lg:items-start">
              <div className="flex flex-col md:flex-row items-center justify-center">
                <img src={logo} alt="Downloader-logo " className="w-15" />
                <p className="font-extrabold text-lg text-gray-800">
                  DownloadMe
                </p>
              </div>
              <p className="font-medium lg:text-start text-gray-500 w-3/4 ">
                Download videos from your favorite platform quickly and easily
              </p>
            </div>

            <div className="flex ">
              <Avatar className="border-2 mr-1">
                <AvatarImage src={youtube_icon} alt="youtube logo" />
                <AvatarFallback>YT</AvatarFallback>
              </Avatar>

              <Avatar className="border-2 mr-1">
                <AvatarImage src={facebook_icon} alt="facebook logo" />
                <AvatarFallback>FB</AvatarFallback>
              </Avatar>

              <Avatar className="border-2 mr-1">
                <AvatarImage src={instagram_icon} alt="instagram logo" />
                <AvatarFallback>YT</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className=" p-4 lg:w-1/4 lg:text-start lg:pt-8">
            <h3 className="font-bold">Quick Links</h3>
            <ul className="text-gray-500 text-md">
              <li>Home</li>
              <li>Download</li>
              <li>How To Use</li>
              <li>Features</li>
            </ul>
          </div>

          <div className=" p-4 lg:w-1/4 lg:text-start lg:pt-8">
            <h3 className=" font-bold">Support</h3>
            <ul className="text-gray-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div className="  p-4 lg:w-1/4 lg:text-start lg:pt-8">
            <h3>Report a bug</h3>
          </div>
        </div>

        <div className="flex flex-row justify-between  px-4 py-4 text-gray-500  w-full ">
          <div>
            <p>2025 DownloadMe. All rights reserved</p>
          </div>

          {/* <div className='flex flex-row hidden '>
    <p className='border-r-2 px-2'>Privacy</p>
    <p className='px-2'>Terms</p>
</div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
