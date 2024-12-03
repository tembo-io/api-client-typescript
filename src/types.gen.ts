// This file is auto-generated by @hey-api/openapi-ts

export type Action = {
	description: string;
	/**
	 * A valid Action ID. Available Action IDs include 'CreateInstance' and 'ManagePermissions'.
	 * Find all available Actions on the Actions API.
	 */
	id: string;
	name: string;
};

export type AppConfig = {
	env?: Array<EnvVar> | null;
	resources?: ResourceRequirements | null;
};

export type AppMetrics = {
	/**
	 * path to scrape metrics
	 */
	path: string;
	/**
	 * port must be also exposed in one of AppService.routing[]
	 */
	port: number;
};

/**
 * AppService significantly extends the functionality of your Tembo Postgres
 * instance by running tools and software built by the Postgres open source community.
 *
 * **Example**: This will configure and install a Postgrest container along side
 * the Postgres instance, install pg_graphql extension, and configure the
 * ingress routing to expose the Postgrest service.
 *
 * ```yaml
 * apiVersion: coredb.io/v1alpha1
 * kind: CoreDB
 * metadata:
 * name: test-db
 * spec:
 * trunk_installs:
 * - name: pg_graphql
 * version: 1.2.0
 * extensions:
 * - name: pg_graphql
 * locations:
 * - database: postgres
 * enabled: true
 *
 * appServices:
 * - name: postgrest
 * image: postgrest/postgrest:v10.0.0
 * routing:
 * # only expose /rest/v1 and /graphql/v1
 * - port: 3000
 * ingressPath: /rest/v1
 * middlewares:
 * - my-headers
 * - port: 3000
 * ingressPath: /graphql/v1
 * middlewares:
 * - map-gql
 * - my-headers
 * middlewares:
 * - customRequestHeaders:
 * name: my-headers
 * config:
 * # removes auth header from request
 * Authorization: ""
 * Content-Profile: graphql
 * Accept-Profile: graphql
 * - stripPrefix:
 * name: my-strip-prefix
 * config:
 * - /rest/v1
 * # reroute gql and rest requests
 * - replacePathRegex:
 * name: map-gql
 * config:
 * regex: \/graphql\/v1\/?
 * replacement: /rpc/resolve
 * env:
 * - name: PGRST_DB_URI
 * valueFromPlatform: ReadWriteConnection
 * - name: PGRST_DB_SCHEMA
 * value: "public, graphql"
 * - name: PGRST_DB_ANON_ROLE
 * value: postgres
 * - name: PGRST_LOG_LEVEL
 * value: info
 * ```
 */
export type AppService = {
	/**
	 * Defines the arguments to pass into the container if needed.
	 * You define this in the same manner as you would for all Kubernetes containers.
	 * See the [Kubernetes docs](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container).
	 */
	args?: Array<string> | null;
	/**
	 * Defines the command into the container if needed.
	 * You define this in the same manner as you would for all Kubernetes containers.
	 * See the [Kubernetes docs](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container).
	 */
	command?: Array<string> | null;
	/**
	 * Defines the environment variables to pass into the container if needed.
	 * You define this in the same manner as you would for all Kubernetes containers.
	 * See the [Kubernetes docs](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container).
	 */
	env?: Array<EnvVar> | null;
	/**
	 * Defines the container image to use for the appService.
	 */
	image: string;
	metrics?: AppMetrics | null;
	/**
	 * Defines the ingress middeware configuration for the appService.
	 * This is specifically configured for the ingress controller Traefik.
	 */
	middlewares?: Array<Middleware> | null;
	/**
	 * Defines the name of the appService.
	 */
	name: string;
	probes?: Probes | null;
	resources?: ResourceRequirements;
	/**
	 * Defines the routing configuration for the appService.
	 */
	routing?: Array<Routing> | null;
	storage?: StorageConfig | null;
};

export type AppType =
	| {
			"ai-proxy": AppConfig | null;
	  }
	| {
			restapi: AppConfig | null;
	  }
	| {
			http: AppConfig | null;
	  }
	| {
			"mq-api": AppConfig | null;
	  }
	| {
			embeddings: AppConfig | null;
	  }
	| {
			pganalyze: AppConfig | null;
	  }
	| {
			sqlrunner: AppConfig | null;
	  }
	| {
			custom: AppService;
	  };

export type AskParams = {
	/**
	 * The ask query. For example, "how to create a Tembo instance"
	 */
	query: string;
};

export type AskResult = {
	/**
	 * The ask query. For example, "how to create a Tembo instance"
	 */
	chat_response: string;
	/**
	 * an array of json objects referencing documents used to generate the response
	 */
	context?: Array<SearchResponse> | null;
};

export type Autoscaling = {
	autostop?: AutoStop;
	storage?: AutoscalingStorage;
};

/**
 * AutoscalingStorage configures the automatic scaling of instance storage.
 */
export type AutoscalingStorage = {
	/**
	 * Enable autoscaling for storage
	 */
	enabled: boolean;
	maximum?: Storage | null;
};

/**
 * AutoStop configures automatic stopping of idle instances.
 * An instance is considered idle if it is more than two days old, hasn't been connected to in over a day, and has not been resumed within the last day.
 * Idle instances are stopped in the time window 9-9:30 AM ET.
 */
export type AutoStop = {
	/**
	 * Enable automatic stopping of the instance when idle.
	 */
	enabled: boolean;
};

export type ConnectionInfo = {
	host: string;
	pooler_host?: string | null;
	port: number;
	user: string;
};

/**
 * A connection pooler is a tool used to manage database connections, sitting
 * between your application and Postgres instance. Because of the way Postgres
 * handles connections, the server may encounter resource constraint issues
 * when managing a few thousand connections. Using a pooler can alleviate these
 * issues by using actual Postgres connections only when necessary
 *
 * **Example**: A typical connection pooler configuration
 *
 * ```yaml
 * apiVersion: coredb.io/v1alpha1
 * kind: CoreDB
 * metadata:
 * name: test-db
 * spec:
 * connectionPooler:
 * enabled: true
 * pooler:
 * poolMode: transaction
 * # Valid parameter values can be found at https://www.pgbouncer.org/config.html
 * parameters:
 * default_pool_size: "50"
 * max_client_conn: "5000"
 * resources:
 * limits:
 * cpu: 200m
 * memory: 256Mi
 * requests:
 * cpu: 100m
 * memory: 128Mi
 * ```
 */
export type ConnectionPooler = {
	/**
	 * Enable the connection pooler
	 *
	 * **Default**: false.
	 */
	enabled?: boolean;
	pooler?: PgBouncer;
};

export type Cpu =
	| "0.25"
	| "0.5"
	| "1"
	| "2"
	| "4"
	| "6"
	| "8"
	| "12"
	| "16"
	| "32";

export type CreateInstance = {
	app_services?: Array<AppType> | null;
	autoscaling?: PatchAutoscaling | null;
	connection_pooler?: ConnectionPooler | null;
	cpu: Cpu;
	dedicated_networking?: dedicated_networking | null;
	environment: Environment;
	experimental?: Experimental | null;
	extensions?: Array<Extension> | null;
	extra_domains_rw?: Array<string> | null;
	instance_name: string;
	ip_allow_list?: Array<string> | null;
	memory: Memory;
	pg_version?: number;
	postgres_configs?: Array<PgConfig> | null;
	provider_id?: string;
	region_id?: string;
	replicas?: Replicas;
	spot?: boolean | null;
	stack_type: StackType;
	storage: Storage;
	trunk_installs?: Array<TrunkInstall> | null;
};

export type DataPlane = {
	index: string;
	provider_id: string;
	provider_name: string;
	region: string;
	region_id: string;
	region_name: string;
};

/**
 * Configuration for dedicated networking.
 */
export type dedicated_networking = {
	/**
	 * Enables or disables dedicated networking. Default is false.
	 */
	enabled?: boolean | null;
	/**
	 * If true, includes the standby instance in the dedicated networking setup. Default is false.
	 */
	includeStandby?: boolean | null;
};

export type Environment = "dev" | "test" | "prod";

export type EnvVar = {
	name: string;
	value?: string | null;
	valueFromPlatform?: EnvVarRef | null;
};

export type EnvVarRef = "ReadOnlyConnection" | "ReadWriteConnection";

export type ErrorResponseSchema = {
	error: string;
};

export type Experimental = {
	image?: string | null;
};

/**
 * Extension lets you define a list of extensions to enable on the instance. To enable
 * extensions, you must specify the name of the extension and the database, schema, and
 * version to enable it on. If the version is not specified, the latest version will be
 * used.  The extension must also be installed on the instance.  To install
 * extensions, please refer to the `TrunkInstall` resource.
 *
 * This example will enable the pg_stat_statements extension on the Postgres database
 * in the public schema.
 *
 * ```yaml
 * apiVersion: coredb.io/v1alpha1
 * kind: CoreDB
 * metadata:
 * name: test-db
 * spec:
 * extensions:
 * - name: pg_stat_statements
 * locations:
 * - database: postgres
 * enabled: true
 * schema: public
 * version: 1.10.0
 * ````
 */
export type Extension = {
	/**
	 * A description of the extension. (Optional)
	 *
	 * **Default**: "No description provided"
	 */
	description?: string | null;
	/**
	 * A list of locations (databases) to enabled the extension on.
	 */
	locations: Array<ExtensionInstallLocation>;
	/**
	 * The name of the extension to enable.
	 */
	name: string;
};

/**
 * ExtensionInstallLocation lets you specify the database, schema, and version to enable
 * an extension on.
 */
export type ExtensionInstallLocation = {
	/**
	 * The database to enable the extension on.
	 *
	 * **Default**: "postgres"
	 */
	database?: string;
	/**
	 * Enable or disable the extension on this Postgres instance.
	 */
	enabled: boolean;
	/**
	 * The schema to enable the extension on. (eg: "public")
	 */
	schema?: string | null;
	/**
	 * The extension version to install. If not specified, the latest version will be used.
	 */
	version?: string | null;
};

export type ExtensionInstallLocationStatus = {
	database?: string;
	enabled?: boolean | null;
	error?: boolean | null;
	error_message?: string | null;
	schema?: string | null;
	version?: string | null;
};

export type ExtensionStatus = {
	description?: string | null;
	locations: Array<ExtensionInstallLocationStatus>;
	name: string;
};

export type HeaderConfig = {
	config: {
		[key: string]: string;
	};
	name: string;
};

export type HistoryEntry = {
	instance: InstanceState;
	/**
	 * The timestamp of the entry
	 */
	timestamp: string;
};

export type HistoryPage = {
	/**
	 * List of historical results
	 */
	history: Array<HistoryEntry>;
	pagination: PaginationInfo;
};

export type Infrastructure = {
	cpu?: string;
	memory?: string;
	storage?: string;
};

export type Ingress = {
	enabled: boolean;
	path?: string | null;
};

export type IngressType = "http" | "tcp";

export type Instance = {
	app_services?: Array<AppType> | null;
	autoscaling: Autoscaling;
	connection_info?: ConnectionInfo | null;
	connection_pooler?: ConnectionPooler | null;
	cpu: Cpu;
	created_at?: string;
	dataplane_index: string;
	dedicated_networking?: dedicated_networking | null;
	environment: Environment;
	extensions?: Array<ExtensionStatus> | null;
	extra_domains_rw?: Array<string> | null;
	first_recoverability_time?: string | null;
	image?: string | null;
	instance_id: string;
	instance_name: string;
	ip_allow_list?: Array<string> | null;
	last_updated_at?: string;
	last_wal_archive_status?: string | null;
	memory: Memory;
	namespace: string;
	organization_id: string;
	/**
	 * @deprecated
	 */
	organization_name: string;
	postgres_configs?: Array<PgConfig> | null;
	/**
	 * Major Postgres version this instance is using.
	 * Currently: 14, 15 or 16
	 */
	postgres_version: number;
	provider_id: string;
	region_id: string;
	region_name: string;
	replicas: Replicas;
	runtime_config?: Array<PgConfig> | null;
	spot?: boolean | null;
	stack_type: StackType;
	state: State;
	storage: Storage;
	trunk_installs?: Array<TrunkInstallStatus> | null;
};

export type InstanceEvent = "restart" | "stop" | "start";

export type InstanceState = {
	state: State;
};

export type IntOrString =
	| {
			Int: number;
	  }
	| {
			String: string;
	  };

export type Memory =
	| "1Gi"
	| "2Gi"
	| "4Gi"
	| "8Gi"
	| "12Gi"
	| "16Gi"
	| "24Gi"
	| "32Gi"
	| "64Gi";

/**
 * Midddleware is used to configure the middleware for the appService.
 * This is specifically configured for the ingress controller Traefik.
 *
 * Please refer to the example in the `AppService` documentation.
 */
export type Middleware =
	| {
			customRequestHeaders: HeaderConfig;
	  }
	| {
			stripPrefix: StripPrefixConfig;
	  }
	| {
			replacePathRegex: ReplacePathRegexConfig;
	  };

export type PaginationInfo = {
	/**
	 * The page returned
	 */
	currentPage: number;
	/**
	 * True if more results are available on the next page
	 */
	hasMore: boolean;
	/**
	 * The maximum number of results returned
	 */
	limit: number;
};

export type PatchAutoscaling = {
	autostop?: AutoStop | null;
	storage?: AutoscalingStorage | null;
};

export type PatchInstance = {
	app_services?: Array<AppType> | null;
	autoscaling?: PatchAutoscaling | null;
	connection_pooler?: ConnectionPooler | null;
	cpu?: Cpu | null;
	dedicated_networking?: dedicated_networking | null;
	environment?: Environment | null;
	experimental?: Experimental | null;
	extensions?: Array<Extension> | null;
	extra_domains_rw?: Array<string> | null;
	instance_name?: string | null;
	ip_allow_list?: Array<string> | null;
	memory?: Memory | null;
	postgres_configs?: Array<PgConfig> | null;
	replicas?: Replicas | null;
	spot?: boolean | null;
	storage?: Storage | null;
	trunk_installs?: Array<TrunkInstall> | null;
};

/**
 * PgBouncer is the type for the PGBouncer configuration
 */
export type PgBouncer = {
	/**
	 * Valid pgbouncer parameter values can be found at [https://www.pgbouncer.org/config.html](https://www.pgbouncer.org/config.html)
	 */
	parameters?: {
		[key: string]: string;
	} | null;
	poolMode?: PoolerPgbouncerPoolMode;
	resources?: PoolerTemplateSpecContainersResources | null;
};

export type PgConfig = {
	name: string;
	value: string;
};

export type PolicyData = {
	policies: Array<PolicyInput>;
};

export type PolicyInput = {
	/**
	 * A valid Action ID. Available Action IDs include 'CreateInstance' and 'ManagePermissions'.
	 * Find all available Actions on the Actions API.
	 */
	action: string;
	/**
	 * Whether the Action is allowed or not for the Role
	 */
	allowed: boolean;
	/**
	 * A valid Role ID. Available Role IDs include 'admin' and 'basic_member'.
	 */
	role: string;
};

/**
 * The PgBouncer configuration
 */
export type PoolerPgbouncerPoolMode = "session" | "transaction";

/**
 * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
 */
export type PoolerTemplateSpecContainersResources = {
	/**
	 * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
	 * This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
	 * This field is immutable. It can only be set for containers.
	 */
	claims?: Array<PoolerTemplateSpecContainersResourcesClaims> | null;
	/**
	 * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
	 */
	limits?: {
		[key: string]: IntOrString;
	} | null;
	/**
	 * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
	 */
	requests?: {
		[key: string]: IntOrString;
	} | null;
};

/**
 * ResourceClaim references one entry in PodSpec.ResourceClaims.
 */
export type PoolerTemplateSpecContainersResourcesClaims = {
	/**
	 * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
	 */
	name: string;
};

export type Probe = {
	initialDelaySeconds: number;
	path: string;
	port: number;
};

/**
 * Probes are used to determine the health of a container.
 * You define this in the same manner as you would for all Kubernetes containers.
 * See the [Kubernetes docs](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/).
 */
export type Probes = {
	liveness: Probe;
	readiness: Probe;
};

export type ReplacePathRegexConfig = {
	config: ReplacePathRegexConfigType;
	name: string;
};

export type ReplacePathRegexConfigType = {
	regex: string;
	replacement: string;
};

export type Replicas = number;

export type Resource = {
	cpu: string;
	memory: string;
};

export type ResourceRequirements = {
	limits?: Resource | null;
	requests?: Resource | null;
};

export type Restore = {
	instance_id: string;
	recovery_target_time?: string | null;
};

export type RestoreInstance = {
	app_services?: Array<AppType> | null;
	autoscaling?: PatchAutoscaling | null;
	connection_pooler?: ConnectionPooler | null;
	cpu?: Cpu | null;
	environment?: Environment | null;
	extra_domains_rw?: Array<string> | null;
	instance_name: string;
	memory?: Memory | null;
	restore: Restore;
	storage?: Storage | null;
};

export type Role = {
	/**
	 * A valid Role ID. Available Role IDs include 'admin' and 'basic_member'.
	 */
	id: string;
	/**
	 * The name of the Role.
	 */
	name: string;
};

/**
 * Routing is used if there is a routing port, then a service is created using
 * that Port when ingress_path is present, an ingress is created. Otherwise, no
 * ingress is created
 */
export type Routing = {
	entryPoints?: Array<string> | null;
	ingressPath?: string | null;
	ingressType?: IngressType | null;
	/**
	 * provide name of the middleware resources to apply to this route
	 */
	middlewares?: Array<string> | null;
	port: number;
};

export type SearchParams = {
	/**
	 * The number of results to return. Default is 10, max is 20.
	 */
	limit?: number | null;
	/**
	 * The search query. For example, "how to create a Tembo instance"
	 */
	query: string;
};

export type SearchResponse = {
	/**
	 * The file path (in Tembo website repo) to the Tembo document
	 */
	file_path: string;
	front_matter?: unknown;
	similarity_score: number;
};

export type StackType =
	| "Analytics"
	| "DataWarehouse"
	| "Geospatial"
	| "MachineLearning"
	| "MessageQueue"
	| "MongoAlternative"
	| "OLAP"
	| "OLTP"
	| "ParadeDB"
	| "RAG"
	| "Standard"
	| "Timeseries"
	| "VectorDB";

export type State =
	| "Submitted"
	| "Up"
	| "Configuring"
	| "Error"
	| "Restarting"
	| "Starting"
	| "Stopping"
	| "Stopped"
	| "Deleting"
	| "Deleted";

export type Storage =
	| "10Gi"
	| "50Gi"
	| "100Gi"
	| "200Gi"
	| "300Gi"
	| "400Gi"
	| "500Gi"
	| "1Ti"
	| "1.5Ti"
	| "2Ti";

export type StorageConfig = {
	volumeMounts?: Array<VolumeMount> | null;
};

export type StripPrefixConfig = {
	config: Array<string>;
	name: string;
};

/**
 * TrunkInstall allows installation of extensions from the [pgtrunk](https://pgt.dev)
 * registry.  This list should be a list of extension names and versions that you wish to
 * install at runtime using the pgtrunk API.
 *
 * This example will install the pg_stat_statements extension at version 1.10.0.
 *
 * ```yaml
 * apiVersion: coredb.io/v1alpha1
 * kind: CoreDB
 * metadata:
 * name: test-db
 * spec:
 * trunk_installs:
 * - name: pg_stat_statements
 * version: 1.10.0
 * ```
 */
export type TrunkInstall = {
	/**
	 * The name of the extension to install. This must be the name of the extension as it
	 * appears in the [pgtrunk](https://pgt.dev) registry.
	 */
	name: string;
	/**
	 * The version of the extension to install. If not specified, the latest version will
	 * be used. (Optional)
	 */
	version?: string | null;
};

export type TrunkInstallStatus = {
	error: boolean;
	error_message?: string | null;
	installed_to_pods?: Array<string> | null;
	loading?: boolean;
	name: string;
	version?: string | null;
};

export type VolumeMount = {
	mount_path: string;
	mount_propagation?: string | null;
	name: string;
	read_only?: boolean | null;
	sub_path?: string | null;
	sub_path_expr?: string | null;
};

export type GetAllAppsResponse = Array<unknown>;

export type GetAllAppsError = ErrorResponseSchema;

export type GetAppData = {
	path: {
		type: string;
	};
};

export type GetAppResponse = unknown;

export type GetAppError = unknown | ErrorResponseSchema;

export type AskData = {
	query: {
		/**
		 * The ask query. For example, "how to create a Tembo instance"
		 */
		query: string;
	};
};

export type AskResponse = AskResult;

export type AskError = unknown | ErrorResponseSchema;

export type GetSchemaResponse = ErrorResponseSchema;

export type GetSchemaError = ErrorResponseSchema;

export type GetActionsData = {
	path: {
		/**
		 * Organization ID for the request
		 */
		org_id: string;
	};
};

export type GetActionsResponse = Array<Action>;

export type GetActionsError = ErrorResponseSchema;

export type GetAllDataplanesData = {
	path: {
		/**
		 * Organization ID for the request
		 */
		org_id: string;
	};
};

export type GetAllDataplanesResponse = Array<DataPlane>;

export type GetAllDataplanesError = ErrorResponseSchema;

export type GetAllData = {
	path: {
		/**
		 * organization id for the request
		 */
		org_id: string;
	};
};

export type GetAllResponse = Array<Instance>;

export type GetAllError = ErrorResponseSchema;

export type CreateInstanceData = {
	body: CreateInstance;
	path: {
		/**
		 * Organization ID that owns the Tembo instance
		 */
		org_id: string;
	};
};

export type CreateInstanceResponse = Instance;

export type CreateInstanceError = ErrorResponseSchema | string;

export type GetInstanceData = {
	path: {
		instance_id: string;
		/**
		 * Organization ID that owns the instance
		 */
		org_id: string;
	};
};

export type GetInstanceResponse = Instance;

export type GetInstanceError = ErrorResponseSchema;

export type InstanceEventData = {
	path: {
		instance_id: string;
		/**
		 * Organization ID that owns the Tembo instance
		 */
		org_id: string;
	};
	query: {
		event_type: InstanceEvent;
	};
};

export type InstanceEventResponse = Instance;

export type InstanceEventError = ErrorResponseSchema;

export type DeleteInstanceData = {
	path: {
		/**
		 * Delete this instance id
		 */
		instance_id: string;
		/**
		 * Organization id of the instance to delete
		 */
		org_id: string;
	};
};

export type DeleteInstanceResponse = Instance;

export type DeleteInstanceError = ErrorResponseSchema;

export type PatchInstanceData = {
	body: PatchInstance;
	path: {
		instance_id: string;
		/**
		 * Organization ID that owns the instance
		 */
		org_id: string;
	};
};

export type PatchInstanceResponse = Instance;

export type PatchInstanceError = ErrorResponseSchema | string;

export type GetInstanceHistoryData = {
	path: {
		/**
		 * The field of the instance we are retrieving history for, currently only 'state' is supported
		 */
		field: string;
		/**
		 * The instance ID for the request
		 */
		instance_id: string;
		/**
		 * Organization ID for the request
		 */
		org_id: string;
	};
	query?: {
		/**
		 * Defaults to now
		 */
		end?: string | null;
		/**
		 * The maximum number of results per page
		 */
		limit?: number;
		/**
		 * Page to check
		 */
		page?: number;
		/**
		 * Defaults to 24 hours ago
		 */
		start?: string | null;
	};
};

export type GetInstanceHistoryResponse = HistoryPage;

export type GetInstanceHistoryError = ErrorResponseSchema;

export type GetInstanceTomlData = {
	path: {
		instance_id: string;
		/**
		 * Organization ID that owns the instance
		 */
		org_id: string;
	};
};

export type GetInstanceTomlResponse = unknown;

export type GetInstanceTomlError = ErrorResponseSchema | unknown;

export type GetPoliciesData = {
	path: {
		/**
		 * Organization ID for the request
		 */
		org_id: string;
	};
};

export type GetPoliciesResponse = Array<PolicyData>;

export type GetPoliciesError = ErrorResponseSchema;

export type SetPolicyData = {
	/**
	 * Policy to set
	 */
	body: PolicyInput;
	path: {
		/**
		 * Organization ID for the request
		 */
		org_id: string;
	};
};

export type SetPolicyResponse = string;

export type SetPolicyError = ErrorResponseSchema;

export type DeletePolicyData = {
	/**
	 * Policy to delete
	 */
	body: PolicyInput;
	path: {
		/**
		 * Organization ID for the request
		 */
		org_id: string;
	};
};

export type DeletePolicyResponse = string;

export type DeletePolicyError = ErrorResponseSchema;

export type RestoreInstanceData = {
	body: RestoreInstance;
	path: {
		/**
		 * Organization ID that owns the Tembo instance
		 */
		org_id: string;
	};
};

export type RestoreInstanceResponse = Instance;

export type RestoreInstanceError = ErrorResponseSchema | string;

export type GetRolesData = {
	path: {
		/**
		 * Organization ID for the request
		 */
		org_id: string;
	};
};

export type GetRolesResponse = Array<Role>;

export type GetRolesError = ErrorResponseSchema;

export type SearchData = {
	query: {
		/**
		 * The number of results to return. Default is 10, max is 20.
		 */
		limit?: number | null;
		/**
		 * The search query. For example, "how to create a Tembo instance"
		 */
		query: string;
	};
};

export type SearchResponse2 = SearchResponse;

export type SearchError = unknown | ErrorResponseSchema;

export type GetAllEntitiesResponse = Array<unknown>;

export type GetAllEntitiesError = ErrorResponseSchema;

export type GetEntityData = {
	path: {
		/**
		 * the type of entity
		 */
		type: StackType;
	};
};

export type GetEntityResponse = unknown;

export type GetEntityError = unknown | ErrorResponseSchema;

export type InvalidateTokenResponse = string;

export type InvalidateTokenError = ErrorResponseSchema;