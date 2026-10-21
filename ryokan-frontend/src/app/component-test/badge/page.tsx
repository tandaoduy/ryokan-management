import { Badge, Card } from "../../../components";
import { TestPageLayout } from "../_components/TestPageLayout";

const variants = ["neutral", "info", "success", "warning", "danger"] as const;

export default function BadgeTestPage() {
  return <TestPageLayout title="Badge" description="Nhãn trạng thái với nhiều màu và cách thể hiện."><div className="flex flex-col gap-6">{(["soft", "solid", "outline"] as const).map((appearance) => <Card key={appearance} title={`Dạng ${appearance}`}><div className="flex flex-wrap gap-3">{variants.map((variant) => <Badge key={variant} variant={variant} appearance={appearance}>{variant}</Badge>)}</div></Card>)}</div></TestPageLayout>;
}
