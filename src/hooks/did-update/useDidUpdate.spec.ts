import { renderHook, act } from '@testing-library/react-hooks';

import useDidUpdate from './useDidUpdate';

describe('useDidUpdate test suite', () => {

	it('Should not be called without deps', () => {

		let dummy;
		const callback = jest.fn();

		act(() => {
			dummy = renderHook(() => useDidUpdate(callback));
		});

		expect(callback).not.toHaveBeenCalled();

		act(() => {
			dummy.rerender();
		});

		expect(callback).not.toHaveBeenCalled();

		act(() => {
			dummy.unmount();
		});

		expect(callback).not.toHaveBeenCalled();
	});

	it('Should only be called if the referenced deps change', () => {

		let dummy;
		const callback = jest.fn();
	  const initialProps = {value: 'initial'};
		const updatedProps = {value: 'updated'};

		act(() => {
			dummy = renderHook((props) => useDidUpdate(callback, [props.value]), {
				initialProps,
			});
		});
    
		expect(callback).not.toHaveBeenCalled();

		act(() => {
			dummy.rerender(initialProps);
		});

		expect(callback).not.toHaveBeenCalled();

	  act(() => {
		  dummy.rerender(updatedProps);
	  });
  
	  expect(callback).toHaveBeenCalled();

		act(() => {
			dummy.unmount();
		});

		expect(callback).toHaveBeenCalledTimes(1);
	});
});
