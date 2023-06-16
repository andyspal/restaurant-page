import lomito2 from "./lmages/lomito2.jpg";
import lomito3 from "./lmages/lomito3.jpg";
import classicLomito from './lmages/classicLomito.jpg';
import cheddarLomito from './lmages/cheddarLomito.jpg';
import mexicanLomito from './lmages/mexicanLomito.jpg';
import vegetarianLomito from './lmages/vegetarianLomito.jpg';

import { createText } from "./website";

const menu = () => {
  let menuContainer = document.createElement('div');
  menuContainer.classList.add('menu');
  let sizeContainer = createSizeContainer();
  menuContainer.appendChild(sizeContainer);
  let flavourContainer = createFlavourContainer();
  menuContainer.appendChild(flavourContainer);

  return menuContainer;
};

const createSizeContainer = () => {
  let sizeContainer = document.createElement("div");
  sizeContainer.classList.add("size-container");
  let image = createImage(lomito2, "menu-size-image", "lomito2");
  let div = createDiv("menu-div", image);
  sizeContainer.appendChild(div);

  let title = createText("Burger Bread", "size-title", "h2");
  let text = createText(
    "A smaller lomito made with burger bread",
    "size-text",
    "p"
  );
  div = createDiv("menu-div", title, text);
  div.classList.add("text");
  sizeContainer.appendChild(div);

  title = createText("Lomito Bread", "size-title", "h2");
  text = createText(
    "A classic lomito, you can take half home and eat it next morning",
    "size-text",
    "p"
  );
  div = createDiv("menu-div", title, text);
  div.classList.add("text");
  sizeContainer.appendChild(div);

  image = createImage(lomito3, "menu-size-image", "lomito3");
  div = createDiv("menu-div", image);
  sizeContainer.appendChild(div);
  return sizeContainer;
};


const createDiv = (className, ...content) => {
  let div = document.createElement("div");
  div.classList.add(className);
  for (let item of content) {
    if (typeof item === "string") {
      div.appendChild(document.createTextNode(item));
    } else {
      div.appendChild(item);
    }
  }
  return div;
};
const createImage = (source, className, alternative) => {
  const image = new Image();
  image.src = `${source}`;
  image.classList.add(`${className}`);
  image.alt = `${alternative}`;

  return image;
};

const createFlavourContainer = () =>{
  let flavourContainer = document.createElement('div');
  flavourContainer.classList.add('flavour-container');
  let image = createImage(classicLomito, 'menu-flavour-image', 'classicLomito');
  let title = createText('Classic','flavour-title','h2');
  let text = createText ('Loin beef, lettuce, tomato, mayonnaise', 'flavour-text','p');
  let div = createDiv('flavour-text-container',title,text);
  let flavourDiv = createDiv('menu-flavour', image, div);
  flavourContainer.appendChild(flavourDiv);

  image = createImage(cheddarLomito, 'menu-flavour-image', 'cheddarLomito');
  title = createText('Cheddar','flavour-title','h2');
  text = createText ('Loin beef, lettuce, cheddar, tomato, mayonnaise, bacon', 'flavour-text','p')
  div = createDiv('flavour-text-container',title,text);
  flavourDiv = createDiv('menu-flavour', image, div);
  flavourContainer.appendChild(flavourDiv);

  image = createImage(mexicanLomito, 'menu-flavour-image', 'mexicanLomito');
  title = createText('Mexican','flavour-title','h2');
  text = createText ('Loin beef, guacamole, cheddar, tomato, mayonnaise, peppers', 'flavour-text','p')
  div = createDiv('flavour-text-container',title,text);
  flavourDiv = createDiv('menu-flavour', image, div);
  flavourContainer.appendChild(flavourDiv);

  image = createImage(vegetarianLomito, 'menu-flavour-image', 'vegetarianLomito');
  title = createText('Vegetarian','flavour-title','h2');
  text = createText ('Vegetarian beef, lettuce, tomato, mayonnaise', 'flavour-text','p')
  div = createDiv('flavour-text-container',title,text);
  flavourDiv = createDiv('menu-flavour', image, div);
  flavourContainer.appendChild(flavourDiv);

  return flavourContainer;
}


export { menu };
