// بيانات المنتجات - متجر كريستال
// مصدر واحد لكل المنتجات: الصفحة الرئيسية وصفحة "المزيد من المنتجات" وسلة المشتريات تقرأ من هنا.
//
// قواعد مهمة:
//  - كل منتج له id فريد (1-20 للصفحة الرئيسية، 21-40 لصفحة المزيد). السلة تعتمد على الـ id فقط.
//  - مسارات الصور نسبية (images/اسم-الملف.jpg). إذا لم يوجد الملف تظهر صورة بديلة تلقائياً.
//  - عند إضافة منتج جديد: ضع له id جديداً لم يُستخدم من قبل وأضفه في القائمة المناسبة.

const featuredProducts = [
    { id: 1, name: 'ساعة سويسرية كريستال', category: 'accessories', price: 165, oldPrice: 185, image: 'images/crystal1.jpg', badge: 'bestseller', description: 'ساعة نسائية سويسرية ذات مظهر راقٍ وأنيق. يتوفر منها 3 ألوان: ذهبي، فضي، ووردي.' },
    { id: 2, name: 'عقد ذهبي مع كريستال', category: 'accessories', price: 145, oldPrice: 160, image: 'images/crystal-necklace-002.jpg', badge: 'new', description: 'عقد فاخر مطلي بالذهب عيار 18 مع حجر كريستال طبيعي.' },
    { id: 3, name: 'سوار مع خاتم مطعم', category: 'accessories', price: 65, oldPrice: 75, image: 'images/bracelet-003.jpg', badge: '', description: 'سوار بلاكيور استرليني 925 مطعم .' },
    { id: 4, name: 'خاتم زمرد فاخر', category: 'accessories', price: 55, oldPrice: 70, image: 'images/crystal-ring-004.jpg', badge: '', description: 'خاتم فاخر بفص زمرد طبيعي محاط بالألماس الصناعي.' },
    { id: 5, name: 'طقم إكسسوارات كامل', category: 'accessories', price: 120, oldPrice: 150, image: 'images/set-05.jpg', badge: 'bestseller', description: 'طقم كامل يتضمن عقد، ساعة، أقراط، وخاتم.' },
    { id: 6, name: 'أقراط كريستال ناعمة', category: 'accessories', price: 25, oldPrice: 35, image: 'images/crystal-earrings-006.jpg', badge: 'new', description: 'أقراط ناعمة من كريستال سواروفسكي الأصلي.' },
    { id: 7, name: 'قلادة ذهبية عيار 18', category: 'accessories', price: 85, oldPrice: 110, image: 'images/crystal-pendant-007.jpg', badge: '', description: 'قلادة ذهبية عيار 18 بتصميم كلاسيكي فاخر.' },
    { id: 8, name: 'إكسسوارات شعر فاخرة', category: 'accessories', price: 15, oldPrice: 22, image: 'images/crystal-hair-008.jpg', badge: '', description: 'مجموعة إكسسوارات شعر كريستالية للمناسبات الخاصة.' },
    { id: 9, name: 'نظارة شمسية ماركة', category: 'accessories', price: 50, oldPrice: 70, image: 'images/crystal-sunglasses-009.jpg', badge: 'new', description: 'نظارة شمسية بإطار معدني فاخر وحماية UV400.' },
    { id: 10, name: 'محفظة جلد طبيعي', category: 'accessories', price: 40, oldPrice: 55, image: 'images/crystal-wallet-010.jpg', badge: '', description: 'محفظة يدوية من الجلد الطبيعي الإيطالي الفاخر.' },

    { id: 11, name: 'عطر كريستال الذهبي', category: 'perfumes', price: 55, oldPrice: 75, image: 'images/crystal-perfume-gold-011.jpg', badge: 'bestseller', description: 'عطر فاخر بمزيج من العود والمسك والعنبر.' },
    { id: 12, name: 'عطر المسك الأبيض', category: 'perfumes', price: 42, oldPrice: 55, image: 'images/crystal-perfume-musk-012.jpg', badge: '', description: 'عطر ناعم بعبق المسك الأبيض النقي والياسمين.' },
    { id: 13, name: 'عطر العود الفاخر', category: 'perfumes', price: 75, oldPrice: 95, image: 'images/crystal-perfume-oud-013.jpg', badge: 'new', description: 'عطر شرقي فاخر بخلاصة العود الكمبودي النادر.' },
    { id: 14, name: 'عطر الورد الطائفي', category: 'perfumes', price: 48, oldPrice: 65, image: 'images/FB_IMG_1789449437130.jpg', badge: '', description: 'عطر زهري بعبق الورد الطائفي الأصيل والمسك.' },
    { id: 15, name: 'عطر ليلى العربية', category: 'perfumes', price: 60, oldPrice: 80, image: 'images/crystal-perfume-layla-015.jpg', badge: 'bestseller', description: 'عطر عربي أصيل بمزيج من العود والتوت البري والفانيليا.' },
    { id: 16, name: 'عطر البحر الأبيض', category: 'perfumes', price: 38, oldPrice: 50, image: 'images/crystal-perfume-ocean-016.jpg', badge: 'new', description: 'عطر بحري منعش بعبق الليمون والأخشاب البحرية.' },
    { id: 17, name: 'عطر المسك الأسود', category: 'perfumes', price: 50, oldPrice: 68, image: 'images/crystal-perfume-black-017.jpg', badge: '', description: 'عطر جريء بمزيج المسك الأسود والتوابل الشرقية.' },
    { id: 18, name: 'عطر الياسمين النبيل', category: 'perfumes', price: 45, oldPrice: 58, image: 'images/crystal-perfume-jasmine-018.jpg', badge: '', description: 'عطر زهري نبيل بعبق الياسمين الهندي والبرغموت.' },
    { id: 19, name: 'عطر الفانيليا الدافئ', category: 'perfumes', price: 35, oldPrice: 48, image: 'images/crystal-perfume-vanilla-019.jpg', badge: 'new', description: 'عطر دافئ وحلو بمزيج الفانيليا المدغشقرية والكراميل.' },
    { id: 20, name: 'عطر الصحراء الذهبية', category: 'perfumes', price: 68, oldPrice: 88, image: 'images/crystal-perfume-desert-020.jpg', badge: '', description: 'عطر صحراوي فاخر بخلاصة العود والصندل والتوابل.' }
];

// منتجات صفحة "المزيد من المنتجات": [الاسم، التصنيف، السعر، السعر القديم، الوصف]
const extraProducts = [
    ['سوار كريستال لامع','accessories',320,450,'سوار أنيق مرصع بأحجار لامعة يناسب جميع الإطلالات.'],
    ['خاتم فضي كلاسيكي','accessories',380,520,'خاتم فضي بتصميم ناعم ولمسة عصرية.'],
    ['أقراط اللؤلؤ الأبيض','accessories',280,400,'أقراط راقية من اللؤلؤ الأبيض للمناسبات اليومية.'],
    ['ساعة جلدية أنيقة','accessories',950,1200,'ساعة عملية بسوار من الجلد الطبيعي وتصميم فاخر.'],
    ['حقيبة سهرة صغيرة','accessories',750,950,'حقيبة سهرة أنيقة تضيف لمسة مميزة لإطلالتك.'],
    ['مشبك شعر كريستالي','accessories',180,250,'مشبك شعر مزين بالكريستال لتسريحة أكثر أناقة.'],
    ['طقم أساور ملونة','accessories',420,580,'مجموعة أساور ملونة قابلة للتنسيق معاً.'],
    ['قلادة اللؤلؤ الناعم','accessories',880,1100,'قلادة بتصميم هادئ من اللؤلؤ الصناعي عالي الجودة.'],
    ['حزام نسائي فاخر','accessories',550,700,'حزام أنيق بخامة متينة وإبزيم لامع.'],
    ['محفظة بطاقات جلدية','accessories',300,420,'محفظة صغيرة عملية من الجلد الطبيعي.'],
    ['عطر الياسمين الناعم','perfumes',520,680,'عطر زهري منعش بمزيج الياسمين والحمضيات.'],
    ['عطر العنبر الملكي','perfumes',780,1000,'تركيبة دافئة وفاخرة من العنبر والعود.'],
    ['عطر اللافندر الهادئ','perfumes',440,600,'رائحة هادئة تجمع اللافندر والمسك الأبيض.'],
    ['عطر الفواكه الاستوائية','perfumes',460,620,'مزيج منعش من الفواكه الاستوائية والزهور.'],
    ['عطر خشب الصندل','perfumes',700,900,'عطر شرقي ثابت بخلاصة خشب الصندل الفاخر.'],
    ['عطر التوت الأحمر','perfumes',400,550,'رائحة حلوة وحيوية بلمسة التوت الأحمر.'],
    ['عطر الزعفران الشرقي','perfumes',820,1050,'عطر مركز بنفحات الزعفران والورد والعود.'],
    ['عطر نسيم البحر','perfumes',360,490,'عطر منعش مستوحى من نسيم البحر والليمون.'],
    ['عطر الفانيليا والمسك','perfumes',480,640,'مزيج دافئ من الفانيليا الناعمة والمسك.'],
    ['عطر الورد والمسك','perfumes',580,760,'تركيبة أنثوية ناعمة من الورد والمسك الفاخر.']
].map((item, index) => ({
    id: index + 21,
    name: item[0],
    category: item[1],
    price: item[2],
    oldPrice: item[3],
    description: item[4],
    badge: index % 4 === 0 ? 'new' : '',
    image: '' // ضع هنا مسار الصورة مثل 'images/product-021.jpg' وإلا تظهر صورة بديلة
}));

const allProducts = [...featuredProducts, ...extraProducts];
