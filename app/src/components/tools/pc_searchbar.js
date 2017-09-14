import React from 'react';
import createHashHistory from 'history/createHashHistory';
const history = createHashHistory();


export default class PCSearchBar  extends React.Component {
    constructor() {
        super();
        this.state={
            search:'',
        }

    }

    handlerChange(e){
        var value=e.target.value;
        this.setState({search:value});
    }
    enterHandle() {
        history.push({
            pathname: '/search/'+this.state.search,
        });}

    render() {
        return (
            <div>
              <div className="banner">
                  <h1 className="slogan">XX·图书馆</h1>
               <div className="reghead ">
                   <select className="catagory">
                       <option value="">题名</option>
                       <option value="">ISBN/ISSN</option>
                       <option value="">著者</option>
                       <option value="">出版社</option>
                       <option value="">索书号</option>
                   </select>
                   <form onSubmit={this.enterHandle.bind(this)}>
                    <input id="regHeadInfo" value={this.state.search} onChange={this.handlerChange.bind(this)}   placeholder="输入关键词检索图书或者点检索直接进入"/>
                       <button  type="submit"> 检索</button>
                   </form>
                   </div>
              </div>
                </div>

                  )


    }



}

