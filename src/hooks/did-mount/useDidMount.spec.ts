import { renderHook as create } from '@testing-library/react-hooks';
import { update, unmount, act } from 'react-test-renderer';

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
      update(dummy);
    });

    expect(callback).toHaveBeenCalledTimes(1);

    act(() => {
      unmount(dummy);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
