import Lockr from 'lockr';
import mockedData from 'assets/tableData.mock.json';

export const GET_POSTS_DATA = Symbol('@@axios/GET_POSTS_DATA');
export const GET_POSTS_DATA_ERROR = Symbol('@@axios/GET_POSTS_DATA_ERROR');
export const GET_POSTS_DATA_SUCCESS = Symbol('@@axios/GET_POSTS_DATA_SUCCESS');
export const SET_ITEMS_PER_PAGE = Symbol('@@axios/SET_ITEMS_PER_PAGE');
export const ADD_POST = Symbol('@@axios/ADD_POST');
export const PUSH_POST = Symbol('@@axios/PUSH_POST');
export const SAVE_POSTS = Symbol('@@axios/SAVE_POSTS');

function requestData() {
  return {
    type: GET_POSTS_DATA,
  };
}

function savePosts() {
  return (dispatch, getState) => {
    const postsList = getState().api.postsList.data;
    Lockr.set('postsList', postsList);
    return {
      type: SAVE_POSTS,
    };
  };
}

function receiveData(json) {
  return (dispatch) => {
    dispatch(savePosts(json));

    return {
      type: GET_POSTS_DATA_SUCCESS,
      data: json,
    };
  };
}

function receiveError(json) {
  return {
    type: GET_POSTS_DATA_ERROR,
    data: json,
  };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(requestData());

    // Mock successful request for data
    setTimeout(() => dispatch(receiveData(mockedData)), 1500);
  };
}

export function setItemsPerPage(amount) {
  Lockr.set('postsPerPage', amount);
  return {
    type: SET_ITEMS_PER_PAGE,
    amount,
  };
}

export function pushPost(post) {
  return (dispatch, getState) => {
    const newPostCount = getState().api.postsList.data.length + 1;
    return dispatch({
      type: PUSH_POST,
      id: newPostCount,
      user_name: 'MySuperCurrentUser',
      post_title: post,
      views: 0,
      likes: 0,
      created_at: Math.floor(+new Date() / 1000),
    });
  };
}

export function addPost(post) {
  console.log(post);
  return (dispatch) => {
    dispatch(pushPost(post));
    dispatch(savePosts());
  };
}
