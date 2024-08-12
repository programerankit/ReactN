// hello using React
let h1=React.createElement('h1',{
    id:"heading"
},'hello') //create the h1 element using react


let h2=React.createElement('h2',{
    id:"heading"
},'hello2') //create the h2 element using react


let perentDiv=React.createElement('div',{
    id:"perentDiv"
},[h1,h2])

const root=ReactDOM.createRoot(document.getElementById('root')) //create a root dom using react-dom
root.render(perentDiv) //render/inject the react element in react dom