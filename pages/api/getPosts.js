const API_URL = "https://api-users.sasuki.xyz"

export function getPosts() {

    return fetch(`${API_URL}/posts`,
        {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }
    )
        .then((response) => response.json())

}

