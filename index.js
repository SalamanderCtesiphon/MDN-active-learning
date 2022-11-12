let output = document.querySelector('.output');
output.innerHTML = '';

for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        output.innerHTML += 'Blast off!';
    } else {
        const para = document.createElement('p');
        para.textContent = 'Countdown: ' + i;
        output.appendChild(para);
    }
}


