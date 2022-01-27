
  var slideIndex = 1;
  const canvas = document.querySelector('.arcade');
  const ctx = canvas.getContext('2d');

  const drawComponents = () => {
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //Marco Izquierdo
    ctx.fillStyle = 'rgba(105, 105, 105, 50)';
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.07, 0);
    ctx.lineTo(canvas.width * 0.07, canvas.height * 0.15);
    ctx.lineTo(canvas.width * 0.12, canvas.height * 0.2);
    ctx.lineTo(canvas.width * 0.12, canvas.height * 0.85);
    ctx.lineTo(canvas.width * 0.05, canvas.height);
    ctx.lineTo(canvas.width * 0.08, canvas.height);
    ctx.lineTo(canvas.width * 0.15, canvas.height * 0.85);
    ctx.lineTo(canvas.width * 0.15, canvas.height * 0.2);
    ctx.lineTo(canvas.width * 0.1, canvas.height * 0.15);
    ctx.lineTo(canvas.width * 0.1, 0);
    ctx.lineTo(canvas.width * 0.07, 0);
    ctx.fill();

    //Marco Derecho
    ctx.fillStyle = 'rgba(105, 105, 105, 50)';
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.93, 0);
    ctx.lineTo(canvas.width * 0.93, canvas.height * 0.15);
    ctx.lineTo(canvas.width * 0.88, canvas.height * 0.2);
    ctx.lineTo(canvas.width * 0.88, canvas.height * 0.85);
    ctx.lineTo(canvas.width * 0.95, canvas.height);
    ctx.lineTo(canvas.width * 0.92, canvas.height);
    ctx.lineTo(canvas.width * 0.85, canvas.height * 0.85);
    ctx.lineTo(canvas.width * 0.85, canvas.height * 0.2);
    ctx.lineTo(canvas.width * 0.9, canvas.height * 0.15);
    ctx.lineTo(canvas.width * 0.9, 0);
    ctx.lineTo(canvas.width * 0.93, 0);
    ctx.fill();

    //ctx.fillStyle = 'rgba(255, 0, 0, 50)';
    //ctx.beginPath();
    //ctx.moveTo(canvas.width * 0.08, 0);
    //ctx.lineTo(canvas.width * 0.92, 0);
    //ctx.lineTo(canvas.width * 0.92, canvas.height*0.1);
    //ctx.lineTo(canvas.width * 0.08, canvas.height*0.1);
    //ctx.lineTo(canvas.width * 0.08, 0);
    //ctx.fill();

    //Relleno Top
    ctx.fillStyle = 'rgba(255, 0, 0, 50)';
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.1, 0);
    ctx.lineTo(canvas.width * 0.9, 0);
    ctx.lineTo(canvas.width * 0.9, canvas.height*0.15);
    ctx.lineTo(canvas.width * 0.1, canvas.height*0.15);
    ctx.lineTo(canvas.width * 0.1, 0);
    ctx.fill();

    //Relleno Top-Mid
    ctx.fillStyle = 'rgba(245, 80, 80, 50)';
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.1, canvas.height*0.15);
    ctx.lineTo(canvas.width * 0.9, canvas.height*0.15);
    ctx.lineTo(canvas.width * 0.85, canvas.height*0.2);
    ctx.lineTo(canvas.width * 0.15, canvas.height*0.2);
    ctx.lineTo(canvas.width * 0.1, canvas.height*0.15);
    ctx.fill();

    //Relleno Bot
    ctx.fillStyle = 'rgba(225, 219, 8, 50)';
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.08, canvas.height);
    ctx.lineTo(canvas.width * 0.92, canvas.height);
    ctx.lineTo(canvas.width * 0.85, canvas.height * 0.85);
    ctx.lineTo(canvas.width * 0.15, canvas.height * 0.85);
    ctx.lineTo(canvas.width * 0.08, canvas.height);
    ctx.fill();

    //insertar imágen
    var wrapper = document.getElementById('arcade-wrapper');
    var x = (canvas.width/2) - 64;
    var y = ((canvas.height * 0.15)/2) - 64;

    var img = document.createElement('img');
    img.src = "images\\Coin.png";
    img.id = "imagen";
    img.style.position = "absolute";
    img.style.top = y + 'px';
    img.style.left = x + 'px';

    wrapper.appendChild(img);

    var wrapper = document.getElementById('arcade-wrapper');
    var left = canvas.width * 0.15;
    var top = canvas.height * 0.2;

    var div_container = document.createElement('div');
    div_container.className = "slideshow-container";
    div_container.id = "slide";
    div_container.style.position = "relative";
    div_container.style.left = left + 'px';
    div_container.style.top = top + 'px';
    div_container.style.width = (canvas.width * 0.7) + 'px';
    div_container.style.height = (canvas.height * 0.65) + 'px';
    wrapper.appendChild(div_container);

    var div_fade1 = document.createElement('div');
    div_fade1.className = "mySlides fade";
    div_container.appendChild(div_fade1);

    var img1 = document.createElement('img');
    img1.src = "images/udyr.jpg";
    img1.style.width = (canvas.width * 0.7) + 'px';
    img1.style.height = (canvas.height * 0.65) + 'px';
    div_fade1.appendChild(img1);

    var div_fade2 = document.createElement('div');
    div_fade2.className = "mySlides fade";
    div_container.appendChild(div_fade2);

    var img2 = document.createElement('img');
    img2.src = "images/nasus.jpg";
    img2.style.width = (canvas.width * 0.7) + 'px';
    img2.style.height = (canvas.height * 0.65) + 'px';
    div_fade2.appendChild(img2);

    var div_fade3 = document.createElement('div');
    div_fade3.className = "mySlides fade";
    div_container.appendChild(div_fade3);

    var img3 = document.createElement('img');
    img3.src = "images/volibear.jpg";
    img3.style.width = (canvas.width * 0.7) + 'px';
    img3.style.height = (canvas.height * 0.65) + 'px';
    div_fade3.appendChild(img3);

    var a1 = document.createElement('a');
    a1.className = "prev";
    a1.onclick = function() {plusSlides(-1)};;
    a1.text = "❮";
    div_container.appendChild(a1);

    var a2 = document.createElement('a');
    a2.className = "next";
    a2.onclick = function() {plusSlides(1)};
    a2.text = "❯";
    div_container.appendChild(a2);

    var div_dots = document.createElement('div');
    div_dots.style.textAlign = "center";
    div_container.appendChild(div_dots);

    var dot1 = document.createElement('span');
    dot1.className = "dot";
    dot1.onclick = function() {currentSlide(1)};
    div_dots.appendChild(dot1);

    var dot2 = document.createElement('span');
    dot2.className = "dot";
    dot2.onclick = function() {currentSlide(2)};
    div_dots.appendChild(dot2);

    var dot3 = document.createElement('span');
    dot3.className = "dot";
    dot3.onclick = function() {currentSlide(3)};
    div_dots.appendChild(dot3);
  }

  const setUpCanvas = (w, h) => {
    canvas.width = w;
    canvas.height = h;
  };

  const reset = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
    var wrapper = document.getElementById('arcade-wrapper');
    var slide = document.getElementById('slide');
    var imagen = document.getElementById('imagen');
    wrapper.removeChild(slide);
    wrapper.removeChild(imagen);

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

  setUpCanvas(canvas.clientWidth, canvas.clientHeight);
  drawComponents();
  showSlides(slideIndex);
  /** EVENT LISTENERS ***/
  window.addEventListener('resize', () => {
    reset();
  });
