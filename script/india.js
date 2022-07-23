

  let india_LS = JSON.parse(localStorage.getItem("india"))

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
display(india_LS)