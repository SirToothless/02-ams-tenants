import Sidebar from "@/components/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
}
