'use client';
import { signOut, useSession } from "next-auth/react";

const page = () => {

    const { status, data } = useSession();


  return (
    <div>
      <h1>DASHBOARD</h1>
      <h2>Hello, {data?.user.firstname}!</h2>
      <button type='button' onClick={() => signOut()}>Выход</button>
    </div>
  )
}

export default page;