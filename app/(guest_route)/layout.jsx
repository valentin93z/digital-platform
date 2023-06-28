import { getServerSession } from 'next-auth';
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';

const GuestLayout = async ({ children }) => {

  const session = await getServerSession(authOptions);
  if (session) redirect('/main');

  return <>{children}</>
}

export default GuestLayout;