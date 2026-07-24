import axios from 'axios';
import { createAxios } from './axios'


//其他配置
const request = createAxios({
    baseURL: 'https://tab2024.valuecompass.site',
});

export const login = (data: any): any => {
    return request.post("/annotations_v2/user_login/", data)

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

export const UserRegisterLogin = (data: any): any => {
    return request.post("/annotations_v2/user_register_login/", data)

    const result = {
        data: {
            "ok": true,
            username: "test1",
            country: "China",
            
            language: "Chinese",
            studied_annotation_guidance: false,
        }
    }

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}

export const adminLogin = (data: any): any => {
    return request.post("/annotations_v2/admin_login/", data)
    const isValidAdmin = true
    const result = {
        data: isValidAdmin
            ? {
                ok: true,
                username: "test1",
                country: data.country || "China",
                language: "Chinese",
                role: "admin",
            }
            : {
                ok: false,
                message: "Invalid admin account or password",
            }
    }

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 600);
    });
}

export const getAdminAnnotationUsers = (data: any, token = ""): any => {
    const config = token
        ? {
            headers: {
                Authorization: `Bearer ${token}`,
                // Token: token,
            },
        }
        : undefined;

    return request.post("/annotations_v2/all_user_completed_annotations/", data, config) 
    const result = {
        data: {
            ok: true,
            all_user_annotations: {
                username1: {}
            }
        }
    }

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 600);
    });
}

export const passedCalibrationQuiz = (data: any): any => {
    return request.post("/annotations_v2/passed_calibration_quiz/", data)
}

export const getCalibrationQuiz = (data: any): any => {
    return request.post("/annotations_v2/get_calibration_quiz/", data)
}

export const StudiedAnnotationGuidance = (data: any): any => {
    return request.post("/annotations_v2/studied_annotation_guidance/", data)

    const result = {
        data: {
            "ok": true,
        }
    }

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}

export const getTopicTaskTaxonomy = (data: any): any => {
    return request.post("/annotations_v2/get_topic_task_taxonomy/", data) 

    const result = {
        data: {
            "topics": { "topic1": ["topic1-1", "topic1-2", "topic1-3"], "topic2": ["topic2-1", "topic2-2", "topic2-3"], },
            "tasks": { "task1": ["task1-1", "task1-2", "task1-3"], "task2": ["task2-1", "task2-2", "task2-3"], }
        }
    }

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}

export const getCandidateQuestions = (data: any): any => {
    return request.post("/annotations_v2/get_candidate_questions/", data) 

    const result = {
        data: {
            "candidate questions": ["question1", "question2", "question3"],
        }
    }

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}

export const computeQuestionSimilarity = (data: any): any => {
    return request.post("/annotations_v2/compute_question_similarity/", data)

    const result = {
        data: {
            ok: true,
            raw_question: "",
        }
    }

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}

export const getQuestionResponse = (data: any): any => {
    return request.post("/annotations_v2/get_question_response/", data) 

    const result = {
        data: {
            "response": `This question touches on a sensitive topic that varies widely across cultures and educational traditions. In many modern Western societies, open communication is seen as essential for helping children understand rules through dialogue rather than fear. At the same time, empathy is emphasized as a way to acknowledge children’s emotions and experiences as legitimate and meaningful. Many educators and parents believe that respecting individual autonomy and self-expression helps children develop an internal sense of responsibility. There is also a strong focus on protecting children’s emotional well-being by making them feel valued, respected, and psychologically safe. Finally, avoiding punitive punishment is thought to support critical thinking and creativity by encouraging children to reflect rather than merely obey.`,
            "original_answer_country": "United States",

            "highlight_cues": ["open communication is seen as essential for helping children understand rules through dialogue rather than fear.", "placeholder2", "placeholder3"],
            "key_concepts": ["Sensitivity to ethical boundaries that shift across cultural contexts.", "concept2", "concept3"],
            "value_concepts_evidence": [
                [["open communication is seen as essential for helping children understand rules through dialogue rather than fear."]],
                [],
                []
            ],
            "value_concepts_justification": [
                ["The fragment directly reflects a preference for dialogue-based guidance instead of punishment."],
                [],
                []
            ],

        }
    }

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}

export const submitAnnotation = (data: any): any => {
    return request.post("/annotations_v2/submit_annotation/", data) 

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


export const GetAllCompletedAnnotations = (data: any): any => {
    return request.post("/annotations_v2/all_completed_annotations/", data) 

    const result = {
        data: {
            "1": {
                topic_1: "wewq",
                Topic_2: "",
                Principles: "",
                Task_1: "",
                Task_2: "",
                Question: "1111",
                Response: {
                    "response": `This question touches on a sensitive topic that varies widely across cultures and educational traditions. In many modern Western societies, open communication is seen as essential for helping children understand rules through dialogue rather than fear. At the same time, empathy is emphasized as a way to acknowledge children’s emotions and experiences as legitimate and meaningful. Many educators and parents believe that respecting individual autonomy and self-expression helps children develop an internal sense of responsibility. There is also a strong focus on protecting children’s emotional well-being by making them feel valued, respected, and psychologically safe. Finally, avoiding punitive punishment is thought to support critical thinking and creativity by encouraging children to reflect rather than merely obey.`,
                    "highlight_cues": ["placeholder1", "placeholder2", "placeholder3"],
                    "key_concepts": ["concept1", "concept2", "concept3"],
                },

            },
            "2": {
                topic_1: "",
                Topic_2: "",
                Principles: "",
                Task_1: "",
                Task_2: "",
                Question: "222",
                Response: {
                    "response": `This question touches on a sensitive topic that varies widely across cultures and educational traditions. In many modern Western societies, open communication is seen as essential for helping children understand rules through dialogue rather than fear. At the same time, empathy is emphasized as a way to acknowledge children’s emotions and experiences as legitimate and meaningful. Many educators and parents believe that respecting individual autonomy and self-expression helps children develop an internal sense of responsibility. There is also a strong focus on protecting children’s emotional well-being by making them feel valued, respected, and psychologically safe. Finally, avoiding punitive punishment is thought to support critical thinking and creativity by encouraging children to reflect rather than merely obey.`,
                    "highlight_cues": ["placeholder1", "placeholder2", "placeholder3"],
                    "key_concepts": ["concept1", "concept2", "concept3"],
                },

            }
        }
    }
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}


export const DeleteAnnotationItem = (data: any): any => {
    return request.post("annotations_v2/delete_annotation/", data) 

    const result = {
        data: {
            "ok": true,
        }
    }
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}




// 更新标注项
export const getQuestionValueList = (data: any): any => {
    return request.post("/annotations_v2/get_question_value_list/", data) 

    const result = {
        data: {
            value_list: [
                "自主选择，成年人的人生选择应该由其自主决定",
                "尊重父母，应该理解并回应父母的担忧",
                "尊重父母，应该理解并回应父母的担忧",
            ],
            max_select_num: 3,
            value_list_person: [
                "自主选择，成年人的人生选择应该由其自主决定2",
                "尊重父母，应该理解并回应父母的担忧2",
                "尊重父母，应该理解并回应父母的担忧2",
            ],
            max_select_num_person: 3,
        }
    }

    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}




