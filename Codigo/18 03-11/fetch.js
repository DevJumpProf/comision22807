
const getnamefetch = (idPost)=>{
    fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then(res=>{
        return res.json()
    })

    .then(post=>{
        console.log(post)
        fetch  (`https://jsonplaceholder.typicode.com/users/${post.userId}`)  
    .then (res=>{

        return res.json() 
    })
.then (user=>{
    console.log(user)
    console.log (`La persona que escribio el post ${idPost} es ${user.name}`)
})
})
}
getnamefetch(2)