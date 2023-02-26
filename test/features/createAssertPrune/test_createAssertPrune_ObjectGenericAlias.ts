import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createAssertPrune_ObjectGenericAlias = _test_assertPrune(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createAssertPrune<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
