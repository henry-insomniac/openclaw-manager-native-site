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
const releaseTag = 'v1.0.7';
const releaseVersionLabel = '1.0.7';
const releaseBuildLabel = '2026-03-12';
const repoPage = `https://github.com/${releaseOwner}/${releaseRepo}`;
const releaseBase = `https://github.com/${releaseOwner}/${releaseRepo}/releases/download/${releaseTag}`;
const releasePage = `https://github.com/${releaseOwner}/${releaseRepo}/releases/tag/${releaseTag}`;

const downloads = {
  dmg: `${releaseBase}/OpenClaw.Manager.Native-${releaseVersionLabel}-arm64.dmg`,
  pkg: `${releaseBase}/OpenClaw.Manager.Native-${releaseVersionLabel}-arm64.pkg`,
  zip: `${releaseBase}/OpenClaw.Manager.Native-${releaseVersionLabel}-arm64-mac.zip`,
  delivery: `${releaseBase}/OpenClawManagerNative-${releaseVersionLabel}-delivery.zip`,
  checksums: `${releaseBase}/OpenClawManagerNative-${releaseVersionLabel}-SHA256SUMS.txt`,
};

const capabilityCards = [
  {
    index: '01',
    title: '本地状态',
    text: '集中查看目录、配置、Gateway、服务、环境和 profile 状态。'
  },
  {
    index: '02',
    title: '机器监控面板',
    text: '集中呈现 CPU、内存压力、Swap、磁盘状态、网络吞吐、动态趋势及高占用进程信息。'
  },
  {
    index: '03',
    title: '维护动作',
    text: '可直接执行配置校验、doctor、修复、服务重装和稳定守护。'
  },
  {
    index: '04',
    title: '账号池管理',
    text: '统一查看 .openclaw 和 .openclaw-*，并执行 active profile 切换。'
  }
];

const workflowSteps = [
  {
    step: 'STEP 01',
    title: '安装',
    text: '优先下载 DMG，拖到 Applications。'
  },
  {
    step: 'STEP 02',
    title: '选择根目录',
    text: '选择包含 .openclaw / .openclaw-* 的父目录。'
  },
  {
    step: 'STEP 03',
    title: '查看诊断',
    text: '先看状态，再执行修复动作。'
  }
];

const repairCases = [
  {
    label: '01',
    title: '没有显示 profile',
    text: '先检查根目录是否选到父目录。'
  },
  {
    label: '02',
    title: 'Gateway 不可达',
    text: '先看服务状态，再执行体检、修复或重装服务。'
  },
  {
    label: '03',
    title: '睡眠、VPN、代理后异常',
    text: '检查环境风险、代理和最近唤醒。'
  }
];

const downloadCards = [
  {
    label: 'DMG',
    title: 'DMG 安装包',
    text: '优先使用。',
    bullets: ['拖到 Applications', 'Apple Silicon / arm64', '首次安装优先'],
    buttonLabel: '下载 DMG',
    href: downloads.dmg,
    primary: true
  },
  {
    label: 'PKG',
    title: 'PKG 安装包',
    text: '按安装器流程安装。',
    bullets: ['安装器流程', '适合分发', '适合引导安装'],
    buttonLabel: '下载 PKG',
    href: downloads.pkg,
    primary: false
  },
  {
    label: 'BUNDLE',
    title: '完整交付包',
    text: '包含安装包和校验文件。',
    bullets: ['附带说明', '附带 SHA256', '适合转发'],
    buttonLabel: '下载交付包',
    href: downloads.delivery,
    primary: false
  }
];

const faqEntries = [
  {
    question: '这个 app 核心解决什么问题？',
    answer: '把 OpenClaw 的本地诊断、修复和维护动作收成图形界面。'
  },
  {
    question: '它是官方产品吗？',
    answer: '不是。它是面向 OpenClaw 本地工作流的第三方原生工具，不代表官方客户端或官方服务。'
  },
  {
    question: '不会命令行的人能用吗？',
    answer: '可以。常见的体检、修复、服务重装和状态查看都在界面里。'
  },
  {
    question: '现在只能管理 Codex 吗？',
    answer: '不是。当前已经按 OpenClaw 的 provider / model 识别 profile，Codex 只是第一个 companion runtime。'
  },
  {
    question: '第一次打开没看到 profile，先查什么？',
    answer: '先确认 OpenClaw 根目录是否选到了父目录。'
  },
  {
    question: '监控面板提供哪些信息？',
    answer: '监控面板集中呈现 CPU、内存压力、Swap、磁盘剩余、网络吞吐、动态趋势及高占用进程信息，便于持续观察本机资源状态。'
  }
];

const changelogEntries = [
  {
    version: 'v1.0.7',
    date: '2026-03-12',
    title: '1.0.7 机器监控和性能修复',
    summary: '新增机器监控页、动态趋势和进程视图，同时把启动和缓存过期时的多秒级卡顿收掉。',
    highlights: [
      '新增独立机器监控页，支持 CPU、内存压力、swap、磁盘、网络、占用前 10 进程和 Activity Monitor 跳转。',
      '顶部工具栏增加全局机器速览和动态趋势图，诊断文案从“风险”改成更中性的“状态 / 因素”表达。',
      '启动改成 staged loading，support / machine 非 fresh 路径改成 stale-while-revalidate，普通读取不再因为 TTL 过期卡住 2 到 4 秒。'
    ]
  },
  {
    version: 'v1.0.6',
    date: '2026-03-12',
    title: '1.0.6 UI 和官网收口',
    summary: '原生 app 和官网继续删除无用文案，只保留功能、状态、动作和下载入口。',
    highlights: [
      '原生 app 去掉顶部大总览卡片，诊断页只保留状态、动作和字段，设置页、命令页、账号池同步压短。',
      '原生 app 配色从偏蓝切成更暗的石墨绿 / 灰褐色，降低高饱和强调和无意义描边。',
      '官网删除首屏 GitHub callout、release strip 和底部 CTA，首页收成“功能 / 常见问题 / 下载 / 更新 / FAQ”，GitHub 链接保留。'
    ]
  },
  {
    version: 'v1.0.5',
    date: '2026-03-11',
    title: '1.0.5 性能和启动链修复',
    summary: '减少全量刷新，增加缓存，清理历史 backend 残留。',
    highlights: [
      '去掉菜单栏 20 秒全量轮询和启动时的重复全量刷新，普通页面只拉 manager，诊断页才拉完整 support。',
      'support summary 增加 10s / 45s / 2min 分层缓存，profile 发现也增加 45 秒 state dir cache。',
      '修掉 stale backend 清理里的 pipe 死锁，并在启动时清掉旧 daemon / legacy Node API；安装版空闲 35 秒后 UI 与 daemon 均为 0.0% CPU。'
    ]
  },
  {
    version: 'v1.0.4',
    date: '2026-03-11',
    title: '1.0.4 诊断中心稳定性',
    summary: '收紧诊断流程并降低刷新耗时。',
    highlights: [
      'reopen、菜单栏和弹窗路径改成明确主线程调用，减少桌面端崩溃风险。',
      '诊断页增加“先做这一步 / 最近一次操作 / 维护建议”，官方体检和修复结果改成中文摘要。',
      '安装版实测：manager 约 8.9s 降到 0.5s，support/summary 约 12.0s 降到 3.5s。'
    ]
  },
  {
    version: 'v1.0.3',
    date: '2026-03-11',
    title: '1.0.3 provider-aware 第一阶段',
    summary: '开始按 provider / model 识别 profile。',
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
    summary: '修复版本展示并更新诊断中心。',
    highlights: [
      '原生 app 版本展示改为直接读取 Bundle 版本。',
      '诊断中心继续保留随机探测窗口、原生 daemon 和根因修复面板。',
      '发布包统一切到 1.0.1 版本标识。'
    ]
  },
  {
    version: 'v1.0.0',
    date: '2026-03-10',
    title: '1.0.0 正式版',
    summary: '统一切换、诊断、守护和分发链路。',
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
          <small>OpenClaw 本地维护</small>
        </span>
      </a>
      <nav class="nav-links">
        <a href="#capabilities">功能</a>
        <a href="#diagnostics">问题</a>
        <a href="#downloads">下载</a>
        <a href="#changelog">更新</a>
        <a href="#faq">FAQ</a>
        <a href="${repoPage}" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
        <div class="topbar-tools">
        <div class="topbar-note">
          <span>版本更新</span>
          <a href="${repoPage}" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <a class="nav-cta" href="#downloads">下载 ${releaseVersionLabel}</a>
      </div>
    </header>

    <main>
      <section class="hero" id="hero">
        <div class="hero-copy reveal reveal-delay-1">
          <h1>OpenClaw 本地诊断与维护</h1>
          <p class="hero-text">
            查看目录、配置、Gateway、服务、环境和 profile 状态，直接执行修复动作。
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#downloads">下载 ${releaseVersionLabel}</a>
            <a class="button button-secondary" href="${repoPage}" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <ul class="hero-tags">
            <li>目录</li>
            <li>Gateway</li>
            <li>环境</li>
            <li>Profile</li>
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
                  <span class="signal-label">状态</span>
                  <div class="signal-row">
                    <strong>本地状态</strong>
                    <span class="status-pill status-pill-healthy">Healthy</span>
                  </div>
                  <p>目录、配置、Gateway、环境。</p>
                </article>

                <article class="window-card window-card-compact">
                  <span class="signal-label">修复</span>
                  <strong>直接修复</strong>
                  <p>校验、doctor、修复、重装服务。</p>
                </article>

                <article class="window-card window-card-compact">
                  <span class="signal-label">环境</span>
                  <strong>环境状态</strong>
                  <p>代理、VPN、睡眠恢复。</p>
                </article>

                <article class="window-card window-card-compact">
                  <span class="signal-label">账号池</span>
                  <strong>账号池</strong>
                  <p>.openclaw 和 .openclaw-*。</p>
                </article>

                <article class="terminal-card">
                  <code>[daemon] profile scan complete provider=openclaw</code>
                  <code>[support] action=doctor-fix summary=ready</code>
                  <code>[release] tag=${releaseTag} dmg pkg delivery checksums</code>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section capabilities" id="capabilities">
        <div class="section-heading reveal">
          <h2>功能</h2>
          <p>当前版本已加入独立机器监控面板，用于持续查看本机资源状态、变化趋势及高占用进程。</p>
        </div>
        <div class="card-grid">
          ${capabilityMarkup}
        </div>
      </section>

      <section class="section operations-section" id="diagnostics">
        <div class="section-heading reveal">
          <h2>常见问题</h2>
        </div>
        <div class="operations-layout">
          <article class="workflow-panel">
            <div class="panel-heading reveal">
              <h3>安装和配置</h3>
            </div>
            <ol class="workflow-list">
              ${workflowMarkup}
            </ol>
          </article>

          <article class="repair-panel">
            <div class="panel-heading reveal reveal-delay-1">
              <h3>先看这几类问题</h3>
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
          <h2>下载</h2>
          <p>推荐使用 DMG，其他安装包可按需下载。</p>
        </div>
        <div class="download-grid">
          ${downloadMarkup}
        </div>
        <div class="download-utility reveal">
          <div>
            <strong>当前版本</strong>
            <p>${releaseVersionLabel} · ${releaseBuildLabel}</p>
            <p class="download-meta-note">其他版本正在开发中。</p>
          </div>
          <div>
            <strong>GitHub 仓库</strong>
            <p>如需查看源码、更新记录及已知问题，请访问 GitHub 仓库。如认可本项目，可在 GitHub 标记 Star。</p>
          </div>
          <div class="download-actions">
            <a class="button button-secondary" href="${downloads.zip}" target="_blank" rel="noreferrer">下载 ZIP</a>
            <a class="button button-secondary" href="${downloads.checksums}" target="_blank" rel="noreferrer">SHA256</a>
            <a class="button button-secondary" href="${repoPage}" target="_blank" rel="noreferrer">访问 GitHub</a>
          </div>
        </div>
      </section>

      <section class="section changelog-section" id="changelog">
        <div class="section-heading reveal">
          <h2>更新记录</h2>
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
            <div class="repo-support-note">
              <strong>版本发布与更新记录以 GitHub 为准</strong>
              <p>版本更新、修复细节及后续计划均优先发布于 GitHub。如认可本项目，可在 GitHub 标记 Star。</p>
            </div>
            <div class="download-actions">
              <a class="button button-secondary" href="${releasePage}" target="_blank" rel="noreferrer">看 Release</a>
              <a class="button button-star" href="${repoPage}" target="_blank" rel="noreferrer">前往 GitHub 标记 Star</a>
            </div>
          </article>
        </div>
      </section>

      <section class="section faq-section" id="faq">
        <div class="section-heading reveal">
          <h2>常见问题</h2>
        </div>
        <div class="faq-list">
          ${faqMarkup}
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
