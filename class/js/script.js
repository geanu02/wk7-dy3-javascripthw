const button = document.createElement('button')

button.id = 'dark-mode'

const body = document.getElementsByTagName('body')[0]

body.appendChild(button)

button.innerText = "Dark Mode"

button.addEventListener('click', () => {
    if (button.innerText === 'Light Mode') {
        lightMode()
    } else {
        darkMode()
    }
})

function darkMode() {
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
    button.innerText = 'Light Mode'
}

function lightMode() {
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
    button.innerText = 'Dark Mode'
}

// const subHeading = document.getElementById("sub-heading")

// subHeading.innerText = "Sean"

// if (subHeading.innerText === "Sean") {
//     document.getElementsByClassName('main-heading').innerText = "Matrix Dom Manipulations"
// }

// const studentArray1 = ['Todd', 'Ray', 'Christopher', 'Khoa', 'John', 'Karina']
// const studentArray2 = ['Ben', 'Gian', 'Vinh', 'David', 'MD', 'Alec']

// const studentContainer = document.getElementById('student-container')

const titleCase = astring => astring[0].toUpperCase() + astring.substring(1)

// for (let [i, student] of studentArray1.entries()) {
//     let li = document.createElement('li')
//     li.id = i + 1
//     li.innerText = titleCase(student)
//     studentContainer.append(li)
// }

// for (let [i, student] of studentArray2.entries()) {
//     studentContainer.innerHTML +=
//      `<li id='${i+studentArray1.length+1}'>${titleCase(student)}</li>`
// }

const pokemonApi = document.querySelector('#pokemon-api')

pokemonApi.addEventListener('submit', async (event) => {
    event.preventDefault()
    const pokeName = getPokeName()
    const data = await pokeApiCall(pokeName)
    handlePokeData(data)
})

function getPokeName() {
    const pokeName = document.querySelector('#pokemon_id').value
    return pokeName
}

async function pokeApiCall(pokemon) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (res.ok) {
        const data = await res.json()
        return data
    }
}

function handlePokeData({ name, sprites: { versions } }) {
    const div = document.createElement('div')
    const p = document.createElement('p')
    const img = document.createElement('img')
    div.id = `card-${name}`
    p.innerHTML = `${titleCase(name)}`
    img.src = versions['generation-v']['black-white'].animated.front_shiny
    div.append(p, img)
    document.getElementById('aside').appendChild(div)

    div.addEventListener('click', () => div.remove())
}