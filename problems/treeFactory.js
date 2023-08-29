// create a factory function that implements a tree data structure

const tree = {
  getBranch: function getBranch(key, branch = this.data) {
    if (branch[key]) {
      return branch[key];
    } else {
      for (let child in branch) {
        if (getBranch(key, branch[child])) {
          return getBranch(key, branch[child]);
        }
      }
    }
  },
  pathTo: function pathTo(target, branch = this.data, route = []) {
    for (const child in branch) {
      if (child === target) {
        route.push(child);
        return route;
      } else {
        const newRoute = [...route];
        newRoute.push(child);
        const finalPath = pathTo(target, branch[child], newRoute);
        if (finalPath) {
          return finalPath;
        }
      }
    }
  },
  addChild: function (child, parent = this.data) {
    if (Object.keys(this.data).length === 0) {
      this.data[child] = {};
    } else {
      const route = tree.pathTo(parent, this.data);
      let branch = this.data;
      for (let node of route) {
        if (route.indexOf(node) === route.length - 1) {
          branch[node][child] = {};
        } else {
          branch = branch[node];
        }
      }
    }
  },
  isParent: function (parent, child) {
    const path = tree.pathTo(child, this.data);
    return path[path.length - 2] === parent;
  },
  isDescendant: function (descendant, ancestor) {
    const path = tree.pathTo(descendant, this.data);
    return path.includes(ancestor);
  },
  isRoot: function (node) {
    return node === this.data;
  },
  hasSiblings: function (node, ...siblings) {
    nodeParentPath = tree.pathTo(node, this.data);
    nodeParentPath.pop();
    for (const sibling of siblings) {
      siblingParentPath = tree.pathTo(sibling, this.data);
      siblingParentPath.pop();
      if (siblingParentPath.toString() !== nodeParentPath.toString())
        return false;
    }
    return true;
  },
  isLeaf: function (node) {
    return Object.keys(tree.getBranch(node, this.data)).length === 0;
  },
  breadthFirstSearch: function (func, branches = [this.data]) {
    const newBranches = [];
    if (branches.length === 0) return false;
    for (const branch of branches) {
      for (const child in branch) {
        if (func(child)) return child;
        if (Object.keys(branch[child]).length > 0) {
          newBranches.push(branch[child]);
        }
      }
    }
    return tree.breadthFirstSearch(func, newBranches);
  },
  depthFirstSearch: function (func, branch = this.data) {
    for (const child in branch) {
      if (func(child)) return child;
      if (Object.keys(branch[child]).length === 0) continue;
      else {
        const finished = tree.depthFirstSearch(func, branch[child]);
        if (finished) return finished;
        continue;
      }
    }
    return false;
  },
};

function treeFactory() {
  const myTree = Object.create(tree);
  myTree.data = {};
  return myTree;
}

module.exports = treeFactory;
