document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    const favoritesGrid = document.getElementById('favoritesGrid');
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    // Initialize favorites from localStorage
    function initializeFavorites() {
        const stars = document.querySelectorAll('.favorite-star');
        stars.forEach(star => {
            const gameTitle = star.nextElementSibling.textContent;
            if (favorites.includes(gameTitle)) {
                star.classList.remove('far');
                star.classList.add('fas');
            }
        });
        updateFavoritesGrid();
    }

    // Update favorites grid
    function updateFavoritesGrid() {
        favoritesGrid.innerHTML = '';
        if (favorites.length === 0) {
            const message = document.createElement('p');
            message.textContent = 'No favorites yet! Click the star on any game to add it to your favorites.';
            message.style.color = '#8ab4f8';
            favoritesGrid.appendChild(message);
            return;
        }

        const gameTiles = document.querySelectorAll('.game-tile');
        gameTiles.forEach(tile => {
            const gameTitle = tile.querySelector('a').textContent;
            if (favorites.includes(gameTitle)) {
                const clonedTile = tile.cloneNode(true);
                const star = clonedTile.querySelector('.favorite-star');
                star.classList.remove('far');
                star.classList.add('fas');
                favoritesGrid.appendChild(clonedTile);
            }
        });

        // Add click handlers to cloned stars
        const clonedStars = favoritesGrid.querySelectorAll('.favorite-star');
        clonedStars.forEach(star => {
            star.addEventListener('click', handleStarClick);
        });
    }

    // Handle star click
    function handleStarClick(event) {
        const star = event.target;
        const gameTitle = star.nextElementSibling.textContent;
        const isOriginalTile = !star.closest('#favoritesGrid');

        if (favorites.includes(gameTitle)) {
            // Remove from favorites
            favorites = favorites.filter(title => title !== gameTitle);
            document.querySelectorAll('.favorite-star').forEach(s => {
                if (s.nextElementSibling.textContent === gameTitle) {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        } else {
            // Add to favorites
            favorites.push(gameTitle);
            document.querySelectorAll('.favorite-star').forEach(s => {
                if (s.nextElementSibling.textContent === gameTitle) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                }
            });
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateFavoritesGrid();
    }

    // Add click handlers to all stars
    const stars = document.querySelectorAll('.favorite-star');
    stars.forEach(star => {
        star.addEventListener('click', handleStarClick);
    });

    // Search functionality
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

    // Initialize favorites on page load
    initializeFavorites();
});