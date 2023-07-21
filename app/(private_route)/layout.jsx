import { getServerSession } from 'next-auth';
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const PrivateLayout = async ({ children }) => {

  const session = await getServerSession(authOptions);
  if (!session?.user) redirect('/login');
  if (session?.user.role === 'admin') redirect('/dashboard');

  return <>{children}</>
}

export default PrivateLayout;