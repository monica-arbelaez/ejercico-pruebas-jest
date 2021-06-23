import * as app from "./app";
import * as math from "./math";

/*Descripción: Inicialmente se reasigna una función 
(en este caso math.add) a la función del mock, con el 
objetivo de que se pueda llamar al mock en lugar de la 
función original en cualquier lugar en donde se vaya a usar, 
luego se “espia” el llamado de la función, dejando la 
implementación original sin afectar (se observa la 
  comprobación de la función sin ser reemplazada con un mock)
Además se simula la función para mockear su funcionamiento 
(sobrescribiendo), para luego poder restaurar la implementación original.
*/
test("calls math.add", () => {
  // store the original implementation
  const originalAdd = math.add;
  // mock add with the original implementation
  math.add = jest.fn(originalAdd);
  // spy the calls to add
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // override the implementation
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // restore the original implementation
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});