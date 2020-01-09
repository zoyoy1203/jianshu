import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
    WriterWrapper,
    WriterTitle,
    WriterSwitch,
    WriterList,
    WriterItem
} from '../style';
class Writer extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <WriterWrapper>
                <WriterTitle>
                    推荐作者
                    <WriterSwitch >
                    <span ref={(icon) => {this.spinIcon = icon}} className={ 'iconfont spin'}>&#xe851;</span>
                    换一批
                    </WriterSwitch>
                </WriterTitle>
                <WriterList>
                {
                    list.map((item, index) => {
                        return(
                            <WriterItem key={item.get('id')}>
                                <a className="avatar_img" href="#">
                                    <img src={item.get('avatar')} alt='' />
                                </a>
                                <p>
                                    <a className="name"  href="#">{item.get('nickname')}</a>
                                    <a className="follow"  href="#">
                                        <span  className='iconfont icon'>&#xe641;</span>
                                        关注
                                    </a>
                                </p>
                                <p className="desc">写了{item.get('total_wordage')}字·{item.get('total_likes_count')}喜欢</p>
                            </WriterItem>
                        );
                    })
                }     
                <a href="#" className="find_more">
                    查看全部
                    <span  className='iconfont icon'>&#xe634;</span>
                </a>        
                </WriterList>
              
              
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home','writerList'])
    }
}
const mapDispathToProps = (dispatch) => {
    return {
    

    }
}
export default connect(mapStateToProps, mapDispathToProps)(Writer);