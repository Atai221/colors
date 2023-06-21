const COLORS = [
    {
      hex: '#FFBA08',
      rgb: 'rgb(255, 186, 8)',
      text: '#5a21cd',
    },
    {
      hex: '#DC2F02',
      rgb: 'rgb(220, 47, 2)',
      text: '#fff',
    },
    {
      hex: '#1D3557',
      rgb: 'rgb(29, 53, 87)',
      text: '#fff',
    },
    {
      hex: '#00B4D8',
      rgb: 'rgb(0, 180, 216)',
      text: '#e63946',
    },
    {
      hex: '#ffffff',
      rgb: 'rgb(255, 255, 255)',
      text: '#000000',
    },
    {
      hex: '#9D4EDD',
      rgb: 'rgb(157, 78, 221)',
      text: '#95d5b2',
    },
    {
      hex: '#38B000',
      rgb: 'rgb(56, 176, 0)',
      text: '#450920',
    },
    {
      hex: '#9C6644',
      rgb: 'rgb(156, 102, 68)',
      text: '#023e7d',
    },
    {
      hex: '#7371FC',
      rgb: 'rgb(115, 113, 252)',
      text: '#80FFDB',
    },
    {
      hex: '#4CC9F0',
      rgb: 'rgb(76, 201, 240)',
      text: '#480ca8',
    },
    {
      hex: '#000000',
      rgb: 'rgb(0, 0, 0)',
      text: '#ffffff',
    },
  ];
  
  const span = document.querySelectorAll('.span');
  const container = document.querySelector('#container');
  const buttonHEX = document.querySelector('[data-type="hex"]');
  const buttonRGB = document.querySelector('[data-type="rgb"]');
  const buttonColor = document.querySelector('[data-type="color"]');
  const buttons = document.querySelectorAll('[data-type]');
  const colorName = document.querySelector('h2');
  
  let currentColorFormat = 'hex';
  let randomColor;
  
  const generateRandomColor = () => {
    randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    colorName.innerHTML = randomColor[currentColorFormat];
    colorName.style.color = randomColor.text;
    buttonHEX.style.color = randomColor.text;
    buttonRGB.style.color = randomColor.text;
    buttonColor.style.color = randomColor.text;
    container.style.backgroundColor = randomColor[currentColorFormat];
  };
  
  colorName.addEventListener('click', () => {
    navigator.clipboard.writeText(randomColor[currentColorFormat]);
  });
  
  
  
  generateRandomColor(); // вызываем функцию, чтобы показать начальный цвет
  
  const copyToClipboard = () =>
  navigator.clipboard.writeText(randomColor[currentColorFormat]);
  
  const changeToHex = () => {
  currentColorFormat = 'hex';
  colorName.innerHTML = randomColor.hex;
  };
  
  const changeToRgb = () => {
  currentColorFormat = 'rgb';
  colorName.innerHTML = randomColor.rgb;
  };
  
  buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.type === 'hex') {
        changeToHex();
    } else if (button.dataset.type === 'rgb') {
        changeToRgb();
    } else if (button.dataset.type === 'color') {
        generateRandomColor();
    }
  });
  });
  
  buttonColor.addEventListener('mouseover', () => {
  buttonColor.style.backgroundColor = randomColor.text;
  buttonColor.style.color = randomColor[currentColorFormat];
  });
  
  buttonColor.addEventListener('mouseout', () => {
  buttonColor.style.backgroundColor = 'transparent';
  buttonColor.style.color = randomColor.text;
  }); 
  
  