<script lang="ts">
  import {CONTENT} from "../contents";
  import {reveal} from "../reveal";
</script>

<section id="teaching">
  <div class="wrap">
    <div class="section-head">
      <h2 class="section-title">Teaching</h2>
      <span class="marginalia">{CONTENT.teaching.marginalia}</span>
    </div>
    <div class="teach-grid reveal" use:reveal>
      {#each CONTENT.teaching.courses as course, i (i)}
        <div class="course">
          <div class="course-top">
            <span class="course-code">{course.code}</span>
            <span class="course-code">{course.term}</span>
          </div>
          <h3>{course.title}</h3>
          <p>{course.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .teach-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .course {
    border: 1px solid var(--bronze-line);
    padding: 26px 26px 24px;
  }

  .course-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 10px;
  }

  .course-code {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--bronze);
    letter-spacing: 0.04em;
  }

  .course h3 {
    font-family: var(--serif);
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .course p {
    font-size: 13.5px;
    color: var(--charcoal);
  }

  @media (max-width: 860px) {
    .teach-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
