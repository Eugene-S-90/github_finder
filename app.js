
// init github
const github = new GitHub;
 
// UI
const ui = new UI;

// search input 

 const searchUser = document.getElementById("searchUser");

//  search input event listener

searchUser.addEventListener('keyup',(e) => {
    // get input Text
    const userText = e.target.value;
        if (userText !== ""){
            // make http call
            github.getUser(userText)
                .then(data=>{
                    if(data.profile.message==="Not Found"){
                        // show alert
                        ui.showAlert('User not found',"alert-msg")
                    } else {
                        // show profile
                        ui.showProfile(data.profile);
                        ui.showRepos(data.repos);

                    }
                })
        } else {
            // clear profile
            ui.clearProfile();

        }
})