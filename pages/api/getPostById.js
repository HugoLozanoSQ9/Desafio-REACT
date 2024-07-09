const API_URL = "https://api-users.sasuki.xyz"

export async function getPostById(id){
    const response = await fetch(`${API_URL}/posts/${id}`, {
        method: "GET",
        headers: {"Content-Type": "application/json" }
    })
    const json = await response.json()
    return json
}


// export function getPostById(id){

//     return fetch(`${API_URL}/posts/${id}`,
//         {
//             method: "GET",
//             headers: { "Content-Type": "application/json" }
//         }
//     )
//         .then((response) => response.json())
        

// }
