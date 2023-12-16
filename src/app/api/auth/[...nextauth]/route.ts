// import { authOptions } from "@/lib/auth"
// import NextAuth from "next-auth"

// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST }

import {AuthOptions} from 'next-auth';
import GithubProvider from "next-auth/providers/github";
import NextAuth from 'next-auth/next';

const authOptions : AuthOptions = {
    providers : [
        GithubProvider({
            clientId : 'Iv1.773c863e1f0ca9e8',
            clientSecret : '113b27e13ac21876eca9c34d318b65732ecf8624'
        })
    ],
    callbacks : {
        async session({session, token} : any){
            console.log(session, token);

            session.user.name = `${session?.user?.name}_${token?.sub}`

            return session
        }
    },
    secret : 'default_secret_Key'
}

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST}