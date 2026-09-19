// متجر كريستال - منطق المتجر والسلة
// يعمل في index.html و products.html ويعتمد على products-data.js (يجب تحميله قبل هذا الملف).
// السلة تُحفظ في localStorage على شكل [{ id, qty }] فقط،
// وتُقرأ بيانات المنتج (الاسم، السعر، الصورة) من الكتالوج في كل مرة حتى لا تتعارض الأسعار.

const CART_KEY = 'crystalCart';
const WHATSAPP_PHONE = '218917021437';
const MAX_QTY = 99;
const CATEGORY_LABELS = { accessories: 'إكسسوارات', perfumes: 'عطور' };

let cart = [];          // [{ id, qty }]
let currentFilter = 'all';
let fadeObserver = null;

/* ========== أدوات مساعدة ========== */

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, ch => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
}

// صورة بديلة تُولَّد محلياً (بدون الاعتماد على أي موقع خارجي)
function placeholderImage(name) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e6c39a"/><stop offset="1" stop-color="#d4a373"/></linearGradient></defs>
<rect width="600" height="600" fill="url(#g)"/>
<polygon points="300,190 360,250 300,330 240,250" fill="none" stroke="#fff" stroke-width="10" stroke-linejoin="round" opacity="0.85"/>
<text x="300" y="420" font-family="Cairo, Tahoma, Arial, sans-serif" font-size="36" font-weight="700" fill="#fff" text-anchor="middle">${escapeHtml(name)}</text>
</svg>`;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function getProductById(productId) {
    return allProducts.find(p => p.id === Number(productId)) || null;
}

function productImage(product) {
    return product.image || placeholderImage(product.name);
}

// إذا فشل تحميل أي صورة (ملف غير موجود مثلاً) نستبدلها بالصورة البديلة مرة واحدة فقط
document.addEventListener('error', (event) => {
    const img = event.target;
    if (!img || img.tagName !== 'IMG' || !img.dataset.name || img.dataset.fallback) return;
    img.dataset.fallback = '1';
    img.src = placeholderImage(img.dataset.name);
}, true);

/* ========== السلة (تخزين) ========== */

function loadCartFromStorage() {
    let saved = [];
    try {
        saved = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    } catch (error) {
        saved = [];
    }

    // تنظيف: نقبل فقط منتجات موجودة في الكتالوج وكميات صحيحة، ونجمع المكرر
    const merged = new Map();
    (Array.isArray(saved) ? saved : []).forEach(entry => {
        const id = Number(entry && entry.id);
        const qty = Math.floor(Number(entry && entry.qty));
        if (!getProductById(id) || !(qty > 0)) return;
        merged.set(id, Math.min((merged.get(id) || 0) + qty, MAX_QTY));
    });
    cart = Array.from(merged, ([id, qty]) => ({ id, qty }));
}

function saveCartToStorage() {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (error) {
        // التخزين غير متاح (وضع التصفح الخاص مثلاً): تبقى السلة في الذاكرة طوال الجلسة
    }
}

function getCartDetails() {
    return cart
        .map(item => ({ product: getProductById(item.id), qty: item.qty }))
        .filter(entry => entry.product);
}

/* ========== عرض المنتجات ========== */

function renderProductCard(product) {
    const name = escapeHtml(product.name);
    const badge = product.badge
        ? `<span class="product-badge ${product.badge}">${product.badge === 'bestseller' ? 'الأكثر مبيعاً' : 'جديد'}</span>`
        : '';
    return `
        <div class="product-card fade-in">
            ${badge}
            <div class="product-image">
                <img src="${escapeHtml(productImage(product))}" alt="${name}" data-name="${name}" loading="lazy">
                <div class="product-actions">
                    <button class="action-btn" type="button" onclick="addToCart(${product.id})" title="أضف إلى السلة" aria-label="أضف إلى السلة">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                    <button class="action-btn" type="button" onclick="quickView(${product.id})" title="عرض سريع" aria-label="عرض سريع">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${CATEGORY_LABELS[product.category] || ''}</div>
                <h3 class="product-name">${name}</h3>
                <p class="product-desc">${escapeHtml(product.description)}</p>
                <div class="product-price">
                    <span class="current-price">${product.price} د.ل</span>
                    ${product.oldPrice ? `<span class="old-price">${product.oldPrice} د.ل</span>` : ''}
                </div>
                <button class="add-to-cart" type="button" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-bag"></i>
                    أضف إلى السلة
                </button>
            </div>
        </div>
    `;
}

// الصفحة الرئيسية: المنتجات المميزة مع التصفية
function renderProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const list = filter === 'all'
        ? featuredProducts
        : featuredProducts.filter(p => p.category === filter);

    grid.innerHTML = list.map(renderProductCard).join('');
    observeFadeIns();
}

// صفحة المزيد من المنتجات
function renderExtraProducts() {
    const grid = document.getElementById('moreProductsGrid');
    if (!grid) return;

    grid.innerHTML = extraProducts.map(renderProductCard).join('');
    observeFadeIns();
}

function filterProducts(category) {
    currentFilter = category;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    renderProducts(category);

    const productsSection = document.getElementById('products');
    const header = document.querySelector('header');
    if (productsSection && header) {
        const targetPosition = productsSection.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
}

/* ========== السلة (عمليات) ========== */

function addToCart(productId) {
    const id = Number(productId);
    const product = getProductById(id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty = Math.min(existing.qty + 1, MAX_QTY);
    } else {
        cart.push({ id, qty: 1 });
    }

    saveCartToStorage();
    updateCartUI();
    showNotification(`تم إضافة "${product.name}" إلى السلة`);

    if (navigator.vibrate) navigator.vibrate(50);
}

function updateQty(productId, change) {
    const item = cart.find(entry => entry.id === Number(productId));
    if (!item) return;

    item.qty = Math.min(item.qty + change, MAX_QTY);
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }
    saveCartToStorage();   // كان الحفظ مفقوداً هنا فتضيع الكمية عند تحديث الصفحة
    updateCartUI();
}

function removeFromCart(productId) {
    const id = Number(productId);
    const product = getProductById(id);
    cart = cart.filter(item => item.id !== id);
    saveCartToStorage();
    updateCartUI();
    showNotification(product ? `تم إزالة "${product.name}" من السلة` : 'تم إزالة المنتج');
}

function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    saveCartToStorage();
    updateCartUI();
    showNotification('تم إفراغ السلة');
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    if (!cartCount || !cartItems || !cartTotal) return;

    const details = getCartDetails();
    const totalItems = details.reduce((sum, entry) => sum + entry.qty, 0);
    const totalPrice = details.reduce((sum, entry) => sum + entry.product.price * entry.qty, 0);

    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';

    if (details.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>السلة فارغة</p>
                <p style="font-size: 13px; margin-top: 8px;">أضف منتجات لتبدأ التسوق</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = details.map(({ product, qty }) => {
            const name = escapeHtml(product.name);
            return `
            <div class="cart-item">
                <img src="${escapeHtml(productImage(product))}" alt="${name}" data-name="${name}" class="cart-item-image" loading="lazy">
                <div class="cart-item-details">
                    <div class="cart-item-name">${name}</div>
                    <div class="cart-item-price">${product.price} د.ل</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" type="button" onclick="updateQty(${product.id}, -1)" aria-label="تقليل">-</button>
                        <span class="qty-value">${qty}</span>
                        <button class="qty-btn" type="button" onclick="updateQty(${product.id}, 1)" aria-label="زيادة">+</button>
                    </div>
                </div>
                <button class="remove-item" type="button" onclick="removeFromCart(${product.id})" aria-label="حذف">
                    <i class="fas fa-trash"></i>
                </button>
            </div>`;
        }).join('');
    }

    cartTotal.textContent = totalPrice + ' د.ل';
}

// تزامن السلة بين التبويبات/الصفحات المفتوحة معاً
window.addEventListener('storage', (event) => {
    if (event.key === CART_KEY || event.key === null) {
        loadCartFromStorage();
        updateCartUI();
    }
});

// عند الرجوع للصفحة من زر "رجوع" في المتصفح قد تُعرض نسخة قديمة من الذاكرة المؤقتة
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        loadCartFromStorage();
        updateCartUI();
    }
});

/* ========== الواجهة (سلة، قائمة، تنبيهات) ========== */

function syncBodyScroll() {
    const sidebar = document.getElementById('cartSidebar');
    const cartOpen = !!(sidebar && sidebar.classList.contains('active'));
    const quickOpen = !!document.getElementById('quickViewOverlay');
    document.body.style.overflow = (cartOpen || quickOpen) ? 'hidden' : '';
}

function toggleCart() {
    const overlay = document.getElementById('cartOverlay');
    const sidebar = document.getElementById('cartSidebar');
    if (!overlay || !sidebar) return;

    const willOpen = !sidebar.classList.contains('active');
    overlay.classList.toggle('active', willOpen);
    sidebar.classList.toggle('active', willOpen);
    syncBodyScroll();
}

function toggleMenu() {
    const nav = document.getElementById('mainNav');
    if (nav) nav.classList.toggle('active');
}

function closeMenu() {
    const nav = document.getElementById('mainNav');
    if (nav) nav.classList.remove('active');
}

function showNotification(text) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    if (!notification || !notificationText) return;

    notificationText.textContent = text;
    notification.classList.add('show');

    if (notification.timeoutId) clearTimeout(notification.timeoutId);
    notification.timeoutId = setTimeout(() => notification.classList.remove('show'), 3000);
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            e.preventDefault();

            // الرابط "#" وحده كان يسبب خطأ في querySelector، فنعامله كـ "أعلى الصفحة"
            if (href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const target = document.querySelector(href);
            const header = document.querySelector('header');
            if (target) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
}

function observeFadeIns() {
    const elements = document.querySelectorAll('.fade-in:not(.visible)');
    if (!('IntersectionObserver' in window)) {
        elements.forEach(el => el.classList.add('visible'));
        return;
    }
    if (!fadeObserver) {
        fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    }
    elements.forEach(el => fadeObserver.observe(el));
}

function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        header.style.boxShadow = currentScroll > 50
            ? '0 4px 30px rgba(0,0,0,0.15)'
            : '0 2px 20px rgba(0,0,0,0.08)';

        if (window.innerWidth <= 768) {
            header.style.transform = (currentScroll > lastScroll && currentScroll > 100)
                ? 'translateY(-100%)'
                : 'translateY(0)';
        }

        lastScroll = currentScroll;
    }, { passive: true });
}

/* ========== العرض السريع ========== */

function quickView(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const existingOverlay = document.getElementById('quickViewOverlay');
    if (existingOverlay) existingOverlay.remove();

    const name = escapeHtml(product.name);
    const overlay = document.createElement('div');
    overlay.id = 'quickViewOverlay';
    overlay.className = 'quick-view-overlay';
    overlay.innerHTML = `
        <div class="quick-view-modal">
            <button class="quick-view-close" type="button" onclick="closeQuickView()" aria-label="إغلاق">
                <i class="fas fa-times"></i>
            </button>
            <img src="${escapeHtml(productImage(product))}" alt="${name}" data-name="${name}" class="quick-view-image">
            <div class="quick-view-details">
                <div class="quick-view-category">${CATEGORY_LABELS[product.category] || ''}</div>
                <h2 class="quick-view-name">${name}</h2>
                <p class="quick-view-desc">${escapeHtml(product.description)}</p>
                <div class="quick-view-price">
                    <span>${product.price} د.ل</span>
                    ${product.oldPrice ? `<span class="quick-view-old-price">${product.oldPrice} د.ل</span>` : ''}
                </div>
                <button class="quick-view-add" type="button" onclick="addToCartFromQuickView(${product.id})">
                    <i class="fas fa-shopping-bag"></i> أضف إلى السلة
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    syncBodyScroll();

    setTimeout(() => overlay.classList.add('active'), 10);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeQuickView();
    });
}

function addToCartFromQuickView(productId) {
    addToCart(productId);
    closeQuickView();
    toggleCart();
}

function closeQuickView() {
    const overlay = document.getElementById('quickViewOverlay');
    if (!overlay) return;

    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.remove();
        syncBodyScroll();   // لا نُرجع التمرير إذا كانت السلة ما زالت مفتوحة
    }, 300);
}

/* ========== إتمام الطلب عبر واتساب ========== */

function checkoutWhatsApp() {
    const details = getCartDetails();
    if (details.length === 0) {
        showNotification('السلة فارغة! أضف منتجات أولاً');
        return;
    }

    let message = '*طلب جديد من متجر كريستال*\n\n';
    message += '*المنتجات:*\n';

    details.forEach(({ product, qty }, index) => {
        message += `${index + 1}. ${product.name} (رقم ${product.id}) - ${qty}x - ${product.price * qty} د.ل\n`;
    });

    const total = details.reduce((sum, entry) => sum + entry.product.price * entry.qty, 0);
    message += `\n*المجموع: ${total} د.ل*\n`;
    message += `\n*طريقة الدفع:* الدفع عند الاستلام\n`;
    message += `*الموقع:* طرابلس، ليبيا\n`;
    message += `\n*ملاحظة:* يرجى إرسال العنوان التفصيلي واسم العميل\n`;

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
}

/* ========== أحداث عامة وتشغيل الصفحة ========== */

document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;

    const sidebar = document.getElementById('cartSidebar');
    if (sidebar && sidebar.classList.contains('active')) toggleCart();
    closeMenu();
    closeQuickView();
});

document.addEventListener('click', (e) => {
    const nav = document.getElementById('mainNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    if (nav && nav.classList.contains('active') &&
        !nav.contains(e.target) &&
        menuBtn && !menuBtn.contains(e.target)) {
        closeMenu();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    renderProducts('all');        // الصفحة الرئيسية (إن وُجدت الشبكة)
    renderExtraProducts();        // صفحة المزيد من المنتجات (إن وُجدت الشبكة)
    updateCartUI();
    initSmoothScroll();
    observeFadeIns();
    initHeaderScroll();
});
