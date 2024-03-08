// react
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// hamburger
import { Squash as Hamburger } from "hamburger-react";

// images
import logo from "../assets/svgs/logo.svg";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("user");
    setUser(data);
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
    setUser("");
  };

  return (
    <div>
      <header className="relative bg-[#1a1a1a] text-white flex items-center justify-between gap-2 px-5 py-2  z-50  transition-all">
        <div className="flex items-center gap-8">
          <div>
            <Link to={"/"}>
              <img src={logo} alt="logo" className="w-12" />
            </Link>
          </div>

          <ul className="list-none hidden lg:flex items-center gap-5">
            <li>
              <Link className="nav-link" to={"/"}>
                Watch NFL+
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/"}>
                News
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/"}>
                Scores
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/"}>
                Schedule
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/"}>
                Network
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/"}>
                Team
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/"}>
                Stats{" "}
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/"}>
                Standings
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/"}>
                Community
              </Link>
            </li>{" "}
            <li>
              <Link className="nav-link" to={"/"}>
                Combine
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/analytics"}>
                Analytics
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm font-semibold">
            {user ? (
              <button
                className="bg-white text-form py-2 px-3 rounded-md"
                onClick={logOut}
              >
                Sign Out
              </button>
            ) : (
              <Link
                to={"/sign-in"}
                className="bg-white text-form py-2 px-3 rounded-md"
              >
                Sign In
              </Link>
            )}
          </div>

          <div className="block lg:hidden relative">
            <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
          </div>
        </div>
      </header>

      <ul className={isOpen ? "nav-menu" : "nav-menu active"}>
        <li>
          <Link className="nav-link" to={"/"}>
            Watch NFL+
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={"/"}>
            News
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={"/"}>
            Scores
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={"/"}>
            Schedule
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={"/"}>
            Network
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={"/"}>
            Team
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={"/"}>
            Stats{" "}
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={"/"}>
            Standings
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={"/"}>
            Community
          </Link>
        </li>{" "}
        <li>
          <Link className="nav-link" to={"/"}>
            Combine
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={"/analytics"}>
            Analytics
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
