type WeatherResponse = {
  current_weather?: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
  };
};

async function fetchCurrentWeather(lat: number, lon: number) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;
  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) return null;
  const data = (await res.json()) as WeatherResponse;
  return data.current_weather ?? null;
}

function codeToText(code: number): string {
  const map: Record<number, string> = {
    0: '晴',
    1: '多云',
    2: '多云',
    3: '阴',
    45: '雾',
    48: '雾',
    51: '毛毛雨',
    53: '毛毛雨',
    55: '毛毛雨',
    61: '小雨',
    63: '中雨',
    65: '大雨',
    71: '小雪',
    73: '中雪',
    75: '大雪',
    80: '阵雨',
    81: '阵雨',
    82: '强阵雨',
    95: '雷阵雨',
    96: '雷阵雨（冰雹）',
    99: '雷阵雨（强冰雹）',
  };
  return map[code] ?? '—';
}

export default async function LiveWeather() {
  const [kagoshima, naha] = await Promise.all([
    fetchCurrentWeather(31.6, 130.55), // 鹿儿岛
    fetchCurrentWeather(26.2125, 127.6811), // 那霸
  ]);

  return (
    <div className="grid" style={{ marginTop: 8 }}>
      <div className="card">
        <h3>鹿儿岛 · 实时天气</h3>
        {kagoshima ? (
          <ul>
            <li>气温：{kagoshima.temperature}°C</li>
            <li>
              风速：{kagoshima.windspeed} m/s（风向 {kagoshima.winddirection}°）
            </li>
            <li>概况：{codeToText(kagoshima.weathercode)}</li>
            <li>时间：{new Date(kagoshima.time).toLocaleString()}</li>
          </ul>
        ) : (
          <div className="notice">暂未获取到鹿儿岛天气</div>
        )}
      </div>
      <div className="card">
        <h3>那霸 · 实时天气</h3>
        {naha ? (
          <ul>
            <li>气温：{naha.temperature}°C</li>
            <li>
              风速：{naha.windspeed} m/s（风向 {naha.winddirection}°）
            </li>
            <li>概况：{codeToText(naha.weathercode)}</li>
            <li>时间：{new Date(naha.time).toLocaleString()}</li>
          </ul>
        ) : (
          <div className="notice">暂未获取到那霸天气</div>
        )}
      </div>
    </div>
  );
}
