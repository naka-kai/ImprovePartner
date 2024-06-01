import './bootstrap'
import '../css/app.css'

import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import axios from 'axios'

const appName = import.meta.env.VITE_APP_NAME || 'ImprovePartner'

axios.defaults.baseURL = 'http://localhost/'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

axios.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('auth_token')
        config.headers.Authorization = token ? `Bearer ${token}` : ''
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx')
        ),
    setup({ el, App, props }) {
        const root = createRoot(el)

        root.render(
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <App {...props} />
            </LocalizationProvider>
        )
    },
    progress: {
        color: '#4B5563',
    },
})
