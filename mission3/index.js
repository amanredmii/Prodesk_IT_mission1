async function getUser() {
    const username = document.getElementById("username").value;
    const result = document.getElementById("result");

    if (username === "") {
        result.innerHTML = "Please enter a username";
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error("User not found");
        }

        const data = await response.json();

        result.innerHTML = `
      <img src="${data.avatar_url}" width="100"><br>
      <h3>${data.name || data.login}</h3>
      <p>Followers: ${data.followers}</p>
      <p>Following: ${data.following}</p>
      <p>Public Repos: ${data.public_repos}</p>
      <a href="${data.html_url}" target="_blank">View Profile</a>
    `;
        console.log(data)

    } catch (error) {
        result.innerHTML = error.message;
    }
}
