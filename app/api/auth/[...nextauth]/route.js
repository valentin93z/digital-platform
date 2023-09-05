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

                const user = await User.findOne({ username: username }) || await User.findOne({ phone: username }) || await User.findOne({ email: username });
                if (!user) throw Error('Неверный логин или пароль!');

                const passwordMatch = await user.comparePassword(password);
                if (!passwordMatch) throw Error('Неверный логин или пароль!');

                return {
                    id: user._id,
                    username: user.username,
                    role: user.role,
                    position: user.position,
                    direction: user.direction,
                    sector: user.sector,
                    store: user.store,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    middlename: user.middlename,
                    email: user.email,
                    phone: user.phone,
                    birthday: user.birthday,
                    courses: user.courses,
                    tests: user.tests,
                    polls: user.polls,
                    motivation: user.motivation,
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
                params.token.position = params.user.position;
                params.token.direction = params.user.direction;
                params.token.sector = params.user.sector;
                params.token.store = params.user.store;
                params.token.firstname = params.user.firstname;
                params.token.lastname = params.user.lastname;
                params.token.middlename = params.user.middlename;
                params.token.email = params.user.email;
                params.token.phone = params.user.phone;
                params.token.birthday = params.user.birthday;
                params.token.courses = params.user.courses;
                params.token.tests = params.user.tests;
                params.token.polls = params.user.polls;
                params.token.motivation = params.user.motivation;
                params.token.image = params.user.image;
            }
            
            if (params.trigger === 'update') {
                params.token.id = params.session.user.id;
                params.token.username = params.session.user.username;
                params.token.role = params.session.user.role;
                params.token.position = params.session.user.position;
                params.token.direction = params.session.user.direction;
                params.token.sector = params.session.user.sector;
                params.token.store = params.session.user.store;
                params.token.firstname = params.session.user.firstname;
                params.token.lastname = params.session.user.lastname;
                params.token.middlename = params.session.user.middlename;
                params.token.email = params.session.user.email;
                params.token.phone = params.session.user.phone;
                params.token.birthday = params.session.user.birthday;
                params.token.courses = params.session.user.courses;
                params.token.tests = params.session.user.tests;
                params.token.polls = params.session.user.polls;
                params.token.motivation = params.session.user.motivation;
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
                session.user.position = token.position;
                session.user.direction = token.direction;
                session.user.sector = token.sector;
                session.user.store = token.store;
                session.user.firstname = token.firstname;
                session.user.lastname = token.lastname;
                session.user.middlename = token.middlename;
                session.user.email = token.email;
                session.user.phone = token.phone;
                session.user.birthday = token.birthday;
                session.user.courses = token.courses;
                session.user.tests = token.tests;
                session.user.polls = token.polls;
                session.user.motivation = token.motivation;
                session.user.image = token.image;
            }
            return session;
        },
    },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };