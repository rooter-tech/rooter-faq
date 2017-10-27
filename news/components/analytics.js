import ReactGA from 'react-ga';

export function logPageView() {
	ReactGA.set({ page: window.location.pathname + window.location.search });
	ReactGA.pageview(window.location.pathname + window.location.search);
}

export function logEventGA(eventObj) {
	ReactGA.event(eventObj);
}
