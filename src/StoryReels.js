import React from 'react';
import "./StoryReels.css";
import Story from './Story';
function StoryReels() {
  return (
    <div className='storyReel'>
      <Story
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4eo85Or428lPJeRqUe7srbfwvpWEztFphg&s"}
        profileSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7ZeiBqb0LXy2n7ERZ0B1oFgqvZnD-w_8OA&s"}
        title="Morning Forest" />

      <Story
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKG8LoRoBtlNYPSr9XJff-igsB-H7OD5I6KJbWOUy-aT8G2sknQCZvwPhmadD1s16ouI&usqp=CAU"}
        profileSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbG-0Pc_dX0swJiOnUTf58QaSAwwUTpBUi6Q&s"}
        title="City at Dusk" />

      <Story
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCs0JfLYHBIpgzNWYdfkXQ38lWSkUHKzakOyiyMNyVTFWt_q5645B9_u6vGBkdGxPLjcY&usqp=CAU"}
        profileSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s"}
        title="Golden Beach" />

      <Story
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1G6zH3czFhAiYnwq54X_bMt89HAnr5eklwqIMLf_alihldxmMVHzGBGWUKRpG8mq-6fA&usqp=CAU"}
        profileSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoo6fDmHc7M3Sc1DcJVuaZYsQpt8lKNDI0dA&s"}
        title="Mountain Peaks" />

      <Story
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCQV6KQI-1grd2BsWjg5astMDaDlwbSxtKw&s"}
        profileSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNSvcz8OHDlh3YOCYm58kJ5D3c_s6oWhQdGg&s"}
        title="Serene Lake" />

    </div>


  )
}

export default StoryReels
