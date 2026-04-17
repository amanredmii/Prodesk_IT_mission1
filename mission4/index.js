async function c_letter() {
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const company = document.getElementById("company").value;
    const skills = document.getElementById("skills").value;

    const loading = document.getElementById("loading");
    const outputBox = document.getElementById("outputBox");
    const outputDiv = document.getElementById("output");

    loading.classList.remove("hidden");
    outputBox.classList.add("hidden");

    try {
        const res = await fetch("http://localhost:3000/aman", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, role, company, skills })
        });

        const data = await res.json();

        outputDiv.innerText = data.letter;

    } catch (err) {
        outputDiv.innerText = " Error generating letter. Please try again.";
    }

    loading.classList.add("hidden");
    outputBox.classList.remove("hidden");
}

function copy_text() {
    const text = document.getElementById("output").innerText;
    navigator.clipboard.writeText(text);
    alert("Copied!");
}