// Question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

cat.complain();


// Question 2

const firstHeading = document.querySelector("h3");
firstHeading.innerHTML = "Updated heading";


// Question 3

firstHeading.style.fontSize = "2em";


// Question 4

firstHeading.classList.toggle("subheading");

// Question 5


const paragraphs = document.querySelectorAll('p');

for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'red';
}


// Question 6

const resultsContainer = document.querySelector(".results");

console.log(resultsContainer.innerHTML)

resultsContainer.innerHTML = "<p> New paragraph</>";
resultsContainer.style.background = 'yellow';


// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function myCats(list) {
    for(let i = 0; i < list.length; i++) {
      console.log(list[i].name);
    }
  }
  
  myCats(cats);

  // Question 8

  let html = "";

function createCats(cats) {
    for(let i = 0; i < cats.length; i++) {
        console.log(cats[i]);

      const name = cats[i].name;
      let age = "Age unknown";

      if(cats[i].age) {
          age = cats[i].age;
      }
  }
  return html;
}
const finalHtml = createCats(cats);

const container = document.querySelector(".cat-container");

container.innerHTML = finalHtml;