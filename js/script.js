 const featureItem = document.querySelector('.feature');
 const featureIcon = document.querySelector('.feature-item-icon');
 const featureDropdown = document.querySelector('.feature-dropdown');

 const companyItem = document.querySelector('.company')
 const companyIcon = document.querySelector('.company-item-icon');
 const companyDropwdown = document.querySelector('.company-dropdown');

 const mainImage = document.querySelector('#main-img')

 const windowCheck = () => {
     if(window.innerWidth <= 768) {
        mainImage.src = "../images/image-hero-mobile.png"
        console.log("Imagem desktop")
     } else {
         mainImage.src= "../images/image-hero-desktop.png"
         console.log("Imagem cel")
     };
 }
windowCheck()

 window.addEventListener("resize", windowCheck)


 featureItem.addEventListener('click', () => {
     featureIcon.classList.toggle('feature-item-icon-up');
     featureDropdown.classList.toggle('visible');
 });
 

 companyItem.addEventListener('click', () => {
     companyIcon.classList.toggle('company-item-icon-up');
     companyDropwdown.classList.toggle('visible');
 });

