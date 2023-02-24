import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { GithubProfile } from "../../api/github";

//1.액션타입 - 서버로 데이터요청, 데이터전송성공, 데이터전송에러
export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

//2.액션생성함수 createStandardAction(액션타입)<payload타입>()
export const getUserAsync = createAsyncAction(
    GET_USER_PROFILE,GET_USER_PROFILE_SUCCESS,GET_USER_PROFILE_ERROR
)<undefined,GithubProfile,AxiosError>();