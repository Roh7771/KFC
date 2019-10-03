console.log('worked')

const darkBurger = {
    id: 2997,
    name: 'Темный бургер',
    imgUrl: 'https://s82079.cdn.ngenix.net/wt6NakAsk2z1FvJCdijr6XBk.png?dw=230',
    price: 179,
    weight: 255,
    description: 'Бургер с нежнейшим мясом бедра цыпленка, с соусом барбекю, свежими овощами, сыром чеддер и эмменталер, луком, маринованными огурчиками и халапеньо на ароматной ржаной булочке.',
    energy: 233,
    protein: 11.4,
    fats: 11.3,
    carbohydrates: 21.3 
}

const longer = {
    id: 1018,
    name: 'Лонгер BBQ',
    imgUrl: 'https://s82079.cdn.ngenix.net/sRrSzWpf86c4hMMwCJ7aHBph.png?dw=230',
    price: 50,
    weight: 107,
    description: 'Сочная курочка, маринованные огурчики, лук и аппетитный соус барбекю! Спешите попробовать!',
    energy: 236,
    protein: 9.7,
    fats: 7.1,
    carbohydrates: 33.3 
}

const darkBurgerImgEl = document.getElementById('product-img-1');
darkBurgerImgEl.src = darkBurger.imgUrl;
const longerImgEl = document.getElementById('product-img-2');
longerImgEl.src = longer.imgUrl;

const darkBurgerPriceEl = document.getElementById('product-price-1');
darkBurgerPriceEl.innerHTML = `${darkBurger.price}&#8381;`;
const longerPriceEl = document.getElementById('product-price-2');
longerPriceEl.innerHTML = `${longer.price}&#8381;`;

const darkBurgerNameEl = document.getElementById('name-1');
darkBurgerNameEl.textContent = darkBurger.name;
const longerNameEl = document.getElementById('name-2');
longerNameEl.textContent = longer.name;

const darkBurgerWeightEl = document.getElementById('weight-1');
darkBurgerWeightEl.textContent = `${darkBurger.weight} Г`;
const longerWeightEl = document.getElementById('weight-2');
longerWeightEl.textContent = `${longer.weight} Г`;

const darkBurgerDescrEl = document.getElementById('descr-1');
darkBurgerDescrEl.textContent = darkBurger.description;
const longerDescrEl = document.getElementById('descr-2');
longerDescrEl.textContent = longer.description;

const darkBurgerEnergyEl = document.getElementById('energy-1');
darkBurgerEnergyEl.textContent = `${darkBurger.energy} Ккал`;
const longerEnergyEl = document.getElementById('energy-2');
longerEnergyEl.textContent = `${longer.energy} Ккал`;

const darkBurgerProteinEl = document.getElementById('protein-1');
darkBurgerProteinEl.textContent = `Б: ${darkBurger.protein} г`;
const longerProteinEl = document.getElementById('protein-2');
longerProteinEl.textContent = `Б: ${longer.protein} г`;

const darkBurgerFatsEl = document.getElementById('fats-1');
darkBurgerFatsEl.textContent = `Ж: ${darkBurger.fats} г`;
const longerFatsEl = document.getElementById('fats-2');
longerFatsEl.textContent = `Ж: ${longer.fats } г`;

const darkBurgerCarbHydrEl = document.getElementById('carbhydr-1');
darkBurgerCarbHydrEl.textContent = `У: ${darkBurger.carbohydrates} г`
const longerCarbHydrEl = document.getElementById('carbhydr-2');
longerCarbHydrEl.textContent = `У: ${longer.carbohydrates} г`


