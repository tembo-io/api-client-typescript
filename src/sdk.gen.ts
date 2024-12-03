// This file is auto-generated by @hey-api/openapi-ts

import {
	createClient,
	createConfig,
	type OptionsLegacyParser,
} from "./client/index.ts";
import type {
	GetAllAppsError,
	GetAllAppsResponse,
	GetAppData,
	GetAppError,
	GetAppResponse,
	AskData,
	AskError,
	AskResponse,
	GetSchemaError,
	GetSchemaResponse,
	GetActionsData,
	GetActionsError,
	GetActionsResponse,
	GetAllDataplanesData,
	GetAllDataplanesError,
	GetAllDataplanesResponse,
	GetAllData,
	GetAllError,
	GetAllResponse,
	CreateInstanceData,
	CreateInstanceError,
	CreateInstanceResponse,
	GetInstanceData,
	GetInstanceError,
	GetInstanceResponse,
	InstanceEventData,
	InstanceEventError,
	InstanceEventResponse,
	DeleteInstanceData,
	DeleteInstanceError,
	DeleteInstanceResponse,
	PatchInstanceData,
	PatchInstanceError,
	PatchInstanceResponse,
	GetInstanceHistoryData,
	GetInstanceHistoryError,
	GetInstanceHistoryResponse,
	GetInstanceTomlData,
	GetInstanceTomlError,
	GetInstanceTomlResponse,
	GetPoliciesData,
	GetPoliciesError,
	GetPoliciesResponse,
	SetPolicyData,
	SetPolicyError,
	SetPolicyResponse,
	DeletePolicyData,
	DeletePolicyError,
	DeletePolicyResponse,
	RestoreInstanceData,
	RestoreInstanceError,
	RestoreInstanceResponse,
	GetRolesData,
	GetRolesError,
	GetRolesResponse,
	SearchData,
	SearchError,
	SearchResponse2,
	GetAllEntitiesError,
	GetAllEntitiesResponse,
	GetEntityData,
	GetEntityError,
	GetEntityResponse,
	InvalidateTokenError,
	InvalidateTokenResponse,
} from "./types.gen.js";

export const client = createClient(createConfig());

/**
 * Attributes for all apps
 *
 */
export const getAllApps = <ThrowOnError extends boolean = false>(
	options?: OptionsLegacyParser<unknown, ThrowOnError>,
) => {
	return (options?.client ?? client).get<
		GetAllAppsResponse,
		GetAllAppsError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/apps",
	});
};

/**
 * Get the attributes of a single App
 *
 */
export const getApp = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<GetAppData, ThrowOnError>,
) => {
	return (options?.client ?? client).get<
		GetAppResponse,
		GetAppError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/apps/{type}",
	});
};

/**
 * Ask a question to Tembo Docs
 *
 */
export const ask = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<AskData, ThrowOnError>,
) => {
	return (options?.client ?? client).get<AskResponse, AskError, ThrowOnError>({
		...options,
		url: "/api/v1/ask/",
	});
};

/**
 * Get the json-schema for an instance
 *
 */
export const getSchema = <ThrowOnError extends boolean = false>(
	options?: OptionsLegacyParser<unknown, ThrowOnError>,
) => {
	return (options?.client ?? client).get<
		GetSchemaResponse,
		GetSchemaError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/orgs/instances/schema",
	});
};

/**
 * Get all actions
 */
export const getActions = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<GetActionsData, ThrowOnError>,
) => {
	return (options?.client ?? client).get<
		GetActionsResponse,
		GetActionsError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/orgs/{org_id}/actions",
	});
};

export const getAllDataplanes = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<GetAllDataplanesData, ThrowOnError>,
) => {
	return (options?.client ?? client).get<
		GetAllDataplanesResponse,
		GetAllDataplanesError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/orgs/{org_id}/dataplanes",
	});
};

/**
 * Get all Tembo instances in an organization
 *
 */
export const getAll = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<GetAllData, ThrowOnError>,
) => {
	return (options?.client ?? client).get<
		GetAllResponse,
		GetAllError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/orgs/{org_id}/instances",
	});
};

/**
 * Create a new Tembo instance
 *
 */
export const createInstance = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<CreateInstanceData, ThrowOnError>,
) => {
	return (options?.client ?? client).post<
		CreateInstanceResponse,
		CreateInstanceError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/orgs/{org_id}/instances",
	});
};

/**
 * Get an existing Tembo instance
 *
 */
export const getInstance = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<GetInstanceData, ThrowOnError>,
) => {
	return (options?.client ?? client).get<
		GetInstanceResponse,
		GetInstanceError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/orgs/{org_id}/instances/{instance_id}",
	});
};

/**
 * Lifecycle events for a Tembo instance
 *
 * Currently only supports restart
 */
export const instanceEvent = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<InstanceEventData, ThrowOnError>,
) => {
	return (options?.client ?? client).post<
		InstanceEventResponse,
		InstanceEventError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/orgs/{org_id}/instances/{instance_id}",
	});
};

/**
 * Delete an existing Tembo instance
 *
 */
export const deleteInstance = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<DeleteInstanceData, ThrowOnError>,
) => {
	return (options?.client ?? client).delete<
		DeleteInstanceResponse,
		DeleteInstanceError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/orgs/{org_id}/instances/{instance_id}",
	});
};

/**
 * Update attributes on an existing Tembo instance
 *
 */
export const patchInstance = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<PatchInstanceData, ThrowOnError>,
) => {
	return (options?.client ?? client).patch<
		PatchInstanceResponse,
		PatchInstanceError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/orgs/{org_id}/instances/{instance_id}",
	});
};

/**
 * Get historical information for a given instance
 */
export const getInstanceHistory = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<GetInstanceHistoryData, ThrowOnError>,
) => {
	return (options?.client ?? client).get<
		GetInstanceHistoryResponse,
		GetInstanceHistoryError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/orgs/{org_id}/instances/{instance_id}/history/{field}",
	});
};

/**
 * Generate text for Tembo.toml
 *
 */
export const getInstanceToml = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<GetInstanceTomlData, ThrowOnError>,
) => {
	return (options?.client ?? client).get<
		GetInstanceTomlResponse,
		GetInstanceTomlError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/orgs/{org_id}/instances/{instance_id}/toml",
	});
};

/**
 * Get all policies
 */
export const getPolicies = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<GetPoliciesData, ThrowOnError>,
) => {
	return (options?.client ?? client).get<
		GetPoliciesResponse,
		GetPoliciesError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/orgs/{org_id}/policies",
	});
};

/**
 * Create or update a policy
 */
export const setPolicy = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<SetPolicyData, ThrowOnError>,
) => {
	return (options?.client ?? client).post<
		SetPolicyResponse,
		SetPolicyError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/orgs/{org_id}/policies",
	});
};

/**
 * Delete a policy
 */
export const deletePolicy = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<DeletePolicyData, ThrowOnError>,
) => {
	return (options?.client ?? client).delete<
		DeletePolicyResponse,
		DeletePolicyError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/orgs/{org_id}/policies",
	});
};

/**
 * Restore a Tembo instance
 *
 */
export const restoreInstance = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<RestoreInstanceData, ThrowOnError>,
) => {
	return (options?.client ?? client).post<
		RestoreInstanceResponse,
		RestoreInstanceError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/orgs/{org_id}/restore",
	});
};

/**
 * Get all roles
 */
export const getRoles = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<GetRolesData, ThrowOnError>,
) => {
	return (options?.client ?? client).get<
		GetRolesResponse,
		GetRolesError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/orgs/{org_id}/roles",
	});
};

/**
 * Search Tembo Docs Database
 *
 */
export const search = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<SearchData, ThrowOnError>,
) => {
	return (options?.client ?? client).get<
		SearchResponse2,
		SearchError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/search/",
	});
};

/**
 * Attributes for all stacks
 *
 */
export const getAllEntities = <ThrowOnError extends boolean = false>(
	options?: OptionsLegacyParser<unknown, ThrowOnError>,
) => {
	return (options?.client ?? client).get<
		GetAllEntitiesResponse,
		GetAllEntitiesError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/stacks",
	});
};

/**
 * Get the attributes of a single stack
 *
 */
export const getEntity = <ThrowOnError extends boolean = false>(
	options: OptionsLegacyParser<GetEntityData, ThrowOnError>,
) => {
	return (options?.client ?? client).get<
		GetEntityResponse,
		GetEntityError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/stacks/{type}",
	});
};

/**
 * Invalidate the token included in the Authorization header
 *
 * May take a up to a minute for subsequent requests to be rejected
 * after the invalidation has been accepted.
 */
export const invalidateToken = <ThrowOnError extends boolean = false>(
	options?: OptionsLegacyParser<unknown, ThrowOnError>,
) => {
	return (options?.client ?? client).delete<
		InvalidateTokenResponse,
		InvalidateTokenError,
		ThrowOnError
	>({
		...options,
		url: "/api/v1/tokens/invalidate",
	});
};
