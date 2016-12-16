//******************** Cách 1 ***********************//
// var React = require('react');
// var Note = React.createClass({
//     remove(){
//         var arr = that.state.mang;
//         arr.splice(arr.indexOf(this.props.children),1);
//         that.state.mang = arr;
//         that.setState(that.state);
//     },
//     render(){
//         return(
//             <div>
//                 <p>{this.props.children}</p>
//                 <button onClick={this.remove}>Xóa</button>
//             </div>
//         );
//     }
// });
//
// module.exports = Note;

//******************** Cách 2 ***********************//
// var React = require('react');
// var Note = React.createClass({
//     remove(){
//         var arr = this.props.parent.state.mang;
//         arr.splice(arr.indexOf(this.props.children),1);
//         this.props.parent.state.mang = arr;
//         this.props.parent.setState(this.props.parent.state);
//     },
//     render(){
//         return(
//             <div>
//                 <p>{this.props.children}</p>
//                 <button onClick={this.remove}>Xóa</button>
//             </div>
//         );
//     }
// });
//
// module.exports = Note;

//******************** Cách 3 ***********************//

var React = require('react');
var Note = React.createClass({
    getInitialState(){
        return {isUpdating: false}
    },
    update(){
        this.state.isUpdating = true;
        this.setState(this.state);
    },
    save(){
        this.props.update(this.props.id);
        this.state.isUpdating = false;
        this.setState(this.state);
    },
    remove(){
        this.props.remove(this.props.id);
    },
    render(){
        if(this.state.isUpdating){
            return(
                <div>
                    <input type="text" ref="txt"/>
                    <button onClick={this.save}>Lưu</button>
                </div>
            );
        }else{
            return(
                <div>
                    <p>{this.props.children}</p>
                    <button onClick={this.remove}>Xóa</button>
                    <button onClick={this.update}>Sửa</button>
                </div>
            );
        }
    }
});

module.exports = Note;