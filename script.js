const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
let yesButtonScale = 1;

noBtn.addEventListener('click', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 150));
    const y = Math.floor(Math.random() * (window.innerHeight - 150));
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    
    yesButtonScale += 1;
    yesBtn.style.transform = `scale(${yesButtonScale})`;
});

yesBtn.addEventListener('click', () => {
    window.location.href = 'page2/page.html';
});
