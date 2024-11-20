// import React from 'react';
// import "./Widgets.css";
// function Widgets() {
//   return (
//     <div className='widget'>
//       <iframe
//         src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
//         width="340"
//         height="100%"
//         style={{
//           border: "none",
//           overflow: "hidden",
//         }}
//         frameBorder="0"
//         allowtransparency="true"
//         allow="encrypted-media"
//       >

//       </iframe>
//     </div>
//   )
// }

// export default Widgets

import React from 'react';
import './Widgets.css';

function Widgets() {
  return (
    <div className='widget'>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=your-calendar-id%40group.calendar.google.com&ctz=America%2FNew_York"
        width="340"
        height="1500" // Ensure height is properly set or adjust as needed
        style={{
          border: "none",
          overflow: "hidden",
        }}
        allowtransparency="true"
        allow="encrypted-media"
      >
      </iframe>
    </div>
  );
}

export default Widgets;

