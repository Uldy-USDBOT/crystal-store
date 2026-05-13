// Products Data
const products = [
    { id: 1, name: "ساعة كريستال فاخرة", category: "accessories", price: 450, oldPrice: 550, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop", badge: "bestseller" },
    { id: 2, name: "عقد ذهبي مع كريستال", category: "accessories", price: 280, oldPrice: 350, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop", badge: "new" },
    { id: 3, name: "سوار فضي مطعم", category: "accessories", price: 180, oldPrice: 220, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop", badge: "" },
    { id: 4, name: "خاتم زمرد فاخر", category: "accessories", price: 320, oldPrice: 400, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop", badge: "" },
    { id: 5, name: "طقم إكسسوارات كامل", category: "accessories", price: 650, oldPrice: 800, image: "https://images.unsplash.com/photo-1573408301180-04b4c9b8f57e?w=400&h=400&fit=crop", badge: "bestseller" },
    { id: 6, name: "أقراط كريستال ناعمة", category: "accessories", price: 150, oldPrice: 190, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop", badge: "new" },
    { id: 7, name: "قلادة ذهبية عيار 18", category: "accessories", price: 520, oldPrice: 650, image: "https://images.unsplash.com/photo-1515562141124-5e09a8f9b149?w=400&h=400&fit=crop", badge: "" },
    { id: 8, name: "إكسسوارات شعر فاخرة", category: "accessories", price: 95, oldPrice: 120, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop", badge: "" },
    { id: 9, name: "نظارة شمسية ماركة", category: "accessories", price: 380, oldPrice: 480, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop", badge: "new" },
    { id: 10, name: "محفظة جلد طبيعي", category: "accessories", price: 220, oldPrice: 280, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop", badge: "" },
    { id: 11, name: "عطر كريستال الذهبي", category: "perfumes", price: 380, oldPrice: 480, image: "https://images.unsplash.com/photo-1541643600914-78a084bc84e9?w=400&h=400&fit=crop", badge: "bestseller" },
    { id: 12, name: "عطر المسك الأبيض", category: "perfumes", price: 290, oldPrice: 360, image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop", badge: "" },
    { id: 13, name: "عطر العود الفاخر", category: "perfumes", price: 550, oldPrice: 700, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop", badge: "new" },
    { id: 14, name: "عطر الورد الطائفي", category: "perfumes", price: 320, oldPrice: 400, image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop", badge: "" },
    { id: 15, name: "عطر ليلى العربية", category: "perfumes", price: 420, oldPrice: 520, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop", badge: "bestseller" },
    { id: 16, name: "عطر البحر الأبيض", category: "perfumes", price: 260, oldPrice: 330, image: "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?w=400&h=400&fit=crop", badge: "new" },
    { id: 17, name: "عطر المسك الأسود", category: "perfumes", price: 340, oldPrice: 430, image: "https://images.unsplash.com/photo-1557170334-a9632e77a71e?w=400&h=400&fit=crop", badge: "" },
    { id: 18, name: "عطر الياسمين النبيل", category: "perfumes", price: 300, oldPrice: 380, image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?w=400&h=400&fit=crop", badge: "" },
    { id: 19, name: "عطر الفانيليا الدافئ", category: "perfumes", price: 240, oldPrice: 300, image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=400&fit=crop", badge: "new" },
    { id: 20, name: "عطر الصحراء الذهبية", category: "perfumes", price: 480, oldPrice: 600, image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400&h=400&fit=crop", badge: "" }
];

let cart = [];
let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts('all');
    updateCartUI();
    initSmoothScroll();
    initScrollAnimations();
    initHeaderScroll();
});

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Header Scroll Effect
function initHeaderScroll() {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        }

        // Hide/show header on scroll (mobile)
        if (window.innerWidth <= 768) {
            if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }

        lastScroll = currentScroll;
    });
}

// Render Products
function renderProducts(filter) {
    const grid = document.getElementById('productsGrid');
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    grid.innerHTML = filtered.map(product => `
        <div class="product-card fade-in">
            ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'bestseller' ? 'الأكثر مبيعاً' : 'جديد'}</span>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400/d4a373/ffffff?text=${encodeURIComponent(product.name)}'">
                <div class="product-actions">
                    <button class="action-btn" onclick="addToCart(${product.id})" title="أضف إلى السلة" aria-label="أضف إلى السلة">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                    <button class="action-btn" onclick="quickView(${product.id})" title="عرض سريع" aria-label="عرض سريع">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category === 'accessories' ? 'إكسسوارات' : 'عطور'}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">${product.price} د.ل</span>
                    ${product.oldPrice ? `<span class="old-price">${product.oldPrice} د.ل</span>` : ''}
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-bag"></i>
                    أضف إلى السلة
                </button>
            </div>
        </div>
    `).join('');

    // Re-observe new elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Filter Products
function filterProducts(category) {
    currentFilter = category;

    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes('الكل') && category === 'all') btn.classList.add('active');
        if (btn.textContent.includes('إكسسوارات') && category === 'accessories') btn.classList.add('active');
        if (btn.textContent.includes('عطور') && category === 'perfumes') btn.classList.add('active');
    });

    renderProducts(category);

    // Scroll to products
    const productsSection = document.getElementById('products');
    const headerHeight = document.querySelector('header').offsetHeight;
    const targetPosition = productsSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    showNotification(`تم إضافة "${product.name}" إلى السلة`);

    // Haptic feedback on mobile
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

// Update Cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>السلة فارغة</p>
                <p style="font-size: 13px; margin-top: 8px;">أضف منتجات لتبدأ التسوق</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price} د.ل</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateQty(${item.id}, -1)" aria-label="تقليل">-</button>
                        <span class="qty-value">${item.qty}</span>
                        <button class="qty-btn" onclick="updateQty(${item.id}, 1)" aria-label="زيادة">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})" aria-label="حذف">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    cartTotal.textContent = totalPrice + ' د.ل';
}

// Update Quantity
function updateQty(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Remove from Cart
function removeFromCart(productId) {
    const item = cart.find(item => item.id === productId);
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showNotification(item ? `تم إزالة "${item.name}" من السلة` : 'تم إزالة المنتج');
}

// Clear Cart
function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    updateCartUI();
    showNotification('تم إفراغ السلة');
}

// Toggle Cart
function toggleCart() {
    const overlay = document.getElementById('cartOverlay');
    const sidebar = document.getElementById('cartSidebar');
    const isOpen = sidebar.classList.contains('active');

    if (isOpen) {
        overlay.classList.remove('active');
        sidebar.classList.remove('active');
        document.body.style.overflow = '';
    } else {
        overlay.classList.add('active');
        sidebar.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Toggle Menu
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}

// Close Menu
function closeMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.remove('active');
}

// Close cart on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const sidebar = document.getElementById('cartSidebar');
        if (sidebar.classList.contains('active')) {
            toggleCart();
        }
        closeMenu();
    }
});

// Checkout via WhatsApp
function checkoutWhatsApp() {
    if (cart.length === 0) {
        showNotification('السلة فارغة! أضف منتجات أولاً');
        return;
    }

    let message = '*طلب جديد من متجر كريستال*\n\n';
    message += '*المنتجات:*\n';

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ${item.qty}x - ${item.price * item.qty} د.ل\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    message += `\n*المجموع: ${total} د.ل*\n`;
    message += `\n*طريقة الدفع:* الدفع عند الاستلام\n`;
    message += `*الموقع:* طرابلس، ليبيا\n`;
    message += `\n*ملاحظة:* يرجى إرسال العنوان التفصيلي ورقم العميل\n`;

    const phone = '218917021437';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Quick View
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    showNotification(`${product.name} - ${product.price} د.ل`);
}

// Show Notification
function showNotification(text) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');

    notificationText.textContent = text;
    notification.classList.add('show');

    // Clear existing timeout
    if (notification.timeoutId) {
        clearTimeout(notification.timeoutId);
    }

    notification.timeoutId = setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.getElementById('mainNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    if (nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !menuBtn.contains(e.target)) {
        closeMenu();
    }
});

// Prevent zoom on double tap (mobile)
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);
