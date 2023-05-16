import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';

@singleton()
@Store()
export default class CounterStore {
  count = 0;

  /**
   * @description 카운터를 증가시킨다.
   * @author Charles
   * @param {number} [step=1]
   * @memberof CounterStore
   */
  @Action()
  increase(step = 1) {
    this.count += step;
  }

  /**
   * @description 카운터를 감소시킨다.
   * @author Charles
   * @param {number} [step=1]
   * @memberof CounterStore
   */
  @Action()
  decrease(step = 1) {
    this.count -= step;
  }
}
