
const getnameAsync= async (idPost) =>{

try {
const resPost = await fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
/*        console.log(resPost)         */      
const post =  await  resPost.json()  
console.log (post)    

const respUser = await fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`) 
const user = await respUser.json()
console.log (user)

console.log (`La persona que escribio el post ${post.id} es ${user.name}`)
} catch (error) {
    console.log(error)
}
}
getnameAsync(5)