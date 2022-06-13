import Item from "./todoList"
import './App.css';

var data=[
    { id: 1, title: "Wake Up", status: true },
    { id: 2, title: "Drink Tea", status: false },
    { id: 3, title: "Eat Maggi", status: true },
    { id: 4, title: "Sleep", status: false }
]  


export default function ProfileSection(){
    return(
        <>
        <h1>TODO LIST</h1>
         <div className="profileSection">
            {data.map((x)=>(
                <Item  item={x}/>
            ))}
         </div>
         
        </>
    )
}