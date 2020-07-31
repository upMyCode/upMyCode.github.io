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

        window.onscroll = function disappear() {
            if (this.pageYOffset >= 200) {
                hobby = document.querySelector('.hobby');
                hobby.style.animation = 'fade-in 3s ease';
    
                function appear() {
                    hobby.style.opacity = '1';
                }
            }
            if (this.pageYOffset >= 900) {
                knowledgeIntro = document.querySelector('.knowledge__intro');
                knowledgeIntro.style.animation = 'fade-in 3s ease';
    
                function appear() {
                    knowledgeIntro.style.opacity = '1';
                }
            }
            if (this.pageYOffset >= 1800) {
                knowledgeMain = document.querySelector('.knowledge__main');
                knowledgeMain.style.animation = 'fade-in 3s ease';
    
                function appear() {
                    knowledgeMain.style.opacity = '1';
                }
            }
    
    
            if (this.pageYOffset >= 2800) {
                portfolio = document.querySelector('.portfolio');
                portfolio.style.animation = 'fade-in 3s ease';
    
                function appear() {
                    portfolio.style.opacity = '1';
                }
            }
            if (this.pageYOffset >= 4800) {
                contactInformation = document.querySelector('.contact__information');
                contactInformation.style.animation = 'fade-in 3s ease';
    
                function appear() {
                    contactInformation.style.opacity = '1';
                }
            }

            setTimeout(disappear);
    
        };
    
        $('a[href^="#"]').click(function () {
            var target = $(this).attr('href');
            $('html,body').animate({
                scrollTop: $(target).offset().top
            }, 1200)
        });
        
        const navItems = document.querySelectorAll('#nav__item');
        const eclipses = document.querySelectorAll('#eclipse');

        for(i = 0; i< navItems.length; i++){

            for(j = 0; j< eclipses.length; j++){
                const eclipse = eclipses[j];
                const navItem = navItems[i];

                navItem.addEventListener('mousemove', eclipseAppear);
                navItem.addEventListener('mouseout', eclipseDisappear);

                function eclipseAppear(event){
                eclipse.style.opacity = '1';
                }
                function eclipseDisappear(event){
                    eclipse.style.opacity = '0';
                }
            }

        }
});
