import './style.css';

const app = document.querySelector('#app');

const releaseOwner = 'henry-insomniac';
const releaseRepo = 'openclaw-manager-native';
const releaseTag = 'v0.1.0-alpha.1';
const releaseBase = `https://github.com/${releaseOwner}/${releaseRepo}/releases/download/${releaseTag}`;
const releasePage = `https://github.com/${releaseOwner}/${releaseRepo}/releases/tag/${releaseTag}`;
const downloads = {
  dmg: `${releaseBase}/OpenClawManagerNative-latest-arm64.dmg`,
  zip: `${releaseBase}/OpenClawManagerNative-latest-arm64.zip`,
  delivery: `${releaseBase}/OpenClawManagerNative-latest-delivery.zip`,
};

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
        <a href="#downloads">下载</a>
        <a href="#usage">使用</a>
        <a href="#security">本地性</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a class="nav-cta" href="#downloads">立即下载</a>
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
            <a class="button button-primary" href="#downloads">下载 Alpha</a>
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

      <section class="alpha-banner reveal" aria-label="alpha 提示">
        <div class="alpha-banner-copy">
          <p class="eyebrow">ALPHA NOTICE</p>
          <h2>这是面向小范围测试用户的 alpha 版本，不是已经公证的正式公开版。</h2>
          <p>
            如果你准备把链接发给别人，至少先告诉对方这 3 件事：当前只支持 Apple Silicon / arm64；第一次打开可能需要到 <code>系统设置 -> 隐私与安全性</code> 里手动允许一次；如果界面没显示 profile，请在菜单里设置 OpenClaw 和 Codex 根目录后执行一次“重启服务并刷新窗口”。
          </p>
        </div>
        <div class="alpha-banner-points">
          <article>
            <strong>安装前先看</strong>
            <span>适用于 macOS 13+ 与 Apple Silicon 机器，Intel Mac 当前不在支持范围内。</span>
          </article>
          <article>
            <strong>第一次打开被拦截</strong>
            <span>到系统安全设置里允许一次，然后再回到 Applications 重新启动 app。</span>
          </article>
          <article>
            <strong>页面没显示 profile</strong>
            <span>根目录选“包含 <code>.openclaw</code> / <code>.codex</code> 的父目录”，改完后执行一次重启。</span>
          </article>
          <div class="alpha-banner-actions">
            <a class="button button-primary" href="#downloads">先下 DMG</a>
            <a class="button button-ghost" href="#usage">看首次使用步骤</a>
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

      <section class="section downloads-section" id="downloads">
        <div class="section-heading reveal">
          <p class="eyebrow">DOWNLOADS</p>
          <h2>现在就能下载 alpha 测试包，推荐从 DMG 开始。</h2>
        </div>
        <div class="download-grid">
          <article class="download-card reveal reveal-delay-1">
            <span class="feature-index">RECOMMENDED</span>
            <h3>DMG 安装包</h3>
            <p>最适合第一次测试。打开镜像后，把 <code>OpenClaw Manager Native.app</code> 拖到 <code>Applications</code> 即可。</p>
            <ul class="download-list">
              <li>适合第一次安装</li>
              <li>当前为 Apple Silicon / arm64</li>
              <li>首次打开可能需要在系统里允许一次</li>
            </ul>
            <div class="download-actions">
              <a class="button button-primary" href="${downloads.dmg}" target="_blank" rel="noreferrer">下载 DMG</a>
            </div>
          </article>
          <article class="download-card reveal reveal-delay-2">
            <span class="feature-index">DIRECT APP ZIP</span>
            <h3>ZIP 安装包</h3>
            <p>适合已经熟悉 macOS 应用分发方式的测试者。解压后把 app 拖进 <code>Applications</code> 即可。</p>
            <ul class="download-list">
              <li>文件更直接</li>
              <li>适合内部快速分发</li>
              <li>和 DMG 一样属于当前 alpha 构建</li>
            </ul>
            <div class="download-actions">
              <a class="button button-ghost" href="${downloads.zip}" target="_blank" rel="noreferrer">下载 ZIP</a>
            </div>
          </article>
          <article class="download-card reveal reveal-delay-3">
            <span class="feature-index">FULL BUNDLE</span>
            <h3>完整交付包</h3>
            <p>除了安装包，还额外包含 <code>INSTALL.md</code>、<code>ALPHA-TEST.md</code> 和项目说明，适合你直接发给内测用户。</p>
            <ul class="download-list">
              <li>适合转发给测试者</li>
              <li>包含安装和排障说明</li>
              <li>不需要你再手写操作步骤</li>
            </ul>
            <div class="download-actions">
              <a class="button button-ghost" href="${downloads.delivery}" target="_blank" rel="noreferrer">下载交付包</a>
            </div>
          </article>
        </div>
        <div class="download-note reveal">
          <p><strong>当前版本：</strong> Alpha 0.1.0</p>
          <p><strong>已知限制：</strong> 当前仅支持 Apple Silicon / arm64；由于还没有 Developer ID 公证，第一次打开时可能需要在 <code>系统设置 -> 隐私与安全性</code> 中手动允许。</p>
          <div class="download-actions">
            <a class="button button-ghost" href="${releasePage}" target="_blank" rel="noreferrer">查看 GitHub Release</a>
          </div>
        </div>
      </section>

      <section class="section usage-section" id="usage">
        <div class="section-heading reveal">
          <p class="eyebrow">USAGE GUIDE</p>
          <h2>如果这是你第一次使用，按下面顺序做，基本不会走偏。</h2>
        </div>
        <div class="usage-layout">
          <div class="usage-steps">
            <article class="usage-step reveal reveal-delay-1">
              <span class="feature-index">STEP 01</span>
              <h3>先把 app 安装到 Applications</h3>
              <p>推荐优先使用 <code>.dmg</code>。打开镜像后，把 <code>OpenClaw Manager Native.app</code> 拖到 <code>Applications</code>。如果你拿到的是 <code>.zip</code>，先解压，再拖进去。</p>
            </article>
            <article class="usage-step reveal reveal-delay-2">
              <span class="feature-index">STEP 02</span>
              <h3>第一次打开如果被拦截，先在系统里允许</h3>
              <p>如果 macOS 提示应用无法直接打开，到 <code>系统设置 -> 隐私与安全性</code> 里允许，然后回到 <code>Applications</code> 重新启动。这个动作通常只需要第一次做。</p>
            </article>
            <article class="usage-step reveal reveal-delay-3">
              <span class="feature-index">STEP 03</span>
              <h3>先看主界面有没有直接显示 profile</h3>
              <p>如果你的 <code>.openclaw</code> 和 <code>.codex</code> 本来就在默认 Home 根目录下，软件可能已经能直接识别。你先看界面里有没有 profile 卡片、active profile 和状态信息。</p>
            </article>
            <article class="usage-step reveal reveal-delay-1">
              <span class="feature-index">STEP 04</span>
              <h3>如果没显示正确内容，再去设置根目录</h3>
              <p>最常见的问题不是软件坏了，而是 OpenClaw / Codex 根目录没有指到正确的父目录。根目录应该选“包含这些隐藏目录的那一层”，而不是直接选目录本身。</p>
              <div class="usage-command">
                <code>配置 -> 选择 OpenClaw 根目录...</code>
                <code>配置 -> 选择 Codex 根目录...</code>
              </div>
            </article>
            <article class="usage-step reveal reveal-delay-2">
              <span class="feature-index">STEP 05</span>
              <h3>改完目录后，执行一次重启</h3>
              <p>每次你修改完根目录，都执行一次重启，让本地 manager 重新扫描并加载最新状态。否则界面可能还停留在旧结果。</p>
              <div class="usage-command">
                <code>配置 -> 重启服务并刷新窗口</code>
              </div>
            </article>
            <article class="usage-step reveal reveal-delay-3">
              <span class="feature-index">STEP 06</span>
              <h3>看到 profile 和状态，就说明第一次配置成功了</h3>
              <p>第一次配置成功最明显的标志，就是主界面开始出现 profile 卡片、active profile、OpenClaw 状态和 Codex 对应信息。之后日常基本都在主界面完成。</p>
            </article>
          </div>

          <aside class="usage-aside reveal reveal-delay-2">
            <div class="usage-note">
              <p class="usage-title">根目录到底该选哪一层</p>
              <p>规则很简单：</p>
              <ul class="usage-list">
                <li>OpenClaw 根目录：选包含 <code>.openclaw</code> / <code>.openclaw-*</code> 的父目录</li>
                <li>Codex 根目录：选包含 <code>.codex</code> / <code>.codex-*</code> 的父目录</li>
                <li>不要直接选 <code>.openclaw</code> 或 <code>.codex</code> 本身</li>
              </ul>
            </div>
            <div class="usage-note">
              <p class="usage-title">第一次成功的标志</p>
              <ul class="usage-list">
                <li>主界面出现 profile 卡片</li>
                <li>可以看到 active profile</li>
                <li>可以看到 OpenClaw 状态</li>
                <li>可以看到 Codex 对应状态或目录</li>
              </ul>
            </div>
            <div class="usage-note">
              <p class="usage-title">默认设置文件</p>
              <code>~/Library/Application Support/OpenClaw Manager Native/settings.json</code>
            </div>
            <div class="usage-note usage-note-accent">
              <p class="usage-title">如果你完全不确定目录在哪</p>
              <p>先从你的用户目录开始看，也就是 <code>/Users/你的用户名</code>。如果之前一直在默认方式下使用 OpenClaw / Codex，大多数情况下根目录就是这里。</p>
            </div>
          </aside>
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
            <summary>第一次打开没看到 profile，最先检查什么？</summary>
            <p>先检查 OpenClaw 根目录和 Codex 根目录是不是指向了正确的父目录；然后执行一次 <code>配置 -> 重启服务并刷新窗口</code>。</p>
          </details>
          <details class="faq-item reveal reveal-delay-1">
            <summary>根目录到底要选目录本身，还是它的父目录？</summary>
            <p>选父目录。比如你看到了 <code>/Users/你的用户名/.openclaw</code>，那 OpenClaw 根目录应该选 <code>/Users/你的用户名</code>，而不是直接选 <code>.openclaw</code>。</p>
          </details>
          <details class="faq-item reveal reveal-delay-2">
            <summary>它适合什么样的人？</summary>
            <p>适合频繁维护 OpenClaw / Codex 配置、需要多 profile 管理、希望把本地工作流做得更稳定的人。</p>
          </details>
        </div>
      </section>

      <section class="cta-section reveal" id="cta">
        <div class="cta-card">
          <p class="eyebrow">READY TO TEST</p>
          <h2>现在这款软件已经有可下载的 alpha 包，可以直接进入小范围内测。</h2>
          <p>
            如果你要把它发给测试用户，优先发送完整交付包；如果你只是自己测试，直接下载 DMG 即可。当前版本仍建议面向熟悉 macOS 的 alpha 用户，而不是陌生大众。
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="${downloads.dmg}" target="_blank" rel="noreferrer">下载 DMG</a>
            <a class="button button-ghost" href="${releasePage}" target="_blank" rel="noreferrer">查看 Release</a>
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
