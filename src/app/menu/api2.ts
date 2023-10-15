import { TMenuItem } from "./types"

type TMenuItemWithSubmenu = TMenuItem & {
	submenu: Array<TMenuItem>
}

export const menu: Array<TMenuItemWithSubmenu> = [
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
				target: '/products/1'
			},
			{
				label: 'Product 2',
				target: '/products/2'
			},
			{
				label: 'Product 3',
				target: '/products/3'
			}
		]
	}

]