import './style.css';

const app = document.querySelector('#app');

const releaseOwner = 'henry-insomniac';
const releaseRepo = 'openclaw-manager-native';
const releaseTag = 'v1.0.4';
const releaseVersionLabel = '1.0.4';
const releaseBuildLabel = '2026-03-11';
const releaseBase = `https://github.com/${releaseOwner}/${releaseRepo}/releases/latest/download`;
const releasePage = `https://github.com/${releaseOwner}/${releaseRepo}/releases/tag/${releaseTag}`;
const downloads = {
  dmg: `${releaseBase}/OpenClawManagerNative-latest-arm64.dmg`,
  pkg: `${releaseBase}/OpenClawManagerNative-latest-arm64.pkg`,
  zip: `${releaseBase}/OpenClawManagerNative-latest-arm64.zip`,
  delivery: `${releaseBase}/OpenClawManagerNative-latest-delivery.zip`,
  checksums: `${releaseBase}/OpenClawManagerNative-latest-SHA256SUMS.txt`,
};

const changelogEntries = [
  {
    version: 'v1.0.4',
    date: '2026-03-11',
    title: '1.0.4 诊断中心稳定性 + 性能收口',
    summary: '把诊断中心继续收成更直接的本地维护界面，修掉原生壳 reopen 风险，并把 manager / support 刷新速度压下来。',
    highlights: [
      'reopen、菜单栏和弹窗路径改成明确主线程调用，原生壳不再靠危险的 UI 隔离写法硬撑。',
      '诊断页新增“先做这一步 / 最近一次操作 / 维护建议”，官方体检和修复结果改成中文摘要。',
      '安装版实测：manager 约 8.9s 降到 0.5s，support/summary 约 12.0s 降到 3.5s。'
    ]
  },
  {
    version: 'v1.0.3',
    date: '2026-03-11',
    title: '1.0.3 文案收紧 + provider-aware 第一阶段',
    summary: '把原生 app 里那批像官网落地页的文案压成直接动作，同时开始把 profile 判断和激活逻辑从 Codex 写死切到 provider-aware 的第一阶段。',
    highlights: [
      '首页、诊断页和命令页的文案全部收短，界面只保留状态、动作和必要说明。',
      'daemon 现在会读取 openclaw.json，识别 primary provider / primary model，非 Codex profile 不再因为没有 .codex 凭据直接判死。',
      '默认激活同步扩展到整个 OpenClaw auth/config，1.0.3 同步重新打出 DMG、PKG、ZIP、完整交付包和 SHA256。'
    ]
  },
  {
    version: 'v1.0.1',
    date: '2026-03-10',
    title: '1.0.1 诊断热修复',
    summary: '修复安装版与最新构建都显示为 1.0.0 导致的版本混淆，同时把诊断中心的根因判断和修复动作进一步收紧到发布态。',
    highlights: [
      '原生 app 版本展示改为直接读取 Bundle 版本，不再手写静态版本文案。',
      '修复诊断中心在旧安装版中仍显示旧反馈的问题，新的发布包统一切到 1.0.1。',
      '继续保留随机探测窗口、原生 daemon 和根因修复面板。'
    ]
  },
  {
    version: 'v1.0.0',
    date: '2026-03-10',
    title: '1.0 正式版发布',
    summary: '产品线收口为“mac 原生壳 + daemon 核心 + Web 兼容部署”，并把快速切换、随机探测、诊断中心、稳定守护和分发链路统一成正式版体验。',
    highlights: [
      '账号切换正式收口到 daemon runtime，补齐切换耗时与同步遥测。',
      '自动策略改成时间窗口内随机探测，降低固定节奏探测带来的风控风险。',
      '诊断中心升级成根因判断 + 修复面板，直接把影响范围和首选动作给出来。',
      '原生菜单栏支持直接切到任意已发现账号，并保留守护与诊断入口。',
      '分发链路统一为 DMG、PKG、ZIP、完整交付包和 SHA256 校验清单。'
    ]
  },
  {
    version: 'ui refresh',
    date: '2026-03-09',
    title: '主界面改成低信息密度布局',
    summary: '默认视图改成更接近 macOS 偏好设置的结构，首屏只保留账号、状态、额度和操作，把路径和内部配置折叠到高级信息里。',
    highlights: [
      '左侧变成简洁工作区导航。',
      '账号详情默认只显示必要信息。',
      '高级路径、Codex/OpenClaw 细节收进折叠区。'
    ]
  },
  {
    version: 'stability',
    date: '2026-03-09',
    title: '增加菜单栏入口与稳定守护',
    summary: '应用关闭主窗口后仍可驻留在菜单栏，并提供后台稳定守护能力，用来自动恢复 OpenClaw 网关和明显卡死场景。',
    highlights: [
      '菜单栏可直接查看当前账号和自动化状态。',
      '支持一键巡检和推荐切换。',
      'Watchdog 能自动拉起掉线服务。'
    ]
  },
  {
    version: 'native baseline',
    date: '2026-03-09',
    title: '原生 macOS 交付链打通',
    summary: '从依赖 Docker 的管理台，收敛成真正可分发的 macOS 原生应用，内置本地 runtime，面向测试用户不再要求额外安装 Docker 或 Node。',
    highlights: [
      'Swift 原生 app + 内置 runtime。',
      '支持 DMG、ZIP、PKG 和交付包。',
      '根目录选择、服务重启、日志入口都放进 app。'
    ]
  },
  {
    version: 'foundation',
    date: '2026-03-08',
    title: '账号切换与自动化基础完成',
    summary: '建立 OpenClaw / Codex 多 profile 管理、推荐切换和自动巡检的基础能力，解决本地多账号配置的可视化管理问题。',
    highlights: [
      '支持 profile 创建、登录、探测、激活。',
      '支持 OpenClaw 与 Codex 同步切换。',
      '支持自动化阈值和推荐账号逻辑。'
    ]
  }
];

const changelogRailMarkup = changelogEntries
  .map(
    (entry, index) => `
      <button class="changelog-item ${index === 0 ? 'changelog-item-active' : ''}" type="button" data-changelog-index="${index}">
        <span class="changelog-item-date">${entry.date}</span>
        <strong>${entry.title}</strong>
        <small>${entry.version}</small>
      </button>
    `
  )
  .join('');

const initialChangelog = changelogEntries[0];
const initialChangelogList = initialChangelog.highlights.map((item) => `<li>${item}</li>`).join('');

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
        <a href="#downloads">下载</a>
        <a href="#changelog">更新</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a class="nav-cta" href="#downloads">立即下载</a>
    </header>

    <main>
      <section class="hero" id="hero">
        <div class="hero-copy reveal reveal-delay-1">
          <p class="eyebrow">OPENCLAW PROFILE MANAGER</p>
          <h1>在 Mac 上直接管理 OpenClaw profile、诊断和修复。</h1>
          <p class="hero-text">
            这是一个本地原生工具。它负责 profile 管理、切换、诊断、守护和可选 Codex companion；配置和状态都留在你自己的机器上。
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#downloads">下载 1.0.4</a>
            <a class="button button-ghost" href="#workflow">查看工作方式</a>
          </div>
          <ul class="hero-points">
            <li>macOS 原生桌面应用</li>
            <li>以 OpenClaw profile 管理为中心</li>
            <li>诊断中心可以直接维护本地 OpenClaw</li>
            <li>Codex 仍保留为可选 companion</li>
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
                <small>OpenClaw 默认槽位已同步</small>
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
                  <small>OpenClaw / 可选 Codex</small>
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
                  <p>SwiftUI + AppKit 真原生壳</p>
                </div>
              </div>
              <div class="panel console-panel">
                <code>[native] runtime ready mode=native callback=1455</code>
                <code>[manager-api] /api/openclaw/manager -> 200</code>
                <code>[daemon] randomized probe window 90s..180s</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="alpha-banner reveal" aria-label="正式版提示">
        <div class="alpha-banner-copy">
          <p class="eyebrow">RELEASE NOTE</p>
          <h2>这是 1.0.4。重点是诊断中心更稳、更直接，安装版刷新也明显更快了。</h2>
          <p>
            如果你要发给别人，优先转发完整交付包。当前正式支持仍以 Apple Silicon / arm64 为主；未公证包第一次打开时，可能仍需要到 <code>系统设置 -> 隐私与安全性</code> 里手动允许一次。
          </p>
        </div>
        <div class="alpha-banner-points">
          <article>
            <strong>诊断更直接</strong>
            <span>现在会先给你“先做这一步”，再保留最近一次操作结果。</span>
          </article>
          <article>
            <strong>原生壳更稳</strong>
            <span>reopen、菜单栏和弹窗路径继续收口，减少桌面端崩溃风险。</span>
          </article>
          <article>
            <strong>刷新更快</strong>
            <span>安装版 manager 和 support 的刷新都比上一版明显更快。</span>
          </article>
          <article>
            <strong>附带校验</strong>
            <span>完整交付包继续带 <code>QUICKSTART.md</code>、<code>USAGE.md</code> 和 <code>SHA256</code>。</span>
          </article>
          <div class="alpha-banner-actions">
            <a class="button button-primary" href="#downloads">先下 DMG</a>
            <a class="button button-ghost" href="${downloads.delivery}" target="_blank" rel="noreferrer">拿完整交付包</a>
          </div>
        </div>
      </section>

      <section class="trust-strip reveal">
        <div>
          <strong>为本地工作流而设计</strong>
          <span>不是在线后台，就是你自己机器上的原生控制台。</span>
        </div>
        <div>
          <strong>适合对象</strong>
          <span>适合需要频繁维护 OpenClaw 本地环境的人。</span>
        </div>
      </section>

      <section class="section capabilities" id="capabilities">
        <div class="section-heading reveal">
          <p class="eyebrow">CAPABILITIES</p>
          <h2>它主要替你省掉这几类麻烦。</h2>
        </div>
        <div class="card-grid">
          <article class="feature-card reveal reveal-delay-1">
            <span class="feature-index">01</span>
            <h3>快速账号切换</h3>
            <p>把 <code>.openclaw</code>、<code>.openclaw-*</code>、<code>.codex</code>、<code>.codex-*</code> 整理成一个统一入口。</p>
          </article>
          <article class="feature-card reveal reveal-delay-2">
            <span class="feature-index">02</span>
            <h3>原生目录配置</h3>
            <p>直接在 macOS 菜单里选择 OpenClaw 与 Codex 根目录，不需要让用户自己翻隐藏文件夹或手改 JSON。</p>
          </article>
          <article class="feature-card reveal reveal-delay-3">
            <span class="feature-index">03</span>
            <h3>随机探测策略</h3>
            <p>自动切换不再走固定轮询，而是在时间窗口内随机探测。</p>
          </article>
          <article class="feature-card reveal reveal-delay-1">
            <span class="feature-index">04</span>
            <h3>daemon + 诊断中心</h3>
            <p>集中看状态、看根因、点修复。诊断页会直接给建议动作。</p>
          </article>
          <article class="feature-card reveal reveal-delay-2">
            <span class="feature-index">05</span>
            <h3>内置运行时</h3>
            <p>应用自带本地 runtime 与 manager 逻辑。对最终用户来说，不需要 Docker，也不要求另外装额外运行环境。</p>
          </article>
          <article class="feature-card reveal reveal-delay-3">
            <span class="feature-index">06</span>
            <h3>面向交付</h3>
            <p>支持 <code>.app</code>、<code>.zip</code>、<code>.dmg</code>、<code>.pkg</code>，方便直接发给别人。</p>
          </article>
        </div>
      </section>

      <section class="section compare-section" id="workflow">
        <div class="workflow-layout">
          <div class="workflow-copy reveal">
            <p class="eyebrow">WORKFLOW</p>
            <h2>三步上手。</h2>
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
                <span>在同一界面里看状态、切换和修复。</span>
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
              <span>固定轮询探测容易形成可预测行为</span>
              <strong>随机探测窗口 + 自动切换策略</strong>
            </div>
            <div class="compare-row">
              <span>出问题时只剩日志和猜测</span>
              <strong>诊断中心直接给根因、影响和修复动作</strong>
            </div>
          </div>
        </div>
      </section>

      <section class="section downloads-section" id="downloads">
        <div class="section-heading reveal">
          <p class="eyebrow">DOWNLOADS</p>
          <h2>先下 DMG；需要安装器再下 PKG。</h2>
        </div>
        <div class="download-grid">
          <article class="download-card reveal reveal-delay-1">
            <span class="feature-index">RECOMMENDED</span>
            <h3>DMG 安装包</h3>
            <p>第一次安装优先用这个。打开后把 app 拖到 <code>Applications</code>。</p>
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
            <span class="feature-index">INSTALLER</span>
            <h3>PKG 安装包</h3>
            <p>适合习惯安装器流程的人。</p>
            <ul class="download-list">
              <li>更接近传统 macOS 安装流程</li>
              <li>适合引导式安装</li>
              <li>正式版交付链一部分</li>
            </ul>
            <div class="download-actions">
              <a class="button button-ghost" href="${downloads.pkg}" target="_blank" rel="noreferrer">下载 PKG</a>
            </div>
          </article>
          <article class="download-card reveal reveal-delay-3">
            <span class="feature-index">DIRECT APP ZIP</span>
            <h3>ZIP 安装包</h3>
            <p>解压后把 app 拖进 <code>Applications</code>。</p>
            <ul class="download-list">
              <li>适合熟悉 Mac 的用户</li>
              <li>适合内部直发 app</li>
              <li>适合手动分发 app</li>
            </ul>
            <div class="download-actions">
              <a class="button button-ghost" href="${downloads.zip}" target="_blank" rel="noreferrer">下载 ZIP</a>
            </div>
          </article>
          <article class="download-card reveal reveal-delay-1">
            <span class="feature-index">FULL BUNDLE</span>
            <h3>完整交付包</h3>
            <p>除了安装包，还带说明和校验文件，适合直接转发。</p>
            <ul class="download-list">
              <li>适合直接转发给使用者</li>
              <li>包含安装和排障说明</li>
              <li>不需要你再手写操作步骤</li>
            </ul>
            <div class="download-actions">
              <a class="button button-ghost" href="${downloads.delivery}" target="_blank" rel="noreferrer">下载交付包</a>
            </div>
          </article>
        </div>
        <div class="download-note reveal">
          <p><strong>当前版本：</strong> ${releaseVersionLabel} · ${releaseBuildLabel}</p>
          <p><strong>已知边界：</strong> 当前正式支持 Apple Silicon / arm64；未公证包第一次打开时，可能需要在 <code>系统设置 -> 隐私与安全性</code> 中手动允许。</p>
          <div class="download-actions">
            <a class="button button-ghost" href="${downloads.checksums}" target="_blank" rel="noreferrer">SHA256 校验</a>
            <a class="button button-ghost" href="${releasePage}" target="_blank" rel="noreferrer">查看 GitHub Release</a>
          </div>
        </div>
      </section>

      <section class="section changelog-section" id="changelog">
        <div class="section-heading reveal">
          <p class="eyebrow">CHANGELOG</p>
          <h2>版本变化。</h2>
        </div>
        <div class="changelog-layout">
          <div class="changelog-rail reveal reveal-delay-1">
            ${changelogRailMarkup}
          </div>
          <article class="changelog-panel reveal reveal-delay-2">
            <div class="changelog-meta">
              <span class="changelog-version" data-changelog-version>${initialChangelog.version}</span>
              <span class="changelog-date" data-changelog-date>${initialChangelog.date}</span>
            </div>
            <h3 data-changelog-title>${initialChangelog.title}</h3>
            <p class="changelog-summary" data-changelog-summary>${initialChangelog.summary}</p>
            <ul class="changelog-list" data-changelog-list>${initialChangelogList}</ul>
          </article>
        </div>
      </section>

      <section class="section usage-section" id="usage">
        <div class="section-heading reveal">
          <p class="eyebrow">USAGE GUIDE</p>
          <h2>第一次使用，按这几步。</h2>
        </div>
        <div class="usage-layout">
          <div class="usage-steps">
            <article class="usage-step reveal reveal-delay-1">
              <span class="feature-index">STEP 01</span>
              <h3>先把 app 安装到 Applications</h3>
              <p>推荐优先使用 <code>.dmg</code>。如果你拿到的是 <code>.zip</code>，先解压，再拖进去。</p>
            </article>
            <article class="usage-step reveal reveal-delay-2">
              <span class="feature-index">STEP 02</span>
              <h3>第一次打开如果被拦截，先在系统里允许</h3>
              <p>如果 macOS 拦截，到 <code>系统设置 -> 隐私与安全性</code> 里允许一次，然后再打开。</p>
            </article>
            <article class="usage-step reveal reveal-delay-3">
              <span class="feature-index">STEP 03</span>
              <h3>先看主界面有没有直接显示 profile</h3>
              <p>如果默认目录就对，软件可能已经能直接识别。</p>
            </article>
            <article class="usage-step reveal reveal-delay-1">
              <span class="feature-index">STEP 04</span>
              <h3>如果没显示正确内容，再去设置根目录</h3>
              <p>最常见的问题是根目录选错了。要选父目录，不要直接选隐藏目录本身。</p>
              <div class="usage-command">
                <code>配置 -> 选择 OpenClaw 根目录...</code>
                <code>配置 -> 选择 Codex 根目录...</code>
              </div>
            </article>
            <article class="usage-step reveal reveal-delay-2">
              <span class="feature-index">STEP 05</span>
              <h3>改完目录后，执行一次重启</h3>
              <p>改完目录后执行一次重启，让本地 manager 重新扫描。</p>
              <div class="usage-command">
                <code>配置 -> 重启服务并刷新窗口</code>
              </div>
            </article>
            <article class="usage-step reveal reveal-delay-3">
              <span class="feature-index">STEP 06</span>
              <h3>看到 profile 和状态，就说明第一次配置成功了</h3>
              <p>之后日常操作基本都在主界面完成。</p>
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
              <p>先从你的用户目录开始看，也就是 <code>/Users/你的用户名</code>。默认情况下，根目录大多就在这里。</p>
            </div>
          </aside>
        </div>
      </section>

      <section class="section security-section" id="security">
        <div class="section-heading reveal">
          <p class="eyebrow">LOCAL FIRST</p>
          <h2>本地跑，不上云。</h2>
        </div>
        <div class="security-grid">
          <article class="security-card reveal reveal-delay-1">
            <h3>配置留在本机</h3>
            <p>目录扫描、状态管理和配置文件都在你自己的 Mac 上完成。</p>
          </article>
          <article class="security-card reveal reveal-delay-2">
            <h3>更适合敏感工作流</h3>
            <p>如果你不想把本地环境细节交给第三方后台，这种方式更可控。</p>
          </article>
          <article class="security-card reveal reveal-delay-3">
            <h3>便于后续正式化</h3>
            <p>现在已经有 DMG、PKG、ZIP、完整交付包和校验清单。</p>
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
            <p>不需要。原生版内置了 app 运行需要的本地 runtime，面向最终用户的交付方式是 <code>.app</code>、<code>.zip</code>、<code>.dmg</code> 和 <code>.pkg</code>。</p>
          </details>
          <details class="faq-item reveal reveal-delay-3">
            <summary>现在只能管理 Codex 吗？</summary>
            <p>不是。现在已经开始按 OpenClaw 的 provider / model 识别 profile；Codex 继续作为第一个 companion runtime 保留。</p>
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
            <summary>诊断中心现在会直接告诉我该怎么修吗？</summary>
            <p>会。现在会先给建议动作，再保留最近一次操作结果和必要日志入口。</p>
          </details>
          <details class="faq-item reveal reveal-delay-2">
            <summary>它适合什么样的人？</summary>
            <p>适合频繁维护 OpenClaw / Codex 配置、需要多 profile 管理、希望把本地工作流做得更稳定的人。</p>
          </details>
        </div>
      </section>

      <section class="cta-section reveal" id="cta">
        <div class="cta-card">
          <p class="eyebrow">READY TO SHIP</p>
          <h2>1.0.4 已可下载。</h2>
          <p>
            如果你要发给别人，优先发完整交付包；如果只是自己安装，直接下载 DMG 即可。
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


const changelogButtons = document.querySelectorAll('[data-changelog-index]');
const changelogVersion = document.querySelector('[data-changelog-version]');
const changelogDate = document.querySelector('[data-changelog-date]');
const changelogTitle = document.querySelector('[data-changelog-title]');
const changelogSummary = document.querySelector('[data-changelog-summary]');
const changelogList = document.querySelector('[data-changelog-list]');

const setActiveChangelog = (index) => {
  const entry = changelogEntries[index];
  if (!entry || !changelogVersion || !changelogDate || !changelogTitle || !changelogSummary || !changelogList) return;

  changelogButtons.forEach((button, buttonIndex) => {
    button.classList.toggle('changelog-item-active', buttonIndex === index);
  });

  changelogVersion.textContent = entry.version;
  changelogDate.textContent = entry.date;
  changelogTitle.textContent = entry.title;
  changelogSummary.textContent = entry.summary;
  changelogList.innerHTML = entry.highlights.map((item) => `<li>${item}</li>`).join('');
};

changelogButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const index = Number(button.dataset.changelogIndex || '0');
    setActiveChangelog(index);
  });
});
