import Navbar from "./components/Navbar.jsx";
import Animation from "./components/Animation.jsx";
import Card from "./components/Card.jsx";
import Designthird from "./components/Designthird.jsx";
import Design from "./components/Design.jsx";
import Footer from "./components/Footer.jsx"
function HomePage() {

    return (
        <>
        <Navbar/>
        <Animation/>
        <Card/>
        <Designthird/>
        <Design/>
        <Footer/>
            {/* <h1 className="text-3xl font-bold underline">
                HomePAge
            </h1> */}
        </>
    )
}

export default HomePage;
