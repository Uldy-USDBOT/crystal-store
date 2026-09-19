const extraProducts = [
    ['سوار كريستال لامع','accessories',32,45,'سوار أنيق مرصع بأحجار لامعة يناسب جميع الإطلالات.'],
    ['خاتم فضي كلاسيكي','accessories',38,52,'خاتم فضي بتصميم ناعم ولمسة عصرية.'],
    ['أقراط اللؤلؤ الأبيض','accessories',28,40,'أقراط راقية من اللؤلؤ الأبيض للمناسبات اليومية.'],
    ['ساعة جلدية أنيقة','accessories',95,120,'ساعة عملية بسوار من الجلد الطبيعي وتصميم فاخر.'],
    ['حقيبة سهرة صغيرة','accessories',75,95,'حقيبة سهرة أنيقة تضيف لمسة مميزة لإطلالتك.'],
    ['مشبك شعر كريستالي','accessories',18,25,'مشبك شعر مزين بالكريستال لتسريحة أكثر أناقة.'],
    ['طقم أساور ملونة','accessories',42,58,'مجموعة أساور ملونة قابلة للتنسيق معاً.'],
    ['قلادة اللؤلؤ الناعم','accessories',88,110,'قلادة بتصميم هادئ من اللؤلؤ الصناعي عالي الجودة.'],
    ['حزام نسائي فاخر','accessories',55,70,'حزام أنيق بخامة متينة وإبزيم لامع.'],
    ['محفظة بطاقات جلدية','accessories',30,42,'محفظة صغيرة عملية من الجلد الطبيعي.'],
    ['عطر الياسمين الناعم','perfumes',52,68,'عطر زهري منعش بمزيج الياسمين والحمضيات.'],
    ['عطر العنبر الملكي','perfumes',78,100,'تركيبة دافئة وفاخرة من العنبر والعود.'],
    ['عطر اللافندر الهادئ','perfumes',44,60,'رائحة هادئة تجمع اللافندر والمسك الأبيض.'],
    ['عطر الفواكه الاستوائية','perfumes',46,62,'مزيج منعش من الفواكه الاستوائية والزهور.'],
    ['عطر خشب الصندل','perfumes',70,90,'عطر شرقي ثابت بخلاصة خشب الصندل الفاخر.'],
    ['عطر التوت الأحمر','perfumes',40,55,'رائحة حلوة وحيوية بلمسة التوت الأحمر.'],
    ['عطر الزعفران الشرقي','perfumes',82,105,'عطر مركز بنفحات الزعفران والورد والعود.'],
    ['عطر نسيم البحر','perfumes',36,49,'عطر منعش مستوحى من نسيم البحر والليمون.'],
    ['عطر الفانيليا والمسك','perfumes',48,64,'مزيج دافئ من الفانيليا الناعمة والمسك.'],
    ['عطر الورد والمسك','perfumes',58,76,'تركيبة أنثوية ناعمة من الورد والمسك الفاخر.']
].map((item, index) => ({
    id: index + 21, name: item[0], category: item[1], price: item[2], oldPrice: item[3], description: item[4],
    badge: index % 4 === 0 ? 'new' : '',
    image: `https://via.placeholder.com/600x600/d4a373/ffffff?text=${encodeURIComponent(item[0])}`
}));

const categoryNames = { accessories: 'إكسسوارات', perfumes: 'عطور' };
const grid = document.getElementById('moreProductsGrid');
grid.innerHTML = extraProducts.map(product => `
    <article class="product-card">
        ${product.badge ? '<span class="product-badge new">جديد</span>' : ''}
        <div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy"></div>
        <div class="product-info">
            <div class="product-category">${categoryNames[product.category]}</div>
            <h2 class="product-name">${product.name}</h2>
            <p class="product-desc">${product.description}</p>
            <div class="product-price"><span class="current-price">${product.price} د.ل</span><span class="old-price">${product.oldPrice} د.ل</span></div>
            <a class="add-to-cart" href="https://wa.me/218917021437?text=${encodeURIComponent(`مرحباً، أريد طلب ${product.name} بسعر ${product.price} د.ل`)}" target="_blank"><i class="fab fa-whatsapp"></i> اطلب عبر واتساب</a>
        </div>
    </article>
`).join('');
