let title = document.querySelector("#headertext>div").innerText.substring(26);
let bundle = {
    "title": title,
    "books": []
};
const rows = document.querySelector(".js-all-downloads-holder").querySelectorAll(".row");

rows.forEach((row) => {
    let title = row.querySelector(".gameinfo>.title>a").innerText;
    let subtitle = row.querySelector(".gameinfo>.subtitle>a").innerText;
    let imageUrl = row.querySelector(".icn>a>img").src;
    let downloadDivs = row.querySelectorAll(".downloads>.download-buttons>div");
    let downloadsArray = [];
    downloadDivs.forEach((div) => {
        let label = div.querySelector(".label").innerHTML;
        let url = div.querySelector(".a").href;
        downloadsArray.push({
            "label": label,
            "url": url
        });
    });
    bundle.books.push({
        "title": title,
        "subtitle": subtitle,
        "imageUrl": imageUrl,
        "downloads": downloadsArray
    });
});

console.log(bundle);

let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(bundle));

let downloadButton = document.createElement("a");
downloadButton.setAttribute("href", dataStr);
downloadButton.setAttribute("download", "humblebundle.json");
downloadButton.setAttribute("id", "superDownloadBtn");
document.body.appendChild(downloadButton);
document.querySelector("#superDownloadBtn").click();
