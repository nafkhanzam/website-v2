<script lang="ts">
  import {CONTENT} from "../contents";
</script>

<footer class="wrap">
  <span>{CONTENT.footer.copyright}</span>
  <span>{CONTENT.footer.tagline}</span>
</footer>

<style>
  footer.wrap {
    padding: 32px 32px;
    border-top: 1px solid var(--bronze-line);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12.5px;
    color: var(--charcoal);
  }

  @media (max-width: 520px) {
    footer.wrap {
      padding: 32px 20px;
    }
  }
</style>
