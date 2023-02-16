import typia from "typia";

import { TagStep } from "../../structures/TagStep";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TagStep = _test_validate(
    "TagStep",
    TagStep.generate,
    typia.createValidate<TagStep>(),
    TagStep.SPOILERS,
);
