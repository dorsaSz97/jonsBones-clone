const proItem = document.getElementById('dropdownItem');
const header = document.querySelector('.header');
let logo = document.querySelector('.header__logo');

// Navigation bg-color
proItem.addEventListener('mouseover', () => {
  logo.style.filter = 'brightness(0)';
  header.style.backgroundColor = '#dae2e8';
  header.style.color = '#394248';
});
proItem.addEventListener('mouseout', () => {
  logo.style.filter = 'brightness(1)';
  header.style.backgroundColor = '#85a0af69';
  header.style.color = '#fff';
});

// parallax

let education = document.querySelector('.section-education');

let eduImages = document.querySelectorAll('.edu-image');

let edu1 = document.querySelector('.edu1');
let edu2 = document.querySelector('.edu2');
let edu3 = document.querySelector('.edu3');
let edu4 = document.querySelector('.edu4');

function isDescendant(parent, child) {
  let node = child.parentNode;
  while (node != null) {
    if (node == parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

// Parallax effect
window.addEventListener('mousemove', function (e) {
  let mouseX = e.pageX,
    mouseY = e.pageY;

  let x = e.clientX,
    y = e.clientY,
    elementMouseIsOver = document.elementFromPoint(x, y);

  let w = window.innerWidth / 2;
  let h = window.innerHeight / 2;

  // Product images
  if (isDescendant(education, elementMouseIsOver)) {
    edu1.style.transform = `translate(${(x - w) * (0.05 * 0.1)}px, ${
      (y - h) * (0.05 * 0.02)
    }px)`;
    edu2.style.transform = `translate(${(x - w) * -(0.1 * 0.03)}px, ${
      (y - h) * -(0.1 * 0.02)
    }px)`;
    edu3.style.transform = `translate(${(x - w) * (0.03 * 0.2)}px, ${
      (y - h) * (0.03 * 0.06)
    }px)`;
    edu4.style.transform = `translate(${(x - w) * -(0.2 * 0.03)}px, ${
      (y - h) * -(0.2 * 0.03)
    }px)`;

    // eduImages.forEach(img => {
    //   img.style.transform = `translate(${
    //     (x - w) * (img.dataset.speed * 0.03)
    //   }px, ${(y - h) * (img.dataset.speed * 0.03)}px)`;
    // });
  }
});
