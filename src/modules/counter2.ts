//액션타입, 액션생성함수, 리듀서
//1.액션타입
//action.type이 string으로 추론되지 않고 'counter/INCREASE'와 같이
//실제 문자열으로 추론되도록 as const 붙임.
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;

//2.액션생성함수 return { type: INCREASE, payload: diff }
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

//액션객체에 대한 타입
type CounterAction = 
ReturnType<typeof increase> 
| ReturnType<typeof decrease>

//상태에 대한 타입
type CounterState = { count: number }

//초기상태
const initialState: CounterState = { count: 0 }

//3.리듀서

function counter2(
    state:CounterState=initialState,
    action:CounterAction){
    switch(action.type){
        case INCREASE:
            return { count: state.count + 1 };
        case DECREASE:
            return { count: state.count - 1};
        default:
            return state;
    }
}


export default counter2;