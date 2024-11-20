// import React, { useEffect, useState } from 'react';
// import "./Feed.css";
// import StoryReels from './StoryReels';
// import MessageSender from './MessageSender';
// import Post from './Post';
// import db from "./firebase";

// function Feed() {
//   const [posts, setposts] = useState([]);

//   useEffect(() => {
//     db.collection("posts").onSnapshot((snapshot) => setposts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
//     console.log(posts);
    
//   }, []);
//   console.log(posts);
//   return (
//     <div className='feed'>
//       <StoryReels />
//       <MessageSender />

//       {posts.map((post) => {
//   return (
//     <Post
//       key={post.id}
//       profilePic={post.data.profilePic}
//       message={post.data.message}
//       timestamp={post.data.timestamp}
//       username={post.data.username}
//       image={post.data.image}
//     />
//   );
// })}


//       {/* {posts.map((post) => {
//         return(<Post
//           key={post.id}
//           profilePic={post.data.profilePic}
//           message={post.data.message}
//           timestamp={post.data.timestamp}
//           username={post.data.username}
//           image={post.data.image}
//         />)}
//       )} */}

// {/* <Post
//         profilePic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7ZeiBqb0LXy2n7ERZ0B1oFgqvZnD-w_8OA&s"}
//         message="wow This works"
//         timestamp="This is a timestamp"
//         username="S Nandhan"
//         image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScckj50ImrtL-Hf9uvwh3HLdqWgzQWzL4seQ&s"}
//       />
//       <Post
//         profilePic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbG-0Pc_dX0swJiOnUTf58QaSAwwUTpBUi6Q&s"}
//         message="message gose here"
//         timestamp="This is a timestamp"
//         username="S Manu"
//         image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFx5dQclQa6_rhg1fj9oi52jgwr6LquEFtdw&s"}
//       />
//       <Post
//         profilePic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s"}
//         message="message gose here"
//         timestamp="This is a timestamp"
//         username="Bharath"
//         image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV7X4zQtw0DpIubsl7z7o42l7yDlpX3yipg&s"}
//       />

// <Post
//         profilePic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s"}
//         message="message gose here"
//         timestamp="This is a timestamp"
//         username="Bharath"
//         image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV7X4zQtw0DpIubsl7z7o42l7yDlpX3yipg&s"}
//       />

// <Post
//         profilePic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s"}
//         message="message gose here"
//         timestamp="This is a timestamp"
//         username="Bharath"
//         image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV7X4zQtw0DpIubsl7z7o42l7yDlpX3yipg&s"}
//       /> */}

//     </div>
//   )
// }

// export default Feed;









// // import React, { useEffect, useState } from 'react';
// // import "./Feed.css";
// // import StoryReels from './StoryReels';
// // import MessageSender from './MessageSender';
// // import Post from './Post';
// // import db from "./firebase";

// // function Feed() {
// //   const [posts, setPosts] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     // Subscribe to the "posts" collection and update the state
// //     const unsubscribe = db.collection("posts").onSnapshot((snapshot) => {
// //       setPosts(snapshot.docs.map((doc) => ({
// //         id: doc.id,
// //         data: doc.data(),
// //       })));
// //       setLoading(false);
// //     });

// //     // Cleanup subscription on unmount
// //     return () => unsubscribe();
// //   }, []);

// //   // Optional: Show loading message while data is being fetched
// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

// //   return (
// //     <div className='feed'>
// //       <StoryReels />
// //       <MessageSender />

// //       {posts.map((post) => (
// //         <Post
// //           key={post.id}  // Corrected to use post.id for key
// //           profilePic={post.data.profilePic}
// //           message={post.data.message}
// //           timestamp={post.data.timestamp}
// //           username={post.data.username}
// //           image={post.data.image}
// //         />
// //       ))}

// //       <Post
// //         profilePic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7ZeiBqb0LXy2n7ERZ0B1oFgqvZnD-w_8OA&s"}
// //         message="Wow, this works!"
// //         timestamp="This is a timestamp"
// //         username="S Nandhan"
// //         image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScckj50ImrtL-Hf9uvwh3HLdqWgzQWzL4seQ&s"}
// //       />
// //       <Post
// //         profilePic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbG-0Pc_dX0swJiOnUTf58QaSAwwUTpBUi6Q&s"}
// //         message="Message goes here"
// //         timestamp="This is a timestamp"
// //         username="S Manu"
// //         image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFx5dQclQa6_rhg1fj9oi52jgwr6LquEFtdw&s"}
// //       />
// //       <Post
// //         profilePic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s"}
// //         message="Message goes here"
// //         timestamp="This is a timestamp"
// //         username="Bharath"
// //         image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV7X4zQtw0DpIubsl7z7o42l7yDlpX3yipg&s"}
// //       />
// //       <Post
// //         profilePic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s"}
// //         message="Message goes here"
// //         timestamp="This is a timestamp"
// //         username="Bharath"
// //         image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV7X4zQtw0DpIubsl7z7o42l7yDlpX3yipg&s"}
// //       />
// //       <Post
// //         profilePic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s"}
// //         message="Message goes here"
// //         timestamp="This is a timestamp"
// //         username="Bharath"
// //         image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV7X4zQtw0DpIubsl7z7o42l7yDlpX3yipg&s"}
// //       />
// //     </div>
// //   );
// // }

// // export default Feed;




import React, { useEffect, useState } from 'react';
import "./Feed.css";
import StoryReels from './StoryReels';
import MessageSender from './MessageSender';
import Post from './Post';
import db from "./firebase";  

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("posts").orderBy("timestamp" , "desc").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })));
    });

    return () => unsubscribe();
  }, []);

  function formatTimestamp(timestamp) {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return date.toLocaleString();
  }

  return (
    <div className='feed'>
      <StoryReels />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={formatTimestamp(post.data.timestamp)} // Format timestamp
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
