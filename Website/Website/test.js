const bike = [
  {
    img: "/image/xe_may_dien_vinfast/evo.webp",
    speed: "70km/h",
    range: "~165 km /lần sạc km",
    cop: "12 lít",
    price: "19.990.000 VNĐ"
  },
  {
    img: "/image/xe_may_dien_vinfast/zgoo.webp",
    speed: "39km/h",
    range: "70 km",
    cop: "14 lít",
    price: "14.990.000 VNĐ"
  },
  {
    img: "/image/xe_may_dien_vinfast/falzzz.webp    ",
    speed: "39km/h",
    range: "135 km",
    cop: "14 lít",
    price: "16.000.000 VNĐ"
  },
  {
    img: "/image/xe_may_dien_vinfast/verox_d.webp",
    speed: "70km/h",
    range: "262 km / 1 lần sạc ( 2 pin )",
    cop: "35lít",
    price: "34.990.000 VNĐ"
  },{
    img: "/image/xe_may_dien_vinfast/felizlite_d.webp",
    speed: "48km/h",
    range: "262 km",
    cop: "34 lít",
    price: "25.900.000 VNĐ"
  },
  {
    img: "/image/xe_may_dien_vinfast/feliz2025_d.webp",
    speed: "70km/h",
    range: "262 km",
    cop: "34 lít",
    price: "25.900.000 VNĐ"
  },
  {
    img: "/image/xe_may_dien_vinfast/evogrand.webp",
    speed: "70km/h",
    range: "262 km",
    cop: "35 lít",
    price: "21.000.000 VNĐ"
  },
  {
    img: "/image/xe_may_dien_vinfast/evogrand_lite.webp",
    speed: "48km/h",
    range: "198 km",
    cop: "35 lít",
    price: "18.000.000 VNĐ"
  },
  {
    img: "/image/xe_may_dien_vinfast/EvoLiteNeo.webp",
    speed: "49km/h",
    range: "78 km",
    cop: "17 lít",
    price: "14.400.000 VNĐ"
  },
  {
    img: "/image/xe_may_dien_vinfast/KlaraNeo.webp",
    speed: "60km/h",
    range: "112 km",
    cop: "22 lít",
    price: "28.800.000 VNĐ"
  },
  
  
];

document.addEventListener("DOMContentLoaded", () => {

  const carousel = document.getElementById("carCarousel");

  const speed = document.getElementById("speed");
  const range = document.getElementById("range");
  const cop = document.getElementById("cop");
  const price = document.getElementById("price");

  function updateInfo(index) {
    speed.innerText = bike[index].speed;
    range.innerText = bike[index].range;
    cop.innerText = bike[index].cop;
    price.innerText = bike[index].price;
  }

  // load dữ liệu ban đầu
  updateInfo(0);

  // khi carousel đổi slide
  carousel.addEventListener("slid.bs.carousel", (e) => {
    updateInfo(e.to);
  });

});

