import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import { getServerSession } from 'next-auth';
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const PrivateLayout = async ({ children }) => {

  const session = await getServerSession(authOptions);
  if (!session?.user) redirect('/login');
  if (session?.user.role === 'admin') redirect('/dashboard');

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

export default PrivateLayout;