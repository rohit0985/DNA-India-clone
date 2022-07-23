

let entertainment_LS_home = JSON.parse(localStorage.getItem("entertainment"))

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
display(entertainment_LS_home)