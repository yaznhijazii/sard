/* ==========================================================================
   SARD (سرد) - APPLICATION ENGINE & ROUTER (Vanilla JS SPA)
   ========================================================================== */

// 1. Articles Dataset (Realistic technical editorial database in Arabic)
const ARTICLES_DATABASE = [
    {
        id: "ai-business-future",
        categories: ["الذكاء الاصطناعي", "الأتمتة"],
        title: "كيف يغيّر الذكاء الاصطناعي مستقبل الأعمال في العالم العربي؟",
        description: "أصبحت أدوات الذكاء الاصطناعي والأتمتة جزءًا أساسيًا من نمو الشركات الحديثة، حيث تساعد على تقليل التكاليف وتسريع العمليات وتحسين تجربة العملاء.",
        author: "فريق التحرير",
        date: "12 نوفمبر 2026",
        readTime: "5 دقائق للقراءة",
        coverGradient: "linear-gradient(135deg, #0ea5a4 0%, #2563eb 100%)",
        accentColor: "#0ea5a4",
        content: `
            <p>يشهد العالم العربي تحولًا رقميًا متسارعًا مع دخول تقنيات الذكاء الاصطناعي إلى مختلف القطاعات مثل التعليم، التجارة الإلكترونية، وخدمة العملاء. لم يعد الذكاء الاصطناعي مجرد رفاهية تكنولوجية، بل أصبح ضرورة استراتيجية للشركات التي تسعى لتعزيز مكانتها في السوق وتحسين كفاءتها التشغيلية.</p>
            
            <blockquote>"الذكاء الاصطناعي ليس بديلاً للعقل البشري، بل هو امتداد له؛ فهو يمنحنا القدرة على معالجة البيانات بسرعة تفوق الخيال ويوفر لنا الوقت للتركيز على الابتكار الحقيقي."</blockquote>
            
            <h2>أثر الأتمتة على هيكل التشغيل اليومي</h2>
            <p>تستخدم الشركات الحديثة أدوات الأتمتة لتقليل الأعمال اليدوية وتوفير الوقت، مما يسمح للفرق بالتركيز على الابتكار واتخاذ القرارات بشكل أسرع. أتمتة المهام المتكررة -مثل تنظيم رسائل البريد، وإدخال البيانات، وتحديث تقارير المبيعات- تعني توفير آلاف الساعات سنويًا التي كان يقضيها الموظفون في عمليات روتينية لا تضيف قيمة إبداعية للشركة.</p>
            
            <h2>الارتقاء بتجربة العميل عبر الحلول الذكية</h2>
            <p>كما أصبحت حلول الذكاء الاصطناعي مثل المساعدات الذكية وتحليل البيانات عنصرًا مهمًا في تحسين تجربة المستخدم وزيادة الكفاءة التشغيلية. فمن خلال تحليل سلوكيات العملاء بدقة، يمكن للأنظمة الذكية توقع احتياجاتهم وتقديم مقترحات مخصصة تسهم في بناء علاقات قوية ومستدامة بين العلامة التجارية وجمهورها.</p>
            
            <h2>نظرة استشرافية للمستقبل العربي الرقمي</h2>
            <p>ويتوقع الخبراء أن يشهد المستقبل نموًا أكبر في استخدام الأنظمة الذكية داخل الشركات الناشئة والمؤسسات الكبيرة في المنطقة العربية. إن البلدان التي تستثمر اليوم في البنية التحتية التكنولوجية وتدعم تأهيل الكوادر البشرية للتعامل مع هذه التقنيات الحديثة، ستكون هي الرائدة في قيادة عجلة الاقتصاد المعرفي الإقليمي بحلول نهاية العقد الحالي.</p>
        `,
        aiSummary: "يلخص هذا التقرير التحول الرقمي المتسارع في العالم العربي نتيجة تبني حلول الذكاء الاصطناعي والأتمتة في مختلف القطاعات. يوضح المقال كيف يساهم دمج الأنظمة الذكية في تقليل التكاليف التشغيلية، ومساعدة الموظفين على التركيز على الابتكار، والارتقاء بتجربة العميل عن طريق توقع احتياجاته الشخصية بدقة. ويؤكد خبراء التقنية على أهمية الاستثمار في تدريب الكوادر وتهيئة البنية التحتية الرقمية لضمان ريادة عربية مستدامة."
    },
    {
        id: "ai-productivity-tools",
        categories: ["أدوات الذكاء الاصطناعي", "الإنتاجية"],
        title: "أفضل 10 أدوات للذكاء الاصطناعي لزيادة إنتاجيتك الشخصية والعملية في 2026",
        description: "دليل مفصل لأبرز الأدوات الذكية التي تعيد تعريف طريقة عملنا اليومية وتساعدك على إنجاز مهامك بنصف الوقت وبجودة استثنائية.",
        author: "سارة المهندي",
        date: "15 نوفمبر 2026",
        readTime: "7 دقائق للقراءة",
        coverGradient: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
        accentColor: "#a855f7",
        content: `
            <p>في عصر يتسم بالسرعة وتدفق المعلومات الهائل، أصبح الحفاظ على مستويات عالية من الإنتاجية تحديًا يوميًا يواجه المحترفين ورواد الأعمال على حد سواء. ولحسن الحظ، يوفر لنا الذكاء الاصطناعي اليوم ترسانة من الأدوات التي تعيد تشكيل طريقة تواصلنا، وكتابتنا، وتنظيمنا لأعمالنا.</p>
            
            <h2>إدارة الوقت والجدولة الذكية</h2>
            <p>تعد المهام التنظيمية مثل جدولة الاجتماعات ومتابعة رسائل البريد الإلكتروني من أكثر مهام العمل استهلاكًا للطاقة والتركيز. أدوات الجدولة التي تعمل بالذكاء الاصطناعي قادرة الآن على فهم تفضيلاتك اليومية، والتنسيق تلقائيًا مع شركائك لتحديد الأوقات المثالية للاجتماعات دون أي تدخل بشري مكرر.</p>
            
            <blockquote>"الإنتاجية لا تعني إنجاز المزيد من المهام يوميًا، بل تعني إنجاز المهام التي تستحق جهدك بذكاء وبأقل جهد روتيني ممكن."</blockquote>
            
            <h2>الكتابة وتوليد الأفكار الفعالة</h2>
            <p>سواء كنت كاتب محتوى، أو مهندس برمجيات، أو مدير تسويق، فإن أدوات توليد النصوص وتحريرها القائمة على الذكاء الاصطناعي تلعب دور المساعد الشخصي الذكي. هذه الأدوات لا تقوم بالكتابة نيابة عنك بل تقدم لك مسودات أولية ممتازة، وتساعدك في التغلب على عقبة 'الصفحة الفارغة'، وتعيد صياغة الرسائل والتقارير بأسلوب احترافي يناسب الجمهور المستهدف.</p>
            
            <h2>أنظمة بناء القواعد المعرفية الشخصية</h2>
            <p>أصبح بالإمكان الآن ربط جميع ملاحظاتك، وكتبك، ومقالاتك المفضلة بقاعدة بيانات محلية ذكية. تتيح لك هذه الأنظمة الاستعلام المباشر باللغة الطبيعية عن أي معلومة قرأتها سابقًا، وتلخيص المقالات الطويلة في ثوانٍ، مما يحول ملاحظاتك المشتتة إلى دماغ ثانٍ فائق القوة والذكاء يدعم قراراتك اليومية.</p>
        `,
        aiSummary: "يستعرض المقال كيف يسهم الذكاء الاصطناعي في إعادة تعريف الإنتاجية الشخصية والمهنية عبر عشر أدوات متطورة. يركز الكاتب على ثلاثة محاور أساسية: الأتمتة الذكية لجدولة المواعيد والبريد، واستخدام المساعدين اللغويين لتحرير النصوص والعصف الذهني لتجاوز عقبات الكتابة التقليدية، وأخيرًا بناء قواعد معرفية ذكية تمثل 'دماغاً ثانياً' يسهل استرجاع وتلخيص المعلومات بكفاءة متناهية."
    },
    {
        id: "business-automation-efficiency",
        categories: ["الأتمتة", "أتمتة الأعمال"],
        title: "أتمتة الأعمال الصغيرة: الطريق الأسرع نحو الكفاءة والنمو التشغيلي المستدام",
        description: "كيف يمكن للمشاريع الناشئة والصغيرة تطبيق أنظمة الأتمتة البسيطة لتحرير الموظفين من المهام الروتينية والتركيز على الابتكار والتوسع.",
        author: "خالد الدوسري",
        date: "18 نوفمبر 2026",
        readTime: "6 دقائق للقراءة",
        coverGradient: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
        accentColor: "#2563eb",
        content: `
            <p>تواجه الشركات الصغيرة والناشئة تحديات كبرى لعل أبرزها محدودية الموارد البشرية والمالية. في هذا السياق، تبرز أتمتة الأعمال كعامل تمكين حاسم يساعد هذه المؤسسات على النمو والتوسع التشغيلي دون الحاجة لتحمل تكاليف إدارية باهظة.</p>
            
            <h2>نقطة البداية: أتمتة العمليات البسيطة</h2>
            <p>لا تتطلب الأتمتة استثمارات تكنولوجية ضخمة في بدايتها. يمكن للشركات الصغيرة البدء بتطبيق خطوات بسيطة مثل الرد التلقائي على استفسارات العملاء عبر واتساب، وإرسال فواتير الخدمات آليًا بمجرد إتمام البيع، ومزامنة بيانات المبيعات لحظة بلحظة مع برامج المحاسبة السحابية. هذه الإجراءات تمنع الأخطاء البشرية وتوفر عشرات الساعات أسبوعيًا.</p>
            
            <blockquote>"الشركات التي لا تؤتمت عملياتها الروتينية اليوم ستجد نفسها عاجزة عن تقديم خدمات سريعة ومنافسة الشركات الأكبر في المستقبل القريب."</blockquote>
            
            <h2>منصات الربط اللامبرمجية (No-Code Integration)</h2>
            <p>أحدثت منصات الربط الحديثة (مثل Make وZapier) ثورة في قطاع الأعمال. فقد أصبح بمقدور أي رائد أعمال -دون أي معرفة برمجية- بناء مسارات عمل آلية ومعقدة تربط تطبيقاته المختلفة ببعضها البعض. على سبيل المثال، يمكن إنشاء مسار يقوم تلقائيًا بحفظ مرفقات البريد الإلكتروني في التخزين السحابي، ثم تنبيه الفريق على تطبيق التراسل بوجود ملف جديد للتنفيذ.</p>
            
            <h2>توجيه الطاقات الإنسانية للابتكار</h2>
            <p>إن الهدف الأسمى للأتمتة ليس إلغاء دور العنصر البشري، بل الارتقاء به. فعندما يتحرر الموظفون من أعباء إدخال البيانات المكررة ومتابعة المعاملات الروتينية، تتوجه طاقاتهم الفكرية الكاملة نحو جوانب العمل الأكثر أهمية؛ مثل تحسين جودة المنتجات، وابتكار حلول مبتكرة للمشكلات، وبناء علاقات إنسانية دافئة ومتميزة مع العملاء.</p>
        `,
        aiSummary: "يناقش هذا المقال التحريري أهمية دمج أدوات الأتمتة البسيطة لدعم الشركات الصغيرة في مواجهة تحديات قلة الموارد. يوضح الكاتب كيف تسهم عمليات الفوترة الآلية ومزامنة المحاسبة، بالاستعانة بمنصات الربط اللامبرمجية مثل Make وZapier، في تسهيل سير العمل ورفع الكفاءة، مما يتيح للموظفين التحرر من المهام الروتينية وتوجيه كامل طاقاتهم الإبداعية نحو التطوير المستمر للشركة."
    },
    {
        id: "future-tech-generative-ai",
        categories: ["تقنيات المستقبل", "الذكاء الاصطناعي"],
        title: "الذكاء الاصطناعي التوليدي ومستقبل البرمجة: هل سنستغني عن المطورين تماماً؟",
        description: "دراسة تحليلية حول تطور النماذج البرمجية الذكية وكيف تعيد تشكيل دور المبرمجين وتفتح آفاقاً جديدة لتطوير البرمجيات باللغة الطبيعية.",
        author: "ياسين التميمي",
        date: "20 نوفمبر 2026",
        readTime: "8 دقائق للقراءة",
        coverGradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
        accentColor: "#d97706",
        content: `
            <p>أثار التطور المذهل في نماذج الذكاء الاصطناعي التوليدي القادرة على كتابة الأكواد وفحص الشيفرات البرمجية وتصحيحها نقاشات صاخبة ومخاوف جدية لدى الملايين من مهندسي البرمجيات والطلاب حول العالم بخصوص مستقبل هذه المهنة ومصيرها.</p>
            
            <h2>تغير الأدوار: من كتابة الكود إلى هندسة الحلول</h2>
            <p>تؤكد التحليلات الاقتصادية والتقنية الحديثة أن المطور لن يختفي، ولكن طبيعة دوره ستشهد تحولاً جذرياً وشاملاً. لن يعود المطور مجرد منشئ للأكواد الروتينية التي يمكن للآلة كتابتها الآن في ثوانٍ، بل سينتقل ليركز على تصميم معمارية الأنظمة، وحل المشكلات الهندسية المعقدة، والتأكد من أمان البيانات وتوفير أفضل تجارب الاستخدام للمستهلكين.</p>
            
            <blockquote>"الذكاء الاصطناعي سيمكن مطوراً واحداً من بناء ما كان يتطلب سابقاً فريقاً برمجياً كاملاً، مما يفتح الباب لعصر ذهبي من الابتكارات التقنية الفردية."</blockquote>
            
            <h2>تمكين المبدعين وتقليص الفجوة التقنية</h2>
            <p>أحد أروع جوانب هذا التحول هو تمكين رواد الأعمال والمبدعين غير التقنيين من تجسيد أفكارهم. فمن خلال التفاعل باللغة الطبيعية مع المساعدين البرمجيين، أصبح بالإمكان بناء تطبيقات أولية ومواقع ويب ممتازة واختبار نماذج الأعمال بسرعة قياسية وبأقل التكاليف، مما يكسر الاحتكار التقني ويثري ريادة الأعمال الرقمية.</p>
            
            <h2>الشريك البرمجي فائق القوة والسرعة</h2>
            <p>في نهاية المطاف، سيبقى الحس الإبداعي الإنساني والقدرة على استيعاب الاحتياجات البشرية الفريدة هما حجر الأساس الذي تعجز الآلة عن استبداله. المبرمج الناجح في المستقبل هو ذاك الذي يحتضن الذكاء الاصطناعي كشريك برمجيات فائق السرعة، ويوجه قدراته التوليدية لبناء حلول أذكى وأكثر مرونة تخدم المجتمع.</p>
        `,
        aiSummary: "تستكشف هذه الدراسة التحليلية أثر نماذج الذكاء الاصطناعي التوليدي على المطورين والبرمجة. وتخلص إلى أن التقنية لن تقضي على دور المبرمجين بل ستعزز فاعليتهم؛ حيث ينتقلون من صياغة الأكواد المكررة إلى هندسة الحلول المعقدة وإدارة الأنظمة البرمجية الفائقة، إلى جانب تمكين غير المختصين من إطلاق أفكارهم وابتكاراتهم التقنية بالاعتماد على التوجيه اللفظي الطبيعي للمساعدين الأذكياء."
    }
];

// 2. Application State Management
const STATE = {
    currentView: "home",
    currentFilter: "all",
    searchQuery: "",
    bookmarks: [],
    summarizedArticles: new Set(), // Keep track of articles where AI Summary was generated in the session
    clickSoundEnabled: true
};

// 3. Document Elements Selection
const ELEMENTS = {
    // Header Controls
    themeToggleBtn: document.getElementById("theme-toggle-btn"),
    bookmarksToggleBtn: document.getElementById("bookmarks-toggle-btn"),
    bookmarksCount: document.getElementById("bookmarks-count"),
    searchToggleBtn: document.getElementById("search-toggle-btn"),
    mobileMenuToggle: document.getElementById("mobile-menu-toggle"),
    
    // Header Bars / Drawers
    mainHeader: document.getElementById("main-header"),
    searchOverlayBar: document.getElementById("search-overlay-bar"),
    searchInput: document.getElementById("search-input"),
    searchCloseBtn: document.getElementById("search-close-btn"),
    mobileNavDrawer: document.getElementById("mobile-nav-drawer"),
    bookmarksDrawer: document.getElementById("bookmarks-drawer"),
    bookmarksDrawerClose: document.getElementById("bookmarks-drawer-close"),
    drawerBookmarksCount: document.getElementById("drawer-bookmarks-count"),
    bookmarksDrawerContent: document.getElementById("bookmarks-drawer-content"),
    drawerBackdrop: document.getElementById("drawer-backdrop"),
    
    // Nav Links (Desktop & Mobile)
    navLinks: document.querySelectorAll(".nav-link"),
    mobileNavLinks: document.querySelectorAll(".mobile-nav-link"),
    
    // Main Content Views
    viewHome: document.getElementById("view-home"),
    viewArticles: document.getElementById("view-articles"),
    viewArticleDetail: document.getElementById("view-article-detail"),
    viewAbout: document.getElementById("view-about"),
    
    // Home Elements
    featuredArticleContainer: document.getElementById("featured-article-container"),
    articlesGrid: document.getElementById("articles-grid"),
    filterTagBtns: document.querySelectorAll(".filter-tag-btn"),
    heroSearchInput: document.getElementById("hero-search-input"),
    heroSearchBtn: document.getElementById("hero-search-btn"),
    
    // Archive / Category Elements
    archiveGrid: document.getElementById("archive-grid"),
    archiveCategoryTitle: document.getElementById("archive-category-title"),
    archiveCategoryDesc: document.getElementById("archive-category-desc"),
    archiveCategoryEyebrow: document.getElementById("archive-category-eyebrow"),
    archiveFilterInfo: document.getElementById("archive-filter-info"),
    
    // Article Detail elements
    backToHomeBtn: document.getElementById("back-to-home-btn"),
    detailBookmarkBtn: document.getElementById("detail-bookmark-btn"),
    detailCategories: document.getElementById("detail-categories"),
    detailTitle: document.getElementById("detail-title"),
    detailSubtitle: document.getElementById("detail-subtitle"),
    detailAuthor: document.getElementById("detail-author"),
    detailDate: document.getElementById("detail-date"),
    detailReadTime: document.getElementById("detail-read-time"),
    detailHeroGraphic: document.getElementById("detail-hero-graphic"),
    detailContent: document.getElementById("detail-content"),
    relatedArticlesGrid: document.getElementById("related-articles-grid"),
    shareCopyLink: document.getElementById("share-copy-link"),
    
    // AI Summary elements
    generateAiSummaryBtn: document.getElementById("generate-ai-summary-btn"),
    aiSummaryContent: document.getElementById("ai-summary-content"),
    aiSummaryText: document.getElementById("ai-summary-text"),
    aiSummaryBoxWrapper: document.getElementById("ai-summary-box-wrapper"),
    
    // Spotlight Search Modal
    spotlightSearchModal: document.getElementById("spotlight-search-modal"),
    spotlightInput: document.getElementById("spotlight-input"),
    spotlightResultsContainer: document.getElementById("spotlight-results-container"),
    spotlightTags: document.querySelectorAll(".spotlight-tag"),
    
    // Zen Reading Mode
    zenReaderWidget: document.getElementById("zen-reader-widget"),
    zenWidgetToggle: document.getElementById("zen-widget-toggle"),
    zenToggleBtn: document.getElementById("zen-toggle-btn"),
    zenFontDecrease: document.getElementById("zen-font-decrease"),
    zenFontIncrease: document.getElementById("zen-font-increase"),
    
    // Toast Container
    toastContainer: document.getElementById("toast-notification-container")
};

// ==========================================================================
// A. CORE SPA ROUTER & VIEW RENDERER
// ==========================================================================

function initRouter() {
    // Listen to hash changes for smooth native back/forward browser button support
    window.addEventListener("hashchange", handleHashRouting);
    
    // Initial route check on page load
    handleHashRouting();
    
    // Back to home explicit handler
    ELEMENTS.backToHomeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo("home");
    });
}

function handleHashRouting() {
    const hash = window.location.hash || "#home";
    
    // Close mobile drawers and menu on navigation
    closeMobileDrawer();
    closeBookmarksDrawer();
    
    // Play transition sound (paper flip)
    AmbientAudio.playFlip();
    
    if (hash === "#home") {
        navigateToView("home");
    } else if (hash === "#about") {
        navigateToView("about");
    } else if (hash.startsWith("#articles")) {
        // Parse filter or search params
        const params = new URLSearchParams(hash.substring(hash.indexOf("?") + 1));
        const filter = params.get("filter") || "all";
        const query = params.get("search") || "";
        
        STATE.currentFilter = filter;
        STATE.searchQuery = query;
        
        navigateToView("articles");
    } else if (hash.startsWith("#article/")) {
        const articleId = hash.replace("#article/", "");
        showArticleDetail(articleId);
    }
}

function navigateTo(view, filter = "all", searchQuery = "") {
    if (view === "home") {
        window.location.hash = "home";
    } else if (view === "about") {
        window.location.hash = "about";
    } else if (view === "articles") {
        let hashStr = `articles?filter=${encodeURIComponent(filter)}`;
        if (searchQuery) {
            hashStr += `&search=${encodeURIComponent(searchQuery)}`;
        }
        window.location.hash = hashStr;
    } else if (view.startsWith("article/")) {
        window.location.hash = view;
    }
}

function navigateToView(viewName) {
    STATE.currentView = viewName;
    
    // Clear auto scroll when navigating away
    if (typeof stopAutoScroll === "function") stopAutoScroll();
    
    // Reset reading analytics focus article
    ReadingAnalytics.setCurrentArticle(null, 0);
    
    // Get current active view and animate transition
    const activeViewEl = document.querySelector(".active-view");
    if (activeViewEl) {
        activeViewEl.classList.add("view-fade-out");
        setTimeout(() => {
            activeViewEl.classList.remove("view-fade-out");
            performViewTransition(viewName);
        }, 250);
    } else {
        performViewTransition(viewName);
    }
}

function performViewTransition(viewName) {
    // Hide all views
    [ELEMENTS.viewHome, ELEMENTS.viewArticles, ELEMENTS.viewArticleDetail, ELEMENTS.viewAbout].forEach(view => {
        view.classList.remove("active-view");
    });
    
    // Highlight Navbar Active Link
    updateNavbarActiveState(viewName);
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Show active view and trigger render logic
    if (viewName === "home") {
        renderHomeSkeletons();
        setTimeout(() => {
            ELEMENTS.viewHome.classList.add("active-view");
            renderHomePage();
        }, 250);
    } else if (viewName === "articles") {
        renderArchiveSkeletons();
        setTimeout(() => {
            ELEMENTS.viewArticles.classList.add("active-view");
            renderArchivePage();
        }, 250);
    } else if (viewName === "about") {
        ELEMENTS.viewAbout.classList.add("active-view");
    }
}

function renderHomeSkeletons() {
    ELEMENTS.featuredArticleContainer.innerHTML = `
        <div class="skeleton-card" style="height: 480px; grid-column: span 3;">
            <div class="skeleton-img" style="height: 300px;"></div>
            <div class="skeleton-text title"></div>
            <div class="skeleton-text desc-1"></div>
            <div class="skeleton-text footer"></div>
        </div>
    `;
    ELEMENTS.articlesGrid.innerHTML = Array(3).fill(0).map(() => `
        <div class="skeleton-card">
            <div class="skeleton-img"></div>
            <div class="skeleton-text title"></div>
            <div class="skeleton-text desc-1"></div>
            <div class="skeleton-text desc-2"></div>
            <div class="skeleton-text footer"></div>
        </div>
    `).join("");
}

function renderArchiveSkeletons() {
    ELEMENTS.archiveGrid.innerHTML = Array(6).fill(0).map(() => `
        <div class="skeleton-card">
            <div class="skeleton-img"></div>
            <div class="skeleton-text title"></div>
            <div class="skeleton-text desc-1"></div>
            <div class="skeleton-text desc-2"></div>
            <div class="skeleton-text footer"></div>
        </div>
    `).join("");
}

function updateNavbarActiveState(viewName) {
    // Desktop Nav Links
    ELEMENTS.navLinks.forEach(link => {
        const linkView = link.getAttribute("data-view");
        const linkFilter = link.getAttribute("data-filter");
        
        link.classList.remove("active");
        
        if (linkView === viewName) {
            if (viewName === "articles") {
                if (linkFilter === STATE.currentFilter) {
                    link.classList.add("active");
                }
            } else {
                link.classList.add("active");
            }
        }
    });
    
    // Mobile Nav Links
    ELEMENTS.mobileNavLinks.forEach(link => {
        const linkView = link.getAttribute("data-view");
        const linkFilter = link.getAttribute("data-filter");
        
        link.classList.remove("active");
        
        if (linkView === viewName) {
            if (viewName === "articles") {
                if (linkFilter === STATE.currentFilter) {
                    link.classList.add("active");
                }
            } else {
                link.classList.add("active");
            }
        }
    });

    // Mobile Bottom Dock Links
    const dockLinks = document.querySelectorAll(".dock-link");
    dockLinks.forEach(link => {
        const linkView = link.getAttribute("data-view");
        const linkFilter = link.getAttribute("data-filter");
        
        link.classList.remove("active");
        
        if (linkView === viewName) {
            if (viewName === "articles") {
                if (linkFilter === STATE.currentFilter) {
                    link.classList.add("active");
                }
            } else {
                link.classList.add("active");
            }
        }
    });
}

// ==========================================================================
// B. VIEW RENDERING ENGINE
// ==========================================================================

// Create Editorial Cover Vectors dynamically with modern HTML shapes & CSS
function generateVectorGraphicHTML(id, gradient, accentColor) {
    // Generate distinct architectural shapes based on article categories
    let abstractShapes = "";
    if (id === "ai-business-future") {
        // AI Neural grid representation
        abstractShapes = `
            <div class="graphic-interactive-canvas">
                <div class="circle-orbit orb-1"></div>
                <div class="circle-orbit orb-2"></div>
                <div class="glowing-core"></div>
                <div class="glass-floating-panel panel-left">
                    <div class="glass-panel-bar long"></div>
                    <div class="glass-panel-bar medium"></div>
                    <div class="glass-panel-bar short"></div>
                </div>
            </div>
        `;
    } else if (id === "ai-productivity-tools") {
        // Futuristic dashboard interface elements
        abstractShapes = `
            <div class="graphic-interactive-canvas">
                <div class="glass-floating-panel panel-left" style="width: 140px; height: 90px; top: 20px; left: 30px;">
                    <div class="glass-panel-bar long" style="background: rgba(255,255,255,0.4); height: 8px;"></div>
                    <div style="display: flex; gap: 6px; margin: 10px 0;">
                        <div style="width: 18px; height: 18px; border-radius: 50%; background: ${accentColor};"></div>
                        <div style="flex:1; display:flex; flex-direction:column; gap:4px;">
                            <div class="glass-panel-bar medium"></div>
                            <div class="glass-panel-bar short"></div>
                        </div>
                    </div>
                    <div class="glass-panel-bar long"></div>
                </div>
                <div class="circle-orbit orb-2" style="right: 40px; top: 40px; width: 110px; height: 110px;"></div>
                <div class="glowing-core" style="background: #ffffff; right: 80px; top: 80px; width: 30px; height: 30px; position:absolute;"></div>
            </div>
        `;
    } else if (id === "business-automation-efficiency") {
        // Floating automation gears and connecting flows
        abstractShapes = `
            <div class="graphic-interactive-canvas">
                <div class="circle-orbit orb-1" style="border-style: dashed; width: 160px; height: 160px; animation-duration: 20s;"></div>
                <div class="circle-orbit orb-2" style="border-width: 2px; width: 90px; height: 90px; animation-duration: 10s;"></div>
                <div class="glass-floating-panel panel-right" style="width: 120px; height: 60px;">
                    <div class="glass-panel-bar medium"></div>
                    <div class="glass-panel-bar short"></div>
                </div>
                <div style="position: absolute; width: 6px; height: 60px; background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.6), transparent); top: 20px; right: 50%; animation: corePulse 2s infinite ease-in-out;"></div>
            </div>
        `;
    } else {
        // Future code block abstract grids
        abstractShapes = `
            <div class="graphic-interactive-canvas">
                <div class="glass-floating-panel panel-left" style="font-family: monospace; font-size: 10px; color: rgba(255,255,255,0.8); padding: 12px; width: 150px; height: 100px;">
                    <div style="color: ${accentColor}; font-weight: bold;">const AI = () => {</div>
                    <div style="padding-right: 8px;">return (</div>
                    <div style="padding-right: 16px; display:flex; gap: 4px;"><span style="color:#ffffff;">&lt;Sard</span> <span style="opacity:0.6;">tech="2026"</span><span style="color:#ffffff;">/&gt;</span></div>
                    <div style="padding-right: 8px;">)</div>
                    <div>};</div>
                </div>
                <div class="glowing-core" style="left: 40%; top: 30%; width: 25px; height: 25px; position: absolute;"></div>
                <div class="circle-orbit orb-2" style="width: 150px; height: 150px;"></div>
            </div>
        `;
    }

    return `
        <div class="cover-graphic-base" style="background: ${gradient};">
            <!-- Sleek abstract editorial noise/overlay shapes -->
            <div class="graphic-gradient-mesh" style="background: radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0, 0, 0, 0.25) 0%, transparent 60%);"></div>
            ${abstractShapes}
        </div>
    `;
}

// Render dynamic Editorial Article list cards
function renderArticleCardHTML(article, index, isFeatured = false) {
    const isSaved = STATE.bookmarks.includes(article.id);
    const bookmarkClass = isSaved ? "action-btn-circle saved" : "action-btn-circle";
    const bookmarkIcon = isSaved ? "check" : "bookmark";
    const bookmarkTitle = isSaved ? "تم الحفظ" : "حفظ المقال";
    
    // Construct Tag Pills list
    const tagsHTML = article.categories.map(cat => {
        let tagClass = "card-category-pill";
        if (cat === "الذكاء الاصطناعي") tagClass += " ai";
        else if (cat === "الأتمتة" || cat === "أتمتة الأعمال") tagClass += " automation";
        else if (cat === "أدوات الذكاء الاصطناعي") tagClass += " tools";
        else tagClass += " future";
        return `<span class="${tagClass}">${cat}</span>`;
    }).join("");

    if (isFeatured) {
        return `
            <div class="featured-card" data-id="${article.id}">
                <div class="featured-cover-container">
                    ${generateVectorGraphicHTML(article.id, article.coverGradient, article.accentColor)}
                </div>
                <div class="featured-details">
                    <div class="featured-meta-row">
                        ${tagsHTML}
                        <span class="card-meta-item">${article.date}</span>
                        <span class="card-meta-item">•</span>
                        <span class="card-meta-item">${article.readTime}</span>
                    </div>
                    <a href="#article/${article.id}"><h3 class="featured-title">${article.title}</h3></a>
                    <p class="featured-desc">${article.description}</p>
                    <div class="featured-footer-row">
                        <div class="author-meta">
                            <div class="avatar-small">
                                <i data-lucide="user"></i>
                            </div>
                            <span class="author-name-text">${article.author}</span>
                        </div>
                        <div class="card-action-btns">
                            <button class="${bookmarkClass}" data-id="${article.id}" title="${bookmarkTitle}">
                                <i data-lucide="${bookmarkIcon}"></i>
                            </button>
                            <a href="#article/${article.id}" class="action-btn-circle" title="اقرأ المقال">
                                <i data-lucide="arrow-left"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        let categoryKey = "future";
        if (article.categories.includes("الذكاء الاصطناعي")) categoryKey = "ai";
        else if (article.categories.includes("الأتمتة") || article.categories.includes("أتمتة الأعمال")) categoryKey = "automation";
        else if (article.categories.includes("أدوات الذكاء الاصطناعي")) categoryKey = "tools";

        return `
            <div class="article-card" data-id="${article.id}" data-category="${categoryKey}">
                <div class="card-cover-container">
                    ${generateVectorGraphicHTML(article.id, article.coverGradient, article.accentColor)}
                </div>
                <div class="card-content-body card-details-wrapper">
                    <div class="card-meta-row">
                        ${tagsHTML}
                        <span class="card-meta-item">${article.date}</span>
                    </div>
                    <a href="#article/${article.id}"><h3 class="card-title">${article.title}</h3></a>
                    <p class="card-desc">${article.description}</p>
                    <div class="card-footer-row">
                        <span class="read-more-link">
                            <span>اقرأ المقال</span>
                            <i data-lucide="arrow-left"></i>
                        </span>
                        <button class="${bookmarkClass}" data-id="${article.id}" title="${bookmarkTitle}">
                            <i data-lucide="${bookmarkIcon}"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

function renderHomePage() {
    // 1. Lead Article - select the first article as featured
    const featured = ARTICLES_DATABASE[0];
    ELEMENTS.featuredArticleContainer.innerHTML = renderArticleCardHTML(featured, 0, true);
    
    // 2. Feed Grid Articles
    const feedArticles = ARTICLES_DATABASE.filter(art => {
        // Filter by the home active category tab
        if (STATE.currentFilter === "all") return true;
        return art.categories.includes(STATE.currentFilter);
    });
    
    if (feedArticles.length === 0) {
        ELEMENTS.articlesGrid.innerHTML = `
            <div class="empty-bookmarks-state" style="grid-column: 1/-1;">
                <i data-lucide="alert-circle" class="empty-icon"></i>
                <p>لا توجد مقالات مضافة في هذا القسم حاليًا.</p>
            </div>
        `;
    } else {
        ELEMENTS.articlesGrid.innerHTML = feedArticles.map((art, idx) => renderArticleCardHTML(art, idx, false)).join("");
    }
    
    // Re-initialize dynamic Lucide icons for generated elements
    lucide.createIcons();
    attachCardsEventListeners();
}

function renderArchivePage() {
    // Setup titles dynamically
    if (STATE.searchQuery) {
        ELEMENTS.archiveCategoryEyebrow.textContent = "نتائج البحث عن:";
        ELEMENTS.archiveCategoryTitle.textContent = `"${STATE.searchQuery}"`;
        ELEMENTS.archiveCategoryDesc.textContent = "تصفح المقالات والتحليلات المتوافقة مع الكلمة المفتاحية المختارة.";
        ELEMENTS.archiveFilterInfo.innerHTML = `
            <span class="filter-badge">
                <span>بحث: ${STATE.searchQuery}</span>
                <i data-lucide="x" id="clear-search-badge"></i>
            </span>
        `;
    } else if (STATE.currentFilter !== "all") {
        ELEMENTS.archiveCategoryEyebrow.textContent = "تصنيف المقالات";
        ELEMENTS.archiveCategoryTitle.textContent = STATE.currentFilter;
        ELEMENTS.archiveCategoryDesc.textContent = `مجموعة من أرقى الدراسات والمقالات الصحفية المتخصصة في مجال "${STATE.currentFilter}".`;
        ELEMENTS.archiveFilterInfo.innerHTML = `
            <span class="filter-badge">
                <span>التصنيف: ${STATE.currentFilter}</span>
                <i data-lucide="x" id="clear-filter-badge"></i>
            </span>
        `;
    } else {
        ELEMENTS.archiveCategoryEyebrow.textContent = "أرشيف المقالات";
        ELEMENTS.archiveCategoryTitle.textContent = "كافة الأطروحات";
        ELEMENTS.archiveCategoryDesc.textContent = "تصفح كامل المقالات والتحليلات المتخصصة المكتوبة بأقلام خبراء سرد التقنيين.";
        ELEMENTS.archiveFilterInfo.innerHTML = "";
    }
    
    // 1. Match database entries based on state filters
    const matchedArticles = ARTICLES_DATABASE.filter(art => {
        // Category filter
        const categoryMatch = STATE.currentFilter === "all" || art.categories.includes(STATE.currentFilter);
        
        // Search query match
        let queryMatch = true;
        if (STATE.searchQuery) {
            const query = STATE.searchQuery.toLowerCase().trim();
            queryMatch = art.title.toLowerCase().includes(query) || 
                         art.description.toLowerCase().includes(query) || 
                         art.content.toLowerCase().includes(query) ||
                         art.categories.some(cat => cat.toLowerCase().includes(query));
        }
        
        return categoryMatch && queryMatch;
    });
    
    // 2. Render cards
    if (matchedArticles.length === 0) {
        ELEMENTS.archiveGrid.innerHTML = `
            <div class="empty-bookmarks-state" style="grid-column: 1/-1; padding: 4rem 0;">
                <i data-lucide="search" class="empty-icon"></i>
                <p>عذرًا، لم نجد أي نتائج متطابقة!</p>
                <span>حاول البحث باستخدام كلمات مفتاحية أخرى أو تصفح الأقسام الرئيسية للمجلة.</span>
            </div>
        `;
    } else {
        ELEMENTS.archiveGrid.innerHTML = matchedArticles.map((art, idx) => renderArticleCardHTML(art, idx, false)).join("");
    }
    
    // Re-initialize dynamic Lucide icons for generated elements
    lucide.createIcons();
    attachCardsEventListeners();
    
    // Attach event listeners for clearing search or category filter badges
    const clearSearchBadge = document.getElementById("clear-search-badge");
    const clearFilterBadge = document.getElementById("clear-filter-badge");
    
    if (clearSearchBadge) {
        clearSearchBadge.addEventListener("click", () => {
            STATE.searchQuery = "";
            navigateTo("articles", STATE.currentFilter);
        });
    }
    if (clearFilterBadge) {
        clearFilterBadge.addEventListener("click", () => {
            STATE.currentFilter = "all";
            navigateTo("articles", "all", STATE.searchQuery);
        });
    }
}

// Render dynamic article reader view
function showArticleDetail(articleId) {
    const article = ARTICLES_DATABASE.find(art => art.id === articleId);
    if (!article) {
        navigateTo("home");
        return;
    }
    
    // Reset auto-scroll when switching articles
    if (typeof stopAutoScroll === "function") stopAutoScroll();
    
    const activeViewEl = document.querySelector(".active-view");
    if (activeViewEl) {
        activeViewEl.classList.add("view-fade-out");
        setTimeout(() => {
            activeViewEl.classList.remove("view-fade-out");
            performArticleDetailTransition(article);
        }, 250);
    } else {
        performArticleDetailTransition(article);
    }
}

function performArticleDetailTransition(article) {
    // Show article details view container
    [ELEMENTS.viewHome, ELEMENTS.viewArticles, ELEMENTS.viewAbout].forEach(view => {
        view.classList.remove("active-view");
    });
    ELEMENTS.viewArticleDetail.classList.add("active-view");
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Bookmark Toggle Button set
    const isSaved = STATE.bookmarks.includes(article.id);
    updateDetailBookmarkButtonState(isSaved);
    
    // Record current article in reading stats
    const rawText = article.content.replace(/<[^>]*>/g, '');
    const wordCount = rawText.split(/\s+/).length;
    ReadingAnalytics.setCurrentArticle(article.id, wordCount);
    
    // Setup detail header categories
    ELEMENTS.detailCategories.innerHTML = article.categories.map(cat => {
        let tagClass = "card-category-pill";
        if (cat === "الذكاء الاصطناعي") tagClass += " ai";
        else if (cat === "الأتمتة" || cat === "أتمتة الأعمال") tagClass += " automation";
        else if (cat === "أدوات الذكاء الاصطناعي") tagClass += " tools";
        else tagClass += " future";
        return `<span class="${tagClass}">${cat}</span>`;
    }).join("");
    
    // Fill text structures
    ELEMENTS.detailTitle.textContent = article.title;
    ELEMENTS.detailSubtitle.textContent = article.description;
    ELEMENTS.detailAuthor.textContent = article.author;
    ELEMENTS.detailDate.textContent = article.date;
    ELEMENTS.detailReadTime.textContent = article.readTime;
    
    // Embed Dynamic Vector Hero Graphic
    ELEMENTS.detailHeroGraphic.innerHTML = generateVectorGraphicHTML(article.id, article.coverGradient, article.accentColor);
    
    // Content body fill
    ELEMENTS.detailContent.innerHTML = article.content;
    
    // Reset AI Tab views
    const summaryBtn = document.getElementById("tab-summary-btn");
    const chatBtn = document.getElementById("tab-chat-btn");
    const tabSummary = document.getElementById("ai-tab-summary");
    const tabChat = document.getElementById("ai-tab-chat");
    if (summaryBtn && chatBtn && tabSummary && tabChat) {
        summaryBtn.classList.add("active");
        chatBtn.classList.remove("active");
        tabSummary.style.display = "block";
        tabChat.style.display = "none";
    }
    
    // Handle AI Summary states
    if (STATE.summarizedArticles.has(article.id)) {
        ELEMENTS.aiSummaryContent.classList.remove("collapse-summary");
        ELEMENTS.aiSummaryText.textContent = article.aiSummary;
        ELEMENTS.generateAiSummaryBtn.innerHTML = `<span>الملخص جاهز</span> <i data-lucide="check"></i>`;
        ELEMENTS.generateAiSummaryBtn.style.opacity = "0.7";
        ELEMENTS.generateAiSummaryBtn.disabled = true;
    } else {
        ELEMENTS.aiSummaryContent.classList.add("collapse-summary");
        ELEMENTS.aiSummaryText.textContent = "اضغط على الزر أعلاه لتوليد ملخص سريع للمقال بواسطة نموذج سرد الذكي.";
        ELEMENTS.generateAiSummaryBtn.innerHTML = `<span>توليد الملخص الآن</span> <i data-lucide="wand-2"></i>`;
        ELEMENTS.generateAiSummaryBtn.style.opacity = "1";
        ELEMENTS.generateAiSummaryBtn.disabled = false;
    }
    
    // Initialize AI Chatbot for this article
    AIChatCompanion.init(article.id);
    
    // Load dynamic interactive companion widget
    renderArticleInteractiveWidget(article.id);
    
    // Render Related Articles
    const related = ARTICLES_DATABASE.filter(art => {
        return art.id !== article.id && art.categories.some(cat => article.categories.includes(cat));
    }).slice(0, 3);
    
    if (related.length === 0) {
        ELEMENTS.relatedArticlesGrid.innerHTML = "";
        document.querySelector(".related-articles-section").style.display = "none";
    } else {
        document.querySelector(".related-articles-section").style.display = "block";
        ELEMENTS.relatedArticlesGrid.innerHTML = related.map((art, idx) => renderArticleCardHTML(art, idx, false)).join("");
    }
    
    // Redraw Lucide icons
    lucide.createIcons();
    attachCardsEventListeners();
    
    // Re-attach specific summary button logic
    ELEMENTS.generateAiSummaryBtn.onclick = () => {
        triggerAISummarySimulating(article);
    };
    
    // Save details bookmark button handler
    ELEMENTS.detailBookmarkBtn.onclick = (e) => {
        e.preventDefault();
        toggleBookmark(article.id);
        const nowSaved = STATE.bookmarks.includes(article.id);
        updateDetailBookmarkButtonState(nowSaved);
    };
    
    // Apply user's custom reading font size preference
    if (typeof applyZenFontSize === "function") {
        applyZenFontSize();
    }
}

function updateDetailBookmarkButtonState(isSaved) {
    if (isSaved) {
        ELEMENTS.detailBookmarkBtn.classList.add("saved");
        ELEMENTS.detailBookmarkBtn.querySelector(".bookmark-text").textContent = "تم الحفظ في المفضلة";
        ELEMENTS.detailBookmarkBtn.querySelector("svg").setAttribute("data-lucide", "check");
    } else {
        ELEMENTS.detailBookmarkBtn.classList.remove("saved");
        ELEMENTS.detailBookmarkBtn.querySelector(".bookmark-text").textContent = "حفظ المقال";
        ELEMENTS.detailBookmarkBtn.querySelector("svg").setAttribute("data-lucide", "bookmark");
    }
    lucide.createIcons();
}

// AI Summary accordion reveal typewriter simulation
function triggerAISummarySimulating(article) {
    ELEMENTS.generateAiSummaryBtn.disabled = true;
    ELEMENTS.generateAiSummaryBtn.innerHTML = `<span>جاري التلخيص الذكي...</span> <i data-lucide="loader-2" class="animate-spin"></i>`;
    lucide.createIcons();
    
    // Smooth reveal the content box first
    ELEMENTS.aiSummaryContent.classList.remove("collapse-summary");
    ELEMENTS.aiSummaryText.innerHTML = `<span class="ai-typing-cursor">جاري تحليل بنية المقال اللغوية وصياغة الملخص...</span>`;
    
    setTimeout(() => {
        // Start live typing summary content text
        const summaryText = article.aiSummary;
        let index = 0;
        ELEMENTS.aiSummaryText.innerHTML = `<span class="ai-typing-cursor"></span>`;
        const textSpan = ELEMENTS.aiSummaryText.querySelector(".ai-typing-cursor");
        
        // Mark article as summarized in current session
        STATE.summarizedArticles.add(article.id);
        
        const typingInterval = setInterval(() => {
            if (index < summaryText.length) {
                textSpan.textContent += summaryText.charAt(index);
                index++;
            } else {
                // Typing complete
                clearInterval(typingInterval);
                ELEMENTS.aiSummaryText.innerHTML = summaryText; // Remove typing cursor
                ELEMENTS.generateAiSummaryBtn.innerHTML = `<span>الملخص جاهز</span> <i data-lucide="check"></i>`;
                ELEMENTS.generateAiSummaryBtn.style.opacity = "0.7";
                lucide.createIcons();
            }
        }, 15); // Fast smooth typing cadence
        
    }, 1200); // 1.2 seconds server latency simulation
}

// Bind Card element navigations and bookmark button intercepts
function attachCardsEventListeners() {
    // 1. Handle entire card wrapper clicks except inner buttons or link structures
    const cards = document.querySelectorAll(".article-card, .featured-card");
    cards.forEach(card => {
        card.onclick = (e) => {
            // Check if user clicked a button or anchor
            if (e.target.closest("button") || e.target.closest("a")) {
                return; // Let native buttons and anchors handle themselves
            }
            
            const articleId = card.getAttribute("data-id");
            navigateTo(`article/${articleId}`);
        };
        
        // --- 3D TILT EFFECT START ---
        if (!card.querySelector(".card-glare")) {
            const glare = document.createElement("div");
            glare.className = "card-glare";
            card.appendChild(glare);
        }
        
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const px = x / rect.width;
            const py = y / rect.height;
            
            const tiltX = (0.5 - py) * 10;
            const tiltY = (px - 0.5) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.015, 1.015, 1.015)`;
            card.style.setProperty("--x", `${px * 100}%`);
            card.style.setProperty("--y", `${py * 100}%`);
        });
        
        card.addEventListener("mouseleave", () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
        // --- 3D TILT EFFECT END ---
    });
    
    // 2. Intercept card-level Save Bookmark Buttons
    const bookmarkBtns = document.querySelectorAll(".article-card button.action-btn-circle, .featured-card button.action-btn-circle");
    bookmarkBtns.forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation(); // Avoid triggering card nav click
            const articleId = btn.getAttribute("data-id");
            toggleBookmark(articleId);
        };
    });
}

// ==========================================================================
// C. BOOKMARKS SYSTEM (LOBAL & LOCALSTORAGE PERSISTED)
// ==========================================================================

function loadBookmarksFromStorage() {
    const saved = localStorage.getItem("sard_bookmarks");
    if (saved) {
        try {
            STATE.bookmarks = JSON.parse(saved);
        } catch (e) {
            STATE.bookmarks = [];
        }
    }
    updateBookmarksUIBadge();
    renderBookmarksDrawerList();
}

function toggleBookmark(articleId) {
    const idx = STATE.bookmarks.indexOf(articleId);
    let isSavedNow = false;
    
    if (idx === -1) {
        STATE.bookmarks.push(articleId);
        isSavedNow = true;
        showToast("تم حفظ المقال في المفضلة", "bookmark");
    } else {
        STATE.bookmarks.splice(idx, 1);
        isSavedNow = false;
        showToast("تمت إزالة المقال من المفضلة", "info");
    }
    
    localStorage.setItem("sard_bookmarks", JSON.stringify(STATE.bookmarks));
    updateBookmarksUIBadge();
    renderBookmarksDrawerList();
    
    // Perform targeted updates on grid cards or details buttons
    updateBookmarkButtonsState(articleId, isSavedNow);
}

function updateBookmarkButtonsState(articleId, isSaved) {
    const selector = `[data-id="${articleId}"].action-btn-circle, [data-id="${articleId}"].bookmark-action-btn`;
    const buttons = document.querySelectorAll(selector);
    
    buttons.forEach(btn => {
        if (btn.classList.contains("bookmark-action-btn")) {
            updateDetailBookmarkButtonState(isSaved);
        } else {
            if (isSaved) {
                btn.classList.add("saved");
                btn.title = "تم الحفظ";
                btn.innerHTML = `<i data-lucide="check"></i>`;
            } else {
                btn.classList.remove("saved");
                btn.title = "حفظ المقال";
                btn.innerHTML = `<i data-lucide="bookmark"></i>`;
            }
        }
    });
    
    if (window.lucide) window.lucide.createIcons();
}

function updateBookmarksUIBadge() {
    const count = STATE.bookmarks.length;
    ELEMENTS.bookmarksCount.textContent = count;
    ELEMENTS.drawerBookmarksCount.textContent = count;
    
    const dockBookmarksCount = document.getElementById("dock-bookmarks-count");
    if (dockBookmarksCount) {
        dockBookmarksCount.textContent = count;
        if (count === 0) {
            dockBookmarksCount.classList.add("zero");
        } else {
            dockBookmarksCount.classList.remove("zero");
        }
    }
    
    if (count === 0) {
        ELEMENTS.bookmarksCount.classList.add("zero");
    } else {
        ELEMENTS.bookmarksCount.classList.remove("zero");
    }
}

function renderBookmarksDrawerList() {
    if (STATE.bookmarks.length === 0) {
        ELEMENTS.bookmarksDrawerContent.innerHTML = `
            <div class="empty-bookmarks-state">
                <i data-lucide="bookmark" class="empty-icon"></i>
                <p>لم تقم بحفظ أي مقالات بعد.</p>
                <span>تصفح مقالاتنا واضغط على زر الحفظ للرجوع إليها لاحقاً دون الحاجة للاتصال بالإنترنت!</span>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    // Map IDs to original article records
    const savedArticles = STATE.bookmarks.map(id => {
        return ARTICLES_DATABASE.find(art => art.id === id);
    }).filter(Boolean);
    
    ELEMENTS.bookmarksDrawerContent.innerHTML = savedArticles.map(art => {
        return `
            <div class="bookmark-item" data-id="${art.id}">
                <div class="bookmark-item-graphic">
                    ${generateVectorGraphicHTML(art.id, art.coverGradient, art.accentColor)}
                </div>
                <div class="bookmark-item-info">
                    <span class="bookmark-item-title">${art.title}</span>
                    <span class="bookmark-item-date">${art.date}</span>
                </div>
                <button class="bookmark-item-remove" data-id="${art.id}" title="حذف">
                    <i data-lucide="trash-2"></i>
                </button>
            </div>
        `;
    }).join("");
    
    lucide.createIcons();
    
    // Attach click events in drawer list
    const items = ELEMENTS.bookmarksDrawerContent.querySelectorAll(".bookmark-item");
    items.forEach(item => {
        item.onclick = (e) => {
            if (e.target.closest(".bookmark-item-remove")) {
                return; // Let the remove button handle its logic
            }
            const id = item.getAttribute("data-id");
            navigateTo(`article/${id}`);
            closeBookmarksDrawer();
        };
    });
    
    const removeBtns = ELEMENTS.bookmarksDrawerContent.querySelectorAll(".bookmark-item-remove");
    removeBtns.forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const id = btn.getAttribute("data-id");
            toggleBookmark(id);
        };
    });
}

// Bookmarks Drawer Open/Close Toggles
function openBookmarksDrawer() {
    ELEMENTS.bookmarksDrawer.classList.add("active");
    ELEMENTS.drawerBackdrop.classList.add("active");
}

function closeBookmarksDrawer() {
    ELEMENTS.bookmarksDrawer.classList.remove("active");
    ELEMENTS.drawerBackdrop.classList.remove("active");
}

// ==========================================================================
// D. LIVE SEARCH SYSTEM
// ==========================================================================

function initSearchHandlers() {
    // Dropdown Search Input Handler
    ELEMENTS.searchToggleBtn.addEventListener("click", () => {
        ELEMENTS.searchOverlayBar.classList.toggle("active");
        if (ELEMENTS.searchOverlayBar.classList.contains("active")) {
            setTimeout(() => ELEMENTS.searchInput.focus(), 200);
        }
    });
    
    ELEMENTS.searchCloseBtn.addEventListener("click", () => {
        ELEMENTS.searchOverlayBar.classList.remove("active");
        ELEMENTS.searchInput.value = "";
    });
    
    ELEMENTS.searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const query = ELEMENTS.searchInput.value.trim();
            if (query) {
                ELEMENTS.searchOverlayBar.classList.remove("active");
                ELEMENTS.searchInput.value = "";
                navigateTo("articles", "all", query);
            }
        }
    });
    
    // Hero Page search button trigger
    ELEMENTS.heroSearchBtn.addEventListener("click", triggerHeroSearch);
    ELEMENTS.heroSearchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            triggerHeroSearch();
        }
    });
}

function triggerHeroSearch() {
    const query = ELEMENTS.heroSearchInput.value.trim();
    if (query) {
        ELEMENTS.heroSearchInput.value = "";
        navigateTo("articles", "all", query);
    }
}

// ==========================================================================
// E. THEME CONTROLLERS (LIGHT / DARK SYSTEM)
// ==========================================================================

function initThemeToggler() {
    // Check saved theme choice or fallback to system dark preference
    const savedTheme = localStorage.getItem("sard_theme");
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === "dark" || (!savedTheme && userPrefersDark)) {
        setDarkMode(true);
    } else {
        setDarkMode(false);
    }
    
    ELEMENTS.themeToggleBtn.addEventListener("click", handleThemeToggleClick);
}

function handleThemeToggleClick(e) {
    const isDarkNow = document.body.classList.contains("dark-mode");
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || (rect.left + rect.width / 2);
    const y = e.clientY || (rect.top + rect.height / 2);
    triggerThemeTransition(!isDarkNow, x, y);
}

function triggerThemeTransition(enable, clientX, clientY) {
    const circle = document.createElement("div");
    circle.className = "theme-ripple-circle";
    
    const targetBg = enable ? "#0b0c0e" : "#fbfaf7";
    circle.style.backgroundColor = targetBg;
    circle.style.left = `${clientX}px`;
    circle.style.top = `${clientY}px`;
    
    document.body.appendChild(circle);
    
    circle.offsetWidth; // Trigger reflow
    circle.classList.add("active");
    
    setTimeout(() => {
        setDarkMode(enable);
        circle.style.opacity = "0";
        setTimeout(() => {
            circle.remove();
        }, 300);
    }, 550);
}

function setDarkMode(enable) {
    const darkIcons = document.querySelectorAll(".theme-icon-dark, .dock-theme-icon-dark");
    const lightIcons = document.querySelectorAll(".theme-icon-light, .dock-theme-icon-light");
    
    if (enable) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        localStorage.setItem("sard_theme", "dark");
        
        darkIcons.forEach(icon => {
            if (icon) icon.style.display = "none";
        });
        lightIcons.forEach(icon => {
            if (icon) icon.style.display = "block";
        });
    } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        localStorage.setItem("sard_theme", "light");
        
        darkIcons.forEach(icon => {
            if (icon) icon.style.display = "block";
        });
        lightIcons.forEach(icon => {
            if (icon) icon.style.display = "none";
        });
    }
}

// ==========================================================================
// F. MOBILE NAVIGATION & DRAWER EVENT HANDLERS
// ==========================================================================

function initMobileMenuHandlers() {
    ELEMENTS.mobileMenuToggle.addEventListener("click", () => {
        const isOpen = ELEMENTS.mobileNavDrawer.classList.contains("active");
        if (isOpen) {
            closeMobileDrawer();
        } else {
            openMobileDrawer();
        }
    });
    
    // Close Mobile Drawer when clicking navigation options
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");
    mobileLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const view = link.getAttribute("data-view");
            const filter = link.getAttribute("data-filter") || "all";
            closeMobileDrawer();
            navigateTo(view, filter);
        });
    });
}

function openMobileDrawer() {
    ELEMENTS.mobileNavDrawer.classList.add("active");
    ELEMENTS.mobileMenuToggle.querySelector(".menu-icon-open").style.display = "none";
    ELEMENTS.mobileMenuToggle.querySelector(".menu-icon-close").style.display = "block";
}

function closeMobileDrawer() {
    ELEMENTS.mobileNavDrawer.classList.remove("active");
    ELEMENTS.mobileMenuToggle.querySelector(".menu-icon-open").style.display = "block";
    ELEMENTS.mobileMenuToggle.querySelector(".menu-icon-close").style.display = "none";
}

// ==========================================================================
// G. SYSTEM BOOTSTRAP & DOCK BINDINGS
// ==========================================================================

// Dynamic scroll progress indicator listener
function initScrollProgressIndicator() {
    const progressBar = document.getElementById("scroll-progress-bar");
    if (!progressBar) return;
    
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
    });
}

function initMobileDockHandlers() {
    // Dock Nav Links click behavior
    const dockLinks = document.querySelectorAll(".dock-link");
    dockLinks.forEach(link => {
        // Skip theme button and bookmarks button as they have specialized handlers
        if (link.id === "dock-theme-btn" || link.id === "dock-bookmarks-btn") return;
        
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const view = link.getAttribute("data-view");
            const filter = link.getAttribute("data-filter") || "all";
            navigateTo(view, filter);
        });
    });
    
    // Theme toggle button click inside the dock
    const dockThemeBtn = document.getElementById("dock-theme-btn");
    if (dockThemeBtn) {
        dockThemeBtn.addEventListener("click", handleThemeToggleClick);
    }
    
    // Bookmarks drawer toggle inside the dock
    const dockBookmarksBtn = document.getElementById("dock-bookmarks-btn");
    if (dockBookmarksBtn) {
        dockBookmarksBtn.addEventListener("click", (e) => {
            e.preventDefault();
            openBookmarksDrawer();
        });
    }
}

function bootstrapApp() {
    // 1. Initialise State Bookmarks
    loadBookmarksFromStorage();
    
    // 2. Initialise Theme Configurations
    initThemeToggler();
    
    // 3. Bind Search Panels Events
    initSearchHandlers();
    
    // 4. Bind Mobile Menus Toggles
    initMobileMenuHandlers();
    
    // 4b. Bind Mobile Floating Bottom Dock Handles & Scroll Progress Bar
    initMobileDockHandlers();
    initScrollProgressIndicator();
    
    // 5. Bookmarks drawer bindings
    ELEMENTS.bookmarksToggleBtn.addEventListener("click", openBookmarksDrawer);
    ELEMENTS.bookmarksDrawerClose.addEventListener("click", closeBookmarksDrawer);
    ELEMENTS.drawerBackdrop.addEventListener("click", closeBookmarksDrawer);
    
    // 6. Navigation items binding (Header links & brand logo)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const view = link.getAttribute("data-view");
            const filter = link.getAttribute("data-filter") || "all";
            navigateTo(view, filter);
        });
    });
    
    // Brand link to home reset
    ELEMENTS.mainHeader.querySelector(".brand-logo").addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo("home");
    });
    
    // Newsletter bottom footer dynamic filters binding
    document.querySelectorAll(".footer-links a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = link.getAttribute("data-filter") || "all";
            navigateTo("articles", filter);
        });
    });
    
    // Home feed filter tab buttons active mapping
    ELEMENTS.filterTagBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const filter = btn.getAttribute("data-filter");
            STATE.currentFilter = filter;
            
            // Remove active classes
            ELEMENTS.filterTagBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            renderHomePage();
        });
    });
    
    // Detail Page Copy share link logic
    ELEMENTS.shareCopyLink.addEventListener("click", (e) => {
        e.preventDefault();
        const articleUrl = window.location.href;
        navigator.clipboard.writeText(articleUrl).then(() => {
            showToast("تم نسخ رابط المقال إلى الحافظة بنجاح!", "check");
        }).catch(err => {
            console.error("فشل نسخ الرابط:", err);
            showToast("فشل نسخ الرابط.", "alert-triangle");
        });
    });
    
    // Header shadow change on page scrolling
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            ELEMENTS.mainHeader.classList.add("scrolled");
        } else {
            ELEMENTS.mainHeader.classList.remove("scrolled");
        }
    });
    
    // Newsletter signup form handling
    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const submitBtn = newsletterForm.querySelector("button");
            showToast("شكرًا للاشتراك في نشرة سرد التحريرية!", "check");
            if (submitBtn) {
                Confetti.trigger(submitBtn);
            }
            newsletterForm.reset();
        });
    }
    
    // Initialize premium additions
    initSpotlightSearch();
    initZenModeWidget();
    initAiTabs();
    
    // 7. Boot routing engine
    initRouter();
    
    // 8. Auto-render initial view states
    lucide.createIcons();
    
    // Initialize Reading Analytics tracking
    ReadingAnalytics.init();
    
    // Wire global click handler for tactile micro-sounds
    document.addEventListener("click", (e) => {
        const interactive = e.target.closest("button, a, .nav-link, .filter-tag-btn, .zen-menu-item, .dock-link, .bookmark-item, .suggestion-chip, .sandbox-preset-btn");
        if (interactive) {
            // Check if it's a hash routing anchor
            if (interactive.tagName === "A" && interactive.getAttribute("href") && interactive.getAttribute("href").startsWith("#")) {
                // Let handleHashRouting play the page flip sound instead
                return;
            }
            AmbientAudio.playClick();
        }
    });
    
    // Hide brand preloader after app initialization
    const preloader = document.getElementById("brand-preloader");
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add("fade-out");
            setTimeout(() => {
                preloader.remove();
            }, 800);
        }, 1500);
    }
}

// ==========================================================================
// H. GLASSMORPHIC TOAST NOTIFICATION SYSTEM
// ==========================================================================
function showToast(message, iconName = "info") {
    if (!ELEMENTS.toastContainer) return;
    
    // Create toast element
    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.innerHTML = `
        <div class="toast-icon">
            <i data-lucide="${iconName}"></i>
        </div>
        <span class="toast-text">${message}</span>
    `;
    
    ELEMENTS.toastContainer.appendChild(toast);
    
    // Refresh Lucide icons inside the toast
    if (window.lucide) {
        window.lucide.createIcons({
            attrs: {
                'stroke-width': 2.5
            },
            nameAttr: 'data-lucide'
        });
    }
    
    // Animate in
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);
    
    // Auto-dismiss after 3.5 seconds
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 450);
    }, 3500);
}

// ==========================================================================
// I. ULTRA-PREMIUM SPOTLIGHT SEARCH SYSTEM
// ==========================================================================
let spotlightSearchState = {
    isOpen: false,
    selectedResultIndex: -1,
    results: [],
    filter: "all"
};

function initSpotlightSearch() {
    if (!ELEMENTS.spotlightSearchModal) return;
    
    // Wire search toggle button in header to open Spotlight modal
    ELEMENTS.searchToggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openSpotlightSearch();
    });
    
    // Wire Ctrl + K / Cmd + K to toggle Spotlight search
    window.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            if (spotlightSearchState.isOpen) {
                closeSpotlightSearch();
            } else {
                openSpotlightSearch();
            }
        }
        
        // Escape to close
        if (e.key === "Escape" && spotlightSearchState.isOpen) {
            closeSpotlightSearch();
        }
    });
    
    // Close on backdrop overlay click
    ELEMENTS.spotlightSearchModal.addEventListener("click", (e) => {
        if (e.target === ELEMENTS.spotlightSearchModal) {
            closeSpotlightSearch();
        }
    });
    
    // Keyboard navigation in result items
    ELEMENTS.spotlightInput.addEventListener("keydown", handleSpotlightKeyboard);
    
    // Filter results on search input change
    ELEMENTS.spotlightInput.addEventListener("input", () => {
        renderSpotlightResults();
    });
    
    // Handle category tag filtering in Spotlight
    ELEMENTS.spotlightTags.forEach(tag => {
        tag.addEventListener("click", () => {
            ELEMENTS.spotlightTags.forEach(t => t.classList.remove("active"));
            tag.classList.add("active");
            spotlightSearchState.filter = tag.getAttribute("data-filter") || "all";
            renderSpotlightResults();
            ELEMENTS.spotlightInput.focus();
        });
    });
}

function openSpotlightSearch() {
    spotlightSearchState.isOpen = true;
    spotlightSearchState.selectedResultIndex = -1;
    spotlightSearchState.filter = "all";
    
    ELEMENTS.spotlightInput.value = "";
    ELEMENTS.spotlightTags.forEach(t => {
        if (t.getAttribute("data-filter") === "all") {
            t.classList.add("active");
        } else {
            t.classList.remove("active");
        }
    });
    
    ELEMENTS.spotlightSearchModal.classList.add("active");
    setTimeout(() => ELEMENTS.spotlightInput.focus(), 150);
    renderSpotlightResults();
}

function closeSpotlightSearch() {
    spotlightSearchState.isOpen = false;
    ELEMENTS.spotlightSearchModal.classList.remove("active");
    ELEMENTS.spotlightInput.blur();
}

function renderSpotlightResults() {
    const query = ELEMENTS.spotlightInput.value.toLowerCase().trim();
    const filter = spotlightSearchState.filter;
    
    const matches = ARTICLES_DATABASE.filter(art => {
        const matchesCategory = filter === "all" || art.categories.includes(filter);
        if (!matchesCategory) return false;
        if (!query) return true;
        
        return art.title.toLowerCase().includes(query) ||
               art.description.toLowerCase().includes(query) ||
               art.categories.some(c => c.toLowerCase().includes(query));
    });
    
    spotlightSearchState.results = matches;
    spotlightSearchState.selectedResultIndex = -1;
    
    if (!query && matches.length === ARTICLES_DATABASE.length) {
        ELEMENTS.spotlightResultsContainer.innerHTML = `
            <div class="spotlight-empty-state">
                <i data-lucide="sparkles"></i>
                <p>ابدأ كتابة عنوان المقال أو الموضوع للبحث الفوري...</p>
                <span>تلميحة: اضغط على <kbd>Ctrl</kbd> + <kbd>K</kbd> في أي وقت لفتح محرك البحث السريع!</span>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        return;
    }
    
    if (matches.length === 0) {
        ELEMENTS.spotlightResultsContainer.innerHTML = `
            <div class="spotlight-empty-state">
                <i data-lucide="search-slash"></i>
                <p>لا توجد نتائج متطابقة للبحث عن "${query}"</p>
                <span>جرّب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً.</span>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        return;
    }
    
    ELEMENTS.spotlightResultsContainer.innerHTML = matches.map((art, idx) => {
        return `
            <div class="spotlight-item" data-id="${art.id}" data-index="${idx}">
                <div class="spotlight-item-icon">
                    <i data-lucide="file-text"></i>
                </div>
                <div class="spotlight-item-text">
                    <span class="spotlight-item-title">${art.title}</span>
                    <span class="spotlight-item-desc">${art.description}</span>
                </div>
            </div>
        `;
    }).join("");
    
    if (window.lucide) window.lucide.createIcons();
    
    const items = ELEMENTS.spotlightResultsContainer.querySelectorAll(".spotlight-item");
    items.forEach(item => {
        item.addEventListener("click", () => {
            const articleId = item.getAttribute("data-id");
            navigateTo(`article/${articleId}`);
            closeSpotlightSearch();
        });
        item.addEventListener("mouseenter", () => {
            const index = parseInt(item.getAttribute("data-index"), 10);
            updateSpotlightSelection(index);
        });
    });
}

function updateSpotlightSelection(index) {
    spotlightSearchState.selectedResultIndex = index;
    const items = ELEMENTS.spotlightResultsContainer.querySelectorAll(".spotlight-item");
    
    items.forEach(item => {
        const itemIdx = parseInt(item.getAttribute("data-index"), 10);
        if (itemIdx === index) {
            item.classList.add("active");
            item.scrollIntoView({ block: "nearest", behavior: "smooth" });
        } else {
            item.classList.remove("active");
        }
    });
}

function handleSpotlightKeyboard(e) {
    const resultsCount = spotlightSearchState.results.length;
    if (resultsCount === 0) return;
    
    if (e.key === "ArrowDown") {
        e.preventDefault();
        let nextIndex = spotlightSearchState.selectedResultIndex + 1;
        if (nextIndex >= resultsCount) nextIndex = 0;
        updateSpotlightSelection(nextIndex);
    } else if (e.key === "ArrowUp") {
        e.preventDefault();
        let prevIndex = spotlightSearchState.selectedResultIndex - 1;
        if (prevIndex < 0) prevIndex = resultsCount - 1;
        updateSpotlightSelection(prevIndex);
    } else if (e.key === "Enter") {
        e.preventDefault();
        const activeItem = ELEMENTS.spotlightResultsContainer.querySelector(".spotlight-item.active");
        if (activeItem) {
            const articleId = activeItem.getAttribute("data-id");
            navigateTo(`article/${articleId}`);
            closeSpotlightSearch();
        } else if (spotlightSearchState.results.length > 0) {
            const articleId = spotlightSearchState.results[0].id;
            navigateTo(`article/${articleId}`);
            closeSpotlightSearch();
        }
    }
}

// ==========================================================================
// J. ZEN READING MODE & FONT SIZE WIDGET
// ==========================================================================
let zenModeState = {
    isActive: false,
    fontSize: 20
};

function initZenModeWidget() {
    if (!ELEMENTS.zenReaderWidget) return;
    
    // Toggle menu
    ELEMENTS.zenWidgetToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        ELEMENTS.zenReaderWidget.classList.toggle("active");
    });
    
    // Close menu on click outside
    document.addEventListener("click", () => {
        ELEMENTS.zenReaderWidget.classList.remove("active");
    });
    
    ELEMENTS.zenReaderWidget.addEventListener("click", (e) => {
        e.stopPropagation();
    });
    
    // Toggle Zen Mode active class
    ELEMENTS.zenToggleBtn.addEventListener("click", () => {
        toggleZenMode();
    });
    
    // Scale font sizes
    ELEMENTS.zenFontIncrease.addEventListener("click", () => {
        adjustZenFontSize(2);
    });
    
    ELEMENTS.zenFontDecrease.addEventListener("click", () => {
        adjustZenFontSize(-2);
    });
    
    // Hook Soundscape Buttons
    const soundBtns = ELEMENTS.zenReaderWidget.querySelectorAll(".zen-sound-btn");
    const muteBtn = document.getElementById("zen-sound-mute");
    
    soundBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const sound = btn.getAttribute("data-sound");
            
            if (btn.classList.contains("active")) {
                btn.classList.remove("active");
                AmbientAudio.stopAll();
            } else {
                soundBtns.forEach(b => b.classList.remove("active"));
                if (muteBtn) muteBtn.classList.remove("active");
                btn.classList.add("active");
                AmbientAudio.play(sound);
            }
        });
    });
    
    if (muteBtn) {
        muteBtn.addEventListener("click", () => {
            muteBtn.classList.toggle("active");
            soundBtns.forEach(b => b.classList.remove("active"));
            AmbientAudio.stopAll();
        });
    }
    
    // Hook click sound toggle
    const clickSoundBtn = document.getElementById("zen-click-sound-toggle");
    if (clickSoundBtn) {
        if (STATE.clickSoundEnabled) {
            clickSoundBtn.classList.add("active");
        } else {
            clickSoundBtn.classList.remove("active");
        }
        
        clickSoundBtn.addEventListener("click", () => {
            STATE.clickSoundEnabled = !STATE.clickSoundEnabled;
            clickSoundBtn.classList.toggle("active", STATE.clickSoundEnabled);
            localStorage.setItem("sard_click_sound", STATE.clickSoundEnabled);
            showToast(STATE.clickSoundEnabled ? "تم تفعيل مؤثرات التفاعل الصوتية" : "تم كتم مؤثرات التفاعل الصوتية", "volume-2");
        });
    }
    
    // Initialize auto-scroll
    initAutoScroll();
    
    loadZenSettings();
}

function loadZenSettings() {
    const savedZen = localStorage.getItem("sard_zen_active") === "true";
    const savedFontSize = parseInt(localStorage.getItem("sard_zen_font_size"), 10);
    const savedClickSound = localStorage.getItem("sard_click_sound");
    
    if (savedClickSound !== null) {
        STATE.clickSoundEnabled = savedClickSound === "true";
    }
    
    if (savedFontSize >= 16 && savedFontSize <= 28) {
        zenModeState.fontSize = savedFontSize;
    }
    
    applyZenFontSize();
    
    // Apply Zen Mode if saved as active
    if (savedZen) {
        toggleZenMode(true);
    }
}

function toggleZenMode(forceState = null) {
    const shouldBeActive = forceState !== null ? forceState : !zenModeState.isActive;
    zenModeState.isActive = shouldBeActive;
    
    const icon = ELEMENTS.zenToggleBtn.querySelector("i") || ELEMENTS.zenToggleBtn.querySelector("svg");
    const textSpan = ELEMENTS.zenToggleBtn.querySelector("span");
    
    if (shouldBeActive) {
        document.body.classList.add("zen-mode-active");
        ELEMENTS.zenToggleBtn.classList.add("active");
        if (textSpan) textSpan.textContent = "تعطيل الوضع الهادئ";
        if (icon) icon.setAttribute("data-lucide", "eye-off");
        showToast("تم تفعيل وضع القراءة الهادئ", "eye");
    } else {
        document.body.classList.remove("zen-mode-active");
        ELEMENTS.zenToggleBtn.classList.remove("active");
        if (textSpan) textSpan.textContent = "الوضع الهادئ";
        if (icon) icon.setAttribute("data-lucide", "eye");
        showToast("تم إلغاء وضع القراءة الهادئ", "info");
    }
    
    localStorage.setItem("sard_zen_active", shouldBeActive);
    if (window.lucide) window.lucide.createIcons();
}

function adjustZenFontSize(delta) {
    let newSize = zenModeState.fontSize + delta;
    if (newSize < 16) newSize = 16;
    if (newSize > 28) newSize = 28;
    
    zenModeState.fontSize = newSize;
    applyZenFontSize();
    localStorage.setItem("sard_zen_font_size", newSize);
}

function applyZenFontSize() {
    if (ELEMENTS.detailContent) {
        ELEMENTS.detailContent.style.fontSize = `${zenModeState.fontSize}px`;
        ELEMENTS.detailContent.style.lineHeight = `${1.55 + (zenModeState.fontSize - 20) * 0.012}`;
    }
}

// Reading Analytics System
const ReadingAnalytics = {
    sessionStartTime: Date.now(),
    activeReadingTime: 0, // in seconds
    totalWordsRead: 0,
    currentArticleWords: 0,
    currentArticleId: null,
    articleReadPercentages: {}, // articleId -> maxScrollPercent
    timerInterval: null,
    
    init() {
        this.sessionStartTime = Date.now();
        this.startTimer();
        
        // Listen to scroll events on window to track progress through article detail view
        window.addEventListener("scroll", () => {
            this.trackScrollProgress();
        });
        
        // Update stats UI periodically
        setInterval(() => {
            this.updateStatsUI();
        }, 1000);
    },
    
    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            // Only count time if tab/window is active
            if (!document.hidden) {
                this.activeReadingTime++;
            }
        }, 1000);
    },
    
    setCurrentArticle(articleId, wordCount) {
        this.currentArticleId = articleId;
        this.currentArticleWords = wordCount;
        if (articleId && !this.articleReadPercentages[articleId]) {
            this.articleReadPercentages[articleId] = 0;
        }
    },
    
    trackScrollProgress() {
        if (!this.currentArticleId || !ELEMENTS.detailContent) return;
        
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const elementTop = ELEMENTS.detailContent.offsetTop;
        const elementHeight = ELEMENTS.detailContent.offsetHeight;
        
        // Calculate read progress depth
        const readDepth = scrollTop + windowHeight - elementTop;
        let percent = Math.max(0, Math.min(100, (readDepth / elementHeight) * 100));
        
        if (percent > this.articleReadPercentages[this.currentArticleId]) {
            this.articleReadPercentages[this.currentArticleId] = percent;
            this.recalculateWordsRead();
        }
    },
    
    recalculateWordsRead() {
        let total = 0;
        Object.keys(this.articleReadPercentages).forEach(id => {
            const article = ARTICLES_DATABASE.find(art => art.id === id);
            if (article) {
                const wordCount = article.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
                const percent = this.articleReadPercentages[id] / 100;
                total += Math.round(wordCount * percent);
            }
        });
        this.totalWordsRead = total;
    },
    
    getWPM() {
        if (this.activeReadingTime < 10) return 0; // Avoid high initial spikes
        const minutes = this.activeReadingTime / 60;
        return Math.round(this.totalWordsRead / minutes);
    },
    
    getFormattedActiveTime() {
        const mins = Math.floor(this.activeReadingTime / 60);
        const secs = this.activeReadingTime % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    },
    
    updateStatsUI() {
        const wpmVal = document.getElementById("stats-wpm-val");
        const timeVal = document.getElementById("stats-time-val");
        const goalBar = document.getElementById("stats-goal-bar");
        const goalPercent = document.getElementById("stats-goal-percent");
        
        const wpm = this.getWPM();
        const activeTimeStr = this.getFormattedActiveTime();
        
        if (wpmVal) wpmVal.textContent = wpm > 0 ? wpm : "---";
        if (timeVal) timeVal.textContent = activeTimeStr;
        
        // Goal: 10 minutes (600 seconds)
        const goalSeconds = 600;
        const progressPercent = Math.min(100, Math.round((this.activeReadingTime / goalSeconds) * 100));
        
        if (goalBar) goalBar.style.width = `${progressPercent}%`;
        if (goalPercent) goalPercent.textContent = `${progressPercent}%`;
    }
};

// Bootstrap complete DOM components lifecycle hook
document.addEventListener("DOMContentLoaded", bootstrapApp);

/* ==========================================================================
   UI/UX ADDITIONS: CONFETTI, WEB AUDIO FOCUS & INTERACTIVE WIDGETS
   ========================================================================== */

const AmbientAudio = {
    ctx: null,
    sources: {},
    gains: {},
    activeSound: null,
    
    init() {
        if (this.ctx) return;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
            this.ctx = new AudioContext();
        }
    },
    
    play(type) {
        this.init();
        if (!this.ctx) return;
        
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
        
        this.stopAll();
        
        try {
            if (type === "rain") {
                this.playRain();
            } else if (type === "wind") {
                this.playWind();
            } else if (type === "waves") {
                this.playWaves();
            }
            this.activeSound = type;
        } catch (e) {
            console.error("Error playing soundscape:", e);
        }
    },
    
    stopAll() {
        Object.keys(this.sources).forEach(key => {
            try {
                this.sources[key].stop();
            } catch (e) {}
            delete this.sources[key];
        });
        Object.keys(this.gains).forEach(key => {
            try {
                this.gains[key].disconnect();
            } catch (e) {}
            delete this.gains[key];
        });
        this.activeSound = null;
    },
    
    playRain() {
        const bufferSize = 2 * this.ctx.sampleRate;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            output[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = output[i];
            output[i] *= 3.5;
        }
        
        const whiteNoise = this.ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;
        
        const lowpass = this.ctx.createBiquadFilter();
        lowpass.type = 'lowpass';
        lowpass.frequency.value = 600;
        
        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(0.18, this.ctx.currentTime);
        
        whiteNoise.connect(lowpass);
        lowpass.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        
        whiteNoise.start();
        this.sources["rain"] = whiteNoise;
        this.gains["rain"] = gainNode;
    },
    
    playWind() {
        const bufferSize = 2 * this.ctx.sampleRate;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        
        let b0 = 0.0, b1 = 0.0, b2 = 0.0, b3 = 0.0, b4 = 0.0, b5 = 0.0, b6 = 0.0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856;
            b4 = 0.55000 * b4 + white * 0.5329522;
            b5 = -0.7616 * b5 - white * 0.0168980;
            output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
            output[i] *= 0.11;
            b6 = white * 0.115926;
        }
        
        const pinkNoise = this.ctx.createBufferSource();
        pinkNoise.buffer = noiseBuffer;
        pinkNoise.loop = true;
        
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 400;
        filter.Q.value = 2.0;
        
        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(0.12, this.ctx.currentTime);
        
        pinkNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        
        pinkNoise.start();
        
        const sweepWind = () => {
            if (!this.sources["wind"]) return;
            const targetFreq = 180 + Math.random() * 350;
            const duration = 2 + Math.random() * 4;
            filter.frequency.exponentialRampToValueAtTime(targetFreq, this.ctx.currentTime + duration);
            setTimeout(sweepWind, duration * 1000);
        };
        sweepWind();
        
        this.sources["wind"] = pinkNoise;
        this.gains["wind"] = gainNode;
    },
    
    playWaves() {
        const oscL = this.ctx.createOscillator();
        oscL.type = 'sine';
        oscL.frequency.value = 110; 
        
        const oscR = this.ctx.createOscillator();
        oscR.type = 'sine';
        oscR.frequency.value = 116;
        
        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(0.06, this.ctx.currentTime);
        
        const pannerL = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
        const pannerR = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
        
        if (pannerL && pannerR) {
            pannerL.pan.value = -1;
            pannerR.pan.value = 1;
            oscL.connect(pannerL);
            pannerL.connect(gainNode);
            oscR.connect(pannerR);
            pannerR.connect(gainNode);
        } else {
            oscL.connect(gainNode);
            oscR.connect(gainNode);
        }
        
        gainNode.connect(this.ctx.destination);
        
        oscL.start();
        oscR.start();
        
        const gainMod = this.ctx.createOscillator();
        gainMod.type = 'sine';
        gainMod.frequency.value = 0.12;
        const modGain = this.ctx.createGain();
        modGain.gain.value = 0.03;
        
        gainMod.connect(modGain);
        modGain.connect(gainNode.gain);
        gainMod.start();
        
        this.sources["waves"] = oscL;
        this.sources["waves_R"] = oscR;
        this.sources["waves_mod"] = gainMod;
        this.gains["waves"] = gainNode;
    },
    
    playClick() {
        if (!STATE.clickSoundEnabled) return;
        this.init();
        if (!this.ctx) return;
        
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
        
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            // Organic warm wood block click synth:
            // Sine wave sweeping down quickly from 1200Hz to 150Hz
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.08);
            
            // Fast exponential decay envelope
            gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
            
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.start();
            osc.stop(this.ctx.currentTime + 0.1);
        } catch (e) {
            console.error("Click audio error:", e);
        }
    },
    
    playFlip() {
        if (!STATE.clickSoundEnabled) return;
        this.init();
        if (!this.ctx) return;
        
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
        
        try {
            // Paper flip sound: filtered white noise envelope
            const bufferSize = 0.25 * this.ctx.sampleRate; // 250ms duration
            const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const output = noiseBuffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                output[i] = Math.random() * 2 - 1;
            }
            
            const noiseSource = this.ctx.createBufferSource();
            noiseSource.buffer = noiseBuffer;
            
            // Biquad Bandpass filter to isolate the paper rustling frequency
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(1500, this.ctx.currentTime);
            filter.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.25);
            filter.Q.value = 1.0;
            
            const gain = this.ctx.createGain();
            gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
            
            noiseSource.connect(filter);
            filter.connect(gain);
            gain.connect(this.ctx.destination);
            
            noiseSource.start();
            noiseSource.stop(this.ctx.currentTime + 0.28);
        } catch (e) {
            console.error("Flip audio error:", e);
        }
    }
};

const Confetti = {
    canvas: null,
    ctx: null,
    particles: [],
    timer: null,
    colors: ['#0ea5a4', '#2563eb', '#a855f7', '#d97706', '#10b981', '#ef4444'],
    
    trigger(btnElement) {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        if (this.canvas) {
            this.canvas.remove();
        }
        
        this.canvas = document.createElement("canvas");
        this.canvas.className = "confetti-canvas-overlay";
        document.body.appendChild(this.canvas);
        
        this.ctx = this.canvas.getContext("2d");
        this.resize();
        
        const rect = btnElement.getBoundingClientRect();
        const originX = rect.left + rect.width / 2 + window.scrollX;
        const originY = rect.top + window.scrollY;
        
        this.particles = [];
        for (let i = 0; i < 80; i++) {
            this.particles.push({
                x: originX,
                y: originY,
                size: Math.random() * 8 + 4,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                angle: Math.random() * Math.PI - Math.PI,
                speed: Math.random() * 10 + 6,
                gravity: 0.28,
                drag: 0.98,
                rotation: Math.random() * Math.PI,
                rotationSpeed: Math.random() * 0.2 - 0.1
            });
        }
        
        const draw = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            let active = false;
            
            this.particles.forEach(p => {
                p.speed *= p.drag;
                p.x += Math.cos(p.angle) * p.speed;
                p.y += Math.sin(p.angle) * p.speed + p.gravity;
                p.gravity += 0.05;
                p.rotation += p.rotationSpeed;
                
                if (p.y < this.canvas.height + window.scrollY + 50) {
                    active = true;
                }
                
                this.ctx.save();
                this.ctx.translate(p.x - window.scrollX, p.y - window.scrollY);
                this.ctx.rotate(p.rotation);
                this.ctx.fillStyle = p.color;
                this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                this.ctx.restore();
            });
            
            if (active) {
                requestAnimationFrame(draw);
            } else {
                this.canvas.remove();
                this.canvas = null;
            }
        };
        draw();
    },
    
    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
};
window.addEventListener("resize", () => Confetti.resize());

let autoScrollTimer = null;
let autoScrollActive = false;

function initAutoScroll() {
    const playBtn = document.getElementById("zen-scroll-play");
    const speedInput = document.getElementById("zen-scroll-speed");
    
    if (!playBtn || !speedInput) return;
    
    // Clear old listeners if any by recreating
    const newPlayBtn = playBtn.cloneNode(true);
    playBtn.parentNode.replaceChild(newPlayBtn, playBtn);
    
    newPlayBtn.addEventListener("click", () => {
        if (autoScrollActive) {
            stopAutoScroll();
        } else {
            startAutoScroll();
        }
    });
    
    speedInput.oninput = () => {
        if (autoScrollActive) {
            stopAutoScroll();
            startAutoScroll();
        }
    };
}

function startAutoScroll() {
    const playBtn = document.getElementById("zen-scroll-play");
    const speedInput = document.getElementById("zen-scroll-speed");
    if (!playBtn || !speedInput) return;
    
    autoScrollActive = true;
    playBtn.classList.add("active");
    playBtn.innerHTML = `<i data-lucide="pause"></i>`;
    if (window.lucide) window.lucide.createIcons();
    
    const speed = parseInt(speedInput.value, 10);
    const delay = Math.max(10, 110 - speed);
    
    autoScrollTimer = setInterval(() => {
        window.scrollBy({ top: 1, behavior: "auto" });
        if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 5) {
            stopAutoScroll();
        }
    }, delay);
}

function stopAutoScroll() {
    const playBtn = document.getElementById("zen-scroll-play");
    if (!playBtn) return;
    
    autoScrollActive = false;
    playBtn.classList.remove("active");
    playBtn.innerHTML = `<i data-lucide="play"></i>`;
    if (window.lucide) window.lucide.createIcons();
    
    if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
        autoScrollTimer = null;
    }
}

function initAiTabs() {
    const summaryBtn = document.getElementById("tab-summary-btn");
    const chatBtn = document.getElementById("tab-chat-btn");
    const tabSummary = document.getElementById("ai-tab-summary");
    const tabChat = document.getElementById("ai-tab-chat");
    
    if (!summaryBtn || !chatBtn || !tabSummary || !tabChat) return;
    
    summaryBtn.addEventListener("click", () => {
        summaryBtn.classList.add("active");
        chatBtn.classList.remove("active");
        tabSummary.style.display = "block";
        tabChat.style.display = "none";
    });
    
    chatBtn.addEventListener("click", () => {
        chatBtn.classList.add("active");
        summaryBtn.classList.remove("active");
        tabChat.style.display = "block";
        tabSummary.style.display = "none";
    });
}

function renderArticleInteractiveWidget(articleId) {
    const wrapper = document.getElementById("article-interactive-widget-wrapper");
    const container = document.getElementById("article-interactive-widget");
    if (!wrapper || !container) return;
    
    wrapper.style.display = "block";
    
    if (articleId === "ai-business-future") {
        container.innerHTML = `
            <div class="comp-widget-grid">
                <div class="comp-column traditional">
                    <div class="comp-header">
                        <i data-lucide="building"></i>
                        <span>العمليات التقليدية</span>
                    </div>
                    <div class="comp-item">
                        <span class="comp-item-label">سرعة معالجة الفواتير</span>
                        <span class="comp-item-val">2.5 يوم</span>
                    </div>
                    <div class="comp-item">
                        <span class="comp-item-label">سرعة اتخاذ القرار</span>
                        <span class="comp-item-val">بطيء (أيام)</span>
                    </div>
                    <div class="comp-item">
                        <span class="comp-item-label">تكلفة المهام الروتينية</span>
                        <span class="comp-item-val" style="color: #ef4444;">100%</span>
                    </div>
                    <div class="comp-item">
                        <span class="comp-item-label">نسبة الأخطاء البشرية</span>
                        <span class="comp-item-val">8.2%</span>
                    </div>
                </div>
                
                <div class="comp-column ai-enhanced">
                    <div class="comp-header">
                        <i data-lucide="cpu"></i>
                        <span>العمليات المدعومة بالذكاء الاصطناعي</span>
                    </div>
                    <div class="comp-item">
                        <span class="comp-item-label">سرعة معالجة الفواتير</span>
                        <span class="comp-item-val" id="comp-invoice-time">15 دقيقة <span class="comp-badge-down"><i data-lucide="arrow-down"></i> 99%</span></span>
                    </div>
                    <div class="comp-item">
                        <span class="comp-item-label">سرعة اتخاذ القرار</span>
                        <span class="comp-item-val" id="comp-decision-speed">فوري <span class="comp-badge-up"><i data-lucide="arrow-up"></i> 150%</span></span>
                    </div>
                    <div class="comp-item">
                        <span class="comp-item-label">تكلفة المهام الروتينية</span>
                        <span class="comp-item-val" id="comp-routing-cost">58% <span class="comp-badge-down"><i data-lucide="arrow-down"></i> 42%</span></span>
                    </div>
                    <div class="comp-item">
                        <span class="comp-item-label">نسبة الأخطاء البشرية</span>
                        <span class="comp-item-val" id="comp-error-rate">0.5% <span class="comp-badge-down"><i data-lucide="arrow-down"></i> 93%</span></span>
                    </div>
                </div>
                
                <div class="roi-input-group" style="grid-column: span 2; margin-top: 15px;">
                    <label>
                        <span>مستوى تبني الذكاء الاصطناعي في مؤسستك:</span>
                        <span id="ai-adopt-label">100%</span>
                    </label>
                    <input type="range" class="roi-range-slider" id="ai-adopt-slider" min="10" max="100" value="100">
                </div>
                
                <div class="comp-footer-banner" id="comp-banner-savings">
                    تبني الذكاء الاصطناعي بالكامل يوفر ما يصل إلى 42% من التكاليف التشغيلية!
                </div>
            </div>
        `;
        
        const slider = document.getElementById("ai-adopt-slider");
        const label = document.getElementById("ai-adopt-label");
        const invoiceTime = document.getElementById("comp-invoice-time");
        const decisionSpeed = document.getElementById("comp-decision-speed");
        const routingCost = document.getElementById("comp-routing-cost");
        const errorRate = document.getElementById("comp-error-rate");
        const bannerSavings = document.getElementById("comp-banner-savings");
        
        if (slider) {
            slider.addEventListener("input", () => {
                const val = parseInt(slider.value, 10);
                label.textContent = `${val}%`;
                
                const savedCost = Math.round(val * 0.42);
                const hrs = Math.round(60 - (val * 0.58));
                invoiceTime.innerHTML = `${hrs} دقيقة <span class="comp-badge-down"><i data-lucide="arrow-down"></i> ${90 + Math.round(val * 0.09)}%</span>`;
                decisionSpeed.innerHTML = `فوري <span class="comp-badge-up"><i data-lucide="arrow-up"></i> ${Math.round(val * 1.5)}%</span>`;
                routingCost.innerHTML = `${100 - savedCost}% <span class="comp-badge-down"><i data-lucide="arrow-down"></i> ${savedCost}%</span>`;
                
                const err = (8.2 - (val * 0.077)).toFixed(1);
                errorRate.innerHTML = `${err}% <span class="comp-badge-down"><i data-lucide="arrow-down"></i> ${Math.round(val * 0.93)}%</span>`;
                
                bannerSavings.textContent = `تبني الذكاء الاصطناعي بنسبة ${val}% يوفر ما يصل إلى ${savedCost}% من التكاليف التشغيلية!`;
                
                if (window.lucide) window.lucide.createIcons();
            });
        }
    } 
    else if (articleId === "ai-productivity-tools") {
        container.innerHTML = `
            <div class="roi-calculator-container">
                <div class="roi-inputs">
                    <div class="roi-input-group">
                        <label>
                            <span>كتابة الرسائل والمحتوى (ساعة/أسبوع):</span>
                            <span id="roi-writing-val">10 ساعات</span>
                        </label>
                        <input type="range" class="roi-range-slider" id="roi-writing-slider" min="0" max="25" value="10">
                    </div>
                    <div class="roi-input-group">
                        <label>
                            <span>تنظيم الاجتماعات ومحاضرها (ساعة/أسبوع):</span>
                            <span id="roi-meeting-val">6 ساعات</span>
                        </label>
                        <input type="range" class="roi-range-slider" id="roi-meeting-slider" min="0" max="15" value="6">
                    </div>
                    <div class="roi-input-group">
                        <label>
                            <span>إدارة المهام والجدولة (ساعة/أسبوع):</span>
                            <span id="roi-task-val">4 ساعات</span>
                        </label>
                        <input type="range" class="roi-range-slider" id="roi-task-slider" min="0" max="10" value="4">
                    </div>
                </div>
                
                <div class="roi-results-card">
                    <div class="roi-gauge-wrapper">
                        <svg class="roi-gauge-svg" width="160" height="160">
                            <circle class="roi-gauge-track" cx="80" cy="80" r="70"></circle>
                            <circle class="roi-gauge-fill" id="roi-gauge-fill" cx="80" cy="80" r="70"></circle>
                        </svg>
                        <div class="roi-gauge-text">
                            <span class="roi-gauge-percentage" id="roi-time-saved-val">0</span>
                            <span class="roi-gauge-label">ساعة توفير/أسبوع</span>
                        </div>
                    </div>
                    
                    <div class="roi-savings-row">
                        <div class="roi-stat">
                            <span class="roi-stat-val" id="roi-cost-saved">0</span>
                            <span class="roi-stat-lbl">وفر مالي سنوي (ريال)</span>
                        </div>
                        <div class="roi-stat">
                            <span class="roi-stat-val" id="roi-days-saved">0</span>
                            <span class="roi-stat-lbl">أيام عمل موفرة/سنة</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        const writingSlider = document.getElementById("roi-writing-slider");
        const meetingSlider = document.getElementById("roi-meeting-slider");
        const taskSlider = document.getElementById("roi-task-slider");
        
        const writingVal = document.getElementById("roi-writing-val");
        const meetingVal = document.getElementById("roi-meeting-val");
        const taskVal = document.getElementById("roi-task-val");
        
        const timeSavedVal = document.getElementById("roi-time-saved-val");
        const costSaved = document.getElementById("roi-cost-saved");
        const daysSaved = document.getElementById("roi-days-saved");
        const gaugeFill = document.getElementById("roi-gauge-fill");
        
        const calculateROI = () => {
            const wHrs = parseInt(writingSlider.value, 10);
            const mHrs = parseInt(meetingSlider.value, 10);
            const tHrs = parseInt(taskSlider.value, 10);
            
            writingVal.textContent = `${wHrs} ${wHrs > 10 ? 'ساعة' : 'ساعات'}`;
            meetingVal.textContent = `${mHrs} ${mHrs > 10 ? 'ساعة' : 'ساعات'}`;
            taskVal.textContent = `${tHrs} ${tHrs > 10 ? 'ساعة' : 'ساعات'}`;
            
            const savedWeekly = (wHrs * 0.6) + (mHrs * 0.5) + (tHrs * 0.4);
            const savedWeeklyRounded = parseFloat(savedWeekly.toFixed(1));
            timeSavedVal.textContent = savedWeeklyRounded;
            
            const savedYearlyCost = Math.round(savedWeekly * 90 * 52);
            costSaved.textContent = savedYearlyCost.toLocaleString();
            
            const savedYearlyDays = Math.round((savedWeekly * 52) / 8);
            daysSaved.textContent = savedYearlyDays;
            
            const maxSave = 25;
            const percent = Math.min(100, (savedWeekly / maxSave) * 100);
            const offset = 440 - (440 * percent) / 100;
            gaugeFill.style.strokeDashoffset = offset;
        };
        
        [writingSlider, meetingSlider, taskSlider].forEach(slider => {
            slider.addEventListener("input", calculateROI);
        });
        
        calculateROI();
    } 
    else if (articleId === "business-automation-efficiency") {
        container.innerHTML = `
            <div class="node-simulator-container">
                <div class="node-canvas-wrapper">
                    <svg class="node-svg-lines">
                        <path class="node-connection-path" id="conn-line-1" d="M 0 0 L 0 0"></path>
                        <path class="node-connection-path" id="conn-line-2" d="M 0 0 L 0 0"></path>
                    </svg>
                    
                    <div class="node-element" id="node-1">
                        <div class="node-icon"><i data-lucide="users"></i></div>
                        <div class="node-text">
                            <span class="node-title">عميل جديد</span>
                            <span class="node-subtitle">Trigger: موقع الويب</span>
                        </div>
                        <div class="node-status-dot"></div>
                    </div>
                    
                    <div class="node-element" id="node-2">
                        <div class="node-icon"><i data-lucide="message-circle"></i></div>
                        <div class="node-text">
                            <span class="node-title">رسالة واتساب</span>
                            <span class="node-subtitle">Action: ترحيب فوري</span>
                        </div>
                        <div class="node-status-dot"></div>
                    </div>
                    
                    <div class="node-element" id="node-3">
                        <div class="node-icon"><i data-lucide="database"></i></div>
                        <div class="node-text">
                            <span class="node-title">تحديث CRM</span>
                            <span class="node-subtitle">Action: سجل المبيعات</span>
                        </div>
                        <div class="node-status-dot"></div>
                    </div>
                </div>
                
                <div class="node-sim-button-row">
                    <button class="node-sim-btn" id="node-sim-start-btn">
                        <i data-lucide="play-circle"></i>
                        <span>تشغيل المحاكاة التفاعلية</span>
                    </button>
                </div>
            </div>
        `;
        
        const simBtn = document.getElementById("node-sim-start-btn");
        const node1 = document.getElementById("node-1");
        const node2 = document.getElementById("node-2");
        const node3 = document.getElementById("node-3");
        
        const conn1 = document.getElementById("conn-line-1");
        const conn2 = document.getElementById("conn-line-2");
        
        const drawConnections = () => {
            if (!node1 || !node2 || !node3 || !conn1 || !conn2) return;
            const canvasWrapper = document.querySelector(".node-canvas-wrapper");
            if (!canvasWrapper) return;
            
            const canvasRect = canvasWrapper.getBoundingClientRect();
            
            const r1 = node1.getBoundingClientRect();
            const r2 = node2.getBoundingClientRect();
            const r3 = node3.getBoundingClientRect();
            
            const x1_start = r1.right - canvasRect.left;
            const y1_start = r1.top + r1.height / 2 - canvasRect.top;
            const x1_end = r2.left - canvasRect.left;
            const y1_end = r2.top + r2.height / 2 - canvasRect.top;
            
            const x2_start = r2.right - canvasRect.left;
            const y2_start = r2.top + r2.height / 2 - canvasRect.top;
            const x2_end = r3.left - canvasRect.left;
            const y2_end = r3.top + r3.height / 2 - canvasRect.top;
            
            conn1.setAttribute("d", `M ${x1_start} ${y1_start} L ${x1_end} ${y1_end}`);
            conn2.setAttribute("d", `M ${x2_start} ${y2_start} L ${x2_end} ${y2_end}`);
        };
        
        setTimeout(drawConnections, 100);
        window.addEventListener("resize", drawConnections);
        
        if (simBtn) {
            simBtn.addEventListener("click", () => {
                simBtn.disabled = true;
                simBtn.innerHTML = `<i data-lucide="loader-2" class="animate-spin"></i> <span>جاري تشغيل الأتمتة...</span>`;
                if (window.lucide) window.lucide.createIcons();
                
                [node1, node2, node3].forEach(n => n.classList.remove("active", "pulse-trigger"));
                [conn1, conn2].forEach(c => c.classList.remove("active"));
                
                node1.classList.add("active", "pulse-trigger");
                showToast("تلقي إشارة Trigger: عميل جديد!", "info");
                
                setTimeout(() => {
                    conn1.classList.add("active");
                    
                    setTimeout(() => {
                        node2.classList.add("active", "pulse-trigger");
                        showToast("تنفيذ إجراء: إرسال ترحيب عبر واتساب!", "message-circle");
                        
                        setTimeout(() => {
                            conn2.classList.add("active");
                            
                            setTimeout(() => {
                                node3.classList.add("active", "pulse-trigger");
                                showToast("تنفيذ إجراء: تحديث سجلات CRM بنجاح!", "database");
                                
                                setTimeout(() => {
                                    showToast("اكتمل تشغيل الأتمتة! تم توفير 4 دقائق عمل.", "check-circle");
                                    simBtn.disabled = false;
                                    simBtn.innerHTML = `<i data-lucide="rotate-ccw"></i> <span>إعادة التشغيل</span>`;
                                    if (window.lucide) window.lucide.createIcons();
                                }, 1000);
                            }, 1000);
                        }, 500);
                    }, 1000);
                }, 800);
            });
        }
    } 
    else if (articleId === "future-tech-generative-ai") {
        container.innerHTML = `
            <div class="sandbox-playground">
                <div class="sandbox-controls">
                    <span class="sandbox-select-label">اختر نموذجاً برمجياً توليدياً:</span>
                    <div class="sandbox-presets">
                        <button class="sandbox-preset-btn active" data-preset="card">
                            <span>بطاقة متألقة مع هالة مضيئة</span>
                            <i data-lucide="credit-card"></i>
                        </button>
                        <button class="sandbox-preset-btn" data-preset="button">
                            <span>زر نيون متألق تفاعلي</span>
                            <i data-lucide="toggle-left"></i>
                        </button>
                        <button class="sandbox-preset-btn" data-preset="text">
                            <span>نص متدرج ومتحرك</span>
                            <i data-lucide="type"></i>
                        </button>
                    </div>
                    
                    <div class="sandbox-custom-input-group">
                        <label class="sandbox-select-label">أو اكتب طلباً مخصصاً بالعربية:</label>
                        <div class="sandbox-custom-row">
                            <input type="text" id="sandbox-prompt-input" placeholder="مثال: بطاقة داكنة مع زر متوهج..." value="بطاقة متألقة مع هالة مضيئة">
                            <button id="sandbox-generate-btn">
                                <i data-lucide="wand-2"></i>
                                <span>توليد</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="sandbox-preview-panel">
                    <div class="sandbox-preview-header">
                        <div class="sandbox-preview-dots">
                            <div class="sandbox-dot red"></div>
                            <div class="sandbox-dot yellow"></div>
                            <div class="sandbox-dot green"></div>
                        </div>
                        <span class="sandbox-preview-title"><i data-lucide="eye"></i> المعاينة المباشرة (Live Output)</span>
                    </div>
                    <div class="sandbox-preview-content" id="sandbox-live-output">
                    </div>
                </div>
            </div>
        `;
        
        const presets = container.querySelectorAll(".sandbox-preset-btn");
        const promptInput = document.getElementById("sandbox-prompt-input");
        const generateBtn = document.getElementById("sandbox-generate-btn");
        const outputBox = document.getElementById("sandbox-live-output");
        
        const presetCode = {
            card: `
                <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 25px; border-radius: 20px; text-align: center; backdrop-filter: blur(10px); box-shadow: 0 15px 35px rgba(0,0,0,0.2), 0 0 30px rgba(217,119,6,0.15); max-width:260px; color:#ffffff; font-family:'Outfit', sans-serif;">
                    <h3 style="margin-bottom:8px; font-weight:700; color:#d97706; font-size:1.2rem;">توليد ذكي</h3>
                    <p style="font-size:0.9rem; opacity:0.8; line-height:1.5;">هذا العنصر تم تصميمه وكتابة كوده بواسطة الذكاء الاصطناعي التوليدي.</p>
                </div>
            `,
            button: `
                <button style="background: #000; color: #d97706; border: 2px solid #d97706; padding: 14px 28px; border-radius: 50px; font-weight: bold; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 0 15px rgba(217,119,6,0.4); text-transform: uppercase; font-family:'Outfit', sans-serif;" onmouseover="this.style.background='#d97706'; this.style.color='#000'; this.style.boxShadow='0 0 25px #d97706'" onmouseout="this.style.background='#000'; this.style.color='#d97706'; this.style.boxShadow='0 0 15px rgba(217,119,6,0.4)'">
                    اضغط هنا
                </button>
            `,
            text: `
                <h2 style="font-size: 2.2rem; font-weight: 800; background: linear-gradient(120deg, #d97706, #a855f7, #0ea5a4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-align:center; font-family:'Outfit', sans-serif;">
                    مستقبل البرمجة
                </h2>
            `
        };
        
        const renderOutput = (key) => {
            outputBox.innerHTML = `
                <div class="ai-typing-cursor" style="font-family:'Outfit', sans-serif; font-size:0.95rem; color:var(--text-secondary);">
                    جاري كتابة شيفرة HTML/CSS التوليدية...
                </div>
            `;
            
            setTimeout(() => {
                outputBox.innerHTML = presetCode[key];
            }, 1000);
        };
        
        renderOutput("card");
        
        presets.forEach(btn => {
            btn.addEventListener("click", () => {
                presets.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                
                const presetKey = btn.getAttribute("data-preset");
                promptInput.value = btn.querySelector("span").textContent;
                renderOutput(presetKey);
            });
        });
        
        if (generateBtn) {
            generateBtn.addEventListener("click", () => {
                const text = promptInput.value.trim().toLowerCase();
                let chosenKey = "card";
                if (text.includes("زر") || text.includes("button")) chosenKey = "button";
                else if (text.includes("نص") || text.includes("gradient") || text.includes("text")) chosenKey = "text";
                
                presets.forEach(b => {
                    if (b.getAttribute("data-preset") === chosenKey) b.classList.add("active");
                    else b.classList.remove("active");
                });
                
                renderOutput(chosenKey);
            });
        }
    }
    
    if (window.lucide) window.lucide.createIcons();
}

const AIChatCompanion = {
    database: {
        "ai-business-future": {
            suggestions: [
                "ما هو جوهر تغيير الذكاء الاصطناعي للأعمال؟",
                "كيف يؤثر الذكاء الاصطناعي على الكفاءة التشغيلية؟",
                "ما هي أهم 3 نصائح للشركات للانتقال؟"
            ],
            responses: {
                "ما هو جوهر تغيير الذكاء الاصطناعي للأعمال؟": "جوهر هذا التحول يكمن في دمج الذكاء الاصطناعي في صميم سلاسل القيمة وليس مجرد كأداة إضافية. يتيح ذلك تحليلاً فوريًا للبيانات الضخمة وتنبؤات استراتيجية دقيقة تساهم في تسريع اتخاذ القرار بنسبة تصل إلى 40%.",
                "كيف يؤثر الذكاء الاصطناعي على الكفاءة التشغيلية؟": "يساهم الذكاء الاصطناعي في أتمتة المهام المتكررة، مما يوفر حوالي 30% من وقت الموظفين للتركيز على المهام الاستراتيجية والإبداعية، وبالتالي يرفع مستوى الكفاءة ويقلل الأخطاء البشرية بنسبة كبيرة.",
                "ما هي أهم 3 نصائح للشركات للانتقال؟": "الخطوات الأساسية هي: أولاً، تدريب وتطوير الكفاءات البشرية؛ ثانياً، البدء بأتمتة العمليات الأكثر استهلاكاً للوقت؛ وثالثاً، بناء نظام مرن لإدارة وتكامل البيانات داخل المؤسسة."
            },
            defaultResponse: "مستقبل الأعمال يعتمد بشكل جذري على دمج الذكاء الاصطناعي. هذا المقال يركز على الكفاءة التشغيلية ومستويات الإنتاجية المعززة بالآلات الذكية وكيفية صياغة خطط استراتيجية مرنة."
        },
        "ai-productivity-tools": {
            suggestions: [
                "ما هي أفضل أداة لتنظيم المهام؟",
                "كيف يوفر الذكاء الاصطناعي الوقت في كتابة البريد؟",
                "ما هي الأدوات الموصى بها لتوليد الأفكار؟"
            ],
            responses: {
                "ما هي أفضل أداة لتنظيم المهام؟": "أداة Notion AI و ClickUp Brain تعتبران الأبرز في تنظيم المهام وأتمتة كتابة الملاحظات ومحاضر الاجتماعات وتوليد خطط العمل الذكية بشكل فوري.",
                "كيف يوفر الذكاء الاصطناعي الوقت في كتابة البريد؟": "عبر استخدام أدوات مثل ChatGPT أو Copilot لإنشاء مسودات البريد الإلكتروني، وتلخيص سلاسل الرسائل الطويلة. هذا يوفر للمستخدم المتوسط ما يقارب 5 ساعات أسبوعياً كان يقضيها في التصفح والكتابة.",
                "ما هي الأدوات الموصى بها لتوليد الأفكار؟": "لعل أداة Claude 3.5 Sonnet وتطبيقات التفكير البصري مثل Miro Assist هي الأفضل في العصف الذهني وتوليد الأفكار وهيكلتها بطريقة منطقية ومقنعة."
            },
            defaultResponse: "الأدوات العشرة المذكورة في المقال تغطي أتمتة الكتابة والتنظيم والبرمجة وتحليل البيانات لرفع الإنتاجية الشخصية والمؤسسية."
        },
        "business-automation-efficiency": {
            suggestions: [
                "كيف أبدأ أتمتة شركتي بدون ميزانية ضخمة؟",
                "ما هي الأدوات المناسبة للربط بين التطبيقات؟",
                "كيف تؤثر الأتمتة على علاقات العملاء؟"
            ],
            responses: {
                "كيف أبدأ أتمتة شركتي بدون ميزانية ضخمة؟": "يمكنك البدء مجانًا باستخدام أدوات مثل Make أو Zapier للربط التلقائي بين بريدك الإلكتروني وجداول بيانات Google. ابدأ بأبسط عملية مثل نقل بيانات العملاء الجدد تلقائيًا.",
                "ما هي الأدوات المناسبة للربط بين التطبيقات؟": "أدوات الربط (No-code Integration) الأقوى هي Zapier (لسهولة الاستخدام) و Make (للمسارات المعقدة والمتعددة الخطوات والتكلفة الأقل)، و activepieces كبديل مفتوح المصدر.",
                "كيف تؤثر الأتمتة على علاقات العملاء؟": "الأتمتة تنقذ خدمة العملاء عبر الرد الفوري المبرمج. حيث يتم إرسال رسائل تأكيد فورية أو إجابات عن الأسئلة الشائعة، مما يرفع تقييم رضا العملاء بنسبة 25% مع تخفيف العبء عن فريق الدعم."
            },
            defaultResponse: "تعتمد الأتمتة على بناء تدفقات عمل رقمية تلغي التدخل البشري في إدخال البيانات المكرر، مما يوفر وقتاً قيماً ويزيد من سرعة استجابة المشاريع."
        },
        "future-tech-generative-ai": {
            suggestions: [
                "هل سيلغي الذكاء الاصطناعي وظيفة المبرمج؟",
                "كيف يستفيد المبرمج اليوم من أدوات الذكاء الاصطناعي؟",
                "ما هي أهم المهارات للمطورين في عصر الذكاء الاصطناعي؟"
            ],
            responses: {
                "هل سيلغي الذكاء الاصطناعي وظيفة المبرمج؟": "لا، لن يلغي وظيفة المبرمج، بل سيعيد تعريفها. سيتحول المبرمج من كاتب للأكواد (Coder) إلى مهندس حلول ومصمم معماري للنظم (Software Architect) يشرف على توجيه نماذج الذكاء الاصطناعي.",
                "كيف يستفيد المبرمج اليوم من أدوات الذكاء الاصطناعي؟": "يستفيد المطورون عبر تسريع كتابة الأكواد الروتينية، والبحث السريع عن الثغرات، وتوليد اختبارات الوحدة (Unit Tests)، وتوثيق الشيفرة البرمجية بشكل تلقائي، مما يضاعف سرعة التطوير بمرتين.",
                "ما هي أهم المهارات للمطورين في عصر الذكاء الاصطناعي؟": "المهارات الحاسمة هي: صياغة الأوامر وهندسة الأوامر (Prompt Engineering)، فهم معمارية البرمجيات، حل المشكلات المعقدة، والقدرة على مراجعة وفحص وتصحيح الأكواد المولدة بواسطة الذكاء الاصطناعي."
            },
            defaultResponse: "الذكاء الاصطناعي التوليدي يعزز سرعة كتابة الشيفرات بشكل هائل. يجب على المبرمجين التكيف كمهندسي نظم يوجهون الآلة بدلاً من كتابة كود مكرر يدوياً."
        }
    },
    
    currentArticleId: null,
    
    init(articleId) {
        this.currentArticleId = articleId;
        
        const messagesBox = document.getElementById("ai-chat-messages-box");
        if (messagesBox) {
            messagesBox.innerHTML = `
                <div class="chat-message bot-message">
                    <div class="chat-avatar"><i data-lucide="bot"></i></div>
                    <div class="chat-text">أهلاً بك! أنا مساعد سرد الذكي، يمكنك سؤالي حول محتوى هذا المقال أو اختيار أحد الأسئلة المقترحة بالأسفل.</div>
                </div>
            `;
        }
        
        const suggestionsBox = document.getElementById("ai-chat-suggestions-box");
        const articleData = this.database[articleId];
        if (suggestionsBox && articleData) {
            suggestionsBox.innerHTML = articleData.suggestions.map(q => {
                return `<button class="suggestion-chip">${q}</button>`;
            }).join("");
            
            suggestionsBox.querySelectorAll(".suggestion-chip").forEach(chip => {
                chip.addEventListener("click", () => {
                    this.askQuestion(chip.textContent);
                });
            });
        }
        
        const sendBtn = document.getElementById("ai-chat-send-btn");
        const userInput = document.getElementById("ai-chat-user-input");
        
        if (sendBtn && userInput) {
            const newSendBtn = sendBtn.cloneNode(true);
            sendBtn.parentNode.replaceChild(newSendBtn, sendBtn);
            
            const handleSend = () => {
                const text = userInput.value.trim();
                if (text) {
                    this.askQuestion(text);
                    userInput.value = "";
                }
            };
            
            newSendBtn.addEventListener("click", handleSend);
            userInput.onkeypress = (e) => {
                if (e.key === "Enter") {
                    handleSend();
                }
            };
        }
        
        if (window.lucide) window.lucide.createIcons();
    },
    
    askQuestion(text) {
        const messagesBox = document.getElementById("ai-chat-messages-box");
        if (!messagesBox) return;
        
        const userMsg = document.createElement("div");
        userMsg.className = "chat-message user-message";
        userMsg.innerHTML = `
            <div class="chat-avatar"><i data-lucide="user"></i></div>
            <div class="chat-text">${text}</div>
        `;
        messagesBox.appendChild(userMsg);
        messagesBox.scrollTop = messagesBox.scrollHeight;
        
        const botLoading = document.createElement("div");
        botLoading.className = "chat-message bot-message bot-loading-bubble";
        botLoading.innerHTML = `
            <div class="chat-avatar"><i data-lucide="bot"></i></div>
            <div class="chat-text"><i data-lucide="loader-2" class="animate-spin" style="width:14px; height:14px;"></i> جاري التفكير وصياغة الإجابة...</div>
        `;
        messagesBox.appendChild(botLoading);
        messagesBox.scrollTop = messagesBox.scrollHeight;
        if (window.lucide) window.lucide.createIcons();
        
        const articleData = this.database[this.currentArticleId];
        let answer = articleData ? articleData.defaultResponse : "عذراً، لم أتمكن من العثور على المقال.";
        
        if (articleData && articleData.responses[text]) {
            answer = articleData.responses[text];
        }
        
        setTimeout(() => {
            botLoading.remove();
            
            const botMsg = document.createElement("div");
            botMsg.className = "chat-message bot-message";
            botMsg.innerHTML = `
                <div class="chat-avatar"><i data-lucide="bot"></i></div>
                <div class="chat-text"></div>
            `;
            messagesBox.appendChild(botMsg);
            
            let index = 0;
            const textContainer = botMsg.querySelector(".chat-text");
            const interval = setInterval(() => {
                if (index < answer.length) {
                    textContainer.textContent += answer.charAt(index);
                    index++;
                    messagesBox.scrollTop = messagesBox.scrollHeight;
                } else {
                    clearInterval(interval);
                }
            }, 15);
            
            if (window.lucide) window.lucide.createIcons();
        }, 1200);
    }
};
