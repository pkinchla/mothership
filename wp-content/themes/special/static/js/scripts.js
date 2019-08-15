// import HandleLinks from './HandleLinks'
import MobileMenu from './MobileMenu'
import LazyImages from './LazyImages'

(function (document) {

  // const handleLinks = new HandleLinks()
  // handleLinks.init()

  const mobileMenu = new MobileMenu()
  mobileMenu.init()

  const lazyimages = new LazyImages()
  lazyimages.init()

	let dev_env = window.location.hostname === 'localhost'
	// registration for worker for server side caching
	if ('serviceWorker' in navigator && !dev_env) {
		navigator.serviceWorker.register('/sw.js').then(function() {
			return navigator.serviceWorker.ready;
		})
	}

	(function() {
		var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
				is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
				is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

		if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
			window.addEventListener( 'hashchange', function() {
				var id = location.hash.substring( 1 ),
					element;

				if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
					return;
				}

				element = document.getElementById( id );

				if ( element ) {
					if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
						element.tabIndex = -1;
					}
					element.focus();
				}
			}, false);
		}
  })();

}(document));
