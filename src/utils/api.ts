import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://random.dog/woof.json',
    headers: { 'Content-type': 'application/json' },
})