import { renderHook as create, act } from '@testing-library/react-hooks';

import useUnmount from './useUnmount';

describe('useUnmount test suite', () => {

  it('Should be called only once throughout the components life cycle', () => {

    let dummy;
    const callback = jest.fn();

    act(() => {
      dummy = create(() => useUnmount(callback));
    });
    
    expect(callback).not.toHaveBeenCalled();

    act(() => {
      dummy.rerender();
    });

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      dummy.unmount();
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
