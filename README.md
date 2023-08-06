# Patrón de diseño: Render props

El patrón de diseño Render Props es una técnica comúnmente utilizada en React para compartir lógica y funcionalidades entre componentes. Fue popularizado por Michael Jackson (no el cantante, sino el desarrollador web) en su blog y es una alternativa a otros patrones como el patrón de componentes de orden superior (Higher-Order Components o HOCs) y los hooks.

El concepto fundamental detrás de Render Props es que un componente **(llamado proveedor)** expone una o varias propiedades que son funciones, y estos componentes pueden ser reutilizados en otros componentes (llamados consumidores). Los consumidores utilizan esas funciones para obtener los datos o la funcionalidad que el proveedor proporciona.