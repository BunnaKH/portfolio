const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
    removeBorder();
 this.classList.add('.tab-border');
}

function removeBorder(){
    tabItems.forEach(item => item.romove('tab-border'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));