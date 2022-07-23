

  let top_news = [
    {
      category: "Telivision",
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523974-kapil-sharma-1.jpg",
      head_line:
        "The Kapil Sharma Show: New season of show to replace Archana Puran Singh's India's Laughter Challenge?",
      desc: "http://127.0.0.1:5500/top_news_desc.html",
    },
    {
      category: "India",
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523972-untitled-design-88.png",
      head_line:
        "Sidhu Moose Wala murder: All you need to know about Jagrup Singh Roopa, Manpreet Singh Mannu's encounter",
    },
    {
      category: "India",
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523938-2522529-2455342-draupadi-murmu.jpg",
      head_line:
        "Droupadi Murmu's inspirational life: Two sons, husband died within four years, but she continued her march",
    },
    {
      category: "India",
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523969-shashi-tharoor.jpg",
      head_line:
        "'Algospeak' is Shashi Tharoor's 'Word of the Day'; do you know what it means?",
    },
    {
      category: "India",
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523922-sonia-rahul.jpg",
      head_line:
        "National Herald case explained: Why is Sonia Gandhi appearing before ED today?",
    },
    {
      category: "Cricket",
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523953-odi-rankings.jpg",
      head_line:
        "Rohit Sharma-Virat Kohli drop places, massive gains for Pant, Hardik in ODI rankings",
    },
    {
      category: "World",
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523960-indian-woman.jpg",
      head_line:
        "Indian woman, missing for three years, added to FBI's 'missing persons' list",
    },
  ];


function display(data) {
    top_news.forEach(function (ele, idx) {
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
      document.querySelector("#change1").append(div);
    });
  }
  display(top_news);