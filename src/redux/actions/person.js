import { ADD_PERSON } from "../constant"

// 创建增加一个人的Action动作对象
export const createAddPersonAction = (personObj) => ({ type: ADD_PERSON, data: personObj })