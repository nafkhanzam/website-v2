<script lang="ts">
  import {CONTENT} from "./_/contents";

  type Project = (typeof CONTENT.projects.items)[number];

  let mobileNavOpen = $state(false);

  function toggleMobileNav() {
    mobileNavOpen = !mobileNavOpen;
  }

  function closeMobileNav() {
    mobileNavOpen = false;
  }

  let activeProject: Project | null = $state(null);

  function openProject(project: Project) {
    activeProject = project;
  }

  function closeProject() {
    activeProject = null;
  }

  function handleWindowKeydown(event: KeyboardEvent) {
    if (event.key === "Escape" && activeProject) {
      closeProject();
    }
  }

  $effect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
  });

  /** Svelte action: reveal an element (add `.in`) when it scrolls into view. */
  function reveal(node: HTMLElement) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("in");
            io.unobserve(node);
          }
        });
      },
      {threshold: 0.12},
    );
    io.observe(node);

    return {
      destroy() {
        io.disconnect();
      },
    };
  }
</script>

<svelte:head>
  <title>{CONTENT.site.title}</title>
  <meta name="description" content={CONTENT.site.description} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<svelte:window on:keydown={handleWindowKeydown} />

<header class="site-nav">
  <div class="wrap nav-inner">
    <a href="#top" class="nav-mark">{CONTENT.nav.mark} <span>{CONTENT.nav.markSuffix}</span></a>
    <nav class="nav-links">
      {#each CONTENT.nav.links as link}
        <a href={link.href}>{link.label}</a>
      {/each}
    </nav>
    <button
      class="nav-toggle"
      aria-expanded={mobileNavOpen}
      aria-controls="mobileNav"
      on:click={toggleMobileNav}
    >
      Menu
    </button>
  </div>
  {#if mobileNavOpen}
    <nav id="mobileNav" class="wrap mobile-nav-links">
      {#each CONTENT.nav.links as link}
        <a href={link.href} on:click={closeMobileNav}>{link.label}</a>
      {/each}
    </nav>
  {/if}
</header>

<main id="top">
  <!-- HERO -->
  <section class="hero no-border">
    <div class="wrap hero-grid">
      <div>
        <div class="hero-eyebrow eyebrow">{CONTENT.hero.eyebrow}</div>
        <h1 class="hero-name">{CONTENT.hero.name}</h1>
        <p class="hero-role">{CONTENT.hero.role}</p>

        <div class="hero-quote">
          <p class="lat">{CONTENT.hero.quoteLatin}</p>
          <p class="eng">{CONTENT.hero.quoteEnglish}</p>
        </div>

        <div class="hero-actions">
          <a href={CONTENT.hero.primaryCta.href} class="btn btn-primary"
            >{CONTENT.hero.primaryCta.label}</a
          >
          <a
            href={CONTENT.hero.secondaryCta.href}
            class="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer">{CONTENT.hero.secondaryCta.label}</a
          >
        </div>
      </div>

      <div class="hero-portrait">
        <img src="/photo.jpg" alt={CONTENT.hero.portraitInitials} />
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about">
    <div class="wrap">
      <div class="section-head">
        <h2 class="section-title">About</h2>
        <span class="marginalia">{CONTENT.about.marginalia}</span>
      </div>
      <div class="about-grid">
        <div class="about-body reveal" use:reveal>
          {#each CONTENT.about.paragraphs as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
        <div class="reveal" use:reveal>
          <div class="stat-list">
            {#each CONTENT.about.stats as stat}
              <div class="stat">
                <span class="num">{stat.num}</span>
                <span class="lbl">{stat.label}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- POSITION -->
  <section id="position">
    <div class="wrap">
      <div class="section-head">
        <h2 class="section-title">Position</h2>
        <span class="marginalia">{CONTENT.position.marginalia}</span>
      </div>
      {#each CONTENT.position.items as pos (pos.role)}
        <div class="position-card reveal" use:reveal>
          <div class="position-logo">
            <img src={pos.logo} alt={pos.institution} loading="lazy" />
          </div>
          <div class="position-info">
            <h3>{pos.institution}</h3>
            <div class="position-role">{pos.role}</div>
            <dl class="position-sub">
              {#each pos.details as detail (detail.label)}
                <div class="position-sub-row">
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              {/each}
            </dl>
          </div>
          <div class="position-period">{pos.period}</div>
        </div>
      {/each}
    </div>
  </section>

  <!-- EDUCATION -->
  <section id="education">
    <div class="wrap">
      <div class="section-head">
        <h2 class="section-title">Education</h2>
        <span class="marginalia">{CONTENT.education.marginalia}</span>
      </div>
      <div class="edu-list reveal" use:reveal>
        {#each CONTENT.education.items as edu (edu.degree)}
          <div class="edu-item">
            <div class="edu-top">
              <div class="edu-heading">
                <div class="edu-logo">
                  <img src={edu.logo} alt={edu.institution} loading="lazy" />
                </div>
                <div>
                  <h3>{edu.institution}</h3>
                  <div class="edu-degree">{edu.degree}</div>
                </div>
              </div>
              <div class="edu-meta">
                <span class="edu-gpa">GPA {edu.gpa.score} / {edu.gpa.scale}</span>
                <span class="edu-period">{edu.period}</span>
              </div>
            </div>
            <dl class="edu-details">
              {#each edu.details as detail (detail.label)}
                <div class="edu-detail-row">
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              {/each}
            </dl>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- RESEARCH -->
  <section id="research">
    <div class="wrap">
      <div class="section-head">
        <h2 class="section-title">Research Focus</h2>
        <span class="marginalia">{CONTENT.research.marginalia}</span>
      </div>
      <div class="research-grid reveal" use:reveal>
        {#each CONTENT.research.items as item}
          <div class="research-card">
            <div class="idx">{item.index}</div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects">
    <div class="wrap">
      <div class="section-head">
        <h2 class="section-title">Projects</h2>
        <span class="marginalia">{CONTENT.projects.marginalia}</span>
      </div>
      <div class="projects-grid reveal" use:reveal>
        {#each CONTENT.projects.items as project}
          <button
            type="button"
            class="project-card"
            on:click={() => openProject(project)}
            aria-haspopup="dialog"
          >
            <div class="project-thumb">
              <img src={project.thumb} alt={project.title} loading="lazy" />
            </div>
            <div class="project-info">
              <div class="project-meta">
                <span class="project-year">{project.year}</span>
                <span class="project-tag">{project.tags[0]}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>
          </button>
        {/each}
      </div>
    </div>
  </section>

  <!-- PUBLICATIONS -->
  <section id="publications">
    <div class="wrap">
      <div class="section-head">
        <h2 class="section-title">Selected Publications</h2>
        <span class="marginalia">{CONTENT.publications.marginalia}</span>
      </div>
      <div class="pub-list reveal" use:reveal>
        {#each CONTENT.publications.items as pub}
          <div class="pub">
            <div class="year">{pub.year}</div>
            <div>
              <a class="pub-title" href={pub.href} target="_blank" rel="noopener noreferrer"
                >{pub.title}</a
              >
              <div class="pub-venue">{pub.venue}</div>
            </div>
            <div class="pub-tag">{pub.tag}</div>
          </div>
        {/each}
      </div>
      <div class="pub-view-all reveal" use:reveal>
        <a
          href={CONTENT.publications.viewAllHref}
          class="btn btn-ghost"
          target="_blank"
          rel="noopener noreferrer"
        >
          View All on Google Scholar <span class="arrow">&rarr;</span>
        </a>
      </div>
    </div>
  </section>

  <!-- FIELD NOTES (signature element) -->
  <section id="notes">
    <div class="wrap">
      <div class="section-head">
        <h2 class="section-title">Field Notes</h2>
        <span class="marginalia">{CONTENT.notes.marginalia}</span>
      </div>
      <p class="notes-intro reveal" use:reveal>{CONTENT.notes.intro}</p>

      <div class="notes-list reveal" use:reveal>
        {#each CONTENT.notes.items as note}
          <div class="note">
            <div class="note-mark">{note.mark}</div>
            <div>
              <div class="note-text">{note.text}</div>
              <div class="note-gloss">{note.gloss}</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- TEACHING -->
  <section id="teaching">
    <div class="wrap">
      <div class="section-head">
        <h2 class="section-title">Teaching</h2>
        <span class="marginalia">{CONTENT.teaching.marginalia}</span>
      </div>
      <div class="teach-grid reveal" use:reveal>
        {#each CONTENT.teaching.courses as course}
          <div class="course">
            <div class="course-top">
              <span class="course-code">{course.code}</span>
              <span class="course-code">{course.term}</span>
            </div>
            <h3>{course.title}</h3>
            <p>{course.body}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact">
    <div class="wrap contact-grid">
      <div class="contact-quote reveal" use:reveal>
        <p class="lat">{CONTENT.contact.quoteLatin}</p>
        <p class="eng">{CONTENT.contact.quoteAttribution}</p>
      </div>
      <div class="reveal" use:reveal>
        <div class="contact-links">
          {#each CONTENT.contact.links as link}
            <a href={link.href} target="_blank" rel="noopener noreferrer"
              >{link.label} <span class="arrow">&rarr;</span></a
            >
          {/each}
        </div>
      </div>
    </div>
  </section>
</main>

{#if activeProject}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="modal-overlay" on:click={closeProject}>
    <div
      class="modal-box"
      role="dialog"
      tabindex="-1"
      aria-modal="true"
      aria-labelledby="modalTitle"
      on:click|stopPropagation
    >
      <button type="button" class="modal-close" on:click={closeProject} aria-label="Close">
        &times;
      </button>
      <div class="modal-thumb">
        <img src={activeProject.thumb} alt={activeProject.title} />
      </div>
      <div class="modal-body">
        <div class="project-meta">
          <span class="project-year">{activeProject.year}</span>
          {#each activeProject.tags as tag (tag)}
            <span class="project-tag">{tag}</span>
          {/each}
        </div>
        <h3 id="modalTitle">{activeProject.title}</h3>
        {#each activeProject.description as paragraph, i (i)}
          <p>{paragraph}</p>
        {/each}
        {#if activeProject.href}
          <a
            href={activeProject.href}
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-ghost"
          >
            View Project <span class="arrow">&rarr;</span>
          </a>
        {/if}
      </div>
    </div>
  </div>
{/if}

<footer class="wrap">
  <span>{CONTENT.footer.copyright}</span>
  <span>{CONTENT.footer.tagline}</span>
</footer>

<style>
  :global(:root) {
    --ink: #1c1b19;
    --charcoal: #3a3a36;
    --bone: #f7f5f0;
    --stone: #e8e3d8;
    --bronze: #8b7355;
    --gilt: #c9a15d;
    --bronze-line: rgba(139, 115, 85, 0.28);
    --max-w: 1120px;
    --serif: "Cormorant", Georgia, serif;
    --sans: "Inter", -apple-system, sans-serif;
    --mono: "JetBrains Mono", monospace;
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    :global(html) {
      scroll-behavior: auto;
    }
    :global(*) {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  :global(body) {
    background: var(--bone);
    color: var(--ink);
    font-family: var(--sans);
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :global(::selection) {
    background: var(--gilt);
    color: var(--ink);
  }

  :global(:focus-visible) {
    outline: 2px solid var(--bronze);
    outline-offset: 3px;
  }

  .wrap {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: 0 32px;
  }

  /* ---------- eyebrow / label style ---------- */
  .eyebrow {
    font-family: var(--sans);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--bronze);
  }

  .marginalia {
    font-family: var(--serif);
    font-style: italic;
    font-size: 14px;
    color: var(--bronze);
    letter-spacing: 0.01em;
  }

  /* ---------- nav ---------- */
  header.site-nav {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(247, 245, 240, 0.88);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--bronze-line);
  }

  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
  }

  .nav-mark {
    font-family: var(--serif);
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .nav-mark span {
    color: var(--bronze);
  }

  nav.nav-links {
    display: flex;
    gap: 36px;
  }

  nav.nav-links a {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--charcoal);
    position: relative;
    padding: 4px 0;
  }

  nav.nav-links a::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 1px;
    background: var(--bronze);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }

  nav.nav-links a:hover::after,
  nav.nav-links a:focus-visible::after {
    transform: scaleX(1);
  }

  .nav-toggle {
    display: none;
  }

  .mobile-nav-links {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-bottom: 16px;
  }

  .mobile-nav-links a {
    padding: 10px 0;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--charcoal);
  }

  /* ---------- hero ---------- */
  .hero {
    padding: 96px 0 80px;
    position: relative;
  }

  .no-border {
    border-top: none;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 64px;
    align-items: center;
  }

  .hero-eyebrow {
    margin-bottom: 22px;
  }

  h1.hero-name {
    font-family: var(--serif);
    font-weight: 500;
    font-size: clamp(42px, 6vw, 68px);
    line-height: 1.05;
    letter-spacing: -0.01em;
    color: var(--ink);
  }

  .hero-role {
    margin-top: 14px;
    font-size: 18px;
    color: var(--charcoal);
    max-width: 46ch;
  }

  .hero-quote {
    margin-top: 28px;
    padding-left: 18px;
    border-left: 2px solid var(--bronze);
  }

  .hero-quote .lat {
    font-family: var(--serif);
    font-style: italic;
    font-size: 19px;
    color: var(--bronze);
    line-height: 1.5;
  }

  .hero-quote .eng {
    margin-top: 4px;
    font-size: 13px;
    color: var(--charcoal);
    letter-spacing: 0.02em;
  }

  .hero-actions {
    margin-top: 36px;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 26px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border: 1px solid var(--ink);
    transition:
      background 0.2s ease,
      color 0.2s ease,
      border-color 0.2s ease;
  }

  .btn-primary {
    background: var(--ink);
    color: var(--bone);
  }
  .btn-primary:hover,
  .btn-primary:focus-visible {
    background: var(--bronze);
    border-color: var(--bronze);
  }

  .btn-ghost {
    background: transparent;
    color: var(--ink);
    border-color: var(--bronze-line);
  }
  .btn-ghost:hover,
  .btn-ghost:focus-visible {
    border-color: var(--bronze);
    color: var(--bronze);
  }

  .hero-portrait {
    position: relative;
    aspect-ratio: 4 / 5;
    background: var(--stone);
    border: 1px solid var(--bronze-line);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .hero-portrait img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-portrait::before {
    content: "";
    position: absolute;
    inset: 14px;
    border: 1px solid var(--bronze-line);
    pointer-events: none;
  }

  /* ---------- section shell ---------- */
  section {
    padding: 88px 0;
    border-top: 1px solid var(--bronze-line);
  }

  .section-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 24px;
    margin-bottom: 48px;
    flex-wrap: wrap;
  }

  h2.section-title {
    font-family: var(--serif);
    font-weight: 500;
    font-size: clamp(28px, 3.4vw, 38px);
    letter-spacing: -0.01em;
  }

  /* ---------- about ---------- */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
  }

  .about-body p {
    color: var(--charcoal);
    margin-bottom: 18px;
    max-width: 58ch;
  }
  .about-body p:last-child {
    margin-bottom: 0;
  }

  .stat-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px 20px;
  }

  .stat {
    border-left: 2px solid var(--bronze-line);
    padding-left: 16px;
  }

  .stat .num {
    font-family: var(--serif);
    font-size: 34px;
    font-weight: 500;
    color: var(--ink);
    display: block;
  }

  .stat .lbl {
    font-size: 12px;
    color: var(--bronze);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-top: 4px;
    display: block;
  }

  /* ---------- position ---------- */
  .position-card {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 32px;
    padding: 40px 44px;
    border: 1px solid var(--bronze-line);
    background: var(--stone);
  }

  .position-logo {
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bone);
    border: 1px solid var(--bronze-line);
  }

  .position-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .position-info h3 {
    font-family: var(--serif);
    font-size: 24px;
    font-weight: 600;
  }

  .position-role {
    margin-top: 6px;
    font-size: 15px;
    color: var(--charcoal);
  }

  .position-sub {
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .position-sub-row {
    display: flex;
    gap: 8px;
    font-size: 13px;
    color: var(--charcoal);
    line-height: 1.6;
  }

  .position-sub-row dt {
    flex-shrink: 0;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--bronze);
    padding-top: 2px;
  }

  .position-period {
    font-family: var(--mono);
    font-size: 13px;
    color: var(--bronze);
    letter-spacing: 0.04em;
    white-space: nowrap;
    padding-left: 32px;
    border-left: 1px solid var(--bronze-line);
    align-self: stretch;
    display: flex;
    align-items: center;
  }

  /* ---------- education ---------- */
  .edu-list {
    display: flex;
    flex-direction: column;
  }

  .edu-item {
    padding: 32px 0;
    border-bottom: 1px solid var(--bronze-line);
  }
  .edu-item:first-child {
    border-top: 1px solid var(--bronze-line);
  }

  .edu-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 24px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .edu-heading {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .edu-logo {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bone);
    border: 1px solid var(--bronze-line);
  }

  .edu-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .edu-top h3 {
    font-family: var(--serif);
    font-size: 22px;
    font-weight: 600;
  }

  .edu-degree {
    margin-top: 4px;
    font-size: 14.5px;
    color: var(--charcoal);
  }

  .edu-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
  }

  .edu-gpa,
  .edu-period {
    font-family: var(--mono);
    font-size: 12px;
    letter-spacing: 0.04em;
    white-space: nowrap;
  }

  .edu-gpa {
    color: var(--bronze);
  }

  .edu-period {
    color: var(--charcoal);
  }

  .edu-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .edu-detail-row {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 16px;
  }

  .edu-detail-row dt {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--bronze);
    padding-top: 2px;
  }

  .edu-detail-row dd {
    font-size: 14px;
    color: var(--charcoal);
    line-height: 1.6;
  }

  /* ---------- research ---------- */
  .research-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--bronze-line);
    border: 1px solid var(--bronze-line);
  }

  .research-card {
    background: var(--bone);
    padding: 32px 28px;
    transition: background 0.2s ease;
  }

  .research-card:hover {
    background: var(--stone);
  }

  .research-card .idx {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--bronze);
    letter-spacing: 0.05em;
  }

  .research-card h3 {
    font-family: var(--serif);
    font-size: 22px;
    font-weight: 600;
    margin-top: 12px;
    margin-bottom: 10px;
  }

  .research-card p {
    font-size: 14px;
    color: var(--charcoal);
    line-height: 1.65;
  }

  /* ---------- projects ---------- */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1px;
    background: var(--bronze-line);
    border: 1px solid var(--bronze-line);
  }

  .project-card {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: left;
    background: var(--bone);
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .project-card:hover,
  .project-card:focus-visible {
    background: var(--stone);
  }

  .project-thumb {
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: var(--stone);
    border-bottom: 1px solid var(--bronze-line);
  }

  .project-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project-info {
    padding: 24px 26px 28px;
  }

  .project-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }

  .project-year {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--bronze);
    letter-spacing: 0.04em;
  }

  .project-tag {
    font-size: 11px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--bronze);
    border: 1px solid var(--bronze-line);
    padding: 3px 9px;
  }

  .project-info h3 {
    font-family: var(--serif);
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .project-info p {
    font-size: 14px;
    color: var(--charcoal);
    line-height: 1.65;
  }

  /* ---------- project modal ---------- */
  .modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 100;
    background: rgba(28, 27, 25, 0.72);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }

  .modal-box {
    position: relative;
    width: 100%;
    max-width: 640px;
    max-height: 88vh;
    overflow-y: auto;
    background: var(--bone);
    border: 1px solid var(--bronze-line);
  }

  .modal-close {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 1;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bone);
    border: 1px solid var(--bronze-line);
    font-size: 20px;
    line-height: 1;
    color: var(--ink);
    cursor: pointer;
    transition:
      color 0.2s ease,
      border-color 0.2s ease;
  }

  .modal-close:hover,
  .modal-close:focus-visible {
    color: var(--bronze);
    border-color: var(--bronze);
  }

  .modal-thumb {
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: var(--stone);
    border-bottom: 1px solid var(--bronze-line);
  }

  .modal-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .modal-body {
    padding: 32px 36px 36px;
  }

  .modal-body .project-meta {
    margin-bottom: 16px;
  }

  .modal-body h3 {
    font-family: var(--serif);
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .modal-body p {
    font-size: 14.5px;
    color: var(--charcoal);
    line-height: 1.7;
    margin-bottom: 14px;
  }

  .modal-body .btn {
    margin-top: 8px;
  }

  .pub-view-all {
    margin-top: 32px;
  }

  /* ---------- publications ---------- */
  .pub-list {
    display: flex;
    flex-direction: column;
  }

  .pub {
    display: grid;
    grid-template-columns: 90px 1fr auto;
    gap: 24px;
    align-items: start;
    padding: 24px 0;
    border-bottom: 1px solid var(--bronze-line);
  }

  .pub:first-child {
    border-top: 1px solid var(--bronze-line);
  }

  .pub .year {
    font-family: var(--mono);
    font-size: 14px;
    color: var(--bronze);
    padding-top: 3px;
  }

  .pub .pub-title {
    display: block;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    transition: color 0.2s ease;
  }

  .pub .pub-title:hover,
  .pub .pub-title:focus-visible {
    color: var(--bronze);
  }

  .pub .pub-venue {
    font-size: 13.5px;
    color: var(--charcoal);
    margin-top: 6px;
  }

  .pub .pub-tag {
    font-size: 11px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--bronze);
    border: 1px solid var(--bronze-line);
    padding: 4px 10px;
    white-space: nowrap;
    height: fit-content;
  }

  /* ---------- field notes (signature element) ---------- */
  .notes-intro {
    max-width: 62ch;
    color: var(--charcoal);
    margin-bottom: 48px;
  }

  .notes-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 48px;
    border-top: 1px solid var(--bronze-line);
  }

  .note {
    display: grid;
    grid-template-columns: 64px 1fr;
    gap: 28px;
    padding: 30px 0;
    border-bottom: 1px solid var(--bronze-line);
  }

  .note .note-mark {
    font-family: var(--serif);
    font-style: italic;
    font-size: 15px;
    color: var(--bronze);
    padding-top: 2px;
  }

  .note .note-text {
    font-family: var(--serif);
    font-size: 19px;
    font-weight: 400;
    line-height: 1.55;
    color: var(--ink);
  }

  .note .note-gloss {
    margin-top: 8px;
    font-family: var(--sans);
    font-size: 13.5px;
    color: var(--charcoal);
  }

  /* ---------- teaching ---------- */
  .teach-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .course {
    border: 1px solid var(--bronze-line);
    padding: 26px 26px 24px;
  }

  .course-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 10px;
  }

  .course-code {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--bronze);
    letter-spacing: 0.04em;
  }

  .course h3 {
    font-family: var(--serif);
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .course p {
    font-size: 13.5px;
    color: var(--charcoal);
  }

  /* ---------- contact ---------- */
  .contact-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 64px;
    align-items: start;
  }

  .contact-quote .lat {
    font-family: var(--serif);
    font-style: italic;
    font-size: 26px;
    line-height: 1.5;
    color: var(--ink);
  }
  .contact-quote .eng {
    margin-top: 12px;
    font-size: 14px;
    color: var(--bronze);
    letter-spacing: 0.03em;
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .contact-links a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 0;
    border-bottom: 1px solid var(--bronze-line);
    font-size: 15px;
    font-weight: 500;
  }
  .contact-links a:first-child {
    border-top: 1px solid var(--bronze-line);
  }

  .contact-links a .arrow {
    color: var(--bronze);
    transition: transform 0.2s ease;
  }
  .contact-links a:hover .arrow,
  .contact-links a:focus-visible .arrow {
    transform: translateX(4px);
  }

  footer.wrap {
    padding: 32px 32px;
    border-top: 1px solid var(--bronze-line);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12.5px;
    color: var(--charcoal);
  }

  /* ---------- reveal on scroll ---------- */
  :global(.reveal) {
    opacity: 0;
    transform: translateY(14px);
    transition:
      opacity 0.6s ease,
      transform 0.6s ease;
  }
  :global(.reveal.in) {
    opacity: 1;
    transform: translateY(0);
  }

  /* ---------- responsive ---------- */
  @media (max-width: 860px) {
    .hero-grid {
      grid-template-columns: 1fr;
    }
    .hero-portrait {
      order: -1;
      max-width: 260px;
      margin: 0 auto;
    }
    .about-grid {
      grid-template-columns: 1fr;
      gap: 36px;
    }
    .position-card {
      grid-template-columns: auto 1fr;
      padding: 28px;
    }
    .position-period {
      grid-column: 1 / -1;
      padding-left: 0;
      padding-top: 16px;
      border-left: none;
      border-top: 1px solid var(--bronze-line);
    }
    .edu-meta {
      align-items: flex-start;
    }
    .edu-detail-row {
      grid-template-columns: 1fr;
      gap: 4px;
    }
    .research-grid {
      grid-template-columns: 1fr;
    }
    .notes-list {
      grid-template-columns: 1fr;
    }
    .projects-grid {
      grid-template-columns: 1fr;
    }
    .teach-grid {
      grid-template-columns: 1fr;
    }
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    nav.nav-links {
      display: none;
    }
    .nav-toggle {
      display: block;
      background: none;
      border: 1px solid var(--bronze-line);
      padding: 8px 12px;
      font-size: 12px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .pub {
      grid-template-columns: 60px 1fr;
    }
    .pub .pub-tag {
      grid-column: 1 / -1;
      justify-self: start;
      margin-top: 8px;
    }
  }

  @media (max-width: 520px) {
    .wrap {
      padding: 0 20px;
    }
    footer.wrap {
      padding: 32px 20px;
    }
    .stat-list {
      grid-template-columns: 1fr 1fr;
    }
    section {
      padding: 64px 0;
    }
  }
</style>
