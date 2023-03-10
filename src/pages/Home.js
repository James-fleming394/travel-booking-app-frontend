import Featured from "../components/Featured";
import PropertyList from "../components/PropertyList";
import FeaturedProperties from "../components/FeaturedProperty";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MailList from "../components/MailList";
import Header from "../components/Header";

const Home = () =>{
    return (
        <div>
            <Navbar />
            <Header/>
        <div className="homeContainer">
            <Featured/>
            <h1 className="homeTitle">Browse by Property Type</h1>
            <PropertyList/>
            <h1 className="homeTitle">Featured Stays</h1>
            <FeaturedProperties/>
            <MailList/>
            <Footer/> 
        </div>
        </div>
    );
}

export default Home;