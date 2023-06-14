import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@utils/database";


const handler = NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                // username: { label: 'Username', type: 'text', placeholder: 'Username' },
                // password: { label: 'Password', type: 'password' },
            },
            authorize(credentials, req) {
                const { username, password } = credentials;
                //
                // find user in db
                //
                //if not found...
                if (username !== 'admin1' || password !== '1234') {
                    return null;
                }
                // if true...
                return { username: 'admin1', email: 'admin1@mail.ru', name: 'admin1' };
            }
        })
    ]
});

export { handler as GET, handler as POST };