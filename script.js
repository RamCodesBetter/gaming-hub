document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', function() {
        const filter = this.value.toLowerCase();
        const gameTiles = document.getElementsByClassName('game-tile');
        for (let i = 0; i < gameTiles.length; i++) {
            const gameLink = gameTiles[i].getElementsByTagName('a')[0];
            const gameName = gameLink.textContent || gameLink.innerText;
            if (gameName.toLowerCase().indexOf(filter) > -1) {
                gameTiles[i].style.display = '';
            } else {
                gameTiles[i].style.display = 'none';
            }
        }
    });
});