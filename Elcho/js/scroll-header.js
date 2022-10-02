$(window).scroll(function () {
	let sc = $(window).scrollTop();
	if (sc > 100) {
		$("#header__scroll").addClass("small");
	} else {
		$("#header__scroll").removeClass("small");
	}
});
function p(e) {
		let t = !!e && "length" in e && e.length,
			n = w(e);
		return !m(e) && !x(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
	}
!(function (e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports
		? (module.exports = e.document
				? t(e, !0)
				: function (e) {
						if (!e.document) throw new Error("jQuery requires a window with a document");
						return t(e);
				  })
		: t(e);
function p(e) {
		let t = !!e && "length" in e && e.length,
			n = w(e);
		return !m(e) && !x(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
	}
