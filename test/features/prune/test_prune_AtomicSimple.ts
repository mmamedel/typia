import typia from "typia";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_AtomicSimple = _test_prune(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) => typia.prune(input),
);
