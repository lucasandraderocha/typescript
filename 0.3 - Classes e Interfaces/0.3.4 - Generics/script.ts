// function add<T>(a: T, b: T) {
//   return { a, b };
// }

// console.log(add<number[]>([0, 1, 2, 3, 4], [5, 6, 7, 8, 9]));
// console.log(add<number>(8, 4));

function linkedList<T>() {
  interface NodeLink<T> {
    data: T;
    next: NodeLink<T> | null;
  }

  interface List<T> {
    head: NodeLink<T> | null;
    tail: NodeLink<T> | null;
  }

  interface ResultList<T> {
    message: object;
    target: T;
    list: List<T> | unknown;
  }

  const list: List<T> = {
    head: null,
    tail: null,
  };

  function createNode(data: T, next: NodeLink<T> | null = null): NodeLink<T> {
    return { data, next };
  }
  function resultList(
    message: object,
    target: T,
    list?: List<T>
  ): ResultList<T> {
    return {
      message,
      target,
      list,
    };
  }

  function appendNode(data: T): ResultList<T> {
    let newNode = createNode(data);
    if (list.tail) {
      list.tail.next = newNode;
    } else {
      list.head = newNode;
    }

    list.tail = newNode;

    return resultList(
      {
        Success: "Appended an item successfully!",
      },
      data,
      list
    );
  }

  function prependNode(data: T): ResultList<T> {
    let n = list.head;
    let newNode = createNode(data);
    if (!list.tail) {
      list.head = newNode;
      list.tail = newNode;
    }
    newNode.next = n;
    list.head = newNode;
    return resultList(
      {
        Sucess: "Prepended an item successfully",
      },
      data,
      list
    );
  }

  function searchNode(data: T): ResultList<T> {
    let n = list.head;

    if (!list.tail) {
      return resultList(
        {
          Error: "Your list is empty.",
        },
        data,
        list
      );
    }
    while (n !== null && n.data !== data) {
      n = n.next;
    }

    if (!n) {
      return resultList(
        {
          Error: "Your item doesn't exist.",
        },
        data,
        list
      );
    }

    return resultList(
      {
        Success: "Your item has been reached.",
        Item: n,
      },
      data,
      list
    );
  }

  function removeNode(data: T): ResultList<T> {
    let n = list.head;
    if (n?.data === data) {
      if (list.head === list.tail) {
        list.head = null;
        list.tail = null;
        return resultList(
          {
            Success: "Your list is fully empty.",
            Item: n,
          },
          data,
          list
        );
      } else {
        list.head = n.next;
        return resultList(
          {
            Success: "Your item has been successfully deleted.",
            Item: n,
          },
          data,
          list
        );
      }
    }

    while (n?.next !== null && n?.next.data !== data) {
      if (typeof n?.next !== "undefined") n = n?.next;
    }

    if (n.next !== null) {
      if (n.next === list.tail) {
        list.tail = n;
      }
      n.next = n?.next.next;
      return resultList(
        {
          Success: "Your item has been successfully deleted",
          Item: n,
        },
        data,
        list
      );
    }
    return resultList(
      {
        Error: "your item doesn't exist",
      },
      data,
      list
    );
  }

  function* transverseNode(data: NodeLink<T> | null) {
    let n = data;
    if (n) {
      while (n !== null) {
        yield n?.data;
        n = n?.next;
      }
    }
  }

  return {
    get list() {
      return list;
    },
    append: (data: T) => appendNode(data),
    prepend: (data: T) => prependNode(data),
    search: (data: T) => searchNode(data),
    remove: (data: T) => removeNode(data),
    transverse: () => transverseNode(list.head),
  };
}

const { list, append, prepend, search, remove, transverse } =
  linkedList<string>();

append("foo");
append("baz");
append("thud");
append("qux");
append("quux");
prepend("bar");
for (let item of [...transverse()]) {
  console.log("Transversed Item: ", item);
}
console.log("Search: ", search("ba"));
console.log("Remove: ", remove("quux"));
console.log("List: ", list);
