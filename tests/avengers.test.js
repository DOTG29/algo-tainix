import { describe, expect, it } from "vitest";
import { avengers } from "../algos/avengers";

describe("avengers", () => {
    it("test n°1", () => {
        expect(avengers(672, 2, 2, 3, 8)).toBe(166)
    })
})