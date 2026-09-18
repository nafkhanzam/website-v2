<script lang="ts">
  import {CONTENT} from "../contents";
  import {reveal} from "../reveal";
</script>

<section id="contact">
  <div class="wrap contact-grid">
    <div class="contact-quote reveal" use:reveal>
      <p class="lat">{CONTENT.contact.quoteLatin}</p>
      <p class="eng">{CONTENT.contact.quoteAttribution}</p>
    </div>
    <div class="reveal" use:reveal>
      <div class="contact-links">
        {#each CONTENT.contact.links as link, i (i)}
          <a href={link.href} target="_blank" rel="noopener noreferrer external"
            >{link.label} <span class="arrow">&rarr;</span></a
          >
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
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

  @media (max-width: 860px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
</style>
