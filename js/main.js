/*  
===========================================
  1) مصفوفة الأماكن (Places Array)
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

$("#cardsGrid").html(""); 
// تفريغ الشبكة قبل إضافة الكروت


/*  
===========================================
  3) بناء الكروت باستخدام jQuery
===========================================
*/

places.forEach((place, index) => {

    // تحديد لون العنوان حسب مستوى الهدوء
    let titleColor = "#4b5563";
    if (place.quiet === "عالي") titleColor = "#d4af37";
    if (place.quiet === "متوسط") titleColor = "#1d4ed8";

    // إنشاء الكرت
    const card = $(`
        <div class="card place-card" style="opacity:0;">
            <img src="${place.img}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title" style="color:${titleColor};">${place.name}</h5>
                <p class="card-text">${place.desc}</p>
            </div>
        </div>
    `);

    // إضافة الكرت للشبكة
    $("#cardsGrid").append(card);
});


/*  
===========================================
  4) أنيميشن الظهور التدريجي باستخدام jQuery
===========================================
*/

$(".place-card").each(function(i){
    $(this).delay(i * 200).animate({ opacity: 1 }, 600);
});


/*  
===========================================
  5) زر تغيير النمط (Dark Mode) باستخدام jQuery
===========================================
*/

$("#modeBtn").on("click", function () {
    $("body").toggleClass("dark-mode");
});
