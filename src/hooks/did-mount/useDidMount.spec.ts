import { renderHook as create, act } from '@testing-library/react-hooks';

import useDidMount from './useDidMount';

describe('useDidMount test suite', () => {

	it('Should be called only once throughout the components life cycle', () => {

		let dummy;
		const callback = jest.fn();

		act(() => {
			dummy = create(() => useDidMount(callback));
		});
    
		expect(callback).toHaveBeenCalled();

		act(() => {
			dummy.rerender();
		});

		expect(callback).toHaveBeenCalledTimes(1);

		act(() => {
			dummy.unmount();
		});

		expect(callback).toHaveBeenCalledTimes(1);
	});
});
