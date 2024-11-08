interface Profile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
  return { ...profile, ...updates };
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(
  JSON.stringify(updateProfile(myProfile, { age: 26 })) ===
    JSON.stringify({ name: "Alice", age: 26, email: "alice@example.com" })
);
