import { Head } from '@inertiajs/react'
import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const SelectAuth = () => {
    return (
        <>
            <Head title="プラン選択" />
            <h1 className="text-center my-10 font-bold text-2xl">プラン選択</h1>
            <Stack
                direction="column"
                spacing={2}
                className="flex items-center"
            >
                <Button
                    variant="outlined"
                    className="w-1/5"
                    href="#contained-buttons"
                >
                    個人利用
                </Button>
                <Button
                    variant="contained"
                    className="w-1/5"
                    href="#contained-buttons"
                >
                    企業として利用
                </Button>
            </Stack>
        </>
    )
}

export default SelectAuth
