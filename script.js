// Products Data - متجر كريستال
// تاريخ التحديث: 2026-05-15
// رقم الهاتف: +218 91 702 1437

const products = [
    // ==========================================
    // إكسسوارات (10 منتجات)
    // ==========================================
    { 
        id: 1, 
        name: "ساعة سويسرية كريستال", 
        category: "accessories", 
        price: 165, 
        oldPrice: 185, 
        image: "images/crystal1.jpg", 
        badge: "bestseller",
        description: "ساعة نسائية سويسرية ذات مظهر راقٍ وأنيق. يتوفر منها 3 ألوان: ذهبي، فضي، ووردي."
    },
    { 
        id: 2, 
        name: "عقد ذهبي مع كريستال", 
        category: "accessories", 
        price: 145, 
        oldPrice: 160, 
        image: "images/crystal-necklace-002.jpg", 
        badge: "new",
        description: "عقد فاخر مطلي بالذهب عيار 18 مع حجر كريستال طبيعي."
    },
    { 
        id: 3, 
        name: "سوار مطعم", 
        category: "accessories", 
        price: 35, 
        oldPrice: 45, 
        image: "images/bracelet-003.jpg", 
        badge: "",
        description: "سوار بلاكيور استرليني 925 مطعم ."
    },
    { 
        id: 4, 
        name: "خاتم زمرد فاخر", 
        category: "accessories", 
        price: 55, 
        oldPrice: 70, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-ring-004.jpg", 
        badge: "",
        description: "خاتم فاخر بفص زمرد طبيعي محاط بالألماس الصناعي."
    },
    { 
        id: 5, 
        name: "طقم إكسسوارات كامل", 
        category: "accessories", 
        price: 120, 
        oldPrice: 150, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-set-005.jpg", 
        badge: "bestseller",
        description: "طقم كامل يتضمن عقد، سوار، أقراط، وخاتم."
    },
    { 
        id: 6, 
        name: "أقراط كريستال ناعمة", 
        category: "accessories", 
        price: 25, 
        oldPrice: 35, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-earrings-006.jpg", 
        badge: "new",
        description: "أقراط ناعمة من كريستال سواروفسكي الأصلي."
    },
    { 
        id: 7, 
        name: "قلادة ذهبية عيار 18", 
        category: "accessories", 
        price: 85, 
        oldPrice: 110, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-pendant-007.jpg", 
        badge: "",
        description: "قلادة ذهبية عيار 18 بتصميم كلاسيكي فاخر."
    },
    { 
        id: 8, 
        name: "إكسسوارات شعر فاخرة", 
        category: "accessories", 
        price: 15, 
        oldPrice: 22, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-hair-008.jpg", 
        badge: "",
        description: "مجموعة إكسسوارات شعر كريستالية للمناسبات الخاصة."
    },
    { 
        id: 9, 
        name: "نظارة شمسية ماركة", 
        category: "accessories", 
        price: 50, 
        oldPrice: 70, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-sunglasses-009.jpg", 
        badge: "new",
        description: "نظارة شمسية بإطار معدني فاخر وحماية UV400."
    },
    { 
        id: 10, 
        name: "محفظة جلد طبيعي", 
        category: "accessories", 
        price: 40, 
        oldPrice: 55, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-wallet-010.jpg", 
        badge: "",
        description: "محفظة يدوية من الجلد الطبيعي الإيطالي الفاخر."
    },

    // ==========================================
    // عطور (10 منتجات)
    // ==========================================
    { 
        id: 11, 
        name: "عطر كريستال الذهبي", 
        category: "perfumes", 
        price: 55, 
        oldPrice: 75, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-perfume-gold-011.jpg", 
        badge: "bestseller",
        description: "عطر فاخر بمزيج من العود والمسك والعنبر."
    },
    { 
        id: 12, 
        name: "عطر المسك الأبيض", 
        category: "perfumes", 
        price: 42, 
        oldPrice: 55, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-perfume-musk-012.jpg", 
        badge: "",
        description: "عطر ناعم بعبق المسك الأبيض النقي والياسمين."
    },
    { 
        id: 13, 
        name: "عطر العود الفاخر", 
        category: "perfumes", 
        price: 75, 
        oldPrice: 95, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-perfume-oud-013.jpg", 
        badge: "new",
        description: "عطر شرقي فاخر بخلاصة العود الكمبودي النادر."
    },
    { 
        id: 14, 
        name: "عطر الورد الطائفي", 
        category: "perfumes", 
        price: 48, 
        oldPrice: 65, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-perfume-rose-014.jpg", 
        badge: "",
        description: "عطر زهري بعبق الورد الطائفي الأصيل والمسك."
    },
    { 
        id: 15, 
        name: "عطر ليلى العربية", 
        category: "perfumes", 
        price: 60, 
        oldPrice: 80, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-perfume-layla-015.jpg", 
        badge: "bestseller",
        description: "عطر عربي أصيل بمزيج من العود والتوت البري والفانيليا."
    },
    { 
        id: 16, 
        name: "عطر البحر الأبيض", 
        category: "perfumes", 
        price: 38, 
        oldPrice: 50, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-perfume-ocean-016.jpg", 
        badge: "new",
        description: "عطر بحري منعش بعبق الليمون والأخشاب البحرية."
    },
    { 
        id: 17, 
        name: "عطر المسك الأسود", 
        category: "perfumes", 
        price: 50, 
        oldPrice: 68, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-perfume-black-017.jpg", 
        badge: "",
        description: "عطر جريء بمزيج المسك الأسود والتوابل الشرقية."
    },
    { 
        id: 18, 
        name: "عطر الياسمين النبيل", 
        category: "perfumes", 
        price: 45, 
        oldPrice: 58, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-perfume-jasmine-018.jpg", 
        badge: "",
        description: "عطر زهري نبيل بعبق الياسمين الهندي والبرغموت."
    },
    { 
        id: 19, 
        name: "عطر الفانيليا الدافئ", 
        category: "perfumes", 
        price: 35, 
        oldPrice: 48, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-perfume-vanilla-019.jpg", 
        badge: "new",
        description: "عطر دافئ وحلو بمزيج الفانيليا المدغشقرية والكراميل."
    },
    { 
        id: 20, 
        name: "عطر الصحراء الذهبية", 
        category: "perfumes", 
        price: 68, 
        oldPrice: 88, 
        image: "https://raw.githubusercontent.com/Uldy-U/crystal-store/main/images/crystal-perfume-desert-020.jpg", 
        badge: "",
        description: "عطر صحراوي فاخر بخلاصة العود والصندل والتوابل."
    }
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
                <p class="product-desc">${product.description}</p>
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

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes('الكل') && category === 'all') btn.classList.add('active');
        if (btn.textContent.includes('إكسسوارات') && category === 'accessories') btn.classList.add('active');
        if (btn.textContent.includes('عطور') && category === 'perfumes') btn.classList.add('active');
    });

    renderProducts(category);

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
        // Also close quick view modal if open
        const quickOverlay = document.getElementById('quickViewOverlay');
        if (quickOverlay && quickOverlay.classList.contains('active')) {
            closeQuickView();
        }
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
    message += `\n*ملاحظة:* يرجى إرسال العنوان التفصيلي واسم العميل\n`;

    const phone = '218917021437';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// ========== QUICK VIEW (Modified) ==========
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Remove any existing overlay
    const existingOverlay = document.getElementById('quickViewOverlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }

    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'quickViewOverlay';
    overlay.className = 'quick-view-overlay';
    overlay.innerHTML = `
        <div class="quick-view-modal">
            <button class="quick-view-close" onclick="closeQuickView()">
                <i class="fas fa-times"></i>
            </button>
            <img src="${product.image}" alt="${product.name}" class="quick-view-image" onerror="this.src='https://via.placeholder.com/600x600/d4a373/ffffff?text=${encodeURIComponent(product.name)}'">
            <div class="quick-view-details">
                <div class="quick-view-category">${product.category === 'accessories' ? 'إكسسوارات' : 'عطور'}</div>
                <h2 class="quick-view-name">${product.name}</h2>
                <p class="quick-view-desc">${product.description}</p>
                <div class="quick-view-price">
                    <span>${product.price} د.ل</span>
                    ${product.oldPrice ? `<span class="quick-view-old-price">${product.oldPrice} د.ل</span>` : ''}
                </div>
                <button class="quick-view-add" onclick="addToCartFromQuickView(${product.id})">
                    <i class="fas fa-shopping-bag"></i> أضف إلى السلة
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    // Activate with slight delay for transition
    setTimeout(() => {
        overlay.classList.add('active');
    }, 10);

    // Close when clicking on overlay background (not the modal itself)
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeQuickView();
        }
    });
}

function addToCartFromQuickView(productId) {
    addToCart(productId);
    closeQuickView();
    // Open cart sidebar after adding
    toggleCart();
}

function closeQuickView() {
    const overlay = document.getElementById('quickViewOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        // Remove after transition (0.3s)
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.remove();
                document.body.style.overflow = '';
            }
        }, 300);
    }
}

// Show Notification
function showNotification(text) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');

    notificationText.textContent = text;
    notification.classList.add('show');

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

    if (nav && nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        menuBtn && !menuBtn.contains(e.target)) {
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
