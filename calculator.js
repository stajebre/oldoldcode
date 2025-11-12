/* 
Hello, this is like my first big js code, made in like 2023 
I am writing most comments today
*/

    // The variables that will be used later on, this coment is also for the items table that contans all information about the items needed.
    let yoursidecash = 0;
    let oppositesidecash = 0;
    let yoursidedemand = 0;
    let oppositesidedemand = 0;
    const screenHeight = window.screen.height;
    const visina = screenHeight / 6 + "px"; // visina means hight, using another language here
    var items = [
    { name: "Torpedo", size: "35m", type: "vehicle", cash: "35000000", demand: "7" },
  { name: "Arachnid", size: "25m", type: "vehicle", cash: "25000000", demand: "6" },
  { name: "Beignet", size: "22.5m", type: "vehicle", cash: "22500000", demand: "9" },
  { name: "Banana", size: "22.5m", type: "vehicle", cash: "22500000", demand: "5" },
  { name: "Javelin", size: "20", type: "vehicle", cash: "20000000", demand: "10" },
  { name: "Celsior", size: "20m", type: "vehicle", cash: "20000000", demand: "5" },
  { name: "Beam", size: "20m", type: "vehicle", cash: "20000000", demand: "4" },
  { name: "Icebreaker", size: "15-17.5m", type: "vehicle", cash: "15000000", demand: "2" },
  { name: "Raptor", size: "15m", type: "vehicle", cash: "15000000", demand: "5" },
  { name: "Proto-8", size: "12.5m", type: "vehicle", cash: "12500000", demand: "5" },
  { name: "P1", size: "10m", type: "vehicle", cash: "10000000", demand: "10" },
  { name: "Crew-Capsule", size: "10m", type: "vehicle", cash: "10000000", demand: "2" },
  { name: "M12", size: "6m", type: "vehicle", cash: "6000000", demand: "7" },
  { name: "JB8", size: "5m-5.5", type: "vehicle", cash: "5500000", demand: "4" },
  { name: "Macaron", size: "4m", type: "vehicle", cash: "4000000", demand: "7" },
  { name: "Goliath", size: "4m", type: "vehicle", cash: "4000000", demand: "6" },
  { name: "Volt-4x4", size: "4m", type: "vehicle", cash: "4000000", demand: "5" },
  { name: "Brulee", size: "4m", type: "vehicle", cash: "4000000", demand: "3" },
  { name: "Parisian", size: "3m", type: "vehicle", cash: "3000000", demand: "7" },
  { name: "Shogun", size: "3m", type: "vehicle", cash: "3000000", demand: "7" },
  { name: "Bandit", size: "2.5m", type: "vehicle", cash: "2500000", demand: "6" },
  { name: "Rattler", size: "2.5m", type: "vehicle", cash: "2500000", demand: "6" },
  { name: "Aperture", size: "2.5m", type: "vehicle", cash: "2500000", demand: "6" },
  { name: "Striker", size: "2.5m", type: "vehicle", cash: "2500000", demand: "4" },
  { name: "Carbonara", size: "2.5m", type: "vehicle", cash: "2500000", demand: "4" },
  { name: "Concept", size: "2.5m", type: "vehicle", cash: "2500000", demand: "4" },
  { name: "Agent", size: "2.5m", type: "vehicle", cash: "2500000", demand: "3" },
  { name: "Poseidon", size: "2.5m", type: "vehicle", cash: "2500000", demand: "3" },
  { name: "Torero", size: "2.5m", type: "vehicle", cash: "2500000", demand: "5" },
  { name: "Airtail", size: "1.5m", type: "vehicle", cash: "1500000", demand: "5" },
  { name: "Snake", size: "1.5m", type: "vehicle", cash: "1500000", demand: "5" },
  { name: "Tiny-toy", size: "1.25m", type: "vehicle", cash: "1250000", demand: "6" },
  { name: "Frost-Clawer", size: "1.25m", type: "vehicle", cash: "1250000", demand: "2" },
  { name: "Longhorn", size: "1.25m", type: "vehicle", cash: "1250000", demand: "2" },
  { name: "Bloxy", size: "1.25m", type: "vehicle", cash: "1250000", demand: "4" },
  { name: "Volt", size: "1m", type: "vehicle", cash: "1000000", demand: "6" },
  { name: "Blackhawk", size: "1m", type: "vehicle", cash: "1000000", demand: "5" },
  { name: "Drone", size: "1m", type: "vehicle", cash: "1000000", demand: "5" },
  { name: "Jet", size: "1m", type: "vehicle", cash: "1000000", demand: "5" },
  { name: "Monster", size: "1m", type: "vehicle", cash: "1000000", demand: "4" },
  { name: "Trailblazer", size: "1m", type: "vehicle", cash: "1000000", demand: "3" },
  { name: "Tank", size: "1m", type: "vehicle", cash: "1000000", demand: "1" },
  { name: "Sloop", size: "1m", type: "vehicle", cash: "1000000", demand: "1" },
  { name: "Megalodon", size: "900k", type: "vehicle", cash: "900000", demand: "6" },
  { name: "Jackrabbit", size: "850k", type: "vehicle", cash: "850000", demand: "4" },
  { name: "Shell-Classic", size: "850k", type: "vehicle", cash: "850000", demand: "4" },
  { name: "Roadster", size: "600k", type: "vehicle", cash: "600000", demand: "5" },
  { name: "Eclaire", size: "600k", type: "vehicle", cash: "600000", demand: "6" },
  { name: "Hummerhead", size: "500k", type: "vehicle", cash: "500000", demand: "6" },
  { name: "Posh", size: "400k", type: "vehicle", cash: "400000", demand: "3" },
  { name: "SUV", size: "300k", type: "vehicle", cash: "300000", demand: "2" },
  { name: "Steed", size: "250k", type: "vehicle", cash: "250000", demand: "3" },
  { name: "Desert-Clawer",size: "230k", type: "vehiacle",cash: "230000", demand: "1"},
  { name: "Classic", size: "200k", type: "vehicle", cash: "200000", demand: "2" },
  { name: "Escape-bot", size: "200k", type: "vehicle", cash: "200000", demand: "4" },
  { name: "Mighty", size: "100k", type: "vehicle", cash: "100000", demand: "1" },
  // Textures

  {name: "Checker", size: "32.5m", type: "Textures", cash: "32500000", demand: "3" },
  {name: "Drip", size: "7m", type: "Textures", cash: "7000000", demand: "7" },
  {name: "Snowstorm", size: "7m", type: "Textures", cash: "7000000", demand: "1" },
  {name: "Fire", size: "5m", type: "Textures", cash: "5000000", demand: "4" },
  {name: "Galactic Carbon", size: "4m", type: "Texture", cash: "4000000" , demand:"3" },
  {name: "Armor", size: "3m", type: "Textures", cash: "3000000", demand: "2" },
  {name: "Blue-Pixel", size: "2.5m", type: "Textures", cash: "2500000", demand: "5" },
  { name: "Winter-camo", size: "2.5m", type: "Textures", cash: "2500000", demand: "3" },
  {name: "Orange-pixel", size: "2m", type: "Textures", cash: "2000000", demand: "4" },
  { name: "Earthquake", size: "2m", type: "Textures", cash: "2000000", demand: "3" }, 
  {name: "Pixel", size: "1.25m", type: "Textures", cash: "1250000", demand: "4" },
  {name: "Field", size: "1.25m", type: "Textures", cash: "1250000", demand: "3" },
  { name: "Old-town-road", size: "1.25m", type: "Textures", cash: "1250000", demand: "3" },
  {name: "Crimson-racer", size: "1.25m", type: "Textures", cash: "1250000", demand: "4" },
  {name: "Tiger", size: "1.25m", type: "Textures", cash: "1250000", demand: "2" },
  {name: "Hotdog", size: "1m", type: "Textures", cash: "1000000", demand: "2" },
  {name: "Earth", size: "1m", type: "Textures", cash: "1000000", demand: "2" },
  {name: "Wavy", size: "1m", type: "Textures", cash: "1000000", demand: "2" },
  { name: "Flaming", size: "750k", type: "Textures", cash: "750000", demand: "2" },
  {name: "Digital-Confetti", size: "500k", type: "Textures", cash: "500000", demand: "1" },
  {name: "Bacon", size: "500k", type: "Textures", cash: "500000", demand: "2" },
  { name: "White-Marble", size: "500k", type: "Textures", cash: "500000", demand: "2" },
  { name: "Berlin-graffiti", size: "500k", type: "Textures", cash: "200000", demand: "1" },
  {name: "Touchdown", size: "400k", type: "Textures", cash: "400000", demand: "1" },
  { name: "Gulf", size: "300k", type: "Textures", cash: "300000", demand: "2" },
  { name: "Aquatic", size: "300k", type: "Textures", cash: "300000", demand: "1" },
  {name: "Wooden-Toy", size: "250k", type: "texture", cash: "250000", demand: "1" },
  {name: "Camo-Radar", size: "200k", type: "texture", cash: "200000", demand: "1" },
  {name: "Superstar", size: "200k", type: "texture", cash: "200000", demand: "1" },
  { name: "Lava", size: "200k", type: "Textures", cash: "200000", demand: "1" },
  { name: "Bandana", size: "100k", type: "Textures", cash: "100000", demand: "1" },
  { name: "Aurora", size: "100k", type: "Textures", cash: "100000", demand: "1" }, 
  { name: "Carbon-Fire", size: "100k", type: "Textures", cash: "100000", demand: "1" },
  { name: "Road-Warrior", size: "75k", type: "Textures", cash: "75000", demand: "1" },
  { name: "Ladybug", size: "20k", type: "Textures", cash: "20000", demand: "1" },
  { name: "ClassicVAR1", size: "20k", type: "Textures", cash: "20000", demand: "1" },
  { name: "Peach", size: "20k", type: "Textures", cash: "20000", demand: "1" },
  { name: "ClassicVAR3", size: "20k", type: "Textures", cash: "20000", demand: "1" },

  // spoilers
  {name: "Thrusters", size: "32.5m", type: "Spoilers", cash: "32500000", demand: "4" },
  {name: "2B spoiler", size: "7m", type: "Spoilers", cash: "7000000", demand: "3"},
  {name: "Eight leg spoiler", size: "5m", type: "Spoilers", cash: "5000000", demand: "2"},
  {name: "5 star", size: "5m", type: "Spoilers", cash: "5000000", demand: "2"},
  {name: "Volt wing", size: "3m", type: "Spoilers", cash: "3000000", demand: "2"},
  {name: "Bike rack", size: "3m", type: "Spoilers", cash: "3000000", demand: "2"},
  {name: "Snow shovel", size: "3m", type: "Spoilers", cash: "3000000", demand: "2"},
  {name: "Cash Spitter", size: "2.5m", type: "Spoilers", cash: "2500000", demand: "7"},
  {name: "Clickbait", size: "2.5m", type: "Spoilers", cash: "2500000", demand: "3"},
  {name: "Tiki torch", size: "2.5m", type: "Spoilers", cash: "2500000", demand: "3"},
  {name: "Velocity spoiler", size: "2.5m", type: "Spoilers", cash: "2500000", demand: "3"},
  {name: "Blue chute", size: "1.25m", type: "Spoilers", cash: "1250000", demand: "3"},
  {name: "Live glider", size: "1.25m", type: "Spoilers", cash: "1250000", demand: "1"},
  {name: "Glider wing", size: "1.25m", type: "Spoilers", cash: "1250000", demand: "1"},
  {name: "UFO spoiler", size: "1.25m", type: "Spoilers", cash: "1250000", demand: "1"},
  {name: "Mecha arm spoiler", size: "1.25m", type: "Spoilers", cash: "1250000", demand: "1"},
  {name: "Flamethrower spoiler", size: "1.25m", type: "Spoilers", cash: "1250000", demand: "4"},
  {name: "Jetpack spoiler", size: "900k", type: "Spoilers", cash: "900000", demand: "4"},
  {name: "Water gun spoiler", size: "1m", type: "Spoilers", cash: "1000000", demand: "2"},
  {name: "Orange chute", size: "850k", type: "Spoilers", cash: "850000", demand: "2/10"},
  {name: "Triple fin", size: "800k", type: "Spoilers", cash: "800000", demand: "2/10"},
  {name: "Colors of Italy spoiler", size: "900k", type: "Spoilers", cash: "900000", demand: "4"},
  {name: "Endurance wing", size: "750k", type: "Spoilers", cash: "750000", demand: "3"},
  {name: "Shell speakers", size: "750k", type: "Spoilers", cash: "750000", demand: "3"},
  {name: "Afterburner", size: "750k", type: "Spoilers", cash: "750000", demand: "3"},
  {name: "Overdrive spoiler", size: "600k", type: "Spoilers", cash: "600000", demand: "3"},
  {name: "Tuner spoiler", size: "600k", type: "Spoilers", cash: "600000", demand: "2"},
  {name: "Star wing", size: "500k", type: "Spoilers", cash: "500000", demand: "3"},
  {name: "Deathtrap", size: "400k", type: "Spoilers", cash: "400000", demand: "2"},
  {name: "Snowlog", size: "400k", type: "Spoilers", cash: "400000", demand: "2"},
  {name: "Turning Key", size: "500k", type: "Spoilers", cash: "500000", demand: "2"},
  {name: "Travel case spoiler", size: "350k", type: "Spoilers", cash: "350000", demand: "2"},
  {name: "Deathray spoiler", size: "250k", type: "Spoilers", cash: "250000", demand: "2"},
  {name: "Surfboard spoiler", size: "250k", type: "Spoilers", cash: "250000", demand: "1"},
  {name: "RC antenna", size: "200k", type: "Spoilers", cash: "200000", demand: "2"},
  {name: "Tori gate wing", size: "200k", type: "Spoilers", cash: "200000", demand: "2"},
  {name: "Japanese lantern wing", size: "200k", type: "Spoilers", cash: "200000", demand: "2"},
  {name: "DoYouLift spoiler", size: "200k", type: "Spoilers", cash: "200000", demand: "1"},
  {name: "Bull horns wing", size: "100k", type: "Spoilers", cash: "100000", demand: "1"},
  {name: "Windmill spoiler", size: "75k", type: "Spoilers", cash: "75000", demand: "1"},
  {name: "Ski day spoiler", size: "50k", type: "Spoilers", cash: "50000", demand: "1"},
  {name: "Native wings", size: "50k", type: "Spoilers", cash: "50000", demand: "1"},

  // Rims
{ name: "Void", size: "27.5m", type: "Rims", cash: "27500000", demand: "3" },
{ name: "Spinners", size: "27.5m", type: "Rims", cash: "27500000", demand: "2" },
{ name: "RTX", size: "15m", type: "Rims", cash: "15000000", demand: "2" },
{ name: "Snowflake", size: "5m", type: "Rims", cash: "5000000", demand: "2" },
{ name: "Hypno", size: "5m", type: "Rims", cash: "5000000", demand: "1" },
{ name: "Icicle", size: "5m", type: "Rims", cash: "5000000", demand: "3" },
{ name: "Snowface", size: "5m", type: "Rims", cash: "5000000", demand: "3" },
{ name: "Brickset", size: "5m", type: "Rims", cash: "5000000", demand: "2" },
{ name: "Laser Cannon", size: "2.5m", type: "Rims", cash: "2500000", demand: "7" },
{ name: "Ionize", size: "2.5m", type: "Rims", cash: "2500000", demand: "4" },
{ name: "Planetary", size: "2.5m", type: "Rims", cash: "2000000", demand: "2" },
{ name: "Blue Eye", size: "2.5m", type: "Rims", cash: "2500000", demand: "2" },
{ name: "Star Badge", size: "2.5m", type: "Rims", cash: "2500000", demand: "1" },
{ name: "Distorted", size: "2m", type: "Rims", cash: "2000000", demand: "2" },
{ name: "Red Eye", size: "2m", type: "Rims", cash: "2000000", demand: "2" },
{ name: "Bull", size: "2m", type: "Rims", cash: "2000000", demand: "1" },
{ name: "Sakura", size: "1.25", type: "Rims", cash: "1250000", demand: "5" },
{ name: "Stance", size: "750k", type: "Rims", cash: "750000", demand: "5" },
{ name: "Radar", size: "750k", type: "Rims", cash: "750000", demand: "3" },
{ name: "Live2020", size: "500k", type: "Rims", cash: "500000", demand: "2" },
{ name: "Trion", size: "400k", type: "Rims", cash: "400000", demand: "2" },
{ name: "Roll-X", size: "400k", type: "Rims", cash: "400000", demand: "2" },
{ name: "Bonded", size: "400k", type: "Rims", cash: "400000", demand: "2" },
{ name: "Cloverleaf", size: "300k", type: "Rims", cash: "300000", demand: "2" },
{ name: "Wagon Wheel", size: "300k", type: "Rims", cash: "300000", demand: "2" },
{ name: "Frostburn", size: "300k", type: "Rims", cash: "300000", demand: "5" },
{ name: "B-Ball", size: "300k", type: "Rims", cash: "300000", demand: "2" },
{ name: "Rims Signal", size: "250k", type: "Rims", cash: "250000", demand: "3" },
{ name: "Piggy", size: "250k", type: "Rims", cash: "250000", demand: "1" },
{ name: "Sawblade", size: "200k", type: "Rims", cash: "200000", demand: "4" },
{ name: "Peppermint", size: "200k", type: "Rims", cash: "200000", demand: "3" },
{ name: "Teddy Bear", size: "200k", type: "Rims", cash: "200000", demand: "2" },
{ name: "Retro Racer", size: "200k", type: "Rims", cash: "200000", demand: "2" },
{ name: "Shipwheel", size: "200k", type: "Rims", cash: "200000", demand: "1" },
{ name: "Gunfire", size: "200k", type: "Rims", cash: "200000", demand: "1" },
{ name: "Tumbleweed", size: "200k", type: "Rims", cash: "200000", demand: "1" },
{ name: "Beachball", size: "100k", type: "Rims", cash: "100000", demand: "1" },
{ name: "Belgian Waffle", size: "100k", type: "Rims", cash: "100000", demand: "1" },
{ name: "Volleyball", size: "100k", type: "Rims", cash: "100000", demand: "1" },
{ name: "Marshmallow", size: "100k", type: "Rims", cash: "100000", demand: "1" },
{ name: "Dino", size: "100k", type: "Rims", cash: "100000", demand: "1" },
{ name: "Spyglass", size: "100k", type: "Rims", cash: "100000", demand: "1" },
{ name: "Daytona", size: "50k", type: "Rims", cash: "50000", demand: "1" },
{ name: "EXP-1", size: "50k", type: "Rims", cash: "50000", demand: "1" },

  // Tires
  {name: "Blue50", size: "5m", type: "Tires", cash: "5000000", demand: "3" },
  {name: "Red50", size: "2.5m", type: "Tires", cash: "2500000", demand: "2" },
  {name: "RedS3", size: "750k", type: "Tires", cash: "750000", demand: "2" },
  {name: "BlueS3", size: "1.25m", type: "Tires", cash: "1250000", demand: "2" },
  {name: "3B", size: "750k", type: "Tires", cash: "750000", demand: "2" },
  {name: "Army tires", size: "200k", type: "tires", cash: "200000", demand: "2"},
  {name: "Japanese tires", size: "200k", type: "tires", cash: "200000", demand: "2"},
  {name: "Champion tires", size: "100k", type: "tires", size: "100000", demand: "1"},
  {name: "Kangawa tires", size: "100k", type: "tires", size: "100000", demand: "1"},
  {name: "Buoy tires", size: "50k", type: "tires", cash: "50000", demand: "1"},

  // Colors
  { name: "Vanta Black", size: "14m max", type: "Colors", cash: "14000000", demand: "2" },
  { name: "Gold", size: "2.5m", type: "Colors", cash: "2500000", demand: "2" },
  { name: "Radiant Ice", size: "800k", type: "Colors", cash: "800000", demand: "6" },
  { name: "Radiant Orange", size: "500k", type: "Colors", cash: "500000", demand: "4" },
  { name: "Radiant Yellow", size: "250k", type: "Colors", cash: "250000", demand: "3" },
  { name: "Radiant Purple", size: "250k", type: "Colors", cash: "250000", demand: "3" },
  { name: "Radiant Green", size: "200k", type: "Colors", cash: "200000", demand: "3" },
  { name: "Radiant Red", size: "100k", type: "Colors", cash: "100000", demand: "2" },
  { name: "Darkest Purple", size: "100k", type: "Colors", cash: "100000", demand: "2" },
  { name: "Fall Chrome", size: "100k", type: "Color", cash: "100000", demand: "2" },
  { name: "Radiant Pink", size: "50k", type: "Colors", cash: "50000", demand: "2" },
  // Hyperchromes
  { name: "Hyper Lvl 5 Clean Blue ", size: "40m", type: "Hyperchromes", cash: "40000000", demand: "3" },
  { name: "Hyper Lvl 5 Clean Red ", size: "35m", type: "Hyperchromes", cash: "35000000", demand: "3" },
  { name: "Hyper Lvl 5 Clean Green ", size: "30", type: "Hyperchromes", cash: "30000000", demand: "3" },
  { name: "Hyper Lvl 5 Clean Diamond ", size: "30m ", type: "Hyperchromes", cash: "30000000", demand: "3" },
  { name: "Hyper Lvl 5 Clean Pink ", size: "60m", type: "Hyperchromes", cash: "30000000", demand: "3" },
  { name: "Hyper Lvl 5 Clean Purple ", size: "27.5m", type: "Hyperchromes", cash: "27500000", demand: "2" },
  { name: "Hyper Lvl 5 Clean Orange ", size: "25-30m", type: "Hyperchromes", cash: "30000000", demand: "2" },
  { name: "Hyper Lvl 5 Clean Yellow ", size: "20-25m", type: "Hyperchromes", cash: "25000000", demand: "1" },
{ name: "Hyper Lvl 4 Blue", size: "110m max", type: "Hyperchromes", cash: "110000000", demand: "5" },
  { name: "Hyper Lvl 4 Red", size: "100m max", type: "Hyperchromes", cash: "100000000", demand: "5" },
  { name: "Hyper Lvl 4 Green", size: "90m max", type: "Hyperchromes", cash: "90000000", demand: "5" },
  { name: "Hyper Lvl 4 Pink", size: "55m max", type: "Hyperchromes", cash: "55000000", demand: "4" },
  { name: "Hyper Lvl 4 Diamond", size: "55m max", type: "Hyperchromes", cash: "55000000" , demand: "4"},
  { name: "Hyper Lvl 4 Purple", size: "50m max", type: "Hyperchromes", cash: "50000000", demand: "3" },
  { name: "Hyper Lvl 4 Orange", size: "45m max", type: "Hyperchromes", cash: "45000000", demand: "3" },
  { name: "Hyper Lvl 4 Yellow", size: "25m max", type: "Hyperchromes", cash: "35000000", demand: "2" },
  { name: "Hyper Lvl 3 Blue", size: "35m max", type: "Hyperchromes", cash: "35000000", demand: "4" },
  { name: "Hyper Lvl 3 Red", size: "30m max", type: "Hyperchromes", cash: "30000000", demand: "3" },
  { name: "Hyper Lvl 3 Green", size: "30m max", type: "Hyperchromes", cash: "30000000", demand: "3" },
  { name: "Hyper Lvl 3 Pink", size: "15m max", type: "Hyperchromes", cash: "15000000", demand: "3" },
  { name: "Hyper Lvl 3 Purple", size: "12.5m", type: "Hyperchromes", cash: "12500000" , demand: "2" },
  { name: "Hyper Lvl 3 Orange", size: "10m", type: "Hyperchromes", cash: "10000000" , demand: "1" },
  { name: "Hyper Lvl 3 Yellow", size: "7.5m", type: "Hyperchromes", cash: "7500000" , demand: "1" },
  { name: "Hyper Lvl 3 Diamond", size: "15m max", type: "Hyperchromes", cash: "15000000" , demand: "3" },
  { name: "Hyper Lvl 2 Blue", size: "3.5m", type: "Hyperchromes", cash: "3500000", demand: "5" },
  { name: "Hyper Lvl 2 Red", size: "3m max", type: "Hyperchromes", cash: "3000000", demand: "3" },
  { name: "Hyper Lvl 2 Green", size: "3m max", type: "Hyperchromes", cash: "3000000", demand: "2" },
  { name: "Hyper Lvl 2 Pink", size: "2.5m max", type: "Hyperchromes", cash: "2500000", demand: "2" },
  { name: "Hyper Lvl 2 Diamond", size: "2.5m max", type: "Hyperchromes", cash: "2500000", demand: "2" },
  { name: "Hyper Lvl 2 Purple", size: "2m max", type: "Hyperchromes", cash: "2000000", demand: "2" },
  { name: "Hyper Lvl 2 Orange", size: "1.25m max", type: "Hyperchromes", cash: "1250000", demand: "1" },
  { name: "Hyper Lvl 2 Yellow", size: "1m max", type: "Hyperchromes", cash: "1000000", demand: "1" },
];
// chosing side to add to
function chooseYourSide(index) { // chossing ur side
      showItemList(index, 'yourSide');
    }
function chooseOppositeSide(index) { // choosing the oposite side as this is calculator
  showItemList(index, 'oppositeSide');
}

function showItemList(index, side) { // shows the items for the chosen side
      var cont = document.getElementById("cont"); // gets the container div
      cont.style.display = "none"; // hides the main container
      let addeleList1 = document.getElementById('addeleList1'); // gets the list element
      addeleList1.innerHTML = ''; // clears the list so it doesn't stack
      addeleList1.style.color = "white"; // sets text color to white

      let itemList = document.createElement('div'); // makes a div for all items
      itemList.className = 'addeleList1'; // gives it the class for styling

      items.forEach(function (item, i) { // loops through every item
        let listItem = document.createElement('div'); // makes a div for each item
        listItem.className = "itemsot"; // class for styling
        listItem.textContent = item.name + " JBCash: " + item.size; // shows item name and cash
        listItem.style.marginTop = "20px"; // spacing
        listItem.style.height = visina; // sets height
        listItem.style.width = visina; // sets width

var imgElement = document.createElement("img"); // image for the item
switch (item.type) { // checks what type the item is
  case "vehicle": // if it's a vehicle
    imgElement.src = item.name + ".png"; // uses the name as image
    break;
  case "Textures": // if it's a texture
    switch (item.name) { // checks for special textures
      case "ClassicVAR1":
    imgElement.src = "Empty-slot.png";
    break;
    case "ClassicVAR3":
    imgElement.src = "Empty-slot.png";
    break;
    case "Peach":
    imgElement.src = "Empty-slot.png";
    break;
    case "Bandana":
    imgElement.src = "Empty-slot.png";
    break;
    case "Carbon-Fire":
    imgElement.src = "Empty-slot.png";
    break;
    case "Aurora":
    imgElement.src = "Empty-slot.png";
    break;
    case "Ladybug":
    imgElement.src = "Empty-slot.png";
    break;
    case "Berlin-graffiti":
    imgElement.src = "Empty-slot.png";
    break;
    case "Road-Warrior":
    imgElement.src = "Empty-slot.png";
    break;
    default:
    imgElement.src = item.name + ".png"; // if not listed, use normal image
    }
    break;
  default:
    imgElement.src = "Empty-slot.png"; // default image if type unknown
}

imgElement.style.width = "auto"; // auto width for image
imgElement.style.height = "50%"; // half the height
imgElement.style.maxWidth = "100%"; // keeps it inside the div
imgElement.style.borderRadius = "3% 3% 7% 3%"; // rounded corners
        listItem.appendChild(imgElement); // adds image into the div
        listItem.style.backgroundColor = " rgba(126, 219, 207, 0.322)"; // nice background
        listItem.style.textAlign = "center"; // centers text
        listItem.style.flexDirection = "column"; // stacks stuff vertically
        listItem.style.alignItems = "center"; // centers items horizontally
        listItem.style.cursor = "pointer"; // makes it clickable
        listItem.style.display = "flex"; // flexbox layout
        listItem.style.justifyContent = "center"; // centers vertically
        listItem.style.marginRight = "5px"; // space right
        listItem.style.marginLeft = "5px"; // space left
        listItem.style.color = "white"; // white text
        listItem.style.borderRadius = "3%"; // rounded corners

        listItem.onclick = function () { // what happens when u click an item
          replace(index, side, item); // replaces the slot with the chosen item
          updateCash(side, parseInt(item.cash)); // updates cash based on side
          hideItemList(); // hides the list after choosing
        };

        itemList.appendChild(listItem); // adds item to the list
      });

      addeleList1.appendChild(itemList); // puts the list inside the container
      addeleList1.style.display = 'block'; // shows it
    }

    function hideItemList() { // hides the item list
      let addeleList1 = document.getElementById('addeleList1');
      addeleList1.style.display = 'none';
      vallist.textContent = "Value List"; // resets the text
    }
    
    function removeCashYourSide(cash) { // removes cash from your side
      yoursidecash -= cash;
      updateCash('yourSide', 0); // updates with 0 to refresh ui
    }

    function removeCashOppositeSide(cash) { // removes cash from other side
      oppositesidecash -= cash;
      updateCash('oppositeSide', 0);
    }
    function replace(index, side, selectedItem) { // replaces an empty slot with item
      let addele = document.getElementById(side + index); // finds the slot
      addele.style.display = "none"; // hides old slot

      let replacement = document.createElement("div"); // makes new one
      replacement.className = "addelediv";
      replacement.id = side + index;
      if (side === 'yourSide') { // checks which side it’s on
        replacement.onclick = function () {
          chooseYourSide(index);
          removeCashYourSide(selectedItem.cash);
        };
      } else {
        replacement.onclick = function () {
          chooseOppositeSide(index);
          removeCashOppositeSide(selectedItem.cash);
        };
      }

      replacement.style.width = "11%";
      replacement.style.height = "75%";
      replacement.style.margin = "0.7%";
      replacement.style.cursor = "pointer";
      replacement.style.backgroundColor = "rgba(173, 167, 159, 0.322)";
      replacement.style.display = "flex";
      replacement.style.flexDirection = "column";
      replacement.style.justifyContent = "center";
      replacement.style.alignItems = "center";
      replacement.style.borderRadius = "3%";

      let replacementItem = document.createElement("h6"); // item name
      replacementItem.textContent = selectedItem.name;
      replacementItem.style.color = "white";
      replacementItem.style.textAlign = "center";
      replacementItem.style.overflow = "hidden";
      replacementItem.style.textOverflow = "ellipsis";
      replacementItem.style.whiteSpace = "nowrap";
      replacementItem.className = "replace"

      let replacementSize = document.createElement("h6"); // shows cash size
      replacementSize.textContent = " JBCash: " + selectedItem.size;
      replacementSize.style.color = "white";
      replacementSize.style.textAlign = "center";
      replacementSize.style.overflow = "hidden";
      replacementSize.style.textOverflow = "ellipsis";
      replacementSize.style.whiteSpace = "nowrap";
      replacementSize.className = "replaces"

      let replacementDemand = document.createElement("h6"); // shows demand
      replacementDemand.textContent = "Demand: " + selectedItem.demand + "/10";
      replacementDemand.style.color = "white";
      replacementDemand.style.textAlign = "center";
      replacementDemand.style.overflow = "hidden";
      replacementDemand.style.textOverflow = "ellipsis";
      replacementDemand.style.whiteSpace = "nowrap";
      replacementDemand.className = "replaced"

      replacement.appendChild(replacementItem); // adds the texts to div
      replacement.appendChild(replacementSize);
      replacement.appendChild(replacementDemand);

      let holdside = document.querySelector("." + side); // finds parent div
      holdside.replaceChild(replacement, addele); // swaps the old with new
    }
    function explain(){ // redirects to explain page
  window.location.href = 'https://jbcalculator.vercel.app/explain.html';
}
    function updateCash(side, cash) { // updates the cash display
      if (side === 'yourSide') { // checks which side
        yoursidecash += cash;
        console.log('Your Side Cash: ', yoursidecash);
        let yourcash = document.getElementById("yoursidecash");
        yourcash.textContent = "Your side - JBCash:" + yoursidecash;
        calculate(); // recalculates trade value
        
      } else {
        oppositesidecash += cash;
        console.log('Opposite Side Cash: ', oppositesidecash);
        let oppocash = document.getElementById("oppocash");
        oppocash.textContent = "Opposite side - JBCash:" + oppositesidecash;
        calculate(); // recalculates too
      }
    }

    function calculate() { // figures out trade result
  var callculate = document.getElementById("callculate");
  var callculatetext = document.getElementById("callculatetext");
  var trdprofit = oppositesidecash - yoursidecash; // profit difference
  
  callculate.textContent = trdprofit;
  if (yoursidecash < 4500000 && yoursidecash > 0) { // small trades
if (trdprofit < 500000) {
      var result = "W";
    } else if (trdprofit< 2000000) {
      var result = "big W";
    } else if (trdprofit< 1) {
      var result = "f";
    } else if (trdprofit< -500000) {
      var result = "small l";
    } else if (trdprofit< -1000000) {
      var result = "L";
    } else {
      var result = "HUGE W prob but check bouth side cash";
    } 
  }else if(yoursidecash >  10000000) { // bigger trades
    if (trdprofit< 1000000) {
      var result = "F";
    } else if (trdprofit< 3000000) {
      var result = "small W";
    } else if (trdprofit< 10000000) {
      var result = "W";
    } else if (trdprofit< -2500000) {
      var result = "F";
    } else if (trdprofit< -10000000) {
      var result = "small l to L"; 
    } else {
      var result = "w ig";
    }
  } else if (yoursidecash > 150000000) { // huge trades
    if (trdprofit< 3000000) {
      var result = "F or going to small w";
    } else if (trdprofit< 10000000) {
      var result = "W to big W";
    } else if (trdprofit> 10000000) {
      var result = "HUGE W";
    } else if (trdprofit< 2) {
      var result = "F";
    } else if (trdprofit< 6000000) {
      var result = "small L to L";
    } else {
      var result = "just L not recommended to trade unless you want to trade";
    }
  } else if (yoursidecash > 250000000) { // extreme trades
    if (trdprofit< 3000000) {
      var result = "F to W";
    } else if (trdprofit< 10000000) {
      var result = "W to big W";
    } else if (trdprofit> 10040020) {
      var result = "HUGE W";
    }
  } else if (yoursidecash < 2) { // if ur side empty
    var result = "F";
  } else {
    var result = "w ig(but check bouth sides cash and demand)";
  }
  callculate.textContent = result; // shows result
  var calculatetxt = document.getElementById("callculatetext");
  calculatetxt.textContent =  trdprofit; // shows profit value
    }
var valnum = 1; // just a counter or value variable, maybe used later


//changes modes of websie to dark or white, yes this is really what it took only one color change and the whole wewbsite goes diff color
function whitemode() {
  document.body.style.backgroundColor = " #00ffea";
}

function darkmode() {
  document.body.style.backgroundColor = "#080024";
}
//changes modes of the website
function changemode(){
  change = document.getElementById("change")
  if (change.innerHTML == "Dark mode") {
    whitemode()
    change.innerHTML = "White Mode"
  } else {
    darkmode()
    change.innerHTML = "Dark mode"
  }
}
// this section is generaly to go to other pages of the website
var button = document.getElementById('vallist');
function homepage() {
            window.location.href = 'https://jbcalculator.vercel.app/';
        }
// Add a click event listener to the button
function valuepage(){
    // Redirect to another page when the button is clicked
    window.location.href = 'https://jbcalculator.vercel.app/valuelist.html';
}
function dupepage(){
  window.location.href = 'https://jbcalculator.vercel.app/dupelist.html ';
}
