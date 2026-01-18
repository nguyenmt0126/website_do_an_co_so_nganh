document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carouselVehicle");

  const speedEl = document.getElementById("speed");
  const distanceEl = document.getElementById("distance");
  const truckEl = document.getElementById("bike_truck");
  const priceEl = document.getElementById("price");

  function updateInfo(index) {
    const v = vehicles[index];
    if (!v) return;

    speedEl.innerText = v.speed;
    distanceEl.innerText = v.distance;
    truckEl.innerText = v.truck;
    priceEl.innerText = v.price;
  }

  // load xe đầu tiên
  updateInfo(0);

  // khi slide xong
  carousel.addEventListener("slid.bs.carousel", (e) => {
    updateInfo(e.to);
  });
});

