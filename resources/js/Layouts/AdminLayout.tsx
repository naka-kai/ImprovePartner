import { useState, PropsWithChildren, ReactNode } from 'react'
import { User } from '@/types'
import { MainSidebarInfo } from '@/consts/MainSidebarConst'
import Dropdown from '@/Components/Dropdown'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

export default function Admin({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false)

    return (
        <>
            <div className="flex">
                <nav className="bg-sky-300 w-48 h-screen">
                    <Link
                        href="/admin"
                        className="hover:opacity-70 block p-2 text-center"
                        variant="h6"
                        color="inherit"
                        underline="none"
                    >
                        ImprovePartner
                    </Link>
                    {MainSidebarInfo.map((item) => (
                        <div
                            key={item.key.toString()}
                            className="hover:opacity-70 p-2"
                        >
                            <Link
                                href={item.href}
                                color="inherit"
                                underline="none"
                            >
                                <div className="flex items-center justify-start">
                                    <div className="mr-1">{item.svg}</div>
                                    <Typography>{item.title}</Typography>
                                </div>
                            </Link>
                        </div>
                    ))}
                </nav>
                <header className="h-16 overflow-hidden pb-[10px] w-full">
                    <div className="shadow-[0_2px_2px_0px_rgba(0,0,0,0.1)] h-full w-full flex justify-end pr-6">
                        <div className="hidden sm:flex sm:items-center">
                            <div className="relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="transition ease-in-out duration-150"
                                            >
                                                <AccountCircleOutlinedIcon
                                                    sx={{ fontSize: 45 }}
                                                    className="text-gray-600"
                                                />
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            ログアウト
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}
