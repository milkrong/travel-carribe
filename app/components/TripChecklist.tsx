'use client';

import { useEffect, useMemo, useState } from 'react';

type ChecklistItem = {
  id: string;
  text: string;
  done: boolean;
};

const STORAGE_KEY = 'trip-checklist-v1';

function generateDefaults(): ChecklistItem[] {
  const base = [
    '护照（6个月以上有效期）',
    '日本签证/团队名单确认',
    '船票/行前资料（Royal APP 已绑定）',
    '信用卡 / 日元现金',
    '手机 / 充电宝 / 数据线',
    'eSIM / 上网卡 / 国际漫游',
    '晕船药 / 常用药（退烧、肠胃、创可贴）',
    '防晒（帽子/太阳镜/防晒霜）',
    '折叠伞 / 轻便雨衣',
    '插座转换头（美标/欧标）',
    '舱房小夜灯 / 夹子（可选）',
  ];
  return base.map((text, i) => ({ id: `d-${i}`, text, done: false }));
}

export default function TripChecklist() {
  const defaults = useMemo(generateDefaults, []);
  const [items, setItems] = useState<ChecklistItem[]>(defaults);
  const [input, setInput] = useState('');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ChecklistItem[];
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, hydrated]);

  function addItem() {
    const text = input.trim();
    if (!text) return;
    setItems((prev) => [{ id: `c-${Date.now()}`, text, done: false }, ...prev]);
    setInput('');
  }

  function toggle(id: string) {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it))
    );
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }

  function clearDone() {
    setItems((prev) => prev.filter((it) => !it.done));
  }

  function resetDefaults() {
    setItems(defaults);
  }

  const doneCount = items.filter((i) => i.done).length;

  return (
    <div className="card" id="todo">
      <h2 style={{ marginTop: 0 }}>出发必备 · 代办清单</h2>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="添加自定义项目，例如：儿童证件/雨披"
          style={{
            flex: 1,
            padding: '8px 10px',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.14)',
            background: 'rgba(0,0,0,0.15)',
            color: 'inherit',
          }}
        />
        <button
          onClick={addItem}
          style={{
            padding: '8px 12px',
            borderRadius: 8,
            border: '1px solid rgba(100,210,255,0.3)',
            background: 'rgba(59,169,255,0.15)',
            color: 'inherit',
            cursor: 'pointer',
          }}
        >
          添加
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          gap: 8,
          marginBottom: 6,
          fontSize: 14,
          color: 'var(--muted)',
        }}
      >
        <span>
          已完成 {doneCount} / {items.length}
        </span>
        <span aria-hidden>·</span>
        <button
          onClick={clearDone}
          style={{
            background: 'transparent',
            color: 'inherit',
            border: 'none',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          清除已完成
        </button>
        <span aria-hidden>·</span>
        <button
          onClick={resetDefaults}
          style={{
            background: 'transparent',
            color: 'inherit',
            border: 'none',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          恢复默认清单
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '6px 2px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggle(item.id)}
              aria-label={item.text}
            />
            <span
              style={{
                flex: 1,
                textDecoration: item.done ? 'line-through' : 'none',
                opacity: item.done ? 0.65 : 1,
              }}
            >
              {item.text}
            </span>
            <button
              onClick={() => remove(item.id)}
              aria-label="删除"
              title="删除"
              style={{
                background: 'transparent',
                color: 'inherit',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
