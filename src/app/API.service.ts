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
  value: string;
  datetime?: string | null;
};

export type SampleData1 = {
  __typename: "SampleData1";
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
  value: string;
  datetime?: string | null;
};

export type AddSampleData1Mutation = {
  __typename: "SampleData1";
  value: string;
  datetime?: string | null;
};

export type ListSampleDataQuery = {
  __typename: "SampleData";
  value: string;
  datetime?: string | null;
};

export type ListSampleData1Query = {
  __typename: "SampleData1";
  value: string;
  datetime?: string | null;
};

export type SubscribeToNewMessageSubscription = {
  __typename: "SampleData";
  value: string;
  datetime?: string | null;
};

export type SubscribeToNewMessage1Subscription = {
  __typename: "SampleData1";
  value: string;
  datetime?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async AddSampleData(value: string): Promise<AddSampleDataMutation> {
    const statement = `mutation AddSampleData($value: String!) {
        addSampleData(value: $value) {
          __typename
          value
          datetime
        }
      }`;
    const gqlAPIServiceArguments: any = {
      value
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AddSampleDataMutation>response.data.addSampleData;
  }
  async AddSampleData1(value: string): Promise<AddSampleData1Mutation> {
    const statement = `mutation AddSampleData1($value: String!) {
        addSampleData1(value: $value) {
          __typename
          value
          datetime
        }
      }`;
    const gqlAPIServiceArguments: any = {
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
          value
          datetime
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListSampleDataQuery>>response.data.listSampleData;
  }
  async ListSampleData1(): Promise<Array<ListSampleData1Query>> {
    const statement = `query ListSampleData1 {
        listSampleData1 {
          __typename
          value
          datetime
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListSampleData1Query>>response.data.listSampleData1;
  }
  SubscribeToNewMessageListener(
    filter?: ModelSubscriptionTodoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "subscribeToNewMessage">>
  > {
    const statement = `subscription SubscribeToNewMessage($filter: ModelSubscriptionTodoFilterInput) {
        subscribeToNewMessage(filter: $filter) {
          __typename
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
