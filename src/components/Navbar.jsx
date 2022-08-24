import React, { useEffect } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import TooltipComp from "./tooltip/TooltipComp";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComp content={title} position='BottomCenter' direction='bottom'>
    <button
      type='button'
      onClick={() => customFunc()}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span
        style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
      {icon}
    </button>
  </TooltipComp>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative w-full'>
      <div className={`${!handleActiveMenu && "rotate-180"} duration-300`}>
        <NavButton
          title='Menu'
          customFunc={handleActiveMenu}
          color={currentColor}
          icon={<AiOutlineDoubleRight />}
        />
      </div>

      <div className='flex justify-items-end'>
        <NavButton
          title='Cart'
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title='Chat'
          dotColor='#03C9D7'
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title='Notification'
          dotColor='rgb(254, 201, 15)'
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComp content='Profile' position='BottomCenter'>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick("userProfile")}
          >
            <img className='rounded-full w-8 h-8' src={""} alt='user-profile' />
            <p>
              <span className='text-gray-400 text-14'>Hi,</span>{" "}
              <span className='text-gray-400 font-bold ml-1 text-14'>
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComp>

        {/* {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />} */}
      </div>
    </div>
  );
};

export default Navbar;
