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
    summarizedArticles: new Set() // Keep track of articles where AI Summary was generated in the session
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
    aiSummaryBoxWrapper: document.getElementById("ai-summary-box-wrapper")
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
        ELEMENTS.viewHome.classList.add("active-view");
        renderHomePage();
    } else if (viewName === "articles") {
        ELEMENTS.viewArticles.classList.add("active-view");
        renderArchivePage();
    } else if (viewName === "about") {
        ELEMENTS.viewAbout.classList.add("active-view");
    }
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
    
    // Show article details view container
    [ELEMENTS.viewHome, ELEMENTS.viewArticles, ELEMENTS.viewAbout].forEach(view => {
        view.classList.remove("active-view");
    });
    ELEMENTS.viewArticleDetail.classList.add("active-view");
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Bookmark Toggle Button set
    const isSaved = STATE.bookmarks.includes(article.id);
    updateDetailBookmarkButtonState(isSaved);
    
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
    
    // Handle AI Summary states
    if (STATE.summarizedArticles.has(article.id)) {
        // Already generated, show it directly with no typewriter simulation
        ELEMENTS.aiSummaryContent.classList.remove("collapse-summary");
        ELEMENTS.aiSummaryText.textContent = article.aiSummary;
        ELEMENTS.generateAiSummaryBtn.innerHTML = `<span>الملخص جاهز</span> <i data-lucide="check"></i>`;
        ELEMENTS.generateAiSummaryBtn.style.opacity = "0.7";
        ELEMENTS.generateAiSummaryBtn.disabled = true;
    } else {
        // Reset summary box interface
        ELEMENTS.aiSummaryContent.classList.add("collapse-summary");
        ELEMENTS.aiSummaryText.textContent = "اضغط على الزر أعلاه لتوليد ملخص سريع للمقال بواسطة نموذج سرد الذكي.";
        ELEMENTS.generateAiSummaryBtn.innerHTML = `<span>توليد الملخص الآن</span> <i data-lucide="wand-2"></i>`;
        ELEMENTS.generateAiSummaryBtn.style.opacity = "1";
        ELEMENTS.generateAiSummaryBtn.disabled = false;
    }
    
    // Render Related Articles (Find items sharing at least one category tag, excluding the current article)
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

function saveBookmarksToStorage() {
    localStorage.setItem("sard_bookmarks", JSON.stringify(STATE.bookmarks));
    updateBookmarksUIBadge();
    renderBookmarksDrawerList();
    
    // Refresh currently visible home feed cards to toggle card-level check states
    if (STATE.currentView === "home") {
        renderHomePage();
    } else if (STATE.currentView === "articles") {
        renderArchivePage();
    }
}

function toggleBookmark(articleId) {
    const idx = STATE.bookmarks.indexOf(articleId);
    if (idx === -1) {
        STATE.bookmarks.push(articleId);
    } else {
        STATE.bookmarks.splice(idx, 1);
    }
    saveBookmarksToStorage();
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
    
    ELEMENTS.themeToggleBtn.addEventListener("click", () => {
        const isDarkNow = document.body.classList.contains("dark-mode");
        setDarkMode(!isDarkNow);
    });
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
        dockThemeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const isDarkNow = document.body.classList.contains("dark-mode");
            setDarkMode(!isDarkNow);
        });
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
            alert("تم نسخ رابط المقال إلى الحافظة بنجاح!");
        }).catch(err => {
            console.error("فشل نسخ الرابط:", err);
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
    
    // 7. Boot routing engine
    initRouter();
    
    // 8. Auto-render initial view states
    lucide.createIcons();
}

// Bootstrap complete DOM components lifecycle hook
document.addEventListener("DOMContentLoaded", bootstrapApp);
