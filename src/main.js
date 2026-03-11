import './style.css';

const app = document.querySelector('#app');
const brandMark = `
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <rect x="5.5" y="5.5" width="53" height="53" rx="13.5" fill="#f1ede4" stroke="#d2cabd"/>
    <circle cx="21" cy="32" r="8.5" fill="none" stroke="#101113" stroke-width="6"/>
    <path d="M49 22A10 10 0 1 0 49 42" fill="none" stroke="#101113" stroke-width="6" stroke-linecap="round"/>
    <circle cx="48" cy="16" r="3.4" fill="#c4f36b"/>
  </svg>
`;

const releaseOwner = 'henry-insomniac';
const releaseRepo = 'openclaw-manager-native';
const releaseTag = 'v1.0.5';
const releaseVersionLabel = '1.0.5';
const releaseBuildLabel = '2026-03-11';
const repoPage = `https://github.com/${releaseOwner}/${releaseRepo}`;
const releaseBase = `https://github.com/${releaseOwner}/${releaseRepo}/releases/latest/download`;
const releasePage = `https://github.com/${releaseOwner}/${releaseRepo}/releases/tag/${releaseTag}`;

const downloads = {
  dmg: `${releaseBase}/OpenClawManagerNative-latest-arm64.dmg`,
  pkg: `${releaseBase}/OpenClawManagerNative-latest-arm64.pkg`,
  zip: `${releaseBase}/OpenClawManagerNative-latest-arm64.zip`,
  delivery: `${releaseBase}/OpenClawManagerNative-latest-delivery.zip`,
  checksums: `${releaseBase}/OpenClawManagerNative-latest-SHA256SUMS.txt`,
};

const releaseHighlights = [
  {
    title: '空闲后台更轻',
    text: '自动刷新改走轻路径，安装版空闲时 UI 和 daemon 都能回到 0.0% CPU。'
  },
  {
    title: '诊断常驻更快',
    text: 'support 摘要加入短期缓存，普通轮询不再反复重跑整套深检查。'
  },
  {
    title: '安装版启动更稳',
    text: '修掉清理历史 backend 时的启动死锁，旧的 bundled 后台也会在启动时一起收干净。'
  }
];

const capabilityCards = [
  {
    index: '01',
    title: '统一管理 OpenClaw profile',
    text: '把 .openclaw 和 .openclaw-* 收进同一个本地视图，切换和状态不再分散在隐藏目录里。'
  },
  {
    index: '02',
    title: '诊断中心直接修本机',
    text: '看状态、点修复。官方体检、官方修复和 Gateway 服务重装都能直接从 app 里走。'
  },
  {
    index: '03',
    title: '本地运行，不上云',
    text: '配置、扫描、状态和切换都在你的 Mac 上完成，Codex 只保留为可选 companion。'
  }
];

const workflowSteps = [
  {
    step: 'STEP 01',
    title: '先安装到 Applications',
    text: '优先下载 DMG。第一次打开如果被系统拦截，到“隐私与安全性”里允许一次。'
  },
  {
    step: 'STEP 02',
    title: '确认 OpenClaw 根目录',
    text: '选择包含 .openclaw / .openclaw-* 的父目录。只有需要 companion 时再补 Codex 根目录。'
  },
  {
    step: 'STEP 03',
    title: '看 profile，再进诊断',
    text: '主界面先确认 profile 和 active 状态；如果不对，直接去诊断页按建议动作处理。'
  }
];

const repairCases = [
  {
    label: '最常见问题 01',
    title: '没有显示 profile',
    text: '先检查是不是选错了目录层级。要选父目录，不要直接选 .openclaw 本身。'
  },
  {
    label: '最常见问题 02',
    title: 'Gateway 不可达',
    text: '诊断页会把体检、修复和重装服务的动作直接摆出来，不需要自己翻日志。'
  },
  {
    label: '最常见问题 03',
    title: '切换后状态不刷新',
    text: '优先执行一次“重启服务并刷新窗口”，让 manager 重新扫描当前本地状态。'
  }
];

const downloadCards = [
  {
    label: 'RECOMMENDED',
    title: 'DMG 安装包',
    text: '第一次安装优先用这个。打开后把 app 拖到 Applications。',
    bullets: ['最适合首次安装', '当前正式支持 Apple Silicon / arm64', '适合绝大多数使用者'],
    buttonLabel: '下载 DMG',
    href: downloads.dmg,
    primary: true
  },
  {
    label: 'INSTALLER',
    title: 'PKG 安装包',
    text: '适合习惯安装器流程的人，交付给别人也更容易解释。',
    bullets: ['更接近传统安装流程', '适合引导式安装', '适合需要安装器的人群'],
    buttonLabel: '下载 PKG',
    href: downloads.pkg,
    primary: false
  },
  {
    label: 'DELIVERY',
    title: '完整交付包',
    text: '包含安装包、说明和校验文件，适合直接转发。',
    bullets: ['附带 QUICKSTART 和使用说明', '附带 SHA256 校验', '适合内部直接分发'],
    buttonLabel: '下载交付包',
    href: downloads.delivery,
    primary: false
  }
];

const faqEntries = [
  {
    question: '它是官方产品吗？',
    answer: '不是。它是面向 OpenClaw 本地工作流的第三方原生工具，不代表官方客户端或官方服务。'
  },
  {
    question: '现在只能管理 Codex 吗？',
    answer: '不是。当前已经按 OpenClaw 的 provider / model 识别 profile，Codex 只是第一个 companion runtime。'
  },
  {
    question: '第一次打开没看到 profile，先查什么？',
    answer: '先确认 OpenClaw 根目录是否选到了父目录，然后执行一次“重启服务并刷新窗口”。'
  },
  {
    question: '诊断中心会直接告诉我该怎么修吗？',
    answer: '会。现在优先显示建议动作，并保留最近一次操作结果和必要的维护信息。'
  },
  {
    question: '最终用户需要 Docker 或额外 runtime 吗？',
    answer: '不需要。原生版自带 app 所需的本地 runtime，面向最终用户的交付是 .app、.dmg、.pkg、.zip 和完整交付包。'
  }
];

const changelogEntries = [
  {
    version: 'v1.0.5',
    date: '2026-03-11',
    title: '1.0.5 诊断快路径 + 启动链修复',
    summary: '自动诊断轮询改走缓存快路径，安装版清历史 backend 的启动死锁被修掉，空闲后台占用继续压低。',
    highlights: [
      '自动刷新只拉 manager 或命中 support 缓存，手动刷新才强制跑 fresh 深检查。',
      '启动时会清掉旧的 bundled daemon / Node API 残留，并新增 lifecycle 日志帮助定位安装版问题。',
      '安装版实测：空闲 35 秒后 UI 与 daemon 均为 0.0% CPU；support 缓存命中约 0.005s。'
    ]
  },
  {
    version: 'v1.0.4',
    date: '2026-03-11',
    title: '1.0.4 诊断中心稳定性 + 性能收口',
    summary: '诊断中心继续收成更直接的本地维护界面，原生壳更稳，安装版刷新也明显更快。',
    highlights: [
      'reopen、菜单栏和弹窗路径改成明确主线程调用，减少桌面端崩溃风险。',
      '诊断页增加“先做这一步 / 最近一次操作 / 维护建议”，官方体检和修复结果改成中文摘要。',
      '安装版实测：manager 约 8.9s 降到 0.5s，support/summary 约 12.0s 降到 3.5s。'
    ]
  },
  {
    version: 'v1.0.3',
    date: '2026-03-11',
    title: '1.0.3 文案收紧 + provider-aware 第一阶段',
    summary: '把 app 里像官网的解释文案全部压短，并开始从 Codex 写死切到 provider-aware。',
    highlights: [
      '首页、诊断页和命令页都只保留状态、动作和必要说明。',
      'daemon 开始读取 openclaw.json，识别 primary provider / primary model。',
      '默认激活同步扩展到整个 OpenClaw auth/config。'
    ]
  },
  {
    version: 'v1.0.1',
    date: '2026-03-10',
    title: '1.0.1 诊断热修复',
    summary: '修复安装版版本展示混淆，并把诊断中心的根因判断和修复动作继续收紧到发布态。',
    highlights: [
      '原生 app 版本展示改为直接读取 Bundle 版本。',
      '诊断中心继续保留随机探测窗口、原生 daemon 和根因修复面板。',
      '发布包统一切到 1.0.1 版本标识。'
    ]
  },
  {
    version: 'v1.0.0',
    date: '2026-03-10',
    title: '1.0 正式版发布',
    summary: '产品线收口为“mac 原生壳 + daemon 核心 + Web 兼容部署”，统一了切换、诊断、守护和分发链路。',
    highlights: [
      '账号切换正式收口到 daemon runtime。',
      '自动策略改成时间窗口内随机探测。',
      '分发链路统一为 DMG、PKG、ZIP、完整交付包和 SHA256。'
    ]
  }
];

const featuredChangelogEntries = changelogEntries.slice(0, 4);

const renderBullets = (items) => items.map((item) => `<li>${item}</li>`).join('');

const changelogRailMarkup = featuredChangelogEntries
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

const capabilityMarkup = capabilityCards
  .map(
    (card, index) => `
      <article class="feature-card reveal reveal-delay-${(index % 3) + 1}">
        <span class="feature-index">${card.index}</span>
        <h3>${card.title}</h3>
        <p>${card.text}</p>
      </article>
    `
  )
  .join('');

const workflowMarkup = workflowSteps
  .map(
    (step, index) => `
      <li class="workflow-step reveal reveal-delay-${(index % 3) + 1}">
        <span class="step-label">${step.step}</span>
        <strong>${step.title}</strong>
        <p>${step.text}</p>
      </li>
    `
  )
  .join('');

const repairMarkup = repairCases
  .map(
    (item, index) => `
      <article class="repair-card reveal reveal-delay-${(index % 3) + 1}">
        <span class="step-label">${item.label}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `
  )
  .join('');

const downloadMarkup = downloadCards
  .map(
    (card, index) => `
      <article class="download-card reveal reveal-delay-${(index % 3) + 1}">
        <span class="feature-index">${card.label}</span>
        <h3>${card.title}</h3>
        <p>${card.text}</p>
        <ul class="download-list">${renderBullets(card.bullets)}</ul>
        <div class="download-actions">
          <a class="button ${card.primary ? 'button-primary' : 'button-secondary'}" href="${card.href}" target="_blank" rel="noreferrer">${card.buttonLabel}</a>
        </div>
      </article>
    `
  )
  .join('');

const faqMarkup = faqEntries
  .map(
    (item, index) => `
      <details class="faq-item reveal reveal-delay-${(index % 3) + 1}" ${index === 0 ? 'open' : ''}>
        <summary>${item.question}</summary>
        <p>${item.answer}</p>
      </details>
    `
  )
  .join('');

const releaseStripMarkup = releaseHighlights
  .map(
    (item, index) => `
      <article class="release-item reveal reveal-delay-${(index % 3) + 1}">
        <strong>${item.title}</strong>
        <p>${item.text}</p>
      </article>
    `
  )
  .join('');

const initialChangelog = featuredChangelogEntries[0];
const initialChangelogList = initialChangelog.highlights.map((item) => `<li>${item}</li>`).join('');

app.innerHTML = `
  <div class="site-shell">
    <div class="site-grid" aria-hidden="true"></div>
    <div class="site-noise" aria-hidden="true"></div>

    <header class="topbar reveal">
      <a class="brand" href="#hero" aria-label="OpenClaw Manager Native 首页">
        <span class="brand-mark">${brandMark}</span>
        <span class="brand-copy">
          <strong>OpenClaw Manager Native</strong>
          <small>macOS 本地管理台</small>
        </span>
      </a>
      <nav class="nav-links">
        <a href="#capabilities">能力</a>
        <a href="#diagnostics">诊断</a>
        <a href="#downloads">下载</a>
        <a href="#changelog">更新</a>
        <a href="#faq">FAQ</a>
        <a href="${repoPage}" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
      <a class="nav-cta" href="#downloads">下载 ${releaseVersionLabel}</a>
    </header>

    <main>
      <section class="hero" id="hero">
        <div class="hero-copy reveal reveal-delay-1">
          <p class="eyebrow">LOCAL CONTROL SURFACE</p>
          <div class="hero-callout">
            <span class="hero-callout-label">GitHub</span>
            <p>
              仓库已开源：
              <a href="${repoPage}" target="_blank" rel="noreferrer">${releaseOwner}/${releaseRepo}</a>
              。如果这个项目对你有用，欢迎点个 Star。
            </p>
          </div>
          <h1>在 Mac 上直接管理 OpenClaw。<span>看状态，点修复。</span></h1>
          <p class="hero-text">
            这是一个本地原生工具。它负责 profile 管理、切换、诊断、守护和可选 Codex companion；配置和状态都留在你自己的机器上。
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#downloads">下载 ${releaseVersionLabel}</a>
            <a class="button button-secondary" href="#diagnostics">看诊断怎么用</a>
          </div>
          <ul class="hero-tags">
            <li>本地运行</li>
            <li>诊断可修复</li>
            <li>provider-aware 进行中</li>
            <li>Codex 仍是可选 companion</li>
          </ul>
        </div>

        <div class="hero-visual reveal reveal-delay-2">
          <div class="control-stage">
            <div class="stage-glow stage-glow-a"></div>
            <div class="stage-glow stage-glow-b"></div>
            <div class="control-window">
              <div class="window-toolbar">
                <span></span><span></span><span></span>
                <p>OpenClaw Manager Native</p>
              </div>
              <div class="window-grid">
                <article class="window-card window-card-primary">
                  <span class="signal-label">ACTIVE PROFILE</span>
                  <div class="signal-row">
                    <strong>acct-b</strong>
                    <span class="status-pill status-pill-healthy">Healthy</span>
                  </div>
                  <p>默认 .openclaw 已同步，primary provider 已识别。</p>
                </article>

                <article class="window-card window-card-compact">
                  <span class="signal-label">诊断中心</span>
                  <strong>看状态，点修复</strong>
                  <p>体检、修复、重装服务都在同一页。</p>
                </article>

                <article class="window-card window-card-compact">
                  <span class="signal-label">本地原则</span>
                  <strong>配置留在本机</strong>
                  <p>不是在线后台，就是你自己机器上的控制台。</p>
                </article>

                <article class="window-card window-card-compact">
                  <span class="signal-label">运行方式</span>
                  <strong>Native App</strong>
                  <p>Swift 原生壳 + Go daemon + GitHub Release 分发。</p>
                </article>

                <article class="terminal-card">
                  <code>[daemon] profile scan complete provider=openclaw</code>
                  <code>[support] action=doctor-fix summary=ready</code>
                  <code>[release] latest=v1.0.5 dmg pkg delivery checksums</code>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="release-strip" aria-label="当前版本重点">
        ${releaseStripMarkup}
      </section>

      <section class="section capabilities" id="capabilities">
        <div class="section-heading reveal">
          <p class="eyebrow">CORE VALUE</p>
          <h2>首页只保留真正重要的三件事。</h2>
          <p>管理 profile、维护本地 OpenClaw、让交付变简单。别的都降级成次信息。</p>
        </div>
        <div class="card-grid">
          ${capabilityMarkup}
        </div>
      </section>

      <section class="section operations-section" id="diagnostics">
        <div class="section-heading reveal">
          <p class="eyebrow">WORKFLOW + DIAGNOSTICS</p>
          <h2>先装好，再看 profile，出问题就直接修。</h2>
          <p>不再把“如何安装”“如何选目录”“出问题怎么办”拆成三个长区块。</p>
        </div>
        <div class="operations-layout">
          <article class="workflow-panel">
            <div class="panel-heading reveal">
              <span class="panel-kicker">第一次使用</span>
              <h3>三步上手</h3>
            </div>
            <ol class="workflow-list">
              ${workflowMarkup}
            </ol>
          </article>

          <article class="repair-panel">
            <div class="panel-heading reveal reveal-delay-1">
              <span class="panel-kicker">遇到问题时</span>
              <h3>先看这些</h3>
            </div>
            <div class="repair-grid">
              ${repairMarkup}
            </div>
            <div class="repair-note reveal reveal-delay-2">
              <strong>默认设置文件</strong>
              <code>~/Library/Application Support/OpenClaw Manager Native/settings.json</code>
            </div>
          </article>
        </div>
      </section>

      <section class="section downloads-section" id="downloads">
        <div class="section-heading reveal">
          <p class="eyebrow">DOWNLOADS</p>
          <h2>先下 DMG；要转发别人，就发完整交付包。</h2>
          <p>下载入口只保留主要选择，次要文件压到工具区，不让首页变成下载仓库目录。</p>
        </div>
        <div class="download-grid">
          ${downloadMarkup}
        </div>
        <div class="download-utility reveal">
          <div>
            <strong>当前版本</strong>
            <p>${releaseVersionLabel} · ${releaseBuildLabel}</p>
          </div>
          <div>
            <strong>次要入口</strong>
            <p>熟悉 Mac 的用户可以直接拿 ZIP；校验和完整变更记录也保留。</p>
          </div>
          <div class="download-actions">
            <a class="button button-secondary" href="${downloads.zip}" target="_blank" rel="noreferrer">下载 ZIP</a>
            <a class="button button-secondary" href="${downloads.checksums}" target="_blank" rel="noreferrer">SHA256</a>
            <a class="button button-secondary" href="${releasePage}" target="_blank" rel="noreferrer">GitHub Release</a>
          </div>
        </div>
      </section>

      <section class="section changelog-section" id="changelog">
        <div class="section-heading reveal">
          <p class="eyebrow">UPDATES</p>
          <h2>首页只看最近几版。</h2>
          <p>更早的历史放到 GitHub Release，不再在首页摊满整条时间线。</p>
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
            <div class="download-actions">
              <a class="button button-secondary" href="${releasePage}" target="_blank" rel="noreferrer">看完整 Release</a>
            </div>
          </article>
        </div>
      </section>

      <section class="section faq-section" id="faq">
        <div class="section-heading reveal">
          <p class="eyebrow">FAQ</p>
          <h2>高频问题，只留最容易卡住的。</h2>
        </div>
        <div class="faq-list">
          ${faqMarkup}
        </div>
      </section>

      <section class="cta-section reveal" id="cta">
        <div class="cta-card">
          <p class="eyebrow">READY TO INSTALL</p>
          <h2>${releaseVersionLabel} 已可下载。</h2>
          <p>自己安装，先下 DMG。要发给别人，直接发完整交付包。</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${downloads.dmg}" target="_blank" rel="noreferrer">下载 DMG</a>
            <a class="button button-secondary" href="${downloads.delivery}" target="_blank" rel="noreferrer">完整交付包</a>
          </div>
          <p class="cta-meta">
            仓库地址：<a href="${repoPage}" target="_blank" rel="noreferrer">${repoPage}</a>。如果这个项目对你有用，欢迎点个 Star。
          </p>
        </div>
      </section>
    </main>
  </div>
`;

const changelogButtons = document.querySelectorAll('[data-changelog-index]');
const changelogVersion = document.querySelector('[data-changelog-version]');
const changelogDate = document.querySelector('[data-changelog-date]');
const changelogTitle = document.querySelector('[data-changelog-title]');
const changelogSummary = document.querySelector('[data-changelog-summary]');
const changelogList = document.querySelector('[data-changelog-list]');

const setActiveChangelog = (index) => {
  const entry = featuredChangelogEntries[index];
  if (!entry || !changelogVersion || !changelogDate || !changelogTitle || !changelogSummary || !changelogList) {
    return;
  }

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
