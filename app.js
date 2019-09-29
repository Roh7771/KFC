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

const productImgUrlEl_1 = document.getElementById('product-img-1');
productImgUrlEl_1.src = darkBurger.imgUrl;
const productImgUrlEl_2 = document.getElementById('product-img-2');
productImgUrlEl_2.src = longer.imgUrl;

const productPriceEl_1 = document.getElementById('product-price-1');
productPriceEl_1.innerHTML = `${darkBurger.price}&#8381;`;
const productPriceEl_2 = document.getElementById('product-price-2');
productPriceEl_2.innerHTML = `${longer.price}&#8381;`;

const productNameEl_1 = document.getElementById('name-1');
productNameEl_1.textContent = darkBurger.name;
const productNameEl_2 = document.getElementById('name-2');
productNameEl_2.textContent = longer.name;

const productDescrPriceEl_1 = document.getElementById('weigth-1');
productDescrPriceEl_1.textContent = `${darkBurger.weight} Г`;
const productDescrPriceEl_2 = document.getElementById('weigth-2');
productDescrPriceEl_2.textContent = `${longer.weight} Г`;

const productDescrEl_1 = document.getElementById('descr-1');
productDescrEl_1.textContent = darkBurger.description;
const productDescrEl_2 = document.getElementById('descr-2');
productDescrEl_2.textContent = longer.description;

const productEnergyEl_1 = document.getElementById('energy-1');
productEnergyEl_1.textContent = `${darkBurger.energy} Ккал`;
const productEnergyEl_2 = document.getElementById('energy-2');
productEnergyEl_2.textContent = `${longer.energy} Ккал`;

const productProteinEl_1 = document.getElementById('protein-1');
productProteinEl_1.textContent = `Б: ${darkBurger.protein} г`;
const productProteinEl_2 = document.getElementById('protein-2');
productProteinEl_2.textContent = `Б: ${longer.protein} г`;

const productFatsEl_1 = document.getElementById('fats-1');
productFatsEl_1.textContent = `Ж: ${darkBurger.fats} г`;
const productFatsEl_2 = document.getElementById('fats-2');
productFatsEl_2.textContent = `Ж: ${longer.fats } г`;

const productCarbHydrEl_1 = document.getElementById('carbhydr-1');
productCarbHydrEl_1.textContent = `У: ${darkBurger.carbohydrates} г`
const productCarbHydrEl_2 = document.getElementById('carbhydr-2');
productCarbHydrEl_2.textContent = `У: ${longer.carbohydrates} г`


