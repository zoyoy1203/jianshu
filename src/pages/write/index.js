import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Write extends PureComponent {
    render() {
        return (
           <LoginWrapper>
               <LoginBox>
                <Input placeholder='账号'></Input>
                <Input placeholder='密码'></Input>
                <Button>登录</Button>
               </LoginBox>
           </LoginWrapper>
        )
    }

}

const mapState = (state) => ({
  
});

const mapDispatch = (dispatch) => ({
   
})
export default connect(mapState,mapDispatch)(Write);