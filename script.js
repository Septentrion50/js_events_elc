function clickFooter() {
    let footerClickNum = 0
    let footer = document.getElementsByTagName("footer")[0];
    let onFooterClick = function() {
        footerClickNum ++;
        console.log(`clic n° ${footerClickNum}`);
    };
    footer.addEventListener("click", onFooterClick);
};

function hamburgerMenu() {
    let menuButton = document.getElementsByClassName("navbar-toggler")[0];
    let clickedNavButton = false;
    let onMenuNavClick = function() {
        let menuNav = document.getElementById("navbarHeader");
        if (clickedNavButton === false) {
            menuNav.classList.toggle("collapse");
            clickedNavButton = true;
        } else if (clickedNavButton === true) {
            menuNav.classList.toggle("collapse");
            clickedNavButton = false;
        };
    };
    menuButton.addEventListener("click", onMenuNavClick);
};

function redTextClicked() {
    let editButton = document.getElementsByClassName("col-md-4")[0].querySelectorAll("button")[1];
    let onEditButtonClick = function() {
        let cardText = document.getElementsByClassName("col-md-4")[0];
        cardText.style.color = "red";
    };
    editButton.addEventListener("click", onEditButtonClick);
};

function greenTextToggle() {
    let editButton = document.getElementsByClassName("col-md-4")[1].querySelectorAll("button")[1];
    let editGreenClicked = false;
    let onEditGreenClick = function() {
       let cardText = document.getElementsByClassName("col-md-4")[1];
       if (editGreenClicked === false) {
           cardText.style.color = "green";
           editGreenClicked = true;
       } else if (editGreenClicked === true) {
           cardText.style.color = "inherit";
           editGreenClicked = false;
       };
    };
    editButton.addEventListener("click", onEditGreenClick);
};

function nucleariseBootstrap() {
    let navBar = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];
    let bootStrapToggle = true;
    let onDblClickBootstrapLink = function() {
        let linkBootstrap = document.getElementsByTagName("head")[0].querySelectorAll("link")[0];
        console.log(linkBootstrap);
        if (bootStrapToggle === true) {
            linkBootstrap.disabled = true;
            bootStrapToggle = false;
        } else if (bootStrapToggle === false){
            linkBootstrap.disabled = false;
            bootStrapToggle = true;
        };
    };
    navBar.addEventListener("dblclick", onDblClickBootstrapLink);
};

function toggleCardView() {
    let cardElt = document.querySelectorAll('.card');
    for (let i = 0; i < cardElt.length; i++) {
        toggleCard(cardElt[i]);
    };
};

function toggleCard(cardElt) {
    let btnElt = cardElt.querySelector('.btn-success');
    btnElt.addEventListener('mouseover', e => {
        e.preventDefault();
        console.log(e.currentTarget);
        cardElt.querySelector('.card-text').classList.toggle('collapse');
        if (cardElt.querySelector('.card-text').classList.contains('collapse')) {
            cardElt.querySelector('.card-img-top').style.width = '20%';
        } else {
            cardElt.querySelector('.card-img-top').style.width = '';
        };
    });
};

clickFooter();
hamburgerMenu();
redTextClicked();
greenTextToggle();
nucleariseBootstrap();
toggleCardView();