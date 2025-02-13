class Header {
    constructor() {
      this.color = "Red";
    }
  
  //Arrow function:
    changeColor = () => {
      document.getElementById("id1").innerHTML += this;
    }
  }
  
  const myheader = new Header();
  
  
  //The window object calls the function:
  window.addEventListener("load", myheader.changeColor);
  
  //A button object calls the function:
  document.getElementById("btn").addEventListener("click", myheader.changeColor);