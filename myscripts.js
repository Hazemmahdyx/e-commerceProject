/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 
 */

//

function mobDetect() {
  var userAgent = window.navigator.userAgent,
    platform =
      window.navigator?.userAgentData?.platform || window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (/Linux/.test(platform)) {
    os = "Linux";
  }

  return os;
}

let mob = mobDetect();

//

// Browser detect

let browserName = "c";

const fnBrowserDetect = () => {
  let userAgent = navigator.userAgent;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  } else {
    browserName = "No browser detection";
  }
};

fnBrowserDetect();

if (browserName == "safari" || mob == "iOS") {
  var elems = document.querySelectorAll(".scrollanimation");

  [].forEach.call(elems, function (el) {
    el.classList.remove("scrollanimation");
  });
} else {
  function scrollObserver(e, o) {
    let s = 0,
      r = new IntersectionObserver((e) => {
        e.forEach((e) => {
          window.requestIdleCallback(() => {
            o?.once
              ? 0 === s &&
                e.isIntersecting &&
                (e.target.classList.add("shown"), o.onshow && o.onshow(e), s++)
              : e.isIntersecting
              ? (e.target.classList.add("shown"), o && o.onshow && o.onshow(e))
              : (e.target.classList.remove("shown"),
                o && o.onhide && o.onhide(e));
          });
        });
      }, o);
    function n(e) {
      document.querySelectorAll(e).forEach((e) => r.observe(e));
    }
    Array.isArray(e) ? e.forEach(n) : n(e);
  }
  scrollObserver(".scrollanimation");
}

let dropdowns = document.querySelectorAll(".navbar .dropdown-toggler");
let dropdownIsOpen = false;

// Handle dropdown menues
if (dropdowns.length) {
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (event) => {
      let target = document.querySelector(`#${event.target.dataset.dropdown}`);

      if (target) {
        if (target.classList.contains("show")) {
          target.classList.remove("show");
          dropdownIsOpen = false;
        } else {
          target.classList.add("show");
          dropdownIsOpen = true;
        }
      }
    });
  });
}

// Handle closing dropdowns if a user clicked the body
window.addEventListener("mouseup", (event) => {
  if (dropdownIsOpen) {
    dropdowns.forEach((dropdownButton) => {
      let dropdown = document.querySelector(
        `#${dropdownButton.dataset.dropdown}`
      );
      let targetIsDropdown = dropdown == event.target;

      if (dropdownButton == event.target) {
        return;
      }

      if (!targetIsDropdown && !dropdown.contains(event.target)) {
        dropdown.classList.remove("show");
      }
    });
  }
});

// Open links in mobiles
function handleSmallScreens() {
  document.querySelector(".navbar-toggler").addEventListener("click", () => {
    let navbarMenu = document.querySelector(".navbar-menu");

    if (!navbarMenu.classList.contains("active")) {
      navbarMenu.classList.add("active");
    } else {
      navbarMenu.classList.remove("active");
    }
  });
}

handleSmallScreens();

const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));

const laptops = [
  {
    name: "Dell G15",
    price: 3200,
    img: "https://m.media-amazon.com/images/I/6102PUSQlAL._AC_SX679_.jpg", // Dummy image
    info: '15.6" FHD, Intel Core i7, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 2060, Windows 10',
  },
  {
    name: "MacBook",
    price: 4300,
    img: "https://m.media-amazon.com/images/I/61RHsomZZTS._AC_SX679_.jpg", // Dummy image
    info: '14" 2.5K OLED, AMD Ryzen 7, 32GB RAM, 1TB SSD, Radeon 680M, Windows 11',
  },
  {
    name: "l3",
    price: 6533,
    img: "https://m.media-amazon.com/images/I/719C6bJv8jL._AC_UL640_QL65_.jpg", // Dummy image
    info: '13.3" FHD, Intel Core i5, 8GB RAM, 256GB SSD, Intel Iris Xe Graphics, Windows 10',
  },
  {
    name: "l4",
    price: 1399,
    img: "https://m.media-amazon.com/images/I/81oIKwWfeCL._AC_UL640_QL65_.jpg", // Dummy image
    info: '13.3" FHD, Intel Core i5, 8GB RAM, 256GB SSD, Intel Iris Xe Graphics, Windows 10',
  },
  {
    name: "l5",
    price: 2433,
    img: "https://m.media-amazon.com/images/I/71IxGQfy4TL._AC_UL640_QL65_.jpg", // Dummy image
    info: '13.3" FHD, Intel Core i5, 8GB RAM, 256GB SSD, Intel Iris Xe Graphics, Windows 10',
  },
  {
    name: "l6",
    price: 400,
    img: "https://m.media-amazon.com/images/I/51v22nvZKIL._AC_UL640_QL65_.jpg", // Dummy image
    info: '13.3" FHD, Intel Core i5, 8GB RAM, 256GB SSD, Intel Iris Xe Graphics, Windows 10',
  },
  {
    name: "l7",
    price: 966,
    img: "https://m.media-amazon.com/images/I/61xOCUZ0pEL._AC_UL640_QL65_.jpg", // Dummy image
    info: '13.3" FHD, Intel Core i5, 8GB RAM, 256GB SSD, Intel Iris Xe Graphics, Windows 10',
  },
  {
    name: "l8",
    price: 1225,
    img: "https://m.media-amazon.com/images/I/71l6qKRcFWL._AC_UL640_QL65_.jpg", // Dummy image
    info: '13.3" FHD, Intel Core i5, 8GB RAM, 256GB SSD, Intel Iris Xe Graphics, Windows 10',
  },
  {
    name: "l9",
    price: 2343,
    img: "https://m.media-amazon.com/images/I/51v22nvZKIL._AC_UL640_QL65_.jpg", // Dummy image
    info: '13.3" FHD, Intel Core i5, 8GB RAM, 256GB SSD, Intel Iris Xe Graphics, Windows 10',
  },
  // Add more laptop objects as needed...
];
const contentAdd = document.getElementById("content");

function renderLaptops(laptops) {
  contentAdd.innerHTML = ""; // Clear previous content

  laptops.forEach((laptop) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const infoP = document.createElement("p");
    infoP.classList.add("item-info");
    infoP.textContent = laptop.info;

    const img = document.createElement("img");
    img.src = laptop.img;
    img.width = "180";

    const nameP = document.createElement("p");
    nameP.classList.add("item-name");
    nameP.textContent = laptop.name;

    const priceP = document.createElement("p");
    priceP.classList.add("item-price");
    priceP.textContent = `$ ${laptop.price}`;

    itemDiv.appendChild(infoP);
    itemDiv.appendChild(img);
    itemDiv.appendChild(nameP);
    itemDiv.appendChild(priceP);

    contentAdd.appendChild(itemDiv);
  });
}

renderLaptops(laptops);

// Search functionality
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filteredLaptops = laptops.filter((laptop) =>
    laptop.name.toLowerCase().includes(searchTerm)
  );
  renderLaptops(filteredLaptops);
});
