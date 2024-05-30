const arr = [
  {
    mode: "Vivo",
    ram: "6GB",
    date: 2022,
  },
  {
    mode: "Oppo",
    ram: "4GB",
    date: 2021,
  },
  {
    mode: "Iqooo",
    ram: "8GB",
    date: 2023,
  },
  {
    mode: "Apple",
    ram: "6GB",
    date: 2022,
  },
  {
    mode: "Samsung",
    ram: "4GB",
    date: 2023,
  },
  {
    mode: "One plus",
    ram: "6GB",
    date: 2023,
  },
];

const mobiles = arr.filter((mobile) => mobile.date > 2022);
console.log(mobiles);
