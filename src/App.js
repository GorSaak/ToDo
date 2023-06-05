import './App.css';
import {useState} from "react";

function App() {

    const [val, setVal] = useState('')

    function takeInput(e) {
        setVal(e.target.value)
    }

    const [arr, setArr] = useState([])

    function addObject(e) {
        e.preventDefault()
        const newObj = {
            key: Date.now(),
            text: val,
            complete: false,
        }

        setArr([...arr, newObj])
        setVal('')
    }

    function objDel(key) {
        setArr(arr.filter(item => key !== item.key))
    }

    function objDone(key) {
        setArr(arr.map((item) => item.key === key ? {...item, complete: !item.complete} : item));
    }

    console.log(arr)

    return (
        <div className="all">
            <form action="" onSubmit={addObject}>
                <input type="text" onChange={takeInput} value={val}/>
                <button type="submit">Add</button>
            </form>


            <ul>
                {
                    arr.map(obj => (

                        <li key={obj.key}>
                            <input type="checkbox" onChange={() => objDone(obj.key)}/>
                            {obj.text}
                            <button onClick={() => objDel(obj.key)}>X</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default App;
