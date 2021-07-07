//Error Parser

interface GraphQLErrorResponse {
    name: String,
    message: string,
    response: any,
    graphQLErrors: [GraphQLError]
}

interface GraphQLError {
    message: String,
    path: [String],
    extensions: any
}

export enum KnownErrors {
    NO_DATA_FOUND = 1,
    FORBIDDEN,
    UNKNOWN,
}

//takes the very first error in graphql response and run through a switch case , return a useful KnownErrors enum
export function parseGQLError(input: GraphQLErrorResponse): KnownErrors {

    const { graphQLErrors } = input;
    if (graphQLErrors.length > 0) {
        const gqlError = graphQLErrors[0];

        switch (gqlError.message) {
            case "mongo: no documents in result":
                return KnownErrors.NO_DATA_FOUND;
        }
    }

    return KnownErrors.UNKNOWN;
}