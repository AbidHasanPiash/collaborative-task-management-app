import Image from 'next/image'
import React from 'react'
import { BsPersonBoundingBox } from 'react-icons/bs';
import { TbTargetArrow } from 'react-icons/tb';
import { HiUserGroup, HiPlus, HiOutlineLockClosed } from 'react-icons/hi';
import { FaClipboardList } from 'react-icons/fa';
import { LuPanelLeftClose } from 'react-icons/lu';
import {Avatar, Dropdown, DropdownTrigger} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import ProfileDropDown from '../dashboard/ProfileDropDown';

export default function SideBar({toggleSidebar}) {
  return (
    <div className='w-60 h-screen bg-gray-900 text-gray-400 flex flex-col justify-between space-y-1.5 overflow-y-auto'>
        <div className='p-6 space-y-4'>
            <Dropdown backdrop="blur" placement="bottom-start" className='dark bg-gray-800'>
                <DropdownTrigger>
                    <div className='flex items-center space-x-3 cursor-pointer'>
                        <div className='rounded-full w-10 h-10 flex items-center justify-center'>
                            <Avatar isBordered color="warning" className='dark' src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </div>
                        <div>
                            <p className='font-bold text-gray-300'>Abid Hasan</p>
                            <p className='text-xs tracking-widest'>Leader</p>
                        </div>
                    </div>
                </DropdownTrigger>
                <ProfileDropDown/>
            </Dropdown>
            <button onClick={toggleSidebar} className='lg:hidden fixed h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center left-56 top-6'>
                <LuPanelLeftClose size={22}/>
            </button>
        </div>
        <div className='h-full flex flex-col space-y-4'>
            <ul>
                <li> 
                    <Button radius="none" variant="none" className='group w-full flex items-center justify-start py-2.5 px-6 space-x-2.5 cursor-pointer hover:bg-gray-700 transition-all duration-200'>
                        <span className='group-hover:text-orange-500'><TbTargetArrow size={22}/> </span>
                        <span className='group-hover:text-gray-300'>Target</span>
                    </Button>
                </li>
                <li> 
                    <Button radius="none" variant="none" className='group w-full flex items-center justify-start py-2.5 px-6 space-x-2.5 cursor-pointer hover:bg-gray-700 transition-all duration-200'>
                        <span className='group-hover:text-orange-500'><FaClipboardList size={22}/> </span>
                        <span className='group-hover:text-gray-300'>All task</span>
                    </Button>
                </li>
                <li> 
                    <Button radius="none" variant="none" className='group w-full flex items-center justify-start py-2.5 px-6 space-x-2.5 cursor-pointer hover:bg-gray-700 transition-all duration-200'>
                        <span className='group-hover:text-orange-500'><HiUserGroup size={22}/> </span>
                        <span className='group-hover:text-gray-300'>Team</span>
                    </Button>
                </li>
            </ul>
            <div>
                <Button radius="none" variant="none" className='flex w-full items-center justify-between cursor-pointer px-6 py-2.5 hover:bg-gray-700 transition-all duration-200'>
                    <h1 className='text-lg font-bold flex items-center space-x-1'>
                        <span className='text-gray-300'>My lists</span> 
                        <HiOutlineLockClosed size={14}/>
                    </h1>
                    <span className='hover:text-orange-500'>
                        <HiPlus/>
                    </span>
                </Button>
                <ul>
                    <li>
                        <Button radius="none" variant="none" className='w-full flex items-center justify-start py-2.5 px-6 cursor-pointer hover:bg-gray-700 transition-all duration-200'>Personal</Button>
                    </li>
                    <li>
                        <Button radius="none" variant="none" className='w-full flex items-center justify-start py-2.5 px-6 cursor-pointer hover:bg-gray-700 transition-all duration-200'>Work</Button>
                    </li>
                </ul>
            </div>
            <div>
                <Button radius="none" variant="none" className='flex w-full items-center justify-between cursor-pointer px-6 py-2.5 hover:bg-gray-700 transition-all duration-200'>
                    <h1 className='text-lg font-bold flex items-center space-x-1'>
                        <span className='text-gray-300'>Projects</span> 
                        <HiOutlineLockClosed size={14}/>
                    </h1>
                    <span className='hover:text-orange-500'>
                        <HiPlus/>
                    </span>
                </Button>
                <ul>
                    <li>
                        <Button radius="none" variant="none" className='w-full flex items-center justify-start py-2.5 px-6 cursor-pointer hover:bg-gray-700 transition-all duration-200'>RestoMan</Button>
                    </li>
                    <li>
                        <Button radius="none" variant="none" className='w-full flex items-center justify-start py-2.5 px-6 cursor-pointer hover:bg-gray-700 transition-all duration-200'>IBMS</Button>
                    </li>
                    <li>
                        <Button radius="none" variant="none" className='w-full flex items-center justify-start py-2.5 px-6 cursor-pointer hover:bg-gray-700 transition-all duration-200'>TipOFF</Button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
