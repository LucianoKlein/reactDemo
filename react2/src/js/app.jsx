import React from 'react';
import ReactDOM from 'react-dom';

// let ExampleApplication = React.Component({
//     render: function() {
//         let elapsed = Math.round(this.props.elapsed / 100);
//         let seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');
//         let message = 'React has been successfully running for ' + seconds + 'seconds.';

//         return React.DOM.p(null, message);
//     }
// });

// let ExampleApplicationFactory = React.createFactory(ExampleApplication);


// let start = new Date().getTime();
class ExampleComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = {

      }
   }
   render() {
      let elapsed = Math.round(this.props.elapsed / 100);
      let seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');
      let message = 'React has been successfully running for ' + seconds + 'second.';

      return <h1>Hello {seconds}</h1>;
   }
};
let start = new Date().getTime();


setInterval(function() {
    
    let currTime = new Date().getTime() - start;
    ReactDOM.render(
        // ExampleApplicationFactory({elapsed: new Date().getTime() - start}),
        <ExampleComponent elapsed={new Date().getTime() - start}/>,
        document.getElementById('app')
    );
}, 50)