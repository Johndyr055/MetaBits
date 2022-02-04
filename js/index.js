
  var slideIndex = 1;
  const canvas = document.querySelector('.arcade');
  const ctx = canvas.getContext('2d');

  const drawComponents = () => {

    var realWidth = canvas.width;
    var realWidth04 = canvas.width * 0.04;
    var realWidth05 = canvas.width * 0.05;
    var realWidth07 = canvas.width * 0.07;
    var realWidth08 = canvas.width * 0.08;
    var realWidth10 = canvas.width * 0.1;
    var realWidth12 = canvas.width * 0.12;
    var realWidth15 = canvas.width * 0.15;
    var realWidth70 = canvas.width * 0.7;
    var realWidth85 = canvas.width * 0.85;
    var realWidth88 = canvas.width * 0.88;
    var realWidth90 = canvas.width * 0.9;
    var realWidth92 = canvas.width * 0.92;
    var realWidth93 = canvas.width * 0.93;
    var realWidth95 = canvas.width * 0.95;

    var realHeight = canvas.height;
    var realHeight13 = canvas.height * 0.13;
    var realHeight15 = canvas.height * 0.15;
    var realHeight20 = canvas.height * 0.2;
    var realHeight65 = canvas.height * 0.65;
    var realHeight85 = canvas.height * 0.85;


    var grd = ctx.createLinearGradient(0,realHeight65,0,realHeight);
    grd.addColorStop(0,"black");
    grd.addColorStop(1,"purple");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, realWidth, realHeight);

    //Marco Izquierdo
    ctx.fillStyle = 'rgba(47, 44, 48, 50)';
    ctx.beginPath();
    ctx.moveTo(realWidth07, 0);
    ctx.lineTo(realWidth07, realHeight15);
    ctx.lineTo(realWidth12, realHeight20);
    ctx.lineTo(realWidth12, realHeight85);
    ctx.lineTo(realWidth05, realHeight);
    ctx.lineTo(realWidth08, realHeight);
    ctx.lineTo(realWidth15, realHeight85);
    ctx.lineTo(realWidth15, realHeight20);
    ctx.lineTo(realWidth10, realHeight15);
    ctx.lineTo(realWidth10, 0);
    ctx.lineTo(realWidth07, 0);
    ctx.fill();

    //Marco Derecho
    ctx.fillStyle = 'rgba(47, 44, 48, 50)';
    ctx.beginPath();
    ctx.moveTo(realWidth93, 0);
    ctx.lineTo(realWidth93, realHeight15);
    ctx.lineTo(realWidth88, realHeight20);
    ctx.lineTo(realWidth88, realHeight85);
    ctx.lineTo(realWidth95, realHeight);
    ctx.lineTo(realWidth92, realHeight);
    ctx.lineTo(realWidth85, realHeight85);
    ctx.lineTo(realWidth85, realHeight20);
    ctx.lineTo(realWidth90, realHeight15);
    ctx.lineTo(realWidth90, 0);
    ctx.lineTo(realWidth93, 0);
    ctx.fill();

    //Relleno Top
    ctx.fillStyle = 'rgba(45, 36, 227, 50)';
    ctx.beginPath();
    ctx.moveTo(realWidth10, 0);
    ctx.lineTo(realWidth90, 0);
    ctx.lineTo(realWidth90, realHeight15);
    ctx.lineTo(realWidth10, realHeight15);
    ctx.lineTo(realWidth10, 0);
    ctx.fill();

    //Relleno Top-Mid
    ctx.fillStyle = 'rgba(10, 3, 150, 50)';
    ctx.beginPath();
    ctx.moveTo(realWidth10, realHeight15);
    ctx.lineTo(realWidth90, realHeight15);
    ctx.lineTo(realWidth85, realHeight20);
    ctx.lineTo(realWidth15, realHeight20);
    ctx.lineTo(realWidth10, realHeight15);
    ctx.fill();

    //Relleno Bot
    ctx.fillStyle = 'rgba(58, 51, 189, 50)';
    ctx.beginPath();
    ctx.moveTo(realWidth08, realHeight);
    ctx.lineTo(realWidth92, realHeight);
    ctx.lineTo(realWidth85, realHeight85);
    ctx.lineTo(realWidth15, realHeight85);
    ctx.lineTo(realWidth08, realHeight);
    ctx.fill();

    var wrapper = document.getElementById('arcade-wrapper');
    var left = realWidth15;
    var top = realHeight20;

    var coin = document.getElementById("coin");
    coin.style.width = (realHeight13) + 'px';
    coin.style.height = (realHeight13) + 'px';
    coin.style.top = ((realHeight15 / 2) - (coin.clientWidth / 2)) + 'px';
    coin.style.left = ((realWidth / 2) - (coin.clientHeight / 2)) + 'px';

    var div_container = document.getElementById('slide');
    div_container.style.left = left + 'px';
    div_container.style.top = top + 'px';
    div_container.style.width = (realWidth70) + 'px';
    div_container.style.height = (realHeight65) + 'px';

    var img1 = document.getElementById('img1');
    img1.style.width = (realWidth70) + 'px';
    img1.style.height = (realHeight65) + 'px';

    var img2 = document.getElementById('img2');
    img2.style.width = (realWidth70) + 'px';
    img2.style.height = (realHeight65) + 'px';

    var img3 = document.getElementById('img3');
    img3.style.width = (realWidth70) + 'px';
    img3.style.height = (realHeight65) + 'px';

    var socialIcons = document.getElementsByClassName('socialImg');
    for (var i = 0; i < socialIcons.length; i++) {
      socialIcons[i].style.width = realWidth04 + 'px';
      socialIcons[i].style.margin = "0px 0px 5px 0px";
    }

    var div_social = document.getElementById('social');
    div_social.style.top = ((realHeight / 2) - ((socialIcons[0].clientWidth + 5) * 3)) + 'px';
    div_social.style.right = 0;
    div_social.style.width = socialIcons[0].clientWidth + 'px';

  }

  const setUpCanvas = (w, h) => {
    canvas.width = w;
    canvas.height = h;
  };

  const reset = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		setUpCanvas(canvas.clientWidth, canvas.clientHeight);
		drawComponents();
    showSlides(slideIndex);
	};

  function degToRad(degrees) {
    return degrees * Math.PI / 180;
  };

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

  const s1 = document.getElementById('s1');
  s1.onmouseover = function(){
     this.src = "images/social1Pixel.png";
  };
  s1.onmouseout = function(){
    this.src = "images/social1.png";
  };

  const s2 = document.getElementById('s2');
  s2.onmouseover = function(){
      this.src = "images/social2Pixel.png";
  };
  s2.onmouseout = function(){
    this.src = "images/social2.png";
  };

  const s3 = document.getElementById('s3');
  s3.onmouseover = function(){
      this.src = "images/social3Pixel.png";
  };
  s3.onmouseout = function(){
    this.src = "images/social3.png";
  };

  const s4 = document.getElementById('s4');
  s4.onmouseover = function(){
      this.src = "images/social4Pixel.png";
  };
  s4.onmouseout = function(){
    this.src = "images/social4.png";
  };

  const s5 = document.getElementById('s5');
  s5.onmouseover = function(){
      this.src = "images/social5Pixel.png";
  };
  s5.onmouseout = function(){
    this.src = "images/social5.png";
  };

  const s6 = document.getElementById('s6');
  s6.onmouseover = function(){
      this.src = "images/social6Pixel.png";
  };
  s6.onmouseout = function(){
    this.src = "images/social6.png";
  };

  setUpCanvas(canvas.clientWidth, canvas.clientHeight);
  drawComponents();
  showSlides(slideIndex);

  /** EVENT LISTENERS ***/
  window.addEventListener('resize', () => {
    reset();
  });
