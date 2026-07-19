const orb = document.querySelector(".orb");

document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * -20;

    orb.style.transform = `translateY(-10px) rotateX(${y}deg) rotateY(${x}deg)`;
});

lucide.createIcons();

const cards=document.querySelectorAll(".about-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        card.style.setProperty("--x",`${x}px`);
        card.style.setProperty("--y",`${y}px`);

    });

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){
            link.classList.add("active");
        }

    });

});

const copyBtn = document.getElementById("copyEmailBtn");
const copyMessage = document.getElementById("copyMessage");

copyBtn.addEventListener("click", async () => {

    try{

        await navigator.clipboard.writeText("aaditdahiya3111@gmail.com");

        copyMessage.classList.add("show");

        copyBtn.textContent = "✅ Copied!";

        setTimeout(() => {

            copyMessage.classList.remove("show");
            copyBtn.textContent = "📋 Copy Email";

        },2000);

    }

    catch{

        alert("Couldn't copy the email.");

    }

});

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backToTop.classList.add("show");

}

else{

backToTop.classList.remove("show");

}

});

backToTop.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};