import typia from "typia";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectUnionExplicit = _test_stringify(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.stringify(input),
);
