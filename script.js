document.addEventListener('DOMContentLoaded', function() {
    // نحدد كل البطاقات التي تحمل الفئة 'service-card'
    const serviceCards = document.querySelectorAll('.service-card');

    // نمر على كل بطاقة ونضيف لها مستمع لحدث "click"
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            // عند الضغط على أي بطاقة، ننتقل مباشرةً إلى صفحة المحترفين
            window.location.href = 'professionals.html';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // الوظيفة الأولى: الانتقال من صفحة الخدمات إلى صفحة المحترفين
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            window.location.href = 'professionals.html';
        });
    });

    // الوظيفة الثانية: الانتقال من صفحة المحترفين إلى صفحة الملف الشخصي
    // نحدد كل الأزرار التي تحمل الفئة 'view-profile-btn'
    const profileButtons = document.querySelectorAll('.view-profile-btn');

    // نمر على كل زر ونضيف له مستمع لحدث "click"
    profileButtons.forEach(button => {
        button.addEventListener('click', function() {
            // عند الضغط على الزر، ننتقل إلى صفحة الملف الشخصي
            window.location.href = 'profile.html';
        });
    });
});