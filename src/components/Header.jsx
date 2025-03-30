
import { MdOutlineHistory } from 'react-icons/md';
import logo from '../assets/video-downloader-logo.svg';
import { Button } from './ui/button';

function Header({ setOpen }) {
    return (
        <header className='flex flex-row h-20 fixed w-full  z-20'>
            <div className='w-full flex flex-row justify-between rounded-2xl   bg-gray-50/40  backdrop-blur-md'>
                {/* //LOGO */}
                <div className="p-1 flex items-center  ">
                    <img src={logo} alt="Downloader-logo " className='w-15 ' />
                    <div>
                        <p className='font-extrabold text-2xl text-gray-800'>
                            DownloadMe
                        </p>
                    </div>
                </div>


                <div className=" flex  items-center w-60 justify-center font-bold ">Beta Version</div>

               
            </div>
            
        </header >
    )
}

export default Header