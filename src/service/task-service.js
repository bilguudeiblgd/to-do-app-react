import axios from "axios";

const BASE_URL = "http://192.168.5.178:8001/api";

class TaskService {
    addTask(token, title, description, dueDate) {
        const config = {
            headers: { Authorization: `Bearer ` + token, Accept: "application/json" },
        };

        return axios
            .post(
                `${BASE_URL}/posts`, {
                    title: title,
                    description: description,
                    finishDue: dueDate,
                },
                config
            )
            .then((response) => {
                return response.data;
            });
    }
    getTask(token) {
        const config = {
            headers: { Authorization: `Bearer ` + token, Accept: "application/json" },
        };

        return axios.get(`${BASE_URL}/posts`, config).then((response) => {
            return response.data;
        });
    }
}
export default new TaskService();