import storage from '../utils/Storage';
import client, {configureClient, resetClient} from './client';


export const register = credentials => {
    console.log(register)
    return client.post('/api/auth/signup', credentials)
};

export const login = credentials => {
    return client
    .post('/api/auth/login', credentials)
    // .then(({accessToken}) => {
    //     configureClient({accessToken});
    //     storage.set('auth', accessToken);
    // });
}

export const logout = () => {
    return Promise.resolve().then(() => {
        resetClient();
        storage.remove('auth');
    });
}


