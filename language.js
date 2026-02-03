// language.js - Translation system for Clicksplore

const translations = {
  en: {
    // Navigation
    categories: "Categories",
    home: "Clicksplore",
    services: "Services",
    how_it_works: "How it Works",
    reviews: "Reviews",
    contact: "Contact",
    
    // Hero section
    hero_title: "Get <span class='highlight'>Premium Subscriptions</span><br/>at Fraction Cost",
    hero_subtitle: "Access Netflix, Spotify, Disney+, and more through secure shared accounts. Save up to 75% with full premium features.",
    hero_cta: "Get Netflix for $3.99/mo",
    
    // Services section
    services_title: "Premium Services Available",
    select_duration: "Select Duration:",
    month: "Month",
    months: "Months",
    save: "Save",
    duration_notice: "Please select a subscription duration above before adding items to your cart. Prices will adjust automatically based on your selection.",
    no_services: "No services found",
    try_different_search: "Try a different search term",
    try_another_category: "Try another category or search.",
    duration_only_1_month: "{count} service(s) only available for 1-month subscriptions. Select \"1 Month\" to see all services.",
    no_services_duration: "No services available for {duration} month(s)",
    try_1_month: "Try selecting \"1 Month\" to see all available services.",
    
    // How it works
    hiw_title: "How Clicksplore Works",
    step1_title: "Choose Your Service",
    step1_desc: "Pick streaming, music, software, or VPN – we've got you covered.",
    step2_title: "Secure Checkout",
    step2_desc: "Pay safely. Your payment is encrypted and protected.",
    step3_title: "Instant Access",
    step3_desc: "Start enjoying your premium plan within minutes.",
    
    // Testimonials
    testimonials_title: "What Our Users Say",
    testimonial_text: "\"Clicksplore saved me over $200 this year! The setup was instant and everything works perfectly.\"",
    testimonial_author: "– Sarah M., Premium User",
    
    // Badges
    badges_title: "Why Trust Clicksplore?",
    badge1: "SSL Secured",
    badge2: "Secure Payments",
    badge3: "30-Day Refund",
    badge4: "24/7 Support",
    badge5: "50k+ Users",
    
    // Footer
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    support: "Support",
    about: "About Us",
    faq: "FAQ",
    copyright: "© 2025 Clicksplore. All rights reserved. | Secure, Affordable, Trusted.",
    
    // Auth
    login_title: "Login to Clicksplore",
    signup_title: "Create Account",
    email_placeholder: "Email address",
    name_placeholder: "Full name",
    password_placeholder: "Password",
    login_button: "Continue",
    signup_button: "Create Account",
    no_account: "Don't have an account?",
    has_account: "Already have an account?",
    create_one: "Create one",
    login_link: "Log in",
    
    // Cart
    cart_title: "Your Cart",
    cart_empty: "Your cart is empty.",
    cart_total: "Total:",
    checkout_button: "Proceed to Checkout",
    cart_remove: "Remove",
    cart_decrease: "Decrease quantity",
    cart_increase: "Increase quantity",
    cart_item_price: "${price} for {duration} month(s)",
    please_login_cart: "Please login to view your cart",
    
    // Search
    search_placeholder: "Search for services, software, subscriptions…",
    search_button: "Search",
    search_results: "Search Results",
    search_found: "Found {count} result(s)",
    search_clear: "Clear Search",
    
    // User menu
    profile: "Profile",
    account: "Account",
    logout: "Sign Out",
    
    // Product cards
    add_to_cart: "Add to Cart",
    please_login: "Please login to add to cart",
    shared_account: "Shared",
    private_account: "Private",
    max_users: "Max {count}",
    regular_price: "regular price",
    total: "/total",
    
    // Toast messages
    added_to_cart: "Added {product} to cart",
    login_to_cart: "Please login to add items to cart",
    language_changed: "Language changed to {lang}",
    search_prompt: "Type something to search",
    search_results_count: "Found {count} result(s) for \"{query}\"",
    no_results: "No results for \"{query}\"",
    welcome_back: "Welcome back!",
    account_created: "Account created! Please check your email for verification.",
    invalid_email: "Enter a valid email",
    short_password: "Password must be at least 6 characters",
    auth_failed: "Authentication failed",
    invalid_credentials: "Invalid email or password",
    logged_out: "Logged out successfully",
    session_expired: "Session expired. Please login again.",
    item_removed: "Removed from cart",
    update_failed: "Failed to update",
    remove_failed: "Failed to remove",
    checkout_redirect: "Redirecting to checkout...",
    empty_cart: "Your cart is empty",
    product_not_found: "Product not found",
    failed_add_cart: "Failed to add to cart",
    failed_load_products: "Failed to load products",
    supabase_not_configured: "Supabase not configured",
    
    // Duration options
    "1_month": "1 Month",
    "3_months": "3 Months",
    "6_months": "6 Months",
    "12_months": "12 Months",
  },
  ar: {
    // Navigation
    categories: "الفئات",
    home: "Clicksplore",
    services: "الخدمات",
    how_it_works: "كيف تعمل",
    reviews: "التقييمات",
    contact: "اتصل بنا",
    
    // Hero section
    hero_title: "احصل على <span class='highlight'>اشتراكات مميزة</span><br/>بجزء بسيط من التكلفة",
    hero_subtitle: "استخدم Netflix وSpotify وDisney+ والمزيد من خلال حسابات مشتركة آمنة. وفر حتى 75% مع جميع الميزات المميزة.",
    hero_cta: "احصل على Netflix بسعر 3.99 دولار/شهر",
    
    // Services section
    services_title: "الخدمات المميزة المتاحة",
    select_duration: "اختر المدة:",
    month: "شهر",
    months: "أشهر",
    save: "وفر",
    duration_notice: "يرجى اختيار مدة الاشتراك أعلاه قبل إضافة العناصر إلى سلة التسوق. ستتغير الأسعار تلقائيًا بناءً على اختيارك.",
    no_services: "لم يتم العثور على خدمات",
    try_different_search: "جرب مصطلح بحث مختلف",
    try_another_category: "جرب فئة أخرى أو ابحث.",
    duration_only_1_month: "{count} خدمة متاحة فقط للاشتراكات الشهرية. حدد \"1 شهر\" لرؤية جميع الخدمات.",
    no_services_duration: "لا توجد خدمات متاحة لمدة {duration} شهر(أشهر)",
    try_1_month: "حاول تحديد \"1 شهر\" لرؤية جميع الخدمات المتاحة.",
    
    // How it works
    hiw_title: "كيف تعمل Clicksplore",
    step1_title: "اختر الخدمة",
    step1_desc: "اختر من بين خدمات البث والموسيقى والبرامج أو VPN - لدينا كل ما تحتاجه.",
    step2_title: "الدفع الآمن",
    step2_desc: "ادفع بأمان. عملية الدفع مشفرة ومحمية.",
    step3_title: "وصول فوري",
    step3_desc: "ابدأ في الاستمتاع بخطتك المميزة خلال دقائق.",
    
    // Testimonials
    testimonials_title: "ما يقوله مستخدمونا",
    testimonial_text: "\"وفرت لي Clicksplore أكثر من 200 دولار هذا العام! كانت الإعدادات فورية وكل شيء يعمل بشكل مثالي.\"",
    testimonial_author: "– سارة م، مستخدمة مميزة",
    
    // Badges
    badges_title: "لماذا تثق في Clicksplore؟",
    badge1: "محمي ببروتوكول SSL",
    badge2: "مدفوعات آمنة",
    badge3: "استرداد خلال 30 يوم",
    badge4: "دعم على مدار 24/7",
    badge5: "أكثر من 50 ألف مستخدم",
    
    // Footer
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    support: "الدعم",
    about: "من نحن",
    faq: "الأسئلة الشائعة",
    copyright: "© 2025 Clicksplore. جميع الحقوق محفوظة. | آمن، ميسور التكلفة، موثوق.",
    
    // Auth
    login_title: "تسجيل الدخول إلى Clicksplore",
    signup_title: "إنشاء حساب",
    email_placeholder: "البريد الإلكتروني",
    name_placeholder: "الاسم الكامل",
    password_placeholder: "كلمة المرور",
    login_button: "متابعة",
    signup_button: "إنشاء حساب",
    no_account: "ليس لديك حساب؟",
    has_account: "هل لديك حساب بالفعل؟",
    create_one: "إنشاء واحد",
    login_link: "تسجيل الدخول",
    
    // Cart
    cart_title: "سلة التسوق الخاصة بك",
    cart_empty: "سلة التسوق الخاصة بك فارغة.",
    cart_total: "المجموع:",
    checkout_button: "المتابعة إلى الدفع",
    cart_remove: "إزالة",
    cart_decrease: "تقليل الكمية",
    cart_increase: "زيادة الكمية",
    cart_item_price: "${price} لمدة {duration} شهر(أشهر)",
    please_login_cart: "يرجى تسجيل الدخول لعرض سلة التسوق",
    
    // Search
    search_placeholder: "ابحث عن الخدمات، البرامج، الاشتراكات…",
    search_button: "بحث",
    search_results: "نتائج البحث",
    search_found: "تم العثور على {count} نتيجة",
    search_clear: "مسح البحث",
    
    // User menu
    profile: "الملف الشخصي",
    account: "الحساب",
    logout: "تسجيل الخروج",
    
    // Product cards
    add_to_cart: "أضف إلى السلة",
    please_login: "يرجى تسجيل الدخول لإضافة إلى السلة",
    shared_account: "مشترك",
    private_account: "خاص",
    max_users: "الحد الأقصى {count}",
    regular_price: "السعر العادي",
    total: "/الإجمالي",
    
    // Toast messages
    added_to_cart: "تمت إضافة {product} إلى السلة",
    login_to_cart: "يرجى تسجيل الدخول لإضافة العناصر إلى السلة",
    language_changed: "تم تغيير اللغة إلى {lang}",
    search_prompt: "اكتب شيئًا للبحث",
    search_results_count: "تم العثور على {count} نتيجة لـ \"{query}\"",
    no_results: "لا توجد نتائج لـ \"{query}\"",
    welcome_back: "مرحبًا بعودتك!",
    account_created: "تم إنشاء الحساب! يرجى التحقق من بريدك الإلكتروني للتأكيد.",
    invalid_email: "أدخل بريدًا إلكترونيًا صالحًا",
    short_password: "يجب أن تكون كلمة المرور 6 أحرف على الأقل",
    auth_failed: "فشل المصادقة",
    invalid_credentials: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
    logged_out: "تم تسجيل الخروج بنجاح",
    session_expired: "انتهت الجلسة. يرجى تسجيل الدخول مرة أخرى.",
    item_removed: "تمت الإزالة من السلة",
    update_failed: "فشل التحديث",
    remove_failed: "فشل الإزالة",
    checkout_redirect: "التوجيه إلى الدفع...",
    empty_cart: "سلة التسوق الخاصة بك فارغة",
    product_not_found: "المنتج غير موجود",
    failed_add_cart: "فشل الإضافة إلى السلة",
    failed_load_products: "فشل تحميل المنتجات",
    supabase_not_configured: "Supabase غير مهيأ",
    
    // Duration options
    "1_month": "1 شهر",
    "3_months": "3 أشهر",
    "6_months": "6 أشهر",
    "12_months": "12 شهر",
  }
};

// Language Manager
const LanguageManager = {
  // Initialize language on page load
  init: function() {
    // Try to get language from various sources in order of priority
    let lang = null;
    
    // 1. Check URL parameter (highest priority)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('lang')) {
      lang = urlParams.get('lang');
    }
    
    // 2. Check localStorage
    if (!lang) {
      lang = localStorage.getItem('click_lang');
    }
    
    // 3. Check browser language
    if (!lang) {
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang.startsWith('ar')) {
        lang = 'ar';
      } else {
        lang = 'en'; // default
      }
    }
    
    // Apply the language
    if (translations[lang]) {
      this.setLanguage(lang, false); // false = don't show toast
    } else {
      this.setLanguage('en', false); // fallback to English
    }
  },
  
  // Set language and persist it
  setLanguage: function(langCode, showToast = true) {
    if (!translations[langCode]) return false;
    
    // Update state if it exists
    if (typeof state !== 'undefined') {
      state.lang = langCode;
    }
    
    // Store in localStorage for persistence across pages
    localStorage.setItem('click_lang', langCode);
    
    // Update UI direction for RTL languages
    if (langCode === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
    
    // Update all translatable elements
    this.updateUIText();
    
    // Update current language indicator
    const currentLangEl = document.getElementById('currentLang');
    if (currentLangEl) {
      currentLangEl.textContent = langCode.toUpperCase();
    }
    
    // Close language menu
    const langMenu = document.getElementById('langMenu');
    if (langMenu) {
      langMenu.classList.remove('show');
    }
    
    // Show notification if requested
    if (showToast && typeof toast !== 'undefined') {
      const langName = langCode === 'en' ? 'English' : 'العربية';
      toast(this.translate('language_changed', {lang: langName}));
    }
    
    // Dispatch event so other components can react to language change
    window.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: langCode }
    }));
    
    return true;
  },
  
  // Function to translate text with placeholders
  translate: function(key, params = {}) {
    const lang = localStorage.getItem('click_lang') || 'en';
    let text = translations[lang][key] || translations['en'][key] || key;
    
    // Replace placeholders
    Object.keys(params).forEach(param => {
      text = text.replace(`{${param}}`, params[param]);
    });
    
    return text;
  },
  
  // Update navigation links to preserve language
  updateNavigationLinks: function() {
    const lang = localStorage.getItem('click_lang') || 'en';
    if (lang === 'en') return; // Default language doesn't need parameter
    
    document.querySelectorAll('a:not([href^="#"]):not([href^="javascript:"]):not([href*="lang="])').forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.includes('lang=')) {
        const separator = href.includes('?') ? '&' : '?';
        link.setAttribute('href', `${href}${separator}lang=${lang}`);
      }
    });
  },
  
  // Update all UI text elements
  updateUIText: function() {
    const t = this.translate;
    
    // Navigation
    this.updateElementText('#catsBtn i.fa-bars + span', 'categories');
    this.updateElementText('nav a[href="#home"]', 'home');
    this.updateElementText('nav a[href="#services"]', 'services');
    this.updateElementText('nav a[href="#how"]', 'how_it_works');
    this.updateElementText('nav a[href="#testimonials"]', 'reviews');
    this.updateElementText('nav a[href="contact.html"]', 'contact');
    
    // Hero section
    this.updateElementHTML('.hero h1', 'hero_title');
    this.updateElementText('.hero p', 'hero_subtitle');
    this.updateElementText('.cta', 'hero_cta');
    
    // Services section
    this.updateElementText('.section-title', 'services_title');
    this.updateElementText('.duration-filter-label', 'select_duration');
    this.updateElementText('.duration-btn[data-duration="1"] .duration-text', '1_month');
    this.updateElementText('.duration-btn[data-duration="3"] .duration-text', '3_months');
    this.updateElementText('.duration-btn[data-duration="6"] .duration-text', '6_months');
    this.updateElementText('.duration-btn[data-duration="12"] .duration-text', '12_months');
    this.updateElementText('.duration-notice', 'duration_notice');
    
    // Update duration savings text
    document.querySelectorAll('.duration-savings').forEach((el, index) => {
      const durations = [1, 3, 6, 12];
      const savings = [0, 10, 15, 20];
      if (index < savings.length && savings[index] > 0) {
        el.textContent = t('save') + ` ${savings[index]}%`;
      }
    });
    
    // How it works section
    this.updateElementText('#how .section-title', 'hiw_title');
    this.updateElementText('.step:nth-child(1) h3', 'step1_title');
    this.updateElementText('.step:nth-child(1) p', 'step1_desc');
    this.updateElementText('.step:nth-child(2) h3', 'step2_title');
    this.updateElementText('.step:nth-child(2) p', 'step2_desc');
    this.updateElementText('.step:nth-child(3) h3', 'step3_title');
    this.updateElementText('.step:nth-child(3) p', 'step3_desc');
    
    // Testimonials section
    this.updateElementText('#testimonials .section-title', 'testimonials_title');
    this.updateElementText('.quote p', 'testimonial_text');
    this.updateElementText('.quote div', 'testimonial_author');
    
    // Badges section
    this.updateElementText('.badges .section-title', 'badges_title');
    this.updateElementText('.badge:nth-child(1)', 'badge1');
    this.updateElementText('.badge:nth-child(2)', 'badge2');
    this.updateElementText('.badge:nth-child(3)', 'badge3');
    this.updateElementText('.badge:nth-child(4)', 'badge4');
    this.updateElementText('.badge:nth-child(5)', 'badge5');
    
    // Footer
    this.updateElementText('footer a[href="privacy.html"]', 'privacy');
    this.updateElementText('footer a[href="terms.html"]', 'terms');
    this.updateElementText('footer a[href="contact.html"]', 'support');
    this.updateElementText('footer a[href="about.html"]', 'about');
    this.updateElementText('footer a[href="faq.html"]', 'faq');
    this.updateElementText('footer p', 'copyright');
    
    // Search
    this.updateElementAttr('#searchInput', 'placeholder', 'search_placeholder');
    this.updateElementText('#searchGo', 'search_button');
    
    // Auth modal (if present)
    if (document.getElementById('authTitle')) {
      const isSignup = document.getElementById('authName').style.display !== 'none';
      this.updateElementText('#authTitle', isSignup ? 'signup_title' : 'login_title');
      this.updateElementAttr('#authEmail', 'placeholder', 'email_placeholder');
      this.updateElementAttr('#authName', 'placeholder', 'name_placeholder');
      this.updateElementAttr('#authPass', 'placeholder', 'password_placeholder');
      this.updateElementText('#authSubmit', isSignup ? 'signup_button' : 'login_button');
      this.updateElementText('#authSwitchText', isSignup ? 'has_account' : 'no_account');
      this.updateElementText('#switchAuth', isSignup ? 'login_link' : 'create_one');
    }
    
    // User menu (if user is logged in)
    this.updateUserMenu();
    
    // Update buttons in product cards
    this.updateProductCards();
    
    // Update cart if it's open
    if (document.getElementById('cartItemsList')) {
      this.updateCartModal();
    }
  },
  
  // Helper function to update element text
  updateElementText: function(selector, translationKey, params = {}) {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = this.translate(translationKey, params);
    }
  },
  
  // Helper function to update element HTML
  updateElementHTML: function(selector, translationKey, params = {}) {
    const element = document.querySelector(selector);
    if (element) {
      element.innerHTML = this.translate(translationKey, params);
    }
  },
  
  // Helper function to update element attribute
  updateElementAttr: function(selector, attr, translationKey, params = {}) {
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute(attr, this.translate(translationKey, params));
    }
  },
  
  // Update user menu
  updateUserMenu: function() {
    this.updateElementText('#profileBtn span', 'profile');
    this.updateElementText('#accountToggle span', 'account');
    this.updateElementText('#logoutBtn span', 'logout');
  },
  
  // Update product cards with translated content
  updateProductCards: function() {
    const t = this.translate;
    
    // Update the "Add to Cart" buttons
    document.querySelectorAll('.btn').forEach(btn => {
      if (btn.textContent.includes('Add to Cart') || btn.textContent.includes('أضف إلى السلة')) {
        btn.innerHTML = `<i class="fa-solid fa-cart-plus"></i> ${t('add_to_cart')}`;
        
        // Update disabled state message
        if (btn.disabled) {
          btn.title = t('please_login');
        }
      }
    });
    
    // Update meta information in product cards
    document.querySelectorAll('.meta span').forEach(span => {
      if (span.innerHTML.includes('fa-users') || span.innerHTML.includes('fa-user')) {
        if (span.innerHTML.includes('fa-users')) {
          span.innerHTML = `<i class="fa-solid fa-users"></i> ${t('shared_account')}`;
        } else {
          span.innerHTML = `<i class="fa-solid fa-user"></i> ${t('private_account')}`;
        }
      }
      
      if (span.innerHTML.includes('fa-user-group')) {
        const count = span.textContent.match(/\d+/);
        if (count) {
          span.innerHTML = `<i class="fa-solid fa-user-group"></i> ${t('max_users', {count: count[0]})}`;
        }
      }
    });
    
    // Update price labels
    document.querySelectorAll('.price-wrap span').forEach(span => {
      if (span.textContent.includes('/total')) {
        span.textContent = t('total');
      }
    });
    
    document.querySelectorAll('.original').forEach(el => {
      if (el.textContent.includes('regular price')) {
        el.textContent = el.textContent.replace('regular price', t('regular_price'));
      }
    });
  },
  
  // Update cart modal
  updateCartModal: function() {
    const t = this.translate;
    const lang = localStorage.getItem('click_lang') || 'en';
    
    // Update cart title
    this.updateElementText('.modal-card h3', 'cart_title');
    
    // Update checkout button
    this.updateElementText('#goCheckout', 'checkout_button');
    
    // Update cart item buttons
    document.querySelectorAll('[data-remove]').forEach(btn => {
      btn.title = t('cart_remove');
    });
    
    document.querySelectorAll('[data-dec]').forEach(btn => {
      btn.title = t('cart_decrease');
    });
    
    document.querySelectorAll('[data-inc]').forEach(btn => {
      btn.title = t('cart_increase');
    });
    
    // Update total label
    const totalEl = document.querySelector('h4');
    if (totalEl && (totalEl.textContent.includes('Total:') || totalEl.textContent.includes('المجموع:'))) {
      totalEl.innerHTML = `${t('cart_total')} $<span id="cartTotal">0.00</span>`;
    }
    
    // Update empty cart message
    const emptyCartEl = document.querySelector('#cartItemsList p');
    if (emptyCartEl && (emptyCartEl.textContent === 'Your cart is empty.' || emptyCartEl.textContent === 'سلة التسوق الخاصة بك فارغة.')) {
      emptyCartEl.textContent = t('cart_empty');
    }
    
    // Update cart items with translated text
    document.querySelectorAll('#cartItemsList > div').forEach(item => {
      const smallEl = item.querySelector('small');
      if (smallEl && (smallEl.textContent.includes('for') || smallEl.textContent.includes('لمدة'))) {
        const priceMatch = smallEl.textContent.match(/\$([\d.]+)/);
        const durationMatch = smallEl.textContent.match(/(\d+)/);
        if (priceMatch && durationMatch) {
          smallEl.textContent = t('cart_item_price', {
            price: priceMatch[1],
            duration: durationMatch[1]
          });
        }
      }
    });
  }
};

// Make LanguageManager available globally
window.LanguageManager = LanguageManager;
window.changeLanguage = function(langCode) {
  return LanguageManager.setLanguage(langCode, true);
};
window.translate = LanguageManager.translate.bind(LanguageManager);

// Initialize language when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  LanguageManager.init();
  
  // Update navigation links after a short delay to ensure all are loaded
  setTimeout(() => {
    LanguageManager.updateNavigationLinks();
  }, 100);
});

// Listen for language changes to update navigation links
window.addEventListener('languageChanged', function(e) {
  setTimeout(() => {
    LanguageManager.updateNavigationLinks();
  }, 100);
});

