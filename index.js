const solarSystem = document.getElementById("solarSystem")
const planets = [
    {
        "name": "Mercury",
        "diameter": 4879,
        "color": "grey"
    },
    {
        "name": "Venus",
        "diameter": 12104,
        "color": "yellow"
    },
    {
        "name": "Earth",
        "diameter": 12742,
        "color": "green"
    },
    {
        "name": "Mars",
        "diameter": 6779,
        "color": "pink"
    },
    {
        "name": "Jupiter",
        "diameter": 139822,
        "color": "yellow"
    },
    {
        "name": "Saturn",
        "diameter": 116464,
        "color": "orange"
    },
    {
        "name": "Uranus",
        "diameter": 50724,
        "color": "grey"
    },
    {
        "name": "Neptune",
        "diameter": 49244,
        "color": "blue"
    }
]

// Task:
// Write a function to render 
// the planets from the planets array using JavaScript.

function renderSS() {
    planets.forEach(planet => {
        const planetElem = document.createElement("div")
        const planetDiam = planet.diameter
        planetElem.classList.add = 'planet'
        planetElem.style.padding = `${planetDiam * 0.001}px`
        // - Stretch goal #2. Make one side of the planets dark (you can do this with one CSS property!)
        planetElem.style.backgroundImage = `linear-gradient(
            to left, 
            #000 0%, 
            #000 50%, 
            var(--${planet.color}) 50%, 
            var(--${planet.color}) 100%`
        planetElem.style.borderRadius = '50%'
        solarSystem.appendChild(planetElem)
    })
}

renderSS()

