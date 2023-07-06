
  // Bài 1 
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const tabs = $$('.tab-item');
  const panes = $$('.tab-pane');
  const tabActive = $('.tab-item.active');
  const line = $('.tabs .line');

  line.style.left = tabActive.offsetLeft + 'px';
  line.style.width = tabActive.offsetWidth + 'px';


  tabs.forEach((tab, index) => {
    tab.onclick = function() {

      const pane = panes[index];
      
      $('.tab-item.active').classList.remove('active');
      $('.tab-pane.active').classList.remove('active');

      line.style.left = this.offsetLeft + 'px';
      line.style.width = this.offsetWidth + 'px';

      this.classList.add('active');
      pane.classList.add('active');
    }
  })

  // Bài 2 đồng hồ bấm giờ
  window.onload = function () {

    var seconds = 00;
    var tens = 00;
    var appendSecond = document.getElementById('seconds');
    var appendTens = document.getElementById('tens');
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');

    var Interval;

    buttonStart.onclick = function () {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
      clearInterval(Interval);
    }

    buttonReset.onclick = function () {
      tens = "00";
      seconds = "00";
      appendTens.innerHTML = tens;
      appendSecond.innerHTML = seconds;
    }
    
    function startTimer() {

      tens++;

      if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
      }

      if (tens > 9) {
        appendTens.innerHTML = tens;
      }

      if (tens > 99) {
        seconds++;
        appendSecond.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9 ) {
        appendSecond.innerHTML = seconds;
      }

    }
 
  }

  // Bài 3 đồng hồ
  
  function showTime() {

    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0){
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
  }

  showTime();

  // Bài 4 API thời tiết
 
  var search = document.querySelector('.search');
  var city = document.querySelector('.city');
  var country = document.querySelector('.country');
  var time = document.querySelector('.time');
  var value = document.querySelector('.value');
  var shortDesc = document.querySelector('.short-desc');
  var visibility = document.querySelector('.visibility span');
  var wind = document.querySelector('.wind span');
  var coloundSun = document.querySelector('.colound-sun span');
  
  async function changeWeather() {
    search.value.trim();
    let apiURL = `https://api.weatherbit.io/v2.0/current?&lat=21.0245&lon=105.84117&key=f9cab53bc95045c98a1b69066c92d572&lang=en&`
    
    let data = await fetch(apiURL).then(res => res.json());

    city.innerText = data.city_name;
    country.innerText = data.country_code;
    visibility.innerText = data.vis + "m";
    wind.innerText = data.wind_spd + "m/s";
    value.innerText = data.temp;
    console.log(data)
  }

  changeWeather();
