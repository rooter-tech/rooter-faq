export const uid = () => Math.random().toString(34).slice(2);

export function es6BindAll(context, methodNames) {
	const boundContext = context;
	methodNames.forEach((methodName) => {
		boundContext[methodName] = context[methodName].bind(context);
	});
}
