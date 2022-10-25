// menu toggler
function toggleMenu() {
  toggleBtn = document.querySelector(".toggleBtn");
  navList = document.querySelector(".navList");

  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    navList.classList.toggle("active");
  });

  document.querySelectorAll(".toggle").forEach((n) =>
    n.addEventListener("click", () => {
      toggleBtn.classList.remove("active");
      navList.classList.remove("active");
    })
  );
}
toggleMenu(); 

//Typewriter feature
class Typewriter {
  constructor(textElement, words, wait = 2000) {
    this.textElement = textElement;
    this.words = words;
    this.wait = parseInt(wait, 10); //to base 10
    this.isDeleting = false;
    this.txt = '';
    this.wordIndex = 0;
    this.type();
  }

  type() {
    // get current letter from each word in the array
    const current = this.wordIndex % this.words.length;

    //get full letters for each word
    const fullText = this.words[current];

    //check if letters are deleting
    if (this.isDeleting) {
      //remove letters
      this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
      //add letters
      this.txt = fullText.substring(0, this.txt.length + 1);
    }

    // add txt into the body using innerHTML
    this.textElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //set type speed
    let typeSpeed = 300;

    //make type speed faster when deleting
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //what to do if letters are completely typed out
    if (!this.isDeleting && this.txt === fullText) {
      typeSpeed = this.wait;
      // start deleting
      this.isDeleting = true;
    } else {
      if (this.isDeleting && this.txt === "") {
        //stop deleting
        this.isDeleting = false;

        //move to the next word
        this.wordIndex++;

        //cool down typing speed to give a waiting effect for a few milliseconds
        typeSpeed = 500;
      }
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

//DOM elements init for Typewriter on DOM load
document.addEventListener("DOMContentLoaded", init);

function init() {
  //init App
  const textElement = document.querySelector(".text-type");
  const words = JSON.parse(textElement.getAttribute("data-words"));
  const wait = textElement.getAttribute("data-wait");

  //init Typewriter class
  new Typewriter(textElement, words, wait);
}


// dark mode selector
function darkMode() {
  sun.classList.toggle('night');
  alert('activated');
}