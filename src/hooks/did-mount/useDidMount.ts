import { useEffect } from 'react';
import { Callback } from '../../types';

export default function useDidMount(callback: Callback) {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(callback, []);
};