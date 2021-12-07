var users = [
    {
    name:"Suren Ohanyan",
    country:"Armenia",
    age:25,
    gender:"male",
    },
    {
    name:"Jull switch",
    country:"USA",
    age:33,
    gender:"fmale",
    },
      {
    name:"Join Joins",
    country:"USA",
    age:35,
    gender:"male",
    },
      {
    name:"Sevak Ohanyan",
    country:"Russia",
    age:45,
    gender:"male",
    },
    {
    name:"Sona Ohanyan",
    country:"Russia",
    age:45,
    gender:"female",
    },
    
    ];
    
    
    var usersBox = document.querySelector("#users-box");
    var serachbutton = document.querySelector("#serach-button");
    var serachtext = document.querySelector("#serach-text");
    var filtersnav = document.querySelector("#filters-nav");
    var filteredUsers = document.querySelector("#uppdate-filters");
    var loginBtn = document.querySelectorAll(".login-btn");
    var emailinput =  document.querySelector("#email");
    var log = document.querySelector('.reg-btn');
    
    
    log.addEventListener("click",reg);
    function reg(){
    var log1 = document.querySelector("#reg-btn1");
    if(log1.style.display == "" ||  log1.style.display === 'none'){
    log1.style.display = "block";
    }
    else {
    log1.style.display = "none";
    }
    }
    loginBtn[0].addEventListener("click",openHiddenlogin);
    loginBtn[1].addEventListener("click",openHiddenlogin);
    
    function openHiddenlogin(){
    var loginbox = document.querySelector("#login-box");
    if(loginbox.style.display = "" ||  loginbox.style.display === 'none'){
    loginbox.style.display = "block";
    }
    else {
    loginbox.style.display = "none";
    }
    }
    
    
   
    filteredUsers.addEventListener("click",function(){
    let filtersBox = document.querySelector("#coutry-filter").value.toLocaleLowerCase();
      let  carrentgender = document.querySelector('#gender-filter').value.toLocaleLowerCase();
        let filteredUsers = users.filter(function(user){
        return (user.country.toLocaleLowerCase().includes(filtersBox) &&
        user.gender.toLocaleLowerCase().includes(carrentgender) &&
        user.name.toLocaleLowerCase().includes(serachtext.value.toLocaleLowerCase())
        );
        });
        usersBox.innerHTML = "";

    for(user of filteredUsers){
    var userElement = document.createElement("DIV");
    userElement.classList.add("user-item");
    userElement.innerHTML = `
    <h2>${user.name}</h2>
    <p>country: ${user.country}</p>
        <p>age: ${user.age}</p>
        <p>gender: ${user.gender}</p>
    `;
    usersBox.appendChild(userElement);
    }
    });
    
    
    
    
    
    
    filtersnav.addEventListener("click",function(){
    let filtersBox = document.querySelector("#filters");
    if(filtersBox.style.display == "" || filtersBox.style.display === 'none'){
    filtersBox.style.display = "block";
    }
    else {
    filtersBox.style.display = "none";
    }
    });
    serachbutton.addEventListener("click",function(){
    let filteredUsers = users.filter(function(user){
    return user.name.toLocaleLowerCase().includes(serachtext.value.toLocaleLowerCase());
    
    });
    usersBox.innerHTML = "";
    for(user of filteredUsers){
    var userElement = document.createElement("DIV");
    userElement.classList.add("user-item");
    userElement.innerHTML = `
    <h2>${user.name}</h2>
    <p>country: ${user.country}</p>
        <p>age: ${user.age}</p>
        <p>gender: ${user.gender}</p>
    `;
    usersBox.appendChild(userElement);
    }
    });
     
    for(user of users){
    var userElement = document.createElement("DIV");
    userElement.classList.add("user-item");
    userElement.innerHTML = `
    <h2>${user.name}</h2>
    <p>country: ${user.country}</p>
        <p>age: ${user.age}</p>
        <p>gender: ${user.gender}</p>
    `;
    usersBox.appendChild(userElement);
    }
    