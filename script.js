arr = [
  {
    fullName: "Alice Johnson",
    age: 28,
    designation: "Frontend Developer",
    companyName: "TechNova",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ,
    isFriend: false
  },
  {
    fullName: "Brian Smith",
    age: 34,
    designation: "Backend Developer",
    companyName: "CodeWorks",
    skills: ["Node.js", "Express", "MongoDB", "SQL"],
    image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    fullName: "Catherine Lee",
    age: 26,
    designation: "UI/UX Designer",
    companyName: "PixelPoint",
    skills: ["Figma", "Sketch", "Adobe XD", "Photoshop"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    fullName: "David Kim",
    age: 30,
    designation: "Full Stack Developer",
    companyName: "InnovateX",
    skills: ["JavaScript", "Node.js", "React", "MySQL", "Docker", "GraphQL"],
    image: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    fullName: "Emma Rodriguez",
    age: 29,
    designation: "Mobile App Developer",
    companyName: "Appify",
    skills: ["Flutter", "Dart", "Firebase", "UI Design"],
    image: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    fullName: "Franklin Davis",
    age: 25,
    designation: "DevOps Engineer",
    companyName: "CloudSphere",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    image: "https://images.unsplash.com/photo-1519713880332-91cfe19a59dd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    fullName: "Grace Liu",
    age: 27,
    designation: "Data Scientist",
    companyName: "DataMinds",
    skills: ["Python", "Pandas", "NumPy", "Machine Learning", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    fullName: "Henry Patel",
    age: 32,
    designation: "Product Manager",
    companyName: "VisionaryTech",
    skills: ["Agile", "Scrum", "JIRA", "Roadmapping", "Communication"],
    image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    fullName: "Isla Thompson",
    age: 25,
    designation: "QA Engineer",
    companyName: "TestLabs",
    skills: ["Selenium", "Jest", "Cypress", "Manual Testing"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    fullName: "Jack Nguyen",
    age: 31,
    designation: "Cybersecurity Analyst",
    companyName: "SecureNet",
    skills: ["Network Security", "Penetration Testing", "Firewalls", "Python", "Encryption"],
    image: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
  }
]

let main = document.querySelector('#main')
function heroFunction() {
  let sum = "";
  arr.forEach((elem, idx) => {
    sum += `
      <div class="card">
        <img src="${elem.image}" alt="">
        <h1>${elem.fullName}</h1>
        <h5>Age:${elem.age}</h5>
        <h4>${elem.designation}</h4>
        <p>${elem.skills.join(', ')}</p>
        <button class="friend-btn ${elem.isFriend ? 'remove' : 'add'}" data-id="${idx}">
  ${elem.isFriend ? "Remove Friend" : "Add Friend"}
</button>
      </div>
    `;
  });

  main.innerHTML = sum;
}

heroFunction()



main.addEventListener('click', function (dets) {
  //console.log(arr[dets.target.id])
  let gold=arr[dets.target.id]
  //console.log(gold.fullName)
  // gold.fullName='Priyanshu'
  // console.log(arr)  //changed fullname in array'
  heroFunction()
})

main.addEventListener("click", function (dets) {
  if (dets.target.classList.contains("friend-btn")) {
    let id = dets.target.getAttribute("data-id");
    arr[id].isFriend = !arr[id].isFriend; 
    heroFunction();
  }
});
