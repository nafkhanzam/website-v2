<script lang="ts">
  import {CONTENT} from "../contents";
  import {reveal} from "../reveal";
</script>

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

<style>
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

  @media (max-width: 860px) {
    .edu-meta {
      align-items: flex-start;
    }
    .edu-detail-row {
      grid-template-columns: 1fr;
      gap: 4px;
    }
  }
</style>
