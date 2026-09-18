<script lang="ts">
  import {CONTENT} from "../contents";
  import {reveal} from "../reveal";
</script>

<section id="publications">
  <div class="wrap">
    <div class="section-head">
      <h2 class="section-title">Selected Publications</h2>
      <span class="marginalia">{CONTENT.publications.marginalia}</span>
    </div>
    <div class="pub-list reveal" use:reveal>
      {#each CONTENT.publications.items as pub, i (i)}
        <div class="pub">
          <div class="year">{pub.year}</div>
          <div>
            <a class="pub-title" href={pub.href} target="_blank" rel="noopener noreferrer external"
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
        rel="noopener noreferrer external"
      >
        View All on Google Scholar <span class="arrow">&rarr;</span>
      </a>
    </div>
  </div>
</section>

<style>
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

  .pub-view-all {
    margin-top: 32px;
  }

  @media (max-width: 860px) {
    .pub {
      grid-template-columns: 60px 1fr;
    }
    .pub .pub-tag {
      grid-column: 1 / -1;
      justify-self: start;
      margin-top: 8px;
    }
  }
</style>
