(function () {

	'use strict';

	var siteMenuClone = function () {
		var jsCloneNavs = document.querySelectorAll('.js-clone-nav');
		var siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');

		jsCloneNavs.forEach(nav => {
			var navCloned = nav.cloneNode(true);
			navCloned.setAttribute('class', 'site-nav-wrap');
			siteMobileMenuBody.appendChild(navCloned);
		});

		setTimeout(function () {
			var hasChildrens = document.querySelector('.site-mobile-menu').querySelectorAll('.has-children');

			var counter = 0;
			hasChildrens.forEach(hasChild => {
				var refEl = hasChild.querySelector('a');

				var newElSpan = document.createElement('span');
				newElSpan.setAttribute('class', 'arrow-collapse collapsed');

				// prepend equivalent to jQuery
				hasChild.insertBefore(newElSpan, refEl.nextSibling);

				var arrowCollapse = hasChild.querySelector('.arrow-collapse');
				if (arrowCollapse) {
					arrowCollapse.setAttribute('data-toggle', 'collapse');
					arrowCollapse.setAttribute('data-target', '#collapseItem' + counter);
				}

				var dropdown = hasChild.querySelector('.dropdown');
				if (dropdown) {
					dropdown.setAttribute('class', 'collapse');
					dropdown.setAttribute('id', 'collapseItem' + counter);
				}

				counter++;
			});

		}, 1000);

		// Click js-menu-toggle
		var menuToggle = document.querySelectorAll(".js-menu-toggle");
		var mTog;
		menuToggle.forEach(mtoggle => {
			mTog = mtoggle;
			mtoggle.addEventListener("click", (e) => {
				e.preventDefault(); // Prevent default action of anchor tag
				if (document.body.classList.contains('offcanvas-menu')) {
					document.body.classList.remove('offcanvas-menu');
					mtoggle.classList.remove('active');
					mTog.classList.remove('active');
				} else {
					document.body.classList.add('offcanvas-menu');
					mtoggle.classList.add('active');
					mTog.classList.add('active');
				}
			});
		});

	};
	siteMenuClone();

	// Initialize Bootstrap components that require JavaScript
	var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
	var collapseList = collapseElementList.map(function (collapseEl) {
		return new bootstrap.Collapse(collapseEl, { toggle: false });
	});

})();
