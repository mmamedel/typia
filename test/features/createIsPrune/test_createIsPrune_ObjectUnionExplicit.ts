import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createIsPrune_ObjectUnionExplicit = _test_isPrune(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createIsPrune<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
