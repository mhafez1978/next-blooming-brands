import Logo from "../company-brand/Logo";
import DestopMenu from "../desktop-menu/DestopMenu";
import MobileMenuBtn from "../mobile-menu-btn/MobileMenuBtn";

const Header = () => {
  return (
    <div className="fixed w-[100vw] h-[64px] z-50">
      <div className="fixed top-0 w-full h-[64px] bg-black/80 blur-sm z-10"></div>
      <div className="fixed w-full h-[64px] flex flex-row justify-between px-10 z-40">
        <Logo />
        <div className="hidden lg:block">
          <DestopMenu />
        </div>
        <div className="lg:hidden">
          <MobileMenuBtn />
        </div>
      </div>
    </div>
  );
};

export default Header;
