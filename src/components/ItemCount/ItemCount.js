import React,{useState} from "react"
import ProprTypes from "prop-types"
import ItemDetail from "../ItemDetail/ItemDetail"


const {onAdd} = this.props
const ItemCount = () => {

    return (
        <div className="stock">
        {/* <button onClick={sub}>-</button>
        <div>{count}</div> */}
        <button onClick={onAdd}>+</button>
        </div>
    )
}

onAdd.ProprTypes={
    onAdd: ProprTypes.func.isRequired
}


export default ItemCount