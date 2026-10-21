"use client";

import { useState } from "react";
import { Badge, Button, ButtonGroup, Card } from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

const AlignLeft = <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4"><path d="M3 4h10M3 8h14M3 12h10M3 16h14" strokeLinecap="round" /></svg>;
const AlignCenter = <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4"><path d="M5 4h10M3 8h14M5 12h10M3 16h14" strokeLinecap="round" /></svg>;
const AlignRight = <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4"><path d="M7 4h10M3 8h14M7 12h10M3 16h14" strokeLinecap="round" /></svg>;

export default function ButtonGroupTestPage() {
  const [alignment, setAlignment] = useState("left");
  return <TestPageLayout title="Button Group" description="Nhóm Button liền cạnh theo Flowbite, dùng cho hành động liên quan, icon toolbar và lựa chọn trạng thái."><div className="flex flex-col gap-6"><Card title="Nhóm mặc định"><ButtonGroup ariaLabel="Điều hướng hồ sơ"><Button appearance="soft">Hồ sơ</Button><Button appearance="soft">Cài đặt</Button><Button appearance="soft">Tin nhắn</Button></ButtonGroup></Card><Card title="Hành động với thông tin"><div className="flex flex-wrap gap-5"><ButtonGroup ariaLabel="Tải xuống"><Button leftIcon={<span aria-hidden="true">↓</span>} appearance="outline">Tải xuống</Button><Button appearance="outline" disabled>456k</Button></ButtonGroup><ButtonGroup ariaLabel="Tin nhắn"><Button appearance="soft">Tin nhắn <Badge size="sm" variant="danger">2</Badge></Button><Button aria-label="Mở tùy chọn" appearance="soft">⌄</Button></ButtonGroup></div></Card><Card title="Icon toolbar"><ButtonGroup ariaLabel="Căn chỉnh văn bản">{[["left", AlignLeft, "Căn trái"], ["center", AlignCenter, "Căn giữa"], ["right", AlignRight, "Căn phải"]].map(([key, icon, label]) => <Button key={key as string} aria-label={label as string} title={label as string} appearance={alignment === key ? "solid" : "soft"} onClick={() => setAlignment(key as string)} className="!min-h-10 !w-10 !px-0">{icon}</Button>)}</ButtonGroup></Card><Card title="Nhóm dọc"><ButtonGroup orientation="vertical" ariaLabel="Tác vụ đặt phòng"><Button appearance="outline">Chỉnh sửa đặt phòng</Button><Button appearance="outline">Sao chép mã</Button><Button appearance="soft" variant="danger">Hủy đặt phòng</Button></ButtonGroup></Card></div></TestPageLayout>;
}
