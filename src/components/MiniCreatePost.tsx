'use client'
import { FC } from 'react'
import type { Session } from 'next-auth'
import { usePathname, useRouter } from 'next/navigation'
import { ImageIcon, Link2 } from 'lucide-react'
import { Button } from './ui/Button'
import { Input } from './ui/Input'

interface MiniCreatePostProps {
  session: Session | null
}

const MiniCreatePost: FC<MiniCreatePostProps> = ({ session }) => {
  const router = useRouter()
  const pathname = usePathname()
  
  const user = session?.user

  return (
    <li className='overflow-hidden rounded-md bg-white shadow'>
      <div className='h-full px-6 py-4 flex justify-between gap-6'>
        <div className='relative'>
        <div className="flex items-center">
          {user?.image && (
            <img
              src={user.image}
              alt="User"
              className="h-8 w-8 rounded-full object-cover mr-2"
            />
          )}
        </div>

          <span className='absolute bottom-0 right-0 rounded-full w-3 h-3 bg-green-500 outline outline-2 outline-white' />
        </div>
        <Input
          onClick={() => router.push(pathname + '/submit')}
          readOnly
          placeholder='Create post'
        />
        <Button
          onClick={() => router.push(pathname + '/submit')}
          variant='ghost'>
          <ImageIcon className='text-zinc-600' />
        </Button>
        <Button
          onClick={() => router.push(pathname + '/submit')}
          variant='ghost'>
          <Link2 className='text-zinc-600' />
        </Button>
      </div>
    </li>
  )
}

export default MiniCreatePost