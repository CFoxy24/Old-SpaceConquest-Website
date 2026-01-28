let appHeader = `
    <div class="HRContainer">
    <a id="HomeTop" class="HRFlex" href="/"><div id="home" class="HRTopBar"></div>Home</a>
    <div class="HRSeparator"></div>
    <a id="ShipsTop" class="HRFlex" href="ships"><div id="ships" class="HRTopBar"></div>Ships</a>
    <img src="Images/Global/Logos/SpaceConquestLogo.png" id="HRMid" class="HRFlex"></img>
    <a id="RoadmapTop" class="HRFlex" href="roadmap"><div id="roadmap" class="HRTopBar"></div>Roadmap</a>
    <div class="HRSeparator"></div>
    <a id="AboutTop" class="HRFlex" href="about"><div id="about" class="HRTopBar"></div>About</a>
    </div>
    <div id="TopStylish"></div>
    <div style="width: 50%; height: 10%;"></div>
`;

let appHead = `
<link rel="image_src" href="Images/Global/Logos/SpaceConquestLogo.png"/>
<link rel="icon" type="image/png" href="Images/Global/Logos/SpaceConquestLogo.png">
<meta property="og:url" content="https://space-conquest.net">
<meta property="og:title" content="SpaceConquest">
<meta property="og:description" content="This is the official SpaceConquest website!">
<meta property="og:image" content="https://space-conquest.net/Images/Global/Logos/SpaceConquestLogo.png">
<meta property="og:type" content="website">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
`;

let appFooter =`
<div class="TRI TRIR" style="border-bottom:2vw solid rgb(11,11,20);"></div>
<div class="TRI TRIL" style="border-bottom:2vw solid rgb(11,11,20);"></div>
<img src="Images/Global/SpaceConquestFull.png" alt="" style="width: 25vw; margin: auto; display: block; ">

<div id="FTContainer" class="TXTContainer" style="height: 350px;">
    <div class="FTSubContainer">
        <p class="FTGridTop">All categories</p>
        <a class="FTGrid" href="/">Home</a>
        <a class="FTGrid" href="ships">Ships</a>
        <a class="FTGrid" href="roadmap">Roadmap</a>
        <a class="FTGrid" href="about">About</a>
        <a class="FTGrid" href="about-me">About me</a>
    </div>
    <div class="FTSubContainer">
        <p class="FTGridTop">All links</p>
        <a class="FTGrid" href="https://space-conquest.net">Website</a>
        <a class="FTGrid" href="https://discord.gg/aZeXeeCkys">Discord</a>
        <a class="FTGrid" href="https://www.youtube.com/@cfoxy24">Youtube</a>
        <a class="FTGrid" href="https://www.tiktok.com/@spaceconquest">Tiktok</a>
        <a class="FTGrid" href="https://www.roblox.com/games/16018926719/SpaceConquest">Roblox</a>
    </div>
    <div class="FTSubContainer">
        <p class="FTGridTop">About me</p>
        <img src="Images/Global/Me.png" style="width: 90px; border-radius: 100px; "s>
        <p style="font-size: 25px; margin-bottom: 0%">CFoxy</p>

        <p style="color: rgb(170, 170, 170);">Website designed by CFoxy</p>
        <p style="color: rgb(170, 170, 170);">Game made entirely by CFoxy</p>
        <a class="FTGrid"; style="text-decoration: underline;" href="about-me">More about me</a>
    </div>
</div>
`;

gsap.config({
    nullTargetWarn:false
})

var appheadvar = document.head
document.getElementById("app-header").innerHTML = appHeader;
document.getElementById("app-footer").innerHTML = appFooter;

var path = window.location.pathname;
var page = path.split("/").pop();

var title = document.createElement("title")

if (page == "") {
    title.innerHTML="SpaceConquest - Home";
} else {
    title.innerHTML="SpaceConquest - " + page.charAt(0).toUpperCase() + page.slice(1);
}

appheadvar.innerHTML = appHead
appheadvar.appendChild(title)

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.utils.toArray(".HRFlex").forEach(function(elem) {
        gsap.to(elem, {
            ease: "power4",
            width: "10.5vw",
            opacity: 1,
            duration: 1.3
        });
     }); 

     var turned = 0

     var HRMid = document.getElementById("HRMid")
     HRMid.addEventListener("mousedown", ()=>{
        turned+=1
        if (turned<5) {
            gsap.fromTo(HRMid,
                {
                    rotation:0
                },
                {
                    rotation:"+=360",
                    duration:.5
                }
                )
        } else if (turned==5) {

            gsap.to(HRMid,
                {
                    top:"100vh",
                    ease:"sine.in",
                    rotation:800,
                    duration:1
                }
                )
                setTimeout(() => {gsap.to(HRMid,{top:"0",ease:"sine.out",rotation:360*20,duration:5}); setTimeout(() => {turned=0},5000)}, 4000);
        }
        
     });

     gsap.utils.toArray(".HRFlex").forEach(function(elem) {
        const hover1 = gsap.to(elem.getElementsByClassName("HRTopBar"), {
                scaleX:"80%",
                duration: .2,
                opacity:1,
                paused: true,
                ease: "sine",
          },
        );
          const hover2 = gsap.to(elem, {
            color:"rgb(90, 170, 250)",
            duration:.2,
            paused: true
          }
        );

        var Elementf = null
        if (!page) {
            Elementf= elem.querySelector("#home")
        } else {
            Elementf = elem.querySelector("#"+page)
        }
        
        if (!Elementf) {
            elem.addEventListener("mouseenter", () => hover1.play() + hover2.play());
            elem.addEventListener("mouseleave", () => hover1.reverse() + hover2.reverse());
        } else {
            elem.style.color="rgb(90,120,220)";
            var topbar = elem.getElementsByClassName('HRTopBar');
            topbar[0].style.opacity=1;
            topbar[0].style.transform='scale(.8,1)';
            topbar[0].style.background="rgb(90,120,220)";
        }
     }); 
    
     gsap.utils.toArray(".FTGrid").forEach(function(elem) {
      const hover1 = gsap.to(elem, {
              duration: .1,
              opacity:1,
              color:"rgb(90, 170, 250)",
              paused: true,
        })
        
        elem.addEventListener("mouseenter", () => hover1.play());
        elem.addEventListener("mouseleave", () => hover1.reverse());
   }); 

   gsap.utils.toArray(".LT").forEach(function(elem) {
    gsap.to(elem, {
        scrollTrigger: {
            trigger: elem,
            start: "0% 90%",
            end: "100% 70%",
            scrub: 1.8,
        },
        ease: "power1.out",
        x: 200,
        opacity: 1,
        
    });
  });   
gsap.utils.toArray(".RT").forEach(function(elem) {
    gsap.to(elem, {
        scrollTrigger: {
            trigger: elem,
            start: "0% 90%",
            end: "100% 70%",
            scrub: 1.8,
        },
        ease: "power1.out",
        x: -200,
        opacity: 1
    });
 });   

  })

