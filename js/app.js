const dua = document.querySelectorAll('.dua')
const counterBtn = document.querySelectorAll('#counterBtn')
const copyDuaBtns = document.querySelectorAll('#copyDua');
const duaNames = document.querySelectorAll('#duaName');
const duaTexts = document.querySelectorAll('#duaText');

const copyDuaFunc = (duaName, duaText) => {
    navigator.clipboard.writeText(`${duaName.textContent}: ${duaText.textContent}`);
}

copyDuaBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        copyDuaFunc(duaNames[index], duaTexts[index]);
        alert("Nusxa olindi!");
    });
});

const counterFunc = (duas) => {
    counterBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let result = btn[index].textContent - 1
            if (result === 0) {
                duas.classList.add('display-none')
            }
        });
    });
}

dua.forEach((duas) => {
    duas.addEventListener('click', () => {
        counterFunc(duas)
    })
});
