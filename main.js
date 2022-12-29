//--
const section = document.querySelector('section');
const playerlivescount = document.querySelector("span");
let playerlives = 5;

//--
playerlivescount.textContent = playerlives;

//--
const getdata = () => [
    { imgSrc: "./images/Front1.png", name: "Front1" },
    { imgSrc: "./images/Front2.png", name: "Front2" },
    { imgSrc: './images/Front3.png', name: 'Front3' },
    { imgSrc: './images/Front4.png', name: 'Front4' },
    { imgSrc: './images/Front5.png', name: 'Front5' },
    { imgSrc: './images/Front6.png', name: 'Front6' },
    { imgSrc: './images/Front1.png', name: 'Front1' },
    { imgSrc: './images/Front2.png', name: 'Front2' },
    { imgSrc: './images/Front3.png', name: 'Front3' },
    { imgSrc: './images/Front4.png', name: 'Front4' },
    { imgSrc: './images/Front5.png', name: 'Front5' },
    { imgSrc: './images/Front6.png', name: 'Front6' },
];

//--
const randomize = () => {
    const carddata = getdata();
    carddata.sort(() => Math.random() - 0.5);
    return carddata;
};

//--
const cardgenerator = () => {
    const carddata = randomize();
    //--
    carddata.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        //--
        face.src = item.imgSrc;
        card.setAttribute('name', item.name);
        //    back.scr = './images/Back.png'
        //--
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle("togglecard");
            checkcards(e);
        })
    })
}

//--
const checkcards = (e) => {
    const clickedcard = e.target;
    clickedcard.classList.add("flipped");
    const flippedcards = document.querySelectorAll(".flipped");
    //--LOGIC
    if (flippedcards.length === 2) {
        if (
            flippedcards[0].getAttribute("name") ===
            flippedcards[1].getAttribute("name")
        ) {
            console.log("match")
            flippedcards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            })
        } else {
            console.log("wrong")
            flippedcards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("togglecard"), 1000);
            });
            playerlives--;
            playerlivescount.textContent = playerlives;
            if (playerlives === 0) {
                window.alert('يا خي بـــوت!!');
                location.reload();
            }
        }

    }
    //--

};

cardgenerator();