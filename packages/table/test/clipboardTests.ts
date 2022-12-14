/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// import { expect } from "chai";

import { Clipboard } from "../src/common/clipboard";

// HACKHACK: see https://github.com/palantir/blueprint/issues/5175
describe.skip("Clipboard", () => {
    let focusableElement: HTMLDivElement | undefined;

    beforeEach(() => {
        focusableElement = document.createElement("div");
        focusableElement.setAttribute("tabIndex", "0");
        document.body.append(focusableElement);
        focusableElement.focus();
        focusableElement.click();
    });

    afterEach(() => {
        document.body.removeChild(focusableElement!);
    });

    it("copies cells", async () => {
        return Clipboard.copyCells([
            ["A", "B", "C"],
            ["D", "E", "F"],
        ]);
    });

    it("copies strings", async () => {
        return Clipboard.copyString(`
            Hello,
            World!
        `);
    });
});
