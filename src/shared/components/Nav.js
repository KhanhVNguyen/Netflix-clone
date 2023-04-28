import { useEffect, useState } from "react";
import "./Nav.scss"
const Nav = () => {
    const [top, setTop] = useState(false);

    const handleScroll = () => {
        setTop(window.scrollY > 100)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <div className={`nav p-3 shadow fixed w-full text-white z-10 ${top && 'bg-black'}`}>
            <div className="flex items-center">
                <img src="/logo.png" alt="" className="h-12 cursor-pointer" />
                <div className="flex">
                    <span className="">Home</span>
                    <span className="">TV Shows</span>
                    <span className="">Movies</span>
                    <span className="">New & Popular</span>
                    <span className="">My List</span>
                    <span className="">Browse by Languages</span>
                </div>
            </div>
        </div>
    )
};

export default Nav;
