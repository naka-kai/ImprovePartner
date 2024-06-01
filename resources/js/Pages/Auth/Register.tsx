import React, { useState } from 'react'
import { Head } from '@inertiajs/react'
import axios from 'axios'

interface RegisterInput {
    name: string
    email: string
    password: string
    password_confirmation: string
    error_list: {
        name?: string
        email?: string
        password?: string
        password_confirmation?: string
    }
}

const Register: React.FC = () => {
    const [registerInput, setRegister] = useState<RegisterInput>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        error_list: {},
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegister({ ...registerInput, [e.target.name]: e.target.value })
    }

    const registerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
            password_confirmation: registerInput.password_confirmation,
        }

        axios.get('/sanctum/csrf-cookie').then((response) => {
            axios.post('/api/register', data).then((res) => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token)
                    localStorage.setItem('auth_name', res.data.username)
                    window.location.href = '/'
                } else {
                    setRegister({
                        ...registerInput,
                        error_list: res.data.validation_errors,
                    })
                }
            })
        })
    }

    return (
        <div className="w-full">
            <Head title="ユーザー登録" />
            <div className="flex justify-center items-center h-screen">
                <div className="border border-gray-400 w-1/2 flex flex-col justify-start items-center">
                    <h3 className="text-xl font-bold pt-6 mb-2">
                        ユーザー登録
                    </h3>
                    <form onSubmit={registerSubmit}>
                        <div className="py-3">
                            <div className="mb-2">
                                <label>氏名</label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={registerInput.name}
                                    onChange={handleInput}
                                    className="rounded w-64"
                                />
                            </div>
                            <p>{registerInput.error_list.name}</p>
                        </div>
                        <div className="py-2">
                            <div className="mb-2">
                                <label>メールアドレス</label>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={registerInput.email}
                                    onChange={handleInput}
                                    className="rounded w-64"
                                />
                            </div>
                            <p>{registerInput.error_list.email}</p>
                        </div>
                        <div className="py-2">
                            <div className="mb-2">
                                <label>パスワード</label>
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    value={registerInput.password}
                                    onChange={handleInput}
                                    className="rounded w-64"
                                />
                            </div>
                            <p>{registerInput.error_list.password}</p>
                        </div>
                        <div className="py-2">
                            <div className="mb-2">
                                <label>パスワード確認</label>
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    value={registerInput.password_confirmation}
                                    onChange={handleInput}
                                    className="rounded w-64"
                                />
                            </div>
                            <p>
                                {registerInput.error_list.password_confirmation}
                            </p>
                        </div>
                        <div className="flex justify-center items-center py-4">
                            <button
                                type="submit"
                                className="bg-sky-300 py-2 px-10 mb-3 rounded"
                            >
                                登録
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
