import { GithubProfile } from "../api/github";
import { AxiosError } from 'axios';
//1.액션타입 - 서버로 데이터요청, 데이터전송성공, 데이터전송에러
const GET_USER_PROFILE = 'github/GET_USER_PROFILE' as const;
const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS' as const;
const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR' as const;

//2.액션생성함수 
export const getUserProfilere = () => ({type:GET_USER_PROFILE});
export const getUserProfileSuccess = (data:GithubProfile) => 
({type:GET_USER_PROFILE_SUCCESS, payload:data})
export const getUserProfileError = (error:AxiosError) => ({ type:GET_USER_PROFILE_ERROR, payload:error})

//3.액션타입, 상태타입, 초기상태
//액션타입
type GithubAction = ReturnType<typeof getUserProfilere> 
| ReturnType<typeof getUserProfileSuccess>
| ReturnType<typeof getUserProfileError>

//상태타입
export type GithubState = {
    userProfile: {
        loading: boolean;
        error: null | Error;
        data: null | GithubProfile
    }
}

//초기상태 지정
const initialState: GithubState = {
    userProfile: {
        loading: false,
        data: null,
        error: null
    }
}
//4.리듀서 생성 - state타입 action타입 
function github(state:GithubState=initialState,action:GithubAction){
    switch(action.type){
        case GET_USER_PROFILE: 
            return {
                userProfile: {
                    loading: true,
                    error: null,
                    data: null
                }
            };
        case GET_USER_PROFILE_SUCCESS:
            return {
                userProfile: {
                    loading: false,
                    error: null,
                    data: action.payload
                }
            };
        case GET_USER_PROFILE_ERROR:
            return {
                userProfile: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }
        default:
            return state;
    }
}
export default github;