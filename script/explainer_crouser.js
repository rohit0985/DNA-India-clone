// let explainer_arr = [
//     {
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/22/2524388-22thumbnail1800456.jpeg",
//       title:
//         "DNA Decoded: SC allows abortion at 24 weeks, what India’s abortion law says?",
//     },
//     {
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/22/2524372-22thumbnail1800454.jpeg",
//       title: "Watch: Mysterious, Huge pink cloud over Australian town",
//     },
//     {
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/22/2524371-22thumbnail1800455.jpeg",
//       title:
//         "DNA Sparks: Microsoft set to take on Meta with its Facebook-like app inside Teams",
//     },
//     {
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/22/2524368-22thumbnail1800453.jpg",
//       title:
//         "4 people killed after ambulance crashes into toll plaza in Karnataka",
//     },
//     {
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/22/2524364-22thumbnail1800452.jpg",
//       title:
//         "CBSE result 2022: Meet Tanya Singh, who topped 12th boards with 500/500 score",
//     },
//     {
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/22/2524360-22thumbnail1800451.jpg",
//       title:
//         "DNA Big Screen: Samantha and Akshay made a laugh riot at Koffee with Karan",
//     },
//     {
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/22/2524357-22thumbnail1800450.jpeg",
//       title:
//         "On Cam: Train catches fire atop bridge, passengers jump through windows",
//     },
//     {
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/22/2524353-22thumbnail1800448.jpeg",
//       title:
//         "World Athletic Championships: Olympic champion Neeraj Chopra qualifies for javelin final",
//     },
//     {
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/22/2524351-22thumbnail1800449.jpeg",
//       title:
//         "Meet CBSE Class 10 toppers: Diya Namdev, Mayank Yadav score 100% marks",
//     },
//     {
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/22/2524344-22thumbnail1800447.jpeg",
//       title:
//         "CBSE Class 10th Result 2022: 94.40% students pass, Trivandrum tops",
//     },
//   ];

  let explainer_LS = JSON.parse(localStorage.getItem("explainer")) 

  let carsoul_exp = document.getElementById("e-carsoul");
  let explain = document.getElementById("explain");

  let elt = 0;
  ert = 2;

  function display(data) {


    explain.innerHTML = null;
    for (let i = elt; i < ert; i++) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = data[i].image;
      let title = document.createElement("p");
      title.textContent = data[i].title;

      div.append(img, title);
      explain.append(div);
    }
  }
  display(explainer_LS);

  
  document.getElementById("e-btn1").addEventListener("click", function(){
    elt=1;
ert = elt+2
    
    display(explainer_LS);
})
document.getElementById("e-btn2").addEventListener("click", function(){
    elt=2;
ert = elt+2
   
    display(explainer_LS);
})
document.getElementById("e-btn3").addEventListener("click", function(){
    elt=3;
ert = elt+2
    display(explainer_LS);
})
document.getElementById("e-btn4").addEventListener("click", function(){
    elt=4;
    ert=elt+2
    display(explainer_LS);
})

 

  

