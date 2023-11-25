import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"
import About from "./components/About.jsx"
function App() {
    return (
        <>
            <div>
                <Navbar />
                <About />
                <Footer />
            </div>
            <div>
                Otra cosa
            </div>
        </>
        
    )
};

export default App;