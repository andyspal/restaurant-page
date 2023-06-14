const website = (body) => {
    const createHeader = () =>{
        let header = document.createElement('header');
        let navBar = createNav();
        let title_header = createText('UFO','title-header','h2')
        
        header.appendChild(title_header);
        header.appendChild(navBar);
        return header
    }

    const createMain = () =>{
        let main = document.createElement('main')
        let content = document.createElement('div');
        content.id = 'content';
        
        main.appendChild(content);
        return main;
    }

    const createFooter = () => {
        let footer = document.createElement('footer');
        let footerTitle = createText('Copyright 2023 andyspal','copyright-footer','p');
        let githubLink = createGithubLink();
        
        footerTitle.appendChild(githubLink);
        footer.appendChild(footerTitle);
        return footer
    }
    const createNav = () =>{
        let nav = document.createElement('nav');
        let homeButton = createButton('home','button-nav');
        let menuButton = createButton('menu','button-nav')
        let contactButton = createButton('contact','button-nav');
    
        let navButtons = [homeButton,menuButton,contactButton];
        navButtons.forEach(navButton => {
            nav.appendChild(navButton);
        });
        return nav;
    }
    
    const createButton = (name, className) => {
        let button = document.createElement('button');
        button.textContent = `${name}`;
        button.classList.add(`${className}`);
        return button;
    }
    
    const createText = (content, className, textType) => {
        let text = document.createElement(`${textType}`)
        text.textContent = `${content}`;
        text.classList.add(className);
        return text;
    }

    const createGithubLink = () => {
        const link = document.createElement('a');
        link.href = 'https://github.com/andyspal';
        link.target = '_blank';

        const image = document.createElement('img');
        image.src = './github.svg';
        image.alt = 'GitHub';
        image.width = '28';
        image.height = '28';     

        link.appendChild(image);
        return link;
    }

    let header = createHeader();
    let main = createMain();
    let footer = createFooter();

    let elements = [header,main,footer];
    let container = document.createElement('div');

    elements.forEach(element => {
        body.appendChild(element);
    });
}

export {website};