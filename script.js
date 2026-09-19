// Load the original storefront logic, then add the separate products-page link.
(function () {
    const legacyScript = document.createElement('script');
    legacyScript.src = 'https://raw.githubusercontent.com/Uldy-USDBOT/crystal-store/a0d21a46963c06ceb7f813c7614ba6d54c9e76af/script.js';
    legacyScript.onload = function () {
        const productsSection = document.querySelector('#products .products-container');
        if (!productsSection || document.getElementById('moreProductsLink')) return;
        const link = document.createElement('a');
        link.id = 'moreProductsLink';
        link.href = 'products.html';
        link.target = '_self';
        link.className = 'btn-primary more-products-link';
        link.innerHTML = '<i class="fas fa-layer-group"></i> مزيد من المنتجات';
        link.style.cssText = 'display:flex;width:max-content;margin:30px auto 0;';
        productsSection.appendChild(link);
    };
    document.head.appendChild(legacyScript);
})();
