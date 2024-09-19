document.getElementById("loginBtn").addEventListener('click', function(event){
            // console.log("button")
            event.preventDefault();
            const loginNumber = document.getElementById("loginNumber").value;
            const loginPass = document.getElementById("loginPass").value;


            if(!isNaN(loginNumber)  && loginNumber.toString().length === 11 && loginPass.toString().length === 4)
            {
                window.location.href = "manager.html";
            }
            else
            {
               const p = document.getElementById("warning");
            //    const loginBox = document.getElementById("loginBox");
            //    const p = document.createElement('p');

               if(isNaN(loginNumber) || loginNumber.toString().length < 11 || loginNumber.toString().length > 11 || loginNumber === "")
               {
                p.innerText = "Please give 11 digit number";
                p.classList.add("text-center");
                loginBox.appendChild(p);
               }
               else if(loginPass.toString().length !== 4 || loginPass === "")
               {
                p.innerText = "Wrong Pin";
                p.classList.add("text-center");
                loginBox.appendChild(p);
               }
              
            }
            
})
