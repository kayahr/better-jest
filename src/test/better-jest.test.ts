describe("better-jest", () => {
    it("runs jest with exposed garbage collector", () => {
        expect(typeof gc).not.toBe("undefined");
    });

    it("runs jest with arguments from JEST_OPTS environment variable", () => {
        expect((globalThis as unknown as Record<string, string>).jestOptsPresent).toBe("Yes");
    });
});
