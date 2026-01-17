document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelectorAll(".banner");

  hero.forEach(slider => {
    const banners = slider.querySelectorAll(".banner-image");
    const dots = slider.querySelectorAll(".dot");

    if (banners.length === 0 || dots.length === 0) return;

    let currentIndex = 0;
    const total = banners.length;

    function showBanner(index) {
      banners.forEach(b => b.classList.remove("active"));
      dots.forEach(d => d.classList.remove("active"));

      banners[index].classList.add("active");
      dots[index].classList.add("active");

      currentIndex = index;
    }

    showBanner(0); // 👈 quan trọng

    setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= total) nextIndex = 0;
      showBanner(nextIndex);
    }, 10000);

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showBanner(index);
      });
    });
  });
});
