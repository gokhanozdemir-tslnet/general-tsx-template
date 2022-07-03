import { useDispatch, useSelector } from "react-redux";
import { addData, ExampleObject, fetchData } from "../../store/example/example.action";

import { getExampleObjects } from "../../store/example/example.selector"

const Functional = () => {
    //getExampleObjects


    const examples = useSelector(getExampleObjects);
    const dispatch = useDispatch();

    const onClickHandler = () => {

        dispatch(fetchData());

    }

    const onAddClickHandler = () => {

        const data: ExampleObject = {

            description: "todos5",
            isDone: false
        }

        dispatch(addData(data));

    }

    // console.log(examples.data);

    return (<div>Functional Page
        <button onClick={onClickHandler}>Get</button>
        <button onClick={onAddClickHandler}>Add</button>
        {examples.data.map(example => <div key={example.id}>{example.description}</div>)}

    </div>)
}

export default Functional;