document.addEventListener('DOMContentLoaded', function() {
    // تحديد عنصر الفاصل (الشق) باستخدام الـ class الخاص به
    const separatorWave = document.querySelector('.separator-wave');

    // تحديد سرعة الحركة (يمكنك تغييرها للتحكم في السرعة)
    const speed = 0.05; // كلما كان الرقم أصغر، كانت الحركة أبطأ وأكثر سلاسة

    // متغير لتتبع موضع الحركة
    let position = 0;

    // دالة لتحديث موضع الفاصل
    function updateWave() {
        // تحديث الموضع بزيادة ثابتة
        position += speed;

        // تطبيق التحريك الأفقي باستخدام `translateX`
        // نستخدم `Math.sin` لإنشاء حركة تموج طبيعية
        const waveOffset = Math.sin(position) * 10; // قيمة 10 تحدد ارتفاع التموج
        
        // تطبيق التحويل على العنصر لجعله يتحرك
        separatorWave.style.transform = `translateY(${waveOffset}px)`;

        // استدعاء الدالة بشكل متكرر لإنشاء الحركة
        requestAnimationFrame(updateWave);
    }

    // بدء الحركة عند تحميل الصفحة
    updateWave();
});