function logCTevent(eventName, eventProps = {}) {
    eventProps["timestamp"] = Date.now();
    eventProps["OS"] = 'Static_web';
    clevertap.event.push(eventName, eventProps);
}

$(function() {
    // Logs to CT when user lands on static website
    logCTevent('Static_landing');
    // Logs to CT when user clicks on login
    $('.login-wap, #mobile_login').click(function() {
		logCTevent('Static_login');
	});
    // Logs to CT on click of social icons in footer
    $('a[href="https://www.facebook.com/hellorooter/"]').click(function() {
		logCTevent('Social', { Platform: 'Facebook' });
	});
    $('a[href="https://twitter.com/HelloRooter"]').click(function() {
		logCTevent('Social', { Platform: 'Twitter' });
	});
    $('a[href="https://www.linkedin.com/company-beta/17969705/"]').click(function() {
		logCTevent('Social', { Platform: 'LinkedIn' });
	});
    $('a[href="https://www.youtube.com/watch?v=42aaDrmY4Zc"]').click(function() {
		logCTevent('Social', { Platform: 'Youtube' });
	});
    // Logs to CT for various download app buttons on the website
    $('.get-app').click(function() {
		logCTevent('Download_app', { Navigation: 'Static_home_page_header' });
	});
    $('.feature-get-app').click(function() {
		logCTevent('Download_app', { Navigation: 'Static_home_page_CSV' });
	});
    $('.centralDLCTA').click(function() {
		logCTevent('Download_app', { Navigation: 'Static_home_page_video' });
	});
    $('.footerDLCTA').click(function() {
		logCTevent('Download_app', { Navigation: 'Static_home_page_footer' });
	});
})
