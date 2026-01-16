document.addEventListener("DOMContentLoaded", () => {
  const banners = document.querySelectorAll(".banner-hero");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".banner-arrow.prev");
  const nextBtn = document.querySelector(".banner-arrow.next");

  let currentIndex = 0;
  const total = banners.length;
  let intervalId;

  function showBanner(index) {
    banners.forEach(b => b.classList.remove("banner-active"));
    dots.forEach(d => d.classList.remove("dot-active"));

    banners[index].classList.add("banner-active");
    dots[index].classList.add("dot-active");

    currentIndex = index;
  }

  function nextBanner() {
    const next = (currentIndex + 1) % total;
    showBanner(next);
  }

  function prevBanner() {
    const prev = (currentIndex - 1 + total) % total;
    showBanner(prev);
  }

  function startAutoSlide() {
    intervalId = setInterval(nextBanner, 8400);
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
  }

  // dot click
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoSlide();
      showBanner(index);
      startAutoSlide();
    });
  });

  // arrow click
  nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextBanner();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevBanner();
    startAutoSlide();
  });

  startAutoSlide();
});
