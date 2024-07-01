const API_URL = "https://desaf-obackend.onrender.com"

export function signUp(user) {

    return fetch(`${API_URL}/user`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: user.name,
                profilePic: user.profilePic,
                email: user.email,
                password: user.password
            })
        }
    )
        .then((response) => response.json())

}