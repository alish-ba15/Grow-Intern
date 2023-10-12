let movies = [
    {
        name: "LOKI",
        des:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo eveniet velit repellat tempora totam quisquam voluptatum voluptates accusamus, pariatu",
        image: "https://github.com/Pranav-8bit/hotstar/blob/main/images/slider%201.PNG?raw=true"
    },
    {
        name: "Falcon And The Winter Soldier",
        des:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ipsam tempore, expedita laboriosam, ",
        image: "https://github.com/Pranav-8bit/hotstar/blob/main/images/slider%202.PNG?raw=true"
    },
    {
        name: "Wanda Vision",
        des:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo eveniet velit repellat tempora totam quisquam voluptatum voluptates accusamus, pariatu",
        image: "https://raw.githubusercontent.com/Pranav-8bit/hotstar/main/images/slider%203.PNG"
    },
    {
        name: "Raya And The Last Dragon",
        des:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ipsam tempore, expedita laboriosam, ",
        image: "https://github.com/Pranav-8bit/hotstar/blob/main/images/slider%204.PNG?raw=true"
    },
    {
        name: "luca",
        des:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo eveniet velit repellat tempora totam quisquam voluptatum voluptates accusamus, pariatu",
        image: "https://github.com/Pranav-8bit/hotstar/blob/main/images/slider%205.PNG?raw=true"
    }
];

let carousel= document.querySelector('.caraousel');
let sliders = [];

let slideIndex=0;
const createSlide = () => {

    if (slideIndex >= movies.length){
        slideIndex=0;
    }

    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);


    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    slide.className= 'slider';
    content.className= 'slide-content';
    h1.className= 'movie';
    p.className= 'movie-des';

    sliders.push(slide)

    if(sliders.length)
    {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}%
        - ${30 * (sliders.length - 2)
        }px)`;
    }
}

for(let i=0 ; i<3 ; i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
}, 3000);


// Vedio Card
const videoCards = [...document.querySelectorAll('.vedio-card')];

videoCards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    });
});

//cards slides

let cardContainers = document.querySelectorAll('.card-container');
let preBtn = document.querySelectorAll('.pre-btn');
let nxtBtn = document.querySelectorAll('.next-btn');
let cardWidth = cardContainers[0].querySelector('.card').clientWidth;
let visibleCards = 8; 
let currentCardIndex = 0;

cardContainers.forEach((item, i) => {
  let totalCards = item.querySelectorAll('.card').length;

  preBtn[i].addEventListener('click', () => {
    if (currentCardIndex > 0) {
      currentCardIndex -= 4; 
      showHideCards(item, currentCardIndex);
    }
  });

  nxtBtn[i].addEventListener('click', () => {
    if (currentCardIndex < totalCards - visibleCards) {
      currentCardIndex += 4; 
      showHideCards(item, currentCardIndex);
    }
  });

  showHideCards(item, currentCardIndex);
});

function showHideCards(container, startIndex) {
  let cards = container.querySelectorAll('.card');
  cards.forEach((card, index) => {
    if (index >= startIndex && index < startIndex + visibleCards) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}





