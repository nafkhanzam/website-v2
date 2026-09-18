<script lang="ts">
  import {CONTENT} from "../contents";
  import {reveal} from "../reveal";
</script>

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

<style>
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

  @media (max-width: 860px) {
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
  }
</style>
