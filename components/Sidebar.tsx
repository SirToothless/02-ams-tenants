import { Home, Smartphone } from "lucide-react";
import SidebarButton from "./SidebarButton";
import { UserButton } from "@clerk/nextjs";


const buttons = [
  {
    title: "Panel Główny",
    href: "/aplikacja",
    Icon: Home,
  },
  {
    title: "Pomiar Mobilny",
    href: "/aplikacja/pomiar",
    Icon: Smartphone,
  },
];

const Sidebar = () => {


  return (
    <div className='  h-[50px] fixed top-[4px] w-full z-50 mx-1 px-4 py-1 flex items-center gap-4'>
      <UserButton />
      {buttons.map((button) => (
        <SidebarButton
          key={button.title}
          title={button.title}
          href={button.href}
          Icon={button.Icon}
        />
      ))}
    </div>
  );
};
export default Sidebar;
