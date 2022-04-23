import axios from "axios";

const BASE_URL = "http://192.168.5.178:8001/api";

class AuthService {
    register(name, email, password) {
        return axios
            .post(`${BASE_URL}/register`, {
                name,
                email,
                password,
            })
            .then((response) => {
                if (response.data.data.token) {
                    localStorage.setItem(
                        "userToken",
                        response.data.data.token
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
                const token = response.data.data.token;
                if (token) {
                    localStorage.setItem("userToken", token);
                }

                return response.data;
            });
    }
    getUserData(token) {

        const config = {
            headers: { Authorization: `Bearer ` + token, Accept: "application/json" },
        };

        return axios
            .get(`${BASE_URL}/user`, config)
            .then((response) => {
                return response.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    logout() {
        localStorage.removeItem("userToken");
        window.location.reload();
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();