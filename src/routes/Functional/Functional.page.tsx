import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/example/example.action";

import { getExampleObjects } from "../../store/example/example.selector"

const Functional = () => {
    //getExampleObjects


    const examples = useSelector(getExampleObjects);
    const dispatch = useDispatch();

    const onClickHandler = () => {

        dispatch(fetchData());

    }

    // console.log(examples.data);

    return (<div>Functional Page
        <button onClick={onClickHandler}>Get</button>
        {examples.data.map(example => <div key={example.id}>{example.description}</div>)}

    </div>)
}

export default Functional;