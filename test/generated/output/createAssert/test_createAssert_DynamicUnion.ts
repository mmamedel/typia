import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_createAssert_DynamicUnion = _test_assert(
    "DynamicUnion",
    DynamicUnion.generate,
    (input: any): DynamicUnion => {
        const $guard = (typia.createAssert as any).guard;
        const $join = (typia.createAssert as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is DynamicUnion => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                false === _exceptionable ||
                Object.keys(input).every((key) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/^-?\d+\.?\d*$/).test(key))
                        return (
                            "string" === typeof value ||
                            $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "string",
                                value: value,
                            })
                        );
                    if (RegExp(/^(prefix_(.*))/).test(key))
                        return (
                            "string" === typeof value ||
                            $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "string",
                                value: value,
                            })
                        );
                    if (RegExp(/((.*)_postfix)$/).test(key))
                        return (
                            "string" === typeof value ||
                            $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "string",
                                value: value,
                            })
                        );
                    if (
                        RegExp(
                            /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                        ).test(key)
                    )
                        return (
                            ("number" === typeof value &&
                                Number.isFinite(value)) ||
                            $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "number",
                                value: value,
                            })
                        );
                    return true;
                });
            return (
                (("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<DynamicUnion>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
    DynamicUnion.SPOILERS,
);
