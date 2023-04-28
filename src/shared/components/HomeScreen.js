import Banner from "./Banner";
import Nav from "./Nav";

const HomeScreen = () => {
    return (
        <div className="home-screen">
            {/* Nav */}
            <Nav />
            {/* Banner */}
            <Banner />
        </div>
    )
};

export default HomeScreen;
