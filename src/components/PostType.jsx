import React, { useEffect, useState } from 'react'

function PostType() {
    const [ type , setType] = useState('posts')
    const [render, setrender] = useState("rendering....")
    
    console.log("render")
    
    
    useEffect(()=> {
        //tell what to do when a state chages like a side effect
        console.log("type changed")
    } ,[type])
  return (
    <div>
        <div>
            <button onClick={() => setType('post')}>Posts</button>
            <button onClick={() => setType('users')}>users</button>
            <button onClick={() => setType('comments')}>comments</button>
        </div>
        <h1>{type}</h1>

        <button onClick={() => setrender('rendered')}>click</button>
        <div>{render}</div>
        
      
    </div>
  )
}

export default PostType
