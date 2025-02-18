import { Link } from 'react-router-dom';
import { GrGallery } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";
import { useState } from 'react';
const Navbar = ({show}) => {
    const [activePage, setActivePage] = useState("dashboard")

    return (
      <>
        <nav className={show ? "navbar active" : "navbar"}>
          <ul>
            <li>
              <Link
                to="/"
                className={(activePage === "dashboard") ? "active" : " "}
                onClick={() => setActivePage("dashboard")}
              >
                <span>
                  <MdDashboard />
                </span>
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={(activePage === "gallery") ? "active" : " "}
                onClick={() => setActivePage("gallery")}
              >
                <span>
                  <GrGallery />
                </span>
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/document"
                className={(activePage === "doc") ? "active" : " "}
                onClick={() => setActivePage("doc")}
              >
                <span>
                  <IoMdDocument />
                </span>
                Document
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
}
//  ;
export default Navbar;