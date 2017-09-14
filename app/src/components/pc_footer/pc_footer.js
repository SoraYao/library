import React from 'react';




export default class PCFooter extends React.Component {
    constructor(){
        super();


    }



    render() {
        return (
            <div>
            <div className="connect">
                <h1>联系我们</h1>
                <ul className="clearfix">
                    <li>
                    <a href="">
                        <img src={require("../../images/connect/QQ.png")}/>
                    <span>QQ</span>
                    </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require("../../images/connect/wechat.png")}/>
                            <span>微信</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={require("../../images/connect/weibo.png")}/>
                            <span>微博</span>
                        </a>
                    </li>
                </ul>
            </div>
              <div className="foot">
              <ul className="foot-list">
                  <li>
                      <div className="title">常用链接</div>
                      <div><a href="http://www.nlc.cn/" target="_blank">中国国家图书馆</a></div>
                      <div><a href="http://www.calis.edu.cn" target="_blank">calis主页</a></div>
                  </li>
                  <li>

                      <div className="title">研究与投稿</div>
                      <div><a>本校最新SCI收录</a></div>
                      <div><a>如何开始学术研究</a></div>
                      <div><a>JCR期刊分区表</a></div>
                      <div><a>投稿指南</a></div>
                  </li>
                  <li>
                      <div className="title">关于我们</div>
                      <div><a>电子馆刊</a></div>
                      <div><a>规章制度</a></div>
                      <div><a>历史沿革</a></div>
                      <div><a>组织机构</a></div>
                      <div><a>馆长致辞</a></div>
                  </li>
                  <li>
                      <div className="title">常用工具下载</div>
                      <div><a >移动图书馆服务</a></div>
                      <div><a>NoteExpress</a></div>
                      <div><a>SciVal分析工具</a></div>
                  </li>
               </ul>
                  <div className="copyright">图书馆版权所有</div>
               </div>

            </div>



        )
    }


}