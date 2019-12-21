export const globalFunctions = {
  data: {},

  set(data) {
    this.data = {
      ...this.data,
      ...data,
    };
    Object.keys(this.data).forEach(key => {
      this[`_${key}`] = this.data[key];
    });
  },

  get(key) {
    return this.data[key] || false;
  },

  getData() {
    return this.data;
  },

  init(keys = []) {
    keys.forEach(key => {
      if (this.data[key]) {
        this.data[key]();
      }
    });
  },

  initAll() {
    Object.keys(this.data).forEach(key => {
      this.data[key]();
    });
  },
};
