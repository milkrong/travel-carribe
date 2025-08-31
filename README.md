# 皇家加勒比 9/26 上海-鹿儿岛-冲绳 5 天 4 晚 攻略（Next.js）

一页式攻略，含出发准备、登船流程、船上攻略与鹿儿岛/冲绳上岸路线。已迁移为 Next.js（App Router）。

## 本地开发与构建（Next.js）

```bash
cd /Users/rongkailiu/code/travel-carribe
corepack enable && corepack prepare pnpm@9.12.2 --activate # 或使用 npm/yarn
pnpm install
pnpm dev # http://localhost:5173

# 生产构建（standalone，用于容器）
pnpm build
```

## 使用 Docker Compose 部署

### 一键启动（本地）

```bash
cd /Users/rongkailiu/code/travel-carribe
docker compose up --build -d
# 访问 http://localhost:5173
```

### 停止与查看日志

```bash
docker compose logs -f
docker compose down
```

### 生产镜像构建（可选）

```bash
docker build -t travel-carribe:latest .
docker run -d -p 5173:3000 --name travel-carribe travel-carribe:latest
```

## 目录结构

```
/Users/rongkailiu/code/travel-carribe
├── app/
│  ├── layout.tsx
│  ├── page.tsx
│  └── not-found.tsx
├── app/globals.css
├── Dockerfile
├── .dockerignore
├── docker-compose.yml
├── next.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## 版权与免责声明

- 本攻略为非官方参考信息，所有时间/价格/线路以当日实际与官方通知为准。
- 请根据个人情况与天气安全评估安排行程，保管好证件与财物，务必预留返船时间缓冲以避免误船。
