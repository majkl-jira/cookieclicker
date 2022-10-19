const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickupgrade = document.getElementById("clickupgrade");
const autoclicker = document.getElementById("autoclicker");
let cookies = 0;
let clickIncrease = 1;
let clickIncreasePrice = 100;

let autoclickerIncrease = 0;
let autoclickerPrice = 200;
//jj
cookie.onclick = () => {
  cookies += clickIncrease;
  counter.innerHTML = cookies;
};

clickupgrade.onclick = () => {
  if (cookies >= clickIncreasePrice) {
    cookies -= clickIncreasePrice;
    clickIncreasePrice += 100;
    clickupgrade.innerHTML = `Buy upgrade:${clickIncreasePrice}`;
    counter.innerHTML = cookies;
    clickIncrease += 1;
  }
};

autoclicker.onclick = () => {
    if (cookies >= autoclickerPrice) {
      cookies -= autoclickerPrice;
      counter.innerHTML = cookies;
      autoclickerPrice += 100;
      autoclicker.innerHTML = `Buy autoclicker upgrade: ${autoclickerPrice}`;
      if (autoclickerIncrease == 0) {
        setInterval(() => {
          cookies += autoclickerIncrease;
          counter.innerHTML = cookies;
        }, 1000);
      }
      autoclickerIncrease++;
    }
  };
