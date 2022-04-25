const currentUrl = new URL(document.location.href);
let showcaseUrl = currentUrl.hash;
if (showcaseUrl == "#" || showcaseUrl == "") {
    showcaseUrl = "kccuber-scratch.github.io";
} else
    showcaseUrl = showcaseUrl.replace("#",""); {
}
let actualUrl = showcaseUrl
document.getElementById("link").innerText = showcaseUrl;
if (showcaseUrl.slice(0,4) != "http") {
    actualUrl = "https://".concat(showcaseUrl);
};
document.getElementById("link").href = actualUrl;