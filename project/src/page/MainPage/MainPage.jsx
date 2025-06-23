import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addNewHabits, changeCheckBox } from "../../slice/HabitSlice";

function MainPage(){
    const dispatch = useDispatch();
    const base = useSelector((state) => state.HabitSlice)
    const [text, setText] = useState('')
    const [progress, setProgress] = useState([])
    useEffect(()=>{
        const arr = []
        for(let i = 0; i < base.length; i++){
            const result = base[i].days.reduce((sum, el)=> el.status ? sum += 1 : sum +=0,0)
            arr.push({title : base[i].title, length : result})
        }
        setProgress(arr)
    },[base])
    return (
        <>
        <input type="text" onChange={el => setText(el.target.value)}/>
        <button onClick={()=> dispatch(addNewHabits(text))}>Добавить привычку</button>
        {base.map(el => <div>
            <h2>{el.title}</h2>
            <div>{el.days.map(elem =><input onChange={()=> dispatch(changeCheckBox({status : elem.status, day:elem.day, id: el.id}))} checked={elem.status} type="checkbox"/>)}</div>
        </div>)}
        {progress.map(el => <div>
            <h2>{el.title} : {el.length }</h2>
        </div>)}
        </>
    )
    
}
export default MainPage