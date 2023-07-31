import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@utils/database";
import User from "@models/user";


export const authOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials, req) {

                const { username, password } = credentials;
                await connectToDB();

                const user = await User.findOne({ username: username });
                if (!user) throw Error('Неверный логин или пароль!');

                const passwordMatch = await user.comparePassword(password);
                if (!passwordMatch) throw Error('Неверный логин или пароль!');

                return {
                    id: user._id,
                    username: user.username,
                    role: user.role,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    middlename: user.middlename,
                    email: user.email,
                    phone: user.phone,
                    birthday: user.birthday,
                    image: user.image,
                };
            },
        }),
    ],
    callbacks: {
        jwt(params) {
            if (params.user?.username) {
                params.token.id = params.user.id;
                params.token.username = params.user.username;
                params.token.role = params.user.role;
                params.token.firstname = params.user.firstname;
                params.token.lastname = params.user.lastname;
                params.token.middlename = params.user.middlename;
                params.token.email = params.user.email;
                params.token.phone = params.user.phone;
                params.token.birthday = params.user.birthday;
                params.token.image = params.user.image;
            }
            
            if (params.trigger === 'update') {
                params.token.id = params.session.user.id;
                params.token.username = params.session.user.username;
                params.token.role = params.session.user.role;
                params.token.firstname = params.session.user.firstname;
                params.token.lastname = params.session.user.lastname;
                params.token.middlename = params.session.user.middlename;
                params.token.email = params.session.user.email;
                params.token.phone = params.session.user.phone;
                params.token.birthday = params.session.user.birthday;
                params.token.image = params.session.user.image;
                return params.token;
            }

            return params.token;
        },
        session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
                session.user.username = token.username;
                session.user.role = token.role;
                session.user.firstname = token.firstname;
                session.user.lastname = token.lastname;
                session.user.middlename = token.middlename;
                session.user.email = token.email;
                session.user.phone = token.phone;
                session.user.birthday = token.birthday;
                session.user.image = token.image;
            }
            return session;
        },
    },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };