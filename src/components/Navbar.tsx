import Link from "next/link"
import Menu from "./Menu"

const Navbar = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
            {/* MOBILE */}
            <div className='flex items-center justify-between'>
                <Link href='/'>
                    <div className="text-2xl tracking-wide">Carpios</div>
                </Link>
            <Menu/>
            </div>
            {/* BIGGER SCREENS */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* LEFT */}
                <div className="w-1/3">
                <Link href='/'>
                <div className="text-2xl tracking-wide">Carpios</div>
                </Link>
                </div>
                {/* RIGHT */}
                <div className="w-2/3"></div>
            </div>
        </div>
    );
};

export default Navbar;

