import axios from 'axios';
import { createAxios } from './axios'


//其他配置
const request = createAxios({
    baseURL: 'https://tab2024.valuecompass.site',
});

export const calculateHumanValue = (data: any): any => {
    // return axios.get("./data/value_space.json");
    return request.post("/api/calculate_human_value", data)
}

export const calculateModelValue = (data: any): any => {
    // return axios.get("./data/value_space.json");
    return request.post("/api/calculate_model_value", data)
}

export const getAnswerInfo = (data: any): any => {
    return axios.get("./data/CulturalAlignment/answer_info.json");
}

export const getQuestionInfo = (data: any): any => {
    return axios.get("./data/CulturalAlignment/question_info.json");
}

