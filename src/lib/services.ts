export const services = [
  { slug: "pokos-travy", title: "Покос травы", icon: "Sprout", description: "Покос травы и бурьяна триммером или газонокосилкой. От 500 руб/сотка.", price: "от 500 руб/сотка" },
  { slug: "spil-derevev", title: "Спил деревьев", icon: "Axe", description: "Спил и удаление деревьев любой сложности. Арбористы с опытом 10+ лет.", price: "от 500 руб/шт" },
  { slug: "raschistka-uchastka", title: "Расчистка участка", icon: "Trees", description: "Расчистка от деревьев, кустарников и бурьяна под строительство или продажу.", price: "от 3 000 руб/сотка" },
  { slug: "udalenie-pney", title: "Удаление пней", icon: "TreePine", description: "Фрезерование и дробление пней. Корчёвка вручную или трактором.", price: "от 300 руб/см диаметра" },
  { slug: "vyvoz-musora", title: "Вывоз мусора", icon: "Truck", description: "Вывоз травы, веток и порубочных остатков. Контейнеры объёмом 8–27 м³.", price: "от 8 000 руб/контейнер" },
  { slug: "obrezka-kronirovanie", title: "Обрезка и кронирование", icon: "Scissors", description: "Санитарная и формирующая обрезка плодовых и декоративных деревьев.", price: "от 1 500 руб/дерево" },
] as const;

export type Service = (typeof services)[number];
