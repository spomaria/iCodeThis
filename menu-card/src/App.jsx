import { useState } from "react";

function MyButton(){
  // defining two variables at the same time
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }
  return(
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

const user = {
  name: 'Hedy Lamar',
  imageUrl: '/vite.svg',
  imageSize: 90,
};

let products = [
  {title: 'Cabbage', isFruit: false,id: 1},
  {title: 'Garlic', isFruit: false, id: 2},
  {title: 'Apple', isFruit: true, id: 3}
];

const listItems = products.map(product =>
  <li 
    key={product.id}
    style={{
      color: product.isFruit? 'magenta': 'darkgreen'
    }}
  >
    {product.title}
  </li>
  );

export default function MyApp(){
  // const [count, setCount] = useState(0);

  // function handleClick(){
  //   setCount(count + 1);
  // }

  return(
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />

      <h1>{user.name}</h1>
      <img 
        className="avatar"
        src={user.imageUrl} 
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }} 
      />
      <ul>{listItems}</ul>
      <MyButton />
    </div>
  );
}


