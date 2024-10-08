const goalTime = new Date('2020-11-27T22:55:45'); // الوقت المحدد للهدف
const images = [
    'https://mediaaws.almasryalyoum.com/news/verylarge/2021/03/05/1479321_0.jpeg',
    'https://elsalam-int.com/imgs/b8a97eebd3cd-img.png',
    'https://rosaelyoussef.com/UserFiles/News/2023/08/30/1114815.jpg?230830184643',
    'https://alanwaralmsreah.com/wp-content/uploads/2020/12/127220365_2762028247343729_457655893314981887_o-780x470-1-780x405.jpg'
];

let currentImageIndex = 0;

function changeBackground() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

// تغيير الصورة كل 25 ثانية
setInterval(changeBackground, 25000);

// تحديث العداد
const counter = setInterval(() => {
    const now = new Date();
    const difference = now - goalTime;

    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    document.getElementById('seconds').innerText = seconds;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('hours').innerText = hours;
    document.getElementById('days').innerText = days;
    document.getElementById('months').innerText = months;
    document.getElementById('years').innerText = years;

    // تحديث العداد منذ وقت الهدف
    document.getElementById('totalSeconds').innerText = Math.floor((now - goalTime) / 1000);
    document.getElementById('totalMinutes').innerText = Math.floor((now - goalTime) / (1000 * 60));
    document.getElementById('totalHours').innerText = Math.floor((now - goalTime) / (1000 * 60 * 60));
    document.getElementById('totalDays').innerText = Math.floor((now - goalTime) / (1000 * 60 * 60 * 24));
    document.getElementById('totalWeeks').innerText = Math.floor((now - goalTime) / (1000 * 60 * 60 * 24 * 7));
    document.getElementById('totalYears').innerText = Math.floor((now - goalTime) / (1000 * 60 * 60 * 24 * 365));
}, 1000);
