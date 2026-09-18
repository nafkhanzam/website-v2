<script lang="ts">
  import {CONTENT} from "../contents";
  import {reveal} from "../reveal";
</script>

<section id="notes">
  <div class="wrap">
    <div class="section-head">
      <h2 class="section-title">Field Notes</h2>
      <span class="marginalia">{CONTENT.notes.marginalia}</span>
    </div>
    <p class="notes-intro reveal" use:reveal>{CONTENT.notes.intro}</p>

    <div class="notes-list reveal" use:reveal>
      {#each CONTENT.notes.items as note, i (i)}
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

<style>
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

  @media (max-width: 860px) {
    .notes-list {
      grid-template-columns: 1fr;
    }
  }
</style>
