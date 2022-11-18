const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = "Hey I'm red!";

container.appendChild(para);

const headingThree = document.createElement('h3');
headingThree.style.color = 'blue';
headingThree.textContent = "I'm a blue h3!";

container.appendChild(headingThree);

const thePinkDiv = document.createElement('div');
thePinkDiv.style.borderColor = 'black';
thePinkDiv.style.backgroundColor = 'pink';

const innerHeadOne = document.createElement('h1');
innerHeadOne.textContent = "I'm in the div!";

const innerPara = document.createElement('p');
innerPara.textContent = "Me too!";

thePinkDiv.appendChild(innerHeadOne);
thePinkDiv.appendChild(innerPara);
container.appendChild(thePinkDiv);