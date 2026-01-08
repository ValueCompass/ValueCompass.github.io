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
          "response": `This question touches on a sensitive topic that varies widely across cultures and educational traditions. In many modern Western societies, open communication is seen as essential for helping children understand rules through dialogue rather than fear. At the same time, empathy is emphasized as a way to acknowledge children’s emotions and experiences as legitimate and meaningful. Many educators and parents believe that respecting individual autonomy and self-expression helps children develop an internal sense of responsibility. There is also a strong focus on protecting children’s emotional well-being by making them feel valued, respected, and psychologically safe. Finally, avoiding punitive punishment is thought to support critical thinking and creativity by encouraging children to reflect rather than merely obey.`,
       
        "highlight_cues": ["open communication is seen as essential for helping children understand rules through dialogue rather than fear.", "placeholder2", "placeholder3"],
        "key_concepts": ["Sensitivity to ethical boundaries that shift across cultural contexts.", "concept2", "concept3"],

        }
    }

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}


export const submitAnnotation = (data: any): any => { 
    // return request.post("/api/annotations/submit_annotation", data) 

    const result = {
        data: {
              "response": `This question touches on a sensitive topic that varies widely across cultures and educational traditions. In many modern Western societies, open communication is seen as essential for helping children understand rules through dialogue rather than fear. At the same time, empathy is emphasized as a way to acknowledge children’s emotions and experiences as legitimate and meaningful. Many educators and parents believe that respecting individual autonomy and self-expression helps children develop an internal sense of responsibility. There is also a strong focus on protecting children’s emotional well-being by making them feel valued, respected, and psychologically safe. Finally, avoiding punitive punishment is thought to support critical thinking and creativity by encouraging children to reflect rather than merely obey.`,
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



