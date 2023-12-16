'use client'
import { VscGithubInverted } from "react-icons/vsc";
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
import Link from "next/link";

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
      className='w-full flex gap-3'
  onClick={session !== null ? () => signOut() : () => signIn('github')}
  // session={session}
>
<Link className="flex gap-3 w-full h-full text-center justify-center items-center" href="/"><VscGithubInverted size={20} /> Github</Link>
</Button>
    </div>
  )
}

export default UserAuthForm