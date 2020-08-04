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

     $('a[href^="#"]').click(function () {
         var target = $(this).attr('href');
         $('html,body').animate({
             scrollTop: $(target).offset().top
         }, 1200)
     });

     const navItem = document.querySelector('#nav__item');
     const eclipse = document.querySelector('#eclipse__item');
     const navItem2 = document.querySelector('#nav__item-2');
     const eclipse2 = document.querySelector('#eclipse__item-2');
     const navItem3 = document.querySelector('#nav__item-3');
     const eclipse3 = document.querySelector('#eclipse__item-3');
     const navItem4 = document.querySelector('#nav__item-4');
     const eclipse4 = document.querySelector('#eclipse__item-4');

     navItem.addEventListener('mousemove', eclipseAppear);
     navItem.addEventListener('mouseout', eclipseDisappear);
     navItem2.addEventListener('mousemove', eclipseAppear2);
     navItem2.addEventListener('mouseout', eclipseDisappear2);
     navItem3.addEventListener('mousemove', eclipseAppear3);
     navItem3.addEventListener('mouseout', eclipseDisappear3);
     navItem4.addEventListener('mousemove', eclipseAppear4);
     navItem4.addEventListener('mouseout', eclipseDisappear4);

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

    $('.header__burger').click(function(event) {
        $('.header__burger').toggleClass('active');
        $('.header__menu').toggleClass('active');
    });

 });