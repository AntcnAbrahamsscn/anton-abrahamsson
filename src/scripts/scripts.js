// Active Navbar
// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll("section");
//     const navLinks = document.querySelectorAll(".site-nav li a");

//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 const targetId = entry.target.id;

//                 if (entry.isIntersecting) {
//                     navLinks.forEach((link) => {
//                         link.parentElement.classList.remove("active");
//                         if (
//                             link.getAttribute("href").substring(1) === targetId
//                         ) {
//                             link.parentElement.classList.add("active");
//                         }
//                     });
//                 }
//             });
//         },
//         {
//             threshold: 0.5,
//         }
//     );

//     sections.forEach((section) => {
//         observer.observe(section);
//     });
// });

