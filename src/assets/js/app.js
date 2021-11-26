let point = document.querySelectorAll('.image__point');
let pointIcon = document.querySelectorAll('.image__point img');
let pointNumber = document.querySelectorAll('.image__point p');
let pointList = document.querySelectorAll('.props__item');

point.forEach(element => {
    element.addEventListener('click', (e) => {

        pointIcon.forEach(el => el.src = "assets/images/point.svg");

        point.forEach(el => el.classList.remove("active"));

        pointNumber.forEach(el => el.innerHTML = "");

        e.target.parentElement.classList.add("active");
        e.target.src = "assets/images/point-active.svg";
        e.target.nextElementSibling.innerHTML = e.target.parentElement.dataset.point;

        pointList.forEach(el => el.classList.remove("active"));

        document.querySelector(`.props__item[data-point="${e.target.parentElement.dataset.point}"]`).classList.add('active');
    })
});
