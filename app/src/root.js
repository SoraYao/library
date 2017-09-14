import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import MediaQuery from 'react-responsive';
import PCIndex from './containers/Home/PCIndex.js';
import PCSearch from './components/search_result/search_result.js'
import {HashRouter as Router,Route,Link} from 'react-router-dom';




export default class Root extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <Router >
                        <div>
                            <Route exact path="/" component={PCIndex}/>
                            <Route path="/search/:keyword?" component={PCSearch}/>
                         </div>
                      </Router>
                </MediaQuery>
                <MediaQuery query='(max-device-width:1224px)'>
                </MediaQuery>
            </div>
        )

    }
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
