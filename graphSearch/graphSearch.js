const team = {
  Tom: {
    name: "Tom",
    sells: ["patatos", "Mashrooms"],
    friends: ["Eve"],
  },
  Eve: {
    name: "Eve",
    sells: ["patatos", "Mashrooms"],
    friends: ["Tom", "Martin", "Karen"],
  },

  Martin: {
    name: "Martin",
    sells: ["tomato", "Mashrooms", "Cocoa"],
    friends: ["Tom"],
  },

  Karen: {
    name: "Karen",
    sells: ["Fish", "Ham"],
    friends: ["Eve"],
  },
};

const search = (item) => {
  const searched = [];
  const queue = team.Tom.friends;
  while (queue.length) {
    const person = queue.shift();
    if (!searched.includes(person)) {
      if (team[person]?.sells.includes(item)) {
        return person;
      } else {
        searched.push(person);
        const newPeaple = team[person].friends.filter(
          (item) => !queue.includes(item)
        );
        queue.push(...newPeaple);
      }
    } else {
      console.log("Skipped");
    }
  }
  return false;
};

console.log(search("Rum"));
