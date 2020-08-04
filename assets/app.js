 $(document).ready(function () {


     const cards = document.querySelectorAll('#dark__item');

     for (let i = 0; i < cards.length; i++) {
         const card = cards[i];
         card.addEventListener('mousemove', rotate);
         card.addEventListener('mouseout', stopRotate);

         function stopRotate(event) {
             card.style.transform = 'rotateX(0)';
         }

         function rotate(event) {
             const halfWidth = card.offsetWidth / 2;
             const halfHeight = card.offsetHeight / 2;
             card.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 6 + 'deg)rotateY(' + (event.offsetX - halfWidth) / 6 + 'deg)'
         }
     }

    //  window.onscroll = function disappear() {
    //      if (this.pageYOffset >= 200) {
    //          hobby = document.querySelector('.hobby');
    //          hobby.style.animation = 'fade-in 3s ease';

    //          function appear() {
    //              hobby.style.opacity = '1';
    //          }
    //      }
    //      if (this.pageYOffset >= 900) {
    //          knowledgeIntro = document.querySelector('.knowledge__intro');
    //          knowledgeIntro.style.animation = 'fade-in 3s ease';

    //          function appear() {
    //              knowledgeIntro.style.opacity = '1';
    //          }
    //      }
    //      if (this.pageYOffset >= 1800) {
    //          knowledgeMain = document.querySelector('.knowledge__main');
    //          knowledgeMain.style.animation = 'fade-in 3s ease';

    //          function appear() {
    //              knowledgeMain.style.opacity = '1';
    //          }
    //      }


    //      if (this.pageYOffset >= 2800) {
    //          portfolio = document.querySelector('.portfolio');
    //          portfolio.style.animation = 'fade-in 3s ease';

    //          function appear() {
    //              portfolio.style.opacity = '1';
    //          }
    //      }
    //      if (this.pageYOffset >= 4800) {
    //          contactInformation = document.querySelector('.contact__information');
    //          contactInformation.style.animation = 'fade-in 3s ease';

    //          function appear() {
    //              contactInformation.style.opacity = '1';
    //          }
    //      }

    //      setTimeout(disappear);

    //  };

     $('a[href^="#"]').click(function () {
         var target = $(this).attr('href');
         $('html,body').animate({
             scrollTop: $(target).offset().top
         }, 1200)
     });

     const navItem = document.querySelector('#nav__item');
     const eclipse = document.querySelector('#eclipse');
     const navItem2 = document.querySelector('#nav__item-2');
     const eclipse2 = document.querySelector('#eclipse__item-2');
     const navItem3 = document.querySelector('#nav__item-3');
     const eclipse3 = document.querySelector('#eclipse__item-3');
     const navItem4 = document.querySelector('#nav__item-4');
     const eclipse4 = document.querySelector('#eclipse__item-4');
     const navItem5 = document.querySelector('#nav__item-5');
     const eclipse5 = document.querySelector('#eclipse__item-5');

     navItem.addEventListener('mousemove', eclipseAppear);
     navItem.addEventListener('mouseout', eclipseDisappear);
     navItem2.addEventListener('mousemove', eclipseAppear2);
     navItem2.addEventListener('mouseout', eclipseDisappear2);
     navItem3.addEventListener('mousemove', eclipseAppear3);
     navItem3.addEventListener('mouseout', eclipseDisappear3);
     navItem4.addEventListener('mousemove', eclipseAppear4);
     navItem4.addEventListener('mouseout', eclipseDisappear4);
     navItem5.addEventListener('mousemove', eclipseAppear5);
     navItem5.addEventListener('mouseout', eclipseDisappear5);

     function eclipseAppear(event) {
         eclipse.style.opacity = '1';
     }

     function eclipseDisappear(event) {
         eclipse.style.opacity = '0';
     }

     function eclipseAppear2(event) {
         eclipse2.style.opacity = '1';
     }

     function eclipseDisappear2(event) {
         eclipse2.style.opacity = '0';
     }

     function eclipseAppear3(event) {
         eclipse3.style.opacity = '1';
     }

     function eclipseDisappear3(event) {
         eclipse3.style.opacity = '0';
     }
     function eclipseAppear4(event) {
        eclipse4.style.opacity = '1';
    }

    function eclipseDisappear4(event) {
        eclipse4.style.opacity = '0';
    }
    function eclipseAppear5(event) {
        eclipse5.style.opacity = '1';
    }

    function eclipseDisappear5(event) {
        eclipse5.style.opacity = '0';
    }

    $('.header__burger').click(function(event) {
        $('.header__burger').toggleClass('active');
        $('.header__menu').toggleClass('active');
    });

 });