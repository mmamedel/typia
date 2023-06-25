import typia from "typia";

import { ICollection } from "../../../../structures/ICollection";
import { ObjectSimple } from "../../../../../test/structures/ObjectSimple";
import { createExpressServerAssertBenchmarkProgram } from "../createExpressServerAssertBenchmarkProgram";

createExpressServerAssertBenchmarkProgram(
    typia.createAssert<ICollection<ObjectSimple>>(),
);