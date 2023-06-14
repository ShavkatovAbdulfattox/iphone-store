import SeliconCase from "../assets/images/cases/iphone12-selicon.png";
import LeatherCase from "../assets/images/cases/iphone12-leather.png";
import GlassCase from "../assets/images/cases/iphone13-glass.png";

// ! ===========================================================
import H_img from "../assets/images/headphones/img1.png";
import H_img2 from "../assets/images/headphones/img2.png";
import H_img3 from "../assets/images/headphones/img3.png";

// ! ===========================================================
import A_img from "../assets/images/airpods/air-img.png";
import A_img2 from "../assets/images/airpods/air-img2.png";
import A_img3 from "../assets/images/airpods/air-img3.png";

export const selectItems = [
  {
    name: "Apple",
    values: [
      "Выбрать модель телефона",
      "IPhone 11",
      "IPhone 11 Pro",
      "IPhone 11 Pro Max",
      "IPhone 12",
      "IPhone 12 Max",
      "IPhone 12 Pro Max",
      "IPhone 13",
      "IPhone 13 Mini",
      "IPhone 13 Max",
      "IPhone 13 Pro Max",
      "IPhone 14",
      "IPhone 14 Max",
      "IPhone 14 Pro Max",
    ],
  },
];

export const iphone12 = [
  {
    type: "Стеклянные",
    img: GlassCase,
  },
  {
    type: "Силиконовые",
    img: SeliconCase,
  },
  {
    type: "Кожаные",
    img: LeatherCase,
  },
];

export const data = {
  airpods: [
    {
      name: "Apple AirPods",
      cost: "120",
      rate: "4.7",
      img: A_img,
      favourite: false,
    },
    {
      name: "GERLAX GH-04",
      cost: "136.5",
      rate: "4.5",
      img: A_img2,
      favourite: false,
    },
    {
      name: "Apple EarPods",
      cost: "30.7",
      rate: "4.5",
      img: A_img3,
      favourite: false,
    },
  ],
  headphones: [
    {
      name: "Apple BYZ S852I",
      cost: "16",
      action: "20",
      rate: "4.7",
      img: H_img,
      favourite: false,
    },
    {
      name: "Apple EarPods",
      cost: "36.5",
      rate: "4.5",
      img: H_img2,
      favourite: false,
    },
    {
      name: "Apple EarPods",
      cost: "60.7",
      action: "",
      rate: "4.5",
      img: H_img3,
      favourite: false,
    },
  ],
};
