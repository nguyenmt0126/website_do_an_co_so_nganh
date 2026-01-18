document.addEventListener("DOMContentLoaded", () => {
  const carousel_mbike = document.getElementById("carouselVehicle");

  const speed_mbike = document.getElementById("speed");
  const distance_mbike = document.getElementById("distance");
  const truck_mbike = document.getElementById("bike_truck");
  const price_mbike = document.getElementById("price");

  function updateInfo(index) {
    const v = vehicles[index];
    if (!v) return;

    speed_mbike.innerText = v.speed;
    distance_mbike.innerText = v.distance;
    truck_mbike.innerText = v.truck;
    price_mbike.innerText = v.price;
  }

  // load xe đầu tiên
  updateInfo(0);

  // khi slide xong
  carousel_mbike.addEventListener("slid.bs.carousel", (e) => {
    updateInfo(e.to);
  });
});

