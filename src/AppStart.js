//import the React and ReactDOM form node_modules
import React from "react"
import ReactDOM from "react-dom"



// // hello using React
// let h1=React.createElement('h1',{
//     id:"heading"
// },'hello') //create the h1 element using react


// let h2=React.createElement('h2',{
//     id:"heading"
// },'hello2') //create the h2 element using react


// let perentDiv=React.createElement('div',{
//     id:"perentDiv"
// },[h1,h2])


//JSX- JSX is sytax like HTML but not html (React use parcel and parcel use @babel for compile the JSX TO REACT ELEMENT so we can say jsx is not react it is helping html like syntax that create developer life essey end the end it convert using bable into React element and React element convert in to js object using ReactDOM and object is HMTL using brower engine)
// const h1=<h1>hello</h1>
// const h2= <h2>hello2</h2>
// const perentDiv=([h1,h2])//this is how we can use 




/*
    React Componenets:- two type of react compnenet 1. Class based compnenet, 2. Function based compnenet
 */
//Function Based comonenets
const FirstComponenets=()=>(
    <h1>hello</h1>
)


//React element
const reactElement1=(
    <h1>this is react element</h1>
)
const SecondCompnenets =()=>(
    <div>
        <div>
            {/* using this way we can also call React compnent and it called Component Composition */}
            <FirstComponenets/> 
            {FirstComponenets()}   {/*it is also valid */}
             {reactElement1}    {/* Call the react element in function Compnenets  */}
        </div>
        <div>
            <h2>this is second compnenet</h2>
        </div>
    </div>
)

const root=ReactDOM.createRoot(document.getElementById('root')) //create a root dom using react-dom
// root.render(perentDiv) //render/inject the react element in react dom
// root.render(FirstComponenets()) //render/inject the react element/componenet in react dom
root.render(<SecondCompnenets/>) //render/inject the react element/componenet in react dom