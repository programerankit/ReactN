import {recipiData} from '../../utils/recipiData';
import {Card, Hearder, ShimirUi,swiggyApi} from '../../utils/index';
import { useEffect, useState } from 'react';
export const Search=()=>{
    const [recipiList,setRecipiList]=useState([])
    const [inputText,setInputText]=useState('');
    const changeSearch=(e)=>{
        let text=e.target.value;
        //setInputText(e.target.value);
        setRecipiList(recipiData.filter(recipiObj=>{
            if(text!='')
                return recipiObj.name.toLowerCase().includes(text.toLowerCase())
            else
                return recipiObj;
        }
    ))
    }
    const fillterCardList=()=>{
        setRecipiList(recipiData.filter(recipiObj=>{
            if(inputText!='')
                return recipiObj.name.toLowerCase().includes(inputText.toLowerCase())
            else
                return recipiObj;
        }
    ))
    }
    const loadData= async ()=>{
        let res=await fetch("https://dummyjson.com/recipes")
        // console.log(swiggyApi)
        // let res=await fetch(swiggyApi,{
            // method: "post",
        // })// its live api of swigy
        console.log(res)
        let jsonData=await res.json();
        //here we willuse optional chaining with condition rendring
        console.log(jsonData)
        let recipesData=jsonData?.recipes ?jsonData.recipes:[]; 
        setRecipiList(recipesData)
    }
    useEffect(()=>{
        loadData();
    },[])
    //console.log(recipiList)

    //here we will use condition rendring for create better User expirence using shimir ui
    if(recipiData.length==0){
       return <ShimirUi/>
    }


    return(<>
        {/* <Hearder/> */}
        <div className='search-div'>
            <input type='text' className='search' onChange={changeSearch}/>
            <button className='searchBtn' onClick={fillterCardList}>Search</button>
        </div>
        <div style={{display:'flex',gap:'50px',flexWrap:'wrap'}}>
            {
                recipiList.map((recipiObj)=>{
                    return(<>
                        <Card recipiObj={recipiObj} key={recipiObj.userId}/>
                    </>)    
                })
            }
            </div>
    </>)
}