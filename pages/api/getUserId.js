const API_URL = "https://api-users.sasuki.xyz"

export function getUserId(id) {

    return fetch(`${API_URL}/user/${id}`,
        {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }
    )
        .then((response) => response.json())

}