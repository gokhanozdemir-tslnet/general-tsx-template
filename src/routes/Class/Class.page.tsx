import { Component } from "react";

interface Props {

}

interface State {
    classState: string
}

class Class extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { classState: "" };
    }
    render() {
        return (<div>
            Class comonent
        </div>);
    }
}

export default Class;