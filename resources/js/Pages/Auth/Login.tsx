import { Head } from '@inertiajs/react'
import axios from 'axios'
import React, { useState } from 'react'
import swal from 'sweetalert'

interface LoginInput {
    email: string
    password: string
    error_list: {
        name?: string
        email?: string
        password?: string
        password_confirmation?: string
    }
}

const Login: React.FC = () => {
    const [loginInput, setLogin] = useState<LoginInput>({
        email: '',
        password: '',
        error_list: {},
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({ ...loginInput, [e.target.name]: e.target.value })
    }

    const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then((response) => {
            axios.post('/api/login', data).then((res) => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token)
                    localStorage.setItem('auth_name', res.data.username)
                    window.location.href = '/'
                } else if (res.data.status === 401) {
                    swal('Warning', res.data.message, 'warning')
                } else {
                    setLogin({
                        ...loginInput,
                        error_list: res.data.validation_errors,
                    })
                }
            })
        })
    }
    return (
        <div className="w-full">
            <Head title="ログイン" />
            <div className="flex justify-center items-center h-screen">
                <div className="border border-gray-400 w-1/2 flex flex-col justify-start items-center">
                    <h3 className="text-xl font-bold pt-6 mb-2">ログイン</h3>
                    <form onSubmit={loginSubmit}>
                        <div className="py-2">
                            <div className="mb-2">
                                <label>メールアドレス</label>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={loginInput.email}
                                    onChange={handleInput}
                                    className="rounded w-64"
                                />
                            </div>
                            <p>{loginInput.error_list.email}</p>
                        </div>
                        <div className="py-2">
                            <div className="mb-2">
                                <label>パスワード</label>
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    value={loginInput.password}
                                    onChange={handleInput}
                                    className="rounded w-64"
                                />
                            </div>
                            <p>{loginInput.error_list.password}</p>
                        </div>
                        <div className="flex justify-center items-center py-4">
                            <button
                                type="submit"
                                className="bg-sky-300 py-2 px-10 mb-3 rounded"
                            >
                                ログイン
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
