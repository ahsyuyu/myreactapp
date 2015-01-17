/** @jsx React.DOM */

var comp1=Require("comp1"); 
var comp2=Require("comp2"); 
var dataset=Require("dataset");
var main = React.createClass({
  getInitialState: function() {
    window.main=this;
    return {bar: "world", results:dataset.module1};
  },
  getNewData: function(){
    var newdata=[];
    for(var i=0; i<10; i++){
      newdata.push(Math.random());
    }
    this.setState({results:newdata});
  },
  render: function() {
    return (
      <div>
        Hello,{this.state.bar}
        <comp1 />
        <button onClick={this.getNewData}>click</button>
        <comp2 results={this.state.results}/>
      </div>
    );
  }
});
module.exports=main;