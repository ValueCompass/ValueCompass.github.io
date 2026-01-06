import axios from 'axios';
import { createAxios } from './axios'


//其他配置
const request = createAxios({
    baseURL: 'https://tab2024.valuecompass.site',
});

export const login = (data: any): any => {
    // return request.post("/api/annotations/login/", data)

    const result = {
        data: {
            "ok": true
        }
    }

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}

export const submitPrinciples = (data: any): any => { 
    // return request.post("/api/annotations/principles/", data) 

    const result = {
        data: {
            "ok": true
        }
    }

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}

export const submitQuestion = (data: any): any => { 
    // return request.post("/api/annotations/question_response", data) 

    const result = {
        data: {
              "response": "This is a placeholder response to the question: ",
        "highlight_cues": ["placeholder1", "placeholder2", "placeholder3"],
        "key_concepts": ["concept1", "concept2", "concept3"],

        }
    }

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}


export const getQuestionInfo = (): any => {
    return axios.get("./data/CulturalAlignment/question_info.json");
}

export const getChatItemInfo = (data: any): any => {
    console.log("!!!", data)
    // return request.post("http://localhost:8000/api/v1/chat", data)

    const result = {
        data: {
            "question": "what is the most important thing in your life" + "\n" + new Date(),
            "progress_bar": 0.4,
            "process":7
        }
    }


    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}



