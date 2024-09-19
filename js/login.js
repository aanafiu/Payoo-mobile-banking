document.getElementById("loginBtn").addEventListener('click', function(event){
            // console.log("button")
            event.preventDefault();
            const loginNumber = document.getElementById("loginNumber").value;
            const loginPass = document.getElementById("loginPass").value;

            

            if(!isNaN(loginNumber)  && loginNumber.toString().length === 11 && loginPass.toString().length === 4)
            {
                window.location.href = "../manager.html";
            }
            else
            {
               const loginBox = document.getElementById("loginBox");
               const p = document.createElement('p');
               if(isNaN(loginNumber))
               {
                p.innerHTML = "Please give 11 digit number";
                loginBox.appendChild(p);
               }
               else if(loginPass.toString().length !== 4)
               {
                p.innerHTML = "Wrong Pin";
                loginBox.appendChild(p);
               }
              
            }
            
})