
import { fromJS } from 'immutable';
import * as  actionTypes from './actionTypes';

const defaultState = fromJS({
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1,
    showScroll: false
});

const changeHomeData = (state, action) => {
    return state.merge({
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
    });
}

const addArticleList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextpage
    });
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state,action);
        case actionTypes.ADD_ARTICLE_LIST:
           return addArticleList(state, action);
        case actionTypes.TOGGLE_SCROLL_SHOW:
            return state.set('showScroll',action.show);
        default:
            return state;
    }
  

}