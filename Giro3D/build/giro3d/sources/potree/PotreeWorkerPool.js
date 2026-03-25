/**
 * Copyright (c) 2015-2018, IGN France.
 * Copyright (c) 2018-2025, Giro3D team.
 * SPDX-License-Identifier: MIT
 */

import WorkerPool from '../../utils/WorkerPool';
function createWorker() {
  const worker = new Worker(new URL('./worker.js', import.meta.url), {
    type: 'module'
  });
  return worker;
}
export default class PotreeWorkerPool extends WorkerPool {
  static _singleton = null;
  static async create() {
    this._singleton = new PotreeWorkerPool({
      createWorker
    });
    return this._singleton;
  }
  static async get() {
    if (this._singleton != null) {
      return this._singleton;
    }
    return this.create();
  }
}