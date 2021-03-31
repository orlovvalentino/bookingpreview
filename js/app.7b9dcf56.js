(function (t) {
	function e(e) {
		for (var r, a, s = e[0], c = e[1], d = e[2], l = 0, u = []; l < s.length; l++) a = s[l], Object.prototype.hasOwnProperty.call(i, a) && i[a] && u.push(i[a][0]), i[a] = 0;
		for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
		f && f(e);
		while (u.length) u.shift()();
		return o.push.apply(o, d || []), n()
	}

	function n() {
		for (var t, e = 0; e < o.length; e++) {
			for (var n = o[e], r = !0, a = 1; a < n.length; a++) {
				var s = n[a];
				0 !== i[s] && (r = !1)
			}
			r && (o.splice(e--, 1), t = c(c.s = n[0]))
		}
		return t
	}

	var r = {}, a = {app: 0}, i = {app: 0}, o = [];

	function s(t) {
		return c.p + "js/" + ({}[t] || t) + "." + {
			"chunk-286b804f": "5543a7e7",
			"chunk-4b4d745d": "f013c4ab",
			"chunk-794bfe04": "522a39b4",
			"chunk-ab231b84": "8faae2e6",
			"chunk-2c58d62f": "7fb11b15",
			"chunk-2d0df439": "a8f63b73",
			"chunk-1f30a644": "566af911",
			"chunk-2d3c5740": "ceb359f0",
			"chunk-530fa62b": "bd5e5c93",
			"chunk-c34324d6": "04bee661"
		}[t] + ".js"
	}

	function c(e) {
		if (r[e]) return r[e].exports;
		var n = r[e] = {i: e, l: !1, exports: {}};
		return t[e].call(n.exports, n, n.exports, c), n.l = !0, n.exports
	}

	c.e = function (t) {
		var e = [], n = {
			"chunk-286b804f": 1,
			"chunk-4b4d745d": 1,
			"chunk-794bfe04": 1,
			"chunk-ab231b84": 1,
			"chunk-2c58d62f": 1,
			"chunk-1f30a644": 1,
			"chunk-2d3c5740": 1,
			"chunk-530fa62b": 1,
			"chunk-c34324d6": 1
		};
		a[t] ? e.push(a[t]) : 0 !== a[t] && n[t] && e.push(a[t] = new Promise((function (e, n) {
			for (var r = "css/" + ({}[t] || t) + "." + {
				"chunk-286b804f": "d830a737",
				"chunk-4b4d745d": "c3161846",
				"chunk-794bfe04": "5c4fced1",
				"chunk-ab231b84": "5a50eb3f",
				"chunk-2c58d62f": "a539ce78",
				"chunk-2d0df439": "31d6cfe0",
				"chunk-1f30a644": "96f88402",
				"chunk-2d3c5740": "dd128622",
				"chunk-530fa62b": "e21354e6",
				"chunk-c34324d6": "3e5f398e"
			}[t] + ".css", i = c.p + r, o = document.getElementsByTagName("link"), s = 0; s < o.length; s++) {
				var d = o[s], l = d.getAttribute("data-href") || d.getAttribute("href");
				if ("stylesheet" === d.rel && (l === r || l === i)) return e()
			}
			var u = document.getElementsByTagName("style");
			for (s = 0; s < u.length; s++) {
				d = u[s], l = d.getAttribute("data-href");
				if (l === r || l === i) return e()
			}
			var f = document.createElement("link");
			f.rel = "stylesheet", f.type = "text/css", f.onload = e, f.onerror = function (e) {
				var r = e && e.target && e.target.src || i, o = new Error("Loading CSS chunk " + t + " failed.\n(" + r + ")");
				o.code = "CSS_CHUNK_LOAD_FAILED", o.request = r, delete a[t], f.parentNode.removeChild(f), n(o)
			}, f.href = i;
			var h = document.getElementsByTagName("head")[0];
			h.appendChild(f)
		})).then((function () {
			a[t] = 0
		})));
		var r = i[t];
		if (0 !== r) if (r) e.push(r[2]); else {
			var o = new Promise((function (e, n) {
				r = i[t] = [e, n]
			}));
			e.push(r[2] = o);
			var d, l = document.createElement("script");
			l.charset = "utf-8", l.timeout = 120, c.nc && l.setAttribute("nonce", c.nc), l.src = s(t);
			var u = new Error;
			d = function (e) {
				l.onerror = l.onload = null, clearTimeout(f);
				var n = i[t];
				if (0 !== n) {
					if (n) {
						var r = e && ("load" === e.type ? "missing" : e.type), a = e && e.target && e.target.src;
						u.message = "Loading chunk " + t + " failed.\n(" + r + ": " + a + ")", u.name = "ChunkLoadError", u.type = r, u.request = a, n[1](u)
					}
					i[t] = void 0
				}
			};
			var f = setTimeout((function () {
				d({type: "timeout", target: l})
			}), 12e4);
			l.onerror = l.onload = d, document.head.appendChild(l)
		}
		return Promise.all(e)
	}, c.m = t, c.c = r, c.d = function (t, e, n) {
		c.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
	}, c.r = function (t) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
	}, c.t = function (t, e) {
		if (1 & e && (t = c(t)), 8 & e) return t;
		if (4 & e && "object" === typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (c.r(n), Object.defineProperty(n, "default", {
			enumerable: !0,
			value: t
		}), 2 & e && "string" != typeof t) for (var r in t) c.d(n, r, function (e) {
			return t[e]
		}.bind(null, r));
		return n
	}, c.n = function (t) {
		var e = t && t.__esModule ? function () {
			return t["default"]
		} : function () {
			return t
		};
		return c.d(e, "a", e), e
	}, c.o = function (t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, c.p = "", c.oe = function (t) {
		throw console.error(t), t
	};
	var d = window["webpackJsonp"] = window["webpackJsonp"] || [], l = d.push.bind(d);
	d.push = e, d = d.slice();
	for (var u = 0; u < d.length; u++) e(d[u]);
	var f = l;
	o.push([0, "chunk-vendors"]), n()
})({
	0: function (t, e, n) {
		t.exports = n("56d7")
	}, "04ce": function (t, e, n) {
		"use strict";
		n("3365")
	}, "0ceb": function (t, e, n) {
		"use strict";
		n("12d4")
	}, "12d4": function (t, e, n) {
	}, 3365: function (t, e, n) {
	}, "3dfd": function (t, e, n) {
		"use strict";
		var r = function () {
				var t = this, e = t.$createElement, n = t._self._c || e;
				return n("div", {
					staticClass: "main-content-wrapper",
					attrs: {id: "app"}
				}, [n("header-nissan"), n("div", {staticClass: "main-content"}, [n("form-wizard", {
					ref: "tabsWrapper",
					attrs: {color: "false", "next-button-text": ""},
					on: {"on-change": t.onChangeTabs}
				}, [n("div", {
					staticClass: "car-step",
					attrs: {slot: "title"},
					slot: "title"
				}, [t.activeTab ? t._e() : n("car-static-description")], 1), n("tab-content", {
					attrs: {
						title: "автомобиль",
						icon: "false",
						scope: "props"
					}
				}, [n("cars-grid", {
					on: {
						"on-next": function (e) {
							return t.$refs.tabsWrapper.nextTab()
						}, "on-modification": t.onModification
					}
				})], 1), n("tab-content", {
					attrs: {
						title: "дилер",
						icon: "false"
					}
				}, [1 === t.activeTab ? n("dealer-step", {
					attrs: {"current-modification": t.currentModification},
					on: {"on-next": t.onNext}
				}) : t._e()], 1), n("tab-content", {
					attrs: {
						title: "ТО И СЕРВИСНЫЕ работы",
						icon: "false"
					}
				}, [2 === t.activeTab ? n("inspection-step", {
					attrs: {
						"current-modification": t.currentModification,
						"current-dealer": t.currentDealer
					}, on: {
						"on-next": function (e) {
							return t.$refs.tabsWrapper.nextTab()
						}
					}
				}) : t._e()], 1), n("tab-content", {
					attrs: {
						title: "отправьте заявку",
						icon: "false"
					}
				}, [t._v(" cancel ")])], 1)], 1), n("footer-nissan")], 1)
			}, a = [], i = (n("d3b7"), n("3ca3"), n("ddb0"), function () {
				var t = this, e = t.$createElement;
				t._self._c;
				return t._m(0)
			}), o = [function () {
				var t = this, e = t.$createElement, n = t._self._c || e;
				return n("header", [n("div", {staticClass: "helios", attrs: {id: "nissan_global_header"}})])
			}], s = {
				name: "HeaderNissan", mounted: function () {
					var t = document.createElement("script");
					t.setAttribute("src", "//www-europe.nissan-cdn.net/content/dam/Nissan/header-footer/ru-RU/js/vendor/modernizr.min.js"), document.head.appendChild(t);
					var e = document.createElement("script");
					e.setAttribute("src", "//www-europe.nissan-cdn.net/content/dam/Nissan/header-footer/ru-RU/js/PACE-header-footer.min.js"), document.head.appendChild(e)
				}
			}, c = s, d = (n("0ceb"), n("2877")), l = Object(d["a"])(c, i, o, !1, null, null, null), u = l.exports,
			f = function () {
				var t = this, e = t.$createElement;
				t._self._c;
				return t._m(0)
			}, h = [function () {
				var t = this, e = t.$createElement, n = t._self._c || e;
				return n("footer", [n("div", {staticClass: "helios", attrs: {id: "nissan_global_footer"}})])
			}], p = {
				name: "FooterNissan", mounted: function () {
					var t = document.createElement("script");
					t.setAttribute("src", "//www-europe.nissan-cdn.net/content/dam/Nissan/header-footer/ru-RU/js/vendor/modernizr.min.js"), document.head.appendChild(t);
					var e = document.createElement("script");
					e.setAttribute("src", "//www-europe.nissan-cdn.net/content/dam/Nissan/header-footer/ru-RU/js/PACE-header-footer.min.js"), document.head.appendChild(e)
				}
			}, m = p, k = Object(d["a"])(m, f, h, !1, null, "279c1f85", null), b = k.exports, v = function () {
				var t = this, e = t.$createElement, n = t._self._c || e;
				return n("div", {staticClass: "car-step"}, [t._m(0), n("ul", {staticClass: "advantages"}, [n("li", [n("div", {staticClass: "advantages-icon"}, [n("svg", {
					attrs: {
						width: "143",
						height: "84",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}
				}, [n("path", {
					attrs: {
						d: "M113.978 82.447c5.123 0 9.276-4.333 9.276-9.679 0-5.345-4.153-9.679-9.276-9.679-5.124 0-9.277 4.334-9.277 9.68 0 5.345 4.153 9.678 9.277 9.678zM113.978 18.766c-2.34-1.594-6.35.16-8.954 3.933-2.593 3.773-2.8 8.12-.461 9.725",
						stroke: "#C3002F",
						"stroke-width": "2.307",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M99.689 74.684l-58.931.367s.265-17.271-12.78-17.363c-13.044-.092-15.672 10.872-14.012 17.546.173 2.099-11.823-1.1-12.169-4.472.07-.264-2.362-14.072 5.6-19.461 0 0 6.776-4.599 28.959-5.39 0 0 22.298-14.071 26.389-14.186 4.206-1.766 54.206-4.817 66.282-.837 4.287.78-.668 1.938-1.198 2.052 0 0 10.221 9.863 11.155 12.306.53 2.075.23 10.298.173 10.653.057 1.824 2.396 6.09 2.396 7.856 0 0 .703 10.355-14.715 9.197-.173-3.222-.38-10.172-7.871-13.612-4.701-2.168-10.221-1.308-13.943 2.385-2.431 2.397-4.517 6.33-4.966 12.752",
						fill: "#fff"
					}
				}), n("path", {
					attrs: {
						d: "M99.689 74.684l-58.931.367s.265-17.271-12.78-17.363c-13.044-.092-15.672 10.872-14.012 17.546.173 2.099-11.823-1.1-12.169-4.472.07-.264-2.362-14.072 5.6-19.461 0 0 6.776-4.599 28.959-5.39 0 0 22.298-14.071 26.389-14.186 4.206-1.766 54.206-4.817 66.282-.837 4.287.78-.668 1.938-1.198 2.052 0 0 10.221 9.863 11.155 12.306.53 2.075.23 10.298.173 10.653.057 1.824 2.396 6.09 2.396 7.856 0 0 .703 10.355-14.715 9.197-.173-3.222-.38-10.172-7.871-13.612-4.701-2.168-10.221-1.308-13.943 2.385-2.431 2.397-4.517 6.33-4.966 12.752",
						stroke: "#C3002F",
						"stroke-width": "2.307",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M119.221 38.239s-8.492 6.399-11.731 6.766c-3.238.367-48.905 4.105-59.737 2.04M26.86 82.447c5.123 0 9.277-4.333 9.277-9.679 0-5.345-4.154-9.679-9.277-9.679-5.123 0-9.276 4.334-9.276 9.68 0 5.345 4.153 9.678 9.276 9.678zM14.842 52.218c.173.275-3.595 5.573-11.558 5.757M130.859 41.037c0 .607-5.37 4.747-5.37 5.481s3.446 2.317 3.849 2.5c.403.184 7.767.126 9.518-1.1",
						stroke: "#C3002F",
						"stroke-width": "2.307",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M112.169 22.803l9.91-.264-.081-.08 12.354-11.032L125.847 2l-12.353 11.02-1.325 9.783z",
						fill: "#fff"
					}
				}), n("path", {
					attrs: {
						d: "M112.169 22.803l9.91-.264-.081-.08 12.354-11.032L125.847 2l-12.353 11.02-1.325 9.783z",
						stroke: "#C3002F",
						"stroke-width": "2.307",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M116.329 18.181c3.134 2.363 2.558 8.36-1.279 13.395-3.838 5.034-9.484 7.202-12.618 4.84",
						stroke: "#C3002F",
						"stroke-width": "2.307",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				})])]), n("p", {staticClass: "advantages-txt"}, [t._v("Узнайте о выгодных сервисных предложениях Nissan именно для вашего автомобиля")])]), n("li", [n("div", {staticClass: "advantages-icon"}, [n("svg", {
					attrs: {
						width: "118",
						height: "82",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}
				}, [n("path", {
					attrs: {
						d: "M43.477 43.764c0-10.688-9.265-19.358-20.696-19.358-11.431 0-20.696 8.67-20.696 19.358 0 3.245.853 6.296 2.362 8.98.023.056.046.102.08.16l.047.08c.265.447.542.883.841 1.307l7.79 12.168 8.735 13.647c.38.584 1.29.584 1.66 0l8.734-13.647 7.536-11.766c2.282-3.108 3.607-6.87 3.607-10.93z",
						stroke: "#C3002F",
						"stroke-width": "2.307",
						"stroke-miterlimit": "10",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M22.793 58.225c7.643 0 13.84-6.166 13.84-13.773 0-7.607-6.197-13.773-13.84-13.773-7.644 0-13.84 6.166-13.84 13.773 0 7.607 6.196 13.773 13.84 13.773zM116.823 18.844c0-6.835-5.923-12.374-13.217-12.374-7.294 0-13.217 5.54-13.217 12.374 0 2.076.541 4.025 1.51 5.734.01.034.022.069.045.103l.035.046c.161.287.346.562.541.837l4.967 7.776 5.577 8.715a.638.638 0 001.061 0l5.577-8.715 4.817-7.524c1.452-1.983 2.304-4.38 2.304-6.972z",
						stroke: "#C3002F",
						"stroke-width": "2.307",
						"stroke-miterlimit": "10",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M103.607 28.087c4.888 0 8.85-3.943 8.85-8.807 0-4.864-3.962-8.808-8.85-8.808s-8.85 3.944-8.85 8.808 3.962 8.807 8.85 8.807z",
						stroke: "#C3002F",
						"stroke-width": "2.307",
						"stroke-miterlimit": "10",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M62.502 8.867C62.502 4.521 58.734 1 54.09 1c-4.644 0-8.412 3.52-8.412 7.867a7.421 7.421 0 00.99 3.704l.024.034c.103.184.219.356.346.54l3.168 4.942 3.55 5.54c.15.24.518.24.68 0l3.549-5.54 3.065-4.782a7.552 7.552 0 001.452-4.438z",
						stroke: "#C3002F",
						"stroke-width": "1.73",
						"stroke-miterlimit": "10",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M54.09 14.245c2.833 0 5.129-2.284 5.129-5.103 0-2.818-2.296-5.103-5.128-5.103-2.832 0-5.128 2.285-5.128 5.103 0 2.819 2.296 5.104 5.128 5.104z",
						stroke: "#C3002F",
						"stroke-width": "1.846",
						"stroke-miterlimit": "10",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M50.31 26.47c-20.891 4.404 82.566 17.558 38.547 19.496 0 0-80.238 7.27 14.07 21.192 15.868 2.34-20.155 7.695-75.133 13.464",
						stroke: "#C3002F",
						"stroke-width": "2.307",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				})])]), n("p", {staticClass: "advantages-txt"}, [t._v("Выберите дилера, который вам подходит")])]), n("li", [n("div", {staticClass: "advantages-icon"}, [n("svg", {
					attrs: {
						width: "106",
						height: "75",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}
				}, [n("path", {
					attrs: {
						d: "M60.484 27.52s25.375.459 29.938-.654c1.326-.32 5.635-5.011 5.635-5.011s-.564 3.945.75 4.357c1.301.413 2.8-.366 2.8-.366s2.604 6.387-1.072 7.316c-2.512.63-8.355 2.523-11.789 3.658a10.082 10.082 0 00-3.987 2.5c-.933.952-2.34 2.076-4.137 2.603-2.984.872-17.803.792-17.803.792",
						stroke: "#C3002F",
						"stroke-width": "1.73",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M60.83 39.722s5.888.16 8.411-.54c3.238-.894 8.55-11.238 13.068-11.616M103.305 47.394s.208 19.312-1.659 21.261c-1.867 1.95-10.636 1.204-11.282.562-.645-.654-.553-4.794-.553-4.794",
						stroke: "#C3002F",
						"stroke-width": "1.73",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M60.484 50.72s19.521.08 20.673.217c4.714.585 9.576 5.459 12.665 5.78 5.277.562 8.573-.929 8.573-.929",
						stroke: "#C3002F",
						"stroke-width": "1.73",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M27.435 18.105S36.987 4.24 38.68 2.635c.07-.07.139-.127.208-.196 2.316-2.328 3.93-1.204 4.275-.906a.201.201 0 00.173.058s13.874-.333 17.93-.344c4.564-.023 18.276.344 18.276.344.07 0 .127-.023.173-.058.346-.298 1.96-1.422 4.276.906.069.07.138.138.207.195 1.452 1.377 8.735 11.835 10.74 14.725.138.207.472.103.472-.149.012-1.158.23-3.108 1.579-3.612 1.867-.711 6.718.722 7.191.871.023.012.057.023.08.035.208.16 1.072 1.112-.818 4.77-.011.012-.011.035-.023.046-.415.516-1.314.837-5.439.78-.219 0-.346.252-.207.424.84 1.02 3.019 3.727 4.816 6.434 2.282 3.429 1.775 16.273.139 23.6v.012c-1.118 7.087-1.256 11.216-2.132 11.892-.864.677-5.716 3.406-13.114.93-7.398-2.478-32.335-1.354-35.043-.953",
						stroke: "#C3002F",
						"stroke-width": "1.73",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M62.328 17.795l-30.918-.23c-.034-.986 8.7-13.646 10.118-13.715.76-.046 19.428-.31 19.613-.31 2.362.07 19.451.264 20.223.31 1.418.08 9.899 12.053 9.899 13.05-.023 1.56-28.935.895-28.935.895zM62.408 27.52s-25.374.458-29.937-.654c-1.037-.252-3.918-3.2-5.117-4.45a.262.262 0 00-.45.195c.093 1.17.116 3.303-.817 3.601-.98.31-2.075-.046-2.547-.252a.26.26 0 00-.346.15c-.438 1.203-2.063 6.238 1.176 7.052 2.535.642 8.423 2.546 11.846 3.681a9.777 9.777 0 013.895 2.454c.933.964 2.35 2.099 4.16 2.626 2.984.872 17.803.792 17.803.792",
						stroke: "#C3002F",
						"stroke-width": "1.73",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M62.063 39.722s-5.889.16-8.412-.54c-3.239-.894-8.55-11.238-13.068-11.616M62.409 50.72s-19.52.08-20.673.217c-4.713.585-9.576 5.459-12.664 5.78-5.278.562-8.574-.929-8.574-.929",
						stroke: "#C3002F",
						"stroke-width": "1.73",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M60.15 43.816c0 15.79-12.872 28.6-28.74 28.6-15.867 0-28.74-12.81-28.74-28.6 0-15.792 12.873-28.601 28.74-28.601 15.868 0 28.74 12.798 28.74 28.6z",
						fill: "#fff"
					}
				}), n("path", {
					attrs: {
						d: "M31.41 72.416c15.873 0 28.74-12.805 28.74-28.6 0-15.796-12.867-28.601-28.74-28.601-15.872 0-28.74 12.805-28.74 28.6 0 15.796 12.868 28.601 28.74 28.601z",
						stroke: "#C3002F",
						"stroke-width": "3.46",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M19.092 43.15c3.503 3.452 9.76 13.017 10.002 12.982.3-.046 3.987-14.713 11.132-22.488",
						fill: "#fff"
					}
				}), n("path", {
					attrs: {
						d: "M19.092 43.15c3.503 3.452 9.76 13.017 10.002 12.982.3-.046 3.987-14.713 11.132-22.488",
						stroke: "#C3002F",
						"stroke-width": "3.46",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				})])]), n("p", {staticClass: "advantages-txt"}, [t._v("Выберите актуальные для вас сервисные предложения")])]), n("li", [n("div", {staticClass: "advantages-icon"}, [n("svg", {
					attrs: {
						width: "88",
						height: "90",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}
				}, [n("path", {
					attrs: {
						d: "M41 2v11.284h13.321",
						fill: "#fff"
					}
				}), n("path", {
					attrs: {
						d: "M41 2v11.284h13.321M17.18 26.209h29.512M17.18 35.2h29.512M17.18 44.179h29.512M17.18 53.766h29.512M17.18 62.746h29.512M17.18 71.736h29.512M11.35 26.209h.08M11.35 35.2h.08M11.35 44.179h.08M11.35 53.766h.08M11.35 62.746h.08M11.35 71.736h.08",
						stroke: "#C3002F",
						"stroke-width": "2.307",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M55 81.576H2.144V2H41l6.66 5.642 6.66 5.642.68 68.292z",
						stroke: "#C3002F",
						"stroke-width": "2.307",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M86.275 66.083c0 12.247-9.98 22.179-22.287 22.179-12.307 0-22.286-9.932-22.286-22.18 0-12.247 9.98-22.178 22.287-22.178 12.307 0 22.286 9.931 22.286 22.179z",
						fill: "#fff"
					}
				}), n("path", {
					attrs: {
						d: "M63.977 88.262c12.308 0 22.286-9.93 22.286-22.179 0-12.25-9.978-22.179-22.286-22.179-12.309 0-22.287 9.93-22.287 22.179 0 12.249 9.978 22.179 22.287 22.179z",
						stroke: "#C3002F",
						"stroke-width": "3.46",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				}), n("path", {
					attrs: {
						d: "M57.12 66.186c2.155 2.133 6.015 8.027 6.165 8.004.184-.023 2.455-9.07 6.857-13.864",
						fill: "#fff"
					}
				}), n("path", {
					attrs: {
						d: "M57.12 66.186c2.155 2.133 6.015 8.027 6.165 8.004.184-.023 2.455-9.07 6.857-13.864",
						stroke: "#C3002F",
						"stroke-width": "3.46",
						"stroke-miterlimit": "10",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				})])]), n("p", {staticClass: "advantages-txt"}, [t._v("Отправьте дилеру данные о вашем автомобиле в форме удобной анкеты")])])]), n("p", {staticClass: "car-step-description"}, [t._v("Вы также можете сохранить информацию о доступных для вашего автомобиля сервисных кампаниях на компьютере, распечатать или отправить на электронную почту.")])])
			}, w = [function () {
				var t = this, e = t.$createElement, n = t._self._c || e;
				return n("h2", {staticClass: "title"}, [t._v("Мы ценим Ваше время и комфорт!"), n("br"), t._v("Запишитесь на сервис Nissan онлайн")])
			}], g = {name: "Car"}, C = g, M = (n("7165"), Object(d["a"])(C, v, w, !1, null, "2f17949a", null)), _ = M.exports,
			j = function () {
				var t = this, e = t.$createElement, n = t._self._c || e;
				return n("div", [n("div", {ref: "carsGrid", staticClass: "cars-grid"}, [t._l(t.cars, (function (e, r) {
					return n("div", {
						key: e.model_name,
						staticClass: "car",
						style: "order:" + 10 * ++r
					}, [n("div", {staticClass: "img-wrap"}, [n("img", {
						staticClass: "img",
						attrs: {
							alt: e.model_name,
							src: "https://customer360.ru/CarMaintenance/CarPicture/" + e.models[0].id,
							loading: "lazy"
						}
					})]), n("h3", {staticClass: "car-name"}, [t._v(t._s(e.model_name))]), n("ul", {staticClass: "models"}, t._l(e.models, (function (e) {
						return n("li", {staticClass: "model"}, [n("button", {
							staticClass: "model-link",
							attrs: {type: "button"},
							on: {
								click: function (n) {
									return t.choiceModel(e.id, r, n)
								}
							}
						}, [t._v(t._s(e.model_code) + " " + t._s(e.year_start) + "-" + t._s(e.year_end))])])
					})), 0)])
				})), t.modificationId ? n("car-options", {
					attrs: {
						modificationId: t.modificationId,
						"current-car-index": t.currentCarIndexInGrid
					}, on: {
						"on-next": function (e) {
							return t.$emit("on-next")
						}
					}
				}) : t._e()], 2)])
			}, x = [], y = (n("159b"), n("4de4"), {
				name: "CarsGrid", components: {
					CarOptions: function () {
						return n.e("chunk-794bfe04").then(n.bind(null, "a49f"))
					}
				}, data: function () {
					return {cars: [], modificationId: "", currentCarIndexInGrid: null}
				}, mounted: function () {
					var t = this;
					this.$axios.get("https://orlovvalentino.github.io/bookingpreview/json/cars.json", {baseURL: window.location.origin}).then((function (e) {
						t.cars = e.data
					})).catch((function (t) {
						console.log(t)
					}))
				}, methods: {
					choiceModel: function (t, e, n) {
						this.modificationId = +t, this.currentCarIndexInGrid = e, this.$refs.carsGrid.querySelectorAll(".car").forEach((function (t) {
							t.classList.remove("active")
						})), n.target.closest(".car").classList.add("active"), this.$emit("on-modification", this.getModelData(t))
					}, getModelData: function (t) {
						var e;
						return this.cars.forEach((function (n) {
							var r = n.models.filter((function (e) {
								return e.id == t
							}));
							r.length && (e = r[0], e.model_name = n.model_name)
						})), e
					}
				}
			}), F = y, E = (n("af4e"), Object(d["a"])(F, j, x, !1, null, "7a2ca402", null)), T = E.exports, z = function () {
				var t = this, e = t.$createElement, n = t._self._c || e;
				return n("div", [n("dealer-top", {attrs: {"current-modification": t.currentModification}}), n("dealer-middle", {
					attrs: {"current-dealer": t.currentDealer},
					on: {"on-next": t.onNext}
				})], 1)
			}, N = [], O = {
				name: "index", components: {
					DealerTop: function () {
						return n.e("chunk-4b4d745d").then(n.bind(null, "e238"))
					}, DealerMiddle: function () {
						return n.e("chunk-286b804f").then(n.bind(null, "50a9"))
					}
				}, props: {currentModification: {type: [Boolean, Object]}}, data: function () {
					return {currentDealer: !1}
				}, methods: {
					onNext: function (t) {
						this.currentDealer = t, this.$emit("on-next", this.currentDealer)
					}
				}
			}, $ = O, D = Object(d["a"])($, z, N, !1, null, "d8d31a90", null), S = D.exports, I = n("2ee4"), A = {
				name: "App",
				data: function () {
					return {activeTab: null, currentModification: null, currentDealer: null}
				},
				components: {
					HeaderNissan: u,
					FooterNissan: b,
					CarsGrid: T,
					CarStaticDescription: _,
					FormWizard: I["FormWizard"],
					TabContent: I["TabContent"],
					DealerStep: S,
					InspectionStep: function () {
						return n.e("chunk-ab231b84").then(n.bind(null, "2b38"))
					}
				},
				methods: {
					onChangeTabs: function (t, e) {
						this.activeTab = e
					}, onModification: function (t) {
						this.currentModification = t
					}, onNext: function (t) {
						this.currentDealer = t, this.$refs.tabsWrapper.nextTab()
					}
				},
				computed: {
					slotProps: function () {
						return {nextTab: this.nextTab}
					}
				}
			}, P = A, L = (n("04ce"), Object(d["a"])(P, r, a, !1, null, "13b80fd2", null));
		e["a"] = L.exports
	}, 4360: function (t, e, n) {
		"use strict";
		var r = n("2b0e"), a = n("2f62");
		r["a"].use(a["a"]), e["a"] = new a["a"].Store({state: {}, mutations: {}, actions: {}, modules: {}})
	}, "569e": function (t, e, n) {
	}, "56d7": function (t, e, n) {
		"use strict";
		n.r(e), function (t) {
			n("e260"), n("e6cf"), n("cca6"), n("a79d");
			var e = n("2b0e"), r = n("bc3a"), a = n.n(r), i = n("e37d"), o = n("1dce"), s = n.n(o), c = n("3dfd"),
				d = n("4360");
			n("569e");
			t.jQuery = n("1157");
			var l = t.jQuery;
			window.$ = l, window.HELIOS_HF = {
				pageTitle: "Nissan",
				isUserLoggedIn: !1,
				userName: "",
				avatarUrl: "...",
				displayLiveChat: !0,
				displayDataTag: !0
			}, e["a"].directive("tooltip", i["a"]), e["a"].use(s.a), e["a"].config.productionTip = !1, e["a"].prototype.$axios = a.a, new e["a"]({
				store: d["a"],
				render: function (t) {
					return t(c["a"])
				}
			}).$mount("#app")
		}.call(this, n("c8ba"))
	}, "69be": function (t, e, n) {
	}, 7165: function (t, e, n) {
		"use strict";
		n("69be")
	}, af4e: function (t, e, n) {
		"use strict";
		n("f267")
	}, f267: function (t, e, n) {
	}
});
//# sourceMappingURL=app.7b9dcf56.js.map
