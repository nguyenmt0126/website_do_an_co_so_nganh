document.addEventListener("DOMContentLoaded", () => {
  const carousel_vfast_mbike = document.getElementById("carouselVehicle_vinfast");

  const speed_vmbike = document.getElementById("speed");
  const distance_vmbike = document.getElementById("distance");
  const truck_vmbike = document.getElementById("bike_truck");
  const price_vmbike = document.getElementById("price");

  function updateInfo(index) {
    const v = vehicles[index];
    if (!v) return;

    speed_vmbike.innerText = v.speed;
    distance_vmbike.innerText = v.distance;
    truck_vmbike.innerText = v.truck;
    price_vmbike.innerText = v.price;
  }

  // load xe đầu tiên
  updateInfo(0);

  // khi slide xong
  carousel_vfast_mbike.addEventListener("slid.bs.carousel", (e) => {
    updateInfo(e.to);
  });
});

