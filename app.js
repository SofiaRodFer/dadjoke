const jokeSpan = document.querySelector('.joke')
const button = document.querySelector('.generate')
const clearText = ''

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke
    } catch (e) {
        return 'No jokes available!'
    }
}

const clearJoke = function () {
    jokeSpan.innerHTML = clearText
}

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    jokeSpan.append(jokeText)
}

button.addEventListener('click', clearJoke)
button.addEventListener('click', addNewJoke)

