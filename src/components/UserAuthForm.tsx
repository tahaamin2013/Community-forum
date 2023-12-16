'use client'

import { cn } from '@/lib/utils'
import * as React from 'react'
import { FC } from 'react'
import { Button } from '@/components/ui/Button'
import { useToast } from '../hooks/use-toast'
import { Icons } from './icons'
import { useContext, useEffect, useState } from "react";
import {signIn, signOut, useSession} from 'next-auth/react';
import { usePathname, useRouter } from "next/navigation";
import { GlobalContext } from "@/context";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [sticky, setSticky] = useState<boolean>(false);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const {data: session} = useSession();
  const router = useRouter();
  const pathName = usePathname();

  console.log(session, 'session')


  const { toast } = useToast()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const loginWithGoogle = async () => {
    setIsLoading(true)

    try {
      await signIn('github')
    } catch (error) {
      toast({
        title: 'There was a problems',
        description: 'There was an error logging in with Google',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button
        isLoading={isLoading}
        type='button'
        size='sm'
        className='w-full' 
        onClick={loginWithGoogle}
        disabled={isLoading}>
        {isLoading ? null : <Icons.google className='h-4 w-4 mr-2' />}
        Google
      </Button>
      <Button
        onClick={session ? () => signOut() : () => signIn('github')}
        // This line is unnecessary, as session is already destructured from useSession()
        // session={session}
      >
        {session ? 'Logout' : 'Login'}
      </Button>
    </div>
  )
}

export default UserAuthForm