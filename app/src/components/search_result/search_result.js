import React from 'react';
import Logo from '../../images/logo.png';
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory();


export default class PCSearch extends React.Component{
    constructor(){
    super();
        this.state={
            count:'',
            books:'',
        }

    }

    componentDidMount() {
        this.setState({
            search: this.props.match.params.keyword,
        })
        this.GetData()
    }

    GetData(){
        var myFetchOptions={
            method:'GET',
            mode: "cors",
            credentials: 'include',
            headers: { 'Accept': 'application/json, text/plain, */*' }
        };

        fetch("data.json",myFetchOptions)
            .then(res=>{console.log(res);
                return res.json()}
        ).then((json)=>{
                this.setState({books:json.books,count:json.count})
            });
    }

    handlerChange(e){
        var value=e.target.value;
        this.setState({search:value});
    }
    handleSubmit(e) {
        e.preventDefault();
        history.push({
            pathname: '/search/' + this.state.search,
        });
        this.GetData()
    }





render(){
    let BookList=[];
    for(var i = 0; i <this.state.count; i++) {
        BookList[i] = (
            <li className="subject-item" key={i}>
                <div className="pic"><a href="#"><img src={this.state.books[i].image} width="90px"/></a></div>
                <div className="info">
                    <h2>
                        <a title={this.state.books[i].title} >
                            {this.state.books[i].title}
                        </a>
                    </h2>
                    <div className="pub">
                        {this.state.books[i].author}/ {this.state.books[i].publisher}/ {this.state.books[i].pubdate} / {this.state.books[i].price}
                    </div>
                </div>
            </li>
        );
    }
 return(
  <div>
 <div id="search-nav" className="clearfix">
      <div id="search-bottom">
         <div className="nav-logo"><img src={Logo} width="60px" height="60px"/></div>
       <div className="nav-search">
           <form onSubmit={this.handleSubmit.bind(this)}>
               <input id="regHeadInfo" value={this.state.search||""}  onChange={this.handlerChange.bind(this)}  placeholder="输入关键词检索图书或者点检索直接进入"/>
               <input type="submit" className="search-submit" value="搜索"/>
           </form>
       </div>
          </div>
     </div>
      <div id="wrapper">
     <div id="content">
        <div className="trr">搜索结果1-15 &nbsp; 共{this.state.count}</div>
        <ul className="subject-list clearfix">
            {BookList}
        </ul>
     </div>
     </div>
      </div>


 )

}





}
