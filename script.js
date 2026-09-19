// Homepage storefront logic is kept in the stable homepage revision.
// This loader prevents the products page data from replacing the homepage app.
(function () {
    if (document.getElementById('productsGrid')) {
        const homepageScript = document.createElement('script');
        homepageScript.src = 'https://raw.githubusercontent.com/Uldy-USDBOT/crystal-store/54e7965d5277af6c12797893e8279b31e5c43ce1/script.js';
        document.head.appendChild(homepageScript);
    }
})();
