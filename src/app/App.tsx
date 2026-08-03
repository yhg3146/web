import { useState } from "react";
import { Code2, Brain, Cpu, Trophy, Users, Sparkles, ChevronRight, Star, Zap, BookOpen, Award } from "lucide-react";

const projects = {
  web: [
    {
      title: "MediBook",
      subtitle: "스마트 병원 예약 플랫폼",
      desc: "AI 기반 증상 분석으로 적합한 진료과를 추천하고 실시간 예약·결제·진료 기록 관리까지 제공하는 풀스택 헬스케어 웹 서비스",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=380&fit=crop&auto=format",
      alt: "의료진이 스마트폰 앱으로 환자 예약을 확인하는 장면",
      tag: "Web Project 01",
    },
    {
      title: "StyleAI Shop",
      subtitle: "AI 개인화 쇼핑 큐레이터",
      desc: "사용자의 구매 이력과 체형 데이터를 분석해 맞춤 상품을 추천하는 이커머스 플랫폼. 실시간 대시보드와 A/B 테스트 기능 내장",
      stack: ["React", "FastAPI", "Redis", "AWS S3"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=380&fit=crop&auto=format",
      alt: "노트북 화면에 표시된 데이터 분석 대시보드",
      tag: "Web Project 02",
    },
  ],
  ai: [
    {
      title: "VoiceSense",
      subtitle: "음성 기반 감정 분석 AI",
      desc: "딥러닝 모델로 통화·회의 음성에서 화자의 감정 상태를 실시간 분류. 콜센터 상담 품질 관리 시스템에 적용 가능한 B2B 솔루션",
      stack: ["Python", "PyTorch", "Whisper API", "FastAPI"],
      img: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=600&h=380&fit=crop&auto=format",
      alt: "AI 음성 분석을 나타내는 추상적인 신경망 시각화",
      tag: "AI Project 01",
    },
    {
      title: "MediScan AI",
      subtitle: "의료 이미지 진단 보조 AI",
      desc: "X-ray·CT 영상에서 폐 결절과 골절 의심 영역을 자동 탐지하는 AI 모델. YOLOv8 기반 객체 탐지 + ViT 분류 파이프라인 구현",
      stack: ["Python", "YOLOv8", "Vision Transformer", "ONNX"],
      img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=380&fit=crop&auto=format",
      alt: "회로 기판 위에 뇌 형태로 표현된 AI 칩",
      tag: "AI Project 02",
    },
  ],
  embedded: [
    {
      title: "HomeGuard",
      subtitle: "스마트 홈 환경 모니터링",
      desc: "라즈베리파이와 다중 센서(온습도·CO₂·미세먼지)를 연동해 실내 환경을 실시간 수집·분석. MQTT 기반 클라우드 연동 대시보드 제공",
      stack: ["Raspberry Pi", "MQTT", "InfluxDB", "Grafana"],
      img: "https://images.unsplash.com/photo-1666401565408-9b6b0741f0d6?w=600&h=380&fit=crop&auto=format",
      alt: "스마트 홈 IoT 센서 디바이스",
      tag: "Embedded Project 01",
    },
    {
      title: "AutoKart",
      subtitle: "자율주행 미니카 시스템",
      desc: "OpenCV 차선 인식 + 초음파 센서 장애물 회피를 결합한 RC카 자율주행 프로젝트. 아두이노-라즈베리파이 마스터-슬레이브 구조 설계",
      stack: ["Arduino", "Raspberry Pi", "OpenCV", "Python"],
      img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&h=380&fit=crop&auto=format",
      alt: "전자 회로 기판 및 부품 클로즈업",
      tag: "Embedded Project 02",
    },
  ],
};

const categories = [
  { key: "web", label: "웹 프로젝트", icon: Code2, color: "bg-rose-100 text-rose-600" },
  { key: "ai", label: "AI 프로젝트", icon: Brain, color: "bg-pink-100 text-pink-600" },
  { key: "embedded", label: "임베디드 프로젝트", icon: Cpu, color: "bg-fuchsia-100 text-fuchsia-700" },
];

const features = [
  {
    icon: Sparkles,
    title: "현업 AI 활용법 스터디",
    desc: "ChatGPT, Claude, Cursor 등 실제 현업에서 쓰는 AI 도구를 체계적으로 학습하고 업무 생산성을 극대화합니다.",
  },
  {
    icon: BookOpen,
    title: "취업·창업 맞춤 프로젝트",
    desc: "비전공자도 포트폴리오에 담을 수 있는 실전 프로젝트와 정보처리기사·빅데이터 분석기사 자격증 스터디를 함께 운영합니다.",
  },
  {
    icon: Award,
    title: "공모전·대회로 스펙 UP",
    desc: "SW 공모전, 해커톤, 데이터 경진대회에 팀으로 참가해 실전 경험과 수상 실적을 쌓습니다.",
  },
];

type CategoryKey = "web" | "ai" | "embedded";

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("web");

  const activeProjects = projects[activeCategory];

  return (
    <div
      className="min-h-screen w-full"
      style={{ fontFamily: "'Noto Sans KR', 'Plus Jakarta Sans', sans-serif", background: "linear-gradient(160deg, #FFF0F5 0%, #FFF5F8 40%, #FDE8F0 100%)" }}
    >
      {/* Decorative blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #FFB3C6 0%, transparent 70%)" }} />
        <div className="absolute top-1/3 -left-24 w-80 h-80 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #FF8FAB 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #E8527A 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* ── HERO ── */}
        <section className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-rose-200 text-rose-500 rounded-full px-4 py-1.5 text-sm font-medium mb-6 shadow-sm">
            <Zap size={13} className="fill-rose-400 text-rose-400" />
            2026 신입 부원 모집 중
          </div>

          <div className="mb-4">
            <span
              className="text-7xl md:text-8xl font-black tracking-tight"
              style={{
                background: "linear-gradient(135deg, #E8527A 0%, #FF8FAB 50%, #FFB3C6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              타이레놀
            </span>
          </div>

          <p className="text-xl md:text-2xl font-semibold text-[#8B5A6B] mb-3 tracking-wide">
            코딩 소모임
          </p>

          <p className="text-base md:text-lg text-[#A07080] max-w-xl mx-auto leading-relaxed">
            코딩이 두려운 분들의 두통을 시원하게 해결해 드립니다 💊<br />
            현업 중심 학습으로 <strong className="text-[#E8527A]">실력</strong>과 <strong className="text-[#E8527A]">스펙</strong>을 동시에 잡으세요.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["#비전공자환영", "#현업프로젝트", "#AI스터디", "#공모전팀빌딩", "#자격증스터디"].map((tag) => (
              <span key={tag} className="bg-white/80 border border-rose-100 text-rose-400 rounded-full px-3 py-1 text-sm font-medium shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="mb-20">
          <div
            className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #E8527A 0%, #FF8FAB 60%, #FFB3C6 100%)" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 bg-white -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-10 w-40 h-40 rounded-full opacity-10 bg-white translate-y-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <Users size={18} className="text-white/80" />
                <span className="text-white/80 text-sm font-medium tracking-widest uppercase">About Us</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                코딩, 이제 두렵지 않아요.<br />타이레놀이 함께합니다.
              </h2>
              <p className="text-white/90 text-base leading-relaxed max-w-2xl">
                타이레놀은 코딩에 대한 막연한 두려움과 어디서부터 시작해야 할지 모르는 답답함을 해소하기 위해 만들어진 소모임입니다.
                전공자·비전공자 모두 환영하며, 현업에서 실제로 쓰이는 기술과 도구를 중심으로 학습합니다.
                함께 프로젝트를 완성하고, 자격증을 취득하고, 공모전에서 수상하며 취업과 창업의 실질적인 발판을 만들어 갑니다.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[
                  { num: "6+", label: "실전 프로젝트" },
                  { num: "3개", label: "스터디 트랙" },
                  { num: "전공무관", label: "누구나 가능" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/20 backdrop-blur-sm rounded-2xl py-4 px-2">
                    <div className="text-2xl font-black text-white">{stat.num}</div>
                    <div className="text-white/80 text-xs mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-rose-400 text-sm font-semibold mb-3 tracking-widest uppercase">
              <Star size={13} className="fill-rose-300" /> What We Do
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#2D1B22]">소모임 핵심 활동</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-rose-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-11 h-11 bg-rose-50 rounded-xl flex items-center justify-center mb-4 border border-rose-100">
                  <Icon size={20} className="text-[#E8527A]" />
                </div>
                <h3 className="font-bold text-[#2D1B22] text-base mb-2">{title}</h3>
                <p className="text-[#8B5A6B] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-rose-400 text-sm font-semibold mb-3 tracking-widest uppercase">
              <Code2 size={13} /> Our Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#2D1B22] mb-3">실전 프로젝트 포트폴리오</h2>
            <p className="text-[#8B5A6B] text-sm">이런 프로젝트를 함께 만들어 갑니다</p>
          </div>

          {/* Category tabs */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {categories.map(({ key, label, icon: Icon, color }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key as CategoryKey)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeCategory === key
                    ? "bg-[#E8527A] text-white border-[#E8527A] shadow-md shadow-rose-200"
                    : "bg-white/70 border-rose-100 text-[#8B5A6B] hover:border-rose-300"
                }`}
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>

          {/* Project cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {activeProjects.map((project) => (
              <div
                key={project.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-rose-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative h-48 bg-rose-50 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B22]/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-[#E8527A] text-xs font-bold px-3 py-1 rounded-full border border-rose-100">
                      {project.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-1">
                    <span className="text-[#8B5A6B] text-xs font-medium">{project.subtitle}</span>
                  </div>
                  <h3 className="text-[#2D1B22] font-black text-xl mb-2">{project.title}</h3>
                  <p className="text-[#8B5A6B] text-sm leading-relaxed mb-4">{project.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-rose-50 text-rose-500 border border-rose-100 text-xs font-medium px-2.5 py-1 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── JOIN CTA ── */}
        <section className="mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-rose-100 shadow-sm text-center">
            <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-rose-100">
              <Trophy size={26} className="text-[#E8527A]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#2D1B22] mb-3">
              지금 바로 함께하세요
            </h2>
            <p className="text-[#8B5A6B] text-base max-w-lg mx-auto mb-8 leading-relaxed">
              비전공자도, 코딩을 처음 시작하는 분도 환영합니다.<br />
              타이레놀과 함께라면 코딩이 즐거워집니다 💊
            </p>

            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              {[
                { label: "모집 대상", value: "전공 무관 누구나" },
                { label: "활동 방식", value: "주 1회 정기 모임" },
                { label: "지원 방법", value: "아래 버튼으로 입력" },
              ].map((info) => (
                <div key={info.label} className="bg-rose-50 rounded-2xl py-4 px-3 border border-rose-100">
                  <div className="text-[#8B5A6B] text-xs font-medium mb-1">{info.label}</div>
                  <div className="text-[#2D1B22] font-bold text-sm">{info.value}</div>
                </div>
              ))}
            </div>

            <a
              href="https://forms.gle/8Gkb72xQxakhNngu5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E8527A] text-white font-bold px-8 py-3.5 rounded-full text-base hover:bg-[#D4456D] shadow-md shadow-rose-200 hover:shadow-lg hover:shadow-rose-300 hover:-translate-y-0.5 transition-all duration-200"
            >
              지원하기
              <ChevronRight size={16} />
            </a>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="text-center text-[#C0909F] text-xs pb-8">
          <p className="font-semibold text-[#8B5A6B] text-sm mb-1">코딩 소모임 타이레놀 💊</p>
          <p>코딩의 두통을 해결해 드립니다 · 2026년 모집 진행 중</p>
        </footer>

      </div>
    </div>
  );
}
