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
    id: index + 21, name: item[0], category: item[1], price: item[2], oldPrice: item[3], description: item[4],
    badge: index % 4 === 0 ? 'new' : '',
    image: `https://via.placeholder.com/600x600/d4a373/ffffff?text=${encodeURIComponent(item[0])}`
}));

const CART_KEY = 'crystalCart';
const categoryNames = { accessories: 'إكسسوارات', perfumes: 'عطور' };
const grid = document.getElementById('moreProductsGrid');

function readCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
    catch (error) { return []; }
}

function addToCart(product) {
    const cart = readCart();
    const item = cart.find(entry => entry.id === product.id);
    if (item) item.qty += 1;
    else cart.push({ ...product, qty: 1 });
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event('storage'));
    alert(`تم إضافة "${product.name}" إلى السلة`);
}

if (grid) {
    grid.innerHTML = extraProducts.map(product => `
        <article class="product-card">
            ${product.badge ? '<span class="product-badge new">جديد</span>' : ''}
            <div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy"></div>
            <div class="product-info">
                <div class="product-category">${categoryNames[product.category]}</div>
                <h2 class="product-name">${product.name}</h2>
                <p class="product-desc">${product.description}</p>
                <div class="product-price"><span class="current-price">${product.price} د.ل</span><span class="old-price">${product.oldPrice} د.ل</span></div>
                <button class="add-to-cart" type="button" data-product-id="${product.id}"><i class="fas fa-shopping-bag"></i> أضف إلى السلة</button>
            </div>
        </article>
    `).join('');

    grid.addEventListener('click', event => {
        const button = event.target.closest('[data-product-id]');
        if (!button) return;
        const product = extraProducts.find(item => item.id === Number(button.dataset.productId));
        if (product) addToCart(product);
    });
}
