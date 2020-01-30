let title = document.querySelector("#hibtext").innerText.split("THANKS FOR PURCHASING\n").pop().trim();
let key = window.location.search.substring("key").split("=")[1].substring(1);
let bundle = {
    "title": title,
    "key": key,
    "platforms": []
};

let downloadHolders = document.querySelectorAll(".js-all-downloads-holder>div>div");

downloadHolders.forEach((downloadHolder) => {
    let rows = downloadHolder.querySelectorAll(".row");
    let downloadPlatform = downloadHolder.querySelector(".dlplatform").innerText;
    let platformDownloads = {
        "type": downloadPlatform,
        "list": []
    };
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
        platformDownloads.list.push({
            "title": title,
            "subtitle": subtitle,
            "imageUrl": imageUrl,
            "downloads": downloadsArray
        });
    });
    bundle.platforms.push(platformDownloads);
});

console.log(bundle);

let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(bundle));

let downloadButton = document.createElement("a");
downloadButton.setAttribute("href", dataStr);
downloadButton.setAttribute("download", `${title}.json`);
downloadButton.setAttribute("id", "superDownloadBtn");
document.body.appendChild(downloadButton);
document.querySelector("#superDownloadBtn").click();
