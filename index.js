/* let output = document.querySelector('.output');
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
 */

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here

for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Phil' || people[i] === 'Lola') {
        refused.textContent += people[i] + ', ';
    } else {
        admitted.textContent += people[i] + ', ';
    }
}

refused.textContent = refused.textContent.slice(0, -2);
admitted.textContent = admitted.textContent.slice(0, -2);

// refused.textContent += ;
// admitted.textContent += ;
