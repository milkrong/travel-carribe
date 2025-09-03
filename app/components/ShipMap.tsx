'use client';

import { useState } from 'react';

// 船舶地图（甲板导览）- 移动端优先：
// - 默认在卡片内可滚动查看（双指即可缩放，依赖浏览器手势）
// - 支持点击“全屏查看”进入沉浸式查看，点击遮罩或关闭按钮退出

export default function ShipMap() {
  const [open, setOpen] = useState(false);
  const imgSrc = '/mmexport8e3d455f9c39fef99d9d6887080d12a9_1756890074427.png';

  return (
    <section id="ship-map" className="card">
      <h2 style={{ marginTop: 0 }}>船舶地图 · 光谱号甲板导览</h2>
      <p className="subtitle" style={{ marginTop: -6 }}>
        提示：在下方可横向/纵向滚动查看细节，手机上可使用双指缩放；需要更大视野可点“全屏查看”。
      </p>

      <div className="img-scroll">
        <img
          src={imgSrc}
          alt="海洋光谱号登船指南与甲板示意图"
          loading="lazy"
          decoding="async"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
        <button className="cal-nav" onClick={() => setOpen(true)}>全屏查看</button>
        <a className="cal-nav" href={imgSrc} download>
          下载图片
        </a>
      </div>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <button
            className="lightbox-close"
            aria-label="关闭"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
          <div className="lightbox-body" onClick={(e) => e.stopPropagation()}>
            <img
              src={imgSrc}
              alt="海洋光谱号登船指南与甲板示意图（全屏）"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
