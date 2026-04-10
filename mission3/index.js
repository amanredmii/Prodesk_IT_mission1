

async function print_repo(usr) {
    const repoDiv = document.getElementById("repo");
    const repo_head = document.getElementById("repo_head")
    repoDiv.innerHTML = `<div class="loader"></div>`;
    const repoRes = await fetch(`https://api.github.com/users/${usr}/repos?sort=created&direction=desc`);
    if (!repoRes.ok) {
        repoDiv.innerHTML = "Error loading repositories";
        return;
    }
    const repos = await repoRes.json();

    repo_head.innerHTML = `<h3>Repositories</h3>`

    let output = "";

    for (let i = 0; i < Math.min(5, repos.length); i++) {
        const date = new Date(repos[i].created_at);

        output += `
                <div>
                    <a href="${repos[i].html_url}" target="_blank">
                        ${repos[i].name}
                    </a>
                    <p>Created on: ${date.toDateString()}</p>
                </div>
            `;
    }

    repoDiv.innerHTML = output;
}





async function getUser() {
    const username = document.getElementById("username").value;
    const result = document.getElementById("result");



    if (username === "") {
        result.innerHTML = "Please enter a username";
        return;
    }
    result.innerHTML = `<div class="loader"></div>`;

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error("User not found");
        }

        const data = await response.json();

        let msg = ""
        if (data.blog === "") {
            msg = "No portfolio available"
        } else {
            msg = "Portfolio"
        }

        result.innerHTML = `
            <div class="card">
                <img src="${data.avatar_url}" class="card-img-top">
                <div class="card_body">
                    <h1 class="card_title">${data.name || data.login}</h1>
                    <p class="card_text">${data.bio || "No bio available"}</p>
                    <p>Joined: ${new Date(data.created_at).toDateString()}</p>
                    <a href=${data.blog}>${msg}</a>
                    <button onclick="print_repo('${username}')">Repositories</button>
                </div >
            </div >
        `;
    } catch (error) {
        result.innerHTML = error.message;
    }
}

function btl_mode() {
    window.open("battel.html", "_blank");

}

