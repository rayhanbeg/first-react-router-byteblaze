import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
// import Blogs from "../Pages/Blogs";
// import Bookmarks from "../Pages/Bookmarks";
// import Home from "../Pages/Home";
const MainLayout = () => {
    return (
        <div>
            <div className="h-14">
                <Nav/>
            </div>
           <div className="min-h-[calc(100vh-112px)]">
            {/* home,blogs,bookmarks all are packed in Outlet */}
           <Outlet/>
           </div>
           <Footer/>
        </div>
    );
};

export default MainLayout;