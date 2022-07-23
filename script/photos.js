
 let photos_arr = [
    {
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/21/2524078-untitled-design-2022-07-21t175834.763.jpg",
      head_line:
        "Draupadi Murmu: 5 firsts achieved by the new Indian President",
      desc: "http://127.0.0.1:5500/photo_desc.html",
    },
    {
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/21/2523994-hollywood-actors.jpg",

      head_line:
        "Mike Tyson, Slyvester Stallone, Will Smith: International stars who featured in Bollywood movies",
    },
    {
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523871-fotojet-2022-07-20t215825.725-1.jpg",

      head_line:
        "Viral Photos of the Day: Janhvi Kapoor, Disha Patani, Tara Sutaria give fashion goals",
    },
    {
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523879-untitled-design-2022-07-20t215908.620.jpg",

      head_line:
        "DNA Explainer: Is 'Work From Home' the future? Know about changing employee mentality",
    },
    {
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523841-untitled-design-52.jpg",

      head_line: "In pics: Massive downpour disrupts normal life in Delhi NCR",
    },
    {
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523714-fotojet-50-1.jpg",

      head_line:
        "From Udaipur to Ladakh: 5 vacation spots made popular by Bollywood movies",
    },
    {
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/24/1958285-mughal-monument.jpg",

      head_line:
        "From Taj Mahal to Qutub Minar: Mughal era monuments, mosques embroiled in recent controversies",
    },
    {
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/24/1957400-aligarh-muslim-university3-ians.jpg",

      head_line:
        "Aligarh Muslim University foundation day: Famous personalities who studied here",
    },
    {
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/23/1942850-team-india.jpg",

      head_line:
        "Sanju Samson to Rahul Tripathi: Cricketers netizens believe Team India will miss against South Africa",
    },
    {
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/23/1942596-gyanvapi-mosque9.jpg",

      head_line: "Rare photo of Gyanvapi complex clicked in 1868, see here",
    },
  ];


  localStorage.setItem("photos",JSON.stringify(photos_arr))
  let photos_LS = JSON.parse(localStorage.getItem("photos")) || photos_arr

  // let top_news_LS = JSON.parse(localStorage.getItem("top_news"))

function display(data) {
    data.forEach(function (ele, idx) {
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
      document.querySelector("#main").append(div);
    });
  }
  display(photos_LS);