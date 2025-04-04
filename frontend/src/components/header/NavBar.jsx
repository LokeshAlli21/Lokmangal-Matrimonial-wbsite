import React, { useEffect, useState } from "react";
import { Container, Logo } from "../index";
import { Link } from "react-router-dom";
import Icons from "../icons/Icons";

function NavBar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div
  className={`z-3 w-full  py-[15px] bg-white shadow-md float-left 
    before:content-[''] before:fixed before:top-[125px] before:left-0 
    before:w-[188px] before:h-[188px] before:bg-[length:300px] before:bg-[position:-78px_-77px]
    before:bg-[url('/images/leaf/5.png')]  before:box-border before:z-50
      
    before:bg-[url('/images/leaf/5.png')] before:bg-no-repeat 
    /* Max-width: 1100px */
    max-[1450px]:before:w-[140px] max-[1450px]:before:h-[123px] max-[1450px]:before:bg-[length:190px] max-[1450px]:before:bg-[position:-33px_-43px]

    /* Max-width: 992px */
    max-[1100px]:before:w-[125px] max-[1100px]:before:h-[107px] max-[1100px]:before:bg-[length:152px] max-[1100px]:before:bg-[position:-25px_-24px]

    /* Max-width: 992px */
    max-[992px]:before:w-[100px] max-[992px]:before:h-[130px] max-[992px]:before:bg-[length:144px] max-[992px]:before:bg-[position:-33px_-43px]

    after:content-[''] after:fixed after:bottom-0 after:right-0 
    after:w-[123px] after:h-[300px]   
    after:bg-[url('/images/leaf/8.png')] after:bg-no-repeat 
    after:bg-[length:121px] after:bg-[position:center_right] after:box-border after:z-50 
    
    
    max-[1450px]:after:w-[82px] max-[1450px]:after:h-[244px] max-[1450px]:after:bg-[length:90px] max-[1450px]:after:bg-[position:-1px_6px] 

    max-[992px]:after:w-[49px] max-[992px]:after:h-[135px] max-[992px]:after:bg-[length:50px] max-[992px]:after:bg-[position:-1px_6px]"
    
     ${isFixed ? "fixed max-[900px]:fixed top-0 animate-menuact shadow-lg z-50" : "relative"}
  `}
>

      <Container noBackground noPaddingY className="">
        <nav className=" items-center  px-3 flex-wrap -mx-3 mt-0">
          {/* Logo */}
          {/* <div>
            <Link to="/">
              <Logo width="70px" logoPath={"/sample-logo.png"} />
            </Link>
          </div> */}

                      <div class="logo left-0 justify-between flex items-center float-left w-72 max-[450px]:w-[40vw]">        
                      <div class="menu absolute block text-center text-[25px] w-10 h-10 cursor-pointer bg-yellow-500 rounded-full 
                      z-10 ping
                      ">
                          <i class="absolute w-5 h-[2px] bg-white left-[10px] top-[11px] transition-all
                          w-5 h-0.5 inline-block float-left top-[0.69rem] left-[0.63rem] absolute cursor-pointer"></i>
                          <i class="absolute w-5 h-[2px] bg-white left-[10px] top-[18px] scale-100 transition-all"></i>
                          <i class="absolute w-5 h-[2px] bg-white left-[10px] top-[25px] transition-all"></i>
                      </div>
                        <a href="https://shadi.lokmangal.website/" class="logo-brand ml-10">
                        <img src="/logo.png" alt="" loading="lazy" class="ic-logo min-h-13"/></a>
                    </div>

          {/* Navigation */}
          <ul className="hidden space-x-4 relative items-center justify-center  
          m-0 xl:w-[calc(100%_-_450px)] float-left max-[1040px]:min-[900px]:px-0 max-[1000px]:min-[900px]:ml-7  py-0  px-10  min-[900px]:flex ">
            {/* Explore Menu */}
            <li className="relative group">
              <span className="cursor-pointer font-medium text-sm leading-[40px]  uppercase hover:text-gray-600 flex items-center">
                Explore
                <Icons.ChevronDown className="ml-2 text-sm transition-transform duration-300 group-hover:rotate-180" />
              </span>
              {/* Dropdown */}
              <div
                className="fixed w-full top-[90px] p-[30px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute left-[-14px] top-[30px] py-[10px] shadow-[0_14px_11px_1px_rgba(0,0,0,0.06)] rounded-[5px] ease-in-out translate-y-[20px] origin-top scale-0 group-hover:scale-100 group-hover:translate-y-0
              
              
              
               bg-white  shadow-[0_14px_11px_1px_rgba(0,0,0,0.06)] z-40 rounded-[5px] transition-all duration-200 ease-in-out origin-top animate-[growOut_0.34s_ease_forwards]
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
              <div className="absolute left-[-14px] top-[30px] bg-white py-[10px] shadow-[0_14px_11px_1px_rgba(0,0,0,0.06)] rounded-[5px] transition-all duration-200 ease-in-out translate-y-[20px] origin-top opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 fixed w-full left-0 top-[90px] p-[30px] z-40">
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
          <div className="block min-[900px]:hidden float-right">
                  <span class="ser-open mobile-ser">
                      <img src="/search.svg" alt="" className="text-[30px] text-black font-extralight w-9 h-9 ml-[10px] border border-[#222121] inline-block p-1.5 align-middle max-w-full object-cover rounded-full"/>
                  </span>
                  <span class="mobile-exprt" data-mob="dashbord">
                      <img src="/users.svg" alt="" className="text-[30px] text-black font-extralight w-9 h-9 ml-[10px] border border-[#222121] inline-block p-1.5 align-middle max-w-full object-cover rounded-full"/>
                  </span>
                  <span class="mobile-menu" data-mob="mobile">
                      <img src="/menu.svg" alt="" className="text-[30px] text-black font-extralight w-9 h-9 ml-[10px] border border-[#222121] inline-block p-1.5 align-middle max-w-full object-cover rounded-full"/>
                  </span>
                  </div>
        </nav>
      </Container>
    </div>
  );
}

export default NavBar;
