document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    const favoritesGrid = document.getElementById('favoritesGrid');
    const categoryButtons = document.querySelectorAll('.category-btn');
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let currentCategory = 'all';
    let lastPlayedGames = JSON.parse(localStorage.getItem('lastPlayedGames') || '[]');
    let isRandomizing = false;

    // Game categories data
    const gameCategories = {
        '1': ['Puzzle'],
        '1v1.lol': ['Action', 'Sports'],
        '10minutestilldawn': ['Action', 'Adventure'],
        '2048': ['Puzzle'],
        'A Dance of Fire And Ice': ['Puzzle', 'Adventure'],
        'A Dark Room': ['Adventure'],
        'Adrenaline Challenge': ['Action', 'Sports'],
        'Adventure Drivers': ['Action', 'Sports'],
        'Asteroids': ['Action'],
        'Astray': ['Puzzle', 'Adventure'],
        'Backcountry': ['Sports', 'Adventure'],
        'Bad Ice Cream': ['Puzzle', 'Action'],
        'Bad Ice Cream 2': ['Puzzle', 'Action'],
        'Bad Ice Cream 3': ['Puzzle', 'Action'],
        'Basket Random': ['Sports'],
        'BitLife': ['Adventure'],
        'Bounceback': ['Action'],
        'Boxing Random': ['Sports', 'Action'],
        'BreakLock': ['Puzzle'],
        'Breakout': ['Action'],
        'Chess': ['Puzzle'],
        'Chrome Dino': ['Action'],
        'Connect 3': ['Puzzle'],
        'Cookie Clicker': ['Puzzle'],
        'Cubefield': ['Action'],
        'Doodle Jump': ['Action'],
        'Duck Life': ['Adventure', 'Sports'],
        'Duck Life 2': ['Adventure', 'Sports'],
        'Duck Life 3': ['Adventure', 'Sports'],
        'Duck Life 4': ['Adventure', 'Sports'],
        'Edge Surf': ['Action'],
        'Evil Glitch': ['Action'],
        'Factory Balls Forever': ['Puzzle'],
        'Fireboy and Watergirl in the Forest Temple': ['Puzzle', 'Adventure'],
        'Flappy Bird': ['Action'],
        'Friendly Fire': ['Action'],
        'Geometry Dash': ['Action', 'Puzzle'],
        'Gopher Kart': ['Sports', 'Action'],
        'Hextris': ['Puzzle'],
        'Ice Age Baby Adventure': ['Adventure'],
        'Jumping frogs Puzzle': ['Puzzle'],
        'Konnekt': ['Puzzle'],
        'Minecraft 0.30': ['Adventure'],
        'Minecraft 1.3': ['Adventure'],
        'Minecraft 1.5.2': ['Adventure'],
        'Moto X3M 2': ['Action', 'Sports'],
        'OvO': ['Action', 'Puzzle'],
        'Pac-Man': ['Action'],
        'Pushback': ['Puzzle'],
        'Racer': ['Sports', 'Action'],
        'Radius Raid': ['Action'],
        'Retro Bowl': ['Sports'],
        'Retrohaunt': ['Adventure'],
        'Riddle School': ['Puzzle', 'Adventure'],
        'Riddle School 2': ['Puzzle', 'Adventure'],
        'Riddle School 3': ['Puzzle', 'Adventure'],
        'Riddle School 4': ['Puzzle', 'Adventure'],
        'Riddle School 5': ['Puzzle', 'Adventure'],
        'Roadblocks': ['Puzzle'],
        'Sleeping Beauty': ['Adventure'],
        'Slope': ['Action'],
        'Snake': ['Action'],
        'Snow Rider 3D': ['Sports', 'Action'],
        'Soccer Random': ['Sports'],
        'Space Company': ['Puzzle', 'Adventure'],
        'Space Invaders': ['Action'],
        'Tetris': ['Puzzle'],
        'The Chroma Incident': ['Action', 'Adventure'],
        'THERE IS NO GAME!': ['Puzzle', 'Adventure'],
        'Tower Master': ['Action'],
        'Tunnel Rush': ['Action'],
        'Under Run': ['Action'],
        'Vex 3': ['Action', 'Adventure'],
        'Vex 4': ['Action', 'Adventure'],
        'Vex 5': ['Action', 'Adventure'],
        'Vex 6': ['Action', 'Adventure'],
        'Vex 7': ['Action', 'Adventure'],
        'Volley Random': ['Sports'],
        'Webretro': ['Adventure'],
        'World\'s Hardest Game': ['Puzzle', 'Action'],
        'World\'s Hardest Game 2': ['Puzzle', 'Action'],
        'xx142-b2.exe': ['Action', 'Adventure']
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

                // Add click handler to open game in new tab
                const gameLink = clonedTile.querySelector('a');
                gameLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    const gameWindow = window.open(gameLink.href, '_blank');
                    startGameTimer(gameTitle, gameWindow);
                });
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

    // Random game selection with animation
    const randomGameBtn = document.getElementById('randomGameBtn');
    randomGameBtn.addEventListener('click', async () => {
        if (isRandomizing) return;
        isRandomizing = true;

        // Get visible games based on current category and search
        const visibleGames = Array.from(document.querySelectorAll('.game-tile:not([style*="display: none"]) a'))
            .map(link => link.textContent);
        
        if (visibleGames.length === 0) {
            isRandomizing = false;
            return;
        }

        // Start spinning animation
        randomGameBtn.classList.add('spinning');
        
        // Randomly cycle through games for visual effect
        let cycles = 0;
        const maxCycles = 10;
        const cycleInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * visibleGames.length);
            searchBar.value = visibleGames[randomIndex];
            cycles++;
            
            if (cycles >= maxCycles) {
                clearInterval(cycleInterval);
                // Final selection
                const finalGame = visibleGames[Math.floor(Math.random() * visibleGames.length)];
                searchBar.value = finalGame;
                
                // Navigate to the game after a short delay
                setTimeout(() => {
                    const gameLink = document.querySelector(`a[href*="${finalGame.toLowerCase().replace(/ /g, '')}/"]`);
                    if (gameLink) {
                        trackPlayedGame(finalGame);
                        gameLink.click();
                    }
                    randomGameBtn.classList.remove('spinning');
                    isRandomizing = false;
                }, 300);
            }
        }, 100);
    });

    // Enhanced similar games recommendation
    function findSimilarGames(gameTitle) {
        if (!gameCategories[gameTitle]) return [];
        
        const gameCategs = gameCategories[gameTitle];
        // Calculate similarity scores for all games
        const similarGames = Object.entries(gameCategories)
            .filter(([title]) => title !== gameTitle)
            .map(([title, categs]) => {
                const sharedCategories = categs.filter(cat => gameCategs.includes(cat));
                return {
                    title,
                    score: sharedCategories.length / Math.max(categs.length, gameCategs.length)
                };
            })
            .filter(game => game.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 3)
            .map(game => game.title);
            
        return similarGames;
    }

    // Track played games with timestamp
    function trackPlayedGame(gameTitle) {
        const timestamp = Date.now();
        // Remove the game if it exists
        lastPlayedGames = lastPlayedGames.filter(game => 
            typeof game === 'object' && game.title !== gameTitle
        );
        lastPlayedGames.unshift({ title: gameTitle, timestamp });
        
        if (lastPlayedGames.length > 5) {
            lastPlayedGames.pop();
        }
        
        localStorage.setItem('lastPlayedGames', JSON.stringify(lastPlayedGames));
        updateSimilarGames();
    }

    // Update similar games section with animations
    function updateSimilarGames() {
        const similarGamesGrid = document.getElementById('similarGamesGrid');
        similarGamesGrid.innerHTML = '';

        if (!lastPlayedGames.length || typeof lastPlayedGames[0] !== 'object') {
            const message = document.createElement('p');
            message.textContent = 'Play some games to get recommendations!';
            similarGamesGrid.appendChild(message);
            return;
        }

        const lastPlayed = lastPlayedGames[0].title;
        const similarGames = findSimilarGames(lastPlayed);

        if (similarGames.length === 0) {
            const message = document.createElement('p');
            message.textContent = `No similar games found for "${lastPlayed}"`;
            similarGamesGrid.appendChild(message);
            return;
        }

        // Add "Based on" text
        const basedOnText = document.createElement('p');
        basedOnText.className = 'based-on-text';
        basedOnText.textContent = `Based on your last played game: ${lastPlayed}`;
        similarGamesGrid.appendChild(basedOnText);

        similarGames.forEach((game, index) => {
            const gameDiv = document.createElement('div');
            gameDiv.className = 'game-tile';
            gameDiv.style.opacity = '0';
            gameDiv.style.transform = 'translateX(-20px)';
            
            const gameLink = document.createElement('a');
            gameLink.href = `${game.toLowerCase().replace(/ /g, '')}/index.html`;
            gameLink.textContent = game;
            
            // Add click handler to open game in new tab
            gameLink.addEventListener('click', (e) => {
                e.preventDefault();
                const gameWindow = window.open(gameLink.href, '_blank');
                startGameTimer(game, gameWindow);
            });
            
            // Add categories as tags
            if (gameCategories[game]) {
                const categoriesDiv = document.createElement('div');
                categoriesDiv.className = 'game-categories';
                gameCategories[game].forEach(category => {
                    const tag = document.createElement('span');
                    tag.className = 'category-tag';
                    tag.textContent = category;
                    categoriesDiv.appendChild(tag);
                });
                gameDiv.appendChild(categoriesDiv);
            }
            
            gameDiv.appendChild(gameLink);
            similarGamesGrid.appendChild(gameDiv);

            // Animate each game tile with a delay
            setTimeout(() => {
                gameDiv.style.transition = 'all 0.3s ease';
                gameDiv.style.opacity = '1';
                gameDiv.style.transform = 'translateX(0)';
            }, index * 100);
        });
    }

    let gameWindow = null; // Store reference to game window

    // FPS Counter functionality
    let fps = 0;
    let lastLoop = performance.now();
    let fpsCounter = document.getElementById('fpsCounter');
    let frameCount = 0;
    let lastFpsUpdate = performance.now();
    let fpsUpdateInterval = 500; // Update FPS display every 500ms
    let fpsInterval;

    function updateFPS() {
        const currentLoop = performance.now();
        frameCount++;

        if (currentLoop > lastFpsUpdate + fpsUpdateInterval) {
            fps = Math.round((frameCount * 1000) / (currentLoop - lastFpsUpdate));
            frameCount = 0;
            lastFpsUpdate = currentLoop;

            // Update FPS counter text and color
            fpsCounter.textContent = `FPS: ${fps}`;
            
            // Update color based on FPS value
            fpsCounter.classList.remove('good', 'ok', 'bad');
            if (fps >= 50) {
                fpsCounter.classList.add('good');
            } else if (fps >= 30) {
                fpsCounter.classList.add('ok');
            } else {
                fpsCounter.classList.add('bad');
            }
        }

        requestAnimationFrame(updateFPS);
    }

    function startFPSCounter() {
        fpsCounter.classList.add('visible');
        frameCount = 0;
        lastFpsUpdate = performance.now();
        requestAnimationFrame(updateFPS);
    }

    function stopFPSCounter() {
        fpsCounter.classList.remove('visible');
        cancelAnimationFrame(fpsInterval);
    }

    // Start the FPS counter on page load
    startFPSCounter();

    // Modify the existing game link click handler to include play time tracking
    document.querySelectorAll('.game-tile a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const gameTitle = link.textContent;
            const gameUrl = link.href;
            
            // Open the game in a new window and store reference
            const gameWindow = window.open(gameUrl, '_blank', 'width=800,height=600');
            
            // Start the timer
            startGameTimer(gameTitle, gameWindow);
            
            // Check if game window is closed every 500ms
            const checkWindow = setInterval(() => {
                if (gameWindow && gameWindow.closed) {
                    stopGameTimer();
                    clearInterval(checkWindow);
                }
            }, 500);
            
            // Update lastPlayedGames array and refresh similar games display
            lastPlayedGames.unshift({ title: gameTitle });
            localStorage.setItem('lastPlayedGames', JSON.stringify(lastPlayedGames));
            updateSimilarGames();
        });
    });

    // Track when user leaves the page or closes game window
    window.addEventListener('beforeunload', () => {
        stopGameTimer();
        stopFPSCounter(); // Stop FPS counter when leaving the page
        if (gameWindow && !gameWindow.closed) {
            gameWindow.close();
        }
    });

    // Track when user switches tabs or minimizes
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            if (gameWindow && gameWindow.closed && currentGame) {
                stopGameTimer();
                gameWindow = null;
            }
        }
    });

    // Play time tracking
    let gamePlayTimes = JSON.parse(localStorage.getItem('gamePlayTimes') || '{}');
    let currentGame = localStorage.getItem('currentGame');
    let gameStartTime = localStorage.getItem('gameStartTime') ? parseInt(localStorage.getItem('gameStartTime')) : null;
    let updateInterval = null;

    function formatTime(seconds) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function updatePlayTimeDisplay() {
        // Calculate current session time if a game is active
        let currentSessionTime = 0;
        if (currentGame && gameStartTime) {
            currentSessionTime = Math.floor((Date.now() - gameStartTime) / 1000);
        }

        // Update total play time
        const savedTotalSeconds = Object.values(gamePlayTimes).reduce((a, b) => a + b, 0);
        const totalSeconds = savedTotalSeconds + (currentGame ? currentSessionTime : 0);
        document.getElementById('totalPlaytime').textContent = formatTime(totalSeconds);

        // Update per-game play times
        const gamePlaytimeList = document.getElementById('gamePlaytimeList');
        gamePlaytimeList.innerHTML = '';
        
        // Create a copy of play times for current display
        let currentPlayTimes = {...gamePlayTimes};
        if (currentGame) {
            currentPlayTimes[currentGame] = (currentPlayTimes[currentGame] || 0) + currentSessionTime;
        }

        // Sort games by play time (descending)
        const sortedGames = Object.entries(currentPlayTimes)
            .sort(([,a], [,b]) => b - a);

        sortedGames.forEach(([game, seconds]) => {
            const div = document.createElement('div');
            div.className = 'game-playtime-item';
            div.innerHTML = `
                ${game} <span>${formatTime(seconds)}</span>
            `;
            gamePlaytimeList.appendChild(div);
        });
    }

    function startGameTimer(gameTitle, gameWindow) {
        stopGameTimer(); // Stop any existing timer
        currentGame = gameTitle;
        gameStartTime = Date.now();
        
        // Store in localStorage
        localStorage.setItem('currentGame', currentGame);
        localStorage.setItem('gameStartTime', gameStartTime.toString());
        
        // Start interval for real-time updates
        if (updateInterval) {
            clearInterval(updateInterval);
        }
        updateInterval = setInterval(() => {
            if (currentGame && gameWindow && !gameWindow.closed) {
                updatePlayTimeDisplay();
            } else if (currentGame && (!gameWindow || gameWindow.closed)) {
                stopGameTimer();
            }
        }, 1000);
        
        // Initial update
        updatePlayTimeDisplay();
    }

    function stopGameTimer() {
        if (currentGame && gameStartTime) {
            const playTime = Math.floor((Date.now() - gameStartTime) / 1000);
            gamePlayTimes[currentGame] = (gamePlayTimes[currentGame] || 0) + playTime;
            localStorage.setItem('gamePlayTimes', JSON.stringify(gamePlayTimes));
            
            // Clear current game data
            localStorage.removeItem('currentGame');
            localStorage.removeItem('gameStartTime');
            currentGame = null;
            gameStartTime = null;
            
            // Clear the update interval
            if (updateInterval) {
                clearInterval(updateInterval);
                updateInterval = null;
            }
            
            updatePlayTimeDisplay();
        }
    }

    // Start update interval if there's an active game
    if (currentGame) {
        updateInterval = setInterval(() => {
            updatePlayTimeDisplay();
        }, 1000);
    }

    // Update display when page loads
    if (currentGame && gameStartTime) {
        updateInterval = setInterval(updatePlayTimeDisplay, 1000);
    }
    updatePlayTimeDisplay();

    // Initialize favorites on page load
    initializeFavorites();

    // Initialize similar games section
    updateSimilarGames();

    // Fullscreen toggle functionality
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
            fullscreenBtn.querySelector('i').classList.remove('fa-expand');
            fullscreenBtn.querySelector('i').classList.add('fa-compress');
        } else {
            document.exitFullscreen();
            fullscreenBtn.querySelector('i').classList.remove('fa-compress');
            fullscreenBtn.querySelector('i').classList.add('fa-expand');
        }
    }

    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Listen for fullscreen changes
    document.addEventListener('fullscreenchange', () => {
        fullscreenBtn.classList.toggle('active', document.fullscreenElement);
    });

    // Reset all stats functionality
    document.getElementById('resetStatsBtn').addEventListener('click', () => {
        // Clear localStorage entries
        localStorage.removeItem('gamePlayTimes');
        gamePlayTimes = {}; // Clear the gamePlayTimes object
        localStorage.removeItem('currentGame');
        localStorage.removeItem('gameStartTime');
        localStorage.removeItem('favorites');
        favorites = []; // Clear the favorites array
        localStorage.removeItem('lastPlayedGames');
        lastPlayedGames = []; // Clear the lastPlayedGames array

        // Reset play time display
        document.getElementById('totalPlaytime').textContent = '00:00:00';
        document.getElementById('gamePlaytimeList').innerHTML = '';

        // Reset favorites UI
        document.querySelectorAll('.favorite-star').forEach(star => {
            star.classList.remove('fas');
            star.classList.add('far');
        });
        updateFavoritesGrid();

        // Reset similar games UI
        updateSimilarGames();

        // Optionally, show a confirmation message
        alert('All stats and progress have been reset!');
    });

    const heading = document.querySelector('.heading');

    // Create clock and date elements
    const clockDateWrapper = document.createElement('div');
    clockDateWrapper.style.position = 'absolute';
    clockDateWrapper.style.top = '10px';
    clockDateWrapper.style.left = '10px';
    clockDateWrapper.style.color = '#ABCDEF';
    clockDateWrapper.style.fontFamily = 'Orbitron, sans-serif';
    clockDateWrapper.style.fontSize = '22px';

    const clockElement = document.createElement('div');
    const dateElement = document.createElement('div');

    clockDateWrapper.appendChild(clockElement);
    clockDateWrapper.appendChild(dateElement);
    heading.appendChild(clockDateWrapper);

    function updateClockAndDate() {
        const now = new Date();

        // Format time as hh:mm:ss AM/PM
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert 0 to 12

        clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

        // Format date as mm-dd-yyyy
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const year = now.getFullYear();

        dateElement.textContent = `${month}-${day}-${year}`;
    }

    // Update clock and date every second
    setInterval(updateClockAndDate, 1000);
    updateClockAndDate(); // Initial call to set right away

    // Create an audio element for lofi beats
    const lofiAudio = new Audio('Colorful-Flowers(chosic.com).mp3'); // Replace with the actual path to the lofi beats file
    let isPlaying = false;
    lofiAudio.loop = true; // Enables looping

    let logContainer = document.getElementById('musicContainer');

    // Function to log messages to the log container
    function appendLog(message) {
        const logMessage = document.getElementById('musicLog');
        logMessage.textContent = message;
        logContainer.appendChild(logMessage);
        logContainer.scrollTop = logContainer.scrollHeight; // Auto-scroll to the latest log
    }

    // Function to toggle play/pause
    function toggleLofiBeats() {
        if (isPlaying) {
            lofiAudio.pause();
            appendLog('Paused Lofi Beats');
        } else {
            if (lofiAudio.ended) {
                lofiAudio.currentTime = 0; // Reset to the beginning if the audio has ended
            }
            lofiAudio.play();
            appendLog('Playing Lofi Beats');
        }
        isPlaying = !isPlaying;
    }

    // Function to log the audio progress
    function logAudioProgress() {
        if (lofiAudio.readyState >= 1) { // Check if metadata is loaded
            const totalDuration = lofiAudio.duration; // Total length of the audio
            const currentTime = lofiAudio.currentTime; // Current playback position
            
            const totalMinutes = Math.floor(totalDuration / 60);
            const totalSeconds = Math.floor(totalDuration % 60);

            const currentMinutes = Math.floor(currentTime / 60);
            const currentSeconds = Math.floor(currentTime % 60);

            appendLog(
                `Total Duration: ${totalMinutes}:${totalSeconds.toString().padStart(2, '0')} | ` +
                `Elapsed Time: ${currentMinutes}:${currentSeconds.toString().padStart(2, '0')}`
            );
        } else {
            appendLog('Audio metadata not loaded yet.');
        }
    }

    // Add event listener for key combination
    document.addEventListener('keydown', function (event) {
        if (
            (event.metaKey || event.ctrlKey) && // Command on Mac, Control on Windows
            event.altKey &&
            event.shiftKey &&
            event.code === 'KeyL'
        ) {
            event.preventDefault(); // Prevent any default behavior for this key combo
            toggleLofiBeats();
        }
    });

    // Set an interval to update the audio progress every second
    setInterval(() => {
        if (isPlaying) {
            logAudioProgress();
        }
    }, 1000);

    // Stop music and logging when the user leaves the page
    window.addEventListener('beforeunload', () => {
        if (isPlaying) {
            lofiAudio.pause();
            isPlaying = false;
        }
        appendLog('User left the page. Music stopped.');
    });
});