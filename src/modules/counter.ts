import { ActionType, createReducer, deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;
//액션타입, 액션생성함수, 리듀서

//1.액션타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//2.액션생성함수 
//액션객체에 type 속성만 있거나 받아온값을 그형태 그대로 전달할때 
export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();

//액션객체에 대한 타입
const actions = { increase, decrease }; //액션 생성함수
//ActionType을 사용하여 모든 액션 객체들의 타입을 지정
type CounterAction = ActionType<typeof actions>

//상태에 대한 타입
type CounterState = { count: number }

//초기상태
const initialState: CounterState = { count: 0 }

//3.리듀서
const counter = createReducer<CounterState,CounterAction>(initialState,{
    [INCREASE]: state => ({ count: state.count + 1 }),
    [DECREASE]: state => ({ count: state.count - 1 })
})

export default counter;