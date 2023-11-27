fetch("http://apiadvisor.climatempo.com.br/api/v1/weather/locale/1109/current?token=93d46461833c78f56d4313d16b3791f0")
  .then(response => response.json())
  .then(result => {
    const temperature = result.data.temperature;
    const sensation = result.data.sensation;
    const condition = result.data.condition;
    const icon = result.data.icon;
    const city = result.name;
    const state = result.state;
    const wind = result.data.wind_velocity;
    const humidity = result.data.humidity;

    const main = document.querySelector("main");
    main.insertAdjacentHTML('afterbegin', `
        <h2>Tempo agora em </h2>
        <h2>${city}, ${state}</h2>
    `);
    const temperatureP = document.querySelector("#divTempo");
    temperatureP.insertAdjacentHTML('afterbegin', 
    `
      <img src="https://www.climatempo.com.br/dist/images/v2/svg/${icon}.svg" alt="temperature">
      <h2>${temperature}°C</h2>
      `);
    const sensationP = document.querySelector("#divSensacao");
    sensationP.insertAdjacentHTML('afterbegin', 
    `
        <img src="https://www.climatempo.com.br/dist/images/sensation-icon.png" alt="fire" class="a">
        <p>${sensation}°C</p>
      `);
    const clima = document.querySelector("#divCondicao");
    clima.insertAdjacentHTML('afterbegin', 
    `
        <img src="https://www.climatempo.com.br/dist/images/v2/svg/ic-cloud.svg" alt="cloud">
        <p>${condition}</p>
      `);    
    const vento = document.querySelector('#divVento')
    vento.insertAdjacentHTML('afterbegin', `
        <span id="black-span"></span>
        <h3>VENTO</h3>
      `);
    const vento2 = document.querySelector('#div2Vento')
    vento2.insertAdjacentHTML('afterbegin', `
        <p>${wind} km/h</p>
      `); 
    const umidade = document.querySelector('#divUmidade')
    umidade.insertAdjacentHTML('afterbegin', `
        <span id="black-span"></span>
        <h3>UMIDADE</h3>
      `);
    const umidade2 = document.querySelector('#div2Umidade')
    umidade2.insertAdjacentHTML('afterbegin', `
        <img src="https://www.climatempo.com.br/dist/images/v2/svg/ic-humidity-max.svg" alt="humidity">
        <p>${humidity}%</p>
      `);
    })
  .catch(error => console.log('Erro:', error));
    
