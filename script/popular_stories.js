

  popular_stories_arr = [
    {
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523771-untitled-design-2022-07-13t193451.521.jpg",
      head_line:
        "CISCE ISC Class 12 Result 2022: Marking scheme, how to download here",
    },
    {
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524088-untitled-design-51.jpg",
      head_line:
        "CUSAT Result 2022 released at admissions.cusat.ac.in: Check important details here",
    },
    {
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2524104-untitled-design-2022-07-17t145605.612.jpg",
      head_line:
        "Karnataka CET Result 2022 to be out soon: Website, how to check here",
    },
    {
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523688-ayan-mukerji-kesariya-songfile-photos-1.jpg",
      head_line:
        "Brahmastra: Ayan Mukerji defends use of 'love storiya' in Kesariya song, says 'didn't find it like elaichi in biryani'",
    },
    {
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/21/2523941-medicines.jpg",
      head_line:
        "Centre planning to cut prices of critical medicines for diabetes, cardiovascular and kidney diseases: Report",
    },
  ];

  localStorage.setItem("popular_stories",JSON.stringify(popular_stories_arr))
  let popular_stories_LS = JSON.parse(localStorage.getItem("popular_stories")) || popular_stories_arr


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
      document.querySelector("#top_stories").append(div);
    });
  }
  display(popular_stories_LS);

