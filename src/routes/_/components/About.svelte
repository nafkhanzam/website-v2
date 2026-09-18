<script lang="ts">
  import {CONTENT} from "../contents";
  import {reveal} from "../reveal";
</script>

<section id="about">
  <div class="wrap">
    <div class="section-head">
      <h2 class="section-title">About</h2>
      <span class="marginalia">{CONTENT.about.marginalia}</span>
    </div>
    <div class="about-grid">
      <div class="about-body reveal" use:reveal>
        {#each CONTENT.about.paragraphs as paragraph, i (i)}
          <p>{paragraph}</p>
        {/each}
      </div>
      <div class="reveal" use:reveal>
        <div class="stat-list">
          {#each CONTENT.about.stats as stat, i (i)}
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

<style>
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

  @media (max-width: 860px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 36px;
    }
  }

  @media (max-width: 520px) {
    .stat-list {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
