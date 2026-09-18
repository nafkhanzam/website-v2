<script lang="ts">
  import {CONTENT, SECTIONS} from "../contents";

  const links = CONTENT.nav.links.filter(
    (link) => SECTIONS[link.href.slice(2) as keyof typeof SECTIONS] ?? true,
  );

  let mobileNavOpen = $state(false);

  function toggleMobileNav() {
    mobileNavOpen = !mobileNavOpen;
  }

  function closeMobileNav() {
    mobileNavOpen = false;
  }
</script>

<header class="site-nav">
  <div class="wrap nav-inner">
    <a href="#top" class="nav-mark">{CONTENT.nav.mark} <span>{CONTENT.nav.markSuffix}</span></a>
    <nav class="nav-links">
      {#each links as link, i (i)}
        <a href={link.href} rel="external">{link.label}</a>
      {/each}
    </nav>
    <button
      class="nav-toggle"
      aria-expanded={mobileNavOpen}
      aria-controls="mobileNav"
      onclick={toggleMobileNav}
    >
      Menu
    </button>
  </div>
  {#if mobileNavOpen}
    <nav id="mobileNav" class="wrap mobile-nav-links">
      {#each links as link, i (i)}
        <a href={link.href} rel="external" onclick={closeMobileNav}>{link.label}</a>
      {/each}
    </nav>
  {/if}
</header>

<style>
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

  @media (max-width: 860px) {
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
  }
</style>
