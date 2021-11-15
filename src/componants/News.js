import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import axios from 'axios'

// export default function News() {
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=ef319a14f5c641eebfa6426d7e650ba7')
//             .then(res => {
//                 console.log(res);
//                 setPosts(res.data.articles);
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     })
//     return (
//         <div>
//             {
//                 posts.map(post => (<Cards title={post.title} desp={post.description} imgurl={post.urlToImage} url={post.url} />))
//             }
//         </div>
//     )
// }


function News() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=ef319a14f5c641eebfa6426d7e650ba7')
            .then(res => {
                console.log(res);
                setPosts(res.data.articles);
            })
            .catch(err => {
                console.log(err);
            })
    })
    return (
        <div>
             {
                posts.map(post => (<Cards title={post.title} desp={post.description} imgurl={post.urlToImage} url={post.url} />))
            }
        </div>
    )
}

export default News
