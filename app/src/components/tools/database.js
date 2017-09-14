import React from 'react';


export default class Database extends React.Component {
    constructor() {
        super();

        this.state={
            current:1,
            count:3,
        }
    }
    handleClick(index){
       this.setState({current:index})


    }




    render(){
        let Tab = [],Pane=[];

        let n=this.state.count;
        for(let i = 0; i < n; i++) {
           Tab[i]=(i+1)===this.state.current?"active":"" ;
            Pane[i]=(i+1)===this.state.current?"active":"pane" ;

        }

        return(
        <div>
        <div>
          <ul className="nav clearfix ">
              <li className={Tab[0]} onClick={this.handleClick.bind(this,1)}>中文数据库</li>
              <li className={Tab[1]}  onClick={this.handleClick.bind(this,2)}>外文数据库</li>
              <li className={Tab[2]}  onClick={this.handleClick.bind(this,3)}>试用数据库</li>
          </ul>
          </div>
           <div className="tab-content">
                <div className={Pane[0]}><img src={require("../../images/tab/cn.png")}/></div>
                <div className={Pane[1]}><img src={require("../../images/tab/en.png")}/></div>
                <div className={Pane[2]}><img src={require("../../images/tab/cn.png")}/></div>

            </div>
            </div>


        )
    }




}



