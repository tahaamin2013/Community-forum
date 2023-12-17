"use client"
import Link from 'next/link'
import React from 'react'
import { Icons } from './icons'
import { Button, buttonVariants } from './ui/Button'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import {signIn, signOut, useSession} from 'next-auth/react';
import { useRouter } from 'next/navigation'
import UserAccountNav from './UserAccountNav'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UserAuthForm from './UserAuthForm'


const Navbar = () => {
  // const session = await getServerSession(authOptions)
  const {data: session} = useSession();
  const router = useRouter();
  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-white shadow-md z-[10] py-2'>
    <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
      {/* logo */}
      <Link href='/' className='flex gap-2 items-center'>
        <Icons.logo className='h-8 w-8 sm:h-6 sm:w-6' />
        <p className='hidden text-zinc-700 text-sm font-medium md:block'>Breadit</p>
      </Link>

      {/* {session?.user ? (
          <p>youre logged in</p>
        ) : (
          <Link href='/sign-in' className={buttonVariants()}>
            Sign In
          </Link>
        )} */}
         {session !== null ? (
          // <Button onClick={() => signOut()}>Logout</Button>
          <UserAccountNav />
         ) : (  
          <Dialog>
              <DialogTrigger>
          <Button>Sign in</Button>
          </DialogTrigger>
            <DialogContent>
            <DialogDescription>
            <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <Icons.logo className='mx-auto h-6 w-6' />
        <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
        <p className='text-sm max-w-xs mx-auto'>
          By continuing, you are setting up a Breadit account and agree to our
          User Agreement and Privacy Policy.
        </p>
      </div>
      <UserAuthForm />
      <p className='px-8 text-center text-sm text-muted-foreground'>
        New to Breaddit?{' '}
        <Link
          href='/sign-up'
          className='hover:text-brand text-sm underline underline-offset-4'>
          Sign Up
        </Link>
      </p>
    </div>
      </DialogDescription>
            </DialogContent>
          </Dialog>
         )}
          {/* <Button onClick={session !== null ? ()=> signOut() : ()=> router.push('/sign-in')} >{session !== null ? "Logout" : "Login"}</Button> */}
      </div>
      </div>
  )
}

export default Navbar