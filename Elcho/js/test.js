$(window).scroll(function () {
	let sc = $(window).scrollTop();
	if (sc > 100) {
		$("#header__scroll").addClass("small");
	} else {
		$("#header__scroll").removeClass("small");
	}
});
async function showAvatar() {
        let response = await fetch("https://learn.javascript.ru/article/promise-chaining/user.json" )
        let user = await response.json();
        let gethubResponse = await fetch(`https://api.github.com/users/${user.name}`)
        let githubUser = await gethubResponse.json();
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "avatar";
        document.body.append(img);
        await new Promise((resolve,reject) => {
          setTimeout(resolve,3000)
        })
        img.remove()
        return githubUser
      }
      showAvatar()


async function showAvatar() {
        let response = await fetch("https://learn.javascript.ru/article/promise-chaining/user.json" )
        let user = await response.json();
        let gethubResponse = await fetch(`https://api.github.com/users/${user.name}`)
        let githubUser = await gethubResponse.json();
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "avatar";
        document.body.append(img);
        await new Promise((resolve,reject) => {
          setTimeout(resolve,3000)
        })
        img.remove()
        return githubUser
      }
      showAvatar()
