import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '皇家加勒比 9/26 上海-鹿儿岛-冲绳 5天4晚 攻略',
  description:
    '皇家加勒比 9/26 上海吴淞口出发，鹿儿岛与冲绳（那霸）5天4晚行程。登船与下船流程、船上攻略、上岸游路线、交通与预算、注意事项，一页全懂，可直接部署到腾讯云。',
  keywords: [
    '皇家加勒比',
    '邮轮攻略',
    '鹿儿岛',
    '冲绳',
    '那霸',
    '吴淞口',
    '上岸',
    '岸上',
    '行程',
    '9月26日',
  ],
  openGraph: {
    type: 'website',
    title: '皇家加勒比 9/26 上海-鹿儿岛-冲绳 5天4晚 攻略',
    description: '登船与下船流程、船上攻略、上岸游路线、交通与预算、注意事项。',
    locale: 'zh_CN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
