import { TMenuItem } from "./types"

type TMenuItemWithNestedSubmenu = TMenuItem & {
	submenu: Array<TMenuItemWithNestedSubmenu>
}

export const menu = [
	{
		label: 'Home',
		target: '/',
		submenu: []
	},
	{
		label: 'About',
		target: '/about',
		submenu: []
	},
	{
		label: 'Contact',
		target: '/contact',
		submenu: []
	},
	{
		label: 'Products',
		target: '/products',
		submenu: [
			{
				label: 'Product 1',
				target: '/products/1',
				submenu: [
					{
						label: 'Product 1.1',
						target: '/products/1/1',
						submenu: []
					},
					{
						label: 'Product 1.2',
						target: '/products/1/2',
						submenu: [
							{
								label: 'Product 1.2.1',
								target: '/products/1/2/1',
								submenu: []
							},
							{
								label: 'Product 1.2.2',
								target: '/products/1/2/2',
								submenu: []
							},
							{
								label: 'Product 1.2.3',
								target: '/products/1/2/3',
								submenu: [
									{
										label: 'Product',
										target: '/products/1/2/3/1',
									}
								]
							}
						]
					},
					{
						label: 'Product 1.3',
						target: '/products/1/3',
						submenu: []
					}
				]
			},
			{
				label: 'Product 2',
				target: '/products/2',
				submenu: [
					{
						label: 'Product 2.1',
						target: '/products/2/1',
						submenu: []
					},
					{
						label: 'Product 2.2',
						target: '/products/2/2',
						submenu: []
					},
					{
						label: 'Product 2.3',
						target: '/products/2/3',
						submenu: []
					}
				]
			},
			{
				label: 'Product 3',
				target: '/products/3',
				submenu: []
			}
		]
	}

]