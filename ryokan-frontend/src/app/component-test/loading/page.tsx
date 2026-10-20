import { Card, Loading } from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

export default function LoadingTestPage() {
  return <TestPageLayout title="Loading" description="Kiểm thử spinner với ba kích thước."><Card title="Trạng thái tải"><div className="flex flex-col gap-6"><Loading size="sm" label="Đang tải nhanh..." /><Loading size="md" label="Đang đồng bộ dữ liệu..." /><Loading size="lg" label="Đang tải báo cáo..." /></div></Card></TestPageLayout>;
}
