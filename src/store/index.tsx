import { proxy } from 'valtio';
import { useProxy } from 'valtio/utils';
import { cloneDeep } from 'lodash-es';

export const defaultData = {
  count:0,
};

const state = cloneDeep(defaultData);
const store = proxy(state);

export const useStore = () => {
  return useProxy(store);
};

export function resetData() {
  Object.entries(defaultData).forEach(([key, value]) => {
    store[key] = cloneDeep(value);
  });
}
