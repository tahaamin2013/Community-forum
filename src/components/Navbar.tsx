"use client"
import Link from 'next/link';
import React from 'react';
import { Icons } from './icons';
import { Button, buttonVariants } from './ui/Button';
import { getServerSession } from 'next-auth';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleSignIn = async () => {
    try {
      const signInResult = await signIn('github'); // Passing provider without authOptions
      if (signInResult?.error) {
        // Handle error if needed
        console.error(signInResult.error);
      } else {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-white shadow-md z-[10] py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        <Link href='/' className='flex gap-2 items-center'>
          <Icons.logo className='h-8 w-8 sm:h-6 sm:w-6' />
          <p className='hidden text-zinc-700 text-sm font-medium md:block'>Breadit</p>
        </Link>

        {isLoggedIn ? (
          <p>You are logged in</p>
        ) : (
          <Button onClick={session !== null ? handleSignOut : handleSignIn}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
