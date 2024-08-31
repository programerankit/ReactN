import React, { Component } from "react";
// import { TeamClass } from "../classCompnenets/TeamClass.js";
class TeamClass2 extends Component{
    constructor(props){
        super(props)
        //console.log("TeamClass Constructor")
    }
    componentDidMount(){
        //console.log("TeamClass componentDidMount")
    }
    render(){
        //console.log("TeamClass2 render")
        return(
        <>
        <h1>hello this is TeamClass2</h1>
        </>)
    }
}
class TeamClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            count:0
        }
        //console.log("child constructor")
    }
    
    componentDidMount(){
        //console.log("chilc did mount")
    }
    componentDidUpdate(){
        //console.log('child did update')
    }
    render(){
        //console.log("chilc render")
        return(<>
            <h1>Name: {this.props.name}</h1>
            <p>Contact: {this.props.email}</p>
            <p>Add: {this.props.add}</p>
            <button onClick={()=>(this.setState({count:this.state.count+1}))}>click {this.state.count}</button>
        </>)
    }
}

export class About extends React.Component{
    constructor(props){
        super(props)
        this.state={
            apiData:[]
        }
        //console.log("Perent constructor")
    }
    async componentDidMount(){  //we will async of this method for call the api
        //console.log('perent did mount')
        let res=await fetch("https://dummyjson.com/recipes")
        let data=await res.json()
        this.setState({
            apiData:data?.recipes ?data.recipes:[]
        })
        // //console.log(this.state.apiData)
        this.timer=setInterval(() => {
            console.log('setinterval')
        }, 1000);
    }
    componentDidUpdate(){
        //console.log('perent compnent did update')
        
    }
    componentWillUnmount(){ //basicaly in this we cleared all the dependences, memeorys that execut on this page
        clearInterval(this.timer)   //clear the setInterval() that are excuting in compnentDidUpdate()
        console.log('perent will unmount')
    }
    render(){
        //console.log("Perent render")
        //console.log(this.state.apiData)
        return(
        <>
            <h1>This is About {this.state.apiData[0]?.userId} </h1>
            {/* <TeamClass name="Ankit Kumar" add="Ganganagar Meerut" email="kumar.ankit778866@gmail.com"/> */}
            {/* <TeamClass name="Mohit Kumar" add="Sardhana Meerut" email="kumar.ankit778866@gmail.com"/> */}
            {/* <TeamClass2 name="Mohit Kumar" add="Sardhana Meerut" email="kumar.ankit778866@gmail.com"/> */}
        </>)
    }
}

// export const About=()=>{
//     return(<>
//         <h1>
//             This is About 
//         </h1>
//         <TeamClass name="Ankit Kumar" add="Ganganagar Meerut" email="kumar.ankit778866@gmail.com"/>
//     </>)
// }



/** LIFE CYCLE OF CLASS COMPNENT
 * always when class conpnenet will render/mount/load then program will create instance of compnent class
 * first will call of constructor of the call compnenet (it will default and custome)
 * second will call of render() method 
 */