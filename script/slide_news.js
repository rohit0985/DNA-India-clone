// let topNews = [
//     {
//       category: "Telivision",
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523974-kapil-sharma-1.jpg",
//       head_line:
//         "The Kapil Sharma Show: New season of show to replace Archana Puran Singh's India's Laughter Challenge?",
//       desc: "http://127.0.0.1:5500/top_news_desc.html",
//     },
//     {
//       category: "India",
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523972-untitled-design-88.png",
//       head_line:
//         "Sidhu Moose Wala murder: All you need to know about Jagrup Singh Roopa, Manpreet Singh Mannu's encounter",
//     },
//     {
//       category: "India",
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523938-2522529-2455342-draupadi-murmu.jpg",
//       head_line:
//         "Droupadi Murmu's inspirational life: Two sons, husband died within four years, but she continued her march",
//     },
//     {
//       category: "India",
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523969-shashi-tharoor.jpg",
//       head_line:
//         "'Algospeak' is Shashi Tharoor's 'Word of the Day'; do you know what it means?",
//     },
//     {
//       category: "India",
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523922-sonia-rahul.jpg",
//       head_line:
//         "National Herald case explained: Why is Sonia Gandhi appearing before ED today?",
//     },
//     {
//       category: "Cricket",
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523953-odi-rankings.jpg",
//       head_line:
//         "Rohit Sharma-Virat Kohli drop places, massive gains for Pant, Hardik in ODI rankings",
//     },
//     {
//       category: "World",
//       image:
//         "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523960-indian-woman.jpg",
//       head_line:
//         "Indian woman, missing for three years, added to FBI's 'missing persons' list",
//     },
//   ];

  // let top_news_LS = JSON.parse(localStorage.getItem("top_news"))

  // let top_news_LS = JSON.parse(localStorage.getItem("top_news"))



  // let top_news_arr = [
  //   {
  //     category: "Telivision",
  //     image:
  //       "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523974-kapil-sharma-1.jpg",
  //     head_line:
  //       "The Kapil Sharma Show: New season of show to replace Archana Puran Singh's India's Laughter Challenge?",
  //     desc: "http://127.0.0.1:5500/top_news_desc.html",
  //   },
  //   {
  //     category: "India",
  //     image:
  //       "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523972-untitled-design-88.png",
  //     head_line:
  //       "Sidhu Moose Wala murder: All you need to know about Jagrup Singh Roopa, Manpreet Singh Mannu's encounter",
  //   },
  //   {
  //     category: "India",
  //     image:
  //       "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523938-2522529-2455342-draupadi-murmu.jpg",
  //     head_line:
  //       "Droupadi Murmu's inspirational life: Two sons, husband died within four years, but she continued her march",
  //   },
  //   {
  //     category: "India",
  //     image:
  //       "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523969-shashi-tharoor.jpg",
  //     head_line:
  //       "'Algospeak' is Shashi Tharoor's 'Word of the Day'; do you know what it means?",
  //   },
  //   {
  //     category: "India",
  //     image:
  //       "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523922-sonia-rahul.jpg",
  //     head_line:
  //       "National Herald case explained: Why is Sonia Gandhi appearing before ED today?",
  //   },
  //   {
  //     category: "Cricket",
  //     image:
  //       "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523953-odi-rankings.jpg",
  //     head_line:
  //       "Rohit Sharma-Virat Kohli drop places, massive gains for Pant, Hardik in ODI rankings",
  //   },
  //   {
  //     category: "World",
  //     image:
  //       "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523960-indian-woman.jpg",
  //     head_line:
  //       "Indian woman, missing for three years, added to FBI's 'missing persons' list",
  //   },
  // ];

  // localStorage.setItem("top_news",JSON.stringify(top_news_arr))
  let top_news_LS = JSON.parse(localStorage.getItem("top_news")) 


  

let slide = document.querySelector("marquee")
let i=0
slide.textContent=top_news_LS[i].head_line

  document.querySelector("#t-n-btn-left").addEventListener("click", function(){
if(i<=0) return
i--;
slide.textContent=top_news_LS[i].head_line
// slide.textContent.addEventListener("click",function(){
//     window.location.href=topNews[i+1].desc
//   })
 
  })

  document.querySelector("#t-n-btn-right").addEventListener("click", function(){
if(i==top_news_LS.length-1) return
i++;
slide.textContent=top_news_LS[i].head_line

  })

 