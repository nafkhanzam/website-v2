<script lang="ts">
  import {CONTENT} from "../contents";
  import {reveal} from "../reveal";
  import ProjectModal from "./ProjectModal.svelte";

  type Project = (typeof CONTENT.projects.items)[number];

  let activeProject: Project | null = $state(null);

  function openProject(project: Project) {
    activeProject = project;
  }

  function closeProject() {
    activeProject = null;
  }

  function handleWindowKeydown(event: KeyboardEvent) {
    if (event.key === "Escape" && activeProject) {
      closeProject();
    }
  }

  $effect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
  });
</script>

<svelte:window on:keydown={handleWindowKeydown} />

<section id="projects">
  <div class="wrap">
    <div class="section-head">
      <h2 class="section-title">Projects</h2>
      <span class="marginalia">{CONTENT.projects.marginalia}</span>
    </div>
    <div class="projects-grid reveal" use:reveal>
      {#each CONTENT.projects.items as project, i (i)}
        <button
          type="button"
          class="project-card"
          onclick={() => openProject(project)}
          aria-haspopup="dialog"
        >
          <div class="project-thumb">
            <img
              src={project.thumb}
              alt={project.title}
              loading="lazy"
              class:align-top={"thumbAlign" in project && project.thumbAlign === "top"}
            />
          </div>
          <div class="project-info">
            <div class="project-meta">
              <span class="project-year">{project.year}</span>
              <span class="project-tag">{project.tags[0]}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </div>
        </button>
      {/each}
    </div>
  </div>
</section>

{#if activeProject}
  <ProjectModal project={activeProject} onClose={closeProject} />
{/if}

<style>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1px;
    background: var(--bronze-line);
    border: 1px solid var(--bronze-line);
  }

  .project-card {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: left;
    background: var(--bone);
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .project-card:hover,
  .project-card:focus-visible {
    background: var(--stone);
  }

  .project-thumb {
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: var(--stone);
    border-bottom: 1px solid var(--bronze-line);
  }

  .project-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .project-thumb img.align-top {
    object-position: top;
  }

  .project-info {
    padding: 24px 26px 28px;
  }

  .project-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
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

  .project-info h3 {
    font-family: var(--serif);
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .project-info p {
    font-size: 14px;
    color: var(--charcoal);
    line-height: 1.65;
  }

  @media (max-width: 860px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
