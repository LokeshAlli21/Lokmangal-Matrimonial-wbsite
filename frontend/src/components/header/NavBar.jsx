import React from "react";
import { Container, Logo } from "../index";
import { Link } from "react-router-dom";
import Icons from "../icons/Icons";

function NavBar() {
  return (
    <div
      className="absolute z-3 w-full py-[15px] bg-white shadow-md float-left transition-all duration-400 ease-in-out
    before:content-[''] before:fixed before:top-[125px] before:left-0 
    before:w-[188px] before:h-[188px] 
    before:bg-[url('/images/leaf/5.png')] before:bg-no-repeat 
    before:bg-[length:300px] before:bg-[position:-78px_-70px] before:box-border

    after:content-[''] after:fixed after:bottom-0 after:right-0 
    after:w-[123px] after:h-[300px] 
    after:bg-[url('/images/leaf/8.png')] after:bg-no-repeat 
    after:bg-[length:121px] after:bg-[position:center_right] after:box-border "
    >
      <Container noBackground noPaddingY>
        <nav className=" items-center  px-3 flex-wrap -mx-3 mt-0">
          {/* Logo */}
          {/* <div>
            <Link to="/">
              <Logo width="70px" logoPath={"/sample-logo.png"} />
            </Link>
          </div> */}

                      <div class="logo left-0 justify-between flex items-center float-left w-72">        
                      <div class="menu relative block text-center text-[25px] w-10 h-10 cursor-pointer bg-yellow-500 rounded-full 
                      z-10 ping
                      ">
                          <i class="absolute w-5 h-[2px] bg-white left-[10px] top-[11px] transition-all
                          w-5 h-0.5 inline-block float-left top-[0.69rem] left-[0.63rem] absolute cursor-pointer"></i>
                          <i class="absolute w-5 h-[2px] bg-white left-[10px] top-[18px] scale-100 transition-all"></i>
                          <i class="absolute w-5 h-[2px] bg-white left-[10px] top-[25px] transition-all"></i>
                      </div>
                        <a href="https://shadi.lokmangal.website/" class="logo-brand">
                        <img src="https://shadi.lokmangal.website/assets/images/lokmangal-foundation.png" alt="" loading="lazy" class="ic-logo"/></a>
                    </div>

          {/* Navigation */}
          <ul className="flex space-x-4 relative items-center justify-center  m-0 w-[calc(100%_-_450px)] float-left py-0  px-10">
            {/* Explore Menu */}
            <li className="relative group">
              <span className="cursor-pointer font-medium text-sm leading-[40px]  uppercase hover:text-gray-600 flex items-center">
                Explore
                <Icons.ChevronDown className="ml-2 text-sm transition-transform duration-300 group-hover:rotate-180" />
              </span>
              {/* Dropdown */}
              <div
                className="fixed w-full top-[90px] p-[30px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute left-[-14px] top-[30px] py-[10px] shadow-[0_14px_11px_1px_rgba(0,0,0,0.06)] rounded-[5px] ease-in-out translate-y-[20px] origin-top scale-0 group-hover:scale-100 group-hover:translate-y-0
              
              
              
               bg-white  shadow-[0_14px_11px_1px_rgba(0,0,0,0.06)] rounded-[5px] transition-all duration-200 ease-in-out origin-top animate-[growOut_0.34s_ease_forwards]
"
              >
                <div className="p-6 grid grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Explore category</h4>
                    <ul className="flex flex-row">
                      <li>
                        <Link
                          to="all-profiles.html"
                          className="block p-3 hover:bg-gray-100"
                        >
                          Browse profiles <span>1200+ Verified profiles</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="wedding.html"
                          className="block p-3 hover:bg-gray-100"
                        >
                          Wedding page <span>Make reservation</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="services.html"
                          className="block p-3 hover:bg-gray-100"
                        >
                          All Services <span>Lorem ipsum dummy</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="plans.html"
                          className="block p-3 hover:bg-gray-100"
                        >
                          Join Now <span>Lorem ipsum dummy</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* All Pages Menu */}
            <li className="relative group">
              <span className="cursor-pointer font-medium text-sm leading-[40px] uppercase hover:text-gray-600 flex items-center">
                All Pages
                <Icons.ChevronDown className="ml-2 text-sm transition-transform duration-300 group-hover:rotate-180" />
              </span>
              {/* Dropdown */}
              <div className="absolute left-[-14px] top-[30px] bg-white py-[10px] shadow-[0_14px_11px_1px_rgba(0,0,0,0.06)] rounded-[5px] transition-all duration-200 ease-in-out translate-y-[20px] origin-top opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 fixed w-full left-0 top-[90px] p-[30px]">
                <div className="p-6 grid grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Page Sets 1</h4>
                    <ul>
                      <li>
                        <Link
                          to="all-profiles.html"
                          className="block p-3 hover:bg-gray-100"
                        >
                          All profiles
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="profile-details.html"
                          className="block p-3 hover:bg-gray-100"
                        >
                          Profile details
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="services.html"
                          className="block p-3 hover:bg-gray-100"
                        >
                          Our Services
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Page Sets 2</h4>
                    <ul>
                      <li>
                        <Link
                          to="plans.html"
                          className="block p-3 hover:bg-gray-100"
                        >
                          Pricing plans
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="login.html"
                          className="block p-3 hover:bg-gray-100"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="sign-up.html"
                          className="block p-3 hover:bg-gray-100"
                        >
                          Sign-up
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Page Sets 3</h4>
                    <ul>
                      <li>
                        <Link
                          to="contact.html"
                          className="block p-3 hover:bg-gray-100"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="about.html"
                          className="block p-3 hover:bg-gray-100"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="blog.html"
                          className="block p-3 hover:bg-gray-100"
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">User Dashboard</h4>
                    <ul>
                      <li>
                        <Link
                          to="user-dashboard.html"
                          className="block p-3 hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="user-profile.html"
                          className="block p-3 hover:bg-gray-100"
                        >
                          My profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="user-chat.html"
                          className="block p-3 hover:bg-gray-100"
                        >
                          Chat lists
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className=" items-center">
              <span className="cursor-pointer font-medium text-sm leading-[40px]  uppercase hover:text-gray-600 flex items-center">
                <Icons.MagnifyingGlass className="mr-1 text-sm" />
                Search
              </span>
            </li>

            <li>
              <Link to="register" className="py-2 px-4 hover:text-gray-600">
                <span className="cursor-pointer font-medium text-sm leading-[40px]  uppercase hover:text-gray-600">
                  Register
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="https://shadi.lokmangal.website/login"
                className="py-2 px-4 hover:text-gray-600"
              >
                <span className="cursor-pointer font-medium text-sm leading-[40px]  uppercase hover:text-gray-600">
                  Login
                </span>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-black focus:outline-none">
              <Icons.Bars className="text-gray-600 text-2xl" />
            </button>
          </div>
        </nav>
      </Container>
    </div>
  );
}

export default NavBar;
