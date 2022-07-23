

  top_stories = [
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

  function display(data) {
    top_stories.forEach(function (ele, idx) {
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
  display(top_stories);

