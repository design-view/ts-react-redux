//액션타입, 액션생성함수, 리듀서
//1.액션타입
//action.type이 string으로 추론되지 않고 'counter/INCREASE'와 같이
//실제 문자열으로 추론되도록 as const 붙임.
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;

//2.액션생성함수 return { type: INCREASE, payload: diff }
const increase = () => ({ type: INCREASE })
const decrease = () => ({ type: DECREASE })

//액션객체에 대한 타입
type CounterAction = 
ReturnType<typeof increase> 
| ReturnType<typeof decrease>

//3.리듀서
function counter(state,action:CounterAction){

}
export default counter;