import React from 'react';

export default class Carousel extends React.Component {
    constructor() {
        super();
        this.state={
            nowlocal:1,
            count:4,
            autoplay:true,
        }

    }
    componentWillMount() {
        this.goPlay();
    }
    turn(n){
        var _n=this.state.nowlocal+n;
        if(_n<1){
            _n=_n+this.state.count;
        }
        if(_n>this.state.count){
            _n=_n-this.state.count;
        }
        this.setState({nowlocal: _n})
    }
    handleDotClick(i) {
        var option = i - this.state.nowlocal;
        this.turn(option);
    }

    goPlay() {
        if(this.state.autoplay) {
            this.autoPlayFlag=setInterval(() => {
                this.turn(1);
            }, 3000);
        }
    }
    pausePlay() {
        clearInterval(this.autoPlayFlag);
        this.setState({ autoplay:false})
    }
    continuePlay() {
        this.autoPlayFlag=setInterval(() => {
            this.turn(1);
        }, 3000);
        this.setState({ autoplay:true})

    }

    render(){
        let dotNodes = [];
        let n=this.state.count;
        for(let i = 0; i <n; i++) {
            dotNodes[i] = (
                <span
                    key={'dot' + i+1}
                    className={(i+1)===this.state.nowlocal?"on":""}
                    onClick={this.handleDotClick.bind(this, i+1)}>
        </span>
            );
        }
        return(

            <div id="container" onMouseOver={this.state.autoplay?this.pausePlay.bind(this):null} onMouseOut={this.state.autoplay?null:this.continuePlay.bind(this)}>
                <div className="carousel" style={{left:-980 * this.state.nowlocal+'px'}}>
                    <img src={require("../../images/carousel/4.jpg")} />
                    <img src={require("../../images/carousel/1.jpg")} />
                    <img src={require("../../images/carousel/2.jpg")} />
                    <img src={require("../../images/carousel/3.jpg")} />
                    <img src={require("../../images/carousel/4.jpg")} />
                    <img src={require("../../images/carousel/1.jpg")} />
                </div>

                <div className="buttons">
                    {dotNodes}
                </div>

                <a href="javascript:;" id="prev" className="arrow" onClick={this.turn.bind(this, -1)}>&lt;</a>
                <a href="javascript:;" id="next" className="arrow" onClick={this.turn.bind(this, 1)}>&gt;</a>
            </div>

        )


    }



}
