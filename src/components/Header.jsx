
import { MdOutlineHistory } from 'react-icons/md';
import logo from '../assets/Logo.png';
import { Button } from './ui/button';

function Header({ setOpen }) {
    return (
        <header className='flex justify-between'>

            {/* //LOGO */}
            <div className="p-1">
                <img src={logo} alt="Downloader-logo" className='w-15' />
            </div>

            {/* Navigation */}
            {/* <nav className='p-1 flex justify-center   items-center ' >
                <Button onClick={() => setOpen(true)}>
                    <MdOutlineHistory />
                    History
                </Button>
            </nav> */}
        </header>
    )
}

export default Header