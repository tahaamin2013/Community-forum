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
            clientSecret : 'c84355be2cbdde8dbe8cced85397ce37410c8764'
        })
    ],
    callbacks : {
        async session({session, token} : any){
            console.log(session, token);

            session.user.name = `${session?.user?.name}_${token?.sub}`

            return session
        }
    },
    secret : 'defafsdault_secret_Kefdy'
}

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST}