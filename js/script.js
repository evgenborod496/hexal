let slider = document.querySelectorAll('.main__slider-item');
let images = document.querySelectorAll('.main__img');
let imgList = ['main__img_first', 'main__img_second', 'main__img_third'];

for (let i = 0; i < slider.length; i++) {
  slider[i].addEventListener('click', function (e) {

    let active;

    for (let i = 0; i < slider.length; i++) {
      if (e.currentTarget == slider[i])
        active = i;
    }

    for (let i = 0; i < slider.length; i++) {
      if (slider[i].classList.contains("main__slider-item_active")) {
        slider[i].classList.remove("main__slider-item_active");
      }
    }
      slider[active].classList.add("main__slider-item_active");

    for (let i = 0; i < images.length; i++) {
      for (let j = 0; j < imgList.length; j++) {
        if (images[i].classList.contains(imgList[j])) {
          images[i].classList.remove(imgList[j]);
        }
      }
    }

    if (active == 0) {
      images[0].classList.add(imgList[0]);
      images[1].classList.add(imgList[1]);
      images[2].classList.add(imgList[2]);
    }

    if (active == 1) {
      images[0].classList.add(imgList[1]);
      images[1].classList.add(imgList[0]);
      images[2].classList.add(imgList[2]);
    }

    if (active== 2) {
      images[0].classList.add(imgList[2]);
      images[1].classList.add(imgList[1]);
      images[2].classList.add(imgList[0]);
    }

    if (active == 3) {
      images[0].classList.add(imgList[0]);
      images[1].classList.add(imgList[2]);
      images[2].classList.add(imgList[1]);
    }

    if (active == 4) {
      images[0].classList.add(imgList[1]);
      images[1].classList.add(imgList[2]);
      images[2].classList.add(imgList[0]);
    }

    if (active == 5) {
      images[0].classList.add(imgList[2]);
      images[1].classList.add(imgList[0]);
      images[2].classList.add(imgList[1]);
    }
  });
}