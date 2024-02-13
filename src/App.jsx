import { useState } from "react";

// export default function App() {
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setIsVisible(!isVisible);
//         }}
//       >
//         Toggle
//       </button>
//       {isVisible && <p>Hello world!</p>}
//     </div>
//   );
// }

//Using ternary operator
export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Click
      </button>
      {isVisible ? <p>Hey there</p> : null}
    </div>
  );
}
