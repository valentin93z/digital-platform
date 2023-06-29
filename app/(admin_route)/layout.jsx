import { getServerSession } from 'next-auth';
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';

const AdminLayout = async ({ children }) => {

  const session = await getServerSession(authOptions);
  const user = session?.user;
  const isAdmin = user?.role === 'admin';

  if (!isAdmin) redirect('/login');

  return <>{children}</>
}

export default AdminLayout;