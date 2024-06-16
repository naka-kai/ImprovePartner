import { useEffect, FormEventHandler } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/Defaults/InputError'
import InputLabel from '@/Components/Defaults/InputLabel'
import PrimaryButton from '@/Components/Defaults/PrimaryButton'
import TextInput from '@/Components/Defaults/TextInput'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { PageProps } from '@/types'

interface RegisterPageProps extends PageProps {
    isAdmin: number
}

export default function Register() {
    const { isAdmin } = usePage<RegisterPageProps>().props

    const { data, setData, post, processing, errors, reset } = useForm({
        last_name: '',
        first_name: '',
        last_name_kana: '',
        first_name_kana: '',
        email: '',
        tel: '',
        isAdmin,
        other: '',
        birthday: dayjs(),
        password: '',
        password_confirmation: '',
    })

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation')
        }
    }, [])

    const submit: FormEventHandler = (e) => {
        e.preventDefault()

        post(route('register'))
    }

    return (
        <GuestLayout>
            <Head title="ユーザー登録" />

            <form onSubmit={submit}>
                <div className="flex items-center">
                    <InputLabel
                        htmlFor="is_admin"
                        value="プラン"
                    />

                    <FormControlLabel
                        id="is_admin"
                        disabled
                        label={data.isAdmin === 1 ? '企業プラン' : '個人プラン'}
                        sx={{ marginLeft: '0.5rem' }}
                        control={
                            <Checkbox
                                sx={{ display: 'none' }}
                                checked={data.isAdmin === 1 ? true : false}
                            />
                        }
                    />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="last_name"
                        value="姓"
                    />

                    <TextInput
                        id="last_name"
                        name="last_name"
                        value={data.last_name}
                        className="mt-1 block w-full"
                        autoComplete="last_name"
                        isFocused={true}
                        onChange={(e) => setData('last_name', e.target.value)}
                    />

                    <InputError
                        message={errors.last_name}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="first_name"
                        value="名"
                    />

                    <TextInput
                        id="first_name"
                        name="first_name"
                        value={data.first_name}
                        className="mt-1 block w-full"
                        autoComplete="first_name"
                        isFocused={true}
                        onChange={(e) => setData('first_name', e.target.value)}
                    />

                    <InputError
                        message={errors.first_name}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="last_name_kana"
                        value="セイ"
                    />

                    <TextInput
                        id="last_name_kana"
                        name="last_name_kana"
                        value={data.last_name_kana}
                        className="mt-1 block w-full"
                        autoComplete="last_name_kana"
                        isFocused={true}
                        onChange={(e) =>
                            setData('last_name_kana', e.target.value)
                        }
                    />

                    <InputError
                        message={errors.last_name_kana}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="first_name_kana"
                        value="メイ"
                    />

                    <TextInput
                        id="first_name_kana"
                        name="first_name_kana"
                        value={data.first_name_kana}
                        className="mt-1 block w-full"
                        autoComplete="first_name_kana"
                        isFocused={true}
                        onChange={(e) =>
                            setData('first_name_kana', e.target.value)
                        }
                    />

                    <InputError
                        message={errors.first_name_kana}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="email"
                        value="メールアドレス"
                    />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError
                        message={errors.email}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="tel"
                        value="電話番号"
                    />

                    <TextInput
                        id="tel"
                        name="tel"
                        value={data.tel}
                        className="mt-1 block w-full"
                        autoComplete="tel"
                        isFocused={true}
                        onChange={(e) => setData('tel', e.target.value)}
                    />

                    <InputError
                        message={errors.tel}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="birthday"
                        value="生年月日"
                    />

                    <DatePicker
                        value={data.birthday}
                        onChange={(newValue) => {
                            if (newValue !== null) {
                                setData('birthday', newValue)
                            }
                        }}
                        slotProps={{
                            textField: {
                                id: 'birthday',
                                name: 'birthday',
                                className: 'mt-1 block w-full',
                                autoComplete: 'birthday',
                                InputProps: {
                                    required: true,
                                },
                            },
                            calendarHeader: {
                                format: 'YYYY年MM月',
                            },
                        }}
                        format="YYYY/MM/DD"
                    />

                    <InputError
                        message={errors.birthday}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password"
                        value="パスワード"
                    />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError
                        message={errors.password}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="パスワード確認"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        すでに登録していますか？
                    </Link>

                    <PrimaryButton
                        className="ms-4"
                        disabled={processing}
                    >
                        登録
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    )
}
