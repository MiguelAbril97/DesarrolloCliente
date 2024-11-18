/*

Utiliza un map almacenar información sobre módulos impartidos en el IES de la 
siguiente manera:  ("DWECL", “Desarrollo Web en Entorno Cliente”). 
Añade la información con posterioridad a la creación de la estructura.

Muestra cuántos módulos hay almacenados
Muestra el contenido de la estructura
Devuelve las abreviaturas de todos los módulos guardados
Devuelve el nombre completo de todos los módulos
Consulta si está el módulo "DAW"
Si está, elimínalo.
Ordena alfabéticamente el map según las abreviaturas de los módulos

*/

var asignaturasMap = new Map();

asignaturasMap.set("DWEC","Desarrollo web entorno cliente");
asignaturasMap.set("DWES", "Desarrollo web entorno servidor");
asignaturasMap.set("IG","Interfaces graficas");
asignaturasMap.set("DAW","Despliegue de aplicaciones web");

alert(asignaturasMap.size);

let iterador = [...asignaturasMap.entries()]

alert(iterador.toString());

iterador = [...asignaturasMap.keys()];
alert(iterador.toString());

iterador = [...asignaturasMap.values()];
alert(iterador.toString());

alert(asignaturasMap.has("DAW"));
asignaturasMap.delete("DAW")

iterador = [...asignaturasMap.entries()]

alert(iterador.toString());

iterador.sort();    