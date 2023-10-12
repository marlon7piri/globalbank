Crear una nueva aplicación de ReactJS que realice lo siguiente:

1. Tenga un formulario con los siguientes campos:
• Nombre completo
• Fecha de nacimiento (tipo calendario)
• Comentarios
2. Realice las siguientes validaciones:
• Que el nombre no este vacío y que solo pueda ingresar los siguientes caracteres:
o Caracteres alfanuméricos de A-Z (mayúsculas o minúsculas), espacios en blancos
o tildes.

• El calendario le deje ingresar una fecha mínima de 1900-01-01 hasta el día de hoy
menos 18 años.

3. De pasar las validaciones y presione el botón de agregar, aparezca debajo en una lista con el
siguiente formato:
• Una tarjeta (card) con la siguiente información
o Nombre completo
o Fecha de nacimiento en formato dd/mm/yyyy, edad: ## años.
o Comentarios

4. Puede utilizar cualquiera librería de componentes de su conocimiento si así lo desea.
5. Cuando se de refrescar (F5) en el navegador no se pierda los datos. Puede utilizar el session
storage del navegador.
6. De ser posible, el contenido sea responsivo y se ajuste a diferentes dispositivos.
7. Crear pruebas unitarias usando el framework de su preferencia.