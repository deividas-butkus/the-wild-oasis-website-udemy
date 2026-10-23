import SideNavigation from "@/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-[16rem_1fr] md:grid-rows-none h-full gap-6 md:gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
