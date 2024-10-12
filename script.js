<script>
    const targetDate = new Date('2020-11-27T22:55:45').getTime();

    function updateCounter() {
        const now = new Date().getTime();
        const elapsedTime = now - targetDate;

        // For countup (years, months, weeks, etc.)
        let seconds = Math.floor(elapsedTime / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        let weeks = Math.floor(days / 7);
        let months = Math.floor(days / 30.44);
        let years = Math.floor(months / 12);

        // Update the countup elements
        document.getElementById('secondsUp').innerText = `عدد الثواني: ${seconds % 60}`;
        document.getElementById('minutesUp').innerText = `عدد الدقائق: ${minutes % 60}`;
        document.getElementById('hoursUp').innerText = `عدد الساعات: ${hours % 24}`;
        document.getElementById('daysUp').innerText = `عدد الأيام: ${days % 7}`;
        document.getElementById('weeksUp').innerText = `عدد الأسابيع: ${weeks % 4}`;
        document.getElementById('monthsUp').innerText = `عدد الشهور: ${months % 12}`;
        document.getElementById('yearsUp').innerText = `عدد السنوات: ${years}`;

        // For countdown (total seconds, minutes, etc.)
        const totalSeconds = Math.floor(elapsedTime / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);
        const totalWeeks = Math.floor(totalDays / 7);

        document.getElementById('totalSeconds').innerText = `عدد الثواني: ${totalSeconds}`;
        document.getElementById('totalMinutes').innerText = `عدد الدقائق: ${totalMinutes}`;
        document.getElementById('totalHours').innerText = `عدد الساعات: ${totalHours}`;
        document.getElementById('totalDays').innerText = `عدد الأيام: ${totalDays}`;
        document.getElementById('totalWeeks').innerText = `عدد الأسابيع: ${totalWeeks}`;
    }

    function changeBackground() {
        const images = [
            '8545.jpeg',
            '8546.png',
            '8547.jpg',
            '8548.jpg'
        ];

        let currentIndex = 0;
        setInterval(() => {
            document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
            currentIndex = (currentIndex + 1) % images.length;
        }, 25000);
    }

    setInterval(updateCounter, 1000);
    changeBackground();
</script>
