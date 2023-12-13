export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const UPDATE_USER = 'UPDATE_USER';

export const authenticate = (user) => {
    return (dispatch) => {
        dispatch({ type: AUTHENTICATE, user: user });
    };
};

export const login = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:5122/api/Auth/login`, {
                method: "POST", headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    "phoneNumber": email,
                    "password": password
                })
            })

            if (!response.ok) {

            }

            const resData = await response.json();
            const user = resData

            dispatch(authenticate(user));
            return user;
        } catch (error) {
            throw error;
        }
    };
};

export function logout() {
    return { type: LOGOUT };
}
