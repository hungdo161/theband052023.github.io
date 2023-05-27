

const buyTecketBtns = document.querySelectorAll(".js-tourPlace_buyBtn")
const getModal = document.querySelector(".js-modal")
const modalBuyTicketSection = document.querySelector(".js-modal_buyTicketSection")
const closeModals = document.querySelectorAll(".js-modal_closedBtn")

function showModal() {
    getModal.classList.add("open")
};

function hideModal () {
    getModal.classList.remove("open")
}


for (const buyTecketBtn of buyTecketBtns) {
    buyTecketBtn.addEventListener('click', showModal)
};


for (const closeModal of closeModals) {
    closeModal.addEventListener('click', hideModal)
}

getModal.addEventListener('click', hideModal)

// ngăn chặn sử nổi bọt 
modalBuyTicketSection.addEventListener('click', function (event) {
    event.stopPropagation()
})
