/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  subscribeToNewMessage: SubscribeToNewMessageSubscription;
  subscribeToNewMessage1: SubscribeToNewMessage1Subscription;
};

export type SampleData = {
  __typename: "SampleData";
  id: string;
  value: string;
  datetime?: string | null;
};

export type SampleData1 = {
  __typename: "SampleData1";
  id: string;
  value: string;
  datetime?: string | null;
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTodoFilterInput | null> | null;
  or?: Array<ModelSubscriptionTodoFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type AddSampleDataMutation = {
  __typename: "SampleData";
  id: string;
  value: string;
  datetime?: string | null;
};

export type AddSampleData1Mutation = {
  __typename: "SampleData1";
  id: string;
  value: string;
  datetime?: string | null;
};

export type ListSampleDataQuery = {
  __typename: "SampleData";
  id: string;
  value: string;
  datetime?: string | null;
};

export type SubscribeToNewMessageSubscription = {
  __typename: "SampleData";
  id: string;
  value: string;
  datetime?: string | null;
};

export type SubscribeToNewMessage1Subscription = {
  __typename: "SampleData1";
  id: string;
  value: string;
  datetime?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async AddSampleData(
    id: string,
    value: string
  ): Promise<AddSampleDataMutation> {
    const statement = `mutation AddSampleData($id: ID!, $value: String!) {
        addSampleData(id: $id, value: $value) {
          __typename
          id
          value
          datetime
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      value
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AddSampleDataMutation>response.data.addSampleData;
  }
  async AddSampleData1(
    id: string,
    value: string
  ): Promise<AddSampleData1Mutation> {
    const statement = `mutation AddSampleData1($id: ID!, $value: String!) {
        addSampleData1(id: $id, value: $value) {
          __typename
          id
          value
          datetime
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      value
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AddSampleData1Mutation>response.data.addSampleData1;
  }
  async ListSampleData(): Promise<Array<ListSampleDataQuery>> {
    const statement = `query ListSampleData {
        listSampleData {
          __typename
          id
          value
          datetime
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListSampleDataQuery>>response.data.listSampleData;
  }
  SubscribeToNewMessageListener(
    filter?: ModelSubscriptionTodoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "subscribeToNewMessage">>
  > {
    const statement = `subscription SubscribeToNewMessage($filter: ModelSubscriptionTodoFilterInput) {
        subscribeToNewMessage(filter: $filter) {
          __typename
          id
          value
          datetime
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "subscribeToNewMessage">
      >
    >;
  }

  SubscribeToNewMessage1Listener(
    filter?: ModelSubscriptionTodoFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "subscribeToNewMessage1">
    >
  > {
    const statement = `subscription SubscribeToNewMessage1($filter: ModelSubscriptionTodoFilterInput) {
        subscribeToNewMessage1(filter: $filter) {
          __typename
          id
          value
          datetime
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "subscribeToNewMessage1">
      >
    >;
  }
}
