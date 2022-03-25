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
        <>
        <button onClick={sub}>-</button>
        <p>{count}</p>
        <button onClick={onAdd}>+</button>
        </>
    )
}

export default ItemCount