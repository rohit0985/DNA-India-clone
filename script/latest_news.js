let latest_news_arr = [
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524565-shami.jpg",
        head_line: "Mohammed Shami buys Jaguar F-type sports car worth nearly Rs 1 crore, pics go viral"
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
        image: "https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/07/23/2524567-ranveer-swara.jpg",
        head_line: "Swara Bhasker reacts to Ranveer Singh's nude photoshoot, says 'if you don't like it...'"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524556-bhagwant-mann.jpg",
        head_line: "Punjab CM's Chandigarh residence fined Rs 10,000 for littering"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524555-untitled-design-53.png",
        head_line: "Joker malware attack: Google bans 50 android apps, delete if you have them installed"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524550-rahane.jpg",
        head_line: "Ajinkya Rahane gets trolled after asking for movie suggestions, fans say 'watch your highlights'"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524553-untitled-design-2022-07-23t162048.372.png",
        head_line: "Maharashtra swine flu cases touch 142, 7 die due to deadly disease"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524545-2522943-vaccine.jpg",
        head_line: "Centre reveals number of people who haven’t taken even single dose of COVID-19 vaccine"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524548-untitled-design-2022-07-23t160652.545.png",
        head_line: "Alert! Millions of unencrypted messages exposed by this messaging app"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524546-2153546-mamata-banerjee.jpg",
        head_line: "Partha Chatterjee arrest: TMC leaders have 'many girlfriends', Mamata Banerjee 'queen of dacoits', says BJP MP"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524540-sam-2.jpg",
        head_line: "Naga Chaitanya opens up on life after divorce from ex-wife Samantha Ruth Prabhu, says 'it feels...'"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524541-untitled-design-2022-07-23t155259.316.png",
        head_line: "Delhi government to start free English speaking course across 50 centres, says CM Arvind Kejriwal"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524535-icc.jpg",
        head_line: "ICC to announce hosts of upcoming Women's T20 World Cups, ODI World Cups and other events soon"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524534-untitled-design-2022-07-23t154411.464.png",
        head_line: "Google fires software engineer who claimed its AI chatbot was a self-aware person"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524537-sumi-film.jpg",
        head_line: "68th National Film Awards: Sanjeev K Jha's film Sumi wins in best children's film, best child artist categories"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524543-untitled-design-2022-07-23t155751.264.jpg",
        head_line: "Viral Video: Rat attack a pigeon in New York, watch how it ends"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524529-untitled-design-51.png",
        head_line: "NDA stands for 'No Data Available': Rahul Gandhi's dig at Centre over lack of data"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524525-apple-iphone-13-pro-max-amazon.png",
        head_line: "Why this may be the right time to buy Apple iPhone 13 Pro models"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524528-untitled-design-2022-07-23t152641.441.png",
        head_line: "Viral! Pilot flies parents’ home as a surprise, video crosses 2.7 million views"
    },
]

localStorage.setItem("latest_news",JSON.stringify(latest_news_arr))
  let latest_news_LS = JSON.parse(localStorage.getItem("latest_news")) || latest_news_arr


function display(data) {
    data.forEach(function (ele) {
        let div = document.createElement("div")
        let image = document.createElement("img")
        image.src = ele.image
        let para = document.createElement("p")
        para.textContent = ele.head_line


        div.append(image, para)
        document.querySelector("#change1").append(div)
    })

}
display(latest_news_LS)