import type { Recipe } from '@/types'

export const recipes: Recipe[] = [
	{
		id: '123',
		thumbnail: '/images/spicy-garlic-chicken.jpg',
		datetime: new Date(),
		title: 'Pollo picante al ajo',
		postSlug: 'pollo-picante-al-ajo',
		categories: [2, 3],
		content:
			'## Ingredientes\n### Para el pollo\n- Cubos de pollo (sin hueso) - 300g\n- Dientes de ajo finamente picados - 2\n-Jugo de limón - 1/2 limón\n- Sal - 1 cucharadita\n- Pimienta negra en polvo - 1/2 cucharadita\n- Chile rojo en polvo - 1/2 cucharadita\n\n### Para la salsa\n- Dientes de ajo finamente picados - 2\n- Puré de tomate - 80g\n- Salsa de soja - 1 cucharada\n- Pimienta negra en polvo - 1/2 cucharadita\n- Chile rojo en polvo - 1/2 cucharadita\n- Sal - 1/4 cucharadita\n- Agua - 80g\n\n## Preparación\n### Para el pollo\n1. Poner todos los ingredientes en un recipiente y mezclarlos.\n2. Dejar reposar 10 minutos.\n3. Colocar una sartén a fuego medio, poner algo de aceite y esperar unos segundos.\n4. Una vez caliente el aceite, agregar el pollo previamente sazonado.\n5. Después de 3 minutos dar vuelta los trozos de pollo luego de que estos se doren de un lado.\n6. Retirar luego de 3 minutos (un total de 6 minutos).\n### Para la salsa\n1. Colocar una sartén a fuego medio con un poco de aceite.\n2. Una vez caliente, poner los ajos picados y dorar.\n3. Agregar el puré de tomate, la salsa de soja, la pimienta, el chile en polvo, la sal y el agua.\n4. Mezclar un poco para integrar los ingredientes y agregar el pollo dorado.\n5. Dejar cocinar hasta que la salsa se espese y cubra el pollo.\n6. Decorar con hojas picadas de cilantro fresco y retirar.\n\nServir y disfrutar.',
	},
	{
		id: '124',
		thumbnail: 'https://picsum.photos/600',
		datetime: new Date(),
		title: 'Pizza Margarita',
		postSlug: 'pizza-margarita',
		categories: [1],
	},
	{
		id: '723',
		thumbnail: 'https://picsum.photos/600',
		datetime: new Date(),
		title: 'Pizza Margarita',
		postSlug: 'pizza-margarita',
		categories: [1, 2],
	},
	{
		id: '323',
		thumbnail: 'https://picsum.photos/600',
		datetime: new Date(),
		title: 'Pizza Margarita',
		postSlug: 'pizza-margarita',
		categories: [3, 2],
	},
	{
		id: '153',
		thumbnail: 'https://picsum.photos/600',
		datetime: new Date(),
		title: 'Pizza Margarita',
		postSlug: 'pizza-margarita',
		categories: [3, 1, 2],
	},
]
