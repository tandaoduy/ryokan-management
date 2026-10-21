import { Card } from "../../../components"; import { TestPageLayout } from "../_components/TestPageLayout"; import { DrawerDemo } from "./DrawerDemo";
export default function Page() { return <TestPageLayout title="Drawer" description="Panel trượt từ trái, phải hoặc dưới lên."><Card title="Các vị trí"><DrawerDemo /></Card></TestPageLayout>; }
