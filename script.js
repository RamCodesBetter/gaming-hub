document.addEventListener('DOMContentLoaded', function() {
    // ===== GAME DATA =====
    // All games organized by their source folder and category
    const allGames = [
        // STRATEGY GAMES
        { name: '1', folder: '1', category: 'Strategy' },

        // ACTION GAMES
        { name: '10 Minutes Till Dawn', folder: '10-minutes-till-dawn', category: 'Action' },

        // STRATEGY GAMES
        { name: '1010 Deluxe', folder: '1010-deluxe', category: 'Strategy' },

        // ACTION GAMES
        { name: '10 Minutes Till Dawn v2', folder: '10minutestilldawn', category: 'Action' },
        { name: '1V1.Lol', folder: '1v1.lol', category: 'Action' },

        // DRIVING GAMES
        { name: '1v1 Soccer', folder: '1v1-soccer', category: 'Driving' },

        // ACTION GAMES
        { name: '1V1.Lol v2', folder: '1v1lol', category: 'Action' },

        // STRATEGY GAMES
        { name: '2048', folder: '2048', category: 'Strategy' },
        { name: '2048 Multitask', folder: '2048-multitask', category: 'Strategy' },

        // DRIVING GAMES
        { name: '3D Bowling', folder: '3d-bowling', category: 'Driving' },
        { name: '8 Ball Pool', folder: '8-ball', category: 'Driving' },

        // STRATEGY GAMES
        { name: '9007199254740992', folder: '9007199254740992', category: 'Strategy' },

        // ACTION GAMES
        { name: 'A Dark Room', folder: 'adarkroom', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Achievement Unlocked', folder: 'achievementunlocked', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Adam & Eve', folder: 'adam-eve', category: 'Action' },
        { name: 'Adam & Eve 2', folder: 'adam-eve-2', category: 'Action' },
        { name: 'A Dance of Fire and Ice', folder: 'adanceoffireandice', category: 'Action' },

        // DRIVING GAMES
        { name: 'Adrenaline Challenge', folder: 'adrenalinechallenge', category: 'Driving' },

        // STRATEGY GAMES
        { name: 'Adventure Anxiety', folder: 'adventure-anxiety', category: 'Strategy' },

        // DRIVING GAMES
        { name: 'Adventure Drivers', folder: 'adventure-drivers', category: 'Driving' },
        { name: 'Adventure Drivers v2', folder: 'adventuredrivers', category: 'Driving' },

        // CASUAL GAMES
        { name: 'Ages of Conflict', folder: 'ages-of-conflict', category: 'Casual' },

        // ACTION GAMES
        { name: 'Alien Hominid', folder: 'alienhominid', category: 'Action' },
        { name: 'Amidst The Clouds', folder: 'amidst-the-clouds', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Among Us', folder: 'among-us', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Angry Sharks', folder: 'angry-sharks', category: 'Action' },
        { name: 'Apple Shooter', folder: 'apple-shooter', category: 'Action' },

        // DRIVING GAMES
        { name: 'Aquapark Slides', folder: 'aquapark-slides', category: 'Driving' },

        // ACTION GAMES
        { name: 'Arcane Archer', folder: 'arcane-archer', category: 'Action' },
        { name: 'Asteroids', folder: 'asteroids', category: 'Action' },
        { name: 'Astray', folder: 'astray', category: 'Action' },
        { name: 'Avalanche', folder: 'avalanche', category: 'Action' },
        { name: 'Awesome Tanks 2', folder: 'awesome-tanks-2', category: 'Action' },

        // STRATEGY GAMES
        { name: 'BTTS', folder: 'btts', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Back Country', folder: 'backcountry', category: 'Action' },
        { name: 'Backrooms', folder: 'backrooms', category: 'Action' },
        { name: 'Backrooms 2D', folder: 'backrooms-2d', category: 'Action' },
        { name: 'Bacon May Die', folder: 'bacon-may-die', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Bad Ice Cream', folder: 'bad-ice-cream', category: 'Strategy' },
        { name: 'Bad Ice Cream 2', folder: 'bad-ice-cream-2', category: 'Strategy' },
        { name: 'Bad Ice Cream 3', folder: 'bad-ice-cream-3', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Bad Ice Cream v2', folder: 'badicecream', category: 'Action' },
        { name: 'Bad Ice Cream v3', folder: 'badicecream2', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Ball Sort Halloween', folder: 'ball-sort-halloween', category: 'Strategy' },
        { name: 'Ball Sort Puzzle', folder: 'ball-sort-puzzle', category: 'Strategy' },
        { name: 'Ball Sort Soccer', folder: 'ball-sort-soccer', category: 'Strategy' },
        { name: 'Ballistic', folder: 'ballistic', category: 'Strategy' },

        // DRIVING GAMES
        { name: 'Basket Champs', folder: 'basket-champs', category: 'Driving' },
        { name: 'Basket Random', folder: 'basket-random', category: 'Driving' },
        { name: 'Basket and Ball', folder: 'basket-and-ball', category: 'Driving' },
        { name: 'Basketball Stars', folder: 'basketball-stars', category: 'Driving' },
        { name: 'Basketball Stars v2', folder: 'basketballstars', category: 'Driving' },
        { name: 'Basket Random v2', folder: 'basketrandom', category: 'Driving' },

        // STRATEGY GAMES
        { name: 'Battle for Gondor', folder: 'battleforgondor', category: 'Strategy' },

        // CASUAL GAMES
        { name: 'Big Red Button', folder: 'bigredbutton', category: 'Casual' },

        // DRIVING GAMES
        { name: 'Biker Street', folder: 'biker-street', category: 'Driving' },

        // STRATEGY GAMES
        { name: 'BitLife', folder: 'bitlife', category: 'Strategy' },

        // CASUAL GAMES
        { name: 'Bitcoin Clicker', folder: 'bitcoin-clicker', category: 'Casual' },

        // STRATEGY GAMES
        { name: 'Black Hole Square', folder: 'blacholesquare', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Black Knight', folder: 'blackknight', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Block Pig', folder: 'block-pig', category: 'Strategy' },
        { name: 'Bloons TD', folder: 'bloonstd', category: 'Strategy' },
        { name: 'Bloons TD 2', folder: 'bloonstd2', category: 'Strategy' },
        { name: 'Bloons TD 4', folder: 'bloonstd4', category: 'Strategy' },
        { name: 'Bloxors', folder: 'bloxors', category: 'Strategy' },
        { name: 'Blumgi Rocket', folder: 'blumgi-rocket', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Blumgi Slime', folder: 'blumgi-slime', category: 'Action' },
        { name: 'Bob The Robber 2', folder: 'bobtherobber2', category: 'Action' },
        { name: 'Bomb It 7', folder: 'bomb-it-7', category: 'Action' },

        // CASUAL GAMES
        { name: 'Bottle Flip', folder: 'bottle-flip', category: 'Casual' },

        // ACTION GAMES
        { name: 'Bounceback', folder: 'bounceback', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Bouncy Woods', folder: 'bouncy-woods', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Boxel Rebound', folder: 'boxel-rebound', category: 'Action' },
        { name: 'Boxhead 2Play', folder: 'boxhead2play', category: 'Action' },

        // DRIVING GAMES
        { name: 'Boxing Random', folder: 'boxing-random', category: 'Driving' },

        // ACTION GAMES
        { name: 'Boxing Random v2', folder: 'boxingrandom', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Breaking The Bank', folder: 'breakingthebank', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Breaklock', folder: 'breaklock', category: 'Action' },
        { name: 'Breakout', folder: 'breakout', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Bubble Pop', folder: 'bubble-pop', category: 'Strategy' },
        { name: 'Burrito Bison', folder: 'burrito-bison', category: 'Strategy' },

        // CASUAL GAMES
        { name: 'CSGO Clicker', folder: 'csgo-clicker', category: 'Casual' },

        // STRATEGY GAMES
        { name: 'Cannon Basketball 4', folder: 'cannon-basketball-4', category: 'Strategy' },
        { name: 'Canyon Defense', folder: 'canyondefense', category: 'Strategy' },

        // DRIVING GAMES
        { name: 'Car Rush', folder: 'car-rush', category: 'Driving' },
        { name: 'Cars Simulator', folder: 'cars-simulator', category: 'Driving' },

        // STRATEGY GAMES
        { name: 'Cell Machine', folder: 'cell-machine', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Champion Archer', folder: 'championarcher', category: 'Action' },
        { name: 'Champion Island', folder: 'champion-island', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Checkers Legend', folder: 'checkers-legend', category: 'Strategy' },
        { name: 'Chess', folder: 'chess', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Chromedino', folder: 'chromedino', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Circlo', folder: 'circlo', category: 'Strategy' },
        { name: 'Circlo 2', folder: 'circlo2', category: 'Strategy' },

        // CASUAL GAMES
        { name: 'Clicker Heroes', folder: 'clicker-heroes', category: 'Casual' },

        // STRATEGY GAMES
        { name: 'Climb Over It', folder: 'climb-over-it', category: 'Strategy' },

        // DRIVING GAMES
        { name: 'Cluster Rush', folder: 'cluster-rush', category: 'Driving' },

        // STRATEGY GAMES
        { name: 'Color Match', folder: 'color-match', category: 'Strategy' },
        { name: 'Connect 3', folder: 'connect3', category: 'Strategy' },

        // CASUAL GAMES
        { name: 'Cookie Clicker', folder: 'cookie-clicker', category: 'Casual' },
        { name: 'Cookie Clicker v2', folder: 'cookieclicker', category: 'Casual' },
        { name: 'Core Ball', folder: 'core-ball', category: 'Casual' },

        // ACTION GAMES
        { name: 'Craftmine', folder: 'craftmine', category: 'Action' },

        // DRIVING GAMES
        { name: 'Crazy Cars', folder: 'crazy-cars', category: 'Driving' },

        // ACTION GAMES
        { name: 'Crazy Cattle 3D', folder: 'crazycattle3d', category: 'Action' },
        { name: 'Creative Kill Chamber', folder: 'creativekillchamber', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Crossy Road', folder: 'crossyroad', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Cubefield', folder: 'cubefield', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Cut The Rope', folder: 'ctr', category: 'Strategy' },
        { name: 'Cut The Rope Holiday', folder: 'ctr-holiday', category: 'Strategy' },
        { name: 'Cut The Rope TR', folder: 'ctr-tr', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Cut The Rope v2', folder: 'cuttherope.broken', category: 'Action' },
        { name: 'Cut The Rope v3', folder: 'cuttherope2.broken', category: 'Action' },
        { name: 'Dante', folder: 'dante', category: 'Action' },
        { name: 'Dead Again', folder: 'dead-again', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Deal or No Deal', folder: 'deal-or-no-deal', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Death Run 3D', folder: 'death-run-3d', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Deepest Sword', folder: 'deepest-sword', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Defend The Tank', folder: 'defend-the-tank', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Dino Bros', folder: 'dino-bros', category: 'Strategy' },

        // CASUAL GAMES
        { name: 'Dino Merge', folder: 'dino-merge', category: 'Casual' },

        // STRATEGY GAMES
        { name: 'Doctor Acorn 2', folder: 'doctor-acorn2', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Dodge', folder: 'dodge', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Doge 2048', folder: 'doge2048', category: 'Strategy' },

        // CASUAL GAMES
        { name: 'Doge Miner', folder: 'DogeMiner', category: 'Casual' },
        { name: 'Doodle Jump', folder: 'doodle-jump', category: 'Casual' },
        { name: 'Doodle Jump v2', folder: 'doodlejump', category: 'Casual' },

        // ACTION GAMES
        { name: 'Down The Hill', folder: 'down-the-hill', category: 'Action' },
        { name: 'Dragon vs Bricks', folder: 'dragon-vs-bricks', category: 'Action' },

        // DRIVING GAMES
        { name: 'Draw The Hill', folder: 'draw-the-hill', category: 'Driving' },
        { name: 'Drift Boss', folder: 'drift-boss', category: 'Driving' },
        { name: 'Drive Mad', folder: 'drive-mad', category: 'Driving' },

        // CASUAL GAMES
        { name: 'Duck Life', folder: 'ducklife', category: 'Casual' },
        { name: 'Duck Life 2', folder: 'ducklife-2', category: 'Casual' },
        { name: 'Duck Life 3', folder: 'ducklife-3', category: 'Casual' },
        { name: 'Duck Life 4', folder: 'ducklife4', category: 'Casual' },
        { name: 'Duck Life v5', folder: 'ducklife2', category: 'Casual' },
        { name: 'Duck Life v6', folder: 'ducklife3', category: 'Casual' },

        // STRATEGY GAMES
        { name: 'Edge Not Found', folder: 'edgenotfound', category: 'Strategy' },

        // DRIVING GAMES
        { name: 'Edge Surf', folder: 'edge-surf', category: 'Driving' },

        // ACTION GAMES
        { name: 'Edge Surf v2', folder: 'edgesurf', category: 'Action' },

        // CASUAL GAMES
        { name: 'Eel Slap', folder: 'eel-slap', category: 'Casual' },

        // DRIVING GAMES
        { name: 'Eggy Car', folder: 'eggy-car', category: 'Driving' },

        // CASUAL GAMES
        { name: 'Elastic Face', folder: 'elastic-face', category: 'Casual' },

        // DRIVING GAMES
        { name: 'Endless Truck', folder: 'endless-truck', category: 'Driving' },

        // ACTION GAMES
        { name: 'Endless War 3', folder: 'endlesswar3', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Escaping Prison', folder: 'escaping-prison', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Evil Glitch', folder: 'evil-glitch', category: 'Action' },
        { name: 'Evil Glitch v2', folder: 'evilglitch', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Evolution', folder: 'evolution', category: 'Strategy' },
        { name: 'Exo', folder: 'exo', category: 'Strategy' },

        // ACTION GAMES
        { name: 'FNAF', folder: 'fnaf', category: 'Action' },
        { name: 'FNAW', folder: 'fnaw', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Factory Balls', folder: 'factoryballs', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Factory Balls Forever', folder: 'factoryballsforever', category: 'Action' },

        // CASUAL GAMES
        { name: 'Fake Virus', folder: 'fake-virus', category: 'Casual' },

        // ACTION GAMES
        { name: 'Fancy Pants Adventures', folder: 'fancypantsadventures', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Farm Match', folder: 'farm-match', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Fireboy & Watergirl', folder: 'fireboywatergirlforesttemple', category: 'Action' },
        { name: 'Fireboy & Watergirl v2', folder: 'fireboyandwatergirlintheforesttemple', category: 'Action' },
        { name: 'Fishing Game', folder: 'generic-fishing-game', category: 'Action' },

        // CASUAL GAMES
        { name: 'Flappy Bird', folder: 'flappy-bird', category: 'Casual' },
        { name: 'Flappy Bird v2', folder: 'flappybird', category: 'Casual' },
        { name: 'Flappy Bird v3', folder: 'flappybird.old', category: 'Casual' },

        // STRATEGY GAMES
        { name: 'Flash Tetris', folder: 'flashtetris', category: 'Strategy' },
        { name: 'Fleeing Complex', folder: 'fleeing-complex', category: 'Strategy' },

        // DRIVING GAMES
        { name: 'Football Brawl', folder: 'football-brawl', category: 'Driving' },
        { name: 'Football Legends', folder: 'football-legends', category: 'Driving' },
        { name: 'Football Strike', folder: 'football-strike', category: 'Driving' },

        // ACTION GAMES
        { name: 'Friendly Fire', folder: 'friendlyfire', category: 'Action' },

        // CASUAL GAMES
        { name: 'Fruit Ninja', folder: 'fruit-ninja', category: 'Casual' },

        // ACTION GAMES
        { name: 'Frying Nemo', folder: 'frying-nemo', category: 'Action' },
        { name: 'Funny Shooter 2', folder: 'funnyshooter2', category: 'Action' },
        { name: 'Funny Shooter', folder: 'funnyshooter', category: 'Action' },
        { name: 'G-Switch', folder: 'gswitch', category: 'Action' },
        { name: 'G-Switch 2', folder: 'gswitch-2', category: 'Action' },
        { name: 'G-Switch 3', folder: 'gswitch-3', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Game Inside', folder: 'game-inside', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Geodash', folder: 'geodash', category: 'Action' },
        { name: 'Geometry Dash', folder: 'geometry-dash', category: 'Action' },
        { name: 'Geometry Dash v2', folder: 'geometrydash', category: 'Action' },

        // STRATEGY GAMES
        { name: 'George & The Printer', folder: 'georgeandtheprinter', category: 'Strategy' },

        // DRIVING GAMES
        { name: 'Get on Top', folder: 'get-on-top', category: 'Driving' },

        // ACTION GAMES
        { name: 'Getaway Shootout', folder: 'getaway-shootout', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Getting Over It', folder: 'getting-over-it', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Gimme The Airpod', folder: 'gimme-the-airpod', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Go Ball', folder: 'go-ball', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Gobdun', folder: 'gobdun', category: 'Action' },
        { name: 'Goodnight', folder: 'goodnight', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Google Feud', folder: 'google-feud', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Gopherkart', folder: 'gopherkart', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Gravity Soccer', folder: 'gravity-soccer', category: 'Strategy' },
        { name: 'Greybox', folder: 'greybox', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Groovy Ski', folder: 'groovy-ski', category: 'Action' },

        // CASUAL GAMES
        { name: 'Guess Kitty', folder: 'guess-kitty', category: 'Casual' },
        { name: 'Gura Temberine', folder: 'gura-temberine', category: 'Casual' },

        // ACTION GAMES
        { name: 'HBA', folder: 'hba', category: 'Action' },

        // CASUAL GAMES
        { name: 'Hacker Type', folder: 'hackertype', category: 'Casual' },

        // STRATEGY GAMES
        { name: 'Handshakes', folder: 'handshakes', category: 'Strategy' },
        { name: 'Hanger', folder: 'hanger', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Happy Hop', folder: 'happy-hop', category: 'Action' },

        // DRIVING GAMES
        { name: 'Head Soccer', folder: 'head-soccer', category: 'Driving' },
        { name: 'Heads Arena', folder: 'heads-arena', category: 'Driving' },

        // ACTION GAMES
        { name: 'Helicopter', folder: 'helicopter', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Hex Empire', folder: 'hexempire', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Hexgl', folder: 'hexgl', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Hextris', folder: 'hextris', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Hide And Smash', folder: 'hide-and-smash', category: 'Action' },

        // CASUAL GAMES
        { name: 'Hop Pop It', folder: 'hop-pop-it', category: 'Casual' },

        // ACTION GAMES
        { name: 'Hungry Lamu', folder: 'hungry-lamu', category: 'Action' },
        { name: 'Ice Age Baby Adventure', folder: 'iceagebabyadventure', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Icy Head 2', folder: 'icy-head-2', category: 'Strategy' },
        { name: 'Icy Head 3', folder: 'icy-head-3', category: 'Strategy' },

        // CASUAL GAMES
        { name: 'Idle Breakout', folder: 'idle-breakout', category: 'Casual' },
        { name: 'Idle Mining', folder: 'idle-mining', category: 'Casual' },
        { name: 'Idle Restaurants', folder: 'idle-restaurants', category: 'Casual' },

        // STRATEGY GAMES
        { name: 'Impossible Quiz', folder: 'impossiblequiz', category: 'Strategy' },
        { name: 'Infiltrating Airship', folder: 'infiltrating-airship', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Infinite Soccer', folder: 'infinite-soccer', category: 'Action' },
        { name: 'Iron Snout', folder: 'iron-snout', category: 'Action' },
        { name: 'Jetpack Joyride', folder: 'jetpack-joyride', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Jewels Blitz 5', folder: 'jewels-blitz-5', category: 'Strategy' },
        { name: 'Jumping Frogs Puzzle', folder: 'jumpingfrogspuzzle', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Just Fall', folder: 'just-fall', category: 'Action' },
        { name: 'Just One Boss', folder: 'just-one-boss', category: 'Action' },
        { name: 'Kitchen Gun Game', folder: 'kitchen-gun-game', category: 'Action' },

        // CASUAL GAMES
        { name: 'Kitten Cannon', folder: 'kittencannon', category: 'Casual' },

        // ACTION GAMES
        { name: 'Knife Master', folder: 'knife-master', category: 'Action' },
        { name: 'Konnekt', folder: 'konnekt', category: 'Action' },

        // CASUAL GAMES
        { name: 'Learn to Fly', folder: 'learntofly', category: 'Casual' },

        // ACTION GAMES
        { name: 'Learn to Fly 2', folder: 'learntofly2', category: 'Action' },

        // CASUAL GAMES
        { name: 'Little Alchemy 2', folder: 'little-alchemy-2', category: 'Casual' },

        // DRIVING GAMES
        { name: 'Madalin Stunt Cars 2', folder: 'madalin-stunt-cars-2', category: 'Driving' },

        // STRATEGY GAMES
        { name: 'Marbles Sorting', folder: 'marbles-sorting', category: 'Strategy' },

        // ACTION GAMES
        { name: 'Mario', folder: 'mario', category: 'Action' },
        { name: 'Mario Bros', folder: 'mario-bros', category: 'Action' },
        { name: 'Minecraft 0.30', folder: 'minecraft0.30', category: 'Action' },
        { name: 'Minecraft 1.3', folder: 'minecraft1.3', category: 'Action' },
        { name: 'Minecraft 1.5.2', folder: 'minecraft1.5.2', category: 'Action' },
        { name: 'Motox3M2', folder: 'motox3m2', category: 'Action' },
        { name: 'Ovo', folder: 'ovo', category: 'Action' },
        { name: 'Pacman', folder: 'pacman', category: 'Action' },

        // DRIVING GAMES
        { name: 'Polytrack', folder: 'polytrack', category: 'Driving' },

        // ACTION GAMES
        { name: 'Pushback', folder: 'pushback', category: 'Action' },
        { name: 'Racer', folder: 'racer', category: 'Action' },
        { name: 'Radiusraid', folder: 'radiusraid', category: 'Action' },
        { name: 'Retrobowl', folder: 'retrobowl', category: 'Action' },
        { name: 'Retrohaunt', folder: 'retrohaunt', category: 'Action' },
        { name: 'Riddle School', folder: 'riddleschool', category: 'Action' },
        { name: 'Riddle School 2', folder: 'riddleschool2', category: 'Action' },
        { name: 'Riddle School 3', folder: 'riddleschool3', category: 'Action' },
        { name: 'Riddle School 4', folder: 'riddleschool4', category: 'Action' },
        { name: 'Riddle School 5', folder: 'riddleschool5', category: 'Action' },
        { name: 'Roadblocks', folder: 'roadblocks', category: 'Action' },
        { name: 'Rooftop Snipers', folder: 'rooftopsnipers', category: 'Action' },
        { name: 'Sleeping Beauty', folder: 'sleepingbeauty', category: 'Action' },
        { name: 'Slope', folder: 'slope', category: 'Action' },
        { name: 'Snake', folder: 'snake', category: 'Action' },
        { name: 'Snow Rider 3D', folder: 'snowrider3d', category: 'Action' },

        // DRIVING GAMES
        { name: 'Soccer Random', folder: 'soccerrandom', category: 'Driving' },

        // ACTION GAMES
        { name: 'Space Company', folder: 'spacecompany', category: 'Action' },
        { name: 'Space Invaders', folder: 'spaceinvaders', category: 'Action' },
        { name: 'Steal A Brainrot', folder: 'steal-a-brainrot', category: 'Action' },

        // STRATEGY GAMES
        { name: 'Tetris', folder: 'tetris', category: 'Strategy' },

        // ACTION GAMES
        { name: 'The Chrome Incident', folder: 'thechromaincident', category: 'Action' },
        { name: 'There Is No Game', folder: 'thereisnogame', category: 'Action' },
        { name: 'Tower Master', folder: 'towermaster', category: 'Action' },
        { name: 'Tunnelrush', folder: 'tunnelrush', category: 'Action' },
        { name: 'Underrun', folder: 'underrun', category: 'Action' },
        { name: 'Vex3', folder: 'vex3', category: 'Action' },
        { name: 'Vex4', folder: 'vex4', category: 'Action' },
        { name: 'Vex5', folder: 'vex5', category: 'Action' },
        { name: 'Vex6', folder: 'vex6', category: 'Action' },
        { name: 'Vex7', folder: 'vex7', category: 'Action' },

        // DRIVING GAMES
        { name: 'Volley Random', folder: 'volleyrandom', category: 'Driving' },

        // ACTION GAMES
        { name: 'Webretro', folder: 'webretro', category: 'Action' },
        { name: 'World\'s Hardest Game', folder: 'worldshardestgame', category: 'Action' },
        { name: 'World\'s Hardest Game 2', folder: 'worldshardestgame2', category: 'Action' },
        { name: 'XX142B2.exe', folder: 'xx142b2.exe', category: 'Action' },
    ];

    // Sort games alphabetically
    allGames.sort((a, b) => a.name.localeCompare(b.name));

    // ===== DOM ELEMENTS =====
    const searchBar = document.getElementById('searchBar');
    const favoritesGrid = document.getElementById('favoritesGrid');
    const categoryButtons = document.querySelectorAll('.category-pill');
    const statTotalGames = document.getElementById('statTotalGames');
    const statFavorites = document.getElementById('statFavorites');
    const statTotalTime = document.getElementById('statTotalTime');
    const statLastPlayed = document.getElementById('statLastPlayed');
    const gamesGrid = document.getElementById('gamesGrid');
    
    // ===== STATE =====
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let currentCategory = 'all';
    let lastPlayedGames = JSON.parse(localStorage.getItem('lastPlayedGames') || '[]');
    lastPlayedGames = lastPlayedGames
        .filter(Boolean)
        .map(game => typeof game === 'string' ? { title: game } : game)
        .filter(game => typeof game === 'object' && game.title);
    let isRandomizing = false;
    let gameWindow = null;

    // ===== HELPER: Get game URL =====
    function getGameUrl(game) {
        return game.folder.startsWith('http') ? game.folder : `${game.folder}/index.html`;
    }

    // ===== GENERATE GAME CARDS =====
    function generateGameCards() {
        gamesGrid.innerHTML = '';
        
        allGames.forEach((game, index) => {
            const isFavorite = favorites.includes(game.name);
            const card = document.createElement('div');
            card.className = 'game-card';
            card.dataset.game = game.name;
            card.dataset.category = game.category;
            
            const gameUrl = getGameUrl(game);
            
            card.innerHTML = `
                <div class="card-glow"></div>
                <div class="card-border"></div>
                <button class="favorite-btn ${isFavorite ? 'fas' : 'far'} fa-star"></button>
                <div class="card-content">
                    <a href="${gameUrl}">${game.name}</a>
                </div>
                <div class="card-hover">
                    <div class="play-btn"><i class="fas fa-play"></i></div>
                </div>
            `;
            
            // Staggered animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            gamesGrid.appendChild(card);
            
            // Animate in
            setTimeout(() => {
                card.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, Math.min(index * 10, 500));
        });
        
        // Attach event listeners
        attachGameCardListeners();
    }

    function attachGameCardListeners() {
        document.querySelectorAll('.game-card').forEach(card => {
            const link = card.querySelector('a');
            const star = card.querySelector('.favorite-btn');
            
            // Handle card click
            card.addEventListener('click', (e) => {
                if (e.target.classList.contains('favorite-btn')) return;
                e.preventDefault();
                
                const gameTitle = card.dataset.game;
                const gameUrl = link.href;
                
                const gameWin = window.open(gameUrl, '_blank');
                startGameTimer(gameTitle, gameWin);
                trackPlayedGame(gameTitle);
            });
            
            // Handle star click
            star.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorite(card.dataset.game);
            });
        });
    }

    // ===== PARTICLE BACKGROUND =====
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticles() {
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.5 + 0.2,
                pulse: Math.random() * Math.PI * 2,
                hue: 190 + Math.random() * 20
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle, index) => {
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 150) {
                particle.x -= dx * 0.001;
                particle.y -= dy * 0.001;
            }
            
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            particle.pulse += 0.02;

            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;

            const pulseOpacity = particle.opacity * (0.6 + Math.sin(particle.pulse) * 0.4);

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${particle.hue}, 100%, 60%, ${pulseOpacity})`;
            ctx.fill();

            particles.slice(index + 1).forEach(other => {
                const dx = particle.x - other.x;
                const dy = particle.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(other.x, other.y);
                    ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - distance / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(drawParticles);
    }

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    resizeCanvas();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });

    // ===== CLOCK =====
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        
        document.getElementById('clockTime').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
        
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const year = now.getFullYear();
        
        document.getElementById('clockDate').textContent = `${month}-${day}-${year}`;
    }

    setInterval(updateClock, 1000);
    updateClock();

    // ===== STATS =====
    function updateStatsRibbon() {
        if (statTotalGames) {
            statTotalGames.textContent = allGames.length;
        }
        if (statFavorites) {
            statFavorites.textContent = favorites.length;
        }
        if (statTotalTime) {
            const gamePlayTimes = JSON.parse(localStorage.getItem('gamePlayTimes') || '{}');
            const totalSeconds = Object.values(gamePlayTimes).reduce((a, b) => a + b, 0);
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            statTotalTime.textContent = `${hours}h ${minutes}m`;
        }
        if (statLastPlayed) {
            const latest = lastPlayedGames && lastPlayedGames.length && typeof lastPlayedGames[0] === 'object'
                ? lastPlayedGames[0].title
                : '—';
            statLastPlayed.textContent = latest.length > 12 ? latest.substring(0, 12) + '...' : latest;
        }
    }

    // ===== FAVORITES =====
    function updateFavoritesGrid() {
        favoritesGrid.innerHTML = '';
        
        if (favorites.length === 0) {
            updateStatsRibbon();
            return;
        }

        favorites.forEach((gameTitle, index) => {
            const game = allGames.find(g => g.name === gameTitle);
            if (!game) return;
            
                const favItem = document.createElement('div');
                favItem.className = 'fav-item';
                const favGameUrl = getGameUrl(game);
                favItem.innerHTML = `
                <a href="${favGameUrl}" class="fav-link">${gameTitle}</a>
                    <i class="fas fa-star fav-star" data-game="${gameTitle}"></i>
                `;
                favItem.style.cssText = `
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 12px;
                background: rgba(0, 212, 255, 0.06);
                border: 1px solid rgba(0, 212, 255, 0.12);
                    border-radius: 8px;
                    transition: all 0.2s ease;
                opacity: 0;
                transform: translateX(-10px);
                `;
            
            setTimeout(() => {
                favItem.style.opacity = '1';
                favItem.style.transform = 'translateX(0)';
            }, index * 50);
                
                const favLink = favItem.querySelector('.fav-link');
                favLink.style.cssText = `
                    color: var(--text-primary);
                    text-decoration: none;
                font-size: 11px;
                    flex: 1;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                `;
                
                const favStar = favItem.querySelector('.fav-star');
                favStar.style.cssText = `
                color: var(--neon-primary);
                    cursor: pointer;
                font-size: 12px;
                margin-left: 8px;
                `;
                
                favItem.addEventListener('mouseenter', () => {
                    favItem.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                    favItem.style.transform = 'translateX(5px)';
                });
                
                favItem.addEventListener('mouseleave', () => {
                favItem.style.borderColor = 'rgba(0, 212, 255, 0.12)';
                    favItem.style.transform = 'translateX(0)';
                });
                
                favLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    const gameWin = window.open(getGameUrl(game), '_blank');
                    startGameTimer(gameTitle, gameWin);
                    trackPlayedGame(gameTitle);
                });
                
            favStar.addEventListener('click', () => toggleFavorite(gameTitle));
                
                favoritesGrid.appendChild(favItem);
        });

        updateStatsRibbon();
    }

    function toggleFavorite(gameTitle) {
        if (favorites.includes(gameTitle)) {
            favorites = favorites.filter(title => title !== gameTitle);
        } else {
            favorites.push(gameTitle);
        }
        
        localStorage.setItem('favorites', JSON.stringify(favorites));
        
        // Update star in game grid
        document.querySelectorAll('.game-card').forEach(card => {
            if (card.dataset.game === gameTitle) {
                const star = card.querySelector('.favorite-btn');
                star.classList.toggle('fas', favorites.includes(gameTitle));
                star.classList.toggle('far', !favorites.includes(gameTitle));
            }
        });
        
        updateFavoritesGrid();
    }

    // ===== CATEGORY FILTER =====
    function filterGamesByCategory(category) {
        const cards = document.querySelectorAll('.game-card');
        let delay = 0;
        
        cards.forEach(card => {
            const matchesCategory = category === 'all' || card.dataset.category === category;
            
            if (matchesCategory) {
                card.style.display = '';
                card.style.animation = `fadeInUp 0.3s ease ${delay}s forwards`;
                card.style.opacity = '0';
                delay += 0.01;
            } else {
                card.style.display = 'none';
            }
        });

        setTimeout(() => {
            cards.forEach(card => {
                if (card.style.display !== 'none') {
                    card.style.animation = '';
                    card.style.opacity = '';
                }
            });
        }, 1000);
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;
            filterGamesByCategory(currentCategory);
        });
    });

    // ===== SEARCH =====
    searchBar.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('.game-card');
        
        cards.forEach(card => {
            const gameTitle = card.dataset.game.toLowerCase();
            const matchesSearch = gameTitle.includes(searchTerm);
            const matchesCategory = currentCategory === 'all' || card.dataset.category === currentCategory;
            
            card.style.display = matchesSearch && matchesCategory ? '' : 'none';
        });
    });

    // ===== RANDOM GAME =====
    const randomGameBtn = document.getElementById('randomGameBtn');
    randomGameBtn.addEventListener('click', async () => {
        if (isRandomizing) return;
        isRandomizing = true;

        const visibleGames = Array.from(document.querySelectorAll('.game-card:not([style*="display: none"])'))
            .map(card => card.dataset.game);
        
        if (visibleGames.length === 0) {
            isRandomizing = false;
            return;
        }

        randomGameBtn.classList.add('spinning');
        
        let cycles = 0;
        const maxCycles = 15;
        const cycleInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * visibleGames.length);
            searchBar.value = visibleGames[randomIndex];
            cycles++;
            
            if (cycles >= maxCycles) {
                clearInterval(cycleInterval);
                const finalGame = visibleGames[Math.floor(Math.random() * visibleGames.length)];
                searchBar.value = finalGame;
                
                setTimeout(() => {
                    const game = allGames.find(g => g.name === finalGame);
                    if (game) {
                        trackPlayedGame(finalGame);
                        const gameWin = window.open(getGameUrl(game), '_blank');
                        startGameTimer(finalGame, gameWin);
                    }
                    randomGameBtn.classList.remove('spinning');
                    isRandomizing = false;
                    searchBar.value = '';
                }, 300);
            }
        }, 80);
    });

    // ===== SIMILAR GAMES =====
    function findSimilarGames(gameTitle) {
        const game = allGames.find(g => g.name === gameTitle);
        if (!game) return [];
        
        return allGames
            .filter(g => g.name !== gameTitle && g.category === game.category)
            .slice(0, 4)
            .map(g => ({ title: g.name, category: g.category }));
    }

    function trackPlayedGame(gameTitle) {
        lastPlayedGames = lastPlayedGames.filter(game => 
            typeof game === 'object' && game.title !== gameTitle
        );
        lastPlayedGames.unshift({ title: gameTitle, timestamp: Date.now() });
        
        if (lastPlayedGames.length > 5) lastPlayedGames.pop();
        
        localStorage.setItem('lastPlayedGames', JSON.stringify(lastPlayedGames));
        incrementPlayCount(gameTitle);
        updateDailyStreak();
        checkAchievements();
        updateSimilarGames();
        updateStatsRibbon();
    }

    function updateSimilarGames() {
        const similarGamesGrid = document.getElementById('similarGamesGrid');
        similarGamesGrid.innerHTML = '';

        if (!lastPlayedGames.length || typeof lastPlayedGames[0] !== 'object') return;

        const lastPlayed = lastPlayedGames[0].title;
        const lastGame = allGames.find(g => g.name === lastPlayed);
        if (!lastGame) return;

        const gamePlayTimes = JSON.parse(localStorage.getItem('gamePlayTimes') || '{}');
        const gamePlayCounts = JSON.parse(localStorage.getItem('gamePlayCounts') || '{}');
        
        // Enhanced AI recommendations with scoring
        const scoredGames = allGames
            .filter(g => g.name !== lastPlayed && g.category === lastGame.category)
            .map(g => ({
                game: g,
                score: (gamePlayTimes[g.name] || 0) / 60 + // Playtime in minutes
                       (gamePlayCounts[g.name] || 0) * 5 + // Play count bonus
                       (favorites.includes(g.name) ? 10 : 0) // Favorite bonus
            }))
            .sort((a, b) => b.score - a.score)
            .slice(0, 4);

        if (scoredGames.length === 0) {
            // Fallback to simple category match
            const similarGames = findSimilarGames(lastPlayed);
            if (similarGames.length === 0) return;
            
            const basedOnText = document.createElement('p');
            basedOnText.style.cssText = 'font-size: 10px; color: var(--text-muted); margin-bottom: 10px; letter-spacing: 1px;';
            basedOnText.textContent = `Based on: ${lastPlayed}`;
            similarGamesGrid.appendChild(basedOnText);

            similarGames.forEach((game, index) => {
                const gameData = allGames.find(g => g.name === game.title);
                if (!gameData) return;
                
                const gameDiv = document.createElement('div');
                gameDiv.style.cssText = `
                    padding: 10px;
                    background: rgba(0, 212, 255, 0.06);
                    border: 1px solid rgba(0, 212, 255, 0.12);
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    opacity: 0;
                    transform: translateY(10px);
                    margin-bottom: 8px;
                `;
                
                gameDiv.innerHTML = `
                    <span style="padding: 2px 6px; background: rgba(0, 212, 255, 0.1); border-radius: 10px; font-size: 9px; color: var(--neon-primary);">${game.category}</span>
                    <span style="display: block; margin-top: 6px; color: var(--text-primary); font-size: 11px;">${game.title}</span>
                `;
                
                setTimeout(() => {
                    gameDiv.style.opacity = '1';
                    gameDiv.style.transform = 'translateY(0)';
                }, index * 80);
                
                gameDiv.addEventListener('mouseenter', () => {
                    gameDiv.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                    gameDiv.style.transform = 'translateX(5px)';
                });
                
                gameDiv.addEventListener('mouseleave', () => {
                    gameDiv.style.borderColor = 'rgba(0, 212, 255, 0.12)';
                    gameDiv.style.transform = 'translateX(0)';
                });
                
            gameDiv.addEventListener('click', () => {
                const gameWin = window.open(getGameUrl(gameData), '_blank');
                startGameTimer(game.title, gameWin);
                trackPlayedGame(game.title);
            });
                
                similarGamesGrid.appendChild(gameDiv);
            });
            return;
        }

        const basedOnText = document.createElement('p');
        basedOnText.style.cssText = 'font-size: 10px; color: var(--text-muted); margin-bottom: 10px; letter-spacing: 1px;';
        basedOnText.textContent = `Based on: ${lastPlayed}`;
        similarGamesGrid.appendChild(basedOnText);

        scoredGames.forEach((item, index) => {
            const gameDiv = document.createElement('div');
            gameDiv.style.cssText = `
                padding: 10px;
                background: rgba(0, 212, 255, 0.06);
                border: 1px solid rgba(0, 212, 255, 0.12);
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
                opacity: 0;
                transform: translateY(10px);
                margin-bottom: 8px;
            `;
            
            const isPopular = (gamePlayCounts[item.game.name] || 0) > 0 || (gamePlayTimes[item.game.name] || 0) > 300;
            
            gameDiv.innerHTML = `
                <span style="padding: 2px 6px; background: rgba(0, 212, 255, 0.1); border-radius: 10px; font-size: 9px; color: var(--neon-primary);">${item.game.category}</span>
                <span style="display: block; margin-top: 6px; color: var(--text-primary); font-size: 11px;">${item.game.name}</span>
                ${isPopular ? '<span style="display: block; margin-top: 4px; color: var(--text-muted); font-size: 9px;">⭐ Popular</span>' : ''}
            `;
            
            setTimeout(() => {
                gameDiv.style.opacity = '1';
                gameDiv.style.transform = 'translateY(0)';
            }, index * 80);
            
            gameDiv.addEventListener('mouseenter', () => {
                gameDiv.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                gameDiv.style.transform = 'translateX(5px)';
            });
            
            gameDiv.addEventListener('mouseleave', () => {
                gameDiv.style.borderColor = 'rgba(0, 212, 255, 0.12)';
                gameDiv.style.transform = 'translateX(0)';
            });
            
            gameDiv.addEventListener('click', () => {
                const gameWin = window.open(getGameUrl(item.game), '_blank');
                startGameTimer(item.game.name, gameWin);
                trackPlayedGame(item.game.name);
            });
            
            similarGamesGrid.appendChild(gameDiv);
        });
    }

    // ===== FPS COUNTER =====
    let fps = 0;
    let frameCount = 0;
    let lastFpsUpdate = performance.now();
    const fpsCounter = document.getElementById('fpsCounter');
    const fpsValue = document.getElementById('fpsValue');

    function updateFPS() {
        const currentLoop = performance.now();
        frameCount++;

        if (currentLoop > lastFpsUpdate + 500) {
            fps = Math.round((frameCount * 1000) / (currentLoop - lastFpsUpdate));
            frameCount = 0;
            lastFpsUpdate = currentLoop;

            if (fpsValue) fpsValue.textContent = fps;
            
            fpsCounter.classList.remove('good', 'ok', 'bad');
            if (fps >= 50) fpsCounter.classList.add('good');
            else if (fps >= 30) fpsCounter.classList.add('ok');
            else fpsCounter.classList.add('bad');
        }

        requestAnimationFrame(updateFPS);
    }

        fpsCounter.classList.add('visible');
        requestAnimationFrame(updateFPS);

    // ===== PLAY TIME TRACKING =====
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
        let currentSessionTime = 0;
        if (currentGame && gameStartTime) {
            currentSessionTime = Math.floor((Date.now() - gameStartTime) / 1000);
        }

        const savedTotalSeconds = Object.values(gamePlayTimes).reduce((a, b) => a + b, 0);
        const totalSeconds = savedTotalSeconds + (currentGame ? currentSessionTime : 0);
        document.getElementById('totalPlaytime').textContent = formatTime(totalSeconds);

        const ring = document.getElementById('playtimeRing');
        if (ring) {
            const maxTime = 3600 * 10;
            const progress = Math.min(totalSeconds / maxTime, 1);
            const circumference = 2 * Math.PI * 42;
            ring.style.strokeDasharray = circumference;
            ring.style.strokeDashoffset = circumference * (1 - progress);
        }

        const gamePlaytimeList = document.getElementById('gamePlaytimeList');
        gamePlaytimeList.innerHTML = '';
        
        let currentPlayTimes = {...gamePlayTimes};
        if (currentGame) {
            currentPlayTimes[currentGame] = (currentPlayTimes[currentGame] || 0) + currentSessionTime;
        }

        Object.entries(currentPlayTimes)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
            .forEach(([game, seconds]) => {
            const div = document.createElement('div');
                div.style.cssText = `
                    display: flex;
                    justify-content: space-between;
                    padding: 8px 10px;
                    background: var(--bg-elevated);
                    border-radius: 6px;
                    font-size: 10px;
                    margin-bottom: 6px;
                `;
                const displayName = game.length > 12 ? game.substring(0, 12) + '...' : game;
                div.innerHTML = `<span style="color: var(--text-secondary);">${displayName}</span><span style="color: var(--neon-primary);">${formatTime(seconds)}</span>`;
            gamePlaytimeList.appendChild(div);
        });

        updateStatsRibbon();
    }

    function startGameTimer(gameTitle, gameWin) {
        stopGameTimer();
        currentGame = gameTitle;
        gameStartTime = Date.now();
        gameWindow = gameWin;
        
        localStorage.setItem('currentGame', currentGame);
        localStorage.setItem('gameStartTime', gameStartTime.toString());
        
        if (updateInterval) clearInterval(updateInterval);
        
        updateInterval = setInterval(() => {
            if (currentGame && gameWindow && !gameWindow.closed) {
                updatePlayTimeDisplay();
            } else if (currentGame && (!gameWindow || gameWindow.closed)) {
                stopGameTimer();
            }
        }, 1000);
        
        updatePlayTimeDisplay();
    }

    function stopGameTimer() {
        if (currentGame && gameStartTime) {
            const playTime = Math.floor((Date.now() - gameStartTime) / 1000);
            gamePlayTimes[currentGame] = (gamePlayTimes[currentGame] || 0) + playTime;
            localStorage.setItem('gamePlayTimes', JSON.stringify(gamePlayTimes));
            
            localStorage.removeItem('currentGame');
            localStorage.removeItem('gameStartTime');
            currentGame = null;
            gameStartTime = null;
            
            if (updateInterval) {
                clearInterval(updateInterval);
                updateInterval = null;
            }
            
            updatePlayTimeDisplay();
        }
    }

    if (currentGame) {
        updateInterval = setInterval(updatePlayTimeDisplay, 1000);
    }
    updatePlayTimeDisplay();

    window.addEventListener('beforeunload', () => {
        stopGameTimer();
        if (gameWindow && !gameWindow.closed) gameWindow.close();
    });

    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && gameWindow && gameWindow.closed && currentGame) {
            stopGameTimer();
            gameWindow = null;
        }
    });

    // ===== FULLSCREEN =====
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
            fullscreenBtn.classList.add('active');
            fullscreenBtn.querySelector('i').classList.replace('fa-expand', 'fa-compress');
        } else {
            document.exitFullscreen();
            fullscreenBtn.classList.remove('active');
            fullscreenBtn.querySelector('i').classList.replace('fa-compress', 'fa-expand');
        }
    });

    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            fullscreenBtn.classList.remove('active');
            fullscreenBtn.querySelector('i').classList.replace('fa-compress', 'fa-expand');
        }
    });

    // ===== MUSIC =====
    const lofiAudio = new Audio('Colorful-Flowers(chosic.com).mp3');
    let isPlaying = false;
    lofiAudio.loop = true;
    
    const musicToggleBtn = document.getElementById('musicToggleBtn');
    const musicVisualizer = document.getElementById('musicVisualizer');
    const musicStatus = document.getElementById('musicStatus');
    const musicLog = document.getElementById('musicLog');

    function toggleLofiBeats() {
        if (isPlaying) {
            lofiAudio.pause();
            musicLog.textContent = 'Paused';
            musicVisualizer.classList.remove('playing');
            musicStatus.textContent = 'Off';
            musicToggleBtn.classList.remove('active');
        } else {
            lofiAudio.play();
            musicLog.textContent = 'Playing Lofi Beats';
            musicVisualizer.classList.add('playing');
            musicStatus.textContent = 'On';
            musicToggleBtn.classList.add('active');
        }
        isPlaying = !isPlaying;
    }

    musicToggleBtn.addEventListener('click', toggleLofiBeats);

    setInterval(() => {
        if (lofiAudio.readyState >= 1 && isPlaying) {
            const cur = lofiAudio.currentTime;
            const dur = lofiAudio.duration;
            musicLog.textContent = `${Math.floor(cur/60)}:${String(Math.floor(cur%60)).padStart(2,'0')} / ${Math.floor(dur/60)}:${String(Math.floor(dur%60)).padStart(2,'0')}`;
        }
    }, 1000);

    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.altKey && e.shiftKey && e.code === 'KeyL') {
            e.preventDefault();
            toggleLofiBeats();
        }
    });

    // ===== RESET STATS =====
    const resetStatsBtn = document.getElementById('resetStatsBtn');
    if (resetStatsBtn) {
        resetStatsBtn.addEventListener('click', function(e) {
            console.log("Reset button clicked!");
            e.preventDefault();
            e.stopPropagation();
            
            console.log("Showing confirm dialog...");
            const confirmed = window.confirm('Are you sure you want to reset all stats and progress? This will also reset all achievements.');
            console.log("Confirm result:", confirmed);
            
            if (confirmed) {
                console.log("User confirmed - clearing localStorage...");
                try {
                    // Clear all localStorage data
                    localStorage.clear();
                    console.log("localStorage cleared. Reloading page...");
                    
                    // Reload the page to reset all variables
                    window.location.reload();
                } catch (error) {
                    console.error('Error resetting data:', error);
                    alert('An error occurred: ' + error.message);
                }
            } else {
                console.log("User cancelled reset");
            }
            return false;
        });
        console.log("Reset button event listener attached");
    } else {
        console.error("Reset button not found!");
    }

    // ===== VIEW OPTIONS =====
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const gamesGridEl = document.querySelector('.games-grid');
            if (btn.dataset.view === 'list') {
                gamesGridEl.style.gridTemplateColumns = '1fr';
                document.querySelectorAll('.game-card').forEach(card => {
                    card.style.minHeight = '50px';
                    card.style.padding = '12px 16px';
                });
            } else {
                gamesGridEl.style.gridTemplateColumns = '';
                document.querySelectorAll('.game-card').forEach(card => {
                    card.style.minHeight = '';
                    card.style.padding = '';
                });
            }
        });
    });

    // ===== SCHOOL SCHEDULE SYSTEM =====
    let lunchSchedule = localStorage.getItem('lunchSchedule') || 'A';
    
    // Schedule data - Regular days (Mon, Tue, Thu, Fri)
    const regularSchedule = {
        A: [
            { name: 'Before School', start: '00:00', end: '08:10', icon: 'moon', type: 'out' },
            { name: 'BBT', start: '08:10', end: '08:40', icon: 'coffee', type: 'class' },
            { name: 'Passing', start: '08:40', end: '08:45', icon: 'walking', type: 'passing' },
            { name: 'Period 1', start: '08:45', end: '09:35', icon: 'book-open', type: 'class' },
            { name: 'Passing', start: '09:35', end: '09:40', icon: 'walking', type: 'passing' },
            { name: 'Period 2', start: '09:40', end: '10:30', icon: 'book-open', type: 'class' },
            { name: 'Passing', start: '10:30', end: '10:35', icon: 'walking', type: 'passing' },
            { name: 'Period 3', start: '10:35', end: '11:25', icon: 'book-open', type: 'class' },
            { name: 'Lunch A', start: '11:25', end: '11:55', icon: 'utensils', type: 'lunch' },
            { name: 'Passing', start: '11:55', end: '12:00', icon: 'walking', type: 'passing' },
            { name: 'Period 4', start: '12:00', end: '12:50', icon: 'book-open', type: 'class' },
            { name: 'Passing', start: '12:50', end: '12:55', icon: 'walking', type: 'passing' },
            { name: 'Period 5', start: '12:55', end: '13:45', icon: 'book-open', type: 'class' },
            { name: 'Passing', start: '13:45', end: '13:50', icon: 'walking', type: 'passing' },
            { name: 'Period 6', start: '13:50', end: '14:40', icon: 'book-open', type: 'class' },
            { name: 'After School', start: '14:40', end: '23:59', icon: 'gamepad', type: 'out' }
        ],
        B: [
            { name: 'Before School', start: '00:00', end: '08:10', icon: 'moon', type: 'out' },
            { name: 'BBT', start: '08:10', end: '08:40', icon: 'coffee', type: 'class' },
            { name: 'Passing', start: '08:40', end: '08:45', icon: 'walking', type: 'passing' },
            { name: 'Period 1', start: '08:45', end: '09:35', icon: 'book-open', type: 'class' },
            { name: 'Passing', start: '09:35', end: '09:40', icon: 'walking', type: 'passing' },
            { name: 'Period 2', start: '09:40', end: '10:30', icon: 'book-open', type: 'class' },
            { name: 'Passing', start: '10:30', end: '10:35', icon: 'walking', type: 'passing' },
            { name: 'Period 3', start: '10:35', end: '11:25', icon: 'book-open', type: 'class' },
            { name: 'Passing', start: '11:25', end: '11:30', icon: 'walking', type: 'passing' },
            { name: 'Period 4', start: '11:30', end: '12:20', icon: 'book-open', type: 'class' },
            { name: 'Lunch B', start: '12:20', end: '12:50', icon: 'utensils', type: 'lunch' },
            { name: 'Passing', start: '12:50', end: '12:55', icon: 'walking', type: 'passing' },
            { name: 'Period 5', start: '12:55', end: '13:45', icon: 'book-open', type: 'class' },
            { name: 'Passing', start: '13:45', end: '13:50', icon: 'walking', type: 'passing' },
            { name: 'Period 6', start: '13:50', end: '14:40', icon: 'book-open', type: 'class' },
            { name: 'After School', start: '14:40', end: '23:59', icon: 'gamepad', type: 'out' }
        ]
    };
    
    // Wednesday schedule
    const wednesdaySchedule = {
        A: [
            { name: 'Before School', start: '00:00', end: '10:20', icon: 'moon', type: 'out' },
            { name: 'BBT', start: '10:20', end: '11:00', icon: 'coffee', type: 'class' },
            { name: 'Passing', start: '11:00', end: '11:05', icon: 'walking', type: 'passing' },
            { name: 'Period 1', start: '11:05', end: '11:40', icon: 'book-open', type: 'class' },
            { name: 'Passing', start: '11:40', end: '11:45', icon: 'walking', type: 'passing' },
            { name: 'Period 2', start: '11:45', end: '12:20', icon: 'book-open', type: 'class' },
            { name: 'Passing', start: '12:20', end: '12:25', icon: 'walking', type: 'passing' },
            { name: 'Period 3', start: '12:25', end: '13:00', icon: 'book-open', type: 'class' },
            { name: 'Lunch A', start: '13:00', end: '13:30', icon: 'utensils', type: 'lunch' },
            { name: 'Passing', start: '13:30', end: '13:35', icon: 'walking', type: 'passing' },
            { name: 'Period 4', start: '13:35', end: '14:10', icon: 'book-open', type: 'class' },
            { name: 'Passing', start: '14:10', end: '14:15', icon: 'walking', type: 'passing' },
            { name: 'Period 5', start: '14:15', end: '14:50', icon: 'book-open', type: 'class' },
            { name: 'Passing', start: '14:50', end: '14:55', icon: 'walking', type: 'passing' },
            { name: 'Period 6', start: '14:55', end: '15:30', icon: 'book-open', type: 'class' },
            { name: 'After School', start: '15:30', end: '23:59', icon: 'gamepad', type: 'out' }
        ],
        B: [
            { name: 'Before School', start: '00:00', end: '10:20', icon: 'moon', type: 'out' },
            { name: 'BBT', start: '10:20', end: '11:00', icon: 'coffee', type: 'class' },
            { name: 'Passing', start: '11:00', end: '11:05', icon: 'walking', type: 'passing' },
            { name: 'Period 1', start: '11:05', end: '11:40', icon: 'book-open', type: 'class' },
            { name: 'Passing', start: '11:40', end: '11:45', icon: 'walking', type: 'passing' },
            { name: 'Period 2', start: '11:45', end: '12:20', icon: 'book-open', type: 'class' },
            { name: 'Passing', start: '12:20', end: '12:25', icon: 'walking', type: 'passing' },
            { name: 'Period 3', start: '12:25', end: '13:00', icon: 'book-open', type: 'class' },
            { name: 'Passing', start: '13:00', end: '13:05', icon: 'walking', type: 'passing' },
            { name: 'Period 4', start: '13:05', end: '13:40', icon: 'book-open', type: 'class' },
            { name: 'Lunch B', start: '13:40', end: '14:10', icon: 'utensils', type: 'lunch' },
            { name: 'Passing', start: '14:10', end: '14:15', icon: 'walking', type: 'passing' },
            { name: 'Period 5', start: '14:15', end: '14:50', icon: 'book-open', type: 'class' },
            { name: 'Passing', start: '14:50', end: '14:55', icon: 'walking', type: 'passing' },
            { name: 'Period 6', start: '14:55', end: '15:30', icon: 'book-open', type: 'class' },
            { name: 'After School', start: '15:30', end: '23:59', icon: 'gamepad', type: 'out' }
        ]
    };

    function timeToMinutes(timeStr) {
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours * 60 + minutes;
    }

    function formatTimeRemaining(minutes) {
        if (minutes < 0) return '0:00';
        const hrs = Math.floor(minutes / 60);
        const mins = Math.floor(minutes % 60);
        const secs = Math.floor((minutes % 1) * 60);
        if (hrs > 0) {
            return `${hrs}:${String(mins).padStart(2, '0')}`;
        }
        return `${mins}:${String(secs).padStart(2, '0')}`;
    }

    function getCurrentSchedule() {
        const now = new Date();
        const dayOfWeek = now.getDay();
        
        // Weekend
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            return null;
        }
        
        // Wednesday
        if (dayOfWeek === 3) {
            return wednesdaySchedule[lunchSchedule];
        }
        
        // Regular days
        return regularSchedule[lunchSchedule];
    }

    function updateScheduleDisplay() {
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
        const schedule = getCurrentSchedule();
        
        const periodName = document.getElementById('periodName');
        const periodTime = document.getElementById('periodTime');
        const timeLeft = document.getElementById('timeLeft');
        const nextPeriod = document.getElementById('nextPeriod');
        const scheduleRing = document.getElementById('scheduleRing');
        const periodIcon = document.querySelector('.period-icon');
        const scheduleStatus = document.getElementById('scheduleStatus');
        
        // Weekend
        if (!schedule) {
            periodName.textContent = '🎉 Weekend!';
            periodTime.textContent = 'No school today';
            timeLeft.textContent = 'FREE';
            nextPeriod.textContent = 'Monday';
            periodIcon.className = 'period-icon out-of-school';
            periodIcon.innerHTML = '<i class="fas fa-party-horn"></i>';
            scheduleRing.style.strokeDashoffset = 0;
            scheduleStatus.innerHTML = '<span class="live-indicator"></span> Weekend';
            return;
        }
        
        // Find current period
        let currentPeriod = null;
        let nextPeriodData = null;
        
        for (let i = 0; i < schedule.length; i++) {
            const period = schedule[i];
            const startMins = timeToMinutes(period.start);
            const endMins = timeToMinutes(period.end);
            
            if (currentMinutes >= startMins && currentMinutes < endMins) {
                currentPeriod = period;
                nextPeriodData = schedule[i + 1] || null;
                break;
            }
        }
        
        if (currentPeriod) {
            const startMins = timeToMinutes(currentPeriod.start);
            const endMins = timeToMinutes(currentPeriod.end);
            const totalDuration = endMins - startMins;
            const elapsed = currentMinutes - startMins;
            const remaining = endMins - currentMinutes;
            const progress = elapsed / totalDuration;
            
            // Update display
            periodName.textContent = currentPeriod.name;
            periodTime.textContent = `${currentPeriod.start} - ${currentPeriod.end.replace(/^(\d):/, '0$1:')}`;
            timeLeft.textContent = formatTimeRemaining(remaining);
            
            // Update icon
            periodIcon.innerHTML = `<i class="fas fa-${currentPeriod.icon}"></i>`;
            periodIcon.className = 'period-icon';
            if (currentPeriod.type === 'out') periodIcon.classList.add('out-of-school');
            if (currentPeriod.type === 'lunch') periodIcon.classList.add('lunch');
            if (currentPeriod.type === 'passing') periodIcon.classList.add('passing');
            
            // Update ring
            const circumference = 2 * Math.PI * 42;
            scheduleRing.style.strokeDasharray = circumference;
            scheduleRing.style.strokeDashoffset = circumference * (1 - progress);
            
            // Color based on time remaining
            scheduleRing.classList.remove('warning', 'danger');
            if (remaining <= 5 && currentPeriod.type !== 'out') {
                scheduleRing.classList.add('danger');
            } else if (remaining <= 10 && currentPeriod.type !== 'out') {
                scheduleRing.classList.add('warning');
            }
            
            // Next period
            if (nextPeriodData && nextPeriodData.type !== 'out') {
                nextPeriod.textContent = nextPeriodData.name;
            } else if (currentPeriod.type === 'out' && currentPeriod.name === 'After School') {
                nextPeriod.textContent = 'Done for today! 🎮';
            } else {
                nextPeriod.textContent = '--';
            }
            
            // Status badge
            if (currentPeriod.type === 'out') {
                scheduleStatus.innerHTML = '<span class="live-indicator" style="background:#22c55e;box-shadow:0 0 10px #22c55e;"></span> Free';
            } else {
                scheduleStatus.innerHTML = '<span class="live-indicator"></span> Live';
            }
        }
    }

    // Lunch toggle buttons
    document.getElementById('lunchA').addEventListener('click', () => {
        lunchSchedule = 'A';
        localStorage.setItem('lunchSchedule', 'A');
        document.getElementById('lunchA').classList.add('active');
        document.getElementById('lunchB').classList.remove('active');
        updateScheduleDisplay();
    });

    document.getElementById('lunchB').addEventListener('click', () => {
        lunchSchedule = 'B';
        localStorage.setItem('lunchSchedule', 'B');
        document.getElementById('lunchB').classList.add('active');
        document.getElementById('lunchA').classList.remove('active');
        updateScheduleDisplay();
    });

    // Initialize lunch buttons
    if (lunchSchedule === 'B') {
        document.getElementById('lunchB').classList.add('active');
        document.getElementById('lunchA').classList.remove('active');
    }

    // Update schedule every second
    setInterval(updateScheduleDisplay, 1000);
    updateScheduleDisplay();

    // ===== QUICK ACTIONS =====
    
    // Stealth Mode
    document.getElementById('hideUIBtn').addEventListener('click', () => {
        document.body.classList.toggle('stealth-mode');
        const btn = document.getElementById('hideUIBtn');
        if (document.body.classList.contains('stealth-mode')) {
            btn.innerHTML = '<i class="fas fa-eye"></i><span>Exit Stealth</span>';
            } else {
            btn.innerHTML = '<i class="fas fa-eye-slash"></i><span>Stealth Mode</span>';
        }
    });

    // Panic Button
    document.getElementById('panicBtn').addEventListener('click', () => {
        document.getElementById('panicOverlay').classList.add('active');
        if (isPlaying) toggleLofiBeats(); // Stop music
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('panicOverlay').classList.remove('active');
            document.getElementById('historyModal').classList.remove('active');
        }
        // Backtick key for quick panic
        if (e.key === '`') {
            const panicOverlay = document.getElementById('panicOverlay');
            if (panicOverlay.classList.contains('active')) {
                panicOverlay.classList.remove('active');
            } else {
                panicOverlay.classList.add('active');
                if (isPlaying) toggleLofiBeats();
            }
        }
    });

    // History Modal
    document.getElementById('historyBtn').addEventListener('click', () => {
        const historyModal = document.getElementById('historyModal');
        const historyList = document.getElementById('historyList');
        
        historyList.innerHTML = '';
        
        if (lastPlayedGames.length === 0) {
            historyList.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:20px;">No games played yet!</p>';
        } else {
            lastPlayedGames.forEach(game => {
                const gameData = allGames.find(g => g.name === game.title);
                if (!gameData) return;
                
                const timeAgo = getTimeAgo(game.timestamp);
                const item = document.createElement('div');
                item.className = 'history-item';
                item.innerHTML = `
                    <div class="history-item-info">
                        <span class="history-item-name">${game.title}</span>
                        <span class="history-item-time">${timeAgo}</span>
                    </div>
                    <i class="fas fa-play history-item-play"></i>
                `;
                item.addEventListener('click', () => {
                    const gameWin = window.open(getGameUrl(gameData), '_blank');
                    startGameTimer(game.title, gameWin);
                    trackPlayedGame(game.title);
                    historyModal.classList.remove('active');
                });
                historyList.appendChild(item);
            });
        }
        
        historyModal.classList.add('active');
    });

    document.getElementById('closeHistoryBtn').addEventListener('click', () => {
        document.getElementById('historyModal').classList.remove('active');
    });

    function getTimeAgo(timestamp) {
        const seconds = Math.floor((Date.now() - timestamp) / 1000);
        if (seconds < 60) return 'Just now';
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes}m ago`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}h ago`;
        const days = Math.floor(hours / 24);
        return `${days}d ago`;
    }

    // Settings toggles
    document.getElementById('particlesToggle').addEventListener('change', (e) => {
        document.body.classList.toggle('no-particles', !e.target.checked);
    });

    document.getElementById('animationsToggle').addEventListener('change', (e) => {
        document.body.classList.toggle('no-animations', !e.target.checked);
    });

    // ===== ADVANCED SORTING =====
    let currentSort = localStorage.getItem('gameSort') || 'alphabetical';
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.value = currentSort;
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            localStorage.setItem('gameSort', currentSort);
            sortGames();
        });
    }

    function sortGames() {
        const cards = Array.from(document.querySelectorAll('.game-card'));
        const gamePlayTimes = JSON.parse(localStorage.getItem('gamePlayTimes') || '{}');
        const gamePlayCounts = JSON.parse(localStorage.getItem('gamePlayCounts') || '{}');
        
        cards.sort((a, b) => {
            const gameA = a.dataset.game;
            const gameB = b.dataset.game;
            
            switch(currentSort) {
                case 'popularity':
                    const countA = gamePlayCounts[gameA] || 0;
                    const countB = gamePlayCounts[gameB] || 0;
                    return countB - countA;
                    
                case 'newest':
                    const gameAHistory = lastPlayedGames.find(g => g.title === gameA);
                    const gameBHistory = lastPlayedGames.find(g => g.title === gameB);
                    const timeA = gameAHistory ? gameAHistory.timestamp : 0;
                    const timeB = gameBHistory ? gameBHistory.timestamp : 0;
                    return timeB - timeA;
                    
                case 'longest':
                    const timeA_sec = gamePlayTimes[gameA] || 0;
                    const timeB_sec = gamePlayTimes[gameB] || 0;
                    return timeB_sec - timeA_sec;
                    
                default: // alphabetical
                    return gameA.localeCompare(gameB);
            }
        });
        
        const grid = document.getElementById('gamesGrid');
        cards.forEach((card, index) => {
            grid.appendChild(card);
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 10);
        });
    }

    // Track play counts for popularity
    function incrementPlayCount(gameTitle) {
        const counts = JSON.parse(localStorage.getItem('gamePlayCounts') || '{}');
        counts[gameTitle] = (counts[gameTitle] || 0) + 1;
        localStorage.setItem('gamePlayCounts', JSON.stringify(counts));
    }

    // ===== ACHIEVEMENTS SYSTEM =====
    let achievements = JSON.parse(localStorage.getItem('achievements') || '{}');
    let dailyStreak = parseInt(localStorage.getItem('dailyStreak') || '0');
    let lastPlayDate = localStorage.getItem('lastPlayDate');
    let totalXP = parseInt(localStorage.getItem('totalXP') || '0');

    const achievementDefinitions = [
        { id: 'first_game', name: 'First Steps', desc: 'Play your first game', icon: 'fa-star', xp: 10, check: () => Object.keys(gamePlayTimes).length > 0 },
        { id: 'play_10', name: 'Getting Started', desc: 'Play 10 different games', icon: 'fa-gamepad', xp: 25, check: () => Object.keys(gamePlayTimes).length >= 10 },
        { id: 'play_50', name: 'Explorer', desc: 'Play 50 different games', icon: 'fa-compass', xp: 50, check: () => Object.keys(gamePlayTimes).length >= 50 },
        { id: 'play_100', name: 'Master Explorer', desc: 'Play 100 different games', icon: 'fa-globe', xp: 100, check: () => Object.keys(gamePlayTimes).length >= 100 },
        { id: 'time_1h', name: 'Hour Warrior', desc: 'Play for 1 hour total', icon: 'fa-clock', xp: 30, check: () => {
            const total = Object.values(gamePlayTimes).reduce((a, b) => a + b, 0);
            return total >= 3600;
        }},
        { id: 'time_10h', name: 'Time Master', desc: 'Play for 10 hours total', icon: 'fa-hourglass', xp: 100, check: () => {
            const total = Object.values(gamePlayTimes).reduce((a, b) => a + b, 0);
            return total >= 36000;
        }},
        { id: 'streak_3', name: 'Consistent', desc: 'Play 3 days in a row', icon: 'fa-fire', xp: 25, check: () => dailyStreak >= 3 },
        { id: 'streak_7', name: 'Dedicated', desc: 'Play 7 days in a row', icon: 'fa-fire', xp: 50, check: () => dailyStreak >= 7 },
        { id: 'streak_30', name: 'Unstoppable', desc: 'Play 30 days in a row', icon: 'fa-fire', xp: 200, check: () => dailyStreak >= 30 },
        { id: 'genre_all', name: 'Variety Seeker', desc: 'Play games from all categories', icon: 'fa-layer-group', xp: 75, check: () => {
            const playedCategories = new Set();
            Object.keys(gamePlayTimes).forEach(gameTitle => {
                const game = allGames.find(g => g.name === gameTitle);
                if (game) playedCategories.add(game.category);
            });
            return playedCategories.size >= 4;
        }},
        { id: 'favorite_10', name: 'Collector', desc: 'Favorite 10 games', icon: 'fa-heart', xp: 20, check: () => favorites.length >= 10 },
        { id: 'favorite_25', name: 'Curator', desc: 'Favorite 25 games', icon: 'fa-heart', xp: 50, check: () => favorites.length >= 25 }
    ];

    function checkAchievements() {
        const currentGamePlayTimes = JSON.parse(localStorage.getItem('gamePlayTimes') || '{}');
        const currentGamePlayCounts = JSON.parse(localStorage.getItem('gamePlayCounts') || '{}');
        let newAchievements = false;
        achievementDefinitions.forEach(achievement => {
            if (!achievements[achievement.id]) {
                // Create a check function with access to current data
                let checkResult = false;
                try {
                    if (achievement.id === 'first_game') {
                        // Check gamePlayCounts instead of gamePlayTimes since it's updated immediately
                        checkResult = Object.keys(currentGamePlayCounts).length >= 1;
                    } else if (achievement.id === 'play_10' || achievement.id === 'play_50' || achievement.id === 'play_100') {
                        // Use gamePlayCounts for these too since it's more accurate
                        checkResult = Object.keys(currentGamePlayCounts).length >= (achievement.id === 'play_100' ? 100 : achievement.id === 'play_50' ? 50 : 10);
                    } else if (achievement.id === 'time_1h' || achievement.id === 'time_10h') {
                        const total = Object.values(currentGamePlayTimes).reduce((a, b) => a + b, 0);
                        checkResult = total >= (achievement.id === 'time_10h' ? 36000 : 3600);
                    } else if (achievement.id === 'streak_3' || achievement.id === 'streak_7' || achievement.id === 'streak_30') {
                        checkResult = dailyStreak >= (achievement.id === 'streak_30' ? 30 : achievement.id === 'streak_7' ? 7 : 3);
                    } else if (achievement.id === 'genre_all') {
                        const playedCategories = new Set();
                        Object.keys(currentGamePlayCounts).forEach(gameTitle => {
                            const game = allGames.find(g => g.name === gameTitle);
                            if (game) playedCategories.add(game.category);
                        });
                        checkResult = playedCategories.size >= 4;
                    } else if (achievement.id === 'favorite_10' || achievement.id === 'favorite_25') {
                        checkResult = favorites.length >= (achievement.id === 'favorite_25' ? 25 : 10);
                    } else {
                        checkResult = achievement.check();
                    }
                } catch (e) {
                    console.error('Achievement check error:', e);
                }
                
                if (checkResult) {
                    achievements[achievement.id] = {
                        unlocked: true,
                        unlockedAt: Date.now(),
                        xp: achievement.xp
                    };
                    totalXP += achievement.xp;
                    newAchievements = true;
                    showAchievementNotification(achievement);
                }
            }
        });
        
        if (newAchievements) {
            localStorage.setItem('achievements', JSON.stringify(achievements));
            localStorage.setItem('totalXP', totalXP.toString());
            updateAchievementsDisplay();
        }
    }

    function updateDailyStreak() {
        const today = new Date().toDateString();
        if (lastPlayDate !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (lastPlayDate === yesterday.toDateString()) {
                dailyStreak++;
            } else {
                dailyStreak = 1;
            }
            lastPlayDate = today;
            localStorage.setItem('dailyStreak', dailyStreak.toString());
            localStorage.setItem('lastPlayDate', lastPlayDate);
        }
    }

    function showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-notification-content">
                <i class="fas ${achievement.icon}"></i>
                <div>
                    <strong>${achievement.name}</strong>
                    <span>+${achievement.xp} XP</span>
                </div>
            </div>
        `;
        document.body.appendChild(notification);
        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    function updateAchievementsDisplay() {
        const achievementsList = document.getElementById('achievementsList');
        const achievementCount = document.getElementById('achievementCount');
        if (!achievementsList) return;
        
        achievementsList.innerHTML = '';
        const unlockedCount = Object.values(achievements).filter(a => a.unlocked).length;
        if (achievementCount) achievementCount.textContent = unlockedCount;
        
        if (unlockedCount === 0) {
            achievementsList.innerHTML = '<p style="text-align:center;color:var(--text-muted);font-size:11px;padding:10px;">No achievements yet. Start playing!</p>';
            return;
        }

        achievementDefinitions.forEach(achievement => {
            const unlocked = achievements[achievement.id];
            const achievementDiv = document.createElement('div');
            achievementDiv.className = `achievement-item ${unlocked ? 'unlocked' : 'locked'}`;
            achievementDiv.innerHTML = `
                <div class="achievement-icon">
                    <i class="fas ${achievement.icon}"></i>
                </div>
                <div class="achievement-info">
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-desc">${achievement.desc}</div>
                    ${unlocked ? `<div class="achievement-xp">+${achievement.xp} XP</div>` : ''}
                </div>
            `;
            achievementsList.appendChild(achievementDiv);
        });
    }

    // ===== TEACHER MODE =====
    let teacherModeActive = localStorage.getItem('teacherMode') === 'true';
    const teacherModeBtn = document.getElementById('teacherModeBtn');
    const teacherModeOverlay = document.getElementById('teacherModeOverlay');
    const exitTeacherModeBtn = document.getElementById('exitTeacherModeBtn');
    const studyNotes = document.getElementById('studyNotes');

    // Load saved notes
    if (studyNotes) {
        studyNotes.value = localStorage.getItem('studyNotes') || '';
        studyNotes.addEventListener('input', () => {
            localStorage.setItem('studyNotes', studyNotes.value);
        });
    }

    function toggleTeacherMode() {
        teacherModeActive = !teacherModeActive;
        localStorage.setItem('teacherMode', teacherModeActive.toString());
        
        if (teacherModeActive) {
            document.body.classList.add('teacher-mode');
            if (teacherModeOverlay) teacherModeOverlay.classList.add('active');
            if (isPlaying) toggleLofiBeats(); // Pause music
            if (teacherModeBtn) {
                teacherModeBtn.innerHTML = '<i class="fas fa-graduation-cap"></i><span>Exit Study Mode</span>';
                teacherModeBtn.classList.add('active');
            }
        } else {
            document.body.classList.remove('teacher-mode');
            if (teacherModeOverlay) teacherModeOverlay.classList.remove('active');
            if (teacherModeBtn) {
                teacherModeBtn.innerHTML = '<i class="fas fa-chalkboard-teacher"></i><span>Teacher Mode</span>';
                teacherModeBtn.classList.remove('active');
            }
        }
    }

    if (teacherModeBtn) {
        teacherModeBtn.addEventListener('click', toggleTeacherMode);
    }
    if (exitTeacherModeBtn) {
        exitTeacherModeBtn.addEventListener('click', toggleTeacherMode);
    }

    // Initialize teacher mode if it was active
    if (teacherModeActive) {
        document.body.classList.add('teacher-mode');
        if (teacherModeOverlay) teacherModeOverlay.classList.add('active');
    }

    // ===== NOTIFICATIONS =====
    // Default to true if not set in localStorage
    let notificationsEnabled = localStorage.getItem('notificationsEnabled') !== 'false';
    const notificationsToggle = document.getElementById('notificationsToggle');
    
    if (notificationsToggle) {
        notificationsToggle.checked = notificationsEnabled;
        // Update localStorage to reflect default state
        if (localStorage.getItem('notificationsEnabled') === null) {
            localStorage.setItem('notificationsEnabled', 'true');
        }
        notificationsToggle.addEventListener('change', async (e) => {
            notificationsEnabled = e.target.checked;
            localStorage.setItem('notificationsEnabled', notificationsEnabled.toString());
            
            if (notificationsEnabled && Notification.permission === 'default') {
                const permission = await Notification.requestPermission();
                if (permission !== 'granted') {
                    notificationsEnabled = false;
                    notificationsToggle.checked = false;
                    localStorage.setItem('notificationsEnabled', 'false');
                }
            }
        });
    }

    // Request notification permission on load if enabled
    if (notificationsEnabled) {
        if (Notification.permission === 'default') {
            Notification.requestPermission();
        }
    }

    function sendNotification(title, body, icon = '🎮') {
        if (!notificationsEnabled || Notification.permission !== 'granted') return;
        
        new Notification(title, {
            body: body,
            icon: '/resources/favicon-96x96.png',
            badge: '/resources/favicon-96x96.png',
            tag: 'gaming-hub',
            requireInteraction: false
        });
    }

    // Schedule notifications
    let scheduleNotificationSent = false;
    let breakNotificationSent = false;
    let lastBreakNotification = 0;

    function checkScheduleNotifications() {
        if (!notificationsEnabled) return;
        
        const schedule = getCurrentSchedule();
        if (!schedule) return;
        
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        
        schedule.forEach(period => {
            if (period.type === 'class' || period.type === 'lunch') {
                const endMins = timeToMinutes(period.end);
                const timeUntilEnd = endMins - currentMinutes;
                
                // Notify 2 minutes before class ends
                if (timeUntilEnd > 0 && timeUntilEnd <= 2 && timeUntilEnd > 1.5 && !scheduleNotificationSent) {
                    sendNotification('⏰ Class Ending Soon', `${period.name} ends in 2 minutes!`);
                    scheduleNotificationSent = true;
                    setTimeout(() => { scheduleNotificationSent = false; }, 60000);
                }
            }
        });
    }

    function checkBreakNotifications() {
        if (!notificationsEnabled) return;
        
        const now = Date.now();
        if (currentGame && gameStartTime) {
            const playTime = Math.floor((now - gameStartTime) / 1000);
            const playTimeMinutes = Math.floor(playTime / 60);
            
            // Notify every 30 minutes of play
            if (playTimeMinutes >= 30 && playTimeMinutes % 30 === 0 && 
                now - lastBreakNotification > 60000) {
                sendNotification('⏸️ Take a Break', `You've been playing for ${playTimeMinutes} minutes. Time for a break!`);
                lastBreakNotification = now;
            }
        }
    }

    // Check notifications every minute
    setInterval(() => {
        checkScheduleNotifications();
        checkBreakNotifications();
    }, 60000);

    // ===== INITIAL LOAD =====
    generateGameCards();
    updateFavoritesGrid();
    updateSimilarGames();
    updateStatsRibbon();
    checkAchievements();
    updateAchievementsDisplay();
    sortGames(); // Apply saved sort preference
});
