import { ReactNode } from 'react';
import Link from "next/link";

type SidebarProps = {
    children: ReactNode;
    title: string;
}

export default function sidebar({children, title}: SidebarProps) {
    return (
        <div className='flex min-h-screen'>
            {/*sidebar*/}
            <div className='w-90 bg-amber-200 flex flex-col h-screen p-8 text-xl shadow-xl'>
                <img src="image/logoMenyamping.png" alt="" className='w-65 mt-10'/>
                <nav>
                    <ul className='flex flex-col space-y-4 font-bold mt-20'>
                        <li>
                            <Link href="/profile" className='hover:text-amber-900'>Profile</Link>
                        </li>
                        <li>
                            <Link href="/dashboard" className='hover:text-amber-900'>Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/presensi" className='hover:text-amber-900'>Presensi</Link>
                        </li>
                        <li>
                            <Link href="/logout" className='hover:text-amber-900'>Log out</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/*Content*/}
            <div className='flex-1 flex flex-col'>
                {/*Header*/}
                <header className="flex justify-between items-center p-4 px-6 py-4 w-full">
                    <h2 className='text-3xl font-bold'>{title}</h2>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-gray-800 text-2xl'>Alya - XI RPL 5</h1>
                        <span>
                            <img src="image/profil.png" alt="" className='w-18 h-18 rounded-full border-2 border-amber-950'/>
                        </span>
                    </div>
                </header>

                 <div className="mt-4 ml-4">{children}</div>
            </div>
        </div>
    )
}