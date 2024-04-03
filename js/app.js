const dua = document.querySelectorAll('#dua')
const copyDuaBtns = document.querySelectorAll('#copyDua')
const duaNames = document.querySelectorAll('#duaName')
const duaTexts = document.querySelectorAll('#duaText')
const oneDua = document.querySelectorAll('#counterBtn1')
const threeDua = document.querySelectorAll('#counterBtn3')
const sevenDua = document.querySelectorAll('#counterBtn7')
const tenDua = document.querySelectorAll('#counterBtn10')
const ThousandDua = document.querySelectorAll('#counterBtn100')

const copyDuaFunc = (duaName, duaText) => {
    navigator.clipboard.writeText(`${duaName.textContent}: ${duaText.textContent}`)
}

copyDuaBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        copyDuaFunc(duaNames[index], duaTexts[index])
        alert("Nusxa olindi!");
    });
});

oneDua.forEach(duaOne => {
    duaOne.parentElement.parentElement.addEventListener('click', () => {
        let count = parseInt(duaOne.textContent);
        if (count > 0) {
            duaOne.textContent = count - 1;
        }
        if (count <= 1)
        {
            duaOne.parentElement.parentElement.classList.add('endDua')
            duaOne.classList.add('display-none')
        }
    })
});

threeDua.forEach(duaThree => {
    duaThree.parentElement.parentElement.addEventListener('click', () => {
        let count = parseInt(duaThree.textContent);
        if (count > 0) {
            duaThree.textContent = count - 1;
        }
        if (count <= 1) {
            
            duaThree.parentElement.parentElement.classList.add('endDua')
            duaThree.classList.add('display-none')
        }
    })
});

sevenDua.forEach(duaSeven => {
    duaSeven.parentElement.parentElement.addEventListener('click', () => {
        let count = parseInt(duaSeven.textContent);
        if (count > 0) {
            duaSeven.textContent = count - 1;
        }
        if (count <= 1) {
            
            duaSeven.parentElement.parentElement.classList.add('endDua')
            duaSeven.classList.add('display-none')
        }
    })
});

tenDua.forEach(duaTen => {
    duaTen.parentElement.parentElement.addEventListener('click', () => {
        let count = parseInt(duaTen.textContent);
        if (count > 0) {
            duaTen.textContent = count - 1;
        }
        if (count <= 1)
        {
            duaTen.parentElement.parentElement.classList.add('endDua')
            duaTen.classList.add('display-none')
        }
    })
});

ThousandDua.forEach(duaThousand => {
    duaThousand.parentElement.parentElement.addEventListener('click', () => {
        let count = parseInt(duaThousand.textContent);
        if (count > 0) {
            duaThousand.textContent = count - 1;
        }
        if (count <= 1) {
            
            duaThousand.parentElement.parentElement.classList.add('endDua')
            duaThousand.classList.add('display-none')
        }
    })
});
