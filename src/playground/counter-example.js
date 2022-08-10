class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handlMinusOne = this.handlMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        if(!isNaN(count)) {
            this.setState(() => ({count}));
        }
    }

    componentDidUpdate(prevState, prevProps) {
        console.log('updated');
        if(this.state.count !== prevState.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        // Auto reRenders with setState.
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    handlMinusOne() {
        // Use previous state param to get previous state of object !!!
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    handleReset() {
        
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handlMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;

// const addOne = () => {    
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// // Function that houses the frontend display
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// // Function to render new state of JSX
// renderCounterApp();
