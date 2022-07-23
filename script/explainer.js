let explainer_arr = [
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524443-population.jpg",
        head_line: "DNA Explainer: What is Population Control Bill, two-child policy and its Constitutional roots?"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524408-antarctica-dna.png",
        head_line: "DNA Explainer: What is the Indian Antarctic Bill 2022, passed for research in no man’s land?"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/19/2523529-gst-rate.png",
        head_line: "DNA Explainer: After GST rate hike, know which food items, essential commodities will get costlier"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/15/2522704-parliament-ians.jpg",
        head_line: "DNA Explainer: What are 'unparliamentary words', how and who decides it?"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/15/2522683-srilanka-protests-reuters.jpg",
        head_line: "DNA Explainer: 4 people who uprooted Rajapaksa family by gathering mass support through Facebook"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/13/2522139-indian-rupee-reuters.jpg",
        head_line: "DNA Explainer: How RBI's new rule will help foreign transactions in Indian rupee"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/12/2521829-10-downing-street-reuters.jpg",
        head_line: "DNA Explainer: What is 1922 Committee and by which method will UK PM be decided?"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/12/2521816-eknathshinde-devendrafadnavis-ians.jpg",
        head_line: "DNA Explainer: What happens to defectors in other countries?"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/08/2520771-rajya-sabha-ani.jpg",
        head_line: "DNA Explainer: Why are 12 members nominated to Rajya Sabha, who and what is the selection criteria"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/07/2520563-spicejet-ians.jpg",
        head_line: "DNA Explainer: How is the maintenance of airplanes done, why technical snags occur"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/06/2520257-aareycolony1.jpg",
        head_line: "DNA Explainer: Why Aarey forest matters and why is it known as 'Lung of Mumbai'"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/06/2520049-honeybees-pixabay.jpg",
        head_line: "DNA Explainer: Why Australia killed millions of honeybees and kept many under lockdown"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/05/2519762-gst-ians.jpg",
        head_line: "DNA Explainer: Why GST rate changes have been done and its impact"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/04/2518938-shiv-sena-symbol.jpg",
        head_line: "DNA Explainer: Who will be recognised as 'real Shiv Sena', Uddhav or Shinde faction?"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/04/2518669-uddhav-ani.jpg",
        head_line: "DNA Explainer: Which 'trick' of defecting MLAs makes the Speaker powerless"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/04/2507407-cyber-attack-pixabay.jpg",
        head_line: "DNA Explainer: What's Hermit spyware that targets smartphones, how to stay safe?"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/04/2484256-cm-post.jpg",
        head_line: "DNA Explainer: Amid Maharashtra crisis, what are the powers of a Chief Minister?"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/04/2462785-us-gun-reuters.jpg",
        head_line: "DNA Explainer: What is US bipartisan gun safety bill and its provisions?"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/23/2443056-dhfl-reuters.jpg",
        head_line: "DNA Explainer: How DFHL committed the biggest bank fraud through 'Bandra Books'"
    },
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/23/2442743-untitled-design-2.png",
        head_line: "In numbers: Can Draupadi Murmu salvage BJP’s chances in India’s tribal belt?"
    },
]

localStorage.setItem("explainer",JSON.stringify(explainer_arr))
  let explainer_LS = JSON.parse(localStorage.getItem("explainer")) || explainer_arr

//   let top_news_LS = JSON.parse(localStorage.getItem("top_news"))


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
display(explainer_LS)