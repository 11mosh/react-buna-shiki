import axios from 'axios'
import { URLRota } from '../constants'

const api = axios.create({
    baseURL: URLRota
})