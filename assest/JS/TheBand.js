


// 28/05/2023 buy tickkets modal

const buyBtns = document.querySelectorAll(".js-tourPlace_buyBtn") ; 
const getModal = document.querySelector(".js-modal") ;
const getCloseBtns = document.querySelectorAll(".js-modal_closedBtn") ; 
const getModalContainer = document.querySelector(".js-modal_buyTicketSection")


function showModal () {
    getModal.classList.add("open");
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModal)
}


function hideModal () {
    getModal.classList.remove("open");
};

for (const closeBtn of getCloseBtns) {
    closeBtn.addEventListener("click",hideModal)
};


getModal.addEventListener('click', hideModal);

// Ngăn chặn sự nổi bọt(Propagation)

getModalContainer.addEventListener("click", function (event) {
    event.stopPropagation()
}
);



// 30/05/2023 mobile-menu bar open and close

const header = document.querySelector('#header');
const headerHeight = header.clientHeight ; 

const mobileMenuIcon =document.querySelector(".js-header_search");

mobileMenuIcon.onclick = function () {
    const isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null ;
    }
}

// close menu mobile header khi click vào vào item 

const menuItems = document.querySelectorAll('.header_navigation-bar > .navigation-bar-item');
for (var i = 0; i <= menuItems.length ; i++ ) {
    var menuItem = menuItems[i] ; 
    menuItem.onclick = function () {
        header.style.height = null ;
    }
}

