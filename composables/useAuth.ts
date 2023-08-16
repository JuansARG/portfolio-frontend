import { AuthResponse } from '../interfaces/authResponse';
import { UserPortfolio } from '../interfaces/userPortfolio';


export const useAuth = async() => {

    const config = useRuntimeConfig();
    const globalState = useGlobalState();
    const token = useCookie<string>('ACCESS_TOKEN');

    const login = async():Promise<void> => {

        const headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');

        const { data } = await useFetch<AuthResponse>(`http://localhost:8080/api/v1/auth/login`, {
            method: 'POST',
            body: {
                email: config.BACKEND_USER,
                password: config.BACKEND_PASS
            },
            credentials: 'include',
            headers: headers,

            
        });
        
        token.value = data.value?.token!;
    };

    const getData = async() => {

        const headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Authorization', `Bearer ${token.value}`)

        const { data } = await useFetch<UserPortfolio>(`http://localhost:8080/api/v1/users/1`, {
            method: 'GET',
            headers: headers,
        });

        globalState.value.userData = data.value!;
        globalState.value.isAuth = true;
    }

    if(!globalState.value.isAuth){
        login();
        getData();
    }
}