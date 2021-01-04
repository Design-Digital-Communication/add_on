const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated_bgs')
const animated_bgs_texts = document.querySelectorAll('.animated_bgs_text')

setTimeout(getData, 2000)

function getData() {
    header.innerHTML = 
        '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    profile_img.innerHTML = 
    '<img src="https://img.theculturetrip.com/1440x/wp-content/uploads/2018/02/732px-gustave_courbet_-_le_dsespr.jpg" alt="">'
    name.innerHTML = 'coloriyo'
    date.innerHTML = 'Jan 02, 2021'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}