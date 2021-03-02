// const todos = [
//     {id:'1', text:"coding"},
//     {id:'2', text:"learning"},
// ];
// const todoItems = todos.map((todo) =>
//     <li key={todo.id}>
//         {todo.text}
//     </li>
// );
// const todoItemsNoId = todos.map((todo, index) =>
//     // Only do this if items have no stable IDs
//     <li key={index}>
//         {todo.text}
//     </li>
// );

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>{number}</li>
//   );

//   return (
//       <ul>
//           {listItems}
//       </ul>
//   );
// }
let  listId = 0;
// Extract listItems
function ListItem(props) {
  const value = props.value;
        // There is no need to specify the key here!
  return <li>{value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  
  // Now we don't need this becasue we embedded map() in JSX is in return 
//   const listItems = numbers.map((number) => (
//             // Key should be specified insinde the array.
//     <ListItem key={number.toString()} value={number} />
//   ));

//   return (
//     <ul>
//         {listItems}
//     </ul>
//   );
    // Embedding map() in JSX
    return (
        <ul>
            {numbers.map(number => 
                <ListItem 
                    key={listId++}
                    value={number}
                />
            )}
        </ul>
    )
}

export default NumberList;
