<script lang="ts">
  import {resolve} from "$app/paths";
  import {CONTENT} from "../contents";
</script>

<section class="hero no-border">
  <div class="wrap hero-grid">
    <div>
      <div class="hero-eyebrow eyebrow">{CONTENT.hero.eyebrow}</div>
      <h1 class="hero-name">{CONTENT.hero.name}</h1>
      <p class="hero-role">{CONTENT.hero.role}</p>

      <div class="hero-quote">
        <p class="quote">{CONTENT.hero.quote} <span class="quote-attribution"
            >— {CONTENT.hero.quoteAttribution}</span
          ></p>
      </div>

      <div class="hero-actions">
        <a href={resolve(CONTENT.hero.primaryCta.href)} class="btn btn-primary"
          >{CONTENT.hero.primaryCta.label}</a
        >
        <a
          href={CONTENT.hero.secondaryCta.href}
          class="btn btn-ghost"
          target="_blank"
          rel="noopener noreferrer external">{CONTENT.hero.secondaryCta.label}</a
        >
      </div>
    </div>

    <div class="hero-portrait">
      <img src="/photo.jpg" alt={CONTENT.hero.portraitInitials} />
    </div>
  </div>
</section>

<style>
  .hero {
    padding: 96px 0 80px;
    position: relative;
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

  .hero-quote .quote {
    font-family: var(--serif);
    font-style: italic;
    font-size: 19px;
    color: var(--bronze);
    line-height: 1.5;
  }

  .hero-quote .quote-attribution {
    font-style: normal;
    font-size: 14px;
    color: var(--charcoal);
  }

  .hero-actions {
    margin-top: 36px;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
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

  @media (max-width: 860px) {
    .hero-grid {
      grid-template-columns: 1fr;
    }
    .hero-portrait {
      order: -1;
      max-width: 260px;
      margin: 0 auto;
    }
  }
</style>
