// JavaScript cho website
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website đã được tải!');
    
    // Hiệu ứng cho button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Chúc mừng! Website của bạn đã hoạt động! 🎉');
        });
    }
    
    // Hiệu ứng khi scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(102, 126, 234, 0.95)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }
    });
    
    // Thêm hiệu ứng cho feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
});
