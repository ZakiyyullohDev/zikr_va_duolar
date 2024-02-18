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
