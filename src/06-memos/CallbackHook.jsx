import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    // La función sabe que internamente toma el valor actaul del state y le sumará 1.
    // Counter + 1 no funciona --> llamaría todo el rato a setCounter(10 + 1).
    setCounter((c) => c + value);
  }, []);

  //   Las funciones y/o objetos en js siempre apuntan a posiciones en memoria diferentes.
  //   Cada vez que el componente se vuelve a dibujar la función es diferente, es decir, ubicada en otro lugar en memoria.
  // const incrementFather = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
