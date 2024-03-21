const dua = document.querySelectorAll('#dua')
const copyDuaBtns = document.querySelectorAll('#copyDua');
const duaNames = document.querySelectorAll('#duaName');
const duaTexts = document.querySelectorAll('#duaText');
const oneDua = document.querySelectorAll('#counterBtn1')
const threeDua = document.querySelectorAll('#counterBtn3')
const sevenDua = document.querySelectorAll('#counterBtn7')
const tenDua = document.querySelectorAll('#counterBtn10')
const ThousandDua = document.querySelectorAll('#counterBtn100')

const copyDuaFunc = (duaName, duaText) => {
    navigator.clipboard.writeText(`${duaName.textContent}: ${duaText.textContent}`);
}

copyDuaBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        copyDuaFunc(duaNames[index], duaTexts[index]);
        alert("Nusxa olindi!");
    });
});

oneDua.forEach(duaOne => {
    duaOne.addEventListener('click', ()=> {
        let count = parseInt(duaOne.textContent);
        if (count > 0) {
            duaOne.textContent = count - 1;
        }
        if (count <= 1) {
            duaOne.textContent = 'Duo Tugadi'
        }
    })
});

threeDua.forEach(duaThree => {
    duaThree.addEventListener('click', ()=> {
        let count = parseInt(duaThree.textContent);
        if (count > 0) {
            duaThree.textContent = count - 1;
        }
        if (count <= 1) {
            duaThree.textContent = 'Duo Tugadi'
        }
    })
});

sevenDua.forEach(duaSeven => {
    duaSeven.addEventListener('click', ()=> {
        let count = parseInt(duaSeven.textContent);
        if (count > 0) {
            duaSeven.textContent = count - 1;
        }
        if (count <= 1) {
            duaSeven.textContent = 'Duo Tugadi'
        }
    })
});

tenDua.forEach(duaTen => {
    duaTen.addEventListener('click', ()=> {
        let count = parseInt(duaTen.textContent);
        if (count > 0) {
            duaTen.textContent = count - 1;
        }
        if (count <= 1) {
            duaTen.textContent = 'Duo Tugadi'
        }
    })
});

ThousandDua.forEach(duaThousand => {
    duaThousand.addEventListener('click', ()=> {
        let count = parseInt(duaThousand.textContent);
        if (count > 0) {
            duaThousand.textContent = count - 1;
        }
        if (count <= 1) {
            duaThousand.textContent = 'Duo Tugadi'
        }
    })
});
