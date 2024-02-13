import Header from "@components/Header";
import SidebarAdmin from "@components/SidebarAdmin";

const DashboardLayout = ({ children }) => {
  return (
    <div className="relative">
      <SidebarAdmin />
      <div className="md:pl-16">
        <Header />
        <div className="w-full min-h-[calc(100vh-120px)] pt-[80px] md:pt-[120px]">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout;