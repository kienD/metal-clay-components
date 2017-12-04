import ClayFileCard from '../ClayFileCard';

let component;
let spritemap = 'icons.svg';
let actionItems = [
	{
		label: 'Edit',
		url: '#1',
	},
	{
		label: 'Save',
		url: '#1',
	},
];

describe('ClayFileCard', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with classes', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			elementClasses: 'my-custom-class',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with id', () => {
		component = new ClayFileCard({
			spritemap: spritemap,
			id: 'myId',
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with actionItems', () => {
		component = new ClayFileCard({
			actionItems: actionItems,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a selected ClayFileCard', () => {
		component = new ClayFileCard({
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a disabled ClayFileCard', () => {
		component = new ClayFileCard({
			disabled: true,
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with input `name`', () => {
		component = new ClayFileCard({
			inputName: 'checkbox01',
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with input `value`', () => {
		component = new ClayFileCard({
			inputValue: 'checkbox',
			selectable: true,
			selected: true,
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with icon', () => {
		component = new ClayFileCard({
			icon: 'documents',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with label', () => {
		component = new ClayFileCard({
			labels: [
				{
					label: 'Approved',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with labelStyle `danger color`', () => {
		component = new ClayFileCard({
			labels: [
				{
					label: 'Approved',
					style: 'danger',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with labelStyle `info color`', () => {
		component = new ClayFileCard({
			labels: [
				{
					label: 'Approved',
					style: 'info',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with labelStyle `secondary color`', () => {
		component = new ClayFileCard({
			labels: [
				{
					label: 'Approved',
					style: 'secondary',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with labelStyle `success color`', () => {
		component = new ClayFileCard({
			labels: [
				{
					label: 'Approved',
					style: 'success',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with labelStyle `warning color`', () => {
		component = new ClayFileCard({
			labels: [
				{
					label: 'Approved',
					style: 'warning',
				},
			],
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with subtitle', () => {
		component = new ClayFileCard({
			subtitle: 'Author Action',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with title', () => {
		component = new ClayFileCard({
			title: 'empty-background.png',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with type', () => {
		component = new ClayFileCard({
			type: 'DOC',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with type `danger color`', () => {
		component = new ClayFileCard({
			type: 'DOC',
			typeStyle: 'danger',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with type `dark color`', () => {
		component = new ClayFileCard({
			type: 'DOC',
			typeStyle: 'dark',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with type `info color`', () => {
		component = new ClayFileCard({
			type: 'DOC',
			typeStyle: 'info',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with type `light color`', () => {
		component = new ClayFileCard({
			type: 'DOC',
			typeStyle: 'light',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with type `primary color`', () => {
		component = new ClayFileCard({
			type: 'DOC',
			typeStyle: 'primary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with type `secondary color`', () => {
		component = new ClayFileCard({
			type: 'DOC',
			typeStyle: 'secondary',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with type `success color`', () => {
		component = new ClayFileCard({
			type: 'DOC',
			typeStyle: 'success',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with type `warning color`', () => {
		component = new ClayFileCard({
			type: 'DOC',
			typeStyle: 'warning',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a ClayFileCard with url', () => {
		component = new ClayFileCard({
			url: '#1',
			spritemap: spritemap,
		});

		expect(component).toMatchSnapshot();
	});
});