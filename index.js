const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Front-end Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Video-editor";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Gamer";
  }, 8000);
   //1s = 1000 milliseconds
   
};

textLoad();
setInterval(textLoad, 12000);


