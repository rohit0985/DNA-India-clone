let india_arr = [
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524578-2524469-arpita-mukherjee.jpg",
        head_line: "ED arrests Arpita Mukherjee, close aide of Bengal Minister Partha Chatterjee"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524573-smriti-irani.jpg",
        head_line: "Daughter being targeted for my stand on 'loot' by Gandhis: Smriti Irani on Goa bar row"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524571-untitled-design-55.png",
        head_line: "'You are free to go anywhere': Samajwadi Party's open letter to MLA Shivpal Yadav and SBSP chief Omprakash Rajbhar"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524568-2524473-partha-chatterjee.jpg",
        head_line: "West Bengal Minister Partha Chatterjee sent to 2-day ED custody in teacher recruitment scam"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524566-untitled-design-54.png",
        head_line: "Civilians can soon fly to space? ISRO eyeing 'space tourism' with Gaganyaan mission just like SpaceX"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524564-2524469-arpita-mukherjee.jpg",
        head_line: "What's Partha Chatterjee's alleged connection with Arpita Mukherjee? Why was Partha Chatterjee arrested?"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524556-bhagwant-mann.jpg",
        head_line: "Punjab CM's Chandigarh residence fined Rs 10,000 for littering"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/23/2442743-untitled-design-2.png",
        head_line: "In numbers: Can Draupadi Murmu salvage BJP’s chances in India’s tribal belt?"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524545-2522943-vaccine.jpg",
        head_line: "Centre reveals number of people who haven’t taken even single dose of COVID-19 vaccine"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524505-untitled-design-2022-07-23t130238.804.jpg",
        head_line: "Rajasthan: After seer who self-immolated dies, calls from inside Congress to sack Mining Minister Pramod Bhaya"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524439-2523097-untitled-design-2022-07-17t125514.907-1.jpg",
        head_line: "Telangana: Man found dead in Isha Yoga Centre in Coimbatore"
    },
    
]


localStorage.setItem("india",JSON.stringify(india_arr))
  let india_LS_home = JSON.parse(localStorage.getItem("india")) || india_arr


  let start=0;
  let end = 3;
  function displayIndia(data){

    for(let i=start; i<end; i++){

    
    let div = document.createElement("div")
    let image = document.createElement("img")
image.src = india_LS_home[i].image
    let head_line = document.createElement("p")
    head_line.textContent=india_LS_home[i].head_line

    div.append(image,head_line)
    document.querySelector("#india-hp").append(div)

  }
}
displayIndia(india_LS_home)