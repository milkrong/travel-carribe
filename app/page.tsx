import LiveWeather from './components/LiveWeather';
import TripChecklist from './components/TripChecklist';

export default function Page() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <h1>皇家加勒比 9/26 上海-鹿儿岛-冲绳 5天4晚 攻略</h1>
          <p className="subtitle">
            船名：海洋光谱号 · 出发港：上海吴淞口国际邮轮港 · 船上 & 岸上全攻略
          </p>
          <nav className="site-nav">
            <a href="#prep">出发前准备</a>
            <a href="#embark">登船流程</a>
            <a href="#onboard">船上攻略</a>
            <a href="#itinerary">行程与靠港</a>
            <a href="#kagoshima">鹿儿岛上岸</a>
            <a href="#okinawa">冲绳（那霸）上岸</a>
            <a href="#weather">天气安全</a>
            <a href="#faq">常见问题</a>
            <a
              href="https://www.rcclchina.com.cn/Rccl.Cruise/CruiseDetail?shipCode=SC&sailDate=2025-09-26"
              target="_blank"
              rel="noopener"
            >
              官方行程
            </a>
          </nav>
        </div>
      </header>

      <main className="container">
        <TripChecklist />
        <section className="notice">
          <strong>说明：</strong> 以下时间为参考范例，最终以行前邮件 /
          皇家APP船期与当日“上船最后时间 All aboard”通知为准。
        </section>

        <section id="prep">
          <h2>出发前准备</h2>
          <ul>
            <li>
              <strong>证件</strong>
              ：护照原件（6个月以上有效期）、日本签证（部分航次可免签以团队名单制为准，按旅行社通知）。
            </li>
            <li>
              <strong>健康/保险</strong>
              ：建议购买含境外医疗与行程延误的保险；常备药（晕船药、退烧止痛、肠胃药）。
            </li>
            <li>
              <strong>网络</strong>：日本 eSIM/实体卡（推荐）、邮轮船上 Wi‑Fi
              套餐（价格较高，需在APP或登船后购买）。
            </li>
            <li>
              <strong>货币</strong>
              ：日元现金少量（1万–2万日元/家庭）；日本普遍支持信用卡。
            </li>
            <li>
              <strong>行李</strong>
              ：插座转接（邮轮多为美标/欧标）、轻便雨具、防晒、防蚊、溯溪凉鞋（足浴/海边）。
            </li>
            <li>
              <strong>APP</strong>：下载 Royal Caribbean APP
              绑定订单，用于查看每日日程、岸上集合与上船时间。
            </li>
          </ul>
        </section>

        <section id="embark">
          <h2>登船流程（上海吴淞口）</h2>
          <ol>
            <li>
              按船票/APP显示的批次到达 <strong>吴淞口国际邮轮港</strong>
              （建议提前30–60分钟）。
            </li>
            <li>托运行李（系上行李牌），随身携带贵重物品与当日必需品。</li>
            <li>安检与证件查验，核验船票、护照、签证/名单。</li>
            <li>
              领取船卡
              SeaPass（房卡/消费卡），登船后可进入舱房或先公共区域等候。
            </li>
            <li>
              按广播/指引完成<strong>安全演习</strong>
              （可在APP内观看视频并到集合点打卡）。
            </li>
          </ol>
          <div className="tip">
            小贴士：登船日自助餐较拥挤，可错峰前往；提前预约特色餐可分散客流。
          </div>
        </section>

        <section id="onboard">
          <h2>船上攻略</h2>
          <div className="grid">
            <div className="card">
              <h3>餐饮</h3>
              <ul>
                <li>免费：自助餐厅、主餐厅、部分小吃吧。</li>
                <li>收费：特色餐厅、酒水套餐、咖啡特饮；部分需预约。</li>
                <li>用餐着装：主餐厅晚餐建议休闲正装，特色餐视要求而定。</li>
              </ul>
            </div>
            <div className="card">
              <h3>娱乐与活动</h3>
              <ul>
                <li>剧场演出、甲板活动、健身房、泳池与热水池。</li>
                <li>儿童俱乐部（分龄托管与活动，按开放时间报名）。</li>
                <li>每日行程表请看 APP 与舱内节目单。</li>
              </ul>
            </div>
            <div className="card">
              <h3>网络与通讯</h3>
              <ul>
                <li>
                  邮轮 Wi‑Fi
                  价格较高，按天/按设备收费；到日本港口优先使用当地漫游/卡。
                </li>
                <li>国际漫游：确认运营商日本资费；关闭不必要的漫游数据。</li>
              </ul>
            </div>
            <div className="card">
              <h3>消费与小费</h3>
              <ul>
                <li>船上消费走房卡记账，最终统一到绑定信用卡结算。</li>
                <li>
                  服务费/小费：多数航次已含或按天计入账单，请留意船票说明。
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="itinerary">
          <h2>行程与靠港（参考）</h2>
          <p className="subtitle">
            官方行程链接：
            <a
              href="https://www.rcclchina.com.cn/Rccl.Cruise/CruiseDetail?shipCode=SC&sailDate=2025-09-26"
              target="_blank"
              rel="noopener"
            >
              rcclchina.com.cn
            </a>
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>日期</th>
                  <th>港口</th>
                  <th>到港</th>
                  <th>离港</th>
                  <th>备注</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>9/26（周四）</td>
                  <td>上海 · 吴淞口</td>
                  <td>—</td>
                  <td>傍晚启航</td>
                  <td>按登船批次办理登船</td>
                </tr>
                <tr>
                  <td>9/27（周五）</td>
                  <td>海上巡航</td>
                  <td>—</td>
                  <td>—</td>
                  <td>享受船上设施与演出</td>
                </tr>
                <tr>
                  <td>9/28（周六）</td>
                  <td>日本 · 鹿儿岛</td>
                  <td>上午</td>
                  <td>傍晚</td>
                  <td>预计上岸 6–8 小时</td>
                </tr>
                <tr>
                  <td>9/29（周日）</td>
                  <td>日本 · 冲绳（那霸）</td>
                  <td>上午</td>
                  <td>傍晚</td>
                  <td>预计上岸 7–9 小时</td>
                </tr>
                <tr>
                  <td>9/30（周一）</td>
                  <td>返抵上海</td>
                  <td>清晨</td>
                  <td>—</td>
                  <td>分批下船，按行李牌颜色</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tip">
            务必预留返船时间缓冲：<strong>最晚返船前60–90分钟</strong>{' '}
            开始往港口返程，避免误船。
          </div>
        </section>

        <section id="weather">
          <h2>天气与行程安全</h2>
          {/* 实时天气组件（Open-Meteo） */}
          <LiveWeather />
          <div className="grid">
            <div className="card">
              <h3>实时查询（官方）</h3>
              <ul>
                <li>
                  <a
                    href="https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=460000"
                    target="_blank"
                    rel="noopener"
                  >
                    日本气象厅·鹿儿岛预报（JMA）
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=471000"
                    target="_blank"
                    rel="noopener"
                  >
                    日本气象厅·冲绳/那霸预报（JMA）
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.windy.com/?24.341,129.867,6,m:gust,overlay=wind"
                    target="_blank"
                    rel="noopener"
                  >
                    Windy 风力/阵风图（海域风浪参考）
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.jma.go.jp/bosai/map.html#5/26.820/131.934/&elem=warning&typhoon=all"
                    target="_blank"
                    rel="noopener"
                  >
                    日本气象厅·警报与台风信息
                  </a>
                </li>
              </ul>
            </div>
            <div className="card">
              <h3>判读与提醒</h3>
              <ul>
                <li>
                  风速≥12m/s（6级风）或阵风≥15m/s，海上体感明显，甲板活动可能关闭。
                </li>
                <li>
                  降雨/雷暴黄色以上预警，岸上行程以室内/短线为主，预留返船时间。
                </li>
                <li>
                  台风接近时，航线与靠港可能调整，以船方广播与 APP 通知为准。
                </li>
              </ul>
            </div>
            <div className="card">
              <h3>行前/当天安全清单</h3>
              <ul>
                <li>出发前 24 小时：查看 JMA 预报与台风路径。</li>
                <li>当天早晨：确认靠港城市当日降雨/风力与体感温度。</li>
                <li>随身：雨具、防晒、便携药品；鞋底防滑。</li>
                <li>返船：最晚前 60–90 分钟启程回港，避免误船。</li>
              </ul>
            </div>
          </div>
          <div className="notice" style={{ marginTop: 12 }}>
            如遇大风大雨或台风影响，请优先遵循船方与港方的安全指引与调整安排。
          </div>
        </section>

        <section id="kagoshima">
          <h2>鹿儿岛（Kagoshima）上岸攻略</h2>
          <p>
            常见停靠：<strong>鹿儿岛新港</strong>
            。多有港口接驳巴士至市区（如至鹿儿岛中央站/天文馆），船方与港方当日会在码头公布。
          </p>
          <h3>推荐路线（择一或组合）</h3>
          <ul>
            <li>
              <strong>樱岛半日</strong>：新港乘巴士/渡轮前往 <em>樱岛</em> →{' '}
              <em>足汤</em> → <em>有村展望台</em>
              。时间：3–4小时；交通：港口接驳→市区→渡轮，单向200–500日元。
            </li>
            <li>
              <strong>仙岩园 + 城山展望台</strong>：<em>仙岩园</em>
              （日式庭园，可远眺樱岛）→ <em>城山展望台</em> →{' '}
              <em>天文馆商店街</em>。门票：千日元级别；公交便捷。
            </li>
            <li>
              <strong>市区慢逛</strong>：<em>维新故乡馆</em> → <em>照国神社</em>{' '}
              → <em>天文馆</em>，美食可尝 <em>黑猪肉炸猪排</em>、<em>白熊冰</em>
              。
            </li>
          </ul>
          <h3>交通与预算</h3>
          <ul>
            <li>
              公交/市电一日券约500–700日元，现金或IC卡（Suica/ICOCA）视兼容性。
            </li>
            <li>出租车起步约500–700日元，市区点到点 1,000–2,500日元。</li>
          </ul>
          <div className="warning">
            注意：若遇火山活动/天气，樱岛个别步道或观景点可能临时关闭，现场以官方告示为准。
          </div>
        </section>

        <section id="okinawa">
          <h2>冲绳（那霸 Naha）上岸攻略</h2>
          <p>
            常见停靠：<strong>泊港/若狭/那霸新港</strong> 区域。通常有
            <strong>穿梭巴士</strong>至市区或 <em>单轨电车（Yui Rail）</em>{' '}
            站点附近。
          </p>
          <h3>推荐路线（择一）</h3>
          <ul>
            <li>
              <strong>国际通精华半日</strong>：<em>县厅前/美荣桥站</em> →{' '}
              <em>国际通逛街</em> → <em>牧志公设市场</em> → 可延伸至{' '}
              <em>波上宫</em>（海边神社）。
            </li>
            <li>
              <strong>首里城文化线</strong>：<em>乘单轨至首里站</em> → 步行{' '}
              <em>首里城公园</em>（重建中，仍可参观城门与周边）→{' '}
              <em>金城町石叠道</em>。
            </li>
            <li>
              <strong>青之洞潜浮/海滩</strong>：报名当地半日海上活动，或前往{' '}
              <em>波上宫海滩</em>/<em>Sunset Beach</em>{' '}
              轻松玩水（注意返船时间）。
            </li>
          </ul>
          <h3>交通与预算</h3>
          <ul>
            <li>单轨电车日票约800–1,200日元；站点覆盖市区主景点。</li>
            <li>出租车市区 1,000–3,000日元/程；多人拼车划算。</li>
            <li>
              远距离如 <em>美丽海水族馆</em>{' '}
              单程约2小时，不建议当日往返（误船风险高）。
            </li>
          </ul>
          <div className="tip">
            美食：冲绳荞麦面、海葡萄、苦瓜炒蛋、塔可饭；伴手礼可选紫薯点心、黑糖、泡盛。
          </div>
        </section>

        <section id="faq">
          <h2>常见问题</h2>
          <details>
            <summary>上岸需要带什么？</summary>
            <p>
              带护照、房卡、少量现金/信用卡、手机与充电宝、雨具与防晒。无需携带船上毛巾（可借用岸上毛巾点）。
            </p>
          </details>
          <details>
            <summary>是否需要日本签证？</summary>
            <p>
              按航次与旅行社政策可能走团队名单制或个人签证。以出发前旅行社与船司书面通知为准。
            </p>
          </details>
          <details>
            <summary>如何避免晕船？</summary>
            <p>
              出发前晚睡眠充足，随船带晕船药或耳贴；选择中后部低楼层活动；甲板强风时避免久留。
            </p>
          </details>
          <details>
            <summary>船上能用电热壶吗？</summary>
            <p>
              通常不允许自带加热电器；可向客房服务索取热水，或前往自助餐厅取用。
            </p>
          </details>
        </section>

        <footer className="site-footer">
          <p>
            最后更新：<time dateTime="2025-08-31">2025-08-31</time> ·
            非官方攻略，信息以实际当日为准。
          </p>
          <p>可部署至腾讯云 COS/Serverless Framework · 本页开源于本项目目录</p>
        </footer>
      </main>
    </>
  );
}
