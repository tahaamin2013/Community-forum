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
            clientId : 'Iv1.cc787876f8393eb0',
            clientSecret : 'a7ccf7b0ccf2eddbfc2d4924cc9a3e3dc0a01088'
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