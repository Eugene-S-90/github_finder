

class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="profile__wrapper">
            <div class="profile__img-wrapper">
                <img class="profile__img" src="${user.avatar_url}">
                 <a href = "${user.html_url}" class="profile__btn">View Profile</a>
            </div>
            <div class="profile__info-wrapper">
                <div class="profile__info">
                    <span class="profile__info__repos"> Public Repos : ${user.public_repos}</span>
                    <span class="profile__info__gists"> Public Gists : ${user.public_gists}</span>
                    <span class="profile__info__followers"> Followers : ${user.followers}</span>
                    <span class="profile__info__following"> Following : ${user.following}</span>
                </div>
                <div class="profile__personal">
                <ul class="profile__ul">
                    <li class="profile_list"> Company:${user.company}</li>
                    <li class="profile_list"> Website/Blog:${user.blog}</li>
                    <li class="profile_list"> Location:${user.location}</li>
                    <li class="profile_list"> Member Since:${user.created_at}</li>
                </ul>
            </div>
            </div>
        </div>
        <div id="repos" class="REPOS">REPOS</div>
       `
    }


// createRepos

showRepos(repos){
    let output = "";

    repos.forEach(function(repo){
        output+= `
           <div class="repos-wrapper">
           <div class="repos__link-wrapper"><a class="repos__link" href="${repo.html_url}" target="_blank">${repo.name}</a></div>
                <span class="repos__stars">Stars:${repo.stargazers_count}</span>
                <span class="repos__wathcer">Watchers:${repo.watchers_count}</span>
                <span class="repos__forks">Forks:${repo.forms_count}</span>
           </div>
        `
    })

    document.getElementById('repos').innerHTML = output;
}

    // show alert msg
    showAlert(message,className){
        // clear any remaning alerts
        this.clearAlert();
        //create div 
        const div = document.createElement('div');
        // add classes
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.searcher');

        // get search box

        const search = document.querySelector('.search');

        // insert alert

        container.insertBefore(div,search);

        // timeout after 3 sec 

        setTimeout(()=>{
            this.clearAlert();
        },3000)
    }

// clear alert msg

clearAlert(){
    const currentAlert = document.querySelector('.alert-msg')
    if(currentAlert){
        currentAlert.remove();
    }
}


// clear profle 
    clearProfile(){
        this.profile.innerHTML = "Waitting for your input...";
    }
}