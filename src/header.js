const content = document.querySelector('.content');

function header() {
    const header = document.createElement('div');
    header.className = "header";
    content.appendChild(header);

    const pic = document.createElement('div');
    pic.className = "pic";
    header.appendChild(pic);
    
    const name = document.createElement('div');
    name.className = "name";
    name.innerText = "Paulo Adeva"
    header.appendChild(name);

    const bio = document.createElement('div');
    bio.className = "bio";
    bio.innerText = "Student Software Engineer";
    header.appendChild(bio);

    const bar = document.createElement('div');
    bar.className = "bar";
    header.appendChild(bar);

    const linkedIn = document.createElement('a');
    linkedIn.className = "linkedIn";
    linkedIn.href = "https://www.linkedin.com/in/pauloadeva";
    bar.appendChild(linkedIn);

    const liImage = document.createElement('div');
    liImage.className = "fab fa-linkedin";
    linkedIn.appendChild(liImage);

    const github = document.createElement('a');
    github.className = "github";
    github.href = "https://www.github.com/paulorox14";
    bar.appendChild(github);

    const ghImage = document.createElement('div');
    ghImage.className = "fab fa-github";
    github.appendChild(ghImage);
 
}

header();
export {header};