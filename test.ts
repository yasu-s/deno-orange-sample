import { Test, Orange  } from "https://x.nest.land/Orange@0.2.3/mod.ts";
import * as assert from "https://deno.land/std@v0.58.0/testing/asserts.ts";

export class CalcTest {

  constructor() {
    Orange.setOptions(this, {
      testSuiteName: "CalcTest",
      hooks: {
        beforeAll: () => console.log(`beforeAll`),
        afterAll: () => console.log(`afterAll`),
        beforeEach: () => console.log(`beforeEach`),
        afterEach: () => console.log(`afterEach`)
      }
    })
  }

  @Test({ name: "Calc Plus" })
  public calcPlus() {
    assert.assertEquals(2 + 2, 4);
  }

  @Test({ name: "Calc Minus" })
  public calcMinus() {
    assert.assertEquals(4 - 2, 2);
  }
}
