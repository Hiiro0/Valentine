const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const pic=document.getElementById('img1')
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'yeeyyy';
    pic.src='hugs.gif'
    yesBtn.style.width = '150px';
    yesBtn.style.height = '40px';
    yesBtn.style.top = `0`;
    bigger = 0;

});
var bigger = 0;
noBtn.addEventListener('click', () => {
    bigger += 100;
    yesBtn.style.height = `${bigger}px`;
    yesBtn.style.width = `${bigger}px`;
    yesBtn.style.top = `-${bigger - 50}px`;
});
