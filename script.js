document.addEventListener('DOMContentLoaded', function() {
 
    const serviceCards = document.querySelectorAll('.service-card');

   
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
          
            window.location.href = 'professionals.html';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            window.location.href = 'professionals.html';
        });
    });

    const profileButtons = document.querySelectorAll('.view-profile-btn');

    profileButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'profile.html';
        });
    });
});
