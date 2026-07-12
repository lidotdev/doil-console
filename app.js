const services = [
  ["로고 제작", "브랜드와 업종에 맞는 로고와 기본 이미지를 제작합니다."],
  ["상세페이지", "상품 사진과 강점을 구매 전환 흐름으로 구성합니다."],
  ["네이버 카페", "카페 홈, 메뉴, 배너, 운영 이미지를 제작합니다."],
  ["네이버 블로그", "스킨, 썸네일, 카테고리 이미지를 정리합니다."],
  ["홈페이지", "회사 소개부터 고객 전환까지 필요한 페이지를 제작합니다."],
  ["쇼핑몰", "상품 판매에 필요한 기본 쇼핑몰 구조와 운영 화면을 제작합니다."],
  ["랜딩페이지", "광고, 이벤트, 신청 전환에 필요한 단일 페이지를 구성합니다."],
  ["웹배너", "홈페이지, 쇼핑몰, 이벤트 영역에 필요한 배너를 제작합니다."],
  ["문서", "회사소개서, 제안서, 안내문 등 기존 문서를 보기 좋게 정리합니다."],
  ["캡처이미지", "캡처 화면의 불필요한 부분을 정리하고 목적에 맞게 보정합니다."],
  ["광고소재", "이벤트, 시즌, 퍼포먼스 광고 배너를 제작합니다."],
  ["AI이미지", "콘텐츠, 배너, 상세페이지에 활용할 수 있는 AI 이미지를 제작합니다."]
];

const clientTasks = [
  ["상품 사진", "제출 필요"],
  ["제품 특징 설명", "제출 필요"],
  ["참고 상세페이지 링크", "확인 완료"]
];

const clientDocs = [
  ["사업자등록증", "확인 완료"],
  ["통장사본", "확인 완료"],
  ["통신판매업 신고증", "보완 필요"]
];

const projects = [
  ["가나다식품", "상세페이지", "자료 수집", "2026.08.10"],
  ["ABC몰", "쇼핑몰 디자인", "디자인 작업중", "2026.08.18"],
  ["도일한의원", "SNS 콘텐츠", "시안 발송", "2026.07.20"]
];

const documents = [
  ["가나다식품", "통신판매업 신고증", "보완 필요"],
  ["ABC몰", "사업자등록증", "확인 대기"],
  ["도일한의원", "법인등기부등본", "확인 완료"]
];

const followUps = [
  ["가나다식품", "여름 시즌 배너 20% 할인 제안", "발송 대기"],
  ["ABC몰", "이벤트 광고소재 재구매 제안", "관심 있음"],
  ["도일한의원", "납품 후 만족도 확인", "오늘 처리"]
];

const blogPosts = [
  {
    id: "detail-page-guide",
    title: "상세페이지 제작 전 준비하면 좋은 자료",
    category: "Guide",
    description: "사진, 상품 특징, 구매 포인트를 미리 정리하면 제작 흐름이 더 매끄러워집니다.",
    thumbStart: "#e9fff0",
    thumbEnd: "#7aef9c"
  },
  {
    id: "brand-tone-guide",
    title: "브랜드 톤을 빠르게 맞추는 방법",
    category: "Branding",
    description: "색상, 문장 톤, 참고 이미지를 기준으로 일관된 디자인 방향을 잡습니다.",
    thumbStart: "#f3ffe3",
    thumbEnd: "#b8f77a"
  },
  {
    id: "sns-content-guide",
    title: "SNS 콘텐츠를 꾸준히 운영하는 기준",
    category: "Content",
    description: "반복 제작이 필요한 콘텐츠는 형식을 정해두면 속도와 완성도를 함께 챙길 수 있습니다.",
    thumbStart: "#e2fff7",
    thumbEnd: "#4ee0b1"
  }
];

function initMobileMenu() {
  const headers = document.querySelectorAll(".site-header");

  headers.forEach((header) => {
    const toggle = header.querySelector(".mobile-menu-toggle");
    if (!toggle) return;

    function setOpen(isOpen) {
      header.classList.toggle("is-menu-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
    }

    toggle.addEventListener("click", () => {
      setOpen(!header.classList.contains("is-menu-open"));
    });

    header.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) setOpen(false);
    });
  });
}

function initFloatingMenu() {
  if (document.body.classList.contains("app-body") || document.body.classList.contains("auth-body")) return;
  if (document.querySelector(".floating-menu")) return;

  const menu = document.createElement("div");
  menu.className = "floating-menu";
  menu.innerHTML = `
    <div class="floating-actions" aria-hidden="true">
      <button class="floating-button" type="button" data-floating-action="up" aria-label="페이지 상단으로 이동">↑</button>
      <button class="floating-button" type="button" data-floating-action="down" aria-label="페이지 하단으로 이동">↓</button>
      <button class="floating-button kakao" type="button" data-floating-action="kakao" aria-label="카카오톡 문의">톡</button>
    </div>
    <button class="floating-toggle" type="button" aria-label="빠른 메뉴 열기" aria-expanded="false">+</button>
  `;

  const toggle = menu.querySelector(".floating-toggle");
  const actions = menu.querySelector(".floating-actions");

  function setOpen(isOpen) {
    menu.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "빠른 메뉴 닫기" : "빠른 메뉴 열기");
    toggle.textContent = isOpen ? "-" : "+";
    actions.setAttribute("aria-hidden", String(!isOpen));
  }

  toggle.addEventListener("click", () => {
    setOpen(!menu.classList.contains("is-open"));
  });

  menu.addEventListener("click", (event) => {
    const button = event.target.closest("[data-floating-action]");
    if (!button) return;

    const action = button.dataset.floatingAction;
    if (action === "up") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (action === "down") {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  document.body.appendChild(menu);
}

function initClientFeedbackForm() {
  const form = document.querySelector("[data-client-feedback-form]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const kind = form.elements.kind?.value || "요청";
    const message = form.elements.message?.value.trim() || "";
    if (!message) {
      form.elements.message?.focus();
      showAdminToast("요청 내용을 입력해 주세요.");
      return;
    }

    const list = form.closest(".panel")?.nextElementSibling?.querySelector(".client-list");
    if (list) {
      const item = document.createElement("a");
      item.href = "#";
      item.innerHTML = `<strong>${kind} 접수</strong><span>신규 접수</span>`;
      list.prepend(item);
    }
    form.reset();
    showAdminToast("요청이 접수되었습니다. 담당자가 확인 후 처리 상태를 변경합니다.");
  });
}

function syncHeaderState() {
  if (!document.body.classList.contains("home-page") && !document.body.classList.contains("about-page") && !document.body.classList.contains("brand-hero-page")) return;
  document.body.classList.toggle("is-at-top", window.scrollY < 12);
}

function initScrollReveal() {
  const revealTargets = document.querySelectorAll([
    ".home-section .section-head",
    ".home-card",
    ".about-intro-copy",
    ".about-intro-stats article",
    ".feature-band",
    ".recurring-box",
    ".recurring-points article",
    ".market-cta",
    ".page-hero > *",
    ".section > article",
    ".portfolio-list article",
    ".faq-list article",
    ".service-card",
    ".panel",
    ".metric-card"
  ].join(", "));

  if (!revealTargets.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canObserve = "IntersectionObserver" in window && !prefersReducedMotion;

  revealTargets.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 55}ms`);
  });

  if (!canObserve) {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.12
  });

  revealTargets.forEach((element) => observer.observe(element));
}

function initCountUpStats() {
  const counters = document.querySelectorAll("[data-count], [data-count-source]");
  if (!counters.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function getBusinessYears() {
    const openedAt = new Date(2021, 2, 8);
    const today = new Date();
    let years = today.getFullYear() - openedAt.getFullYear();
    const anniversary = new Date(today.getFullYear(), openedAt.getMonth(), openedAt.getDate());
    if (today < anniversary) years -= 1;
    return Math.max(years, 0);
  }

  function animate(counter) {
    const source = counter.dataset.countSource;
    const target = source === "services"
      ? services.length
      : source === "businessYears"
        ? getBusinessYears()
        : Number(counter.dataset.count || 0);
    const decimals = Number(counter.dataset.countDecimals || 0);
    if (!target) return;

    if (prefersReducedMotion) {
      counter.textContent = target.toFixed(decimals);
      return;
    }

    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      counter.textContent = decimals ? value.toFixed(decimals) : String(Math.round(value));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animate);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animate(entry.target);
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.4
  });

  counters.forEach((counter) => observer.observe(counter));
}

initMobileMenu();
initClientFeedbackForm();
syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

function initWysiwygEditors() {
  const toolbarButtons = Array.from(document.querySelectorAll("[data-wysiwyg-command]"));
  if (!toolbarButtons.length) return;

  function resolveEditor(button) {
    const target = button.dataset.wysiwygTarget;
    if (target) return document.querySelector(target);
    const container = button.closest(".admin-market-editor, .blog-editor-panel, .admin-modal-panel, .panel");
    return container?.querySelector("[data-wysiwyg-editor], .rich-editor") || document.querySelector("[data-wysiwyg-editor]");
  }

  toolbarButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const editor = resolveEditor(button);
      const command = button.dataset.wysiwygCommand;
      let value = button.dataset.wysiwygValue || null;
      if (!editor || !command) return;

      if (command === "createLink") {
        value = window.prompt("연결할 URL을 입력하세요.", "https://");
        if (!value) return;
      }

      editor.focus();
      document.execCommand(command, false, value);
    });
  });
}

initWysiwygEditors();

function initWysiwygPreviewUploads() {
  const shell = document.querySelector(".wysiwyg-preview-shell");
  if (!shell) return;

  const thumbnailInput = shell.querySelector("[data-wysiwyg-thumbnail-upload]");
  const thumbnailBox = shell.querySelector(".wysiwyg-thumb-box");
  const thumbnailPreview = thumbnailBox?.querySelector("span");
  const imageInput = shell.querySelector("[data-wysiwyg-image-upload]");
  const fileInput = shell.querySelector("[data-wysiwyg-file-upload]");
  const canvas = shell.querySelector(".wysiwyg-canvas");
  const filePanel = shell.querySelector("[data-wysiwyg-file-list]");
  const fileList = filePanel?.querySelector("ul");
  const statusBadge = shell.querySelector("[data-wysiwyg-status-badge]");
  const statusSelect = shell.querySelector("[data-wysiwyg-status-select]");
  const titleInput = shell.querySelector(".wysiwyg-top-fields input[type='text']");
  const slugInput = shell.querySelector("[data-wysiwyg-slug]");
  const seoTitleInput = shell.querySelector(".wysiwyg-meta-card input[value*='도일서비스']");
  const seoDescriptionInput = shell.querySelector(".wysiwyg-meta-card textarea");
  const searchTitle = shell.querySelector("[data-wysiwyg-search-title]");
  const searchUrl = shell.querySelector("[data-wysiwyg-search-url]");
  const searchDescription = shell.querySelector("[data-wysiwyg-search-description]");
  const previewModal = document.querySelector("[data-wysiwyg-preview-modal]");
  const previewBody = document.querySelector("[data-wysiwyg-preview-body]");
  const previewCloseButtons = Array.from(document.querySelectorAll("[data-wysiwyg-preview-close]"));

  function readFile(file, callback) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => callback(reader.result);
    reader.readAsDataURL(file);
  }

  thumbnailInput?.addEventListener("change", () => {
    const file = thumbnailInput.files?.[0];
    if (!file || !thumbnailPreview || !thumbnailBox) return;
    readFile(file, (src) => {
      thumbnailPreview.style.backgroundImage = `url("${src}")`;
      thumbnailPreview.textContent = "";
      thumbnailBox.classList.add("has-image");
    });
  });

  imageInput?.addEventListener("change", () => {
    const file = imageInput.files?.[0];
    if (!file || !canvas) return;
    readFile(file, (src) => {
      const figure = document.createElement("figure");
      figure.className = "wysiwyg-uploaded-figure";
      figure.innerHTML = `<img src="${src}" alt="${file.name}"><figcaption>${file.name}</figcaption>`;
      canvas.appendChild(figure);
      imageInput.value = "";
    });
  });

  fileInput?.addEventListener("change", () => {
    const files = Array.from(fileInput.files || []);
    if (!files.length || !fileList || !filePanel) return;
    filePanel.hidden = false;
    files.forEach((file) => {
      const item = document.createElement("li");
      const sizeKb = Math.max(1, Math.round(file.size / 1024)).toLocaleString("ko-KR");
      item.innerHTML = `<span>${file.name}</span><small>${sizeKb}KB</small>`;
      fileList.appendChild(item);
    });
    fileInput.value = "";
  });

  function setStatus(status) {
    if (statusSelect) statusSelect.value = status;
    if (!statusBadge) return;
    statusBadge.textContent = status;
    statusBadge.classList.remove("orange", "green", "gray", "blue");
    const className = status === "공개" ? "green" : status === "비공개" ? "gray" : status === "예약발행" ? "blue" : "orange";
    statusBadge.classList.add(className);
  }

  function updateSearchPreview() {
    const title = seoTitleInput?.value || titleInput?.value || "제목 없음";
    const slug = slugInput?.value || "preview";
    const description = seoDescriptionInput?.value || "설명이 입력되지 않았습니다.";
    if (searchTitle) searchTitle.textContent = title;
    if (searchUrl) searchUrl.textContent = `https://doilservice.co.kr/market/${slug}`;
    if (searchDescription) searchDescription.textContent = description;
  }

  function openPreview() {
    if (!previewModal || !previewBody || !canvas) return;
    previewBody.innerHTML = `<article class="wysiwyg-public-article">${canvas.innerHTML}</article>`;
    previewModal.hidden = false;
    document.body.classList.add("modal-open");
  }

  function closePreview() {
    if (!previewModal) return;
    previewModal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  shell.querySelectorAll("[data-wysiwyg-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.wysiwygAction;
      updateSearchPreview();
      if (action === "preview") {
        openPreview();
        return;
      }
      if (action === "publish") {
        setStatus("공개");
        showAdminToast("공개 상태로 변경되었습니다. 실제 서비스에서는 저장 후 공개 페이지에 반영됩니다.");
        return;
      }
      setStatus("임시저장");
      showAdminToast("임시저장되었습니다.");
    });
  });

  statusSelect?.addEventListener("change", () => setStatus(statusSelect.value));
  [titleInput, slugInput, seoTitleInput, seoDescriptionInput].forEach((input) => {
    input?.addEventListener("input", updateSearchPreview);
  });
  previewCloseButtons.forEach((button) => button.addEventListener("click", closePreview));
  updateSearchPreview();
}

initWysiwygPreviewUploads();

function initBlogEditor() {
  const editor = document.getElementById("blogEditor");
  const titleInput = document.getElementById("blogTitleInput");
  const slugInput = document.getElementById("blogSlugInput");
  const seoTitleInput = document.getElementById("seoTitleInput");
  const seoDescriptionInput = document.getElementById("seoDescriptionInput");
  const previewTitle = document.getElementById("searchPreviewTitle");
  const previewUrl = document.getElementById("searchPreviewUrl");
  const previewDescription = document.getElementById("searchPreviewDescription");
  const thumbnailInput = document.getElementById("thumbnailInput");
  const thumbnailPreview = document.getElementById("thumbnailPreview");
  const actionButtons = Array.from(document.querySelectorAll(".blog-meta-panel .admin-modal-actions button"));
  if (!editor) return;

  function toSlug(value) {
    return value
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9가-힣\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function updatePreview() {
    const title = seoTitleInput?.value || titleInput?.value || "블로그 글 제목이 표시됩니다.";
    const slug = slugInput?.value || toSlug(titleInput?.value || "");
    const description = seoDescriptionInput?.value || "SEO 설명을 작성하면 검색 결과에 보일 문장이 미리 표시됩니다.";

    if (previewTitle) previewTitle.textContent = title;
    if (previewUrl) previewUrl.textContent = `https://doilservice.co.kr/blog/${slug || ""}`;
    if (previewDescription) previewDescription.textContent = description;
  }

  titleInput?.addEventListener("input", () => {
    if (slugInput && !slugInput.dataset.touched) slugInput.value = toSlug(titleInput.value);
    if (seoTitleInput && !seoTitleInput.dataset.touched) seoTitleInput.value = titleInput.value;
    updatePreview();
  });

  [slugInput, seoTitleInput, seoDescriptionInput].forEach((input) => {
    input?.addEventListener("input", () => {
      input.dataset.touched = "true";
      updatePreview();
    });
  });

  thumbnailInput?.addEventListener("change", () => {
    const file = thumbnailInput.files?.[0];
    if (!file || !thumbnailPreview) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      thumbnailPreview.style.backgroundImage = `url("${reader.result}")`;
      thumbnailPreview.closest(".thumbnail-uploader")?.classList.add("has-image");
    });
    reader.readAsDataURL(file);
  });

  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.textContent.replace(/\s+/g, "").includes("발행") ? "발행" : "임시저장";
      const title = titleInput?.value?.trim() || "블로그 글";
      showAdminToast(`${title} ${action} 처리되었습니다.`);
    });
  });

  updatePreview();
}

initBlogEditor();

function initBlogList() {
  const list = document.getElementById("blogList");
  const searchInput = document.getElementById("blogSearchInput");
  const empty = document.getElementById("blogEmpty");
  const viewButtons = document.querySelectorAll("[data-blog-view]");
  if (!list) return;

  let currentView = "card";

  function renderPosts() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const filteredPosts = blogPosts.filter((post) => {
      const text = `${post.title} ${post.category} ${post.description}`.toLowerCase();
      return text.includes(query);
    });

    list.classList.toggle("blog-card-view", currentView === "card");
    list.classList.toggle("blog-list-view", currentView === "list");

    list.innerHTML = filteredPosts.map((post) => `
      <article id="${post.id}" class="blog-post-card">
        <a class="blog-thumb" href="blog.html#${post.id}" aria-label="${post.title}" style="--thumb-start: ${post.thumbStart}; --thumb-end: ${post.thumbEnd};"></a>
        <div class="blog-post-body">
          <span class="blog-post-meta">${post.category}</span>
          <h2><a href="blog.html#${post.id}">${post.title}</a></h2>
          <p>${post.description}</p>
        </div>
      </article>
    `).join("");

    if (empty) empty.hidden = filteredPosts.length > 0;
  }

  viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentView = button.dataset.blogView || "card";
      viewButtons.forEach((viewButton) => {
        const isActive = viewButton === button;
        viewButton.classList.toggle("active", isActive);
        viewButton.setAttribute("aria-pressed", String(isActive));
      });
      renderPosts();
    });
  });

  searchInput?.addEventListener("input", renderPosts);
  renderPosts();
}

initBlogList();

function initPortfolioGallery() {
  const gallery = document.getElementById("portfolioGallery");
  const searchInput = document.getElementById("portfolioSearchInput");
  const filterButtons = document.querySelectorAll("[data-portfolio-filter]");
  const viewButtons = document.querySelectorAll("[data-portfolio-view]");
  const favoriteToggle = document.querySelector("[data-portfolio-favorites]");
  const empty = document.getElementById("portfolioEmpty");
  if (!gallery) return;

  const cards = Array.from(gallery.querySelectorAll("article"));
  const storageKey = "doilPortfolioFavorites";
  let activeFilter = "all";
  let currentView = "card";
  let showFavoritesOnly = false;
  let favorites = new Set();

  try {
    favorites = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));
  } catch {
    favorites = new Set();
  }

  function saveFavorites() {
    localStorage.setItem(storageKey, JSON.stringify(Array.from(favorites)));
  }

  function syncFavoriteButtons() {
    cards.forEach((card) => {
      const id = card.dataset.portfolioId;
      const button = card.querySelector(".portfolio-favorite");
      const isFavorite = favorites.has(id);
      button?.setAttribute("aria-pressed", String(isFavorite));
    });
  }

  function applyFilters() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    let visibleCount = 0;

    gallery.classList.toggle("portfolio-card-view", currentView === "card");
    gallery.classList.toggle("portfolio-list-view", currentView === "list");

    cards.forEach((card) => {
      const category = card.dataset.category || "";
      const title = card.dataset.title || "";
      const id = card.dataset.portfolioId || "";
      const searchable = `${category} ${title}`.toLowerCase();
      const matchesSearch = searchable.includes(query);
      const matchesFilter = activeFilter === "all" || category === activeFilter;
      const matchesFavorite = !showFavoritesOnly || favorites.has(id);
      const isVisible = matchesSearch && matchesFilter && matchesFavorite;

      card.classList.toggle("is-hidden", !isVisible);
      if (isVisible) visibleCount += 1;
    });

    if (empty) empty.hidden = visibleCount > 0;
  }

  gallery.querySelectorAll(".portfolio-favorite").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("article");
      const id = card?.dataset.portfolioId;
      if (!id) return;

      if (favorites.has(id)) {
        favorites.delete(id);
      } else {
        favorites.add(id);
      }

      saveFavorites();
      syncFavoriteButtons();
      applyFilters();
    });
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.portfolioFilter || "all";
      filterButtons.forEach((filterButton) => {
        const isActive = filterButton === button;
        filterButton.classList.toggle("active", isActive);
        filterButton.setAttribute("aria-pressed", String(isActive));
      });
      applyFilters();
    });
  });

  viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentView = button.dataset.portfolioView || "card";
      viewButtons.forEach((viewButton) => {
        const isActive = viewButton === button;
        viewButton.classList.toggle("active", isActive);
        viewButton.setAttribute("aria-pressed", String(isActive));
      });
      applyFilters();
    });
  });

  favoriteToggle?.addEventListener("click", () => {
    showFavoritesOnly = !showFavoritesOnly;
    favoriteToggle.classList.toggle("active", showFavoritesOnly);
    favoriteToggle.setAttribute("aria-pressed", String(showFavoritesOnly));
    applyFilters();
  });

  searchInput?.addEventListener("input", applyFilters);
  syncFavoriteButtons();
  applyFilters();
}

initPortfolioGallery();

function badge(status) {
  const tone = status.includes("완료") || status.includes("관심") ? "green" : status.includes("보완") || status.includes("대기") ? "orange" : "blue";
  return `<span class="status-pill ${tone}">${status}</span>`;
}

function render(id, html) {
  const target = document.getElementById(id);
  if (target) target.innerHTML = html;
}

function initClientSidebar() {
  if (!document.body.classList.contains("client-page")) return;

  document.querySelectorAll(".client-side-group").forEach((group) => {
    const toggle = group.querySelector(".client-manage-toggle");
    if (!toggle) return;

    function setOpen(isOpen) {
      group.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    }

    setOpen(group.classList.contains("is-open"));

    toggle.addEventListener("click", () => {
      setOpen(!group.classList.contains("is-open"));
    });
  });
}

initClientSidebar();

function initSiteConsoleMenus() {
  if (!document.body.classList.contains("client-page") || document.body.classList.contains("admin-page")) return;
  const sideMenu = document.querySelector(".client-side-menu");
  if (!sideMenu) return;

  const brandText = document.querySelector(".site-header .brand span");
  const sideHead = sideMenu.querySelector(".client-side-head strong");
  if (brandText) brandText.textContent = "DOIL Site";
  if (sideHead) sideHead.textContent = "DOIL Site";

  const path = window.location.pathname;
  const hash = window.location.hash;
  const isDashboard = path.endsWith("client.html") || path.endsWith("/");
  const isSettings = path.endsWith("client-profile.html");
  const menuItems = [
    ["client.html", "assets/client-dashboard.svg", "대시보드", isDashboard && !hash],
    ["client.html#analytics", "assets/client-transactions.svg", "통계", isDashboard && hash === "#analytics"],
    ["client-profile.html#seo-settings", "assets/client-news.svg", "SEO 설정", isSettings && (!hash || hash === "#seo-settings")],
    ["client-profile.html#domain-settings", "assets/client-websites.svg", "도메인/SSL", isSettings && hash === "#domain-settings"],
    ["client-profile.html#advanced-settings", "assets/client-documents.svg", "고급설정", isSettings && hash === "#advanced-settings"],
    ["client.html#addons", "assets/client-market.svg", "부가기능", isDashboard && hash === "#addons", "3"]
  ];

  sideMenu.innerHTML = `
    <div class="client-side-head"><strong>DOIL Site</strong></div>
    ${menuItems.map(([href, icon, label, active, badge]) => `
      <a class="client-menu-item${active ? " active" : ""}" href="${href}">
        ${badge
          ? `<span class="client-menu-label"><img class="client-menu-icon" src="${icon}" alt="" aria-hidden="true"><span>${label}</span></span><span class="client-menu-badge">${badge}</span>`
          : `<img class="client-menu-icon" src="${icon}" alt="" aria-hidden="true"><span>${label}</span>`}
      </a>
    `).join("")}
  `;
}

initSiteConsoleMenus();
window.addEventListener("hashchange", initSiteConsoleMenus);

const siteConsoleRuntime = {
  websiteId: "site_addbeauty_001",
  endpoints: {
    overview: "/api/client/websites/{websiteId}/overview",
    analytics: "/api/client/websites/{websiteId}/analytics?range=30d",
    pagespeed: "/api/client/websites/{websiteId}/pagespeed/run",
    domain: "/api/client/websites/{websiteId}/domain/status",
    seo: "/api/client/websites/{websiteId}/seo",
    files: "/api/client/websites/{websiteId}/technical-files",
    code: "/api/client/websites/{websiteId}/common-code",
    addons: "/api/client/websites/{websiteId}/addons",
    health: "/api/client/websites/{websiteId}/health-check"
  },
  fileSurfaces: ["robots.txt", "llms.txt", "sitemap.xml", "rss.xml", "ads.txt"],
  codeSlots: ["headTop", "head", "bodyStart", "footer"],
  analyticsMetrics: ["activeUsers", "sessions30d", "averageEngagementTime", "conversionRate"]
};

function initSiteConsole() {
  const lighthouseButton = document.querySelector("[data-lighthouse-check]");
  const scoreTargets = Array.from(document.querySelectorAll("[data-lighthouse-score]"));
  const scoreBreakdownTargets = Array.from(document.querySelectorAll("[data-score-target]"));
  const saveButtons = Array.from(document.querySelectorAll("[data-site-save]"));
  const healthButton = document.querySelector("[data-site-health-check]");
  const copyButtons = Array.from(document.querySelectorAll(".site-link-grid button"));
  const configFields = Array.from(document.querySelectorAll("[data-config-key]"));
  const contractTargets = Array.from(document.querySelectorAll("[data-site-contract]"));

  function runtimeEndpoint(key) {
    return (siteConsoleRuntime.endpoints[key] || "").replace("{websiteId}", siteConsoleRuntime.websiteId);
  }

  function setNestedValue(payload, dottedKey, value) {
    const parts = dottedKey.split(".");
    let cursor = payload;
    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        cursor[part] = value;
        return;
      }
      cursor[part] = cursor[part] || {};
      cursor = cursor[part];
    });
  }

  function collectSiteConfig(scope) {
    return configFields.reduce((payload, field) => {
      const key = field.dataset.configKey;
      const inScope = !scope || field.closest(`[data-site-module="${scope}"]`);
      if (!key || !inScope) return payload;
      setNestedValue(payload, key, field.type === "checkbox" ? field.checked : field.value);
      return payload;
    }, {});
  }

  contractTargets.forEach((target) => {
    const contractKey = target.dataset.siteContract;
    const endpoint = runtimeEndpoint(contractKey);
    if (endpoint) target.textContent = endpoint;
  });

  document.querySelectorAll("[data-site-contract-files]").forEach((target) => {
    target.textContent = siteConsoleRuntime.fileSurfaces.join(", ");
  });

  document.querySelectorAll("[data-site-contract-code]").forEach((target) => {
    target.textContent = siteConsoleRuntime.codeSlots.join(", ");
  });

  lighthouseButton?.addEventListener("click", () => {
    const originalText = lighthouseButton.textContent;
    lighthouseButton.textContent = "측정 중";
    lighthouseButton.disabled = true;
    scoreTargets.forEach((target) => {
      target.textContent = "...";
    });

    window.setTimeout(() => {
      scoreTargets.forEach((target) => {
        target.textContent = "94";
      });
      const nextScores = {
        seo: "94",
        performance: "87",
        accessibility: "96",
        "best-practices": "93"
      };
      scoreBreakdownTargets.forEach((target) => {
        target.textContent = nextScores[target.dataset.scoreTarget] || target.textContent;
      });
      lighthouseButton.textContent = originalText || "점수 측정";
      lighthouseButton.disabled = false;
      showAdminToast("PageSpeed / Lighthouse 측정 결과가 반영되었습니다.");
    }, 800);
  });

  saveButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const scope = button.dataset.siteSave;
      const payload = collectSiteConfig(scope);
      const endpointKeys = scope === "advanced" ? ["files", "code"] : [scope];
      button.dataset.lastPayload = JSON.stringify(payload);
      console.info("[site-console:save]", {
        websiteId: siteConsoleRuntime.websiteId,
        endpoints: endpointKeys.map(runtimeEndpoint),
        payload
      });
      showAdminToast(`${scope === "advanced" ? "고급설정" : "SEO 설정"}이 저장되었습니다.`);
    });
  });

  healthButton?.addEventListener("click", () => {
    healthButton.disabled = true;
    healthButton.textContent = "점검 중";
    window.setTimeout(() => {
      healthButton.disabled = false;
      healthButton.textContent = "전체 점검";
      showAdminToast("홈페이지 운영 상태를 다시 점검했습니다.");
    }, 700);
  });

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.closest("article")?.querySelector("strong")?.textContent || "";
      if (navigator.clipboard && value) {
        navigator.clipboard.writeText(value).catch(() => {});
      }
      showAdminToast("주소를 복사했습니다.");
    });
  });
}

initSiteConsole();

function initClientProjectFilters() {
  const filterWrap = document.querySelector(".client-project-status-filter");
  const projectCards = Array.from(document.querySelectorAll("[data-project-status]"));
  const countTarget = document.querySelector("[data-project-count]");
  if (!filterWrap || !projectCards.length) return;

  const filterButtons = Array.from(filterWrap.querySelectorAll("[data-project-filter]"));
  const dateStart = document.querySelector("[data-project-date-start]");
  const dateEnd = document.querySelector("[data-project-date-end]");
  const datePresetButtons = Array.from(document.querySelectorAll("[data-project-date-preset]"));
  const dateMessage = document.querySelector("[data-project-date-message]");
  const emptyState = document.querySelector("[data-project-empty]");
  let currentFilter = "all";
  const maxRangeMonths = 12;

  function getProjectGroup(card) {
    const projectStatus = card.dataset.projectStatus;
    if (card.dataset.projectGroup) return card.dataset.projectGroup;
    if (projectStatus === "progress") return "active";
    return projectStatus;
  }

  function getDateValue(input) {
    if (!input || !input.value) return null;
    const date = new Date(`${input.value}T00:00:00`);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function addMonths(date, months) {
    const next = new Date(date);
    next.setMonth(next.getMonth() + months);
    return next;
  }

  function getTodayDate() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  }

  function formatDateValue(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function formatProjectDateLabel(value) {
    const date = new Date(`${value}T00:00:00`);
    if (Number.isNaN(date.getTime())) return value;

    const weekdays = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${weekdays[date.getDay()]}`;
  }

  function renderProjectDateSeparators() {
    document.querySelectorAll(".project-date-separator").forEach((separator) => separator.remove());

    let previousDate = "";
    projectCards.forEach((card) => {
      if (card.hidden || card.classList.contains("is-filtered-out")) return;

      const orderDate = card.dataset.orderDate;
      if (!orderDate || orderDate === previousDate) return;

      const separator = document.createElement("div");
      separator.className = "project-date-separator";
      separator.textContent = formatProjectDateLabel(orderDate);
      card.before(separator);
      previousDate = orderDate;
    });
  }

  function enforceDateRange() {
    if (!dateStart || !dateEnd) return;
    const start = getDateValue(dateStart);
    const end = getDateValue(dateEnd);
    if (!start || !end) {
      if (dateMessage) dateMessage.textContent = "";
      return;
    }

    if (end < start) {
      dateEnd.value = dateStart.value;
      if (dateMessage) dateMessage.textContent = "종료일은 시작일보다 빠를 수 없습니다.";
      return;
    }

    const maxEnd = addMonths(start, maxRangeMonths);
    if (end > maxEnd) {
      dateEnd.value = formatDateValue(maxEnd);
      if (dateMessage) dateMessage.textContent = "조회 기간은 최대 1년까지만 선택할 수 있습니다.";
      return;
    }

    if (dateMessage) dateMessage.textContent = "";
  }

  function isDateMatch(card) {
    const orderedAt = card.dataset.orderDate;
    if (!orderedAt) return true;

    const orderDate = new Date(`${orderedAt}T00:00:00`);
    const start = getDateValue(dateStart);
    const end = getDateValue(dateEnd);

    if (start && orderDate < start) return false;
    if (end && orderDate > end) return false;
    return true;
  }

  function isFilterMatch(card, status) {
    const statusMatches = status === "all" || getProjectGroup(card) === status;
    return statusMatches && isDateMatch(card);
  }

  function updateFilterCounts() {
    filterButtons.forEach((button) => {
      const status = button.dataset.projectFilter;
      const count = projectCards.filter((card) => isFilterMatch(card, status)).length;
      const countLabel = button.querySelector("span");
      if (countLabel) countLabel.textContent = String(count);
    });
  }

  function applyFilter(status) {
    currentFilter = status;
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const isVisible = isFilterMatch(card, status);
      card.hidden = !isVisible;
      card.classList.toggle("is-filtered-out", !isVisible);
      card.setAttribute("aria-hidden", String(!isVisible));
      if (isVisible) visibleCount += 1;
    });

    filterButtons.forEach((button) => {
      const isActive = button.dataset.projectFilter === status;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (countTarget) countTarget.textContent = `${visibleCount}건`;
    if (emptyState) emptyState.hidden = visibleCount > 0;
    renderProjectDateSeparators();
  }

  function setDatePresetActive(value) {
    datePresetButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.projectDatePreset === value);
    });
  }

  function refreshWithDateFilter() {
    enforceDateRange();
    updateFilterCounts();
    applyFilter(currentFilter);
  }

  window.applyClientProjectFilter = applyFilter;
  window.refreshClientProjectFilterCounts = () => {
    updateFilterCounts();
    applyFilter(currentFilter);
  };

  updateFilterCounts();

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.projectFilter));
  });

  [dateStart, dateEnd].forEach((input) => {
    if (!input) return;
    input.addEventListener("change", () => {
      setDatePresetActive("");
      refreshWithDateFilter();
    });
  });

  datePresetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const preset = button.dataset.projectDatePreset;

      if (dateStart) dateStart.value = "";
      if (dateEnd) dateEnd.value = "";

      if (preset !== "all") {
        const end = getTodayDate();
        const start = addMonths(end, -Number(preset));
        if (dateStart) dateStart.value = formatDateValue(start);
        if (dateEnd) dateEnd.value = formatDateValue(end);
      }

      setDatePresetActive(preset);
      refreshWithDateFilter();
    });
  });
}

initClientProjectFilters();

function initClientTransactionFilters() {
  const filterWrap = document.querySelector(".transaction-status-filter");
  const transactionCards = Array.from(document.querySelectorAll("[data-transaction-status]"));
  const countTarget = document.querySelector("[data-market-purchase-count]");
  if (!filterWrap || !transactionCards.length) return;

  const filterButtons = Array.from(filterWrap.querySelectorAll("[data-transaction-filter]"));
  const dateStart = document.querySelector("[data-transaction-date-start]");
  const dateEnd = document.querySelector("[data-transaction-date-end]");
  const datePresetButtons = Array.from(document.querySelectorAll("[data-transaction-date-preset]"));
  const dateMessage = document.querySelector("[data-transaction-date-message]");
  const emptyState = document.querySelector("[data-transaction-empty]");
  let currentFilter = "all";
  const maxRangeMonths = 12;

  function getDateValue(input) {
    if (!input || !input.value) return null;
    const date = new Date(`${input.value}T00:00:00`);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function addMonths(date, months) {
    const next = new Date(date);
    next.setMonth(next.getMonth() + months);
    return next;
  }

  function getTodayDate() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  }

  function formatDateValue(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function enforceDateRange() {
    if (!dateStart || !dateEnd) return;
    const start = getDateValue(dateStart);
    const end = getDateValue(dateEnd);
    if (!start || !end) {
      if (dateMessage) dateMessage.textContent = "";
      return;
    }

    if (end < start) {
      dateEnd.value = dateStart.value;
      if (dateMessage) dateMessage.textContent = "종료일은 시작일보다 빠를 수 없습니다.";
      return;
    }

    const maxEnd = addMonths(start, maxRangeMonths);
    if (end > maxEnd) {
      dateEnd.value = formatDateValue(maxEnd);
      if (dateMessage) dateMessage.textContent = "조회 기간은 최대 1년까지만 선택할 수 있습니다.";
      return;
    }

    if (dateMessage) dateMessage.textContent = "";
  }

  function isDateMatch(card) {
    const dateValue = card.dataset.transactionDate;
    if (!dateValue) return true;

    const transactionDate = new Date(`${dateValue}T00:00:00`);
    const start = getDateValue(dateStart);
    const end = getDateValue(dateEnd);

    if (start && transactionDate < start) return false;
    if (end && transactionDate > end) return false;
    return true;
  }

  function getTransactionGroup(card) {
    const status = card.dataset.transactionStatus;
    const invoice = card.dataset.invoiceStatus;
    if (invoice === "requested") return ["invoiceRequested", status];
    if (invoice === "done") return ["invoiceDone", status];
    return [status];
  }

  function isFilterMatch(card, status) {
    const groups = getTransactionGroup(card);
    const statusMatches = status === "all" || groups.includes(status);
    return statusMatches && isDateMatch(card);
  }

  function updateFilterCounts() {
    filterButtons.forEach((button) => {
      const status = button.dataset.transactionFilter;
      const count = transactionCards.filter((card) => isFilterMatch(card, status)).length;
      const countLabel = button.querySelector("span");
      if (countLabel) countLabel.textContent = String(count);
    });

  }

  function applyFilter(status) {
    currentFilter = status;
    let visibleCount = 0;

    transactionCards.forEach((card) => {
      const isVisible = isFilterMatch(card, status);
      card.hidden = !isVisible;
      card.classList.toggle("is-filtered-out", !isVisible);
      card.setAttribute("aria-hidden", String(!isVisible));
      if (isVisible) visibleCount += 1;
    });

    filterButtons.forEach((button) => {
      const isActive = button.dataset.transactionFilter === status;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (countTarget) countTarget.textContent = `${visibleCount}건`;
    if (emptyState) emptyState.hidden = visibleCount > 0;
  }

  function setDatePresetActive(value) {
    datePresetButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.transactionDatePreset === value);
    });
  }

  function refreshWithDateFilter() {
    enforceDateRange();
    updateFilterCounts();
    applyFilter(currentFilter);
  }

  updateFilterCounts();

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.transactionFilter || "all";
      updateFilterCounts();
      applyFilter(currentFilter);
    });
  });

  [dateStart, dateEnd].forEach((input) => {
    if (!input) return;
    input.addEventListener("change", () => {
      setDatePresetActive("");
      refreshWithDateFilter();
    });
  });

  datePresetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const preset = button.dataset.transactionDatePreset;

      if (dateStart) dateStart.value = "";
      if (dateEnd) dateEnd.value = "";

      if (preset !== "all") {
        const end = getTodayDate();
        const start = addMonths(end, -Number(preset));
        if (dateStart) dateStart.value = formatDateValue(start);
        if (dateEnd) dateEnd.value = formatDateValue(end);
      }

      setDatePresetActive(preset);
      refreshWithDateFilter();
    });
  });

  applyFilter(currentFilter);
}

initClientTransactionFilters();

function initClientMarketFilters() {
  const filterPanel = document.querySelector(".market-filter-panel");
  const marketCards = Array.from(document.querySelectorAll("[data-market-category][data-market-conditions]"));
  if (!filterPanel || !marketCards.length) return;

  const filterGroups = Array.from(filterPanel.querySelectorAll("[data-market-filter-group]"));
  const filterButtons = Array.from(filterPanel.querySelectorAll("[data-market-filter]"));
  const emptyState = document.querySelector("[data-market-empty]");

  const activeFilters = filterGroups.reduce((filters, group) => {
    const groupName = group.dataset.marketFilterGroup;
    const activeButton = group.querySelector("[data-market-filter].active") || group.querySelector("[data-market-filter]");
    if (groupName) filters[groupName] = activeButton?.dataset.marketFilter || "all";
    return filters;
  }, {});

  function applyFilters() {
    let visibleCount = 0;

    marketCards.forEach((card) => {
      const category = card.dataset.marketCategory || "";
      const conditions = (card.dataset.marketConditions || "").split(/\s+/).filter(Boolean);
      const categoryMatches = activeFilters.category === "all" || category === activeFilters.category;
      const conditionMatches = activeFilters.condition === "all" || conditions.includes(activeFilters.condition);
      const isVisible = categoryMatches && conditionMatches;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    filterButtons.forEach((button) => {
      const groupName = button.closest("[data-market-filter-group]")?.dataset.marketFilterGroup;
      const isActive = groupName && button.dataset.marketFilter === activeFilters[groupName];
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (emptyState) emptyState.hidden = visibleCount > 0;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const groupName = button.closest("[data-market-filter-group]")?.dataset.marketFilterGroup;
      if (!groupName) return;
      activeFilters[groupName] = button.dataset.marketFilter || "all";
      applyFilters();
    });
  });

  applyFilters();
}

initClientMarketFilters();

function initMarketImageLibrary() {
  const modal = document.querySelector("[data-image-modal]");
  const modalTitle = document.querySelector("[data-image-modal-title]");
  const modalView = document.querySelector("[data-image-modal-view]");
  const closeButtons = Array.from(document.querySelectorAll("[data-image-modal-close]"));
  const previewButtons = Array.from(document.querySelectorAll("[data-image-title]"));
  const detailButtons = Array.from(document.querySelectorAll("[data-image-open]"));
  const searchInput = document.querySelector("[data-image-search]");
  const imageCards = Array.from(document.querySelectorAll("[data-image-keywords]"));
  const tagButtons = Array.from(document.querySelectorAll("[data-image-tag]"));
  const emptyState = document.querySelector("[data-image-empty]");
  const protectedImages = Array.from(document.querySelectorAll(".protected-image"));
  let activeTag = tagButtons.find((button) => button.classList.contains("active"))?.dataset.imageTag || "all";
  if (!previewButtons.length) return;

  protectedImages.forEach((image) => {
    image.addEventListener("contextmenu", (event) => event.preventDefault());
    image.addEventListener("dragstart", (event) => event.preventDefault());
    image.addEventListener("selectstart", (event) => event.preventDefault());
  });

  function setModalOpen(isOpen) {
    if (!modal) return;
    modal.hidden = !isOpen;
    document.body.classList.toggle("is-modal-open", isOpen);
  }

  function openImagePreview(button) {
    const source = button.querySelector(".protected-image");
    if (!source || !modalView) return;

    modalView.replaceChildren(source.cloneNode(true));
    if (modalTitle) modalTitle.textContent = button.dataset.imageTitle || "이미지 미리보기";
    setModalOpen(true);
  }

  previewButtons.forEach((button) => {
    button.addEventListener("click", () => openImagePreview(button));
  });

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-image-keywords]");
      const previewButton = card?.querySelector("[data-image-title]");
      if (previewButton) openImagePreview(previewButton);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => setModalOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && !modal.hidden) setModalOpen(false);
  });

  function applySearch() {
    if (!searchInput || !imageCards.length) return;
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    imageCards.forEach((card) => {
      const title = card.querySelector("[data-image-title]")?.dataset.imageTitle || "";
      const tags = (card.dataset.imageTags || "").split(/\s+/).filter(Boolean);
      const text = [
        card.dataset.imageKeywords || "",
        title,
      ].join(" ").toLowerCase();
      const queryMatches = !query || text.includes(query);
      const tagMatches = activeTag === "all" || tags.includes(activeTag);
      const isVisible = queryMatches && tagMatches;
      card.hidden = !isVisible;
      card.setAttribute("aria-hidden", String(!isVisible));
      if (isVisible) visibleCount += 1;
    });

    if (emptyState) emptyState.hidden = visibleCount > 0;
  }

  if (searchInput) {
    searchInput.addEventListener("input", applySearch);
    applySearch();
  }

  tagButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeTag = button.dataset.imageTag || "all";
      tagButtons.forEach((tagButton) => {
        const isActive = tagButton === button;
        tagButton.classList.toggle("active", isActive);
        tagButton.setAttribute("aria-pressed", String(isActive));
      });
      applySearch();
    });
  });
}

initMarketImageLibrary();

function initClientNewsFilters() {
  const filterWrap = document.querySelector(".client-news-tabs");
  const newsItems = Array.from(document.querySelectorAll("[data-news-type]"));
  if (!filterWrap || !newsItems.length) return;

  const newsList = newsItems[0].parentElement;
  const buttons = Array.from(filterWrap.querySelectorAll("[data-news-filter]"));

  if (newsList) {
    const sortedItems = [...newsItems].sort((a, b) => {
      const pinnedDiff = Number(b.dataset.newsPinned === "true") - Number(a.dataset.newsPinned === "true");
      if (pinnedDiff) return pinnedDiff;
      const aDate = a.querySelector("time")?.textContent.trim() || "";
      const bDate = b.querySelector("time")?.textContent.trim() || "";
      return bDate.localeCompare(aDate);
    });

    sortedItems.forEach((item) => newsList.appendChild(item));
  }

  function applyFilter(type) {
    newsItems.forEach((item) => {
      const isVisible = type === "all" || item.dataset.newsType === type;
      item.hidden = !isVisible;
      item.setAttribute("aria-hidden", String(!isVisible));
    });

    buttons.forEach((button) => {
      const isActive = button.dataset.newsFilter === type;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.newsFilter));
  });
}

initClientNewsFilters();

function initClientProjectConfirm() {
  const confirmButtons = document.querySelectorAll("[data-project-confirm]");
  if (!confirmButtons.length) return;

  confirmButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-project-status]");
      if (!card) return;

      const stateLabel = card.querySelector("[data-project-state-label]");
      const confirmBox = card.querySelector(".project-confirm-box");
      const issuePanel = card.querySelector("[data-project-issue-panel]");

      card.dataset.projectStatus = "closed";
      card.dataset.projectGroup = "closed";
      card.classList.remove("is-confirmable", "is-issue-editing", "is-issue-open");

      if (stateLabel) {
        stateLabel.textContent = "종결";
        stateLabel.classList.remove("blue", "orange", "green");
        stateLabel.classList.add("gray");
      }

      if (confirmBox) {
        confirmBox.hidden = true;
        confirmBox.remove();
      }
      if (issuePanel) issuePanel.hidden = true;

      if (typeof window.refreshClientProjectFilterCounts === "function") {
        window.refreshClientProjectFilterCounts();
      }
      if (typeof window.applyClientProjectFilter === "function") {
        window.applyClientProjectFilter("closed");
      }
    });
  });
}

initClientProjectConfirm();

function initClientConfirmCopy() {
  const memberType = document.body?.dataset.memberType || "business";
  const confirmCards = document.querySelectorAll(".project-detail-card.is-confirmable");
  if (!confirmCards.length) return;

  confirmCards.forEach((card) => {
    const memberCopy = card.querySelector("[data-confirm-member-copy]");
    const autoConfirmCopy = card.querySelector("[data-auto-confirm-copy]");
    const paymentType = card.dataset.paymentType || "cash";

    if (memberCopy) {
      memberCopy.textContent = memberType === "personal"
        ? "현금영수증 발행을 원하시면 구매확정을 눌러주세요."
        : "사업자회원은 구매확정 시 세금계산서가 발급됩니다.";
    }

    if (autoConfirmCopy) {
      autoConfirmCopy.hidden = paymentType === "cash";
    }
  });
}

initClientConfirmCopy();

function initClientProjectDetailToggles() {
  const toggles = document.querySelectorAll("[data-project-detail-toggle]");
  if (!toggles.length) return;

  toggles.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".project-detail-card");
      const detail = card?.querySelector(".project-request-detail");
      if (!detail) return;

      const willOpen = detail.hidden;
      detail.hidden = !willOpen;
      button.setAttribute("aria-expanded", String(willOpen));
      button.setAttribute("aria-label", willOpen ? "상세요청사항 접기" : "상세요청사항 보기");
    });
  });
}

initClientProjectDetailToggles();

function initClientProjectIssues() {
  const issueButtons = document.querySelectorAll("[data-project-issue-open]");
  if (!issueButtons.length) return;

  function getNowText() {
    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).format(new Date());
  }

  issueButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-project-status]");
      if (!card) return;

      const issuePanel = card.querySelector("[data-project-issue-panel]");
      const textarea = issuePanel?.querySelector("textarea");
      const submitButton = issuePanel?.querySelector("[data-project-issue-submit]");
      const issueLog = card.querySelector("[data-project-issue-log]");
      const stateLabel = card.querySelector("[data-project-state-label]");

      card.classList.add("is-issue-editing");
      if (issuePanel) issuePanel.hidden = false;
      setTimeout(() => textarea?.focus(), 0);

      if (!submitButton || !textarea || submitButton.dataset.bound) return;
      submitButton.dataset.bound = "true";
      submitButton.addEventListener("click", () => {
        const message = textarea.value.trim();
        if (!message) {
          textarea.focus();
          textarea.setAttribute("aria-invalid", "true");
          return;
        }

        const ok = window.confirm("문제해결을 접수하면 구매확정이 유예됩니다. 계속 진행할까요?");
        if (!ok) return;

        const loggedAt = getNowText();
        textarea.setAttribute("aria-invalid", "false");
        card.dataset.projectStatus = "issue";
        card.dataset.projectGroup = "issue";
        card.classList.remove("is-issue-editing");
        card.classList.add("is-issue-open");

        if (stateLabel) {
          stateLabel.textContent = "문제해결";
          stateLabel.classList.remove("blue", "orange", "green", "gray");
          stateLabel.classList.add("orange");
        }

        if (issueLog) {
          issueLog.textContent = `문제해결 요청 접수 시간: ${loggedAt}`;
        }

        submitButton.textContent = "접수 완료";
        submitButton.disabled = true;
        textarea.disabled = true;

        if (typeof window.refreshClientProjectFilterCounts === "function") {
          window.refreshClientProjectFilterCounts();
        }
        if (typeof window.applyClientProjectFilter === "function") {
          window.applyClientProjectFilter("issue");
        }
      });
    });
  });
}

initClientProjectIssues();

function initMarketDetailOptions() {
  const optionBox = document.querySelector("[data-market-options]");
  if (!optionBox) return;

  const basePrice = Number(optionBox.dataset.basePrice || 0);
  const checkboxes = Array.from(optionBox.querySelectorAll("[data-option-price]"));
  const actionButtons = Array.from(document.querySelectorAll("[data-market-action]"));
  const modal = document.querySelector("[data-market-modal]");
  const modalTitle = document.querySelector("[data-market-modal-title]");
  const modalKicker = document.querySelector("[data-market-modal-kicker]");
  const modalCopy = document.querySelector("[data-market-modal-copy]");
  const modalSummary = document.querySelector("[data-market-modal-summary]");
  const modalTotal = document.querySelector("[data-market-modal-total]");
  const modalPrimary = document.querySelector("[data-market-modal-primary]");
  const modalSecondary = modal?.querySelector("[data-market-modal-close]:not(.market-action-backdrop):not(.market-action-close)");
  const modalCloseButtons = Array.from(document.querySelectorAll("[data-market-modal-close]"));
  const totalTargets = [
    document.querySelector("[data-market-total]"),
    document.querySelector("[data-sticky-total]")
  ].filter(Boolean);
  const stickySummary = document.querySelector("[data-sticky-option-summary]");
  const stickySelected = document.querySelector("[data-sticky-selected]");
  const formatter = new Intl.NumberFormat("ko-KR");
  let currentTotalText = `${formatter.format(basePrice)}캐시`;
  let currentSelectedText = "기본 구성만 선택됨";
  let currentModalAction = "buy";

  function updateTotal() {
    const selected = checkboxes.filter((checkbox) => checkbox.checked);
    const optionTotal = selected.reduce((sum, checkbox) => sum + Number(checkbox.dataset.optionPrice || 0), 0);
    const totalText = `${formatter.format(basePrice + optionTotal)}캐시`;
    const selectedCount = selected.length;
    currentTotalText = totalText;
    currentSelectedText = selectedCount ? `기본 구성 외 ${selectedCount}개 옵션 선택됨` : "기본 구성만 선택됨";

    totalTargets.forEach((target) => {
      target.textContent = totalText;
    });

    if (stickySummary) {
      stickySummary.textContent = "기본 상세페이지 템플릿";
    }

    if (stickySelected) {
      stickySelected.textContent = currentSelectedText;
    }

    if (modalSummary) modalSummary.textContent = currentSelectedText;
    if (modalTotal) modalTotal.textContent = totalText;
  }

  function setModalOpen(isOpen) {
    if (!modal) return;
    modal.hidden = !isOpen;
    document.body.classList.toggle("is-modal-open", isOpen);
  }

  function openActionModal(action) {
    if (!modal) return;
    updateTotal();
    currentModalAction = action === "inquiry" ? "inquiry" : "buy";

    if (action === "inquiry") {
      if (modalKicker) modalKicker.textContent = "문의 안내";
      if (modalTitle) modalTitle.textContent = "상품 문의를 남기시겠어요?";
      if (modalCopy) modalCopy.textContent = "선택한 상품과 옵션 기준으로 상담 요청이 접수됩니다. 실제 서비스에서는 1:1 문의 또는 카카오톡 상담으로 연결됩니다.";
      if (modalPrimary) {
        modalPrimary.textContent = "확인";
      }
      if (modalSecondary) modalSecondary.textContent = "계속 보기";
    } else {
      if (modalKicker) modalKicker.textContent = "구매 확인";
      if (modalTitle) modalTitle.textContent = "상품을 구매하시겠어요?";
      if (modalCopy) modalCopy.textContent = "선택한 옵션과 금액을 확인한 뒤 구매하기를 누르면 담당자 확인 대상으로 접수됩니다.";
      if (modalPrimary) {
        modalPrimary.textContent = "구매하기";
      }
      if (modalSecondary) modalSecondary.textContent = "계속 보기";
    }

    if (modalSummary) modalSummary.textContent = currentSelectedText;
    if (modalTotal) modalTotal.textContent = currentTotalText;
    setModalOpen(true);
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateTotal);
  });

  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openActionModal(button.dataset.marketAction);
    });
  });

  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", () => setModalOpen(false));
  });

  if (modalPrimary) {
    modalPrimary.addEventListener("click", (event) => {
      event.preventDefault();
      if (currentModalAction === "inquiry") {
        setModalOpen(false);
        return;
      }

      if (currentModalAction === "purchased") {
        setModalOpen(false);
        return;
      }

      currentModalAction = "purchased";
      if (modalKicker) modalKicker.textContent = "구매 접수";
      if (modalTitle) modalTitle.textContent = "구매가 접수되었습니다.";
      if (modalCopy) modalCopy.textContent = "유료 항목은 입금 또는 결제 확인 후 담당자가 별도로 안내합니다.";
      if (modalPrimary) modalPrimary.textContent = "확인";
      if (modalSecondary) modalSecondary.textContent = "닫기";
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setModalOpen(false);
  });

  updateTotal();
}

initMarketDetailOptions();

function initClientUtilityMenus() {
  return;
}

initClientUtilityMenus();

function initAdminUtilityMenus() {
  if (!document.body.classList.contains("admin-page")) return;
  const sideNav = document.querySelector(".admin-side-nav");
  if (!sideNav) return;

  const path = window.location.pathname;
  const isDashboard = path.endsWith("admin.html") || path.endsWith("index.html") || path.endsWith("/");
  const isCustomers = path.endsWith("admin-customers.html") || path.endsWith("admin-customer-detail.html");
  const isProjects = path.endsWith("admin-projects.html") || path.endsWith("admin-tasks.html");
  const isWebsitePage = path.endsWith("admin-websites.html");
  const isLogPage = path.endsWith("admin-logs.html");
  const isWebsiteSection = isWebsitePage || isLogPage;
  const isSettlementPage = path.endsWith("admin-settlement.html");
  const isBillingPage = path.endsWith("admin-billing.html");
  const isBillingSection = isSettlementPage || isBillingPage;
  const isSettings = path.endsWith("admin-settings.html");

  sideNav.innerHTML = `
    <div class="client-side-head"><strong>DOIL Admin</strong></div>
    <a class="client-menu-item${isDashboard ? " active" : ""}" href="admin.html"><img class="client-menu-icon" src="assets/client-dashboard.svg" alt="" aria-hidden="true"><span>대시보드</span></a>
    <a class="client-menu-item${isCustomers ? " active" : ""}" href="admin-customers.html"><img class="client-menu-icon" src="assets/client-profile.svg" alt="" aria-hidden="true"><span>회원</span></a>
    <a class="client-menu-item${isProjects ? " active" : ""}" href="admin-projects.html"><span class="client-menu-label"><img class="client-menu-icon" src="assets/client-projects.svg" alt="" aria-hidden="true"><span>업무</span></span><span class="client-menu-badge">2</span></a>
    <div class="client-side-group${isWebsiteSection ? " is-open" : ""}" data-admin-website-group>
      <button class="client-menu-item client-manage-toggle${isWebsiteSection ? " active" : ""}" type="button" aria-expanded="${isWebsiteSection ? "true" : "false"}">
        <span class="client-menu-label"><img class="client-menu-icon" src="assets/client-websites.svg" alt="" aria-hidden="true"><span>홈페이지</span></span>
        <span class="client-menu-arrow"></span>
      </button>
      <div class="client-side-submenu">
        <a class="client-menu-item${isWebsitePage ? " active" : ""}" href="admin-websites.html#website-management"><img class="client-menu-icon" src="assets/client-websites.svg" alt="" aria-hidden="true"><span>홈페이지 관리</span></a>
        <a class="client-menu-item" href="admin-websites.html#domain-dns-management"><img class="client-menu-icon" src="assets/client-files.svg" alt="" aria-hidden="true"><span>도메인/DNS 관리</span></a>
        <a class="client-menu-item${isLogPage ? " active" : ""}" href="admin-logs.html?filter=area:website"><img class="client-menu-icon" src="assets/client-files.svg" alt="" aria-hidden="true"><span>수정 로그</span></a>
      </div>
    </div>
    <div class="client-side-group${isBillingSection ? " is-open" : ""}" data-admin-billing-group>
      <button class="client-menu-item client-manage-toggle${isBillingSection ? " active" : ""}" type="button" aria-expanded="${isBillingSection ? "true" : "false"}">
        <span class="client-menu-label"><img class="client-menu-icon" src="assets/client-transactions.svg" alt="" aria-hidden="true"><span>매출/매입</span></span>
        <span class="client-menu-arrow"></span>
      </button>
      <div class="client-side-submenu">
        <a class="client-menu-item${isSettlementPage ? " active" : ""}" href="admin-settlement.html"><img class="client-menu-icon" src="assets/client-transactions.svg" alt="" aria-hidden="true"><span>정산</span></a>
        <a class="client-menu-item${isBillingPage ? " active" : ""}" href="admin-billing.html"><img class="client-menu-icon" src="assets/client-documents.svg" alt="" aria-hidden="true"><span>매출/매입</span></a>
      </div>
    </div>
    <a class="client-menu-item${isSettings ? " active" : ""}" href="admin-settings.html"><img class="client-menu-icon" src="assets/client-manage.svg" alt="" aria-hidden="true"><span>설정</span></a>
  `;

  sideNav.querySelectorAll(".client-side-group .client-manage-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const group = toggle.closest(".client-side-group");
      const nextOpen = !group?.classList.contains("is-open");
      group?.classList.toggle("is-open", nextOpen);
      toggle.setAttribute("aria-expanded", String(nextOpen));
    });
  });
}

initAdminUtilityMenus();

const adminWebsiteLogStorageKey = "doilAdminWebsiteLogs";

function readAdminWebsiteLogs() {
  try {
    return JSON.parse(localStorage.getItem(adminWebsiteLogStorageKey) || "[]");
  } catch {
    return [];
  }
}

function saveAdminWebsiteLog(entry) {
  const logs = readAdminWebsiteLogs();
  logs.unshift(entry);
  localStorage.setItem(adminWebsiteLogStorageKey, JSON.stringify(logs.slice(0, 80)));
}

function adminLogDateValue(timeText) {
  const match = String(timeText || "").match(/\d{4}\.\d{2}\.\d{2}/);
  return match ? match[0].replace(/\./g, "-") : "";
}

function adminWebsiteActionType(action) {
  const text = String(action || "");
  if (text.includes("점검") || text.includes("조회") || text.includes("보기")) return "view";
  if (text.includes("접근") || text.includes("로그인")) return "login";
  return "edit";
}

function adminWebsiteRisk(action) {
  const text = String(action || "");
  if (text.includes("일시정지") || text.includes("만료") || text.includes("되돌리기") || text.includes("도메인")) return "critical";
  if (text.includes("관리자") || text.includes("접근")) return "sensitive";
  return "normal";
}

function initAdminWebsiteLogFeed() {
  const tableBody = document.querySelector(".admin-log-table tbody");
  if (!tableBody) return;

  readAdminWebsiteLogs().forEach((entry) => {
    if (!entry?.time || !entry?.site || !entry?.action) return;
    const row = document.createElement("tr");
    const actionType = entry.actionType || adminWebsiteActionType(entry.action);
    const risk = entry.risk || adminWebsiteRisk(entry.action);
    const resultTone = entry.color || "green";
    row.dataset.adminRow = "";
    row.dataset.area = "website";
    row.dataset.action = actionType;
    row.dataset.risk = risk;
    row.dataset.date = adminLogDateValue(entry.time);
    row.dataset.search = `${entry.site} ${entry.action} ${entry.result || ""} 홈페이지 수정 로그 도메인`;
    row.innerHTML = `
      <td><strong>${entry.time}</strong><small>저장 로그</small></td>
      <td><strong>${entry.manager || "도일 관리자"}</strong><small>admin</small></td>
      <td><span class="status-pill blue">홈페이지</span></td>
      <td><span class="status-pill ${actionType === "view" ? "blue" : "orange"}">${actionType === "view" ? "보기" : actionType === "login" ? "접근" : "수정"}</span><small>${entry.action}</small></td>
      <td><strong>${entry.site}</strong><small>홈페이지 관리</small></td>
      <td><strong>${entry.action}</strong><small>${entry.detail || "홈페이지 관리 화면에서 처리된 작업입니다."}</small></td>
      <td><span class="status-pill ${resultTone}">${entry.result || "완료"}</span></td>
      <td><small>로컬 미리보기 · 관리자 화면</small></td>
    `;
    tableBody.prepend(row);
  });
}

initAdminWebsiteLogFeed();

function initAdminTableTools() {
  const scopes = Array.from(document.querySelectorAll("[data-admin-filter-scope]"));
  if (!scopes.length) return;

  scopes.forEach((scope) => {
    const searchInput = scope.querySelector("[data-admin-search]");
    const filterButtons = Array.from(scope.querySelectorAll("[data-admin-filter]"));
    const selectFilters = Array.from(scope.querySelectorAll("[data-admin-select-filter]"));
    const getRows = () => Array.from(scope.querySelectorAll("[data-admin-row]"));
    const countTarget = scope.querySelector("[data-admin-count]");
    const emptyTarget = scope.querySelector("[data-admin-empty]");
    const dateStart = scope.querySelector("[data-admin-date-start]");
    const dateEnd = scope.querySelector("[data-admin-date-end]");

    const activeFilters = {};
    const queryParams = new URLSearchParams(window.location.search);

    function normalize(value) {
      return String(value || "").toLowerCase().replace(/[\s-]/g, "");
    }

    function setButtonActive(button, isActive) {
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    }

    function applyFilterValue(filterValue) {
      if (!filterValue || filterValue === "all" || !filterValue.includes(":")) return;
      const [field, expected] = filterValue.split(":");
      if (!field || !expected) return;

      const button = filterButtons.find((item) => item.dataset.adminFilter === filterValue);
      if (!button) return;

      activeFilters[field] = expected;

      const group = button.closest(".admin-filter-group");
      const groupButtons = group ? Array.from(group.querySelectorAll("[data-admin-filter]")) : filterButtons;
      groupButtons.forEach((item) => setButtonActive(item, item === button));
    }

    function applySelectFilter(select) {
      const filterValue = select.value || "all";
      const optionFields = Array.from(select.options)
        .map((option) => option.value || "")
        .filter((value) => value.includes(":"))
        .map((value) => value.split(":")[0])
        .filter(Boolean);
      const uniqueFields = Array.from(new Set(optionFields));

      if (filterValue === "all") {
        uniqueFields.forEach((field) => delete activeFilters[field]);
        return;
      }

      const [field, expected] = filterValue.split(":");
      if (field && expected) activeFilters[field] = expected;
    }

    function rowMatchesFilter(row) {
      return Object.entries(activeFilters).every(([field, expected]) => {
        return String(row.dataset[field] || "") === expected;
      });
    }

    function rowMatchesSearch(row) {
      if (!searchInput) return true;
      const keyword = normalize(searchInput.value);
      if (!keyword) return true;
      const source = normalize(`${row.textContent || ""} ${row.dataset.search || ""}`);
      return source.includes(keyword);
    }

    function rowMatchesDate(row) {
      if (!dateStart && !dateEnd) return true;
      const rawDate = row.dataset.date;
      if (!rawDate) return true;
      if (dateStart?.value && rawDate < dateStart.value) return false;
      if (dateEnd?.value && rawDate > dateEnd.value) return false;
      return true;
    }

    function applyFilters() {
      let visibleCount = 0;
      getRows().forEach((row) => {
        const isVisible = rowMatchesFilter(row) && rowMatchesSearch(row) && rowMatchesDate(row);
        row.hidden = !isVisible;
        row.classList.toggle("is-filtered-out", !isVisible);
        if (isVisible) visibleCount += 1;
      });

      if (countTarget) countTarget.textContent = `${visibleCount}건`;
      if (emptyTarget) emptyTarget.hidden = visibleCount !== 0;
    }

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filterValue = button.dataset.adminFilter || "all";
        const group = button.closest(".admin-filter-group");
        const groupButtons = group ? Array.from(group.querySelectorAll("[data-admin-filter]")) : filterButtons;
        const fieldNames = groupButtons
          .map((item) => item.dataset.adminFilter || "")
          .filter((value) => value.includes(":"))
          .map((value) => value.split(":")[0]);
        const uniqueFields = Array.from(new Set(fieldNames));

        if (filterValue === "all") {
          uniqueFields.forEach((field) => delete activeFilters[field]);
        } else {
          const [field, expected] = filterValue.split(":");
          if (field && expected) activeFilters[field] = expected;
        }

        groupButtons.forEach((item) => setButtonActive(item, item === button));
        applyFilters();
      });
    });

    selectFilters.forEach((select) => {
      select.addEventListener("change", () => {
        applySelectFilter(select);
        applyFilters();
      });
    });

    searchInput?.addEventListener("input", applyFilters);
    dateStart?.addEventListener("change", applyFilters);
    dateEnd?.addEventListener("change", applyFilters);

    if (searchInput && queryParams.has("q")) searchInput.value = queryParams.get("q") || "";
    if (dateStart && queryParams.has("start")) dateStart.value = queryParams.get("start") || "";
    if (dateEnd && queryParams.has("end")) dateEnd.value = queryParams.get("end") || "";

    queryParams
      .getAll("filter")
      .flatMap((value) => value.split(","))
      .map((value) => value.trim())
      .filter(Boolean)
      .forEach(applyFilterValue);
    selectFilters.forEach(applySelectFilter);

    applyFilters();
  });
}

initAdminTableTools();

function initAdminTaskInbox() {
  const list = document.querySelector("[data-admin-task-list]");
  if (!list) return;

  const countTargets = Array.from(document.querySelectorAll("[data-admin-task-count], [data-admin-task-menu-count]"));

  function updateCounts() {
    const openTasks = Array.from(document.querySelectorAll("[data-admin-task]")).filter((task) => task.dataset.status !== "done" && !task.hidden);
    const allOpenTasks = Array.from(document.querySelectorAll("[data-admin-task]")).filter((task) => task.dataset.status !== "done");
    countTargets.forEach((target) => {
      target.textContent = target.matches("[data-admin-task-menu-count]") ? String(allOpenTasks.length) : `${allOpenTasks.length}건`;
    });
  }

  function completeTask(task) {
    task.dataset.status = "done";
    task.classList.add("is-done");
    const badge = task.querySelector(".status-pill");
    if (badge) {
      badge.className = "status-pill green";
      badge.textContent = "완료";
    }
    task.querySelector("[data-admin-task-done]")?.setAttribute("disabled", "true");
    const openButton = task.querySelector("[data-admin-task-open]");
    if (openButton) {
      openButton.classList.remove("primary");
      openButton.textContent = "보기";
    }
    updateCounts();
    showAdminToast("업무가 완료 처리되었습니다.");
  }

  list.addEventListener("click", (event) => {
    const task = event.target.closest("[data-admin-task]");
    if (!task) return;

    if (event.target.closest("[data-admin-task-done]")) {
      completeTask(task);
      return;
    }

    if (event.target.closest("[data-admin-task-open]")) {
      const target = task.dataset.target;
      if (target) window.location.href = target;
    }
  });

  updateCounts();
}

initAdminTaskInbox();

function initAdminWebsiteSummaryToggle() {
  const summary = document.querySelector(".admin-website-summary");
  const toggle = document.querySelector("[data-admin-website-summary-toggle]");
  const details = document.querySelector("[data-admin-website-summary-details]");
  if (!summary || !toggle || !details) return;

  function setCollapsed(isCollapsed) {
    summary.classList.toggle("is-collapsed", isCollapsed);
    details.hidden = isCollapsed;
    toggle.setAttribute("aria-expanded", String(!isCollapsed));
    toggle.textContent = isCollapsed ? "요약 펼치기" : "요약 접기";
  }

  setCollapsed(false);
  toggle.addEventListener("click", () => {
    setCollapsed(!summary.classList.contains("is-collapsed"));
  });
}

initAdminWebsiteSummaryToggle();

function initAdminContentEditorModal() {
  const modal = document.querySelector("[data-admin-content-modal]");
  if (!modal) return;

  const form = modal.querySelector("[data-admin-content-form]");
  const title = modal.querySelector("#adminContentModalTitle");
  const editor = modal.querySelector("[data-wysiwyg-editor]");
  const output = modal.querySelector("[data-admin-content-output]");
  const thumbnailInput = modal.querySelector("[data-admin-content-thumbnail]");
  const thumbnailPreview = modal.querySelector("[data-admin-content-thumbnail-preview]");
  const tableBody = document.querySelector("table.admin-data-table tbody");
  const openButtons = Array.from(document.querySelectorAll("[data-admin-content-open]"));
  const closeButtons = Array.from(document.querySelectorAll("[data-admin-content-close]"));
  let activeRow = null;

  function setField(name, value) {
    const field = form?.elements?.[name];
    if (field) field.value = value || "";
  }

  function getField(name) {
    const field = form?.elements?.[name];
    return field ? field.value.trim() : "";
  }

  function typeValue(label) {
    if (label === "공지사항") return "notice";
    if (label === "이벤트") return "event";
    return "post";
  }

  function dateToday() {
    const now = new Date();
    const offset = now.getTimezoneOffset() * 60000;
    return new Date(now.getTime() - offset).toISOString().slice(0, 10);
  }

  function setModalOpen(isOpen) {
    modal.hidden = !isOpen;
    document.body.classList.toggle("modal-open", isOpen);
    if (isOpen) modal.querySelector("input, select, textarea, button")?.focus();
  }

  function openModal(button) {
    const mode = button.dataset.adminContentOpen || "create";
    activeRow = mode === "edit" ? button.closest("[data-admin-row]") : null;
    const cells = activeRow ? Array.from(activeRow.children) : [];

    if (title) title.textContent = mode === "edit" ? "소식 수정" : "소식 작성";
    form?.reset();
    if (editor) editor.innerHTML = "";
    if (thumbnailPreview) {
      thumbnailPreview.style.backgroundImage = "";
      thumbnailPreview.classList.remove("has-image");
    }

    if (activeRow) {
      setField("type", cells[0]?.textContent?.trim());
      setField("title", cells[1]?.textContent?.trim());
      setField("notify", cells[2]?.textContent?.includes("알림") ? "알림 발송" : "알림 없음");
      setField("pin", cells[3]?.textContent?.trim());
      setField("visibility", cells[4]?.textContent?.trim());
      setField("date", (cells[5]?.textContent || "").replace(/\./g, "-"));
      if (editor) editor.innerHTML = `<h2>${cells[1]?.textContent?.trim() || "소식 제목"}</h2><p>고객에게 안내할 내용을 작성하세요.</p>`;
    } else {
      setField("type", "공지사항");
      setField("visibility", "공개");
      setField("pin", "일반");
      setField("notify", "알림 없음");
      setField("date", dateToday());
    }

    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function formatDate(value) {
    return value ? value.replace(/-/g, ".") : dateToday().replace(/-/g, ".");
  }

  function saveContent(event) {
    event.preventDefault();
    if (output && editor) output.value = editor.innerHTML;

    const contentType = getField("type") || "공지사항";
    const contentTitle = getField("title") || "새 소식";
    const notify = getField("notify") === "알림 발송" ? '<span class="status-pill blue">알림 1</span>' : '<span class="status-pill gray">읽음</span>';
    const pin = getField("pin") || "일반";
    const visibility = getField("visibility") || "공개";
    const date = formatDate(getField("date"));
    const row = activeRow || document.createElement("tr");

    row.dataset.adminRow = "";
    row.dataset.type = typeValue(contentType);
    row.dataset.pin = pin === "상단고정" ? "yes" : "no";
    row.dataset.search = `${contentType} ${contentTitle} ${pin} ${visibility}`;
    row.innerHTML = `<td>${contentType}</td><td>${contentTitle}</td><td>${notify}</td><td>${pin}</td><td>${visibility}</td><td>${date}</td><td><button class="admin-line-button" type="button" data-admin-content-open="edit">수정</button></td>`;

    if (!activeRow) tableBody?.prepend(row);
    const editButton = row.querySelector("[data-admin-content-open='edit']");
    editButton?.addEventListener("click", () => openModal(editButton));
    closeModal();
    showAdminToast(`${contentTitle} 항목이 저장되었습니다.`);
  }

  openButtons.forEach((button) => button.addEventListener("click", () => openModal(button)));
  closeButtons.forEach((button) => button.addEventListener("click", closeModal));
  form?.addEventListener("submit", saveContent);
  thumbnailInput?.addEventListener("change", () => {
    const file = thumbnailInput.files?.[0];
    if (!file || !thumbnailPreview) return;
    const reader = new FileReader();
    reader.onload = () => {
      thumbnailPreview.style.backgroundImage = `url("${reader.result}")`;
      thumbnailPreview.classList.add("has-image");
    };
    reader.readAsDataURL(file);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
}

initAdminContentEditorModal();

function escapeAdminHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function readAdminJsonStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || "") || fallback;
  } catch {
    return fallback;
  }
}

function writeAdminJsonStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function normalizeBusinessNumber(value) {
  return String(value || "").replace(/\D/g, "");
}

function initMemberLiteManagement() {
  const memberRows = Array.from(document.querySelectorAll("[data-member-row]"));
  const inviteLink = document.querySelector("[data-member-invite-link]");
  const copyInviteButton = document.querySelector("[data-copy-member-link]");
  const modal = document.querySelector("[data-simple-customer-modal]");
  const form = document.querySelector("[data-simple-customer-form]");
  const openButtons = Array.from(document.querySelectorAll("[data-simple-customer-open]"));
  const closeButtons = Array.from(document.querySelectorAll("[data-simple-customer-close]"));
  const tableBody = document.querySelector(".admin-member-table tbody");
  const countLabels = Array.from(document.querySelectorAll("[data-member-count]"));
  const simpleBusinessFields = Array.from(document.querySelectorAll("[data-simple-business-only]"));
  const simplePhoneInput = form?.elements.phone;
  const simpleBusinessNumberInput = form?.elements.businessNumber;
  const simpleEmailDomain = form?.elements.emailDomain;
  const simpleEmailDomainDirect = form?.elements.emailDomainDirect;
  const simpleCertificateInput = form?.elements.businessCertificate;
  const simpleFilePreview = document.querySelector("[data-simple-file-preview]");
  const simpleFileNameTarget = document.querySelector("[data-simple-file-name]");
  const simpleFileViewButton = document.querySelector("[data-simple-file-view]");
  let simpleCertificatePreviewUrl = "";

  function money(value) {
    const amount = Number(String(value || "").replace(/[^\d]/g, "")) || 0;
    return `${amount.toLocaleString("ko-KR")}원`;
  }

  function normalize(value) {
    return String(value || "").replace(/-/g, "").trim();
  }

  function formatPhone(value) {
    const digits = String(value || "").replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 3) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    if (digits.length === 10) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  }

  function currentSimpleEmail() {
    const local = form?.elements.emailLocal?.value.trim() || "";
    const selectedDomain = simpleEmailDomain?.value || "";
    const domain = selectedDomain === "direct" ? simpleEmailDomainDirect?.value.trim() || "" : selectedDomain;
    return local && domain ? `${local}@${domain}` : "";
  }

  function syncSimpleEmailDomain() {
    const useDirect = simpleEmailDomain?.value === "direct";
    if (simpleEmailDomainDirect) {
      simpleEmailDomainDirect.hidden = !useDirect;
      simpleEmailDomainDirect.disabled = !useDirect;
      if (useDirect) simpleEmailDomainDirect.focus();
      if (!useDirect) simpleEmailDomainDirect.value = "";
    }
  }

  function syncSimpleMemberType() {
    const isBusiness = (form?.elements.memberType?.value || "사업자") === "사업자";
    simpleBusinessFields.forEach((field) => {
      field.hidden = !isBusiness;
      field.querySelectorAll("input, select, textarea, button").forEach((input) => {
        input.disabled = !isBusiness;
      });
    });
  }

  function registeredBusinessNumbers() {
    const numbers = Array.from(document.querySelectorAll("[data-member-row]"))
      .map((row) => normalizeBusinessNumber(row.children[2]?.textContent || ""))
      .filter(Boolean);
    readAdminJsonStorage("doilMemberSignupRequests", []).forEach((member) => {
      const number = normalizeBusinessNumber(member?.businessNumber);
      if (number) numbers.push(number);
    });
    return new Set(numbers);
  }

  function explainBusinessDuplicate(input) {
    const number = normalizeBusinessNumber(input?.value || "");
    const isDuplicate = Boolean(number && registeredBusinessNumbers().has(number));
    const message = isDuplicate ? "이미 등록된 사업자등록번호입니다. 기존 회원 정보에서 확인하거나 수정해 주세요." : "";
    if (input) input.setCustomValidity(message);
    return message;
  }

  function memberDetailUrl(row) {
    return row.dataset.detailUrl || "admin-customer-detail.html";
  }

  function bindMemberRow(row) {
    row.addEventListener("click", (event) => {
      if (event.target.closest("button, a, input, select, textarea")) return;
      window.location.href = memberDetailUrl(row);
    });

    row.querySelector("[data-member-memo-open]")?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      window.location.href = `${memberDetailUrl(row)}#member-memo`;
    });
  }

  function refreshMemberTypeCounts() {
    if (!countLabels.length) return;

    const rows = Array.from(document.querySelectorAll("[data-member-row]"));
    const counts = rows.reduce((acc, row) => {
      const type = row.dataset.type || "";
      acc.all += 1;
      if (type === "business") acc.business += 1;
      if (type === "personal") acc.personal += 1;
      return acc;
    }, { all: 0, business: 0, personal: 0 });

    countLabels.forEach((label) => {
      label.textContent = String(counts[label.dataset.memberCount] || 0);
    });
  }

  function createMemberRow(member, prependFromSignup = false) {
    const memberType = member.memberType || "사업자";
    const isPersonal = memberType === "개인";
    const name = member.companyName || member.memberName || member.manager || "신규 회원";
    const manager = member.manager || name;
    const businessNumber = isPersonal ? "" : member.businessNumber || "";
    const industry = isPersonal ? "" : member.industry || "";
    const businessType = isPersonal ? "" : member.businessType || "";
    const totalAmount = member.totalAmount || "0원";
    const phone = member.phone || "-";
    const email = member.email || "-";
    const row = document.createElement("tr");
    const key = encodeURIComponent(member.id || normalize(businessNumber) || normalize(phone) || name);

    row.dataset.adminRow = "";
    row.dataset.memberRow = "";
    row.dataset.type = isPersonal ? "personal" : "business";
    row.dataset.detailUrl = `admin-customer-detail.html?customer=${key}`;
    row.dataset.search = `${memberType} ${name} ${businessNumber} ${industry} ${businessType} ${totalAmount} ${manager} ${phone} ${email}`;
    if (prependFromSignup) row.dataset.signupRequest = member.id || key;
    row.innerHTML = `<td>${escapeAdminHtml(memberType)}</td><td>${isPersonal ? "" : `<strong>${escapeAdminHtml(name)}</strong>`}</td><td>${escapeAdminHtml(businessNumber)}</td><td>${escapeAdminHtml(industry)}</td><td>${escapeAdminHtml(businessType)}</td><td>${escapeAdminHtml(manager)}</td><td>${escapeAdminHtml(phone)}</td><td>${escapeAdminHtml(email)}</td><td><strong>${escapeAdminHtml(totalAmount)}</strong></td><td><button class="admin-line-button member-memo-button" type="button" data-member-memo-open>메모</button></td>`;
    bindMemberRow(row);
    return row;
  }

  function renderSignupRequests() {
    if (!tableBody) return;
    const requests = readAdminJsonStorage("doilMemberSignupRequests", []);
    requests.slice().reverse().forEach((member) => {
      if (!member?.id || tableBody.querySelector(`[data-signup-request="${member.id}"]`)) return;
      tableBody.prepend(createMemberRow(member, true));
    });
  }

  memberRows.forEach(bindMemberRow);
  renderSignupRequests();

  copyInviteButton?.addEventListener("click", async () => {
    const baseValue = inviteLink?.dataset.baseInviteUrl || inviteLink?.value || "";
    const expiresAt = Date.now() + (3 * 60 * 60 * 1000);
    const value = baseValue ? `${baseValue}${baseValue.includes("?") ? "&" : "?"}expires=${expiresAt}` : "";
    if (!value) return;
    if (inviteLink) inviteLink.value = value;
    try {
      await navigator.clipboard.writeText(value);
      showAdminToast("3시간 동안 유효한 고객 등록 링크를 복사했습니다.");
    } catch {
      inviteLink?.select();
      showAdminToast("링크가 선택되었습니다. 직접 복사해 주세요.");
    }
  });

  function setModalOpen(isOpen) {
    if (!modal) return;
    modal.hidden = !isOpen;
    document.body.classList.toggle("modal-open", isOpen);
    if (isOpen) {
      syncSimpleMemberType();
      syncSimpleEmailDomain();
      modal.querySelector("input, select, button")?.focus();
    }
  }

  openButtons.forEach((button) => button.addEventListener("click", () => setModalOpen(true)));
  closeButtons.forEach((button) => button.addEventListener("click", () => setModalOpen(false)));
  form?.elements.memberType?.addEventListener("change", syncSimpleMemberType);
  simplePhoneInput?.addEventListener("input", () => {
    simplePhoneInput.value = formatPhone(simplePhoneInput.value);
  });
  simplePhoneInput?.addEventListener("blur", () => {
    simplePhoneInput.value = formatPhone(simplePhoneInput.value);
  });
  simpleBusinessNumberInput?.addEventListener("input", () => {
    simpleBusinessNumberInput.setCustomValidity("");
  });
  simpleBusinessNumberInput?.addEventListener("blur", () => {
    explainBusinessDuplicate(simpleBusinessNumberInput);
  });
  simpleEmailDomain?.addEventListener("change", syncSimpleEmailDomain);
  simpleCertificateInput?.addEventListener("change", () => {
    const file = simpleCertificateInput.files?.[0];
    if (simpleCertificatePreviewUrl) URL.revokeObjectURL(simpleCertificatePreviewUrl);
    simpleCertificatePreviewUrl = file ? URL.createObjectURL(file) : "";
    if (simpleFilePreview) simpleFilePreview.hidden = !file;
    if (simpleFileNameTarget) simpleFileNameTarget.textContent = file?.name || "";
  });
  simpleFileViewButton?.addEventListener("click", () => {
    if (!simpleCertificatePreviewUrl) return;
    window.open(simpleCertificatePreviewUrl, "_blank", "noopener");
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const memberType = form.elements.memberType?.value || "사업자";
    const isPersonal = memberType === "개인";
    const name = form.elements.memberName?.value.trim() || "신규 회원";
    const businessNumber = isPersonal ? "" : form.elements.businessNumber?.value.trim() || "";
    const duplicateReason = isPersonal ? "" : explainBusinessDuplicate(simpleBusinessNumberInput);
    if (duplicateReason) {
      showAdminToast(duplicateReason);
      simpleBusinessNumberInput?.reportValidity();
      return;
    }
    const industry = isPersonal ? "" : form.elements.industry?.value.trim() || "";
    const businessType = isPersonal ? "" : form.elements.businessType?.value.trim() || "";
    const totalAmount = money(form.elements.totalAmount?.value);
    const manager = form.elements.manager?.value.trim() || name;
    const phone = form.elements.phone?.value.trim() || "-";
    const email = currentSimpleEmail() || "-";
    const row = createMemberRow({ memberType, companyName: name, businessNumber, industry, businessType, totalAmount, manager, phone, email });

    tableBody?.prepend(row);
    refreshMemberTypeCounts();
    form.reset();
    syncSimpleMemberType();
    syncSimpleEmailDomain();
    if (simpleFilePreview) simpleFilePreview.hidden = true;
    setModalOpen(false);
    showAdminToast(`${name} 회원을 등록했습니다.`);
  });

  refreshMemberTypeCounts();
}

initMemberLiteManagement();

function initMemberDetailPage() {
  const form = document.querySelector("[data-member-detail-form]");
  const editToggle = document.querySelector("[data-member-edit-toggle]");
  const editActions = document.querySelector(".member-edit-actions");
  const cancelButton = document.querySelector("[data-member-edit-cancel]");
  const memoForm = document.querySelector("[data-member-memo-form]");
  const memoEditButton = document.querySelector("[data-member-memo-edit]");
  const memoCancelButton = document.querySelector("[data-member-memo-cancel]");
  const memoActions = document.querySelector(".member-memo-actions");
  const documentList = document.querySelector("[data-member-document-list]");
  const uploadInput = document.querySelector("[data-member-document-upload]");
  if (!form && !documentList) return;

  const fields = form ? Array.from(form.querySelectorAll("input, select, textarea")) : [];
  const initialValues = new Map();
  const memoField = memoForm?.elements.memberMemo;
  const memoStorageKey = `doilMemberMemo:${new URLSearchParams(window.location.search).get("customer") || "default"}`;
  let initialMemo = memoField?.value || "";

  function rememberValues() {
    fields.forEach((field) => initialValues.set(field.name, field.value));
  }

  function setEditing(isEditing) {
    fields.forEach((field) => {
      field.disabled = !isEditing;
    });
    if (editActions) editActions.hidden = !isEditing;
    if (editToggle) editToggle.hidden = isEditing;
  }

  function setMemoEditing(isEditing) {
    if (memoField) memoField.disabled = !isEditing;
    if (memoActions) memoActions.hidden = !isEditing;
    if (memoEditButton) memoEditButton.hidden = isEditing;
    if (isEditing) memoField?.focus();
  }

  rememberValues();
  setEditing(false);
  if (memoField) {
    const savedMemo = localStorage.getItem(memoStorageKey);
    if (savedMemo !== null) memoField.value = savedMemo;
    initialMemo = memoField.value;
    setMemoEditing(false);
  }

  editToggle?.addEventListener("click", () => {
    rememberValues();
    setEditing(true);
  });

  cancelButton?.addEventListener("click", () => {
    fields.forEach((field) => {
      field.value = initialValues.get(field.name) || "";
    });
    setEditing(false);
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.elements.memberName?.value.trim() || "회원";
    const title = document.querySelector("[data-member-detail-name]");
    if (title) title.textContent = name;
    setEditing(false);
    showAdminToast(`${name} 정보를 저장했습니다.`);
  });

  memoEditButton?.addEventListener("click", () => {
    initialMemo = memoField?.value || "";
    setMemoEditing(true);
  });

  memoCancelButton?.addEventListener("click", () => {
    if (memoField) memoField.value = initialMemo;
    setMemoEditing(false);
  });

  memoForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = memoField?.value.trim() || "";
    localStorage.setItem(memoStorageKey, value);
    initialMemo = value;
    setMemoEditing(false);
    showAdminToast("회원 메모를 저장했습니다.");
  });

  function createDocumentItem(fileName) {
    const item = document.createElement("li");
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, ".");
    item.innerHTML = `<div><strong>${fileName}</strong><small>업로드 서류 · ${today} 업로드</small></div><div class="admin-row-actions"><button class="admin-line-button" type="button">다운로드</button><button class="admin-line-button danger" type="button" data-member-document-delete>삭제</button></div>`;
    return item;
  }

  uploadInput?.addEventListener("change", () => {
    const files = Array.from(uploadInput.files || []);
    files.forEach((file) => documentList?.prepend(createDocumentItem(file.name)));
    if (files.length) showAdminToast(`${files.length}개 서류를 업로드 목록에 추가했습니다.`);
    uploadInput.value = "";
  });

  documentList?.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-member-document-delete]");
    if (!deleteButton) return;
    const item = deleteButton.closest("li");
    const fileName = item?.querySelector("strong")?.textContent || "서류";
    if (!window.confirm(`${fileName} 파일을 삭제할까요?`)) return;
    item?.remove();
    showAdminToast(`${fileName} 파일을 삭제했습니다.`);
  });
}

initMemberDetailPage();

function initMemberSignupPage() {
  const form = document.querySelector("[data-member-signup-form]");
  if (!form) return;

  const success = document.querySelector("[data-member-signup-success]");
  const expireMessage = document.querySelector("[data-signup-expire-message]");
  const typeCards = Array.from(document.querySelectorAll("[data-signup-type-card]"));
  const businessOnlyFields = Array.from(document.querySelectorAll("[data-business-only]"));
  const phoneInput = form.elements.phone;
  const businessNumberInput = form.elements.businessNumber;
  const emailLocal = form.elements.emailLocal;
  const emailDomain = form.elements.emailDomain;
  const emailDomainDirect = form.elements.emailDomainDirect;
  const certificateInput = form.elements.businessCertificate;
  const filePreview = document.querySelector("[data-signup-file-preview]");
  const fileNameTarget = document.querySelector("[data-signup-file-name]");
  const fileViewButton = document.querySelector("[data-signup-file-view]");
  let certificatePreviewUrl = "";
  const expiredOnLoad = isExpiredInvite();

  function selectedType() {
    return form.elements.memberType?.value || "사업자";
  }

  function isExpiredInvite() {
    const params = new URLSearchParams(window.location.search);
    const expires = Number(params.get("expires") || 0);
    return Boolean(expires && Date.now() > expires);
  }

  function setSignupDisabled(isDisabled) {
    Array.from(form.elements).forEach((field) => {
      field.disabled = isDisabled;
    });
    if (expireMessage) expireMessage.hidden = !isDisabled;
  }

  function registeredSignupBusinessNumbers() {
    const numbers = ["8502101340", "1234567890"];
    readAdminJsonStorage("doilMemberSignupRequests", []).forEach((member) => {
      const number = normalizeBusinessNumber(member?.businessNumber);
      if (number) numbers.push(number);
    });
    return new Set(numbers);
  }

  function explainSignupBusinessDuplicate(input) {
    const number = normalizeBusinessNumber(input?.value || "");
    const isDuplicate = Boolean(number && registeredSignupBusinessNumbers().has(number));
    const message = isDuplicate ? "이미 등록된 사업자등록번호입니다. 기존 회원으로 등록되어 있어 새 회원등록 요청을 접수할 수 없습니다." : "";
    if (input) input.setCustomValidity(message);
    return message;
  }

  function formatPhone(value) {
    const digits = String(value || "").replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 3) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    if (digits.length === 10) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  }

  function currentEmail() {
    const local = emailLocal?.value.trim() || "";
    const selectedDomain = emailDomain?.value || "";
    const domain = selectedDomain === "direct" ? emailDomainDirect?.value.trim() || "" : selectedDomain;
    return local && domain ? `${local}@${domain}` : "";
  }

  function syncEmailDomain() {
    const useDirect = emailDomain?.value === "direct";
    if (emailDomainDirect) {
      emailDomainDirect.hidden = !useDirect;
      emailDomainDirect.disabled = !useDirect;
      if (useDirect) emailDomainDirect.focus();
      if (!useDirect) emailDomainDirect.value = "";
    }
  }

  function syncType() {
    const isBusiness = selectedType() === "사업자";
    typeCards.forEach((card) => {
      const input = card.querySelector("input");
      card.classList.toggle("active", input?.checked);
    });
    businessOnlyFields.forEach((field) => {
      field.hidden = !isBusiness;
      field.querySelectorAll("input, textarea, select").forEach((input) => {
        input.disabled = !isBusiness;
      });
    });
  }

  form.addEventListener("change", (event) => {
    if (event.target.name === "memberType") syncType();
  });

  phoneInput?.addEventListener("input", () => {
    phoneInput.value = formatPhone(phoneInput.value);
  });

  phoneInput?.addEventListener("blur", () => {
    phoneInput.value = formatPhone(phoneInput.value);
  });

  businessNumberInput?.addEventListener("input", () => {
    businessNumberInput.setCustomValidity("");
  });

  businessNumberInput?.addEventListener("blur", () => {
    explainSignupBusinessDuplicate(businessNumberInput);
  });

  emailDomain?.addEventListener("change", syncEmailDomain);

  certificateInput?.addEventListener("change", () => {
    const file = certificateInput.files?.[0];
    if (certificatePreviewUrl) URL.revokeObjectURL(certificatePreviewUrl);
    certificatePreviewUrl = file ? URL.createObjectURL(file) : "";
    if (filePreview) filePreview.hidden = !file;
    if (fileNameTarget) fileNameTarget.textContent = file?.name || "";
  });

  fileViewButton?.addEventListener("click", () => {
    if (!certificatePreviewUrl) return;
    window.open(certificatePreviewUrl, "_blank", "noopener");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isExpiredInvite()) {
      setSignupDisabled(true);
      showAdminToast("만료된 회원등록 링크입니다.");
      return;
    }
    const memberType = selectedType();
    const isPersonal = memberType === "개인";
    const manager = form.elements.manager?.value.trim() || "";
    const phone = form.elements.phone?.value.trim() || "";
    const email = currentEmail();
    const duplicateReason = isPersonal ? "" : explainSignupBusinessDuplicate(businessNumberInput);
    if (duplicateReason) {
      showAdminToast(duplicateReason);
      businessNumberInput?.reportValidity();
      return;
    }
    if (!manager || !phone || !email || !form.elements.agree?.checked) {
      showAdminToast("필수 정보를 확인해 주세요.");
      return;
    }

    const requests = readAdminJsonStorage("doilMemberSignupRequests", []);
    requests.push({
      id: `signup-${Date.now()}`,
      memberType,
      companyName: isPersonal ? "" : form.elements.companyName?.value.trim() || "",
      businessNumber: isPersonal ? "" : form.elements.businessNumber?.value.trim() || "",
      industry: isPersonal ? "" : form.elements.industry?.value.trim() || "",
      businessType: isPersonal ? "" : form.elements.businessType?.value.trim() || "",
      manager,
      phone,
      email,
      totalAmount: "0원",
      certificateName: certificateInput?.files?.[0]?.name || "",
      createdAt: new Date().toISOString()
    });
    writeAdminJsonStorage("doilMemberSignupRequests", requests);
    form.reset();
    syncType();
    if (success) success.hidden = false;
    window.location.href = "signup-complete.html";
  });

  if (expiredOnLoad) {
    setSignupDisabled(true);
    return;
  }
  syncEmailDomain();
  syncType();
}

initMemberSignupPage();

function initAdminCustomerModal() {
  const modal = document.querySelector("[data-customer-modal]");
  if (!modal) return;

  const title = modal.querySelector("#customerModalTitle");
  const form = modal.querySelector(".admin-customer-form");
  const openButtons = Array.from(document.querySelectorAll("[data-customer-modal-open]"));
  const closeButtons = Array.from(document.querySelectorAll("[data-customer-modal-close]"));
  const passwordInput = modal.querySelector("[data-temp-password]");
  const passwordMessage = modal.querySelector("[data-temp-password-message]");
  const generatePasswordButton = modal.querySelector("[data-generate-temp-password]");
  const copyPasswordButton = modal.querySelector("[data-copy-temp-password]");
  const customerTableBody = document.querySelector(".admin-customer-table tbody");
  const typeButtons = Array.from(modal.querySelectorAll("[data-customer-form-type]"));
  const businessFields = modal.querySelector("[data-customer-business-fields]");
  const personalFields = modal.querySelector("[data-customer-personal-fields]");
  const sameBusinessCheckbox = modal.querySelector("[data-manager-same-business]");
  let activeCustomerRow = null;
  let activeCustomerMode = "create";

  function generateTempPassword() {
    const lower = "abcdefghijkmnopqrstuvwxyz";
    const upper = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    const numbers = "23456789";
    const specials = "!@#$%";
    const all = `${lower}${upper}${numbers}${specials}`;
    const picks = [
      lower[Math.floor(Math.random() * lower.length)],
      upper[Math.floor(Math.random() * upper.length)],
      numbers[Math.floor(Math.random() * numbers.length)],
      specials[Math.floor(Math.random() * specials.length)]
    ];
    while (picks.length < 12) {
      picks.push(all[Math.floor(Math.random() * all.length)]);
    }
    return picks.sort(() => Math.random() - 0.5).join("");
  }

  function refreshTempPassword(message = "고객에게 전달 후 최초 로그인 시 비밀번호 변경을 요청합니다.") {
    if (passwordInput) passwordInput.value = generateTempPassword();
    if (passwordMessage) passwordMessage.textContent = message;
  }

  function setField(name, value) {
    const field = form?.elements?.[name];
    if (field) field.value = value || "";
  }

  function cleanText(element) {
    return (element?.textContent || "").replace(/\s+/g, " ").trim();
  }

  function getField(name) {
    const field = form?.elements?.[name];
    return field ? field.value.trim() : "";
  }

  function setCustomerFormType(type) {
    const isBusiness = type !== "personal";
    if (businessFields) businessFields.hidden = !isBusiness;
    if (personalFields) personalFields.hidden = isBusiness;
    typeButtons.forEach((button) => {
      const active = button.dataset.customerFormType === (isBusiness ? "business" : "personal");
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function syncManagerWithBusiness() {
    if (!sameBusinessCheckbox?.checked || !form) return;
    if (form.elements.managerPhone) form.elements.managerPhone.value = form.elements.businessPhone?.value || "";
    if (form.elements.managerEmail) form.elements.managerEmail.value = form.elements.businessEmail?.value || "";
  }

  function updateRowSearch(row) {
    if (!row) return;
    row.dataset.search = Array.from(row.children)
      .map((cell) => cleanText(cell))
      .join(" ")
      .replace(/-/g, "");
  }

  function bindCustomerRowActions(row) {
    const editButton = row?.querySelector("[data-customer-modal-open='edit']");
    editButton?.addEventListener("click", () => {
      activeCustomerRow = row;
      openModal("edit", readRowData(editButton));
    });
    const documentButton = row?.querySelector("[data-document-check-open]");
    documentButton?.addEventListener("click", () => {
      if (typeof window.openDocumentCheckModal === "function") window.openDocumentCheckModal(documentButton);
    });
    const businessDocumentButton = row?.querySelector("[data-business-document-open]");
    businessDocumentButton?.addEventListener("click", () => {
      if (typeof window.openDocumentCheckModal === "function") window.openDocumentCheckModal(businessDocumentButton, "business");
    });
  }

  function readRowData(button) {
    const row = button.closest("[data-admin-row]");
    if (!row) return null;
    const cells = Array.from(row.children);
    const isBusiness = cells[0]?.textContent?.includes("사업자");
    const vaultCount = Number((cells[7]?.textContent || "").match(/\d+/)?.[0] || 0);
    return {
      customerType: isBusiness ? "business" : "personal",
      customerName: cells[1]?.querySelector("strong")?.textContent?.trim(),
      customerSub: cells[1]?.querySelector("small")?.textContent?.trim(),
      businessNumber: isBusiness ? cells[2]?.textContent?.trim() : "",
      phone: cells[3]?.textContent?.trim(),
      email: cells[4]?.textContent?.trim(),
      managerName: cells[5]?.querySelector("strong")?.textContent?.trim(),
      managerPhone: cells[5]?.querySelector("small")?.textContent?.trim(),
      verifyStatus: vaultCount > 0 ? "보관중" : "보관 필요"
    };
  }

  function openModal(mode, rowData) {
    activeCustomerMode = mode;
    if (title) title.textContent = mode === "edit" ? "고객 정보 수정" : "고객 등록";
    form?.reset();
    refreshTempPassword(mode === "edit" ? "재발급 시 고객에게 새 임시 비밀번호를 전달하세요." : "고객에게 전달 후 최초 로그인 시 비밀번호 변경을 요청합니다.");

    setCustomerFormType(rowData?.customerType || "business");

    if (rowData) {
      if (rowData.customerType === "personal") {
        setField("personalName", rowData.customerName);
        setField("personalPhone", rowData.phone);
        setField("personalEmail", rowData.email);
      } else {
        setField("companyName", rowData.customerName);
        setField("businessNumber", rowData.businessNumber);
        setField("businessPhone", rowData.phone);
        setField("businessEmail", rowData.email);
        setField("managerName", rowData.managerName);
        setField("managerPhone", rowData.managerPhone);
      }
    }

    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector("input, select, textarea, button")?.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.dataset.customerModalOpen || "create";
      activeCustomerRow = mode === "edit" ? button.closest("[data-admin-row]") : null;
      openModal(mode, mode === "edit" ? readRowData(button) : null);
    });
  });

  typeButtons.forEach((button) => {
    button.addEventListener("click", () => setCustomerFormType(button.dataset.customerFormType || "business"));
  });

  sameBusinessCheckbox?.addEventListener("change", syncManagerWithBusiness);
  form?.elements?.businessPhone?.addEventListener("input", syncManagerWithBusiness);
  form?.elements?.businessEmail?.addEventListener("input", syncManagerWithBusiness);

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const isBusiness = !businessFields?.hidden;
    const customerType = isBusiness ? "사업자" : "개인";
    const customerName = isBusiness ? (getField("companyName") || "신규 사업자") : (getField("personalName") || "신규 개인");
    const customerId = getField("customerId") || "new_client";
    const businessNumber = isBusiness ? (getField("businessNumber") || "-") : "-";
    const phone = isBusiness ? (getField("businessPhone") || "-") : (getField("personalPhone") || "-");
    const email = isBusiness ? (getField("businessEmail") || "-") : (getField("personalEmail") || "-");
    const managerName = isBusiness ? (getField("managerName") || "-") : "-";
    const managerPhone = isBusiness ? (getField("managerPhone") || "-") : "-";
    const customerKind = isBusiness ? "business" : "personal";
    const documentKind = isBusiness ? "done" : "none";
    const customerSub = isBusiness ? `대표 ${getField("ceoName") || "-"}` : `${getField("birthDate") || "생년월일 미입력"} · ${getField("gender") || "성별 미입력"}`;
    const vaultCount = 0;
    const row = activeCustomerMode === "edit" && activeCustomerRow ? activeCustomerRow : document.createElement("tr");

    row.dataset.adminRow = "";
    row.dataset.type = customerKind;
    row.dataset.document = documentKind;
    row.innerHTML = `<td>${customerType}</td><td><strong>${customerName}</strong><small>${customerSub}</small></td><td>${businessNumber || "-"}</td><td>${phone}</td><td>${email}</td><td>${isBusiness ? `<strong>${managerName}</strong><small>${managerPhone}</small>` : "-"}</td><td>${isBusiness ? '<button class="admin-line-button" type="button" data-business-document-open>보기</button>' : '<button class="admin-line-button" type="button" disabled>해당없음</button>'}</td><td><button class="admin-line-button ${vaultCount === 0 ? "primary" : ""}" type="button" data-document-check-open>보관함(${vaultCount})</button></td><td><button class="admin-line-button" type="button" data-customer-modal-open="edit">수정</button></td>`;
    updateRowSearch(row);
    bindCustomerRowActions(row);

    if (activeCustomerMode !== "edit" || !activeCustomerRow) {
      customerTableBody?.prepend(row);
    }

    closeModal();
  });

  closeButtons.forEach((button) => button.addEventListener("click", closeModal));
  generatePasswordButton?.addEventListener("click", () => refreshTempPassword("새 임시 비밀번호가 생성되었습니다. 복사해서 고객에게 전달하세요."));
  copyPasswordButton?.addEventListener("click", async () => {
    const password = passwordInput?.value || "";
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      if (passwordMessage) passwordMessage.textContent = "초기 비밀번호를 복사했습니다.";
    } catch {
      passwordInput?.select();
      if (passwordMessage) passwordMessage.textContent = "복사가 막히면 선택된 비밀번호를 직접 복사하세요.";
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
}

initAdminCustomerModal();

function initAdminDocumentCheckModal() {
  const modal = document.querySelector("[data-document-check-modal]");
  if (!modal) return;

  const form = modal.querySelector("form");
  const closeButtons = Array.from(document.querySelectorAll("[data-document-check-close]"));
  const customerTarget = modal.querySelector("[data-document-customer]");
  const metaTarget = modal.querySelector("[data-document-meta]");
  const previewType = modal.querySelector("[data-document-preview-type]");
  const hint = modal.querySelector("[data-document-check-hint]");
  const list = modal.querySelector("[data-document-vault-list]");
  const searchInput = modal.querySelector("[data-document-vault-search]");
  const fileInput = modal.querySelector("[data-document-vault-file]");
  let activeRow = null;
  let activeDocs = [];

  function makeStoredDocs(customer, count) {
    const labels = ["신분증", "위임장", "법인서류", "통장사본", "계약서", "참고자료", "세금계산서 정보", "기타서류"];
    return Array.from({ length: count }, (_, index) => {
      const type = labels[index % labels.length];
      const day = String((index % 20) + 1).padStart(2, "0");
      return {
        type,
        name: `${customer}_${type}_${String(index + 1).padStart(2, "0")}.pdf`,
        note: "관리자 업로드",
        date: `2026.07.${day}`
      };
    });
  }

  const sampleDocs = {
    "가나다식품": [
      { type: "사업자등록증", name: "사업자등록증_가나다식품.png", note: "가입 시 업로드", date: "2026.07.01" },
      ...makeStoredDocs("가나다식품", 15)
    ],
    "ABC몰": [
      { type: "사업자등록증", name: "ABC몰_사업자등록증.png", note: "가입 시 업로드", date: "2026.07.08" },
      ...makeStoredDocs("ABC몰", 7)
    ],
    "홍길동": []
  };

  function cleanText(element) {
    return (element?.textContent || "").replace(/\s+/g, " ").trim();
  }

  function updateRowSearch(row) {
    if (!row) return;
    row.dataset.search = Array.from(row.children)
      .map((cell) => cleanText(cell))
      .join(" ")
      .replace(/-/g, "");
  }

  function getCustomerName(row) {
    const cells = Array.from(row.children);
    return cleanText(cells[1]?.querySelector("strong")) || cleanText(cells[1]);
  }

  function renderDocs() {
    if (!list) return;
    const keyword = (searchInput?.value || "").trim().toLowerCase();
    const filtered = activeDocs.filter((doc) => {
      const haystack = `${doc.type} ${doc.name} ${doc.note}`.toLowerCase();
      return !keyword || haystack.includes(keyword);
    });
    list.innerHTML = filtered.length
      ? filtered.map((doc) => `<li><span><strong>${doc.type}</strong><small>${doc.name}</small></span><em>${doc.note}</em><time>${doc.date}</time><button class="admin-line-button" type="button">보기</button></li>`).join("")
      : `<li class="is-empty"><span><strong>보관된 서류가 없습니다</strong><small>필요한 서류를 업로드해서 고객 서류함에 보관하세요.</small></span></li>`;
  }

  function syncCustomerRow() {
    if (!activeRow) return;
    const cells = Array.from(activeRow.children);
    const count = activeDocs.length;
    activeRow.dataset.verify = count > 0 ? "done" : "needed";
    if (cells[7]) {
      cells[7].innerHTML = `<button class="admin-line-button ${count === 0 ? "primary" : ""}" type="button" data-document-check-open>보관함(${count})</button>`;
    }
    const documentButton = activeRow.querySelector("[data-document-check-open]");
    if (documentButton) {
      documentButton.textContent = `보관함(${count})`;
      documentButton.classList.toggle("primary", count === 0);
      documentButton.addEventListener("click", () => openModal(documentButton));
    }
    updateRowSearch(activeRow);
  }

  function openModal(button, mode = "vault") {
    activeRow = button.closest("[data-admin-row]");
    if (!activeRow) return;

    const cells = Array.from(activeRow.children);
    const customerName = getCustomerName(activeRow);
    if (customerTarget) customerTarget.textContent = customerName;
    if (metaTarget) metaTarget.textContent = `${cleanText(cells[0])} · ${cleanText(cells[2])} · ${cleanText(cells[4])}`;
    const docs = [...(sampleDocs[customerName] || [])];
    activeDocs = mode === "business" ? docs.filter((doc) => doc.type === "사업자등록증") : docs;
    if (previewType) previewType.textContent = mode === "business" ? "사업자등록증" : "DOCUMENT VAULT";
    if (searchInput) searchInput.value = "";
    if (fileInput) fileInput.value = "";
    renderDocs();
    if (hint) {
      hint.textContent = mode === "business"
        ? "가입 시 업로드된 사업자등록증 기본서류입니다. 실제 서비스에서는 원본 이미지/PDF 미리보기가 표시됩니다."
        : "업로드한 서류는 고객별 서류함에 보관되고, 검색으로 다시 찾아 사용할 수 있어야 합니다.";
      hint.classList.remove("is-saved");
    }

    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector("select, textarea, button")?.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  window.openDocumentCheckModal = openModal;

  document.querySelectorAll("[data-document-check-open]").forEach((button) => {
    button.addEventListener("click", () => openModal(button));
  });
  document.querySelectorAll("[data-business-document-open]").forEach((button) => {
    button.addEventListener("click", () => openModal(button, "business"));
  });

  searchInput?.addEventListener("input", renderDocs);
  fileInput?.addEventListener("change", () => {
    const files = Array.from(fileInput.files || []);
    if (!files.length) return;
    const typeField = form?.elements?.documentResult;
    const typeMap = {
      id: "신분증",
      business: "사업자등록증",
      corp: "법인서류",
      proxy: "위임장",
      etc: "기타서류"
    };
    const type = typeMap[typeField?.value] || "기타서류";
    const now = new Date().toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\s/g, "").replace(/\.$/, "");
    files.forEach((file) => {
      activeDocs.unshift({ type, name: file.name, note: "관리자 업로드", date: now });
    });
    renderDocs();
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!activeRow) return;

    syncCustomerRow();
    if (hint) {
      hint.textContent = `서류함이 저장되었습니다. 현재 보관 서류는 ${activeDocs.length}건입니다.`;
      hint.classList.add("is-saved");
    }
  });

  closeButtons.forEach((button) => button.addEventListener("click", closeModal));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
}

initAdminDocumentCheckModal();

function initAdminChannelFeeCalculator() {
  const calculators = Array.from(document.querySelectorAll("[data-channel-fee-calculator]"));
  if (!calculators.length) return;

  const kmongFeeTiers = [
    { min: 1, max: 700000, rate: 0.164, label: "1원 ~ 700,000원 · 16.4%" },
    { min: 700001, max: 2000000, rate: 0.094, label: "700,001원 ~ 2,000,000원 · 9.4%" },
    { min: 2000001, max: Infinity, rate: 0.044, label: "2,000,001원 이상 · 4.4%" }
  ];

  function parseMoney(value) {
    return Number(String(value || "").replace(/[^\d]/g, "")) || 0;
  }

  function formatMoney(value) {
    return `${Math.max(0, Math.round(value)).toLocaleString("ko-KR")}원`;
  }

  function getKmongTier(amount) {
    return kmongFeeTiers.find((tier) => amount >= tier.min && amount <= tier.max) || kmongFeeTiers[0];
  }

  calculators.forEach((calculator) => {
    const channelInput = calculator.querySelector("[data-fee-channel]");
    const amountInput = calculator.querySelector("[data-fee-amount]");
    const rateTarget = calculator.querySelector("[data-fee-rate]");
    const tierTarget = calculator.querySelector("[data-fee-tier]");
    const feeTarget = calculator.querySelector("[data-fee-value]");
    const netTarget = calculator.querySelector("[data-fee-net]");

    function updateFee() {
      const amount = parseMoney(amountInput?.value);
      const channel = channelInput?.value || "site";
      const isKmong = channel === "kmong";
      const tier = isKmong ? getKmongTier(amount) : null;
      const rate = tier?.rate || 0;
      const fee = amount * rate;
      const net = amount - fee;

      if (rateTarget) rateTarget.textContent = isKmong ? `${(rate * 100).toFixed(1)}%` : "0%";
      if (tierTarget) tierTarget.textContent = isKmong ? tier.label : "자사몰/유선은 플랫폼 수수료 없음";
      if (feeTarget) feeTarget.textContent = fee > 0 ? `-${formatMoney(fee)}` : "0원";
      if (netTarget) netTarget.textContent = formatMoney(net);
      if (amountInput && document.activeElement !== amountInput) amountInput.value = amount ? amount.toLocaleString("ko-KR") : "";
    }

    channelInput?.addEventListener("change", updateFee);
    amountInput?.addEventListener("input", updateFee);
    amountInput?.addEventListener("blur", updateFee);
    updateFee();
  });
}

initAdminChannelFeeCalculator();

function initAdminChannelSettings() {
  const scope = document.querySelector("[data-admin-channel-settings]");
  const modal = document.querySelector("[data-channel-modal]");
  const form = document.querySelector("[data-channel-form]");
  const tableBody = document.querySelector("[data-channel-table-body]");
  const addButton = document.querySelector("[data-channel-add]");
  const deleteButton = document.querySelector("[data-channel-delete]");
  if (!scope || !modal || !form || !tableBody || !addButton) return;

  let activeRow = null;

  function statusMarkup(status) {
    return status === "active"
      ? '<span class="status-pill green">사용중</span>'
      : '<span class="status-pill gray">사용중지</span>';
  }

  function feeModeLabel(mode) {
    if (mode === "tier") return "금액 구간형";
    if (mode === "none") return "없음";
    return "고정 수수료";
  }

  function feeRulesText(mode, fixedRate, tierRules) {
    if (mode === "none") return "0%";
    if (mode === "tier") return tierRules.trim() || "구간 미설정";
    return `${Number(fixedRate || 0).toLocaleString("ko-KR")}%`;
  }

  function feeRulesMarkup(text) {
    return `<span class="admin-fee-rules">${text
      .split("/")
      .map((item) => item.trim())
      .filter(Boolean)
      .join("<br>")}</span>`;
  }

  function setModalOpen(isOpen) {
    modal.hidden = !isOpen;
    document.body.classList.toggle("modal-open", isOpen);
  }

  function openCreateModal() {
    activeRow = null;
    form.reset();
    form.elements.channelType.value = "외부채널";
    form.elements.feeMode.value = "fixed";
    form.elements.status.value = "active";
    if (deleteButton) deleteButton.hidden = true;
    modal.querySelector("#channelModalTitle").textContent = "외부채널 추가";
    setModalOpen(true);
    form.elements.channelName?.focus();
  }

  function openEditModal(row) {
    activeRow = row;
    form.elements.channelName.value = row.dataset.channelName || "";
    form.elements.channelType.value = row.dataset.channelType || "외부채널";
    form.elements.feeMode.value = row.dataset.feeMode || "fixed";
    form.elements.fixedRate.value = row.dataset.feeMode === "fixed" ? (row.dataset.feeRules || "0%").replace(/[^\d.]/g, "") : "";
    form.elements.tierRules.value = row.dataset.feeMode === "tier" ? row.dataset.feeRules || "" : "";
    form.elements.settlement.value = row.dataset.settlement || "입금 확인일";
    form.elements.status.value = row.dataset.status || "active";
    form.elements.memo.value = row.querySelector("td small")?.textContent || "";
    if (deleteButton) deleteButton.hidden = row.dataset.channelName === "자사몰";
    modal.querySelector("#channelModalTitle").textContent = "외부채널 수정";
    setModalOpen(true);
    form.elements.channelName?.focus();
  }

  function closeModal() {
    setModalOpen(false);
    activeRow = null;
  }

  function saveChannel(event) {
    event.preventDefault();
    const channelName = form.elements.channelName.value.trim();
    if (!channelName) return;

    const channelType = form.elements.channelType.value;
    const feeMode = form.elements.feeMode.value;
    const rulesText = feeRulesText(feeMode, form.elements.fixedRate.value, form.elements.tierRules.value);
    const settlement = form.elements.settlement.value;
    const status = form.elements.status.value;
    const memo = form.elements.memo.value.trim() || (channelType === "외부채널" ? "외부 거래채널" : "직접 거래");
    const row = activeRow || document.createElement("tr");

    row.dataset.channelRow = "";
    row.dataset.channelName = channelName;
    row.dataset.channelType = channelType;
    row.dataset.feeMode = feeMode;
    row.dataset.feeRules = rulesText;
    row.dataset.settlement = settlement;
    row.dataset.status = status;
    row.innerHTML = `
      <td><strong>${channelName}</strong><small>${memo}</small></td>
      <td>${channelType}</td>
      <td>${feeModeLabel(feeMode)}</td>
      <td>${feeRulesMarkup(rulesText)}</td>
      <td>${settlement}</td>
      <td>${statusMarkup(status)}</td>
      <td><button class="admin-line-button" type="button" data-channel-edit>수정</button></td>
    `;

    if (!activeRow) tableBody.prepend(row);
    showAdminToast(`${channelName} 채널 설정이 저장되었습니다.`);
    closeModal();
  }

  addButton.addEventListener("click", openCreateModal);
  form.addEventListener("submit", saveChannel);
  tableBody.addEventListener("click", (event) => {
    const button = event.target.closest("[data-channel-edit]");
    if (!button) return;
    const row = button.closest("[data-channel-row]");
    if (row) openEditModal(row);
  });
  deleteButton?.addEventListener("click", () => {
    if (!activeRow) return;
    const channelName = activeRow.dataset.channelName || "채널";
    activeRow.remove();
    showAdminToast(`${channelName} 채널을 삭제했습니다.`);
    closeModal();
  });
  document.querySelectorAll("[data-channel-modal-close]").forEach((button) => {
    button.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
}

initAdminChannelSettings();

function initAdminExpenseForm() {
  const forms = Array.from(document.querySelectorAll("[data-expense-form]"));
  if (!forms.length) return;

  forms.forEach((form) => {
    const typeButtons = Array.from(form.querySelectorAll("[data-expense-type]"));
    const dateLabel = form.querySelector("[data-expense-date-label]");

    typeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedType = button.dataset.expenseType || "monthly";
        typeButtons.forEach((item) => {
          const isActive = item === button;
          item.classList.toggle("active", isActive);
          item.setAttribute("aria-pressed", String(isActive));
        });
        if (dateLabel) {
          dateLabel.textContent = selectedType === "monthly" ? "매월 결제일" : "지출일";
        }
      });
    });
  });
}

initAdminExpenseForm();

function initAdminBillingRowModal() {
  const table = document.querySelector("[data-billing-customer-table]");
  const modal = document.querySelector("[data-billing-customer-modal]");
  if (!table || !modal) return;

  const closeButtons = Array.from(document.querySelectorAll("[data-billing-modal-close]"));
  const fields = {
    customer: modal.querySelector("[data-billing-modal-customer]"),
    sub: modal.querySelector("[data-billing-modal-sub]"),
    order: modal.querySelector("[data-billing-modal-order]"),
    date: modal.querySelector("[data-billing-modal-date]"),
    channel: modal.querySelector("[data-billing-modal-channel]"),
    kind: modal.querySelector("[data-billing-modal-kind]"),
    gross: modal.querySelector("[data-billing-modal-gross]"),
    fee: modal.querySelector("[data-billing-modal-fee]"),
    net: modal.querySelector("[data-billing-modal-net]"),
    payment: modal.querySelector("[data-billing-modal-payment]"),
    invoice: modal.querySelector("[data-billing-modal-invoice]")
  };

  function cleanText(element) {
    return (element?.textContent || "").replace(/\s+/g, " ").trim();
  }

  function setText(key, value) {
    if (fields[key]) fields[key].textContent = value || "-";
  }

  function openModal(row) {
    const cells = Array.from(row.children);
    setText("order", cleanText(cells[0]));
    setText("date", cleanText(cells[1]));
    setText("channel", cleanText(cells[2]));
    setText("customer", cleanText(cells[3]?.querySelector("strong")) || cleanText(cells[3]));
    setText("sub", row.dataset.customerSub || cleanText(cells[3]?.querySelector("small")));
    setText("kind", cleanText(cells[4]));
    setText("gross", cleanText(cells[5]));
    setText("fee", cleanText(cells[6]));
    setText("net", cleanText(cells[7]));
    setText("payment", cleanText(cells[8]));
    setText("invoice", cleanText(cells[9]));
    modal.hidden = false;
    document.body.classList.add("modal-open");
  }

  window.openAdminBillingDetail = openModal;

  table.addEventListener("click", (event) => {
    if (event.target.closest("button, a, input, select, textarea")) return;
    const row = event.target.closest("[data-admin-row]");
    if (row && !row.hidden) openModal(row);
  });

  closeButtons.forEach((button) => button.addEventListener("click", () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }));
}

initAdminBillingRowModal();

function showAdminToast(message) {
  let toast = document.querySelector("[data-admin-toast]");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "admin-toast";
    toast.dataset.adminToast = "";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showAdminToast.timer);
  showAdminToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}

function initAdminBillingActions() {
  const billingTable = document.querySelector("[data-billing-customer-table]");
  const expenseForm = document.querySelector("[data-expense-form]");
  const expenseTable = document.querySelector(".admin-expense-table tbody");
  const exportButton = Array.from(document.querySelectorAll("button")).find((button) => button.textContent.replace(/\s+/g, "").includes("엑셀다운로드"));
  const invoiceModal = document.querySelector("[data-invoice-issue-modal]");
  const invoiceForm = document.querySelector("[data-invoice-issue-form]");
  const depositModal = document.querySelector("[data-deposit-confirm-modal]");
  const depositForm = document.querySelector("[data-deposit-confirm-form]");
  let activeExpenseRow = null;
  let activeInvoiceRow = null;
  let activeDepositRow = null;

  if (!billingTable && !expenseForm && !exportButton) return;

  function cleanText(element) {
    return (element?.textContent || "").replace(/\s+/g, " ").trim();
  }

  function parseMoney(value) {
    return Number(String(value || "").replace(/[^\d]/g, "")) || 0;
  }

  function formatMoney(value) {
    return `${Math.max(0, Math.round(value || 0)).toLocaleString("ko-KR")}원`;
  }

  function todayValue() {
    const today = new Date();
    const offset = today.getTimezoneOffset() * 60000;
    return new Date(today.getTime() - offset).toISOString().slice(0, 10);
  }

  function setStatusCell(cell, label, color) {
    if (!cell) return;
    cell.innerHTML = `<span class="status-pill ${color}">${label}</span>`;
  }

  function setInvoiceCell(cell, label, className) {
    if (!cell) return;
    cell.innerHTML = `<span class="invoice-status ${className}">${label}</span>`;
  }

  function refreshRowSearch(row) {
    if (!row) return;
    row.dataset.search = Array.from(row.children)
      .map((cell) => cleanText(cell))
      .join(" ")
      .replace(/-/g, "");
  }

  function updateBillingButton(row) {
    const cells = Array.from(row.children);
    const actionCell = cells[10];
    if (!actionCell) return;
    const payment = row.dataset.payment;
    const invoice = row.dataset.invoice;
    if (payment === "waiting") {
      actionCell.innerHTML = '<button class="admin-line-button primary" type="button">입금확인</button>';
      return;
    }
    if (invoice === "requested") {
      actionCell.innerHTML = '<button class="admin-line-button primary" type="button">발행처리</button>';
      return;
    }
    actionCell.innerHTML = '<button class="admin-line-button" type="button">보기</button>';
  }

  function closeInvoiceModal() {
    if (!invoiceModal) return;
    invoiceModal.hidden = true;
    document.body.classList.remove("modal-open");
    activeInvoiceRow = null;
  }

  function closeDepositModal() {
    if (!depositModal) return;
    depositModal.hidden = true;
    document.body.classList.remove("modal-open");
    activeDepositRow = null;
  }

  function splitVatIncluded(total) {
    const supply = Math.floor(total / 1.1);
    const vat = total - supply;
    return { supply, vat, total };
  }

  function setInvoiceSummary(amounts) {
    const supplyNode = document.querySelector("[data-invoice-supply]");
    const vatNode = document.querySelector("[data-invoice-vat]");
    const totalNode = document.querySelector("[data-invoice-total]");
    if (supplyNode) supplyNode.textContent = formatMoney(amounts.supply);
    if (vatNode) vatNode.textContent = formatMoney(amounts.vat);
    if (totalNode) totalNode.textContent = formatMoney(amounts.total);
  }

  function extractBusinessInfo(row) {
    const cells = Array.from(row.children);
    const customerName = cleanText(cells[3]?.querySelector("strong")) || cleanText(cells[3]);
    const customerMeta = row.dataset.customerSub || cleanText(cells[3]?.querySelector("small"));
    const businessNo = customerMeta.match(/\d{3}-\d{2}-\d{5}/)?.[0] || customerMeta.match(/\d{10}/)?.[0] || "";
    return {
      customerName,
      businessNo,
      phone: customerMeta.match(/010-\d{4}-\d{4}/)?.[0] || "",
      orderNo: cleanText(cells[0]),
      date: cleanText(cells[1]),
      itemName: `${customerName} ${cleanText(cells[4])}`.trim(),
      total: parseMoney(cleanText(cells[5]))
    };
  }

  function openInvoiceModal(row) {
    if (!invoiceModal || !invoiceForm) return;
    activeInvoiceRow = row;
    const info = extractBusinessInfo(row);
    const amounts = splitVatIncluded(info.total);
    invoiceForm.reset();
    invoiceForm.elements.transactionNo.value = info.orderNo;
    invoiceForm.elements.issuedAt.value = todayValue();
    invoiceForm.elements.businessNo.value = info.businessNo;
    invoiceForm.elements.companyName.value = info.customerName;
    invoiceForm.elements.ceoName.value = info.customerName === "가나다식품" ? "김대표" : "";
    invoiceForm.elements.businessType.value = "서비스";
    invoiceForm.elements.businessItem.value = "디자인 제작";
    invoiceForm.elements.invoiceEmail.value = "tax@example.com";
    invoiceForm.elements.businessAddress.value = "사업장 주소 확인 필요";
    invoiceForm.elements.supplyAmount.value = formatMoney(amounts.supply);
    invoiceForm.elements.vatAmount.value = formatMoney(amounts.vat);
    invoiceForm.elements.totalAmount.value = formatMoney(amounts.total);
    invoiceForm.elements.itemName.value = info.itemName;
    setInvoiceSummary(amounts);
    invoiceModal.hidden = false;
    document.body.classList.add("modal-open");
    invoiceForm.elements.businessNo.focus();
  }

  function openDepositModal(row) {
    if (!depositModal || !depositForm) return;
    activeDepositRow = row;
    const cells = Array.from(row.children);
    const orderNode = depositModal.querySelector("[data-deposit-order]");
    const customerNode = depositModal.querySelector("[data-deposit-customer]");
    const amountNode = depositModal.querySelector("[data-deposit-amount]");
    const dateNode = depositModal.querySelector("[data-deposit-date]");
    if (orderNode) orderNode.textContent = cleanText(cells[0]);
    if (customerNode) customerNode.textContent = cleanText(cells[3]?.querySelector("strong")) || cleanText(cells[3]);
    if (amountNode) amountNode.textContent = cleanText(cells[5]);
    if (dateNode) dateNode.textContent = cleanText(cells[1]);
    depositForm.reset();
    depositModal.hidden = false;
    document.body.classList.add("modal-open");
  }

  billingTable?.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const row = button.closest("[data-admin-row]");
    if (!row) return;

    const action = cleanText(button);
    const cells = Array.from(row.children);

    if (action.includes("입금확인")) {
      openDepositModal(row);
      return;
    }

    if (action.includes("발행처리")) {
      openInvoiceModal(row);
      return;
    }

    if (action.includes("보기") && typeof window.openAdminBillingDetail === "function") {
      window.openAdminBillingDetail(row);
    }
  });

  invoiceForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!activeInvoiceRow) return;
    const cells = Array.from(activeInvoiceRow.children);
    activeInvoiceRow.dataset.invoice = "issued";
    activeInvoiceRow.dataset.invoiceDue = "";
    setInvoiceCell(cells[9], "발행완료", "done");
    updateBillingButton(activeInvoiceRow);
    refreshRowSearch(activeInvoiceRow);
    const transactionNo = invoiceForm.elements.transactionNo.value;
    closeInvoiceModal();
    showAdminToast(`${transactionNo} 세금계산서 발급완료 처리되었습니다.`);
  });

  depositForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!activeDepositRow) return;
    const cells = Array.from(activeDepositRow.children);
    activeDepositRow.dataset.payment = "paid";
    setStatusCell(cells[8], "결제완료", "green");
    updateBillingButton(activeDepositRow);
    refreshRowSearch(activeDepositRow);
    const orderNo = cleanText(cells[0]);
    closeDepositModal();
    showAdminToast(`${orderNo} 입금확인 처리되었습니다.`);
  });

  document.querySelectorAll("[data-invoice-modal-close]").forEach((button) => {
    button.addEventListener("click", closeInvoiceModal);
  });

  document.querySelectorAll("[data-deposit-modal-close]").forEach((button) => {
    button.addEventListener("click", closeDepositModal);
  });

  exportButton?.addEventListener("click", () => {
    const rows = Array.from(billingTable?.querySelectorAll("tbody tr") || []).filter((row) => !row.hidden);
    const header = ["거래번호", "거래일", "채널", "고객정보", "구분", "총매출", "수수료", "순수익", "결제상태", "계산서"];
    const lines = rows.map((row) => Array.from(row.children).slice(0, 10).map((cell) => `"${cleanText(cell).replace(/"/g, '""')}"`).join(","));
    const csv = `\uFEFF${header.join(",")}\n${lines.join("\n")}`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `doil-billing-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    showAdminToast("현재 조회된 매출자료를 CSV로 내려받았습니다.");
  });

  function getExpenseFields() {
    if (!expenseForm) return {};
    const inputs = Array.from(expenseForm.querySelectorAll("input, select, textarea"));
    return {
      name: inputs[0],
      amount: inputs[1],
      category: inputs[2],
      date: inputs[3],
      memo: inputs[4],
      submit: Array.from(expenseForm.querySelectorAll("button")).find((button) => cleanText(button).includes("지출"))
    };
  }

  function selectedExpenseType() {
    return expenseForm?.querySelector("[data-expense-type].active")?.dataset.expenseType || "monthly";
  }

  function formatExpenseAmount(value) {
    const amount = Number(String(value || "").replace(/[^\d]/g, "")) || 0;
    return `${amount.toLocaleString("ko-KR")}원`;
  }

  function displayExpenseDate(type, value) {
    if (!value) return type === "monthly" ? "매월" : "-";
    if (type === "monthly") return `매월 ${Number(value.slice(-2))}일`;
    return value.replace(/-/g, ".");
  }

  expenseForm?.addEventListener("click", (event) => {
    const submitButton = event.target.closest("button");
    if (!submitButton || !cleanText(submitButton).includes("지출")) return;
    event.preventDefault();

    const fields = getExpenseFields();
    const type = selectedExpenseType();
    const typeLabel = type === "monthly" ? "매월 반복" : "1회성";
    const name = fields.name?.value.trim() || "신규 지출";
    const amount = formatExpenseAmount(fields.amount?.value);
    const category = fields.category?.value || "운영비";
    const date = displayExpenseDate(type, fields.date?.value);
    const row = activeExpenseRow || document.createElement("tr");

    row.innerHTML = `<td>${typeLabel}</td><td><strong>${name}</strong><small>${fields.memo?.value.trim() || "관리자 등록 지출"}</small></td><td>${category}</td><td><span class="admin-negative">-${amount}</span></td><td>${date}</td><td><span class="status-pill ${type === "monthly" ? "blue" : "gray"}">${type === "monthly" ? "반복" : "1회 반영"}</span></td><td><button class="admin-line-button" type="button">수정</button></td>`;
    if (!activeExpenseRow) expenseTable?.prepend(row);
    showAdminToast(`${name} 지출이 ${activeExpenseRow ? "수정" : "등록"}되었습니다.`);
    activeExpenseRow = null;
    if (fields.submit) fields.submit.textContent = "지출 등록";
    expenseForm.reset();
  });

  expenseTable?.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button || !cleanText(button).includes("수정")) return;
    const row = button.closest("tr");
    if (!row) return;
    activeExpenseRow = row;
    const fields = getExpenseFields();
    const cells = Array.from(row.children);
    if (fields.name) fields.name.value = cleanText(cells[1]?.querySelector("strong")) || cleanText(cells[1]);
    if (fields.amount) fields.amount.value = cleanText(cells[3]).replace(/[^\d]/g, "");
    if (fields.category) fields.category.value = cleanText(cells[2]);
    if (fields.memo) fields.memo.value = cleanText(cells[1]?.querySelector("small"));
    if (fields.submit) fields.submit.textContent = "지출 수정";
    expenseForm?.scrollIntoView({ behavior: "smooth", block: "center" });
    showAdminToast("지출 정보를 수정 모드로 불러왔습니다.");
  });
}

initAdminBillingActions();

function initAdminPurchaseModal() {
  const modal = document.querySelector("[data-purchase-modal]");
  const openButton = document.querySelector("[data-purchase-modal-open]");
  const form = document.querySelector("[data-purchase-form]");
  if (!modal || !openButton || !form) return;

  const closeButtons = Array.from(document.querySelectorAll("[data-purchase-modal-close]"));
  const tableBody = document.querySelector(".admin-data-table tbody");

  function parseAmount(value) {
    return Number(String(value || "").replace(/[^\d]/g, "")) || 0;
  }

  function formatWon(value) {
    return `${Math.round(value).toLocaleString("ko-KR")}원`;
  }

  function invoiceCell(value) {
    if (value === "수취완료") return '<span class="invoice-status done">수취완료</span>';
    if (value === "수취대기") return '<span class="invoice-status requested">수취대기</span>';
    return '<span class="invoice-status none">해당없음</span>';
  }

  function openModal() {
    form.reset();
    const today = new Date().toISOString().slice(0, 10);
    if (form.elements.date) form.elements.date.value = today;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    form.querySelector("input, select, textarea, button")?.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  openButton.addEventListener("click", openModal);
  closeButtons.forEach((button) => button.addEventListener("click", closeModal));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const date = form.elements.date?.value || new Date().toISOString().slice(0, 10);
    const vendor = form.elements.vendor?.value.trim() || "거래처";
    const category = form.elements.category?.value || "기타";
    const method = form.elements.method?.value || "카드결제";
    const memo = form.elements.memo?.value.trim() || "매입";
    const supply = parseAmount(form.elements.supply?.value);
    const vat = parseAmount(form.elements.vat?.value);
    const total = supply + vat;
    const invoice = form.elements.invoice?.value || "해당없음";
    const compactDate = date.replaceAll("-", "");
    const row = document.createElement("tr");
    row.dataset.adminRow = "";
    row.dataset.type = "purchase";
    row.dataset.status = "paid";
    row.dataset.channel = "purchase";
    row.dataset.invoice = invoice === "수취완료" ? "issued" : invoice === "수취대기" ? "requested" : "none";
    row.dataset.date = date;
    row.dataset.search = `${vendor} ${category} ${memo} ${method} 매입`;
    row.innerHTML = `<td><span class="status-pill orange">매입</span></td><td>${date.replaceAll("-", ".")}</td><td>BUY-${compactDate}-NEW</td><td>${vendor}</td><td><strong>${memo}</strong><small>${category}</small></td><td>${method}</td><td>${formatWon(supply)}</td><td>${formatWon(vat)}</td><td>-</td><td><strong class="admin-negative">-${formatWon(total)}</strong></td><td>${invoiceCell(invoice)}</td>`;
    tableBody?.prepend(row);
    closeModal();
    showAdminToast("매입 내역이 등록되었습니다.");
    document.querySelector("[data-admin-search]")?.dispatchEvent(new Event("input", { bubbles: true }));
  });
}

initAdminPurchaseModal();

function initAdminDocumentActions() {
  const table = document.querySelector("[data-admin-documents-table]");
  if (!table) return;

  const detailModal = document.querySelector("[data-admin-document-modal]");
  const uploadModal = document.querySelector("[data-admin-document-upload-modal]");
  const uploadForm = document.querySelector("[data-admin-document-upload-form]");
  const uploadOpenButton = document.querySelector("[data-admin-document-upload-open]");
  const detailCloseButtons = Array.from(document.querySelectorAll("[data-admin-document-close]"));
  const uploadCloseButtons = Array.from(document.querySelectorAll("[data-admin-document-upload-close]"));
  const tableBody = table.querySelector("tbody");

  function cleanText(element) {
    return (element?.textContent || "").replace(/\s+/g, " ").trim();
  }

  function todayValue() {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }

  function displayDate(value) {
    return value ? value.replace(/-/g, ".") : "-";
  }

  function statusMarkup(status, type = "document") {
    const meta = {
      needed: ["확인 필요", "orange"],
      done: [type === "delivery" ? "제공 완료" : "확인 완료", "green"],
      expired: ["보관만료", "gray"]
    }[status] || ["확인 필요", "orange"];

    return `<span class="status-pill ${meta[1]}">${meta[0]}</span>`;
  }

  function actionMarkup(type, status) {
    if (type === "delivery" && status === "done") {
      return '<button class="admin-line-button" type="button">재전달</button>';
    }

    if (status === "needed") {
      return '<button class="admin-line-button primary" type="button">확인</button>';
    }

    return '<button class="admin-line-button" type="button">보기</button>';
  }

  function closeDetailModal() {
    if (!detailModal) return;
    detailModal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  function closeUploadModal() {
    if (!uploadModal) return;
    uploadModal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  function setDetailText(name, value) {
    const target = detailModal?.querySelector(`[data-admin-document-${name}]`);
    if (target) target.textContent = value || "-";
  }

  function openDetailModal(row) {
    if (!detailModal || !row) return;
    const cells = Array.from(row.children);
    const customer = cleanText(cells[0]);
    const type = cleanText(cells[1]);
    const fileName = cleanText(cells[2]);
    const link = cleanText(cells[3]);
    const status = cleanText(cells[4]);
    const storage = cleanText(cells[5]);
    const previewType = detailModal.querySelector("[data-admin-document-preview-type]");
    const previewNote = detailModal.querySelector("[data-admin-document-preview-note]");

    setDetailText("title", fileName);
    setDetailText("customer", customer);
    setDetailText("type", type);
    setDetailText("link", link);
    setDetailText("status", status);
    setDetailText("storage", storage);
    setDetailText("date", displayDate(row.dataset.date));
    if (previewType) previewType.textContent = type === "제작파일" ? "DELIVERY" : "DOCUMENT";
    if (previewNote) {
      previewNote.textContent = row.dataset.status === "expired"
        ? "보관기간이 만료된 파일입니다. 관리자는 원본을 확인할 수 있지만 고객 다운로드 권한은 차단됩니다."
        : "실제 서비스에서는 업로드된 이미지/PDF/압축파일 미리보기가 표시됩니다.";
    }

    detailModal.hidden = false;
    document.body.classList.add("modal-open");
  }

  function refreshScope(row) {
    const scope = row?.closest("[data-admin-filter-scope]");
    const searchInput = scope?.querySelector("[data-admin-search]");
    if (searchInput) searchInput.dispatchEvent(new Event("input", { bubbles: true }));
  }

  function handleConfirm(row) {
    const cells = Array.from(row.children);
    row.dataset.status = "done";
    if (cells[4]) cells[4].innerHTML = '<span class="status-pill green">확인 완료</span>';
    if (cells[6]) cells[6].innerHTML = '<button class="admin-line-button" type="button">보기</button>';
    refreshScope(row);
    showAdminToast(`${cleanText(cells[2])} 확인 완료로 변경되었습니다.`);
  }

  function handleResend(row) {
    const cells = Array.from(row.children);
    showAdminToast(`${cleanText(cells[2])} 재전달 처리되었습니다. 고객 파일함에 다시 표시됩니다.`);
  }

  function handleTableClick(event) {
    const button = event.target.closest("button");
    if (!button) return;
    const row = button.closest("[data-admin-row]");
    if (!row) return;
    const action = cleanText(button);

    if (action.includes("확인")) {
      handleConfirm(row);
      return;
    }

    if (action.includes("재전달")) {
      handleResend(row);
      return;
    }

    if (action.includes("보기")) openDetailModal(row);
  }

  function openUploadModal() {
    if (!uploadModal) return;
    uploadForm?.reset();
    const dateField = uploadForm?.elements?.fileName;
    if (dateField) dateField.focus();
    uploadModal.hidden = false;
    document.body.classList.add("modal-open");
    uploadModal.querySelector("input, select, textarea, button")?.focus();
  }

  function addUploadedRow(event) {
    event.preventDefault();
    if (!tableBody || !uploadForm) return;

    const type = uploadForm.elements.fileType?.value || "document";
    const status = uploadForm.elements.fileStatus?.value || "needed";
    const customerName = uploadForm.elements.customerName?.value.trim() || "신규 고객";
    const customerMeta = uploadForm.elements.customerMeta?.value.trim();
    const fileName = uploadForm.elements.fileName?.value.trim() || "업로드 파일";
    const fileLink = uploadForm.elements.fileLink?.value.trim() || (type === "document" ? "내부 보관" : "업무 연결");
    const storage = uploadForm.elements.fileStorage?.value.trim() || (type === "delivery" ? "6개월 보관" : "계속 보관");
    const row = document.createElement("tr");
    const date = todayValue();

    row.dataset.adminRow = "";
    row.dataset.type = type;
    row.dataset.status = status;
    row.dataset.date = date;
    row.dataset.search = `${customerName} ${customerMeta || ""} ${fileName} ${fileLink}`;
    row.innerHTML = `<td><strong>${customerName}</strong>${customerMeta ? `<small>${customerMeta}</small>` : ""}</td><td>${type === "delivery" ? "제작파일" : "고객서류"}</td><td>${fileName}</td><td>${fileLink}</td><td>${statusMarkup(status, type)}</td><td>${storage}</td><td>${actionMarkup(type, status)}</td>`;
    tableBody.prepend(row);
    refreshScope(row);
    closeUploadModal();
    showAdminToast(`${fileName} 파일이 등록되었습니다.`);
  }

  table.addEventListener("click", handleTableClick);
  uploadOpenButton?.addEventListener("click", openUploadModal);
  uploadForm?.addEventListener("submit", addUploadedRow);
  detailCloseButtons.forEach((button) => button.addEventListener("click", closeDetailModal));
  uploadCloseButtons.forEach((button) => button.addEventListener("click", closeUploadModal));
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (detailModal && !detailModal.hidden) closeDetailModal();
    if (uploadModal && !uploadModal.hidden) closeUploadModal();
  });
}

initAdminDocumentActions();

function initAdminWebsiteActions() {
  const table = document.querySelector("[data-admin-websites-table]");
  const modal = document.querySelector("[data-admin-website-modal]");
  const form = document.querySelector("[data-admin-website-form]");
  if (!table || !modal || !form) return;

  const openButtons = Array.from(document.querySelectorAll("[data-admin-website-modal-open]"));
  const closeButtons = Array.from(document.querySelectorAll("[data-admin-website-modal-close]"));
  const tableBody = table.querySelector("tbody");
  const domainTable = document.querySelector("[data-admin-domain-table]");
  const logTableBody = document.querySelector("[data-admin-website-log]");
  const title = modal.querySelector("#adminWebsiteModalTitle");
  const submitButton = form.querySelector('button[type="submit"]');
  const detailSummary = modal.querySelector("[data-admin-website-detail-summary]");
  const createFlow = modal.querySelector(".admin-website-create-flow");
  let activeRow = null;
  let lastWebsiteSnapshot = null;
  const websiteTemplates = {
    "studio-basic": {
      name: "스튜디오 베이직",
      type: "일반 홈페이지",
      plan: "Basic · 10GB",
      description: "회사소개, 서비스, 포트폴리오, 고객지원으로 구성된 기본형 홈페이지 템플릿입니다."
    },
    "brand-modern": {
      name: "브랜드 모던",
      type: "포트폴리오형",
      plan: "Basic · 10GB",
      description: "브랜드 소개와 이미지 중심 구성이 필요한 고객에게 맞는 템플릿입니다."
    },
    "commerce-light": {
      name: "커머스 라이트",
      type: "쇼핑몰 베타",
      plan: "Standard · 30GB",
      description: "추후 쇼핑몰 기능 확장을 고려한 상품 소개형 템플릿입니다."
    },
    "landing-focus": {
      name: "랜딩 집중형",
      type: "랜딩 + 게시판",
      plan: "Basic · 10GB",
      description: "이벤트, 광고 유입, 단일 문의 전환에 집중하는 랜딩형 템플릿입니다."
    },
    "portfolio-grid": {
      name: "포트폴리오 그리드",
      type: "포트폴리오형",
      plan: "Standard · 30GB",
      description: "작업물과 사례를 촘촘하게 보여주는 갤러리 중심 템플릿입니다."
    },
    "local-service": {
      name: "로컬 서비스형",
      type: "일반 홈페이지",
      plan: "Basic · 10GB",
      description: "지역 기반 서비스, 상담, 방문 안내가 필요한 고객에게 맞는 템플릿입니다."
    }
  };

  function cleanText(element) {
    return (element?.textContent || "").replace(/\s+/g, " ").trim();
  }

  function parseMoney(value) {
    return Number(String(value || "").replace(/[^\d]/g, "")) || 0;
  }

  function formatMoney(value) {
    return `${Number(value || 0).toLocaleString("ko-KR")}원`;
  }

  function makeSafeSlug(value) {
    const slug = String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return slug || "customer-site";
  }

  function makeTempPassword() {
    const token = Math.random().toString(36).slice(2, 8);
    return `Doil@${token}24`;
  }

  function updateTemplatePreview() {
    const select = form.elements.templateId;
    const preview = modal.querySelector("[data-website-template-preview]");
    const template = websiteTemplates[select?.value] || websiteTemplates["studio-basic"];
    if (preview) {
      preview.innerHTML = `<strong>${template.name}</strong><p>${template.description}</p>`;
    }
    if (!activeRow && form.elements.siteType) form.elements.siteType.value = template.type;
    if (!activeRow && form.elements.plan) form.elements.plan.value = template.plan;
  }

  function updateGeneratedWebsiteFields(force = false) {
    const accountInput = form.elements.customerAccountId;
    const passwordInput = form.elements.customerTempPassword;
    const cloneTargetInput = form.elements.cloneTarget;
    const domainInput = form.elements.domain;
    const adminInput = form.elements.adminId;
    const source = accountInput?.value || form.elements.customerName?.value || "customer-site";
    const slug = makeSafeSlug(source);
    if (passwordInput && (force || !passwordInput.value)) passwordInput.value = makeTempPassword();
    if (cloneTargetInput && (force || !cloneTargetInput.value)) cloneTargetInput.value = `/sites/${slug}`;
    if (domainInput && (force || !domainInput.value)) domainInput.value = `${slug}.doilsrv.com`;
    if (adminInput && (force || !adminInput.value)) adminInput.value = `admin_${slug.replace(/-/g, "_")}`;
  }

  function statusMarkup(status) {
    const meta = {
      active: ["운영중", "green"],
      paused: ["일시정지", "gray"],
      expiring: ["만료예정", "orange"],
      expired: ["만료", "red"]
    }[status] || ["운영중", "green"];
    const suffix = status === "expiring" ? "<small>확인 필요</small>" : "";
    return `<span class="status-pill ${meta[1]}">${meta[0]}</span>${suffix}`;
  }

  function buildStatusMarkup(status) {
    const meta = {
      building: ["제작중", "blue"],
      review: ["검수중", "orange"],
      published: ["운영중", "green"]
    }[status] || ["제작중", "blue"];
    return `<span class="status-pill ${meta[1]}">${meta[0]}</span>`;
  }

  function accessMarkup(status, adminId) {
    const meta = status === "paused" || status === "expired" ? ["제한", "gray"] : ["접근 가능", "green"];
    return `<span class="status-pill ${meta[1]}">${meta[0]}</span><small>${adminId || "관리자 계정 미등록"}</small>`;
  }

  function shopMarkup(status) {
    const meta = {
      none: ["미사용", "gray"],
      ready: ["확장예정", "orange"],
      enabled: ["사용중", "green"]
    }[status] || ["미사용", "gray"];
    return `<span class="status-pill ${meta[1]}">${meta[0]}</span>`;
  }

  function healthMarkup(status, memo) {
    const meta = {
      good: ["정상", "green"],
      warn: ["주의", "orange"],
      bad: ["위험", "red"]
    }[status] || ["주의", "orange"];
    return `<span class="status-pill ${meta[1]}">${meta[0]}</span><small>${memo || "점검 필요"}</small>`;
  }

  function trafficMarkup(usage, remain) {
    const value = Math.max(0, Math.min(100, Number(usage) || 0));
    const className = value >= 90 ? " is-danger" : value >= 80 ? " is-warning" : "";
    return `<div class="admin-traffic-meter${className}"><span style="--traffic:${value}%"></span></div><small>${remain || `사용 ${value}%`}</small>`;
  }

  function analyticsMarkup(status, visits) {
    const meta = {
      ok: ["GA 정상", "green"],
      missing: ["GA 미설치", "orange"],
      spike: ["이상징후", "red"]
    }[status] || ["GA 미설치", "orange"];
    const visitValue = Number(visits) || 0;
    const visitText = visitValue > 0 ? `${visitValue.toLocaleString("ko-KR")}명` : "-";
    const label = status === "spike" ? "방문 급증" : meta[0];
    return `<strong>${visitText}</strong><small>${label}</small>`;
  }

  function billingMarkup(status, nextDate) {
    const meta = {
      paid: ["정상", "green", "다음"],
      due: ["결제예정", "orange", "예정"],
      failed: ["결제실패", "red", "재시도 필요"]
    }[status] || ["결제예정", "orange", "예정"];
    const dateText = status === "failed" ? meta[2] : `${meta[2]} ${displayDate(nextDate)}`;
    return `<span class="status-pill ${meta[1]}">${meta[0]}</span><small>${dateText}</small>`;
  }

  function displayDate(value) {
    return value ? value.replace(/-/g, ".") : "-";
  }

  function dateValueFromText(value) {
    const match = String(value || "").match(/\d{4}[.-]\d{2}[.-]\d{2}/);
    return match ? match[0].replace(/\./g, "-") : "2026-08-10";
  }

  function nowText() {
    const date = new Date();
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
  }

  function addLog(site, action, result = "완료", color = "green") {
    const entry = {
      time: nowText(),
      manager: "도일 관리자",
      site,
      action,
      result,
      color,
      actionType: adminWebsiteActionType(action),
      risk: adminWebsiteRisk(action),
      detail: `${site} 홈페이지 작업: ${action}`
    };
    saveAdminWebsiteLog(entry);
    if (!logTableBody) return;
    const row = document.createElement("tr");
    row.innerHTML = `<td>${entry.time}</td><td>${entry.manager}</td><td>${site}</td><td>${action}</td><td><span class="status-pill ${color}">${result}</span></td>`;
    logTableBody.prepend(row);
  }

  function setDetailText(selector, value) {
    const target = modal.querySelector(selector);
    if (target) target.textContent = value || "-";
  }

  function extractStatusLabel(htmlText) {
    return String(htmlText || "").replace(/\s+/g, " ").trim() || "-";
  }

  function updateDetailSummary(row) {
    if (!detailSummary) return;
    if (!row) {
      detailSummary.hidden = true;
      return;
    }

    const cells = Array.from(row.children);
    const domain = cells[0]?.querySelector("strong")?.textContent || "-";
    const template = row.dataset.template ? (websiteTemplates[row.dataset.template]?.name || row.dataset.template) : (cells[0]?.querySelector("small")?.textContent || "-").split("·")[0].trim();
    const customerName = cells[1]?.querySelector("strong")?.textContent || "-";
    const customerMeta = row.dataset.customerMeta || "";
    const account = row.dataset.customerAccount || "-";
    const billing = extractStatusLabel(cells[4]?.textContent);
    const build = extractStatusLabel(cells[5]?.textContent);
    const traffic = `${row.dataset.traffic || "0"}% · ${row.dataset.trafficRemain || "잔량 미확인"}`;
    const analyticsText = extractStatusLabel(cells[7]?.textContent);
    const adminId = cells[8]?.querySelector("small")?.textContent || row.querySelector("[data-admin-id]")?.textContent || "-";
    const statusPill = detailSummary.querySelector("[data-website-detail-status]");
    const status = row.dataset.status || "active";
    const statusMeta = {
      active: ["운영중", "green"],
      paused: ["일시정지", "gray"],
      expiring: ["만료예정", "orange"],
      expired: ["만료", "red"]
    }[status] || ["운영중", "green"];

    if (statusPill) {
      statusPill.textContent = statusMeta[0];
      statusPill.className = `status-pill ${statusMeta[1]}`;
    }
    setDetailText("[data-website-detail-domain]", domain);
    setDetailText("[data-website-detail-customer]", `${customerName}${customerMeta ? ` · ${customerMeta}` : ""}`);
    setDetailText("[data-website-detail-template]", template);
    setDetailText("[data-website-detail-account]", account);
    setDetailText("[data-website-detail-billing]", billing);
    setDetailText("[data-website-detail-build]", build);
    setDetailText("[data-website-detail-analytics]", analyticsText);
    setDetailText("[data-website-detail-traffic]", traffic);
    setDetailText("[data-website-detail-admin]", adminId);
    setDetailText("[data-website-detail-log]", `${nowText()} 기준 운영 정보 확인. 수정 저장 시 로그가 추가됩니다.`);
    detailSummary.hidden = false;
  }

  function addDefaultDomainRow({ domain, customerName, customerMeta, siteType }) {
    const domainBody = domainTable?.querySelector("tbody");
    if (!domainBody || !domain) return;
    const existing = Array.from(domainBody.querySelectorAll("tr")).find((row) => {
      return row.querySelector("td strong")?.textContent === domain;
    });
    if (existing) return;

    const row = document.createElement("tr");
    row.dataset.adminRow = "";
    row.dataset.domain = "active";
    row.dataset.dns = "cloudflare";
    row.dataset.api = "ready";
    row.dataset.linkType = "default";
    row.dataset.search = `${domain} ${customerName} ${customerMeta || ""} 도일서비스 cloudflare ns.cloudflare.com 기본주소 ${siteType || ""}`;
    row.innerHTML = `<td><strong>${domain}</strong><small>기본 제공 주소</small></td><td><span class="status-pill green">기본주소</span></td><td><strong>${customerName}</strong>${customerMeta ? `<small>${customerMeta}</small>` : ""}</td><td>도일서비스</td><td><span class="status-pill green">Cloudflare</span></td><td><strong>자동관리</strong><small>도일서비스 기본주소</small></td><td><span class="status-pill green">정상</span><small>자동갱신</small></td><td><small>ns.cloudflare.com</small></td><td><span class="status-pill green">API 가능</span></td><td><div class="admin-row-actions"><button class="admin-line-button" type="button" data-domain-action="dns">DNS</button><button class="admin-line-button" type="button" data-domain-action="check">점검</button></div></td>`;
    domainBody.prepend(row);
    refreshScope(row);
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    activeRow = null;
  }

  function fillFormFromRow(row) {
    const cells = Array.from(row.children);
    const domain = cells[0]?.querySelector("strong")?.textContent || "";
    const siteType = row.dataset.siteType || cells[0]?.querySelector("small")?.textContent || "일반 홈페이지";
    const customerName = cells[1]?.querySelector("strong")?.textContent || "";
    const customerMeta = row.dataset.customerMeta || cells[1]?.querySelector("small")?.textContent || "";
    const buildPrice = parseMoney(cleanText(cells[2]));
    const monthlyFee = parseMoney(cleanText(cells[3])) || 4990;
    const billingText = cleanText(cells[4]);
    const plan = cells[6]?.querySelector("strong")?.textContent || cleanText(cells[6]) || "Basic · 10GB";
    const adminId = cells[8]?.querySelector("small")?.textContent || "";
    const healthText = cleanText(cells[11]);

    form.elements.customerName.value = customerName;
    form.elements.customerMeta.value = customerMeta;
    if (form.elements.customerAccountId) form.elements.customerAccountId.value = row.dataset.customerAccount || "";
    if (form.elements.customerTempPassword) form.elements.customerTempPassword.value = row.dataset.customerPassword || "";
    if (form.elements.templateId) form.elements.templateId.value = row.dataset.template || "studio-basic";
    if (form.elements.cloneTarget) form.elements.cloneTarget.value = row.dataset.cloneTarget || "";
    form.elements.domain.value = domain;
    if (form.elements.registrar) form.elements.registrar.value = domain.includes(".doilsrv.") ? "도일서비스" : "가비아";
    if (form.elements.dnsProvider) form.elements.dnsProvider.value = domain.includes("doilsrv") ? "Cloudflare" : "가비아 DNS";
    if (form.elements.domainExpiresAt) form.elements.domainExpiresAt.value = "2027-07-10";
    if (form.elements.sslExpiresAt) form.elements.sslExpiresAt.value = "2026-10-10";
    if (form.elements.domainApiStatus) form.elements.domainApiStatus.value = domain.includes("doilsrv") ? "ready" : "needed";
    if (form.elements.nameservers) form.elements.nameservers.value = domain.includes("doilsrv") ? "ns.cloudflare.com" : "ns.gabia.co.kr";
    form.elements.siteType.value = siteType;
    form.elements.buildPrice.value = buildPrice.toLocaleString("ko-KR");
    form.elements.monthlyFee.value = monthlyFee.toLocaleString("ko-KR");
    form.elements.paymentStatus.value = row.dataset.billing || "paid";
    form.elements.nextBillingDate.value = dateValueFromText(billingText);
    if (form.elements.buildStatus) form.elements.buildStatus.value = row.dataset.buildStatus || "building";
    form.elements.plan.value = plan;
    form.elements.siteStatus.value = row.dataset.status || "active";
    form.elements.shopStatus.value = row.dataset.shop || "none";
    form.elements.adminId.value = adminId;
    form.elements.healthStatus.value = row.dataset.health || "good";
    form.elements.healthMemo.value = healthText.replace(/^(정상|주의|위험)/, "").trim();
    form.elements.trafficUsage.value = row.dataset.traffic || "42";
    form.elements.trafficRemain.value = row.dataset.trafficRemain || "잔여 5.8GB";
    if (form.elements.analyticsId) form.elements.analyticsId.value = row.dataset.analyticsId || "";
    if (form.elements.analyticsStatus) form.elements.analyticsStatus.value = row.dataset.analytics || "ok";
    if (form.elements.dailyVisits) form.elements.dailyVisits.value = row.dataset.visits || "0";
    form.elements.memo.value = "";
    updateTemplatePreview();
  }

  function openModal(mode, row = null) {
    activeRow = mode === "edit" ? row : null;
    form.reset();
    form.elements.monthlyFee.value = "4,990";
    form.elements.buildPrice.value = "550,000";
    form.elements.paymentStatus.value = "paid";
    form.elements.nextBillingDate.value = "2026-08-10";
    if (form.elements.buildStatus) form.elements.buildStatus.value = "building";
    if (form.elements.registrar) form.elements.registrar.value = "도일서비스";
    if (form.elements.dnsProvider) form.elements.dnsProvider.value = "Cloudflare";
    if (form.elements.domainExpiresAt) form.elements.domainExpiresAt.value = "2027-07-10";
    if (form.elements.sslExpiresAt) form.elements.sslExpiresAt.value = "2026-10-10";
    if (form.elements.domainApiStatus) form.elements.domainApiStatus.value = "ready";
    if (form.elements.nameservers) form.elements.nameservers.value = "ns.cloudflare.com";
    form.elements.siteStatus.value = "active";
    form.elements.shopStatus.value = "none";
    form.elements.healthStatus.value = "good";
    form.elements.healthMemo.value = "초기 점검 필요";
    form.elements.trafficUsage.value = "42";
    form.elements.trafficRemain.value = "잔여 5.8GB";
    if (form.elements.analyticsId) form.elements.analyticsId.value = "";
    if (form.elements.analyticsStatus) form.elements.analyticsStatus.value = "missing";
    if (form.elements.dailyVisits) form.elements.dailyVisits.value = "0";
    if (form.elements.templateId) form.elements.templateId.value = "studio-basic";
    if (form.elements.customerTempPassword) form.elements.customerTempPassword.value = "";
    if (form.elements.cloneTarget) form.elements.cloneTarget.value = "";
    updateTemplatePreview();
    updateGeneratedWebsiteFields(mode !== "edit");
    if (title) title.textContent = mode === "edit" ? "홈페이지 관리" : "고객 홈페이지 생성";
    if (submitButton) submitButton.textContent = mode === "edit" ? "저장" : "고객 홈페이지 생성";
    if (createFlow) createFlow.hidden = mode === "edit";
    updateDetailSummary(row);
    if (row) fillFormFromRow(row);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector("input, select, textarea, button")?.focus();
  }

  function refreshScope(row) {
    const scope = row?.closest("[data-admin-filter-scope]");
    const searchInput = scope?.querySelector("[data-admin-search]");
    if (searchInput) searchInput.dispatchEvent(new Event("input", { bubbles: true }));
  }

  function refreshAllScopes() {
    document.querySelectorAll("[data-admin-search]").forEach((input) => {
      input.dispatchEvent(new Event("input", { bubbles: true }));
    });
  }

  function captureRowSnapshot(row, domain) {
    if (!row) return null;
    return {
      type: "edit",
      row,
      domain,
      html: row.innerHTML,
      dataset: { ...row.dataset }
    };
  }

  function restoreWebsiteSnapshot() {
    if (!lastWebsiteSnapshot) {
      showAdminToast("되돌릴 최근 변경 내역이 없습니다.");
      return;
    }

    const snapshot = lastWebsiteSnapshot;
    if (snapshot.type === "created") {
      snapshot.row?.remove();
      if (snapshot.domain && domainTable) {
        Array.from(domainTable.querySelectorAll("tbody tr")).forEach((row) => {
          if (row.querySelector("td strong")?.textContent === snapshot.domain) row.remove();
        });
      }
      addLog(snapshot.domain || "홈페이지", "신규 생성 되돌리기", "완료", "orange");
      lastWebsiteSnapshot = null;
      refreshAllScopes();
      showAdminToast("최근 생성한 홈페이지 등록을 되돌렸습니다.");
      return;
    }

    if (snapshot.row) {
      snapshot.row.innerHTML = snapshot.html;
      Object.keys(snapshot.row.dataset).forEach((key) => delete snapshot.row.dataset[key]);
      Object.entries(snapshot.dataset || {}).forEach(([key, value]) => {
        snapshot.row.dataset[key] = value;
      });
      refreshScope(snapshot.row);
      addLog(snapshot.domain || "홈페이지", "최근 변경 되돌리기", "완료", "orange");
      lastWebsiteSnapshot = null;
      showAdminToast("최근 홈페이지 변경 내용을 되돌렸습니다.");
    }
  }

  function saveWebsite(event) {
    event.preventDefault();
    const customerName = form.elements.customerName.value.trim() || "신규 고객";
    const customerMeta = form.elements.customerMeta.value.trim();
    const customerAccountId = form.elements.customerAccountId?.value.trim() || makeSafeSlug(customerName);
    const customerPassword = form.elements.customerTempPassword?.value.trim() || makeTempPassword();
    const templateId = form.elements.templateId?.value || "studio-basic";
    const template = websiteTemplates[templateId] || websiteTemplates["studio-basic"];
    const cloneTarget = form.elements.cloneTarget?.value.trim() || `/sites/${makeSafeSlug(customerAccountId)}`;
    const domain = form.elements.domain.value.trim() || "new-site.doilsrv.com";
    const registrar = form.elements.registrar?.value || "도일서비스";
    const dnsProvider = form.elements.dnsProvider?.value || "Cloudflare";
    const domainApiStatus = form.elements.domainApiStatus?.value || "ready";
    const nameservers = form.elements.nameservers?.value || "ns.cloudflare.com";
    const siteType = form.elements.siteType.value || "일반 홈페이지";
    const buildPrice = parseMoney(form.elements.buildPrice.value) || 550000;
    const monthlyFee = parseMoney(form.elements.monthlyFee.value) || 4990;
    const paymentStatus = form.elements.paymentStatus.value || "paid";
    const nextBillingDate = form.elements.nextBillingDate.value || "2026-08-10";
    const buildStatus = form.elements.buildStatus?.value || "building";
    const plan = form.elements.plan.value || "Basic · 10GB";
    const siteStatus = form.elements.siteStatus.value || "active";
    const shopStatus = form.elements.shopStatus.value || "none";
    const adminId = form.elements.adminId.value.trim() || `admin_${customerName.toLowerCase().replace(/\s+/g, "")}`;
    const healthStatus = form.elements.healthStatus.value || "good";
    const healthMemo = form.elements.healthMemo.value.trim() || (healthStatus === "good" ? "정상" : "점검 필요");
    const trafficUsage = form.elements.trafficUsage.value || "0";
    const trafficRemain = form.elements.trafficRemain.value.trim() || `사용 ${trafficUsage}%`;
    const analyticsId = form.elements.analyticsId?.value.trim() || "";
    const analyticsStatus = form.elements.analyticsStatus?.value || "missing";
    const dailyVisits = form.elements.dailyVisits?.value || "0";
    const wasEdit = Boolean(activeRow);
    const row = activeRow || document.createElement("tr");
    const previousBuildStatus = row.dataset.buildStatus || "";
    const previousSiteStatus = row.dataset.status || "";

    if (wasEdit && previousSiteStatus !== siteStatus && ["paused", "expired"].includes(siteStatus)) {
      const label = siteStatus === "paused" ? "일시정지" : "만료";
      if (!window.confirm(`운영상태를 '${label}'로 변경할까요? 고객 접속과 운영에 영향을 줄 수 있습니다.`)) {
        return;
      }
    }

    const previousSnapshot = wasEdit ? captureRowSnapshot(row, domain) : null;

    row.dataset.adminRow = "";
    row.dataset.status = siteStatus;
    row.dataset.billing = paymentStatus;
    row.dataset.buildStatus = buildStatus;
    row.dataset.siteType = siteType;
    row.dataset.shop = shopStatus;
    row.dataset.health = healthStatus;
    row.dataset.customerMeta = customerMeta;
    row.dataset.customerAccount = customerAccountId;
    row.dataset.customerPassword = customerPassword;
    row.dataset.template = templateId;
    row.dataset.cloneTarget = cloneTarget;
    row.dataset.analytics = analyticsStatus;
    row.dataset.analyticsId = analyticsId;
    row.dataset.traffic = trafficUsage;
    row.dataset.trafficRemain = trafficRemain;
    row.dataset.visits = dailyVisits;
    row.dataset.search = `${customerName} ${customerMeta} ${customerAccountId} ${domain} ${cloneTarget} ${template.name} ${adminId} ${registrar} ${dnsProvider} ${domainApiStatus} ${nameservers} ${analyticsId} ${analyticsStatus} ${dailyVisits} ${buildStatus}`;
    row.innerHTML = `<td><strong>${domain}</strong><small>${template.name} · ${cloneTarget}</small></td><td><strong>${customerName}</strong><small>${customerAccountId}${customerMeta ? ` · ${customerMeta}` : ""}</small></td><td>${formatMoney(buildPrice)}</td><td>${formatMoney(monthlyFee)}</td><td>${billingMarkup(paymentStatus, nextBillingDate)}</td><td>${buildStatusMarkup(buildStatus)}</td><td><strong>${plan}</strong>${trafficMarkup(trafficUsage, trafficRemain)}</td><td>${analyticsMarkup(analyticsStatus, dailyVisits)}</td><td>${accessMarkup(siteStatus, adminId)}</td><td>${statusMarkup(siteStatus)}</td><td>${shopMarkup(shopStatus)}</td><td>${healthMarkup(healthStatus, healthMemo)}</td><td><div class="admin-row-actions"><button class="admin-line-button${paymentStatus === "failed" ? " primary" : ""}" type="button" data-website-action="${paymentStatus === "failed" ? "retry" : "check"}">${paymentStatus === "failed" ? "재시도" : "점검"}</button><button class="admin-line-button" type="button" data-website-action="edit">관리</button></div></td>`;

    if (!activeRow) {
      tableBody?.prepend(row);
      addDefaultDomainRow({ domain, customerName, customerMeta, siteType });
      lastWebsiteSnapshot = { type: "created", row, domain };
    } else {
      lastWebsiteSnapshot = previousSnapshot;
    }
    refreshScope(row);
    const buildStatusChanged = wasEdit && previousBuildStatus && previousBuildStatus !== buildStatus;
    addLog(domain, wasEdit ? (buildStatusChanged ? `제작상태 변경: ${buildStatusMarkup(previousBuildStatus).replace(/<[^>]+>/g, "")} → ${buildStatusMarkup(buildStatus).replace(/<[^>]+>/g, "")}` : "홈페이지 정보 수정") : `${template.name} 템플릿 복제 생성`, "완료", "green");
    closeModal();
    showAdminToast(wasEdit ? `${domain} 홈페이지 정보가 저장되었습니다.` : `${customerAccountId} 계정에 고객 홈페이지가 생성되었습니다.`);
  }

  function updateRetry(row) {
    const cells = Array.from(row.children);
    const site = cells[0]?.querySelector("strong")?.textContent || "홈페이지";
    if (!window.confirm(`${site}의 결제상태를 정상으로 변경할까요? 입금 또는 결제 확인 후 처리해야 합니다.`)) return;
    lastWebsiteSnapshot = captureRowSnapshot(row, site);
    const adminId = cells[8]?.querySelector("small")?.textContent || "관리자 계정";
    row.dataset.billing = "paid";
    row.dataset.status = "active";
    row.dataset.health = "good";
    if (cells[4]) cells[4].innerHTML = billingMarkup("paid", "2026-08-10");
    if (cells[8]) cells[8].innerHTML = accessMarkup("active", adminId);
    if (cells[9]) cells[9].innerHTML = statusMarkup("active");
    if (cells[11]) cells[11].innerHTML = healthMarkup("good", "결제 재시도 완료");
    if (cells[12]) cells[12].innerHTML = '<div class="admin-row-actions"><button class="admin-line-button" type="button" data-website-action="check">점검</button><button class="admin-line-button" type="button" data-website-action="edit">관리</button></div>';
    refreshScope(row);
    addLog(site, "월요금 결제 재시도", "정상", "green");
    showAdminToast(`${site} 결제 재시도가 정상 처리되었습니다.`);
  }

  function updateCheck(row) {
    const cells = Array.from(row.children);
    const site = cells[0]?.querySelector("strong")?.textContent || "홈페이지";
    lastWebsiteSnapshot = captureRowSnapshot(row, site);
    row.dataset.health = "good";
    if (cells[11]) cells[11].innerHTML = healthMarkup("good", "수동 점검 완료");
    refreshScope(row);
    addLog(site, "운영 점검", "완료", "green");
    showAdminToast(`${site} 운영 점검 기록을 남겼습니다.`);
  }

  openButtons.forEach((button) => button.addEventListener("click", () => openModal("create")));
  form.elements.templateId?.addEventListener("change", () => {
    updateTemplatePreview();
    updateGeneratedWebsiteFields(false);
  });
  form.elements.customerAccountId?.addEventListener("input", () => updateGeneratedWebsiteFields(true));
  form.elements.customerName?.addEventListener("input", () => updateGeneratedWebsiteFields(false));
  table.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    const row = event.target.closest("[data-admin-row]");
    if (!row) return;
    if (!button) {
      openModal("edit", row);
      return;
    }
    const action = button.dataset.websiteAction || "";
    if (row && action === "retry") updateRetry(row);
    if (row && action === "check") updateCheck(row);
    if (row && (action === "edit" || cleanText(button).includes("관리"))) openModal("edit", row);
  });
  domainTable?.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const row = button.closest("[data-admin-row]");
    if (!row) return;
    const domain = row.querySelector("td strong")?.textContent || "도메인";
    const action = button.dataset.domainAction || "";
    const messages = {
      dns: `${domain} DNS 레코드 관리 화면으로 연결될 예정입니다.`,
      check: `${domain} 도메인/SSL 점검 기록을 남겼습니다.`,
      renew: `${domain} 도메인 연장 확인 업무를 등록했습니다.`,
      guide: `${domain} 네임서버 연결 안내를 고객에게 발송할 수 있습니다.`,
      restore: `${domain} 복구 처리 업무를 등록했습니다.`
    };
    addLog(domain, action === "check" ? "도메인/SSL 점검" : "도메인 처리", action === "check" ? "완료" : "확인", action === "restore" ? "orange" : "green");
    showAdminToast(messages[action] || `${domain} 도메인 작업을 확인했습니다.`);
  });
  document.querySelectorAll("[data-admin-soft-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.adminSoftAction || "";
      if (action === "template-add") {
        showAdminToast("템플릿 추가는 실제 구축 시 원본 템플릿 업로드, 미리보기, 버전 관리와 함께 연결됩니다.");
      }
      if (action === "website-open") {
        showAdminToast("실제 구축 시 고객 홈페이지 새 창 열기 또는 관리자 미리보기로 연결됩니다.");
      }
      if (action === "website-customer") {
        showAdminToast("고객 상세 모달 또는 고객 관리 페이지의 해당 고객으로 연결됩니다.");
      }
      if (action === "website-log") {
        const domain = modal.querySelector("[data-website-detail-domain]")?.textContent?.trim();
        const query = domain && domain !== "-" ? `&q=${encodeURIComponent(domain)}` : "";
        window.location.href = `admin-logs.html?filter=area:website${query}`;
      }
      if (action === "website-undo") {
        restoreWebsiteSnapshot();
      }
    });
  });
  closeButtons.forEach((button) => button.addEventListener("click", closeModal));
  form.addEventListener("submit", saveWebsite);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
}

initAdminWebsiteActions();

function initAdminProjectOrderModal() {
  const modal = document.querySelector("[data-project-order-modal]");
  if (!modal) return;

  const openButton = document.querySelector("[data-project-order-open]");
  const closeButtons = Array.from(document.querySelectorAll("[data-project-order-close]"));
  const form = modal.querySelector("form");
  const tableBody = document.querySelector(".admin-project-table tbody");

  const kmongFeeTiers = [
    { min: 1, max: 700000, rate: 0.164 },
    { min: 700001, max: 2000000, rate: 0.094 },
    { min: 2000001, max: Infinity, rate: 0.044 }
  ];
  const projectStatusFlow = ["received", "registered", "working", "completed", "delivered"];

  function parseMoney(value) {
    return Number(String(value || "").replace(/[^\d]/g, "")) || 0;
  }

  function formatMoney(value) {
    return `${Math.max(0, Math.round(value)).toLocaleString("ko-KR")}원`;
  }

  function todayValue() {
    const today = new Date();
    const offset = today.getTimezoneOffset() * 60000;
    return new Date(today.getTime() - offset).toISOString().slice(0, 10);
  }

  function compactDate(value) {
    return String(value || "").replace(/[^\d]/g, "");
  }

  function displayDate(value) {
    return value ? value.replace(/-/g, ".") : "-";
  }

  function channelLabel(value) {
    return {
      site: "자사몰",
      phone: "유선/채팅",
      kmong: "크몽",
      external: "기타 거래처"
    }[value] || "자사";
  }

  function workKindCode(value) {
    return {
      디자인: "D",
      홈페이지: "H",
      마케팅: "M"
    }[value] || "W";
  }

  function normalizeProjectStatus(status) {
    return {
      today: "working",
      delayed: "working",
      waiting: "registered",
      review: "completed",
      done: "delivered"
    }[status] || status || "received";
  }

  function projectStatusMeta(status) {
    return {
      received: ["주문접수", "gray"],
      registered: ["업무등록", "blue"],
      working: ["작업중", "orange"],
      completed: ["작업완료", "green"],
      delivered: ["전달완료", "green"],
      cancel: ["취소", "red"]
    }[normalizeProjectStatus(status)] || ["주문접수", "gray"];
  }

  function rowStateForStatus(status) {
    const normalized = normalizeProjectStatus(status);
    if (normalized === "cancel") return "cancel";
    if (normalized === "completed" || normalized === "delivered") return "done";
    return "progress";
  }

  function statusMarkup(status) {
    const normalized = normalizeProjectStatus(status);
    const options = [
      ["received", "주문접수"],
      ["registered", "업무등록"],
      ["working", "작업중"],
      ["completed", "작업완료"],
      ["delivered", "전달완료"],
      ["cancel", "취소"]
    ];
    const meta = projectStatusMeta(normalized);
    return `<select class="admin-status-select ${meta[1]}" data-project-status-select aria-label="업무 상태">${options
      .map(([value, label]) => `<option value="${value}"${value === normalized ? " selected" : ""}>${label}</option>`)
      .join("")}</select>`;
  }

  function transactionNo(date, channel, kind) {
    const channelText = channelLabel(channel).replace(/[^\w가-힣]/g, "");
    const kindCode = workKindCode(kind);
    const sequence = String(tableBody ? tableBody.children.length + 1 : 1).padStart(3, "0");
    return `${compactDate(date)}-${channelText}-${kindCode}${sequence}`;
  }

  function calculateFee(channel, amount) {
    if (channel !== "kmong") return { fee: 0, rate: 0 };
    const tier = kmongFeeTiers.find((item) => amount >= item.min && amount <= item.max) || kmongFeeTiers[0];
    return { fee: amount * tier.rate, rate: tier.rate };
  }

  function updateSearch(row) {
    row.dataset.search = Array.from(row.children)
      .map((cell) => {
        const statusSelect = cell.querySelector("[data-project-status-select]");
        if (statusSelect) return statusSelect.selectedOptions[0]?.textContent || "";
        return (cell.textContent || "").replace(/\s+/g, " ").trim();
      })
      .join(" ")
      .replace(/-/g, "");
  }

  function sortProjectRowsByDueDate() {
    if (!tableBody) return;
    Array.from(tableBody.querySelectorAll("[data-admin-row]"))
      .sort((a, b) => {
        const aDate = a.dataset.date || "9999-12-31";
        const bDate = b.dataset.date || "9999-12-31";
        if (aDate !== bDate) return aDate.localeCompare(bDate);
        return (a.textContent || "").localeCompare(b.textContent || "", "ko");
      })
      .forEach((row) => tableBody.appendChild(row));
  }

  function bindProjectRow(row) {
    if (row.dataset.projectStatusBound === "true") return;
    row.dataset.projectStatusBound = "true";
    applyProjectStatus(row, row.dataset.status, true);

    row.addEventListener("change", (event) => {
      const select = event.target.closest("[data-project-status-select]");
      if (!select) return;
      event.stopPropagation();
      applyProjectStatus(row, select.value);
    });

    row.addEventListener("click", (event) => {
      const button = event.target.closest("[data-project-action='done'], [data-project-action='next']");
      if (!button) return;
      event.preventDefault();
      event.stopPropagation();
      const current = normalizeProjectStatus(row.dataset.status);
      const currentIndex = projectStatusFlow.indexOf(current);
      const nextStatus = projectStatusFlow[currentIndex + 1];
      if (!nextStatus) return;
      applyProjectStatus(row, nextStatus);
    });
  }

  function updateProjectAction(row) {
    const button = row.querySelector("[data-project-action='done'], [data-project-action='next']");
    if (!button) return;
    const status = normalizeProjectStatus(row.dataset.status);
    const labels = {
      received: "다음",
      registered: "시작",
      working: "완료",
      completed: "전달",
      delivered: "완료됨",
      cancel: "취소됨"
    };
    button.dataset.projectAction = "next";
    button.textContent = labels[status] || "다음";
    button.disabled = status === "delivered" || status === "cancel";
    button.classList.toggle("primary", status === "working" || status === "completed");
  }

  function applyProjectStatus(row, status, silent = false) {
    const normalized = normalizeProjectStatus(status);
    const meta = projectStatusMeta(normalized);
    row.dataset.status = normalized;
    row.dataset.state = rowStateForStatus(normalized);
    if (row.children[0]) row.children[0].innerHTML = statusMarkup(normalized);
    updateProjectAction(row);
    updateSearch(row);
    if (!silent) {
      row.closest("[data-admin-filter-scope]")?.querySelector("[data-admin-search]")?.dispatchEvent(new Event("input", { bubbles: true }));
    }
    if (!silent) showAdminToast(`업무 상태를 ${meta[0]}로 변경했습니다.`);
  }

  function openModal() {
    form?.reset();
    const today = todayValue();
    if (form?.elements?.dueDate) form.elements.dueDate.value = today;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector("input, select, textarea, button")?.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  openButton?.addEventListener("click", openModal);
  closeButtons.forEach((button) => button.addEventListener("click", closeModal));
  Array.from(tableBody?.querySelectorAll("[data-admin-row]") || []).forEach(bindProjectRow);
  sortProjectRowsByDueDate();

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!tableBody) return;

    const customerName = form.elements.customerName?.value.trim() || "신규 고객";
    const projectName = form.elements.projectName?.value.trim() || "신규 업무";
    const projectKind = form.elements.projectKind?.value || "디자인";
    const workStatus = form.elements.workStatus?.value || "received";
    const dueDate = form.elements.dueDate?.value || todayValue();
    const managerName = form.elements.managerName?.value.trim() || "담당자";
    const paymentStatus = form.elements.paymentStatus?.value || "입금확인중";
    const invoiceStatus = form.elements.invoiceStatus?.value || "미발행";
    const memo = form.elements.orderMemo?.value.trim() || "-";
    const amount = parseMoney(form.elements.grossAmount?.value);
    const invoiceClass = invoiceStatus === "발행" ? "done" : invoiceStatus === "해당없음" ? "none" : "requested";
    const row = document.createElement("tr");

    row.dataset.adminRow = "";
    row.dataset.status = normalizeProjectStatus(workStatus);
    row.dataset.state = rowStateForStatus(workStatus);
    row.dataset.kind = projectKind === "홈페이지" ? "website" : projectKind === "마케팅" ? "marketing" : "design";
    row.dataset.channel = "site";
    row.dataset.date = dueDate;
    row.innerHTML = `<td>${statusMarkup(workStatus)}</td><td>${displayDate(dueDate)}</td><td><button class="admin-text-button" type="button" data-admin-customer-popover>${customerName}</button></td><td><strong>${projectName}</strong><small>${projectKind}</small></td><td><strong>${formatMoney(amount)}</strong><small>${paymentStatus}</small></td><td><span class="invoice-status ${invoiceClass}">${invoiceStatus}</span></td><td>${managerName}</td><td>${memo}</td><td><div class="admin-row-actions"><button class="admin-line-button" type="button" data-project-action="edit">관리</button><button class="admin-line-button" type="button" data-project-action="next">다음</button></div></td>`;
    updateSearch(row);
    tableBody.appendChild(row);
    bindProjectRow(row);
    sortProjectRowsByDueDate();
    showAdminToast(`${projectName} 업무를 등록했습니다.`);
    closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
}

initAdminProjectOrderModal();

function initAdminProjectWorkModal() {
  const modal = document.querySelector("[data-project-work-modal]");
  if (!modal) return;

  const title = modal.querySelector("#projectWorkModalTitle");
  const summaryTitle = modal.querySelector("[data-project-work-title]");
  const summaryMeta = modal.querySelector("[data-project-work-meta]");
  const hint = modal.querySelector("[data-project-work-hint]");
  const form = modal.querySelector("form");
  const statusField = form?.elements?.projectStatus;
  const dueField = form?.elements?.dueDate;
  const messageField = form?.elements?.customerMessage;
  const openButtons = Array.from(document.querySelectorAll("[data-project-work-open]"));
  const closeButtons = Array.from(document.querySelectorAll("[data-project-work-close]"));
  let activeRow = null;

  function cleanText(element) {
    return (element?.textContent || "").replace(/\s+/g, " ").trim();
  }

  function toDateTimeValue(dateText) {
    const normalized = (dateText || "").replace(/\./g, "-").replace(/[^\d-]/g, "");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(normalized)) return "";
    return `${normalized}T18:00`;
  }

  function openModal(button) {
    const row = button.closest("[data-admin-row]");
    if (!row) return;
    activeRow = row;

    const mode = button.dataset.projectWorkOpen || "upload";
    const cells = Array.from(row.children);
    const orderNo = cleanText(cells[0]);
    const channel = cleanText(cells[2]);
    const customer = cleanText(cells[3]);
    const projectName = cleanText(cells[4]);
    const dueDate = cleanText(cells[9]);

    if (title) title.textContent = mode === "work" ? "작업 등록" : "작업 파일 업로드";
    if (summaryTitle) summaryTitle.textContent = `${orderNo} · ${projectName}`;
    if (summaryMeta) summaryMeta.textContent = `${customer} · ${channel} · 완료예정 ${dueDate}`;

    if (statusField) statusField.value = "done";
    if (dueField) dueField.value = toDateTimeValue(dueDate);
    if (messageField) {
      messageField.value = mode === "work"
        ? "외부채널 작업을 등록했습니다. 작업 파일 확인 후 구매확정 또는 문제해결을 선택해 주세요."
        : "작업 파일을 업로드했습니다. 확인 후 구매확정 또는 문제해결을 선택해 주세요.";
    }
    if (hint) {
      hint.textContent = mode === "work"
        ? "크몽 등 외부채널 작업도 등록하면 매출과 수수료 정산 흐름에 함께 반영됩니다."
        : "파일 업로드 후 완료로 저장하면 고객 페이지에 구매확정 패널이 노출됩니다.";
      hint.classList.remove("is-saved");
    }

    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector("input, select, textarea, button")?.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  window.openProjectWorkModal = openModal;
  openButtons.forEach((button) => button.addEventListener("click", () => openModal(button)));
  closeButtons.forEach((button) => button.addEventListener("click", closeModal));
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedStatus = statusField?.value || "done";
    const statusMap = {
      progress: ["진행중", "blue", "파일 업로드"],
      done: ["완료", "green", "확정대기"],
      issue: ["문제해결", "orange", "확인"],
      closed: ["종결", "gray", "보기"],
      cancel: ["취소", "gray", "보기"]
    };
    const [statusText, statusColor, actionText] = statusMap[selectedStatus] || statusMap.done;

    if (activeRow) {
      const cells = Array.from(activeRow.children);
      activeRow.dataset.status = selectedStatus;
      if (cells[5]) cells[5].innerHTML = `<span class="status-pill ${statusColor}">${statusText}</span>`;
      const actionButton = cells[10]?.querySelector("button");
      if (actionButton) {
        actionButton.textContent = actionText;
        actionButton.classList.toggle("primary", selectedStatus === "progress");
      }
    }

    if (!hint) return;
    hint.textContent = `${statusText} 상태로 저장되었습니다. 실제 서비스에서는 이 시점에 고객 업무와 파일함에 동기화됩니다.`;
    hint.classList.add("is-saved");
  });
}

initAdminProjectWorkModal();

render("serviceGrid", services
  .map(([title, description]) => `<article class="service-card"><strong>${title}</strong><p>${description}</p></article>`)
  .join(""));

render("clientTasks", clientTasks
  .map(([title, status]) => `<li><span>${title}</span><small>${status}</small></li>`)
  .join(""));

render("clientDocs", clientDocs
  .map(([title, status]) => `<li><span>${title}</span>${badge(status)}</li>`)
  .join(""));

render("projectRows", projects
  .map(([customer, service, status, due]) => `<tr><td>${customer}</td><td>${service}</td><td>${badge(status)}</td><td>${due}</td></tr>`)
  .join(""));

render("documentRows", documents
  .map(([customer, doc, status]) => `<tr><td>${customer}</td><td>${doc}</td><td>${badge(status)}</td><td><button>미리보기</button></td></tr>`)
  .join(""));

render("followUps", followUps
  .map(([customer, title, status]) => `<li><span><strong>${customer}</strong><br><small>${title}</small></span>${badge(status)}</li>`)
  .join(""));

initScrollReveal();
initCountUpStats();
initFloatingMenu();


