import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    WriterWrapper,
    WriterTitle,
    WriterSwitch
} from '../style';
class Writer extends Component {
    render() {
       
        return (
            <WriterWrapper>
                    <WriterTitle>
                    热门搜索
                    <WriterSwitch >
                    <span ref={(icon) => {this.spinIcon = icon}} className={ 'iconfont spin'}>&#xe851;</span>
                    换一批
                    </WriterSwitch>
                </WriterTitle>
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
   
    }
}
const mapDispathToProps = (dispatch) => {
    return {
    

    }
}
export default connect(mapStateToProps, mapDispathToProps)(Writer);