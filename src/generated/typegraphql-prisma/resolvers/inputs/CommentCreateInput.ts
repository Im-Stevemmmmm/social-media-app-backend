import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { PostCreateOneWithoutCommentsInput } from "../inputs/PostCreateOneWithoutCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CommentCreateInput {
  @TypeGraphQL.Field(_type => PostCreateOneWithoutCommentsInput, {
    nullable: false,
    description: undefined
  })
  post!: PostCreateOneWithoutCommentsInput;
}
