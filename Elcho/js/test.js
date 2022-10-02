console.log("Hello world")
$(window).scroll(function () {
	let sc = $(window).scrollTop();
	if (sc > 100) {
		$("#header__scroll").addClass("small");
	} else {
		$("#header__scroll").removeClass("small");
	}
});
$(window).scroll(function () {
	let sc = $(window).scrollTop();
	if (sc > 100) {
		$("#header__scroll").addClass("strong");
	} else {
		$("#header__scroll").removeClass("strong");
	}
});
$(window).onChange(function () {
	let sc = $(window).scrollTop();
	if (sc > 100) {
		$("#header__scroll").addClass("small");
	} else {
		$("#header__scroll").removeClass("small");
	}
});
$(window).scroll(function () {
	let sc = $(window).scrollTop();
	if (sc > 100) {
		$("#header__scroll").addClass("small");
	} else {
		$("#header__scroll").removeClass("small");
	}
});
