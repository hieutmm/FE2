const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//get data 
const circle = $('#circle');
const input = $('#ip_data');
const btnSubmit = $('#btn_submit');
const arrColors = ['#33CB80', '#00FFFF', '#51A9FF', '#F1B55F', '#FFF900', '#44BBB6', '#7DFF00',
    '#B274DC', '#D651FF', '#FFA4510', '#E86875', '#1500FF', '#CD853F','#E80000'];
const btnStart = $('.start');

input.addEventListener('keydown', () => {
    //lay du lieu tu mang
    let arrValue = input.value.split(' ').filter(element => element != "");
    const arrLength = arrValue.length;
    if (arrLength == 1) {
        circle.innerHTML = `<div class="pie">${arrValue[0]}</div>`;
    }
    else {
        circle.innerHTML = "";
        //tinh alpha
        let alpha = 360 / arrLength;
        let radianAlpha = (alpha / 2)*3.14/180;
        let a =Number((Math.tan(radianAlpha) * 50).toFixed(2));

        //toa do y cua 2 diem
        let y2 = a + 50;
        let y1 = 100 - y2;

        //thay doi css(vi tri)
        for (let i = 0; i < arrLength; i++) {
            circle.innerHTML += `<div class="pie">${arrValue[i]}</div>`;
        }

        //random goc quay
        let beta = 0;
        $$('.pie').forEach(element => {
            Object.assign(element.style, {
                clipPath: `polygon(50% 50%, 0 ${y1}%,0 ${y2}%)`,
                transform: `rotate(${beta}deg)`,
                background: `${arrColors[Math.floor(Math.random() * (arrColors.length-1))]}`
            });
            beta += alpha;
        });
    }
});

//su kien quay
const root = $(':root');
btnStart.addEventListener('click', () => {
    let deg = -Math.floor(Math.random() * 2155) - 9875;
    root.style.setProperty('--deg-rotate', `${deg}deg`);
    circle.classList.toggle('animation');
});
