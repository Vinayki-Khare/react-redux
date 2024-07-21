import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { withdrawMoney } from './state/action-creator';

const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
    return (
        <div>
            {/* <button class="btn btn-outline-success"
                onClick={() => {
                    dispatch(actionCreators.depositMoney(100))
                }}
            >+</button>
            <button class="btn btn-outline-success"
                onClick={() => {
                    dispatch(actionCreators.depositMoney(100))
                }}
            >-</button> */}
            <button class="btn btn-outline-success"
                onClick={() => {
                    depositMoney(100)
                }}
            >+</button>
            <button class="btn btn-outline-success"
                onClick={() => {
                    withdrawMoney(100)
                }}
            >-</button>
        </div>
    )
}

export default Shop