const baseURL = 'https://first-round.rooter.io';
// const baseURL = 'http://52.77.37.113:5104';
const prodBaseURL = 'https://final.api.rooter.io';
const fixtureURL = 'http://52.77.37.113:5102';
const prodFixtureURL = 'https://stats.rooter.io';
const stageBaseURL = 'https://semi-final.api.rooter.io';
const PAGE_SIZE = 5;
const API = {
	prod: {
		baseURL: `${prodBaseURL}/api/`,
		IP_PORT: `${prodBaseURL}/`,
		fixtureURL: `${prodFixtureURL}/api/`,
		PAGE_SIZE
	},
	dev: {
		baseURL: `${baseURL}/api/`,
		IP_PORT: `${baseURL}/`,
		fixtureURL: `${fixtureURL}/api/`,
		PAGE_SIZE
	},
	stage: {
		baseURL: `${stageBaseURL}/api/`,
		IP_PORT: `${stageBaseURL}/`,
		fixtureURL: `${prodFixtureURL}/api/`,
		PAGE_SIZE
	}
};
export default API[process.env.API_TYPE || 'dev'];
