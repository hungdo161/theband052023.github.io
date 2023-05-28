




// 28/05/2023

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





// 27/05/2023

// const buyTecketBtns = document.querySelectorAll(".js-tourPlace_buyBtn")
// const getModal = document.querySelector(".js-modal")
// const modalBuyTicketSection = document.querySelector(".js-modal_buyTicketSection")
// const closeModals = document.querySelectorAll(".js-modal_closedBtn")

// function showModal() {
//     getModal.classList.add("open")
// };

// function hideModal () {
//     getModal.classList.remove("open")
// }


// for (const buyTecketBtn of buyTecketBtns) {
//     buyTecketBtn.addEventListener('click', showModal)
// };


// for (const closeModal of closeModals) {
//     closeModal.addEventListener('click', hideModal)
// }

// getModal.addEventListener('click', hideModal)

// // ngăn chặn sử nổi bọt 
// modalBuyTicketSection.addEventListener('click', function (event) {
//     event.stopPropagation()
// })
