import React from 'react';
import './index.css';

export default class PomodoroApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {secondsElapsed: 0, time: new Date().setHours(0,0,0,0)};
        this.handleClickStart = this.handleClickStart.bind(this);
        this.handleClickEnd = this.handleClickEnd.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
    }

    handleClickReset(e){
        e.preventDefault();
        this.setState({secondsElapsed: 0, time: new Date().setHours(0,0,0,0)});
        this.componentWillUnmount();
    }    

    handleClickEnd(e){
        e.preventDefault();
        this.componentWillUnmount();
    }

    handleClickStart(e){
        e.preventDefault();
        this.interval = setInterval(() => this.tick() , 1000);   
    }
    

    tick(){
        if(this.state.secondsElapsed < 10000){
            this.setState((prevState) => ({secondsElapsed: prevState.secondsElapsed + 1, 
                                           time: prevState.time + 1000}));
        }
        else{
            this.componentWillUnmount();
        }
    }

    componentDidMount(){
       
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        const hours = new Date(this.state.time).getHours().toString().length == 1 ?
         '0' + new Date(this.state.time).getHours() : new Date(this.state.time).getHours();
        const minutes = new Date(this.state.time).getMinutes().toString().length == 1 ?
         '0' + new Date(this.state.time).getMinutes() : new Date(this.state.time).getMinutes();
        const seconds = new Date(this.state.time).getSeconds().toString().length == 1 ?
         '0' + new Date(this.state.time).getSeconds() : new Date(this.state.time).getSeconds();
        const time = minutes + ' : ' + seconds;
        
        return(
            <div className='center'>
                <div>
                    <h1 className='time'>{this.state.secondsElapsed}</h1>
                <h2 className='time'>{time}</h2>
                </div>
                <div className='time'>
                    <button className='btn' onClick={this.handleClickStart}>Start</button>
                    <button className='btn' onClick={this.handleClickEnd}>Stop</button>
                    <button className='btn' onClick={this.handleClickReset}>Reset</button>
                </div>
            </div>
        );
    }
}