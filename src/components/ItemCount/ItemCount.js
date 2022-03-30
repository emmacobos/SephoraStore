import React,{useState} from "react"


const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)

    const onAdd = () => {
        if(count < stock){
            setCount (count + 1)
        }
    }
    function sub() {
        if (count > 1) {
          setCount(count - 1)
        }
    }
    return (
        <div className="stock">
        <button onClick={sub}>-</button>
        <div>{count}</div>
        <button onClick={onAdd}>+</button>
        </div>
    )
}

export default ItemCount