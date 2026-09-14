/**
 * Toàn bộ nội dung (placeholder tiếng Việt) của trang được tập trung tại đây.
 * Muốn đổi nội dung thật, chỉ cần sửa file này — các component sẽ tự cập nhật.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Skill = {
  label: string;
  percent: number;
};

export type Milestone = {
  period: string;
  role: string;
  org: string;
};

export type ValueCard = {
  title: string;
  description: string;
  /** Tên icon nội bộ được ánh xạ trong Values.tsx */
  icon: "training" | "design" | "coaching";
};

export type ProgramCard = {
  title: string;
  items: string[];
};

export type SiteContent = {
  name: string;
  title: string;
  subtitle: string;
  nav: NavLink[];
  languageLabel: string;
  ctaLabel: string;
  hero: {
    greeting: string;
    highlightName: string;
    intro: string;
    profileButton: string;
    stats: Stat[];
    tags: string[];
  };
  about: {
    heading: string;
    subtitle: string;
    bio: string[];
    skillsHeading: string;
    skills: Skill[];
  };
  experience: {
    heading: string;
    milestones: Milestone[];
    highlights: string[];
  };
  values: {
    heading: string;
    intro: string;
    cards: ValueCard[];
  };
  programs: {
    heading: string;
    intro: string;
    cards: ProgramCard[];
    ctaCard: {
      title: string;
      description: string;
      button: string;
    };
  };
  footer: {
    tagline: string;
    links: NavLink[];
    copyright: string;
  };
};

export const content: SiteContent = {
  name: "Vũ Thành Duy",
  title: "Vũ Thành Duy",
  subtitle: "",
  languageLabel: "EN",
  ctaLabel: "Đặt lịch hẹn",
  nav: [
    { label: "Về tôi", href: "#about" },
    { label: "Giải pháp", href: "#values" },
    { label: "Blog", href: "#experience" },
    { label: "Showcase", href: "#programs" },
  ],
  hero: {
    greeting: "XIN CHÀO, TÔI LÀ",
    highlightName: "VŨ THÀNH DUY",
    intro: "Ứng dụng AI và EdTech để nâng cao hiệu quả công việc.",
    profileButton: "Tải Profile",
    stats: [
      { value: "20,000+", label: "Đào tạo cho hơn 20,000 học viên" },
      { value: "300+", label: "Tư vấn hơn 300 dự án EdTech" },
      { value: "100+", label: "Đào tạo tại hơn 100 tổ chức" },
    ],
    tags: [
      "Trainer & Coach",
      "EdTech Consultant",
      "Learning Experience Designer",
    ],
  },
  about: {
    heading: "Tôi là ai",
    subtitle: "Gã hoài cổ dạy AI",
    bio: [
      "Nhà đào tạo và tư vấn đồng hành cùng các tổ chức trên hành trình chuyển đổi số và đổi mới giáo dục.",
      "Kết nối AI, EdTech và thiết kế trải nghiệm học tập để cá nhân và đội nhóm làm việc hiệu quả hơn.",
    ],
    skillsHeading: "Chuyên môn",
    skills: [
      { label: "Đào tạo Generative AI", percent: 95 },
      { label: "Thiết kế trải nghiệm học tập", percent: 90 },
      { label: "E-Learning Transformation", percent: 88 },
      { label: "Agile & Teal Management", percent: 85 },
      { label: "Tham vấn & Khai vấn", percent: 80 },
    ],
  },
  experience: {
    heading: "Kinh nghiệm công tác",
    milestones: [
      {
        period: "2018 – Nay",
        role: "Giám đốc vận hành (COO)",
        org: "Amber Academy",
      },
      {
        period: "2019 – Nay",
        role: "Trainer / Coach / AI Consultant",
        org: "Tự do",
      },
      {
        period: "2022 – Nay",
        role: "Sáng lập",
        org: "AI Trà Đá",
      },
    ],
    highlights: [
      "Sáng lập và phát triển cộng đồng chia sẻ kiến thức AI với hơn 17,000 thành viên",
      "Tổ chức các buổi chia sẻ, cập nhật xu hướng AI mới nhất",
    ],
  },
  values: {
    heading: "Giá trị tôi mang lại",
    intro: "Ba nhóm giải pháp cốt lõi giúp ứng dụng AI thực chất và bền vững.",
    cards: [
      {
        title: "Đào tạo kỹ năng",
        description:
          "Chương trình thực chiến giúp đội ngũ làm chủ công cụ AI trong công việc.",
        icon: "training",
      },
      {
        title: "Thiết kế chương trình",
        description:
          "Thiết kế lộ trình học tập bài bản, phù hợp mục tiêu từng tổ chức.",
        icon: "design",
      },
      {
        title: "Tham vấn & Khai vấn",
        description:
          "Đồng hành tư vấn để tìm ra hướng đi phù hợp trong chuyển đổi.",
        icon: "coaching",
      },
    ],
  },
  programs: {
    heading: "Danh mục chương trình đào tạo AI",
    intro: "Các chủ đề đào tạo linh hoạt theo nhu cầu từng nhóm đối tượng.",
    cards: [
      {
        title: "AI nền tảng",
        items: [
          "Tổng quan về Generative AI",
          "Kỹ thuật đặt câu lệnh (prompting)",
          "Ứng dụng AI vào công việc cá nhân",
        ],
      },
      {
        title: "AI trong Kinh doanh - Marketing",
        items: [
          "Sáng tạo nội dung với AI",
          "Nghiên cứu thị trường và khách hàng",
          "Tối ưu chiến dịch marketing",
        ],
      },
      {
        title: "AI trong Quản trị",
        items: [
          "Ra quyết định dựa trên dữ liệu",
          "Tự động hóa quy trình vận hành",
          "Quản trị hiệu suất với AI",
        ],
      },
      {
        title: "AI trong Nhân sự - Đào tạo",
        items: [
          "Tuyển dụng và sàng lọc thông minh",
          "Cá nhân hóa lộ trình học tập",
          "Xây dựng tài liệu đào tạo nhanh",
        ],
      },
      {
        title: "Xu hướng mới",
        items: [
          "AI Agent và tự động hóa nâng cao",
          "Cập nhật công cụ AI mới nhất",
          "Đạo đức và an toàn khi dùng AI",
        ],
      },
    ],
    ctaCard: {
      title: "Cần một chủ đề khác?",
      description: "Trao đổi trực tiếp cùng tôi",
      button: "Liên hệ ngay",
    },
  },
  footer: {
    tagline: "Nhà đào tạo & tư vấn AI/EdTech.",
    links: [
      { label: "Về tôi", href: "#about" },
      { label: "Giải pháp", href: "#values" },
      { label: "Kinh nghiệm", href: "#experience" },
      { label: "Chương trình", href: "#programs" },
    ],
    copyright: "© 2024 Vũ Thành Duy. Nội dung mẫu (placeholder).",
  },
};
