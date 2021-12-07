import React, { Component } from 'react'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
//引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

class Count extends Component {

    increment = () => {
        const { value } = this.selectedNumber;
        this.props.jia(value * 1);
    }

    decrement = () => {
        const { value } = this.selectedNumber;
        this.props.jian(value * 1);
    }

    incrementIfOdd = () => {

        const { value } = this.selectedNumber;
        if (this.props.currentsum % 2 !== 0) {
            this.props.jia(value * 1)
        }

    }

    incrementAsync = () => {
        const { value } = this.selectedNumber;
        this.props.jiaAsync(value * 1, 500);
    }

    render() {
        return (
            <div>
                <h1>当前求和为:{this.props.currentsum}</h1>
                <select ref={c => this.selectedNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                &nbsp; <button onClick={this.increment}>+</button>
                &nbsp; <button onClick={this.decrement}>-</button>
                &nbsp; <button onClick={this.incrementIfOdd}>当前求和为奇数加</button>
                &nbsp; <button onClick={this.incrementAsync}>异步加</button>
            </div >
        )
    }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    selectedvalue => ({ currentsum: selectedvalue }),
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction,
    }
)(Count)