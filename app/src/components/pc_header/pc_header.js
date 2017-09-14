import React from 'react';
import Logo from '../../images/logo.png';






export default class PCHeader extends React.Component {
    constructor() {
        super();
        this.state={
            current:1,
            count:2,
            visible:false,
            username:'',
            password:'',
            rusername:'',
            rpassword:'',
            login:false

        }

    }
    handleClick(index){
        this.setState({current:index})
    }
    login(){
        this.setState({visible:true})
    }
    logout(){
        alert("成功注销");
        this.setState({login:false});

    }
    close(){
        this.setState({visible:false})
    }

  reg(e) {
      let url = "http://127.0.0.1:3000/form";
      let formData = new FormData();
      formData.append('username', this.state.rusername);
      formData.append('password', this.state.rpassword);
      fetch(url, {
          method: 'post',
          body: formData,
      }).then(function (res) {
              if (res.status == "201") {
                  alert("注册成功")

              } else if (res.status == "400") {
                  alert("注册失败")

              }
          }
      )
          this.setState({login:true,visible:false,rpassword:''})

  }
    log(e) {
        let url = "http://127.0.0.1:3000/login";
        let formData = new FormData();
        formData.append('username', this.state.username);
        formData.append('password', this.state.password);
        fetch(url, {
            method: 'post',
            body: formData,
        }).then( (res)=> {
                if (res.status == "201") {
                    alert("登陆成功");
                    this.setState({login:true,visible:false, password:''});

                } else if (res.status == "400") {
                    alert("用户不存在或密码错误")
                }
            }
        )


    }





    render() {
        let Tab = [],Form=[];
        let n=this.state.count;
        for(let i = 0; i < n; i++) {
            Tab[i]=(i+1)===this.state.current?"active":"";
            Form[i]=(i+1)===this.state.current?"active":"" ;
        }

        let display=this.state.visible?"":"hide";
        let barbutton=this.state.login?<a className='login' onClick={this.logout.bind(this)}>{this.state.username||this.state.rusername}</a>
            :<a className='login' onClick={this.login.bind(this)}>登录</a>


        return (
            <div>
            <div className='logo'>
                <img src={Logo} width="40px" height="40px" />
            </div>
            <ul className='information'>
            <li><a>本馆概况</a></li>
            <li><a>联系我们</a></li>
            <li>
                {barbutton}
            </li>
            </ul>
              <div id="login-box" className={display}>
                  <img src={require("../../images/close.png")} className="close" onClick={this.close.bind(this)}/>
                  <ul className="tab clearfix">
                      <li  className={Tab[0]}  onClick={this.handleClick.bind(this,1)}>注册</li>
                      <li  className={Tab[1]}  onClick={this.handleClick.bind(this,2)}>登录</li>
                  </ul>
                  <div className="form"  >
                      <form id="register"  className={Form[0]} onSubmit={this.reg.bind(this)} >
                          <div className="signup">
                          <p><input type="text" value={this.state.rusername}    placeholder="用户名" onChange={e=>this.setState({rusername:e.target.value})}/></p>
                          <p><input type="password" value={this.state.rpassword}    placeholder="密码(不少于6位)" onChange={e=>this.setState({rpassword:e.target.value})}/></p>
                          <input className="button"  type="submit" value="注册" />
                          </div>
                      </form>
                      <form id="login"  className={Form[1]} onSubmit={this.log.bind(this)} >
                          <div className="entry">
                          <p><input type="text" value={this.state.username} placeholder="用户名" onChange={e=>this.setState({username:e.target.value})}/></p>
                          <p><input type="password" value={this.state.password}  placeholder="密码"onChange={e=>this.setState({password:e.target.value})}/></p>
                          </div>
                          <input  className="button" type="submit" value="登录" />
                      </form>
                  </div>
              </div>
                <div id="blur" className={display} ></div>
            </div>


                )


    }


}