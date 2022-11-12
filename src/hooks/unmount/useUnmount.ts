import { useEffect } from 'react';
import { Callback } from '../../types';

export default function useUnmount(callback: Callback) {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => callback, []);
};