# Actividad 1: Sistema de Triage y Diagnóstico Médico en JavaScript

## Descripción
Este repositorio contiene un script ejecutado en Node.js que simula el flujo de atención clínica de un paciente, desde su registro de ingreso y evaluación de signos vitales, hasta la revisión de su historial médico y su eventual alta.

El proyecto fue desarrollado como parte de las actividades prácticas para afianzar los conceptos fundamentales de JavaScript, enfocándose en la validación de datos globales, control de flujo y manipulación de estructuras de datos.

## 🛠️ Tecnologías y Herramientas
* **Lenguaje:** JavaScript (ES6+)
* **Entorno de Ejecución:** Node.js

## ✅ Requisitos Técnicos Implementados
El código fuente (`Actividad.js`) fue diseñado para cumplir de manera estricta con los siguientes requerimientos lógicos:

* **Gestión de Variables:** Implementación de 12 variables globales utilizando al menos 5 tipos de datos distintos (`String`, `Number`, `Boolean`, `Date`, y `Array`).
* **Modularidad:**
  * Una función tradicional (`procesarPaciente`) encargada del triage inicial.
  * Una *arrow function* (`diagnosticarPaciente`) encargada del análisis del historial clínico.
* **Lógica y Operadores:** Uso integral de operadores lógicos (`&&`), relacionales (`>`), aritméticos (`++`) y de igualdad estricta (`===`).
* **Control de Flujo (Condicionales):** * Evaluación de signos vitales mediante `if/else`.
  * Clasificación del motivo de consulta utilizando la estructura `switch`.
* **Estructuras Repetitivas (Ciclos):**
  * Uso de un ciclo `for` para iterar sobre el arreglo de alergias y buscar coincidencias.
  * Uso de un ciclo `while` para recorrer e imprimir el historial de tratamientos previos.

## 🚀 Instrucciones de Ejecución

Para correr este script en tu máquina local, asegúrate de tener [Node.js](https://nodejs.org/) instalado.

1. Clona este repositorio.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando:

```bash
node Actividad.js
