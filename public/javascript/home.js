console.log('home.js')

const searchBtn = document.getElementById('search-btn')
searchBtn.addEventListener('click', (e) => {

    e.preventDefault()
    // console.log(e)
})

const cards = document.querySelectorAll('.card')
cards.forEach(card => {
    card.addEventListener('click', () => {

        const newsId = card.getAttribute('id') 
        console.log(newsId)

        window.open(`http://localhost:3000/news/by-id/${newsId}`, '_blank')
    })
});