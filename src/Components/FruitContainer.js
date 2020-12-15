
import React, { useState } from 'react';
import Input from './Input';
import List from './List';

// useState is necessary to replace this.state below:
function FruitContainer(props) {
  // we have TWO pieces of state: fruitsToDisplay and filterValue
  const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits); // define an initial value
  const [filterValue, setFilterValue] = useState(''); // a 'hook': ties this into the registry of state
  // reference these four varialbes as we go:

  const handleFilterChange = (e) => {
    e.preventDefault();
    const filteredValue = e.target.value;
    const filteredFruitList = props.fruits.filter(fruit => {
      return fruit.toLowerCase().includes(filteredValue.toLowerCase());
    })
    setFruitsToDisplay(filteredFruitList);
    setFilterValue(filteredValue);
  }

  return(
    <div>
      <Input value={filterValue} onChange={handleFilterChange} />
      <List fruits={fruitsToDisplay} />
    </div>
  )
}

export default FruitContainer;











// constructor(props) {
//   super(props); //is this necessary?
//   this.state = {
//     // initialize the fruit list as the full list passed into props
//     fruitsToDisplay: this.props.fruits,
//     // initialize the filter value to an empty string (i.e. what we're filtering by)
//     filterValue: ''
//   };
// }
//
// handleFilterChange = (e) => {
//   e.preventDefault();
//   let filterValue = e.target.value;
//   // remove fruits that don't contain the filter value
//   const filteredFruitList = this.props.fruits.filter(fruit => {
//     return fruit.toLowerCase().includes(filterValue.toLowerCase());
//     // this is equivalent to:
//       // if (fruit.toLowerCase() === filterValue.toLowerCase()) {
//       // return true;
//       // }
//   })
//   this.setState({
//     fruitsToDisplay: filteredFruitList, filterValue
//   });
// }
// render() {
//   // NOTES ON ACCESS:
//   // inside of Input component, in order to access props, I have to say props.value (see above)
//   // inside of List Component, in order to access props, I have to say props.fruits (see above)
//   return (

//   )
// }