import { GQLiteralEnum } from "gqliteral";
import { Gen } from "../../generatedTypes";

/**
 * Note: this could also be:
 *
 * GQLiteralEnum("Episode", {
 *   NEWHOPE: 4,
 *   EMPIRE: 5,
 *   JEDI: 6
 * })
 *
 * if we chose to omit the descriptions
 */
export const Episode = GQLiteralEnum<Gen>("Episode", (t) => {
  t.description("One of the films in the Star Wars Trilogy");
  t.member("NEWHOPE", { value: 4, description: "Released in 1977." });
  t.member("EMPIRE", { value: 5, description: "Released in 1980." });
  t.member("JEDI", { value: 6, description: "Released in 1983" });
});

export const MoreEpisodes = GQLiteralEnum<Gen>("MoreEpisodes", (t) => {
  t.mix("Episode");
  t.members(["OTHER"]);
});