import Age from './age'
import './profile.css'
import gaurav from "./gauravp.jpg"
export default function Profile(){
    // const imageurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKUaRWOzWDjiuKvLWYjxfs91mJB929UL6gA&usqp=CAU'
 
    return (
     <>
     <div id="profile">
        <img src={gaurav} alt="" />
        <h1>Name : Er. Gaurav Kumar </h1>
        <Age />
        </div> 
           
     </>
    )
}