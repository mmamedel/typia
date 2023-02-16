import typia from "typia";

import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectUndefined = _test_validateClone(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.validateClone(input),
    ObjectUndefined.SPOILERS,
);
