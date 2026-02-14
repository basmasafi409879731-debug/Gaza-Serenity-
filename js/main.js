/*  
===========================================
  1) مصفوفة الأماكن (Places Array)
  - كل مكان عبارة عن كائن يحتوي:
    الاسم – الوصف – الصورة – مستوى الهدوء
===========================================
*/

const places = [
    {
        name: "شاطئ البحر",
        desc: "مكان مثالي للهدوء و سماع صوت الأمواج.",
        img: "assets/images/sea.jpg",
        quiet: "عالي"
    },
    {
        name: "الميناء",
        desc: "مكان جميل للمشي و مشاهدة القوارب.",
        img: "assets/images/port.jfif",
        quiet: "متوسط"
    },
    {
        name: "ممشى الشاطئ",
        desc: "أفضل مكان للمشي وقت الغروب.",
        img: "assets/images/walk.jpg",
        quiet: "عالي"
    },
    {
        name: "منتزه البلدية",
        desc: "مساحة خضراء مريحة للنفس.",
        img: "assets/images/park.webp",
        quiet: "متوسط"
    }
];


/*  
===========================================
  2) تجهيز مكان الكروت داخل الصفحة
===========================================
*/

const cardsGrid = document.getElementById("cardsGrid");
// هذا هو المكان الذي سنضع فيه الكروت

cardsGrid.innerHTML = ""; 
// تفريغ أي محتوى قديم (لو موجود)


/*  
===========================================
  3) بناء الكروت ديناميكيًا بدون jQuery
===========================================
*/

places.forEach((place, index) => {

    // تحديد لون العنوان حسب مستوى الهدوء
    let titleColor = "#4b5563"; // رمادي متوسط
    if (place.quiet === "عالي") titleColor = "#d4af37"; // ذهبي
    if (place.quiet === "متوسط") titleColor = "#1d4ed8"; // أزرق

    // إنشاء عنصر الكرت
    const card = document.createElement("div");
    card.className = "card place-card";
    card.style.opacity = "0"; // لإظهار الأنيميشن لاحقًا

    // محتوى الكرت
    card.innerHTML = `
        <img src="${place.img}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title" style="color:${titleColor};">${place.name}</h5>
            <p class="card-text">${place.desc}</p>
        </div>
    `;

    // إضافة الكرت للشبكة
    cardsGrid.appendChild(card);
});


/*  
===========================================
  4) أنيميشن الظهور التدريجي (Fade In)
===========================================
*/

const cards = document.querySelectorAll(".place-card");

cards.forEach((card, i) => {
    setTimeout(() => {
        card.style.transition = "0.6s";
        card.style.opacity = "1";
    }, i * 200); // كل كرت يتأخر 200ms عن اللي قبله
});


/*  
===========================================
  5) زر تغيير النمط (Dark Mode)
===========================================
*/

document.getElementById("modeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
