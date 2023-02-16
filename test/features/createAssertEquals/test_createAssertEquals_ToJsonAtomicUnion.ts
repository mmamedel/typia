import typia from "typia";

import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ToJsonAtomicUnion = _test_assertEquals(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    typia.createAssertEquals<ToJsonAtomicUnion>(),
);
