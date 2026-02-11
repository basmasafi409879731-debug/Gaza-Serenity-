/*  
===========================================
   1) مصفوفة الأماكن (Array)
   هنا نخزن بيانات كل مكان داخل كائن (Object)
   وكل كائن يحتوي: اسم – وصف – صورة – مستوى الهدوء
===========================================
*/

let places = [
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
   2) عرض الكروت باستخدام Loop
   - نجيب مكان الكروت من قسم #spots
   - نفرّغ الكروت القديمة
   - نستخدم forEach لعرض كل مكان تلقائيًا
===========================================
*/

let cardsContainer = $("#spots .row"); 
// نستهدف صف الكروت داخل قسم الأماكن

cardsContainer.html(""); 
// تفريغ الكروت المكتوبة يدويًا

places.forEach(place => {
    // لكل عنصر داخل المصفوفة… أنشئ كرت جديد

    let card = `
        <div class="col-md-3">
            <div class="card shadow-sm place-card" style="display:none;">
                <img src="${place.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${place.name}</h5>
                    <p class="card-text">${place.desc}</p>
                </div>
            </div>
        </div>
    `;

    cardsContainer.append(card);
    // نضيف الكرت داخل الصفحة
});


/*  
===========================================
   3) شرط (Condition)
   - لو مستوى الهدوء "عالي" → نخلي العنوان ذهبي
   - لو "متوسط" → نخليه أزرق
===========================================
*/

$(".place-card").each(function(index){

    // نجيب مستوى الهدوء من المصفوفة
    let level = places[index].quiet;

    if (level === "عالي") {
        // لو المكان هادئ جدًا → لون ذهبي
        $(this).find(".card-title").css("color", "#d4af37");
    } 
    else if (level === "متوسط") {
        // لو الهدوء متوسط → لون أزرق
        $(this).find(".card-title").css("color", "#1d4ed8");
    }
});



/*  
===========================================
   4) Animation (Fade)
   - نخلي الكروت تظهر تدريجيًا بشكل جميل
   - كل كرت يتأخر 200ms عن اللي قبله
===========================================
*/

$(".place-card").each(function(i){
    $(this).delay(i * 200).fadeIn(600);
});


/*  
===========================================
   5) زر تغيير النمط (Dark Mode)
   - عند الضغط على الزر → نضيف/نحذف كلاس dark-mode
===========================================
*/

$("#modeBtn").click(function () {
    $("body").toggleClass("dark-mode");
});
