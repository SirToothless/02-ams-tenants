import Link from "next/link";
import { ReactElement, RefAttributes } from "react";
import { Button } from "./ui/button";
import { LucideProps } from "lucide-react";

type IconType = React.ComponentType<any>;

type Props = {
  title: string;
  href: string;
  Icon: IconType;
};

const SidebarButton = ({ title, href, Icon }: Props) => {
  return (
    <div className='flex items-center'>
      <Link href={href}>
        <Button
          variant='app'
          size='default'
        >
          <Icon size={18} />

          <h1 className=' uppercase ms-1'>{title}</h1>
        </Button>
      </Link>
    </div>
  );
};
export default SidebarButton;
