/* 
    该文件专门为Count组件生成action对象
*/

//import { applyMiddleware } from 'redux'
//import thunk from 'redux-thunk'
import { INCREMENT, DECREMENT } from './constant'


//同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction = data => { return { type: INCREMENT, data } }
export const createDecrementAction = data => { return { type: DECREMENT, data } }

//异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
export const createIncrementAsyncAction = (data, time) => {
    return (default_dispatch) => {
        setTimeout(() => {
            default_dispatch(createIncrementAction(data))
        }, time)
    }
}