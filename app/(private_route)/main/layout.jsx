import Header from "@components/Header";
import Sidebar from "@components/Sidebar";

const MainLayout = async ({ children }) => {
  return (
    <div className="relative">
      <Sidebar />
      <div className="md:pl-16">
        <Header />
        <div className="w-full min-h-[calc(100vh-120px)] pt-[69px] md:pt-[120px]">{children}</div>
      </div>
    </div>
  )
}

export default MainLayout;