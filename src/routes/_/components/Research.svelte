<script lang="ts">
  import {CONTENT} from "../contents";
  import {reveal} from "../reveal";
</script>

<section id="research">
  <div class="wrap">
    <div class="section-head">
      <h2 class="section-title">Research Focus</h2>
      <span class="marginalia">{CONTENT.research.marginalia}</span>
    </div>
    <div class="research-grid reveal" use:reveal>
      {#each CONTENT.research.items as item, i (i)}
        <div class="research-card">
          <div class="idx">{item.index}</div>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
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

  @media (max-width: 860px) {
    .research-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
