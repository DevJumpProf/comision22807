const getNameAxios = async (idPost)=>{

    try {
const resPost = await axios (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
const resUser = await axios (`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`) 
/* console.log(resUser.data.name) */

console.log (`La persona que escribio el post ${idPost} es ${resUser.data.name} vive en la ciudad de ${resUser.data.address.city}  y escribió ${resPost.data.body}`)
} catch (error) {
        console.log(error)
    }
}
getNameAxios(7)