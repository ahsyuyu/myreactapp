/** @jsx React.DOM */

//var othercomponent=Require("other"); 
var comp2 = React.createClass({
  getInitialState: function() {
    return {bar: "world"};
  },
  renderItem: function(item,index){
    return <div>{index+1},{item}</div>;
  },
  render: function() {
    return (
      <div>
        {this.props.results.map(this.renderItem)}
      </div>
    );
  }
});
module.exports=comp2;