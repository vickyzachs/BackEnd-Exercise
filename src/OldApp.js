import { Component } from 'react';
import ListStudent from './Components/ListStudent';

//LOOPING
class App extends Component {
  state ={
    isShow: false,
  }

  toggleButton = () => {
    this.setState({isShow: !this.state.isShow});
  }
  render(){
    const backend = [
      {
        name:'john',
        address:'manado',
      },
      {
        name:'Jane',
        address:'Airmadidi',
      },
      {
        name:'bob',
        address:'Tondano',
      },
    ];
  const webprogramming = [
      {
          name:'Albert',
          address:'manado',
      },
      {
          name:'Tono',
          address:'Airmadidi',
      },
      {
          name:'Anton',
          address:'Tondano',
      },
  ];
    return(
    <>
    {this.state.isShow &&(
       <ListStudent title="Back-end Programming Class" students={backend}/>
       )}
       {/* <ListStudent title="Web Programming Class" students={webprogramming}/> */}
       <button onClick={this.toggleButton}>Toggle List Button</button>
   </>
    );
  };
};

export default App;

