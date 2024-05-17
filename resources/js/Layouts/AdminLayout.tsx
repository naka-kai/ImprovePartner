import { useState, PropsWithChildren, ReactNode } from 'react'
import { User } from '@/types'
import { MainSidebarInfo } from '@/consts/MainSidebarConst'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export default function Admin({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false)

    return (
        <>
            <Box className="bg-sky-300 w-48 h-screen">
                {MainSidebarInfo.map((item) => (
                    <Box
                        key={item.key.toString()}
                        className="hover:opacity-70 p-2"
                    >
                        <Link
                            href={item.href}
                            color="inherit"
                            underline="none"
                        >
                            <Box className="flex items-center justify-start">
                                <Box className="mr-1">{item.svg}</Box>
                                <Typography>{item.title}</Typography>
                            </Box>
                        </Link>
                    </Box>
                ))}
            </Box>
        </>
    )
}
