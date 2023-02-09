/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Company = {
  __typename?: 'Company';
  city: Scalars['String'];
  companyId: Scalars['String'];
  name: Scalars['String'];
  users: Array<User>;
};

export type CompanyInput = {
  city: Scalars['String'];
  companyId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CompanyWhere = {
  city?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  saveCompany: Company;
  saveUser: User;
};


export type MutationSaveCompanyArgs = {
  data: CompanyInput;
};


export type MutationSaveUserArgs = {
  data: UserInput;
};

export type PaginatedCompany = {
  __typename?: 'PaginatedCompany';
  count: Scalars['Int'];
  data: Array<Company>;
};

export type PaginatedUser = {
  __typename?: 'PaginatedUser';
  count: Scalars['Int'];
  data: Array<User>;
};

export type Query = {
  __typename?: 'Query';
  findCompanies: PaginatedCompany;
  findCompany: Company;
  findUsers: PaginatedUser;
};


export type QueryFindCompaniesArgs = {
  query?: InputMaybe<QueryCompanyInput>;
};


export type QueryFindCompanyArgs = {
  query?: InputMaybe<QueryCompanyInput>;
};


export type QueryFindUsersArgs = {
  query?: InputMaybe<QueryUserInput>;
};

export type QueryCompanyInput = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompanyWhere>;
};

export type QueryUserInput = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhere>;
};

export type User = {
  __typename?: 'User';
  companies: Array<Company>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type UserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type UserWhere = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};
