import React, { Component } from 'react'
import store from '../../redux/store'

import { createIncrementAction, createDecrementAction } from '../../redux/count_action'


export default class Count extends Component {

    /*     componentDidMount() {
            store.subscribe(() => {
                this.setState({})
            })
        } */

    increment = () => {
        const { value } = this.selectedNumber;
        store.dispatch(createIncrementAction(value * 1));
    }

    decrement = () => {
        const { value } = this.selectedNumber;
        store.dispatch(createDecrementAction(value * 1));
    }

    incrementIfOdd = () => {

        const { value } = this.selectedNumber;
        const count = store.getState();
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1));
        }
    }

    incrementAsync = () => {
        const { value } = this.selectedNumber;
        setTimeout(() => { store.dispatch(createIncrementAction(value * 1)) }, 500);

    }

    render() {
        return (
            <div>
                <h1>当前求和为:{store.getState()}</h1>
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