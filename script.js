let body = document.querySelector('body');
let toggle = document.querySelector('.night-shift');
let mainContent = document.querySelector(".mainContent");


toggle.addEventListener('click', () => {
    let text = document.querySelector('strong');
    let navDarkLight = document.querySelector('.nav');
    toggle.classList.toggle("on");
    let banners = document.querySelectorAll(".banner");
    banners.forEach(bnr=>bnr.classList.toggle("dark"));
    navDarkLight.classList.toggle('nav-dark');
    if (toggle.classList.contains('on')) {
        text.innerText='Dark Mode';
        body.style.background = "gray";
        body.style.color = "whitesmoke";
    }
    else {
        text.innerText='Normal Mode';
        body.style.background = "whitesmoke";
        body.style.color = "black";
    }
});

window.onload = () => {
    firstPageDataLoad();
}

function firstPageDataLoad() {

    fetch('https://api-football-standings.azharimm.site/leagues')
        .then(res => res.json())
        .then(res => {
            let obj = res.data;
            obj.forEach(element => {
                mainContent.innerHTML +=
                    `
                <div onclick="getBrand(this)" class="row" >
                    <div class="col-md-2"></div>
                    <div class="col-md-8 banner"  style=" background-image: url(${element.logos.light}); background-repeat:no-repeat;">
                            <div class="col-md">
                            </div>
                            <h3>${element.name}</h3>
                    </div>
                    <div class="col-md-2"></div>
                </div>

            `
            });
        })
}
