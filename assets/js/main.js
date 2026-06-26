const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const tabButtons = document.querySelectorAll(".tab-button");
const railItems = document.querySelectorAll(".rail-item");

const serviceData = {
  takeoff: {
    panelTitle: "Quantity Take-off",
    panelText: "도면과 시방서를 기반으로 수량산출서, 산출근거, BOQ를 작성합니다.",
    number: "01",
    title: "Quantity take-off & BOQ",
    body:
      "평면, 입면, 단면도와 실시도면을 검토해 산출근거와 내역서를 작성합니다. CONCOST의 CAD 적산 기준을 바탕으로 개산견적부터 정미 수량산출까지 단계별로 대응합니다.",
    items: ["개산견적 및 발주용 수량 작성", "정미 수량산출과 산출근거 정리", "층별, 부재별, 공종별 집계표 제공"],
    image: "assets/images/project-towers.jpg",
    imageAlt: "High-rise project rendering",
  },
  cost: {
    panelTitle: "Cost Adequacy Review",
    panelText: "설계가, 도급가, 실행가 기준으로 공사비 적정성을 검토합니다.",
    number: "02",
    title: "Construction cost review",
    body:
      "CAD 적산 시스템으로 산출한 물량에 적정 단가를 적용해 원가계산서와 비교 내역을 제공합니다. 직접공사비, 경비, 간접공사비를 포함해 발주 전후의 비용 판단을 돕습니다.",
    items: ["공종별 수량 및 단가 검토", "조달 단가와 조사 단가 비교", "원가계산서 및 단가 대비표 작성"],
    image: "assets/images/about-quantity.jpg",
    imageAlt: "Quantity surveying company introduction visual",
  },
  change: {
    panelTitle: "Design Change",
    panelText: "당초 도면과 변경 도면의 수량 차이를 비교해 정산 근거를 만듭니다.",
    number: "03",
    title: "Drawing change settlement",
    body:
      "당초와 변경 도면을 기준으로 수량과 금액 차이를 비교합니다. CAD 도면 위에서 변경 위치와 산출 값을 확인해 공사비 정산과 클레임 대응 근거를 구조화합니다.",
    items: ["당초/변경 수량 비교", "변경 내역서 작성", "정산 및 분쟁 방지 자료 정리"],
    image: "assets/images/drawing-estimate.jpg",
    imageAlt: "Drawing review on desk",
  },
  global: {
    panelTitle: "Overseas / FED Estimate",
    panelText: "CSI CODE, FED 양식, WBS 내역서 기준의 해외 프로젝트 견적을 지원합니다.",
    number: "04",
    title: "Overseas and FED estimating",
    body:
      "CONCOST가 수행해 온 25개국 200개 이상 해외 프로젝트 경험을 바탕으로 CSI CODE 기반 BOQ, FED 직발주 내역서, WBS 패키지 내역서를 구성합니다.",
    items: ["CSI CODE 기반 BOQ", "FED/YRP 양식 내역 작성", "WBS 패키지별 산출근거"],
    image: "assets/images/global-estimate.jpg",
    imageAlt: "Global estimation concept",
  },
};

function setHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 12);
}

function setMenu(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  mobileMenu.classList.toggle("open", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  header.classList.toggle("menu-open", open);
}

function renderTab(key) {
  const data = serviceData[key];
  if (!data) return;

  document.querySelector("[data-tab-number]").textContent = data.number;
  document.querySelector("[data-tab-title]").textContent = data.title;
  document.querySelector("[data-tab-body]").textContent = data.body;

  const list = document.querySelector("[data-tab-list]");
  list.innerHTML = data.items.map((item) => `<li>${item}</li>`).join("");

  const image = document.querySelector("[data-tab-image]");
  image.src = data.image;
  image.alt = data.imageAlt;

  document.querySelector("[data-service-title]").textContent = data.panelTitle;
  document.querySelector("[data-service-text]").textContent = data.panelText;

  tabButtons.forEach((button) => {
    const active = button.dataset.tab === key;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });

  railItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.service === key);
  });
}

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

menuToggle.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => renderTab(button.dataset.tab));
});

railItems.forEach((item) => {
  item.addEventListener("click", () => renderTab(item.dataset.service));
});
