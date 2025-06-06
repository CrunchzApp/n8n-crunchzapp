import {
	IAuthenticateGeneric, ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class CrunchzappApi implements ICredentialType {
	name = 'crunchzappApi';
	displayName = 'CrunchzApp API';
	documentationUrl = 'https://www.chatwoot.com/docs/contributing-guide/chatwoot-apis';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'apiToken',
			type: 'string',
			placeholder: "The channel or global access token",
			default: '',
			required: true,
			typeOptions: {
				password: true
			},
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'Authorization': '={{"Bearer " + $credentials.apiToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.crunchz.app/api',
			url: '/channel/health',
			method: 'GET',
			headers: {
				'Authorization': '={{"Bearer " + $credentials.apiToken}}',
			}
		},
	};
}
