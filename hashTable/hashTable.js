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

  find(callback) {
    for (let i = 0; i < this.size; i++) {
      const bucket = this.table[i];
      for (let j = 0; j < bucket.length; j++) {
        const [key, value] = bucket[j];
        if (callback(value, key)) return value;
      }
    }
  }
}

const table = new HashTable(2);
table.set("1123123123", 1);
table.set("asdasdas", 2);
console.log(table.get("asdasdas"));
