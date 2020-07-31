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
            const header = document.querySelector('header');
            if (window.pageYOffset <= 100) {
                onTop.style.visibility = 'hidden';
            }
            if (window.pageYOffset >= 200) {
                header.classList.add('headerScroll');
                onTop.style.visibility = 'visible';
    
            }
            if (this.pageYOffset >= 485) {
                preview = document.querySelector('.main__container-about-preview');
                preview.style.animation = 'fade-in 2s ease';
    
                function appear() {
                    preview.style.opacity = '1';
                }
            }
            if (this.pageYOffset >= 580) {
                preview = document.querySelector('.preview__img-under-text');
                preview.style.animation = 'fade-in 2s ease';
    
                function appear() {
                    preview.style.opacity = '1';
                }
            }
            if (this.pageYOffset >= 1392) {
                preview = document.querySelector('.main__container-about');
                preview.style.animation = 'fade-in 2s ease';
    
                function appear() {
                    preview.style.opacity = '1';
                }
            }
    
    
            if (this.pageYOffset >= 2402) {
                preview = document.querySelector('.main__skill');
                preview.style.animation = 'fade-in 2s ease';
    
                function appear() {
                    preview.style.opacity = '1';
                }
            }
            if (this.pageYOffset >= 2602) {
                preview = document.querySelector('.personal__skill');
                preview.style.animation = 'fade-in 2s ease';
    
                function appear() {
                    preview.style.opacity = '1';
                }
            }
            if (this.pageYOffset >= 4030) {
                preview = document.querySelector('.img__after-skill');
                preview.style.animation = 'fade-in 2s ease';
    
                function appear() {
                    preview.style.opacity = '1';
                }
            }
            if (this.pageYOffset >= 5000) {
                preview = document.querySelector('.main__hobby');
                preview.style.animation = 'fade-in 2s ease';
    
                function appear() {
                    preview.style.opacity = '1';
                }
            }
    
            setTimeout(disappear);
            setTimeout(appear);
    
        };
    
        $('a[href^="#"]').click(function () {
            var target = $(this).attr('href');
            $('html,body').animate({
                scrollTop: $(target).offset().top
            }, 1200)
        });
    });
