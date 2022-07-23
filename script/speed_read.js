let speed_read =[
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524256-cbse.jpg",
        head_line:"CBSE Class 12 result declared: Noida, Delhi, Bhopal, Chandigarh - list of best performing cities"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524248-untitled-design-2022-07-03t124955.376.jpg",
        head_line:"CBSE Class 10 Term 2 Result 2022 to be out today at cbse.nic.in by 2 pm: See how to check 10th board result"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524247-cbse-results-2022.jpg",
        head_line:"CBSE 12th Result 2022 DECLARED: 1.34 lakh students score above 90 percent, 92.7 percent clear the exam"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524245-resultss-1.jpg",
        head_line:"CBSE Result 2022 Class 12th DECLARED: Get your CBSE 12th term 2 result here - Direct link"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524240-cbse-1.jpg",
        head_line:"CBSE Class 12 Term 2 Results 2022 declared: Steps to check CBSE Class 12 results via SMS"
    },
]

function display(data) {
    speed_read.forEach(function (ele, idx) {
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
      document.querySelector("#s-r-content").append(div);
    });
   
  }
  display(speed_read);