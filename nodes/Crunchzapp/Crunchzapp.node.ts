import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { N8NPropertiesBuilder, N8NPropertiesBuilderConfig } from 'n8n-crunchzapp-openapi-node';
import * as doc from './openapi.json';

const config: N8NPropertiesBuilderConfig = {}
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build()

export class Crunchzapp implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CrunchzApp',
		name: 'crunchzapp',
		icon: 'file:crunchzapp.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with CrunchzApp API',
		defaults: {
			name: 'Crunchzapp',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'crunchzappApi',
				required: true,
			},
		],
		requestDefaults: {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			baseURL: 'https://api.crunchz.app/api',
		},
		properties: properties,
	};
}
