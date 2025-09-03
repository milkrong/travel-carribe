'use client';

import { useMemo, useState } from 'react';

type ShowEvent = {
  id: string;
  date: string; // YYYY-MM-DD
  start: string; // HH:mm
  end?: string; // HH:mm
  title: string;
  venue: string;
  note?: string;
  tags?: string[];
  reservation?: 'required' | 'recommended' | 'walkin';
};

function parseYMD(ymd: string): Date {
  const [y, m, d] = ymd.split('-').map((n) => parseInt(n, 10));
  return new Date(y, (m || 1) - 1, d || 1);
}

function ymd(d: Date): string {
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate()}`.padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function endOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}
function addDays(d: Date, days: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + days);
  return x;
}

function monthGrid(viewDate: Date) {
  const start = startOfMonth(viewDate);
  const end = endOfMonth(viewDate);
  const startWeekday = (start.getDay() + 6) % 7; // ISO: Mon=0
  const gridStart = addDays(start, -startWeekday);
  const total = 42; // 6 rows
  return Array.from({ length: total }, (_, i) => addDays(gridStart, i));
}

const defaultEvents: ShowEvent[] = [
  // 2025-09-26 登船日（上海）
  {
    id: 'e1',
    date: '2025-09-26',
    start: '19:30',
    title: '欢迎登船秀 · Welcome Aboard',
    venue: '主剧院 Theatre',
    tags: ['全家'],
    reservation: 'walkin',
  },
  {
    id: 'e2',
    date: '2025-09-26',
    start: '21:30',
    title: '甲板启航派对',
    venue: '泳池甲板',
    tags: ['派对'],
    reservation: 'walkin',
  },
  // 2025-09-27 海上巡航
  {
    id: 'e3',
    date: '2025-09-27',
    start: '16:00',
    title: 'Two70 视觉秀',
    venue: 'Two70° 景观厅',
    tags: ['视觉'],
    reservation: 'recommended',
    note: '建议提前在 APP 预约'
  },
  {
    id: 'e4',
    date: '2025-09-27',
    start: '19:00',
    end: '19:45',
    title: '主剧院歌舞秀 第一场',
    venue: '主剧院 Theatre',
    tags: ['歌舞'],
    reservation: 'walkin',
  },
  {
    id: 'e5',
    date: '2025-09-27',
    start: '21:00',
    end: '21:45',
    title: '主剧院歌舞秀 第二场',
    venue: '主剧院 Theatre',
    tags: ['歌舞'],
    reservation: 'walkin',
  },
  // 2025-09-28 鹿儿岛
  {
    id: 'e6',
    date: '2025-09-28',
    start: '18:30',
    title: '魔术与喜剧之夜 第一场',
    venue: '主剧院 Theatre',
    tags: ['喜剧', '魔术'],
    reservation: 'walkin',
  },
  {
    id: 'e7',
    date: '2025-09-28',
    start: '20:30',
    title: '魔术与喜剧之夜 第二场',
    venue: '主剧院 Theatre',
    tags: ['喜剧', '魔术'],
    reservation: 'walkin',
  },
  // 2025-09-29 那霸
  {
    id: 'e8',
    date: '2025-09-29',
    start: '17:30',
    title: '家庭电影 · Family Movie',
    venue: '泳池巨幕（天气良好）',
    tags: ['亲子'],
    reservation: 'walkin',
  },
  {
    id: 'e9',
    date: '2025-09-29',
    start: '20:00',
    title: 'Karaoke 之夜 · 决赛',
    venue: '酒吧舞台',
    tags: ['派对'],
    reservation: 'walkin',
  },
  // 2025-09-30 抵沪（清晨）
  {
    id: 'e10',
    date: '2025-09-30',
    start: '08:00',
    title: '告别早茶 · 轻音乐',
    venue: '音乐廊',
    tags: ['轻松'],
    reservation: 'walkin',
  },
];

export default function ShowCalendar({ events = defaultEvents }: { events?: ShowEvent[] }) {
  const initial = useMemo(() => startOfMonth(parseYMD(events[0]?.date || ymd(new Date()))), [events]);
  const [viewDate, setViewDate] = useState<Date>(initial);
  const [selectedDate, setSelectedDate] = useState<string>(events[0]?.date || ymd(new Date()));

  const grid = useMemo(() => monthGrid(viewDate), [viewDate]);
  const monthLabel = `${viewDate.getFullYear()}年${viewDate.getMonth() + 1}月`;

  const byDate = useMemo(() => {
    const map = new Map<string, ShowEvent[]>();
    for (const ev of events) {
      const key = ev.date;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(ev);
    }
    for (const [, arr] of map) {
      arr.sort((a, b) => a.start.localeCompare(b.start));
    }
    return map;
  }, [events]);

  const selectedEvents = byDate.get(selectedDate) || [];

  function prevMonth() {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  }
  function nextMonth() {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  }

  const todayStr = ymd(new Date());

  return (
    <div className="card" id="shows">
      <h2 style={{ marginTop: 0 }}>演出日历</h2>
      <div className="cal-header">
        <button className="cal-nav" onClick={prevMonth} aria-label="上个月">←</button>
        <div className="cal-title">{monthLabel}</div>
        <button className="cal-nav" onClick={nextMonth} aria-label="下个月">→</button>
      </div>
      <div className="cal-weekdays">
        <span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span>
      </div>
      <div className="cal-grid" role="grid" aria-label={monthLabel}>
        {grid.map((d) => {
          const dateStr = ymd(d);
          const inMonth = d.getMonth() === viewDate.getMonth();
          const hasEvents = (byDate.get(dateStr)?.length || 0) > 0;
          const isToday = dateStr === todayStr;
          const isSelected = dateStr === selectedDate;
          return (
            <button
              key={dateStr}
              className={
                'cal-cell' +
                (inMonth ? '' : ' cal-cell--other') +
                (isToday ? ' cal-cell--today' : '') +
                (isSelected ? ' cal-cell--selected' : '')
              }
              onClick={() => setSelectedDate(dateStr)}
              aria-pressed={isSelected}
            >
              <span className="cal-daynum">{d.getDate()}</span>
              {hasEvents && <span className="cal-dot" aria-hidden>•</span>}
            </button>
          );
        })}
      </div>

      <div className="event-list">
        <div className="event-list__title">
          {selectedDate} · {byDate.get(selectedDate)?.length || 0} 场演出
        </div>
        {selectedEvents.length === 0 ? (
          <div className="notice">当日暂无收录的演出安排（以船上 APP 当日行程为准）。</div>
        ) : (
          <ul>
            {selectedEvents.map((ev) => (
              <li key={ev.id} className="event-item">
                <div className="event-time">
                  <span>{ev.start}</span>
                  {ev.end ? <span> - {ev.end}</span> : null}
                </div>
                <div className="event-main">
                  <div className="event-title">{ev.title}</div>
                  <div className="event-meta">
                    <span className="badge badge--venue">{ev.venue}</span>
                    {ev.tags?.map((t) => (
                      <span key={t} className="badge">{t}</span>
                    ))}
                    {ev.reservation === 'required' && (
                      <span className="badge badge--warn">需预约</span>
                    )}
                    {ev.reservation === 'recommended' && (
                      <span className="badge badge--accent">建议预约</span>
                    )}
                  </div>
                  {ev.note ? <div className="event-note">{ev.note}</div> : null}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
