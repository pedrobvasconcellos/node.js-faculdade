import {useState, useEffect} from "react";
import Styles from "./Message.module.css";
import bus from "../../utils/bus.jsx";

function Message(){
    const[visibility, setVisibility] = useState(false);
    const[message, setMessage] =useState("");
    const[type, setType] = useState("");
     useEffect(() => {
        bus.addListener("flash", ({message,type})=>{
            setVisibility(true);
            setMessage(message);
            setType(type);

            setTimeout(()=>{
                setVisibility(false);
            },3000)
        })
     },[])
     return(
        visibility && (
            <div className={`${Styles.message} ${Styles[type]}`}>{message}</div>
        )
     )
}
export default Message;