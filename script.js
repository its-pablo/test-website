console.log("This website is being developed, email me if you're experiencing any bugs :)");

function overlayOn() {
  document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
  document.getElementById("overlay").style.display = "none";
}

const template = document.createElement('header');
header.innerHTML = `<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Biscourse</a>
    </div>
    <ul class="nav navbar-nav">
      <li id="homepagenav"><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
`

document.body.appendChild(header.content);

document.getElementById("globalHeader").innerHTML = `<div class="header">
  <a href="#default" class="logo">CompanyLogo</a>
  <div class="header-right">
    <a id="homelink" class="active" href="#home">Home</a>
    <a id="contactlink" href="#contact">Contact</a>
    <a id="aboutlink" href="#about">About</a>
  </div>
</div>`


var biscourseWin;

function openBiscourse() {
  biscourseWin=window.open("https://biscourse.glideapp.io", "myWindow", "width=200, height=100");
  biscourseWin.moveTo(500, 100);
  biscourseWin.focus();
}
