import Cookies from "js-cookie";
import { useEffect, useState } from "react";


const useSignInToken = (user) =>{
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const uid = user?.user?.uid

        const currentUser = {
            email,
            uid
        };

        if (email) {
            fetch(`https://lateef-creation-server.vercel.app/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    Cookies.set('accessToken', accessToken)
                    // localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                });
        }
    }, [user])

    return [token];
}

export default useSignInToken;