# Ejercicio 7.1.1 – Contador Descontrolado
# 1-Demuestra con console.log que los 6 niveles se ejecutan en cada clic:
(img/cap1.png)
## 2. Profiler – grabar 5 clics
- Se re-renderizan todos los componentes de la lista de 500 usuarios.

## 3. Capturas del Profiler
- [Aquí pega las capturas]

## 4. ¿Se ve lento? ¿Cuántas funciones se ejecutan?
- Sí, va lento; se ejecutan miles de renders por cada clic.

## 5. ¿Son todos los renderizados necesarios? ¿Por qué?
- No, porque la lista de usuarios no ha cambiado y no debería renderizarse.
