const treeFactory = require("../treeFactory");

describe("tree", () => {
  test("should have property representing the data stored", () => {
    const myTree = treeFactory();
    expect(myTree).toHaveProperty("data", {});
  });
  test("has getBranch method that searches the tree recursively", () => {
    const myTree = treeFactory();
    myTree.data = {
      animals: {
        mammals: { primates: { humans: {} } },
        reptiles: { lizards: {}, frogs: {} },
      },
    };
    expect(myTree.getBranch("animals")).toEqual({
      mammals: { primates: { humans: {} } },
      reptiles: { lizards: {}, frogs: {} },
    });
    expect(myTree.getBranch("reptiles")).toEqual({
      lizards: {},
      frogs: {},
    });
    expect(myTree.getBranch("frogs")).toEqual({});
  });
  test("has pathTo method that returns path to first instance of a given node", () => {
    const myTree = treeFactory();
    myTree.data = {
      animals: {
        mammals: { primates: { humans: {} } },
        reptiles: { lizards: {}, frogs: {} },
      },
      food: { veg: { courgette: {} } },
    };
    expect(myTree.pathTo("animals")).toEqual(["animals"]);
    expect(myTree.pathTo("mammals")).toEqual(["animals", "mammals"]);
    expect(myTree.pathTo("humans")).toEqual([
      "animals",
      "mammals",
      "primates",
      "humans",
    ]);
    expect(myTree.pathTo("frogs")).toEqual(["animals", "reptiles", "frogs"]);
    expect(myTree.pathTo("courgette")).toEqual(["food", "veg", "courgette"]);
  });
  test("should have addChild method taking parent as second argument, default being root", () => {
    const myTree = treeFactory();
    myTree.addChild("hobbies");
    expect(myTree.data).toEqual({
      hobbies: {},
    });
  });
  test("addChild can add children to children", () => {
    const myTree = treeFactory();
    myTree.addChild("hobbies");
    myTree.addChild("swimming", "hobbies");
    myTree.addChild("breast stroke", "swimming");
    expect(myTree.data).toEqual({
      hobbies: {
        swimming: { "breast stroke": {} },
      },
    });
  });
  test("addChild can add children to siblings", () => {
    const myTree = treeFactory();
    myTree.addChild("hobbies");
    myTree.addChild("swimming", "hobbies");
    myTree.addChild("piano", "hobbies");
    myTree.addChild("front crawl", "swimming");
    myTree.addChild("beethoven", "piano");
    expect(myTree.data).toEqual({
      hobbies: {
        swimming: { "front crawl": {} },
        piano: { beethoven: {} },
      },
    });
  });
  test("isParent method checks if first arg is the immediate parent of second", () => {
    const myTree = treeFactory();
    myTree.addChild("hobbies");
    myTree.addChild("swimming", "hobbies");
    myTree.addChild("piano", "hobbies");
    myTree.addChild("front crawl", "swimming");
    myTree.addChild("beethoven", "piano");
    expect(myTree.isParent("piano", "beethoven")).toBe(true);
    expect(myTree.isParent("front crawl", "hobbies")).toBe(false);
  });
  test("isDescendant method checks if first arg is descended from second", () => {
    const myTree = treeFactory();
    myTree.addChild("hobbies");
    myTree.addChild("swimming", "hobbies");
    myTree.addChild("piano", "hobbies");
    myTree.addChild("front crawl", "swimming");
    myTree.addChild("beethoven", "piano");
    expect(myTree.isDescendant("beethoven", "hobbies")).toBe(true);
    expect(myTree.isDescendant("front crawl", "piano")).toBe(false);
  });
  test("isRoot method checks if argument is the root node", () => {
    const myTree = treeFactory();
    myTree.addChild("hobbies");
    myTree.addChild("swimming", "hobbies");
    expect(myTree.isRoot("swimming")).toBe(false);
    expect(myTree.isRoot("hobbies")).toBe(false);
    expect(myTree.isRoot(myTree.data)).toBe(true);
  });
  test("hasSiblings method check if all arguments are siblings of first", () => {
    const frodo = treeFactory();
    frodo.addChild("acquaintances");
    frodo.addChild("friends", "acquaintances");
    frodo.addChild("enemies", "acquaintances");
    frodo.addChild("Gandalf", "friends");
    frodo.addChild("Bilbo", "friends");
    frodo.addChild("Aragorn", "friends");
    frodo.addChild("Sauron", "enemies");
    frodo.addChild("Durin's Bane", "enemies");
    expect(frodo.hasSiblings("Gandalf", "Bilbo")).toBe(true);
    expect(frodo.hasSiblings("Gandalf", "Bilbo", "Aragorn")).toBe(true);
    expect(frodo.hasSiblings("Sauron", "Durin's Bane")).toBe(true);
    expect(frodo.hasSiblings("Sauron", "Gandalf")).toBe(false);
    expect(frodo.hasSiblings("friends", "enemies")).toBe(true);
    expect(frodo.hasSiblings("Sauron", "enemies")).toBe(false);
  });
  test("isLeaf returns true if node has no children", () => {
    const myTree = treeFactory();
    myTree.addChild("hobbies");
    myTree.addChild("swimming", "hobbies");
    myTree.addChild("piano", "hobbies");
    myTree.addChild("front crawl", "swimming");
    myTree.addChild("beethoven", "piano");
    expect(myTree.isLeaf("hobbies")).toBe(false);
    expect(myTree.isLeaf("beethoven")).toBe(true);
  });
  test("breadthFirstSearch method finds the target", () => {
    const myTree = treeFactory();
    myTree.data = {
      1: { 2: { 3: { 4: { 5: {} } } } },
      2: { 3: { 4: { 5: { 6: {} } } } },
    };
    function greaterThanFive(element) {
      return +element > 5;
    }
    function greaterThanSix(element) {
      return +element > 6;
    }
    expect(myTree.breadthFirstSearch(greaterThanFive)).toBe("6");
    expect(myTree.breadthFirstSearch(greaterThanSix)).toBe(false);
  });
  test("depthFirstSearch method finds the target", () => {
    const myTree = treeFactory();
    myTree.data = {
      1: { 2: { 3: { 4: { 5: {} } } } },
      2: { 3: { 4: { 5: { 6: {} } } } },
    };
    function greaterThanFive(element) {
      return +element > 5;
    }
    function greaterThanSix(element) {
      return +element > 6;
    }
    expect(myTree.depthFirstSearch(greaterThanFive)).toBe("6");
    expect(myTree.depthFirstSearch(greaterThanSix)).toBe(false);
  });
  test("breadthFirstSearch and depthFirstSearch find the correct targets", () => {
    const names = treeFactory();
    names.data = {
      alex: { bernie: { courtney: {} } },
      dale: { kimberley: { pete: {} } },
    };
    function longerThanSix(name) {
      return name.length > 6;
    }
    expect(names.breadthFirstSearch(longerThanSix)).toBe("kimberley");
    expect(names.depthFirstSearch(longerThanSix)).toBe("courtney");
  });
});
