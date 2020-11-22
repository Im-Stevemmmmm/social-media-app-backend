import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateOneWithoutPostsInput } from "../inputs/UserCreateOneWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateWithoutCommentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  content!: string;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  creator!: UserCreateOneWithoutPostsInput;
}
