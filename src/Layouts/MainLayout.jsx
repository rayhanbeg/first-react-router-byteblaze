import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
// import Blogs from "../Pages/Blogs";
// import Bookmarks from "../Pages/Bookmarks";
// import Home from "../Pages/Home";
const MainLayout = () => {
    return (
        <div>
            <div className="16">
                <Nav/>
            </div>
           <div>
            {/* home,blogs,bookmarks all are packed in Outlet */}
           <Outlet/>
           </div>
        </div>
    );
};

export default MainLayout;