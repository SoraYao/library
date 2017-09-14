import React from 'react';
import PCHeader from '../../components/pc_header/pc_header.js';
import PCSearchBar from '../../components/tools/pc_searchbar.js';
import PCNews from '../../components/pc_center/pc_news.js';
import Database from '../../components/tools/database.js';
import PCFooter from '../../components/pc_footer/pc_footer.js';




export default class PCIndex extends React.Component {
    render() {
        return (
            <div>
            <div id='first-screen'>
                <PCHeader/>
                <PCSearchBar />
            </div>
            <div id='second-screen'>
            <PCNews/>
            </div>
                <div id='bottom'>
                    <Database/>
                    <PCFooter/>
                </div>
                </div>


        )
    }


}



