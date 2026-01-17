document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".banner").forEach(initSlider);
});

function initSlider(slider) {
  const banners = slider.querySelectorAll(".banner-image");
  const dots = slider.querySelectorAll(".dot");
  const prevBtn = slider.querySelector(".banner-arrow.prev");
  const nextBtn = slider.querySelector(".banner-arrow.next");

  let currentIndex = 0;
  const total = banners.length;
  let intervalId;

  function showBanner(index) {
    banners.forEach(b => b.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    banners[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;
  }

  function nextBanner() {
    showBanner((currentIndex + 1) % total);
  }

  function prevBanner() {
    showBanner((currentIndex - 1 + total) % total);
  }

  function startAutoSlide() {
    intervalId = setInterval(nextBanner, 8400);
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoSlide();
      showBanner(index);
      startAutoSlide();
    });
  });

  nextBtn?.addEventListener("click", () => {
    stopAutoSlide();
    nextBanner();
    startAutoSlide();
  });

  prevBtn?.addEventListener("click", () => {
    stopAutoSlide();
    prevBanner();
    startAutoSlide();
  });

  startAutoSlide();
}
