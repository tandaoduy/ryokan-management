"use client";

import { useState } from "react";
import type { AlertProps, AlertVariant } from "./types";

export type { AlertProps, AlertVariant };

/* Biểu tượng chữ "i" thanh lịch, tròn mượt và sắc nét cho trạng thái info */
function InfoSymbol({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Vòng tròn thanh thoát */}
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      {/* Thân chữ i */}
      <line x1="12" y1="16" x2="12" y2="11.5" strokeWidth="2.4" />
      {/* Dấu chấm chữ i tròn trịa */}
      <circle cx="12" cy="7.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Biểu tượng hoàn tất thanh tao như nét cọ Sumi-e Nhật Bản */
function SuccessBrushSymbol({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <polyline points="8.5 12.5 11 15 15.5 9.5" strokeWidth="2.4" />
    </svg>
  );
}

/* Biểu tượng cảnh báo: Tam giác bo góc mượt mà và dấu chấm than (!) */
function WarningTriangleSymbol({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Khung tam giác cân bo góc êm dịu */}
      <path
        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
        strokeWidth="2"
      />
      {/* Thân dấu chấm than */}
      <line x1="12" y1="9.5" x2="12" y2="13.5" strokeWidth="2.4" />
      {/* Dấu chấm tròn hoàn hảo */}
      <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Biểu tượng cần kiểm tra (Kakunin - 確認) */
function ErrorBrushSymbol({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <line x1="15" y1="9" x2="9" y2="15" strokeWidth="2.2" />
      <line x1="9" y1="9" x2="15" y2="15" strokeWidth="2.2" />
    </svg>
  );
}

/* Nút đóng to rõ, sắc nét, dễ nhìn */
function JapaneseCloseIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* 1. Phong cảnh INFO: Núi Phú Sĩ & Mặt trời mọc bên sườn núi (Đã dọn sạch vùng góc phải) */
function FujiLandscape({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 100" fill="none" stroke="currentColor" aria-hidden="true">
      {/* Vầng thái dương mặt trời đặt bên trái đỉnh núi, không vướng nút đóng */}
      <circle cx="56" cy="38" r="16" fill="currentColor" fillOpacity="0.08" stroke="none" />
      <circle cx="56" cy="38" r="16" stroke="currentColor" strokeWidth="1" opacity="0.35" />

      {/* Sườn núi Phú Sĩ hùng vĩ */}
      <path
        d="M 32 94 C 58 88 74 54 84 28 L 100 28 C 110 54 126 88 152 94"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Miệng núi và vệt tuyết rãnh nón */}
      <path d="M 84 28 Q 92 31 100 28" strokeWidth="1.8" />
      <path d="M 80 44 Q 87 41 92 48 Q 97 40 104 44" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 87 41 L 89 34" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 92 48 L 92 32" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 97 40 L 95 33" strokeWidth="1.2" strokeLinecap="round" />

      {/* Dải mây cuộn truyền thống Nhật (Kasumi - 霞) */}
      <path d="M 16 72 Q 28 68 42 72 Q 56 76 70 72" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 26 78 Q 38 75 52 78" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M 108 68 Q 120 65 132 68" strokeWidth="1.2" strokeLinecap="round" />

      {/* Làn sóng suối nguồn onsen thanh bình bên dưới */}
      <path d="M 40 94 Q 60 90 80 94 T 120 94 T 160 94" strokeWidth="1.1" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

/* 2. Phong cảnh SUCCESS: Cành hoa anh đào Sakura & Mái chùa cổ (Đã dọn sạch vùng góc phải) */
function SakuraLandscape({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 100" fill="none" stroke="currentColor" aria-hidden="true">
      {/* Vầng trăng thanh tịnh đặt bên trái, không vướng nút đóng */}
      <circle cx="58" cy="32" r="15" fill="currentColor" fillOpacity="0.06" stroke="none" />
      <circle cx="58" cy="32" r="15" stroke="currentColor" strokeWidth="1" opacity="0.3" />

      {/* Mái chùa truyền thống Nhật Bản ở tầm thấp */}
      <path d="M 108 58 C 114 55 122 55 128 58" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 102 62 C 112 57 124 57 134 62" strokeWidth="2" strokeLinecap="round" />
      <line x1="118" y1="52" x2="118" y2="57" strokeWidth="1.5" />
      <path d="M 96 76 C 112 69 128 69 144 76" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="110" y1="63" x2="110" y2="72" strokeWidth="1.5" />
      <line x1="126" y1="63" x2="126" y2="72" strokeWidth="1.5" />
      <path d="M 90 90 C 110 82 130 82 150 90" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="106" y1="77" x2="106" y2="86" strokeWidth="1.5" />
      <line x1="132" y1="77" x2="132" y2="86" strokeWidth="1.5" />

      {/* Cành hoa anh đào Sakura vươn sang */}
      <path d="M 28 22 Q 52 26 72 40 Q 86 50 98 46" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M 50 26 Q 58 16 68 14" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 70 38 Q 76 50 74 58" strokeWidth="1.2" strokeLinecap="round" />

      {/* Bông hoa anh đào 1 */}
      <g transform="translate(68, 14) scale(0.75)">
        <circle cx="0" cy="0" r="1.5" fill="currentColor" />
        <path d="M 0 -6 C -2 -3 -2 -1 0 0 C 2 -1 2 -3 0 -6" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
        <path d="M 6 -2 C 3 -2 1 -2 0 0 C 1 2 3 2 6 -2" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
        <path d="M 4 5 C 2 3 1 1 0 0 C -1 1 -2 3 4 5" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
        <path d="M -4 5 C -2 3 -1 1 0 0 C 1 1 2 3 -4 5" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
        <path d="M -6 -2 C -3 -2 -1 -2 0 0 C -1 2 -3 2 -6 -2" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
      </g>
      {/* Bông hoa anh đào 2 */}
      <g transform="translate(86, 38) scale(0.85)">
        <circle cx="0" cy="0" r="1.5" fill="currentColor" />
        <path d="M 0 -7 Q -3 -3 0 0 Q 3 -3 0 -7" strokeWidth="1" fill="currentColor" fillOpacity="0.18" />
        <path d="M 7 -1 Q 3 -2 0 0 Q 3 2 7 -1" strokeWidth="1" fill="currentColor" fillOpacity="0.18" />
        <path d="M 4 6 Q 2 2 0 0 Q -1 3 4 6" strokeWidth="1" fill="currentColor" fillOpacity="0.18" />
        <path d="M -5 5 Q -2 2 0 0 Q 1 3 -5 5" strokeWidth="1" fill="currentColor" fillOpacity="0.18" />
        <path d="M -7 -2 Q -3 -2 0 0 Q -3 1 -7 -2" strokeWidth="1" fill="currentColor" fillOpacity="0.18" />
      </g>
      {/* Cánh hoa bay (Hanafubuki) */}
      <path d="M 58 50 Q 61 46 65 48 Q 62 52 58 50" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
      <path d="M 84 64 Q 88 60 92 62 Q 89 66 84 64" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
      <path d="M 50 76 Q 53 72 57 74 Q 54 78 50 76" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

/* 3. Phong cảnh WARNING: Rừng trúc Arashiyama & Vầng trăng rằm */
function BambooLandscape({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 100" fill="none" stroke="currentColor" aria-hidden="true">
      {/* Vầng trăng rằm bên trái, sạch sẽ không có nét đứt */}
      <circle cx="60" cy="36" r="16" fill="currentColor" fillOpacity="0.08" stroke="none" />
      <circle cx="60" cy="36" r="16" stroke="currentColor" strokeWidth="1" opacity="0.3" />

      {/* Cây trúc 1 (chính) */}
      <path d="M 108 94 L 108 70 M 108 67 L 108 45 M 108 42 L 108 20 M 108 17 L 108 8" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="105" y1="70" x2="111" y2="70" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="105" y1="45" x2="111" y2="45" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="105" y1="20" x2="111" y2="20" strokeWidth="2.5" strokeLinecap="round" />

      {/* Cây trúc 2 */}
      <path d="M 128 94 L 128 76 M 128 73 L 128 54 M 128 51 L 128 32 M 128 29 L 128 16" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="125" y1="76" x2="131" y2="76" strokeWidth="2" strokeLinecap="round" />
      <line x1="125" y1="54" x2="131" y2="54" strokeWidth="2" strokeLinecap="round" />
      <line x1="125" y1="32" x2="131" y2="32" strokeWidth="2" strokeLinecap="round" />

      {/* Cây trúc 3 (xa mờ) */}
      <path d="M 90 94 L 90 62 M 90 59 L 90 36 M 90 33 L 90 18" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
      <line x1="88" y1="62" x2="92" y2="62" strokeWidth="1.5" opacity="0.6" />
      <line x1="88" y1="36" x2="92" y2="36" strokeWidth="1.5" opacity="0.6" />

      {/* Lá trúc thanh nhã vươn ra */}
      <path d="M 109 45 Q 118 43 126 49" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 109 45 Q 120 38 130 41" strokeWidth="1.4" strokeLinecap="round" />

      <path d="M 107 20 Q 98 18 88 23" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 107 20 Q 96 13 86 15" strokeWidth="1.3" strokeLinecap="round" />

      <path d="M 129 54 Q 138 52 146 56" strokeWidth="1.3" strokeLinecap="round" />

      {/* Đồi cỏ rêu vườn thiền bên dưới */}
      <path d="M 76 94 Q 100 86 128 88 T 160 92" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

/* 4. Phong cảnh ERROR: Cổng Torii Miyajima giữa biển & Cành tùng (Đã dọn sạch vùng góc phải) */
function ToriiLandscape({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 100" fill="none" stroke="currentColor" aria-hidden="true">
      {/* Vầng thái dương đặt bên trái, không vướng nút đóng */}
      <circle cx="54" cy="40" r="16" fill="currentColor" fillOpacity="0.08" stroke="none" />
      <circle cx="54" cy="40" r="16" stroke="currentColor" strokeWidth="1" opacity="0.3" />

      {/* Cổng Torii (鳥居) ở tầm thấp hơn, không chạm góc trên */}
      <path d="M 82 48 C 96 44 120 44 134 48" strokeWidth="3" strokeLinecap="round" />
      <path d="M 84 53 C 98 49 118 49 132 53" strokeWidth="2" strokeLinecap="round" />
      {/* Xà ngang dưới */}
      <line x1="88" y1="62" x2="128" y2="62" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="108" y1="53" x2="108" y2="62" strokeWidth="1.8" />
      {/* 2 Cột chính vững chãi */}
      <line x1="94" y1="48" x2="92" y2="92" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="122" y1="48" x2="124" y2="92" strokeWidth="2.8" strokeLinecap="round" />
      {/* Chân cột */}
      <line x1="88" y1="92" x2="96" y2="92" strokeWidth="3" strokeLinecap="round" />
      <line x1="120" y1="92" x2="128" y2="92" strokeWidth="3" strokeLinecap="round" />

      {/* Cành thông cổ thụ Bonsai vươn sang (Matsu) */}
      <path d="M 28 34 Q 48 38 64 48 Q 74 54 82 52" strokeWidth="2" strokeLinecap="round" />
      <path d="M 48 38 Q 54 28 64 30" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 60 28 C 64 22 72 24 72 30 C 70 36 62 34 60 28 Z" strokeWidth="1" fill="currentColor" fillOpacity="0.12" />
      <path d="M 68 46 C 74 40 82 42 82 48 C 80 54 70 52 68 46 Z" strokeWidth="1" fill="currentColor" fillOpacity="0.12" />

      {/* Làn sóng biển Miyajima quanh chân cổng */}
      <path d="M 76 92 Q 90 88 104 92 T 132 92 T 156 92" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 84 96 Q 98 92 112 96 T 140 96" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

const landscapes: Record<AlertVariant, (props: { className?: string }) => React.ReactNode> = {
  info: (props) => <FujiLandscape {...props} />,
  success: (props) => <SakuraLandscape {...props} />,
  warning: (props) => <BambooLandscape {...props} />,
  error: (props) => <ToriiLandscape {...props} />,
};

const defaultSymbols: Record<AlertVariant, React.ReactNode> = {
  info: <InfoSymbol className="size-4" />,
  success: <SuccessBrushSymbol className="size-4" />,
  warning: <WarningTriangleSymbol className="size-4" />,
  error: <ErrorBrushSymbol className="size-4" />,
};

/* Bảng màu truyền thống Nhật Bản (Nippon Traditional Colors - 和色) */
const japaneseStyles: Record<
  AlertVariant,
  {
    container: string;
    tatamiBorder: string;
    hankoStamp: string;
    title: string;
    watermark: string;
    closeButton: string;
  }
> = {
  success: {
    container: "bg-[#F7FAF8] border-[#CFDFD4] text-[#1D3D2B] dark:bg-[#10251C] dark:border-[#2C6A49] dark:text-[#D9F3E2]",
    tatamiBorder: "bg-[#3D7A58] dark:bg-[#4CC27B]",
    hankoStamp: "bg-[#2F6647] text-white border border-[#204932] shadow-[0_1px_2px_rgba(47,102,71,0.25)] dark:bg-[#28724B] dark:border-[#4CC27B] dark:shadow-[0_1px_10px_rgba(76,194,123,0.22)]",
    title: "text-[#1C462E] dark:text-[#82E5A7]",
    watermark: "text-[#3D7A58] dark:text-[#6BD497]",
    closeButton: "text-[#52715F] hover:bg-black/5 hover:text-[#1C462E] focus:ring-[#3D7A58] dark:text-[#98B7A4] dark:hover:bg-white/10 dark:hover:text-[#D9F3E2] dark:focus:ring-[#4CC27B]",
  },
  error: {
    container: "bg-[#FDF7F7] border-[#E8C5C5] text-[#421A1C] dark:bg-[#2A161B] dark:border-[#74333E] dark:text-[#F9DFE1]",
    tatamiBorder: "bg-[#B53B42] dark:bg-[#F06A78]",
    hankoStamp: "bg-[#A32E35] text-white border border-[#7D2026] shadow-[0_1px_2px_rgba(163,46,53,0.25)] dark:bg-[#A73C4A] dark:border-[#F06A78] dark:shadow-[0_1px_10px_rgba(240,106,120,0.22)]",
    title: "text-[#7D1E24] dark:text-[#FF9CA6]",
    watermark: "text-[#B53B42] dark:text-[#F28A94]",
    closeButton: "text-[#806265] hover:bg-black/5 hover:text-[#7D1E24] focus:ring-[#B53B42] dark:text-[#C29A9E] dark:hover:bg-white/10 dark:hover:text-[#F9DFE1] dark:focus:ring-[#F06A78]",
  },
  warning: {
    container: "bg-[#FCF9F2] border-[#EADAB2] text-[#4A340C] dark:bg-[#2A2112] dark:border-[#765B26] dark:text-[#F8EBC8]",
    tatamiBorder: "bg-[#BA8218] dark:bg-[#F0B94C]",
    hankoStamp: "bg-[#A36D0B] text-white border border-[#7A4F03] shadow-[0_1px_2px_rgba(163,109,11,0.25)] dark:bg-[#A97820] dark:border-[#F0C867] dark:shadow-[0_1px_10px_rgba(240,185,76,0.2)]",
    title: "text-[#6E4602] dark:text-[#FFD57A]",
    watermark: "text-[#BA8218] dark:text-[#EFC76D]",
    closeButton: "text-[#7A6846] hover:bg-black/5 hover:text-[#6E4602] focus:ring-[#BA8218] dark:text-[#C7B889] dark:hover:bg-white/10 dark:hover:text-[#F8EBC8] dark:focus:ring-[#F0B94C]",
  },
  info: {
    container: "bg-[#F3F7FA] border-[#C3D9E9] text-[#163045] dark:bg-[#112332] dark:border-[#2B607E] dark:text-[#D6ECFA]",
    tatamiBorder: "bg-[#2E6896] dark:bg-[#57B9E8]",
    hankoStamp: "bg-[#215782] text-white border border-[#143B59] shadow-[0_1px_2px_rgba(33,87,130,0.25)] dark:bg-[#236C99] dark:border-[#57B9E8] dark:shadow-[0_1px_10px_rgba(87,185,232,0.22)]",
    title: "text-[#154266] dark:text-[#8DD8FA]",
    watermark: "text-[#2E6896] dark:text-[#75C9ED]",
    closeButton: "text-[#557080] hover:bg-black/5 hover:text-[#154266] focus:ring-[#2E6896] dark:text-[#96B8CA] dark:hover:bg-white/10 dark:hover:text-[#D6ECFA] dark:focus:ring-[#57B9E8]",
  },
};

export function Alert({
  variant = "info",
  title,
  children,
  icon,
  action,
  closable = true,
  align = "center",
  onClose,
  className = "",
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const style = japaneseStyles[variant];
  const renderedSymbol = icon !== undefined ? icon : defaultSymbols[variant];
  const LandscapeArtwork = landscapes[variant];

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  const alignClass = align === "start" ? "items-start" : "items-center";

  return (
    <div
      role="alert"
      className={`group relative flex ${alignClass} gap-4 overflow-hidden rounded-lg border pl-4 pr-3.5 py-4 sm:pl-5 sm:pr-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-200 ${style.container} ${className}`}
    >
      {/* Dải nẹp chiếu Tatami (Tatami-heri) mỏng 3.5px ở cạnh trái */}
      <span className={`absolute inset-y-0 left-0 w-[3.5px] ${style.tatamiBorder}`} aria-hidden="true" />

      {/* Tranh phong cảnh Nhật Bản chìm tinh tế - góc trên phải hoàn toàn thoáng đãng */}
      <LandscapeArtwork
        className={`pointer-events-none absolute -bottom-1 -right-1 h-24 sm:h-28 w-auto opacity-[0.14] group-hover:opacity-[0.22] transition-opacity duration-300 ${style.watermark}`}
      />

      {/* Con dấu triện Hanko (印鑑) truyền thống */}
      {renderedSymbol && (
        <div className="relative shrink-0 flex items-center justify-center z-10">
          <span
            className={`flex size-8 items-center justify-center rounded-md text-white transition-transform duration-200 hover:rotate-3 ${style.hankoStamp}`}
            aria-hidden="true"
          >
            {renderedSymbol}
          </span>
        </div>
      )}

      {/* Nội dung thông báo - KHÔNG CÒN BADGES */}
      <div className="min-w-0 flex-1 relative z-10">
        {title && (
          <h3 className={`text-[15px] font-semibold tracking-wide font-sans ${style.title}`}>
            {title}
          </h3>
        )}

        {children && (
          <div className={`text-[13.5px] text-stone-700 leading-relaxed font-sans dark:text-slate-300 ${title ? "mt-1" : ""}`}>
            {children}
          </div>
        )}

        {action && <div className="mt-2.5 flex items-center gap-2">{action}</div>}
      </div>

      {/* Nút đóng chữ X bo tròn hoàn toàn, nền trong suốt cả light và dark */}
      {closable && (
        <button
          type="button"
          onClick={handleClose}
          className={`relative z-20 shrink-0 flex size-9 sm:size-10 items-center justify-center rounded-full bg-transparent transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 active:scale-95 ${style.closeButton}`}
          aria-label="Đóng thông báo"
          title="Đóng"
        >
          <JapaneseCloseIcon className="size-5.5 sm:size-6" />
        </button>
      )}
    </div>
  );
}
