const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const tabButtons = document.querySelectorAll(".tab-button");
const railItems = document.querySelectorAll(".rail-item");
const langButtons = document.querySelectorAll(".lang-button");
const hero = document.querySelector(".hero");
const heroBg = document.querySelector(".hero-bg");
const metaDescription = document.querySelector('meta[name="description"]');

const serviceKeys = ["takeoff", "cost", "change", "global"];

const i18n = {
  ko: {
    htmlLang: "ko",
    title: "Viet QS | 수량산출과 공사비 컨설팅",
    description:
      "Viet QS는 CONCOST와 공사비닷컴의 견적 데이터와 베트남 실행력을 연결하는 수량산출, BOQ, 공사비 검토 서비스입니다.",
    nav: ["사업영역", "그룹", "CAD QS", "프로젝트", "문의"],
    menu: "MENU",
    menuOpen: "메뉴 열기",
    menuClose: "메뉴 닫기",
    heroPrimary: "사업영역 보기",
    heroSecondary: "그룹 구조 보기",
    panelKicker: "선택된 서비스",
    serviceLink: "자세히 보기",
    scroll: "SCROLL",
    group: {
      eyebrow: "ONE COMPANY",
      title: "CONCOST, 공사비닷컴, Viet QS는 하나의 견적 생태계입니다.",
      body:
        "컨코스트가 축적한 견적 전문성, 공사비닷컴의 데이터 플랫폼, Viet QS의 베트남 프로젝트 실행력을 한 회사의 연결된 서비스로 보여줍니다.",
      cards: [
        {
          role: "견적 컨설팅 본체",
          title: "대한민국 No.1 견적회사",
          body:
            "지난 30년 동안 견적 한 길을 걸어온 전문 조직입니다. CAD 적산 프로그램과 공사비 컨설팅 역량을 기반으로 2018년 베트남 제1호 해외지사를 열었습니다.",
          link: "바로가기",
        },
        {
          role: "공사비 정보 플랫폼",
          title: "30년 견적 데이터베이스",
          body:
            "건물종류, 위치, 면적, 연도별로 설계가, 도급가, 실행가 공사비를 찾는 국내 최대 공사비 정보 플랫폼입니다.",
          link: "바로가기",
        },
        {
          role: "베트남 실행 브랜드",
          title: "베트남 Quantity Surveying",
          body:
            "수량산출, BOQ/WBS 작성, 공사비 검토, 설계변경 정산을 베트남 현지 프로젝트 조건에 맞춰 빠르고 명확하게 수행합니다.",
          link: "문의하기",
        },
      ],
      platformEyebrow: "GONGSABI.COM DATA",
      platformTitle: "공사비닷컴의 네 가지 서비스를 Viet QS의 판단 기준으로 연결합니다.",
      platformBody:
        "백업 소스의 메인 구조를 반영해 공사비 검색, 내역서 작성, 공사비 교육, 건설 장터를 Viet QS 소개 안에서 그룹 자산으로 표현했습니다.",
      platformServices: [
        ["공사비 검색", "건물종류, 지역, 면적, 착공년도별 면적당 공사비 정보를 검색합니다."],
        ["내역서 작성", "건축 및 골조 내역서, 공사기간 산정, 간접 공사비 계산을 지원합니다."],
        ["공사비 교육", "건축견적 이야기 교재와 온·오프라인 교육으로 견적 전문가를 양성합니다."],
        ["건설 장터", "건설 현장 간 자재 거래, 구인 구직, 견적 요청 정보를 연결합니다."],
      ],
    },
    business: {
      eyebrow: "BUSINESS",
      title: "CONCOST의 견적 실무를 Viet QS 서비스로 실행합니다.",
      body:
        "도면 검토부터 원가계산서, BOQ, 설계변경, 해외/FED 견적까지 프로젝트 단계에 맞춰 필요한 견적 실무를 구조화합니다.",
      tabs: ["수량산출", "공사비 검토", "설계변경", "해외/FED 견적"],
      cards: [
        ["01", "Draft & Detail Estimate", "초기 도면부터 실시도면까지 사업성 검토와 발주용 내역에 필요한 수량을 산정합니다."],
        ["02", "Cost Statement", "직접공사비, 경비, 간접공사비를 포함한 원가계산서와 단가 대비표를 구성합니다."],
        ["03", "Design Change", "당초와 변경 도면의 수량과 금액 차이를 비교해 정산과 클레임 근거를 정리합니다."],
        ["04", "Overseas / FED BOQ", "CSI CODE, FED 양식, WBS 패키지 기준의 해외 프로젝트 산출근거를 작성합니다."],
      ],
    },
    cad: {
      eyebrow: "CAD QS SYSTEM",
      title: "도면 위에서 산출 정보를 확인하고 검증합니다.",
      body:
        "20여 년 견적 경험을 바탕으로 만든 CAD 적산 방식을 Viet QS의 핵심 프로세스로 정리했습니다. 산출 수량, 위치, 변경 사항을 도면 위에서 확인해 검증 시간을 줄입니다.",
      features: ["산출 수량 확인", "산출정보 작성", "간단 명령어 기반 입력", "도면 변경 추적", "산출 값 검증", "정산 리스크 감소"],
    },
    projects: {
      eyebrow: "PROJECT RECORD",
      title: "국내외 프로젝트 경험을 Viet QS의 실행력으로.",
      body: "CONCOST의 국내 견적 경험과 해외/FED 프로젝트 수행 기록을 Viet QS의 베트남 프로젝트 신뢰 지표로 연결합니다.",
      metrics: [
        ["30", "년 견적 데이터 축적"],
        ["2018", "베트남 제1호 해외지사"],
        ["25", "해외 프로젝트 국가"],
        ["200+", "해외 BOQ 작성 경험"],
      ],
      panels: [
        ["Overseas BOQ", "CSI CODE 기반 해외공사 BOQ 작성과 패키지별 물량 산출을 지원합니다."],
        ["FED / WBS Estimate", "FED 양식과 WBS 내역서 작성에 맞춘 산출근거를 체계적으로 구성합니다."],
      ],
    },
    contact: {
      eyebrow: "CONTACT",
      title: "CONCOST 그룹은 미래를 함께 만들어갈 인재를 기다립니다.\n건설 산업의 더 나은 기준을 함께 만들어갈 분이라면 지금 지원해 주세요.\n여러분의 관심과 도전을 기다립니다.",
    },
    footer: {
      line: "CONCOST · GongSaBi.com · Viet QS",
      small: "Viet QS Co., Ltd. All rights reserved.",
    },
    services: {
      takeoff: {
        rail: "수량산출",
        aria: "수량산출",
        heroEyebrow: "CONCOST GROUP · QUANTITY TAKE-OFF",
        heroTitle: "수량산출의 기준을 다시 세웁니다.",
        heroCopy:
          "CONCOST의 CAD 적산 경험과 Viet QS의 현지 실행 조직이 도면, 산출근거, BOQ를 하나의 흐름으로 정리합니다.",
        panelTitle: "Quantity Take-off",
        panelText: "도면과 시방서를 기반으로 수량산출서, 산출근거, BOQ를 작성합니다.",
        number: "01",
        title: "Quantity take-off & BOQ",
        body:
          "평면, 입면, 단면도와 실시도면을 검토해 산출근거와 내역서를 작성합니다. CONCOST의 CAD 적산 기준을 바탕으로 개산견적부터 정미 수량산출까지 단계별로 대응합니다.",
        items: ["개산견적 및 발주용 수량 작성", "정미 수량산출과 산출근거 정리", "층별, 부재별, 공종별 집계표 제공"],
        image: "assets/images/project-towers.jpg",
        heroImage: "assets/images/hero-blueprint.png",
        imageAlt: "High-rise project rendering",
      },
      cost: {
        rail: "공사비 검토",
        aria: "공사비 검토",
        heroEyebrow: "GONGSABI.COM DATA · COST REVIEW",
        heroTitle: "공사비 판단을 데이터로 정리합니다.",
        heroCopy:
          "공사비닷컴의 설계가, 도급가, 실행가 데이터와 CONCOST의 검토 기준을 연결해 발주 전후 비용 판단을 돕습니다.",
        panelTitle: "Cost Adequacy Review",
        panelText: "설계가, 도급가, 실행가 기준으로 공사비 적정성을 검토합니다.",
        number: "02",
        title: "Construction cost review",
        body:
          "CAD 적산 시스템으로 산출한 물량에 적정 단가를 적용해 원가계산서와 비교 내역을 제공합니다. 직접공사비, 경비, 간접공사비를 포함해 발주 전후의 비용 판단을 돕습니다.",
        items: ["공종별 수량 및 단가 검토", "조달 단가와 조사 단가 비교", "원가계산서 및 단가 대비표 작성"],
        image: "assets/images/about-quantity.jpg",
        heroImage: "assets/images/hero-modern-office.png",
        imageAlt: "Quantity surveying company introduction visual",
      },
      change: {
        rail: "설계변경 정산",
        aria: "설계변경 정산",
        heroEyebrow: "CAD QS SYSTEM · DESIGN CHANGE",
        heroTitle: "설계변경의 차이를 근거로 보여줍니다.",
        heroCopy:
          "당초 도면과 변경 도면의 수량, 위치, 금액 차이를 비교해 정산과 클레임 대응에 필요한 자료를 만듭니다.",
        panelTitle: "Design Change",
        panelText: "당초 도면과 변경 도면의 수량 차이를 비교해 정산 근거를 만듭니다.",
        number: "03",
        title: "Drawing change settlement",
        body:
          "당초와 변경 도면을 기준으로 수량과 금액 차이를 비교합니다. CAD 도면 위에서 변경 위치와 산출 값을 확인해 공사비 정산과 클레임 대응 근거를 구조화합니다.",
        items: ["당초/변경 수량 비교", "변경 내역서 작성", "정산 및 분쟁 방지 자료 정리"],
        image: "assets/images/drawing-estimate.jpg",
        heroImage: "assets/images/hero-team-engineers.png",
        imageAlt: "Drawing review on desk",
      },
      global: {
        rail: "해외/FED 견적",
        aria: "해외 FED 견적",
        heroEyebrow: "VIET QS · OVERSEAS/FED",
        heroTitle: "해외/FED 견적을 하나의 언어로 정리합니다.",
        heroCopy:
          "25개국 200개 이상 해외 프로젝트 경험을 바탕으로 CSI CODE, FED 양식, WBS 기준의 산출근거를 작성합니다.",
        panelTitle: "Overseas / FED Estimate",
        panelText: "CSI CODE, FED 양식, WBS 내역서 기준의 해외 프로젝트 견적을 지원합니다.",
        number: "04",
        title: "Overseas and FED estimating",
        body:
          "CONCOST가 수행해 온 25개국 200개 이상 해외 프로젝트 경험을 바탕으로 CSI CODE 기반 BOQ, FED 직발주 내역서, WBS 패키지 내역서를 구성합니다.",
        items: ["CSI CODE 기반 BOQ", "FED/YRP 양식 내역 작성", "WBS 패키지별 산출근거"],
        image: "assets/images/global-estimate.jpg",
        heroImage: "assets/images/hero-global-site.png",
        imageAlt: "Global estimation concept",
      },
    },
  },
  en: {
    htmlLang: "en",
    title: "Viet QS | Quantity Surveying & Cost Intelligence",
    description:
      "Viet QS connects CONCOST estimating expertise, GongSaBi.com cost data, and Vietnam-based QS execution.",
    nav: ["Business", "Group", "CAD QS", "Projects", "Contact"],
    menu: "MENU",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    heroPrimary: "View Business",
    heroSecondary: "View Group",
    panelKicker: "Selected service",
    serviceLink: "View details",
    scroll: "SCROLL",
    group: {
      eyebrow: "ONE COMPANY",
      title: "CONCOST, GongSaBi.com, and Viet QS operate as one estimating ecosystem.",
      body:
        "The page now presents CONCOST's estimating expertise, GongSaBi.com's cost data platform, and Viet QS's Vietnam execution as connected services of one company.",
      cards: [
        {
          role: "Estimating consultancy",
          title: "Korea's No.1 estimating company",
          body:
            "CONCOST has focused on estimating for 30 years. Its CAD quantity take-off program and cost consulting capability led to the first overseas branch in Vietnam in 2018.",
          link: "Open site",
        },
        {
          role: "Cost data platform",
          title: "30 years of estimating data",
          body:
            "GongSaBi.com is a major Korean construction cost platform where users search design, contract, and execution costs by building type, location, area, and year.",
          link: "Open site",
        },
        {
          role: "Vietnam execution brand",
          title: "Quantity Surveying in Vietnam",
          body:
            "Viet QS executes quantity take-off, BOQ/WBS, cost review, and design-change settlement for Vietnam project conditions.",
          link: "Contact us",
        },
      ],
      platformEyebrow: "GONGSABI.COM DATA",
      platformTitle: "Four GongSaBi.com services become decision data for Viet QS.",
      platformBody:
        "The structure from the backup source is reflected as group assets: cost search, report writing, cost education, and construction marketplace.",
      platformServices: [
        ["Cost Search", "Search unit construction costs by building type, region, area, and start year."],
        ["Report Writing", "Support building and frame reports, construction period estimates, and indirect cost calculations."],
        ["Cost Education", "Train estimating specialists through the Construction Estimate Story books and online/offline courses."],
        ["Construction Market", "Connect material trading, recruiting, job search, and estimate requests between construction sites."],
      ],
    },
    business: {
      eyebrow: "BUSINESS",
      title: "Viet QS executes CONCOST's practical estimating workflow.",
      body:
        "From drawing review to cost statements, BOQ, design changes, and overseas/FED estimates, the workflow is structured for each project phase.",
      tabs: ["Quantity Take-off", "Cost Review", "Design Change", "Overseas/FED"],
      cards: [
        ["01", "Draft & Detail Estimate", "Estimate quantities for feasibility reviews and tender documents from early drawings to detailed drawings."],
        ["02", "Cost Statement", "Build cost statements and unit-price comparisons including direct cost, expenses, and indirect cost."],
        ["03", "Design Change", "Compare quantity and cost differences between original and revised drawings for settlement and claims."],
        ["04", "Overseas / FED BOQ", "Prepare estimate evidence based on CSI CODE, FED formats, and WBS packages."],
      ],
    },
    cad: {
      eyebrow: "CAD QS SYSTEM",
      title: "Check and verify quantity data directly on CAD drawings.",
      body:
        "Viet QS uses CONCOST's CAD quantity take-off workflow, built from more than 20 years of estimating experience, to verify quantities, locations, and drawing changes faster.",
      features: ["Quantity check", "Take-off data input", "Simple command input", "Drawing-change tracking", "Value verification", "Lower settlement risk"],
    },
    projects: {
      eyebrow: "PROJECT RECORD",
      title: "Domestic and global experience becomes Viet QS execution power.",
      body: "CONCOST's Korean estimating experience and overseas/FED record are connected to Viet QS's reliability for Vietnam projects.",
      metrics: [
        ["30", "years of estimating data"],
        ["2018", "first Vietnam overseas branch"],
        ["25", "countries with overseas projects"],
        ["200+", "overseas BOQ records"],
      ],
      panels: [
        ["Overseas BOQ", "Support CSI CODE-based overseas BOQ and package quantity take-off."],
        ["FED / WBS Estimate", "Structure estimate evidence for FED formats and WBS report writing."],
      ],
    },
    contact: {
      eyebrow: "CONTACT",
      title: "CONCOST Group welcomes talents to build the future together.\nJoin us to create better standards for the construction industry.\nWe look forward to your application.",
    },
    footer: {
      line: "CONCOST · GongSaBi.com · Viet QS",
      small: "Viet QS Co., Ltd. All rights reserved.",
    },
    services: {
      takeoff: {
        rail: "Quantity take-off",
        aria: "Quantity take-off",
        heroEyebrow: "CONCOST GROUP · QUANTITY TAKE-OFF",
        heroTitle: "A new standard for quantity take-off.",
        heroCopy:
          "CONCOST's CAD take-off experience and Viet QS's local execution team organize drawings, evidence, and BOQ in one workflow.",
        panelTitle: "Quantity Take-off",
        panelText: "Prepare quantity sheets, take-off evidence, and BOQ from drawings and specifications.",
        number: "01",
        title: "Quantity take-off & BOQ",
        body:
          "We review plans, elevations, sections, and detailed drawings to prepare take-off evidence and BOQ. From draft estimates to net quantity take-off, the work follows CONCOST's CAD-based estimating standard.",
        items: ["Draft estimate and tender quantity", "Net quantity take-off and evidence", "Floor, member, and trade summary tables"],
        image: "assets/images/project-towers.jpg",
        heroImage: "assets/images/hero-blueprint.png",
        imageAlt: "High-rise project rendering",
      },
      cost: {
        rail: "Cost review",
        aria: "Cost review",
        heroEyebrow: "GONGSABI.COM DATA · COST REVIEW",
        heroTitle: "Cost decisions organized by data.",
        heroCopy:
          "GongSaBi.com's design, contract, and execution cost data is connected with CONCOST review standards for better decisions before and after tender.",
        panelTitle: "Cost Adequacy Review",
        panelText: "Review cost adequacy using design, contract, and execution price standards.",
        number: "02",
        title: "Construction cost review",
        body:
          "Quantities from the CAD take-off system are combined with proper unit rates to provide cost statements and comparison reports, including direct cost, expenses, and indirect cost.",
        items: ["Trade quantity and unit-price review", "Procurement and market-rate comparison", "Cost statement and unit-price comparison"],
        image: "assets/images/about-quantity.jpg",
        heroImage: "assets/images/hero-modern-office.png",
        imageAlt: "Quantity surveying company introduction visual",
      },
      change: {
        rail: "Design change",
        aria: "Design change settlement",
        heroEyebrow: "CAD QS SYSTEM · DESIGN CHANGE",
        heroTitle: "Design changes shown with clear evidence.",
        heroCopy:
          "We compare original and revised drawings by quantity, location, and cost to prepare settlement and claim evidence.",
        panelTitle: "Design Change",
        panelText: "Compare quantity differences between original and revised drawings for settlement evidence.",
        number: "03",
        title: "Drawing change settlement",
        body:
          "Original and revised drawings are compared by quantity and amount. CAD-based location and value checks structure the evidence needed for settlement and claim response.",
        items: ["Original/revised quantity comparison", "Change report writing", "Settlement and dispute-prevention evidence"],
        image: "assets/images/drawing-estimate.jpg",
        heroImage: "assets/images/hero-team-engineers.png",
        imageAlt: "Drawing review on desk",
      },
      global: {
        rail: "Overseas/FED",
        aria: "Overseas and FED estimate",
        heroEyebrow: "VIET QS · OVERSEAS/FED",
        heroTitle: "Overseas and FED estimates in one clear language.",
        heroCopy:
          "Based on more than 200 overseas project records in 25 countries, we prepare estimate evidence for CSI CODE, FED formats, and WBS standards.",
        panelTitle: "Overseas / FED Estimate",
        panelText: "Support overseas estimates based on CSI CODE, FED formats, and WBS reports.",
        number: "04",
        title: "Overseas and FED estimating",
        body:
          "Based on CONCOST's experience across more than 200 overseas projects in 25 countries, we build CSI CODE-based BOQ, FED direct-order reports, and WBS package estimates.",
        items: ["CSI CODE-based BOQ", "FED/YRP format estimates", "WBS package evidence"],
        image: "assets/images/global-estimate.jpg",
        heroImage: "assets/images/hero-global-site.png",
        imageAlt: "Global estimation concept",
      },
    },
  },
  vi: {
    htmlLang: "vi",
    title: "Viet QS | Bóc tách khối lượng & tư vấn chi phí",
    description:
      "Viet QS kết nối năng lực dự toán của CONCOST, dữ liệu chi phí GongSaBi.com và đội ngũ QS tại Việt Nam.",
    nav: ["Dịch vụ", "Tập đoàn", "CAD QS", "Dự án", "Liên hệ"],
    menu: "MENU",
    menuOpen: "Mở menu",
    menuClose: "Đóng menu",
    heroPrimary: "Xem dịch vụ",
    heroSecondary: "Xem hệ sinh thái",
    panelKicker: "Dịch vụ đã chọn",
    serviceLink: "Xem chi tiết",
    scroll: "SCROLL",
    group: {
      eyebrow: "ONE COMPANY",
      title: "CONCOST, GongSaBi.com và Viet QS là một hệ sinh thái dự toán.",
      body:
        "Trang giới thiệu năng lực dự toán của CONCOST, nền tảng dữ liệu chi phí GongSaBi.com và khả năng triển khai tại Việt Nam của Viet QS như các dịch vụ kết nối trong cùng một công ty.",
      cards: [
        {
          role: "Tư vấn dự toán",
          title: "Công ty dự toán No.1 tại Hàn Quốc",
          body:
            "CONCOST theo đuổi lĩnh vực dự toán trong 30 năm. Nền tảng CAD quantity take-off và năng lực tư vấn chi phí đã mở chi nhánh nước ngoài đầu tiên tại Việt Nam năm 2018.",
          link: "Truy cập",
        },
        {
          role: "Nền tảng dữ liệu chi phí",
          title: "Cơ sở dữ liệu dự toán 30 năm",
          body:
            "GongSaBi.com cho phép tra cứu chi phí thiết kế, giá nhận thầu và giá thực hiện theo loại công trình, vị trí, diện tích và năm.",
          link: "Truy cập",
        },
        {
          role: "Thương hiệu triển khai tại Việt Nam",
          title: "Quantity Surveying tại Việt Nam",
          body:
            "Viet QS thực hiện bóc tách khối lượng, BOQ/WBS, kiểm tra chi phí và quyết toán thay đổi thiết kế theo điều kiện dự án tại Việt Nam.",
          link: "Liên hệ",
        },
      ],
      platformEyebrow: "GONGSABI.COM DATA",
      platformTitle: "Bốn dịch vụ của GongSaBi.com trở thành dữ liệu quyết định cho Viet QS.",
      platformBody:
        "Cấu trúc từ nguồn backup được phản ánh như tài sản chung của tập đoàn: tra cứu chi phí, lập bảng biểu, đào tạo chi phí và sàn thông tin xây dựng.",
      platformServices: [
        ["Tra cứu chi phí", "Tra cứu đơn giá xây dựng theo loại công trình, khu vực, diện tích và năm khởi công."],
        ["Lập bảng biểu", "Hỗ trợ bảng khối lượng kiến trúc/kết cấu, thời gian thi công và chi phí gián tiếp."],
        ["Đào tạo chi phí", "Đào tạo chuyên gia dự toán qua bộ sách Construction Estimate Story và khóa học online/offline."],
        ["Sàn xây dựng", "Kết nối giao dịch vật tư, tuyển dụng, tìm việc và yêu cầu báo giá giữa các công trường."],
      ],
    },
    business: {
      eyebrow: "BUSINESS",
      title: "Viet QS triển khai quy trình dự toán thực tế của CONCOST.",
      body:
        "Từ kiểm tra bản vẽ đến bảng giá thành, BOQ, thay đổi thiết kế và dự toán quốc tế/FED, quy trình được tổ chức theo từng giai đoạn dự án.",
      tabs: ["Bóc tách KL", "Kiểm tra chi phí", "Thay đổi thiết kế", "Quốc tế/FED"],
      cards: [
        ["01", "Dự toán sơ bộ & chi tiết", "Bóc tách khối lượng phục vụ đánh giá khả thi và hồ sơ mời thầu từ bản vẽ ban đầu đến bản vẽ chi tiết."],
        ["02", "Bảng giá thành", "Lập bảng giá thành và so sánh đơn giá gồm chi phí trực tiếp, chi phí chung và chi phí gián tiếp."],
        ["03", "Thay đổi thiết kế", "So sánh chênh lệch khối lượng và chi phí giữa bản vẽ ban đầu và bản vẽ thay đổi cho quyết toán/claim."],
        ["04", "BOQ quốc tế / FED", "Chuẩn bị căn cứ dự toán theo CSI CODE, mẫu FED và gói WBS."],
      ],
    },
    cad: {
      eyebrow: "CAD QS SYSTEM",
      title: "Kiểm tra và xác minh dữ liệu khối lượng trực tiếp trên bản vẽ CAD.",
      body:
        "Viet QS sử dụng quy trình CAD quantity take-off của CONCOST, được xây dựng từ hơn 20 năm kinh nghiệm dự toán, để xác minh khối lượng, vị trí và thay đổi bản vẽ nhanh hơn.",
      features: ["Kiểm tra khối lượng", "Nhập dữ liệu bóc tách", "Lệnh nhập đơn giản", "Theo dõi thay đổi bản vẽ", "Xác minh giá trị", "Giảm rủi ro quyết toán"],
    },
    projects: {
      eyebrow: "PROJECT RECORD",
      title: "Kinh nghiệm trong và ngoài nước trở thành năng lực triển khai của Viet QS.",
      body: "Kinh nghiệm dự toán tại Hàn Quốc và hồ sơ quốc tế/FED của CONCOST được kết nối với độ tin cậy của Viet QS cho dự án tại Việt Nam.",
      metrics: [
        ["30", "năm dữ liệu dự toán"],
        ["2018", "chi nhánh nước ngoài đầu tiên tại Việt Nam"],
        ["25", "quốc gia có dự án quốc tế"],
        ["200+", "hồ sơ BOQ quốc tế"],
      ],
      panels: [
        ["Overseas BOQ", "Hỗ trợ BOQ quốc tế theo CSI CODE và bóc tách khối lượng theo gói."],
        ["FED / WBS Estimate", "Tổ chức căn cứ dự toán theo mẫu FED và báo cáo WBS."],
      ],
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Tập đoàn CONCOST chào đón các nhân tài cùng kiến tạo tương lai.\nHãy cùng chúng tôi tạo ra tiêu chuẩn tốt hơn cho ngành xây dựng.\nChúng tôi mong chờ hồ sơ ứng tuyển của bạn.",
    },
    footer: {
      line: "CONCOST · GongSaBi.com · Viet QS",
      small: "Viet QS Co., Ltd. All rights reserved.",
    },
    services: {
      takeoff: {
        rail: "Bóc tách KL",
        aria: "Bóc tách khối lượng",
        heroEyebrow: "CONCOST GROUP · QUANTITY TAKE-OFF",
        heroTitle: "Chuẩn mới cho bóc tách khối lượng.",
        heroCopy:
          "Kinh nghiệm CAD take-off của CONCOST và đội ngũ Viet QS tại Việt Nam kết nối bản vẽ, căn cứ bóc tách và BOQ trong một quy trình.",
        panelTitle: "Quantity Take-off",
        panelText: "Lập bảng khối lượng, căn cứ bóc tách và BOQ từ bản vẽ và thuyết minh kỹ thuật.",
        number: "01",
        title: "Quantity take-off & BOQ",
        body:
          "Chúng tôi kiểm tra mặt bằng, mặt đứng, mặt cắt và bản vẽ chi tiết để lập căn cứ bóc tách và BOQ. Công việc đi từ dự toán sơ bộ đến khối lượng tinh theo chuẩn CAD của CONCOST.",
        items: ["Dự toán sơ bộ và khối lượng mời thầu", "Bóc tách khối lượng tinh và căn cứ", "Bảng tổng hợp theo tầng, cấu kiện và công tác"],
        image: "assets/images/project-towers.jpg",
        heroImage: "assets/images/hero-blueprint.png",
        imageAlt: "High-rise project rendering",
      },
      cost: {
        rail: "Kiểm tra chi phí",
        aria: "Kiểm tra chi phí",
        heroEyebrow: "GONGSABI.COM DATA · COST REVIEW",
        heroTitle: "Quyết định chi phí dựa trên dữ liệu.",
        heroCopy:
          "Dữ liệu giá thiết kế, giá nhận thầu và giá thực hiện của GongSaBi.com được kết nối với chuẩn kiểm tra của CONCOST.",
        panelTitle: "Cost Adequacy Review",
        panelText: "Kiểm tra tính hợp lý của chi phí theo giá thiết kế, giá nhận thầu và giá thực hiện.",
        number: "02",
        title: "Construction cost review",
        body:
          "Khối lượng từ hệ thống CAD take-off được kết hợp với đơn giá phù hợp để lập bảng giá thành và báo cáo so sánh, gồm chi phí trực tiếp, chi phí chung và chi phí gián tiếp.",
        items: ["Kiểm tra khối lượng và đơn giá theo công tác", "So sánh đơn giá mua sắm và giá thị trường", "Bảng giá thành và bảng so sánh đơn giá"],
        image: "assets/images/about-quantity.jpg",
        heroImage: "assets/images/hero-modern-office.png",
        imageAlt: "Quantity surveying company introduction visual",
      },
      change: {
        rail: "Thay đổi TK",
        aria: "Quyết toán thay đổi thiết kế",
        heroEyebrow: "CAD QS SYSTEM · DESIGN CHANGE",
        heroTitle: "Thay đổi thiết kế được chứng minh rõ ràng.",
        heroCopy:
          "Chúng tôi so sánh bản vẽ ban đầu và bản vẽ thay đổi theo khối lượng, vị trí và chi phí để chuẩn bị căn cứ quyết toán và claim.",
        panelTitle: "Design Change",
        panelText: "So sánh chênh lệch khối lượng giữa bản vẽ ban đầu và bản vẽ thay đổi.",
        number: "03",
        title: "Drawing change settlement",
        body:
          "Bản vẽ ban đầu và bản vẽ thay đổi được so sánh theo khối lượng và giá trị. Kiểm tra vị trí và giá trị trên CAD giúp chuẩn hóa căn cứ quyết toán và claim.",
        items: ["So sánh khối lượng ban đầu/thay đổi", "Lập báo cáo thay đổi", "Căn cứ giảm tranh chấp quyết toán"],
        image: "assets/images/drawing-estimate.jpg",
        heroImage: "assets/images/hero-team-engineers.png",
        imageAlt: "Drawing review on desk",
      },
      global: {
        rail: "Quốc tế/FED",
        aria: "Dự toán quốc tế và FED",
        heroEyebrow: "VIET QS · OVERSEAS/FED",
        heroTitle: "Dự toán quốc tế/FED trong một ngôn ngữ rõ ràng.",
        heroCopy:
          "Dựa trên hơn 200 dự án quốc tế tại 25 quốc gia, chúng tôi lập căn cứ dự toán theo CSI CODE, mẫu FED và chuẩn WBS.",
        panelTitle: "Overseas / FED Estimate",
        panelText: "Hỗ trợ dự toán quốc tế theo CSI CODE, mẫu FED và báo cáo WBS.",
        number: "04",
        title: "Overseas and FED estimating",
        body:
          "Dựa trên kinh nghiệm của CONCOST với hơn 200 dự án quốc tế tại 25 quốc gia, chúng tôi lập BOQ theo CSI CODE, hồ sơ FED direct-order và dự toán theo gói WBS.",
        items: ["BOQ theo CSI CODE", "Dự toán theo mẫu FED/YRP", "Căn cứ theo gói WBS"],
        image: "assets/images/global-estimate.jpg",
        heroImage: "assets/images/hero-global-site.png",
        imageAlt: "Global estimation concept",
      },
    },
  },
};

let currentLang = localStorage.getItem("vietqs-lang") || "ko";
let currentService = "takeoff";
let currentHeroIndex = 0;
let isAnimating = false;

function activeText() {
  return i18n[currentLang] || i18n.ko;
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setTextList(selector, values) {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] !== undefined) element.textContent = values[index];
  });
}

function setHeroBackground(image) {
  heroBg.style.background = `linear-gradient(90deg, rgba(6, 27, 61, 0.38), rgba(6, 27, 61, 0.08) 54%, rgba(6, 27, 61, 0.42)), linear-gradient(0deg, rgba(6, 27, 61, 0.22), rgba(6, 27, 61, 0.02)), url("${image}") center / cover`;
}

function updateStaticText() {
  const text = activeText();

  document.documentElement.lang = text.htmlLang;
  document.title = text.title;
  if (metaDescription) metaDescription.setAttribute("content", text.description);

  setTextList(".desktop-nav a", text.nav);
  setTextList(".mobile-menu a", text.nav);
  setText(".menu-toggle b", text.menu);
  setText("[data-hero-primary]", text.heroPrimary);
  setText("[data-hero-secondary]", text.heroSecondary);
  setText("[data-panel-kicker]", text.panelKicker);
  setText("[data-service-link]", text.serviceLink);
  const scrollCue = document.querySelector(".scroll-cue");
  if (scrollCue) scrollCue.innerHTML = `<span></span>${text.scroll}`;

  setText("#group .section-heading .eyebrow", text.group.eyebrow);
  setText("#group-title", text.group.title);
  setText("#group .section-heading p:not(.eyebrow)", text.group.body);

  document.querySelectorAll(".brand-card").forEach((card, index) => {
    const data = text.group.cards[index];
    if (!data) return;
    card.querySelector(".brand-role").textContent = data.role;
    card.querySelector("h3").textContent = data.title;
    card.querySelector("p:not(.brand-role)").textContent = data.body;
    card.querySelector("a").textContent = data.link;
  });

  setText(".platform-copy .eyebrow", text.group.platformEyebrow);
  setText(".platform-copy h3", text.group.platformTitle);
  setText(".platform-copy p:not(.eyebrow)", text.group.platformBody);
  document.querySelectorAll(".platform-services article").forEach((card, index) => {
    const data = text.group.platformServices[index];
    if (!data) return;
    card.querySelector("h4").textContent = data[0];
    card.querySelector("p").textContent = data[1];
  });

  setText("#business .section-heading .eyebrow", text.business.eyebrow);
  setText("#business-title", text.business.title);
  setText("#business .section-heading p:not(.eyebrow)", text.business.body);
  setTextList(".tab-button", text.business.tabs);

  document.querySelectorAll(".business-grid article").forEach((card, index) => {
    const data = text.business.cards[index];
    if (!data) return;
    card.querySelector("span").textContent = data[0];
    card.querySelector("h3").textContent = data[1];
    card.querySelector("p").textContent = data[2];
  });

  setText(".cad-content .eyebrow", text.cad.eyebrow);
  setText("#cad-title", text.cad.title);
  setText(".cad-content p:not(.eyebrow)", text.cad.body);
  setTextList(".cad-features span", text.cad.features);

  setText("#projects .section-heading .eyebrow", text.projects.eyebrow);
  setText("#projects-title", text.projects.title);
  setText("#projects .section-heading p:not(.eyebrow)", text.projects.body);
  document.querySelectorAll(".metrics strong").forEach((metric, index) => {
    const data = text.projects.metrics[index];
    if (!data) return;
    metric.innerHTML = `<span>${data[0]}</span> ${data[1]}`;
  });

  document.querySelectorAll(".project-panels article").forEach((card, index) => {
    const data = text.projects.panels[index];
    if (!data) return;
    card.querySelector("h3").textContent = data[0];
    card.querySelector("p").textContent = data[1];
  });

  setText(".contact-section .eyebrow", text.contact.eyebrow);
  setText("#contact-title", text.contact.title);
  setText(".site-footer p", text.footer.line);
  setText(".site-footer small", text.footer.small);

  langButtons.forEach((button) => {
    const active = button.dataset.lang === currentLang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-current", active ? "true" : "false");
  });

  menuToggle.setAttribute("aria-label", menuToggle.getAttribute("aria-expanded") === "true" ? text.menuClose : text.menuOpen);
}

function renderTab(key, animate = true) {
  const text = activeText();
  const data = text.services[key];
  if (!data) return;
  currentService = key;
  currentHeroIndex = serviceKeys.indexOf(key);

  if (animate) hero.classList.add("is-changing");

  window.setTimeout(
    () => {
      setText("[data-hero-eyebrow]", data.heroEyebrow);
      setText("[data-hero-title]", data.heroTitle);
      setText("[data-hero-copy]", data.heroCopy);
      setHeroBackground(data.heroImage);

      setText("[data-tab-number]", data.number);
      setText("[data-tab-title]", data.title);
      setText("[data-tab-body]", data.body);

      const list = document.querySelector("[data-tab-list]");
      list.innerHTML = data.items.map((item) => `<li>${item}</li>`).join("");

      const image = document.querySelector("[data-tab-image]");
      image.src = data.image;
      image.alt = data.imageAlt;

      setText("[data-service-title]", data.panelTitle);
      setText("[data-service-text]", data.panelText);

      serviceKeys.forEach((serviceKey, index) => {
        const rail = railItems[index];
        if (!rail) return;
        rail.dataset.service = serviceKey;
        rail.setAttribute("aria-label", text.services[serviceKey].aria);
        rail.querySelector("b").textContent = text.services[serviceKey].rail;
      });

      tabButtons.forEach((button) => {
        const active = button.dataset.tab === key;
        button.classList.toggle("active", active);
        button.setAttribute("aria-selected", String(active));
      });

      railItems.forEach((item) => {
        item.classList.toggle("active", item.dataset.service === key);
      });

      hero.classList.remove("is-changing");
    },
    animate ? 80 : 0
  );
}

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem("vietqs-lang", lang);
  updateStaticText();
  renderTab(currentService, true);
}

function setHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 12);
}

function setMenu(open) {
  const text = activeText();
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? text.menuClose : text.menuOpen);
  mobileMenu.classList.toggle("open", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  header.classList.toggle("menu-open", open);
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

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

function handleHeroScroll(e) {
  if (window.scrollY > 10) return; // Only hijack scroll when at the top

  if (e.deltaY > 0 && currentHeroIndex < serviceKeys.length - 1) {
    e.preventDefault();
    if (isAnimating) return;
    isAnimating = true;
    renderTab(serviceKeys[currentHeroIndex + 1]);
    setTimeout(() => { isAnimating = false; }, 1000);
  } else if (e.deltaY < 0 && currentHeroIndex > 0) {
    e.preventDefault();
    if (isAnimating) return;
    isAnimating = true;
    renderTab(serviceKeys[currentHeroIndex - 1]);
    setTimeout(() => { isAnimating = false; }, 1000);
  }
}

window.addEventListener("wheel", handleHeroScroll, { passive: false });

updateStaticText();
renderTab(currentService, false);

// Scroll Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, observerOptions);

// Add reveal classes dynamically
document.querySelectorAll('.hero-content, .hero-panel, .section-heading, .platform-copy, .service-tabs, .service-copy, .service-image, .cad-visual, .cad-content, .contact-section > div').forEach(el => el.classList.add('reveal'));
document.querySelectorAll('.brand-card').forEach((el, i) => { el.classList.add('reveal', `delay-${(i+1)*100}`); });
document.querySelectorAll('.platform-services article').forEach((el, i) => { el.classList.add('reveal', `delay-${(i+1)*100}`); });
document.querySelectorAll('.business-grid article').forEach((el, i) => { el.classList.add('reveal', `delay-${(i%4+1)*100}`); });
document.querySelectorAll('.project-panels article').forEach((el, i) => { el.classList.add('reveal', `delay-${(i+1)*100}`); });
document.querySelectorAll('.metrics strong').forEach((el, i) => { el.classList.add('reveal', `delay-${(i+1)*100}`); });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
