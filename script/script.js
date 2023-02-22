//scroll to section
//scroll to section from accent button
//menu-bar
//tab trucks
//trucks imgs
//feedback - сборка раздела
//form "order a callback"



// scroll to section
const navArr = document.querySelectorAll("nav li");
const sectionArr = document.querySelectorAll(".scrollToSection");

navArr.forEach((elem, index) => { 
    elem.addEventListener("click", () => {
        sectionArr[index].scrollIntoView({behavior: "smooth"});
    })
});
//scroll to section from accent button
const accentBtn = document.querySelectorAll(".accentButton, .headerMainTitle button");
const toOrder = document.querySelector(".order");
accentBtn.forEach(elem => {
    elem.addEventListener("click", () => toOrder.scrollIntoView({behavior: "smooth"}))
})


//menu-bar
const menuBtn = document.querySelector(".menuBtn");
const menuElem = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    menuElem.classList.toggle("menuOn");
});

const menuItems = [...document.querySelectorAll("nav ul li")];
menuItems.forEach(item => item.addEventListener("click", () => {
    menuElem.classList.remove("menuOn")
})
);

window.addEventListener("resize", e => {
    if (document.documentElement.clientWidth > 992) {
        menuElem.classList.remove("menuOn");

    }
});
//tab trucks
const btnSet = document.querySelector(".buttonSet");
const trucksArr = document.querySelectorAll(".truck");

btnSet.addEventListener("click", (event) => {
    let activeBtn = event.target;
    
    let activeBtnIndex = [...activeBtn.parentNode.children].indexOf(activeBtn);
        
        trucksArr.forEach((truck) => {
            truck.classList.remove("truckInfo");
            truck.classList.add("invisible");
        });

        trucksArr.item(activeBtnIndex).classList.add("truckInfo");
})

//trucks img

const truckImgArr = ["gazel.png", "largus.png", "scania.png"];
const truckImgElems = document.querySelectorAll(".truckImg");
const mediaPath = "media/"

truckImgArr.map((img, index) => {
    truckImgElems.forEach(truck => {
        if(index === [...truckImgElems].indexOf(truck)) {
            truck.style.backgroundImage = `url("${mediaPath + img}")`
        }
    })
})


//feedback - сборка раздела

const feedbackArr = [
    {
        name: "Ирина",
        date: "24.03.2019",
        stars: 5,
        message: "Обращение к вам за помощью в переезде оставило только положительные впечатления. Хотелось отметить замечательного водителя газели Алексея. Были трудности с заездом во двор, он проявил себя как компетентный и профессиональный сотрудник, за что ему огромное..."
    },
    {
        name: "Светлана Васильевна",
        date: "13.09.2019",
        stars: 5,
        message: "Сегодня ( 13.09.2019 ) мы переехали. Остались очень довольны, несмотря на то, что к нам опоздали на 1,5 часа. Морально были к этому готовы ( в прошлый переезд в другой фирме тоже опоздали на час).  Водитель заранее позвонил, предупредил, что задерживается. Когда..."
    },
    {
        name: "Ольга Петрова",
        date: "11.11.2019",
        stars: 5,
        message: "Могу на 100% порекомендовать компанию MOVEE и отметить, что цены фиксированы, что упрощает расчет. Безо всяких заморочек, в отличии от их конкурентов. Упаковали все качественно и быстро. Все вещи приехали в сохранности. Особлая благодарность Александру за его..."
    },
]

const feedbackSet = document.querySelector(".feedbackSet");

feedbackSet.append(...feedbackArr.map((item) => {
    const feedbackItem = document.createElement("div");
    feedbackItem.classList.add("feedbackItem");
    feedbackItem.classList.add("swiper-slide");

    const itemTitle = document.createElement("p");
    itemTitle.classList.add("itemTitle");
    itemTitle.innerText = item.name;

    const itemDate = document.createElement("p");
    itemDate.classList.add("itemInfo");
    itemDate.innerText = item.date;

    const spanStar = document.createElement("span");
    for(let i=1; i<=item.stars; i++) {
            spanStar.innerHTML +='<i class="fa-solid fa-star"></i>'
        }
    const itemMessage = document.createElement("p");
    itemMessage.classList.add("itemInfo");
    itemMessage.innerText = item.message;

    const readMore = document.createElement("a");
    readMore.classList.add("itemInfo");
    readMore.innerText = "Читать полностью";

    itemDate.appendChild(spanStar);
    feedbackItem.append(itemTitle, itemDate, itemMessage, readMore);

    return feedbackItem;
})
)

//form "order a callback"
const orderForm = document.querySelector("#callOrder");

orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target.yourname.value;
    const phone = e.target.yournumber.value;
    const order = {
        name,
        phone
    }
    console.log(order);
})

