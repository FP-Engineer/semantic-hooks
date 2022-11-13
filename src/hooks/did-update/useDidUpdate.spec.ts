import { renderHook as create, act } from '@testing-library/react-hooks';

import useDidUpdate from './useDidUpdate';

describe('useDidUpdate test suite', () => {

  it('Should not be called on mount', () => {

    let dummy;
    const callback = jest.fn();

    act(() => {
      dummy = create(() => useDidUpdate(callback));
    });
    
    expect(callback).not.toHaveBeenCalled();

    act(() => {
      dummy.rerender();
    });

    expect(callback).toHaveBeenCalled();

    act(() => {
      dummy.unmount();
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('Should only be called if the referenced deps change', () => {

    let dummy;
    const callback = jest.fn();
	const initProp = 'initial';

    act(() => {
      dummy = create(() => useDidUpdate(callback, [initProp]));
    });
    
    expect(callback).not.toHaveBeenCalled();

    act(() => {
      dummy.rerender(initProp);
    });

    expect(callback).not.toHaveBeenCalled();

	act(() => {
		dummy.rerender('updated');
	  });
  
	  expect(callback).toHaveBeenCalled();

    act(() => {
      dummy.unmount();
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
