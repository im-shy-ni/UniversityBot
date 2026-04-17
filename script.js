let menuBtn=document.getElementById("menuBtn");let navbar=document.getElementById("navbar");
if(menuBtn){menuBtn.onclick=function(){navbar.classList.toggle("show");};}
function sendMessage(){let input=document.getElementById("userInput");let message=input.value.trim();if(message==="")return;addUserMessage(message);let reply=getReply(message.toLowerCase());addBotMessage(reply);input.value="";}
function sendQuick(text){addUserMessage(text);let reply=getReply(text.toLowerCase());addBotMessage(reply);}
function addUserMessage(text){let div=document.createElement("div");div.className="user-message";div.innerText=text;let chatBody=document.getElementById("chatBody");chatBody.appendChild(div);chatBody.scrollTop=chatBody.scrollHeight;}
function addBotMessage(text){let div=document.createElement("div");div.className="bot-message";div.innerText=text;let chatBody=document.getElementById("chatBody");chatBody.appendChild(div);chatBody.scrollTop=chatBody.scrollHeight;}
function getReply(msg){if(msg.includes("admission")||msg.includes("apply")){return "Admissions are open. Please check the admissions page for eligibility, required documents, and process details.";}
else if(msg.includes("course")||msg.includes("program")||msg.includes("department")){return "Courses include M.Sc. Computer Science, MCA, M.Com., M.A. English, M.Sc. Mathematics, M.Sc. Physics, and more.";}
else if(msg.includes("fees")||msg.includes("fee")){return "Fees depend on the course. Please check the admissions page or contact the university office for exact fee details.";}
else if(msg.includes("hostel")){return "Hostel facilities are available for students, and the facilities page provides an overview of campus support.";}
else if(msg.includes("contact")||msg.includes("phone")||msg.includes("email")){return "You can contact the university at +91 422 2422222 or email info@university.edu.";}
else if(msg.includes("library")){return "The library provides books, journals, research papers, and digital learning resources.";}
else if(msg.includes("placement")){return "The placement cell provides training, internships, and placement support for students.";}
else if(msg.includes("facility")||msg.includes("facilities")){return "The university provides library, computer labs, hostel, health support, and placement services.";}
else if(msg.includes("timing")||msg.includes("office")){return "Office hours are Monday to Friday, 9:00 AM to 5:00 PM.";}
else if(msg.includes("hello")||msg.includes("hi")||msg.includes("hey")){return "Hello! How can I help you today?";}
else{return "Sorry, I did not understand that. Please ask about admission, courses, fees, hostel, contact, library, placement, or facilities.";}
let form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Application submitted successfully!");
    form.reset();
  });
}}