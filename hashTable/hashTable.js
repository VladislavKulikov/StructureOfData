class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size).fill(null).map(() => []);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      console.log(1);
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return;
      }
    }

    return undefined;
  }
}

const table = new HashTable(8);
table.set("1123123123", 1);
table.set("asda3112312312332sdas", 2);
table.set("1123123123asdasd", 3);
table.set("asdasdaasdsads", 4);
table.set("112312312asss3", 5);
table.set("asdasdasaaa", 6);
table.set("112312312asda3", 7);
table.set("asdasdaasdasds", 9);
console.log(table.get("asdasdaasdasds"));
