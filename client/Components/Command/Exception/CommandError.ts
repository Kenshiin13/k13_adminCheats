export default class CommandError extends Error {
	statusCode: number;
	constructor(statusCode: number) {
		//@TODO: Implement translation
		super("");
		this.name = this.constructor.name;
		this.statusCode = statusCode;

		Error.captureStackTrace(this, this.constructor);
	}
}
