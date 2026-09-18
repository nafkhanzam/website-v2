<script lang="ts">
  import type {CONTENT} from "../contents";

  type Project = (typeof CONTENT.projects.items)[number];

  let {project, onClose}: {project: Project; onClose: () => void} = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="modal-overlay" onclick={onClose}>
  <div
    class="modal-box"
    role="dialog"
    tabindex="-1"
    aria-modal="true"
    aria-labelledby="modalTitle"
    onclick={(e) => e.stopPropagation()}
  >
    <button type="button" class="modal-close" onclick={onClose} aria-label="Close">
      &times;
    </button>
    <div class="modal-thumb">
      <img
        src={project.thumb}
        alt={project.title}
        class:align-top={"thumbAlign" in project && project.thumbAlign === "top"}
      />
    </div>
    <div class="modal-body">
      <div class="project-meta">
        <span class="project-year">{project.year}</span>
        {#each project.tags as tag (tag)}
          <span class="project-tag">{tag}</span>
        {/each}
      </div>
      <h3 id="modalTitle">{project.title}</h3>
      {#each project.description as paragraph, i (i)}
        <p>{paragraph}</p>
      {/each}
      {#if project.href}
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer external"
          class="btn btn-ghost"
        >
          View Project <span class="arrow">&rarr;</span>
        </a>
      {/if}
    </div>
  </div>
</div>

<style>
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
    object-position: center;
  }

  .modal-thumb img.align-top {
    object-position: top;
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

  /* shared with Projects.svelte card meta */
  .project-meta {
    display: flex;
    align-items: center;
    gap: 12px;
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
</style>
