import Header from "@components/Header";
import Sidebar from "@components/Sidebar";

const HomeLayout = ({ children }) => {
  return (
    <div className="relative">
      <Sidebar />
      <div className="pl-16">
        <Header />
        <div className="w-full min-h-[calc(100vh-120px)]">{children}</div>
      </div>
    </div>
  )
}

export default HomeLayout;