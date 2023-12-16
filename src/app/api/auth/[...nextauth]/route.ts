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
            clientId : 'Iv1.e87c5fb499e8421b',
            clientSecret : 'f3c493b0412b45458c1cf8e7d83fd96a9c46b6d9'
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