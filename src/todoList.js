import './App.css';
export default function Item(props){
    const {item}=props;
    return Check(item);
}

const Check=(listItem)=>{
    
    if(listItem.status===true ){
        return <h3 style={{color:'green' }}>{listItem.title}</h3>;
    }
    else{
        return <h3 style={{color:'red' }}>{listItem.title}</h3>;
    }
}