import lomitoHome from './lomitoHome.jpg';

const home = (content) => {
    let title_content = document.createElement('h2');
    title_content.classList.add('title-content');
    title_content.textContent = 'Unleash your taste buds with our mouthwatering lomitos';

    let lomito_home = new Image();
    lomito_home.src = lomitoHome;
    lomito_home.classList.add('lomito-image-content');

    let text_content = document.createElement('p')
    text_content.classList.add('text-content')
    text_content.textContent = "Order online or visit us"

    let components = [title_content, lomito_home,text_content];

    components.forEach(component => {
        content.appendChild(component);           
    });
}
export {home}; 