const API_URL = "https://desaf-obackend.onrender.com"

export function createPostdb(data,token) {

    return fetch(`${API_URL}/posts`,
        {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                'Authorization': token,
            },
            body: JSON.stringify({
                title: data.title,
                image:data.image,
                body:data.body,
            })
        }
    )
       .then((response) => response.json())
}