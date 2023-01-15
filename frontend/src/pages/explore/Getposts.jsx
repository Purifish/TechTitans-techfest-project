import React ,{useEffect, useState } from 'react'
import Post from './Explore.jsx'
import './Getpost.css'


export default function Getposts() {

  const [posts, setPosts] = useState([{
    _id: "1",
    name: "John", 
    tele: "yuandjom", 
    msg: "message this is it"
}]);


    return (
      <div className='admin-getpost'>
      {posts?.map((posts) => {
        return(
        <Post
           posts={posts} 
           />
        )
      })}
        </div>
      )
  }