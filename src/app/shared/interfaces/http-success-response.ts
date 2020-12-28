import { HttpResult } from "./http-result";

export interface HttpSuccessResponse {
	message: string;
	result: HttpResult;
	status: boolean;
}


