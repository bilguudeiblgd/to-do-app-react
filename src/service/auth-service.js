import axios from "axios";

const BASE_URL = "http://192.168.5.178:8000/api";

class AuthService {
    register(name, email, password) {
        return axios
            .post(`${BASE_URL}/register`, {
                name,
                email,
                password,
            })
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem(
                        "userToken",
                        JSON.stringify(response.data.token)
                    );
                }
                return response.data;
            })
            .catch((err) => {
                console.error(err);
            });
    }
    login(email, password) {

        return axios
            .post(`${BASE_URL}/login`, {
                email,
                password,
            })
            .then((response) => {
                console.log(response);
                if (response.data.token) {
                    localStorage.setItem(
                        "userToken",
                        JSON.stringify(response.data.token)
                    );
                }
                return response.data;
            })


    }
    getUserData(token) {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.get(`${BASE_URL}/user`, config)
            .then((response) => {
                console.log(response);
            });
    }

    logout() {
        localStorage.removeItem("user");
        window.location.reload();
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();