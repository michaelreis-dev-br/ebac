$(document).ready(function () {
  const endpoint = 'https://api.github.com/users/michaelreis-dev-br';
  const profileAvatar = $('#profile-avatar');
  const profileName = $('#profile-name');
  const profileTitle = $('#profile-title');
  const profileUsername = $('#profile-username');
  const numberOfRepositories = $('#number-of-repositories');
  const numberOfFollowers = $('#number-of-followers');
  const numberOfFollowing = $('#number-of-following');
  const profileLink = $('#profile-link');

  fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((json) => {
      profileAvatar.attr('src', json.avatar_url);
      profileName.text(json.name);
      profileTitle.text(json.bio);
      profileUsername.text(`@${json.login}`);
      numberOfRepositories.text(json.public_repos);
      numberOfFollowers.text(json.followers);
      numberOfFollowing.text(json.following);
      profileLink.attr('href', json.html_url);
    })
    .catch((error) => {
      alert('Erro na requisição, tente novamente mais tarde.', error);
    });
});
