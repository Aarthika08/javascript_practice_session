// let quote=document.getElementById("quote");
// let author=document.getElementById("author");
// let btn=document.getElementById("btn");

// const url="https://api.quotable.io/random";

// let getQuote=()=>{
//     fetch(url)
//     .then((data)=>data.json())
//     .then((item)=>{
//         console.log(item.content);
//         console.log(item.author);
//         quote.innerText=item.content;
//         author.innerText=item.author;
//     });
// };
// window.addEventListener("load",getQuote);
// btn.addEventListener("click",getQuote);



document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    let quote=document.getElementById("quote");
let cite=document.getElementById("author");
let button=document.getElementById("btn");
    async function updateQuote() {
      // Fetch a random quote from the Quotable API
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (response.ok) {
        // Update DOM elements
        quote.textContent = data.content;
        cite.textContent = data.author;
      } else {
        quote.textContent = "An error occured";
        console.log(data);
      }
    }
  
    // Attach an event listener to the `button`
    button.addEventListener("click", updateQuote);
  
    // call updateQuote once when page loads
    updateQuote();
  });
  
