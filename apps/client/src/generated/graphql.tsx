import { useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://127.0.0.1:3500/graphql", {
    method: "POST",
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  /** the token to be used when accessing private resources on the server */
  token: Scalars['String'];
};

export type CreateGearRecordInput = {
  /** the date the piece of gear was acquired */
  acquiredOn: Scalars['DateTime'];
  /** the actual cost of the piece of gear */
  actualCost: Scalars['String'];
  /** the manufacturer of the piece of gear */
  manufacturer: Scalars['String'];
  /** the serial number of the piece of gear */
  modelNumber: Scalars['String'];
  /** the MSRP of the piece of gear */
  msrp: Scalars['String'];
  /** the name of the piece of gear */
  name: Scalars['String'];
  /** the serial number of the piece of gear */
  serialNumber: Scalars['String'];
};

export type CreateGearRecordPhotoInput = {
  /** The Gear Record to associate the photo with */
  gearRecordId: Scalars['ID'];
  /** The photo  to asociate with a gear record */
  photo: Scalars['Upload'];
};

export type CreateUserInput = {
  /** the primary contact email of the user. This will also be the user's login username */
  email: Scalars['String'];
  /** the first name of the user */
  firstName: Scalars['String'];
  /** the last name of the user */
  lastName: Scalars['String'];
  /** the password for the user. Must be 12-64 characters, include at least 1 number, at least 1 uppercase letter, at least 1 lowercase letter and at least 1 special character" */
  password: Scalars['String'];
  /** Must match the 'password' field */
  passwordConfirmation: Scalars['String'];
};

export type GearRecord = {
  __typename?: 'GearRecord';
  /** the date the piece of gear was acquired */
  acquiredOn?: Maybe<Scalars['DateTime']>;
  /** the actual cost of the piece of gear */
  actualCost?: Maybe<Scalars['String']>;
  /** Example field (placeholder) */
  id: Scalars['ID'];
  /** the manufacturer of the piece of gear */
  manufacturer?: Maybe<Scalars['String']>;
  /** the serial number of the piece of gear */
  modelNumber?: Maybe<Scalars['String']>;
  /** the MSRP of the piece of gear */
  msrp?: Maybe<Scalars['String']>;
  /** the name of the piece of gear */
  name: Scalars['String'];
  photos: Array<GearRecordPhoto>;
  /** the serial number of the piece of gear */
  serialNumber?: Maybe<Scalars['String']>;
  user: User;
};

export type GearRecordPhoto = {
  __typename?: 'GearRecordPhoto';
  /** the filename from the image POST handler */
  fileName: Scalars['String'];
  /** the gear record that this photo is related to */
  gearRecord: GearRecord;
  /** the id of the photo */
  id: Scalars['ID'];
  /** the date the file was uploaded */
  uploadedAt: Scalars['DateTime'];
};

export type LoginInput = {
  /** the users login email */
  email: Scalars['String'];
  /** the users login password */
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createGearRecord: GearRecord;
  createGearRecordPhoto: Scalars['Boolean'];
  createUser: User;
  login: AuthPayload;
  removeGearRecord: GearRecord;
  removeGearRecordPhoto: GearRecordPhoto;
  removeUser: User;
  updateGearRecord: GearRecord;
  updateGearRecordPhoto: GearRecordPhoto;
  updateUser: User;
};


export type MutationcreateGearRecordArgs = {
  createGearRecordInput: CreateGearRecordInput;
};


export type MutationcreateGearRecordPhotoArgs = {
  createGearRecordPhotoInput: CreateGearRecordPhotoInput;
};


export type MutationcreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationloginArgs = {
  loginInput: LoginInput;
};


export type MutationremoveGearRecordArgs = {
  id: Scalars['Int'];
};


export type MutationremoveGearRecordPhotoArgs = {
  id: Scalars['Int'];
};


export type MutationremoveUserArgs = {
  email: Scalars['String'];
};


export type MutationupdateGearRecordArgs = {
  updateGearRecordInput: UpdateGearRecordInput;
};


export type MutationupdateGearRecordPhotoArgs = {
  updateGearRecordPhotoInput: UpdateGearRecordPhotoInput;
};


export type MutationupdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  gearRecord: GearRecord;
  gearRecordPhoto: GearRecordPhoto;
  gearRecordPhotos: Array<GearRecordPhoto>;
  gearRecords: Array<GearRecord>;
  user: User;
  users: Array<User>;
};


export type QuerygearRecordArgs = {
  id: Scalars['Int'];
};


export type QuerygearRecordPhotoArgs = {
  id: Scalars['Int'];
};


export type QueryuserArgs = {
  email: Scalars['String'];
};

export type UpdateGearRecordInput = {
  /** the date the piece of gear was acquired */
  acquiredOn: Scalars['DateTime'];
  /** the actual cost of the piece of gear */
  actualCost: Scalars['String'];
  id: Scalars['Int'];
  /** the manufacturer of the piece of gear */
  manufacturer: Scalars['String'];
  /** the serial number of the piece of gear */
  modelNumber: Scalars['String'];
  /** the MSRP of the piece of gear */
  msrp: Scalars['String'];
  /** the name of the piece of gear */
  name: Scalars['String'];
  /** the serial number of the piece of gear */
  serialNumber: Scalars['String'];
};

export type UpdateGearRecordPhotoInput = {
  /** The Gear Record to associate the photo with */
  gearRecordId?: InputMaybe<Scalars['ID']>;
  id: Scalars['Int'];
  /** The photo  to asociate with a gear record */
  photo?: InputMaybe<Scalars['Upload']>;
};

export type UpdateUserInput = {
  /** the primary contact email of the user. This will also be the user's login username */
  email?: InputMaybe<Scalars['String']>;
  /** the first name of the user */
  firstName: Scalars['String'];
  id: Scalars['Int'];
  /** the last name of the user */
  lastName?: InputMaybe<Scalars['String']>;
  /** the password for the user. Must be 12-64 characters, include at least 1 number, at least 1 uppercase letter, at least 1 lowercase letter and at least 1 special character" */
  password?: InputMaybe<Scalars['String']>;
  /** Must match the 'password' field */
  passwordConfirmation?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  /** the primary contact email of the user. This will also be the user's login username */
  email: Scalars['String'];
  /** the first name of the user */
  firstName: Scalars['String'];
  id: Scalars['ID'];
  /** the last name of the user */
  lastName: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', token: string } };


export const LoginDocument = `
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    token
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['Login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
      options
    );