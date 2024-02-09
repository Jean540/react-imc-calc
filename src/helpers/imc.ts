export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[];
  yourImc?: number;
};

export const levels: Level[] = [
  { title: "Magreza", color: "#96A3AB", icon: "down", imc: [0, 18.5] },
  { title: "Normal", color: "#0EAD69", icon: "up", imc: [18.6, 24.9] },
  { title: "Sobrepeso", color: "#E2B036", icon: "down", imc: [25, 30] },
  { title: "Obesidade", color: "#C3423F", icon: "down", imc: [30.1, 99] },
];

export const calculateImc = (heigh: number, weight: number): Level | null => {
  const imc: number = weight / heigh ** 2;

  for (let i in levels) {
    if (imc > levels[i].imc[0] && imc < levels[i].imc[1]) {
      let levelCopy: Level = { ...levels[i] };
      levelCopy.yourImc = imc;

      return levelCopy;
    }
  }
  return null;
};
