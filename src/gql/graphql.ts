/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  bigint: { input: any; output: any; }
  date: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamp: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "access_keys" */
export type Access_Keys = {
  __typename?: 'access_keys';
  account_id: Scalars['String']['output'];
  created_at: Scalars['timestamp']['output'];
  permissions?: Maybe<Scalars['jsonb']['output']>;
  public_key: Scalars['String']['output'];
  removed_at?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "access_keys" */
export type Access_KeysPermissionsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "access_keys" */
export type Access_Keys_Aggregate = {
  __typename?: 'access_keys_aggregate';
  aggregate?: Maybe<Access_Keys_Aggregate_Fields>;
  nodes: Array<Access_Keys>;
};

/** aggregate fields of "access_keys" */
export type Access_Keys_Aggregate_Fields = {
  __typename?: 'access_keys_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Access_Keys_Max_Fields>;
  min?: Maybe<Access_Keys_Min_Fields>;
};


/** aggregate fields of "access_keys" */
export type Access_Keys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Access_Keys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "access_keys". All fields are combined with a logical 'AND'. */
export type Access_Keys_Bool_Exp = {
  _and?: InputMaybe<Array<Access_Keys_Bool_Exp>>;
  _not?: InputMaybe<Access_Keys_Bool_Exp>;
  _or?: InputMaybe<Array<Access_Keys_Bool_Exp>>;
  account_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  permissions?: InputMaybe<Jsonb_Comparison_Exp>;
  public_key?: InputMaybe<String_Comparison_Exp>;
  removed_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Access_Keys_Max_Fields = {
  __typename?: 'access_keys_max_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  removed_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Access_Keys_Min_Fields = {
  __typename?: 'access_keys_min_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  removed_at?: Maybe<Scalars['timestamp']['output']>;
};

/** Ordering options when selecting data from "access_keys". */
export type Access_Keys_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  permissions?: InputMaybe<Order_By>;
  public_key?: InputMaybe<Order_By>;
  removed_at?: InputMaybe<Order_By>;
};

/** select columns of table "access_keys" */
export enum Access_Keys_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Permissions = 'permissions',
  /** column name */
  PublicKey = 'public_key',
  /** column name */
  RemovedAt = 'removed_at'
}

/** Streaming cursor of the table "access_keys" */
export type Access_Keys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Access_Keys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Access_Keys_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  permissions?: InputMaybe<Scalars['jsonb']['input']>;
  public_key?: InputMaybe<Scalars['String']['input']>;
  removed_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  account_id: Scalars['String']['output'];
  amount: Scalars['String']['output'];
  code_hash: Scalars['String']['output'];
  created_at: Scalars['timestamp']['output'];
  locked: Scalars['String']['output'];
  removed_at?: Maybe<Scalars['timestamp']['output']>;
  storage_paid_at: Scalars['numeric']['output'];
  storage_usage: Scalars['numeric']['output'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<Accounts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  storage_paid_at?: Maybe<Scalars['Float']['output']>;
  storage_usage?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  account_id?: InputMaybe<String_Comparison_Exp>;
  amount?: InputMaybe<String_Comparison_Exp>;
  code_hash?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  locked?: InputMaybe<String_Comparison_Exp>;
  removed_at?: InputMaybe<Timestamp_Comparison_Exp>;
  storage_paid_at?: InputMaybe<Numeric_Comparison_Exp>;
  storage_usage?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['String']['output']>;
  code_hash?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  locked?: Maybe<Scalars['String']['output']>;
  removed_at?: Maybe<Scalars['timestamp']['output']>;
  storage_paid_at?: Maybe<Scalars['numeric']['output']>;
  storage_usage?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['String']['output']>;
  code_hash?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  locked?: Maybe<Scalars['String']['output']>;
  removed_at?: Maybe<Scalars['timestamp']['output']>;
  storage_paid_at?: Maybe<Scalars['numeric']['output']>;
  storage_usage?: Maybe<Scalars['numeric']['output']>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  code_hash?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  locked?: InputMaybe<Order_By>;
  removed_at?: InputMaybe<Order_By>;
  storage_paid_at?: InputMaybe<Order_By>;
  storage_usage?: InputMaybe<Order_By>;
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  CodeHash = 'code_hash',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Locked = 'locked',
  /** column name */
  RemovedAt = 'removed_at',
  /** column name */
  StoragePaidAt = 'storage_paid_at',
  /** column name */
  StorageUsage = 'storage_usage'
}

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  storage_paid_at?: Maybe<Scalars['Float']['output']>;
  storage_usage?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  storage_paid_at?: Maybe<Scalars['Float']['output']>;
  storage_usage?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  storage_paid_at?: Maybe<Scalars['Float']['output']>;
  storage_usage?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['String']['input']>;
  code_hash?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  locked?: InputMaybe<Scalars['String']['input']>;
  removed_at?: InputMaybe<Scalars['timestamp']['input']>;
  storage_paid_at?: InputMaybe<Scalars['numeric']['input']>;
  storage_usage?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  storage_paid_at?: Maybe<Scalars['numeric']['output']>;
  storage_usage?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  storage_paid_at?: Maybe<Scalars['Float']['output']>;
  storage_usage?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  storage_paid_at?: Maybe<Scalars['Float']['output']>;
  storage_usage?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  storage_paid_at?: Maybe<Scalars['Float']['output']>;
  storage_usage?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "analytics_tmp.affiliate_earnings_monthly" */
export type Analytics_Tmp_Affiliate_Earnings_Monthly = {
  __typename?: 'analytics_tmp_affiliate_earnings_monthly';
  affiliate_id?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  date_trunc?: Maybe<Scalars['date']['output']>;
  sales_count?: Maybe<Scalars['bigint']['output']>;
  total_earned?: Maybe<Scalars['numeric']['output']>;
};

/** aggregated selection of "analytics_tmp.affiliate_earnings_monthly" */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Aggregate = {
  __typename?: 'analytics_tmp_affiliate_earnings_monthly_aggregate';
  aggregate?: Maybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Aggregate_Fields>;
  nodes: Array<Analytics_Tmp_Affiliate_Earnings_Monthly>;
};

/** aggregate fields of "analytics_tmp.affiliate_earnings_monthly" */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Aggregate_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_monthly_aggregate_fields';
  avg?: Maybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Max_Fields>;
  min?: Maybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Min_Fields>;
  stddev?: Maybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Stddev_Fields>;
  stddev_pop?: Maybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Stddev_Samp_Fields>;
  sum?: Maybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Sum_Fields>;
  var_pop?: Maybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Var_Pop_Fields>;
  var_samp?: Maybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Var_Samp_Fields>;
  variance?: Maybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Variance_Fields>;
};


/** aggregate fields of "analytics_tmp.affiliate_earnings_monthly" */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Monthly_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Avg_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_monthly_avg_fields';
  sales_count?: Maybe<Scalars['Float']['output']>;
  total_earned?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "analytics_tmp.affiliate_earnings_monthly". All fields are combined with a logical 'AND'. */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Bool_Exp = {
  _and?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Monthly_Bool_Exp>>;
  _not?: InputMaybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Bool_Exp>;
  _or?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Monthly_Bool_Exp>>;
  affiliate_id?: InputMaybe<String_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  date_trunc?: InputMaybe<Date_Comparison_Exp>;
  sales_count?: InputMaybe<Bigint_Comparison_Exp>;
  total_earned?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Max_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_monthly_max_fields';
  affiliate_id?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  date_trunc?: Maybe<Scalars['date']['output']>;
  sales_count?: Maybe<Scalars['bigint']['output']>;
  total_earned?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Min_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_monthly_min_fields';
  affiliate_id?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  date_trunc?: Maybe<Scalars['date']['output']>;
  sales_count?: Maybe<Scalars['bigint']['output']>;
  total_earned?: Maybe<Scalars['numeric']['output']>;
};

/** Ordering options when selecting data from "analytics_tmp.affiliate_earnings_monthly". */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Order_By = {
  affiliate_id?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  date_trunc?: InputMaybe<Order_By>;
  sales_count?: InputMaybe<Order_By>;
  total_earned?: InputMaybe<Order_By>;
};

/** select columns of table "analytics_tmp.affiliate_earnings_monthly" */
export enum Analytics_Tmp_Affiliate_Earnings_Monthly_Select_Column {
  /** column name */
  AffiliateId = 'affiliate_id',
  /** column name */
  Currency = 'currency',
  /** column name */
  DateTrunc = 'date_trunc',
  /** column name */
  SalesCount = 'sales_count',
  /** column name */
  TotalEarned = 'total_earned'
}

/** aggregate stddev on columns */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Stddev_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_monthly_stddev_fields';
  sales_count?: Maybe<Scalars['Float']['output']>;
  total_earned?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Stddev_Pop_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_monthly_stddev_pop_fields';
  sales_count?: Maybe<Scalars['Float']['output']>;
  total_earned?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Stddev_Samp_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_monthly_stddev_samp_fields';
  sales_count?: Maybe<Scalars['Float']['output']>;
  total_earned?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "analytics_tmp_affiliate_earnings_monthly" */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Analytics_Tmp_Affiliate_Earnings_Monthly_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Stream_Cursor_Value_Input = {
  affiliate_id?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  date_trunc?: InputMaybe<Scalars['date']['input']>;
  sales_count?: InputMaybe<Scalars['bigint']['input']>;
  total_earned?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Sum_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_monthly_sum_fields';
  sales_count?: Maybe<Scalars['bigint']['output']>;
  total_earned?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Var_Pop_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_monthly_var_pop_fields';
  sales_count?: Maybe<Scalars['Float']['output']>;
  total_earned?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Var_Samp_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_monthly_var_samp_fields';
  sales_count?: Maybe<Scalars['Float']['output']>;
  total_earned?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Analytics_Tmp_Affiliate_Earnings_Monthly_Variance_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_monthly_variance_fields';
  sales_count?: Maybe<Scalars['Float']['output']>;
  total_earned?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "analytics_tmp.affiliate_earnings_yearly" */
export type Analytics_Tmp_Affiliate_Earnings_Yearly = {
  __typename?: 'analytics_tmp_affiliate_earnings_yearly';
  affiliate_id?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  date_trunc?: Maybe<Scalars['date']['output']>;
  sales_count?: Maybe<Scalars['bigint']['output']>;
  total_earned?: Maybe<Scalars['numeric']['output']>;
};

/** aggregated selection of "analytics_tmp.affiliate_earnings_yearly" */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Aggregate = {
  __typename?: 'analytics_tmp_affiliate_earnings_yearly_aggregate';
  aggregate?: Maybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Aggregate_Fields>;
  nodes: Array<Analytics_Tmp_Affiliate_Earnings_Yearly>;
};

/** aggregate fields of "analytics_tmp.affiliate_earnings_yearly" */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Aggregate_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_yearly_aggregate_fields';
  avg?: Maybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Max_Fields>;
  min?: Maybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Min_Fields>;
  stddev?: Maybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Stddev_Fields>;
  stddev_pop?: Maybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Stddev_Samp_Fields>;
  sum?: Maybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Sum_Fields>;
  var_pop?: Maybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Var_Pop_Fields>;
  var_samp?: Maybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Var_Samp_Fields>;
  variance?: Maybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Variance_Fields>;
};


/** aggregate fields of "analytics_tmp.affiliate_earnings_yearly" */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Yearly_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Avg_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_yearly_avg_fields';
  sales_count?: Maybe<Scalars['Float']['output']>;
  total_earned?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "analytics_tmp.affiliate_earnings_yearly". All fields are combined with a logical 'AND'. */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Bool_Exp = {
  _and?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Yearly_Bool_Exp>>;
  _not?: InputMaybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Bool_Exp>;
  _or?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Yearly_Bool_Exp>>;
  affiliate_id?: InputMaybe<String_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  date_trunc?: InputMaybe<Date_Comparison_Exp>;
  sales_count?: InputMaybe<Bigint_Comparison_Exp>;
  total_earned?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Max_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_yearly_max_fields';
  affiliate_id?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  date_trunc?: Maybe<Scalars['date']['output']>;
  sales_count?: Maybe<Scalars['bigint']['output']>;
  total_earned?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Min_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_yearly_min_fields';
  affiliate_id?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  date_trunc?: Maybe<Scalars['date']['output']>;
  sales_count?: Maybe<Scalars['bigint']['output']>;
  total_earned?: Maybe<Scalars['numeric']['output']>;
};

/** Ordering options when selecting data from "analytics_tmp.affiliate_earnings_yearly". */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Order_By = {
  affiliate_id?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  date_trunc?: InputMaybe<Order_By>;
  sales_count?: InputMaybe<Order_By>;
  total_earned?: InputMaybe<Order_By>;
};

/** select columns of table "analytics_tmp.affiliate_earnings_yearly" */
export enum Analytics_Tmp_Affiliate_Earnings_Yearly_Select_Column {
  /** column name */
  AffiliateId = 'affiliate_id',
  /** column name */
  Currency = 'currency',
  /** column name */
  DateTrunc = 'date_trunc',
  /** column name */
  SalesCount = 'sales_count',
  /** column name */
  TotalEarned = 'total_earned'
}

/** aggregate stddev on columns */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Stddev_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_yearly_stddev_fields';
  sales_count?: Maybe<Scalars['Float']['output']>;
  total_earned?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Stddev_Pop_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_yearly_stddev_pop_fields';
  sales_count?: Maybe<Scalars['Float']['output']>;
  total_earned?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Stddev_Samp_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_yearly_stddev_samp_fields';
  sales_count?: Maybe<Scalars['Float']['output']>;
  total_earned?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "analytics_tmp_affiliate_earnings_yearly" */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Analytics_Tmp_Affiliate_Earnings_Yearly_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Stream_Cursor_Value_Input = {
  affiliate_id?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  date_trunc?: InputMaybe<Scalars['date']['input']>;
  sales_count?: InputMaybe<Scalars['bigint']['input']>;
  total_earned?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Sum_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_yearly_sum_fields';
  sales_count?: Maybe<Scalars['bigint']['output']>;
  total_earned?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Var_Pop_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_yearly_var_pop_fields';
  sales_count?: Maybe<Scalars['Float']['output']>;
  total_earned?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Var_Samp_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_yearly_var_samp_fields';
  sales_count?: Maybe<Scalars['Float']['output']>;
  total_earned?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Analytics_Tmp_Affiliate_Earnings_Yearly_Variance_Fields = {
  __typename?: 'analytics_tmp_affiliate_earnings_yearly_variance_fields';
  sales_count?: Maybe<Scalars['Float']['output']>;
  total_earned?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "blocks" */
export type Blocks = {
  __typename?: 'blocks';
  synced_height: Scalars['bigint']['output'];
  synced_height_tmp?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "blocks" */
export type Blocks_Aggregate = {
  __typename?: 'blocks_aggregate';
  aggregate?: Maybe<Blocks_Aggregate_Fields>;
  nodes: Array<Blocks>;
};

/** aggregate fields of "blocks" */
export type Blocks_Aggregate_Fields = {
  __typename?: 'blocks_aggregate_fields';
  avg?: Maybe<Blocks_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Blocks_Max_Fields>;
  min?: Maybe<Blocks_Min_Fields>;
  stddev?: Maybe<Blocks_Stddev_Fields>;
  stddev_pop?: Maybe<Blocks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Blocks_Stddev_Samp_Fields>;
  sum?: Maybe<Blocks_Sum_Fields>;
  var_pop?: Maybe<Blocks_Var_Pop_Fields>;
  var_samp?: Maybe<Blocks_Var_Samp_Fields>;
  variance?: Maybe<Blocks_Variance_Fields>;
};


/** aggregate fields of "blocks" */
export type Blocks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Blocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Blocks_Avg_Fields = {
  __typename?: 'blocks_avg_fields';
  synced_height?: Maybe<Scalars['Float']['output']>;
  synced_height_tmp?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "blocks". All fields are combined with a logical 'AND'. */
export type Blocks_Bool_Exp = {
  _and?: InputMaybe<Array<Blocks_Bool_Exp>>;
  _not?: InputMaybe<Blocks_Bool_Exp>;
  _or?: InputMaybe<Array<Blocks_Bool_Exp>>;
  synced_height?: InputMaybe<Bigint_Comparison_Exp>;
  synced_height_tmp?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Blocks_Max_Fields = {
  __typename?: 'blocks_max_fields';
  synced_height?: Maybe<Scalars['bigint']['output']>;
  synced_height_tmp?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Blocks_Min_Fields = {
  __typename?: 'blocks_min_fields';
  synced_height?: Maybe<Scalars['bigint']['output']>;
  synced_height_tmp?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "blocks". */
export type Blocks_Order_By = {
  synced_height?: InputMaybe<Order_By>;
  synced_height_tmp?: InputMaybe<Order_By>;
};

/** select columns of table "blocks" */
export enum Blocks_Select_Column {
  /** column name */
  SyncedHeight = 'synced_height',
  /** column name */
  SyncedHeightTmp = 'synced_height_tmp'
}

/** aggregate stddev on columns */
export type Blocks_Stddev_Fields = {
  __typename?: 'blocks_stddev_fields';
  synced_height?: Maybe<Scalars['Float']['output']>;
  synced_height_tmp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Blocks_Stddev_Pop_Fields = {
  __typename?: 'blocks_stddev_pop_fields';
  synced_height?: Maybe<Scalars['Float']['output']>;
  synced_height_tmp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Blocks_Stddev_Samp_Fields = {
  __typename?: 'blocks_stddev_samp_fields';
  synced_height?: Maybe<Scalars['Float']['output']>;
  synced_height_tmp?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "blocks" */
export type Blocks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Blocks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Blocks_Stream_Cursor_Value_Input = {
  synced_height?: InputMaybe<Scalars['bigint']['input']>;
  synced_height_tmp?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Blocks_Sum_Fields = {
  __typename?: 'blocks_sum_fields';
  synced_height?: Maybe<Scalars['bigint']['output']>;
  synced_height_tmp?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Blocks_Var_Pop_Fields = {
  __typename?: 'blocks_var_pop_fields';
  synced_height?: Maybe<Scalars['Float']['output']>;
  synced_height_tmp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Blocks_Var_Samp_Fields = {
  __typename?: 'blocks_var_samp_fields';
  synced_height?: Maybe<Scalars['Float']['output']>;
  synced_height_tmp?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Blocks_Variance_Fields = {
  __typename?: 'blocks_variance_fields';
  synced_height?: Maybe<Scalars['Float']['output']>;
  synced_height_tmp?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** launchpad_contractsNative Query Arguments */
export type Launchpad_Contracts_Arguments = {
  /** Native Query argument minter_id */
  minter_id: Scalars['String']['input'];
};

export type Launchpad_Contracts_Model = {
  __typename?: 'launchpad_contracts_model';
  minted_timestamp: Scalars['timestamp']['output'];
  nft_contract_id: Scalars['String']['output'];
  owner_id: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the logical model for "launchpad_contracts_model". All fields are combined with a logical 'AND'. */
export type Launchpad_Contracts_Model_Bool_Exp_Bool_Exp = {
  _and?: InputMaybe<Array<Launchpad_Contracts_Model_Bool_Exp_Bool_Exp>>;
  _not?: InputMaybe<Launchpad_Contracts_Model_Bool_Exp_Bool_Exp>;
  _or?: InputMaybe<Array<Launchpad_Contracts_Model_Bool_Exp_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  minted_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<String_Comparison_Exp>;
};

export enum Launchpad_Contracts_Model_Enum_Name {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  MintedTimestamp = 'minted_timestamp',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  OwnerId = 'owner_id'
}

/** Ordering options when selecting data from "launchpad_contracts_model". */
export type Launchpad_Contracts_Model_Order_By = {
  created_at?: InputMaybe<Order_By>;
  minted_timestamp?: InputMaybe<Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "mb_store_minters" */
export type Mb_Store_Minters = {
  __typename?: 'mb_store_minters';
  minter_id: Scalars['String']['output'];
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_id: Scalars['String']['output'];
  /** An object relationship */
  nft_contracts?: Maybe<Nft_Contracts>;
};

/** aggregated selection of "mb_store_minters" */
export type Mb_Store_Minters_Aggregate = {
  __typename?: 'mb_store_minters_aggregate';
  aggregate?: Maybe<Mb_Store_Minters_Aggregate_Fields>;
  nodes: Array<Mb_Store_Minters>;
};

/** aggregate fields of "mb_store_minters" */
export type Mb_Store_Minters_Aggregate_Fields = {
  __typename?: 'mb_store_minters_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Mb_Store_Minters_Max_Fields>;
  min?: Maybe<Mb_Store_Minters_Min_Fields>;
};


/** aggregate fields of "mb_store_minters" */
export type Mb_Store_Minters_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mb_Store_Minters_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "mb_store_minters". All fields are combined with a logical 'AND'. */
export type Mb_Store_Minters_Bool_Exp = {
  _and?: InputMaybe<Array<Mb_Store_Minters_Bool_Exp>>;
  _not?: InputMaybe<Mb_Store_Minters_Bool_Exp>;
  _or?: InputMaybe<Array<Mb_Store_Minters_Bool_Exp>>;
  minter_id?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  nft_contracts?: InputMaybe<Nft_Contracts_Bool_Exp>;
};

/** aggregate max on columns */
export type Mb_Store_Minters_Max_Fields = {
  __typename?: 'mb_store_minters_max_fields';
  minter_id?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Mb_Store_Minters_Min_Fields = {
  __typename?: 'mb_store_minters_min_fields';
  minter_id?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "mb_store_minters". */
export type Mb_Store_Minters_Order_By = {
  minter_id?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_contracts?: InputMaybe<Nft_Contracts_Order_By>;
};

/** select columns of table "mb_store_minters" */
export enum Mb_Store_Minters_Select_Column {
  /** column name */
  MinterId = 'minter_id',
  /** column name */
  NftContractId = 'nft_contract_id'
}

/** Streaming cursor of the table "mb_store_minters" */
export type Mb_Store_Minters_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mb_Store_Minters_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mb_Store_Minters_Stream_Cursor_Value_Input = {
  minter_id?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "mb_views.active_listings" */
export type Mb_Views_Active_Listings = {
  __typename?: 'mb_views_active_listings';
  approval_id?: Maybe<Scalars['numeric']['output']>;
  base_uri?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  offers: Array<Nft_Offers>;
  /** An aggregate relationship */
  offers_aggregate: Nft_Offers_Aggregate;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_blob?: Maybe<Scalars['jsonb']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  token?: Maybe<Mb_Views_Nft_Tokens>;
  token_id?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "mb_views.active_listings" */
export type Mb_Views_Active_ListingsOffersArgs = {
  distinct_on?: InputMaybe<Array<Nft_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Offers_Order_By>>;
  where?: InputMaybe<Nft_Offers_Bool_Exp>;
};


/** columns and relationships of "mb_views.active_listings" */
export type Mb_Views_Active_ListingsOffers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Offers_Order_By>>;
  where?: InputMaybe<Nft_Offers_Bool_Exp>;
};


/** columns and relationships of "mb_views.active_listings" */
export type Mb_Views_Active_ListingsReference_BlobArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "mb_views.active_listings" */
export type Mb_Views_Active_Listings_Aggregate = {
  __typename?: 'mb_views_active_listings_aggregate';
  aggregate?: Maybe<Mb_Views_Active_Listings_Aggregate_Fields>;
  nodes: Array<Mb_Views_Active_Listings>;
};

export type Mb_Views_Active_Listings_Aggregate_Bool_Exp = {
  count?: InputMaybe<Mb_Views_Active_Listings_Aggregate_Bool_Exp_Count>;
};

export type Mb_Views_Active_Listings_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Mb_Views_Active_Listings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Mb_Views_Active_Listings_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "mb_views.active_listings" */
export type Mb_Views_Active_Listings_Aggregate_Fields = {
  __typename?: 'mb_views_active_listings_aggregate_fields';
  avg?: Maybe<Mb_Views_Active_Listings_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Mb_Views_Active_Listings_Max_Fields>;
  min?: Maybe<Mb_Views_Active_Listings_Min_Fields>;
  stddev?: Maybe<Mb_Views_Active_Listings_Stddev_Fields>;
  stddev_pop?: Maybe<Mb_Views_Active_Listings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mb_Views_Active_Listings_Stddev_Samp_Fields>;
  sum?: Maybe<Mb_Views_Active_Listings_Sum_Fields>;
  var_pop?: Maybe<Mb_Views_Active_Listings_Var_Pop_Fields>;
  var_samp?: Maybe<Mb_Views_Active_Listings_Var_Samp_Fields>;
  variance?: Maybe<Mb_Views_Active_Listings_Variance_Fields>;
};


/** aggregate fields of "mb_views.active_listings" */
export type Mb_Views_Active_Listings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mb_Views_Active_Listings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "mb_views.active_listings" */
export type Mb_Views_Active_Listings_Aggregate_Order_By = {
  avg?: InputMaybe<Mb_Views_Active_Listings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Mb_Views_Active_Listings_Max_Order_By>;
  min?: InputMaybe<Mb_Views_Active_Listings_Min_Order_By>;
  stddev?: InputMaybe<Mb_Views_Active_Listings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Mb_Views_Active_Listings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Mb_Views_Active_Listings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Mb_Views_Active_Listings_Sum_Order_By>;
  var_pop?: InputMaybe<Mb_Views_Active_Listings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Mb_Views_Active_Listings_Var_Samp_Order_By>;
  variance?: InputMaybe<Mb_Views_Active_Listings_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Mb_Views_Active_Listings_Avg_Fields = {
  __typename?: 'mb_views_active_listings_avg_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "mb_views.active_listings" */
export type Mb_Views_Active_Listings_Avg_Order_By = {
  approval_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "mb_views.active_listings". All fields are combined with a logical 'AND'. */
export type Mb_Views_Active_Listings_Bool_Exp = {
  _and?: InputMaybe<Array<Mb_Views_Active_Listings_Bool_Exp>>;
  _not?: InputMaybe<Mb_Views_Active_Listings_Bool_Exp>;
  _or?: InputMaybe<Array<Mb_Views_Active_Listings_Bool_Exp>>;
  approval_id?: InputMaybe<Numeric_Comparison_Exp>;
  base_uri?: InputMaybe<String_Comparison_Exp>;
  content_flag?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  extra?: InputMaybe<String_Comparison_Exp>;
  kind?: InputMaybe<String_Comparison_Exp>;
  listed_by?: InputMaybe<String_Comparison_Exp>;
  market_id?: InputMaybe<String_Comparison_Exp>;
  media?: InputMaybe<String_Comparison_Exp>;
  metadata_id?: InputMaybe<String_Comparison_Exp>;
  minter?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  offers?: InputMaybe<Nft_Offers_Bool_Exp>;
  offers_aggregate?: InputMaybe<Nft_Offers_Aggregate_Bool_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  receipt_id?: InputMaybe<String_Comparison_Exp>;
  reference?: InputMaybe<String_Comparison_Exp>;
  reference_blob?: InputMaybe<Jsonb_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<Mb_Views_Nft_Tokens_Bool_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "mb_views.active_listings_by_contract" */
export type Mb_Views_Active_Listings_By_Contract = {
  __typename?: 'mb_views_active_listings_by_contract';
  approval_id?: Maybe<Scalars['numeric']['output']>;
  base_uri?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  offers: Array<Nft_Offers>;
  /** An aggregate relationship */
  offers_aggregate: Nft_Offers_Aggregate;
  price?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  token?: Maybe<Mb_Views_Nft_Tokens>;
  token_id?: Maybe<Scalars['String']['output']>;
  total_listings?: Maybe<Scalars['bigint']['output']>;
};


/** columns and relationships of "mb_views.active_listings_by_contract" */
export type Mb_Views_Active_Listings_By_ContractOffersArgs = {
  distinct_on?: InputMaybe<Array<Nft_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Offers_Order_By>>;
  where?: InputMaybe<Nft_Offers_Bool_Exp>;
};


/** columns and relationships of "mb_views.active_listings_by_contract" */
export type Mb_Views_Active_Listings_By_ContractOffers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Offers_Order_By>>;
  where?: InputMaybe<Nft_Offers_Bool_Exp>;
};

/** aggregated selection of "mb_views.active_listings_by_contract" */
export type Mb_Views_Active_Listings_By_Contract_Aggregate = {
  __typename?: 'mb_views_active_listings_by_contract_aggregate';
  aggregate?: Maybe<Mb_Views_Active_Listings_By_Contract_Aggregate_Fields>;
  nodes: Array<Mb_Views_Active_Listings_By_Contract>;
};

/** aggregate fields of "mb_views.active_listings_by_contract" */
export type Mb_Views_Active_Listings_By_Contract_Aggregate_Fields = {
  __typename?: 'mb_views_active_listings_by_contract_aggregate_fields';
  avg?: Maybe<Mb_Views_Active_Listings_By_Contract_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Mb_Views_Active_Listings_By_Contract_Max_Fields>;
  min?: Maybe<Mb_Views_Active_Listings_By_Contract_Min_Fields>;
  stddev?: Maybe<Mb_Views_Active_Listings_By_Contract_Stddev_Fields>;
  stddev_pop?: Maybe<Mb_Views_Active_Listings_By_Contract_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mb_Views_Active_Listings_By_Contract_Stddev_Samp_Fields>;
  sum?: Maybe<Mb_Views_Active_Listings_By_Contract_Sum_Fields>;
  var_pop?: Maybe<Mb_Views_Active_Listings_By_Contract_Var_Pop_Fields>;
  var_samp?: Maybe<Mb_Views_Active_Listings_By_Contract_Var_Samp_Fields>;
  variance?: Maybe<Mb_Views_Active_Listings_By_Contract_Variance_Fields>;
};


/** aggregate fields of "mb_views.active_listings_by_contract" */
export type Mb_Views_Active_Listings_By_Contract_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mb_Views_Active_Listings_By_Contract_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Mb_Views_Active_Listings_By_Contract_Avg_Fields = {
  __typename?: 'mb_views_active_listings_by_contract_avg_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  total_listings?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "mb_views.active_listings_by_contract". All fields are combined with a logical 'AND'. */
export type Mb_Views_Active_Listings_By_Contract_Bool_Exp = {
  _and?: InputMaybe<Array<Mb_Views_Active_Listings_By_Contract_Bool_Exp>>;
  _not?: InputMaybe<Mb_Views_Active_Listings_By_Contract_Bool_Exp>;
  _or?: InputMaybe<Array<Mb_Views_Active_Listings_By_Contract_Bool_Exp>>;
  approval_id?: InputMaybe<Numeric_Comparison_Exp>;
  base_uri?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  listed_by?: InputMaybe<String_Comparison_Exp>;
  market_id?: InputMaybe<String_Comparison_Exp>;
  media?: InputMaybe<String_Comparison_Exp>;
  metadata_id?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  offers?: InputMaybe<Nft_Offers_Bool_Exp>;
  offers_aggregate?: InputMaybe<Nft_Offers_Aggregate_Bool_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<Mb_Views_Nft_Tokens_Bool_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  total_listings?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Mb_Views_Active_Listings_By_Contract_Max_Fields = {
  __typename?: 'mb_views_active_listings_by_contract_max_fields';
  approval_id?: Maybe<Scalars['numeric']['output']>;
  base_uri?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  total_listings?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Mb_Views_Active_Listings_By_Contract_Min_Fields = {
  __typename?: 'mb_views_active_listings_by_contract_min_fields';
  approval_id?: Maybe<Scalars['numeric']['output']>;
  base_uri?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  total_listings?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "mb_views.active_listings_by_contract". */
export type Mb_Views_Active_Listings_By_Contract_Order_By = {
  approval_id?: InputMaybe<Order_By>;
  base_uri?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  listed_by?: InputMaybe<Order_By>;
  market_id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  offers_aggregate?: InputMaybe<Nft_Offers_Aggregate_Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token?: InputMaybe<Mb_Views_Nft_Tokens_Order_By>;
  token_id?: InputMaybe<Order_By>;
  total_listings?: InputMaybe<Order_By>;
};

/** select columns of table "mb_views.active_listings_by_contract" */
export enum Mb_Views_Active_Listings_By_Contract_Select_Column {
  /** column name */
  ApprovalId = 'approval_id',
  /** column name */
  BaseUri = 'base_uri',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  ListedBy = 'listed_by',
  /** column name */
  MarketId = 'market_id',
  /** column name */
  Media = 'media',
  /** column name */
  MetadataId = 'metadata_id',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  Price = 'price',
  /** column name */
  Title = 'title',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  TotalListings = 'total_listings'
}

/** aggregate stddev on columns */
export type Mb_Views_Active_Listings_By_Contract_Stddev_Fields = {
  __typename?: 'mb_views_active_listings_by_contract_stddev_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  total_listings?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Mb_Views_Active_Listings_By_Contract_Stddev_Pop_Fields = {
  __typename?: 'mb_views_active_listings_by_contract_stddev_pop_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  total_listings?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Mb_Views_Active_Listings_By_Contract_Stddev_Samp_Fields = {
  __typename?: 'mb_views_active_listings_by_contract_stddev_samp_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  total_listings?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "mb_views_active_listings_by_contract" */
export type Mb_Views_Active_Listings_By_Contract_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mb_Views_Active_Listings_By_Contract_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mb_Views_Active_Listings_By_Contract_Stream_Cursor_Value_Input = {
  approval_id?: InputMaybe<Scalars['numeric']['input']>;
  base_uri?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  listed_by?: InputMaybe<Scalars['String']['input']>;
  market_id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  metadata_id?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
  total_listings?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Mb_Views_Active_Listings_By_Contract_Sum_Fields = {
  __typename?: 'mb_views_active_listings_by_contract_sum_fields';
  approval_id?: Maybe<Scalars['numeric']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  total_listings?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Mb_Views_Active_Listings_By_Contract_Var_Pop_Fields = {
  __typename?: 'mb_views_active_listings_by_contract_var_pop_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  total_listings?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Mb_Views_Active_Listings_By_Contract_Var_Samp_Fields = {
  __typename?: 'mb_views_active_listings_by_contract_var_samp_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  total_listings?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Mb_Views_Active_Listings_By_Contract_Variance_Fields = {
  __typename?: 'mb_views_active_listings_by_contract_variance_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  total_listings?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Mb_Views_Active_Listings_Max_Fields = {
  __typename?: 'mb_views_active_listings_max_fields';
  approval_id?: Maybe<Scalars['numeric']['output']>;
  base_uri?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "mb_views.active_listings" */
export type Mb_Views_Active_Listings_Max_Order_By = {
  approval_id?: InputMaybe<Order_By>;
  base_uri?: InputMaybe<Order_By>;
  content_flag?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  extra?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  listed_by?: InputMaybe<Order_By>;
  market_id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  minter?: InputMaybe<Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
  reference?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Mb_Views_Active_Listings_Min_Fields = {
  __typename?: 'mb_views_active_listings_min_fields';
  approval_id?: Maybe<Scalars['numeric']['output']>;
  base_uri?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "mb_views.active_listings" */
export type Mb_Views_Active_Listings_Min_Order_By = {
  approval_id?: InputMaybe<Order_By>;
  base_uri?: InputMaybe<Order_By>;
  content_flag?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  extra?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  listed_by?: InputMaybe<Order_By>;
  market_id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  minter?: InputMaybe<Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
  reference?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "mb_views.active_listings". */
export type Mb_Views_Active_Listings_Order_By = {
  approval_id?: InputMaybe<Order_By>;
  base_uri?: InputMaybe<Order_By>;
  content_flag?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  extra?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  listed_by?: InputMaybe<Order_By>;
  market_id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  minter?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  offers_aggregate?: InputMaybe<Nft_Offers_Aggregate_Order_By>;
  price?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
  reference?: InputMaybe<Order_By>;
  reference_blob?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token?: InputMaybe<Mb_Views_Nft_Tokens_Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "mb_views.active_listings_rollup" */
export type Mb_Views_Active_Listings_Rollup = {
  __typename?: 'mb_views_active_listings_rollup';
  approval_id?: Maybe<Scalars['numeric']['output']>;
  base_uri?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_blob?: Maybe<Scalars['jsonb']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "mb_views.active_listings_rollup" */
export type Mb_Views_Active_Listings_RollupReference_BlobArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "mb_views.active_listings_rollup" */
export type Mb_Views_Active_Listings_Rollup_Aggregate = {
  __typename?: 'mb_views_active_listings_rollup_aggregate';
  aggregate?: Maybe<Mb_Views_Active_Listings_Rollup_Aggregate_Fields>;
  nodes: Array<Mb_Views_Active_Listings_Rollup>;
};

/** aggregate fields of "mb_views.active_listings_rollup" */
export type Mb_Views_Active_Listings_Rollup_Aggregate_Fields = {
  __typename?: 'mb_views_active_listings_rollup_aggregate_fields';
  avg?: Maybe<Mb_Views_Active_Listings_Rollup_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Mb_Views_Active_Listings_Rollup_Max_Fields>;
  min?: Maybe<Mb_Views_Active_Listings_Rollup_Min_Fields>;
  stddev?: Maybe<Mb_Views_Active_Listings_Rollup_Stddev_Fields>;
  stddev_pop?: Maybe<Mb_Views_Active_Listings_Rollup_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mb_Views_Active_Listings_Rollup_Stddev_Samp_Fields>;
  sum?: Maybe<Mb_Views_Active_Listings_Rollup_Sum_Fields>;
  var_pop?: Maybe<Mb_Views_Active_Listings_Rollup_Var_Pop_Fields>;
  var_samp?: Maybe<Mb_Views_Active_Listings_Rollup_Var_Samp_Fields>;
  variance?: Maybe<Mb_Views_Active_Listings_Rollup_Variance_Fields>;
};


/** aggregate fields of "mb_views.active_listings_rollup" */
export type Mb_Views_Active_Listings_Rollup_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mb_Views_Active_Listings_Rollup_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Mb_Views_Active_Listings_Rollup_Avg_Fields = {
  __typename?: 'mb_views_active_listings_rollup_avg_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "mb_views.active_listings_rollup". All fields are combined with a logical 'AND'. */
export type Mb_Views_Active_Listings_Rollup_Bool_Exp = {
  _and?: InputMaybe<Array<Mb_Views_Active_Listings_Rollup_Bool_Exp>>;
  _not?: InputMaybe<Mb_Views_Active_Listings_Rollup_Bool_Exp>;
  _or?: InputMaybe<Array<Mb_Views_Active_Listings_Rollup_Bool_Exp>>;
  approval_id?: InputMaybe<Numeric_Comparison_Exp>;
  base_uri?: InputMaybe<String_Comparison_Exp>;
  content_flag?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  extra?: InputMaybe<String_Comparison_Exp>;
  kind?: InputMaybe<String_Comparison_Exp>;
  listed_by?: InputMaybe<String_Comparison_Exp>;
  market_id?: InputMaybe<String_Comparison_Exp>;
  media?: InputMaybe<String_Comparison_Exp>;
  metadata_id?: InputMaybe<String_Comparison_Exp>;
  minter?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  receipt_id?: InputMaybe<String_Comparison_Exp>;
  reference?: InputMaybe<String_Comparison_Exp>;
  reference_blob?: InputMaybe<Jsonb_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Mb_Views_Active_Listings_Rollup_Max_Fields = {
  __typename?: 'mb_views_active_listings_rollup_max_fields';
  approval_id?: Maybe<Scalars['numeric']['output']>;
  base_uri?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Mb_Views_Active_Listings_Rollup_Min_Fields = {
  __typename?: 'mb_views_active_listings_rollup_min_fields';
  approval_id?: Maybe<Scalars['numeric']['output']>;
  base_uri?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "mb_views.active_listings_rollup". */
export type Mb_Views_Active_Listings_Rollup_Order_By = {
  approval_id?: InputMaybe<Order_By>;
  base_uri?: InputMaybe<Order_By>;
  content_flag?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  extra?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  listed_by?: InputMaybe<Order_By>;
  market_id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  minter?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
  reference?: InputMaybe<Order_By>;
  reference_blob?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "mb_views.active_listings_rollup" */
export enum Mb_Views_Active_Listings_Rollup_Select_Column {
  /** column name */
  ApprovalId = 'approval_id',
  /** column name */
  BaseUri = 'base_uri',
  /** column name */
  ContentFlag = 'content_flag',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  Extra = 'extra',
  /** column name */
  Kind = 'kind',
  /** column name */
  ListedBy = 'listed_by',
  /** column name */
  MarketId = 'market_id',
  /** column name */
  Media = 'media',
  /** column name */
  MetadataId = 'metadata_id',
  /** column name */
  Minter = 'minter',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  Price = 'price',
  /** column name */
  ReceiptId = 'receipt_id',
  /** column name */
  Reference = 'reference',
  /** column name */
  ReferenceBlob = 'reference_blob',
  /** column name */
  Title = 'title',
  /** column name */
  TokenId = 'token_id'
}

/** aggregate stddev on columns */
export type Mb_Views_Active_Listings_Rollup_Stddev_Fields = {
  __typename?: 'mb_views_active_listings_rollup_stddev_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Mb_Views_Active_Listings_Rollup_Stddev_Pop_Fields = {
  __typename?: 'mb_views_active_listings_rollup_stddev_pop_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Mb_Views_Active_Listings_Rollup_Stddev_Samp_Fields = {
  __typename?: 'mb_views_active_listings_rollup_stddev_samp_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "mb_views_active_listings_rollup" */
export type Mb_Views_Active_Listings_Rollup_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mb_Views_Active_Listings_Rollup_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mb_Views_Active_Listings_Rollup_Stream_Cursor_Value_Input = {
  approval_id?: InputMaybe<Scalars['numeric']['input']>;
  base_uri?: InputMaybe<Scalars['String']['input']>;
  content_flag?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  listed_by?: InputMaybe<Scalars['String']['input']>;
  market_id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  metadata_id?: InputMaybe<Scalars['String']['input']>;
  minter?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  receipt_id?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  reference_blob?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Mb_Views_Active_Listings_Rollup_Sum_Fields = {
  __typename?: 'mb_views_active_listings_rollup_sum_fields';
  approval_id?: Maybe<Scalars['numeric']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Mb_Views_Active_Listings_Rollup_Var_Pop_Fields = {
  __typename?: 'mb_views_active_listings_rollup_var_pop_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Mb_Views_Active_Listings_Rollup_Var_Samp_Fields = {
  __typename?: 'mb_views_active_listings_rollup_var_samp_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Mb_Views_Active_Listings_Rollup_Variance_Fields = {
  __typename?: 'mb_views_active_listings_rollup_variance_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** select columns of table "mb_views.active_listings" */
export enum Mb_Views_Active_Listings_Select_Column {
  /** column name */
  ApprovalId = 'approval_id',
  /** column name */
  BaseUri = 'base_uri',
  /** column name */
  ContentFlag = 'content_flag',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  Extra = 'extra',
  /** column name */
  Kind = 'kind',
  /** column name */
  ListedBy = 'listed_by',
  /** column name */
  MarketId = 'market_id',
  /** column name */
  Media = 'media',
  /** column name */
  MetadataId = 'metadata_id',
  /** column name */
  Minter = 'minter',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  Price = 'price',
  /** column name */
  ReceiptId = 'receipt_id',
  /** column name */
  Reference = 'reference',
  /** column name */
  ReferenceBlob = 'reference_blob',
  /** column name */
  Title = 'title',
  /** column name */
  TokenId = 'token_id'
}

/** aggregate stddev on columns */
export type Mb_Views_Active_Listings_Stddev_Fields = {
  __typename?: 'mb_views_active_listings_stddev_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "mb_views.active_listings" */
export type Mb_Views_Active_Listings_Stddev_Order_By = {
  approval_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Mb_Views_Active_Listings_Stddev_Pop_Fields = {
  __typename?: 'mb_views_active_listings_stddev_pop_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "mb_views.active_listings" */
export type Mb_Views_Active_Listings_Stddev_Pop_Order_By = {
  approval_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Mb_Views_Active_Listings_Stddev_Samp_Fields = {
  __typename?: 'mb_views_active_listings_stddev_samp_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "mb_views.active_listings" */
export type Mb_Views_Active_Listings_Stddev_Samp_Order_By = {
  approval_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "mb_views_active_listings" */
export type Mb_Views_Active_Listings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mb_Views_Active_Listings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mb_Views_Active_Listings_Stream_Cursor_Value_Input = {
  approval_id?: InputMaybe<Scalars['numeric']['input']>;
  base_uri?: InputMaybe<Scalars['String']['input']>;
  content_flag?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  listed_by?: InputMaybe<Scalars['String']['input']>;
  market_id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  metadata_id?: InputMaybe<Scalars['String']['input']>;
  minter?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  receipt_id?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  reference_blob?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Mb_Views_Active_Listings_Sum_Fields = {
  __typename?: 'mb_views_active_listings_sum_fields';
  approval_id?: Maybe<Scalars['numeric']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "mb_views.active_listings" */
export type Mb_Views_Active_Listings_Sum_Order_By = {
  approval_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Mb_Views_Active_Listings_Var_Pop_Fields = {
  __typename?: 'mb_views_active_listings_var_pop_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "mb_views.active_listings" */
export type Mb_Views_Active_Listings_Var_Pop_Order_By = {
  approval_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Mb_Views_Active_Listings_Var_Samp_Fields = {
  __typename?: 'mb_views_active_listings_var_samp_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "mb_views.active_listings" */
export type Mb_Views_Active_Listings_Var_Samp_Order_By = {
  approval_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Mb_Views_Active_Listings_Variance_Fields = {
  __typename?: 'mb_views_active_listings_variance_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "mb_views.active_listings" */
export type Mb_Views_Active_Listings_Variance_Order_By = {
  approval_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** columns and relationships of "mb_views.auctions_with_offer" */
export type Mb_Views_Auctions_With_Offer = {
  __typename?: 'mb_views_auctions_with_offer';
  approval_id?: Maybe<Scalars['numeric']['output']>;
  base_uri?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  listing_accepted_at?: Maybe<Scalars['timestamp']['output']>;
  listing_invalidated_at?: Maybe<Scalars['timestamp']['output']>;
  listing_receipt_id?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_token?: Maybe<Mb_Views_Nft_Tokens>;
  offer_accepted_at?: Maybe<Scalars['timestamp']['output']>;
  offer_expires_at?: Maybe<Scalars['timestamp']['output']>;
  offer_id?: Maybe<Scalars['bigint']['output']>;
  offer_price?: Maybe<Scalars['numeric']['output']>;
  offer_receipt_id?: Maybe<Scalars['String']['output']>;
  offer_withdrawn_at?: Maybe<Scalars['timestamp']['output']>;
  offered_at?: Maybe<Scalars['timestamp']['output']>;
  offered_by?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_blob?: Maybe<Scalars['jsonb']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  unlisted_at?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "mb_views.auctions_with_offer" */
export type Mb_Views_Auctions_With_OfferReference_BlobArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "mb_views.auctions_with_offer" */
export type Mb_Views_Auctions_With_Offer_Aggregate = {
  __typename?: 'mb_views_auctions_with_offer_aggregate';
  aggregate?: Maybe<Mb_Views_Auctions_With_Offer_Aggregate_Fields>;
  nodes: Array<Mb_Views_Auctions_With_Offer>;
};

/** aggregate fields of "mb_views.auctions_with_offer" */
export type Mb_Views_Auctions_With_Offer_Aggregate_Fields = {
  __typename?: 'mb_views_auctions_with_offer_aggregate_fields';
  avg?: Maybe<Mb_Views_Auctions_With_Offer_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Mb_Views_Auctions_With_Offer_Max_Fields>;
  min?: Maybe<Mb_Views_Auctions_With_Offer_Min_Fields>;
  stddev?: Maybe<Mb_Views_Auctions_With_Offer_Stddev_Fields>;
  stddev_pop?: Maybe<Mb_Views_Auctions_With_Offer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mb_Views_Auctions_With_Offer_Stddev_Samp_Fields>;
  sum?: Maybe<Mb_Views_Auctions_With_Offer_Sum_Fields>;
  var_pop?: Maybe<Mb_Views_Auctions_With_Offer_Var_Pop_Fields>;
  var_samp?: Maybe<Mb_Views_Auctions_With_Offer_Var_Samp_Fields>;
  variance?: Maybe<Mb_Views_Auctions_With_Offer_Variance_Fields>;
};


/** aggregate fields of "mb_views.auctions_with_offer" */
export type Mb_Views_Auctions_With_Offer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mb_Views_Auctions_With_Offer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Mb_Views_Auctions_With_Offer_Avg_Fields = {
  __typename?: 'mb_views_auctions_with_offer_avg_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  offer_price?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "mb_views.auctions_with_offer". All fields are combined with a logical 'AND'. */
export type Mb_Views_Auctions_With_Offer_Bool_Exp = {
  _and?: InputMaybe<Array<Mb_Views_Auctions_With_Offer_Bool_Exp>>;
  _not?: InputMaybe<Mb_Views_Auctions_With_Offer_Bool_Exp>;
  _or?: InputMaybe<Array<Mb_Views_Auctions_With_Offer_Bool_Exp>>;
  approval_id?: InputMaybe<Numeric_Comparison_Exp>;
  base_uri?: InputMaybe<String_Comparison_Exp>;
  content_flag?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  extra?: InputMaybe<String_Comparison_Exp>;
  kind?: InputMaybe<String_Comparison_Exp>;
  listed_by?: InputMaybe<String_Comparison_Exp>;
  listing_accepted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  listing_invalidated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  listing_receipt_id?: InputMaybe<String_Comparison_Exp>;
  market_id?: InputMaybe<String_Comparison_Exp>;
  media?: InputMaybe<String_Comparison_Exp>;
  metadata_id?: InputMaybe<String_Comparison_Exp>;
  minter?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  nft_token?: InputMaybe<Mb_Views_Nft_Tokens_Bool_Exp>;
  offer_accepted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  offer_expires_at?: InputMaybe<Timestamp_Comparison_Exp>;
  offer_id?: InputMaybe<Bigint_Comparison_Exp>;
  offer_price?: InputMaybe<Numeric_Comparison_Exp>;
  offer_receipt_id?: InputMaybe<String_Comparison_Exp>;
  offer_withdrawn_at?: InputMaybe<Timestamp_Comparison_Exp>;
  offered_at?: InputMaybe<Timestamp_Comparison_Exp>;
  offered_by?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  reference?: InputMaybe<String_Comparison_Exp>;
  reference_blob?: InputMaybe<Jsonb_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  unlisted_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Mb_Views_Auctions_With_Offer_Max_Fields = {
  __typename?: 'mb_views_auctions_with_offer_max_fields';
  approval_id?: Maybe<Scalars['numeric']['output']>;
  base_uri?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  listing_accepted_at?: Maybe<Scalars['timestamp']['output']>;
  listing_invalidated_at?: Maybe<Scalars['timestamp']['output']>;
  listing_receipt_id?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  offer_accepted_at?: Maybe<Scalars['timestamp']['output']>;
  offer_expires_at?: Maybe<Scalars['timestamp']['output']>;
  offer_id?: Maybe<Scalars['bigint']['output']>;
  offer_price?: Maybe<Scalars['numeric']['output']>;
  offer_receipt_id?: Maybe<Scalars['String']['output']>;
  offer_withdrawn_at?: Maybe<Scalars['timestamp']['output']>;
  offered_at?: Maybe<Scalars['timestamp']['output']>;
  offered_by?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  unlisted_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Mb_Views_Auctions_With_Offer_Min_Fields = {
  __typename?: 'mb_views_auctions_with_offer_min_fields';
  approval_id?: Maybe<Scalars['numeric']['output']>;
  base_uri?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  listing_accepted_at?: Maybe<Scalars['timestamp']['output']>;
  listing_invalidated_at?: Maybe<Scalars['timestamp']['output']>;
  listing_receipt_id?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  offer_accepted_at?: Maybe<Scalars['timestamp']['output']>;
  offer_expires_at?: Maybe<Scalars['timestamp']['output']>;
  offer_id?: Maybe<Scalars['bigint']['output']>;
  offer_price?: Maybe<Scalars['numeric']['output']>;
  offer_receipt_id?: Maybe<Scalars['String']['output']>;
  offer_withdrawn_at?: Maybe<Scalars['timestamp']['output']>;
  offered_at?: Maybe<Scalars['timestamp']['output']>;
  offered_by?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  unlisted_at?: Maybe<Scalars['timestamp']['output']>;
};

/** Ordering options when selecting data from "mb_views.auctions_with_offer". */
export type Mb_Views_Auctions_With_Offer_Order_By = {
  approval_id?: InputMaybe<Order_By>;
  base_uri?: InputMaybe<Order_By>;
  content_flag?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  extra?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  listed_by?: InputMaybe<Order_By>;
  listing_accepted_at?: InputMaybe<Order_By>;
  listing_invalidated_at?: InputMaybe<Order_By>;
  listing_receipt_id?: InputMaybe<Order_By>;
  market_id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  minter?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_token?: InputMaybe<Mb_Views_Nft_Tokens_Order_By>;
  offer_accepted_at?: InputMaybe<Order_By>;
  offer_expires_at?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  offer_price?: InputMaybe<Order_By>;
  offer_receipt_id?: InputMaybe<Order_By>;
  offer_withdrawn_at?: InputMaybe<Order_By>;
  offered_at?: InputMaybe<Order_By>;
  offered_by?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  reference?: InputMaybe<Order_By>;
  reference_blob?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  unlisted_at?: InputMaybe<Order_By>;
};

/** select columns of table "mb_views.auctions_with_offer" */
export enum Mb_Views_Auctions_With_Offer_Select_Column {
  /** column name */
  ApprovalId = 'approval_id',
  /** column name */
  BaseUri = 'base_uri',
  /** column name */
  ContentFlag = 'content_flag',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  Extra = 'extra',
  /** column name */
  Kind = 'kind',
  /** column name */
  ListedBy = 'listed_by',
  /** column name */
  ListingAcceptedAt = 'listing_accepted_at',
  /** column name */
  ListingInvalidatedAt = 'listing_invalidated_at',
  /** column name */
  ListingReceiptId = 'listing_receipt_id',
  /** column name */
  MarketId = 'market_id',
  /** column name */
  Media = 'media',
  /** column name */
  MetadataId = 'metadata_id',
  /** column name */
  Minter = 'minter',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  OfferAcceptedAt = 'offer_accepted_at',
  /** column name */
  OfferExpiresAt = 'offer_expires_at',
  /** column name */
  OfferId = 'offer_id',
  /** column name */
  OfferPrice = 'offer_price',
  /** column name */
  OfferReceiptId = 'offer_receipt_id',
  /** column name */
  OfferWithdrawnAt = 'offer_withdrawn_at',
  /** column name */
  OfferedAt = 'offered_at',
  /** column name */
  OfferedBy = 'offered_by',
  /** column name */
  Price = 'price',
  /** column name */
  Reference = 'reference',
  /** column name */
  ReferenceBlob = 'reference_blob',
  /** column name */
  Title = 'title',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  UnlistedAt = 'unlisted_at'
}

/** aggregate stddev on columns */
export type Mb_Views_Auctions_With_Offer_Stddev_Fields = {
  __typename?: 'mb_views_auctions_with_offer_stddev_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  offer_price?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Mb_Views_Auctions_With_Offer_Stddev_Pop_Fields = {
  __typename?: 'mb_views_auctions_with_offer_stddev_pop_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  offer_price?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Mb_Views_Auctions_With_Offer_Stddev_Samp_Fields = {
  __typename?: 'mb_views_auctions_with_offer_stddev_samp_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  offer_price?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "mb_views_auctions_with_offer" */
export type Mb_Views_Auctions_With_Offer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mb_Views_Auctions_With_Offer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mb_Views_Auctions_With_Offer_Stream_Cursor_Value_Input = {
  approval_id?: InputMaybe<Scalars['numeric']['input']>;
  base_uri?: InputMaybe<Scalars['String']['input']>;
  content_flag?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  listed_by?: InputMaybe<Scalars['String']['input']>;
  listing_accepted_at?: InputMaybe<Scalars['timestamp']['input']>;
  listing_invalidated_at?: InputMaybe<Scalars['timestamp']['input']>;
  listing_receipt_id?: InputMaybe<Scalars['String']['input']>;
  market_id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  metadata_id?: InputMaybe<Scalars['String']['input']>;
  minter?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  offer_accepted_at?: InputMaybe<Scalars['timestamp']['input']>;
  offer_expires_at?: InputMaybe<Scalars['timestamp']['input']>;
  offer_id?: InputMaybe<Scalars['bigint']['input']>;
  offer_price?: InputMaybe<Scalars['numeric']['input']>;
  offer_receipt_id?: InputMaybe<Scalars['String']['input']>;
  offer_withdrawn_at?: InputMaybe<Scalars['timestamp']['input']>;
  offered_at?: InputMaybe<Scalars['timestamp']['input']>;
  offered_by?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  reference_blob?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
  unlisted_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Mb_Views_Auctions_With_Offer_Sum_Fields = {
  __typename?: 'mb_views_auctions_with_offer_sum_fields';
  approval_id?: Maybe<Scalars['numeric']['output']>;
  offer_id?: Maybe<Scalars['bigint']['output']>;
  offer_price?: Maybe<Scalars['numeric']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Mb_Views_Auctions_With_Offer_Var_Pop_Fields = {
  __typename?: 'mb_views_auctions_with_offer_var_pop_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  offer_price?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Mb_Views_Auctions_With_Offer_Var_Samp_Fields = {
  __typename?: 'mb_views_auctions_with_offer_var_samp_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  offer_price?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Mb_Views_Auctions_With_Offer_Variance_Fields = {
  __typename?: 'mb_views_auctions_with_offer_variance_fields';
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  offer_price?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "mb_views.nft_activities" */
export type Mb_Views_Nft_Activities = {
  __typename?: 'mb_views_nft_activities';
  action_receiver?: Maybe<Scalars['String']['output']>;
  action_sender?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  copies?: Maybe<Scalars['bigint']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_blob?: Maybe<Scalars['jsonb']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  tx_sender?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "mb_views.nft_activities" */
export type Mb_Views_Nft_ActivitiesReference_BlobArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "mb_views.nft_activities" */
export type Mb_Views_Nft_Activities_Aggregate = {
  __typename?: 'mb_views_nft_activities_aggregate';
  aggregate?: Maybe<Mb_Views_Nft_Activities_Aggregate_Fields>;
  nodes: Array<Mb_Views_Nft_Activities>;
};

/** aggregate fields of "mb_views.nft_activities" */
export type Mb_Views_Nft_Activities_Aggregate_Fields = {
  __typename?: 'mb_views_nft_activities_aggregate_fields';
  avg?: Maybe<Mb_Views_Nft_Activities_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Mb_Views_Nft_Activities_Max_Fields>;
  min?: Maybe<Mb_Views_Nft_Activities_Min_Fields>;
  stddev?: Maybe<Mb_Views_Nft_Activities_Stddev_Fields>;
  stddev_pop?: Maybe<Mb_Views_Nft_Activities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mb_Views_Nft_Activities_Stddev_Samp_Fields>;
  sum?: Maybe<Mb_Views_Nft_Activities_Sum_Fields>;
  var_pop?: Maybe<Mb_Views_Nft_Activities_Var_Pop_Fields>;
  var_samp?: Maybe<Mb_Views_Nft_Activities_Var_Samp_Fields>;
  variance?: Maybe<Mb_Views_Nft_Activities_Variance_Fields>;
};


/** aggregate fields of "mb_views.nft_activities" */
export type Mb_Views_Nft_Activities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mb_Views_Nft_Activities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Mb_Views_Nft_Activities_Avg_Fields = {
  __typename?: 'mb_views_nft_activities_avg_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_activities". All fields are combined with a logical 'AND'. */
export type Mb_Views_Nft_Activities_Bool_Exp = {
  _and?: InputMaybe<Array<Mb_Views_Nft_Activities_Bool_Exp>>;
  _not?: InputMaybe<Mb_Views_Nft_Activities_Bool_Exp>;
  _or?: InputMaybe<Array<Mb_Views_Nft_Activities_Bool_Exp>>;
  action_receiver?: InputMaybe<String_Comparison_Exp>;
  action_sender?: InputMaybe<String_Comparison_Exp>;
  content_flag?: InputMaybe<String_Comparison_Exp>;
  copies?: InputMaybe<Bigint_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  extra?: InputMaybe<String_Comparison_Exp>;
  kind?: InputMaybe<String_Comparison_Exp>;
  media?: InputMaybe<String_Comparison_Exp>;
  media_hash?: InputMaybe<String_Comparison_Exp>;
  metadata_id?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  receipt_id?: InputMaybe<String_Comparison_Exp>;
  reference?: InputMaybe<String_Comparison_Exp>;
  reference_blob?: InputMaybe<Jsonb_Comparison_Exp>;
  reference_hash?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  tx_sender?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Mb_Views_Nft_Activities_Max_Fields = {
  __typename?: 'mb_views_nft_activities_max_fields';
  action_receiver?: Maybe<Scalars['String']['output']>;
  action_sender?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  copies?: Maybe<Scalars['bigint']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  tx_sender?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Mb_Views_Nft_Activities_Min_Fields = {
  __typename?: 'mb_views_nft_activities_min_fields';
  action_receiver?: Maybe<Scalars['String']['output']>;
  action_sender?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  copies?: Maybe<Scalars['bigint']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  tx_sender?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "mb_views.nft_activities". */
export type Mb_Views_Nft_Activities_Order_By = {
  action_receiver?: InputMaybe<Order_By>;
  action_sender?: InputMaybe<Order_By>;
  content_flag?: InputMaybe<Order_By>;
  copies?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  extra?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  media_hash?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
  reference?: InputMaybe<Order_By>;
  reference_blob?: InputMaybe<Order_By>;
  reference_hash?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  tx_sender?: InputMaybe<Order_By>;
};

/** columns and relationships of "mb_views.nft_activities_rollup" */
export type Mb_Views_Nft_Activities_Rollup = {
  __typename?: 'mb_views_nft_activities_rollup';
  action_receiver?: Maybe<Scalars['String']['output']>;
  action_sender?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['bigint']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_blob?: Maybe<Scalars['jsonb']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_ids?: Maybe<Array<Scalars['String']['output']>>;
  tx_sender?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "mb_views.nft_activities_rollup" */
export type Mb_Views_Nft_Activities_RollupReference_BlobArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "mb_views.nft_activities_rollup" */
export type Mb_Views_Nft_Activities_Rollup_Aggregate = {
  __typename?: 'mb_views_nft_activities_rollup_aggregate';
  aggregate?: Maybe<Mb_Views_Nft_Activities_Rollup_Aggregate_Fields>;
  nodes: Array<Mb_Views_Nft_Activities_Rollup>;
};

/** aggregate fields of "mb_views.nft_activities_rollup" */
export type Mb_Views_Nft_Activities_Rollup_Aggregate_Fields = {
  __typename?: 'mb_views_nft_activities_rollup_aggregate_fields';
  avg?: Maybe<Mb_Views_Nft_Activities_Rollup_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Mb_Views_Nft_Activities_Rollup_Max_Fields>;
  min?: Maybe<Mb_Views_Nft_Activities_Rollup_Min_Fields>;
  stddev?: Maybe<Mb_Views_Nft_Activities_Rollup_Stddev_Fields>;
  stddev_pop?: Maybe<Mb_Views_Nft_Activities_Rollup_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mb_Views_Nft_Activities_Rollup_Stddev_Samp_Fields>;
  sum?: Maybe<Mb_Views_Nft_Activities_Rollup_Sum_Fields>;
  var_pop?: Maybe<Mb_Views_Nft_Activities_Rollup_Var_Pop_Fields>;
  var_samp?: Maybe<Mb_Views_Nft_Activities_Rollup_Var_Samp_Fields>;
  variance?: Maybe<Mb_Views_Nft_Activities_Rollup_Variance_Fields>;
};


/** aggregate fields of "mb_views.nft_activities_rollup" */
export type Mb_Views_Nft_Activities_Rollup_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mb_Views_Nft_Activities_Rollup_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Mb_Views_Nft_Activities_Rollup_Avg_Fields = {
  __typename?: 'mb_views_nft_activities_rollup_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_activities_rollup". All fields are combined with a logical 'AND'. */
export type Mb_Views_Nft_Activities_Rollup_Bool_Exp = {
  _and?: InputMaybe<Array<Mb_Views_Nft_Activities_Rollup_Bool_Exp>>;
  _not?: InputMaybe<Mb_Views_Nft_Activities_Rollup_Bool_Exp>;
  _or?: InputMaybe<Array<Mb_Views_Nft_Activities_Rollup_Bool_Exp>>;
  action_receiver?: InputMaybe<String_Comparison_Exp>;
  action_sender?: InputMaybe<String_Comparison_Exp>;
  content_flag?: InputMaybe<String_Comparison_Exp>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  extra?: InputMaybe<String_Comparison_Exp>;
  kind?: InputMaybe<String_Comparison_Exp>;
  media?: InputMaybe<String_Comparison_Exp>;
  media_hash?: InputMaybe<String_Comparison_Exp>;
  metadata_id?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  receipt_id?: InputMaybe<String_Comparison_Exp>;
  reference?: InputMaybe<String_Comparison_Exp>;
  reference_blob?: InputMaybe<Jsonb_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  token_ids?: InputMaybe<String_Array_Comparison_Exp>;
  tx_sender?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Mb_Views_Nft_Activities_Rollup_Max_Fields = {
  __typename?: 'mb_views_nft_activities_rollup_max_fields';
  action_receiver?: Maybe<Scalars['String']['output']>;
  action_sender?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['bigint']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_ids?: Maybe<Array<Scalars['String']['output']>>;
  tx_sender?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Mb_Views_Nft_Activities_Rollup_Min_Fields = {
  __typename?: 'mb_views_nft_activities_rollup_min_fields';
  action_receiver?: Maybe<Scalars['String']['output']>;
  action_sender?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['bigint']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_ids?: Maybe<Array<Scalars['String']['output']>>;
  tx_sender?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "mb_views.nft_activities_rollup". */
export type Mb_Views_Nft_Activities_Rollup_Order_By = {
  action_receiver?: InputMaybe<Order_By>;
  action_sender?: InputMaybe<Order_By>;
  content_flag?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  extra?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  media_hash?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
  reference?: InputMaybe<Order_By>;
  reference_blob?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token_ids?: InputMaybe<Order_By>;
  tx_sender?: InputMaybe<Order_By>;
};

/** select columns of table "mb_views.nft_activities_rollup" */
export enum Mb_Views_Nft_Activities_Rollup_Select_Column {
  /** column name */
  ActionReceiver = 'action_receiver',
  /** column name */
  ActionSender = 'action_sender',
  /** column name */
  ContentFlag = 'content_flag',
  /** column name */
  Count = 'count',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  Extra = 'extra',
  /** column name */
  Kind = 'kind',
  /** column name */
  Media = 'media',
  /** column name */
  MediaHash = 'media_hash',
  /** column name */
  MetadataId = 'metadata_id',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  Price = 'price',
  /** column name */
  ReceiptId = 'receipt_id',
  /** column name */
  Reference = 'reference',
  /** column name */
  ReferenceBlob = 'reference_blob',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Title = 'title',
  /** column name */
  TokenIds = 'token_ids',
  /** column name */
  TxSender = 'tx_sender'
}

/** aggregate stddev on columns */
export type Mb_Views_Nft_Activities_Rollup_Stddev_Fields = {
  __typename?: 'mb_views_nft_activities_rollup_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Mb_Views_Nft_Activities_Rollup_Stddev_Pop_Fields = {
  __typename?: 'mb_views_nft_activities_rollup_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Mb_Views_Nft_Activities_Rollup_Stddev_Samp_Fields = {
  __typename?: 'mb_views_nft_activities_rollup_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "mb_views_nft_activities_rollup" */
export type Mb_Views_Nft_Activities_Rollup_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mb_Views_Nft_Activities_Rollup_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mb_Views_Nft_Activities_Rollup_Stream_Cursor_Value_Input = {
  action_receiver?: InputMaybe<Scalars['String']['input']>;
  action_sender?: InputMaybe<Scalars['String']['input']>;
  content_flag?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['bigint']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  media_hash?: InputMaybe<Scalars['String']['input']>;
  metadata_id?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  receipt_id?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  reference_blob?: InputMaybe<Scalars['jsonb']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token_ids?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_sender?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Mb_Views_Nft_Activities_Rollup_Sum_Fields = {
  __typename?: 'mb_views_nft_activities_rollup_sum_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Mb_Views_Nft_Activities_Rollup_Var_Pop_Fields = {
  __typename?: 'mb_views_nft_activities_rollup_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Mb_Views_Nft_Activities_Rollup_Var_Samp_Fields = {
  __typename?: 'mb_views_nft_activities_rollup_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Mb_Views_Nft_Activities_Rollup_Variance_Fields = {
  __typename?: 'mb_views_nft_activities_rollup_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** select columns of table "mb_views.nft_activities" */
export enum Mb_Views_Nft_Activities_Select_Column {
  /** column name */
  ActionReceiver = 'action_receiver',
  /** column name */
  ActionSender = 'action_sender',
  /** column name */
  ContentFlag = 'content_flag',
  /** column name */
  Copies = 'copies',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  Extra = 'extra',
  /** column name */
  Kind = 'kind',
  /** column name */
  Media = 'media',
  /** column name */
  MediaHash = 'media_hash',
  /** column name */
  MetadataId = 'metadata_id',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  Price = 'price',
  /** column name */
  ReceiptId = 'receipt_id',
  /** column name */
  Reference = 'reference',
  /** column name */
  ReferenceBlob = 'reference_blob',
  /** column name */
  ReferenceHash = 'reference_hash',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Title = 'title',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  TxSender = 'tx_sender'
}

/** aggregate stddev on columns */
export type Mb_Views_Nft_Activities_Stddev_Fields = {
  __typename?: 'mb_views_nft_activities_stddev_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Mb_Views_Nft_Activities_Stddev_Pop_Fields = {
  __typename?: 'mb_views_nft_activities_stddev_pop_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Mb_Views_Nft_Activities_Stddev_Samp_Fields = {
  __typename?: 'mb_views_nft_activities_stddev_samp_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "mb_views_nft_activities" */
export type Mb_Views_Nft_Activities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mb_Views_Nft_Activities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mb_Views_Nft_Activities_Stream_Cursor_Value_Input = {
  action_receiver?: InputMaybe<Scalars['String']['input']>;
  action_sender?: InputMaybe<Scalars['String']['input']>;
  content_flag?: InputMaybe<Scalars['String']['input']>;
  copies?: InputMaybe<Scalars['bigint']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  media_hash?: InputMaybe<Scalars['String']['input']>;
  metadata_id?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  receipt_id?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  reference_blob?: InputMaybe<Scalars['jsonb']['input']>;
  reference_hash?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
  tx_sender?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Mb_Views_Nft_Activities_Sum_Fields = {
  __typename?: 'mb_views_nft_activities_sum_fields';
  copies?: Maybe<Scalars['bigint']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Mb_Views_Nft_Activities_Var_Pop_Fields = {
  __typename?: 'mb_views_nft_activities_var_pop_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Mb_Views_Nft_Activities_Var_Samp_Fields = {
  __typename?: 'mb_views_nft_activities_var_samp_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Mb_Views_Nft_Activities_Variance_Fields = {
  __typename?: 'mb_views_nft_activities_variance_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "mb_views.nft_metadata" */
export type Mb_Views_Nft_Metadata = {
  __typename?: 'mb_views_nft_metadata';
  base_uri?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  listings: Array<Mb_Views_Active_Listings>;
  /** An aggregate relationship */
  listings_aggregate: Mb_Views_Active_Listings_Aggregate;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_content_flag?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_content_flag?: Maybe<Scalars['String']['output']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_icon?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  nft_contract_is_mintbase?: Maybe<Scalars['Boolean']['output']>;
  nft_contract_name?: Maybe<Scalars['String']['output']>;
  nft_contract_owner_id?: Maybe<Scalars['String']['output']>;
  nft_contract_reference?: Maybe<Scalars['String']['output']>;
  nft_contract_spec?: Maybe<Scalars['String']['output']>;
  nft_contract_symbol?: Maybe<Scalars['String']['output']>;
  reference_blob?: Maybe<Scalars['jsonb']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "mb_views.nft_metadata" */
export type Mb_Views_Nft_MetadataListingsArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Active_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Active_Listings_Order_By>>;
  where?: InputMaybe<Mb_Views_Active_Listings_Bool_Exp>;
};


/** columns and relationships of "mb_views.nft_metadata" */
export type Mb_Views_Nft_MetadataListings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Active_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Active_Listings_Order_By>>;
  where?: InputMaybe<Mb_Views_Active_Listings_Bool_Exp>;
};


/** columns and relationships of "mb_views.nft_metadata" */
export type Mb_Views_Nft_MetadataReference_BlobArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "mb_views.nft_metadata" */
export type Mb_Views_Nft_Metadata_Aggregate = {
  __typename?: 'mb_views_nft_metadata_aggregate';
  aggregate?: Maybe<Mb_Views_Nft_Metadata_Aggregate_Fields>;
  nodes: Array<Mb_Views_Nft_Metadata>;
};

/** aggregate fields of "mb_views.nft_metadata" */
export type Mb_Views_Nft_Metadata_Aggregate_Fields = {
  __typename?: 'mb_views_nft_metadata_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Mb_Views_Nft_Metadata_Max_Fields>;
  min?: Maybe<Mb_Views_Nft_Metadata_Min_Fields>;
};


/** aggregate fields of "mb_views.nft_metadata" */
export type Mb_Views_Nft_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mb_Views_Nft_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_metadata". All fields are combined with a logical 'AND'. */
export type Mb_Views_Nft_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Mb_Views_Nft_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Mb_Views_Nft_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Mb_Views_Nft_Metadata_Bool_Exp>>;
  base_uri?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  extra?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  listings?: InputMaybe<Mb_Views_Active_Listings_Bool_Exp>;
  listings_aggregate?: InputMaybe<Mb_Views_Active_Listings_Aggregate_Bool_Exp>;
  media?: InputMaybe<String_Comparison_Exp>;
  media_hash?: InputMaybe<String_Comparison_Exp>;
  metadata_content_flag?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_content_flag?: InputMaybe<String_Comparison_Exp>;
  nft_contract_created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  nft_contract_icon?: InputMaybe<String_Comparison_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  nft_contract_is_mintbase?: InputMaybe<Boolean_Comparison_Exp>;
  nft_contract_name?: InputMaybe<String_Comparison_Exp>;
  nft_contract_owner_id?: InputMaybe<String_Comparison_Exp>;
  nft_contract_reference?: InputMaybe<String_Comparison_Exp>;
  nft_contract_spec?: InputMaybe<String_Comparison_Exp>;
  nft_contract_symbol?: InputMaybe<String_Comparison_Exp>;
  reference_blob?: InputMaybe<Jsonb_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Mb_Views_Nft_Metadata_Max_Fields = {
  __typename?: 'mb_views_nft_metadata_max_fields';
  base_uri?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_content_flag?: Maybe<Scalars['String']['output']>;
  nft_contract_content_flag?: Maybe<Scalars['String']['output']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_icon?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  nft_contract_name?: Maybe<Scalars['String']['output']>;
  nft_contract_owner_id?: Maybe<Scalars['String']['output']>;
  nft_contract_reference?: Maybe<Scalars['String']['output']>;
  nft_contract_spec?: Maybe<Scalars['String']['output']>;
  nft_contract_symbol?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Mb_Views_Nft_Metadata_Min_Fields = {
  __typename?: 'mb_views_nft_metadata_min_fields';
  base_uri?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_content_flag?: Maybe<Scalars['String']['output']>;
  nft_contract_content_flag?: Maybe<Scalars['String']['output']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_icon?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  nft_contract_name?: Maybe<Scalars['String']['output']>;
  nft_contract_owner_id?: Maybe<Scalars['String']['output']>;
  nft_contract_reference?: Maybe<Scalars['String']['output']>;
  nft_contract_spec?: Maybe<Scalars['String']['output']>;
  nft_contract_symbol?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "mb_views.nft_metadata". */
export type Mb_Views_Nft_Metadata_Order_By = {
  base_uri?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  extra?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  listings_aggregate?: InputMaybe<Mb_Views_Active_Listings_Aggregate_Order_By>;
  media?: InputMaybe<Order_By>;
  media_hash?: InputMaybe<Order_By>;
  metadata_content_flag?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_content_flag?: InputMaybe<Order_By>;
  nft_contract_created_at?: InputMaybe<Order_By>;
  nft_contract_icon?: InputMaybe<Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_contract_is_mintbase?: InputMaybe<Order_By>;
  nft_contract_name?: InputMaybe<Order_By>;
  nft_contract_owner_id?: InputMaybe<Order_By>;
  nft_contract_reference?: InputMaybe<Order_By>;
  nft_contract_spec?: InputMaybe<Order_By>;
  nft_contract_symbol?: InputMaybe<Order_By>;
  reference_blob?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** select columns of table "mb_views.nft_metadata" */
export enum Mb_Views_Nft_Metadata_Select_Column {
  /** column name */
  BaseUri = 'base_uri',
  /** column name */
  Description = 'description',
  /** column name */
  Extra = 'extra',
  /** column name */
  Id = 'id',
  /** column name */
  Media = 'media',
  /** column name */
  MediaHash = 'media_hash',
  /** column name */
  MetadataContentFlag = 'metadata_content_flag',
  /** column name */
  NftContractContentFlag = 'nft_contract_content_flag',
  /** column name */
  NftContractCreatedAt = 'nft_contract_created_at',
  /** column name */
  NftContractIcon = 'nft_contract_icon',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  NftContractIsMintbase = 'nft_contract_is_mintbase',
  /** column name */
  NftContractName = 'nft_contract_name',
  /** column name */
  NftContractOwnerId = 'nft_contract_owner_id',
  /** column name */
  NftContractReference = 'nft_contract_reference',
  /** column name */
  NftContractSpec = 'nft_contract_spec',
  /** column name */
  NftContractSymbol = 'nft_contract_symbol',
  /** column name */
  ReferenceBlob = 'reference_blob',
  /** column name */
  Title = 'title'
}

/** Streaming cursor of the table "mb_views_nft_metadata" */
export type Mb_Views_Nft_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mb_Views_Nft_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mb_Views_Nft_Metadata_Stream_Cursor_Value_Input = {
  base_uri?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  media_hash?: InputMaybe<Scalars['String']['input']>;
  metadata_content_flag?: InputMaybe<Scalars['String']['input']>;
  nft_contract_content_flag?: InputMaybe<Scalars['String']['input']>;
  nft_contract_created_at?: InputMaybe<Scalars['timestamp']['input']>;
  nft_contract_icon?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  nft_contract_is_mintbase?: InputMaybe<Scalars['Boolean']['input']>;
  nft_contract_name?: InputMaybe<Scalars['String']['input']>;
  nft_contract_owner_id?: InputMaybe<Scalars['String']['input']>;
  nft_contract_reference?: InputMaybe<Scalars['String']['input']>;
  nft_contract_spec?: InputMaybe<Scalars['String']['input']>;
  nft_contract_symbol?: InputMaybe<Scalars['String']['input']>;
  reference_blob?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "mb_views.nft_metadata_unburned" */
export type Mb_Views_Nft_Metadata_Unburned = {
  __typename?: 'mb_views_nft_metadata_unburned';
  base_uri?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  listing_created_at?: Maybe<Scalars['timestamp']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_blob?: Maybe<Scalars['jsonb']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "mb_views.nft_metadata_unburned" */
export type Mb_Views_Nft_Metadata_UnburnedReference_BlobArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "mb_views.nft_metadata_unburned" */
export type Mb_Views_Nft_Metadata_Unburned_Aggregate = {
  __typename?: 'mb_views_nft_metadata_unburned_aggregate';
  aggregate?: Maybe<Mb_Views_Nft_Metadata_Unburned_Aggregate_Fields>;
  nodes: Array<Mb_Views_Nft_Metadata_Unburned>;
};

/** aggregate fields of "mb_views.nft_metadata_unburned" */
export type Mb_Views_Nft_Metadata_Unburned_Aggregate_Fields = {
  __typename?: 'mb_views_nft_metadata_unburned_aggregate_fields';
  avg?: Maybe<Mb_Views_Nft_Metadata_Unburned_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Mb_Views_Nft_Metadata_Unburned_Max_Fields>;
  min?: Maybe<Mb_Views_Nft_Metadata_Unburned_Min_Fields>;
  stddev?: Maybe<Mb_Views_Nft_Metadata_Unburned_Stddev_Fields>;
  stddev_pop?: Maybe<Mb_Views_Nft_Metadata_Unburned_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mb_Views_Nft_Metadata_Unburned_Stddev_Samp_Fields>;
  sum?: Maybe<Mb_Views_Nft_Metadata_Unburned_Sum_Fields>;
  var_pop?: Maybe<Mb_Views_Nft_Metadata_Unburned_Var_Pop_Fields>;
  var_samp?: Maybe<Mb_Views_Nft_Metadata_Unburned_Var_Samp_Fields>;
  variance?: Maybe<Mb_Views_Nft_Metadata_Unburned_Variance_Fields>;
};


/** aggregate fields of "mb_views.nft_metadata_unburned" */
export type Mb_Views_Nft_Metadata_Unburned_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mb_Views_Nft_Metadata_Unburned_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Mb_Views_Nft_Metadata_Unburned_Avg_Fields = {
  __typename?: 'mb_views_nft_metadata_unburned_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_metadata_unburned". All fields are combined with a logical 'AND'. */
export type Mb_Views_Nft_Metadata_Unburned_Bool_Exp = {
  _and?: InputMaybe<Array<Mb_Views_Nft_Metadata_Unburned_Bool_Exp>>;
  _not?: InputMaybe<Mb_Views_Nft_Metadata_Unburned_Bool_Exp>;
  _or?: InputMaybe<Array<Mb_Views_Nft_Metadata_Unburned_Bool_Exp>>;
  base_uri?: InputMaybe<String_Comparison_Exp>;
  content_flag?: InputMaybe<String_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  listed_by?: InputMaybe<String_Comparison_Exp>;
  listing_created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  media?: InputMaybe<String_Comparison_Exp>;
  metadata_id?: InputMaybe<String_Comparison_Exp>;
  minted_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  minter?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  reference?: InputMaybe<String_Comparison_Exp>;
  reference_blob?: InputMaybe<Jsonb_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Mb_Views_Nft_Metadata_Unburned_Max_Fields = {
  __typename?: 'mb_views_nft_metadata_unburned_max_fields';
  base_uri?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  listing_created_at?: Maybe<Scalars['timestamp']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Mb_Views_Nft_Metadata_Unburned_Min_Fields = {
  __typename?: 'mb_views_nft_metadata_unburned_min_fields';
  base_uri?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  listing_created_at?: Maybe<Scalars['timestamp']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "mb_views.nft_metadata_unburned". */
export type Mb_Views_Nft_Metadata_Unburned_Order_By = {
  base_uri?: InputMaybe<Order_By>;
  content_flag?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  listed_by?: InputMaybe<Order_By>;
  listing_created_at?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  minted_timestamp?: InputMaybe<Order_By>;
  minter?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  reference?: InputMaybe<Order_By>;
  reference_blob?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** select columns of table "mb_views.nft_metadata_unburned" */
export enum Mb_Views_Nft_Metadata_Unburned_Select_Column {
  /** column name */
  BaseUri = 'base_uri',
  /** column name */
  ContentFlag = 'content_flag',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  ListedBy = 'listed_by',
  /** column name */
  ListingCreatedAt = 'listing_created_at',
  /** column name */
  Media = 'media',
  /** column name */
  MetadataId = 'metadata_id',
  /** column name */
  MintedTimestamp = 'minted_timestamp',
  /** column name */
  Minter = 'minter',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  Price = 'price',
  /** column name */
  Reference = 'reference',
  /** column name */
  ReferenceBlob = 'reference_blob',
  /** column name */
  Title = 'title'
}

/** aggregate stddev on columns */
export type Mb_Views_Nft_Metadata_Unburned_Stddev_Fields = {
  __typename?: 'mb_views_nft_metadata_unburned_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Mb_Views_Nft_Metadata_Unburned_Stddev_Pop_Fields = {
  __typename?: 'mb_views_nft_metadata_unburned_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Mb_Views_Nft_Metadata_Unburned_Stddev_Samp_Fields = {
  __typename?: 'mb_views_nft_metadata_unburned_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "mb_views_nft_metadata_unburned" */
export type Mb_Views_Nft_Metadata_Unburned_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mb_Views_Nft_Metadata_Unburned_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mb_Views_Nft_Metadata_Unburned_Stream_Cursor_Value_Input = {
  base_uri?: InputMaybe<Scalars['String']['input']>;
  content_flag?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  listed_by?: InputMaybe<Scalars['String']['input']>;
  listing_created_at?: InputMaybe<Scalars['timestamp']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  metadata_id?: InputMaybe<Scalars['String']['input']>;
  minted_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  minter?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  reference_blob?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Mb_Views_Nft_Metadata_Unburned_Sum_Fields = {
  __typename?: 'mb_views_nft_metadata_unburned_sum_fields';
  price?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Mb_Views_Nft_Metadata_Unburned_Var_Pop_Fields = {
  __typename?: 'mb_views_nft_metadata_unburned_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Mb_Views_Nft_Metadata_Unburned_Var_Samp_Fields = {
  __typename?: 'mb_views_nft_metadata_unburned_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Mb_Views_Nft_Metadata_Unburned_Variance_Fields = {
  __typename?: 'mb_views_nft_metadata_unburned_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "mb_views.nft_notifications" */
export type Mb_Views_Nft_Notifications = {
  __typename?: 'mb_views_nft_notifications';
  account_id?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['numeric']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_token?: Maybe<Mb_Views_Nft_Tokens>;
  other_account_id?: Maybe<Scalars['String']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "mb_views.nft_notifications" */
export type Mb_Views_Nft_Notifications_Aggregate = {
  __typename?: 'mb_views_nft_notifications_aggregate';
  aggregate?: Maybe<Mb_Views_Nft_Notifications_Aggregate_Fields>;
  nodes: Array<Mb_Views_Nft_Notifications>;
};

/** aggregate fields of "mb_views.nft_notifications" */
export type Mb_Views_Nft_Notifications_Aggregate_Fields = {
  __typename?: 'mb_views_nft_notifications_aggregate_fields';
  avg?: Maybe<Mb_Views_Nft_Notifications_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Mb_Views_Nft_Notifications_Max_Fields>;
  min?: Maybe<Mb_Views_Nft_Notifications_Min_Fields>;
  stddev?: Maybe<Mb_Views_Nft_Notifications_Stddev_Fields>;
  stddev_pop?: Maybe<Mb_Views_Nft_Notifications_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mb_Views_Nft_Notifications_Stddev_Samp_Fields>;
  sum?: Maybe<Mb_Views_Nft_Notifications_Sum_Fields>;
  var_pop?: Maybe<Mb_Views_Nft_Notifications_Var_Pop_Fields>;
  var_samp?: Maybe<Mb_Views_Nft_Notifications_Var_Samp_Fields>;
  variance?: Maybe<Mb_Views_Nft_Notifications_Variance_Fields>;
};


/** aggregate fields of "mb_views.nft_notifications" */
export type Mb_Views_Nft_Notifications_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mb_Views_Nft_Notifications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Mb_Views_Nft_Notifications_Avg_Fields = {
  __typename?: 'mb_views_nft_notifications_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_notifications". All fields are combined with a logical 'AND'. */
export type Mb_Views_Nft_Notifications_Bool_Exp = {
  _and?: InputMaybe<Array<Mb_Views_Nft_Notifications_Bool_Exp>>;
  _not?: InputMaybe<Mb_Views_Nft_Notifications_Bool_Exp>;
  _or?: InputMaybe<Array<Mb_Views_Nft_Notifications_Bool_Exp>>;
  account_id?: InputMaybe<String_Comparison_Exp>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  kind?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  nft_token?: InputMaybe<Mb_Views_Nft_Tokens_Bool_Exp>;
  other_account_id?: InputMaybe<String_Comparison_Exp>;
  receipt_id?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Mb_Views_Nft_Notifications_Max_Fields = {
  __typename?: 'mb_views_nft_notifications_max_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['numeric']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  other_account_id?: Maybe<Scalars['String']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Mb_Views_Nft_Notifications_Min_Fields = {
  __typename?: 'mb_views_nft_notifications_min_fields';
  account_id?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['numeric']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  other_account_id?: Maybe<Scalars['String']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "mb_views.nft_notifications". */
export type Mb_Views_Nft_Notifications_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_token?: InputMaybe<Mb_Views_Nft_Tokens_Order_By>;
  other_account_id?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "mb_views.nft_notifications" */
export enum Mb_Views_Nft_Notifications_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  Currency = 'currency',
  /** column name */
  Kind = 'kind',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  OtherAccountId = 'other_account_id',
  /** column name */
  ReceiptId = 'receipt_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TokenId = 'token_id'
}

/** aggregate stddev on columns */
export type Mb_Views_Nft_Notifications_Stddev_Fields = {
  __typename?: 'mb_views_nft_notifications_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Mb_Views_Nft_Notifications_Stddev_Pop_Fields = {
  __typename?: 'mb_views_nft_notifications_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Mb_Views_Nft_Notifications_Stddev_Samp_Fields = {
  __typename?: 'mb_views_nft_notifications_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "mb_views_nft_notifications" */
export type Mb_Views_Nft_Notifications_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mb_Views_Nft_Notifications_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mb_Views_Nft_Notifications_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['numeric']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  other_account_id?: InputMaybe<Scalars['String']['input']>;
  receipt_id?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Mb_Views_Nft_Notifications_Sum_Fields = {
  __typename?: 'mb_views_nft_notifications_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Mb_Views_Nft_Notifications_Var_Pop_Fields = {
  __typename?: 'mb_views_nft_notifications_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Mb_Views_Nft_Notifications_Var_Samp_Fields = {
  __typename?: 'mb_views_nft_notifications_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Mb_Views_Nft_Notifications_Variance_Fields = {
  __typename?: 'mb_views_nft_notifications_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "mb_views.nft_owned_tokens" */
export type Mb_Views_Nft_Owned_Tokens = {
  __typename?: 'mb_views_nft_owned_tokens';
  base_uri?: Maybe<Scalars['String']['output']>;
  burned_receipt_id?: Maybe<Scalars['String']['output']>;
  burned_timestamp?: Maybe<Scalars['timestamp']['output']>;
  copies?: Maybe<Scalars['bigint']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  issued_at?: Maybe<Scalars['timestamp']['output']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']['output']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']['output']>;
  listing_approval_id?: Maybe<Scalars['numeric']['output']>;
  listing_kind?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  listings: Array<Nft_Listings>;
  /** An aggregate relationship */
  listings_aggregate: Nft_Listings_Aggregate;
  market_id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_content_flag?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  mint_memo?: Maybe<Scalars['String']['output']>;
  minted_receipt_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  nft_contract: Array<Nft_Contracts>;
  /** An aggregate relationship */
  nft_contract_aggregate: Nft_Contracts_Aggregate;
  nft_contract_created_at?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_icon?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  nft_contract_is_mintbase?: Maybe<Scalars['Boolean']['output']>;
  nft_contract_name?: Maybe<Scalars['String']['output']>;
  nft_contract_owner_id?: Maybe<Scalars['String']['output']>;
  nft_contract_reference?: Maybe<Scalars['String']['output']>;
  nft_contract_spec?: Maybe<Scalars['String']['output']>;
  nft_contract_symbol?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_blob?: Maybe<Scalars['jsonb']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  royalties?: Maybe<Scalars['jsonb']['output']>;
  royalties_percent?: Maybe<Scalars['Int']['output']>;
  splits?: Maybe<Scalars['jsonb']['output']>;
  starts_at?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "mb_views.nft_owned_tokens" */
export type Mb_Views_Nft_Owned_TokensListingsArgs = {
  distinct_on?: InputMaybe<Array<Nft_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Listings_Order_By>>;
  where?: InputMaybe<Nft_Listings_Bool_Exp>;
};


/** columns and relationships of "mb_views.nft_owned_tokens" */
export type Mb_Views_Nft_Owned_TokensListings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Listings_Order_By>>;
  where?: InputMaybe<Nft_Listings_Bool_Exp>;
};


/** columns and relationships of "mb_views.nft_owned_tokens" */
export type Mb_Views_Nft_Owned_TokensNft_ContractArgs = {
  distinct_on?: InputMaybe<Array<Nft_Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Contracts_Order_By>>;
  where?: InputMaybe<Nft_Contracts_Bool_Exp>;
};


/** columns and relationships of "mb_views.nft_owned_tokens" */
export type Mb_Views_Nft_Owned_TokensNft_Contract_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Contracts_Order_By>>;
  where?: InputMaybe<Nft_Contracts_Bool_Exp>;
};


/** columns and relationships of "mb_views.nft_owned_tokens" */
export type Mb_Views_Nft_Owned_TokensReference_BlobArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "mb_views.nft_owned_tokens" */
export type Mb_Views_Nft_Owned_TokensRoyaltiesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "mb_views.nft_owned_tokens" */
export type Mb_Views_Nft_Owned_TokensSplitsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "mb_views.nft_owned_tokens" */
export type Mb_Views_Nft_Owned_Tokens_Aggregate = {
  __typename?: 'mb_views_nft_owned_tokens_aggregate';
  aggregate?: Maybe<Mb_Views_Nft_Owned_Tokens_Aggregate_Fields>;
  nodes: Array<Mb_Views_Nft_Owned_Tokens>;
};

/** aggregate fields of "mb_views.nft_owned_tokens" */
export type Mb_Views_Nft_Owned_Tokens_Aggregate_Fields = {
  __typename?: 'mb_views_nft_owned_tokens_aggregate_fields';
  avg?: Maybe<Mb_Views_Nft_Owned_Tokens_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Mb_Views_Nft_Owned_Tokens_Max_Fields>;
  min?: Maybe<Mb_Views_Nft_Owned_Tokens_Min_Fields>;
  stddev?: Maybe<Mb_Views_Nft_Owned_Tokens_Stddev_Fields>;
  stddev_pop?: Maybe<Mb_Views_Nft_Owned_Tokens_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mb_Views_Nft_Owned_Tokens_Stddev_Samp_Fields>;
  sum?: Maybe<Mb_Views_Nft_Owned_Tokens_Sum_Fields>;
  var_pop?: Maybe<Mb_Views_Nft_Owned_Tokens_Var_Pop_Fields>;
  var_samp?: Maybe<Mb_Views_Nft_Owned_Tokens_Var_Samp_Fields>;
  variance?: Maybe<Mb_Views_Nft_Owned_Tokens_Variance_Fields>;
};


/** aggregate fields of "mb_views.nft_owned_tokens" */
export type Mb_Views_Nft_Owned_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mb_Views_Nft_Owned_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Mb_Views_Nft_Owned_Tokens_Avg_Fields = {
  __typename?: 'mb_views_nft_owned_tokens_avg_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  listing_approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_owned_tokens". All fields are combined with a logical 'AND'. */
export type Mb_Views_Nft_Owned_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Mb_Views_Nft_Owned_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Mb_Views_Nft_Owned_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Mb_Views_Nft_Owned_Tokens_Bool_Exp>>;
  base_uri?: InputMaybe<String_Comparison_Exp>;
  burned_receipt_id?: InputMaybe<String_Comparison_Exp>;
  burned_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  copies?: InputMaybe<Bigint_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamp_Comparison_Exp>;
  extra?: InputMaybe<String_Comparison_Exp>;
  issued_at?: InputMaybe<Timestamp_Comparison_Exp>;
  last_transfer_receipt_id?: InputMaybe<String_Comparison_Exp>;
  last_transfer_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  listing_approval_id?: InputMaybe<Numeric_Comparison_Exp>;
  listing_kind?: InputMaybe<String_Comparison_Exp>;
  listings?: InputMaybe<Nft_Listings_Bool_Exp>;
  listings_aggregate?: InputMaybe<Nft_Listings_Aggregate_Bool_Exp>;
  market_id?: InputMaybe<String_Comparison_Exp>;
  media?: InputMaybe<String_Comparison_Exp>;
  media_hash?: InputMaybe<String_Comparison_Exp>;
  metadata_content_flag?: InputMaybe<String_Comparison_Exp>;
  metadata_id?: InputMaybe<String_Comparison_Exp>;
  mint_memo?: InputMaybe<String_Comparison_Exp>;
  minted_receipt_id?: InputMaybe<String_Comparison_Exp>;
  minted_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  minter?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_aggregate?: InputMaybe<Nft_Contracts_Aggregate_Bool_Exp>;
  nft_contract_created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  nft_contract_icon?: InputMaybe<String_Comparison_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  nft_contract_is_mintbase?: InputMaybe<Boolean_Comparison_Exp>;
  nft_contract_name?: InputMaybe<String_Comparison_Exp>;
  nft_contract_owner_id?: InputMaybe<String_Comparison_Exp>;
  nft_contract_reference?: InputMaybe<String_Comparison_Exp>;
  nft_contract_spec?: InputMaybe<String_Comparison_Exp>;
  nft_contract_symbol?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  reference?: InputMaybe<String_Comparison_Exp>;
  reference_blob?: InputMaybe<Jsonb_Comparison_Exp>;
  reference_hash?: InputMaybe<String_Comparison_Exp>;
  royalties?: InputMaybe<Jsonb_Comparison_Exp>;
  royalties_percent?: InputMaybe<Int_Comparison_Exp>;
  splits?: InputMaybe<Jsonb_Comparison_Exp>;
  starts_at?: InputMaybe<Timestamp_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Mb_Views_Nft_Owned_Tokens_Max_Fields = {
  __typename?: 'mb_views_nft_owned_tokens_max_fields';
  base_uri?: Maybe<Scalars['String']['output']>;
  burned_receipt_id?: Maybe<Scalars['String']['output']>;
  burned_timestamp?: Maybe<Scalars['timestamp']['output']>;
  copies?: Maybe<Scalars['bigint']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  issued_at?: Maybe<Scalars['timestamp']['output']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']['output']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']['output']>;
  listing_approval_id?: Maybe<Scalars['numeric']['output']>;
  listing_kind?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_content_flag?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  mint_memo?: Maybe<Scalars['String']['output']>;
  minted_receipt_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_icon?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  nft_contract_name?: Maybe<Scalars['String']['output']>;
  nft_contract_owner_id?: Maybe<Scalars['String']['output']>;
  nft_contract_reference?: Maybe<Scalars['String']['output']>;
  nft_contract_spec?: Maybe<Scalars['String']['output']>;
  nft_contract_symbol?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  royalties_percent?: Maybe<Scalars['Int']['output']>;
  starts_at?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Mb_Views_Nft_Owned_Tokens_Min_Fields = {
  __typename?: 'mb_views_nft_owned_tokens_min_fields';
  base_uri?: Maybe<Scalars['String']['output']>;
  burned_receipt_id?: Maybe<Scalars['String']['output']>;
  burned_timestamp?: Maybe<Scalars['timestamp']['output']>;
  copies?: Maybe<Scalars['bigint']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  issued_at?: Maybe<Scalars['timestamp']['output']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']['output']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']['output']>;
  listing_approval_id?: Maybe<Scalars['numeric']['output']>;
  listing_kind?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_content_flag?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  mint_memo?: Maybe<Scalars['String']['output']>;
  minted_receipt_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_icon?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  nft_contract_name?: Maybe<Scalars['String']['output']>;
  nft_contract_owner_id?: Maybe<Scalars['String']['output']>;
  nft_contract_reference?: Maybe<Scalars['String']['output']>;
  nft_contract_spec?: Maybe<Scalars['String']['output']>;
  nft_contract_symbol?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  royalties_percent?: Maybe<Scalars['Int']['output']>;
  starts_at?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** Ordering options when selecting data from "mb_views.nft_owned_tokens". */
export type Mb_Views_Nft_Owned_Tokens_Order_By = {
  base_uri?: InputMaybe<Order_By>;
  burned_receipt_id?: InputMaybe<Order_By>;
  burned_timestamp?: InputMaybe<Order_By>;
  copies?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  extra?: InputMaybe<Order_By>;
  issued_at?: InputMaybe<Order_By>;
  last_transfer_receipt_id?: InputMaybe<Order_By>;
  last_transfer_timestamp?: InputMaybe<Order_By>;
  listing_approval_id?: InputMaybe<Order_By>;
  listing_kind?: InputMaybe<Order_By>;
  listings_aggregate?: InputMaybe<Nft_Listings_Aggregate_Order_By>;
  market_id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  media_hash?: InputMaybe<Order_By>;
  metadata_content_flag?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  mint_memo?: InputMaybe<Order_By>;
  minted_receipt_id?: InputMaybe<Order_By>;
  minted_timestamp?: InputMaybe<Order_By>;
  minter?: InputMaybe<Order_By>;
  nft_contract_aggregate?: InputMaybe<Nft_Contracts_Aggregate_Order_By>;
  nft_contract_created_at?: InputMaybe<Order_By>;
  nft_contract_icon?: InputMaybe<Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_contract_is_mintbase?: InputMaybe<Order_By>;
  nft_contract_name?: InputMaybe<Order_By>;
  nft_contract_owner_id?: InputMaybe<Order_By>;
  nft_contract_reference?: InputMaybe<Order_By>;
  nft_contract_spec?: InputMaybe<Order_By>;
  nft_contract_symbol?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  reference?: InputMaybe<Order_By>;
  reference_blob?: InputMaybe<Order_By>;
  reference_hash?: InputMaybe<Order_By>;
  royalties?: InputMaybe<Order_By>;
  royalties_percent?: InputMaybe<Order_By>;
  splits?: InputMaybe<Order_By>;
  starts_at?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "mb_views.nft_owned_tokens" */
export enum Mb_Views_Nft_Owned_Tokens_Select_Column {
  /** column name */
  BaseUri = 'base_uri',
  /** column name */
  BurnedReceiptId = 'burned_receipt_id',
  /** column name */
  BurnedTimestamp = 'burned_timestamp',
  /** column name */
  Copies = 'copies',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Extra = 'extra',
  /** column name */
  IssuedAt = 'issued_at',
  /** column name */
  LastTransferReceiptId = 'last_transfer_receipt_id',
  /** column name */
  LastTransferTimestamp = 'last_transfer_timestamp',
  /** column name */
  ListingApprovalId = 'listing_approval_id',
  /** column name */
  ListingKind = 'listing_kind',
  /** column name */
  MarketId = 'market_id',
  /** column name */
  Media = 'media',
  /** column name */
  MediaHash = 'media_hash',
  /** column name */
  MetadataContentFlag = 'metadata_content_flag',
  /** column name */
  MetadataId = 'metadata_id',
  /** column name */
  MintMemo = 'mint_memo',
  /** column name */
  MintedReceiptId = 'minted_receipt_id',
  /** column name */
  MintedTimestamp = 'minted_timestamp',
  /** column name */
  Minter = 'minter',
  /** column name */
  NftContractCreatedAt = 'nft_contract_created_at',
  /** column name */
  NftContractIcon = 'nft_contract_icon',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  NftContractIsMintbase = 'nft_contract_is_mintbase',
  /** column name */
  NftContractName = 'nft_contract_name',
  /** column name */
  NftContractOwnerId = 'nft_contract_owner_id',
  /** column name */
  NftContractReference = 'nft_contract_reference',
  /** column name */
  NftContractSpec = 'nft_contract_spec',
  /** column name */
  NftContractSymbol = 'nft_contract_symbol',
  /** column name */
  Owner = 'owner',
  /** column name */
  Price = 'price',
  /** column name */
  Reference = 'reference',
  /** column name */
  ReferenceBlob = 'reference_blob',
  /** column name */
  ReferenceHash = 'reference_hash',
  /** column name */
  Royalties = 'royalties',
  /** column name */
  RoyaltiesPercent = 'royalties_percent',
  /** column name */
  Splits = 'splits',
  /** column name */
  StartsAt = 'starts_at',
  /** column name */
  Title = 'title',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Mb_Views_Nft_Owned_Tokens_Stddev_Fields = {
  __typename?: 'mb_views_nft_owned_tokens_stddev_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  listing_approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Mb_Views_Nft_Owned_Tokens_Stddev_Pop_Fields = {
  __typename?: 'mb_views_nft_owned_tokens_stddev_pop_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  listing_approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Mb_Views_Nft_Owned_Tokens_Stddev_Samp_Fields = {
  __typename?: 'mb_views_nft_owned_tokens_stddev_samp_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  listing_approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "mb_views_nft_owned_tokens" */
export type Mb_Views_Nft_Owned_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mb_Views_Nft_Owned_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mb_Views_Nft_Owned_Tokens_Stream_Cursor_Value_Input = {
  base_uri?: InputMaybe<Scalars['String']['input']>;
  burned_receipt_id?: InputMaybe<Scalars['String']['input']>;
  burned_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  copies?: InputMaybe<Scalars['bigint']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['timestamp']['input']>;
  extra?: InputMaybe<Scalars['String']['input']>;
  issued_at?: InputMaybe<Scalars['timestamp']['input']>;
  last_transfer_receipt_id?: InputMaybe<Scalars['String']['input']>;
  last_transfer_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  listing_approval_id?: InputMaybe<Scalars['numeric']['input']>;
  listing_kind?: InputMaybe<Scalars['String']['input']>;
  market_id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  media_hash?: InputMaybe<Scalars['String']['input']>;
  metadata_content_flag?: InputMaybe<Scalars['String']['input']>;
  metadata_id?: InputMaybe<Scalars['String']['input']>;
  mint_memo?: InputMaybe<Scalars['String']['input']>;
  minted_receipt_id?: InputMaybe<Scalars['String']['input']>;
  minted_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  minter?: InputMaybe<Scalars['String']['input']>;
  nft_contract_created_at?: InputMaybe<Scalars['timestamp']['input']>;
  nft_contract_icon?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  nft_contract_is_mintbase?: InputMaybe<Scalars['Boolean']['input']>;
  nft_contract_name?: InputMaybe<Scalars['String']['input']>;
  nft_contract_owner_id?: InputMaybe<Scalars['String']['input']>;
  nft_contract_reference?: InputMaybe<Scalars['String']['input']>;
  nft_contract_spec?: InputMaybe<Scalars['String']['input']>;
  nft_contract_symbol?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  reference_blob?: InputMaybe<Scalars['jsonb']['input']>;
  reference_hash?: InputMaybe<Scalars['String']['input']>;
  royalties?: InputMaybe<Scalars['jsonb']['input']>;
  royalties_percent?: InputMaybe<Scalars['Int']['input']>;
  splits?: InputMaybe<Scalars['jsonb']['input']>;
  starts_at?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Mb_Views_Nft_Owned_Tokens_Sum_Fields = {
  __typename?: 'mb_views_nft_owned_tokens_sum_fields';
  copies?: Maybe<Scalars['bigint']['output']>;
  listing_approval_id?: Maybe<Scalars['numeric']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  royalties_percent?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Mb_Views_Nft_Owned_Tokens_Var_Pop_Fields = {
  __typename?: 'mb_views_nft_owned_tokens_var_pop_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  listing_approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Mb_Views_Nft_Owned_Tokens_Var_Samp_Fields = {
  __typename?: 'mb_views_nft_owned_tokens_var_samp_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  listing_approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Mb_Views_Nft_Owned_Tokens_Variance_Fields = {
  __typename?: 'mb_views_nft_owned_tokens_variance_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  listing_approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "mb_views.nft_tokens" */
export type Mb_Views_Nft_Tokens = {
  __typename?: 'mb_views_nft_tokens';
  /** An array relationship */
  attributes: Array<Nft_Attributes>;
  /** An aggregate relationship */
  attributes_aggregate: Nft_Attributes_Aggregate;
  base_uri?: Maybe<Scalars['String']['output']>;
  burned_receipt_id?: Maybe<Scalars['String']['output']>;
  burned_timestamp?: Maybe<Scalars['timestamp']['output']>;
  copies?: Maybe<Scalars['bigint']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  issued_at?: Maybe<Scalars['timestamp']['output']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']['output']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  listings: Array<Nft_Listings>;
  /** An aggregate relationship */
  listings_aggregate: Nft_Listings_Aggregate;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_content_flag?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  mint_memo?: Maybe<Scalars['String']['output']>;
  minted_receipt_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_content_flag?: Maybe<Scalars['String']['output']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_icon?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  nft_contract_is_mintbase?: Maybe<Scalars['Boolean']['output']>;
  nft_contract_name?: Maybe<Scalars['String']['output']>;
  nft_contract_owner_id?: Maybe<Scalars['String']['output']>;
  nft_contract_reference?: Maybe<Scalars['String']['output']>;
  nft_contract_spec?: Maybe<Scalars['String']['output']>;
  nft_contract_symbol?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_blob?: Maybe<Scalars['jsonb']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  royalties?: Maybe<Scalars['jsonb']['output']>;
  royalties_percent?: Maybe<Scalars['Int']['output']>;
  splits?: Maybe<Scalars['jsonb']['output']>;
  starts_at?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "mb_views.nft_tokens" */
export type Mb_Views_Nft_TokensAttributesArgs = {
  distinct_on?: InputMaybe<Array<Nft_Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Attributes_Order_By>>;
  where?: InputMaybe<Nft_Attributes_Bool_Exp>;
};


/** columns and relationships of "mb_views.nft_tokens" */
export type Mb_Views_Nft_TokensAttributes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Attributes_Order_By>>;
  where?: InputMaybe<Nft_Attributes_Bool_Exp>;
};


/** columns and relationships of "mb_views.nft_tokens" */
export type Mb_Views_Nft_TokensListingsArgs = {
  distinct_on?: InputMaybe<Array<Nft_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Listings_Order_By>>;
  where?: InputMaybe<Nft_Listings_Bool_Exp>;
};


/** columns and relationships of "mb_views.nft_tokens" */
export type Mb_Views_Nft_TokensListings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Listings_Order_By>>;
  where?: InputMaybe<Nft_Listings_Bool_Exp>;
};


/** columns and relationships of "mb_views.nft_tokens" */
export type Mb_Views_Nft_TokensReference_BlobArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "mb_views.nft_tokens" */
export type Mb_Views_Nft_TokensRoyaltiesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "mb_views.nft_tokens" */
export type Mb_Views_Nft_TokensSplitsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "mb_views.nft_tokens" */
export type Mb_Views_Nft_Tokens_Aggregate = {
  __typename?: 'mb_views_nft_tokens_aggregate';
  aggregate?: Maybe<Mb_Views_Nft_Tokens_Aggregate_Fields>;
  nodes: Array<Mb_Views_Nft_Tokens>;
};

/** aggregate fields of "mb_views.nft_tokens" */
export type Mb_Views_Nft_Tokens_Aggregate_Fields = {
  __typename?: 'mb_views_nft_tokens_aggregate_fields';
  avg?: Maybe<Mb_Views_Nft_Tokens_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Mb_Views_Nft_Tokens_Max_Fields>;
  min?: Maybe<Mb_Views_Nft_Tokens_Min_Fields>;
  stddev?: Maybe<Mb_Views_Nft_Tokens_Stddev_Fields>;
  stddev_pop?: Maybe<Mb_Views_Nft_Tokens_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mb_Views_Nft_Tokens_Stddev_Samp_Fields>;
  sum?: Maybe<Mb_Views_Nft_Tokens_Sum_Fields>;
  var_pop?: Maybe<Mb_Views_Nft_Tokens_Var_Pop_Fields>;
  var_samp?: Maybe<Mb_Views_Nft_Tokens_Var_Samp_Fields>;
  variance?: Maybe<Mb_Views_Nft_Tokens_Variance_Fields>;
};


/** aggregate fields of "mb_views.nft_tokens" */
export type Mb_Views_Nft_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mb_Views_Nft_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Mb_Views_Nft_Tokens_Avg_Fields = {
  __typename?: 'mb_views_nft_tokens_avg_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_tokens". All fields are combined with a logical 'AND'. */
export type Mb_Views_Nft_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Mb_Views_Nft_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Mb_Views_Nft_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Mb_Views_Nft_Tokens_Bool_Exp>>;
  attributes?: InputMaybe<Nft_Attributes_Bool_Exp>;
  attributes_aggregate?: InputMaybe<Nft_Attributes_Aggregate_Bool_Exp>;
  base_uri?: InputMaybe<String_Comparison_Exp>;
  burned_receipt_id?: InputMaybe<String_Comparison_Exp>;
  burned_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  copies?: InputMaybe<Bigint_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamp_Comparison_Exp>;
  extra?: InputMaybe<String_Comparison_Exp>;
  issued_at?: InputMaybe<Timestamp_Comparison_Exp>;
  last_transfer_receipt_id?: InputMaybe<String_Comparison_Exp>;
  last_transfer_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  listings?: InputMaybe<Nft_Listings_Bool_Exp>;
  listings_aggregate?: InputMaybe<Nft_Listings_Aggregate_Bool_Exp>;
  media?: InputMaybe<String_Comparison_Exp>;
  media_hash?: InputMaybe<String_Comparison_Exp>;
  metadata_content_flag?: InputMaybe<String_Comparison_Exp>;
  metadata_id?: InputMaybe<String_Comparison_Exp>;
  mint_memo?: InputMaybe<String_Comparison_Exp>;
  minted_receipt_id?: InputMaybe<String_Comparison_Exp>;
  minted_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  minter?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_content_flag?: InputMaybe<String_Comparison_Exp>;
  nft_contract_created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  nft_contract_icon?: InputMaybe<String_Comparison_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  nft_contract_is_mintbase?: InputMaybe<Boolean_Comparison_Exp>;
  nft_contract_name?: InputMaybe<String_Comparison_Exp>;
  nft_contract_owner_id?: InputMaybe<String_Comparison_Exp>;
  nft_contract_reference?: InputMaybe<String_Comparison_Exp>;
  nft_contract_spec?: InputMaybe<String_Comparison_Exp>;
  nft_contract_symbol?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  reference?: InputMaybe<String_Comparison_Exp>;
  reference_blob?: InputMaybe<Jsonb_Comparison_Exp>;
  reference_hash?: InputMaybe<String_Comparison_Exp>;
  royalties?: InputMaybe<Jsonb_Comparison_Exp>;
  royalties_percent?: InputMaybe<Int_Comparison_Exp>;
  splits?: InputMaybe<Jsonb_Comparison_Exp>;
  starts_at?: InputMaybe<Timestamp_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Mb_Views_Nft_Tokens_Max_Fields = {
  __typename?: 'mb_views_nft_tokens_max_fields';
  base_uri?: Maybe<Scalars['String']['output']>;
  burned_receipt_id?: Maybe<Scalars['String']['output']>;
  burned_timestamp?: Maybe<Scalars['timestamp']['output']>;
  copies?: Maybe<Scalars['bigint']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  issued_at?: Maybe<Scalars['timestamp']['output']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']['output']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_content_flag?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  mint_memo?: Maybe<Scalars['String']['output']>;
  minted_receipt_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  nft_contract_content_flag?: Maybe<Scalars['String']['output']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_icon?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  nft_contract_name?: Maybe<Scalars['String']['output']>;
  nft_contract_owner_id?: Maybe<Scalars['String']['output']>;
  nft_contract_reference?: Maybe<Scalars['String']['output']>;
  nft_contract_spec?: Maybe<Scalars['String']['output']>;
  nft_contract_symbol?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  royalties_percent?: Maybe<Scalars['Int']['output']>;
  starts_at?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Mb_Views_Nft_Tokens_Min_Fields = {
  __typename?: 'mb_views_nft_tokens_min_fields';
  base_uri?: Maybe<Scalars['String']['output']>;
  burned_receipt_id?: Maybe<Scalars['String']['output']>;
  burned_timestamp?: Maybe<Scalars['timestamp']['output']>;
  copies?: Maybe<Scalars['bigint']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  issued_at?: Maybe<Scalars['timestamp']['output']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']['output']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_content_flag?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  mint_memo?: Maybe<Scalars['String']['output']>;
  minted_receipt_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  nft_contract_content_flag?: Maybe<Scalars['String']['output']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_icon?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  nft_contract_name?: Maybe<Scalars['String']['output']>;
  nft_contract_owner_id?: Maybe<Scalars['String']['output']>;
  nft_contract_reference?: Maybe<Scalars['String']['output']>;
  nft_contract_spec?: Maybe<Scalars['String']['output']>;
  nft_contract_symbol?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  royalties_percent?: Maybe<Scalars['Int']['output']>;
  starts_at?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** Ordering options when selecting data from "mb_views.nft_tokens". */
export type Mb_Views_Nft_Tokens_Order_By = {
  attributes_aggregate?: InputMaybe<Nft_Attributes_Aggregate_Order_By>;
  base_uri?: InputMaybe<Order_By>;
  burned_receipt_id?: InputMaybe<Order_By>;
  burned_timestamp?: InputMaybe<Order_By>;
  copies?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  extra?: InputMaybe<Order_By>;
  issued_at?: InputMaybe<Order_By>;
  last_transfer_receipt_id?: InputMaybe<Order_By>;
  last_transfer_timestamp?: InputMaybe<Order_By>;
  listings_aggregate?: InputMaybe<Nft_Listings_Aggregate_Order_By>;
  media?: InputMaybe<Order_By>;
  media_hash?: InputMaybe<Order_By>;
  metadata_content_flag?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  mint_memo?: InputMaybe<Order_By>;
  minted_receipt_id?: InputMaybe<Order_By>;
  minted_timestamp?: InputMaybe<Order_By>;
  minter?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_content_flag?: InputMaybe<Order_By>;
  nft_contract_created_at?: InputMaybe<Order_By>;
  nft_contract_icon?: InputMaybe<Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_contract_is_mintbase?: InputMaybe<Order_By>;
  nft_contract_name?: InputMaybe<Order_By>;
  nft_contract_owner_id?: InputMaybe<Order_By>;
  nft_contract_reference?: InputMaybe<Order_By>;
  nft_contract_spec?: InputMaybe<Order_By>;
  nft_contract_symbol?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  reference?: InputMaybe<Order_By>;
  reference_blob?: InputMaybe<Order_By>;
  reference_hash?: InputMaybe<Order_By>;
  royalties?: InputMaybe<Order_By>;
  royalties_percent?: InputMaybe<Order_By>;
  splits?: InputMaybe<Order_By>;
  starts_at?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "mb_views.nft_tokens" */
export enum Mb_Views_Nft_Tokens_Select_Column {
  /** column name */
  BaseUri = 'base_uri',
  /** column name */
  BurnedReceiptId = 'burned_receipt_id',
  /** column name */
  BurnedTimestamp = 'burned_timestamp',
  /** column name */
  Copies = 'copies',
  /** column name */
  Description = 'description',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Extra = 'extra',
  /** column name */
  IssuedAt = 'issued_at',
  /** column name */
  LastTransferReceiptId = 'last_transfer_receipt_id',
  /** column name */
  LastTransferTimestamp = 'last_transfer_timestamp',
  /** column name */
  Media = 'media',
  /** column name */
  MediaHash = 'media_hash',
  /** column name */
  MetadataContentFlag = 'metadata_content_flag',
  /** column name */
  MetadataId = 'metadata_id',
  /** column name */
  MintMemo = 'mint_memo',
  /** column name */
  MintedReceiptId = 'minted_receipt_id',
  /** column name */
  MintedTimestamp = 'minted_timestamp',
  /** column name */
  Minter = 'minter',
  /** column name */
  NftContractContentFlag = 'nft_contract_content_flag',
  /** column name */
  NftContractCreatedAt = 'nft_contract_created_at',
  /** column name */
  NftContractIcon = 'nft_contract_icon',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  NftContractIsMintbase = 'nft_contract_is_mintbase',
  /** column name */
  NftContractName = 'nft_contract_name',
  /** column name */
  NftContractOwnerId = 'nft_contract_owner_id',
  /** column name */
  NftContractReference = 'nft_contract_reference',
  /** column name */
  NftContractSpec = 'nft_contract_spec',
  /** column name */
  NftContractSymbol = 'nft_contract_symbol',
  /** column name */
  Owner = 'owner',
  /** column name */
  Reference = 'reference',
  /** column name */
  ReferenceBlob = 'reference_blob',
  /** column name */
  ReferenceHash = 'reference_hash',
  /** column name */
  Royalties = 'royalties',
  /** column name */
  RoyaltiesPercent = 'royalties_percent',
  /** column name */
  Splits = 'splits',
  /** column name */
  StartsAt = 'starts_at',
  /** column name */
  Title = 'title',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Mb_Views_Nft_Tokens_Stddev_Fields = {
  __typename?: 'mb_views_nft_tokens_stddev_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Mb_Views_Nft_Tokens_Stddev_Pop_Fields = {
  __typename?: 'mb_views_nft_tokens_stddev_pop_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Mb_Views_Nft_Tokens_Stddev_Samp_Fields = {
  __typename?: 'mb_views_nft_tokens_stddev_samp_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "mb_views_nft_tokens" */
export type Mb_Views_Nft_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mb_Views_Nft_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mb_Views_Nft_Tokens_Stream_Cursor_Value_Input = {
  base_uri?: InputMaybe<Scalars['String']['input']>;
  burned_receipt_id?: InputMaybe<Scalars['String']['input']>;
  burned_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  copies?: InputMaybe<Scalars['bigint']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['timestamp']['input']>;
  extra?: InputMaybe<Scalars['String']['input']>;
  issued_at?: InputMaybe<Scalars['timestamp']['input']>;
  last_transfer_receipt_id?: InputMaybe<Scalars['String']['input']>;
  last_transfer_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  media_hash?: InputMaybe<Scalars['String']['input']>;
  metadata_content_flag?: InputMaybe<Scalars['String']['input']>;
  metadata_id?: InputMaybe<Scalars['String']['input']>;
  mint_memo?: InputMaybe<Scalars['String']['input']>;
  minted_receipt_id?: InputMaybe<Scalars['String']['input']>;
  minted_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  minter?: InputMaybe<Scalars['String']['input']>;
  nft_contract_content_flag?: InputMaybe<Scalars['String']['input']>;
  nft_contract_created_at?: InputMaybe<Scalars['timestamp']['input']>;
  nft_contract_icon?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  nft_contract_is_mintbase?: InputMaybe<Scalars['Boolean']['input']>;
  nft_contract_name?: InputMaybe<Scalars['String']['input']>;
  nft_contract_owner_id?: InputMaybe<Scalars['String']['input']>;
  nft_contract_reference?: InputMaybe<Scalars['String']['input']>;
  nft_contract_spec?: InputMaybe<Scalars['String']['input']>;
  nft_contract_symbol?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  reference_blob?: InputMaybe<Scalars['jsonb']['input']>;
  reference_hash?: InputMaybe<Scalars['String']['input']>;
  royalties?: InputMaybe<Scalars['jsonb']['input']>;
  royalties_percent?: InputMaybe<Scalars['Int']['input']>;
  splits?: InputMaybe<Scalars['jsonb']['input']>;
  starts_at?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Mb_Views_Nft_Tokens_Sum_Fields = {
  __typename?: 'mb_views_nft_tokens_sum_fields';
  copies?: Maybe<Scalars['bigint']['output']>;
  royalties_percent?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Mb_Views_Nft_Tokens_Var_Pop_Fields = {
  __typename?: 'mb_views_nft_tokens_var_pop_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Mb_Views_Nft_Tokens_Var_Samp_Fields = {
  __typename?: 'mb_views_nft_tokens_var_samp_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Mb_Views_Nft_Tokens_Variance_Fields = {
  __typename?: 'mb_views_nft_tokens_variance_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "mb_views.nft_tokens_with_listing" */
export type Mb_Views_Nft_Tokens_With_Listing = {
  __typename?: 'mb_views_nft_tokens_with_listing';
  content_flag?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']['output']>;
  listing_kind?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_metadata?: Maybe<Nft_Metadata>;
  /** An object relationship */
  nft_token?: Maybe<Nft_Tokens>;
  owner?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  reference_blob?: Maybe<Scalars['jsonb']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "mb_views.nft_tokens_with_listing" */
export type Mb_Views_Nft_Tokens_With_ListingReference_BlobArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "mb_views.nft_tokens_with_listing" */
export type Mb_Views_Nft_Tokens_With_Listing_Aggregate = {
  __typename?: 'mb_views_nft_tokens_with_listing_aggregate';
  aggregate?: Maybe<Mb_Views_Nft_Tokens_With_Listing_Aggregate_Fields>;
  nodes: Array<Mb_Views_Nft_Tokens_With_Listing>;
};

/** aggregate fields of "mb_views.nft_tokens_with_listing" */
export type Mb_Views_Nft_Tokens_With_Listing_Aggregate_Fields = {
  __typename?: 'mb_views_nft_tokens_with_listing_aggregate_fields';
  avg?: Maybe<Mb_Views_Nft_Tokens_With_Listing_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Mb_Views_Nft_Tokens_With_Listing_Max_Fields>;
  min?: Maybe<Mb_Views_Nft_Tokens_With_Listing_Min_Fields>;
  stddev?: Maybe<Mb_Views_Nft_Tokens_With_Listing_Stddev_Fields>;
  stddev_pop?: Maybe<Mb_Views_Nft_Tokens_With_Listing_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mb_Views_Nft_Tokens_With_Listing_Stddev_Samp_Fields>;
  sum?: Maybe<Mb_Views_Nft_Tokens_With_Listing_Sum_Fields>;
  var_pop?: Maybe<Mb_Views_Nft_Tokens_With_Listing_Var_Pop_Fields>;
  var_samp?: Maybe<Mb_Views_Nft_Tokens_With_Listing_Var_Samp_Fields>;
  variance?: Maybe<Mb_Views_Nft_Tokens_With_Listing_Variance_Fields>;
};


/** aggregate fields of "mb_views.nft_tokens_with_listing" */
export type Mb_Views_Nft_Tokens_With_Listing_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Listing_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Mb_Views_Nft_Tokens_With_Listing_Avg_Fields = {
  __typename?: 'mb_views_nft_tokens_with_listing_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_tokens_with_listing". All fields are combined with a logical 'AND'. */
export type Mb_Views_Nft_Tokens_With_Listing_Bool_Exp = {
  _and?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Listing_Bool_Exp>>;
  _not?: InputMaybe<Mb_Views_Nft_Tokens_With_Listing_Bool_Exp>;
  _or?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Listing_Bool_Exp>>;
  content_flag?: InputMaybe<String_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  last_transfer_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  listing_kind?: InputMaybe<String_Comparison_Exp>;
  market_id?: InputMaybe<String_Comparison_Exp>;
  metadata_id?: InputMaybe<String_Comparison_Exp>;
  minted_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  nft_metadata?: InputMaybe<Nft_Metadata_Bool_Exp>;
  nft_token?: InputMaybe<Nft_Tokens_Bool_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  reference_blob?: InputMaybe<Jsonb_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Mb_Views_Nft_Tokens_With_Listing_Max_Fields = {
  __typename?: 'mb_views_nft_tokens_with_listing_max_fields';
  content_flag?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']['output']>;
  listing_kind?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Mb_Views_Nft_Tokens_With_Listing_Min_Fields = {
  __typename?: 'mb_views_nft_tokens_with_listing_min_fields';
  content_flag?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']['output']>;
  listing_kind?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "mb_views.nft_tokens_with_listing". */
export type Mb_Views_Nft_Tokens_With_Listing_Order_By = {
  content_flag?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  last_transfer_timestamp?: InputMaybe<Order_By>;
  listing_kind?: InputMaybe<Order_By>;
  market_id?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  minted_timestamp?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_metadata?: InputMaybe<Nft_Metadata_Order_By>;
  nft_token?: InputMaybe<Nft_Tokens_Order_By>;
  owner?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  reference_blob?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "mb_views.nft_tokens_with_listing" */
export enum Mb_Views_Nft_Tokens_With_Listing_Select_Column {
  /** column name */
  ContentFlag = 'content_flag',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  LastTransferTimestamp = 'last_transfer_timestamp',
  /** column name */
  ListingKind = 'listing_kind',
  /** column name */
  MarketId = 'market_id',
  /** column name */
  MetadataId = 'metadata_id',
  /** column name */
  MintedTimestamp = 'minted_timestamp',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  Owner = 'owner',
  /** column name */
  Price = 'price',
  /** column name */
  ReferenceBlob = 'reference_blob',
  /** column name */
  Title = 'title',
  /** column name */
  TokenId = 'token_id'
}

/** aggregate stddev on columns */
export type Mb_Views_Nft_Tokens_With_Listing_Stddev_Fields = {
  __typename?: 'mb_views_nft_tokens_with_listing_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Mb_Views_Nft_Tokens_With_Listing_Stddev_Pop_Fields = {
  __typename?: 'mb_views_nft_tokens_with_listing_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Mb_Views_Nft_Tokens_With_Listing_Stddev_Samp_Fields = {
  __typename?: 'mb_views_nft_tokens_with_listing_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "mb_views_nft_tokens_with_listing" */
export type Mb_Views_Nft_Tokens_With_Listing_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mb_Views_Nft_Tokens_With_Listing_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mb_Views_Nft_Tokens_With_Listing_Stream_Cursor_Value_Input = {
  content_flag?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  last_transfer_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  listing_kind?: InputMaybe<Scalars['String']['input']>;
  market_id?: InputMaybe<Scalars['String']['input']>;
  metadata_id?: InputMaybe<Scalars['String']['input']>;
  minted_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  reference_blob?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Mb_Views_Nft_Tokens_With_Listing_Sum_Fields = {
  __typename?: 'mb_views_nft_tokens_with_listing_sum_fields';
  price?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Mb_Views_Nft_Tokens_With_Listing_Var_Pop_Fields = {
  __typename?: 'mb_views_nft_tokens_with_listing_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Mb_Views_Nft_Tokens_With_Listing_Var_Samp_Fields = {
  __typename?: 'mb_views_nft_tokens_with_listing_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Mb_Views_Nft_Tokens_With_Listing_Variance_Fields = {
  __typename?: 'mb_views_nft_tokens_with_listing_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "mb_views.nft_tokens_with_media_type" */
export type Mb_Views_Nft_Tokens_With_Media_Type = {
  __typename?: 'mb_views_nft_tokens_with_media_type';
  base_uri?: Maybe<Scalars['String']['output']>;
  burned_receipt_id?: Maybe<Scalars['String']['output']>;
  burned_timestamp?: Maybe<Scalars['timestamp']['output']>;
  copies?: Maybe<Scalars['bigint']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  forever_media_type?: Maybe<Scalars['String']['output']>;
  forever_media_url?: Maybe<Scalars['String']['output']>;
  issued_at?: Maybe<Scalars['timestamp']['output']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']['output']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  listings: Array<Nft_Listings>;
  /** An aggregate relationship */
  listings_aggregate: Nft_Listings_Aggregate;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_content_flag?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  mint_memo?: Maybe<Scalars['String']['output']>;
  minted_receipt_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_content_flag?: Maybe<Scalars['String']['output']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_icon?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  nft_contract_is_mintbase?: Maybe<Scalars['Boolean']['output']>;
  nft_contract_name?: Maybe<Scalars['String']['output']>;
  nft_contract_owner_id?: Maybe<Scalars['String']['output']>;
  nft_contract_reference?: Maybe<Scalars['String']['output']>;
  nft_contract_spec?: Maybe<Scalars['String']['output']>;
  nft_contract_symbol?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_blob?: Maybe<Scalars['jsonb']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  royalties?: Maybe<Scalars['jsonb']['output']>;
  royalties_percent?: Maybe<Scalars['Int']['output']>;
  splits?: Maybe<Scalars['jsonb']['output']>;
  starts_at?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "mb_views.nft_tokens_with_media_type" */
export type Mb_Views_Nft_Tokens_With_Media_TypeListingsArgs = {
  distinct_on?: InputMaybe<Array<Nft_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Listings_Order_By>>;
  where?: InputMaybe<Nft_Listings_Bool_Exp>;
};


/** columns and relationships of "mb_views.nft_tokens_with_media_type" */
export type Mb_Views_Nft_Tokens_With_Media_TypeListings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Listings_Order_By>>;
  where?: InputMaybe<Nft_Listings_Bool_Exp>;
};


/** columns and relationships of "mb_views.nft_tokens_with_media_type" */
export type Mb_Views_Nft_Tokens_With_Media_TypeReference_BlobArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "mb_views.nft_tokens_with_media_type" */
export type Mb_Views_Nft_Tokens_With_Media_TypeRoyaltiesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "mb_views.nft_tokens_with_media_type" */
export type Mb_Views_Nft_Tokens_With_Media_TypeSplitsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "mb_views.nft_tokens_with_media_type" */
export type Mb_Views_Nft_Tokens_With_Media_Type_Aggregate = {
  __typename?: 'mb_views_nft_tokens_with_media_type_aggregate';
  aggregate?: Maybe<Mb_Views_Nft_Tokens_With_Media_Type_Aggregate_Fields>;
  nodes: Array<Mb_Views_Nft_Tokens_With_Media_Type>;
};

/** aggregate fields of "mb_views.nft_tokens_with_media_type" */
export type Mb_Views_Nft_Tokens_With_Media_Type_Aggregate_Fields = {
  __typename?: 'mb_views_nft_tokens_with_media_type_aggregate_fields';
  avg?: Maybe<Mb_Views_Nft_Tokens_With_Media_Type_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Mb_Views_Nft_Tokens_With_Media_Type_Max_Fields>;
  min?: Maybe<Mb_Views_Nft_Tokens_With_Media_Type_Min_Fields>;
  stddev?: Maybe<Mb_Views_Nft_Tokens_With_Media_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Mb_Views_Nft_Tokens_With_Media_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mb_Views_Nft_Tokens_With_Media_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Mb_Views_Nft_Tokens_With_Media_Type_Sum_Fields>;
  var_pop?: Maybe<Mb_Views_Nft_Tokens_With_Media_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Mb_Views_Nft_Tokens_With_Media_Type_Var_Samp_Fields>;
  variance?: Maybe<Mb_Views_Nft_Tokens_With_Media_Type_Variance_Fields>;
};


/** aggregate fields of "mb_views.nft_tokens_with_media_type" */
export type Mb_Views_Nft_Tokens_With_Media_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Media_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Mb_Views_Nft_Tokens_With_Media_Type_Avg_Fields = {
  __typename?: 'mb_views_nft_tokens_with_media_type_avg_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_tokens_with_media_type". All fields are combined with a logical 'AND'. */
export type Mb_Views_Nft_Tokens_With_Media_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Media_Type_Bool_Exp>>;
  _not?: InputMaybe<Mb_Views_Nft_Tokens_With_Media_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Media_Type_Bool_Exp>>;
  base_uri?: InputMaybe<String_Comparison_Exp>;
  burned_receipt_id?: InputMaybe<String_Comparison_Exp>;
  burned_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  copies?: InputMaybe<Bigint_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamp_Comparison_Exp>;
  extra?: InputMaybe<String_Comparison_Exp>;
  forever_media_type?: InputMaybe<String_Comparison_Exp>;
  forever_media_url?: InputMaybe<String_Comparison_Exp>;
  issued_at?: InputMaybe<Timestamp_Comparison_Exp>;
  last_transfer_receipt_id?: InputMaybe<String_Comparison_Exp>;
  last_transfer_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  listings?: InputMaybe<Nft_Listings_Bool_Exp>;
  listings_aggregate?: InputMaybe<Nft_Listings_Aggregate_Bool_Exp>;
  media?: InputMaybe<String_Comparison_Exp>;
  media_hash?: InputMaybe<String_Comparison_Exp>;
  metadata_content_flag?: InputMaybe<String_Comparison_Exp>;
  metadata_id?: InputMaybe<String_Comparison_Exp>;
  mint_memo?: InputMaybe<String_Comparison_Exp>;
  minted_receipt_id?: InputMaybe<String_Comparison_Exp>;
  minted_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  minter?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_content_flag?: InputMaybe<String_Comparison_Exp>;
  nft_contract_created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  nft_contract_icon?: InputMaybe<String_Comparison_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  nft_contract_is_mintbase?: InputMaybe<Boolean_Comparison_Exp>;
  nft_contract_name?: InputMaybe<String_Comparison_Exp>;
  nft_contract_owner_id?: InputMaybe<String_Comparison_Exp>;
  nft_contract_reference?: InputMaybe<String_Comparison_Exp>;
  nft_contract_spec?: InputMaybe<String_Comparison_Exp>;
  nft_contract_symbol?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  reference?: InputMaybe<String_Comparison_Exp>;
  reference_blob?: InputMaybe<Jsonb_Comparison_Exp>;
  reference_hash?: InputMaybe<String_Comparison_Exp>;
  royalties?: InputMaybe<Jsonb_Comparison_Exp>;
  royalties_percent?: InputMaybe<Int_Comparison_Exp>;
  splits?: InputMaybe<Jsonb_Comparison_Exp>;
  starts_at?: InputMaybe<Timestamp_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Mb_Views_Nft_Tokens_With_Media_Type_Max_Fields = {
  __typename?: 'mb_views_nft_tokens_with_media_type_max_fields';
  base_uri?: Maybe<Scalars['String']['output']>;
  burned_receipt_id?: Maybe<Scalars['String']['output']>;
  burned_timestamp?: Maybe<Scalars['timestamp']['output']>;
  copies?: Maybe<Scalars['bigint']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  forever_media_type?: Maybe<Scalars['String']['output']>;
  forever_media_url?: Maybe<Scalars['String']['output']>;
  issued_at?: Maybe<Scalars['timestamp']['output']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']['output']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_content_flag?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  mint_memo?: Maybe<Scalars['String']['output']>;
  minted_receipt_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  nft_contract_content_flag?: Maybe<Scalars['String']['output']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_icon?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  nft_contract_name?: Maybe<Scalars['String']['output']>;
  nft_contract_owner_id?: Maybe<Scalars['String']['output']>;
  nft_contract_reference?: Maybe<Scalars['String']['output']>;
  nft_contract_spec?: Maybe<Scalars['String']['output']>;
  nft_contract_symbol?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  royalties_percent?: Maybe<Scalars['Int']['output']>;
  starts_at?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Mb_Views_Nft_Tokens_With_Media_Type_Min_Fields = {
  __typename?: 'mb_views_nft_tokens_with_media_type_min_fields';
  base_uri?: Maybe<Scalars['String']['output']>;
  burned_receipt_id?: Maybe<Scalars['String']['output']>;
  burned_timestamp?: Maybe<Scalars['timestamp']['output']>;
  copies?: Maybe<Scalars['bigint']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  forever_media_type?: Maybe<Scalars['String']['output']>;
  forever_media_url?: Maybe<Scalars['String']['output']>;
  issued_at?: Maybe<Scalars['timestamp']['output']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']['output']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  metadata_content_flag?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  mint_memo?: Maybe<Scalars['String']['output']>;
  minted_receipt_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  nft_contract_content_flag?: Maybe<Scalars['String']['output']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_icon?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  nft_contract_name?: Maybe<Scalars['String']['output']>;
  nft_contract_owner_id?: Maybe<Scalars['String']['output']>;
  nft_contract_reference?: Maybe<Scalars['String']['output']>;
  nft_contract_spec?: Maybe<Scalars['String']['output']>;
  nft_contract_symbol?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  royalties_percent?: Maybe<Scalars['Int']['output']>;
  starts_at?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** Ordering options when selecting data from "mb_views.nft_tokens_with_media_type". */
export type Mb_Views_Nft_Tokens_With_Media_Type_Order_By = {
  base_uri?: InputMaybe<Order_By>;
  burned_receipt_id?: InputMaybe<Order_By>;
  burned_timestamp?: InputMaybe<Order_By>;
  copies?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  extra?: InputMaybe<Order_By>;
  forever_media_type?: InputMaybe<Order_By>;
  forever_media_url?: InputMaybe<Order_By>;
  issued_at?: InputMaybe<Order_By>;
  last_transfer_receipt_id?: InputMaybe<Order_By>;
  last_transfer_timestamp?: InputMaybe<Order_By>;
  listings_aggregate?: InputMaybe<Nft_Listings_Aggregate_Order_By>;
  media?: InputMaybe<Order_By>;
  media_hash?: InputMaybe<Order_By>;
  metadata_content_flag?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  mint_memo?: InputMaybe<Order_By>;
  minted_receipt_id?: InputMaybe<Order_By>;
  minted_timestamp?: InputMaybe<Order_By>;
  minter?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_content_flag?: InputMaybe<Order_By>;
  nft_contract_created_at?: InputMaybe<Order_By>;
  nft_contract_icon?: InputMaybe<Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_contract_is_mintbase?: InputMaybe<Order_By>;
  nft_contract_name?: InputMaybe<Order_By>;
  nft_contract_owner_id?: InputMaybe<Order_By>;
  nft_contract_reference?: InputMaybe<Order_By>;
  nft_contract_spec?: InputMaybe<Order_By>;
  nft_contract_symbol?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  reference?: InputMaybe<Order_By>;
  reference_blob?: InputMaybe<Order_By>;
  reference_hash?: InputMaybe<Order_By>;
  royalties?: InputMaybe<Order_By>;
  royalties_percent?: InputMaybe<Order_By>;
  splits?: InputMaybe<Order_By>;
  starts_at?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "mb_views.nft_tokens_with_media_type" */
export enum Mb_Views_Nft_Tokens_With_Media_Type_Select_Column {
  /** column name */
  BaseUri = 'base_uri',
  /** column name */
  BurnedReceiptId = 'burned_receipt_id',
  /** column name */
  BurnedTimestamp = 'burned_timestamp',
  /** column name */
  Copies = 'copies',
  /** column name */
  Description = 'description',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Extra = 'extra',
  /** column name */
  ForeverMediaType = 'forever_media_type',
  /** column name */
  ForeverMediaUrl = 'forever_media_url',
  /** column name */
  IssuedAt = 'issued_at',
  /** column name */
  LastTransferReceiptId = 'last_transfer_receipt_id',
  /** column name */
  LastTransferTimestamp = 'last_transfer_timestamp',
  /** column name */
  Media = 'media',
  /** column name */
  MediaHash = 'media_hash',
  /** column name */
  MetadataContentFlag = 'metadata_content_flag',
  /** column name */
  MetadataId = 'metadata_id',
  /** column name */
  MintMemo = 'mint_memo',
  /** column name */
  MintedReceiptId = 'minted_receipt_id',
  /** column name */
  MintedTimestamp = 'minted_timestamp',
  /** column name */
  Minter = 'minter',
  /** column name */
  NftContractContentFlag = 'nft_contract_content_flag',
  /** column name */
  NftContractCreatedAt = 'nft_contract_created_at',
  /** column name */
  NftContractIcon = 'nft_contract_icon',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  NftContractIsMintbase = 'nft_contract_is_mintbase',
  /** column name */
  NftContractName = 'nft_contract_name',
  /** column name */
  NftContractOwnerId = 'nft_contract_owner_id',
  /** column name */
  NftContractReference = 'nft_contract_reference',
  /** column name */
  NftContractSpec = 'nft_contract_spec',
  /** column name */
  NftContractSymbol = 'nft_contract_symbol',
  /** column name */
  Owner = 'owner',
  /** column name */
  Reference = 'reference',
  /** column name */
  ReferenceBlob = 'reference_blob',
  /** column name */
  ReferenceHash = 'reference_hash',
  /** column name */
  Royalties = 'royalties',
  /** column name */
  RoyaltiesPercent = 'royalties_percent',
  /** column name */
  Splits = 'splits',
  /** column name */
  StartsAt = 'starts_at',
  /** column name */
  Title = 'title',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Mb_Views_Nft_Tokens_With_Media_Type_Stddev_Fields = {
  __typename?: 'mb_views_nft_tokens_with_media_type_stddev_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Mb_Views_Nft_Tokens_With_Media_Type_Stddev_Pop_Fields = {
  __typename?: 'mb_views_nft_tokens_with_media_type_stddev_pop_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Mb_Views_Nft_Tokens_With_Media_Type_Stddev_Samp_Fields = {
  __typename?: 'mb_views_nft_tokens_with_media_type_stddev_samp_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "mb_views_nft_tokens_with_media_type" */
export type Mb_Views_Nft_Tokens_With_Media_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mb_Views_Nft_Tokens_With_Media_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mb_Views_Nft_Tokens_With_Media_Type_Stream_Cursor_Value_Input = {
  base_uri?: InputMaybe<Scalars['String']['input']>;
  burned_receipt_id?: InputMaybe<Scalars['String']['input']>;
  burned_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  copies?: InputMaybe<Scalars['bigint']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['timestamp']['input']>;
  extra?: InputMaybe<Scalars['String']['input']>;
  forever_media_type?: InputMaybe<Scalars['String']['input']>;
  forever_media_url?: InputMaybe<Scalars['String']['input']>;
  issued_at?: InputMaybe<Scalars['timestamp']['input']>;
  last_transfer_receipt_id?: InputMaybe<Scalars['String']['input']>;
  last_transfer_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  media_hash?: InputMaybe<Scalars['String']['input']>;
  metadata_content_flag?: InputMaybe<Scalars['String']['input']>;
  metadata_id?: InputMaybe<Scalars['String']['input']>;
  mint_memo?: InputMaybe<Scalars['String']['input']>;
  minted_receipt_id?: InputMaybe<Scalars['String']['input']>;
  minted_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  minter?: InputMaybe<Scalars['String']['input']>;
  nft_contract_content_flag?: InputMaybe<Scalars['String']['input']>;
  nft_contract_created_at?: InputMaybe<Scalars['timestamp']['input']>;
  nft_contract_icon?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  nft_contract_is_mintbase?: InputMaybe<Scalars['Boolean']['input']>;
  nft_contract_name?: InputMaybe<Scalars['String']['input']>;
  nft_contract_owner_id?: InputMaybe<Scalars['String']['input']>;
  nft_contract_reference?: InputMaybe<Scalars['String']['input']>;
  nft_contract_spec?: InputMaybe<Scalars['String']['input']>;
  nft_contract_symbol?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  reference_blob?: InputMaybe<Scalars['jsonb']['input']>;
  reference_hash?: InputMaybe<Scalars['String']['input']>;
  royalties?: InputMaybe<Scalars['jsonb']['input']>;
  royalties_percent?: InputMaybe<Scalars['Int']['input']>;
  splits?: InputMaybe<Scalars['jsonb']['input']>;
  starts_at?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Mb_Views_Nft_Tokens_With_Media_Type_Sum_Fields = {
  __typename?: 'mb_views_nft_tokens_with_media_type_sum_fields';
  copies?: Maybe<Scalars['bigint']['output']>;
  royalties_percent?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Mb_Views_Nft_Tokens_With_Media_Type_Var_Pop_Fields = {
  __typename?: 'mb_views_nft_tokens_with_media_type_var_pop_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Mb_Views_Nft_Tokens_With_Media_Type_Var_Samp_Fields = {
  __typename?: 'mb_views_nft_tokens_with_media_type_var_samp_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Mb_Views_Nft_Tokens_With_Media_Type_Variance_Fields = {
  __typename?: 'mb_views_nft_tokens_with_media_type_variance_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "mb_views.top_stores" */
export type Mb_Views_Top_Stores = {
  __typename?: 'mb_views_top_stores';
  date?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['numeric']['output']>;
};

/** aggregated selection of "mb_views.top_stores" */
export type Mb_Views_Top_Stores_Aggregate = {
  __typename?: 'mb_views_top_stores_aggregate';
  aggregate?: Maybe<Mb_Views_Top_Stores_Aggregate_Fields>;
  nodes: Array<Mb_Views_Top_Stores>;
};

/** aggregate fields of "mb_views.top_stores" */
export type Mb_Views_Top_Stores_Aggregate_Fields = {
  __typename?: 'mb_views_top_stores_aggregate_fields';
  avg?: Maybe<Mb_Views_Top_Stores_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Mb_Views_Top_Stores_Max_Fields>;
  min?: Maybe<Mb_Views_Top_Stores_Min_Fields>;
  stddev?: Maybe<Mb_Views_Top_Stores_Stddev_Fields>;
  stddev_pop?: Maybe<Mb_Views_Top_Stores_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mb_Views_Top_Stores_Stddev_Samp_Fields>;
  sum?: Maybe<Mb_Views_Top_Stores_Sum_Fields>;
  var_pop?: Maybe<Mb_Views_Top_Stores_Var_Pop_Fields>;
  var_samp?: Maybe<Mb_Views_Top_Stores_Var_Samp_Fields>;
  variance?: Maybe<Mb_Views_Top_Stores_Variance_Fields>;
};


/** aggregate fields of "mb_views.top_stores" */
export type Mb_Views_Top_Stores_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mb_Views_Top_Stores_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Mb_Views_Top_Stores_Avg_Fields = {
  __typename?: 'mb_views_top_stores_avg_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "mb_views.top_stores". All fields are combined with a logical 'AND'. */
export type Mb_Views_Top_Stores_Bool_Exp = {
  _and?: InputMaybe<Array<Mb_Views_Top_Stores_Bool_Exp>>;
  _not?: InputMaybe<Mb_Views_Top_Stores_Bool_Exp>;
  _or?: InputMaybe<Array<Mb_Views_Top_Stores_Bool_Exp>>;
  date?: InputMaybe<Timestamp_Comparison_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  total?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Mb_Views_Top_Stores_Max_Fields = {
  __typename?: 'mb_views_top_stores_max_fields';
  date?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Mb_Views_Top_Stores_Min_Fields = {
  __typename?: 'mb_views_top_stores_min_fields';
  date?: Maybe<Scalars['timestamp']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['numeric']['output']>;
};

/** Ordering options when selecting data from "mb_views.top_stores". */
export type Mb_Views_Top_Stores_Order_By = {
  date?: InputMaybe<Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
};

/** select columns of table "mb_views.top_stores" */
export enum Mb_Views_Top_Stores_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  Total = 'total'
}

/** aggregate stddev on columns */
export type Mb_Views_Top_Stores_Stddev_Fields = {
  __typename?: 'mb_views_top_stores_stddev_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Mb_Views_Top_Stores_Stddev_Pop_Fields = {
  __typename?: 'mb_views_top_stores_stddev_pop_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Mb_Views_Top_Stores_Stddev_Samp_Fields = {
  __typename?: 'mb_views_top_stores_stddev_samp_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "mb_views_top_stores" */
export type Mb_Views_Top_Stores_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mb_Views_Top_Stores_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mb_Views_Top_Stores_Stream_Cursor_Value_Input = {
  date?: InputMaybe<Scalars['timestamp']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Mb_Views_Top_Stores_Sum_Fields = {
  __typename?: 'mb_views_top_stores_sum_fields';
  total?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Mb_Views_Top_Stores_Var_Pop_Fields = {
  __typename?: 'mb_views_top_stores_var_pop_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Mb_Views_Top_Stores_Var_Samp_Fields = {
  __typename?: 'mb_views_top_stores_var_samp_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Mb_Views_Top_Stores_Variance_Fields = {
  __typename?: 'mb_views_top_stores_variance_fields';
  total?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "nft_activities" */
export type Nft_Activities = {
  __typename?: 'nft_activities';
  action_receiver?: Maybe<Scalars['String']['output']>;
  action_sender?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  kind: Scalars['String']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_id: Scalars['String']['output'];
  /** An object relationship */
  nft_contracts?: Maybe<Nft_Contracts>;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id: Scalars['String']['output'];
  timestamp: Scalars['timestamp']['output'];
  token_id: Scalars['String']['output'];
  tx_sender: Scalars['String']['output'];
};

/** aggregated selection of "nft_activities" */
export type Nft_Activities_Aggregate = {
  __typename?: 'nft_activities_aggregate';
  aggregate?: Maybe<Nft_Activities_Aggregate_Fields>;
  nodes: Array<Nft_Activities>;
};

/** aggregate fields of "nft_activities" */
export type Nft_Activities_Aggregate_Fields = {
  __typename?: 'nft_activities_aggregate_fields';
  avg?: Maybe<Nft_Activities_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nft_Activities_Max_Fields>;
  min?: Maybe<Nft_Activities_Min_Fields>;
  stddev?: Maybe<Nft_Activities_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Activities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Activities_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Activities_Sum_Fields>;
  var_pop?: Maybe<Nft_Activities_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Activities_Var_Samp_Fields>;
  variance?: Maybe<Nft_Activities_Variance_Fields>;
};


/** aggregate fields of "nft_activities" */
export type Nft_Activities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Activities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nft_Activities_Avg_Fields = {
  __typename?: 'nft_activities_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nft_activities". All fields are combined with a logical 'AND'. */
export type Nft_Activities_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Activities_Bool_Exp>>;
  _not?: InputMaybe<Nft_Activities_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Activities_Bool_Exp>>;
  action_receiver?: InputMaybe<String_Comparison_Exp>;
  action_sender?: InputMaybe<String_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  kind?: InputMaybe<String_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  nft_contracts?: InputMaybe<Nft_Contracts_Bool_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  receipt_id?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  tx_sender?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nft_Activities_Max_Fields = {
  __typename?: 'nft_activities_max_fields';
  action_receiver?: Maybe<Scalars['String']['output']>;
  action_sender?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  tx_sender?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Nft_Activities_Min_Fields = {
  __typename?: 'nft_activities_min_fields';
  action_receiver?: Maybe<Scalars['String']['output']>;
  action_sender?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  tx_sender?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "nft_activities". */
export type Nft_Activities_Order_By = {
  action_receiver?: InputMaybe<Order_By>;
  action_sender?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_contracts?: InputMaybe<Nft_Contracts_Order_By>;
  price?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  tx_sender?: InputMaybe<Order_By>;
};

/** select columns of table "nft_activities" */
export enum Nft_Activities_Select_Column {
  /** column name */
  ActionReceiver = 'action_receiver',
  /** column name */
  ActionSender = 'action_sender',
  /** column name */
  Currency = 'currency',
  /** column name */
  Kind = 'kind',
  /** column name */
  Memo = 'memo',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  Price = 'price',
  /** column name */
  ReceiptId = 'receipt_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  TxSender = 'tx_sender'
}

/** aggregate stddev on columns */
export type Nft_Activities_Stddev_Fields = {
  __typename?: 'nft_activities_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nft_Activities_Stddev_Pop_Fields = {
  __typename?: 'nft_activities_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nft_Activities_Stddev_Samp_Fields = {
  __typename?: 'nft_activities_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nft_activities" */
export type Nft_Activities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nft_Activities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nft_Activities_Stream_Cursor_Value_Input = {
  action_receiver?: InputMaybe<Scalars['String']['input']>;
  action_sender?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  receipt_id?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
  tx_sender?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Nft_Activities_Sum_Fields = {
  __typename?: 'nft_activities_sum_fields';
  price?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Nft_Activities_Var_Pop_Fields = {
  __typename?: 'nft_activities_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nft_Activities_Var_Samp_Fields = {
  __typename?: 'nft_activities_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nft_Activities_Variance_Fields = {
  __typename?: 'nft_activities_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "nft_attributes" */
export type Nft_Attributes = {
  __typename?: 'nft_attributes';
  attribute_display_type?: Maybe<Scalars['String']['output']>;
  attribute_type: Scalars['String']['output'];
  attribute_value?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  metadata?: Maybe<Nft_Metadata>;
  nft_contract_id: Scalars['String']['output'];
  nft_metadata_id: Scalars['String']['output'];
};

/** aggregated selection of "nft_attributes" */
export type Nft_Attributes_Aggregate = {
  __typename?: 'nft_attributes_aggregate';
  aggregate?: Maybe<Nft_Attributes_Aggregate_Fields>;
  nodes: Array<Nft_Attributes>;
};

export type Nft_Attributes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Nft_Attributes_Aggregate_Bool_Exp_Count>;
};

export type Nft_Attributes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Nft_Attributes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nft_Attributes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "nft_attributes" */
export type Nft_Attributes_Aggregate_Fields = {
  __typename?: 'nft_attributes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Nft_Attributes_Max_Fields>;
  min?: Maybe<Nft_Attributes_Min_Fields>;
};


/** aggregate fields of "nft_attributes" */
export type Nft_Attributes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Attributes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nft_attributes" */
export type Nft_Attributes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nft_Attributes_Max_Order_By>;
  min?: InputMaybe<Nft_Attributes_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "nft_attributes". All fields are combined with a logical 'AND'. */
export type Nft_Attributes_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Attributes_Bool_Exp>>;
  _not?: InputMaybe<Nft_Attributes_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Attributes_Bool_Exp>>;
  attribute_display_type?: InputMaybe<String_Comparison_Exp>;
  attribute_type?: InputMaybe<String_Comparison_Exp>;
  attribute_value?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Nft_Metadata_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  nft_metadata_id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nft_Attributes_Max_Fields = {
  __typename?: 'nft_attributes_max_fields';
  attribute_display_type?: Maybe<Scalars['String']['output']>;
  attribute_type?: Maybe<Scalars['String']['output']>;
  attribute_value?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  nft_metadata_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "nft_attributes" */
export type Nft_Attributes_Max_Order_By = {
  attribute_display_type?: InputMaybe<Order_By>;
  attribute_type?: InputMaybe<Order_By>;
  attribute_value?: InputMaybe<Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_metadata_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nft_Attributes_Min_Fields = {
  __typename?: 'nft_attributes_min_fields';
  attribute_display_type?: Maybe<Scalars['String']['output']>;
  attribute_type?: Maybe<Scalars['String']['output']>;
  attribute_value?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  nft_metadata_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "nft_attributes" */
export type Nft_Attributes_Min_Order_By = {
  attribute_display_type?: InputMaybe<Order_By>;
  attribute_type?: InputMaybe<Order_By>;
  attribute_value?: InputMaybe<Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_metadata_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "nft_attributes". */
export type Nft_Attributes_Order_By = {
  attribute_display_type?: InputMaybe<Order_By>;
  attribute_type?: InputMaybe<Order_By>;
  attribute_value?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Nft_Metadata_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_metadata_id?: InputMaybe<Order_By>;
};

/** select columns of table "nft_attributes" */
export enum Nft_Attributes_Select_Column {
  /** column name */
  AttributeDisplayType = 'attribute_display_type',
  /** column name */
  AttributeType = 'attribute_type',
  /** column name */
  AttributeValue = 'attribute_value',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  NftMetadataId = 'nft_metadata_id'
}

/** Streaming cursor of the table "nft_attributes" */
export type Nft_Attributes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nft_Attributes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nft_Attributes_Stream_Cursor_Value_Input = {
  attribute_display_type?: InputMaybe<Scalars['String']['input']>;
  attribute_type?: InputMaybe<Scalars['String']['input']>;
  attribute_value?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  nft_metadata_id?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "nft_contracts" */
export type Nft_Contracts = {
  __typename?: 'nft_contracts';
  base_uri?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  created_receipt_id?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  is_mintbase: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  owner_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  spec: Scalars['String']['output'];
  symbol?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "nft_contracts" */
export type Nft_Contracts_Aggregate = {
  __typename?: 'nft_contracts_aggregate';
  aggregate?: Maybe<Nft_Contracts_Aggregate_Fields>;
  nodes: Array<Nft_Contracts>;
};

export type Nft_Contracts_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Nft_Contracts_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Nft_Contracts_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Nft_Contracts_Aggregate_Bool_Exp_Count>;
};

export type Nft_Contracts_Aggregate_Bool_Exp_Bool_And = {
  arguments: Nft_Contracts_Select_Column_Nft_Contracts_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nft_Contracts_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Nft_Contracts_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Nft_Contracts_Select_Column_Nft_Contracts_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nft_Contracts_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Nft_Contracts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Nft_Contracts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nft_Contracts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "nft_contracts" */
export type Nft_Contracts_Aggregate_Fields = {
  __typename?: 'nft_contracts_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Nft_Contracts_Max_Fields>;
  min?: Maybe<Nft_Contracts_Min_Fields>;
};


/** aggregate fields of "nft_contracts" */
export type Nft_Contracts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Contracts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nft_contracts" */
export type Nft_Contracts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nft_Contracts_Max_Order_By>;
  min?: InputMaybe<Nft_Contracts_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "nft_contracts". All fields are combined with a logical 'AND'. */
export type Nft_Contracts_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Contracts_Bool_Exp>>;
  _not?: InputMaybe<Nft_Contracts_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Contracts_Bool_Exp>>;
  base_uri?: InputMaybe<String_Comparison_Exp>;
  category?: InputMaybe<String_Comparison_Exp>;
  content_flag?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_receipt_id?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  is_mintbase?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<String_Comparison_Exp>;
  reference?: InputMaybe<String_Comparison_Exp>;
  reference_hash?: InputMaybe<String_Comparison_Exp>;
  spec?: InputMaybe<String_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nft_Contracts_Max_Fields = {
  __typename?: 'nft_contracts_max_fields';
  base_uri?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  created_receipt_id?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  spec?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "nft_contracts" */
export type Nft_Contracts_Max_Order_By = {
  base_uri?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  content_flag?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_receipt_id?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  reference?: InputMaybe<Order_By>;
  reference_hash?: InputMaybe<Order_By>;
  spec?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nft_Contracts_Min_Fields = {
  __typename?: 'nft_contracts_min_fields';
  base_uri?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  created_receipt_id?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  spec?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "nft_contracts" */
export type Nft_Contracts_Min_Order_By = {
  base_uri?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  content_flag?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_receipt_id?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  reference?: InputMaybe<Order_By>;
  reference_hash?: InputMaybe<Order_By>;
  spec?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "nft_contracts". */
export type Nft_Contracts_Order_By = {
  base_uri?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  content_flag?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_receipt_id?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_mintbase?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  reference?: InputMaybe<Order_By>;
  reference_hash?: InputMaybe<Order_By>;
  spec?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
};

/** select columns of table "nft_contracts" */
export enum Nft_Contracts_Select_Column {
  /** column name */
  BaseUri = 'base_uri',
  /** column name */
  Category = 'category',
  /** column name */
  ContentFlag = 'content_flag',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedReceiptId = 'created_receipt_id',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  IsMintbase = 'is_mintbase',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  Reference = 'reference',
  /** column name */
  ReferenceHash = 'reference_hash',
  /** column name */
  Spec = 'spec',
  /** column name */
  Symbol = 'symbol'
}

/** select "nft_contracts_aggregate_bool_exp_bool_and_arguments_columns" columns of table "nft_contracts" */
export enum Nft_Contracts_Select_Column_Nft_Contracts_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsMintbase = 'is_mintbase'
}

/** select "nft_contracts_aggregate_bool_exp_bool_or_arguments_columns" columns of table "nft_contracts" */
export enum Nft_Contracts_Select_Column_Nft_Contracts_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsMintbase = 'is_mintbase'
}

/** Streaming cursor of the table "nft_contracts" */
export type Nft_Contracts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nft_Contracts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nft_Contracts_Stream_Cursor_Value_Input = {
  base_uri?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  content_flag?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  created_receipt_id?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_mintbase?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  reference_hash?: InputMaybe<Scalars['String']['input']>;
  spec?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "nft_earnings" */
export type Nft_Earnings = {
  __typename?: 'nft_earnings';
  amount: Scalars['numeric']['output'];
  approval_id: Scalars['numeric']['output'];
  currency: Scalars['String']['output'];
  is_affiliate?: Maybe<Scalars['Boolean']['output']>;
  is_mintbase_cut: Scalars['Boolean']['output'];
  is_referral: Scalars['Boolean']['output'];
  market_id: Scalars['String']['output'];
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_id: Scalars['String']['output'];
  /** An object relationship */
  nft_contracts?: Maybe<Nft_Contracts>;
  /** An object relationship */
  nft_token?: Maybe<Mb_Views_Nft_Tokens>;
  /** An object relationship */
  offer?: Maybe<Nft_Offers>;
  offer_id: Scalars['bigint']['output'];
  receipt_id: Scalars['String']['output'];
  receiver_id: Scalars['String']['output'];
  timestamp: Scalars['timestamp']['output'];
  token_id: Scalars['String']['output'];
};

/** aggregated selection of "nft_earnings" */
export type Nft_Earnings_Aggregate = {
  __typename?: 'nft_earnings_aggregate';
  aggregate?: Maybe<Nft_Earnings_Aggregate_Fields>;
  nodes: Array<Nft_Earnings>;
};

/** aggregate fields of "nft_earnings" */
export type Nft_Earnings_Aggregate_Fields = {
  __typename?: 'nft_earnings_aggregate_fields';
  avg?: Maybe<Nft_Earnings_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nft_Earnings_Max_Fields>;
  min?: Maybe<Nft_Earnings_Min_Fields>;
  stddev?: Maybe<Nft_Earnings_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Earnings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Earnings_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Earnings_Sum_Fields>;
  var_pop?: Maybe<Nft_Earnings_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Earnings_Var_Samp_Fields>;
  variance?: Maybe<Nft_Earnings_Variance_Fields>;
};


/** aggregate fields of "nft_earnings" */
export type Nft_Earnings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Earnings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nft_Earnings_Avg_Fields = {
  __typename?: 'nft_earnings_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nft_earnings". All fields are combined with a logical 'AND'. */
export type Nft_Earnings_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Earnings_Bool_Exp>>;
  _not?: InputMaybe<Nft_Earnings_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Earnings_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  approval_id?: InputMaybe<Numeric_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  is_affiliate?: InputMaybe<Boolean_Comparison_Exp>;
  is_mintbase_cut?: InputMaybe<Boolean_Comparison_Exp>;
  is_referral?: InputMaybe<Boolean_Comparison_Exp>;
  market_id?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  nft_contracts?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_token?: InputMaybe<Mb_Views_Nft_Tokens_Bool_Exp>;
  offer?: InputMaybe<Nft_Offers_Bool_Exp>;
  offer_id?: InputMaybe<Bigint_Comparison_Exp>;
  receipt_id?: InputMaybe<String_Comparison_Exp>;
  receiver_id?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nft_Earnings_Max_Fields = {
  __typename?: 'nft_earnings_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  approval_id?: Maybe<Scalars['numeric']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  offer_id?: Maybe<Scalars['bigint']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  receiver_id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Nft_Earnings_Min_Fields = {
  __typename?: 'nft_earnings_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  approval_id?: Maybe<Scalars['numeric']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  offer_id?: Maybe<Scalars['bigint']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  receiver_id?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "nft_earnings". */
export type Nft_Earnings_Order_By = {
  amount?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  is_affiliate?: InputMaybe<Order_By>;
  is_mintbase_cut?: InputMaybe<Order_By>;
  is_referral?: InputMaybe<Order_By>;
  market_id?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_contracts?: InputMaybe<Nft_Contracts_Order_By>;
  nft_token?: InputMaybe<Mb_Views_Nft_Tokens_Order_By>;
  offer?: InputMaybe<Nft_Offers_Order_By>;
  offer_id?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
  receiver_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "nft_earnings" */
export enum Nft_Earnings_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ApprovalId = 'approval_id',
  /** column name */
  Currency = 'currency',
  /** column name */
  IsAffiliate = 'is_affiliate',
  /** column name */
  IsMintbaseCut = 'is_mintbase_cut',
  /** column name */
  IsReferral = 'is_referral',
  /** column name */
  MarketId = 'market_id',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  OfferId = 'offer_id',
  /** column name */
  ReceiptId = 'receipt_id',
  /** column name */
  ReceiverId = 'receiver_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TokenId = 'token_id'
}

/** aggregate stddev on columns */
export type Nft_Earnings_Stddev_Fields = {
  __typename?: 'nft_earnings_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nft_Earnings_Stddev_Pop_Fields = {
  __typename?: 'nft_earnings_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nft_Earnings_Stddev_Samp_Fields = {
  __typename?: 'nft_earnings_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nft_earnings" */
export type Nft_Earnings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nft_Earnings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nft_Earnings_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  approval_id?: InputMaybe<Scalars['numeric']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  is_affiliate?: InputMaybe<Scalars['Boolean']['input']>;
  is_mintbase_cut?: InputMaybe<Scalars['Boolean']['input']>;
  is_referral?: InputMaybe<Scalars['Boolean']['input']>;
  market_id?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  offer_id?: InputMaybe<Scalars['bigint']['input']>;
  receipt_id?: InputMaybe<Scalars['String']['input']>;
  receiver_id?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Nft_Earnings_Sum_Fields = {
  __typename?: 'nft_earnings_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  approval_id?: Maybe<Scalars['numeric']['output']>;
  offer_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Nft_Earnings_Var_Pop_Fields = {
  __typename?: 'nft_earnings_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nft_Earnings_Var_Samp_Fields = {
  __typename?: 'nft_earnings_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nft_Earnings_Variance_Fields = {
  __typename?: 'nft_earnings_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "nft_listings" */
export type Nft_Listings = {
  __typename?: 'nft_listings';
  accepted_at?: Maybe<Scalars['timestamp']['output']>;
  accepted_offer_id?: Maybe<Scalars['bigint']['output']>;
  approval_id: Scalars['numeric']['output'];
  created_at: Scalars['timestamp']['output'];
  currency: Scalars['String']['output'];
  invalidated_at?: Maybe<Scalars['timestamp']['output']>;
  kind: Scalars['String']['output'];
  listed_by: Scalars['String']['output'];
  market_id: Scalars['String']['output'];
  metadata_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_id: Scalars['String']['output'];
  /** An object relationship */
  nft_contracts?: Maybe<Nft_Contracts>;
  /** An object relationship */
  nft_token?: Maybe<Mb_Views_Nft_Tokens>;
  /** An array relationship */
  offers: Array<Nft_Offers>;
  /** An aggregate relationship */
  offers_aggregate: Nft_Offers_Aggregate;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id: Scalars['String']['output'];
  /** An object relationship */
  token?: Maybe<Mb_Views_Nft_Tokens>;
  token_id: Scalars['String']['output'];
  unlisted_at?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "nft_listings" */
export type Nft_ListingsOffersArgs = {
  distinct_on?: InputMaybe<Array<Nft_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Offers_Order_By>>;
  where?: InputMaybe<Nft_Offers_Bool_Exp>;
};


/** columns and relationships of "nft_listings" */
export type Nft_ListingsOffers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Offers_Order_By>>;
  where?: InputMaybe<Nft_Offers_Bool_Exp>;
};

/** aggregated selection of "nft_listings" */
export type Nft_Listings_Aggregate = {
  __typename?: 'nft_listings_aggregate';
  aggregate?: Maybe<Nft_Listings_Aggregate_Fields>;
  nodes: Array<Nft_Listings>;
};

export type Nft_Listings_Aggregate_Bool_Exp = {
  count?: InputMaybe<Nft_Listings_Aggregate_Bool_Exp_Count>;
};

export type Nft_Listings_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Nft_Listings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nft_Listings_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "nft_listings" */
export type Nft_Listings_Aggregate_Fields = {
  __typename?: 'nft_listings_aggregate_fields';
  avg?: Maybe<Nft_Listings_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nft_Listings_Max_Fields>;
  min?: Maybe<Nft_Listings_Min_Fields>;
  stddev?: Maybe<Nft_Listings_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Listings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Listings_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Listings_Sum_Fields>;
  var_pop?: Maybe<Nft_Listings_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Listings_Var_Samp_Fields>;
  variance?: Maybe<Nft_Listings_Variance_Fields>;
};


/** aggregate fields of "nft_listings" */
export type Nft_Listings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Listings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nft_listings" */
export type Nft_Listings_Aggregate_Order_By = {
  avg?: InputMaybe<Nft_Listings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nft_Listings_Max_Order_By>;
  min?: InputMaybe<Nft_Listings_Min_Order_By>;
  stddev?: InputMaybe<Nft_Listings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nft_Listings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nft_Listings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nft_Listings_Sum_Order_By>;
  var_pop?: InputMaybe<Nft_Listings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nft_Listings_Var_Samp_Order_By>;
  variance?: InputMaybe<Nft_Listings_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Nft_Listings_Avg_Fields = {
  __typename?: 'nft_listings_avg_fields';
  accepted_offer_id?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "nft_listings" */
export type Nft_Listings_Avg_Order_By = {
  accepted_offer_id?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nft_listings". All fields are combined with a logical 'AND'. */
export type Nft_Listings_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Listings_Bool_Exp>>;
  _not?: InputMaybe<Nft_Listings_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Listings_Bool_Exp>>;
  accepted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  accepted_offer_id?: InputMaybe<Bigint_Comparison_Exp>;
  approval_id?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  invalidated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  kind?: InputMaybe<String_Comparison_Exp>;
  listed_by?: InputMaybe<String_Comparison_Exp>;
  market_id?: InputMaybe<String_Comparison_Exp>;
  metadata_id?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  nft_contracts?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_token?: InputMaybe<Mb_Views_Nft_Tokens_Bool_Exp>;
  offers?: InputMaybe<Nft_Offers_Bool_Exp>;
  offers_aggregate?: InputMaybe<Nft_Offers_Aggregate_Bool_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  receipt_id?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<Mb_Views_Nft_Tokens_Bool_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  unlisted_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nft_Listings_Max_Fields = {
  __typename?: 'nft_listings_max_fields';
  accepted_at?: Maybe<Scalars['timestamp']['output']>;
  accepted_offer_id?: Maybe<Scalars['bigint']['output']>;
  approval_id?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  invalidated_at?: Maybe<Scalars['timestamp']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  unlisted_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "nft_listings" */
export type Nft_Listings_Max_Order_By = {
  accepted_at?: InputMaybe<Order_By>;
  accepted_offer_id?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  invalidated_at?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  listed_by?: InputMaybe<Order_By>;
  market_id?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  unlisted_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nft_Listings_Min_Fields = {
  __typename?: 'nft_listings_min_fields';
  accepted_at?: Maybe<Scalars['timestamp']['output']>;
  accepted_offer_id?: Maybe<Scalars['bigint']['output']>;
  approval_id?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  invalidated_at?: Maybe<Scalars['timestamp']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  listed_by?: Maybe<Scalars['String']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  unlisted_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "nft_listings" */
export type Nft_Listings_Min_Order_By = {
  accepted_at?: InputMaybe<Order_By>;
  accepted_offer_id?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  invalidated_at?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  listed_by?: InputMaybe<Order_By>;
  market_id?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  unlisted_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "nft_listings". */
export type Nft_Listings_Order_By = {
  accepted_at?: InputMaybe<Order_By>;
  accepted_offer_id?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  invalidated_at?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  listed_by?: InputMaybe<Order_By>;
  market_id?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_contracts?: InputMaybe<Nft_Contracts_Order_By>;
  nft_token?: InputMaybe<Mb_Views_Nft_Tokens_Order_By>;
  offers_aggregate?: InputMaybe<Nft_Offers_Aggregate_Order_By>;
  price?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
  token?: InputMaybe<Mb_Views_Nft_Tokens_Order_By>;
  token_id?: InputMaybe<Order_By>;
  unlisted_at?: InputMaybe<Order_By>;
};

/** select columns of table "nft_listings" */
export enum Nft_Listings_Select_Column {
  /** column name */
  AcceptedAt = 'accepted_at',
  /** column name */
  AcceptedOfferId = 'accepted_offer_id',
  /** column name */
  ApprovalId = 'approval_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  InvalidatedAt = 'invalidated_at',
  /** column name */
  Kind = 'kind',
  /** column name */
  ListedBy = 'listed_by',
  /** column name */
  MarketId = 'market_id',
  /** column name */
  MetadataId = 'metadata_id',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  Price = 'price',
  /** column name */
  ReceiptId = 'receipt_id',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  UnlistedAt = 'unlisted_at'
}

/** aggregate stddev on columns */
export type Nft_Listings_Stddev_Fields = {
  __typename?: 'nft_listings_stddev_fields';
  accepted_offer_id?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "nft_listings" */
export type Nft_Listings_Stddev_Order_By = {
  accepted_offer_id?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nft_Listings_Stddev_Pop_Fields = {
  __typename?: 'nft_listings_stddev_pop_fields';
  accepted_offer_id?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "nft_listings" */
export type Nft_Listings_Stddev_Pop_Order_By = {
  accepted_offer_id?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nft_Listings_Stddev_Samp_Fields = {
  __typename?: 'nft_listings_stddev_samp_fields';
  accepted_offer_id?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "nft_listings" */
export type Nft_Listings_Stddev_Samp_Order_By = {
  accepted_offer_id?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "nft_listings" */
export type Nft_Listings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nft_Listings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nft_Listings_Stream_Cursor_Value_Input = {
  accepted_at?: InputMaybe<Scalars['timestamp']['input']>;
  accepted_offer_id?: InputMaybe<Scalars['bigint']['input']>;
  approval_id?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  invalidated_at?: InputMaybe<Scalars['timestamp']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  listed_by?: InputMaybe<Scalars['String']['input']>;
  market_id?: InputMaybe<Scalars['String']['input']>;
  metadata_id?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  receipt_id?: InputMaybe<Scalars['String']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
  unlisted_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Nft_Listings_Sum_Fields = {
  __typename?: 'nft_listings_sum_fields';
  accepted_offer_id?: Maybe<Scalars['bigint']['output']>;
  approval_id?: Maybe<Scalars['numeric']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "nft_listings" */
export type Nft_Listings_Sum_Order_By = {
  accepted_offer_id?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Nft_Listings_Var_Pop_Fields = {
  __typename?: 'nft_listings_var_pop_fields';
  accepted_offer_id?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "nft_listings" */
export type Nft_Listings_Var_Pop_Order_By = {
  accepted_offer_id?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nft_Listings_Var_Samp_Fields = {
  __typename?: 'nft_listings_var_samp_fields';
  accepted_offer_id?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "nft_listings" */
export type Nft_Listings_Var_Samp_Order_By = {
  accepted_offer_id?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nft_Listings_Variance_Fields = {
  __typename?: 'nft_listings_variance_fields';
  accepted_offer_id?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "nft_listings" */
export type Nft_Listings_Variance_Order_By = {
  accepted_offer_id?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** columns and relationships of "nft_metadata" */
export type Nft_Metadata = {
  __typename?: 'nft_metadata';
  base_uri?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_id: Scalars['String']['output'];
  /** An object relationship */
  nft_contracts?: Maybe<Nft_Contracts>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_blob?: Maybe<Scalars['jsonb']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "nft_metadata" */
export type Nft_MetadataReference_BlobArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "nft_metadata" */
export type Nft_Metadata_Aggregate = {
  __typename?: 'nft_metadata_aggregate';
  aggregate?: Maybe<Nft_Metadata_Aggregate_Fields>;
  nodes: Array<Nft_Metadata>;
};

/** aggregate fields of "nft_metadata" */
export type Nft_Metadata_Aggregate_Fields = {
  __typename?: 'nft_metadata_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Nft_Metadata_Max_Fields>;
  min?: Maybe<Nft_Metadata_Min_Fields>;
};


/** aggregate fields of "nft_metadata" */
export type Nft_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "nft_metadata". All fields are combined with a logical 'AND'. */
export type Nft_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Nft_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Metadata_Bool_Exp>>;
  base_uri?: InputMaybe<String_Comparison_Exp>;
  content_flag?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  extra?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  media?: InputMaybe<String_Comparison_Exp>;
  media_hash?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  nft_contracts?: InputMaybe<Nft_Contracts_Bool_Exp>;
  reference?: InputMaybe<String_Comparison_Exp>;
  reference_blob?: InputMaybe<Jsonb_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nft_Metadata_Max_Fields = {
  __typename?: 'nft_metadata_max_fields';
  base_uri?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Nft_Metadata_Min_Fields = {
  __typename?: 'nft_metadata_min_fields';
  base_uri?: Maybe<Scalars['String']['output']>;
  content_flag?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  media_hash?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "nft_metadata". */
export type Nft_Metadata_Order_By = {
  base_uri?: InputMaybe<Order_By>;
  content_flag?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  extra?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  media_hash?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_contracts?: InputMaybe<Nft_Contracts_Order_By>;
  reference?: InputMaybe<Order_By>;
  reference_blob?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** select columns of table "nft_metadata" */
export enum Nft_Metadata_Select_Column {
  /** column name */
  BaseUri = 'base_uri',
  /** column name */
  ContentFlag = 'content_flag',
  /** column name */
  Description = 'description',
  /** column name */
  Extra = 'extra',
  /** column name */
  Id = 'id',
  /** column name */
  Media = 'media',
  /** column name */
  MediaHash = 'media_hash',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  Reference = 'reference',
  /** column name */
  ReferenceBlob = 'reference_blob',
  /** column name */
  Title = 'title'
}

/** Streaming cursor of the table "nft_metadata" */
export type Nft_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nft_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nft_Metadata_Stream_Cursor_Value_Input = {
  base_uri?: InputMaybe<Scalars['String']['input']>;
  content_flag?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  media_hash?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  reference_blob?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "nft_offers" */
export type Nft_Offers = {
  __typename?: 'nft_offers';
  accepted_at?: Maybe<Scalars['timestamp']['output']>;
  affiliate_amount?: Maybe<Scalars['numeric']['output']>;
  affiliate_id?: Maybe<Scalars['String']['output']>;
  approval_id: Scalars['numeric']['output'];
  currency: Scalars['String']['output'];
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  invalidated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  listing?: Maybe<Nft_Listings>;
  market_id: Scalars['String']['output'];
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_id: Scalars['String']['output'];
  /** An object relationship */
  nft_contracts?: Maybe<Nft_Contracts>;
  /** An object relationship */
  nft_token?: Maybe<Mb_Views_Nft_Tokens>;
  offer_id: Scalars['bigint']['output'];
  offer_price: Scalars['numeric']['output'];
  offered_at: Scalars['timestamp']['output'];
  offered_by: Scalars['String']['output'];
  outbid_at?: Maybe<Scalars['timestamp']['output']>;
  receipt_id: Scalars['String']['output'];
  referral_amount?: Maybe<Scalars['numeric']['output']>;
  referrer_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  token?: Maybe<Nft_Tokens>;
  token_id: Scalars['String']['output'];
  withdrawn_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregated selection of "nft_offers" */
export type Nft_Offers_Aggregate = {
  __typename?: 'nft_offers_aggregate';
  aggregate?: Maybe<Nft_Offers_Aggregate_Fields>;
  nodes: Array<Nft_Offers>;
};

export type Nft_Offers_Aggregate_Bool_Exp = {
  count?: InputMaybe<Nft_Offers_Aggregate_Bool_Exp_Count>;
};

export type Nft_Offers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Nft_Offers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nft_Offers_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "nft_offers" */
export type Nft_Offers_Aggregate_Fields = {
  __typename?: 'nft_offers_aggregate_fields';
  avg?: Maybe<Nft_Offers_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nft_Offers_Max_Fields>;
  min?: Maybe<Nft_Offers_Min_Fields>;
  stddev?: Maybe<Nft_Offers_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Offers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Offers_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Offers_Sum_Fields>;
  var_pop?: Maybe<Nft_Offers_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Offers_Var_Samp_Fields>;
  variance?: Maybe<Nft_Offers_Variance_Fields>;
};


/** aggregate fields of "nft_offers" */
export type Nft_Offers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Offers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nft_offers" */
export type Nft_Offers_Aggregate_Order_By = {
  avg?: InputMaybe<Nft_Offers_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nft_Offers_Max_Order_By>;
  min?: InputMaybe<Nft_Offers_Min_Order_By>;
  stddev?: InputMaybe<Nft_Offers_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nft_Offers_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nft_Offers_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nft_Offers_Sum_Order_By>;
  var_pop?: InputMaybe<Nft_Offers_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nft_Offers_Var_Samp_Order_By>;
  variance?: InputMaybe<Nft_Offers_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Nft_Offers_Avg_Fields = {
  __typename?: 'nft_offers_avg_fields';
  affiliate_amount?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  offer_price?: Maybe<Scalars['Float']['output']>;
  referral_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "nft_offers" */
export type Nft_Offers_Avg_Order_By = {
  affiliate_amount?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  offer_price?: InputMaybe<Order_By>;
  referral_amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nft_offers". All fields are combined with a logical 'AND'. */
export type Nft_Offers_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Offers_Bool_Exp>>;
  _not?: InputMaybe<Nft_Offers_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Offers_Bool_Exp>>;
  accepted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  affiliate_amount?: InputMaybe<Numeric_Comparison_Exp>;
  affiliate_id?: InputMaybe<String_Comparison_Exp>;
  approval_id?: InputMaybe<Numeric_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamp_Comparison_Exp>;
  invalidated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  listing?: InputMaybe<Nft_Listings_Bool_Exp>;
  market_id?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  nft_contracts?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_token?: InputMaybe<Mb_Views_Nft_Tokens_Bool_Exp>;
  offer_id?: InputMaybe<Bigint_Comparison_Exp>;
  offer_price?: InputMaybe<Numeric_Comparison_Exp>;
  offered_at?: InputMaybe<Timestamp_Comparison_Exp>;
  offered_by?: InputMaybe<String_Comparison_Exp>;
  outbid_at?: InputMaybe<Timestamp_Comparison_Exp>;
  receipt_id?: InputMaybe<String_Comparison_Exp>;
  referral_amount?: InputMaybe<Numeric_Comparison_Exp>;
  referrer_id?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<Nft_Tokens_Bool_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  withdrawn_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nft_Offers_Max_Fields = {
  __typename?: 'nft_offers_max_fields';
  accepted_at?: Maybe<Scalars['timestamp']['output']>;
  affiliate_amount?: Maybe<Scalars['numeric']['output']>;
  affiliate_id?: Maybe<Scalars['String']['output']>;
  approval_id?: Maybe<Scalars['numeric']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  invalidated_at?: Maybe<Scalars['timestamp']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  offer_id?: Maybe<Scalars['bigint']['output']>;
  offer_price?: Maybe<Scalars['numeric']['output']>;
  offered_at?: Maybe<Scalars['timestamp']['output']>;
  offered_by?: Maybe<Scalars['String']['output']>;
  outbid_at?: Maybe<Scalars['timestamp']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  referral_amount?: Maybe<Scalars['numeric']['output']>;
  referrer_id?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  withdrawn_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "nft_offers" */
export type Nft_Offers_Max_Order_By = {
  accepted_at?: InputMaybe<Order_By>;
  affiliate_amount?: InputMaybe<Order_By>;
  affiliate_id?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  invalidated_at?: InputMaybe<Order_By>;
  market_id?: InputMaybe<Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  offer_price?: InputMaybe<Order_By>;
  offered_at?: InputMaybe<Order_By>;
  offered_by?: InputMaybe<Order_By>;
  outbid_at?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
  referral_amount?: InputMaybe<Order_By>;
  referrer_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  withdrawn_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nft_Offers_Min_Fields = {
  __typename?: 'nft_offers_min_fields';
  accepted_at?: Maybe<Scalars['timestamp']['output']>;
  affiliate_amount?: Maybe<Scalars['numeric']['output']>;
  affiliate_id?: Maybe<Scalars['String']['output']>;
  approval_id?: Maybe<Scalars['numeric']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  invalidated_at?: Maybe<Scalars['timestamp']['output']>;
  market_id?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  offer_id?: Maybe<Scalars['bigint']['output']>;
  offer_price?: Maybe<Scalars['numeric']['output']>;
  offered_at?: Maybe<Scalars['timestamp']['output']>;
  offered_by?: Maybe<Scalars['String']['output']>;
  outbid_at?: Maybe<Scalars['timestamp']['output']>;
  receipt_id?: Maybe<Scalars['String']['output']>;
  referral_amount?: Maybe<Scalars['numeric']['output']>;
  referrer_id?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  withdrawn_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "nft_offers" */
export type Nft_Offers_Min_Order_By = {
  accepted_at?: InputMaybe<Order_By>;
  affiliate_amount?: InputMaybe<Order_By>;
  affiliate_id?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  invalidated_at?: InputMaybe<Order_By>;
  market_id?: InputMaybe<Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  offer_price?: InputMaybe<Order_By>;
  offered_at?: InputMaybe<Order_By>;
  offered_by?: InputMaybe<Order_By>;
  outbid_at?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
  referral_amount?: InputMaybe<Order_By>;
  referrer_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  withdrawn_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "nft_offers". */
export type Nft_Offers_Order_By = {
  accepted_at?: InputMaybe<Order_By>;
  affiliate_amount?: InputMaybe<Order_By>;
  affiliate_id?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  invalidated_at?: InputMaybe<Order_By>;
  listing?: InputMaybe<Nft_Listings_Order_By>;
  market_id?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_contracts?: InputMaybe<Nft_Contracts_Order_By>;
  nft_token?: InputMaybe<Mb_Views_Nft_Tokens_Order_By>;
  offer_id?: InputMaybe<Order_By>;
  offer_price?: InputMaybe<Order_By>;
  offered_at?: InputMaybe<Order_By>;
  offered_by?: InputMaybe<Order_By>;
  outbid_at?: InputMaybe<Order_By>;
  receipt_id?: InputMaybe<Order_By>;
  referral_amount?: InputMaybe<Order_By>;
  referrer_id?: InputMaybe<Order_By>;
  token?: InputMaybe<Nft_Tokens_Order_By>;
  token_id?: InputMaybe<Order_By>;
  withdrawn_at?: InputMaybe<Order_By>;
};

/** select columns of table "nft_offers" */
export enum Nft_Offers_Select_Column {
  /** column name */
  AcceptedAt = 'accepted_at',
  /** column name */
  AffiliateAmount = 'affiliate_amount',
  /** column name */
  AffiliateId = 'affiliate_id',
  /** column name */
  ApprovalId = 'approval_id',
  /** column name */
  Currency = 'currency',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  InvalidatedAt = 'invalidated_at',
  /** column name */
  MarketId = 'market_id',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  OfferId = 'offer_id',
  /** column name */
  OfferPrice = 'offer_price',
  /** column name */
  OfferedAt = 'offered_at',
  /** column name */
  OfferedBy = 'offered_by',
  /** column name */
  OutbidAt = 'outbid_at',
  /** column name */
  ReceiptId = 'receipt_id',
  /** column name */
  ReferralAmount = 'referral_amount',
  /** column name */
  ReferrerId = 'referrer_id',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  WithdrawnAt = 'withdrawn_at'
}

/** aggregate stddev on columns */
export type Nft_Offers_Stddev_Fields = {
  __typename?: 'nft_offers_stddev_fields';
  affiliate_amount?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  offer_price?: Maybe<Scalars['Float']['output']>;
  referral_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "nft_offers" */
export type Nft_Offers_Stddev_Order_By = {
  affiliate_amount?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  offer_price?: InputMaybe<Order_By>;
  referral_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nft_Offers_Stddev_Pop_Fields = {
  __typename?: 'nft_offers_stddev_pop_fields';
  affiliate_amount?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  offer_price?: Maybe<Scalars['Float']['output']>;
  referral_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "nft_offers" */
export type Nft_Offers_Stddev_Pop_Order_By = {
  affiliate_amount?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  offer_price?: InputMaybe<Order_By>;
  referral_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nft_Offers_Stddev_Samp_Fields = {
  __typename?: 'nft_offers_stddev_samp_fields';
  affiliate_amount?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  offer_price?: Maybe<Scalars['Float']['output']>;
  referral_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "nft_offers" */
export type Nft_Offers_Stddev_Samp_Order_By = {
  affiliate_amount?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  offer_price?: InputMaybe<Order_By>;
  referral_amount?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "nft_offers" */
export type Nft_Offers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nft_Offers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nft_Offers_Stream_Cursor_Value_Input = {
  accepted_at?: InputMaybe<Scalars['timestamp']['input']>;
  affiliate_amount?: InputMaybe<Scalars['numeric']['input']>;
  affiliate_id?: InputMaybe<Scalars['String']['input']>;
  approval_id?: InputMaybe<Scalars['numeric']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['timestamp']['input']>;
  invalidated_at?: InputMaybe<Scalars['timestamp']['input']>;
  market_id?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  offer_id?: InputMaybe<Scalars['bigint']['input']>;
  offer_price?: InputMaybe<Scalars['numeric']['input']>;
  offered_at?: InputMaybe<Scalars['timestamp']['input']>;
  offered_by?: InputMaybe<Scalars['String']['input']>;
  outbid_at?: InputMaybe<Scalars['timestamp']['input']>;
  receipt_id?: InputMaybe<Scalars['String']['input']>;
  referral_amount?: InputMaybe<Scalars['numeric']['input']>;
  referrer_id?: InputMaybe<Scalars['String']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
  withdrawn_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Nft_Offers_Sum_Fields = {
  __typename?: 'nft_offers_sum_fields';
  affiliate_amount?: Maybe<Scalars['numeric']['output']>;
  approval_id?: Maybe<Scalars['numeric']['output']>;
  offer_id?: Maybe<Scalars['bigint']['output']>;
  offer_price?: Maybe<Scalars['numeric']['output']>;
  referral_amount?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "nft_offers" */
export type Nft_Offers_Sum_Order_By = {
  affiliate_amount?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  offer_price?: InputMaybe<Order_By>;
  referral_amount?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Nft_Offers_Var_Pop_Fields = {
  __typename?: 'nft_offers_var_pop_fields';
  affiliate_amount?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  offer_price?: Maybe<Scalars['Float']['output']>;
  referral_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "nft_offers" */
export type Nft_Offers_Var_Pop_Order_By = {
  affiliate_amount?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  offer_price?: InputMaybe<Order_By>;
  referral_amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nft_Offers_Var_Samp_Fields = {
  __typename?: 'nft_offers_var_samp_fields';
  affiliate_amount?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  offer_price?: Maybe<Scalars['Float']['output']>;
  referral_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "nft_offers" */
export type Nft_Offers_Var_Samp_Order_By = {
  affiliate_amount?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  offer_price?: InputMaybe<Order_By>;
  referral_amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nft_Offers_Variance_Fields = {
  __typename?: 'nft_offers_variance_fields';
  affiliate_amount?: Maybe<Scalars['Float']['output']>;
  approval_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  offer_price?: Maybe<Scalars['Float']['output']>;
  referral_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "nft_offers" */
export type Nft_Offers_Variance_Order_By = {
  affiliate_amount?: InputMaybe<Order_By>;
  approval_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  offer_price?: InputMaybe<Order_By>;
  referral_amount?: InputMaybe<Order_By>;
};

/** columns and relationships of "nft_tokens" */
export type Nft_Tokens = {
  __typename?: 'nft_tokens';
  burned_receipt_id?: Maybe<Scalars['String']['output']>;
  burned_timestamp?: Maybe<Scalars['timestamp']['output']>;
  copies?: Maybe<Scalars['bigint']['output']>;
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  issued_at?: Maybe<Scalars['timestamp']['output']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']['output']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  mint_memo?: Maybe<Scalars['String']['output']>;
  minted_receipt_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  nft_contract?: Maybe<Nft_Contracts>;
  nft_contract_id: Scalars['String']['output'];
  /** An object relationship */
  nft_contracts?: Maybe<Nft_Contracts>;
  /** An array relationship */
  nft_listings: Array<Nft_Listings>;
  /** An aggregate relationship */
  nft_listings_aggregate: Nft_Listings_Aggregate;
  owner: Scalars['String']['output'];
  reference?: Maybe<Scalars['String']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  royalties?: Maybe<Scalars['jsonb']['output']>;
  royalties_percent?: Maybe<Scalars['Int']['output']>;
  splits?: Maybe<Scalars['jsonb']['output']>;
  starts_at?: Maybe<Scalars['timestamp']['output']>;
  token_id: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "nft_tokens" */
export type Nft_TokensNft_ListingsArgs = {
  distinct_on?: InputMaybe<Array<Nft_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Listings_Order_By>>;
  where?: InputMaybe<Nft_Listings_Bool_Exp>;
};


/** columns and relationships of "nft_tokens" */
export type Nft_TokensNft_Listings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Listings_Order_By>>;
  where?: InputMaybe<Nft_Listings_Bool_Exp>;
};


/** columns and relationships of "nft_tokens" */
export type Nft_TokensRoyaltiesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "nft_tokens" */
export type Nft_TokensSplitsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "nft_tokens" */
export type Nft_Tokens_Aggregate = {
  __typename?: 'nft_tokens_aggregate';
  aggregate?: Maybe<Nft_Tokens_Aggregate_Fields>;
  nodes: Array<Nft_Tokens>;
};

/** aggregate fields of "nft_tokens" */
export type Nft_Tokens_Aggregate_Fields = {
  __typename?: 'nft_tokens_aggregate_fields';
  avg?: Maybe<Nft_Tokens_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nft_Tokens_Max_Fields>;
  min?: Maybe<Nft_Tokens_Min_Fields>;
  stddev?: Maybe<Nft_Tokens_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Tokens_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Tokens_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Tokens_Sum_Fields>;
  var_pop?: Maybe<Nft_Tokens_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Tokens_Var_Samp_Fields>;
  variance?: Maybe<Nft_Tokens_Variance_Fields>;
};


/** aggregate fields of "nft_tokens" */
export type Nft_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nft_Tokens_Avg_Fields = {
  __typename?: 'nft_tokens_avg_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nft_tokens". All fields are combined with a logical 'AND'. */
export type Nft_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Nft_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Tokens_Bool_Exp>>;
  burned_receipt_id?: InputMaybe<String_Comparison_Exp>;
  burned_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  copies?: InputMaybe<Bigint_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamp_Comparison_Exp>;
  issued_at?: InputMaybe<Timestamp_Comparison_Exp>;
  last_transfer_receipt_id?: InputMaybe<String_Comparison_Exp>;
  last_transfer_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  metadata_id?: InputMaybe<String_Comparison_Exp>;
  mint_memo?: InputMaybe<String_Comparison_Exp>;
  minted_receipt_id?: InputMaybe<String_Comparison_Exp>;
  minted_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  minter?: InputMaybe<String_Comparison_Exp>;
  nft_contract?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_contract_id?: InputMaybe<String_Comparison_Exp>;
  nft_contracts?: InputMaybe<Nft_Contracts_Bool_Exp>;
  nft_listings?: InputMaybe<Nft_Listings_Bool_Exp>;
  nft_listings_aggregate?: InputMaybe<Nft_Listings_Aggregate_Bool_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  reference?: InputMaybe<String_Comparison_Exp>;
  reference_hash?: InputMaybe<String_Comparison_Exp>;
  royalties?: InputMaybe<Jsonb_Comparison_Exp>;
  royalties_percent?: InputMaybe<Int_Comparison_Exp>;
  splits?: InputMaybe<Jsonb_Comparison_Exp>;
  starts_at?: InputMaybe<Timestamp_Comparison_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nft_Tokens_Max_Fields = {
  __typename?: 'nft_tokens_max_fields';
  burned_receipt_id?: Maybe<Scalars['String']['output']>;
  burned_timestamp?: Maybe<Scalars['timestamp']['output']>;
  copies?: Maybe<Scalars['bigint']['output']>;
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  issued_at?: Maybe<Scalars['timestamp']['output']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']['output']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  mint_memo?: Maybe<Scalars['String']['output']>;
  minted_receipt_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  royalties_percent?: Maybe<Scalars['Int']['output']>;
  starts_at?: Maybe<Scalars['timestamp']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Nft_Tokens_Min_Fields = {
  __typename?: 'nft_tokens_min_fields';
  burned_receipt_id?: Maybe<Scalars['String']['output']>;
  burned_timestamp?: Maybe<Scalars['timestamp']['output']>;
  copies?: Maybe<Scalars['bigint']['output']>;
  expires_at?: Maybe<Scalars['timestamp']['output']>;
  issued_at?: Maybe<Scalars['timestamp']['output']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']['output']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']['output']>;
  metadata_id?: Maybe<Scalars['String']['output']>;
  mint_memo?: Maybe<Scalars['String']['output']>;
  minted_receipt_id?: Maybe<Scalars['String']['output']>;
  minted_timestamp?: Maybe<Scalars['timestamp']['output']>;
  minter?: Maybe<Scalars['String']['output']>;
  nft_contract_id?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_hash?: Maybe<Scalars['String']['output']>;
  royalties_percent?: Maybe<Scalars['Int']['output']>;
  starts_at?: Maybe<Scalars['timestamp']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** Ordering options when selecting data from "nft_tokens". */
export type Nft_Tokens_Order_By = {
  burned_receipt_id?: InputMaybe<Order_By>;
  burned_timestamp?: InputMaybe<Order_By>;
  copies?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  issued_at?: InputMaybe<Order_By>;
  last_transfer_receipt_id?: InputMaybe<Order_By>;
  last_transfer_timestamp?: InputMaybe<Order_By>;
  metadata_id?: InputMaybe<Order_By>;
  mint_memo?: InputMaybe<Order_By>;
  minted_receipt_id?: InputMaybe<Order_By>;
  minted_timestamp?: InputMaybe<Order_By>;
  minter?: InputMaybe<Order_By>;
  nft_contract?: InputMaybe<Nft_Contracts_Order_By>;
  nft_contract_id?: InputMaybe<Order_By>;
  nft_contracts?: InputMaybe<Nft_Contracts_Order_By>;
  nft_listings_aggregate?: InputMaybe<Nft_Listings_Aggregate_Order_By>;
  owner?: InputMaybe<Order_By>;
  reference?: InputMaybe<Order_By>;
  reference_hash?: InputMaybe<Order_By>;
  royalties?: InputMaybe<Order_By>;
  royalties_percent?: InputMaybe<Order_By>;
  splits?: InputMaybe<Order_By>;
  starts_at?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "nft_tokens" */
export enum Nft_Tokens_Select_Column {
  /** column name */
  BurnedReceiptId = 'burned_receipt_id',
  /** column name */
  BurnedTimestamp = 'burned_timestamp',
  /** column name */
  Copies = 'copies',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  IssuedAt = 'issued_at',
  /** column name */
  LastTransferReceiptId = 'last_transfer_receipt_id',
  /** column name */
  LastTransferTimestamp = 'last_transfer_timestamp',
  /** column name */
  MetadataId = 'metadata_id',
  /** column name */
  MintMemo = 'mint_memo',
  /** column name */
  MintedReceiptId = 'minted_receipt_id',
  /** column name */
  MintedTimestamp = 'minted_timestamp',
  /** column name */
  Minter = 'minter',
  /** column name */
  NftContractId = 'nft_contract_id',
  /** column name */
  Owner = 'owner',
  /** column name */
  Reference = 'reference',
  /** column name */
  ReferenceHash = 'reference_hash',
  /** column name */
  Royalties = 'royalties',
  /** column name */
  RoyaltiesPercent = 'royalties_percent',
  /** column name */
  Splits = 'splits',
  /** column name */
  StartsAt = 'starts_at',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Nft_Tokens_Stddev_Fields = {
  __typename?: 'nft_tokens_stddev_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nft_Tokens_Stddev_Pop_Fields = {
  __typename?: 'nft_tokens_stddev_pop_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nft_Tokens_Stddev_Samp_Fields = {
  __typename?: 'nft_tokens_stddev_samp_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nft_tokens" */
export type Nft_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nft_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nft_Tokens_Stream_Cursor_Value_Input = {
  burned_receipt_id?: InputMaybe<Scalars['String']['input']>;
  burned_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  copies?: InputMaybe<Scalars['bigint']['input']>;
  expires_at?: InputMaybe<Scalars['timestamp']['input']>;
  issued_at?: InputMaybe<Scalars['timestamp']['input']>;
  last_transfer_receipt_id?: InputMaybe<Scalars['String']['input']>;
  last_transfer_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  metadata_id?: InputMaybe<Scalars['String']['input']>;
  mint_memo?: InputMaybe<Scalars['String']['input']>;
  minted_receipt_id?: InputMaybe<Scalars['String']['input']>;
  minted_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  minter?: InputMaybe<Scalars['String']['input']>;
  nft_contract_id?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  reference_hash?: InputMaybe<Scalars['String']['input']>;
  royalties?: InputMaybe<Scalars['jsonb']['input']>;
  royalties_percent?: InputMaybe<Scalars['Int']['input']>;
  splits?: InputMaybe<Scalars['jsonb']['input']>;
  starts_at?: InputMaybe<Scalars['timestamp']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Nft_Tokens_Sum_Fields = {
  __typename?: 'nft_tokens_sum_fields';
  copies?: Maybe<Scalars['bigint']['output']>;
  royalties_percent?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Nft_Tokens_Var_Pop_Fields = {
  __typename?: 'nft_tokens_var_pop_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nft_Tokens_Var_Samp_Fields = {
  __typename?: 'nft_tokens_var_samp_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nft_Tokens_Variance_Fields = {
  __typename?: 'nft_tokens_variance_fields';
  copies?: Maybe<Scalars['Float']['output']>;
  royalties_percent?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "access_keys" */
  access_keys: Array<Access_Keys>;
  /** fetch aggregated fields from the table: "access_keys" */
  access_keys_aggregate: Access_Keys_Aggregate;
  /** fetch data from the table: "access_keys" using primary key columns */
  access_keys_by_pk?: Maybe<Access_Keys>;
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "analytics_tmp.affiliate_earnings_monthly" */
  analytics_tmp_affiliate_earnings_monthly: Array<Analytics_Tmp_Affiliate_Earnings_Monthly>;
  /** fetch aggregated fields from the table: "analytics_tmp.affiliate_earnings_monthly" */
  analytics_tmp_affiliate_earnings_monthly_aggregate: Analytics_Tmp_Affiliate_Earnings_Monthly_Aggregate;
  /** fetch data from the table: "analytics_tmp.affiliate_earnings_yearly" */
  analytics_tmp_affiliate_earnings_yearly: Array<Analytics_Tmp_Affiliate_Earnings_Yearly>;
  /** fetch aggregated fields from the table: "analytics_tmp.affiliate_earnings_yearly" */
  analytics_tmp_affiliate_earnings_yearly_aggregate: Analytics_Tmp_Affiliate_Earnings_Yearly_Aggregate;
  /** fetch data from the table: "blocks" */
  blocks: Array<Blocks>;
  /** fetch aggregated fields from the table: "blocks" */
  blocks_aggregate: Blocks_Aggregate;
  /** fetch data from the table: "blocks" using primary key columns */
  blocks_by_pk?: Maybe<Blocks>;
  launchpad_contracts: Array<Launchpad_Contracts_Model>;
  /** fetch data from the table: "mb_store_minters" */
  mb_store_minters: Array<Mb_Store_Minters>;
  /** fetch aggregated fields from the table: "mb_store_minters" */
  mb_store_minters_aggregate: Mb_Store_Minters_Aggregate;
  /** fetch data from the table: "mb_store_minters" using primary key columns */
  mb_store_minters_by_pk?: Maybe<Mb_Store_Minters>;
  /** fetch data from the table: "mb_views.active_listings" */
  mb_views_active_listings: Array<Mb_Views_Active_Listings>;
  /** fetch aggregated fields from the table: "mb_views.active_listings" */
  mb_views_active_listings_aggregate: Mb_Views_Active_Listings_Aggregate;
  /** fetch data from the table: "mb_views.active_listings_by_contract" */
  mb_views_active_listings_by_contract: Array<Mb_Views_Active_Listings_By_Contract>;
  /** fetch aggregated fields from the table: "mb_views.active_listings_by_contract" */
  mb_views_active_listings_by_contract_aggregate: Mb_Views_Active_Listings_By_Contract_Aggregate;
  /** fetch data from the table: "mb_views.active_listings_rollup" */
  mb_views_active_listings_rollup: Array<Mb_Views_Active_Listings_Rollup>;
  /** fetch aggregated fields from the table: "mb_views.active_listings_rollup" */
  mb_views_active_listings_rollup_aggregate: Mb_Views_Active_Listings_Rollup_Aggregate;
  /** fetch data from the table: "mb_views.auctions_with_offer" */
  mb_views_auctions_with_offer: Array<Mb_Views_Auctions_With_Offer>;
  /** fetch aggregated fields from the table: "mb_views.auctions_with_offer" */
  mb_views_auctions_with_offer_aggregate: Mb_Views_Auctions_With_Offer_Aggregate;
  /** fetch data from the table: "mb_views.nft_activities" */
  mb_views_nft_activities: Array<Mb_Views_Nft_Activities>;
  /** fetch aggregated fields from the table: "mb_views.nft_activities" */
  mb_views_nft_activities_aggregate: Mb_Views_Nft_Activities_Aggregate;
  /** fetch data from the table: "mb_views.nft_activities_rollup" */
  mb_views_nft_activities_rollup: Array<Mb_Views_Nft_Activities_Rollup>;
  /** fetch aggregated fields from the table: "mb_views.nft_activities_rollup" */
  mb_views_nft_activities_rollup_aggregate: Mb_Views_Nft_Activities_Rollup_Aggregate;
  /** fetch data from the table: "mb_views.nft_metadata" */
  mb_views_nft_metadata: Array<Mb_Views_Nft_Metadata>;
  /** fetch aggregated fields from the table: "mb_views.nft_metadata" */
  mb_views_nft_metadata_aggregate: Mb_Views_Nft_Metadata_Aggregate;
  /** fetch data from the table: "mb_views.nft_metadata_unburned" */
  mb_views_nft_metadata_unburned: Array<Mb_Views_Nft_Metadata_Unburned>;
  /** fetch aggregated fields from the table: "mb_views.nft_metadata_unburned" */
  mb_views_nft_metadata_unburned_aggregate: Mb_Views_Nft_Metadata_Unburned_Aggregate;
  /** fetch data from the table: "mb_views.nft_notifications" */
  mb_views_nft_notifications: Array<Mb_Views_Nft_Notifications>;
  /** fetch aggregated fields from the table: "mb_views.nft_notifications" */
  mb_views_nft_notifications_aggregate: Mb_Views_Nft_Notifications_Aggregate;
  /** fetch data from the table: "mb_views.nft_owned_tokens" */
  mb_views_nft_owned_tokens: Array<Mb_Views_Nft_Owned_Tokens>;
  /** fetch aggregated fields from the table: "mb_views.nft_owned_tokens" */
  mb_views_nft_owned_tokens_aggregate: Mb_Views_Nft_Owned_Tokens_Aggregate;
  /** fetch data from the table: "mb_views.nft_tokens" */
  mb_views_nft_tokens: Array<Mb_Views_Nft_Tokens>;
  /** fetch aggregated fields from the table: "mb_views.nft_tokens" */
  mb_views_nft_tokens_aggregate: Mb_Views_Nft_Tokens_Aggregate;
  /** fetch data from the table: "mb_views.nft_tokens_with_listing" */
  mb_views_nft_tokens_with_listing: Array<Mb_Views_Nft_Tokens_With_Listing>;
  /** fetch aggregated fields from the table: "mb_views.nft_tokens_with_listing" */
  mb_views_nft_tokens_with_listing_aggregate: Mb_Views_Nft_Tokens_With_Listing_Aggregate;
  /** fetch data from the table: "mb_views.nft_tokens_with_media_type" */
  mb_views_nft_tokens_with_media_type: Array<Mb_Views_Nft_Tokens_With_Media_Type>;
  /** fetch aggregated fields from the table: "mb_views.nft_tokens_with_media_type" */
  mb_views_nft_tokens_with_media_type_aggregate: Mb_Views_Nft_Tokens_With_Media_Type_Aggregate;
  /** fetch data from the table: "mb_views.top_stores" */
  mb_views_top_stores: Array<Mb_Views_Top_Stores>;
  /** fetch aggregated fields from the table: "mb_views.top_stores" */
  mb_views_top_stores_aggregate: Mb_Views_Top_Stores_Aggregate;
  /** fetch data from the table: "nft_activities" */
  nft_activities: Array<Nft_Activities>;
  /** fetch aggregated fields from the table: "nft_activities" */
  nft_activities_aggregate: Nft_Activities_Aggregate;
  /** fetch data from the table: "nft_activities" using primary key columns */
  nft_activities_by_pk?: Maybe<Nft_Activities>;
  /** fetch data from the table: "nft_attributes" */
  nft_attributes: Array<Nft_Attributes>;
  /** fetch aggregated fields from the table: "nft_attributes" */
  nft_attributes_aggregate: Nft_Attributes_Aggregate;
  /** fetch data from the table: "nft_attributes" using primary key columns */
  nft_attributes_by_pk?: Maybe<Nft_Attributes>;
  /** fetch data from the table: "nft_contracts" */
  nft_contracts: Array<Nft_Contracts>;
  /** fetch aggregated fields from the table: "nft_contracts" */
  nft_contracts_aggregate: Nft_Contracts_Aggregate;
  /** fetch data from the table: "nft_contracts" using primary key columns */
  nft_contracts_by_pk?: Maybe<Nft_Contracts>;
  /** fetch data from the table: "nft_earnings" */
  nft_earnings: Array<Nft_Earnings>;
  /** fetch aggregated fields from the table: "nft_earnings" */
  nft_earnings_aggregate: Nft_Earnings_Aggregate;
  /** fetch data from the table: "nft_earnings" using primary key columns */
  nft_earnings_by_pk?: Maybe<Nft_Earnings>;
  /** An array relationship */
  nft_listings: Array<Nft_Listings>;
  /** An aggregate relationship */
  nft_listings_aggregate: Nft_Listings_Aggregate;
  /** fetch data from the table: "nft_listings" using primary key columns */
  nft_listings_by_pk?: Maybe<Nft_Listings>;
  /** fetch data from the table: "nft_metadata" */
  nft_metadata: Array<Nft_Metadata>;
  /** fetch aggregated fields from the table: "nft_metadata" */
  nft_metadata_aggregate: Nft_Metadata_Aggregate;
  /** fetch data from the table: "nft_metadata" using primary key columns */
  nft_metadata_by_pk?: Maybe<Nft_Metadata>;
  /** fetch data from the table: "nft_offers" */
  nft_offers: Array<Nft_Offers>;
  /** fetch aggregated fields from the table: "nft_offers" */
  nft_offers_aggregate: Nft_Offers_Aggregate;
  /** fetch data from the table: "nft_offers" using primary key columns */
  nft_offers_by_pk?: Maybe<Nft_Offers>;
  /** fetch data from the table: "nft_tokens" */
  nft_tokens: Array<Nft_Tokens>;
  /** fetch aggregated fields from the table: "nft_tokens" */
  nft_tokens_aggregate: Nft_Tokens_Aggregate;
  /** fetch data from the table: "nft_tokens" using primary key columns */
  nft_tokens_by_pk?: Maybe<Nft_Tokens>;
};


export type Query_RootAccess_KeysArgs = {
  distinct_on?: InputMaybe<Array<Access_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Access_Keys_Order_By>>;
  where?: InputMaybe<Access_Keys_Bool_Exp>;
};


export type Query_RootAccess_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Access_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Access_Keys_Order_By>>;
  where?: InputMaybe<Access_Keys_Bool_Exp>;
};


export type Query_RootAccess_Keys_By_PkArgs = {
  account_id: Scalars['String']['input'];
  created_at: Scalars['timestamp']['input'];
  public_key: Scalars['String']['input'];
};


export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  account_id: Scalars['String']['input'];
};


export type Query_RootAnalytics_Tmp_Affiliate_Earnings_MonthlyArgs = {
  distinct_on?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Monthly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Monthly_Order_By>>;
  where?: InputMaybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Bool_Exp>;
};


export type Query_RootAnalytics_Tmp_Affiliate_Earnings_Monthly_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Monthly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Monthly_Order_By>>;
  where?: InputMaybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Bool_Exp>;
};


export type Query_RootAnalytics_Tmp_Affiliate_Earnings_YearlyArgs = {
  distinct_on?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Yearly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Yearly_Order_By>>;
  where?: InputMaybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Bool_Exp>;
};


export type Query_RootAnalytics_Tmp_Affiliate_Earnings_Yearly_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Yearly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Yearly_Order_By>>;
  where?: InputMaybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Bool_Exp>;
};


export type Query_RootBlocksArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};


export type Query_RootBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};


export type Query_RootBlocks_By_PkArgs = {
  synced_height: Scalars['bigint']['input'];
};


export type Query_RootLaunchpad_ContractsArgs = {
  args: Launchpad_Contracts_Arguments;
  distinct_on?: InputMaybe<Array<Launchpad_Contracts_Model_Enum_Name>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Launchpad_Contracts_Model_Order_By>>;
  where?: InputMaybe<Launchpad_Contracts_Model_Bool_Exp_Bool_Exp>;
};


export type Query_RootMb_Store_MintersArgs = {
  distinct_on?: InputMaybe<Array<Mb_Store_Minters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Store_Minters_Order_By>>;
  where?: InputMaybe<Mb_Store_Minters_Bool_Exp>;
};


export type Query_RootMb_Store_Minters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Store_Minters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Store_Minters_Order_By>>;
  where?: InputMaybe<Mb_Store_Minters_Bool_Exp>;
};


export type Query_RootMb_Store_Minters_By_PkArgs = {
  minter_id: Scalars['String']['input'];
  nft_contract_id: Scalars['String']['input'];
};


export type Query_RootMb_Views_Active_ListingsArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Active_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Active_Listings_Order_By>>;
  where?: InputMaybe<Mb_Views_Active_Listings_Bool_Exp>;
};


export type Query_RootMb_Views_Active_Listings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Active_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Active_Listings_Order_By>>;
  where?: InputMaybe<Mb_Views_Active_Listings_Bool_Exp>;
};


export type Query_RootMb_Views_Active_Listings_By_ContractArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Active_Listings_By_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Active_Listings_By_Contract_Order_By>>;
  where?: InputMaybe<Mb_Views_Active_Listings_By_Contract_Bool_Exp>;
};


export type Query_RootMb_Views_Active_Listings_By_Contract_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Active_Listings_By_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Active_Listings_By_Contract_Order_By>>;
  where?: InputMaybe<Mb_Views_Active_Listings_By_Contract_Bool_Exp>;
};


export type Query_RootMb_Views_Active_Listings_RollupArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Active_Listings_Rollup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Active_Listings_Rollup_Order_By>>;
  where?: InputMaybe<Mb_Views_Active_Listings_Rollup_Bool_Exp>;
};


export type Query_RootMb_Views_Active_Listings_Rollup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Active_Listings_Rollup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Active_Listings_Rollup_Order_By>>;
  where?: InputMaybe<Mb_Views_Active_Listings_Rollup_Bool_Exp>;
};


export type Query_RootMb_Views_Auctions_With_OfferArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Auctions_With_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Auctions_With_Offer_Order_By>>;
  where?: InputMaybe<Mb_Views_Auctions_With_Offer_Bool_Exp>;
};


export type Query_RootMb_Views_Auctions_With_Offer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Auctions_With_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Auctions_With_Offer_Order_By>>;
  where?: InputMaybe<Mb_Views_Auctions_With_Offer_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_ActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Activities_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Activities_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_Activities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Activities_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Activities_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_Activities_RollupArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Activities_Rollup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Activities_Rollup_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Activities_Rollup_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_Activities_Rollup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Activities_Rollup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Activities_Rollup_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Activities_Rollup_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Metadata_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Metadata_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Metadata_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Metadata_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_Metadata_UnburnedArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Metadata_Unburned_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Metadata_Unburned_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Metadata_Unburned_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_Metadata_Unburned_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Metadata_Unburned_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Metadata_Unburned_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Metadata_Unburned_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_NotificationsArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Notifications_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Notifications_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_Notifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Notifications_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Notifications_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_Owned_TokensArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Owned_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Owned_Tokens_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Owned_Tokens_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_Owned_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Owned_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Owned_Tokens_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Owned_Tokens_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_TokensArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Tokens_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Tokens_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Tokens_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Tokens_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_Tokens_With_ListingArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Listing_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Tokens_With_Listing_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_Tokens_With_Listing_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Listing_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Tokens_With_Listing_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_Tokens_With_Media_TypeArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Media_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Media_Type_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Tokens_With_Media_Type_Bool_Exp>;
};


export type Query_RootMb_Views_Nft_Tokens_With_Media_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Media_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Media_Type_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Tokens_With_Media_Type_Bool_Exp>;
};


export type Query_RootMb_Views_Top_StoresArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Top_Stores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Top_Stores_Order_By>>;
  where?: InputMaybe<Mb_Views_Top_Stores_Bool_Exp>;
};


export type Query_RootMb_Views_Top_Stores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Top_Stores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Top_Stores_Order_By>>;
  where?: InputMaybe<Mb_Views_Top_Stores_Bool_Exp>;
};


export type Query_RootNft_ActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Nft_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Activities_Order_By>>;
  where?: InputMaybe<Nft_Activities_Bool_Exp>;
};


export type Query_RootNft_Activities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Activities_Order_By>>;
  where?: InputMaybe<Nft_Activities_Bool_Exp>;
};


export type Query_RootNft_Activities_By_PkArgs = {
  kind: Scalars['String']['input'];
  nft_contract_id: Scalars['String']['input'];
  receipt_id: Scalars['String']['input'];
  token_id: Scalars['String']['input'];
};


export type Query_RootNft_AttributesArgs = {
  distinct_on?: InputMaybe<Array<Nft_Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Attributes_Order_By>>;
  where?: InputMaybe<Nft_Attributes_Bool_Exp>;
};


export type Query_RootNft_Attributes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Attributes_Order_By>>;
  where?: InputMaybe<Nft_Attributes_Bool_Exp>;
};


export type Query_RootNft_Attributes_By_PkArgs = {
  attribute_type: Scalars['String']['input'];
  nft_contract_id: Scalars['String']['input'];
  nft_metadata_id: Scalars['String']['input'];
};


export type Query_RootNft_ContractsArgs = {
  distinct_on?: InputMaybe<Array<Nft_Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Contracts_Order_By>>;
  where?: InputMaybe<Nft_Contracts_Bool_Exp>;
};


export type Query_RootNft_Contracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Contracts_Order_By>>;
  where?: InputMaybe<Nft_Contracts_Bool_Exp>;
};


export type Query_RootNft_Contracts_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootNft_EarningsArgs = {
  distinct_on?: InputMaybe<Array<Nft_Earnings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Earnings_Order_By>>;
  where?: InputMaybe<Nft_Earnings_Bool_Exp>;
};


export type Query_RootNft_Earnings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Earnings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Earnings_Order_By>>;
  where?: InputMaybe<Nft_Earnings_Bool_Exp>;
};


export type Query_RootNft_Earnings_By_PkArgs = {
  approval_id: Scalars['numeric']['input'];
  is_mintbase_cut: Scalars['Boolean']['input'];
  is_referral: Scalars['Boolean']['input'];
  market_id: Scalars['String']['input'];
  nft_contract_id: Scalars['String']['input'];
  receiver_id: Scalars['String']['input'];
  token_id: Scalars['String']['input'];
};


export type Query_RootNft_ListingsArgs = {
  distinct_on?: InputMaybe<Array<Nft_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Listings_Order_By>>;
  where?: InputMaybe<Nft_Listings_Bool_Exp>;
};


export type Query_RootNft_Listings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Listings_Order_By>>;
  where?: InputMaybe<Nft_Listings_Bool_Exp>;
};


export type Query_RootNft_Listings_By_PkArgs = {
  approval_id: Scalars['numeric']['input'];
  market_id: Scalars['String']['input'];
  nft_contract_id: Scalars['String']['input'];
  token_id: Scalars['String']['input'];
};


export type Query_RootNft_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Nft_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Metadata_Order_By>>;
  where?: InputMaybe<Nft_Metadata_Bool_Exp>;
};


export type Query_RootNft_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Metadata_Order_By>>;
  where?: InputMaybe<Nft_Metadata_Bool_Exp>;
};


export type Query_RootNft_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootNft_OffersArgs = {
  distinct_on?: InputMaybe<Array<Nft_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Offers_Order_By>>;
  where?: InputMaybe<Nft_Offers_Bool_Exp>;
};


export type Query_RootNft_Offers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Offers_Order_By>>;
  where?: InputMaybe<Nft_Offers_Bool_Exp>;
};


export type Query_RootNft_Offers_By_PkArgs = {
  approval_id: Scalars['numeric']['input'];
  market_id: Scalars['String']['input'];
  nft_contract_id: Scalars['String']['input'];
  offer_id: Scalars['bigint']['input'];
  token_id: Scalars['String']['input'];
};


export type Query_RootNft_TokensArgs = {
  distinct_on?: InputMaybe<Array<Nft_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Tokens_Order_By>>;
  where?: InputMaybe<Nft_Tokens_Bool_Exp>;
};


export type Query_RootNft_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Tokens_Order_By>>;
  where?: InputMaybe<Nft_Tokens_Bool_Exp>;
};


export type Query_RootNft_Tokens_By_PkArgs = {
  nft_contract_id: Scalars['String']['input'];
  token_id: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "access_keys" */
  access_keys: Array<Access_Keys>;
  /** fetch aggregated fields from the table: "access_keys" */
  access_keys_aggregate: Access_Keys_Aggregate;
  /** fetch data from the table: "access_keys" using primary key columns */
  access_keys_by_pk?: Maybe<Access_Keys>;
  /** fetch data from the table in a streaming manner: "access_keys" */
  access_keys_stream: Array<Access_Keys>;
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<Accounts>;
  /** fetch data from the table: "analytics_tmp.affiliate_earnings_monthly" */
  analytics_tmp_affiliate_earnings_monthly: Array<Analytics_Tmp_Affiliate_Earnings_Monthly>;
  /** fetch aggregated fields from the table: "analytics_tmp.affiliate_earnings_monthly" */
  analytics_tmp_affiliate_earnings_monthly_aggregate: Analytics_Tmp_Affiliate_Earnings_Monthly_Aggregate;
  /** fetch data from the table in a streaming manner: "analytics_tmp.affiliate_earnings_monthly" */
  analytics_tmp_affiliate_earnings_monthly_stream: Array<Analytics_Tmp_Affiliate_Earnings_Monthly>;
  /** fetch data from the table: "analytics_tmp.affiliate_earnings_yearly" */
  analytics_tmp_affiliate_earnings_yearly: Array<Analytics_Tmp_Affiliate_Earnings_Yearly>;
  /** fetch aggregated fields from the table: "analytics_tmp.affiliate_earnings_yearly" */
  analytics_tmp_affiliate_earnings_yearly_aggregate: Analytics_Tmp_Affiliate_Earnings_Yearly_Aggregate;
  /** fetch data from the table in a streaming manner: "analytics_tmp.affiliate_earnings_yearly" */
  analytics_tmp_affiliate_earnings_yearly_stream: Array<Analytics_Tmp_Affiliate_Earnings_Yearly>;
  /** fetch data from the table: "blocks" */
  blocks: Array<Blocks>;
  /** fetch aggregated fields from the table: "blocks" */
  blocks_aggregate: Blocks_Aggregate;
  /** fetch data from the table: "blocks" using primary key columns */
  blocks_by_pk?: Maybe<Blocks>;
  /** fetch data from the table in a streaming manner: "blocks" */
  blocks_stream: Array<Blocks>;
  launchpad_contracts: Array<Launchpad_Contracts_Model>;
  /** fetch data from the table: "mb_store_minters" */
  mb_store_minters: Array<Mb_Store_Minters>;
  /** fetch aggregated fields from the table: "mb_store_minters" */
  mb_store_minters_aggregate: Mb_Store_Minters_Aggregate;
  /** fetch data from the table: "mb_store_minters" using primary key columns */
  mb_store_minters_by_pk?: Maybe<Mb_Store_Minters>;
  /** fetch data from the table in a streaming manner: "mb_store_minters" */
  mb_store_minters_stream: Array<Mb_Store_Minters>;
  /** fetch data from the table: "mb_views.active_listings" */
  mb_views_active_listings: Array<Mb_Views_Active_Listings>;
  /** fetch aggregated fields from the table: "mb_views.active_listings" */
  mb_views_active_listings_aggregate: Mb_Views_Active_Listings_Aggregate;
  /** fetch data from the table: "mb_views.active_listings_by_contract" */
  mb_views_active_listings_by_contract: Array<Mb_Views_Active_Listings_By_Contract>;
  /** fetch aggregated fields from the table: "mb_views.active_listings_by_contract" */
  mb_views_active_listings_by_contract_aggregate: Mb_Views_Active_Listings_By_Contract_Aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.active_listings_by_contract" */
  mb_views_active_listings_by_contract_stream: Array<Mb_Views_Active_Listings_By_Contract>;
  /** fetch data from the table: "mb_views.active_listings_rollup" */
  mb_views_active_listings_rollup: Array<Mb_Views_Active_Listings_Rollup>;
  /** fetch aggregated fields from the table: "mb_views.active_listings_rollup" */
  mb_views_active_listings_rollup_aggregate: Mb_Views_Active_Listings_Rollup_Aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.active_listings_rollup" */
  mb_views_active_listings_rollup_stream: Array<Mb_Views_Active_Listings_Rollup>;
  /** fetch data from the table in a streaming manner: "mb_views.active_listings" */
  mb_views_active_listings_stream: Array<Mb_Views_Active_Listings>;
  /** fetch data from the table: "mb_views.auctions_with_offer" */
  mb_views_auctions_with_offer: Array<Mb_Views_Auctions_With_Offer>;
  /** fetch aggregated fields from the table: "mb_views.auctions_with_offer" */
  mb_views_auctions_with_offer_aggregate: Mb_Views_Auctions_With_Offer_Aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.auctions_with_offer" */
  mb_views_auctions_with_offer_stream: Array<Mb_Views_Auctions_With_Offer>;
  /** fetch data from the table: "mb_views.nft_activities" */
  mb_views_nft_activities: Array<Mb_Views_Nft_Activities>;
  /** fetch aggregated fields from the table: "mb_views.nft_activities" */
  mb_views_nft_activities_aggregate: Mb_Views_Nft_Activities_Aggregate;
  /** fetch data from the table: "mb_views.nft_activities_rollup" */
  mb_views_nft_activities_rollup: Array<Mb_Views_Nft_Activities_Rollup>;
  /** fetch aggregated fields from the table: "mb_views.nft_activities_rollup" */
  mb_views_nft_activities_rollup_aggregate: Mb_Views_Nft_Activities_Rollup_Aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.nft_activities_rollup" */
  mb_views_nft_activities_rollup_stream: Array<Mb_Views_Nft_Activities_Rollup>;
  /** fetch data from the table in a streaming manner: "mb_views.nft_activities" */
  mb_views_nft_activities_stream: Array<Mb_Views_Nft_Activities>;
  /** fetch data from the table: "mb_views.nft_metadata" */
  mb_views_nft_metadata: Array<Mb_Views_Nft_Metadata>;
  /** fetch aggregated fields from the table: "mb_views.nft_metadata" */
  mb_views_nft_metadata_aggregate: Mb_Views_Nft_Metadata_Aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.nft_metadata" */
  mb_views_nft_metadata_stream: Array<Mb_Views_Nft_Metadata>;
  /** fetch data from the table: "mb_views.nft_metadata_unburned" */
  mb_views_nft_metadata_unburned: Array<Mb_Views_Nft_Metadata_Unburned>;
  /** fetch aggregated fields from the table: "mb_views.nft_metadata_unburned" */
  mb_views_nft_metadata_unburned_aggregate: Mb_Views_Nft_Metadata_Unburned_Aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.nft_metadata_unburned" */
  mb_views_nft_metadata_unburned_stream: Array<Mb_Views_Nft_Metadata_Unburned>;
  /** fetch data from the table: "mb_views.nft_notifications" */
  mb_views_nft_notifications: Array<Mb_Views_Nft_Notifications>;
  /** fetch aggregated fields from the table: "mb_views.nft_notifications" */
  mb_views_nft_notifications_aggregate: Mb_Views_Nft_Notifications_Aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.nft_notifications" */
  mb_views_nft_notifications_stream: Array<Mb_Views_Nft_Notifications>;
  /** fetch data from the table: "mb_views.nft_owned_tokens" */
  mb_views_nft_owned_tokens: Array<Mb_Views_Nft_Owned_Tokens>;
  /** fetch aggregated fields from the table: "mb_views.nft_owned_tokens" */
  mb_views_nft_owned_tokens_aggregate: Mb_Views_Nft_Owned_Tokens_Aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.nft_owned_tokens" */
  mb_views_nft_owned_tokens_stream: Array<Mb_Views_Nft_Owned_Tokens>;
  /** fetch data from the table: "mb_views.nft_tokens" */
  mb_views_nft_tokens: Array<Mb_Views_Nft_Tokens>;
  /** fetch aggregated fields from the table: "mb_views.nft_tokens" */
  mb_views_nft_tokens_aggregate: Mb_Views_Nft_Tokens_Aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.nft_tokens" */
  mb_views_nft_tokens_stream: Array<Mb_Views_Nft_Tokens>;
  /** fetch data from the table: "mb_views.nft_tokens_with_listing" */
  mb_views_nft_tokens_with_listing: Array<Mb_Views_Nft_Tokens_With_Listing>;
  /** fetch aggregated fields from the table: "mb_views.nft_tokens_with_listing" */
  mb_views_nft_tokens_with_listing_aggregate: Mb_Views_Nft_Tokens_With_Listing_Aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.nft_tokens_with_listing" */
  mb_views_nft_tokens_with_listing_stream: Array<Mb_Views_Nft_Tokens_With_Listing>;
  /** fetch data from the table: "mb_views.nft_tokens_with_media_type" */
  mb_views_nft_tokens_with_media_type: Array<Mb_Views_Nft_Tokens_With_Media_Type>;
  /** fetch aggregated fields from the table: "mb_views.nft_tokens_with_media_type" */
  mb_views_nft_tokens_with_media_type_aggregate: Mb_Views_Nft_Tokens_With_Media_Type_Aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.nft_tokens_with_media_type" */
  mb_views_nft_tokens_with_media_type_stream: Array<Mb_Views_Nft_Tokens_With_Media_Type>;
  /** fetch data from the table: "mb_views.top_stores" */
  mb_views_top_stores: Array<Mb_Views_Top_Stores>;
  /** fetch aggregated fields from the table: "mb_views.top_stores" */
  mb_views_top_stores_aggregate: Mb_Views_Top_Stores_Aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.top_stores" */
  mb_views_top_stores_stream: Array<Mb_Views_Top_Stores>;
  /** fetch data from the table: "nft_activities" */
  nft_activities: Array<Nft_Activities>;
  /** fetch aggregated fields from the table: "nft_activities" */
  nft_activities_aggregate: Nft_Activities_Aggregate;
  /** fetch data from the table: "nft_activities" using primary key columns */
  nft_activities_by_pk?: Maybe<Nft_Activities>;
  /** fetch data from the table in a streaming manner: "nft_activities" */
  nft_activities_stream: Array<Nft_Activities>;
  /** fetch data from the table: "nft_attributes" */
  nft_attributes: Array<Nft_Attributes>;
  /** fetch aggregated fields from the table: "nft_attributes" */
  nft_attributes_aggregate: Nft_Attributes_Aggregate;
  /** fetch data from the table: "nft_attributes" using primary key columns */
  nft_attributes_by_pk?: Maybe<Nft_Attributes>;
  /** fetch data from the table in a streaming manner: "nft_attributes" */
  nft_attributes_stream: Array<Nft_Attributes>;
  /** fetch data from the table: "nft_contracts" */
  nft_contracts: Array<Nft_Contracts>;
  /** fetch aggregated fields from the table: "nft_contracts" */
  nft_contracts_aggregate: Nft_Contracts_Aggregate;
  /** fetch data from the table: "nft_contracts" using primary key columns */
  nft_contracts_by_pk?: Maybe<Nft_Contracts>;
  /** fetch data from the table in a streaming manner: "nft_contracts" */
  nft_contracts_stream: Array<Nft_Contracts>;
  /** fetch data from the table: "nft_earnings" */
  nft_earnings: Array<Nft_Earnings>;
  /** fetch aggregated fields from the table: "nft_earnings" */
  nft_earnings_aggregate: Nft_Earnings_Aggregate;
  /** fetch data from the table: "nft_earnings" using primary key columns */
  nft_earnings_by_pk?: Maybe<Nft_Earnings>;
  /** fetch data from the table in a streaming manner: "nft_earnings" */
  nft_earnings_stream: Array<Nft_Earnings>;
  /** An array relationship */
  nft_listings: Array<Nft_Listings>;
  /** An aggregate relationship */
  nft_listings_aggregate: Nft_Listings_Aggregate;
  /** fetch data from the table: "nft_listings" using primary key columns */
  nft_listings_by_pk?: Maybe<Nft_Listings>;
  /** fetch data from the table in a streaming manner: "nft_listings" */
  nft_listings_stream: Array<Nft_Listings>;
  /** fetch data from the table: "nft_metadata" */
  nft_metadata: Array<Nft_Metadata>;
  /** fetch aggregated fields from the table: "nft_metadata" */
  nft_metadata_aggregate: Nft_Metadata_Aggregate;
  /** fetch data from the table: "nft_metadata" using primary key columns */
  nft_metadata_by_pk?: Maybe<Nft_Metadata>;
  /** fetch data from the table in a streaming manner: "nft_metadata" */
  nft_metadata_stream: Array<Nft_Metadata>;
  /** fetch data from the table: "nft_offers" */
  nft_offers: Array<Nft_Offers>;
  /** fetch aggregated fields from the table: "nft_offers" */
  nft_offers_aggregate: Nft_Offers_Aggregate;
  /** fetch data from the table: "nft_offers" using primary key columns */
  nft_offers_by_pk?: Maybe<Nft_Offers>;
  /** fetch data from the table in a streaming manner: "nft_offers" */
  nft_offers_stream: Array<Nft_Offers>;
  /** fetch data from the table: "nft_tokens" */
  nft_tokens: Array<Nft_Tokens>;
  /** fetch aggregated fields from the table: "nft_tokens" */
  nft_tokens_aggregate: Nft_Tokens_Aggregate;
  /** fetch data from the table: "nft_tokens" using primary key columns */
  nft_tokens_by_pk?: Maybe<Nft_Tokens>;
  /** fetch data from the table in a streaming manner: "nft_tokens" */
  nft_tokens_stream: Array<Nft_Tokens>;
};


export type Subscription_RootAccess_KeysArgs = {
  distinct_on?: InputMaybe<Array<Access_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Access_Keys_Order_By>>;
  where?: InputMaybe<Access_Keys_Bool_Exp>;
};


export type Subscription_RootAccess_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Access_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Access_Keys_Order_By>>;
  where?: InputMaybe<Access_Keys_Bool_Exp>;
};


export type Subscription_RootAccess_Keys_By_PkArgs = {
  account_id: Scalars['String']['input'];
  created_at: Scalars['timestamp']['input'];
  public_key: Scalars['String']['input'];
};


export type Subscription_RootAccess_Keys_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Access_Keys_Stream_Cursor_Input>>;
  where?: InputMaybe<Access_Keys_Bool_Exp>;
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  account_id: Scalars['String']['input'];
};


export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAnalytics_Tmp_Affiliate_Earnings_MonthlyArgs = {
  distinct_on?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Monthly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Monthly_Order_By>>;
  where?: InputMaybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Bool_Exp>;
};


export type Subscription_RootAnalytics_Tmp_Affiliate_Earnings_Monthly_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Monthly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Monthly_Order_By>>;
  where?: InputMaybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Bool_Exp>;
};


export type Subscription_RootAnalytics_Tmp_Affiliate_Earnings_Monthly_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Stream_Cursor_Input>>;
  where?: InputMaybe<Analytics_Tmp_Affiliate_Earnings_Monthly_Bool_Exp>;
};


export type Subscription_RootAnalytics_Tmp_Affiliate_Earnings_YearlyArgs = {
  distinct_on?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Yearly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Yearly_Order_By>>;
  where?: InputMaybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Bool_Exp>;
};


export type Subscription_RootAnalytics_Tmp_Affiliate_Earnings_Yearly_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Yearly_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Analytics_Tmp_Affiliate_Earnings_Yearly_Order_By>>;
  where?: InputMaybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Bool_Exp>;
};


export type Subscription_RootAnalytics_Tmp_Affiliate_Earnings_Yearly_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Stream_Cursor_Input>>;
  where?: InputMaybe<Analytics_Tmp_Affiliate_Earnings_Yearly_Bool_Exp>;
};


export type Subscription_RootBlocksArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};


export type Subscription_RootBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};


export type Subscription_RootBlocks_By_PkArgs = {
  synced_height: Scalars['bigint']['input'];
};


export type Subscription_RootBlocks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Blocks_Stream_Cursor_Input>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};


export type Subscription_RootLaunchpad_ContractsArgs = {
  args: Launchpad_Contracts_Arguments;
  distinct_on?: InputMaybe<Array<Launchpad_Contracts_Model_Enum_Name>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Launchpad_Contracts_Model_Order_By>>;
  where?: InputMaybe<Launchpad_Contracts_Model_Bool_Exp_Bool_Exp>;
};


export type Subscription_RootMb_Store_MintersArgs = {
  distinct_on?: InputMaybe<Array<Mb_Store_Minters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Store_Minters_Order_By>>;
  where?: InputMaybe<Mb_Store_Minters_Bool_Exp>;
};


export type Subscription_RootMb_Store_Minters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Store_Minters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Store_Minters_Order_By>>;
  where?: InputMaybe<Mb_Store_Minters_Bool_Exp>;
};


export type Subscription_RootMb_Store_Minters_By_PkArgs = {
  minter_id: Scalars['String']['input'];
  nft_contract_id: Scalars['String']['input'];
};


export type Subscription_RootMb_Store_Minters_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mb_Store_Minters_Stream_Cursor_Input>>;
  where?: InputMaybe<Mb_Store_Minters_Bool_Exp>;
};


export type Subscription_RootMb_Views_Active_ListingsArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Active_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Active_Listings_Order_By>>;
  where?: InputMaybe<Mb_Views_Active_Listings_Bool_Exp>;
};


export type Subscription_RootMb_Views_Active_Listings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Active_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Active_Listings_Order_By>>;
  where?: InputMaybe<Mb_Views_Active_Listings_Bool_Exp>;
};


export type Subscription_RootMb_Views_Active_Listings_By_ContractArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Active_Listings_By_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Active_Listings_By_Contract_Order_By>>;
  where?: InputMaybe<Mb_Views_Active_Listings_By_Contract_Bool_Exp>;
};


export type Subscription_RootMb_Views_Active_Listings_By_Contract_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Active_Listings_By_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Active_Listings_By_Contract_Order_By>>;
  where?: InputMaybe<Mb_Views_Active_Listings_By_Contract_Bool_Exp>;
};


export type Subscription_RootMb_Views_Active_Listings_By_Contract_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mb_Views_Active_Listings_By_Contract_Stream_Cursor_Input>>;
  where?: InputMaybe<Mb_Views_Active_Listings_By_Contract_Bool_Exp>;
};


export type Subscription_RootMb_Views_Active_Listings_RollupArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Active_Listings_Rollup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Active_Listings_Rollup_Order_By>>;
  where?: InputMaybe<Mb_Views_Active_Listings_Rollup_Bool_Exp>;
};


export type Subscription_RootMb_Views_Active_Listings_Rollup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Active_Listings_Rollup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Active_Listings_Rollup_Order_By>>;
  where?: InputMaybe<Mb_Views_Active_Listings_Rollup_Bool_Exp>;
};


export type Subscription_RootMb_Views_Active_Listings_Rollup_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mb_Views_Active_Listings_Rollup_Stream_Cursor_Input>>;
  where?: InputMaybe<Mb_Views_Active_Listings_Rollup_Bool_Exp>;
};


export type Subscription_RootMb_Views_Active_Listings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mb_Views_Active_Listings_Stream_Cursor_Input>>;
  where?: InputMaybe<Mb_Views_Active_Listings_Bool_Exp>;
};


export type Subscription_RootMb_Views_Auctions_With_OfferArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Auctions_With_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Auctions_With_Offer_Order_By>>;
  where?: InputMaybe<Mb_Views_Auctions_With_Offer_Bool_Exp>;
};


export type Subscription_RootMb_Views_Auctions_With_Offer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Auctions_With_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Auctions_With_Offer_Order_By>>;
  where?: InputMaybe<Mb_Views_Auctions_With_Offer_Bool_Exp>;
};


export type Subscription_RootMb_Views_Auctions_With_Offer_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mb_Views_Auctions_With_Offer_Stream_Cursor_Input>>;
  where?: InputMaybe<Mb_Views_Auctions_With_Offer_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_ActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Activities_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Activities_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Activities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Activities_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Activities_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Activities_RollupArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Activities_Rollup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Activities_Rollup_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Activities_Rollup_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Activities_Rollup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Activities_Rollup_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Activities_Rollup_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Activities_Rollup_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Activities_Rollup_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mb_Views_Nft_Activities_Rollup_Stream_Cursor_Input>>;
  where?: InputMaybe<Mb_Views_Nft_Activities_Rollup_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Activities_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mb_Views_Nft_Activities_Stream_Cursor_Input>>;
  where?: InputMaybe<Mb_Views_Nft_Activities_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Metadata_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Metadata_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Metadata_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Metadata_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mb_Views_Nft_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Mb_Views_Nft_Metadata_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Metadata_UnburnedArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Metadata_Unburned_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Metadata_Unburned_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Metadata_Unburned_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Metadata_Unburned_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Metadata_Unburned_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Metadata_Unburned_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Metadata_Unburned_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Metadata_Unburned_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mb_Views_Nft_Metadata_Unburned_Stream_Cursor_Input>>;
  where?: InputMaybe<Mb_Views_Nft_Metadata_Unburned_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_NotificationsArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Notifications_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Notifications_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Notifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Notifications_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Notifications_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Notifications_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mb_Views_Nft_Notifications_Stream_Cursor_Input>>;
  where?: InputMaybe<Mb_Views_Nft_Notifications_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Owned_TokensArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Owned_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Owned_Tokens_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Owned_Tokens_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Owned_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Owned_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Owned_Tokens_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Owned_Tokens_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Owned_Tokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mb_Views_Nft_Owned_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Mb_Views_Nft_Owned_Tokens_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_TokensArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Tokens_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Tokens_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Tokens_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Tokens_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Tokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mb_Views_Nft_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Mb_Views_Nft_Tokens_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Tokens_With_ListingArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Listing_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Tokens_With_Listing_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Tokens_With_Listing_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Listing_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Tokens_With_Listing_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Tokens_With_Listing_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mb_Views_Nft_Tokens_With_Listing_Stream_Cursor_Input>>;
  where?: InputMaybe<Mb_Views_Nft_Tokens_With_Listing_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Tokens_With_Media_TypeArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Media_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Media_Type_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Tokens_With_Media_Type_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Tokens_With_Media_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Media_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Nft_Tokens_With_Media_Type_Order_By>>;
  where?: InputMaybe<Mb_Views_Nft_Tokens_With_Media_Type_Bool_Exp>;
};


export type Subscription_RootMb_Views_Nft_Tokens_With_Media_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mb_Views_Nft_Tokens_With_Media_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Mb_Views_Nft_Tokens_With_Media_Type_Bool_Exp>;
};


export type Subscription_RootMb_Views_Top_StoresArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Top_Stores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Top_Stores_Order_By>>;
  where?: InputMaybe<Mb_Views_Top_Stores_Bool_Exp>;
};


export type Subscription_RootMb_Views_Top_Stores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mb_Views_Top_Stores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Mb_Views_Top_Stores_Order_By>>;
  where?: InputMaybe<Mb_Views_Top_Stores_Bool_Exp>;
};


export type Subscription_RootMb_Views_Top_Stores_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Mb_Views_Top_Stores_Stream_Cursor_Input>>;
  where?: InputMaybe<Mb_Views_Top_Stores_Bool_Exp>;
};


export type Subscription_RootNft_ActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Nft_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Activities_Order_By>>;
  where?: InputMaybe<Nft_Activities_Bool_Exp>;
};


export type Subscription_RootNft_Activities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Activities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Activities_Order_By>>;
  where?: InputMaybe<Nft_Activities_Bool_Exp>;
};


export type Subscription_RootNft_Activities_By_PkArgs = {
  kind: Scalars['String']['input'];
  nft_contract_id: Scalars['String']['input'];
  receipt_id: Scalars['String']['input'];
  token_id: Scalars['String']['input'];
};


export type Subscription_RootNft_Activities_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nft_Activities_Stream_Cursor_Input>>;
  where?: InputMaybe<Nft_Activities_Bool_Exp>;
};


export type Subscription_RootNft_AttributesArgs = {
  distinct_on?: InputMaybe<Array<Nft_Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Attributes_Order_By>>;
  where?: InputMaybe<Nft_Attributes_Bool_Exp>;
};


export type Subscription_RootNft_Attributes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Attributes_Order_By>>;
  where?: InputMaybe<Nft_Attributes_Bool_Exp>;
};


export type Subscription_RootNft_Attributes_By_PkArgs = {
  attribute_type: Scalars['String']['input'];
  nft_contract_id: Scalars['String']['input'];
  nft_metadata_id: Scalars['String']['input'];
};


export type Subscription_RootNft_Attributes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nft_Attributes_Stream_Cursor_Input>>;
  where?: InputMaybe<Nft_Attributes_Bool_Exp>;
};


export type Subscription_RootNft_ContractsArgs = {
  distinct_on?: InputMaybe<Array<Nft_Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Contracts_Order_By>>;
  where?: InputMaybe<Nft_Contracts_Bool_Exp>;
};


export type Subscription_RootNft_Contracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Contracts_Order_By>>;
  where?: InputMaybe<Nft_Contracts_Bool_Exp>;
};


export type Subscription_RootNft_Contracts_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootNft_Contracts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nft_Contracts_Stream_Cursor_Input>>;
  where?: InputMaybe<Nft_Contracts_Bool_Exp>;
};


export type Subscription_RootNft_EarningsArgs = {
  distinct_on?: InputMaybe<Array<Nft_Earnings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Earnings_Order_By>>;
  where?: InputMaybe<Nft_Earnings_Bool_Exp>;
};


export type Subscription_RootNft_Earnings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Earnings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Earnings_Order_By>>;
  where?: InputMaybe<Nft_Earnings_Bool_Exp>;
};


export type Subscription_RootNft_Earnings_By_PkArgs = {
  approval_id: Scalars['numeric']['input'];
  is_mintbase_cut: Scalars['Boolean']['input'];
  is_referral: Scalars['Boolean']['input'];
  market_id: Scalars['String']['input'];
  nft_contract_id: Scalars['String']['input'];
  receiver_id: Scalars['String']['input'];
  token_id: Scalars['String']['input'];
};


export type Subscription_RootNft_Earnings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nft_Earnings_Stream_Cursor_Input>>;
  where?: InputMaybe<Nft_Earnings_Bool_Exp>;
};


export type Subscription_RootNft_ListingsArgs = {
  distinct_on?: InputMaybe<Array<Nft_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Listings_Order_By>>;
  where?: InputMaybe<Nft_Listings_Bool_Exp>;
};


export type Subscription_RootNft_Listings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Listings_Order_By>>;
  where?: InputMaybe<Nft_Listings_Bool_Exp>;
};


export type Subscription_RootNft_Listings_By_PkArgs = {
  approval_id: Scalars['numeric']['input'];
  market_id: Scalars['String']['input'];
  nft_contract_id: Scalars['String']['input'];
  token_id: Scalars['String']['input'];
};


export type Subscription_RootNft_Listings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nft_Listings_Stream_Cursor_Input>>;
  where?: InputMaybe<Nft_Listings_Bool_Exp>;
};


export type Subscription_RootNft_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Nft_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Metadata_Order_By>>;
  where?: InputMaybe<Nft_Metadata_Bool_Exp>;
};


export type Subscription_RootNft_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Metadata_Order_By>>;
  where?: InputMaybe<Nft_Metadata_Bool_Exp>;
};


export type Subscription_RootNft_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootNft_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nft_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Nft_Metadata_Bool_Exp>;
};


export type Subscription_RootNft_OffersArgs = {
  distinct_on?: InputMaybe<Array<Nft_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Offers_Order_By>>;
  where?: InputMaybe<Nft_Offers_Bool_Exp>;
};


export type Subscription_RootNft_Offers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Offers_Order_By>>;
  where?: InputMaybe<Nft_Offers_Bool_Exp>;
};


export type Subscription_RootNft_Offers_By_PkArgs = {
  approval_id: Scalars['numeric']['input'];
  market_id: Scalars['String']['input'];
  nft_contract_id: Scalars['String']['input'];
  offer_id: Scalars['bigint']['input'];
  token_id: Scalars['String']['input'];
};


export type Subscription_RootNft_Offers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nft_Offers_Stream_Cursor_Input>>;
  where?: InputMaybe<Nft_Offers_Bool_Exp>;
};


export type Subscription_RootNft_TokensArgs = {
  distinct_on?: InputMaybe<Array<Nft_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Tokens_Order_By>>;
  where?: InputMaybe<Nft_Tokens_Bool_Exp>;
};


export type Subscription_RootNft_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nft_Tokens_Order_By>>;
  where?: InputMaybe<Nft_Tokens_Bool_Exp>;
};


export type Subscription_RootNft_Tokens_By_PkArgs = {
  nft_contract_id: Scalars['String']['input'];
  token_id: Scalars['String']['input'];
};


export type Subscription_RootNft_Tokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nft_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Nft_Tokens_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

export type Minsta_Fetch_Feed_Minted_TokensQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  contractAddress?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Minsta_Fetch_Feed_Minted_TokensQuery = { __typename?: 'query_root', token: Array<{ __typename?: 'mb_views_nft_tokens', media?: string | null, title?: string | null, description?: string | null, metadata_id?: string | null, id?: string | null, createdAt?: any | null }>, mb_views_nft_tokens_aggregate: { __typename?: 'mb_views_nft_tokens_aggregate', aggregate?: { __typename?: 'mb_views_nft_tokens_aggregate_fields', count: number } | null } };

export type Minsta_Fetch_FirstTokenQueryVariables = Exact<{
  accountId: Scalars['String']['input'];
  contractAddress?: InputMaybe<Scalars['String']['input']>;
}>;


export type Minsta_Fetch_FirstTokenQuery = { __typename?: 'query_root', token: Array<{ __typename?: 'mb_views_nft_tokens', media?: string | null, title?: string | null, description?: string | null, metadata_id?: string | null, id?: string | null, createdAt?: any | null }> };


export const Minsta_Fetch_Feed_Minted_TokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"minsta_fetch_feed_minted_tokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"token"},"name":{"kind":"Name","value":"mb_views_nft_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"minter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"nft_contract_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"burned_timestamp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"metadata_content_flag"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"nft_contract_content_flag"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"minted_timestamp"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"token_id"}},{"kind":"Field","alias":{"kind":"Name","value":"createdAt"},"name":{"kind":"Name","value":"minted_timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"metadata_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mb_views_nft_tokens_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"minter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"nft_contract_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"burned_timestamp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<Minsta_Fetch_Feed_Minted_TokensQuery, Minsta_Fetch_Feed_Minted_TokensQueryVariables>;
export const Minsta_Fetch_FirstTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"minsta_fetch_firstToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"token"},"name":{"kind":"Name","value":"mb_views_nft_tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"minter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"nft_contract_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"burned_timestamp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"metadata_content_flag"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"nft_contract_content_flag"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"minted_timestamp"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"token_id"}},{"kind":"Field","alias":{"kind":"Name","value":"createdAt"},"name":{"kind":"Name","value":"minted_timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"media"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"metadata_id"}}]}}]}}]} as unknown as DocumentNode<Minsta_Fetch_FirstTokenQuery, Minsta_Fetch_FirstTokenQueryVariables>;