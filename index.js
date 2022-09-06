//https://dog.ceo/api/breeds/image/

const picDiv = document.getElementById("pic-container");
const img = document.createElement("img");

async function firstPic(){
    const response = await fetch('https://random.dog/woof.json');
    const data = await response.json();
    const noVid = /\.mp4$|\.webm$|\.gif$/;
    if (data.url.match(noVid)) {
        const response = await fetch('https://random.dog/woof.json');
        const data = await response.json();
    } else {
        picDiv.appendChild(img);
        img.setAttribute("id", "main-pic");
        img.setAttribute("src", data.url);
    }
}

async function nextPic(){
    const response = await fetch('https://random.dog/woof.json');
    const data = await response.json();
    const noVid = /\.mp4$|\.webm$|\.gif$/;
    if (data.url.match(noVid)) {
        const response = await fetch('https://random.dog/woof.json');
        const data = await response.json();
    } else {
        picDiv.appendChild(img);
        img.setAttribute("id", "main-pic");
        img.setAttribute("src", data.url);
    }
}