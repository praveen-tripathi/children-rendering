var list = document.querySelector('.list'),
    last = new Date(),
    threshold = 100,
    count = -1;
class Button extends React.Component {
    constructor(props) {
        super(props);
        console.log(arguments)
        this.events = [""];
        this.log("constructor", false, '(props, context, updater)')
        this.state = {
            count: 0
        };
    }
    log = (txt, user, args) => {
        var now = new Date();
        count++;
        var argsinfo = ((args) ? args.length : 0)+' arguments';
        txt = txt+args;
        if (now - last > threshold) {
            list.innerHTML = '<tr class="row"><td class="col-xs-12" colspan="3"><br></td></tr>' + list.innerHTML;
            last = now;
            count = 0;
        }
        list.innerHTML = '<tr class="row'+((user) ? ' user' : '')+'"><td class="col-xs-1">' + count + '</td><td class="col-xs-9">' + txt + '</td><td class="col-xs-2 mono">' + JSON.stringify(this.state) + '</td></tr>' + list.innerHTML;

    };

    componentWillMount = () => {
        this.log("componentWillMount", false, "()");
    };
    componentWillUnmount = () => {
        this.log("componentWillUnmount", false, "()");
    };

    componentWillUpdate = () => {
        this.log("componentWillUpdate", false, "(nextProps, nextState, nextContext)");
    };
    componentDidUpdate = () => {
        this.log("componentDidUpdate", false, "(prevProps, prevState, prevContext)");
    };

    shouldComponentUpdate = () => {
        this.log("shouldComponentUpdate", false, "(nextProps, nextState, nextContext)");
        return true;
    };

    // Called only once 
    componentDidMount = () => {
        this.log("componentDidMount", false, "(prevProps, prevState, prevContext)")
    };

    // NOT CALLED IN ES6
    getInitialState = () => {
        this.log("getInitialState", false, "()");
    };
    // NOT CALLED IN ES6
    getDefaultProps = () => {
        this.log("getDefaultProps", false, "()");
    };
    // NOT CALLED IN ES6
    componentWillReceiveProps = () => {
        this.log("componentWillReceiveProps", false, "(nextProps)");
    };

    // This is a non-react-native function
    increment = () => {
        this.log("increment", true, "()")
        this.setState({
            count: this.state.count + 1
        });
    };
    render() {
        this.log("render", false, "()");
        return (
            <button className="btn btn-primary" onClick={this.increment}>Clicked {this.state.count} time{(this.state.count>1 || this.state.count===0) ? 's' : ''}</button>

        )
    }
}

var lifecycle = ReactDOM.render(
    <Button/>, document.querySelector('.react'));