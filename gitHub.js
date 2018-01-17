


class GitHub {
    constructor() {
        this.client_id = "684d91aa441912dfa082";
        this.client_secret = "00b3c75ec8463ad49a305539c000d4b5364af006";
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }

}