import './App.css'
// import './ab';
// import Ab from './Ab'
// import List from './List'
// import { useState, useEffect } from 'react'
// import { map } from 'jquery'

//   .then(console.log(response))
// console.log('serverData', serverData)

// function App() {
//   const [data, setData] = useState(null)

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       //   .then((data) => console.log(data[0])) ertyertyertyey1q234234
//       .then((data) => setData(data))
//   }, [])

//   return (
//     <>
//       {/* <List name="Hinal" />
//       <List name="Abhinav" /> */}
//       <ul className="flex-container">
//         {data &&
//           data.map((e) => (
//             <li className="flex-item" style={{ width: 800, color: 'orange' }}> {e.body} </li>
//           ))}
//       </ul>
//     </>
//   )
// }

// export default App


import { useState, useEffect } from 'react'
import { Test } from './Test'
import { Chexkbox } from './Chexkbox';
const options = [
  { label: "Lifestyle", value: "lifestyle" },
  { label: "Area", value: "area" },
  { label: "Random", value: "random" },
  { label: "Comedy", value: "comedy" },
  { label: "Entertainment", value: "entertainment" }
];

function App() {
  const [checked, setCheckBoxChecked] = useState(false);

  const onAddCategory = value => {
    setCheckBoxChecked(value);
  };


  return (
    <div>
      <p>Theb APi Fatch</p>
      <Chexkbox
        key={"channel.key"}
        options={options}
        onChange={value => onAddCategory(value)}
        title="Add your chatroom to a category so that users can find it easily"
        checked={checked}
      />

     <Test />

    </div>
  )
}

export default App
































