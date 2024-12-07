document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    const favoritesGrid = document.getElementById('favoritesGrid');
    const categoryButtons = document.querySelectorAll('.category-btn');
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let currentCategory = 'all';

    // Game categories data
    const gameCategories = {
        '1': ['puzzle'],
        '1v1.lol': ['action', 'sports'],
        '10minutestilldawn': ['action', 'adventure'],
        '2048': ['puzzle'],
        'A Dance of Fire And Ice': ['puzzle', 'adventure'],
        'A Dark Room': ['adventure'],
        'Adrenaline Challenge': ['action', 'sports'],
        'Adventure Drivers': ['action', 'sports'],
        'Asteroids': ['action'],
        'Astray': ['puzzle', 'adventure'],
        'Backcountry': ['sports', 'adventure'],
        'Bad Ice Cream': ['puzzle', 'action'],
        'Bad Ice Cream 2': ['puzzle', 'action'],
        'Bad Ice Cream 3': ['puzzle', 'action'],
        'Basket Random': ['sports'],
        'BitLife': ['adventure'],
        'Bounceback': ['action'],
        'Boxing Random': ['sports', 'action'],
        'BreakLock': ['puzzle'],
        'Breakout': ['action'],
        'Chess': ['puzzle'],
        'Chrome Dino': ['action'],
        'Connect 3': ['puzzle'],
        'Cookie Clicker': ['puzzle'],
        'Cubefield': ['action'],
        'Doodle Jump': ['action'],
        'Duck Life': ['adventure', 'sports'],
        'Duck Life 2': ['adventure', 'sports'],
        'Duck Life 3': ['adventure', 'sports'],
        'Duck Life 4': ['adventure', 'sports'],
        'Edge Surf': ['action'],
        'Evil Glitch': ['action'],
        'Factory Balls Forever': ['puzzle'],
        'Fireboy and Watergirl in the Forest Temple': ['puzzle', 'adventure'],
        'Flappy Bird': ['action'],
        'Friendly Fire': ['action'],
        'Geometry Dash': ['action', 'puzzle'],
        'Gopher Kart': ['sports', 'action'],
        'Hextris': ['puzzle'],
        'Ice Age Baby Adventure': ['adventure'],
        'Jumping frogs puzzle': ['puzzle'],
        'Konnekt': ['puzzle'],
        'Minecraft 0.30': ['adventure'],
        'Minecraft 1.3': ['adventure'],
        'Minecraft 1.5.2': ['adventure'],
        'Moto X3M 2': ['action', 'sports'],
        'OvO': ['action', 'puzzle'],
        'Pac-Man': ['action'],
        'Pushback': ['puzzle'],
        'Racer': ['sports', 'action'],
        'Radius Raid': ['action'],
        'Retro Bowl': ['sports'],
        'Retrohaunt': ['adventure'],
        'Riddle School': ['puzzle', 'adventure'],
        'Riddle School 2': ['puzzle', 'adventure'],
        'Riddle School 3': ['puzzle', 'adventure'],
        'Riddle School 4': ['puzzle', 'adventure'],
        'Riddle School 5': ['puzzle', 'adventure'],
        'Roadblocks': ['puzzle'],
        'Sleeping Beauty': ['adventure'],
        'Slope': ['action'],
        'Snake': ['action'],
        'Snow Rider 3D': ['sports', 'action'],
        'Soccer Random': ['sports'],
        'Space Company': ['puzzle', 'adventure'],
        'Space Invaders': ['action'],
        'Tetris': ['puzzle'],
        'The Chroma Incident': ['action', 'adventure'],
        'THERE IS NO GAME!': ['puzzle', 'adventure'],
        'Tower Master': ['action'],
        'Tunnel Rush': ['action'],
        'Under Run': ['action'],
        'Vex 3': ['action', 'adventure'],
        'Vex 4': ['action', 'adventure'],
        'Vex 5': ['action', 'adventure'],
        'Vex 6': ['action', 'adventure'],
        'Vex 7': ['action', 'adventure'],
        'Volley Random': ['sports'],
        'Webretro': ['adventure'],
        'World\'s Hardest Game': ['puzzle', 'action'],
        'World\'s Hardest Game 2': ['puzzle', 'action'],
        'xx142-b2.exe': ['action', 'adventure']
    };

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

    // Filter games by category
    function filterGamesByCategory(category) {
        const gameTiles = document.querySelectorAll('.games-grid .game-tile');
        gameTiles.forEach(tile => {
            const gameTitle = tile.querySelector('a').textContent;
            if (category === 'all' || (gameCategories[gameTitle] && gameCategories[gameTitle].includes(category))) {
                tile.style.display = '';
            } else {
                tile.style.display = 'none';
            }
        });
    }

    // Category button click handler
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Update current category and filter games
            currentCategory = button.dataset.category;
            filterGamesByCategory(currentCategory);
        });
    });

    // Search functionality
    searchBar.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const gameTiles = document.querySelectorAll('.games-grid .game-tile');
        
        gameTiles.forEach(tile => {
            const gameTitle = tile.querySelector('a').textContent.toLowerCase();
            const matchesSearch = gameTitle.includes(searchTerm);
            const matchesCategory = currentCategory === 'all' || 
                (gameCategories[tile.querySelector('a').textContent] && 
                 gameCategories[tile.querySelector('a').textContent].includes(currentCategory));
            
            tile.style.display = matchesSearch && matchesCategory ? '' : 'none';
        });
    });

    // Initialize favorites on page load
    initializeFavorites();
});