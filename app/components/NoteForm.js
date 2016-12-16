var React = require("react");
var NoteForm = React.createClass({
    add(){
        var txt = this.refs.txt.value;
        this.props.add(txt);
        // Cách 2
        // var arr = this.props.parent.state.mang;
        // arr.unshift(txt);
        // this.props.parent.setState(this.props.parent.state);
        this.refs.txt.value = "";
    },
    render(){
        return(
            <div>
                <input type="text" placeholder="Nhập tên note" ref="txt"/>
                <button onClick={this.add}>Thêm</button>
            </div>
        )
    }
});

module.exports = NoteForm;