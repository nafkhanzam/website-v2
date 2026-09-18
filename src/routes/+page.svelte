<script lang="ts">
  import {CONTENT, SECTIONS} from "./_/contents";
  import Nav from "./_/components/Nav.svelte";
  import Hero from "./_/components/Hero.svelte";
  import About from "./_/components/About.svelte";
  import Position from "./_/components/Position.svelte";
  import Education from "./_/components/Education.svelte";
  import Research from "./_/components/Research.svelte";
  import Projects from "./_/components/Projects.svelte";
  import Publications from "./_/components/Publications.svelte";
  import Notes from "./_/components/Notes.svelte";
  import Teaching from "./_/components/Teaching.svelte";
  import Contact from "./_/components/Contact.svelte";
  import Footer from "./_/components/Footer.svelte";
</script>

<svelte:head>
  <title>{CONTENT.site.title}</title>
  <meta name="description" content={CONTENT.site.description} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Nav />

<main id="top">
  <Hero />
  {#if SECTIONS.about}<About />{/if}
  {#if SECTIONS.position}<Position />{/if}
  {#if SECTIONS.education}<Education />{/if}
  {#if SECTIONS.research}<Research />{/if}
  {#if SECTIONS.projects}<Projects />{/if}
  {#if SECTIONS.publications}<Publications />{/if}
  {#if SECTIONS.notes}<Notes />{/if}
  {#if SECTIONS.teaching}<Teaching />{/if}
  {#if SECTIONS.contact}<Contact />{/if}
</main>

<Footer />
