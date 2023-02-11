// Custom Scripts
// Custom scripts


// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)


let swiper = new Swiper(".popular__slider", {
  slidesPerView: 1,
  spaceBetween: 2,
  navigation: {
    nextEl: ".popular__slider-next",
    prevEl: ".popular__slider-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 2,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 2,
    },
  },
});

function market() {
  const container = document.querySelector('.market')

  if (!container) {
    return null
  }

  const marketBuy = document.querySelector('.market__buy')
  const marketSell = document.querySelector('.market__sell')
  const marketList = document.querySelector('.market__list')

  const selectBuy = document.querySelector('.select-buy')
  const selectSell = document.querySelector('.select-sell')

  selectBuy.addEventListener('click', () => {
    selectBuy.classList.add('active')
    selectSell.classList.remove('active')
    marketBuy.style.display = "flex";
    marketSell.style.display = "none";
    marketList.style.display = "none";
  })

  selectSell.addEventListener('click', () => {
    selectSell.classList.add('active')
    selectBuy.classList.remove('active')
    marketBuy.style.display = "none";
    marketSell.style.display = "block";
    marketList.style.display = "flex";
  })
}

market()

// function for free skins

function randomBlocks() {

  const sectionContainer = document.querySelector('.skin-free')

  if (!sectionContainer) {
    return null
  }

  let skins = [
    {
      rang: "blue",
      name: "AK-47 | Phantom Disruptor (FT)",
      price: "$ 7.90",
      img: '1'
    },

    {
      rang: "blue-2",
      name: "AK-47 | Phantom Disruptor (FT)",
      price: "$ 7.90",
      img: '2'
    },

    {
      rang: "fiol",
      name: "AK-47 | Redline (FT)",
      price: "$ 12.86",
      img: '3'
    },

    {
      rang: "fiol",
      name: "AK-47 | Point Disarray (MW)",
      price: "$ 13.57",
      img: '4'
    },

    {
      rang: "fiol",
      name: "AK-47 | Frontside Misty (FT)",
      price: "$ 14$",
      img: '5'
    },

    {
      rang: "orange-2",
      name: "AK-47 | Nightwish (MW)",
      price: "$ 52.63",
      img: '6'
    },

    {
      rang: "orange-2",
      name: "AK-47 | Neon Rider (MW)",
      price: "$ 59.66",
      img: '7'
    },

    {
      rang: "orange-2",
      name: "AK-47 | Aquamarine Revenge (FN)",
      price: "$ 81.58",
      img: '8'
    },

    {
      rang: "fiol",
      name: "AUG | Bengal Tiger (MW)",
      price: "$ 7.36",
      img: '9'
    },

    {
      rang: "fiol",
      name: "AWP | Atheris (FN)",
      price: "$ 11.90",
      img: '10'
    },

    {
      rang: "orange",
      name: "AWP | Chromatic Aberration (FN)",
      price: "$ 65.26",
      img: '11'
    },

    {
      rang: "orange",
      name: "AWP | Hyper Beast (FN)",
      price: "$ 76.49",
      img: '12'
    },

    {
      rang: "orange",
      name: "AWP | Asiimov (WW)",
      price: "$ 84.21",
      img: '13'
    },

    {
      rang: "orange-2",
      name: "★ Bloodhound Gloves | Bronzed (FT)",
      price: "$ 82.46",
      img: '14'
    },

    {
      rang: "blue",
      name: "CZ75-Auto | Xiangliu (FN)",
      price: "$ 8.90",
      img: '15'
    },

    {
      rang: "fiol",
      name: "Desert Eagle | Kumicho Dragon (FT)",
      price: "$ 14.23",
      img: '16'
    },

    {
      rang: "orange-2",
      name: "★ Driver Gloves | Racing Green (MW)",
      price: "$ 80.49",
      img: '17'
    },

    {
      rang: "orange-2",
      name: "Dual Berettas | Melondrama (FN)",
      price: "$ 24.99",
      img: '18'
    },

    {
      rang: "blue",
      name: "StatTrak™ FAMAS | Pulse (FT)",
      price: "$ 6.49",
      img: '19'
    },

    {
      rang: "blue",
      name: "Five-SeveN | Monkey Business (MW)",
      price: "$ 10.99",
      img: '20'
    },

    {
      rang: "fiol",
      name: "Five-SeveN | Angry Mob (FN)",
      price: "$ 12.42",
      img: '21'
    },

    {
      rang: "fiol",
      name: "G3SG1 | Flux (FN)",
      price: "$ 20.10",
      img: '22'
    },

    {
      rang: "blue",
      name: "Galil AR | Rocket Pop (FT)",
      price: "$ 9.10",
      img: '23'
    },

    {
      rang: "orange",
      name: "Glock-18 | Neo-Noir (FN)",
      price: "$ 8.90",
      img: '24'
    },

    {
      rang: "blue",
      name: "StatTrak™ Glock-18 | Water Elemental (BS)",
      price: "$ 9.22",
      img: '25'
    },

    {
      rang: "fiol",
      name: "Glock-18 | Vogue (FN)",
      price: "$ 11.08",
      img: '26'
    },

    {
      rang: "orange",
      name: "Glock-18 | Neo-Noir (FT)",
      price: "$ 14.66",
      img: '27'
    },

    {
      rang: "orange",
      name: "StatTrak™ Glock-18 | Wasteland Rebel (FN)",
      price: "$ 57.46",
      img: '28'
    },

    {
      rang: "orange-2",
      name: "★ StatTrak™ Huntsman Knife | Ultraviolet (FT)",
      price: "$ 99.46",
      img: '29'
    },

    {
      rang: "fiol",
      name: "M4A1-S | Leaded Glass (FT)",
      price: "$ 7.27",
      img: '30'
    },

    {
      rang: "fiol",
      name: "M4A1-S | Nightmare(FT)",
      price: "$ 8.37",
      img: '31'
    },

    {
      rang: "fiol",
      name: "M4A1-S | Player Two (BS)",
      price: "$ 22.35",
      img: '32'
    },

    {
      rang: "orange",
      name: "M4A1-S | Hyper Beast (WW)",
      price: "$ 54.17",
      img: '33'
    },

    {
      rang: "blue",
      name: "M4A4 | Desolate Space (FT)",
      price: "$ 7.95",
      img: '34'
    },

    {
      rang: "orange-2",
      name: "M4A4 | The Emperor (MW)",
      price: "$ 69.49",
      img: '35'
    },

    {
      rang: "blue",
      name: "StatTrak™ MAC-10 | Disco Tech (FT)",
      price: "$ 5.96",
      img: '36'
    },

    {
      rang: "orange-2",
      name: "MAC-10 | Stalker (FT)",
      price: "$ 39.8",
      img: '37'
    },

    {
      rang: "orange-2",
      name: "★ Moto Gloves | Turtle (BS)",
      price: "$ 88.50",
      img: '38'
    },

    {
      rang: "blue",
      name: "Sawed-Off | Kiss♥Love (FT)",
      price: "9.10$",
      img: '39'
    },

    {
      rang: "blue",
      name: "MP7 | Nemesis (FT)",
      price: "$ 9.08",
      img: '40'
    },

    {
      rang: "blue",
      name: "StatTrak™ P90 | Desert Warfare (FN)",
      price: "$ 9.67",
      img: '41'
    },

    {
      rang: "blue",
      name: "P90 | Trigon (FT)",
      price: "$ 8.88",
      img: '42'
    },

    {
      rang: "blue",
      name: "P2000 | Fire Elemental (FT)",
      price: "$ 7.34",
      img: '43'
    },

    {
      rang: "blue",
      name: "PP-Bizon | Judgement of Anubis (FT)",
      price: "$ 6.55",
      img: '44'
    },

    {
      rang: "blue",
      name: "R8 Revolver | Fade (MW)",
      price: "$ 7.25",
      img: '45'
    },

    {
      rang: "blue",
      name: "MP5-SD | Phosphor (FN)",
      price: "$ 8.50",
      img: '46'
    },

    {
      rang: "blue",
      name: "Scar-20",
      price: "5.18$",
      img: '47'
    },

    {
      rang: "fiol",
      name: "USP-S",
      price: "9.99$",
      img: '48'
    },

    {
      rang: "orange",
      name: "USP-S",
      price: "29.99$",
      img: '49'
    },
  ]

  const skinsContainer = document.querySelector('.skin-free__list')

  function getBlock(skin) {

    skinBlock =
      ` 
      <li class="skin-free__item ${skin.rang}">
        <img class="skin-free__item-img" src="./img/free-skins/${skin.img}.png" alt="${skin.img}">

        <div class="skin-free__item-info">
          <h3 class="skin-free__item-name">
              ${skin.name}
          </h3>

          <p class="skin-free__item-price">
              ${skin.price}
          </p>
        </div>
      </li>
    `

    skinsContainer.insertAdjacentHTML(`afterBegin`, skinBlock)

  }

  let counter = 0

  for (let i = 0; i <= 15; i++) {
    getBlock(skins[i])
    counter = i
  }

  setInterval(() => {

    if (skins.length !== counter) {
      getBlock(skins[counter])
      counter++
    } else {
      counter = 0
    }

  }, 2000);

}

randomBlocks()

// вызов модалки

const modal = new GraphModal();



// let link = '';

// document.addEventListener('click', function (e) {
//   if (e.target.classList.contains('goAuth') || e.path[2].classList.contains('goAuth') || e.path[1].classList.contains('goAuth') || e.path[3].classList.contains('goAuth')) {
//     let wind = window.open("", "", "STATUS=NO, TOOLBAR=NO, LOCATION=0, DIRECTORIES=0, RESISABLE=NO, SCROLLBARS=YES, TOP=50, LEFT=50, WIDTH=1004, HEIGHT=800"); wind.document.write(`<html style='overflow:hidden;'><head><title>Steam Community</title><style>html, body {width:1004px; height:800px; margin:0px; padding:0px;}</style></head><body><iframe src='${link}' border='0' style='width:100vw; height:100vh; border: none;'></iframe></body></html>`);
//     wind.addEventListener('beforeunload', (event) => {
//       window.location.reload();
//     });
//     return false;
//   }
// });

