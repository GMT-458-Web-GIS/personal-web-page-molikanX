// Sayfa kaydırıldıkça animasyonu tetikleyen kod
document.addEventListener("DOMContentLoaded", function() {

    // IntersectionObserver, bir elemanın ekrana girip girmediğini izler
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Ekrana girdiyse 'show' class'ını ekle
                entry.target.classList.add('show');
            } else {
                // İsteğe bağlı: Ekrandan çıkınca animasyonu sıfırla
                // entry.target.classList.remove('show');
            }
        });
    });

    // '.hidden' class'ına sahip tüm elemanları seç
    const hiddenElements = document.querySelectorAll('.hidden');
    
    // Hepsini izlemeye başla
    hiddenElements.forEach((el) => observer.observe(el));
});