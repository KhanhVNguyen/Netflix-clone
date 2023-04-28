import "./Banner.scss";

const Banner = () => {

    return (
        <div className="banner w-full bg-black">
            {/* <img src="https://i.imgur.com/e1hLQ2m.png" alt="" className="h-full w-full" /> */}
            {/* <div
                className="banner bg-no-repeat bg-center h-full bg-cover object-contain
        bg-[url('https://i.imgur.com/e1hLQ2m.png')]">
            </div> */}
            <div className="flex flex-col text-white w-56 absolute left-[0.75rem] top-2.5">
                <div className="flex">
                    <img className="logo-icon" src="" alt="" />
                    <span>SERIES</span>
                </div>
                <div className="info-wrapper">
                    <h3>Watch the Limited Series Now</h3>
                    <span className="info-message text-left">A new nurse at a hospital begins to suspect her colleague's desire for attention may be tied to a series of patient deaths. Based on a true story.</span>
                </div>
                <h1 className="uppercase tracking-wider text-5xl">The nurse</h1>
                <div className="flex">
                    <button className="px-[2rem] py-1 bg-white text-black rounded outline-none">Play</button>
                    <button>More Info</button>
                </div>
            </div>
        </div>
    )
};

export default Banner;
