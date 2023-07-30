import axios from "axios";

export default axios.create({
    baseURL: "https://naveenslog.pythonanywhere.com",
    headers: {
        "Content-Type": "application/json"
    }
});