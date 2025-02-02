import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createIs_ArrayRecursive = _test_is(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createIs<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
