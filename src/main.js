import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="site-shell">
    <div class="noise"></div>
    <header class="topbar reveal">
      <a class="brand" href="#hero">
        <span class="brand-mark">OC</span>
        <span class="brand-copy">
          <strong>OpenClaw Manager Native</strong>
          <small>macOS 原生管理台</small>
        </span>
      </a>
      <nav class="nav-links">
        <a href="#capabilities">能力</a>
        <a href="#workflow">流程</a>
        <a href="#security">本地性</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a class="nav-cta" href="#cta">开始测试</a>
    </header>

    <main>
      <section class="hero" id="hero">
        <div class="hero-copy reveal reveal-delay-1">
          <p class="eyebrow">OPENCLAW / CODEX WORKFLOW</p>
          <h1>把散落在本机里的 OpenClaw 与 Codex 配置，收拢成一个真正能用的原生工作台。</h1>
          <p class="hero-text">
            OpenClaw Manager Native 面向 macOS，专门解决多 profile、目录分散、手动切换、登录回调和本地运行环境维护这些日常问题。它本地运行、不依赖 Docker、不要求额外安装 Node。
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#cta">获取测试包</a>
            <a class="button button-ghost" href="#workflow">查看工作方式</a>
          </div>
          <ul class="hero-points">
            <li>macOS 原生桌面应用</li>
            <li>支持 OpenClaw / Codex 根目录自定义</li>
            <li>本地 profile 管理、状态查看与切换</li>
          </ul>
        </div>

        <div class="hero-visual reveal reveal-delay-2">
          <div class="device-frame">
            <div class="device-toolbar">
              <span></span><span></span><span></span>
              <p>OpenClaw Manager Native</p>
            </div>
            <div class="device-body">
              <div class="panel panel-signal">
                <span class="panel-label">ACTIVE PROFILE</span>
                <strong>acct-b</strong>
                <small>Codex 与 OpenClaw 已同步</small>
              </div>
              <div class="stat-grid">
                <article class="mini-stat">
                  <span>运行方式</span>
                  <strong data-count="1">0</strong>
                  <small>本地原生 app</small>
                </article>
                <article class="mini-stat">
                  <span>目录切换</span>
                  <strong data-count="2">0</strong>
                  <small>OpenClaw / Codex</small>
                </article>
                <article class="mini-stat">
                  <span>核心原则</span>
                  <strong data-count="100">0</strong>
                  <small>配置保留在本机</small>
                </article>
              </div>
              <div class="panel feature-lineup">
                <div>
                  <span class="badge healthy">Healthy</span>
                  <p>acct-c</p>
                </div>
                <div>
                  <span class="badge draining">Draining</span>
                  <p>default</p>
                </div>
                <div>
                  <span class="badge native">Native</span>
                  <p>WKWebView + Node runtime</p>
                </div>
              </div>
              <div class="panel console-panel">
                <code>[native] runtime ready ui=3101 callback=1455</code>
                <code>[manager-api] /api/openclaw/manager -> 200</code>
                <code>[manager-ui] /__native_ui_health -> ok</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="trust-strip reveal">
        <div>
          <strong>为本地工作流而设计</strong>
          <span>不是远程账号池，不是共享服务面板，而是你自己机器上的原生控制台。</span>
        </div>
        <div>
          <strong>适合对象</strong>
          <span>需要频繁维护 OpenClaw / Codex 本地环境的开发者、团队内部工具作者和高频使用者。</span>
        </div>
      </section>

      <section class="section capabilities" id="capabilities">
        <div class="section-heading reveal">
          <p class="eyebrow">CAPABILITIES</p>
          <h2>官网不是在讲概念，而是在解释它具体替你省掉什么。</h2>
        </div>
        <div class="card-grid">
          <article class="feature-card reveal reveal-delay-1">
            <span class="feature-index">01</span>
            <h3>本地 profile 管理</h3>
            <p>把 <code>.openclaw</code>、<code>.openclaw-*</code>、<code>.codex</code>、<code>.codex-*</code> 从散乱目录里整理成一个统一入口，减少手工切目录和覆盖配置的成本。</p>
          </article>
          <article class="feature-card reveal reveal-delay-2">
            <span class="feature-index">02</span>
            <h3>原生目录配置</h3>
            <p>直接在 macOS 菜单里选择 OpenClaw 与 Codex 根目录，不需要让用户自己翻隐藏文件夹或手改 JSON。</p>
          </article>
          <article class="feature-card reveal reveal-delay-3">
            <span class="feature-index">03</span>
            <h3>内置运行时</h3>
            <p>应用自带需要的 Node 运行时与本地 manager 逻辑。对最终用户来说，不需要 Docker，也不要求另外装 Node。</p>
          </article>
          <article class="feature-card reveal reveal-delay-1">
            <span class="feature-index">04</span>
            <h3>状态面板</h3>
            <p>集中查看 active profile、Codex 配置、OpenClaw 状态、自动切换逻辑与本地运行链路，减少“到底现在用了哪个账号”的不确定性。</p>
          </article>
          <article class="feature-card reveal reveal-delay-2">
            <span class="feature-index">05</span>
            <h3>面向交付</h3>
            <p>支持 <code>.app</code>、<code>.zip</code>、<code>.dmg</code> 分发链路，后续可继续接 <code>Developer ID</code>、notarization 与正式商用分发流程。</p>
          </article>
          <article class="feature-card reveal reveal-delay-3">
            <span class="feature-index">06</span>
            <h3>第三方本地工具定位</h3>
            <p>它是一个运行在用户自己电脑上的本地管理工具，不托管用户凭据，不把配置数据发往第三方服务器。</p>
          </article>
        </div>
      </section>

      <section class="section compare-section" id="workflow">
        <div class="workflow-layout">
          <div class="workflow-copy reveal">
            <p class="eyebrow">WORKFLOW</p>
            <h2>从“手工改目录 + 手工跑命令”变成一个能解释自身状态的原生工具。</h2>
            <ol class="timeline">
              <li>
                <strong>安装 app</strong>
                <span>拖入 Applications，首次打开后即可看到本地管理界面。</span>
              </li>
              <li>
                <strong>选择根目录</strong>
                <span>通过原生菜单指定 OpenClaw / Codex 根目录，不需要碰隐藏文件。</span>
              </li>
              <li>
                <strong>查看并切换 profile</strong>
                <span>在同一界面里管理 active profile、状态、同步关系和本地运行结果。</span>
              </li>
            </ol>
          </div>
          <div class="compare-card reveal reveal-delay-2">
            <div class="compare-head">
              <p>过去</p>
              <p>现在</p>
            </div>
            <div class="compare-row">
              <span>到处找 <code>.openclaw</code> / <code>.codex</code></span>
              <strong>菜单选择根目录，界面统一查看</strong>
            </div>
            <div class="compare-row">
              <span>手动覆盖配置文件</span>
              <strong>profile 管理与状态展示集中化</strong>
            </div>
            <div class="compare-row">
              <span>要先装 Docker / Node 才能试</span>
              <strong>原生 app 内置运行时</strong>
            </div>
            <div class="compare-row">
              <span>很难交付给普通用户</span>
              <strong>支持 <code>.app</code> / <code>.zip</code> / <code>.dmg</code></strong>
            </div>
          </div>
        </div>
      </section>

      <section class="section security-section" id="security">
        <div class="section-heading reveal">
          <p class="eyebrow">LOCAL FIRST</p>
          <h2>真正重要的不是“界面好看”，而是这款工具从一开始就按本地自托管的思路设计。</h2>
        </div>
        <div class="security-grid">
          <article class="security-card reveal reveal-delay-1">
            <h3>配置留在本机</h3>
            <p>目录扫描、状态管理、runtime 和配置文件都在用户自己的 Mac 上完成，不引入中心化服务器。</p>
          </article>
          <article class="security-card reveal reveal-delay-2">
            <h3>更适合敏感工作流</h3>
            <p>如果你本来就不希望把本地环境细节交给第三方后台，这种本地管理台比在线服务更可控。</p>
          </article>
          <article class="security-card reveal reveal-delay-3">
            <h3>便于后续正式化</h3>
            <p>现在已经有签名、公证、DMG 和多架构扩展空间，适合往正式软件交付链路继续推进。</p>
          </article>
        </div>
      </section>

      <section class="section faq-section" id="faq">
        <div class="section-heading reveal">
          <p class="eyebrow">FAQ</p>
          <h2>常见问题</h2>
        </div>
        <div class="faq-list">
          <details class="faq-item reveal reveal-delay-1" open>
            <summary>它是官方产品吗？</summary>
            <p>不是。它是一个第三方本地工具，面向 OpenClaw / Codex 本地工作流管理，不代表官方服务或官方客户端。</p>
          </details>
          <details class="faq-item reveal reveal-delay-2">
            <summary>最终用户需要 Docker 吗？</summary>
            <p>不需要。原生版内置了 app 运行需要的本地 runtime，面向最终用户的交付方式是 <code>.app</code>、<code>.zip</code> 和 <code>.dmg</code>。</p>
          </details>
          <details class="faq-item reveal reveal-delay-3">
            <summary>它适合什么样的人？</summary>
            <p>适合频繁维护 OpenClaw / Codex 配置、需要多 profile 管理、希望把本地工作流做得更稳定的人。</p>
          </details>
          <details class="faq-item reveal reveal-delay-1">
            <summary>官网现在最重要的卖点是什么？</summary>
            <p>macOS 原生、本地自托管、无需 Docker、无需额外安装 Node、能把本地配置和切换流程收敛进一个清晰的管理台。</p>
          </details>
        </div>
      </section>

      <section class="cta-section reveal" id="cta">
        <div class="cta-card">
          <p class="eyebrow">READY TO TEST</p>
          <h2>如果你要向别人展示这款软件，这个官网已经可以作为第一版产品落地页。</h2>
          <p>
            下一步可以继续补下载入口、演示视频、客户案例、签名与公证状态说明，以及面向外部发布的联系渠道。
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#cta">下载入口待接入</a>
            <a class="button button-ghost" href="#hero">返回顶部</a>
          </div>
        </div>
      </section>
    </main>
  </div>
`;

const reveals = document.querySelectorAll('.reveal');
const numbers = document.querySelectorAll('[data-count]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.18 }
);

reveals.forEach((element) => observer.observe(element));

const animateNumber = (element) => {
  const target = Number(element.dataset.count || '0');
  const duration = 1200;
  const startTime = performance.now();

  const step = (time) => {
    const progress = Math.min((time - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = `${Math.round(target * eased)}`;
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const numberObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateNumber(entry.target);
      numberObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.4 }
);

numbers.forEach((element) => numberObserver.observe(element));
