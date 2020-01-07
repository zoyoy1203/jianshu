
import axios from 'axios';
import * as  actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import { act } from 'react-dom/test-utils';


const changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
})

const addHomeList = (list,nextpage) => ({
    type: actionTypes.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextpage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page).then((res) => {
            const result = res.data.data;
            console.log(result);
            dispatch(addHomeList(result,page+1));
        })
    }
}

export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_SCROLL_SHOW,
    show
})