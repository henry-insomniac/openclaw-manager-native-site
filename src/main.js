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
    title: '降低排错门槛',
    text: '把目录、配置、Gateway、环境这些本地问题收进图形界面，不再先靠命令行排查。'
  },
  {
    title: '让普通用户也能修',
    text: '常见动作已经按钮化：配置校验、官方 doctor、官方修复、Gateway 服务重装都能直接点。'
  },
  {
    title: '本地问题，本地处理',
    text: '配置和状态都留在自己的 Mac 上，适合把 OpenClaw 交给团队成员或非技术用户使用。'
  }
];

const capabilityCards = [
  {
    index: '01',
    title: '把本地问题集中到一页',
    text: 'OpenClaw 常见故障往往不是模型本身，而是目录、配置、Gateway、服务或环境波动。这个 app 把它们收进同一个诊断视图。'
  },
  {
    index: '02',
    title: '把修复动作做成按钮',
    text: '看状态，点修复。官方体检、官方修复、Gateway 服务重装和稳定守护都能直接执行，不用自己拼命令。'
  },
  {
    index: '03',
    title: '顺手也把 profile 管理做好',
    text: '除了排错，它也会把 .openclaw 和 .openclaw-* 收进一个视图里，方便切换 active profile 和查看 provider 状态。'
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
    text: '选择包含 .openclaw / .openclaw-* 的父目录。很多“看起来像坏了”的问题，其实只是目录选错。'
  },
  {
    step: 'STEP 03',
    title: '先看诊断结论，再点修复',
    text: '主界面确认 profile 状态后，直接去诊断页看建议动作。目标不是让你学排错，而是让你把问题修掉。'
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
    text: '这类问题的常见根因不是模型本身，而是 Gateway 服务异常。诊断页会直接给出体检、修复和服务重装动作。'
  },
  {
    label: '最常见问题 03',
    title: '睡眠、VPN、代理后状态异常',
    text: '环境波动会影响本地连接和服务状态。诊断页会把环境风险单独列出来，减少误判和无效排查。'
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
    question: '这个 app 核心解决什么问题？',
    answer: '它把 OpenClaw 的本地诊断、修复和维护动作收成图形界面，降低目录、配置、Gateway、日志和环境排查的技术门槛。'
  },
  {
    question: '它是官方产品吗？',
    answer: '不是。它是面向 OpenClaw 本地工作流的第三方原生工具，不代表官方客户端或官方服务。'
  },
  {
    question: '不会命令行的人能用吗？',
    answer: '可以。常见的本地体检、修复、服务重装和状态查看都已经收成图形界面。'
  },
  {
    question: '现在只能管理 Codex 吗？',
    answer: '不是。当前已经按 OpenClaw 的 provider / model 识别 profile，Codex 只是第一个 companion runtime。'
  },
  {
    question: '第一次打开没看到 profile，先查什么？',
    answer: '先确认 OpenClaw 根目录是否选到了父目录，然后执行一次“重启服务并刷新窗口”。这是最常见的本地配置问题。'
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
    summary: '1.0.5 继续对 1.0.4 做性能收口：普通页面不再全量刷新，support 走缓存快路径，启动前还会清理历史 backend 残留。',
    highlights: [
      '去掉菜单栏 20 秒全量轮询和启动时的重复全量刷新，普通页面只拉 manager，诊断页才拉完整 support。',
      'support summary 增加 10s / 45s / 2min 分层缓存，profile 发现也增加 45 秒 state dir cache。',
      '修掉 stale backend 清理里的 pipe 死锁，并在启动时清掉旧 daemon / legacy Node API；安装版空闲 35 秒后 UI 与 daemon 均为 0.0% CPU。'
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
          <small>OpenClaw 本地诊断与维护</small>
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
          <p class="eyebrow">LOCAL DIAGNOSTICS FOR OPENCLAW</p>
          <div class="hero-callout">
            <span class="hero-callout-label">GitHub</span>
            <p>
              仓库已开源：
              <a href="${repoPage}" target="_blank" rel="noreferrer">${releaseOwner}/${releaseRepo}</a>
              。如果这个项目对你有用，欢迎点个 Star。
            </p>
          </div>
          <h1>降低 OpenClaw 的本地维护门槛。<span>状态可见，修复可执行。</span></h1>
          <p class="hero-text">
            OpenClaw 的许多问题发生在本地环境：目录配置、Gateway 服务、代理网络和系统状态。这个 app 把这些诊断与修复步骤收成图形界面，降低维护和交付成本。
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#downloads">下载 ${releaseVersionLabel}</a>
            <a class="button button-secondary" href="#diagnostics">看诊断怎么用</a>
          </div>
          <ul class="hero-tags">
            <li>本地诊断</li>
            <li>维护动作可执行</li>
            <li>状态集中展示</li>
            <li>profile 管理</li>
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
                  <span class="signal-label">DIAGNOSTICS</span>
                  <div class="signal-row">
                    <strong>问题已定位</strong>
                    <span class="status-pill status-pill-healthy">Healthy</span>
                  </div>
                  <p>目录、配置、Gateway 和环境状态都收进同一页，不用先翻日志。</p>
                </article>

                <article class="window-card window-card-compact">
                  <span class="signal-label">一键修复</span>
                  <strong>能看，也能修</strong>
                  <p>官方体检、官方修复、服务重装都在同一页。</p>
                </article>

                <article class="window-card window-card-compact">
                  <span class="signal-label">给普通用户</span>
                  <strong>不依赖命令行</strong>
                  <p>目标是缩短本地问题的定位和修复路径。</p>
                </article>

                <article class="window-card window-card-compact">
                  <span class="signal-label">PROFILE</span>
                  <strong>顺手也把账号管好</strong>
                  <p>.openclaw 和 .openclaw-* 会被统一收进一个视图。</p>
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

      <section class="release-strip" aria-label="产品定位">
        ${releaseStripMarkup}
      </section>

      <section class="section capabilities" id="capabilities">
        <div class="section-heading reveal">
          <p class="eyebrow">CORE VALUE</p>
          <h2>把 OpenClaw 的本地诊断和维护收进一个 app。</h2>
          <p>它不是替代 OpenClaw 本身，而是把本地排查、修复和切换流程收口，降低使用与交付门槛。</p>
        </div>
        <div class="card-grid">
          ${capabilityMarkup}
        </div>
      </section>

      <section class="section operations-section" id="diagnostics">
        <div class="section-heading reveal">
          <p class="eyebrow">WORKFLOW + DIAGNOSTICS</p>
          <h2>先确认环境，再执行修复。</h2>
          <p>目录、Gateway、服务和环境问题都应该在界面里直接定位，而不是让用户先依赖命令行和日志排查。</p>
        </div>
        <div class="operations-layout">
          <article class="workflow-panel">
            <div class="panel-heading reveal">
              <span class="panel-kicker">第一次使用</span>
              <h3>三步把环境看清楚</h3>
            </div>
            <ol class="workflow-list">
              ${workflowMarkup}
            </ol>
          </article>

          <article class="repair-panel">
            <div class="panel-heading reveal reveal-delay-1">
              <span class="panel-kicker">遇到问题时</span>
              <h3>先排这几类本地问题</h3>
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
          <p>如果你想把 OpenClaw 交给非技术用户或团队成员使用，这个 app 就是那层降低本地维护成本的壳。</p>
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
          <h2>先把“它到底解决什么”说清楚。</h2>
        </div>
        <div class="faq-list">
          ${faqMarkup}
        </div>
      </section>

      <section class="cta-section reveal" id="cta">
        <div class="cta-card">
          <p class="eyebrow">READY TO INSTALL</p>
          <h2>降低 OpenClaw 的本地维护门槛。</h2>
          <p>自己安装，先下 DMG；要发给别人，直接发完整交付包，让团队成员也能更容易维护本地环境。</p>
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
