
import { fromJS } from 'immutable';

const defaultState = fromJS({
    articleList: [
        {
            id:1,
            title: '⚠️2019年iOS面试反思总结⚠️--⚠️不断更新当中ing⚠️',
            desc: '2019年的夏天，成都的天气格外的闷热。 因为公司的原因，导致我不得不考虑去面试一家稳定成熟的大公司，自己从一开始也一直梦想着进入一家可以得到广...',
            imgUrl: 'https://oimagec4.ydstatic.com/image?id=-5397300958976572132&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60'
        },
        {
            id:2,
            title: '⚠️2019年iOS面试反思总结⚠️--⚠️不断更新当中ing⚠️',
            desc: '2019年的夏天，成都的天气格外的闷热。 因为公司的原因，导致我不得不考虑去面试一家稳定成熟的大公司，自己从一开始也一直梦想着进入一家可以得到广...',
            imgUrl: 'https://oimagec4.ydstatic.com/image?id=-5397300958976572132&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60'
        },
        {
            id:3,
            title: '⚠️2019年iOS面试反思总结⚠️--⚠️不断更新当中ing⚠️',
            desc: '2019年的夏天，成都的天气格外的闷热。 因为公司的原因，导致我不得不考虑去面试一家稳定成熟的大公司，自己从一开始也一直梦想着进入一家可以得到广...',
            imgUrl: 'https://oimagec4.ydstatic.com/image?id=-5397300958976572132&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60'
        },
        {
            id:4,
            title: '⚠️2019年iOS面试反思总结⚠️--⚠️不断更新当中ing⚠️',
            desc: '2019年的夏天，成都的天气格外的闷热。 因为公司的原因，导致我不得不考虑去面试一家稳定成熟的大公司，自己从一开始也一直梦想着进入一家可以得到广...',
            imgUrl: 'https://oimagec4.ydstatic.com/image?id=-5397300958976572132&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60'
        }
    ],
    recommendList: [
        {
           id: 1,
           imgUrl: "//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png",
        },
        {
            id: 2,
            imgUrl: "//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
         },
         {
            id: 3,
            imgUrl: "//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",
         },
         {
            id: 4,
            imgUrl: "//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png",
         },
    ],
    writerList: [
        {
            id: 1,
            avatar: "https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            name: "卢璐说",
            desc: "写了1375.9k字 · 28.3k喜欢"
        },
        {
            id: 1,
            avatar: "https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            name: "卢璐说",
            desc: "写了1375.9k字 · 28.3k喜欢"
        },
        {
            id: 1,
            avatar: "https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            name: "卢璐说",
            desc: "写了1375.9k字 · 28.3k喜欢"
        }
    ],
    page: 1,
    totalPage: 1
});

export default (state=defaultState, action) => {
    switch(action.type) {
       
        default:
            return state;
    }
  

}