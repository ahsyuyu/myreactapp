/** @jsx React.DOM */

//var othercomponent=Require("other"); 
var comp1 = React.createClass({
  getInitialState: function() {
    return {bar: "world"};
  },
  render: function() {
    return (
      <div>
        This is component 1
      </div>
    );
  }
});
module.exports=comp1;