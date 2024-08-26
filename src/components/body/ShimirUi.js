import { useState } from "react";
import { recipiData } from "../../utils/recipiData";
export const ShimirUi=()=>{
    const [recipiList,setRecipiList]=useState(recipiData)
    return(<>
        <div>
            <div className="header-div-shimir"></div>
            <div className="header-search-shimir">
                <div className="search-shimir"></div>
                <div className="search-btn-shimir"></div>
            </div>
            <div className="card-div-shimir">
            {
                recipiData.map(()=>(
                    <div className="card-shimir"></div>
                ))
            }
            </div>
        </div>
    </>)
}