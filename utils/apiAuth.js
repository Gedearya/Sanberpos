import Cookies from "js-cookie";
import { BaseUrl } from "./api";
import axios from "axios";

export const apiAuth = (
    () => {
        const setCookie = ({ token }) => {
            Cookies.set('token', token, { expires: 1 })
        }

        const getCookieToken = () => Cookies.get('token')

        const fetchHeaders = () => {
            return {
                headers: {
                    "Authorization": "Bearer " + getCookieToken()
                }
            }
        }

        const postRegister = ({ email, name, password, password_confirmation, router, prevent }) => {
            prevent.preventDefault()
            axios.post(BaseUrl + '/auth/register', { email, name, password, password_confirmation })
                .then((res) => {
                    console.log(res)
                    router.push('/')
                })
                .catch((err) => console.log(err.message))
        }

        const postLogin = ({ email, password, prevent, router }) => {
            prevent.preventDefault()
            axios.post(BaseUrl + '/auth/login', { email, password })
                .then(({ data }) => setCookie({ token: data.data.token }, router.push('/dashboard')))
        }

        return {
            setCookie,
            getCookieToken,
            postRegister,
            postLogin,
            fetchHeaders
        }
    }
)();