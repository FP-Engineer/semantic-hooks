import { useEffect, useRef } from 'react';
import { Callback } from '../../types';

export default function useDidUpdate(callback: Callback, references: any[] = []) {

	const isMounted = useRef(false);

	useEffect(() => {

		if (isMounted.current) {
			callback();
		} else {
			isMounted.current = true;
		}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, references);
};
