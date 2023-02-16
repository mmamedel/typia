import typia from "typia";

import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectGenericUnion = _test_isClone(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.isClone(input),
    ObjectGenericUnion.SPOILERS,
);
