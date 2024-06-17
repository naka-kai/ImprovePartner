import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/Defaults/InputError'
import PrimaryButton from '@/Components/Defaults/PrimaryButton'
import TextInput from '@/Components/Defaults/TextInput'
import { Head, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()

        post(route('password.email'))
    }

    return (
        <GuestLayout>
            <Head title="パスワードをお忘れの場合" />

            <div className="mb-4 text-sm text-gray-600 mt-3">
                パスワードをお忘れの場合は、メールアドレスを入力してください。
                <br />
                パスワード再設定用のリンクをメールで送信します。
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                />

                <InputError
                    message={errors.email}
                    className="mt-2"
                />

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton
                        className="ms-4"
                        disabled={processing}
                    >
                        Email Password Reset Link
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    )
}
