import {recipiData} from '../../utils/recipiData';
import {Card} from '../../utils/index';
import { useState } from 'react';
export const Search=()=>{
    const [recipiList,setRecipiList]=useState(recipiData)
    const [inputText,setInputText]=useState('');
    const changeSearch=(e)=>{
        setInputText(e.target.value);
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
    //console.log(recipiList)
    return(<>
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