import { GraphQLResolveInfo } from 'graphql';
import { ComplianceStatModel } from './models';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ComplianceStat = {
  __typename?: 'ComplianceStat';
  advertiser_id?: Maybe<Scalars['String']['output']>;
  advertiser_name?: Maybe<Scalars['String']['output']>;
  client_code?: Maybe<Scalars['String']['output']>;
  compliant_rows?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  datasource?: Maybe<Scalars['String']['output']>;
  exec_time?: Maybe<Scalars['String']['output']>;
  hierarchy_level?: Maybe<Scalars['String']['output']>;
  market?: Maybe<Scalars['String']['output']>;
  market_taxonomy?: Maybe<Scalars['String']['output']>;
  originalId?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
  total_rows?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ComplianceStat1 = {
  __typename?: 'ComplianceStat1';
  id?: Maybe<Scalars['String']['output']>;
  totalDocuments?: Maybe<Scalars['Int']['output']>;
};

export type ComplianceStatHeaders = {
  groupBy?: InputMaybe<Scalars['String']['input']>;
  projection?: InputMaybe<Scalars['String']['input']>;
};

export type ComplianceStatQueryInput = {
  advertiser_id?: InputMaybe<Scalars['String']['input']>;
  advertiser_name?: InputMaybe<Scalars['String']['input']>;
  client_code?: InputMaybe<Scalars['String']['input']>;
  compliant_rows?: InputMaybe<Scalars['String']['input']>;
  datasource?: InputMaybe<Scalars['String']['input']>;
  exec_time?: InputMaybe<Scalars['String']['input']>;
  hierarchy_level?: InputMaybe<Scalars['String']['input']>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_taxonomy?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['String']['input']>;
  total_rows?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type MixedStatTypes = ComplianceStat | ComplianceStat1;

export type Query = {
  __typename?: 'Query';
  getStat: Array<MixedStatTypes>;
};


export type QueryGetStatArgs = {
  headers?: InputMaybe<ComplianceStatHeaders>;
  params?: InputMaybe<ComplianceStatQueryInput>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  MixedStatTypes: ( ComplianceStatModel ) | ( ComplianceStat1 );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ComplianceStat: ResolverTypeWrapper<ComplianceStatModel>;
  ComplianceStat1: ResolverTypeWrapper<ComplianceStat1>;
  ComplianceStatHeaders: ComplianceStatHeaders;
  ComplianceStatQueryInput: ComplianceStatQueryInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  MixedStatTypes: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['MixedStatTypes']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  ComplianceStat: ComplianceStatModel;
  ComplianceStat1: ComplianceStat1;
  ComplianceStatHeaders: ComplianceStatHeaders;
  ComplianceStatQueryInput: ComplianceStatQueryInput;
  Int: Scalars['Int']['output'];
  MixedStatTypes: ResolversUnionTypes<ResolversParentTypes>['MixedStatTypes'];
  Query: {};
  String: Scalars['String']['output'];
};

export type ComplianceStatResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ComplianceStat'] = ResolversParentTypes['ComplianceStat']> = {
  advertiser_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  advertiser_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  client_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  compliant_rows?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  datasource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exec_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hierarchy_level?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market_taxonomy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total_rows?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComplianceStat1Resolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ComplianceStat1'] = ResolversParentTypes['ComplianceStat1']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalDocuments?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MixedStatTypesResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['MixedStatTypes'] = ResolversParentTypes['MixedStatTypes']> = {
  __resolveType: TypeResolveFn<'ComplianceStat' | 'ComplianceStat1', ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getStat?: Resolver<Array<ResolversTypes['MixedStatTypes']>, ParentType, ContextType, Partial<QueryGetStatArgs>>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  ComplianceStat?: ComplianceStatResolvers<ContextType>;
  ComplianceStat1?: ComplianceStat1Resolvers<ContextType>;
  MixedStatTypes?: MixedStatTypesResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

