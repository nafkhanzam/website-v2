/** Svelte action: reveal an element (add `.in`) when it scrolls into view. */
export function reveal(node: HTMLElement) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add("in");
          io.unobserve(node);
        }
      });
    },
    {threshold: 0.12},
  );
  io.observe(node);

  return {
    destroy() {
      io.disconnect();
    },
  };
}
