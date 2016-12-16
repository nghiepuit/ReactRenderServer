//******************** Cách 1 ***********************//
// var React = require('react');
// var Note = require('./Note.js');
// var List = React.createClass({
    {/*getInitialState(){*/}
        {/*that = this;*/}
        {/*return {mang: ["android","ios","nodejs"]}*/}
    {/*},*/}
    {/*render(){*/}
        {/*return(*/}
            {/*<div>*/}
                {/*{*/}
                    {/*this.state.mang.map((e,i) => <Note key={i}>{e}</Note>)*/}
                {/*}*/}
            {/*</div>*/}
        {/*)*/}
    {/*}*/}
{/*});*/}

{/*module.exports = List;*/}


//******************** Cách 2 ***********************//
// var React = require('react');
// var Note = require('./Note.js');
// var List = React.createClass({
//     getInitialState(){
//         return {mang: ["android","ios","nodejs"]}
//     },
//     render(){
//         return(
//             <div>
//                 {
//                     this.state.mang.map((e,i) => <Note key={i} parent={this}>{e}</Note>)
//                 }
//             </div>
//         )
//     }
// });
//
// module.exports = List;

//******************** Cách 3 ***********************//

var React = require('react');
var Note = require('./Note.js');
var NoteForm = require('./NoteForm.js');
var List = React.createClass({
    remove(i){
        this.state.mang.splice(i,1);
        this.setState(this.state);
    },
    add(obj){
        this.state.mang.unshift(obj);
        this.setState(this.state);
    },
    update(i){

    },
    getInitialState(){
        return {mang: ["android","ios","nodejs"]}
    },
    render(){
        return(
            <div>
                <NoteForm add={this.add} parent={this}/>
                {
                    this.state.mang.map((e,i) => <Note id={i} key={i} parent={this} update={this.update} remove={this.remove}>{e}</Note>)
                }
            </div>
        )
    }
});

module.exports = List;