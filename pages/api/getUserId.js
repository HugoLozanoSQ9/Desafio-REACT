const API_URL = "https://desaf-obackend.onrender.com"

export function getUserId(id) {

    return fetch(`${API_URL}/user/${id}`,
        {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }
    )
        .then((response) => response.json())

}