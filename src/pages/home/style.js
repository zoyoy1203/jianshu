import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
`

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner{
        width:100%;
        border-radius: 10px;
        margin-bottom:25px;
    }
`

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    text-decoration: none;
    .pic {
        width: 125px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 10px;
    }
   
`

export const ListInfo = styled.div`
    box-sizing: border-box;
    width: 500px;
    height: 100px;
    float: left;
    margin-bottom:10px;
    padding-right:20px;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
    }
    .desc {
        font-size: 14px;
        line-height: 25px;
        color: #999;
    }
    
`
export const ListDetail = styled.div`
    float: left;
    width: 500px;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    span{
        margin-right: 10px;
        color: #b4b4b4;
        &.icon1 {
            color: #ea6f5a;
        }
    }
`

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`
export const RecommendItem = styled.div`
    cursor: pointer;
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`

export const WriterWrapper = styled.div`
    width: 278px;
    border-radius: 3px;
    height: 400px;
    line-height: 300px;
    text-align: center;
`
export const WriterTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
    text-align: left;
`

export const WriterSwitch = styled.div`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transfrom-origin: center center;
    }
`
export const WriterList = styled.ul`
    position: relative;
    .find_more{
        box-sizing:border-box;
        position: absolute;
        left:5%;
        width: 90%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #787878;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        text-decoration: none;
        .icon{
            font-size: 13px;
        }
    }
`
export const WriterItem = styled.li`
    width:100%;
    height:50px;
    line-height:50px;
    margin-bottom:15px;
    .avatar_img{
        float: left;
        width: 48px;
        height: 48px;
        margin-left:5px;
        cursor: pointer;
        img{
            width:100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
    }
    .name{
        margin-right: 60px;
        font-size: 14px;
        color: #000;
        text-decoration: none;
    }
    .follow{
        float: right;
        font-size: 14px;
        color: #42c02e;
        text-decoration: none;
        .icon{
            font-size:13px;
        }
    }
    p{
        text-align: left;
        padding-left: 70px;
        height: 25px;
        line-height: 25px;
        &.desc{
            margin-top: 2px;
            font-size: 12px;
            color: #969696;
        }
    }
`

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    cursor: pointer;
`

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
`