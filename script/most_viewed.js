most_viewed=[
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/08/2520708-shreya-ist-slide.jpg",
    head_line:"The Family Man actress Shreya..."
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/05/23/1942850-team-india.jpg",
    head_line:"Sanju Samson to Rahul Tripathi..."
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/05/27/2007952-fotojet-2022-05-27t122144.022.jpg",
    head_line:"6 times Janhvi Kapoor handled..."
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/17/2359221-sara-ali-khan.jpg",
    head_line:"Sara Ali Khan looks sizzling... "
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/05/23/1942596-gyanvapi-mosque9.jpg",
    head_line:"Rare photo of Gyanvapi complex..."
    },
]

function display(data) {
    most_viewed.forEach(function (ele, idx) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = ele.image;
      let link = document.createElement("p");
      let heading = document.createElement("p");
      heading.textContent = ele.head_line;
      heading.addEventListener("click", function () {
        window.location.href = ele.desc;
      });

      div.append(img, heading);
      document.querySelector("#m-v-content").append(div);
    });
  }
  display(most_viewed);