/* ================= CAT FACT ================= */
const catUrl = "https://catfact.ninja/fact";
const catText = document.querySelector("#catFact");
const catBtn = document.querySelector("#btn1");

catBtn.addEventListener("click", async () => {
    catText.textContent = await getCatFact();
});

async function getCatFact() {
    try {
        const res = await axios.get(catUrl);
        return res.data.fact;
    } catch (err) {
        return "Failed to load cat fact 😿";
    }
}

/* ================= JOKES ================= */
const jokeUrl = "https://icanhazdadjoke.com/";
const jokeText = document.querySelector("#joke");
const jokeBtn = document.querySelector("#btn3");

jokeBtn.addEventListener("click", async () => {
    jokeText.textContent = await getJoke();
});

async function getJoke() {
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get(jokeUrl, config);
        return res.data.joke;
    } catch (err) {
        return "No joke today 😐";
    }
}

/* ================= DOG IMAGE ================= */
const dogUrl = "https://dog.ceo/api/breeds/image/random";
const dogImg = document.querySelector("#res");
const dogBtn = document.querySelector("#btn2");

dogBtn.addEventListener("click", async () => {
    dogImg.src = await getDogImage();
});

async function getDogImage() {
    try {
        const res = await axios.get(dogUrl);
        return res.data.message;
    } catch (err) {
        return "";
    }
}

/* ================= UNIVERSITY SEARCH ================= */
const uniUrl = "https://universities.hipolabs.com/search?name=";
const uniTitle = document.querySelector("#uni");
const searchBtn = document.querySelector("#Search");
const clearBtn = document.querySelector("#btn4");
const input = document.querySelector("#info");
const list = document.querySelector("#list");

searchBtn.addEventListener("click", async () => {
    const query = input.value.trim();

    if (query === "") {
        uniTitle.textContent = "Please enter a university name";
        return;
    }

    const data = await getUniversities(query);
    showUniversities(data);
});

clearBtn.addEventListener("click", () => {
    input.value = "";
    list.innerHTML = "";
    uniTitle.textContent = "Universities";
});

async function getUniversities(name) {
    try {
        const res = await axios.get(uniUrl + name);
        return res.data;
    } catch (err) {
        return [];
    }
}

function showUniversities(universities) {
    list.innerHTML = "";

    if (universities.length === 0) {
        uniTitle.textContent = "No universities found";
        return;
    }

    for (let uni of universities) {
        const li = document.createElement("li");
        li.textContent = uni.name;
        list.appendChild(li);
    }
}
