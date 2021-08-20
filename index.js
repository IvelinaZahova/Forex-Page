function solution(){

    
//     const jsonFile  = fetch("./currencies.json")
//   .then(response => response.json())
//   .then(json => console.log(json));

    const jsonFile = {
        "success":true,
        "timestamp":1626358024,
        "base":"EUR",
        "date":"2021-07-15",
        "rates":{
          "AUD":1.587608,
          "BGN":1.955832,
          "GBP":0.852723,
          "USD":1.181998,
          "UYU":51.973196,
          "UZS":12570.550887,
          "VEF":252746931045.85898,
          "VND":27195.948945,
          "VUV":130.160103,
          "WST":3.016053,
          "XAG":0.044949,
          "XAU":0.000648,
          "XCD":3.19441,
          "XDR":0.830564
        }
      }

    let baseCurrency = jsonFile.base;
    let secondCurrency;

    const currenciesLi = document.querySelector("body > main > section.currencies > ul");
    const pricesLi = document.querySelector("body > main > section.prices > ul");
    
    const btn = document.querySelector("body > footer > button");

    // let currDay = new Date();
    // let curMinutes = currDay.getMinutes();
    // let currSeconds = currDay.getSeconds() ;
    
    for (let key in jsonFile.rates){
        secondCurrency = key;
        let currencyPrice = +jsonFile.rates[key].toFixed(4);

        let defLiCurrence = document.createElement('li');
        let defLiPrice = document.createElement('li');

        defLiCurrence.textContent = `${baseCurrency}/${secondCurrency}`;
        defLiPrice.textContent = `${+currencyPrice.toFixed(4)}`;
        
        currenciesLi.appendChild(defLiCurrence);
        pricesLi.appendChild(defLiPrice);

        let prevRate = currencyPrice;
        let currRate = currencyPrice;

        btn.addEventListener('click', () => {
          for (let min=0; min<5; min++){
            
            for (let seconds = 1; seconds <= 60; seconds++){

              if (min % 2 === 0){ 
                if (seconds % 5 === 0) {
                  currRate += 0.0001;

                  defLiPrice.textContent = `${currRate.toFixed(4)}`;
                  if (currRate < prevRate){
                    defLiPrice.style.backgroundColor = "red";
                  } else {
                    defLiPrice.style.backgroundColor = "#33FF9C";
                  }
                
                }
              } else {
                if (seconds % 5 === 0) {
                  currRate -= 0.0001;
                  defLiPrice.textContent = `${currRate.toFixed(4)}`;
                  if (currRate < prevRate){
                    defLiPrice.style.backgroundColor = "red";
                  } else {
                    defLiPrice.style.backgroundColor = "#33FF9C";
                  }
                }
              }

              prevRate = currRate

            }

          }
        }); //add event
  }


}
