import {Dispatch, SetStateAction} from 'react';

export type UseStateResult<T> = [T, Dispatch<SetStateAction<T>>];
