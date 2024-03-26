import React from 'react';
import { useDispatch } from 'react-redux';
import { CartActions } from '../redux/slices/CartSlice';
function CheckOutItems(props) {
    const dispatch=useDispatch();
    const handleDelete=()=>{
        
        props.delete(props.definition.id);
    }
    return (
        <div>
            
            <div style={{ border: "1px solid #E7E7E7", width: "95%", display:"flex", height: "250px", margin: "25px"}}>
                <div style={{margin: "25px"}}>
                    <img height="200px" src={props.definition.image} />
                </div>
                <div style={{ marginTop: "20px"}}>
                    <div style={{fontSize: "20px"}} className="textgap">{props.definition.name}</div>
                    <div style={{ fontWeight: "bold"}} className="textgap">{props.definition.Price}</div>
                    <button style={{margin:"40px"}} onClick={()=>handleDelete()}><img src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png" style={{height:"20px",width:"20px"}} /></button>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default CheckOutItems;