const carMakers: string[] = ["ford", "chevy", "toyota"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const aCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2025-10-10");
importantDates.push(new Date());
