let navigation = document.querySelector('.navigation');
let closebackground = document.querySelector('.nav-close-out');
let cartSlideBar = document.querySelector('.nav-slide-cart');
// this function show the slidebar of contact us and personal information
function showSlideBar() {

    if (cartSlideBar.classList.contains('show')) {

        cartSlideBar.classList.toggle('show');
    } else {
        closebackground.classList.toggle('show');
    }
    navigation.classList.toggle('show');
}
//  this function show the slidebar of cart
function showCart() {
    if (navigation.classList.contains('show')) {

        navigation.classList.toggle('show');
    } else {

        closebackground.classList.toggle('show');
    }
    cartSlideBar.classList.toggle('show');
}

// this function hidden all slidebars
function hiddenSlideBars() {
    navigation.classList.remove('show');
    cartSlideBar.classList.remove('show');
    closebackground.classList.remove('show');
}

// this function delete details panel 
function closeDetails() {
    document.querySelector('.panelDetails').remove();
}