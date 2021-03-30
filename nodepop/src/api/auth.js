import client from './client';

export const register = credentials => {
    console.log(register)
    return client.post('/api/auth/signup', credentials)
}

export const login = credentials => {
    console.log(login);
    console.log('estobuse', credentials)
    return client.post('/api/auth/login', credentials)
}
