import { Employee } from './../models/employee';
import axios, { Axios, AxiosResponse } from "axios";
import Body from '../layout/Component/features/Body';

const sleep = (delay : number) => {
    return new Promise((resolve) => {
        setTimeout(resolve , delay)
    })
}
axios.defaults.baseURL = "http://localhost:5000/api"

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000)
        return response
    } catch (error) {
        return Promise.reject(error)
    }
})

const responseBody = <T> (response : AxiosResponse <T>) => response.data

const request = {
    get : <T> (url : string) => axios.get<T>(url).then(responseBody),
    post :<T> (url : string , body: {}) => axios.post<T>(url , body).then(responseBody),
    put :<T> (url : string , body : {}) => axios.put<T>(url , body).then(responseBody),
    detele :<T> (url : string) => axios.delete<T>(url).then(responseBody),
}
const Employees = {
    list : () => request.get<Employee[]>('/Employees'),
    details : (id : string) => request.get<Employee>(`/Employees/${id}`),
    createEmployee: (employee: Employee) => request.post<void>('/Employees', employee),
    editEmployee: (employee: Employee) => request.put<void>(`/Employees/${employee.employeeId}`, employee),
    deteleEmployee: (id : string) => request.detele<void>(`/Employees/${id}`, )
}

const callapi = {
    Employees
}

export default callapi