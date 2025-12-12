document.addEventListener('DOMContentLoaded', function() {
    // ===== GAME DATA =====
    // All games organized by their source folder and category
    const allGames = [
        // ACTION GAMES
        { name: '10 Minutes Till Dawn', folder: 'action-games-main/10-minutes-till-dawn', category: 'Action' },
        { name: '1v1.LOL', folder: 'action-games-main/1v1lol', category: 'Action' },
        { name: 'A Dark Room', folder: 'action-games-main/adarkroom', category: 'Action' },
        { name: 'Adam & Eve', folder: 'action-games-main/adam-eve', category: 'Action' },
        { name: 'Adam & Eve 2', folder: 'action-games-main/adam-eve-2', category: 'Action' },
        { name: 'Alien Hominid', folder: 'action-games-main/alienhominid', category: 'Action' },
        { name: 'Amidst The Clouds', folder: 'action-games-main/amidst-the-clouds', category: 'Action' },
        { name: 'Angry Sharks', folder: 'action-games-main/angry-sharks', category: 'Action' },
        { name: 'Animal.io', folder: 'action-games-main/animal-io', category: 'Action' },
        { name: 'Apple Shooter', folder: 'action-games-main/apple-shooter', category: 'Action' },
        { name: 'Aquapark.io', folder: 'action-games-main/aquapark-io', category: 'Action' },
        { name: 'Arcane Archer', folder: 'action-games-main/arcane-archer', category: 'Action' },
        { name: 'Archers.io', folder: 'action-games-main/archers-io', category: 'Action' },
        { name: 'Avalanche', folder: 'action-games-main/avalanche', category: 'Action' },
        { name: 'Awesome Tanks 2', folder: 'action-games-main/awesome-tanks-2', category: 'Action' },
        { name: 'Backrooms', folder: 'action-games-main/backrooms', category: 'Action' },
        { name: 'Backrooms 2D', folder: 'action-games-main/backrooms-2d', category: 'Action' },
        { name: 'Bacon May Die', folder: 'action-games-main/bacon-may-die', category: 'Action' },
        { name: 'Black Knight', folder: 'action-games-main/blackknight', category: 'Action' },
        { name: 'Blumgi Slime', folder: 'action-games-main/blumgi-slime', category: 'Action' },
        { name: 'Bob The Robber 2', folder: 'action-games-main/bobtherobber2', category: 'Action' },
        { name: 'Bob The Robber 4', folder: 'action-games-main/bob-the-robber-4', category: 'Action' },
        { name: 'Bomb It 7', folder: 'action-games-main/bomb-it-7', category: 'Action' },
        { name: 'Boxel Rebound', folder: 'action-games-main/boxel-rebound', category: 'Action' },
        { name: 'Boxhead 2Play', folder: 'action-games-main/boxhead2play', category: 'Action' },
        { name: 'Bullet Force', folder: 'action-games-main/bullet-force', category: 'Action' },
        { name: 'Bumper Ball', folder: 'action-games-main/bumper-ball', category: 'Action' },
        { name: 'Burrito Bison Revenge', folder: 'action-games-main/burrito-bison-revenge', category: 'Action' },
        { name: 'Champion Island', folder: 'action-games-main/champion-island', category: 'Action' },
        { name: 'Champion Archer', folder: 'action-games-main/championarcher', category: 'Action' },
        { name: 'Craftmine', folder: 'action-games-main/craftmine', category: 'Action' },
        { name: 'Crazy Tunnel 3D', folder: 'action-games-main/crazy-tunnel-3d', category: 'Action' },
        { name: 'Creative Kill Chamber', folder: 'action-games-main/creativekillchamber', category: 'Action' },
        { name: 'Cubefield', folder: 'action-games-main/cubefield', category: 'Action' },
        { name: 'Dante', folder: 'action-games-main/dante', category: 'Action' },
        { name: 'Dead Again', folder: 'action-games-main/dead-again', category: 'Action' },
        { name: 'Death Run 3D', folder: 'action-games-main/death-run-3d', category: 'Action' },
        { name: 'Defend The Tank', folder: 'action-games-main/defend-the-tank', category: 'Action' },
        { name: 'Dodge', folder: 'action-games-main/dodge', category: 'Action' },
        { name: 'Dots.io', folder: 'action-games-main/dots-io', category: 'Action' },
        { name: 'Down The Hill', folder: 'action-games-main/down-the-hill', category: 'Action' },
        { name: 'Dragon vs Bricks', folder: 'action-games-main/dragon-vs-bricks', category: 'Action' },
        { name: 'Eagle Ride', folder: 'action-games-main/eagle-ride', category: 'Action' },
        { name: 'Eat The Fish', folder: 'action-games-main/eat-the-fish', category: 'Action' },
        { name: 'Electron Dash', folder: 'action-games-main/electron-dash', category: 'Action' },
        { name: 'Endless Tunnel', folder: 'action-games-main/endless-tunnel', category: 'Action' },
        { name: 'Endless War 3', folder: 'action-games-main/endlesswar3', category: 'Action' },
        { name: 'Evil Glitch', folder: 'action-games-main/evil-glitch', category: 'Action' },
        { name: 'Fancy Pants 2', folder: 'action-games-main/fancy-pants-2', category: 'Action' },
        { name: 'Fancy Pants 3', folder: 'action-games-main/fancy-pants-3', category: 'Action' },
        { name: 'Fancy Pants Adventures', folder: 'action-games-main/fancypantsadventures', category: 'Action' },
        { name: 'Fireboy & Watergirl', folder: 'action-games-main/fireboywatergirlforesttemple', category: 'Action' },
        { name: 'Fish Master', folder: 'action-games-main/fish-master', category: 'Action' },
        { name: 'FNAF', folder: 'action-games-main/fnaf', category: 'Action' },
        { name: 'FNAW', folder: 'action-games-main/fnaw', category: 'Action' },
        { name: 'Football Run', folder: 'action-games-main/football-run', category: 'Action' },
        { name: "Froggy's Battle", folder: 'action-games-main/froggys-battle', category: 'Action' },
        { name: 'Frying Nemo', folder: 'action-games-main/frying-nemo', category: 'Action' },
        { name: 'Funny Shooter 2', folder: 'action-games-main/funnyshooter2', category: 'Action' },
        { name: 'Galaga', folder: 'action-games-main/galaga', category: 'Action' },
        { name: 'Fishing Game', folder: 'action-games-main/generic-fishing-game', category: 'Action' },
        { name: 'Geometry Dash', folder: 'action-games-main/geometry-dash', category: 'Action' },
        { name: 'Getaway Shootout', folder: 'action-games-main/getaway-shootout', category: 'Action' },
        { name: 'Gimme The Airpod', folder: 'action-games-main/gimme-the-airpod', category: 'Action' },
        { name: 'Gladihoppers', folder: 'action-games-main/gladihoppers', category: 'Action' },
        { name: 'Glitch Dash', folder: 'action-games-main/glitch-dash', category: 'Action' },
        { name: 'Gobdun', folder: 'action-games-main/gobdun', category: 'Action' },
        { name: 'Goodnight', folder: 'action-games-main/goodnight', category: 'Action' },
        { name: 'Groovy Ski', folder: 'action-games-main/groovy-ski', category: 'Action' },
        { name: 'G-Switch', folder: 'action-games-main/gswitch', category: 'Action' },
        { name: 'G-Switch 2', folder: 'action-games-main/gswitch-2', category: 'Action' },
        { name: 'G-Switch 3', folder: 'action-games-main/gswitch-3', category: 'Action' },
        { name: 'Gun Mayhem', folder: 'action-games-main/gun-mayhem', category: 'Action' },
        { name: 'Gun Mayhem 2', folder: 'action-games-main/gun-mayhem-2', category: 'Action' },
        { name: 'Gun Mayhem Redux', folder: 'action-games-main/gun-mayhem-redux', category: 'Action' },
        { name: 'Gun Spin', folder: 'action-games-main/gun-spin', category: 'Action' },
        { name: 'Gunblood', folder: 'action-games-main/gunblood', category: 'Action' },
        { name: 'Hammer Master', folder: 'action-games-main/hammer-master', category: 'Action' },
        { name: 'Happy Hop', folder: 'action-games-main/happy-hop', category: 'Action' },
        { name: 'HBA', folder: 'action-games-main/hba', category: 'Action' },
        { name: 'Helicopter', folder: 'action-games-main/helicopter', category: 'Action' },
        { name: 'Hide And Smash', folder: 'action-games-main/hide-and-smash', category: 'Action' },
        { name: 'Hole.io', folder: 'action-games-main/hole-io', category: 'Action' },
        { name: 'House of Hazards', folder: 'action-games-main/house-of-hazards', category: 'Action' },
        { name: 'Hungry Lamu', folder: 'action-games-main/hungry-lamu', category: 'Action' },
        { name: 'Infinite Soccer', folder: 'action-games-main/infinite-soccer', category: 'Action' },
        { name: 'Iron Snout', folder: 'action-games-main/iron-snout', category: 'Action' },
        { name: 'Jetpack Joyride', folder: 'action-games-main/jetpack-joyride', category: 'Action' },
        { name: 'Just Fall', folder: 'action-games-main/just-fall', category: 'Action' },
        { name: 'Just One Boss', folder: 'action-games-main/just-one-boss', category: 'Action' },
        { name: 'Kitchen Gun Game', folder: 'action-games-main/kitchen-gun-game', category: 'Action' },
        { name: 'Knife Master', folder: 'action-games-main/knife-master', category: 'Action' },
        { name: 'Knight Hero Adventure', folder: 'action-games-main/knight-hero-adventure', category: 'Action' },
        { name: 'Knives Crash', folder: 'action-games-main/knives-crash', category: 'Action' },
        { name: 'Knives.io', folder: 'action-games-main/knives-io', category: 'Action' },
        { name: 'Leader Strike', folder: 'action-games-main/leader-strike', category: 'Action' },
        { name: 'Mario', folder: 'action-games-main/mario', category: 'Action' },

        // CASUAL GAMES
        { name: 'Doge Miner', folder: 'casual-games-main/DogeMiner', category: 'Casual' },
        { name: 'Ages of Conflict', folder: 'casual-games-main/ages-of-conflict', category: 'Casual' },
        { name: "Baldi's Basics", folder: 'casual-games-main/baldis-basics', category: 'Casual' },
        { name: 'Big Red Button', folder: 'casual-games-main/bigredbutton', category: 'Casual' },
        { name: 'Bitcoin Clicker', folder: 'casual-games-main/bitcoin-clicker', category: 'Casual' },
        { name: 'Bottle Flip', folder: 'casual-games-main/bottle-flip', category: 'Casual' },
        { name: 'Bottle Flip 3D', folder: 'casual-games-main/bottle-flip-3d', category: 'Casual' },
        { name: 'Clicker Heroes', folder: 'casual-games-main/clicker-heroes', category: 'Casual' },
        { name: 'Cookie Clicker', folder: 'casual-games-main/cookie-clicker', category: 'Casual' },
        { name: 'Core Ball', folder: 'casual-games-main/core-ball', category: 'Casual' },
        { name: 'CSGO Clicker', folder: 'casual-games-main/csgo-clicker', category: 'Casual' },
        { name: 'Dino Merge', folder: 'casual-games-main/dino-merge', category: 'Casual' },
        { name: 'Doodle Jump', folder: 'casual-games-main/doodle-jump', category: 'Casual' },
        { name: 'Duck Life', folder: 'casual-games-main/ducklife', category: 'Casual' },
        { name: 'Duck Life 2', folder: 'casual-games-main/ducklife-2', category: 'Casual' },
        { name: 'Duck Life 3', folder: 'casual-games-main/ducklife-3', category: 'Casual' },
        { name: 'Duck Life 4', folder: 'casual-games-main/ducklife4', category: 'Casual' },
        { name: 'Eel Slap', folder: 'casual-games-main/eel-slap', category: 'Casual' },
        { name: 'Elastic Face', folder: 'casual-games-main/elastic-face', category: 'Casual' },
        { name: 'Fake Virus', folder: 'casual-games-main/fake-virus', category: 'Casual' },
        { name: 'Fisherman Life', folder: 'casual-games-main/fisherman-life', category: 'Casual' },
        { name: 'Flappy Bird', folder: 'casual-games-main/flappy-bird', category: 'Casual' },
        { name: 'Fruit Ninja', folder: 'casual-games-main/fruit-ninja', category: 'Casual' },
        { name: 'Guess Kitty', folder: 'casual-games-main/guess-kitty', category: 'Casual' },
        { name: 'Gura Temberine', folder: 'casual-games-main/gura-temberine', category: 'Casual' },
        { name: 'Hacker Type', folder: 'casual-games-main/hackertype', category: 'Casual' },
        { name: 'Hop Pop It', folder: 'casual-games-main/hop-pop-it', category: 'Casual' },
        { name: 'Idle Breakout', folder: 'casual-games-main/idle-breakout', category: 'Casual' },
        { name: 'Idle Light City', folder: 'casual-games-main/idle-light-city', category: 'Casual' },
        { name: 'Idle Mining', folder: 'casual-games-main/idle-mining', category: 'Casual' },
        { name: 'Idle Restaurants', folder: 'casual-games-main/idle-restaurants', category: 'Casual' },
        { name: 'Idle Tree City', folder: 'casual-games-main/idle-tree-city', category: 'Casual' },
        { name: 'Kitten Cannon', folder: 'casual-games-main/kittencannon', category: 'Casual' },
        { name: 'Learn to Fly', folder: 'casual-games-main/learntofly', category: 'Casual' },
        { name: 'Learn to Fly 2', folder: 'casual-games-main/learn-to-fly-2', category: 'Casual' },
        { name: 'Little Alchemy 2', folder: 'casual-games-main/little-alchemy-2', category: 'Casual' },
        { name: 'Merge Harvest', folder: 'casual-games-main/merge-harvest', category: 'Casual' },
        { name: 'Merge Round Racers', folder: 'casual-games-main/merge-round-racers', category: 'Casual' },
        { name: 'Minecraft Case', folder: 'casual-games-main/minecraft-case', category: 'Casual' },
        { name: 'Nut Simulator', folder: 'casual-games-main/nut-simulator', category: 'Casual' },
        { name: "Papa's Bakeria", folder: 'casual-games-main/papas-bake', category: 'Casual' },
        { name: "Papa's Cheeseria", folder: 'casual-games-main/papas-cheese', category: 'Casual' },
        { name: "Papa's Cupcakeria", folder: 'casual-games-main/papas-cupcake', category: 'Casual' },
        { name: "Papa's Donuteria", folder: 'casual-games-main/papas-donut', category: 'Casual' },
        { name: "Papa's Freezeria", folder: 'casual-games-main/papas-freeze', category: 'Casual' },
        { name: "Papa's Hot Doggeria", folder: 'casual-games-main/papas-hotdog', category: 'Casual' },
        { name: "Papa's Pancakeria", folder: 'casual-games-main/papas-pancake', category: 'Casual' },
        { name: "Papa's Pastaria", folder: 'casual-games-main/papas-pasta', category: 'Casual' },
        { name: "Papa's Scooperia", folder: 'casual-games-main/papas-scoop', category: 'Casual' },
        { name: "Papa's Sushiria", folder: 'casual-games-main/papas-sushi', category: 'Casual' },
        { name: "Papa's Taco Mia", folder: 'casual-games-main/papas-taco', category: 'Casual' },
        { name: "Papa's Wingeria", folder: 'casual-games-main/papas-wing', category: 'Casual' },
        { name: "Papa's Burgeria", folder: 'casual-games-main/papasburgeria', category: 'Casual' },
        { name: "Papa's Pizzeria", folder: 'casual-games-main/papaspizzaria', category: 'Casual' },
        { name: 'Particle Clicker', folder: 'casual-games-main/particle-clicker', category: 'Casual' },
        { name: 'Pou', folder: 'casual-games-main/pou', category: 'Casual' },
        { name: 'President Simulator', folder: 'casual-games-main/president-simulator', category: 'Casual' },
        { name: 'Push The Square', folder: 'casual-games-main/push-the-square', category: 'Casual' },
        { name: 'Rise Higher', folder: 'casual-games-main/rise-higher', category: 'Casual' },
        { name: 'Sandboxels', folder: 'casual-games-main/sandboxels', category: 'Casual' },
        { name: 'Sort The Court', folder: 'casual-games-main/sort-the-court', category: 'Casual' },
        { name: 'Space Bar Clicker', folder: 'casual-games-main/space-bar-clicker', category: 'Casual' },
        { name: 'Space Company', folder: 'casual-games-main/space-company', category: 'Casual' },
        { name: 'Stair Race 3D', folder: 'casual-games-main/stair-race-3d', category: 'Casual' },
        { name: 'Tall.io', folder: 'casual-games-main/tall-io', category: 'Casual' },
        { name: 'Townscaper', folder: 'casual-games-main/townscaper', category: 'Casual' },
        { name: 'Veloce', folder: 'casual-games-main/veloce', category: 'Casual' },
        { name: 'WBWWB', folder: 'casual-games-main/wbwwb', category: 'Casual' },
        { name: 'Weavesilk', folder: 'casual-games-main/weavesilk', category: 'Casual' },
        { name: 'Fluid Simulation', folder: 'casual-games-main/webgl-fluid-simulation', category: 'Casual' },
        { name: 'Whack Your Boss', folder: 'casual-games-main/whack-your-boss', category: 'Casual' },
        { name: 'Yoshi Fabrication', folder: 'casual-games-main/yoshifabrication', category: 'Casual' },

        // DRIVING GAMES
        { name: '1v1 Soccer', folder: 'driving-games-main/1v1-soccer', category: 'Driving' },
        { name: '3D Bowling', folder: 'driving-games-main/3d-bowling', category: 'Driving' },
        { name: '8 Ball Pool', folder: 'driving-games-main/8-ball', category: 'Driving' },
        { name: 'Adrenaline Challenge', folder: 'driving-games-main/adrenalinechallenge', category: 'Driving' },
        { name: 'Adventure Drivers', folder: 'driving-games-main/adventure-drivers', category: 'Driving' },
        { name: 'Aquapark Slides', folder: 'driving-games-main/aquapark-slides', category: 'Driving' },
        { name: 'Axis Football League', folder: 'driving-games-main/axis-football-league', category: 'Driving' },
        { name: 'Basket and Ball', folder: 'driving-games-main/basket-and-ball', category: 'Driving' },
        { name: 'Basket Champs', folder: 'driving-games-main/basket-champs', category: 'Driving' },
        { name: 'Basket Random', folder: 'driving-games-main/basket-random', category: 'Driving' },
        { name: 'Basketball Stars', folder: 'driving-games-main/basketball-stars', category: 'Driving' },
        { name: 'Bicycle Stunt 3D', folder: 'driving-games-main/bicycle-stunt-3d', category: 'Driving' },
        { name: 'Big Shot Boxing', folder: 'driving-games-main/big-shot-boxing', category: 'Driving' },
        { name: 'Biker Street', folder: 'driving-games-main/biker-street', category: 'Driving' },
        { name: 'Boxing Random', folder: 'driving-games-main/boxing-random', category: 'Driving' },
        { name: "Burnin' Rubber 5 XS", folder: 'driving-games-main/burnin-rubber-5xs', category: 'Driving' },
        { name: 'Car Rush', folder: 'driving-games-main/car-rush', category: 'Driving' },
        { name: 'Cars Simulator', folder: 'driving-games-main/cars-simulator', category: 'Driving' },
        { name: 'Cartoon Mini Racing', folder: 'driving-games-main/cartoon-mini-racing', category: 'Driving' },
        { name: 'Cluster Rush', folder: 'driving-games-main/cluster-rush', category: 'Driving' },
        { name: 'Crazy Cars', folder: 'driving-games-main/crazy-cars', category: 'Driving' },
        { name: 'Death Car', folder: 'driving-games-main/death-car', category: 'Driving' },
        { name: 'Draw The Hill', folder: 'driving-games-main/draw-the-hill', category: 'Driving' },
        { name: 'Drift Boss', folder: 'driving-games-main/drift-boss', category: 'Driving' },
        { name: 'Drift Dudes', folder: 'driving-games-main/drift-dudes', category: 'Driving' },
        { name: 'Drive Mad', folder: 'driving-games-main/drive-mad', category: 'Driving' },
        { name: 'Earn to Die', folder: 'driving-games-main/earn-to-die', category: 'Driving' },
        { name: 'Edge Surf', folder: 'driving-games-main/edge-surf', category: 'Driving' },
        { name: 'Eggy Car', folder: 'driving-games-main/eggy-car', category: 'Driving' },
        { name: 'Endless Truck', folder: 'driving-games-main/endless-truck', category: 'Driving' },
        { name: 'Football Brawl', folder: 'driving-games-main/football-brawl', category: 'Driving' },
        { name: 'Football Legends', folder: 'driving-games-main/football-legends', category: 'Driving' },
        { name: 'Football Strike', folder: 'driving-games-main/football-strike', category: 'Driving' },
        { name: 'Get on Top', folder: 'driving-games-main/get-on-top', category: 'Driving' },
        { name: 'Happy Wheels', folder: 'driving-games-main/happy-wheels', category: 'Driving' },
        { name: 'Head Soccer', folder: 'driving-games-main/head-soccer', category: 'Driving' },
        { name: 'Heads Arena', folder: 'driving-games-main/heads-arena', category: 'Driving' },
        { name: 'Icycle', folder: 'driving-games-main/icycle', category: 'Driving' },
        { name: 'Impossible Monster Truck', folder: 'driving-games-main/impossible-monster-truck', category: 'Driving' },
        { name: 'Indian Truck Simulator', folder: 'driving-games-main/indian-truck-simulator', category: 'Driving' },
        { name: 'Mad Truck Challenge', folder: 'driving-games-main/mad-truck-challenge', category: 'Driving' },
        { name: 'Madalin Stunt Cars 2', folder: 'driving-games-main/madalin-stunt-cars-2', category: 'Driving' },
        { name: 'Madalin Stunt Cars 3', folder: 'driving-games-main/madalin-stunt-cars-3', category: 'Driving' },
        { name: 'Monster Truck Destroyer', folder: 'driving-games-main/monster-truck-destroyer', category: 'Driving' },
        { name: 'Monster Truck Zombie', folder: 'driving-games-main/monster-truck-zombie', category: 'Driving' },
        { name: 'Moto Trial Racing 2', folder: 'driving-games-main/moto-trial-racing-2', category: 'Driving' },
        { name: 'Moving Truck', folder: 'driving-games-main/moving-truck', category: 'Driving' },
        { name: 'Nitro Knights', folder: 'driving-games-main/nitro-knights', category: 'Driving' },
        { name: 'Pako Highway', folder: 'driving-games-main/pako-highway', category: 'Driving' },
        { name: 'Parking Fury', folder: 'driving-games-main/parking-fury', category: 'Driving' },
        { name: 'Parking Fury 2', folder: 'driving-games-main/parking-fury-2', category: 'Driving' },
        { name: 'Parking Fury 3', folder: 'driving-games-main/parking-fury-3', category: 'Driving' },
        { name: 'Penalty Kick', folder: 'driving-games-main/penalty-kick', category: 'Driving' },
        { name: 'Penalty Shooter 2', folder: 'driving-games-main/penalty-shooter-2', category: 'Driving' },
        { name: 'Penalty Shooters 3', folder: 'driving-games-main/penalty-shooters-3', category: 'Driving' },
        { name: 'Pixel Smash Duels', folder: 'driving-games-main/pixel-smash-duels', category: 'Driving' },
        { name: 'Racing Monster Truck', folder: 'driving-games-main/racing-monster-truck', category: 'Driving' },
        { name: 'Real Flying Truck', folder: 'driving-games-main/real-flying-truck', category: 'Driving' },
        { name: 'Real Garbage Truck', folder: 'driving-games-main/real-garbage-truck', category: 'Driving' },
        { name: 'Retro Bowl', folder: 'driving-games-main/retro-bowl', category: 'Driving' },
        { name: 'Retro Bowl College', folder: 'driving-games-main/retro-bowl-college', category: 'Driving' },
        { name: 'Rocket Soccer Derby', folder: 'driving-games-main/rocket-soccer-derby', category: 'Driving' },
        { name: 'Scrap Metal', folder: 'driving-games-main/scrapmetal', category: 'Driving' },
        { name: 'Sky Car Stunt', folder: 'driving-games-main/sky-car-stunt', category: 'Driving' },
        { name: 'Soccer Heads', folder: 'driving-games-main/soccer-heads', category: 'Driving' },
        { name: 'Soccer Random', folder: 'driving-games-main/soccer-random', category: 'Driving' },
        { name: 'Soccer Skills', folder: 'driving-games-main/soccer-skills', category: 'Driving' },
        { name: 'Sprinter', folder: 'driving-games-main/sprinter', category: 'Driving' },
        { name: 'Super Liquid Soccer', folder: 'driving-games-main/super-liquid-soccer', category: 'Driving' },
        { name: 'The Heist', folder: 'driving-games-main/theheist', category: 'Driving' },
        { name: 'Ultimate Offroad', folder: 'driving-games-main/ultimate-offroad', category: 'Driving' },
        { name: 'Volley Random', folder: 'driving-games-main/volley-random', category: 'Driving' },
        { name: 'Wheelie Bike', folder: 'driving-games-main/wheelie-bike', category: 'Driving' },
        { name: 'Wheelie Bike 2', folder: 'driving-games-main/wheelie-bike-2', category: 'Driving' },
        { name: 'X Trial Racing', folder: 'driving-games-main/x-trial-racing', category: 'Driving' },
        { name: 'Polytrack', folder: 'driving-games-main/polytrack', category: 'Driving' },

        // STRATEGY GAMES
        { name: '1', folder: 'strategy-games-main/1', category: 'Strategy' },
        { name: '1010 Deluxe', folder: 'strategy-games-main/1010-deluxe', category: 'Strategy' },
        { name: '2048', folder: 'strategy-games-main/2048', category: 'Strategy' },
        { name: '2048 Multitask', folder: 'strategy-games-main/2048-multitask', category: 'Strategy' },
        { name: '9007199254740992', folder: 'strategy-games-main/9007199254740992', category: 'Strategy' },
        { name: 'Achievement Unlocked', folder: 'strategy-games-main/achievementunlocked', category: 'Strategy' },
        { name: 'Adventure Anxiety', folder: 'strategy-games-main/adventure-anxiety', category: 'Strategy' },
        { name: 'Among Us', folder: 'strategy-games-main/among-us', category: 'Strategy' },
        { name: 'Bad Ice Cream', folder: 'strategy-games-main/bad-ice-cream', category: 'Strategy' },
        { name: 'Bad Ice Cream 2', folder: 'strategy-games-main/bad-ice-cream-2', category: 'Strategy' },
        { name: 'Bad Ice Cream 3', folder: 'strategy-games-main/bad-ice-cream-3', category: 'Strategy' },
        { name: 'Ball Sort Halloween', folder: 'strategy-games-main/ball-sort-halloween', category: 'Strategy' },
        { name: 'Ball Sort Puzzle', folder: 'strategy-games-main/ball-sort-puzzle', category: 'Strategy' },
        { name: 'Ball Sort Soccer', folder: 'strategy-games-main/ball-sort-soccer', category: 'Strategy' },
        { name: 'Ballistic', folder: 'strategy-games-main/ballistic', category: 'Strategy' },
        { name: 'Bally', folder: 'strategy-games-main/bally', category: 'Strategy' },
        { name: 'Battle for Gondor', folder: 'strategy-games-main/battleforgondor', category: 'Strategy' },
        { name: 'BitLife', folder: 'strategy-games-main/bitlife', category: 'Strategy' },
        { name: 'Black Hole Square', folder: 'strategy-games-main/blacholesquare', category: 'Strategy' },
        { name: 'Block Pig', folder: 'strategy-games-main/block-pig', category: 'Strategy' },
        { name: 'Bloons TD', folder: 'strategy-games-main/bloonstd', category: 'Strategy' },
        { name: 'Bloons TD 2', folder: 'strategy-games-main/bloonstd2', category: 'Strategy' },
        { name: 'Bloons TD 4', folder: 'strategy-games-main/bloonstd4', category: 'Strategy' },
        { name: 'Bloxors', folder: 'strategy-games-main/bloxors', category: 'Strategy' },
        { name: 'Blumgi Rocket', folder: 'strategy-games-main/blumgi-rocket', category: 'Strategy' },
        { name: 'Bouncy Woods', folder: 'strategy-games-main/bouncy-woods', category: 'Strategy' },
        { name: 'Breaking The Bank', folder: 'strategy-games-main/breakingthebank', category: 'Strategy' },
        { name: 'BTTS', folder: 'strategy-games-main/btts', category: 'Strategy' },
        { name: 'Bubble Pop', folder: 'strategy-games-main/bubble-pop', category: 'Strategy' },
        { name: 'Burrito Bison', folder: 'strategy-games-main/burrito-bison', category: 'Strategy' },
        { name: 'Cannon Basketball 4', folder: 'strategy-games-main/cannon-basketball-4', category: 'Strategy' },
        { name: 'Canyon Defense', folder: 'strategy-games-main/canyondefense', category: 'Strategy' },
        { name: 'Cell Machine', folder: 'strategy-games-main/cell-machine', category: 'Strategy' },
        { name: 'Checkers Legend', folder: 'strategy-games-main/checkers-legend', category: 'Strategy' },
        { name: 'Circlo', folder: 'strategy-games-main/circlo', category: 'Strategy' },
        { name: 'Circlo 2', folder: 'strategy-games-main/circlo2', category: 'Strategy' },
        { name: 'Climb Over It', folder: 'strategy-games-main/climb-over-it', category: 'Strategy' },
        { name: 'Color Match', folder: 'strategy-games-main/color-match', category: 'Strategy' },
        { name: 'Connect 3', folder: 'strategy-games-main/connect3', category: 'Strategy' },
        { name: 'Crossy Road', folder: 'strategy-games-main/crossyroad', category: 'Strategy' },
        { name: 'Cut The Rope', folder: 'strategy-games-main/ctr', category: 'Strategy' },
        { name: 'Cut The Rope Holiday', folder: 'strategy-games-main/ctr-holiday', category: 'Strategy' },
        { name: 'Cut The Rope TR', folder: 'strategy-games-main/ctr-tr', category: 'Strategy' },
        { name: 'Cubes 2048', folder: 'strategy-games-main/cubes-2048', category: 'Strategy' },
        { name: 'Deal or No Deal', folder: 'strategy-games-main/deal-or-no-deal', category: 'Strategy' },
        { name: 'Deepest Sword', folder: 'strategy-games-main/deepest-sword', category: 'Strategy' },
        { name: 'Dino Bros', folder: 'strategy-games-main/dino-bros', category: 'Strategy' },
        { name: 'Doctor Acorn 2', folder: 'strategy-games-main/doctor-acorn2', category: 'Strategy' },
        { name: 'Doge 2048', folder: 'strategy-games-main/doge2048', category: 'Strategy' },
        { name: 'Dummy Never Fails', folder: 'strategy-games-main/dummy-never-fails', category: 'Strategy' },
        { name: 'Dummy Never Fails 2', folder: 'strategy-games-main/dummy-never-fails-2', category: 'Strategy' },
        { name: 'Edge Not Found', folder: 'strategy-games-main/edgenotfound', category: 'Strategy' },
        { name: 'Escaping Prison', folder: 'strategy-games-main/escaping-prison', category: 'Strategy' },
        { name: 'Evolution', folder: 'strategy-games-main/evolution', category: 'Strategy' },
        { name: 'Exo', folder: 'strategy-games-main/exo', category: 'Strategy' },
        { name: 'Factory Balls', folder: 'strategy-games-main/factoryballs', category: 'Strategy' },
        { name: 'Farm Match', folder: 'strategy-games-main/farm-match', category: 'Strategy' },
        { name: 'Flash Tetris', folder: 'strategy-games-main/flashtetris', category: 'Strategy' },
        { name: 'Fleeing Complex', folder: 'strategy-games-main/fleeing-complex', category: 'Strategy' },
        { name: 'Game Inside', folder: 'strategy-games-main/game-inside', category: 'Strategy' },
        { name: 'George & The Printer', folder: 'strategy-games-main/georgeandtheprinter', category: 'Strategy' },
        { name: 'Getting Over It', folder: 'strategy-games-main/getting-over-it', category: 'Strategy' },
        { name: 'Go Ball', folder: 'strategy-games-main/go-ball', category: 'Strategy' },
        { name: 'Go Tet', folder: 'strategy-games-main/go-tet', category: 'Strategy' },
        { name: 'Google Feud', folder: 'strategy-games-main/google-feud', category: 'Strategy' },
        { name: 'Gravity Soccer', folder: 'strategy-games-main/gravity-soccer', category: 'Strategy' },
        { name: 'Greybox', folder: 'strategy-games-main/greybox', category: 'Strategy' },
        { name: 'Handshakes', folder: 'strategy-games-main/handshakes', category: 'Strategy' },
        { name: 'Hanger', folder: 'strategy-games-main/hanger', category: 'Strategy' },
        { name: 'Hex Empire', folder: 'strategy-games-main/hexempire', category: 'Strategy' },
        { name: 'Hextris', folder: 'strategy-games-main/hextris', category: 'Strategy' },
        { name: 'Icy Head 2', folder: 'strategy-games-main/icy-head-2', category: 'Strategy' },
        { name: 'Icy Head 3', folder: 'strategy-games-main/icy-head-3', category: 'Strategy' },
        { name: 'Impossible Quiz', folder: 'strategy-games-main/impossiblequiz', category: 'Strategy' },
        { name: 'Infiltrating Airship', folder: 'strategy-games-main/infiltrating-airship', category: 'Strategy' },
        { name: 'Jewels Blitz 5', folder: 'strategy-games-main/jewels-blitz-5', category: 'Strategy' },
        { name: 'Jungle TD', folder: 'strategy-games-main/jungle-td', category: 'Strategy' },
        { name: 'Kingdom Defence', folder: 'strategy-games-main/kingdom-defence', category: 'Strategy' },
        { name: 'Kingdom Guards', folder: 'strategy-games-main/kingdom-guards', category: 'Strategy' },
        { name: 'Kingdom Rush', folder: 'strategy-games-main/kingdom-rush', category: 'Strategy' },
        { name: 'Marble Dash', folder: 'strategy-games-main/marble-dash', category: 'Strategy' },
        { name: 'Marbles Sorting', folder: 'strategy-games-main/marbles-sorting', category: 'Strategy' },
        { name: 'Meme 2048', folder: 'strategy-games-main/meme2048', category: 'Strategy' },
        { name: 'Minesweeper', folder: 'strategy-games-main/minesweeper', category: 'Strategy' },
        { name: 'Mini Putt', folder: 'strategy-games-main/miniputt', category: 'Strategy' },
        { name: 'Money Movers', folder: 'strategy-games-main/money-movers', category: 'Strategy' },
        { name: 'Money Movers 2', folder: 'strategy-games-main/money-movers-2', category: 'Strategy' },
        { name: 'Money Movers 3', folder: 'strategy-games-main/money-movers-3', category: 'Strategy' },
        { name: 'Mr Bullet', folder: 'strategy-games-main/mr-bullet', category: 'Strategy' },
        { name: 'My Rusty Submarine', folder: 'strategy-games-main/my-rusty-submarine', category: 'Strategy' },
        { name: 'Ninja Cat', folder: 'strategy-games-main/ninja-cat', category: 'Strategy' },
        { name: "Panda's Japan", folder: 'strategy-games-main/pandas-japan', category: 'Strategy' },
        { name: 'Pandemic 2', folder: 'strategy-games-main/pandemic2', category: 'Strategy' },
        { name: 'Papa Cherry Saga', folder: 'strategy-games-main/papa-cherry-saga', category: 'Strategy' },
        { name: 'Park Out', folder: 'strategy-games-main/park-out', category: 'Strategy' },
        { name: 'Plants vs Zombies', folder: 'strategy-games-main/plants-vs-zombies', category: 'Strategy' },
        { name: 'Portal Flash', folder: 'strategy-games-main/portalflash', category: 'Strategy' },
        { name: 'Pudding Monster', folder: 'strategy-games-main/pudding-monster', category: 'Strategy' },
        { name: 'Push Your Luck', folder: 'strategy-games-main/push-your-luck', category: 'Strategy' },
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

    // ===== GENERATE GAME CARDS =====
    function generateGameCards() {
        gamesGrid.innerHTML = '';
        
        allGames.forEach((game, index) => {
            const isFavorite = favorites.includes(game.name);
            const card = document.createElement('div');
            card.className = 'game-card';
            card.dataset.game = game.name;
            card.dataset.category = game.category;
            
            card.innerHTML = `
                <div class="card-glow"></div>
                <div class="card-border"></div>
                <button class="favorite-btn ${isFavorite ? 'fas' : 'far'} fa-star"></button>
                <div class="card-content">
                    <a href="${game.folder}/index.html">${game.name}</a>
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
                favItem.innerHTML = `
                <a href="${game.folder}/index.html" class="fav-link">${gameTitle}</a>
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
                const gameWin = window.open(game.folder + '/index.html', '_blank');
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
                        const gameWin = window.open(game.folder + '/index.html', '_blank');
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
        updateSimilarGames();
        updateStatsRibbon();
    }

    function updateSimilarGames() {
        const similarGamesGrid = document.getElementById('similarGamesGrid');
        similarGamesGrid.innerHTML = '';

        if (!lastPlayedGames.length || typeof lastPlayedGames[0] !== 'object') return;

        const lastPlayed = lastPlayedGames[0].title;
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
                const gameWin = window.open(gameData.folder + '/index.html', '_blank');
                startGameTimer(game.title, gameWin);
                trackPlayedGame(game.title);
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
    document.getElementById('resetStatsBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all stats and progress?')) {
            localStorage.clear();
            gamePlayTimes = {};
            favorites = [];
            lastPlayedGames = [];

            document.getElementById('totalPlaytime').textContent = '00:00:00';
            document.getElementById('gamePlaytimeList').innerHTML = '';

            generateGameCards();
            updateFavoritesGrid();
            updateSimilarGames();
            updateStatsRibbon();
            updatePlayTimeDisplay();
        }
    });

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

    // ===== INITIAL LOAD =====
    generateGameCards();
    updateFavoritesGrid();
    updateSimilarGames();
    updateStatsRibbon();
});
