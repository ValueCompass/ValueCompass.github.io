let allQuestions = []
let pool = []          // 随机抽题剩余题库
let sequentialIndex = 0 // 顺序抽题索引

/**
 * 扁平化 JSON，把所有 question 拉平
 * 格式: { category, topic, question }
 */
function flattenQuestions(data) {
    const all = []
    Object.entries(data).forEach(([category, topics]) => {
        Object.entries(topics).forEach(([topic, questions]) => {
            questions.forEach(q => {
                all.push({
                    category,
                    topic,
                    questionList: data[category][topic], // 在topic下的question list
                    currQuestion: q, // 选中的question
                })
            })
        })
    })
    return all
}

/**
 * 初始化题库
 * @param {Object} data JSON 数据
 */
export function initQuestions(data) {
    allQuestions = flattenQuestions(data)
    pool = [...allQuestions]
    sequentialIndex = 0
}

/**
 * 随机抽取 n 个不重复题目
 * 如果剩余题目不足 n 个，从总题库随机补足
 * @param {number} n
 */
export function getRandomQuestions(n = 3) {
    if (!allQuestions.length) return []

    const result = []

    // 从剩余 pool 中抽取
    while (result.length < n && pool.length > 0) {
        const index = Math.floor(Math.random() * pool.length)
        result.push(pool.splice(index, 1)[0])
    }

    // 如果还不够，从全部题库随机补足
    while (result.length < n) {
        const index = Math.floor(Math.random() * allQuestions.length)
        const item = allQuestions[index]
        if (!result.includes(item)) {
            result.push(item)
        }
    }

    return result
}

/**
 * 按顺序抽取 n 个题目，依次循环
 * @param {number} n
 */
export function getSequentialQuestions(n = 3) {
    if (!allQuestions.length) return []

    const result = []

    for (let i = 0; i < n; i++) {
        result.push(allQuestions[sequentialIndex])
        sequentialIndex++
        if (sequentialIndex >= allQuestions.length) {
            sequentialIndex = 0 // 循环回到开头
        }
    }

    return result
}

/**
 * 重置随机池和顺序索引
 */
export function resetQuestions() {
    pool = [...allQuestions]
    sequentialIndex = 0
}
