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

export const getAnswerInfo = (): any => {
    return axios.get("./data/CulturalAlignment/answer_info.json");
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

export const getChatResult = (data: any): any => {
    console.log("!!!", data)
    // return request.post("http://localhost:8000/api/v1/result", data)

    const result = {
        data: {
            "user_name": "user_name",
            "core_value": ["value1", "value2", "value3"],
            "short_comment": "You’re driven by a desire to succeed and be recognized for your hard work. Feeling secure and maintaining harmony is essential for your peace of mind. Moreover, helping others and fostering a sense of community is deeply fulfilling for you. These primary values shape how you interact with the world, reflecting your unique approach to life.",
            "value_score": {
                "Achievement": 8.5,
                "Benevolence": 10,
                "Conformity": 6.8,
                "Hedonism": 7.5,
                "Power": 5.3,
                "Security": 8.0,
                "Self-direction": 9.0,
                "Stimulation": 6.2,
                "Tradition": 7.1,
                "Universalism": 10
            },
            "closest_model": [
                ["Model_1", 0.93],
                ["Model_2", 0.89],
                ["Model_3", 0.85],
                ["Model_4", 0.89],
                ["Model_5", 0.85]
            ],
            // "closest_cluture": [
            //     ["East Asian Culture", .92],
            //     ["South Asian Culture", 0.1],
            //     ["Latin American Culture", .12],
            //     ["Western Culture", 0.18],
            //     ["Middle Eastern Culture", .15],
            //     ["African Culture", .08]
            // ],
            "closest_culture": [
                ['US', '0.09'],
                ['China', '0.08'],
                ['Japan', '0.08']
            ],



            // "tsne_model_caption": [
            //     "GPT-4-Turbo",
            //     "Claude-3.5-Sonnet",
            //     "Gemini-2.0-Pro",
            //     "LlaMA-3.1-405B-Instruct",
            //     "Mistral-Large-Latest",
            //     "Phi-3.5-MoE-instruct",
            //     "GLM-4",
            //     "Baichuan4",
            //     "Qwen-Max"
            // ],
            // "tsne_models": [
            //     [
            //         -10.312972068786621,
            //         108.4035415649414,
            //         66.84272766113281
            //     ],
            //     [
            //         46.74407196044922,
            //         -184.58409118652344,
            //         32.70062255859375
            //     ],
            //     [
            //         216.2589874267578,
            //         -43.305973052978516,
            //         171.65029907226562
            //     ],
            //     [
            //         319.81842041015625,
            //         -87.6713638305664,
            //         53.949615478515625
            //     ],
            //     [
            //         -196.47877502441406,
            //         72.76651000976562,
            //         11.465262413024902
            //     ],
            //     [
            //         -131.56320190429688,
            //         -100.20923614501953,
            //         39.068603515625
            //     ],
            //     [
            //         28.517057418823242,
            //         -20.0819091796875,
            //         134.4071502685547
            //     ],
            //     [
            //         -206.8092041015625,
            //         32.41674041748047,
            //         -192.71253967285156
            //     ],
            //     [
            //         -26.18716049194336,
            //         -82.97793579101562,
            //         -89.55113983154297
            //     ]
            // ],
            // "tsne_human": [
            //     24.543092727661133,
            //     285.1300354003906,
            //     117.79917907714844
            // ],

        }
    }



    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 2000);
    });
}

