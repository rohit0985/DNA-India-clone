let entertainment_arr = [
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524580-2524502-fotojet-2022-07-23t125933.631-1.jpg",
        head_line: "Deepesh Bhan dies: Know about Bhabi ji Ghar Par Hai actor's moments before sudden demise"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524570-deepesh-bhan.jpg",
        head_line: "Deepesh Bhan dies: Bhabi Ji Ghar Par Hain actress Shubhangi Atre reveals reason behind actor’s demise"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524537-sumi-film.jpg",
        head_line: "68th National Film Awards: Sanjeev K Jha's film Sumi wins in best children's film, best child artist categories"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524518-fotojet-2022-07-23t143655.344-1.jpg",
        head_line: "Deepesh Bhan death: Bhabhi ji Ghar Par Hai actor survived by wife and 1-year-old son, know about his family"
    },
    {
        image: "Ranveer Singh's nude photos invite hilarious memes on social media, check out",
        head_line: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524512-fotojet-2022-07-23t141431.736-1.jpg"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524509-whatsapp-image-2022-07-23-at-1.39.08-pm-1.jpeg",
        head_line: "Priyanka Chopra drops photos with her 'birthday squad', pens thankful note"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524457-fotojet-2022-07-23t091552.492-1.jpg",
        head_line: "68th National Film Awards: Justice Delayed but Delivered wins national award for best film on social issues"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524436-fotojet-2022-07-23t063936.074-1.jpg",
        head_line: "Delhi Crime season 2: DCP Vartika Chaturvedi is back with new case, crime drama to premiere in August"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524429-suirya-fi.jpg",
        head_line: "Happy Birthday Suriya: R Madhavan, Mammootty, Keerthy Suresh celebrate Soorarai Pottru star's National Award win"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524423-rakhi-sawant-2.jpg",
        head_line: "Ranveer Singh writes 'love you' to Rakhi Sawant, calls her 'rockstar' know why"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524412-droupadi-murmu.jpg",
        head_line: "Kangana Ranaut, Anushka Sharma, Malaika Arora congratulate Droupadi Murmu for becoming President of India"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524361-tahnhjai.jpg",
        head_line: "Tanhaji-The Unsung Warrior star Ajay Devgn reacts to winning National Awards for Best Actor, Popular Film"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524319-fotojet-2022-07-22t143921.727-2.jpg",
        head_line: "Bhool Bhualiyaa 2 star Kartik Aaryan says producers think 'main 25 din mein paise double kar deta hoon'"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524288-fotojet-2022-07-22t131813.478-1.jpg",
        head_line: "JugJugg Jeeyo OTT release date: When, where to watch Varun Dhawan, Kiara Advani, Anil Kapoor, Neetu Kapoor starrer"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524271-fotojet-2022-07-22t120402.582-2.jpg",
        head_line: "The Gray Man Twitter review: Dhanush performs 'better than' Chris Evans, Ryan Gosling, say netizens"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524255-fotojet-2022-07-22t110905.315-1.jpg",
        head_line: "Emergency: Anupam Kher to play Jayaprakash Narayan in Kangana Ranaut's film, FIRST look out"
    },
   
]

localStorage.setItem("entertainment",JSON.stringify(entertainment_arr))
let entertainment_LS_home = JSON.parse(localStorage.getItem("entertainment")) || entertainment_arr


let st=0;
let last = 3;
function displayEntertainment(data){

  for(let i=st; i<last; i++){

  
  let div = document.createElement("div")
  let image = document.createElement("img")
image.src = entertainment_LS_home[i].image
  let head_line = document.createElement("p")
  head_line.textContent=entertainment_LS_home[i].head_line

  div.append(image,head_line)
  document.querySelector("#entertainment-hp").append(div)

}
}
displayEntertainment(entertainment_LS_home)