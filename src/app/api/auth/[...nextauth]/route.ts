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
            clientId : 'Iv1.9d722dd32c4c7232',
            clientSecret : '6218ef2129b36c49f1e0694e490f121f60ee6088'
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