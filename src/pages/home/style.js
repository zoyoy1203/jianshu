import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
`

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        width: 125px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 10px;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        line-height: 18px;
        color: #999;
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
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`
export const WriterTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
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