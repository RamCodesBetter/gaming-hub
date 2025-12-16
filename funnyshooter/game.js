document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const gameID = params.get("target");
  let newArray = [];
  const download = document.getElementById("download");
  fetch("games.json")
    .then((response) => response.json())
    .then((dataa) => {
      let data = dataa.games;
      for (var i = 0; i < data.length; i++) {
        newArray.push(data[i]);
      }
      newArray.forEach((game) => {
        if (game.id == gameID && game.download) {
          download.addEventListener("click", () => {
            window.open(
              `https://macvg-games.github.io/zips/game${gameID}.zip`,
              "_blank"
            );
          });
        } else if (game.id == gameID) {
          download.style.display = "none";
        }
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
  //Above is code for download button
  const gameFrame = document.getElementById("gameframe");
  const fullScreen = document.getElementById("fullscreen");
  fullScreen.addEventListener("click", function () {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      fullScreen.src = "/macvg/media/expand.svg";
    } else {
      fullScreen.src = "/macvg/media/compress.svg";
      gameFrame.requestFullscreen();
    }
  });
  //Above is code for full screen
  const gameShare = document.getElementById("game-share");
  const gameShareBtn = document.getElementById("game-share-btn");
  const share = document.getElementById("share");
  gameShareBtn.addEventListener("click", function () {
    gameShare.classList.add("none");
  });
  share.addEventListener("click", function () {
    let thing123 = window.location.href;
    navigator.clipboard.writeText(thing123);
    gameShare.classList.remove("none");
  });
  //Above is code for sharing the game
  const report = document.getElementById("report");
  report.addEventListener("click", function () {
    window.open("https://forms.gle/vKN71eKeMNGiswUY7", "_blank");
  });
  //Above is code for reporting the game
  const star = document.getElementById("star");
  let existingData = localStorage.getItem("favorites");
  let favoritesArray = existingData.split(",");
  if (favoritesArray.includes(gameID)) {
    star.src = "/macvg/media/star-solid.svg";
  }
  star.addEventListener("click", function () {
    if (star.src.includes("star-regular")) {
      star.src = "/macvg/media/star-solid.svg";
      favoritesArray.push(gameID);
      localStorage.setItem("favorites", favoritesArray.join(","));
    } else {
      star.src = "/macvg/media/star-regular.svg";
      const index = favoritesArray.indexOf(gameID);
      favoritesArray.splice(index, 1);
      localStorage.setItem("favorites", favoritesArray.join(","));
    }
  });
  //Above is code for saving the game to favorites
  let eRecent = localStorage.getItem("macvgRecents");
  let recentArray = eRecent ? eRecent.split(",") : [];
  if (!recentArray.includes(gameID)) {
    recentArray.push(gameID);
    eRecent = recentArray.join(",");
    localStorage.setItem("macvgRecents", eRecent);
  }
  //Above is code for adding the game to recents
  const gameIframe = document.getElementById("game-frame");
  gameIframe.contentWindow.focus();
  gameIframe.contentWindow.addEventListener("click", () => {
    gameIframe.contentWindow.focus();
  });
  //Above is code for ensuring iframe is focused
  const sideSearch = document.getElementById("sideSearch");
  const sideSearchForm = sideSearch.parentElement;
  const nothing = document.getElementById("nothing");
  nothing.style.paddingTop = "0px";
  nothing.style.display = "none";
  sideSearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const list = document.getElementById("list");
    let searchTerm = sideSearch.value.toLowerCase();
    let results = [];
    list.innerHTML = "";
    for (var i = 0; i < newArray.length; i++) {
      let item = newArray[i].name;
      var itemText = item.toLowerCase();
      if (itemText.includes(searchTerm)) {
        let newGameElement = document.createElement("div");
        newGameElement.classList.add("side-game");
        newGameElement.innerHTML = item;
        list.appendChild(newGameElement);
        results.push(item);
        let newGameID = newArray[i].id;
        newGameElement.style.backgroundImage = `url(${
          newArray[i].link + newArray[i].thumb
        })`;
        newGameElement.addEventListener("click", () => {
          const params = new URLSearchParams({ target: newGameID });
          window.location.href = `game.html?${params.toString()}`;
        });
      }
    }
    if (results.length < 1) {
      nothing.style.display = "block";
      nothing.style.paddingTop = "20px";
      nothing.children[0].style.display = "inline";
    } else {
      nothing.style.paddingTop = "0px";
      nothing.style.display = "none";
      list.style.display = "flex";
    }
  });
  //Above is code for sidebar search
  let theme = localStorage.getItem("theme");
  if (theme === "light") {
    const root = document.documentElement;
    root.style.setProperty("--link", "rgb(225, 139, 9)");
    root.style.setProperty("--text-color", "black");
    root.style.setProperty("--shadow-color", "0px 0px 5px rgb(84, 84, 84)");
    root.style.setProperty("--black-color", "rgb(235, 235, 235)");
    root.style.setProperty("--bg-color", "rgb(235, 235, 235)");
    root.style.setProperty("--bg-color-2", "rgb(30, 30, 30)");
    root.style.setProperty("--group-bg-color", "rgb(140, 140, 140, 0.7)");
    root.style.setProperty("--bar-color", "rgb(200, 200, 200)");
  } else if (theme === "deep") {
    const root = document.documentElement;
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--link", "rgb(225, 139, 9)");
    root.style.setProperty("--shadow-color", "0px 5px 5px rgb(25,25,25)");
    root.style.setProperty("--black-color", "black");
    root.style.setProperty("--bg-color", "black");
    root.style.setProperty("--bg-color-2", "black");
    root.style.setProperty("--group-bg-color", "black");
    root.style.setProperty("--bar-color", "black");
    root.style.setProperty("--border", "rgb(50,50,50)");
  } else if (theme === "cyber") {
    const root = document.documentElement;
    root.style.setProperty("--link", "rgb(225, 139, 9)");
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--shadow-color", "0px 5px 5px #42053f");
    root.style.setProperty("--black-color", "black");
    root.style.setProperty("--bg-color", "#0b023a");
    root.style.setProperty("--bg-color-2", "#ff00a0");
    root.style.setProperty("--group-bg-color", "rgba(48, 4, 98, 0.7)");
    root.style.setProperty("--bar-color", "#12827e");
    root.style.setProperty("--border", "rgb(50,50,50)");
  } else if (theme === "custom") {
    const root = document.documentElement;
    let first = localStorage.getItem("first");
    let second = localStorage.getItem("second");
    document.documentElement.style.setProperty("--bg-color", first);
    document.documentElement.style.setProperty("--bar-color", second);
    document.documentElement.style.setProperty("--link", second);
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--black-color", "black");
    root.style.setProperty("--shadow-color", "transparent");
    root.style.setProperty("--bg-color-2", "white");
    root.style.setProperty("--group-bg-color", second);
  } else {
    const root = document.documentElement;
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--link", "rgb(225, 139, 9)");
    root.style.setProperty("--shadow-color", "transparent");
    root.style.setProperty("--black-color", "black");
    root.style.setProperty("--bg-color", "rgb(50, 50, 50)");
    root.style.setProperty("--bg-color-2", "white");
    root.style.setProperty("--group-bg-color", "rgba(40, 40, 40, 0.7)");
    root.style.setProperty("--bar-color", "rgb(70, 70, 70)");
  }
  //Above is code for setting the theme
  (adsbygoogle = window.adsbygoogle || []).push({});
  //Above is code for Google Ads
});
